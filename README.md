# Parrot AI bypass
A runthrough on flaws I discovered in tryparrotai.com that allows you to access all pro features. This writeup is quite easy to follow through and actions covered are quite trivial.
### Disclaimer
> I am not responsible for your actions committed with the information discussed here. This article is made for educational purposes only.

# Table of Contents
1. [What is Parrot AI](#1)
2. [Figuring out "remove watermark" can be bypassed (19/1/2024)](#2)
3. [Modifying the Javascript + bypassing "remove watermark" (19/1/2024)](#3)
4. [Modifying the Javascript + bypassing daily limit (19/1/2024)](#4)
5. [Modifying the Javascript + bypassing character limit (19/1/2024)](#5)
6. [Non-video bypasses](#6)
7. [Conclusion](#6)

## What is Parrot AI <a name="1"></a>
Scroll on any short-form content and you are bound to see funny AI generated videos with celebrities. Take a look at the video description and there is almost always an ad promoting Parrot AI.
### Video example
https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/58b6f5be-2055-4a4c-9df9-1da66924c3eb

The platform allows for users to create funny AI voice generated videos. Some celebrities have support for deepfake videos so you can have a deepfake video to match the audio. All other voices are user uploaded and only contain audio.

### Video example
https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/36b5f816-fc8d-4573-918c-88b2fa699910

## Finding a bypass (19/1/2024) <a name="2"></a>
I was searching for a platform to make funny AI videos with. Parrot AI was by far the cheapest site and I started making videos. It did not take long for me to reach my daily limit where I was prompted to purchase a subscription.
### Daily limit reached
![Screenshot 2024-04-19 225346](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/d30cb3ba-25c0-4373-9874-14792173c206)
### Skip watermark (requires subscription)
![Screenshot 2024-04-19 230057](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/ef244ae9-e370-486d-b030-c8ea8a149011)
### Character limit
![Screenshot 2024-04-19 235425](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/69841b62-5788-4acb-9274-999d68d44bb1)

I enabled my VPN and realised the limit was IP based. Toggling your VPN would bypass the limit. I was not satisfied however, I wanted to see if I could somehow bypass the daily limit, not for malicious reasons but for fun! Delving into the network tab I quickly found the request where the prompt was submitted to the server.
### Network tab
![Screenshot 2024-04-19 225754](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/2a406cd5-8410-482d-931a-3213b1d3be1c)

The last POST request to the api/create endpoint was the one. A look inside the payload and we could see what data was being passed in to the request.
### Payload
![Screenshot 2024-04-19 230004](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/238dd901-9d5d-48f7-b80e-9235b2d05717)

I noticed the client was sending a boolean value "skipWatermark", I thought to test what would happen if I were to modify the request to see if I could bypass the remove watermark feature. I did not expect much to come from this as I assumed that the server verified if the user was pro and then permitted the skipWatermark being true to remove the watermark from the video.
### Copying the request into Postman
![Screenshot 2024-04-19 230418](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/7c6cb366-827a-4c32-91ca-e49bd3d71787)
### Setting the "skipWatermark" variable to "true" in the payload and sending the request
![Screenshot 2024-04-19 230808](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/176491de-70ef-41f5-9e07-0a75d5aca0c4)

Seems like it worked! I recieved a success response after modifying the "skipWatermark" variable even without being signed in. After this I knew there was more I could do, this is when I delved into the Javascript.

## Modifying the Javascript + bypassing "remove watermark" <a name="3"></a>
My next step was to find where the request to create a video was initiated from within the Javascript. Again, this was trivial. Simply click on the "Initator" value on the request.
### Request
![Screenshot 2024-04-19 231515](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/6454ba49-8d37-4325-8030-f70ed17f2877)

Clicking on the Initiator value takes us to a Javascript file with the prefix "[name]". The code is attatched in this repsitory [here](code.js). Luckily for us this code is not obfuscated meaning we can easily understand the JS and do not have to do any deobfuscating.
### Code for the request to create a new video
![Screenshot 2024-04-19 232356](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/a9ad041a-da82-47e7-add0-716681e42b3f)

We can see the "skipWatermark" having a value of "n". We can do a CTRL + F and search for "n = " to find when this variable was assigned.
### Assigning of "n"
![Screenshot 2024-04-19 232645](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/f78b588e-a39c-43ea-bc04-062878be1221)

We can see that "n" is calculated based on whether the "paid" flag is set to true. We can just ignore all of this and modify the request to always send "skipWatermark" as "true".
### Setting "skipWatermark" to "true" in the request
![Screenshot 2024-04-19 232931](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/ec77becd-4c89-4c57-86ed-7946f63c6763)

Through overriding the Javascript file we can save our changes. After making a new video we can see there is no watermark. Okay! So we have bypassed the remove watermark feature but I feel like there is more we can do.

## Modifying the Javascript + bypassing daily limit <a name="4"></a>
Unlike the remove watermark feature, the daily limit is not calculated on the client side. This is obviously because the server needs to check your IP to see if you have reached your limit. Trying to create a video on Postman with a limited IP returns us an error code 429 with the message "Generation limit reached".
### Response after reaching daily limit.
![Screenshot 2024-04-19 233741](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/24625c88-8bd8-4764-8521-2a554d77310e)

We can assume that the server checks if the user is pro if not then checks to see if their IP has reached their limit. Therefore in order to bypass this limit, we must convince the server that we are pro. In order to do this, first we must determine how the server determines if we are pro. Having a look into the payload of the request to create a video we can see the "userId" field is set to "webAnon". Assuming we were signed in, the "userId" field would change to a value the server could recognize and would act as our authentication.

### Payload recap
![Screenshot 2024-04-19 230004](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/238dd901-9d5d-48f7-b80e-9235b2d05717)

In the request we can see that the "userId" is set to "s". Doing a CTRL + F with "s = " takes us here.

### s =
![Screenshot 2024-04-19 234556](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/b5bbbd01-1267-4b5e-b766-dce79fa4cfb9)

```js
let s = "webAnon", l = u.Z.get("parrotAiProUser");`
```

Observing this Javascript we can see that the default "userId" is webAnon. The code then queries for "parrotAiProUser" which likely returns the user id IF the user is logged in. If the user is not logged in it returns nothing. This result is stored in l.

```js
l && (s = "proWeb" + l),
console.log("userId: ", s);
```

This Javascript checks if l is not an empty string. If not then the "l" variable is concatentated with the "s" variable (the userId). This would form something like this if the user was logged in with pro "proWebxxxxxxxxx". It was then where I had a silly idea. Perhaps the server only checks the prefix of the userId to see if it is "pro". If that is the prefix then the server assumes the user is pro. Lets try it!

### Trying it
![Screenshot 2024-04-19 235151](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/f4952cdd-37bf-4682-a883-41fd774051e9)

Wow! It seems like it worked, the video was sent through and we were not hit with a generation limit. We can now modify the request code to always prefix the user id with a pro or just make the user id "pro", that works too.

### Modifying the request to always be pro
![Screenshot 2024-04-20 000855](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/81605e50-6b3b-4c75-848e-4acf31f17e25)

## Modifying the Javascript + bypassing character limit <a name="5"></a>
Now, the character limit. Attempting to create a prompt too long gives us this alert. The fact that this is an alert is quite sketchy. This was a client-side check as it should be.

![Screenshot 2024-04-19 235543](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/520c4155-53d0-4011-a630-f25bdc560bd0)

I then searched the Javascript for the message in the alert "Oops. You exceeded". This brought me here.

### Character limit check
![Screenshot 2024-04-19 235801](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/95216892-b2c4-4258-a298-318c261afa32)

This code runs when the varaible is changed hence "onChange". The length of the prompt is checked and if it exceeds 100 then an alert is thrown. Quite comedically, we can just commenet out the if statement removing the check.

### Commenting out the check
![Screenshot 2024-04-19 235919](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/5daba4a6-5db8-44c6-9215-5006ec4b9289)

![Screenshot 2024-04-20 000000](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/f313b338-8803-4868-bcce-834c72b808ac)

What do you know, we can now type unlimited characters into the prompt box. Surely they check the prompt length of the server too, right? After making a request with a really long prompt, we still get a response so it appears they do not check the length of the prompt on the server side and we can send an infinity long prompt (do not do this).

![Screenshot 2024-04-20 000314](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/f4052a37-7b96-4a6c-9e56-6fe64dbf1a42)

## Non-video bypasses <a name="6"></a>
Parrot AI sends requests without videos and requests with deepfake videos in two seperate requests. To use these bypasses with non-video prompts such as the Peter Griffin one at the start you must modify a different request shown below.
### Non-video request
![image](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/8670124b-095d-4430-bd06-7607ebef0bdb)

As you can see the request has no "skipWatermark" field. As far as I am aware you cannot remove watermark on non-video prompts when using the site regularly however you can just modify the request and add the field in and it works. The watermark is removed.

### Bypassing "remove watermark" on non-video prompt
![Screenshot 2024-04-20 001455](https://github.com/DenizBaskan/parrot-ai-bypass/assets/119546222/c7dafef9-dc54-47ad-a9da-0470399df141)

## Conclusion <a name="7"></a>
In doing this I was quite shocked to see that Parrot AI seems to do no server checks at all. These bypasses were quite trivial to find. Having such poor security for the most basic of features like this is quite poor especially in the current year. 
