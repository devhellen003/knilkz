import {
    r as S,
    f as Ct,
    h as At
} from "./react-74e86ac5.js";
import {
    m as it,
    h as ke,
    u as St,
    P as at,
    y as fe,
    o as lt,
    s as Pt,
    r as Ot,
    S as ct,
    V as kt
} from "./index-4955dd93.js";
import {
    j as ut,
    f as Rt
} from "./rainbowkit-1c226f0f.js";
import {
    _ as Mt
} from "./index-fd010574.js";
var Lt = Ct["useId".toString()] || (() => {}),
    Tt = 0;

function un(e) {
    const [n, i] = S.useState(Lt());
    return it(() => {
        e || i(u => u ? ? String(Tt++))
    }, [e]), e || (n ? `radix-${n}` : "")
}

function fn({
    prop: e,
    defaultProp: n,
    onChange: i = () => {}
}) {
    const [u, l] = It({
        defaultProp: n,
        onChange: i
    }), h = e !== void 0, y = h ? e : u, v = ke(i), x = S.useCallback(A => {
        if (h) {
            const C = typeof A == "function" ? A(e) : A;
            C !== e && v(C)
        } else l(A)
    }, [h, e, l, v]);
    return [y, x]
}

function It({
    defaultProp: e,
    onChange: n
}) {
    const i = S.useState(e),
        [u] = i,
        l = S.useRef(u),
        h = ke(n);
    return S.useEffect(() => {
        l.current !== u && (h(u), l.current = u)
    }, [u, l, h]), i
}
var Te = "focusScope.autoFocusOnMount",
    Ie = "focusScope.autoFocusOnUnmount",
    Ke = {
        bubbles: !1,
        cancelable: !0
    },
    $t = "FocusScope",
    _t = S.forwardRef((e, n) => {
        const {
            loop: i = !1,
            trapped: u = !1,
            onMountAutoFocus: l,
            onUnmountAutoFocus: h,
            ...y
        } = e, [v, x] = S.useState(null), A = ke(l), O = ke(h), C = S.useRef(null), R = St(n, M => x(M)), _ = S.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        S.useEffect(() => {
            if (u) {
                let M = function(q) {
                        if (_.paused || !v) return;
                        const W = q.target;
                        v.contains(W) ? C.current = W : ue(C.current, {
                            select: !0
                        })
                    },
                    T = function(q) {
                        if (_.paused || !v) return;
                        const W = q.relatedTarget;
                        W !== null && (v.contains(W) || ue(C.current, {
                            select: !0
                        }))
                    },
                    $ = function(q) {
                        if (document.activeElement === document.body)
                            for (const oe of q) oe.removedNodes.length > 0 && ue(v)
                    };
                document.addEventListener("focusin", M), document.addEventListener("focusout", T);
                const w = new MutationObserver($);
                return v && w.observe(v, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", M), document.removeEventListener("focusout", T), w.disconnect()
                }
            }
        }, [u, v, _.paused]), S.useEffect(() => {
            if (v) {
                Ze.add(_);
                const M = document.activeElement;
                if (!v.contains(M)) {
                    const $ = new CustomEvent(Te, Ke);
                    v.addEventListener(Te, A), v.dispatchEvent($), $.defaultPrevented || (zt(jt(ft(v)), {
                        select: !0
                    }), document.activeElement === M && ue(v))
                }
                return () => {
                    v.removeEventListener(Te, A), setTimeout(() => {
                        const $ = new CustomEvent(Ie, Ke);
                        v.addEventListener(Ie, O), v.dispatchEvent($), $.defaultPrevented || ue(M ? ? document.body, {
                            select: !0
                        }), v.removeEventListener(Ie, O), Ze.remove(_)
                    }, 0)
                }
            }
        }, [v, A, O, _]);
        const j = S.useCallback(M => {
            if (!i && !u || _.paused) return;
            const T = M.key === "Tab" && !M.altKey && !M.ctrlKey && !M.metaKey,
                $ = document.activeElement;
            if (T && $) {
                const w = M.currentTarget,
                    [q, W] = Ft(w);
                q && W ? !M.shiftKey && $ === W ? (M.preventDefault(), i && ue(q, {
                    select: !0
                })) : M.shiftKey && $ === q && (M.preventDefault(), i && ue(W, {
                    select: !0
                })) : $ === w && M.preventDefault()
            }
        }, [i, u, _.paused]);
        return ut.jsx(at.div, {
            tabIndex: -1,
            ...y,
            ref: R,
            onKeyDown: j
        })
    });
_t.displayName = $t;

function zt(e, {
    select: n = !1
} = {}) {
    const i = document.activeElement;
    for (const u of e)
        if (ue(u, {
                select: n
            }), document.activeElement !== i) return
}

function Ft(e) {
    const n = ft(e),
        i = Xe(n, e),
        u = Xe(n.reverse(), e);
    return [i, u]
}

function ft(e) {
    const n = [],
        i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: u => {
                const l = u.tagName === "INPUT" && u.type === "hidden";
                return u.disabled || u.hidden || l ? NodeFilter.FILTER_SKIP : u.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; i.nextNode();) n.push(i.currentNode);
    return n
}

function Xe(e, n) {
    for (const i of e)
        if (!Bt(i, {
                upTo: n
            })) return i
}

function Bt(e, {
    upTo: n
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (n !== void 0 && e === n) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function Gt(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function ue(e, {
    select: n = !1
} = {}) {
    if (e && e.focus) {
        const i = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== i && Gt(e) && n && e.select()
    }
}
var Ze = Ut();

function Ut() {
    let e = [];
    return {
        add(n) {
            const i = e[0];
            n !== i && i ? .pause(), e = Ye(e, n), e.unshift(n)
        },
        remove(n) {
            e = Ye(e, n), e[0] ? .resume()
        }
    }
}

function Ye(e, n) {
    const i = [...e],
        u = i.indexOf(n);
    return u !== -1 && i.splice(u, 1), i
}

function jt(e) {
    return e.filter(n => n.tagName !== "A")
}
var Dt = "Portal",
    Vt = S.forwardRef((e, n) => {
        const {
            container: i,
            ...u
        } = e, [l, h] = S.useState(!1);
        it(() => h(!0), []);
        const y = i || l && globalThis ? .document ? .body;
        return y ? At.createPortal(ut.jsx(at.div, { ...u,
            ref: n
        }), y) : null
    });
Vt.displayName = Dt;
var $e = 0;

function dn() {
    S.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? Je()), document.body.insertAdjacentElement("beforeend", e[1] ? ? Je()), $e++, () => {
            $e === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(n => n.remove()), $e--
        }
    }, [])
}

