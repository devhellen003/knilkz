import {
    j as e,
    u as X,
    c as q
} from "./rainbowkit-1c226f0f.js";
import {
    R as S,
    P as I,
    O as P,
    C as T,
    L as Y
} from "./LoadingButton-eb1fad67.js";
import {
    r as s,
    u as J
} from "./react-74e86ac5.js";
import {
    c as Q,
    u as V,
    P as O,
    a as L,
    d as Z,
    e as ee,
    L as te,
    b as j
} from "./index-4955dd93.js";
import {
    u as se,
    o as D,
    C as z,
    a as R
} from "./index-f11a2cde.js";
import {
    S as ne
} from "./index-1b0fe9d4.js";
import {
    u as ae
} from "./index-fd010574.js";
import {
    u as ie
} from "./useAirdropInfo-319d69b2.js";
import {
    g as re
} from "./index-c40f0c0e.js";
import {
    u as oe
} from "./useTermsStore-46735530.js";
import "./___vite-browser-external_commonjs-proxy-d1c6d304.js";

function ce(t) {
    const a = s.useRef({
        value: t,
        previous: t
    });
    return s.useMemo(() => (a.current.value !== t && (a.current.previous = a.current.value, a.current.value = t), a.current.previous), [t])
}
var E = "Checkbox",
    [le, we] = Q(E),
    [de, xe] = le(E),
    U = s.forwardRef((t, a) => {
        const {
            __scopeCheckbox: n,
            name: h,
            checked: o,
            defaultChecked: i,
            required: v,
            disabled: m,
            value: c = "on",
            onCheckedChange: x,
            ...f
        } = t, [l, u] = s.useState(null), y = V(a, r => u(r)), g = s.useRef(!1), C = l ? !!l.closest("form") : !0, [p = !1, N] = se({
            prop: o,
            defaultProp: i,
            onChange: x
        }), _ = s.useRef(p);
        return s.useEffect(() => {
            const r = l ? .form;
            if (r) {
                const b = () => N(_.current);
                return r.addEventListener("reset", b), () => r.removeEventListener("reset", b)
            }
        }, [l, N]), e.jsxs(de, {
            scope: n,
            state: p,
            disabled: m,
            children: [e.jsx(O.button, {
                type: "button",
                role: "checkbox",
                "aria-checked": k(p) ? "mixed" : p,
                "aria-required": v,
                "data-state": B(p),
                "data-disabled": m ? "" : void 0,
                disabled: m,
                value: c,
                ...f,
                ref: y,
                onKeyDown: L(t.onKeyDown, r => {
                    r.key === "Enter" && r.preventDefault()
                }),
                onClick: L(t.onClick, r => {
                    N(b => k(b) ? !0 : !b), C && (g.current = r.isPropagationStopped(), g.current || r.stopPropagation())
                })
            }), C && e.jsx(pe, {
                control: l,
                bubbles: !g.current,
                name: h,
                value: c,
                checked: p,
                required: v,
                disabled: m,
                style: {
                    transform: "translateX(-100%)"
                }
            })]
        })
    });
U.displayName = E;
var F = "CheckboxIndicator",
    $ = s.forwardRef((t, a) => {
        const {
            __scopeCheckbox: n,
            forceMount: h,
            ...o
        } = t, i = xe(F, n);
        return e.jsx(Z, {
            present: h || k(i.state) || i.state === !0,
            children: e.jsx(O.span, {
                "data-state": B(i.state),
                "data-disabled": i.disabled ? "" : void 0,
                ...o,
                ref: a,
                style: {
                    pointerEvents: "none",
                    ...t.style
                }
            })
        })
    });
