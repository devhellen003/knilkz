import {
    r as i
} from "./react-74e86ac5.js";
import {
    c as q,
    u as b,
    P as h,
    a as x,
    d as R,
    S as w,
    D as Y,
    f as J
} from "./index-4955dd93.js";
import {
    h as Q,
    b as X,
    F as ee,
    u as te,
    c as C,
    P as oe,
    d as j
} from "./index-f11a2cde.js";
import {
    j as s,
    R as ne
} from "./rainbowkit-1c226f0f.js";
var N = "Dialog",
    [T, je] = q(N),
    [re, g] = T(N),
    M = e => {
        const {
            __scopeDialog: t,
            children: o,
            open: n,
            defaultOpen: a,
            onOpenChange: r,
            modal: c = !0
        } = e, l = i.useRef(null), f = i.useRef(null), [u = !1, d] = te({
            prop: n,
            defaultProp: a,
            onChange: r
        });
        return s.jsx(re, {
            scope: t,
            triggerRef: l,
            contentRef: f,
            contentId: C(),
            titleId: C(),
            descriptionId: C(),
            open: u,
            onOpenChange: d,
            onOpenToggle: i.useCallback(() => d(v => !v), [d]),
            modal: c,
            children: o
        })
    };
M.displayName = N;
var k = "DialogTrigger",
    ae = i.forwardRef((e, t) => {
        const {
            __scopeDialog: o,
            ...n
        } = e, a = g(k, o), r = b(t, a.triggerRef);
        return s.jsx(h.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.contentId,
            "data-state": O(a.open),
            ...n,
            ref: r,
            onClick: x(e.onClick, a.onOpenToggle)
        })
    });
ae.displayName = k;
var E = "DialogPortal",
    [se, F] = T(E, {
        forceMount: void 0
    }),
    S = e => {
        const {
            __scopeDialog: t,
            forceMount: o,
            children: n,
            container: a
        } = e, r = g(E, t);
        return s.jsx(se, {
            scope: t,
            forceMount: o,
            children: i.Children.map(n, c => s.jsx(R, {
                present: o || r.open,
                children: s.jsx(oe, {
                    asChild: !0,
                    container: a,
                    children: c
                })
            }))
        })
    };
S.displayName = E;
var y = "DialogOverlay",
    L = i.forwardRef((e, t) => {
        const o = F(y, e.__scopeDialog),
            {
                forceMount: n = o.forceMount,
                ...a
            } = e,
            r = g(y, e.__scopeDialog);
        return r.modal ? s.jsx(R, {
            present: n || r.open,
            children: s.jsx(ie, { ...a,
                ref: t
            })
        }) : null
    });
L.displayName = y;
var ie = i.forwardRef((e, t) => {
        const {
            __scopeDialog: o,
            ...n
        } = e, a = g(y, o);
        return s.jsx(ne, {
            as: w,
            allowPinchZoom: !0,
            shards: [a.contentRef],
            children: s.jsx(h.div, {
                "data-state": O(a.open),
                ...n,
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...n.style
                }
            })
        })
    }),
    p = "DialogContent",
    W = i.forwardRef((e, t) => {
        const o = F(p, e.__scopeDialog),
            {
                forceMount: n = o.forceMount,
                ...a
            } = e,
            r = g(p, e.__scopeDialog);
        return s.jsx(R, {
            present: n || r.open,
            children: r.modal ? s.jsx(le, { ...a,
                ref: t
            }) : s.jsx(ce, { ...a,
                ref: t
            })
        })
    });
W.displayName = p;
var le = i.forwardRef((e, t) => {
        const o = g(p, e.__scopeDialog),
            n = i.useRef(null),
            a = b(t, o.contentRef, n);
        return i.useEffect(() => {
            const r = n.current;
            if (r) return Q(r)
        }, []), s.jsx(V, { ...e,
            ref: a,
            trapFocus: o.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: x(e.onCloseAutoFocus, r => {
                r.preventDefault(), o.triggerRef.current ? .focus()
            }),
            onPointerDownOutside: x(e.onPointerDownOutside, r => {
                const c = r.detail.originalEvent,
                    l = c.button === 0 && c.ctrlKey === !0;
                (c.button === 2 || l) && r.preventDefault()
            }),
            onFocusOutside: x(e.onFocusOutside, r => r.preventDefault())
        })
    }),
    ce = i.forwardRef((e, t) => {
        const o = g(p, e.__scopeDialog),
            n = i.useRef(!1),
            a = i.useRef(!1);
        return s.jsx(V, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: r => {
                e.onCloseAutoFocus ? .(r), r.defaultPrevented || (n.current || o.triggerRef.current ? .focus(), r.preventDefault()), n.current = !1, a.current = !1
            },
            onInteractOutside: r => {
                e.onInteractOutside ? .(r), r.defaultPrevented || (n.current = !0, r.detail.originalEvent.type === "pointerdown" && (a.current = !0));
                const c = r.target;
                o.triggerRef.current ? .contains(c) && r.preventDefault(), r.detail.originalEvent.type === "focusin" && a.current && r.preventDefault()
            }
        })
    }),
    V = i.forwardRef((e, t) => {
        const {
            __scopeDialog: o,
            trapFocus: n,
            onOpenAutoFocus: a,
            onCloseAutoFocus: r,
            ...c
        } = e, l = g(p, o), f = i.useRef(null), u = b(t, f);
        return X(), s.jsxs(s.Fragment, {
            children: [s.jsx(ee, {
                asChild: !0,
                loop: !0,
                trapped: n,
                onMountAutoFocus: a,
                onUnmountAutoFocus: r,
                children: s.jsx(Y, {
                    role: "dialog",
                    id: l.contentId,
                    "aria-describedby": l.descriptionId,
                    "aria-labelledby": l.titleId,
                    "data-state": O(l.open),
                    ...c,
                    ref: u,
                    onDismiss: () => l.onOpenChange(!1)
                })
            }), s.jsxs(s.Fragment, {
                children: [s.jsx(ge, {
                    titleId: l.titleId
                }), s.jsx(pe, {
                    contentRef: f,
                    descriptionId: l.descriptionId
                })]
            })]
        })
    }),
    _ = "DialogTitle",
    ue = i.forwardRef((e, t) => {
        const {
            __scopeDialog: o,
            ...n
        } = e, a = g(_, o);
        return s.jsx(h.h2, {
            id: a.titleId,
            ...n,
            ref: t
        })
    });
