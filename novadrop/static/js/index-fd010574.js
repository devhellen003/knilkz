import {
    R as M,
    r as E
} from "./react-74e86ac5.js";
import {
    d as B
} from "./rainbowkit-1c226f0f.js";
const L = t => {
        let e;
        const r = new Set,
            o = (u, g) => {
                const m = typeof u == "function" ? u(e) : u;
                if (!Object.is(m, e)) {
                    const h = e;
                    e = g ? ? (typeof m != "object" || m === null) ? m : Object.assign({}, e, m), r.forEach(y => y(e, h))
                }
            },
            n = () => e,
            c = {
                setState: o,
                getState: n,
                getInitialState: () => l,
                subscribe: u => (r.add(u), () => r.delete(u)),
                destroy: () => {
                    r.clear()
                }
            },
            l = e = t(o, n, c);
        return c
    },
    Y = t => t ? L(t) : L,
    {
        useDebugValue: q
    } = M,
    {
        useSyncExternalStoreWithSelector: Z
    } = B;
const Q = t => t;

function X(t, e = Q, r) {
    const o = Z(t.subscribe, t.getState, t.getServerState || t.getInitialState, e, r);
    return q(o), o
}
const $ = t => {
        const e = typeof t == "function" ? Y(t) : t,
            r = (o, n) => X(e, o, n);
        return Object.assign(r, e), r
    },
    G = t => t ? $(t) : $;