$.displayName = F;
var pe = t => {
    const {
        control: a,
        checked: n,
        bubbles: h = !0,
        ...o
    } = t, i = s.useRef(null), v = ce(n), m = ee(a);
    return s.useEffect(() => {
        const c = i.current,
            x = window.HTMLInputElement.prototype,
            l = Object.getOwnPropertyDescriptor(x, "checked").set;
        if (v !== n && l) {
            const u = new Event("click", {
                bubbles: h
            });
            c.indeterminate = k(n), l.call(c, k(n) ? !1 : n), c.dispatchEvent(u)
        }
    }, [v, n, h]), e.jsx("input", {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: k(n) ? !1 : n,
        ...o,
        tabIndex: -1,
        ref: i,
        style: { ...t.style,
            ...m,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    })
};

function k(t) {
    return t === "indeterminate"
}

function B(t) {
    return k(t) ? "indeterminate" : t ? "checked" : "unchecked"
}
var M = U,
    A = $;
const he = [{
        name: "Nova Points",
        desc: e.jsxs(e.Fragment, {
            children: [e.jsx("p", {
                children: "Nova Points earned by depositing, holding assets and interacting with the Eco dApps >= 5"
            }), e.jsx("p", {
                children: "Snapshot time: 00:00 UTC, May 30, 2024"
            })]
        })
    }, {
        name: "Nova Lynks NFT",
        desc: "NFT ID: 0~3999"
    }, {
        name: "zkLink Loyalty Points",
        desc: e.jsxs(e.Fragment, {
            children: [e.jsx("p", {
                children: ">=400 (except for the 71,846 users with 10-400 loyalty points, plus high Gitcoin MBD score, and high TrustaLabs MEDIA score)"
            }), e.jsx("p", {
                children: "Snapshot time: 07:00 UTC, May 19, 2024"
            })]
        })
    }, {
        name: "OKX Cryptopedia",
        desc: "* End date: 16:00 UTC, May 28th, 2024"
    }, {
        name: "Task2Get: Engage with zkLink",
        desc: "* End date: 09:00 UTC, March 11th, 2024"
    }, {
        name: "Binance Web3 Wallet & zkLink Campaign",
        desc: e.jsxs(e.Fragment, {
            children: [e.jsx("p", {
                children: "* The rewards will be distributed by the Binance Web3 Wallet team."
            }), e.jsx("p", {
                children: "* End date: 23:59 UTC, May 22, 2024"
            })]
        })
    }],
    _e = () => {
        const {
            address: t
        } = X(), [a, n] = s.useState(!1), [h, o] = s.useState(!1), {
            accessToken: i
        } = ae(), {
            airdropInfo: v,
            setAirdropInfo: m
        } = ie(), [c, x] = s.useState(!1), {
            isConfirmTerms: f,
            setIsConfirmTerms: l
        } = oe(), [u, y] = s.useState(!1), [g, C] = s.useState(!1), p = J(), {
            openConnectModal: N
        } = q(), _ = async () => {
            if (!(!i || !f)) {
                n(!0);
                try {
                    const d = await re();
                    if (console.log(d), d.status === "0" && d ? .result) {
                        const {
                            airdrop: w,
                            discord: W,
                            twitter: G,
                            zkPass: K,
                            gitCoin: H
                        } = d.result;
                        m({
                            airdrop: w,
                            twitter: G,
                            discord: W,
                            zkPass: K,
                            gitCoin: H
                        }), p(w ? "/congratulations" : "/not-eligible")
                    }
                } catch (d) {
                    console.log("handleAuthLogin error:", d)
                }
                n(!1)
            }
        };
        s.useEffect(() => {
            t && i && f && _()
        }, [t, i, f]);
        const r = s.useMemo(() => !u || !g, [u, g]);
        s.useEffect(() => {
            c || (y(!1), C(!1))
        }, [c]);
        const b = () => {
            l(!0), x(!1), N ? .()
        };
        return s.useEffect(() => {
            t && !f && x(!0)
        }, [t, f]), e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "landing-container",
                children: [a && e.jsx("div", {
                    className: "fixed inset-0 z-[999]",
                    children: e.jsx(te, {})
                }), e.jsxs("div", {
                    children: [e.jsx("div", {
                        className: "banner hidden md:block",
                        children: "Please confirm that the site URL is: https://zklink.io/novadrop/"
                    }), e.jsx("div", {
                        className: "relative md:mt-[8px] mt-[30px] md:mx-[68px] mx-[20px]",
                        children: e.jsx("a", {
                            href: "https://zk.link",
                            target: "_blank",
                            className: "inline-block",
                            children: e.jsx("img", {
                                src: `${j}/images/zklink.svg`,
                                alt: "Logo",
                                className: "md:w-[228px] md:h-[68px] w-[108px] h-[32px]"
                            })
                        })
                    })]
                }), e.jsx("div", {
                    className: "px-[20px] main-content flex flex-col justify-end items-center",
                    children: e.jsxs("div", {
                        children: [e.jsx("div", {
                            className: "title md:mt-[30px] mt-[80px]",
                            children: e.jsx("h2", {
                                className: "title-main text-[34px] leading-[40px] md:text-[46px] md:leading-[56px]",
                                children: "NovaDrop Round One: Genesis"
                            })
                        }), e.jsx("div", {
                            className: "btn-box mt-[30px] flex justify-center items-center gap-[8px] md:gap-[20px]",
                            children: e.jsxs(D, {
                                className: "btn btn-green px-[22px] h-[53px] text-[16px] font-[700] font-chakra-petch flex justify-center items-center gap-[10px]",
                                onClick: () => {
                                    x(!0)
                                },
                                children: [e.jsx("span", {
                                    children: "Connect Your Wallet"
                                }), e.jsx("img", {
                                    src: `${j}/images/chevron-right-black.svg`,
                                    alt: "",
                                    width: 13,
                                    height: 13
                                })]
                            })
                        }), e.jsx("div", {
                            className: "flex justify-center",
                            children: e.jsx("span", {
                                className: "link-underline mt-[26px]",
                                onClick: () => o(!0),
                                children: "Eligibility Criteria"
                            })
                        }), e.jsxs("div", {
                            className: "timeline mt-[30px] md:mt-[50px] flex justify-center",
                            children: [e.jsx("img", {
                                src: `${j}/images/timeline@2x.png`,
                                alt: "",
                                width: 758,
                                height: 207,
                                className: "hidden md:block"
                            }), e.jsx("img", {
                                src: `${j}/images/timeline-h5.png`,
                                alt: "",
                                width: 240,
                                height: 285,
                                className: "block md:hidden"
                            })]
                        })]
                    })
                }), e.jsxs("div", {
                    className: "md:absolute md:bottom-0 md:left-0 md:right-0 pt-[50px] pb-[20px] md:p-0 flex flex-col justify-center items-center gap-[10px]",
                    children: [e.jsx(ne, {}), e.jsx("a", {
                        href: "https://zk.link/airdrop-terms-and-conditions",
                        target: "_blank",
                        className: "link-underline md:absolute md:right-[30px] md:bottom-[20px] z-[10]",
                        children: "NovaDrop terms and conditions."
                    })]
                })]
            }), e.jsx(S, {
                open: h,
                children: e.jsxs(I, {
                    children: [e.jsx(P, {
                        className: "bg-rgba-black-60 data-[state=open]:animate-overlayShow fixed inset-0",
                        onClick: () => o(!1)
                    }), e.jsx(T, {
                        className: "dialog-content dialog-bg p-[30px] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-w-[760px] translate-x-[-50%] translate-y-[-50%] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",
                        children: e.jsxs("div", {
                            className: "eligibility-criteria-dialog font-chakra-petch",
                            children: [e.jsxs("div", {
                                className: "dialog-title border-bottom",
                                children: [e.jsxs("div", {
                                    className: "flex justify-between items-center",
                                    children: [e.jsx("span", {
                                        className: "text-[#fff] text-[22px] font-[700]",
                                        children: "Eligibility Criteria"
                                    }), e.jsx("span", {
                                        className: "cursor-pointer",
                                        onClick: () => o(!1),
                                        children: e.jsx(z, {
                                            width: 24,
                                            height: 24
                                        })
                                    })]
                                }), e.jsx("p", {
                                    className: "mt-[20px] text-[#fff] text-[16px] font-[400] leading-[24px]",
                                    children: "The following criteria was used to determine eligibility"
                                })]
                            }), e.jsx("div", {
                                className: "dialog-list",
                                children: he.map((d, w) => e.jsxs("div", {
                                    className: "mt-[20px] flex gap-[8px]",
                                    children: [e.jsx("div", {
                                        children: e.jsx("img", {
                                            src: `${j}/images/dialog-list-item.svg`,
                                            alt: "",
                                            width: 20,
                                            height: 20,
                                            className: "block min-w-[20px] w-[20px] h-[20px]"
                                        })
                                    }), e.jsxs("div", {
                                        children: [e.jsx("h4", {
                                            className: "text-[#fff] text-18px] font-[700]",
                                            children: d.name
                                        }), d.desc && e.jsx("div", {
                                            className: "mt-[12px] text-[#fff] text-[16px] leading-[22px] opacity-80",
                                            children: d.desc
                                        })]
                                    })]
                                }, w))
                            }), e.jsx("div", {
                                className: "mt-[20px] pt-[20px] confirm-btn",
                                children: e.jsxs(D, {
                                    className: "w-full h-[53px] block text-center text-[16px] text-[#3E3E3E] font-[700] font-chakra-petch block rounded-[12px] bg-[#03D498] cursor-pointer flex justify-center items-center gap-[10px]",
                                    onClick: () => o(!1),
                                    children: [e.jsx("span", {
                                        children: "Confirm"
                                    }), e.jsx("img", {
                                        src: `${j}/images/chevron-right-black.svg`,
                                        alt: "",
                                        width: 13,
                                        height: 13
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }), e.jsx(S, {
                open: c,
                children: e.jsxs(I, {
                    children: [e.jsx(P, {
                        className: "bg-rgba-black-60 data-[state=open]:animate-overlayShow fixed inset-0 z-[0]",
                        onClick: () => x(!1)
                    }), e.jsx(T, {
                        className: "p-[30px] dialog-bg data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",
                        children: e.jsxs("div", {
                            className: "terms-dialog font-chakra-petch",
                            children: [e.jsxs("div", {
                                className: "dialog-title border-bottom",
                                children: [e.jsxs("div", {
                                    className: "flex justify-between items-center",
                                    children: [e.jsx("span", {
                                        className: "text-[#fff] text-[22px] font-[700]",
                                        children: "Terms of Use"
                                    }), e.jsx("span", {
                                        className: "cursor-pointer",
                                        onClick: () => x(!1),
                                        children: e.jsx(z, {
                                            width: 24,
                                            height: 24
                                        })
                                    })]
                                }), e.jsxs("p", {
                                    className: "mt-[20px] text-[#fff] text-[16px] font-[400] leading-[24px]",
                                    children: ["Please confirm that you agree to the", " ", e.jsx("a", {
                                        href: "https://zklink.io/airdrop-terms-and-conditions.html",
                                        target: "blank",
                                        className: "underline underline-offest-1",
                                        children: "Airdrop Terms and Conditions"
                                    }), " ", "by checking the box below:"]
                                }), e.jsx("div", {
                                    children: e.jsxs("div", {
                                        className: "mt-[20px] flex",
                                        children: [e.jsx("div", {
                                            className: "w-[20px]",
                                            children: e.jsx(M, {
                                                checked: u,
                                                onCheckedChange: () => y(!u),
                                                className: "flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px] bg-transparent outline-none border-[1px] border-[#fff]",
                                                id: "c1",
                                                children: e.jsx(A, {
                                                    className: "text-[#fff]",
                                                    children: e.jsx(R, {})
                                                })
                                            })
                                        }), e.jsxs("label", {
                                            className: "pl-[8px] text-[14px] leading-[20px] text-[#D9D9D9]",
                                            htmlFor: "c1",
                                            children: ["I have read, understood, and agree to be bound by the", " ", e.jsx("a", {
                                                href: "https://zklink.io/airdrop-terms-and-conditions.html",
                                                target: "_blank",
                                                className: "text-[#fff] underline underline-offset-1",
                                                children: "airdrop terms and conditions"
                                            }), "."]
                                        })]
                                    })
                                })]
                            }), e.jsxs("div", {
                                className: "dialog-title border-bottom pt-[20px]",
                                children: [e.jsx("div", {
                                    className: "flex justify-between items-center",
                                    children: e.jsx("span", {
                                        className: "text-[#fff] text-[22px] font-[700]",
                                        children: "Terms of Use"
                                    })
                                }), e.jsx("p", {
                                    className: "mt-[20px] text-[#fff] text-[16px] font-[400] leading-[24px]",
                                    children: "Please confirm that you are NOT a U.S. citizen by checking the box below:"
                                }), e.jsxs("div", {
                                    className: "mt-[20px] flex",
                                    children: [e.jsx("div", {
                                        className: "w-[20px]",
                                        children: e.jsx(M, {
                                            checked: g,
                                            onCheckedChange: () => C(!g),
                                            className: "flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px] bg-transparent outline-none border-[1px] border-[#fff]",
                                            id: "c2",
                                            children: e.jsx(A, {
                                                className: "text-[#fff]",
                                                children: e.jsx(R, {})
                                            })
                                        })
                                    }), e.jsx("label", {
                                        className: "pl-[8px] text-[14px] leading-[20px] text-[#D9D9D9]",
                                        htmlFor: "c2",
                                        children: "I am not a U.S. citizen, a U.S. resident, or a person acting on behalf of a person or entity incorporated in, or located in, the U.S."
                                    })]
                                })]
                            }), e.jsx("div", {
                                className: "pt-[20px]",
                                children: e.jsxs(Y, {
                                    className: "w-full h-[53px] block text-center text-[16px] text-[#3E3E3E] font-[700] block rounded-[12px] bg-[#03D498] cursor-pointer flex justify-center items-center gap-[10px] border-[none] outline-0",
                                    disabled: r,
                                    onClick: b,
                                    children: [e.jsx("span", {
                                        children: "Confirm"
                                    }), e.jsx("img", {
                                        src: `${j}/images/chevron-right-black.svg`,
                                        width: 13,
                                        height: 13
                                    })]
                                })
                            })]
                        })
                    })]
                })
            })]
        })
    };
export {
    _e as
    default
};