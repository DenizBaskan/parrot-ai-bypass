(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2126], {
        8717: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/ai-voice-generator/[name]", function () {
                return s(3508)
            }])
        },
        8153: function (e, t, s) {
            "use strict";
            s.d(t, {
                L: function () {
                    return r
                },
                b: function () {
                    return n
                }
            });
            var l = s(5893),
                i = s(5675),
                o = s.n(i);
            let n = e => {
                    let {
                        isMobile: t
                    } = e;
                    return (0, l.jsx)("div", {
                        style: {
                            zIndex: 0,
                            position: "absolute",
                            top: 0,
                            left: t ? "-90vw" : "-30vw"
                        },
                        children: (0, l.jsx)(o(), {
                            src: "/PinkVector.webp",
                            alt: "Blurred Pink Blob",
                            quality: 100,
                            loading: "lazy",
                            width: t ? 800 : 1100,
                            height: t ? 800 : 1100
                        })
                    })
                },
                r = e => {
                    let {
                        isMobile: t
                    } = e;
                    return (0, l.jsx)("div", {
                        style: {
                            zIndex: 0,
                            position: "absolute",
                            top: t ? "70vw" : "10vw",
                            right: t ? "-90vw" : "-30vw"
                        },
                        children: (0, l.jsx)(o(), {
                            src: "/OrangeVector.webp",
                            alt: "Blurred Blob Orange",
                            quality: 100,
                            loading: "lazy",
                            width: t ? 800 : 1100,
                            height: t ? 800 : 1100
                        })
                    })
                }
        },
        266: function (e, t, s) {
            "use strict";
            var l = s(5893),
                i = s(4080),
                o = s(6125),
                n = s(7294),
                r = s(9868),
                a = s(1664),
                c = s.n(a);
            t.Z = e => {
                let {
                    isModalOpen: t,
                    setIsModalOpen: s
                } = e;
                return (0, n.useEffect)(() => {
                    t && (console.log("modal open"), window.gtag("event", "modal_open", {
                        event_category: "engagement",
                        event_label: "Pricing Modal"
                    }))
                }, [t]), (0, l.jsx)(i.u, {
                    appear: !0,
                    show: t,
                    as: n.Fragment,
                    children: (0, l.jsxs)(o.V, {
                        as: "div",
                        className: "relative z-50",
                        onClose: () => s(!1),
                        children: [(0, l.jsx)(i.u.Child, {
                            as: n.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, l.jsx)("div", {
                                className: "fixed inset-0 bg-neutral-focus bg-opacity-50"
                            })
                        }), (0, l.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: (0, l.jsx)("div", {
                                className: "flex min-h-full overflow-hidden items-start md:items-center justify-center p-2",
                                children: (0, l.jsx)(i.u.Child, {
                                    as: n.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 scale-95",
                                    enterTo: "opacity-100 scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 scale-100",
                                    leaveTo: "opacity-0 scale-95",
                                    children: (0, l.jsxs)(o.V.Panel, {
                                        className: "relative w-full max-w-3xl h-full overflow-visible transform text-left align-middle shadow-xl transition-all rounded-xl bg-base-100 p-6 md:p-8",
                                        children: [(0, l.jsxs)("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [(0, l.jsx)(o.V.Title, {
                                                as: "h2",
                                                className: "font-semibold",
                                                children: "Free User Limit Reached - Please upgrade to PRO"
                                            }), (0, l.jsx)("button", {
                                                className: "btn btn-square btn-ghost btn-sm",
                                                onClick: () => s(!1),
                                                children: (0, l.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    className: "w-5 h-5",
                                                    children: (0, l.jsx)("path", {
                                                        d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                                                    })
                                                })
                                            })]
                                        }), (0, l.jsx)("section", {
                                            children: (0, l.jsxs)("div", {
                                                class: "card-body ",
                                                children: [(0, l.jsx)("div", {
                                                    className: "flex justify-center",
                                                    children: (0, l.jsx)(r.Z, {
                                                        className: "w-16 h-16 text-primary-500",
                                                        children: (0, l.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            className: "w-8 h-8",
                                                            children: [(0, l.jsx)("rect", {
                                                                x: "3",
                                                                y: "11",
                                                                width: "18",
                                                                height: "11",
                                                                rx: "2",
                                                                ry: "2"
                                                            }), (0, l.jsx)("path", {
                                                                d: "M7 11V7a5 5 0 0 1 9.9-1"
                                                            })]
                                                        })
                                                    })
                                                }), (0, l.jsx)("h2", {
                                                    class: "card-title justify-center",
                                                    children: "PRO features"
                                                }), (0, l.jsx)("p", {
                                                    style: {
                                                        textAlign: "center",
                                                        paddingBottom: 10
                                                    },
                                                    children: "Unlimited access. No filter. No ads."
                                                }), (0, l.jsx)("div", {
                                                    class: "card-actions justify-center",
                                                    children: (0, l.jsx)(c(), {
                                                        href: "/pricing?from=modal",
                                                        className: "btn btn-primary",
                                                        children: "See plans"
                                                    }, "pricing")
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        3508: function (e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: function () {
                    return F
                },
                default: function () {
                    return _
                }
            });
            var l = s(5893),
                i = s(1163),
                o = s(5675),
                n = s.n(o),
                r = s(9854),
                a = s.n(r);
            s(9008);
            var c = s(1664),
                d = s.n(c),
                h = s(6201),
                x = s(7294),
                p = s(5700),
                u = s(1955);
            s(266), s(5939);
            var m = s(5953);
            s(8153);
            var g = s(9944),
                f = s(9583),
                w = s(3851),
                v = e => {
                    let t, {
                        item: s,
                        index: i
                    } = e;
                    switch (s.category) {
                        case "Birthday":
                            t = "\uD83C\uDF82";
                            break;
                        case "Pep Talk":
                            t = "\uD83D\uDCAA";
                            break;
                        case "Roast":
                            t = "\uD83D\uDD25";
                            break;
                        case "Advice":
                            t = "\uD83D\uDCA1";
                            break;
                        case "Question":
                            t = "❓";
                            break;
                        case "Other":
                            t = "\uD83C\uDFAD";
                            break;
                        default:
                            t = "\uD83E\uDD29"
                    }
                    let [o, n] = (0, x.useState)("Copy"), r = e => {
                        navigator.clipboard.writeText(e), n("Copied ✔️"), setTimeout(() => n("Copy"), 3e3)
                    };
                    return (0, l.jsxs)("div", {
                        className: "card bordered min-w-0 sm:min-w-full md:min-w-1/3 p-4 text-center",
                        style: {
                            backgroundColor: "#D6D4FC"
                        },
                        children: [(0, l.jsx)("figure", {
                            className: "pt-6",
                            children: (0, l.jsx)("div", {
                                className: "w-20 h-20 inline-flex items-center justify-center rounded-full text-primary",
                                style: {
                                    backgroundColor: "#C1BEFB"
                                },
                                children: (0, l.jsx)("span", {
                                    style: {
                                        fontSize: "2em"
                                    },
                                    children: t
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            children: [(0, l.jsx)("p", {
                                className: "font-bold text-xl pt-4 pb-4",
                                children: s.category
                            }), (0, l.jsx)("p", {
                                style: {
                                    fontSize: 18
                                },
                                children: s.message
                            }), (0, l.jsx)("button", {
                                onClick: () => r(s.message),
                                className: "btn mt-4 mb-2",
                                style: {
                                    backgroundColor: "#C1BEFB",
                                    borderWidth: 0
                                },
                                children: o
                            })]
                        })]
                    }, i)
                },
                j = s(750),
                y = s(4494),
                C = s(6501),
                b = s(259),
                k = s(8258);

            function N(e) {
                let {
                    sharableLink: t
                } = e, s = [{
                    icon: k.Vq,
                    shareButton: k.Dk
                }, {
                    icon: k.Zm,
                    shareButton: k.B
                }, {
                    icon: k.YG,
                    shareButton: k.tq
                }, {
                    icon: k.MP,
                    shareButton: k.iR
                }, {
                    icon: k.ud,
                    shareButton: k.N0
                }, {
                    icon: k.LQ,
                    shareButton: k.cG
                }];
                return (0, l.jsx)("div", {
                    className: " mt-6 gap-2 flex flex-col",
                    children: (0, l.jsx)("div", {
                        className: "flex gap-2",
                        children: s.map((e, s) => {
                            let i = e.shareButton,
                                o = e.icon;
                            return (0, l.jsx)("div", {
                                className: "flex flex-col items-center gap-2 rounded-[5px] overflow-hidden",
                                children: (0, l.jsx)(i, {
                                    url: t,
                                    title: "Check out this video made by ParrotAI",
                                    children: (0, l.jsx)(o, {
                                        size: 45
                                    })
                                }, s)
                            }, s)
                        })
                    })
                })
            }
            let {
                voices: L
            } = s(1729);
            var F = !0,
                _ = e => {
                    let {
                        name: t,
                        fullSelectedVoice: s,
                        nameInQuery: o,
                        isCommunityVoice: r,
                        communityVoice: c = null
                    } = e, k = (0, i.useRouter)(), {
                        executeRecaptcha: F
                    } = (0, b.xX)(), {
                        user: _,
                        isUserLoading: I
                    } = (0, g.a)(), [S, B] = (0, x.useState)(!1), [P, A] = (0, x.useState)(null), [D, R] = (0, x.useState)(0), [z, T] = (0, x.useState)(!1), [E, M] = (0, x.useState)(null), [V, W] = (0, x.useState)(null), [O, Z] = (0, x.useState)(), [H, U] = (0, x.useState)(L), G = (0, x.useRef)(null), Y = (0, x.useRef)(null), q = (0, x.useRef)(null), J = (0, x.useRef)([]), [X, Q] = (0, x.useState)(0), [K, $] = (0, x.useState)(s), [ee, et] = (0, x.useState)(r), [es, el] = (0, x.useState)(!1), [ei, eo] = (0, x.useState)(!1), [en, er] = (0, x.useState)(!1), [ea, ec] = (0, x.useState)("Loading..."), [ed, eh] = (0, x.useState)(null), ex = e => {
                        if (Q(e), e.isCommunityVoice) return $(H[0]), et(!0);
                        $(H[e]), et(!1)
                    }, [ep, eu] = (0, x.useState)(!1), [em, eg] = (0, x.useState)(!1), [ef, ew] = (0, x.useState)(!1), [ev, ej] = (0, x.useState)(null), ey = () => "w_" + Math.random().toString(36).substr(2, 8), eC = async e => {
                        e.preventDefault(), B(!0), T(!1), console.log("text: ", P), console.log("name: ", t);
                        let s = "webAnon",
                            l = u.Z.get("parrotAiProUser");
                        l && (s = "proWeb" + l), console.log("userId: ", s);
                        let i = ey(),
                            o = K.id;
                        if (!P) return alert("Please enter some text");
                        if (!o) return alert("Please select an actor");
                        if (P.includes("[Name]")) return alert("Please update your text and replace [Name]"), console.log("setting is loading to false: name"), B(!1), !1;
                        console.log("actor id: ", o), console.log("vid id ", i), M(i);
                        let n = _ && _.paid && ef;
                        console.log("skip watermark", n), console.log("user.paid ", _ ? _.paid : "user is null"), console.log("isChecked", ef);
                        try {
                            let e; {
                                if (!F) {
                                    console.log("Execute recaptcha not yet available");
                                    return
                                }
                                let e = await F("enquiryFormSubmit"),
                                    t = await fetch("/api/verify-captcha-token", {
                                        method: "POST",
                                        body: JSON.stringify({
                                            token: e
                                        }),
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                if ((null == t ? void 0 : t.status) === 400) {
                                    alert("Captcha verification failed. Please try again");
                                    return
                                }
                            }
                            e = ee ? await fetch("/api/create", {
                                method: "POST",
                                body: JSON.stringify({
                                    userId: s,
                                    videoId: i,
                                    actorId: o,
                                    text: P,
                                    communityVoice: !0,
                                    communityVoiceId: c.id
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }) : await fetch("/api/create", {
                                method: "POST",
                                body: JSON.stringify({
                                    userId: s,
                                    videoId: i,
                                    actorId: o,
                                    text: P,
                                    skipWatermark: n
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }), console.log("isCommunityVoice: ", ee);
                            let t = await e.json();
                            if (console.log("data: ", t), 429 === e.status) return ej("Free user limit reached. Please upgrade to Pro"), console.log("setting is loading to false 429 free"), B(!1), eu(!0);
                            if (403 === e.status) {
                                alert("Oops. Something went wrong. Contact support if issue persists"), console.log("setting is loading to false 403"), B(!1);
                                return
                            }!1 === t.success && alert("Something went wrong. Please try again later"), Y.current.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        } catch (e) {
                            console.error("Error calling the API: ", e), alert("Error. Please try again later")
                        } finally {
                            console.log("Finally block")
                        }
                    }, eb = () => {
                        navigator.clipboard.writeText(V).then(() => {
                            C.ZP.success("Link copied to clipboard!")
                        }, e => {
                            alert("Failed to copy link to clipboard.")
                        })
                    };
                    (0, x.useEffect)(() => {
                        if (ee && c) {
                            let e = {
                                ...c,
                                image: c.coverPhoto,
                                placeholder: "What should ".concat(c.name, " say?")
                            };
                            console.log("Adding community voice to front of voices array"), U([e, ...L])
                        }
                    }, [ee, c]), (0, x.useEffect)(() => {
                        el(window.innerWidth < 768), er(!0);
                        let e = window.navigator.userAgent;

                        function t() {
                            el(window.innerWidth < 768)
                        }
                        return eo(["iPhone", "iPad", "iPod", "Macintosh", "MacIntel"].some(t => e.includes(t))), window.addEventListener("resize", t), () => {
                            window.removeEventListener("resize", t)
                        }
                    }, []), (0, x.useEffect)(() => {
                        "true" === k.query.canceled && eu(!0)
                    }, [k.query.canceled]), (0, x.useEffect)(() => {
                        var e;
                        if (ee && c) {
                            let e = {
                                ...c,
                                image: c.coverPhoto,
                                placeholder: "What should ".concat(c.name, " say?")
                            };
                            J.current.unshift(e)
                        }
                        J.current = H.map((t, s) => null !== (e = J.current[s]) && void 0 !== e ? e : (0, x.createRef)())
                    }, [H]), (0, x.useEffect)(() => {
                        var e;
                        if (!(ed <= 2) && (null === (e = J.current[ed]) || void 0 === e ? void 0 : e.current)) {
                            let e = J.current[ed].current,
                                t = e.parentNode,
                                s = e.offsetLeft - 100;
                            t.scrollTo({
                                left: s,
                                behavior: "smooth"
                            })
                        }
                    }, [en, ed]), (0, x.useEffect)(() => {
                        if (S) {
                            console.log("is loading");
                            let e = ["Added to free user queue...", "Estimated: 30 seconds...", "AI is working...", "Do not leave or refresh...", "Hold tight..."],
                                t = 0,
                                s = setInterval(() => {
                                    t = (t + 1) % e.length, ec(e[t])
                                }, 3e3);
                            return () => clearInterval(s)
                        }
                    }, [S]), (0, x.useEffect)(() => {
                        let e;
                        if (E) {
                            let t = h.db.collection("clips").doc(E);
                            e = t.onSnapshot(t => {
                                let s = t.data();
                                s && "success" === s.status && (K && 16 === K.id && k.push("/videos/".concat(E)), T(!0), console.log("setting is loading to false useEffet"), B(!1), W("https://tryparrotai.com/video?id=".concat(E)), s.source && Z(s.source), e && e()), s && "server_failed" === s.status && (console.error("Video generation failed"), alert("Video generation failed. Please try again later."), e && e())
                            })
                        }
                        return () => {
                            e && e()
                        }
                    }, [E]), (0, x.useEffect)(() => {
                        z && (console.log("video is ready, setting video url"), G.current.src = O)
                    }, [z, O]), (0, x.useEffect)(() => {
                        if (o) {
                            let e = H.findIndex(e => e.slug === o); - 1 !== e && (Q(e), eh(e))
                        }
                    }, [o]), (0, x.useEffect)(() => {
                        _ && k.push("/app/create")
                    }, [_, I]);
                    let ek = (0, x.memo)(e => {
                        let {
                            recommendedVideos: t,
                            userPaid: s
                        } = e, i = () => {
                            s || (ej("Unlock all videos with Parrot Pro"), eu(!0))
                        };
                        return (0, l.jsx)("div", {
                            className: "bg-gray-100 rounded-lg mt-5 sm:mt-2 p-1 sm:p-5 w-full max-w-4xl mx-auto",
                            children: (0, l.jsxs)("div", {
                                className: "flex flex-col items-start",
                                children: [(0, l.jsx)("h2", {
                                    className: "pl-3 pt-5 sm:pl-0 sm:pt-0 text-lg lg:text-xl",
                                    children: "Recommended video styles"
                                }), (0, l.jsx)("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-5 mt-2 p-1 sm:p-5 w-full sm:px-0",
                                    onClick: i,
                                    style: {},
                                    children: t.map(e => {
                                        let {
                                            url: t,
                                            title: s
                                        } = e;
                                        return (0, l.jsxs)("div", {
                                            className: "w-full text-center relative cursor-pointer",
                                            children: [(0, l.jsx)("video", {
                                                src: t,
                                                muted: !0,
                                                autoPlay: !0,
                                                style: {
                                                    width: "100%",
                                                    borderRadius: "4px"
                                                },
                                                onClick: e => {
                                                    e.stopPropagation(), i()
                                                }
                                            }), (0, l.jsx)("p", {
                                                style: {
                                                    color: "#766CE6",
                                                    fontWeight: "bold",
                                                    textDecoration: "underline",
                                                    cursor: "pointer"
                                                },
                                                children: s
                                            }), (0, l.jsx)(f.CvY, {
                                                className: "h-10 w-10 absolute top-3 right-3",
                                                style: {
                                                    color: "white",
                                                    backgroundColor: "#766CE6",
                                                    borderRadius: "50%",
                                                    padding: 7
                                                }
                                            })]
                                        }, t)
                                    })
                                }), !1, !s && (0, l.jsx)("div", {
                                    className: "w-full flex justify-center",
                                    onClick: () => {
                                        ej("Unlock all videos with Parrot Pro"), eu(!0)
                                    },
                                    children: (0, l.jsx)("p", {
                                        className: "text-center mt-4",
                                        style: {
                                            color: "#766CE6",
                                            fontWeight: "bold",
                                            cursor: "pointer"
                                        },
                                        children: "✨ Unlock all characters and video styles with Parrot Pro ✨"
                                    })
                                })]
                            })
                        })
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(j.Z, {
                            title: "Ai Voice Changer - ".concat(t),
                            description: "Our ".concat(t, " AI voice maker allows you to create amazing audio and video. Try the best AI celebrity voice generator now - it’s fast and easy."),
                            keywords: "Ai Voice Changer, ".concat(t, " ai voice, Parrot AI, text to speech, celebrity voice ai, voice generator"),
                            og: {
                                title: "Ai Voice Changer - ".concat(t),
                                description: "Our ".concat(t, " AI voice maker allows you to create amazing audio and video. Try the best AI celebrity voice generator now - it’s fast and easy."),
                                url: "https://".concat(y.Z.domainName, "/ai-voice-generator/").concat(o)
                            },
                            canonicalSlug: "ai-voice-generator/".concat(o)
                        }), (0, l.jsx)(w.Z, {}), (0, l.jsx)(C.x7, {}), (0, l.jsxs)("main", {
                            className: "".concat(a().main, " "),
                            children: [(0, l.jsxs)("div", {
                                children: [(0, l.jsxs)("header", {
                                    className: "mt-8 md:mt-10 ".concat(a().header, " "),
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        position: "relative",
                                        backgroundColor: "transparent"
                                    },
                                    children: [(0, l.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "96",
                                        height: "95",
                                        viewBox: "0 0 96 95",
                                        fill: "none",
                                        style: {
                                            position: "absolute",
                                            top: "10%",
                                            left: es ? "-10%" : "20%",
                                            transform: "translate(-30%, 10%)",
                                            zIndex: 0
                                        },
                                        children: [(0, l.jsxs)("g", {
                                            filter: "url(#filter0_d_18_416)",
                                            children: [(0, l.jsx)("path", {
                                                d: "M83.8748 43.5C83.8829 44.5382 83.5634 45.5532 82.9607 46.4038C82.3579 47.2543 81.5018 47.8983 80.5115 48.2461L60.1909 55.5456L52.8045 75.6152C52.4404 76.5841 51.7849 77.4197 50.926 78.0097C50.0671 78.5998 49.046 78.9161 47.9998 78.9161C46.9536 78.9161 45.9324 78.5998 45.0736 78.0097C44.2147 77.4197 43.5592 76.5841 43.1951 75.6152L35.8055 55.5234L15.4881 48.2461C14.5073 47.8865 13.6614 47.239 13.064 46.3905C12.4667 45.5421 12.1465 44.5334 12.1465 43.5C12.1465 42.4666 12.4667 41.4579 13.064 40.6095C13.6614 39.761 14.5073 39.1135 15.4881 38.7539L35.8279 31.4544L43.1951 11.3848C43.5592 10.4159 44.2147 9.58034 45.0736 8.99028C45.9324 8.40021 46.9536 8.08394 47.9998 8.08394C49.046 8.08394 50.0671 8.40021 50.926 8.99028C51.7849 9.58034 52.4404 10.4159 52.8045 11.3848L60.1941 31.4766L80.5115 38.7539C81.5018 39.1017 82.3579 39.7457 82.9607 40.5962C83.5634 41.4468 83.8829 42.4618 83.8748 43.5Z",
                                                fill: "#FFA360"
                                            }), (0, l.jsx)("path", {
                                                d: "M53.7406 75.967L53.7429 75.9606L60.9681 56.3289L80.8429 49.1896C80.8439 49.1892 80.845 49.1888 80.8461 49.1885C82.0291 48.7722 83.0538 48.0019 83.7766 46.9819C84.4986 45.9631 84.8829 44.7462 84.8748 43.5C84.8829 42.2538 84.4986 41.0369 83.7766 40.0181C83.0538 38.9981 82.0289 38.2276 80.8458 37.8114C80.8448 37.8111 80.8438 37.8107 80.8429 37.8104L60.9713 30.6927L53.743 11.0396L53.7406 11.033C53.304 9.87113 52.5187 8.87118 51.4923 8.16604C50.466 7.46101 49.2473 7.08394 47.9998 7.08394C46.7523 7.08394 45.5336 7.46101 44.5073 8.16604C43.4809 8.87118 42.6956 9.87113 42.259 11.033L42.259 11.033L42.2563 11.0402L35.0502 30.6711L15.1503 37.8127L15.1503 37.8127L15.1438 37.815C13.9733 38.2442 12.9617 39.0177 12.2463 40.0338C11.5309 41.05 11.1465 42.2596 11.1465 43.5C11.1465 44.7404 11.5309 45.95 12.2463 46.9662C12.9617 47.9823 13.9733 48.7558 15.1438 49.185L15.1509 49.1875L35.0283 56.3073L42.2565 75.9604L42.259 75.967C42.6956 77.1289 43.4809 78.1288 44.5073 78.834C45.5336 79.539 46.7523 79.9161 47.9998 79.9161C49.2473 79.9161 50.466 79.539 51.4923 78.834C52.5187 78.1288 53.304 77.1289 53.7406 75.967Z",
                                                stroke: "white",
                                                "stroke-width": "2"
                                            })]
                                        }), (0, l.jsx)("defs", {
                                            children: (0, l.jsxs)("filter", {
                                                id: "filter0_d_18_416",
                                                x: "0.146484",
                                                y: "0.0839386",
                                                width: "95.7285",
                                                height: "94.8321",
                                                filterUnits: "userSpaceOnUse",
                                                "color-interpolation-filters": "sRGB",
                                                children: [(0, l.jsx)("feFlood", {
                                                    floodOpacity: "0",
                                                    result: "BackgroundImageFix"
                                                }), (0, l.jsx)("feColorMatrix", {
                                                    in: "SourceAlpha",
                                                    type: "matrix",
                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                    result: "hardAlpha"
                                                }), (0, l.jsx)("feOffset", {
                                                    dy: "4"
                                                }), (0, l.jsx)("feGaussianBlur", {
                                                    stdDeviation: "5"
                                                }), (0, l.jsx)("feComposite", {
                                                    in2: "hardAlpha",
                                                    operator: "out"
                                                }), (0, l.jsx)("feColorMatrix", {
                                                    type: "matrix",
                                                    values: "0 0 0 0 0.61869 0 0 0 0 0.613368 0 0 0 0 0.678299 0 0 0 0.4 0"
                                                }), (0, l.jsx)("feBlend", {
                                                    mode: "normal",
                                                    in2: "BackgroundImageFix",
                                                    result: "effect1_dropShadow_18_416"
                                                }), (0, l.jsx)("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_dropShadow_18_416",
                                                    result: "shape"
                                                })]
                                            })
                                        })]
                                    }), (0, l.jsx)("div", {
                                        className: "text-sm breadcrumbs pt-0 pb-5",
                                        children: (0, l.jsxs)("ul", {
                                            children: [(0, l.jsx)("li", {
                                                children: (0, l.jsx)(d(), {
                                                    href: _ ? "/app" : "/",
                                                    children: "Home"
                                                })
                                            }), (0, l.jsx)("li", {
                                                children: (0, l.jsx)(d(), {
                                                    href: "/ai-voice-generator",
                                                    children: "AI Voice Generators"
                                                })
                                            }), (0, l.jsx)("li", {
                                                children: t
                                            })]
                                        })
                                    }), (0, l.jsxs)("h1", {
                                        className: a().headline,
                                        style: {
                                            fontSize: 44,
                                            fontWeight: 700,
                                            lineHeight: 1.2
                                        },
                                        children: [t, " ", (0, l.jsx)("span", {
                                            className: a().gradientText,
                                            children: "Voice AI "
                                        })]
                                    }), (0, l.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 71 70",
                                        fill: "none",
                                        style: {
                                            position: "absolute",
                                            top: "30%",
                                            width: "71",
                                            height: "70",
                                            right: es ? "-10%" : "17%",
                                            transform: "translate(-50%, 40%)"
                                        },
                                        children: [(0, l.jsxs)("g", {
                                            filter: "url(#filter0_d_18_418)",
                                            children: [(0, l.jsx)("path", {
                                                d: "M58.6871 31C58.6924 31.6665 58.4859 32.3181 58.0963 32.8642C57.7067 33.4102 57.1534 33.8236 56.5133 34.0469L43.3793 38.733L38.6051 51.6172C38.3698 52.2392 37.9461 52.7756 37.391 53.1544C36.8358 53.5332 36.1758 53.7363 35.4996 53.7363C34.8234 53.7363 34.1634 53.5332 33.6083 53.1544C33.0532 52.7756 32.6295 52.2392 32.3942 51.6172L27.618 38.7188L14.486 34.0469C13.852 33.816 13.3053 33.4003 12.9192 32.8557C12.5331 32.311 12.3262 31.6635 12.3262 31C12.3262 30.3366 12.5331 29.689 12.9192 29.1444C13.3053 28.5997 13.852 28.184 14.486 27.9532L27.6325 23.2671L32.3942 10.3828C32.6295 9.76087 33.0532 9.22444 33.6083 8.84564C34.1634 8.46683 34.8234 8.26379 35.4996 8.26379C36.1758 8.26379 36.8358 8.46683 37.391 8.84564C37.9461 9.22444 38.3698 9.76087 38.6051 10.3828L43.3813 23.2813L56.5133 27.9532C57.1534 28.1764 57.7067 28.5898 58.0963 29.1359C58.4859 29.6819 58.6924 30.3335 58.6871 31Z",
                                                fill: "#FFA360"
                                            }), (0, l.jsx)("path", {
                                                d: "M39.5404 51.9711L39.5428 51.9647L44.1548 39.518L56.8427 34.9911C56.8438 34.9907 56.845 34.9903 56.8462 34.9899C57.6778 34.699 58.4 34.1603 58.9104 33.445C59.4201 32.7305 59.6924 31.8762 59.6872 31C59.6924 30.1239 59.4201 29.2695 58.9104 28.5551C58.4 27.8397 57.6776 27.3009 56.8458 27.0101C56.8448 27.0097 56.8437 27.0093 56.8427 27.009L44.1568 22.4958L39.5429 10.0356L39.5429 10.0356L39.5404 10.029C39.2317 9.21308 38.6772 8.51268 37.9546 8.01962C37.2323 7.52672 36.3756 7.26379 35.4996 7.26379C34.6237 7.26379 33.767 7.52672 33.0447 8.01962C32.3221 8.51268 31.7675 9.21308 31.4589 10.029L31.4588 10.029L31.4562 10.0362L26.8565 22.482L14.1502 27.0112L14.1502 27.0112L14.1438 27.0135C13.3211 27.3131 12.6083 27.8538 12.1034 28.5661C11.5983 29.2786 11.3262 30.128 11.3262 31C11.3262 31.8721 11.5983 32.7214 12.1034 33.434C12.6083 34.1463 13.3211 34.6869 14.1438 34.9865L14.1438 34.9866L14.1508 34.9891L26.8425 39.5043L31.4564 51.9645L31.4589 51.9711C31.7675 52.787 32.3221 53.4874 33.0447 53.9804C33.767 54.4733 34.6237 54.7363 35.4996 54.7363C36.3756 54.7363 37.2323 54.4733 37.9546 53.9804C38.6772 53.4874 39.2317 52.787 39.5404 51.9711Z",
                                                stroke: "white",
                                                strokeWidth: "2"
                                            })]
                                        }), (0, l.jsx)("defs", {
                                            children: (0, l.jsxs)("filter", {
                                                id: "filter0_d_18_418",
                                                x: "0.326172",
                                                y: "0.263794",
                                                width: "70.3608",
                                                height: "69.4725",
                                                filterUnits: "userSpaceOnUse",
                                                "color-interpolation-filters": "sRGB",
                                                children: [(0, l.jsx)("feFlood", {
                                                    floodOpacity: "0",
                                                    result: "BackgroundImageFix"
                                                }), (0, l.jsx)("feColorMatrix", {
                                                    in: "SourceAlpha",
                                                    type: "matrix",
                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                    result: "hardAlpha"
                                                }), (0, l.jsx)("feOffset", {
                                                    dy: "4"
                                                }), (0, l.jsx)("feGaussianBlur", {
                                                    stdDeviation: "5"
                                                }), (0, l.jsx)("feComposite", {
                                                    in2: "hardAlpha",
                                                    operator: "out"
                                                }), (0, l.jsx)("feColorMatrix", {
                                                    type: "matrix",
                                                    values: "0 0 0 0 0.61869 0 0 0 0 0.613368 0 0 0 0 0.678299 0 0 0 0.4 0"
                                                }), (0, l.jsx)("feBlend", {
                                                    mode: "normal",
                                                    in2: "BackgroundImageFix",
                                                    result: "effect1_dropShadow_18_418"
                                                }), (0, l.jsx)("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_dropShadow_18_418",
                                                    result: "shape"
                                                })]
                                            })
                                        })]
                                    }), (0, l.jsx)("p", {
                                        style: {
                                            fontFamily: "Roboto, sans-serif",
                                            fontSize: 20,
                                            marginTop: 15,
                                            paddingBottom: 15,
                                            zIndex: 0
                                        },
                                        children: "Easily Go from text to speech with the most realistic AI voice generator"
                                    })]
                                }), (0, l.jsxs)("section", {
                                    className: a().generatorCustom,
                                    style: {
                                        zIndex: 11
                                    },
                                    ref: q,
                                    children: [(0, l.jsxs)("form", {
                                        id: "submit-form",
                                        style: {
                                            width: "100%",
                                            borderRadius: 10,
                                            backgroundColor: "white",
                                            zIndex: 2,
                                            paddingLeft: es ? 10 : 20,
                                            paddingRight: es ? 10 : 20,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: [(0, l.jsxs)("div", {
                                            className: a().generatorSettings,
                                            children: [(0, l.jsx)("div", {
                                                style: {
                                                    paddingTop: 20
                                                },
                                                children: (0, l.jsx)("h4", {
                                                    htmlFor: "voice-options",
                                                    className: a().voiceLabel,
                                                    style: {
                                                        paddingTop: "40px",
                                                        color: "#121212",
                                                        fontSize: "22px",
                                                        fontWeight: 700
                                                    },
                                                    children: "Pick voice:"
                                                })
                                            }), es && (0, l.jsx)("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    overflowX: "auto",
                                                    scrollbarWidth: "none",
                                                    msOverflowStyle: "none",
                                                    WebkitOverflowScrolling: "touch",
                                                    marginTop: 10,
                                                    marginBottom: 10
                                                },
                                                children: H.map((e, t) => (0, l.jsxs)("div", {
                                                    ref: J.current[t],
                                                    style: {
                                                        flex: "0 0 auto",
                                                        marginRight: "10px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        cursor: "pointer"
                                                    },
                                                    onClick: () => ex(t),
                                                    children: [t === X && (0, l.jsx)("div", {
                                                        style: {
                                                            position: "relative",
                                                            marginTop: 10
                                                        },
                                                        children: (0, l.jsx)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-8 w-8 ",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            style: {
                                                                position: "absolute",
                                                                bottom: 20,
                                                                left: 60,
                                                                color: "#766CE6",
                                                                backgroundColor: "white",
                                                                borderRadius: "50%"
                                                            },
                                                            children: (0, l.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                clipRule: "evenodd"
                                                            })
                                                        })
                                                    }), (0, l.jsx)(n(), {
                                                        src: e.image,
                                                        alt: e.name,
                                                        width: 90,
                                                        height: 90,
                                                        loading: "eager",
                                                        objectFit: "cover",
                                                        style: {
                                                            width: "90px",
                                                            height: "90px",
                                                            borderRadius: "50%",
                                                            objectFit: "cover",
                                                            border: t === X ? "4px solid #766CE6" : "none",
                                                            boxSizing: "border-box"
                                                        }
                                                    })]
                                                }, e.id))
                                            }), !es && (0, l.jsx)("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    overflowX: "auto",
                                                    overflowY: "scroll",
                                                    scrollbarWidth: 1,
                                                    marginTop: 10,
                                                    marginBottom: 10,
                                                    maxWidth: 520
                                                },
                                                children: H.map((e, t) => (0, l.jsxs)("div", {
                                                    ref: J.current[t],
                                                    style: {
                                                        flex: "0 0 auto",
                                                        marginRight: "10px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        cursor: "pointer"
                                                    },
                                                    onClick: () => ex(t),
                                                    children: [t === X && (0, l.jsx)("div", {
                                                        style: {
                                                            position: "relative",
                                                            marginTop: 10
                                                        },
                                                        children: (0, l.jsx)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-8 w-8 ",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            style: {
                                                                position: "absolute",
                                                                bottom: 20,
                                                                left: 60,
                                                                color: "#766CE6",
                                                                backgroundColor: "white",
                                                                borderRadius: "50%"
                                                            },
                                                            children: (0, l.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                clipRule: "evenodd"
                                                            })
                                                        })
                                                    }), (0, l.jsx)(n(), {
                                                        src: e.image,
                                                        alt: e.name,
                                                        width: 90,
                                                        height: 90,
                                                        objectFit: "cover",
                                                        style: {
                                                            width: "90px",
                                                            height: "90px",
                                                            borderRadius: "50%",
                                                            objectFit: "cover",
                                                            border: t === X ? "4px solid #766CE6" : "none",
                                                            boxSizing: "border-box"
                                                        }
                                                    })]
                                                }, e.id))
                                            }), !es && !1, (0, l.jsx)("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                },
                                                children: (0, l.jsx)("textarea", {
                                                    className: a().generatorInput,
                                                    placeholder: K && K.placeholder ? K.placeholder : "What should ".concat(t, " say?"),
                                                    value: P,
                                                    onChange: e => {
                                                        if (e.target.value.length > 100) {
                                                            alert("Oops. You exceeded the websites character limit. You can download our app for more!");
                                                            return
                                                        }
                                                        A(e.target.value), R(e.target.value.length)
                                                    }
                                                })
                                            }), (0, l.jsx)("div", {
                                                style: {
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    paddingRight: 10
                                                },
                                                children: (0, l.jsxs)("span", {
                                                    style: {
                                                        color: D > 100 ? "red" : "grey"
                                                    },
                                                    children: [D, "/100"]
                                                })
                                            }), _ && _.paid && (0, l.jsxs)("div", {
                                                style: {
                                                    margin: "20px 0"
                                                },
                                                role: "alert",
                                                className: "alert",
                                                children: [(0, l.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    className: "stroke-info shrink-0 w-6 h-6",
                                                    children: (0, l.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    })
                                                }), (0, l.jsx)(d(), {
                                                    href: "/app/create",
                                                    children: "Hey! You are still on the free preview page. Click here to access your pro features"
                                                })]
                                            }), (0, l.jsx)("div", {
                                                className: "form-control",
                                                style: {
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    marginBottom: 20
                                                },
                                                children: (0, l.jsxs)("label", {
                                                    className: "cursor-pointer flex items-center",
                                                    onClick: () => {
                                                        _ && _.paid ? console.log("this user is paid", _) : (ej("Remove watermark with Parrot Pro! "), eu(!0))
                                                    },
                                                    children: [(0, l.jsx)("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: (0, l.jsx)("input", {
                                                            type: "checkbox",
                                                            className: "checkbox checkbox-primary",
                                                            checked: ef,
                                                            onChange: () => {
                                                                _ && _.paid && ew(!ef)
                                                            }
                                                        })
                                                    }), (0, l.jsx)("div", {
                                                        style: {
                                                            marginLeft: "10px",
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: (0, l.jsx)("span", {
                                                            className: "label-text text-xs sm:text-base",
                                                            style: {
                                                                color: "grey",
                                                                marginTop: "10px"
                                                            },
                                                            children: 'Remove "made with Parrot" watermark'
                                                        })
                                                    })]
                                                })
                                            })]
                                        }), !S && (0, l.jsx)("button", {
                                            className: a().downloadButton,
                                            style: {
                                                height: 60,
                                                width: 200,
                                                borderRadius: 55,
                                                marginBottom: 20,
                                                fontWeight: "bold"
                                            },
                                            type: "submit",
                                            onClick: async e => {
                                                console.log("clicked"), await eC(e)
                                            },
                                            children: "Generate"
                                        }), S && (0, l.jsx)("img", {
                                            src: "/loading-gif.gif",
                                            alt: "loading",
                                            style: {
                                                height: "43px",
                                                paddingBottom: "10px"
                                            }
                                        })]
                                    }), (0, l.jsx)("section", {
                                        ref: Y,
                                        style: {
                                            width: "100%"
                                        },
                                        children: (S || z) && (0, l.jsxs)("div", {
                                            style: {
                                                width: "100%",
                                                minHeight: "390px",
                                                borderRadius: "5px",
                                                backgroundColor: "white",
                                                paddingBottom: 10,
                                                marginTop: 25
                                            },
                                            children: [z && (0, l.jsx)("h3", {
                                                className: "pt-2 mx-5 my-5 text-center text-xl",
                                                children: "Your video:"
                                            }), S && (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsxs)("div", {
                                                    className: "h-screen flex flex-col justify-center items-center",
                                                    children: [(0, l.jsx)("h4", {
                                                        className: "text-center text-2xl pt-3 pb-10",
                                                        children: ea
                                                    }), (0, l.jsx)("progress", {
                                                        className: "progress progress-primary w-56"
                                                    }), K && (null == K ? void 0 : K.id) == 33 ? (0, l.jsxs)("div", {
                                                        className: "alert mb-5 mt-10 w-3/5 mx-auto text-center flex items-center justify-center",
                                                        onClick: () => {
                                                            ej("Get unlimited videos with Pro"), eu(!0), window.gtag("event", "upgrade_button_click", {
                                                                event_category: "engagement",
                                                                event_label: "Upgrade Button"
                                                            })
                                                        },
                                                        children: [(0, l.jsx)("h2", {
                                                            className: "text-center text-xl",
                                                            children: "⚡️ You get 3 free videos"
                                                        }), (0, l.jsx)("a", {
                                                            className: "btn",
                                                            style: {
                                                                backgroundColor: "white"
                                                            },
                                                            onClick: () => {
                                                                ej("Get unlimited videos with Pro"), eu(!0), window.gtag("event", "upgrade_button_click", {
                                                                    event_category: "engagement",
                                                                    event_label: "Upgrade Button"
                                                                })
                                                            },
                                                            children: "Get more"
                                                        })]
                                                    }) : (0, l.jsxs)("div", {
                                                        className: "alert mb-5 mt-10 w-3/5 mx-auto text-center",
                                                        children: [(0, l.jsx)("h2", {
                                                            className: "text-center text-xl",
                                                            children: "\uD83D\uDCB8 Join our Tiktok Challenge and get PRO for free!"
                                                        }), (0, l.jsxs)("a", {
                                                            href: "/creator-program",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "btn",
                                                            style: {
                                                                backgroundColor: "white"
                                                            },
                                                            children: ["Learn More", (0, l.jsxs)("svg", {
                                                                width: "24px",
                                                                height: "24px",
                                                                viewBox: "0 0 24 24",
                                                                "stroke-width": "1.5",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                color: "#000000",
                                                                children: [(0, l.jsx)("path", {
                                                                    d: "M21 3L15 3M21 3L12 12M21 3V9",
                                                                    stroke: "#000000",
                                                                    "stroke-width": "1.5",
                                                                    "stroke-linecap": "round",
                                                                    "stroke-linejoin": "round"
                                                                }), (0, l.jsx)("path", {
                                                                    d: "M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11",
                                                                    stroke: "#000000",
                                                                    "stroke-width": "1.5",
                                                                    "stroke-linecap": "round"
                                                                })]
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            }), z && (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center"
                                                    },
                                                    children: [(0, l.jsx)("video", {
                                                        ref: G,
                                                        controls: !0
                                                    }), (null == _ ? void 0 : _.paid) !== !0 && (null == K ? void 0 : K.id) !== 33 && (0, l.jsxs)("div", {
                                                        className: "bg-gray-100 flex flex-col justify-center items-center space-y-4 mt-5 ml-4 mr-4 p-5",
                                                        style: {
                                                            width: "95%",
                                                            maxWidth: 400,
                                                            borderRadius: 10
                                                        },
                                                        children: [(0, l.jsx)("p", {
                                                            className: "text-center text-sm ",
                                                            children: "Upgrade to get unlimited videos and remove watermark"
                                                        }), (0, l.jsx)("button", {
                                                            onClick: () => {
                                                                ej("Join 9000+ happy users on Parrot Pro!"), eu(!0), window.gtag("event", "upgrade_button_click", {
                                                                    event_category: "engagement",
                                                                    event_label: "Upgrade Button"
                                                                })
                                                            },
                                                            className: "".concat(a().downloadButton, " btn font-bold py-2 px-4 rounded-full whitespace-nowrap w-64"),
                                                            style: {
                                                                backgroundColor: "white"
                                                            },
                                                            children: "Upgrade ✨"
                                                        })]
                                                    }), (null == _ ? void 0 : _.paid) !== !0 && (null == K ? void 0 : K.id) == 33 && (0, l.jsxs)("div", {
                                                        className: "bg-gray-100 flex flex-col justify-center items-center space-y-4 mt-5 ml-4 mr-4 p-5",
                                                        style: {
                                                            width: "95%",
                                                            maxWidth: 400,
                                                            borderRadius: 10
                                                        },
                                                        children: [(0, l.jsx)("p", {
                                                            className: "text-center text-sm ",
                                                            children: "⚡️ You get 3 free videos"
                                                        }), (0, l.jsx)("button", {
                                                            onClick: () => {
                                                                ej("Join 9000+ happy users on Parrot Pro!"), eu(!0), window.gtag("event", "upgrade_button_click", {
                                                                    event_category: "engagement",
                                                                    event_label: "Upgrade Button"
                                                                })
                                                            },
                                                            className: "".concat(a().downloadButton, " btn font-bold py-2 px-4 rounded-full whitespace-nowrap w-64"),
                                                            style: {
                                                                backgroundColor: "white"
                                                            },
                                                            children: "Get Unlimited"
                                                        })]
                                                    }), (0, l.jsxs)("div", {
                                                        className: "flex justify-center items-center space-x-4 mt-5 pl-8 pr-8",
                                                        children: [(0, l.jsxs)("button", {
                                                            onClick: () => {
                                                                window.gtag("event", "copy_link_button_click", {
                                                                    event_category: "engagement",
                                                                    event_label: "Copy Link Button"
                                                                }), eb()
                                                            },
                                                            className: "btn btn-neutral text-white font-bold py-2 px-4 rounded-full whitespace-nowrap",
                                                            children: [(0, l.jsxs)("svg", {
                                                                class: "h-6 w-6",
                                                                "stroke-width": "1.5",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                color: "#FFFFFF",
                                                                children: [(0, l.jsx)("path", {
                                                                    d: "M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z",
                                                                    stroke: "#FFFFFF",
                                                                    "stroke-width": "1.5",
                                                                    "stroke-linecap": "round",
                                                                    "stroke-linejoin": "round"
                                                                }), (0, l.jsx)("path", {
                                                                    d: "M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9",
                                                                    stroke: "#FFFFFF",
                                                                    "stroke-width": "1.5",
                                                                    "stroke-linecap": "round",
                                                                    "stroke-linejoin": "round"
                                                                })]
                                                            }), "Copy link"]
                                                        }), (0, l.jsxs)("button", {
                                                            onClick: () => {
                                                                ej("Remove watermarks with Pro"), eu(!0)
                                                            },
                                                            className: "btn font-bold py-2 px-4 rounded-full whitespace-nowrap",
                                                            children: [(0, l.jsx)("svg", {
                                                                style: {
                                                                    verticalAlign: "middle"
                                                                },
                                                                width: "12px",
                                                                height: "12px",
                                                                viewBox: "0 0 24 24",
                                                                "stroke-width": "3.5",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                color: "#000000",
                                                                children: (0, l.jsx)("path", {
                                                                    d: "M20 14C20 9.58172 12 2 12 2C12 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14Z",
                                                                    stroke: "#000000",
                                                                    "stroke-width": "3.5"
                                                                })
                                                            }), "Remove watermark"]
                                                        })]
                                                    }), (0, l.jsx)("div", {
                                                        className: "flex justify-center items-center space-x-4 mt-5",
                                                        children: (0, l.jsx)("button", {
                                                            onClick: () => {
                                                                q.current.scrollIntoView({
                                                                    behavior: "smooth"
                                                                }), window.gtag("event", "make_another_button_click", {
                                                                    event_category: "engagement",
                                                                    event_label: "Make Another Button"
                                                                })
                                                            },
                                                            className: "btn font-bold py-2 px-4 rounded-full whitespace-nowrap",
                                                            children: "Make another"
                                                        })
                                                    }), (0, l.jsx)(N, {
                                                        sharableLink: V
                                                    }), (0, l.jsx)(ek, {
                                                        recommendedVideos: [{
                                                            url: "https://firebasestorage.googleapis.com/v0/b/parrot-prod-21b3c.appspot.com/o/celebs%2Fvideos%2Fdt500x500.mp4?alt=media&token=02fc330c-ccfb-4145-8da8-bdb0906733ec",
                                                            title: "Pro: These Hands"
                                                        }, {
                                                            url: "https://firebasestorage.googleapis.com/v0/b/parrot-prod-21b3c.appspot.com/o/celebs%2F57%2Fvideo.mp4?alt=media&token=1a4c4c8e-56dd-4fc2-a7ea-f62689790c9e",
                                                            title: "Pro: Official Announcement"
                                                        }, {
                                                            url: "https://firebasestorage.googleapis.com/v0/b/parrot-prod-21b3c.appspot.com/o/celebs%2F58%2Fvideo.mp4?alt=media&token=56e41bae-69a7-430b-bf44-2410dffe536c",
                                                            title: "Pro: Interview"
                                                        }],
                                                        userPaid: null == _ ? void 0 : _.paid
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, l.jsx)("section", {
                                    className: "flex flex-col md:flex-row md:space-x-6 bg-gray-100 p-6 rounded-xl my-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "",
                                        children: [(0, l.jsx)("p", {
                                            children: null == K ? void 0 : K.description
                                        }), (0, l.jsxs)("p", {
                                            className: "pt-5",
                                            children: ["- AI ", t]
                                        })]
                                    })
                                }), (0, l.jsxs)("section", {
                                    className: "pt-10 md:pt-24 pb-20 bg-white",
                                    children: [(0, l.jsx)("div", {
                                        class: "text-center w-full",
                                        children: (0, l.jsx)("h2", {
                                            class: "mb-20 text-4xl font-bold font-heading",
                                            children: "How Parrot AI works"
                                        })
                                    }), (0, l.jsx)("div", {
                                        class: "container px-4 mx-auto flex justify-center",
                                        children: (0, l.jsxs)("div", {
                                            class: "flex flex-wrap -m-8",
                                            children: [(0, l.jsxs)("div", {
                                                class: "w-full md:w-1/2 lg:w-1/4 p-8",
                                                children: [(0, l.jsxs)("div", {
                                                    class: "flex flex-wrap items-center mb-7 -m-2",
                                                    children: [(0, l.jsx)("div", {
                                                        class: "w-auto p-2",
                                                        children: (0, l.jsx)("div", {
                                                            class: "relative w-14 h-14 text-2xl font-bold font-heading rounded-full",
                                                            style: {
                                                                backgroundColor: "#F9D8F4"
                                                            },
                                                            children: (0, l.jsx)("span", {
                                                                class: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                                                children: "1"
                                                            })
                                                        })
                                                    }), (0, l.jsx)("div", {
                                                        class: "flex-1 p-2",
                                                        children: (0, l.jsx)("div", {
                                                            class: "w-full h-px bg-gray-100"
                                                        })
                                                    })]
                                                }), (0, l.jsx)("h3", {
                                                    class: "text-xl font-semibold leading-normal md:max-w-xs",
                                                    children: "Pick a celebrity"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                class: "w-full md:w-1/2 lg:w-1/4 p-8",
                                                children: [(0, l.jsxs)("div", {
                                                    class: "flex flex-wrap items-center mb-7 -m-2",
                                                    children: [(0, l.jsx)("div", {
                                                        class: "w-auto p-2",
                                                        children: (0, l.jsx)("div", {
                                                            class: "relative w-14 h-14 text-2xl text-white font-bold rounded-full",
                                                            style: {
                                                                backgroundColor: "#E858DF"
                                                            },
                                                            children: (0, l.jsx)("span", {
                                                                class: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                                                children: "2"
                                                            })
                                                        })
                                                    }), (0, l.jsx)("div", {
                                                        class: "flex-1 p-2",
                                                        children: (0, l.jsx)("div", {
                                                            class: "w-full h-px bg-gray-100"
                                                        })
                                                    })]
                                                }), (0, l.jsx)("h3", {
                                                    class: "text-xl font-semibold leading-normal md:max-w-xs",
                                                    children: "Type what you want them to say"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                class: "w-full md:w-1/2 lg:w-1/4 p-8",
                                                children: [(0, l.jsxs)("div", {
                                                    class: "flex flex-wrap items-center mb-7 -m-2",
                                                    children: [(0, l.jsx)("div", {
                                                        class: "w-auto p-2",
                                                        children: (0, l.jsx)("div", {
                                                            class: "relative w-14 h-14 text-2xl font-bold font-heading rounded-full",
                                                            style: {
                                                                backgroundColor: "#F9D8F4"
                                                            },
                                                            children: (0, l.jsx)("span", {
                                                                class: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                                                children: "3"
                                                            })
                                                        })
                                                    }), (0, l.jsx)("div", {
                                                        class: "flex-1 p-2",
                                                        children: (0, l.jsx)("div", {
                                                            class: "w-full h-px bg-gray-200"
                                                        })
                                                    })]
                                                }), (0, l.jsx)("h3", {
                                                    class: "text-xl font-semibold leading-normal md:max-w-xs",
                                                    children: "Download & share your video"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                class: "w-full md:w-1/2 lg:w-1/4 p-8",
                                                children: [(0, l.jsxs)("div", {
                                                    class: "flex flex-wrap items-center mb-7 -m-2",
                                                    children: [(0, l.jsx)("div", {
                                                        class: "w-auto p-2",
                                                        children: (0, l.jsx)("div", {
                                                            class: "relative w-14 h-14 text-2xl font-bold font-heading rounded-full",
                                                            style: {
                                                                backgroundColor: "#F9D8F4"
                                                            },
                                                            children: (0, l.jsx)("span", {
                                                                class: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                                                children: "4"
                                                            })
                                                        })
                                                    }), (0, l.jsx)("div", {
                                                        class: "flex-1 p-2",
                                                        children: (0, l.jsx)("div", {
                                                            class: "w-full h-px bg-gray-200"
                                                        })
                                                    })]
                                                }), (0, l.jsx)("h3", {
                                                    class: "text-xl font-semibold leading-normal md:max-w-xsunderline",
                                                    onClick: () => {
                                                        ej("Join 102,000+ happy customers"), eu(!0)
                                                    },
                                                    children: "Upgrade to PRO"
                                                }), (0, l.jsx)("p", {
                                                    className: " text-blue-500 underline",
                                                    onClick: () => {
                                                        ej("Join 102,000+ happy customers"), eu(!0)
                                                    },
                                                    children: "For unlimited videos, all voices and more!"
                                                })]
                                            })]
                                        })
                                    })]
                                }), K && K.messages && (0, l.jsxs)("section", {
                                    className: "p-6 rounded-xl my-6",
                                    children: [(0, l.jsxs)("h2", {
                                        class: "mb-10 text-4xl font-bold font-heading text-center pt-5",
                                        children: ["Examples made with ", t, " voice"]
                                    }), (0, l.jsx)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                        children: null == K ? void 0 : K.messages.map((e, t) => (0, l.jsx)(v, {
                                            item: e,
                                            index: t
                                        }))
                                    })]
                                }), K && K.reviews && (0, l.jsxs)("section", {
                                    className: "bg-gray-100 p-6 rounded-xl my-6",
                                    children: [(0, l.jsx)("h2", {
                                        class: "mb-10 text-4xl font-bold font-heading text-center pt-5",
                                        children: "Reviews"
                                    }), (0, l.jsx)("div", {
                                        className: "flex flex-col md:flex-row md:space-x-6",
                                        children: null == K ? void 0 : K.reviews.map((e, t) => (0, l.jsxs)("div", {
                                            className: "flex flex-col items-start space-y-4 p-8 rounded-lg bg-white w-full md:w-1/3 max-w-md mx-auto shadow-md mb-10",
                                            children: [(0, l.jsx)("p", {
                                                className: "text-gray-600",
                                                children: e.text
                                            }), (0, l.jsx)("div", {
                                                className: "flex items-center space-x-2",
                                                children: [, , , , , ].fill((0, l.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "21",
                                                    height: "20",
                                                    viewBox: "0 0 21 20",
                                                    fill: "none",
                                                    children: (0, l.jsx)("path", {
                                                        d: "M18.8203 8.93578L15.2969 12.0108L16.3524 16.5889C16.4082 16.8282 16.3923 17.0787 16.3065 17.309C16.2208 17.5394 16.0691 17.7393 15.8703 17.8839C15.6716 18.0284 15.4346 18.1112 15.1891 18.1218C14.9436 18.1324 14.7004 18.0704 14.4899 17.9436L10.4969 15.5217L6.51252 17.9436C6.30202 18.0704 6.05881 18.1324 5.81328 18.1218C5.56775 18.1112 5.33079 18.0284 5.13204 17.8839C4.9333 17.7393 4.78157 17.5394 4.69584 17.309C4.6101 17.0787 4.59416 16.8282 4.65002 16.5889L5.70392 12.0155L2.1797 8.93578C1.99331 8.77502 1.85852 8.5628 1.79225 8.32574C1.72598 8.08868 1.73117 7.83733 1.80718 7.60321C1.88319 7.36909 2.02663 7.16262 2.21952 7.0097C2.4124 6.85678 2.64614 6.76421 2.89142 6.74359L7.53674 6.34125L9.35002 2.01625C9.44471 1.78931 9.60443 1.59546 9.80907 1.45911C10.0137 1.32276 10.2541 1.25 10.5 1.25C10.7459 1.25 10.9863 1.32276 11.191 1.45911C11.3956 1.59546 11.5553 1.78931 11.65 2.01625L13.4688 6.34125L18.1125 6.74359C18.3578 6.76421 18.5915 6.85678 18.7844 7.0097C18.9773 7.16262 19.1207 7.36909 19.1968 7.60321C19.2728 7.83733 19.278 8.08868 19.2117 8.32574C19.1454 8.5628 19.0106 8.77502 18.8242 8.93578H18.8203Z",
                                                        fill: "#FEA238"
                                                    })
                                                }))
                                            }), (0, l.jsxs)("strong", {
                                                className: "text-gray-800",
                                                children: ["-", e.author]
                                            })]
                                        }, t))
                                    })]
                                }), (0, l.jsxs)("section", {
                                    className: a().benefits,
                                    children: [(0, l.jsx)("h2", {
                                        className: a().gridHeadline,
                                        style: {
                                            marginTop: es ? 80 : 70,
                                            fontWeight: 900
                                        },
                                        children: "Discover the #1 Free AI Voice Generator"
                                    }), (0, l.jsx)("p", {
                                        className: "text-center",
                                        style: {
                                            marginBottom: es ? 30 : 50
                                        },
                                        children: "Parrot AI is now on the app store!"
                                    }), (0, l.jsxs)("div", {
                                        className: a().benefitRow,
                                        children: [(0, l.jsxs)("div", {
                                            className: a().benefitText,
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "flex-start",
                                                gap: 16,
                                                padding: 20
                                            },
                                            children: [(0, l.jsx)("h3", {
                                                style: {
                                                    color: "#121212",
                                                    fontSize: 32,
                                                    fontStyle: "normal",
                                                    fontWeight: 700,
                                                    lineHeight: "130%",
                                                    textAlign: "left"
                                                },
                                                children: "Most Realistic AI Voices for Celebrities & Presidents"
                                            }), (0, l.jsx)("p", {
                                                style: {
                                                    textAlign: "left",
                                                    color: "#6F7076",
                                                    fontSize: 16,
                                                    paddingBottom: 10
                                                },
                                                children: "Our cutting-edge AI voice generator creates stunningly lifelike voices. Experience the most realistic text-to-speech engine that is almost indistinguishable from human speech. It’s perfect for voiceovers, presentations, or even AI voice cloning."
                                            }), (0, l.jsxs)("button", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    gap: 8,
                                                    padding: "14px 24px",
                                                    borderRadius: 50,
                                                    backgroundColor: "#FFF2D1",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    color: "#121212",
                                                    fontSize: 16,
                                                    fontWeight: 700
                                                },
                                                onClick: () => {
                                                    window.open("https://apps.apple.com/app/apple-store/id6443546763?pt=125616325&ct=website-share&mt=8")
                                                },
                                                children: ["Download", (0, l.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    children: (0, l.jsx)("path", {
                                                        d: "M14.4137 10.6632L8.16374 16.9132C7.98762 17.0894 7.74874 17.1883 7.49967 17.1883C7.2506 17.1883 7.01173 17.0894 6.83561 16.9132C6.65949 16.7371 6.56055 16.4983 6.56055 16.2492C6.56055 16.0001 6.65949 15.7612 6.83561 15.5851L12.4223 9.99997L6.83717 4.41325C6.74997 4.32604 6.68079 4.22251 6.6336 4.10857C6.5864 3.99463 6.56211 3.87251 6.56211 3.74918C6.56211 3.62586 6.5864 3.50374 6.6336 3.3898C6.68079 3.27586 6.74997 3.17233 6.83717 3.08512C6.92438 2.99792 7.02791 2.92874 7.14185 2.88155C7.25579 2.83435 7.37791 2.81006 7.50124 2.81006C7.62456 2.81006 7.74668 2.83435 7.86062 2.88155C7.97456 2.92874 8.07809 2.99792 8.1653 3.08512L14.4153 9.33512C14.5026 9.42232 14.5718 9.5259 14.619 9.63991C14.6662 9.75392 14.6904 9.87612 14.6903 9.99951C14.6901 10.1229 14.6656 10.245 14.6182 10.3589C14.5707 10.4728 14.5012 10.5763 14.4137 10.6632Z",
                                                        fill: "black"
                                                    })
                                                })]
                                            })]
                                        }), (0, l.jsx)("div", {
                                            className: a().benefitImage,
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            children: (0, l.jsx)(n(), {
                                                src: "/graphic-two.png",
                                                alt: "Realistic AI Voice Generator",
                                                loading: "lazy",
                                                height: 516,
                                                width: 524
                                            })
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "".concat(a().benefitRow, " ").concat(a().alternate),
                                        children: [(0, l.jsxs)("div", {
                                            className: a().benefitText,
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "flex-start",
                                                gap: 16,
                                                padding: 20
                                            },
                                            children: [(0, l.jsx)("h3", {
                                                style: {
                                                    color: "#121212",
                                                    fontSize: 32,
                                                    fontStyle: "normal",
                                                    fontWeight: 700,
                                                    lineHeight: "130%"
                                                },
                                                children: "Tons of Ai Celebrities Cloned"
                                            }), (0, l.jsx)("p", {
                                                style: {
                                                    textAlign: "left",
                                                    color: "#6F7076",
                                                    fontSize: 16,
                                                    paddingBottom: 10
                                                },
                                                children: "Dive into an extensive library of AI celebrity voices. From your favorite movie stars to iconic historical figures, our AI text-to-speech technology gives you the power to clone voices that resonate with your audience."
                                            }), (0, l.jsxs)("button", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    gap: 8,
                                                    padding: "14px 24px",
                                                    borderRadius: 50,
                                                    backgroundColor: "#FFF2D1",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    color: "#121212",
                                                    fontSize: 16,
                                                    fontWeight: 700
                                                },
                                                onClick: () => {
                                                    window.open("https://apps.apple.com/app/apple-store/id6443546763?pt=125616325&ct=website-share&mt=8")
                                                },
                                                children: ["Download", (0, l.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    children: (0, l.jsx)("path", {
                                                        d: "M14.4137 10.6632L8.16374 16.9132C7.98762 17.0894 7.74874 17.1883 7.49967 17.1883C7.2506 17.1883 7.01173 17.0894 6.83561 16.9132C6.65949 16.7371 6.56055 16.4983 6.56055 16.2492C6.56055 16.0001 6.65949 15.7612 6.83561 15.5851L12.4223 9.99997L6.83717 4.41325C6.74997 4.32604 6.68079 4.22251 6.6336 4.10857C6.5864 3.99463 6.56211 3.87251 6.56211 3.74918C6.56211 3.62586 6.5864 3.50374 6.6336 3.3898C6.68079 3.27586 6.74997 3.17233 6.83717 3.08512C6.92438 2.99792 7.02791 2.92874 7.14185 2.88155C7.25579 2.83435 7.37791 2.81006 7.50124 2.81006C7.62456 2.81006 7.74668 2.83435 7.86062 2.88155C7.97456 2.92874 8.07809 2.99792 8.1653 3.08512L14.4153 9.33512C14.5026 9.42232 14.5718 9.5259 14.619 9.63991C14.6662 9.75392 14.6904 9.87612 14.6903 9.99951C14.6901 10.1229 14.6656 10.245 14.6182 10.3589C14.5707 10.4728 14.5012 10.5763 14.4137 10.6632Z",
                                                        fill: "black"
                                                    })
                                                })]
                                            })]
                                        }), (0, l.jsx)("div", {
                                            className: a().benefitImage,
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            children: (0, l.jsx)(n(), {
                                                src: "/graphic-three.png",
                                                alt: "Wide Variety of AI Celebrities",
                                                loading: "lazy",
                                                height: 526,
                                                width: 553
                                            })
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: a().benefitRow,
                                        children: [(0, l.jsxs)("div", {
                                            className: a().benefitText,
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "flex-start",
                                                gap: 16,
                                                padding: 20
                                            },
                                            children: [(0, l.jsx)("h3", {
                                                style: {
                                                    color: "#121212",
                                                    fontSize: 32,
                                                    fontStyle: "normal",
                                                    fontWeight: 700,
                                                    lineHeight: "130%"
                                                },
                                                children: "Make Your Friends Laugh"
                                            }), (0, l.jsx)("p", {
                                                style: {
                                                    textAlign: "left",
                                                    color: "#6F7076",
                                                    fontSize: 16,
                                                    paddingBottom: 10
                                                },
                                                children: "Inject humor and creativity into your projects with our AI voice generator. Clone voices, create hilarious skits or parodies, and share them with your friends. The possibilities are endless!"
                                            }), (0, l.jsxs)("button", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    gap: 8,
                                                    padding: "14px 24px",
                                                    borderRadius: 50,
                                                    backgroundColor: "#FFF2D1",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    color: "#121212",
                                                    fontSize: 16,
                                                    fontWeight: 700
                                                },
                                                onClick: () => {
                                                    window.open("https://apps.apple.com/app/apple-store/id6443546763?pt=125616325&ct=website-share&mt=8")
                                                },
                                                children: ["Download", (0, l.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    children: (0, l.jsx)("path", {
                                                        d: "M14.4137 10.6632L8.16374 16.9132C7.98762 17.0894 7.74874 17.1883 7.49967 17.1883C7.2506 17.1883 7.01173 17.0894 6.83561 16.9132C6.65949 16.7371 6.56055 16.4983 6.56055 16.2492C6.56055 16.0001 6.65949 15.7612 6.83561 15.5851L12.4223 9.99997L6.83717 4.41325C6.74997 4.32604 6.68079 4.22251 6.6336 4.10857C6.5864 3.99463 6.56211 3.87251 6.56211 3.74918C6.56211 3.62586 6.5864 3.50374 6.6336 3.3898C6.68079 3.27586 6.74997 3.17233 6.83717 3.08512C6.92438 2.99792 7.02791 2.92874 7.14185 2.88155C7.25579 2.83435 7.37791 2.81006 7.50124 2.81006C7.62456 2.81006 7.74668 2.83435 7.86062 2.88155C7.97456 2.92874 8.07809 2.99792 8.1653 3.08512L14.4153 9.33512C14.5026 9.42232 14.5718 9.5259 14.619 9.63991C14.6662 9.75392 14.6904 9.87612 14.6903 9.99951C14.6901 10.1229 14.6656 10.245 14.6182 10.3589C14.5707 10.4728 14.5012 10.5763 14.4137 10.6632Z",
                                                        fill: "black"
                                                    })
                                                })]
                                            })]
                                        }), (0, l.jsx)("div", {
                                            className: a().benefitImage,
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            children: (0, l.jsx)(n(), {
                                                src: "/graphic-four.png",
                                                alt: "Create Hilarious Content",
                                                loading: "lazy",
                                                height: 596,
                                                width: 500
                                            })
                                        })]
                                    })]
                                }), es && (0, l.jsx)("div", {
                                    className: "z-10 fixed bottom-0 left-0 w-full flex justify-center items-center p-4",
                                    children: (0, l.jsx)("button", {
                                        className: "btn btn-primary rounded-full",
                                        onClick: () => {
                                            window.open("https://apps.apple.com/app/apple-store/id6443546763?pt=125616325&ct=website-gen-mobile-button&mt=8"), window.gtag("event", "app_download_button_click", {
                                                event_category: "engagement",
                                                event_label: "App Download Button"
                                            })
                                        },
                                        children: "Use our app"
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: a().orangeSection,
                                    children: [(0, l.jsxs)("div", {
                                        className: a().textColumn,
                                        style: {
                                            width: es ? "100%" : "50%"
                                        },
                                        children: [(0, l.jsx)("h3", {
                                            style: {
                                                fontWeight: "800",
                                                fontSize: "1.25rem"
                                            },
                                            children: "Download on app store now"
                                        }), (0, l.jsx)("p", {
                                            style: {
                                                marginTop: 1
                                            },
                                            children: "Light up the group chat with epic audio clips, roasts, and funny audio from your favorite celebrities."
                                        }), (0, l.jsxs)("button", {
                                            className: a().downloadButton,
                                            style: {
                                                maxWidth: "300px",
                                                fontWeight: "bold",
                                                marginTop: 10
                                            },
                                            onClick: () => window.open("https://apps.apple.com/app/apple-store/id6443546763?pt=125616325&ct=website-gen-cta&mt=8"),
                                            children: [(0, l.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                children: (0, l.jsx)("path", {
                                                    d: "M20.0484 11.762L9.54838 23.012C9.43711 23.1307 9.29023 23.21 9.12992 23.238C8.9696 23.2659 8.80455 23.241 8.65966 23.1669C8.51476 23.0928 8.3979 22.9736 8.3267 22.8273C8.2555 22.681 8.23382 22.5154 8.26494 22.3557L9.63932 15.481L4.23651 13.4523C4.12047 13.4089 4.017 13.3374 3.93533 13.2442C3.85366 13.1511 3.79633 13.0392 3.76847 12.9184C3.74062 12.7977 3.7431 12.672 3.77569 12.5525C3.80828 12.433 3.86998 12.3234 3.95526 12.2335L14.4553 0.983518C14.5665 0.864771 14.7134 0.785435 14.8737 0.757484C15.034 0.729534 15.1991 0.754484 15.344 0.82857C15.4889 0.902656 15.6057 1.02186 15.6769 1.16819C15.7481 1.31452 15.7698 1.48004 15.7387 1.63977L14.3606 8.52196L19.7634 10.5479C19.8786 10.5916 19.9812 10.663 20.0622 10.7558C20.1433 10.8485 20.2002 10.9599 20.228 11.0799C20.2558 11.1999 20.2536 11.3249 20.2216 11.4438C20.1897 11.5628 20.1289 11.6721 20.0446 11.762H20.0484Z",
                                                    fill: "white"
                                                })
                                            }), "Download"]
                                        })]
                                    }), !es && (0, l.jsxs)("div", {
                                        className: a().imageColumn,
                                        children: [(0, l.jsx)("div", {
                                            className: a().imageBackground
                                        }), (0, l.jsx)(n(), {
                                            src: "/illustration5.png",
                                            width: 650,
                                            height: 650,
                                            loading: "lazy",
                                            style: {
                                                position: "relative",
                                                zIndex: 2,
                                                top: "-30px"
                                            }
                                        })]
                                    })]
                                })]
                            }), (0, l.jsx)(m.Z, {
                                isModalOpen: ep,
                                setIsModalOpen: eu,
                                ...ev && {
                                    title: ev
                                }
                            })]
                        }), (0, l.jsx)(p.Z, {})]
                    })
                }
        }
    },
    function (e) {
        e.O(0, [5445, 5675, 1664, 5121, 9600, 8866, 2966, 5208, 8472, 5939, 3111, 9774, 2888, 179], function () {
            return e(e.s = 8717)
        }), _N_E = e.O()
    }
]);