ue.displayName = _;
var $ = "DialogDescription",
    de = i.forwardRef((e, t) => {
        const {
            __scopeDialog: o,
            ...n
        } = e, a = g($, o);
        return s.jsx(h.p, {
            id: a.descriptionId,
            ...n,
            ref: t
        })
    });
de.displayName = $;
var G = "DialogClose",
    fe = i.forwardRef((e, t) => {
        const {
            __scopeDialog: o,
            ...n
        } = e, a = g(G, o);
        return s.jsx(h.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: x(e.onClick, () => a.onOpenChange(!1))
        })
    });
fe.displayName = G;

function O(e) {
    return e ? "open" : "closed"
}
var B = "DialogTitleWarning",
    [Ae, K] = J(B, {
        contentName: p,
        titleName: _,
        docsSlug: "dialog"
    }),
    ge = ({
        titleId: e
    }) => {
        const t = K(B),
            o = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return i.useEffect(() => {
            e && (document.getElementById(e) || console.error(o))
        }, [o, e]), null
    },
    ve = "DialogDescriptionWarning",
    pe = ({
        contentRef: e,
        descriptionId: t
    }) => {
        const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${K(ve).contentName}}.`;
        return i.useEffect(() => {
            const a = e.current ? .getAttribute("aria-describedby");
            t && a && (document.getElementById(t) || console.warn(n))
        }, [n, e, t]), null
    },
    Ie = M,
    we = S,
    Te = L,
    Me = W;

function z(e) {
    var t, o, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (o = z(e[t])) && (n && (n += " "), n += o);
        else
            for (t in e) e[t] && (n && (n += " "), n += t);
    return n
}

function me() {
    for (var e, t, o = 0, n = ""; o < arguments.length;)(e = arguments[o++]) && (t = z(e)) && (n && (n += " "), n += t);
    return n
}
const A = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e,
    I = me,
    xe = (e, t) => o => {
        var n;
        if (t ? .variants == null) return I(e, o ? .class, o ? .className);
        const {
            variants: a,
            defaultVariants: r
        } = t, c = Object.keys(a).map(u => {
            const d = o ? .[u],
                v = r ? .[u];
            if (d === null) return null;
            const m = A(d) || A(v);
            return a[u][m]
        }), l = o && Object.entries(o).reduce((u, d) => {
            let [v, m] = d;
            return m === void 0 || (u[v] = m), u
        }, {}), f = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, d) => {
            let {
                class: v,
                className: m,
                ...U
            } = d;
            return Object.entries(U).every(Z => {
                let [P, D] = Z;
                return Array.isArray(D) ? D.includes({ ...r,
                    ...l
                }[P]) : { ...r,
                    ...l
                }[P] === D
            }) ? [...u, v, m] : u
        }, []);
        return I(e, c, f, o ? .class, o ? .className)
    };
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    H = (...e) => e.filter((t, o, n) => !!t && n.indexOf(t) === o).join(" ");
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ye = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = i.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: r,
    iconNode: c,
    ...l
}, f) => i.createElement("svg", {
    ref: f,
    ...ye,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: n ? Number(o) * 24 / Number(t) : o,
    className: H("lucide", a),
    ...l
}, [...c.map(([u, d]) => i.createElement(u, d)), ...Array.isArray(r) ? r : [r]]));
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = (e, t) => {
    const o = i.forwardRef(({
        className: n,
        ...a
    }, r) => i.createElement(De, {
        ref: r,
        iconNode: t,
        className: H(`lucide-${he(e)}`, n),
        ...a
    }));
    return o.displayName = `${e}`, o
};
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = Ce("LoaderCircle", [
        ["path", {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }]
    ]),
    Re = xe("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    Ne = i.forwardRef(({
        className: e,
        variant: t,
        size: o,
        asChild: n = !1,
        loading: a,
        children: r,
        ...c
    }, l) => {
        const f = n ? w : "button";
        return s.jsx(f, {
            className: j(Re({
                variant: t,
                size: o,
                className: e
            })),
            disabled: a,
            ref: l,
            ...c,
            children: s.jsxs(s.Fragment, {
                children: [a && s.jsx(be, {
                    className: j("h-4 w-4 animate-spin", r && "mr-2")
                }), r]
            })
        })
    });
Ne.displayName = "LoadingButton";
export {
    Me as C, Ne as L, Te as O, we as P, Ie as R
};