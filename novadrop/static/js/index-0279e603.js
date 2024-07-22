import {
    u as w,
    b as y,
    a as C,
    j as h
} from "./rainbowkit-1c226f0f.js";
import {
    b as j,
    g as D
} from "./index-c40f0c0e.js";
import {
    u as T
} from "./useAirdropInfo-319d69b2.js";
import {
    c as G,
    u as x
} from "./index-fd010574.js";
import {
    e as k,
    T as M
} from "./Toast-7132ecba.js";
import {
    r as n,
    u as _,
    d as N,
    O
} from "./react-74e86ac5.js";
import {
    u as P
} from "./useTermsStore-46735530.js";
import "./___vite-browser-external_commonjs-proxy-d1c6d304.js";
const U = G(s => ({
        isLoading: !1,
        setIsLoading: i => {
            s(A => ({
                isLoading: A.isLoading = i
            }))
        }
    })),
    z = `Hello!
Please sign the message to confirm that you are the owner of this wallet`,
    B = () => {
        const {
            address: s
        } = w(), {
            signMessage: i
        } = y(), {
            updateAccessToken: A,
            accessToken: r,
            signature: t,
            signedAddress: d,
            setUpdateAccessToken: v,
            setAccessToken: g,
            setSignature: S,
            setSignedAddress: I
        } = x(), {
            connectors: L,
            disconnect: a
        } = C(), p = async () => {
            if (s) {
                for (const o of L) await a({
                    connector: o
                });
                await a()
            }
        };
        return {
            handleSign: async () => {
                !s || t || await i({
                    message: z
                }, {
                    onSuccess(o, l, c) {
                        console.log(o), S(o), I(s)
                    },
                    onError(o, l, c) {
                        console.error(o, l, c), p()
                    }
                })
            },
            handleDisconnect: p
        }
    },
    W = () => {
        const {
            address: s,
            isConnected: i
        } = w(), {
            updateAccessToken: A,
            accessToken: r,
            signature: t,
            signedAddress: d,
            setUpdateAccessToken: v,
            setAccessToken: g,
            setSignature: S,
            setSignedAddress: I
        } = x(), {
            isLoading: L,
            setIsLoading: a
        } = U(), {
            handleSign: p,
            handleDisconnect: E
        } = B(), o = n.useCallback(async () => {
            if (!(!s || !t)) {
                a(!0);
                try {
                    const e = await j({
                        address: s,
                        signature: t
                    });
                    console.log("handleAuthLogin", e), e.status === "0" && e ? .result && (a(!1), g(e.result))
                } catch (e) {
                    console.error("handleAuthLogin error", e)
                }
                a(!1)
            }
        }, [s, g, a, t]), {
            setAirdropInfo: l
        } = T(), c = async () => {
            try {
                const e = await D();
                console.log(e), e.status === "0" && e ? .result && l(e.result)
            } catch (e) {
                console.log("handleAuthLogin error:", e), e ? .statusCode === 401 && o()
            }
        };
        n.useEffect(() => (k.on("updateAirdropInfo", c), () => {
            k.remove("updateAirdropInfo", c)
        }), []), n.useEffect(() => {
            r && c()
        }, [r]), n.useEffect(() => {
            s && (t && !r ? o() : t || p())
        }, [s, t, r]);
        const {
            setIsConfirmTerms: b
        } = P(), m = _();
        n.useEffect(() => {
            i || (g(""), S(""), I(""), l({
                airdrop: !1,
                discord: !1,
                twitter: !1,
                zkPass: !1,
                gitCoin: !1
            }), b(!1), m("/"))
        }, [i]), n.useEffect(() => {
            d && s !== d && E()
        }, [s, d]), n.useEffect(() => {
            let e = null;
            return s && t ? e = setInterval(() => {
                o()
            }, 60 * 60 * 1e3) : e && clearInterval(e), () => {
                e && clearInterval(e)
            }
        }, [s, t]);
        const u = N(),
            {
                airdropInfo: f
            } = T();
        return n.useEffect(() => {
            u.pathname !== "/" && (r ? (!f.airdrop && u.pathname !== "/not-eligible" && m("/not-eligible"), f.airdrop && u.pathname !== "/congratulations" && (!f.twitter || !f.discord || u.pathname === "/not-eligible") && m("/congratulations")) : m("/"))
        }, [u, f, r]), h.jsxs(h.Fragment, {
            children: [h.jsx(O, {}), h.jsx(M, {})]
        })
    };
export {
    W as
    default
};