function K(t, e) {
    let r;
    try {
        r = t()
    } catch {
        return
    }
    return {
        getItem: n => {
            var a;
            const i = c => c === null ? null : JSON.parse(c, e ? .reviver),
                s = (a = r.getItem(n)) != null ? a : null;
            return s instanceof Promise ? s.then(i) : i(s)
        },
        setItem: (n, a) => r.setItem(n, JSON.stringify(a, e ? .replacer)),
        removeItem: n => r.removeItem(n)
    }
}
const x = t => e => {
        try {
            const r = t(e);
            return r instanceof Promise ? r : {
                then(o) {
                    return x(o)(r)
                },
                catch (o) {
                    return this
                }
            }
        } catch (r) {
            return {
                then(o) {
                    return this
                },
                catch (o) {
                    return x(o)(r)
                }
            }
        }
    },
    tt = (t, e) => (r, o, n) => {
        let a = {
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: p => p,
                version: 0,
                merge: (p, I) => ({ ...I,
                    ...p
                }),
                ...e
            },
            i = !1;
        const s = new Set,
            c = new Set;
        let l;
        try {
            l = a.getStorage()
        } catch {}
        if (!l) return t((...p) => {
            console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), r(...p)
        }, o, n);
        const u = x(a.serialize),
            g = () => {
                const p = a.partialize({ ...o()
                });
                let I;
                const d = u({
                    state: p,
                    version: a.version
                }).then(T => l.setItem(a.name, T)).catch(T => {
                    I = T
                });
                if (I) throw I;
                return d
            },
            m = n.setState;
        n.setState = (p, I) => {
            m(p, I), g()
        };
        const h = t((...p) => {
            r(...p), g()
        }, o, n);
        let y;
        const f = () => {
            var p;
            if (!l) return;
            i = !1, s.forEach(d => d(o()));
            const I = ((p = a.onRehydrateStorage) == null ? void 0 : p.call(a, o())) || void 0;
            return x(l.getItem.bind(l))(a.name).then(d => {
                if (d) return a.deserialize(d)
            }).then(d => {
                if (d)
                    if (typeof d.version == "number" && d.version !== a.version) {
                        if (a.migrate) return a.migrate(d.state, d.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return d.state
            }).then(d => {
                var T;
                return y = a.merge(d, (T = o()) != null ? T : h), r(y, !0), g()
            }).then(() => {
                I ? .(y, void 0), i = !0, c.forEach(d => d(y))
            }).catch(d => {
                I ? .(void 0, d)
            })
        };
        return n.persist = {
            setOptions: p => {
                a = { ...a,
                    ...p
                }, p.getStorage && (l = p.getStorage())
            },
            clearStorage: () => {
                l ? .removeItem(a.name)
            },
            getOptions: () => a,
            rehydrate: () => f(),
            hasHydrated: () => i,
            onHydrate: p => (s.add(p), () => {
                s.delete(p)
            }),
            onFinishHydration: p => (c.add(p), () => {
                c.delete(p)
            })
        }, f(), y || h
    },
    et = (t, e) => (r, o, n) => {
        let a = {
                storage: K(() => localStorage),
                partialize: f => f,
                version: 0,
                merge: (f, p) => ({ ...p,
                    ...f
                }),
                ...e
            },
            i = !1;
        const s = new Set,
            c = new Set;
        let l = a.storage;
        if (!l) return t((...f) => {
            console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), r(...f)
        }, o, n);
        const u = () => {
                const f = a.partialize({ ...o()
                });
                return l.setItem(a.name, {
                    state: f,
                    version: a.version
                })
            },
            g = n.setState;
        n.setState = (f, p) => {
            g(f, p), u()
        };
        const m = t((...f) => {
            r(...f), u()
        }, o, n);
        n.getInitialState = () => m;
        let h;
        const y = () => {
            var f, p;
            if (!l) return;
            i = !1, s.forEach(d => {
                var T;
                return d((T = o()) != null ? T : m)
            });
            const I = ((p = a.onRehydrateStorage) == null ? void 0 : p.call(a, (f = o()) != null ? f : m)) || void 0;
            return x(l.getItem.bind(l))(a.name).then(d => {
                if (d)
                    if (typeof d.version == "number" && d.version !== a.version) {
                        if (a.migrate) return a.migrate(d.state, d.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return d.state
            }).then(d => {
                var T;
                return h = a.merge(d, (T = o()) != null ? T : m), r(h, !0), u()
            }).then(() => {
                I ? .(h, void 0), h = o(), i = !0, c.forEach(d => d(h))
            }).catch(d => {
                I ? .(void 0, d)
            })
        };
        return n.persist = {
            setOptions: f => {
                a = { ...a,
                    ...f
                }, f.storage && (l = f.storage)
            },
            clearStorage: () => {
                l ? .removeItem(a.name)
            },
            getOptions: () => a,
            rehydrate: () => y(),
            hasHydrated: () => i,
            onHydrate: f => (s.add(f), () => {
                s.delete(f)
            }),
            onFinishHydration: f => (c.add(f), () => {
                c.delete(f)
            })
        }, a.skipHydration || y(), h || m
    },
    rt = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? tt(t, e) : et(t, e),
    at = rt,
    Zt = G()(at((t, e) => ({
        signedAddress: "",
        signature: "",
        accessToken: "",
        updateAccessToken: 0,
        setSignature: r => {
            t({
                signature: r
            })
        },
        setAccessToken: r => {
            localStorage.setItem("API_TOKEN", r), t({
                accessToken: r
            })
        },
        setSignedAddress: r => {
            t({
                signedAddress: r
            })
        },
        setUpdateAccessToken: () => {
            t({
                updateAccessToken: e().updateAccessToken + 1
            })
        }
    }), {
        name: "auth-storage"
    }));
let ot = {
        data: ""
    },
    nt = t => typeof window == "object" ? ((t ? t.querySelector("#_goober") : window._goober) || Object.assign((t || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : t || ot,
    st = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    it = /\/\*[^]*?\*\/|  +/g,
    H = /\n+/g,
    S = (t, e) => {
        let r = "",
            o = "",
            n = "";
        for (let a in t) {
            let i = t[a];
            a[0] == "@" ? a[1] == "i" ? r = a + " " + i + ";" : o += a[1] == "f" ? S(i, a) : a + "{" + S(i, a[1] == "k" ? "" : e) + "}" : typeof i == "object" ? o += S(i, e ? e.replace(/([^,])+/g, s => a.replace(/(^:.*)|([^,])+/g, c => /&/.test(c) ? c.replace(/&/g, s) : s ? s + " " + c : c)) : a) : i != null && (a = /^--/.test(a) ? a : a.replace(/[A-Z]/g, "-$&").toLowerCase(), n += S.p ? S.p(a, i) : a + ":" + i + ";")
        }
        return r + (e && n ? e + "{" + n + "}" : n) + o
    },
    _ = {},
    j = t => {
        if (typeof t == "object") {
            let e = "";
            for (let r in t) e += r + j(t[r]);
            return e
        }
        return t
    },
    lt = (t, e, r, o, n) => {
        let a = j(t),
            i = _[a] || (_[a] = (c => {
                let l = 0,
                    u = 11;
                for (; l < c.length;) u = 101 * u + c.charCodeAt(l++) >>> 0;
                return "go" + u
            })(a));
        if (!_[i]) {
            let c = a !== t ? t : (l => {
                let u, g, m = [{}];
                for (; u = st.exec(l.replace(it, ""));) u[4] ? m.shift() : u[3] ? (g = u[3].replace(H, " ").trim(), m.unshift(m[0][g] = m[0][g] || {})) : m[0][u[1]] = u[2].replace(H, " ").trim();
                return m[0]
            })(t);
            _[i] = S(n ? {
                ["@keyframes " + i]: c
            } : c, r ? "" : "." + i)
        }
        let s = r && _.g ? _.g : null;
        return r && (_.g = _[i]), ((c, l, u, g) => {
            g ? l.data = l.data.replace(g, c) : l.data.indexOf(c) === -1 && (l.data = u ? c + l.data : l.data + c)
        })(_[i], e, o, s), i
    },
    ct = (t, e, r) => t.reduce((o, n, a) => {
        let i = e[a];
        if (i && i.call) {
            let s = i(r),
                c = s && s.props && s.props.className || /^go/.test(s) && s;
            i = c ? "." + c : s && typeof s == "object" ? s.props ? "" : S(s, "") : s === !1 ? "" : s
        }
        return o + n + (i ? ? "")
    }, "");

function O(t) {
    let e = this || {},
        r = t.call ? t(e.p) : t;
    return lt(r.unshift ? r.raw ? ct(r, [].slice.call(arguments, 1), e.p) : r.reduce((o, n) => Object.assign(o, n && n.call ? n(e.p) : n), {}) : r, nt(e.target), e.g, e.o, e.k)
}
let J, U, z;
O.bind({
    g: 1
});
let b = O.bind({
    k: 1
});

function dt(t, e, r, o) {
    S.p = e, J = t, U = r, z = o
}

function R(t, e) {
    let r = this || {};
    return function() {
        let o = arguments;

        function n(a, i) {
            let s = Object.assign({}, a),
                c = s.className || n.className;
            r.p = Object.assign({
                theme: U && U()
            }, s), r.o = / *go\d+/.test(c), s.className = O.apply(r, o) + (c ? " " + c : ""), e && (s.ref = i);
            let l = t;
            return t[0] && (l = s.as || t, delete s.as), z && l[0] && z(s), J(l, s)
        }
        return e ? e(n) : n
    }
}
var ut = t => typeof t == "function",
    A = (t, e) => ut(t) ? t(e) : t,
    pt = (() => {
        let t = 0;
        return () => (++t).toString()
    })(),
    F = (() => {
        let t;
        return () => {
            if (t === void 0 && typeof window < "u") {
                let e = matchMedia("(prefers-reduced-motion: reduce)");
                t = !e || e.matches
            }
            return t
        }
    })(),
    ft = 20,
    V = new Map,
    mt = 1e3,
    W = t => {
        if (V.has(t)) return;
        let e = setTimeout(() => {
            V.delete(t), D({
                type: 4,
                toastId: t
            })
        }, mt);
        V.set(t, e)
    },
    Et = t => {
        let e = V.get(t);
        e && clearTimeout(e)
    },
    P = (t, e) => {
        switch (e.type) {
            case 0:
                return { ...t,
                    toasts: [e.toast, ...t.toasts].slice(0, ft)
                };
            case 1:
                return e.toast.id && Et(e.toast.id), { ...t,
                    toasts: t.toasts.map(a => a.id === e.toast.id ? { ...a,
                        ...e.toast
                    } : a)
                };
            case 2:
                let {
                    toast: r
                } = e;
                return t.toasts.find(a => a.id === r.id) ? P(t, {
                    type: 1,
                    toast: r
                }) : P(t, {
                    type: 0,
                    toast: r
                });
            case 3:
                let {
                    toastId: o
                } = e;
                return o ? W(o) : t.toasts.forEach(a => {
                    W(a.id)
                }), { ...t,
                    toasts: t.toasts.map(a => a.id === o || o === void 0 ? { ...a,
                        visible: !1
                    } : a)
                };
            case 4:
                return e.toastId === void 0 ? { ...t,
                    toasts: []
                } : { ...t,
                    toasts: t.toasts.filter(a => a.id !== e.toastId)
                };
            case 5:
                return { ...t,
                    pausedAt: e.time
                };
            case 6:
                let n = e.time - (t.pausedAt || 0);
                return { ...t,
                    pausedAt: void 0,
                    toasts: t.toasts.map(a => ({ ...a,
                        pauseDuration: a.pauseDuration + n
                    }))
                }
        }
    },
    w = [],
    k = {
        toasts: [],
        pausedAt: void 0
    },
    D = t => {
        k = P(k, t), w.forEach(e => {
            e(k)
        })
    },
    ht = {
        blank: 4e3,
        error: 4e3,
        success: 2e3,
        loading: 1 / 0,
        custom: 4e3
    },
    gt = (t = {}) => {
        let [e, r] = E.useState(k);
        E.useEffect(() => (w.push(r), () => {
            let n = w.indexOf(r);
            n > -1 && w.splice(n, 1)
        }), [e]);
        let o = e.toasts.map(n => {
            var a, i;
            return { ...t,
                ...t[n.type],
                ...n,
                duration: n.duration || ((a = t[n.type]) == null ? void 0 : a.duration) || t ? .duration || ht[n.type],
                style: { ...t.style,
                    ...(i = t[n.type]) == null ? void 0 : i.style,
                    ...n.style
                }
            }
        });
        return { ...e,
            toasts: o
        }
    },
    It = (t, e = "blank", r) => ({
        createdAt: Date.now(),
        visible: !0,
        type: e,
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        message: t,
        pauseDuration: 0,
        ...r,
        id: r ? .id || pt()
    }),
    C = t => (e, r) => {
        let o = It(e, t, r);
        return D({
            type: 2,
            toast: o
        }), o.id
    },
    v = (t, e) => C("blank")(t, e);
v.error = C("error");
v.success = C("success");
v.loading = C("loading");
v.custom = C("custom");
v.dismiss = t => {
    D({
        type: 3,
        toastId: t
    })
};
v.remove = t => D({
    type: 4,
    toastId: t
});
v.promise = (t, e, r) => {
    let o = v.loading(e.loading, { ...r,
        ...r ? .loading
    });
    return t.then(n => (v.success(A(e.success, n), {
        id: o,
        ...r,
        ...r ? .success
    }), n)).catch(n => {
        v.error(A(e.error, n), {
            id: o,
            ...r,
            ...r ? .error
        })
    }), t
};
var yt = (t, e) => {
        D({
            type: 1,
            toast: {
                id: t,
                height: e
            }
        })
    },
    vt = () => {
        D({
            type: 5,
            time: Date.now()
        })
    },
    Tt = t => {
        let {
            toasts: e,
            pausedAt: r
        } = gt(t);
        E.useEffect(() => {
            if (r) return;
            let a = Date.now(),
                i = e.map(s => {
                    if (s.duration === 1 / 0) return;
                    let c = (s.duration || 0) + s.pauseDuration - (a - s.createdAt);
                    if (c < 0) {
                        s.visible && v.dismiss(s.id);
                        return
                    }
                    return setTimeout(() => v.dismiss(s.id), c)
                });
            return () => {
                i.forEach(s => s && clearTimeout(s))
            }
        }, [e, r]);
        let o = E.useCallback(() => {
                r && D({
                    type: 6,
                    time: Date.now()
                })
            }, [r]),
            n = E.useCallback((a, i) => {
                let {
                    reverseOrder: s = !1,
                    gutter: c = 8,
                    defaultPosition: l
                } = i || {}, u = e.filter(h => (h.position || l) === (a.position || l) && h.height), g = u.findIndex(h => h.id === a.id), m = u.filter((h, y) => y < g && h.visible).length;
                return u.filter(h => h.visible).slice(...s ? [m + 1] : [0, m]).reduce((h, y) => h + (y.height || 0) + c, 0)
            }, [e]);
        return {
            toasts: e,
            handlers: {
                updateHeight: yt,
                startPause: vt,
                endPause: o,
                calculateOffset: n
            }
        }
    },
    _t = b `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    bt = b `
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    St = b `
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    Rt = R("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_t} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${bt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${St} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, Dt = b `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, xt = R("div")
`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Dt} 1s linear infinite;
`, Ct = b `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Nt = b `
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, Vt = R("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ct} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Nt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, wt = R("div")
`
  position: absolute;
`, kt = R("div")
`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, At = b `
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Ot = R("div")
`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${At} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Ut = ({
    toast: t
}) => {
    let {
        icon: e,
        type: r,
        iconTheme: o
    } = t;
    return e !== void 0 ? typeof e == "string" ? E.createElement(Ot, null, e) : e : r === "blank" ? null : E.createElement(kt, null, E.createElement(xt, { ...o
    }), r !== "loading" && E.createElement(wt, null, r === "error" ? E.createElement(Rt, { ...o
    }) : E.createElement(Vt, { ...o
    })))
}, zt = t => `
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Pt = t => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`, Lt = "0%{opacity:0;} 100%{opacity:1;}", $t = "0%{opacity:1;} 100%{opacity:0;}", Ht = R("div")
`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Wt = R("div")
`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, jt = (t, e) => {
    let r = t.includes("top") ? 1 : -1,
        [o, n] = F() ? [Lt, $t] : [zt(r), Pt(r)];
    return {
        animation: e ? `${b(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${b(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
}, Jt = E.memo(({
    toast: t,
    position: e,
    style: r,
    children: o
}) => {
    let n = t.height ? jt(t.position || e || "top-center", t.visible) : {
            opacity: 0
        },
        a = E.createElement(Ut, {
            toast: t
        }),
        i = E.createElement(Wt, { ...t.ariaProps
        }, A(t.message, t));
    return E.createElement(Ht, {
        className: t.className,
        style: { ...n,
            ...r,
            ...t.style
        }
    }, typeof o == "function" ? o({
        icon: a,
        message: i
    }) : E.createElement(E.Fragment, null, a, i))
});
dt(E.createElement);
var Ft = ({
        id: t,
        className: e,
        style: r,
        onHeightUpdate: o,
        children: n
    }) => {
        let a = E.useCallback(i => {
            if (i) {
                let s = () => {
                    let c = i.getBoundingClientRect().height;
                    o(t, c)
                };
                s(), new MutationObserver(s).observe(i, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                })
            }
        }, [t, o]);
        return E.createElement("div", {
            ref: a,
            className: e,
            style: r
        }, n)
    },
    Mt = (t, e) => {
        let r = t.includes("top"),
            o = r ? {
                top: 0
            } : {
                bottom: 0
            },
            n = t.includes("center") ? {
                justifyContent: "center"
            } : t.includes("right") ? {
                justifyContent: "flex-end"
            } : {};
        return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: F() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${e*(r?1:-1)}px)`,
            ...o,
            ...n
        }
    },
    Bt = O `
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    N = 16,
    Qt = ({
        reverseOrder: t,
        position: e = "top-center",
        toastOptions: r,
        gutter: o,
        children: n,
        containerStyle: a,
        containerClassName: i
    }) => {
        let {
            toasts: s,
            handlers: c
        } = Tt(r);
        return E.createElement("div", {
            style: {
                position: "fixed",
                zIndex: 9999,
                top: N,
                left: N,
                right: N,
                bottom: N,
                pointerEvents: "none",
                ...a
            },
            className: i,
            onMouseEnter: c.startPause,
            onMouseLeave: c.endPause
        }, s.map(l => {
            let u = l.position || e,
                g = c.calculateOffset(l, {
                    reverseOrder: t,
                    gutter: o,
                    defaultPosition: e
                }),
                m = Mt(u, g);
            return E.createElement(Ft, {
                id: l.id,
                key: l.id,
                onHeightUpdate: c.updateHeight,
                className: l.visible ? Bt : "",
                style: m
            }, l.type === "custom" ? A(l.message, l) : n ? n(l) : E.createElement(Jt, {
                toast: l,
                position: u
            }))
        }))
    },
    Xt = v;
export {
    Qt as I, Xt as _, G as c, at as p, Zt as u
};