function Je() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
}
var Wt = function(e) {
        if (typeof document > "u") return null;
        var n = Array.isArray(e) ? e[0] : e;
        return n.ownerDocument.body
    },
    he = new WeakMap,
    Ce = new WeakMap,
    Ae = {},
    _e = 0,
    dt = function(e) {
        return e && (e.host || dt(e.parentNode))
    },
    qt = function(e, n) {
        return n.map(function(i) {
            if (e.contains(i)) return i;
            var u = dt(i);
            return u && e.contains(u) ? u : (console.error("aria-hidden", i, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(i) {
            return !!i
        })
    },
    Ht = function(e, n, i, u) {
        var l = qt(n, Array.isArray(e) ? e : [e]);
        Ae[i] || (Ae[i] = new WeakMap);
        var h = Ae[i],
            y = [],
            v = new Set,
            x = new Set(l),
            A = function(C) {
                !C || v.has(C) || (v.add(C), A(C.parentNode))
            };
        l.forEach(A);
        var O = function(C) {
            !C || x.has(C) || Array.prototype.forEach.call(C.children, function(R) {
                if (v.has(R)) O(R);
                else try {
                    var _ = R.getAttribute(u),
                        j = _ !== null && _ !== "false",
                        M = (he.get(R) || 0) + 1,
                        T = (h.get(R) || 0) + 1;
                    he.set(R, M), h.set(R, T), y.push(R), M === 1 && j && Ce.set(R, !0), T === 1 && R.setAttribute(i, "true"), j || R.setAttribute(u, "true")
                } catch ($) {
                    console.error("aria-hidden: cannot operate on ", R, $)
                }
            })
        };
        return O(n), v.clear(), _e++,
            function() {
                y.forEach(function(C) {
                    var R = he.get(C) - 1,
                        _ = h.get(C) - 1;
                    he.set(C, R), h.set(C, _), R || (Ce.has(C) || C.removeAttribute(u), Ce.delete(C)), _ || C.removeAttribute(i)
                }), _e--, _e || (he = new WeakMap, he = new WeakMap, Ce = new WeakMap, Ae = {})
            }
    },
    pn = function(e, n, i) {
        i === void 0 && (i = "data-aria-hidden");
        var u = Array.from(Array.isArray(e) ? e : [e]),
            l = n || Wt(e);
        return l ? (u.push.apply(u, Array.from(l.querySelectorAll("[aria-live]"))), Ht(u, l, i, "aria-hidden")) : function() {
            return null
        }
    };
const Kt = {
        width: {
            type: "string",
            className: "rt-r-w",
            customProperties: ["--width"],
            responsive: !0
        },
        minWidth: {
            type: "string",
            className: "rt-r-min-w",
            customProperties: ["--min-width"],
            responsive: !0
        },
        maxWidth: {
            type: "string",
            className: "rt-r-max-w",
            customProperties: ["--max-width"],
            responsive: !0
        }
    },
    Xt = {
        height: {
            type: "string",
            className: "rt-r-h",
            customProperties: ["--height"],
            responsive: !0
        },
        minHeight: {
            type: "string",
            className: "rt-r-min-h",
            customProperties: ["--min-height"],
            responsive: !0
        },
        maxHeight: {
            type: "string",
            className: "rt-r-max-h",
            customProperties: ["--max-height"],
            responsive: !0
        }
    },
    Zt = {
        highContrast: {
            type: "boolean",
            className: "rt-high-contrast",
            default: void 0
        }
    },
    De = ["initial", "xs", "sm", "md", "lg", "xl"];

function pt(e, n) {
    return Object.prototype.hasOwnProperty.call(e, n)
}

function Ne(e) {
    return typeof e == "object" && Object.keys(e).some(n => De.includes(n))
}

function Yt({
    className: e,
    customProperties: n,
    ...i
}) {
    const u = mt({
            allowArbitraryValues: !0,
            className: e,
            ...i
        }),
        l = Jt({
            customProperties: n,
            ...i
        });
    return [u, l]
}

function mt({
    allowArbitraryValues: e,
    value: n,
    className: i,
    propValues: u,
    parseValue: l = h => h
}) {
    const h = [];
    if (n) {
        if (typeof n == "string" && u.includes(n)) return Qe(i, n, l);
        if (Ne(n)) {
            const y = n;
            for (const v in y) {
                if (!pt(y, v) || !De.includes(v)) continue;
                const x = y[v];
                if (x !== void 0) {
                    if (u.includes(x)) {
                        const A = Qe(i, x, l),
                            O = v === "initial" ? A : `${v}:${A}`;
                        h.push(O)
                    } else if (e) {
                        const A = v === "initial" ? i : `${v}:${i}`;
                        h.push(A)
                    }
                }
            }
            return h.join(" ")
        }
        if (e) return i
    }
}

function Qe(e, n, i) {
    const u = e ? "-" : "",
        l = i(n),
        h = l ? .startsWith("-"),
        y = h ? "-" : "",
        v = h ? l ? .substring(1) : l;
    return `${y}${e}${u}${v}`
}

function Jt({
    customProperties: e,
    value: n,
    propValues: i,
    parseValue: u = l => l
}) {
    let l = {};
    if (!(!n || typeof n == "string" && i.includes(n))) {
        if (typeof n == "string" && (l = Object.fromEntries(e.map(h => [h, n]))), Ne(n)) {
            const h = n;
            for (const y in h) {
                if (!pt(h, y) || !De.includes(y)) continue;
                const v = h[y];
                if (!i.includes(v))
                    for (const x of e) l = {
                        [y === "initial" ? x : `${x}-${y}`]: v,
                        ...l
                    }
            }
        }
        for (const h in l) {
            const y = l[h];
            y !== void 0 && (l[h] = u(y))
        }
        return l
    }
}

function et(...e) {
    let n = {};
    for (const i of e) i && (n = { ...n,
        ...i
    });
    return Object.keys(n).length ? n : void 0
}

function Qt(...e) {
    return Object.assign({}, ...e)
}

function Ve(e, ...n) {
    let i, u;
    const l = { ...e
        },
        h = Qt(...n);
    for (const y in h) {
        let v = l[y];
        const x = h[y];
        if (x.default !== void 0 && v === void 0 && (v = x.default), x.type === "enum" && ![x.default, ...x.values].includes(v) && !Ne(v) && (v = x.default), l[y] = v, "className" in x && x.className) {
            delete l[y];
            const A = "responsive" in x;
            if (!v || Ne(v) && !A) continue;
            if (Ne(v) && (x.default !== void 0 && v.initial === void 0 && (v.initial = x.default), x.type === "enum" && ([x.default, ...x.values].includes(v.initial) || (v.initial = x.default))), x.type === "enum") {
                const O = mt({
                    allowArbitraryValues: !1,
                    value: v,
                    className: x.className,
                    propValues: x.values,
                    parseValue: x.parseValue
                });
                i = fe(i, O);
                continue
            }
            if (x.type === "string" || x.type === "enum | string") {
                const O = x.type === "string" ? [] : x.values,
                    [C, R] = Yt({
                        className: x.className,
                        customProperties: x.customProperties,
                        propValues: O,
                        parseValue: x.parseValue,
                        value: v
                    });
                u = et(u, R), i = fe(i, C);
                continue
            }
            if (x.type === "boolean" && v) {
                i = fe(i, x.className);
                continue
            }
        }
    }
    return l.className = fe(i, e.className), l.style = et(u, e.style), l
}
const de = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"],
    We = {
        m: {
            type: "enum | string",
            values: de,
            responsive: !0,
            className: "rt-r-m",
            customProperties: ["--m"]
        },
        mx: {
            type: "enum | string",
            values: de,
            responsive: !0,
            className: "rt-r-mx",
            customProperties: ["--ml", "--mr"]
        },
        my: {
            type: "enum | string",
            values: de,
            responsive: !0,
            className: "rt-r-my",
            customProperties: ["--mt", "--mb"]
        },
        mt: {
            type: "enum | string",
            values: de,
            responsive: !0,
            className: "rt-r-mt",
            customProperties: ["--mt"]
        },
        mr: {
            type: "enum | string",
            values: de,
            responsive: !0,
            className: "rt-r-mr",
            customProperties: ["--mr"]
        },
        mb: {
            type: "enum | string",
            values: de,
            responsive: !0,
            className: "rt-r-mb",
            customProperties: ["--mb"]
        },
        ml: {
            type: "enum | string",
            values: de,
            responsive: !0,
            className: "rt-r-ml",
            customProperties: ["--ml"]
        }
    },
    pe = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    er = {
        p: {
            type: "enum | string",
            className: "rt-r-p",
            customProperties: ["--p"],
            values: pe,
            responsive: !0
        },
        px: {
            type: "enum | string",
            className: "rt-r-px",
            customProperties: ["--pl", "--pr"],
            values: pe,
            responsive: !0
        },
        py: {
            type: "enum | string",
            className: "rt-r-py",
            customProperties: ["--pt", "--pb"],
            values: pe,
            responsive: !0
        },
        pt: {
            type: "enum | string",
            className: "rt-r-pt",
            customProperties: ["--pt"],
            values: pe,
            responsive: !0
        },
        pr: {
            type: "enum | string",
            className: "rt-r-pr",
            customProperties: ["--pr"],
            values: pe,
            responsive: !0
        },
        pb: {
            type: "enum | string",
            className: "rt-r-pb",
            customProperties: ["--pb"],
            values: pe,
            responsive: !0
        },
        pl: {
            type: "enum | string",
            className: "rt-r-pl",
            customProperties: ["--pl"],
            values: pe,
            responsive: !0
        }
    },
    ze = ["visible", "hidden", "clip", "scroll", "auto"],
    tr = ["static", "relative", "absolute", "fixed", "sticky"],
    ye = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"],
    rr = ["0", "1"],
    nr = ["0", "1"],
    or = { ...er,
        ...Kt,
        ...Xt,
        position: {
            type: "enum",
            className: "rt-r-position",
            values: tr,
            responsive: !0
        },
        inset: {
            type: "enum | string",
            className: "rt-r-inset",
            customProperties: ["--inset"],
            values: ye,
            responsive: !0
        },
        top: {
            type: "enum | string",
            className: "rt-r-top",
            customProperties: ["--top"],
            values: ye,
            responsive: !0
        },
        right: {
            type: "enum | string",
            className: "rt-r-right",
            customProperties: ["--right"],
            values: ye,
            responsive: !0
        },
        bottom: {
            type: "enum | string",
            className: "rt-r-bottom",
            customProperties: ["--bottom"],
            values: ye,
            responsive: !0
        },
        left: {
            type: "enum | string",
            className: "rt-r-left",
            customProperties: ["--left"],
            values: ye,
            responsive: !0
        },
        overflow: {
            type: "enum",
            className: "rt-r-overflow",
            values: ze,
            responsive: !0
        },
        overflowX: {
            type: "enum",
            className: "rt-r-ox",
            values: ze,
            responsive: !0
        },
        overflowY: {
            type: "enum",
            className: "rt-r-oy",
            values: ze,
            responsive: !0
        },
        flexBasis: {
            type: "string",
            className: "rt-r-fb",
            customProperties: ["--flex-basis"],
            responsive: !0
        },
        flexShrink: {
            type: "enum | string",
            className: "rt-r-fs",
            customProperties: ["--flex-shrink"],
            values: rr,
            responsive: !0
        },
        flexGrow: {
            type: "enum | string",
            className: "rt-r-fg",
            customProperties: ["--flex-grow"],
            values: nr,
            responsive: !0
        },
        gridColumn: {
            type: "string",
            className: "rt-r-gc",
            customProperties: ["--grid-column"],
            responsive: !0
        },
        gridColumnStart: {
            type: "string",
            className: "rt-r-gcs",
            customProperties: ["--grid-column-start"],
            responsive: !0
        },
        gridColumnEnd: {
            type: "string",
            className: "rt-r-gce",
            customProperties: ["--grid-column-end"],
            responsive: !0
        },
        gridRow: {
            type: "string",
            className: "rt-r-gr",
            customProperties: ["--grid-row"],
            responsive: !0
        },
        gridRowStart: {
            type: "string",
            className: "rt-r-grs",
            customProperties: ["--grid-row-start"],
            responsive: !0
        },
        gridRowEnd: {
            type: "string",
            className: "rt-r-gre",
            customProperties: ["--grid-row-end"],
            responsive: !0
        }
    },
    sr = ["1", "2", "3", "4"],
    ir = ["classic", "solid", "soft", "surface", "outline", "ghost"],
    tt = { ...lt,
        size: {
            type: "enum",
            className: "rt-r-size",
            values: sr,
            default: "2",
            responsive: !0
        },
        variant: {
            type: "enum",
            className: "rt-variant",
            values: ir,
            default: "solid"
        },
        ...Pt,
        ...Zt,
        ...Ot,
        loading: {
            type: "boolean",
            className: "rt-loading",
            default: !1
        }
    },
    Fe = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ar = {
        gap: {
            type: "enum | string",
            className: "rt-r-gap",
            customProperties: ["--gap"],
            values: Fe,
            responsive: !0
        },
        gapX: {
            type: "enum | string",
            className: "rt-r-cg",
            customProperties: ["--column-gap"],
            values: Fe,
            responsive: !0
        },
        gapY: {
            type: "enum | string",
            className: "rt-r-rg",
            customProperties: ["--row-gap"],
            values: Fe,
            responsive: !0
        }
    },
    lr = ["div", "span"],
    cr = ["none", "inline-flex", "flex"],
    ur = ["row", "column", "row-reverse", "column-reverse"],
    fr = ["start", "center", "end", "baseline", "stretch"],
    dr = ["start", "center", "end", "between"],
    pr = ["nowrap", "wrap", "wrap-reverse"],
    mr = {
        as: {
            type: "enum",
            values: lr,
            default: "div"
        },
        ...lt,
        display: {
            type: "enum",
            className: "rt-r-display",
            values: cr,
            responsive: !0
        },
        direction: {
            type: "enum",
            className: "rt-r-fd",
            values: ur,
            responsive: !0
        },
        align: {
            type: "enum",
            className: "rt-r-ai",
            values: fr,
            responsive: !0
        },
        justify: {
            type: "enum",
            className: "rt-r-jc",
            values: dr,
            parseValue: gr,
            responsive: !0
        },
        wrap: {
            type: "enum",
            className: "rt-r-fw",
            values: pr,
            responsive: !0
        },
        ...ar
    };

function gr(e) {
    return e === "between" ? "space-between" : e
}
const Re = S.forwardRef((e, n) => {
    const {
        className: i,
        asChild: u,
        as: l = "div",
        ...h
    } = Ve(e, mr, or, We);
    return S.createElement(u ? ct : l, { ...h,
        ref: n,
        className: fe("rt-Flex", i)
    })
});
Re.displayName = "Flex";
const hr = ["1", "2", "3"],
    vr = {
        size: {
            type: "enum",
            className: "rt-r-size",
            values: hr,
            default: "2",
            responsive: !0
        },
        loading: {
            type: "boolean",
            default: !0
        }
    },
    gt = S.forwardRef((e, n) => {
        const {
            className: i,
            children: u,
            loading: l,
            ...h
        } = Ve(e, vr, We);
        if (!l) return u;
        const y = S.createElement("span", { ...h,
            ref: n,
            className: fe("rt-Spinner", i)
        }, S.createElement("span", {
            className: "rt-SpinnerLeaf"
        }), S.createElement("span", {
            className: "rt-SpinnerLeaf"
        }), S.createElement("span", {
            className: "rt-SpinnerLeaf"
        }), S.createElement("span", {
            className: "rt-SpinnerLeaf"
        }), S.createElement("span", {
            className: "rt-SpinnerLeaf"
        }), S.createElement("span", {
            className: "rt-SpinnerLeaf"
        }), S.createElement("span", {
            className: "rt-SpinnerLeaf"
        }), S.createElement("span", {
            className: "rt-SpinnerLeaf"
        }));
        return u === void 0 ? y : S.createElement(Re, {
            asChild: !0,
            position: "relative",
            align: "center",
            justify: "center"
        }, S.createElement("span", null, S.createElement("span", {
            "aria-hidden": !0,
            style: {
                display: "contents",
                visibility: "hidden"
            },
            inert: void 0
        }, u), S.createElement(Re, {
            asChild: !0,
            align: "center",
            justify: "center",
            position: "absolute",
            inset: "0"
        }, S.createElement("span", null, y))))
    });
gt.displayName = "Spinner";

function br(e, n) {
    if (e !== void 0) return typeof e == "string" ? n(e) : Object.fromEntries(Object.entries(e).map(([i, u]) => [i, n(u)]))
}

function yr(e) {
    switch (e) {
        case "1":
            return "1";
        case "2":
        case "3":
            return "2";
        case "4":
            return "3"
    }
}
const ht = S.forwardRef((e, n) => {
    const {
        size: i = tt.size.default
    } = e, {
        className: u,
        children: l,
        asChild: h,
        color: y,
        radius: v,
        disabled: x = e.loading,
        ...A
    } = Ve(e, tt, We);
    return S.createElement(h ? ct : "button", {
        "data-disabled": x || void 0,
        "data-accent-color": y,
        "data-radius": v,
        ...A,
        ref: n,
        className: fe("rt-reset", "rt-BaseButton", u),
        disabled: x
    }, e.loading ? S.createElement(S.Fragment, null, S.createElement("span", {
        style: {
            display: "contents",
            visibility: "hidden"
        },
        "aria-hidden": !0
    }, l), S.createElement(kt, null, l), S.createElement(Re, {
        asChild: !0,
        align: "center",
        justify: "center",
        position: "absolute",
        inset: "0"
    }, S.createElement("span", null, S.createElement(gt, {
        size: br(i, yr)
    })))) : l)
});
ht.displayName = "BaseButton";
const wr = S.forwardRef(({
    className: e,
    ...n
}, i) => S.createElement(ht, { ...n,
    ref: i,
    className: fe("rt-Button", e)
}));
wr.displayName = "Button";

function qe(e, n) {
    if (e == null) return {};
    var i = {},
        u = Object.keys(e),
        l, h;
    for (h = 0; h < u.length; h++) l = u[h], !(n.indexOf(l) >= 0) && (i[l] = e[l]);
    return i
}
var xr = ["color"],
    mn = S.forwardRef(function(e, n) {
        var i = e.color,
            u = i === void 0 ? "currentColor" : i,
            l = qe(e, xr);
        return S.createElement("svg", Object.assign({
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, l, {
            ref: n
        }), S.createElement("path", {
            d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
            fill: u,
            fillRule: "evenodd",
            clipRule: "evenodd"
        }))
    }),
    Nr = ["color"],
    gn = S.forwardRef(function(e, n) {
        var i = e.color,
            u = i === void 0 ? "currentColor" : i,
            l = qe(e, Nr);
        return S.createElement("svg", Object.assign({
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, l, {
            ref: n
        }), S.createElement("path", {
            d: "M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",
            fill: u,
            fillRule: "evenodd",
            clipRule: "evenodd"
        }))
    }),
    Er = ["color"],
    hn = S.forwardRef(function(e, n) {
        var i = e.color,
            u = i === void 0 ? "currentColor" : i,
            l = qe(e, Er);
        return S.createElement("svg", Object.assign({
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, l, {
            ref: n
        }), S.createElement("path", {
            d: "M4 6H11L7.5 10.5L4 6Z",
            fill: u
        }))
    }),
    Cr = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    Be = Math.ceil,
    ee = Math.floor,
    Z = "[BigNumber Error] ",
    rt = Z + "Number primitive has more than 15 significant digits: ",
    re = 1e14,
    P = 14,
    Ge = 9007199254740991,
    Ue = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    ae = 1e7,
    V = 1e9;

function vt(e) {
    var n, i, u, l = w.prototype = {
            constructor: w,
            toString: null,
            valueOf: null
        },
        h = new w(1),
        y = 20,
        v = 4,
        x = -7,
        A = 21,
        O = -1e7,
        C = 1e7,
        R = !1,
        _ = 1,
        j = 0,
        M = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: " ",
            suffix: ""
        },
        T = "0123456789abcdefghijklmnopqrstuvwxyz",
        $ = !0;

    function w(t, r) {
        var o, p, s, f, g, a, c, m, d = this;
        if (!(d instanceof w)) return new w(t, r);
        if (r == null) {
            if (t && t._isBigNumber === !0) {
                d.s = t.s, !t.c || t.e > C ? d.c = d.e = null : t.e < O ? d.c = [d.e = 0] : (d.e = t.e, d.c = t.c.slice());
                return
            }
            if ((a = typeof t == "number") && t * 0 == 0) {
                if (d.s = 1 / t < 0 ? (t = -t, -1) : 1, t === ~~t) {
                    for (f = 0, g = t; g >= 10; g /= 10, f++);
                    f > C ? d.c = d.e = null : (d.e = f, d.c = [t]);
                    return
                }
                m = String(t)
            } else {
                if (!Cr.test(m = String(t))) return u(d, m, a);
                d.s = m.charCodeAt(0) == 45 ? (m = m.slice(1), -1) : 1
            }(f = m.indexOf(".")) > -1 && (m = m.replace(".", "")), (g = m.search(/e/i)) > 0 ? (f < 0 && (f = g), f += +m.slice(g + 1), m = m.substring(0, g)) : f < 0 && (f = m.length)
        } else {
            if (B(r, 2, T.length, "Base"), r == 10 && $) return d = new w(t), K(d, y + d.e + 1, v);
            if (m = String(t), a = typeof t == "number") {
                if (t * 0 != 0) return u(d, m, a, r);
                if (d.s = 1 / t < 0 ? (m = m.slice(1), -1) : 1, w.DEBUG && m.replace(/^0\.0*|\./, "").length > 15) throw Error(rt + t)
            } else d.s = m.charCodeAt(0) === 45 ? (m = m.slice(1), -1) : 1;
            for (o = T.slice(0, r), f = g = 0, c = m.length; g < c; g++)
                if (o.indexOf(p = m.charAt(g)) < 0) {
                    if (p == ".") {
                        if (g > f) {
                            f = c;
                            continue
                        }
                    } else if (!s && (m == m.toUpperCase() && (m = m.toLowerCase()) || m == m.toLowerCase() && (m = m.toUpperCase()))) {
                        s = !0, g = -1, f = 0;
                        continue
                    }
                    return u(d, String(t), a, r)
                }
            a = !1, m = i(m, r, 10, d.s), (f = m.indexOf(".")) > -1 ? m = m.replace(".", "") : f = m.length
        }
        for (g = 0; m.charCodeAt(g) === 48; g++);
        for (c = m.length; m.charCodeAt(--c) === 48;);
        if (m = m.slice(g, ++c)) {
            if (c -= g, a && w.DEBUG && c > 15 && (t > Ge || t !== ee(t))) throw Error(rt + d.s * t);
            if ((f = f - g - 1) > C) d.c = d.e = null;
            else if (f < O) d.c = [d.e = 0];
            else {
                if (d.e = f, d.c = [], g = (f + 1) % P, f < 0 && (g += P), g < c) {
                    for (g && d.c.push(+m.slice(0, g)), c -= P; g < c;) d.c.push(+m.slice(g, g += P));
                    g = P - (m = m.slice(g)).length
                } else g -= c;
                for (; g--; m += "0");
                d.c.push(+m)
            }
        } else d.c = [d.e = 0]
    }
    w.clone = vt, w.ROUND_UP = 0, w.ROUND_DOWN = 1, w.ROUND_CEIL = 2, w.ROUND_FLOOR = 3, w.ROUND_HALF_UP = 4, w.ROUND_HALF_DOWN = 5, w.ROUND_HALF_EVEN = 6, w.ROUND_HALF_CEIL = 7, w.ROUND_HALF_FLOOR = 8, w.EUCLID = 9, w.config = w.set = function(t) {
        var r, o;
        if (t != null)
            if (typeof t == "object") {
                if (t.hasOwnProperty(r = "DECIMAL_PLACES") && (o = t[r], B(o, 0, V, r), y = o), t.hasOwnProperty(r = "ROUNDING_MODE") && (o = t[r], B(o, 0, 8, r), v = o), t.hasOwnProperty(r = "EXPONENTIAL_AT") && (o = t[r], o && o.pop ? (B(o[0], -V, 0, r), B(o[1], 0, V, r), x = o[0], A = o[1]) : (B(o, -V, V, r), x = -(A = o < 0 ? -o : o))), t.hasOwnProperty(r = "RANGE"))
                    if (o = t[r], o && o.pop) B(o[0], -V, -1, r), B(o[1], 1, V, r), O = o[0], C = o[1];
                    else if (B(o, -V, V, r), o) O = -(C = o < 0 ? -o : o);
                else throw Error(Z + r + " cannot be zero: " + o);
                if (t.hasOwnProperty(r = "CRYPTO"))
                    if (o = t[r], o === !!o)
                        if (o)
                            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) R = o;
                            else throw R = !o, Error(Z + "crypto unavailable");
                else R = o;
                else throw Error(Z + r + " not true or false: " + o);
                if (t.hasOwnProperty(r = "MODULO_MODE") && (o = t[r], B(o, 0, 9, r), _ = o), t.hasOwnProperty(r = "POW_PRECISION") && (o = t[r], B(o, 0, V, r), j = o), t.hasOwnProperty(r = "FORMAT"))
                    if (o = t[r], typeof o == "object") M = o;
                    else throw Error(Z + r + " not an object: " + o);
                if (t.hasOwnProperty(r = "ALPHABET"))
                    if (o = t[r], typeof o == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(o)) $ = o.slice(0, 10) == "0123456789", T = o;
                    else throw Error(Z + r + " invalid: " + o)
            } else throw Error(Z + "Object expected: " + t);
        return {
            DECIMAL_PLACES: y,
            ROUNDING_MODE: v,
            EXPONENTIAL_AT: [x, A],
            RANGE: [O, C],
            CRYPTO: R,
            MODULO_MODE: _,
            POW_PRECISION: j,
            FORMAT: M,
            ALPHABET: T
        }
    }, w.isBigNumber = function(t) {
        if (!t || t._isBigNumber !== !0) return !1;
        if (!w.DEBUG) return !0;
        var r, o, p = t.c,
            s = t.e,
            f = t.s;
        e: if ({}.toString.call(p) == "[object Array]") {
            if ((f === 1 || f === -1) && s >= -V && s <= V && s === ee(s)) {
                if (p[0] === 0) {
                    if (s === 0 && p.length === 1) return !0;
                    break e
                }
                if (r = (s + 1) % P, r < 1 && (r += P), String(p[0]).length == r) {
                    for (r = 0; r < p.length; r++)
                        if (o = p[r], o < 0 || o >= re || o !== ee(o)) break e;
                    if (o !== 0) return !0
                }
            }
        } else
        if (p === null && s === null && (f === null || f === 1 || f === -1)) return !0;
        throw Error(Z + "Invalid BigNumber: " + t)
    }, w.maximum = w.max = function() {
        return W(arguments, -1)
    }, w.minimum = w.min = function() {
        return W(arguments, 1)
    }, w.random = function() {
        var t = 9007199254740992,
            r = Math.random() * t & 2097151 ? function() {
                return ee(Math.random() * t)
            } : function() {
                return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
            };
        return function(o) {
            var p, s, f, g, a, c = 0,
                m = [],
                d = new w(h);
            if (o == null ? o = y : B(o, 0, V), g = Be(o / P), R)
                if (crypto.getRandomValues) {
                    for (p = crypto.getRandomValues(new Uint32Array(g *= 2)); c < g;) a = p[c] * 131072 + (p[c + 1] >>> 11), a >= 9e15 ? (s = crypto.getRandomValues(new Uint32Array(2)), p[c] = s[0], p[c + 1] = s[1]) : (m.push(a % 1e14), c += 2);
                    c = g / 2
                } else if (crypto.randomBytes) {
                for (p = crypto.randomBytes(g *= 7); c < g;) a = (p[c] & 31) * 281474976710656 + p[c + 1] * 1099511627776 + p[c + 2] * 4294967296 + p[c + 3] * 16777216 + (p[c + 4] << 16) + (p[c + 5] << 8) + p[c + 6], a >= 9e15 ? crypto.randomBytes(7).copy(p, c) : (m.push(a % 1e14), c += 7);
                c = g / 7
            } else throw R = !1, Error(Z + "crypto unavailable");
            if (!R)
                for (; c < g;) a = r(), a < 9e15 && (m[c++] = a % 1e14);
            for (g = m[--c], o %= P, g && o && (a = Ue[P - o], m[c] = ee(g / a) * a); m[c] === 0; m.pop(), c--);
            if (c < 0) m = [f = 0];
            else {
                for (f = -1; m[0] === 0; m.splice(0, 1), f -= P);
                for (c = 1, a = m[0]; a >= 10; a /= 10, c++);
                c < P && (f -= P - c)
            }
            return d.e = f, d.c = m, d
        }
    }(), w.sum = function() {
        for (var t = 1, r = arguments, o = new w(r[0]); t < r.length;) o = o.plus(r[t++]);
        return o
    }, i = function() {
        var t = "0123456789";

        function r(o, p, s, f) {
            for (var g, a = [0], c, m = 0, d = o.length; m < d;) {
                for (c = a.length; c--; a[c] *= p);
                for (a[0] += f.indexOf(o.charAt(m++)), g = 0; g < a.length; g++) a[g] > s - 1 && (a[g + 1] == null && (a[g + 1] = 0), a[g + 1] += a[g] / s | 0, a[g] %= s)
            }
            return a.reverse()
        }
        return function(o, p, s, f, g) {
            var a, c, m, d, b, E, N, L, G = o.indexOf("."),
                D = y,
                I = v;
            for (G >= 0 && (d = j, j = 0, o = o.replace(".", ""), L = new w(p), E = L.pow(o.length - G), j = d, L.c = r(se(Q(E.c), E.e, "0"), 10, s, t), L.e = L.c.length), N = r(o, p, s, g ? (a = T, t) : (a = t, T)), m = d = N.length; N[--d] == 0; N.pop());
            if (!N[0]) return a.charAt(0);
            if (G < 0 ? --m : (E.c = N, E.e = m, E.s = f, E = n(E, L, D, I, s), N = E.c, b = E.r, m = E.e), c = m + D + 1, G = N[c], d = s / 2, b = b || c < 0 || N[c + 1] != null, b = I < 4 ? (G != null || b) && (I == 0 || I == (E.s < 0 ? 3 : 2)) : G > d || G == d && (I == 4 || b || I == 6 && N[c - 1] & 1 || I == (E.s < 0 ? 8 : 7)), c < 1 || !N[0]) o = b ? se(a.charAt(1), -D, a.charAt(0)) : a.charAt(0);
            else {
                if (N.length = c, b)
                    for (--s; ++N[--c] > s;) N[c] = 0, c || (++m, N = [1].concat(N));
                for (d = N.length; !N[--d];);
                for (G = 0, o = ""; G <= d; o += a.charAt(N[G++]));
                o = se(o, m, a.charAt(0))
            }
            return o
        }
    }(), n = function() {
        function t(p, s, f) {
            var g, a, c, m, d = 0,
                b = p.length,
                E = s % ae,
                N = s / ae | 0;
            for (p = p.slice(); b--;) c = p[b] % ae, m = p[b] / ae | 0, g = N * c + m * E, a = E * c + g % ae * ae + d, d = (a / f | 0) + (g / ae | 0) + N * m, p[b] = a % f;
            return d && (p = [d].concat(p)), p
        }

        function r(p, s, f, g) {
            var a, c;
            if (f != g) c = f > g ? 1 : -1;
            else
                for (a = c = 0; a < f; a++)
                    if (p[a] != s[a]) {
                        c = p[a] > s[a] ? 1 : -1;
                        break
                    } return c
        }

        function o(p, s, f, g) {
            for (var a = 0; f--;) p[f] -= a, a = p[f] < s[f] ? 1 : 0, p[f] = a * g + p[f] - s[f];
            for (; !p[0] && p.length > 1; p.splice(0, 1));
        }
        return function(p, s, f, g, a) {
            var c, m, d, b, E, N, L, G, D, I, z, H, Ee, Me, Le, ne, be, J = p.s == s.s ? 1 : -1,
                X = p.c,
                U = s.c;
            if (!X || !X[0] || !U || !U[0]) return new w(!p.s || !s.s || (X ? U && X[0] == U[0] : !U) ? NaN : X && X[0] == 0 || !U ? J * 0 : J / 0);
            for (G = new w(J), D = G.c = [], m = p.e - s.e, J = f + m + 1, a || (a = re, m = te(p.e / P) - te(s.e / P), J = J / P | 0), d = 0; U[d] == (X[d] || 0); d++);
            if (U[d] > (X[d] || 0) && m--, J < 0) D.push(1), b = !0;
            else {
                for (Me = X.length, ne = U.length, d = 0, J += 2, E = ee(a / (U[0] + 1)), E > 1 && (U = t(U, E, a), X = t(X, E, a), ne = U.length, Me = X.length), Ee = ne, I = X.slice(0, ne), z = I.length; z < ne; I[z++] = 0);
                be = U.slice(), be = [0].concat(be), Le = U[0], U[1] >= a / 2 && Le++;
                do {
                    if (E = 0, c = r(U, I, ne, z), c < 0) {
                        if (H = I[0], ne != z && (H = H * a + (I[1] || 0)), E = ee(H / Le), E > 1)
                            for (E >= a && (E = a - 1), N = t(U, E, a), L = N.length, z = I.length; r(N, I, L, z) == 1;) E--, o(N, ne < L ? be : U, L, a), L = N.length, c = 1;
                        else E == 0 && (c = E = 1), N = U.slice(), L = N.length;
                        if (L < z && (N = [0].concat(N)), o(I, N, z, a), z = I.length, c == -1)
                            for (; r(U, I, ne, z) < 1;) E++, o(I, ne < z ? be : U, z, a), z = I.length
                    } else c === 0 && (E++, I = [0]);
                    D[d++] = E, I[0] ? I[z++] = X[Ee] || 0 : (I = [X[Ee]], z = 1)
                } while ((Ee++ < Me || I[0] != null) && J--);
                b = I[0] != null, D[0] || D.splice(0, 1)
            }
            if (a == re) {
                for (d = 1, J = D[0]; J >= 10; J /= 10, d++);
                K(G, f + (G.e = d + m * P - 1) + 1, g, b)
            } else G.e = m, G.r = +b;
            return G
        }
    }();

    function q(t, r, o, p) {
        var s, f, g, a, c;
        if (o == null ? o = v : B(o, 0, 8), !t.c) return t.toString();
        if (s = t.c[0], g = t.e, r == null) c = Q(t.c), c = p == 1 || p == 2 && (g <= x || g >= A) ? Pe(c, g) : se(c, g, "0");
        else if (t = K(new w(t), r, o), f = t.e, c = Q(t.c), a = c.length, p == 1 || p == 2 && (r <= f || f <= x)) {
            for (; a < r; c += "0", a++);
            c = Pe(c, f)
        } else if (r -= g, c = se(c, f, "0"), f + 1 > a) {
            if (--r > 0)
                for (c += "."; r--; c += "0");
        } else if (r += f - a, r > 0)
            for (f + 1 == a && (c += "."); r--; c += "0");
        return t.s < 0 && s ? "-" + c : c
    }

    function W(t, r) {
        for (var o, p, s = 1, f = new w(t[0]); s < t.length; s++) p = new w(t[s]), (!p.s || (o = me(f, p)) === r || o === 0 && f.s === r) && (f = p);
        return f
    }

    function oe(t, r, o) {
        for (var p = 1, s = r.length; !r[--s]; r.pop());
        for (s = r[0]; s >= 10; s /= 10, p++);
        return (o = p + o * P - 1) > C ? t.c = t.e = null : o < O ? t.c = [t.e = 0] : (t.e = o, t.c = r), t
    }
    u = function() {
        var t = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
            r = /^([^.]+)\.$/,
            o = /^\.([^.]+)$/,
            p = /^-?(Infinity|NaN)$/,
            s = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(f, g, a, c) {
            var m, d = a ? g : g.replace(s, "");
            if (p.test(d)) f.s = isNaN(d) ? null : d < 0 ? -1 : 1;
            else {
                if (!a && (d = d.replace(t, function(b, E, N) {
                        return m = (N = N.toLowerCase()) == "x" ? 16 : N == "b" ? 2 : 8, !c || c == m ? E : b
                    }), c && (m = c, d = d.replace(r, "$1").replace(o, "0.$1")), g != d)) return new w(d, m);
                if (w.DEBUG) throw Error(Z + "Not a" + (c ? " base " + c : "") + " number: " + g);
                f.s = null
            }
            f.c = f.e = null
        }
    }();

    function K(t, r, o, p) {
        var s, f, g, a, c, m, d, b = t.c,
            E = Ue;
        if (b) {
            e: {
                for (s = 1, a = b[0]; a >= 10; a /= 10, s++);
                if (f = r - s, f < 0) f += P,
                g = r,
                c = b[m = 0],
                d = ee(c / E[s - g - 1] % 10);
                else if (m = Be((f + 1) / P), m >= b.length)
                    if (p) {
                        for (; b.length <= m; b.push(0));
                        c = d = 0, s = 1, f %= P, g = f - P + 1
                    } else break e;
                else {
                    for (c = a = b[m], s = 1; a >= 10; a /= 10, s++);
                    f %= P, g = f - P + s, d = g < 0 ? 0 : ee(c / E[s - g - 1] % 10)
                }
                if (p = p || r < 0 || b[m + 1] != null || (g < 0 ? c : c % E[s - g - 1]), p = o < 4 ? (d || p) && (o == 0 || o == (t.s < 0 ? 3 : 2)) : d > 5 || d == 5 && (o == 4 || p || o == 6 && (f > 0 ? g > 0 ? c / E[s - g] : 0 : b[m - 1]) % 10 & 1 || o == (t.s < 0 ? 8 : 7)), r < 1 || !b[0]) return b.length = 0, p ? (r -= t.e + 1, b[0] = E[(P - r % P) % P], t.e = -r || 0) : b[0] = t.e = 0, t;
                if (f == 0 ? (b.length = m, a = 1, m--) : (b.length = m + 1, a = E[P - f], b[m] = g > 0 ? ee(c / E[s - g] % E[g]) * a : 0), p)
                    for (;;)
                        if (m == 0) {
                            for (f = 1, g = b[0]; g >= 10; g /= 10, f++);
                            for (g = b[0] += a, a = 1; g >= 10; g /= 10, a++);
                            f != a && (t.e++, b[0] == re && (b[0] = 1));
                            break
                        } else {
                            if (b[m] += a, b[m] != re) break;
                            b[m--] = 0, a = 1
                        }
                for (f = b.length; b[--f] === 0; b.pop());
            }
            t.e > C ? t.c = t.e = null : t.e < O && (t.c = [t.e = 0])
        }
        return t
    }

    function Y(t) {
        var r, o = t.e;
        return o === null ? t.toString() : (r = Q(t.c), r = o <= x || o >= A ? Pe(r, o) : se(r, o, "0"), t.s < 0 ? "-" + r : r)
    }
    return l.absoluteValue = l.abs = function() {
        var t = new w(this);
        return t.s < 0 && (t.s = 1), t
    }, l.comparedTo = function(t, r) {
        return me(this, new w(t, r))
    }, l.decimalPlaces = l.dp = function(t, r) {
        var o, p, s, f = this;
        if (t != null) return B(t, 0, V), r == null ? r = v : B(r, 0, 8), K(new w(f), t + f.e + 1, r);
        if (!(o = f.c)) return null;
        if (p = ((s = o.length - 1) - te(this.e / P)) * P, s = o[s])
            for (; s % 10 == 0; s /= 10, p--);
        return p < 0 && (p = 0), p
    }, l.dividedBy = l.div = function(t, r) {
        return n(this, new w(t, r), y, v)
    }, l.dividedToIntegerBy = l.idiv = function(t, r) {
        return n(this, new w(t, r), 0, 1)
    }, l.exponentiatedBy = l.pow = function(t, r) {
        var o, p, s, f, g, a, c, m, d, b = this;
        if (t = new w(t), t.c && !t.isInteger()) throw Error(Z + "Exponent not an integer: " + Y(t));
        if (r != null && (r = new w(r)), a = t.e > 14, !b.c || !b.c[0] || b.c[0] == 1 && !b.e && b.c.length == 1 || !t.c || !t.c[0]) return d = new w(Math.pow(+Y(b), a ? t.s * (2 - Se(t)) : +Y(t))), r ? d.mod(r) : d;
        if (c = t.s < 0, r) {
            if (r.c ? !r.c[0] : !r.s) return new w(NaN);
            p = !c && b.isInteger() && r.isInteger(), p && (b = b.mod(r))
        } else {
            if (t.e > 9 && (b.e > 0 || b.e < -1 || (b.e == 0 ? b.c[0] > 1 || a && b.c[1] >= 24e7 : b.c[0] < 8e13 || a && b.c[0] <= 9999975e7))) return f = b.s < 0 && Se(t) ? -0 : 0, b.e > -1 && (f = 1 / f), new w(c ? 1 / f : f);
            j && (f = Be(j / P + 2))
        }
        for (a ? (o = new w(.5), c && (t.s = 1), m = Se(t)) : (s = Math.abs(+Y(t)), m = s % 2), d = new w(h);;) {
            if (m) {
                if (d = d.times(b), !d.c) break;
                f ? d.c.length > f && (d.c.length = f) : p && (d = d.mod(r))
            }
            if (s) {
                if (s = ee(s / 2), s === 0) break;
                m = s % 2
            } else if (t = t.times(o), K(t, t.e + 1, 1), t.e > 14) m = Se(t);
            else {
                if (s = +Y(t), s === 0) break;
                m = s % 2
            }
            b = b.times(b), f ? b.c && b.c.length > f && (b.c.length = f) : p && (b = b.mod(r))
        }
        return p ? d : (c && (d = h.div(d)), r ? d.mod(r) : f ? K(d, j, v, g) : d)
    }, l.integerValue = function(t) {
        var r = new w(this);
        return t == null ? t = v : B(t, 0, 8), K(r, r.e + 1, t)
    }, l.isEqualTo = l.eq = function(t, r) {
        return me(this, new w(t, r)) === 0
    }, l.isFinite = function() {
        return !!this.c
    }, l.isGreaterThan = l.gt = function(t, r) {
        return me(this, new w(t, r)) > 0
    }, l.isGreaterThanOrEqualTo = l.gte = function(t, r) {
        return (r = me(this, new w(t, r))) === 1 || r === 0
    }, l.isInteger = function() {
        return !!this.c && te(this.e / P) > this.c.length - 2
    }, l.isLessThan = l.lt = function(t, r) {
        return me(this, new w(t, r)) < 0
    }, l.isLessThanOrEqualTo = l.lte = function(t, r) {
        return (r = me(this, new w(t, r))) === -1 || r === 0
    }, l.isNaN = function() {
        return !this.s
    }, l.isNegative = function() {
        return this.s < 0
    }, l.isPositive = function() {
        return this.s > 0
    }, l.isZero = function() {
        return !!this.c && this.c[0] == 0
    }, l.minus = function(t, r) {
        var o, p, s, f, g = this,
            a = g.s;
        if (t = new w(t, r), r = t.s, !a || !r) return new w(NaN);
        if (a != r) return t.s = -r, g.plus(t);
        var c = g.e / P,
            m = t.e / P,
            d = g.c,
            b = t.c;
        if (!c || !m) {
            if (!d || !b) return d ? (t.s = -r, t) : new w(b ? g : NaN);
            if (!d[0] || !b[0]) return b[0] ? (t.s = -r, t) : new w(d[0] ? g : v == 3 ? -0 : 0)
        }
        if (c = te(c), m = te(m), d = d.slice(), a = c - m) {
            for ((f = a < 0) ? (a = -a, s = d) : (m = c, s = b), s.reverse(), r = a; r--; s.push(0));
            s.reverse()
        } else
            for (p = (f = (a = d.length) < (r = b.length)) ? a : r, a = r = 0; r < p; r++)
                if (d[r] != b[r]) {
                    f = d[r] < b[r];
                    break
                } if (f && (s = d, d = b, b = s, t.s = -t.s), r = (p = b.length) - (o = d.length), r > 0)
            for (; r--; d[o++] = 0);
        for (r = re - 1; p > a;) {
            if (d[--p] < b[p]) {
                for (o = p; o && !d[--o]; d[o] = r);
                --d[o], d[p] += re
            }
            d[p] -= b[p]
        }
        for (; d[0] == 0; d.splice(0, 1), --m);
        return d[0] ? oe(t, d, m) : (t.s = v == 3 ? -1 : 1, t.c = [t.e = 0], t)
    }, l.modulo = l.mod = function(t, r) {
        var o, p, s = this;
        return t = new w(t, r), !s.c || !t.s || t.c && !t.c[0] ? new w(NaN) : !t.c || s.c && !s.c[0] ? new w(s) : (_ == 9 ? (p = t.s, t.s = 1, o = n(s, t, 0, 3), t.s = p, o.s *= p) : o = n(s, t, 0, _), t = s.minus(o.times(t)), !t.c[0] && _ == 1 && (t.s = s.s), t)
    }, l.multipliedBy = l.times = function(t, r) {
        var o, p, s, f, g, a, c, m, d, b, E, N, L, G, D, I = this,
            z = I.c,
            H = (t = new w(t, r)).c;
        if (!z || !H || !z[0] || !H[0]) return !I.s || !t.s || z && !z[0] && !H || H && !H[0] && !z ? t.c = t.e = t.s = null : (t.s *= I.s, !z || !H ? t.c = t.e = null : (t.c = [0], t.e = 0)), t;
        for (p = te(I.e / P) + te(t.e / P), t.s *= I.s, c = z.length, b = H.length, c < b && (L = z, z = H, H = L, s = c, c = b, b = s), s = c + b, L = []; s--; L.push(0));
        for (G = re, D = ae, s = b; --s >= 0;) {
            for (o = 0, E = H[s] % D, N = H[s] / D | 0, g = c, f = s + g; f > s;) m = z[--g] % D, d = z[g] / D | 0, a = N * m + d * E, m = E * m + a % D * D + L[f] + o, o = (m / G | 0) + (a / D | 0) + N * d, L[f--] = m % G;
            L[f] = o
        }
        return o ? ++p : L.splice(0, 1), oe(t, L, p)
    }, l.negated = function() {
        var t = new w(this);
        return t.s = -t.s || null, t
    }, l.plus = function(t, r) {
        var o, p = this,
            s = p.s;
        if (t = new w(t, r), r = t.s, !s || !r) return new w(NaN);
        if (s != r) return t.s = -r, p.minus(t);
        var f = p.e / P,
            g = t.e / P,
            a = p.c,
            c = t.c;
        if (!f || !g) {
            if (!a || !c) return new w(s / 0);
            if (!a[0] || !c[0]) return c[0] ? t : new w(a[0] ? p : s * 0)
        }
        if (f = te(f), g = te(g), a = a.slice(), s = f - g) {
            for (s > 0 ? (g = f, o = c) : (s = -s, o = a), o.reverse(); s--; o.push(0));
            o.reverse()
        }
        for (s = a.length, r = c.length, s - r < 0 && (o = c, c = a, a = o, r = s), s = 0; r;) s = (a[--r] = a[r] + c[r] + s) / re | 0, a[r] = re === a[r] ? 0 : a[r] % re;
        return s && (a = [s].concat(a), ++g), oe(t, a, g)
    }, l.precision = l.sd = function(t, r) {
        var o, p, s, f = this;
        if (t != null && t !== !!t) return B(t, 1, V), r == null ? r = v : B(r, 0, 8), K(new w(f), t, r);
        if (!(o = f.c)) return null;
        if (s = o.length - 1, p = s * P + 1, s = o[s]) {
            for (; s % 10 == 0; s /= 10, p--);
            for (s = o[0]; s >= 10; s /= 10, p++);
        }
        return t && f.e + 1 > p && (p = f.e + 1), p
    }, l.shiftedBy = function(t) {
        return B(t, -Ge, Ge), this.times("1e" + t)
    }, l.squareRoot = l.sqrt = function() {
        var t, r, o, p, s, f = this,
            g = f.c,
            a = f.s,
            c = f.e,
            m = y + 4,
            d = new w("0.5");
        if (a !== 1 || !g || !g[0]) return new w(!a || a < 0 && (!g || g[0]) ? NaN : g ? f : 1 / 0);
        if (a = Math.sqrt(+Y(f)), a == 0 || a == 1 / 0 ? (r = Q(g), (r.length + c) % 2 == 0 && (r += "0"), a = Math.sqrt(+r), c = te((c + 1) / 2) - (c < 0 || c % 2), a == 1 / 0 ? r = "5e" + c : (r = a.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + c), o = new w(r)) : o = new w(a + ""), o.c[0]) {
            for (c = o.e, a = c + m, a < 3 && (a = 0);;)
                if (s = o, o = d.times(s.plus(n(f, s, m, 1))), Q(s.c).slice(0, a) === (r = Q(o.c)).slice(0, a))
                    if (o.e < c && --a, r = r.slice(a - 3, a + 1), r == "9999" || !p && r == "4999") {
                        if (!p && (K(s, s.e + y + 2, 0), s.times(s).eq(f))) {
                            o = s;
                            break
                        }
                        m += 4, a += 4, p = 1
                    } else {
                        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (K(o, o.e + y + 2, 1), t = !o.times(o).eq(f));
                        break
                    }
        }
        return K(o, o.e + y + 1, v, t)
    }, l.toExponential = function(t, r) {
        return t != null && (B(t, 0, V), t++), q(this, t, r, 1)
    }, l.toFixed = function(t, r) {
        return t != null && (B(t, 0, V), t = t + this.e + 1), q(this, t, r)
    }, l.toFormat = function(t, r, o) {
        var p, s = this;
        if (o == null) t != null && r && typeof r == "object" ? (o = r, r = null) : t && typeof t == "object" ? (o = t, t = r = null) : o = M;
        else if (typeof o != "object") throw Error(Z + "Argument not an object: " + o);
        if (p = s.toFixed(t, r), s.c) {
            var f, g = p.split("."),
                a = +o.groupSize,
                c = +o.secondaryGroupSize,
                m = o.groupSeparator || "",
                d = g[0],
                b = g[1],
                E = s.s < 0,
                N = E ? d.slice(1) : d,
                L = N.length;
            if (c && (f = a, a = c, c = f, L -= f), a > 0 && L > 0) {
                for (f = L % a || a, d = N.substr(0, f); f < L; f += a) d += m + N.substr(f, a);
                c > 0 && (d += m + N.slice(f)), E && (d = "-" + d)
            }
            p = b ? d + (o.decimalSeparator || "") + ((c = +o.fractionGroupSize) ? b.replace(new RegExp("\\d{" + c + "}\\B", "g"), "$&" + (o.fractionGroupSeparator || "")) : b) : d
        }
        return (o.prefix || "") + p + (o.suffix || "")
    }, l.toFraction = function(t) {
        var r, o, p, s, f, g, a, c, m, d, b, E, N = this,
            L = N.c;
        if (t != null && (a = new w(t), !a.isInteger() && (a.c || a.s !== 1) || a.lt(h))) throw Error(Z + "Argument " + (a.isInteger() ? "out of range: " : "not an integer: ") + Y(a));
        if (!L) return new w(N);
        for (r = new w(h), m = o = new w(h), p = c = new w(h), E = Q(L), f = r.e = E.length - N.e - 1, r.c[0] = Ue[(g = f % P) < 0 ? P + g : g], t = !t || a.comparedTo(r) > 0 ? f > 0 ? r : m : a, g = C, C = 1 / 0, a = new w(E), c.c[0] = 0; d = n(a, r, 0, 1), s = o.plus(d.times(p)), s.comparedTo(t) != 1;) o = p, p = s, m = c.plus(d.times(s = m)), c = s, r = a.minus(d.times(s = r)), a = s;
        return s = n(t.minus(o), p, 0, 1), c = c.plus(s.times(m)), o = o.plus(s.times(p)), c.s = m.s = N.s, f = f * 2, b = n(m, p, f, v).minus(N).abs().comparedTo(n(c, o, f, v).minus(N).abs()) < 1 ? [m, p] : [c, o], C = g, b
    }, l.toNumber = function() {
        return +Y(this)
    }, l.toPrecision = function(t, r) {
        return t != null && B(t, 1, V), q(this, t, r, 2)
    }, l.toString = function(t) {
        var r, o = this,
            p = o.s,
            s = o.e;
        return s === null ? p ? (r = "Infinity", p < 0 && (r = "-" + r)) : r = "NaN" : (t == null ? r = s <= x || s >= A ? Pe(Q(o.c), s) : se(Q(o.c), s, "0") : t === 10 && $ ? (o = K(new w(o), y + s + 1, v), r = se(Q(o.c), o.e, "0")) : (B(t, 2, T.length, "Base"), r = i(se(Q(o.c), s, "0"), 10, t, p, !0)), p < 0 && o.c[0] && (r = "-" + r)), r
    }, l.valueOf = l.toJSON = function() {
        return Y(this)
    }, l._isBigNumber = !0, l[Symbol.toStringTag] = "BigNumber", l[Symbol.for("nodejs.util.inspect.custom")] = l.valueOf, e != null && w.set(e), w
}

function te(e) {
    var n = e | 0;
    return e > 0 || e === n ? n : n - 1
}

function Q(e) {
    for (var n, i, u = 1, l = e.length, h = e[0] + ""; u < l;) {
        for (n = e[u++] + "", i = P - n.length; i--; n = "0" + n);
        h += n
    }
    for (l = h.length; h.charCodeAt(--l) === 48;);
    return h.slice(0, l + 1 || 1)
}

function me(e, n) {
    var i, u, l = e.c,
        h = n.c,
        y = e.s,
        v = n.s,
        x = e.e,
        A = n.e;
    if (!y || !v) return null;
    if (i = l && !l[0], u = h && !h[0], i || u) return i ? u ? 0 : -v : y;
    if (y != v) return y;
    if (i = y < 0, u = x == A, !l || !h) return u ? 0 : !l ^ i ? 1 : -1;
    if (!u) return x > A ^ i ? 1 : -1;
    for (v = (x = l.length) < (A = h.length) ? x : A, y = 0; y < v; y++)
        if (l[y] != h[y]) return l[y] > h[y] ^ i ? 1 : -1;
    return x == A ? 0 : x > A ^ i ? 1 : -1
}

function B(e, n, i, u) {
    if (e < n || e > i || e !== ee(e)) throw Error(Z + (u || "Argument") + (typeof e == "number" ? e < n || e > i ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
}

function Se(e) {
    var n = e.c.length - 1;
    return te(e.e / P) == n && e.c[n] % 2 != 0
}

function Pe(e, n) {
    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (n < 0 ? "e" : "e+") + n
}

function se(e, n, i) {
    var u, l;
    if (n < 0) {
        for (l = i + "."; ++n; l += i);
        e = l + e
    } else if (u = e.length, ++n > u) {
        for (l = i, n -= u; --n; l += i);
        e += l
    } else n < u && (e = e.slice(0, n) + "." + e.slice(n));
    return e
}
var nt = vt();

function bt(e) {
    var n, i, u = "";
    if (typeof e == "string" || typeof e == "number") u += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var l = e.length;
            for (n = 0; n < l; n++) e[n] && (i = bt(e[n])) && (u && (u += " "), u += i)
        } else
            for (i in e) e[i] && (u && (u += " "), u += i);
    return u
}

function Ar() {
    for (var e, n, i = 0, u = "", l = arguments.length; i < l; i++)(e = arguments[i]) && (n = bt(e)) && (u && (u += " "), u += n);
    return u
}
const He = "-";

function Sr(e) {
    const n = Or(e),
        {
            conflictingClassGroups: i,
            conflictingClassGroupModifiers: u
        } = e;

    function l(y) {
        const v = y.split(He);
        return v[0] === "" && v.length !== 1 && v.shift(), yt(v, n) || Pr(y)
    }

    function h(y, v) {
        const x = i[y] || [];
        return v && u[y] ? [...x, ...u[y]] : x
    }
    return {
        getClassGroupId: l,
        getConflictingClassGroupIds: h
    }
}

function yt(e, n) {
    if (e.length === 0) return n.classGroupId;
    const i = e[0],
        u = n.nextPart.get(i),
        l = u ? yt(e.slice(1), u) : void 0;
    if (l) return l;
    if (n.validators.length === 0) return;
    const h = e.join(He);
    return n.validators.find(({
        validator: y
    }) => y(h)) ? .classGroupId
}
const ot = /^\[(.+)\]$/;

function Pr(e) {
    if (ot.test(e)) {
        const n = ot.exec(e)[1],
            i = n ? .substring(0, n.indexOf(":"));
        if (i) return "arbitrary.." + i
    }
}

function Or(e) {
    const {
        theme: n,
        prefix: i
    } = e, u = {
        nextPart: new Map,
        validators: []
    };
    return Rr(Object.entries(e.classGroups), i).forEach(([h, y]) => {
        je(y, u, h, n)
    }), u
}

function je(e, n, i, u) {
    e.forEach(l => {
        if (typeof l == "string") {
            const h = l === "" ? n : st(n, l);
            h.classGroupId = i;
            return
        }
        if (typeof l == "function") {
            if (kr(l)) {
                je(l(u), n, i, u);
                return
            }
            n.validators.push({
                validator: l,
                classGroupId: i
            });
            return
        }
        Object.entries(l).forEach(([h, y]) => {
            je(y, st(n, h), i, u)
        })
    })
}

function st(e, n) {
    let i = e;
    return n.split(He).forEach(u => {
        i.nextPart.has(u) || i.nextPart.set(u, {
            nextPart: new Map,
            validators: []
        }), i = i.nextPart.get(u)
    }), i
}

function kr(e) {
    return e.isThemeGetter
}

function Rr(e, n) {
    return n ? e.map(([i, u]) => {
        const l = u.map(h => typeof h == "string" ? n + h : typeof h == "object" ? Object.fromEntries(Object.entries(h).map(([y, v]) => [n + y, v])) : h);
        return [i, l]
    }) : e
}

function Mr(e) {
    if (e < 1) return {
        get: () => {},
        set: () => {}
    };
    let n = 0,
        i = new Map,
        u = new Map;

    function l(h, y) {
        i.set(h, y), n++, n > e && (n = 0, u = i, i = new Map)
    }
    return {
        get(h) {
            let y = i.get(h);
            if (y !== void 0) return y;
            if ((y = u.get(h)) !== void 0) return l(h, y), y
        },
        set(h, y) {
            i.has(h) ? i.set(h, y) : l(h, y)
        }
    }
}
const wt = "!";

function Lr(e) {
    const {
        separator: n,
        experimentalParseClassName: i
    } = e, u = n.length === 1, l = n[0], h = n.length;

    function y(v) {
        const x = [];
        let A = 0,
            O = 0,
            C;
        for (let T = 0; T < v.length; T++) {
            let $ = v[T];
            if (A === 0) {
                if ($ === l && (u || v.slice(T, T + h) === n)) {
                    x.push(v.slice(O, T)), O = T + h;
                    continue
                }
                if ($ === "/") {
                    C = T;
                    continue
                }
            }
            $ === "[" ? A++ : $ === "]" && A--
        }
        const R = x.length === 0 ? v : v.substring(O),
            _ = R.startsWith(wt),
            j = _ ? R.substring(1) : R,
            M = C && C > O ? C - O : void 0;
        return {
            modifiers: x,
            hasImportantModifier: _,
            baseClassName: j,
            maybePostfixModifierPosition: M
        }
    }
    return i ? function(x) {
        return i({
            className: x,
            parseClassName: y
        })
    } : y
}

function Tr(e) {
    if (e.length <= 1) return e;
    const n = [];
    let i = [];
    return e.forEach(u => {
        u[0] === "[" ? (n.push(...i.sort(), u), i = []) : i.push(u)
    }), n.push(...i.sort()), n
}

function Ir(e) {
    return {
        cache: Mr(e.cacheSize),
        parseClassName: Lr(e),
        ...Sr(e)
    }
}
const $r = /\s+/;

function _r(e, n) {
    const {
        parseClassName: i,
        getClassGroupId: u,
        getConflictingClassGroupIds: l
    } = n, h = new Set;
    return e.trim().split($r).map(y => {
        const {
            modifiers: v,
            hasImportantModifier: x,
            baseClassName: A,
            maybePostfixModifierPosition: O
        } = i(y);
        let C = !!O,
            R = u(C ? A.substring(0, O) : A);
        if (!R) {
            if (!C) return {
                isTailwindClass: !1,
                originalClassName: y
            };
            if (R = u(A), !R) return {
                isTailwindClass: !1,
                originalClassName: y
            };
            C = !1
        }
        const _ = Tr(v).join(":");
        return {
            isTailwindClass: !0,
            modifierId: x ? _ + wt : _,
            classGroupId: R,
            originalClassName: y,
            hasPostfixModifier: C
        }
    }).reverse().filter(y => {
        if (!y.isTailwindClass) return !0;
        const {
            modifierId: v,
            classGroupId: x,
            hasPostfixModifier: A
        } = y, O = v + x;
        return h.has(O) ? !1 : (h.add(O), l(x, A).forEach(C => h.add(v + C)), !0)
    }).reverse().map(y => y.originalClassName).join(" ")
}

function zr() {
    let e = 0,
        n, i, u = "";
    for (; e < arguments.length;)(n = arguments[e++]) && (i = xt(n)) && (u && (u += " "), u += i);
    return u
}

function xt(e) {
    if (typeof e == "string") return e;
    let n, i = "";
    for (let u = 0; u < e.length; u++) e[u] && (n = xt(e[u])) && (i && (i += " "), i += n);
    return i
}

function Fr(e, ...n) {
    let i, u, l, h = y;

    function y(x) {
        const A = n.reduce((O, C) => C(O), e());
        return i = Ir(A), u = i.cache.get, l = i.cache.set, h = v, v(x)
    }

    function v(x) {
        const A = u(x);
        if (A) return A;
        const O = _r(x, i);
        return l(x, O), O
    }
    return function() {
        return h(zr.apply(null, arguments))
    }
}

function F(e) {
    const n = i => i[e] || [];
    return n.isThemeGetter = !0, n
}
const Nt = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Br = /^\d+\/\d+$/,
    Gr = new Set(["px", "full", "screen"]),
    Ur = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    jr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Dr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Vr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Wr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

function ie(e) {
    return ge(e) || Gr.has(e) || Br.test(e)
}

function le(e) {
    return ve(e, "length", Qr)
}

function ge(e) {
    return !!e && !Number.isNaN(Number(e))
}

function Oe(e) {
    return ve(e, "number", ge)
}

function we(e) {
    return !!e && Number.isInteger(Number(e))
}

function qr(e) {
    return e.endsWith("%") && ge(e.slice(0, -1))
}

function k(e) {
    return Nt.test(e)
}

function ce(e) {
    return Ur.test(e)
}
const Hr = new Set(["length", "size", "percentage"]);

function Kr(e) {
    return ve(e, Hr, Et)
}

function Xr(e) {
    return ve(e, "position", Et)
}
const Zr = new Set(["image", "url"]);

function Yr(e) {
    return ve(e, Zr, tn)
}

function Jr(e) {
    return ve(e, "", en)
}

function xe() {
    return !0
}

function ve(e, n, i) {
    const u = Nt.exec(e);
    return u ? u[1] ? typeof n == "string" ? u[1] === n : n.has(u[1]) : i(u[2]) : !1
}

function Qr(e) {
    return jr.test(e) && !Dr.test(e)
}

function Et() {
    return !1
}

function en(e) {
    return Vr.test(e)
}

function tn(e) {
    return Wr.test(e)
}

function rn() {
    const e = F("colors"),
        n = F("spacing"),
        i = F("blur"),
        u = F("brightness"),
        l = F("borderColor"),
        h = F("borderRadius"),
        y = F("borderSpacing"),
        v = F("borderWidth"),
        x = F("contrast"),
        A = F("grayscale"),
        O = F("hueRotate"),
        C = F("invert"),
        R = F("gap"),
        _ = F("gradientColorStops"),
        j = F("gradientColorStopPositions"),
        M = F("inset"),
        T = F("margin"),
        $ = F("opacity"),
        w = F("padding"),
        q = F("saturate"),
        W = F("scale"),
        oe = F("sepia"),
        K = F("skew"),
        Y = F("space"),
        t = F("translate"),
        r = () => ["auto", "contain", "none"],
        o = () => ["auto", "hidden", "clip", "visible", "scroll"],
        p = () => ["auto", k, n],
        s = () => [k, n],
        f = () => ["", ie, le],
        g = () => ["auto", ge, k],
        a = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
        c = () => ["solid", "dashed", "dotted", "double", "none"],
        m = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
        d = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
        b = () => ["", "0", k],
        E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
        N = () => [ge, Oe],
        L = () => [ge, k];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [xe],
            spacing: [ie, le],
            blur: ["none", "", ce, k],
            brightness: N(),
            borderColor: [e],
            borderRadius: ["none", "", "full", ce, k],
            borderSpacing: s(),
            borderWidth: f(),
            contrast: N(),
            grayscale: b(),
            hueRotate: L(),
            invert: b(),
            gap: s(),
            gradientColorStops: [e],
            gradientColorStopPositions: [qr, le],
            inset: p(),
            margin: p(),
            opacity: N(),
            padding: s(),
            saturate: N(),
            scale: N(),
            sepia: b(),
            skew: L(),
            space: s(),
            translate: s()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", k]
            }],
            container: ["container"],
            columns: [{
                columns: [ce]
            }],
            "break-after": [{
                "break-after": E()
            }],
            "break-before": [{
                "break-before": E()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...a(), k]
            }],
            overflow: [{
                overflow: o()
            }],
            "overflow-x": [{
                "overflow-x": o()
            }],
            "overflow-y": [{
                "overflow-y": o()
            }],
            overscroll: [{
                overscroll: r()
            }],
            "overscroll-x": [{
                "overscroll-x": r()
            }],
            "overscroll-y": [{
                "overscroll-y": r()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [M]
            }],
            "inset-x": [{
                "inset-x": [M]
            }],
            "inset-y": [{
                "inset-y": [M]
            }],
            start: [{
                start: [M]
            }],
            end: [{
                end: [M]
            }],
            top: [{
                top: [M]
            }],
            right: [{
                right: [M]
            }],
            bottom: [{
                bottom: [M]
            }],
            left: [{
                left: [M]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", we, k]
            }],
            basis: [{
                basis: p()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", k]
            }],
            grow: [{
                grow: b()
            }],
            shrink: [{
                shrink: b()
            }],
            order: [{
                order: ["first", "last", "none", we, k]
            }],
            "grid-cols": [{
                "grid-cols": [xe]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", we, k]
                }, k]
            }],
            "col-start": [{
                "col-start": g()
            }],
            "col-end": [{
                "col-end": g()
            }],
            "grid-rows": [{
                "grid-rows": [xe]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [we, k]
                }, k]
            }],
            "row-start": [{
                "row-start": g()
            }],
            "row-end": [{
                "row-end": g()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", k]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", k]
            }],
            gap: [{
                gap: [R]
            }],
            "gap-x": [{
                "gap-x": [R]
            }],
            "gap-y": [{
                "gap-y": [R]
            }],
            "justify-content": [{
                justify: ["normal", ...d()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...d(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...d(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [w]
            }],
            px: [{
                px: [w]
            }],
            py: [{
                py: [w]
            }],
            ps: [{
                ps: [w]
            }],
            pe: [{
                pe: [w]
            }],
            pt: [{
                pt: [w]
            }],
            pr: [{
                pr: [w]
            }],
            pb: [{
                pb: [w]
            }],
            pl: [{
                pl: [w]
            }],
            m: [{
                m: [T]
            }],
            mx: [{
                mx: [T]
            }],
            my: [{
                my: [T]
            }],
            ms: [{
                ms: [T]
            }],
            me: [{
                me: [T]
            }],
            mt: [{
                mt: [T]
            }],
            mr: [{
                mr: [T]
            }],
            mb: [{
                mb: [T]
            }],
            ml: [{
                ml: [T]
            }],
            "space-x": [{
                "space-x": [Y]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [Y]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, n]
            }],
            "min-w": [{
                "min-w": [k, n, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [k, n, "none", "full", "min", "max", "fit", "prose", {
                    screen: [ce]
                }, ce]
            }],
            h: [{
                h: [k, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [k, n, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [k, n, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [k, n, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", ce, le]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Oe]
            }],
            "font-family": [{
                font: [xe]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
            }],
            "line-clamp": [{
                "line-clamp": ["none", ge, Oe]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ie, k]
            }],
            "list-image": [{
                "list-image": ["none", k]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", k]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [$]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [$]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...c(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", ie, le]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", ie, k]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: s()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", k]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [$]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...a(), Xr]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Kr]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Yr]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [j]
            }],
            "gradient-via-pos": [{
                via: [j]
            }],
            "gradient-to-pos": [{
                to: [j]
            }],
            "gradient-from": [{
                from: [_]
            }],
            "gradient-via": [{
                via: [_]
            }],
            "gradient-to": [{
                to: [_]
            }],
            rounded: [{
                rounded: [h]
            }],
            "rounded-s": [{
                "rounded-s": [h]
            }],
            "rounded-e": [{
                "rounded-e": [h]
            }],
            "rounded-t": [{
                "rounded-t": [h]
            }],
            "rounded-r": [{
                "rounded-r": [h]
            }],
            "rounded-b": [{
                "rounded-b": [h]
            }],
            "rounded-l": [{
                "rounded-l": [h]
            }],
            "rounded-ss": [{
                "rounded-ss": [h]
            }],
            "rounded-se": [{
                "rounded-se": [h]
            }],
            "rounded-ee": [{
                "rounded-ee": [h]
            }],
            "rounded-es": [{
                "rounded-es": [h]
            }],
            "rounded-tl": [{
                "rounded-tl": [h]
            }],
            "rounded-tr": [{
                "rounded-tr": [h]
            }],
            "rounded-br": [{
                "rounded-br": [h]
            }],
            "rounded-bl": [{
                "rounded-bl": [h]
            }],
            "border-w": [{
                border: [v]
            }],
            "border-w-x": [{
                "border-x": [v]
            }],
            "border-w-y": [{
                "border-y": [v]
            }],
            "border-w-s": [{
                "border-s": [v]
            }],
            "border-w-e": [{
                "border-e": [v]
            }],
            "border-w-t": [{
                "border-t": [v]
            }],
            "border-w-r": [{
                "border-r": [v]
            }],
            "border-w-b": [{
                "border-b": [v]
            }],
            "border-w-l": [{
                "border-l": [v]
            }],
            "border-opacity": [{
                "border-opacity": [$]
            }],
            "border-style": [{
                border: [...c(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [v]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [v]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [$]
            }],
            "divide-style": [{
                divide: c()
            }],
            "border-color": [{
                border: [l]
            }],
            "border-color-x": [{
                "border-x": [l]
            }],
            "border-color-y": [{
                "border-y": [l]
            }],
            "border-color-t": [{
                "border-t": [l]
            }],
            "border-color-r": [{
                "border-r": [l]
            }],
            "border-color-b": [{
                "border-b": [l]
            }],
            "border-color-l": [{
                "border-l": [l]
            }],
            "divide-color": [{
                divide: [l]
            }],
            "outline-style": [{
                outline: ["", ...c()]
            }],
            "outline-offset": [{
                "outline-offset": [ie, k]
            }],
            "outline-w": [{
                outline: [ie, le]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: f()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [$]
            }],
            "ring-offset-w": [{
                "ring-offset": [ie, le]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", ce, Jr]
            }],
            "shadow-color": [{
                shadow: [xe]
            }],
            opacity: [{
                opacity: [$]
            }],
            "mix-blend": [{
                "mix-blend": [...m(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": m()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [i]
            }],
            brightness: [{
                brightness: [u]
            }],
            contrast: [{
                contrast: [x]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", ce, k]
            }],
            grayscale: [{
                grayscale: [A]
            }],
            "hue-rotate": [{
                "hue-rotate": [O]
            }],
            invert: [{
                invert: [C]
            }],
            saturate: [{
                saturate: [q]
            }],
            sepia: [{
                sepia: [oe]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [i]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [u]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [x]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [A]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [O]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [C]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [$]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [q]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [oe]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [y]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [y]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [y]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
            }],
            duration: [{
                duration: L()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", k]
            }],
            delay: [{
                delay: L()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", k]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [W]
            }],
            "scale-x": [{
                "scale-x": [W]
            }],
            "scale-y": [{
                "scale-y": [W]
            }],
            rotate: [{
                rotate: [we, k]
            }],
            "translate-x": [{
                "translate-x": [t]
            }],
            "translate-y": [{
                "translate-y": [t]
            }],
            "skew-x": [{
                "skew-x": [K]
            }],
            "skew-y": [{
                "skew-y": [K]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": s()
            }],
            "scroll-mx": [{
                "scroll-mx": s()
            }],
            "scroll-my": [{
                "scroll-my": s()
            }],
            "scroll-ms": [{
                "scroll-ms": s()
            }],
            "scroll-me": [{
                "scroll-me": s()
            }],
            "scroll-mt": [{
                "scroll-mt": s()
            }],
            "scroll-mr": [{
                "scroll-mr": s()
            }],
            "scroll-mb": [{
                "scroll-mb": s()
            }],
            "scroll-ml": [{
                "scroll-ml": s()
            }],
            "scroll-p": [{
                "scroll-p": s()
            }],
            "scroll-px": [{
                "scroll-px": s()
            }],
            "scroll-py": [{
                "scroll-py": s()
            }],
            "scroll-ps": [{
                "scroll-ps": s()
            }],
            "scroll-pe": [{
                "scroll-pe": s()
            }],
            "scroll-pt": [{
                "scroll-pt": s()
            }],
            "scroll-pr": [{
                "scroll-pr": s()
            }],
            "scroll-pb": [{
                "scroll-pb": s()
            }],
            "scroll-pl": [{
                "scroll-pl": s()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", k]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [ie, le, Oe]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
const nn = Fr(rn);

function vn(e) {
    e && navigator.clipboard.writeText(e).then(() => {
        Mt.success("Copied", {
            duration: 2e3
        })
    }).catch(n => {
        console.error("Failed to copy text: ", n)
    })
}

function bn(e, n, i = 8) {
    return new nt(new nt(Rt(e ? ? BigInt(0), n)).toFixed(i, 1)).toNumber()
}

function yn(e, n = 6, i = 4) {
    let u = "";
    return e && (u = `${e.substring(0,n)}...${e.substring(e.length-i)}`), u
}

function wn(...e) {
    return nn(Ar(e))
}

function xn(e) {
    return new Promise(n => {
        setTimeout(n, e)
    })
}

function Nn(e, n) {
    return Math.round(Math.random() * (n - e)) + e
}
const on = (e, n, i) => !e || Number(e) === 0 || Number.isNaN(e) ? "0" : new Intl.NumberFormat(n ? ? "en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
        ...i
    }).format(e),
    En = e => `I just received ${on(e)} $ZKL tokens.🎉 %0AVisit (https://zklink.io/novadrop) to check your $ZKL allocation and claim! 🙌🏾%0AFollow %40zkLink_official %26 %40zkLinkNova , the multi-rollup Aggregated Layer 3 zkEVM network. %0AJoin %23zkLinkNovaAggParade season II to earn your $ZKL aridrop.`;
export {
    gn as C, _t as F, Vt as P, Yt as R, hn as T, mn as a, dn as b, un as c, wn as d, mt as e, Zt as f, Nn as g, pn as h, yn as i, vn as j, on as k, et as l, En as m, bn as n, wr as o, We as r, xn as s, fn as u, Ve as v
};