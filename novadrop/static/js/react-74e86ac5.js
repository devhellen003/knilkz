function lc(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, l);
                    i && Object.defineProperty(e, l, i.get ? i : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var Yv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function ic(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Xv(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var l = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, l.get ? l : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), n
}
var oc = {
        exports: {}
    },
    K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ol = Symbol.for("react.element"),
    qd = Symbol.for("react.portal"),
    bd = Symbol.for("react.fragment"),
    ep = Symbol.for("react.strict_mode"),
    tp = Symbol.for("react.profiler"),
    np = Symbol.for("react.provider"),
    rp = Symbol.for("react.context"),
    lp = Symbol.for("react.forward_ref"),
    ip = Symbol.for("react.suspense"),
    op = Symbol.for("react.memo"),
    up = Symbol.for("react.lazy"),
    La = Symbol.iterator;

function ap(e) {
    return e === null || typeof e != "object" ? null : (e = La && e[La] || e["@@iterator"], typeof e == "function" ? e : null)
}
var uc = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    ac = Object.assign,
    sc = {};

function sr(e, t, n) {
    this.props = e, this.context = t, this.refs = sc, this.updater = n || uc
}
sr.prototype.isReactComponent = {};
sr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
sr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function cc() {}
cc.prototype = sr.prototype;

function gu(e, t, n) {
    this.props = e, this.context = t, this.refs = sc, this.updater = n || uc
}
var wu = gu.prototype = new cc;
wu.constructor = gu;
ac(wu, sr.prototype);
wu.isPureReactComponent = !0;
var Ta = Array.isArray,
    fc = Object.prototype.hasOwnProperty,
    Su = {
        current: null
    },
    dc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function pc(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) fc.call(t, r) && !dc.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
        l.children = a
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: ol,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Su.current
    }
}

function sp(e, t) {
    return {
        $$typeof: ol,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Eu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ol
}

function cp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Na = /\/+/g;

function Yi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? cp("" + e.key) : t.toString(36)
}

function Il(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ol:
                case qd:
                    o = !0
            }
    }
    if (o) return o = e, l = l(o), e = r === "" ? "." + Yi(o, 0) : r, Ta(l) ? (n = "", e != null && (n = e.replace(Na, "$&/") + "/"), Il(l, t, n, "", function(s) {
        return s
    })) : l != null && (Eu(l) && (l = sp(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Na, "$&/") + "/") + e)), t.push(l)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Ta(e))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var a = r + Yi(i, u);
            o += Il(i, t, n, a, l)
        } else if (a = ap(e), typeof a == "function")
            for (e = a.call(e), u = 0; !(i = e.next()).done;) i = i.value, a = r + Yi(i, u++), o += Il(i, t, n, a, l);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function Sl(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Il(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }), r
}

function fp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Be = {
        current: null
    },
    Ul = {
        transition: null
    },
    dp = {
        ReactCurrentDispatcher: Be,
        ReactCurrentBatchConfig: Ul,
        ReactCurrentOwner: Su
    };

function hc() {
    throw Error("act(...) is not supported in production builds of React.")
}
K.Children = {
    map: Sl,
    forEach: function(e, t, n) {
        Sl(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Sl(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Sl(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Eu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
K.Component = sr;
K.Fragment = bd;
K.Profiler = tp;
K.PureComponent = gu;
K.StrictMode = ep;
K.Suspense = ip;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp;
K.act = hc;
K.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ac({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, o = Su.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for (a in t) fc.call(t, a) && !dc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        u = Array(a);
        for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
        r.children = u
    }
    return {
        $$typeof: ol,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
};
K.createContext = function(e) {
    return e = {
        $$typeof: rp,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: np,
        _context: e
    }, e.Consumer = e
};
K.createElement = pc;
K.createFactory = function(e) {
    var t = pc.bind(null, e);
    return t.type = e, t
};
K.createRef = function() {
    return {
        current: null
    }
};
K.forwardRef = function(e) {
    return {
        $$typeof: lp,
        render: e
    }
};
K.isValidElement = Eu;
K.lazy = function(e) {
    return {
        $$typeof: up,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: fp
    }
};
K.memo = function(e, t) {
    return {
        $$typeof: op,
        type: e,
        compare: t === void 0 ? null : t
    }
};
K.startTransition = function(e) {
    var t = Ul.transition;
    Ul.transition = {};
    try {
        e()
    } finally {
        Ul.transition = t
    }
};
K.unstable_act = hc;
K.useCallback = function(e, t) {
    return Be.current.useCallback(e, t)
};
K.useContext = function(e) {
    return Be.current.useContext(e)
};
K.useDebugValue = function() {};
K.useDeferredValue = function(e) {
    return Be.current.useDeferredValue(e)
};
K.useEffect = function(e, t) {
    return Be.current.useEffect(e, t)
};
K.useId = function() {
    return Be.current.useId()
};
K.useImperativeHandle = function(e, t, n) {
    return Be.current.useImperativeHandle(e, t, n)
};
K.useInsertionEffect = function(e, t) {
    return Be.current.useInsertionEffect(e, t)
};
K.useLayoutEffect = function(e, t) {
    return Be.current.useLayoutEffect(e, t)
};
K.useMemo = function(e, t) {
    return Be.current.useMemo(e, t)
};
K.useReducer = function(e, t, n) {
    return Be.current.useReducer(e, t, n)
};
K.useRef = function(e) {
    return Be.current.useRef(e)
};
K.useState = function(e) {
    return Be.current.useState(e)
};
K.useSyncExternalStore = function(e, t, n) {
    return Be.current.useSyncExternalStore(e, t, n)
};
K.useTransition = function() {
    return Be.current.useTransition()
};
K.version = "18.3.1";
oc.exports = K;
var R = oc.exports;
const pp = ic(R),
    hp = lc({
        __proto__: null,
        default: pp
    }, [R]);
var mc = {
        exports: {}
    },
    be = {},
    vc = {
        exports: {}
    },
    yc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(M, $) {
        var V = M.length;
        M.push($);
        e: for (; 0 < V;) {
            var G = V - 1 >>> 1,
                le = M[G];
            if (0 < l(le, $)) M[G] = $, M[V] = le, V = G;
            else break e
        }
    }

    function n(M) {
        return M.length === 0 ? null : M[0]
    }

    function r(M) {
        if (M.length === 0) return null;
        var $ = M[0],
            V = M.pop();
        if (V !== $) {
            M[0] = V;
            e: for (var G = 0, le = M.length, yt = le >>> 1; G < yt;) {
                var _e = 2 * (G + 1) - 1,
                    ut = M[_e],
                    Oe = _e + 1,
                    Tn = M[Oe];
                if (0 > l(ut, V)) Oe < le && 0 > l(Tn, ut) ? (M[G] = Tn, M[Oe] = V, G = Oe) : (M[G] = ut, M[_e] = V, G = _e);
                else if (Oe < le && 0 > l(Tn, V)) M[G] = Tn, M[Oe] = V, G = Oe;
                else break e
            }
        }
        return $
    }

    function l(M, $) {
        var V = M.sortIndex - $.sortIndex;
        return V !== 0 ? V : M.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date,
            u = o.now();
        e.unstable_now = function() {
            return o.now() - u
        }
    }
    var a = [],
        s = [],
        d = 1,
        c = null,
        p = 3,
        k = !1,
        S = !1,
        E = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(M) {
        for (var $ = n(s); $ !== null;) {
            if ($.callback === null) r(s);
            else if ($.startTime <= M) r(s), $.sortIndex = $.expirationTime, t(a, $);
            else break;
            $ = n(s)
        }
    }

    function C(M) {
        if (E = !1, v(M), !S)
            if (n(a) !== null) S = !0, It(T);
            else {
                var $ = n(s);
                $ !== null && ae(C, $.startTime - M)
            }
    }

    function T(M, $) {
        S = !1, E && (E = !1, m(L), L = -1), k = !0;
        var V = p;
        try {
            for (v($), c = n(a); c !== null && (!(c.expirationTime > $) || M && !X());) {
                var G = c.callback;
                if (typeof G == "function") {
                    c.callback = null, p = c.priorityLevel;
                    var le = G(c.expirationTime <= $);
                    $ = e.unstable_now(), typeof le == "function" ? c.callback = le : c === n(a) && r(a), v($)
                } else r(a);
                c = n(a)
            }
            if (c !== null) var yt = !0;
            else {
                var _e = n(s);
                _e !== null && ae(C, _e.startTime - $), yt = !1
            }
            return yt
        } finally {
            c = null, p = V, k = !1
        }
    }
    var g = !1,
        D = null,
        L = -1,
        O = 5,
        j = -1;

    function X() {
        return !(e.unstable_now() - j < O)
    }

    function ue() {
        if (D !== null) {
            var M = e.unstable_now();
            j = M;
            var $ = !0;
            try {
                $ = D(!0, M)
            } finally {
                $ ? xe() : (g = !1, D = null)
            }
        } else g = !1
    }
    var xe;
    if (typeof f == "function") xe = function() {
        f(ue)
    };
    else if (typeof MessageChannel < "u") {
        var te = new MessageChannel,
            vt = te.port2;
        te.port1.onmessage = ue, xe = function() {
            vt.postMessage(null)
        }
    } else xe = function() {
        _(ue, 0)
    };

    function It(M) {
        D = M, g || (g = !0, xe())
    }

    function ae(M, $) {
        L = _(function() {
            M(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
        M.callback = null
    }, e.unstable_continueExecution = function() {
        S || k || (S = !0, It(T))
    }, e.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < M ? Math.floor(1e3 / M) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return p
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(M) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var $ = 3;
                break;
            default:
                $ = p
        }
        var V = p;
        p = $;
        try {
            return M()
        } finally {
            p = V
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(M, $) {
        switch (M) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                M = 3
        }
        var V = p;
        p = M;
        try {
            return $()
        } finally {
            p = V
        }
    }, e.unstable_scheduleCallback = function(M, $, V) {
        var G = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? G + V : G) : V = G, M) {
            case 1:
                var le = -1;
                break;
            case 2:
                le = 250;
                break;
            case 5:
                le = 1073741823;
                break;
            case 4:
                le = 1e4;
                break;
            default:
                le = 5e3
        }
        return le = V + le, M = {
            id: d++,
            callback: $,
            priorityLevel: M,
            startTime: V,
            expirationTime: le,
            sortIndex: -1
        }, V > G ? (M.sortIndex = V, t(s, M), n(a) === null && M === n(s) && (E ? (m(L), L = -1) : E = !0, ae(C, V - G))) : (M.sortIndex = le, t(a, M), S || k || (S = !0, It(T))), M
    }, e.unstable_shouldYield = X, e.unstable_wrapCallback = function(M) {
        var $ = p;
        return function() {
            var V = p;
            p = $;
            try {
                return M.apply(this, arguments)
            } finally {
                p = V
            }
        }
    }
})(yc);
vc.exports = yc;
var mp = vc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp = R,
    qe = mp;

function P(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var gc = new Set,
    Br = {};

function _n(e, t) {
    tr(e, t), tr(e + "Capture", t)
}

function tr(e, t) {
    for (Br[e] = t, e = 0; e < t.length; e++) gc.add(t[e])
}
var Dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    xo = Object.prototype.hasOwnProperty,
    yp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Da = {},
    Ma = {};

function gp(e) {
    return xo.call(Ma, e) ? !0 : xo.call(Da, e) ? !1 : yp.test(e) ? Ma[e] = !0 : (Da[e] = !0, !1)
}

function wp(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Sp(e, t, n, r) {
    if (t === null || typeof t > "u" || wp(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function $e(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ne[e] = new $e(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Ne[t] = new $e(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ne[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ne[e] = new $e(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ne[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ne[e] = new $e(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Ne[e] = new $e(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ne[e] = new $e(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Ne[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ku = /[\-:]([a-z])/g;

function xu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ku, xu);
    Ne[t] = new $e(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ku, xu);
    Ne[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ku, xu);
    Ne[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ne[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ne.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ne[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Cu(e, t, n, r) {
    var l = Ne.hasOwnProperty(t) ? Ne[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Sp(t, n, l, r) && (n = null), r || l === null ? gp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ot = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    El = Symbol.for("react.element"),
    jn = Symbol.for("react.portal"),
    In = Symbol.for("react.fragment"),
    Pu = Symbol.for("react.strict_mode"),
    Co = Symbol.for("react.profiler"),
    wc = Symbol.for("react.provider"),
    Sc = Symbol.for("react.context"),
    _u = Symbol.for("react.forward_ref"),
    Po = Symbol.for("react.suspense"),
    _o = Symbol.for("react.suspense_list"),
    Ru = Symbol.for("react.memo"),
    Ht = Symbol.for("react.lazy"),
    Ec = Symbol.for("react.offscreen"),
    za = Symbol.iterator;

function mr(e) {
    return e === null || typeof e != "object" ? null : (e = za && e[za] || e["@@iterator"], typeof e == "function" ? e : null)
}
var he = Object.assign,
    Xi;

function _r(e) {
    if (Xi === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Xi = t && t[1] || ""
    }
    return `
` + Xi + e
}
var Gi = !1;

function Zi(e, t) {
    if (!e || Gi) return "";
    Gi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (s) {
                    var r = s
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (s) {
                    r = s
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (s) {
                r = s
            }
            e()
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (var l = s.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u];) u--;
            for (; 1 <= o && 0 <= u; o--, u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if (o--, u--, 0 > u || l[o] !== i[u]) {
                                var a = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            }
                    while (1 <= o && 0 <= u);
                    break
                }
        }
    } finally {
        Gi = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? _r(e) : ""
}

function Ep(e) {
    switch (e.tag) {
        case 5:
            return _r(e.type);
        case 16:
            return _r("Lazy");
        case 13:
            return _r("Suspense");
        case 19:
            return _r("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Zi(e.type, !1), e;
        case 11:
            return e = Zi(e.type.render, !1), e;
        case 1:
            return e = Zi(e.type, !0), e;
        default:
            return ""
    }
}

function Ro(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case In:
            return "Fragment";
        case jn:
            return "Portal";
        case Co:
            return "Profiler";
        case Pu:
            return "StrictMode";
        case Po:
            return "Suspense";
        case _o:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Sc:
            return (e.displayName || "Context") + ".Consumer";
        case wc:
            return (e._context.displayName || "Context") + ".Provider";
        case _u:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ru:
            return t = e.displayName || null, t !== null ? t : Ro(e.type) || "Memo";
        case Ht:
            t = e._payload, e = e._init;
            try {
                return Ro(e(t))
            } catch {}
    }
    return null
}

function kp(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ro(t);
        case 8:
            return t === Pu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ln(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function kc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function xp(e) {
    var t = kc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o, i.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function kl(e) {
    e._valueTracker || (e._valueTracker = xp(e))
}

function xc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = kc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Zl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Lo(e, t) {
    var n = t.checked;
    return he({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Fa(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ln(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Cc(e, t) {
    t = t.checked, t != null && Cu(e, "checked", t, !1)
}

function To(e, t) {
    Cc(e, t);
    var n = ln(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? No(e, t.type, n) : t.hasOwnProperty("defaultValue") && No(e, t.type, ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Oa(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function No(e, t, n) {
    (t !== "number" || Zl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Rr = Array.isArray;

function Gn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ln(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function Do(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
    return he({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function ja(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(P(92));
            if (Rr(n)) {
                if (1 < n.length) throw Error(P(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ln(n)
    }
}

function Pc(e, t) {
    var n = ln(t.value),
        r = ln(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Ia(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function _c(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Mo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? _c(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var xl, Rc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (xl = xl || document.createElement("div"), xl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xl.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function $r(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Dr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Cp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function(e) {
    Cp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Dr[t] = Dr[e]
    })
});

function Lc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dr.hasOwnProperty(e) && Dr[e] ? ("" + t).trim() : t + "px"
}

function Tc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Lc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Pp = he({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function zo(e, t) {
    if (t) {
        if (Pp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(P(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(P(62))
    }
}

function Fo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Oo = null;

function Lu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var jo = null,
    Zn = null,
    Jn = null;

function Ua(e) {
    if (e = sl(e)) {
        if (typeof jo != "function") throw Error(P(280));
        var t = e.stateNode;
        t && (t = _i(t), jo(e.stateNode, e.type, t))
    }
}

function Nc(e) {
    Zn ? Jn ? Jn.push(e) : Jn = [e] : Zn = e
}

function Dc() {
    if (Zn) {
        var e = Zn,
            t = Jn;
        if (Jn = Zn = null, Ua(e), t)
            for (e = 0; e < t.length; e++) Ua(t[e])
    }
}

function Mc(e, t) {
    return e(t)
}

function zc() {}
var Ji = !1;

function Fc(e, t, n) {
    if (Ji) return e(t, n);
    Ji = !0;
    try {
        return Mc(e, t, n)
    } finally {
        Ji = !1, (Zn !== null || Jn !== null) && (zc(), Dc())
    }
}

function Vr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = _i(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(P(231, t, typeof n));
    return n
}
var Io = !1;
if (Dt) try {
    var vr = {};
    Object.defineProperty(vr, "passive", {
        get: function() {
            Io = !0
        }
    }), window.addEventListener("test", vr, vr), window.removeEventListener("test", vr, vr)
} catch {
    Io = !1
}

function _p(e, t, n, r, l, i, o, u, a) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s)
    } catch (d) {
        this.onError(d)
    }
}
var Mr = !1,
    Jl = null,
    ql = !1,
    Uo = null,
    Rp = {
        onError: function(e) {
            Mr = !0, Jl = e
        }
    };

function Lp(e, t, n, r, l, i, o, u, a) {
    Mr = !1, Jl = null, _p.apply(Rp, arguments)
}

function Tp(e, t, n, r, l, i, o, u, a) {
    if (Lp.apply(this, arguments), Mr) {
        if (Mr) {
            var s = Jl;
            Mr = !1, Jl = null
        } else throw Error(P(198));
        ql || (ql = !0, Uo = s)
    }
}

function Rn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Oc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Aa(e) {
    if (Rn(e) !== e) throw Error(P(188))
}

function Np(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Rn(e), t === null) throw Error(P(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i;) {
                if (i === n) return Aa(l), e;
                if (i === r) return Aa(l), t;
                i = i.sibling
            }
            throw Error(P(188))
        }
        if (n.return !== r.return) n = l, r = i;
        else {
            for (var o = !1, u = l.child; u;) {
                if (u === n) {
                    o = !0, n = l, r = i;
                    break
                }
                if (u === r) {
                    o = !0, r = l, n = i;
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = i.child; u;) {
                    if (u === n) {
                        o = !0, n = i, r = l;
                        break
                    }
                    if (u === r) {
                        o = !0, r = i, n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!o) throw Error(P(189))
            }
        }
        if (n.alternate !== r) throw Error(P(190))
    }
    if (n.tag !== 3) throw Error(P(188));
    return n.stateNode.current === n ? e : t
}

function jc(e) {
    return e = Np(e), e !== null ? Ic(e) : null
}

function Ic(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Ic(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Uc = qe.unstable_scheduleCallback,
    Ba = qe.unstable_cancelCallback,
    Dp = qe.unstable_shouldYield,
    Mp = qe.unstable_requestPaint,
    ge = qe.unstable_now,
    zp = qe.unstable_getCurrentPriorityLevel,
    Tu = qe.unstable_ImmediatePriority,
    Ac = qe.unstable_UserBlockingPriority,
    bl = qe.unstable_NormalPriority,
    Fp = qe.unstable_LowPriority,
    Bc = qe.unstable_IdlePriority,
    ki = null,
    kt = null;

function Op(e) {
    if (kt && typeof kt.onCommitFiberRoot == "function") try {
        kt.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : Up,
    jp = Math.log,
    Ip = Math.LN2;

function Up(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (jp(e) / Ip | 0) | 0
}
var Cl = 64,
    Pl = 4194304;

function Lr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function ei(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? r = Lr(u) : (i &= o, i !== 0 && (r = Lr(i)))
    } else o = n & ~l, o !== 0 ? r = Lr(o) : i !== 0 && (r = Lr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - pt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function Ap(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Bp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var o = 31 - pt(i),
            u = 1 << o,
            a = l[o];
        a === -1 ? (!(u & n) || u & r) && (l[o] = Ap(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u
    }
}

function Ao(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function $c() {
    var e = Cl;
    return Cl <<= 1, !(Cl & 4194240) && (Cl = 64), e
}

function qi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function ul(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n
}

function $p(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - pt(n),
            i = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
    }
}

function Nu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - pt(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var q = 0;

function Vc(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Hc, Du, Wc, Qc, Kc, Bo = !1,
    _l = [],
    Gt = null,
    Zt = null,
    Jt = null,
    Hr = new Map,
    Wr = new Map,
    Qt = [],
    Vp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function $a(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Gt = null;
            break;
        case "dragenter":
        case "dragleave":
            Zt = null;
            break;
        case "mouseover":
        case "mouseout":
            Jt = null;
            break;
        case "pointerover":
        case "pointerout":
            Hr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Wr.delete(t.pointerId)
    }
}

function yr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    }, t !== null && (t = sl(t), t !== null && Du(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Hp(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return Gt = yr(Gt, e, t, n, r, l), !0;
        case "dragenter":
            return Zt = yr(Zt, e, t, n, r, l), !0;
        case "mouseover":
            return Jt = yr(Jt, e, t, n, r, l), !0;
        case "pointerover":
            var i = l.pointerId;
            return Hr.set(i, yr(Hr.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return i = l.pointerId, Wr.set(i, yr(Wr.get(i) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Yc(e) {
    var t = hn(e.target);
    if (t !== null) {
        var n = Rn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Oc(n), t !== null) {
                    e.blockedOn = t, Kc(e.priority, function() {
                        Wc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Al(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = $o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Oo = r, n.target.dispatchEvent(r), Oo = null
        } else return t = sl(n), t !== null && Du(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Va(e, t, n) {
    Al(e) && n.delete(t)
}

function Wp() {
    Bo = !1, Gt !== null && Al(Gt) && (Gt = null), Zt !== null && Al(Zt) && (Zt = null), Jt !== null && Al(Jt) && (Jt = null), Hr.forEach(Va), Wr.forEach(Va)
}

function gr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Bo || (Bo = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Wp)))
}

function Qr(e) {
    function t(l) {
        return gr(l, e)
    }
    if (0 < _l.length) {
        gr(_l[0], e);
        for (var n = 1; n < _l.length; n++) {
            var r = _l[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Gt !== null && gr(Gt, e), Zt !== null && gr(Zt, e), Jt !== null && gr(Jt, e), Hr.forEach(t), Wr.forEach(t), n = 0; n < Qt.length; n++) r = Qt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Qt.length && (n = Qt[0], n.blockedOn === null);) Yc(n), n.blockedOn === null && Qt.shift()
}
var qn = Ot.ReactCurrentBatchConfig,
    ti = !0;

function Qp(e, t, n, r) {
    var l = q,
        i = qn.transition;
    qn.transition = null;
    try {
        q = 1, Mu(e, t, n, r)
    } finally {
        q = l, qn.transition = i
    }
}

function Kp(e, t, n, r) {
    var l = q,
        i = qn.transition;
    qn.transition = null;
    try {
        q = 4, Mu(e, t, n, r)
    } finally {
        q = l, qn.transition = i
    }
}

function Mu(e, t, n, r) {
    if (ti) {
        var l = $o(e, t, n, r);
        if (l === null) ao(e, t, r, ni, n), $a(e, r);
        else if (Hp(l, e, t, n, r)) r.stopPropagation();
        else if ($a(e, r), t & 4 && -1 < Vp.indexOf(e)) {
            for (; l !== null;) {
                var i = sl(l);
                if (i !== null && Hc(i), i = $o(e, t, n, r), i === null && ao(e, t, r, ni, n), i === l) break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else ao(e, t, r, null, n)
    }
}
var ni = null;

function $o(e, t, n, r) {
    if (ni = null, e = Lu(r), e = hn(e), e !== null)
        if (t = Rn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Oc(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return ni = e, null
}

function Xc(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (zp()) {
                case Tu:
                    return 1;
                case Ac:
                    return 4;
                case bl:
                case Fp:
                    return 16;
                case Bc:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Yt = null,
    zu = null,
    Bl = null;

function Gc() {
    if (Bl) return Bl;
    var e, t = zu,
        n = t.length,
        r, l = "value" in Yt ? Yt.value : Yt.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return Bl = l.slice(e, 1 < r ? 1 - r : void 0)
}

function $l(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Rl() {
    return !0
}

function Ha() {
    return !1
}

function et(e) {
    function t(n, r, l, i, o) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Rl : Ha, this.isPropagationStopped = Ha, this
    }
    return he(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Rl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Rl)
        },
        persist: function() {},
        isPersistent: Rl
    }), t
}
var cr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Fu = et(cr),
    al = he({}, cr, {
        view: 0,
        detail: 0
    }),
    Yp = et(al),
    bi, eo, wr, xi = he({}, al, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ou,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (bi = e.screenX - wr.screenX, eo = e.screenY - wr.screenY) : eo = bi = 0, wr = e), bi)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : eo
        }
    }),
    Wa = et(xi),
    Xp = he({}, xi, {
        dataTransfer: 0
    }),
    Gp = et(Xp),
    Zp = he({}, al, {
        relatedTarget: 0
    }),
    to = et(Zp),
    Jp = he({}, cr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    qp = et(Jp),
    bp = he({}, cr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    eh = et(bp),
    th = he({}, cr, {
        data: 0
    }),
    Qa = et(th),
    nh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    rh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    lh = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function ih(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = lh[e]) ? !!t[e] : !1
}

function Ou() {
    return ih
}
var oh = he({}, al, {
        key: function(e) {
            if (e.key) {
                var t = nh[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = $l(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rh[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ou,
        charCode: function(e) {
            return e.type === "keypress" ? $l(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? $l(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    uh = et(oh),
    ah = he({}, xi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Ka = et(ah),
    sh = he({}, al, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ou
    }),
    ch = et(sh),
    fh = he({}, cr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    dh = et(fh),
    ph = he({}, xi, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    hh = et(ph),
    mh = [9, 13, 27, 32],
    ju = Dt && "CompositionEvent" in window,
    zr = null;
Dt && "documentMode" in document && (zr = document.documentMode);
var vh = Dt && "TextEvent" in window && !zr,
    Zc = Dt && (!ju || zr && 8 < zr && 11 >= zr),
    Ya = String.fromCharCode(32),
    Xa = !1;

function Jc(e, t) {
    switch (e) {
        case "keyup":
            return mh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function qc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Un = !1;

function yh(e, t) {
    switch (e) {
        case "compositionend":
            return qc(t);
        case "keypress":
            return t.which !== 32 ? null : (Xa = !0, Ya);
        case "textInput":
            return e = t.data, e === Ya && Xa ? null : e;
        default:
            return null
    }
}

function gh(e, t) {
    if (Un) return e === "compositionend" || !ju && Jc(e, t) ? (e = Gc(), Bl = zu = Yt = null, Un = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Zc && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var wh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Ga(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!wh[e.type] : t === "textarea"
}

function bc(e, t, n, r) {
    Nc(r), t = ri(t, "onChange"), 0 < t.length && (n = new Fu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Fr = null,
    Kr = null;

function Sh(e) {
    ff(e, 0)
}

function Ci(e) {
    var t = $n(e);
    if (xc(t)) return e
}

function Eh(e, t) {
    if (e === "change") return t
}
var ef = !1;
if (Dt) {
    var no;
    if (Dt) {
        var ro = "oninput" in document;
        if (!ro) {
            var Za = document.createElement("div");
            Za.setAttribute("oninput", "return;"), ro = typeof Za.oninput == "function"
        }
        no = ro
    } else no = !1;
    ef = no && (!document.documentMode || 9 < document.documentMode)
}

function Ja() {
    Fr && (Fr.detachEvent("onpropertychange", tf), Kr = Fr = null)
}

function tf(e) {
    if (e.propertyName === "value" && Ci(Kr)) {
        var t = [];
        bc(t, Kr, e, Lu(e)), Fc(Sh, t)
    }
}

function kh(e, t, n) {
    e === "focusin" ? (Ja(), Fr = t, Kr = n, Fr.attachEvent("onpropertychange", tf)) : e === "focusout" && Ja()
}

function xh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ci(Kr)
}

function Ch(e, t) {
    if (e === "click") return Ci(t)
}

function Ph(e, t) {
    if (e === "input" || e === "change") return Ci(t)
}

function _h(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var mt = typeof Object.is == "function" ? Object.is : _h;

function Yr(e, t) {
    if (mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!xo.call(t, l) || !mt(e[l], t[l])) return !1
    }
    return !0
}

function qa(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function ba(e, t) {
    var n = qa(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = qa(n)
    }
}

function nf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function rf() {
    for (var e = window, t = Zl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Zl(e.document)
    }
    return t
}

function Iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Rh(e) {
    var t = rf(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && nf(n.ownerDocument.documentElement, n)) {
        if (r !== null && Iu(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = ba(n, i);
                var o = ba(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Lh = Dt && "documentMode" in document && 11 >= document.documentMode,
    An = null,
    Vo = null,
    Or = null,
    Ho = !1;

function es(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ho || An == null || An !== Zl(r) || (r = An, "selectionStart" in r && Iu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Or && Yr(Or, r) || (Or = r, r = ri(Vo, "onSelect"), 0 < r.length && (t = new Fu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = An)))
}

function Ll(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Bn = {
        animationend: Ll("Animation", "AnimationEnd"),
        animationiteration: Ll("Animation", "AnimationIteration"),
        animationstart: Ll("Animation", "AnimationStart"),
        transitionend: Ll("Transition", "TransitionEnd")
    },
    lo = {},
    lf = {};
Dt && (lf = document.createElement("div").style, "AnimationEvent" in window || (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation), "TransitionEvent" in window || delete Bn.transitionend.transition);

function Pi(e) {
    if (lo[e]) return lo[e];
    if (!Bn[e]) return e;
    var t = Bn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in lf) return lo[e] = t[n];
    return e
}
var of = Pi("animationend"), uf = Pi("animationiteration"), af = Pi("animationstart"), sf = Pi("transitionend"), cf = new Map, ts = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function un(e, t) {
    cf.set(e, t), _n(t, [e])
}
for (var io = 0; io < ts.length; io++) {
    var oo = ts[io],
        Th = oo.toLowerCase(),
        Nh = oo[0].toUpperCase() + oo.slice(1);
    un(Th, "on" + Nh)
}
un( of , "onAnimationEnd");
un(uf, "onAnimationIteration");
un(af, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(sf, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
_n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
_n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Dh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));

function ns(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Tp(r, t, void 0, e), e.currentTarget = null
}

function ff(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o],
                        a = u.instance,
                        s = u.currentTarget;
                    if (u = u.listener, a !== i && l.isPropagationStopped()) break e;
                    ns(l, u, s), i = a
                } else
                    for (o = 0; o < r.length; o++) {
                        if (u = r[o], a = u.instance, s = u.currentTarget, u = u.listener, a !== i && l.isPropagationStopped()) break e;
                        ns(l, u, s), i = a
                    }
        }
    }
    if (ql) throw e = Uo, ql = !1, Uo = null, e
}

function ie(e, t) {
    var n = t[Xo];
    n === void 0 && (n = t[Xo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (df(t, e, 2, !1), n.add(r))
}

function uo(e, t, n) {
    var r = 0;
    t && (r |= 4), df(n, e, r, t)
}
var Tl = "_reactListening" + Math.random().toString(36).slice(2);

function Xr(e) {
    if (!e[Tl]) {
        e[Tl] = !0, gc.forEach(function(n) {
            n !== "selectionchange" && (Dh.has(n) || uo(n, !1, e), uo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Tl] || (t[Tl] = !0, uo("selectionchange", !1, t))
    }
}

function df(e, t, n, r) {
    switch (Xc(t)) {
        case 1:
            var l = Qp;
            break;
        case 4:
            l = Kp;
            break;
        default:
            l = Mu
    }
    n = l.bind(null, t, n, e), l = void 0, !Io || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function ao(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var u = r.stateNode.containerInfo;
            if (u === l || u.nodeType === 8 && u.parentNode === l) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var a = o.tag;
                    if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
                    o = o.return
                }
            for (; u !== null;) {
                if (o = hn(u), o === null) return;
                if (a = o.tag, a === 5 || a === 6) {
                    r = i = o;
                    continue e
                }
                u = u.parentNode
            }
        }
        r = r.return
    }
    Fc(function() {
        var s = i,
            d = Lu(n),
            c = [];
        e: {
            var p = cf.get(e);
            if (p !== void 0) {
                var k = Fu,
                    S = e;
                switch (e) {
                    case "keypress":
                        if ($l(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        k = uh;
                        break;
                    case "focusin":
                        S = "focus", k = to;
                        break;
                    case "focusout":
                        S = "blur", k = to;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = to;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        k = Wa;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = Gp;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = ch;
                        break;
                    case of:
                    case uf:
                    case af:
                        k = qp;
                        break;
                    case sf:
                        k = dh;
                        break;
                    case "scroll":
                        k = Yp;
                        break;
                    case "wheel":
                        k = hh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = eh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = Ka
                }
                var E = (t & 4) !== 0,
                    _ = !E && e === "scroll",
                    m = E ? p !== null ? p + "Capture" : null : p;
                E = [];
                for (var f = s, v; f !== null;) {
                    v = f;
                    var C = v.stateNode;
                    if (v.tag === 5 && C !== null && (v = C, m !== null && (C = Vr(f, m), C != null && E.push(Gr(f, C, v)))), _) break;
                    f = f.return
                }
                0 < E.length && (p = new k(p, S, null, n, d), c.push({
                    event: p,
                    listeners: E
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", p && n !== Oo && (S = n.relatedTarget || n.fromElement) && (hn(S) || S[Mt])) break e;
                if ((k || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, k ? (S = n.relatedTarget || n.toElement, k = s, S = S ? hn(S) : null, S !== null && (_ = Rn(S), S !== _ || S.tag !== 5 && S.tag !== 6) && (S = null)) : (k = null, S = s), k !== S)) {
                    if (E = Wa, C = "onMouseLeave", m = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (E = Ka, C = "onPointerLeave", m = "onPointerEnter", f = "pointer"), _ = k == null ? p : $n(k), v = S == null ? p : $n(S), p = new E(C, f + "leave", k, n, d), p.target = _, p.relatedTarget = v, C = null, hn(d) === s && (E = new E(m, f + "enter", S, n, d), E.target = v, E.relatedTarget = _, C = E), _ = C, k && S) t: {
                        for (E = k, m = S, f = 0, v = E; v; v = Fn(v)) f++;
                        for (v = 0, C = m; C; C = Fn(C)) v++;
                        for (; 0 < f - v;) E = Fn(E),
                        f--;
                        for (; 0 < v - f;) m = Fn(m),
                        v--;
                        for (; f--;) {
                            if (E === m || m !== null && E === m.alternate) break t;
                            E = Fn(E), m = Fn(m)
                        }
                        E = null
                    }
                    else E = null;
                    k !== null && rs(c, p, k, E, !1), S !== null && _ !== null && rs(c, _, S, E, !0)
                }
            }
            e: {
                if (p = s ? $n(s) : window, k = p.nodeName && p.nodeName.toLowerCase(), k === "select" || k === "input" && p.type === "file") var T = Eh;
                else if (Ga(p))
                    if (ef) T = Ph;
                    else {
                        T = xh;
                        var g = kh
                    }
                else(k = p.nodeName) && k.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (T = Ch);
                if (T && (T = T(e, s))) {
                    bc(c, T, n, d);
                    break e
                }
                g && g(e, p, s),
                e === "focusout" && (g = p._wrapperState) && g.controlled && p.type === "number" && No(p, "number", p.value)
            }
            switch (g = s ? $n(s) : window, e) {
                case "focusin":
                    (Ga(g) || g.contentEditable === "true") && (An = g, Vo = s, Or = null);
                    break;
                case "focusout":
                    Or = Vo = An = null;
                    break;
                case "mousedown":
                    Ho = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ho = !1, es(c, n, d);
                    break;
                case "selectionchange":
                    if (Lh) break;
                case "keydown":
                case "keyup":
                    es(c, n, d)
            }
            var D;
            if (ju) e: {
                switch (e) {
                    case "compositionstart":
                        var L = "onCompositionStart";
                        break e;
                    case "compositionend":
                        L = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        L = "onCompositionUpdate";
                        break e
                }
                L = void 0
            }
            else Un ? Jc(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");L && (Zc && n.locale !== "ko" && (Un || L !== "onCompositionStart" ? L === "onCompositionEnd" && Un && (D = Gc()) : (Yt = d, zu = "value" in Yt ? Yt.value : Yt.textContent, Un = !0)), g = ri(s, L), 0 < g.length && (L = new Qa(L, e, null, n, d), c.push({
                event: L,
                listeners: g
            }), D ? L.data = D : (D = qc(n), D !== null && (L.data = D)))),
            (D = vh ? yh(e, n) : gh(e, n)) && (s = ri(s, "onBeforeInput"), 0 < s.length && (d = new Qa("onBeforeInput", "beforeinput", null, n, d), c.push({
                event: d,
                listeners: s
            }), d.data = D))
        }
        ff(c, t)
    })
}

function Gr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function ri(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 && i !== null && (l = i, i = Vr(e, n), i != null && r.unshift(Gr(e, i, l)), i = Vr(e, t), i != null && r.push(Gr(e, i, l))), e = e.return
    }
    return r
}

function Fn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function rs(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
        var u = n,
            a = u.alternate,
            s = u.stateNode;
        if (a !== null && a === r) break;
        u.tag === 5 && s !== null && (u = s, l ? (a = Vr(n, i), a != null && o.unshift(Gr(n, a, u))) : l || (a = Vr(n, i), a != null && o.push(Gr(n, a, u)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Mh = /\r\n?/g,
    zh = /\u0000|\uFFFD/g;

function ls(e) {
    return (typeof e == "string" ? e : "" + e).replace(Mh, `
`).replace(zh, "")
}

function Nl(e, t, n) {
    if (t = ls(t), ls(e) !== t && n) throw Error(P(425))
}

function li() {}
var Wo = null,
    Qo = null;

function Ko(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Yo = typeof setTimeout == "function" ? setTimeout : void 0,
    Fh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    is = typeof Promise == "function" ? Promise : void 0,
    Oh = typeof queueMicrotask == "function" ? queueMicrotask : typeof is < "u" ? function(e) {
        return is.resolve(null).then(e).catch(jh)
    } : Yo;

function jh(e) {
    setTimeout(function() {
        throw e
    })
}

function so(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Qr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Qr(t)
}

function qt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function os(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var fr = Math.random().toString(36).slice(2),
    Et = "__reactFiber$" + fr,
    Zr = "__reactProps$" + fr,
    Mt = "__reactContainer$" + fr,
    Xo = "__reactEvents$" + fr,
    Ih = "__reactListeners$" + fr,
    Uh = "__reactHandles$" + fr;

function hn(e) {
    var t = e[Et];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Mt] || n[Et]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = os(e); e !== null;) {
                    if (n = e[Et]) return n;
                    e = os(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function sl(e) {
    return e = e[Et] || e[Mt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function $n(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(P(33))
}

function _i(e) {
    return e[Zr] || null
}
var Go = [],
    Vn = -1;

function an(e) {
    return {
        current: e
    }
}

function oe(e) {
    0 > Vn || (e.current = Go[Vn], Go[Vn] = null, Vn--)
}

function re(e, t) {
    Vn++, Go[Vn] = e.current, e.current = t
}
var on = {},
    Fe = an(on),
    We = an(!1),
    En = on;

function nr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return on;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function Qe(e) {
    return e = e.childContextTypes, e != null
}

function ii() {
    oe(We), oe(Fe)
}

function us(e, t, n) {
    if (Fe.current !== on) throw Error(P(168));
    re(Fe, t), re(We, n)
}

function pf(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(P(108, kp(e) || "Unknown", l));
    return he({}, n, r)
}

function oi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, En = Fe.current, re(Fe, e), re(We, We.current), !0
}

function as(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(P(169));
    n ? (e = pf(e, t, En), r.__reactInternalMemoizedMergedChildContext = e, oe(We), oe(Fe), re(Fe, e)) : oe(We), re(We, n)
}
var Rt = null,
    Ri = !1,
    co = !1;

function hf(e) {
    Rt === null ? Rt = [e] : Rt.push(e)
}

function Ah(e) {
    Ri = !0, hf(e)
}

function sn() {
    if (!co && Rt !== null) {
        co = !0;
        var e = 0,
            t = q;
        try {
            var n = Rt;
            for (q = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Rt = null, Ri = !1
        } catch (l) {
            throw Rt !== null && (Rt = Rt.slice(e + 1)), Uc(Tu, sn), l
        } finally {
            q = t, co = !1
        }
    }
    return null
}
var Hn = [],
    Wn = 0,
    ui = null,
    ai = 0,
    tt = [],
    nt = 0,
    kn = null,
    Lt = 1,
    Tt = "";

function fn(e, t) {
    Hn[Wn++] = ai, Hn[Wn++] = ui, ui = e, ai = t
}

function mf(e, t, n) {
    tt[nt++] = Lt, tt[nt++] = Tt, tt[nt++] = kn, kn = e;
    var r = Lt;
    e = Tt;
    var l = 32 - pt(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - pt(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Lt = 1 << 32 - pt(t) + l | n << l | r, Tt = i + e
    } else Lt = 1 << i | n << l | r, Tt = e
}

function Uu(e) {
    e.return !== null && (fn(e, 1), mf(e, 1, 0))
}

function Au(e) {
    for (; e === ui;) ui = Hn[--Wn], Hn[Wn] = null, ai = Hn[--Wn], Hn[Wn] = null;
    for (; e === kn;) kn = tt[--nt], tt[nt] = null, Tt = tt[--nt], tt[nt] = null, Lt = tt[--nt], tt[nt] = null
}
var Je = null,
    Ze = null,
    ce = !1,
    dt = null;

function vf(e, t) {
    var n = rt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ss(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, Ze = qt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, Ze = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = kn !== null ? {
                id: Lt,
                overflow: Tt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, Ze = null, !0) : !1;
        default:
            return !1
    }
}

function Zo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Jo(e) {
    if (ce) {
        var t = Ze;
        if (t) {
            var n = t;
            if (!ss(e, t)) {
                if (Zo(e)) throw Error(P(418));
                t = qt(n.nextSibling);
                var r = Je;
                t && ss(e, t) ? vf(r, n) : (e.flags = e.flags & -4097 | 2, ce = !1, Je = e)
            }
        } else {
            if (Zo(e)) throw Error(P(418));
            e.flags = e.flags & -4097 | 2, ce = !1, Je = e
        }
    }
}

function cs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Je = e
}

function Dl(e) {
    if (e !== Je) return !1;
    if (!ce) return cs(e), ce = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ko(e.type, e.memoizedProps)), t && (t = Ze)) {
        if (Zo(e)) throw yf(), Error(P(418));
        for (; t;) vf(e, t), t = qt(t.nextSibling)
    }
    if (cs(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ze = qt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ze = null
        }
    } else Ze = Je ? qt(e.stateNode.nextSibling) : null;
    return !0
}

function yf() {
    for (var e = Ze; e;) e = qt(e.nextSibling)
}

function rr() {
    Ze = Je = null, ce = !1
}

function Bu(e) {
    dt === null ? dt = [e] : dt.push(e)
}
var Bh = Ot.ReactCurrentBatchConfig;

function Sr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(P(309));
                var r = n.stateNode
            }
            if (!r) throw Error(P(147, e));
            var l = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var u = l.refs;
                o === null ? delete u[i] : u[i] = o
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(P(284));
        if (!n._owner) throw Error(P(290, e))
    }
    return e
}

function Ml(e, t) {
    throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function fs(e) {
    var t = e._init;
    return t(e._payload)
}

function gf(e) {
    function t(m, f) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [f], m.flags |= 16) : v.push(f)
        }
    }

    function n(m, f) {
        if (!e) return null;
        for (; f !== null;) t(m, f), f = f.sibling;
        return null
    }

    function r(m, f) {
        for (m = new Map; f !== null;) f.key !== null ? m.set(f.key, f) : m.set(f.index, f), f = f.sibling;
        return m
    }

    function l(m, f) {
        return m = nn(m, f), m.index = 0, m.sibling = null, m
    }

    function i(m, f, v) {
        return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < f ? (m.flags |= 2, f) : v) : (m.flags |= 2, f)) : (m.flags |= 1048576, f)
    }

    function o(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function u(m, f, v, C) {
        return f === null || f.tag !== 6 ? (f = go(v, m.mode, C), f.return = m, f) : (f = l(f, v), f.return = m, f)
    }

    function a(m, f, v, C) {
        var T = v.type;
        return T === In ? d(m, f, v.props.children, C, v.key) : f !== null && (f.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Ht && fs(T) === f.type) ? (C = l(f, v.props), C.ref = Sr(m, f, v), C.return = m, C) : (C = Xl(v.type, v.key, v.props, null, m.mode, C), C.ref = Sr(m, f, v), C.return = m, C)
    }

    function s(m, f, v, C) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== v.containerInfo || f.stateNode.implementation !== v.implementation ? (f = wo(v, m.mode, C), f.return = m, f) : (f = l(f, v.children || []), f.return = m, f)
    }

    function d(m, f, v, C, T) {
        return f === null || f.tag !== 7 ? (f = Sn(v, m.mode, C, T), f.return = m, f) : (f = l(f, v), f.return = m, f)
    }

    function c(m, f, v) {
        if (typeof f == "string" && f !== "" || typeof f == "number") return f = go("" + f, m.mode, v), f.return = m, f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case El:
                    return v = Xl(f.type, f.key, f.props, null, m.mode, v), v.ref = Sr(m, null, f), v.return = m, v;
                case jn:
                    return f = wo(f, m.mode, v), f.return = m, f;
                case Ht:
                    var C = f._init;
                    return c(m, C(f._payload), v)
            }
            if (Rr(f) || mr(f)) return f = Sn(f, m.mode, v, null), f.return = m, f;
            Ml(m, f)
        }
        return null
    }

    function p(m, f, v, C) {
        var T = f !== null ? f.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number") return T !== null ? null : u(m, f, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case El:
                    return v.key === T ? a(m, f, v, C) : null;
                case jn:
                    return v.key === T ? s(m, f, v, C) : null;
                case Ht:
                    return T = v._init, p(m, f, T(v._payload), C)
            }
            if (Rr(v) || mr(v)) return T !== null ? null : d(m, f, v, C, null);
            Ml(m, v)
        }
        return null
    }

    function k(m, f, v, C, T) {
        if (typeof C == "string" && C !== "" || typeof C == "number") return m = m.get(v) || null, u(f, m, "" + C, T);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case El:
                    return m = m.get(C.key === null ? v : C.key) || null, a(f, m, C, T);
                case jn:
                    return m = m.get(C.key === null ? v : C.key) || null, s(f, m, C, T);
                case Ht:
                    var g = C._init;
                    return k(m, f, v, g(C._payload), T)
            }
            if (Rr(C) || mr(C)) return m = m.get(v) || null, d(f, m, C, T, null);
            Ml(f, C)
        }
        return null
    }

    function S(m, f, v, C) {
        for (var T = null, g = null, D = f, L = f = 0, O = null; D !== null && L < v.length; L++) {
            D.index > L ? (O = D, D = null) : O = D.sibling;
            var j = p(m, D, v[L], C);
            if (j === null) {
                D === null && (D = O);
                break
            }
            e && D && j.alternate === null && t(m, D), f = i(j, f, L), g === null ? T = j : g.sibling = j, g = j, D = O
        }
        if (L === v.length) return n(m, D), ce && fn(m, L), T;
        if (D === null) {
            for (; L < v.length; L++) D = c(m, v[L], C), D !== null && (f = i(D, f, L), g === null ? T = D : g.sibling = D, g = D);
            return ce && fn(m, L), T
        }
        for (D = r(m, D); L < v.length; L++) O = k(D, m, L, v[L], C), O !== null && (e && O.alternate !== null && D.delete(O.key === null ? L : O.key), f = i(O, f, L), g === null ? T = O : g.sibling = O, g = O);
        return e && D.forEach(function(X) {
            return t(m, X)
        }), ce && fn(m, L), T
    }

    function E(m, f, v, C) {
        var T = mr(v);
        if (typeof T != "function") throw Error(P(150));
        if (v = T.call(v), v == null) throw Error(P(151));
        for (var g = T = null, D = f, L = f = 0, O = null, j = v.next(); D !== null && !j.done; L++, j = v.next()) {
            D.index > L ? (O = D, D = null) : O = D.sibling;
            var X = p(m, D, j.value, C);
            if (X === null) {
                D === null && (D = O);
                break
            }
            e && D && X.alternate === null && t(m, D), f = i(X, f, L), g === null ? T = X : g.sibling = X, g = X, D = O
        }
        if (j.done) return n(m, D), ce && fn(m, L), T;
        if (D === null) {
            for (; !j.done; L++, j = v.next()) j = c(m, j.value, C), j !== null && (f = i(j, f, L), g === null ? T = j : g.sibling = j, g = j);
            return ce && fn(m, L), T
        }
        for (D = r(m, D); !j.done; L++, j = v.next()) j = k(D, m, L, j.value, C), j !== null && (e && j.alternate !== null && D.delete(j.key === null ? L : j.key), f = i(j, f, L), g === null ? T = j : g.sibling = j, g = j);
        return e && D.forEach(function(ue) {
            return t(m, ue)
        }), ce && fn(m, L), T
    }

    function _(m, f, v, C) {
        if (typeof v == "object" && v !== null && v.type === In && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case El:
                    e: {
                        for (var T = v.key, g = f; g !== null;) {
                            if (g.key === T) {
                                if (T = v.type, T === In) {
                                    if (g.tag === 7) {
                                        n(m, g.sibling), f = l(g, v.props.children), f.return = m, m = f;
                                        break e
                                    }
                                } else if (g.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Ht && fs(T) === g.type) {
                                    n(m, g.sibling), f = l(g, v.props), f.ref = Sr(m, g, v), f.return = m, m = f;
                                    break e
                                }
                                n(m, g);
                                break
                            } else t(m, g);
                            g = g.sibling
                        }
                        v.type === In ? (f = Sn(v.props.children, m.mode, C, v.key), f.return = m, m = f) : (C = Xl(v.type, v.key, v.props, null, m.mode, C), C.ref = Sr(m, f, v), C.return = m, m = C)
                    }
                    return o(m);
                case jn:
                    e: {
                        for (g = v.key; f !== null;) {
                            if (f.key === g)
                                if (f.tag === 4 && f.stateNode.containerInfo === v.containerInfo && f.stateNode.implementation === v.implementation) {
                                    n(m, f.sibling), f = l(f, v.children || []), f.return = m, m = f;
                                    break e
                                } else {
                                    n(m, f);
                                    break
                                }
                            else t(m, f);
                            f = f.sibling
                        }
                        f = wo(v, m.mode, C),
                        f.return = m,
                        m = f
                    }
                    return o(m);
                case Ht:
                    return g = v._init, _(m, f, g(v._payload), C)
            }
            if (Rr(v)) return S(m, f, v, C);
            if (mr(v)) return E(m, f, v, C);
            Ml(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, f !== null && f.tag === 6 ? (n(m, f.sibling), f = l(f, v), f.return = m, m = f) : (n(m, f), f = go(v, m.mode, C), f.return = m, m = f), o(m)) : n(m, f)
    }
    return _
}
var lr = gf(!0),
    wf = gf(!1),
    si = an(null),
    ci = null,
    Qn = null,
    $u = null;

function Vu() {
    $u = Qn = ci = null
}

function Hu(e) {
    var t = si.current;
    oe(si), e._currentValue = t
}

function qo(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function bn(e, t) {
    ci = e, $u = Qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (He = !0), e.firstContext = null)
}

function it(e) {
    var t = e._currentValue;
    if ($u !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Qn === null) {
            if (ci === null) throw Error(P(308));
            Qn = e, ci.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Qn = Qn.next = e;
    return t
}
var mn = null;

function Wu(e) {
    mn === null ? mn = [e] : mn.push(e)
}

function Sf(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Wu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, zt(e, r)
}

function zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Wt = !1;

function Qu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Ef(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Nt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Y & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, zt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, Wu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, zt(e, n)
}

function Vl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Nu(e, n)
    }
}

function ds(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o, n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function fi(e, t, n, r) {
    var l = e.updateQueue;
    Wt = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var a = u,
            s = a.next;
        a.next = null, o === null ? i = s : o.next = s, o = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, u = d.lastBaseUpdate, u !== o && (u === null ? d.firstBaseUpdate = s : u.next = s, d.lastBaseUpdate = a))
    }
    if (i !== null) {
        var c = l.baseState;
        o = 0, d = s = a = null, u = i;
        do {
            var p = u.lane,
                k = u.eventTime;
            if ((r & p) === p) {
                d !== null && (d = d.next = {
                    eventTime: k,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var S = e,
                        E = u;
                    switch (p = t, k = n, E.tag) {
                        case 1:
                            if (S = E.payload, typeof S == "function") {
                                c = S.call(k, c, p);
                                break e
                            }
                            c = S;
                            break e;
                        case 3:
                            S.flags = S.flags & -65537 | 128;
                        case 0:
                            if (S = E.payload, p = typeof S == "function" ? S.call(k, c, p) : S, p == null) break e;
                            c = he({}, c, p);
                            break e;
                        case 2:
                            Wt = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u))
            } else k = {
                eventTime: k,
                lane: p,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, d === null ? (s = d = k, a = c) : d = d.next = k, o |= p;
            if (u = u.next, u === null) {
                if (u = l.shared.pending, u === null) break;
                p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null
            }
        } while (1);
        if (d === null && (a = c), l.baseState = a, l.firstBaseUpdate = s, l.lastBaseUpdate = d, t = l.shared.interleaved, t !== null) {
            l = t;
            do o |= l.lane, l = l.next; while (l !== t)
        } else i === null && (l.shared.lanes = 0);
        Cn |= o, e.lanes = o, e.memoizedState = c
    }
}

function ps(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(P(191, l));
                l.call(r)
            }
        }
}
var cl = {},
    xt = an(cl),
    Jr = an(cl),
    qr = an(cl);

function vn(e) {
    if (e === cl) throw Error(P(174));
    return e
}

function Ku(e, t) {
    switch (re(qr, t), re(Jr, e), re(xt, cl), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Mo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Mo(t, e)
    }
    oe(xt), re(xt, t)
}

function ir() {
    oe(xt), oe(Jr), oe(qr)
}

function kf(e) {
    vn(qr.current);
    var t = vn(xt.current),
        n = Mo(t, e.type);
    t !== n && (re(Jr, e), re(xt, n))
}

function Yu(e) {
    Jr.current === e && (oe(xt), oe(Jr))
}
var de = an(0);

function di(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var fo = [];

function Xu() {
    for (var e = 0; e < fo.length; e++) fo[e]._workInProgressVersionPrimary = null;
    fo.length = 0
}
var Hl = Ot.ReactCurrentDispatcher,
    po = Ot.ReactCurrentBatchConfig,
    xn = 0,
    pe = null,
    Ee = null,
    Ce = null,
    pi = !1,
    jr = !1,
    br = 0,
    $h = 0;

function De() {
    throw Error(P(321))
}

function Gu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!mt(e[n], t[n])) return !1;
    return !0
}

function Zu(e, t, n, r, l, i) {
    if (xn = i, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hl.current = e === null || e.memoizedState === null ? Qh : Kh, e = n(r, l), jr) {
        i = 0;
        do {
            if (jr = !1, br = 0, 25 <= i) throw Error(P(301));
            i += 1, Ce = Ee = null, t.updateQueue = null, Hl.current = Yh, e = n(r, l)
        } while (jr)
    }
    if (Hl.current = hi, t = Ee !== null && Ee.next !== null, xn = 0, Ce = Ee = pe = null, pi = !1, t) throw Error(P(300));
    return e
}

function Ju() {
    var e = br !== 0;
    return br = 0, e
}

function St() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ce === null ? pe.memoizedState = Ce = e : Ce = Ce.next = e, Ce
}

function ot() {
    if (Ee === null) {
        var e = pe.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Ee.next;
    var t = Ce === null ? pe.memoizedState : Ce.next;
    if (t !== null) Ce = t, Ee = e;
    else {
        if (e === null) throw Error(P(310));
        Ee = e, e = {
            memoizedState: Ee.memoizedState,
            baseState: Ee.baseState,
            baseQueue: Ee.baseQueue,
            queue: Ee.queue,
            next: null
        }, Ce === null ? pe.memoizedState = Ce = e : Ce = Ce.next = e
    }
    return Ce
}

function el(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ho(e) {
    var t = ot(),
        n = t.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = Ee,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next, i.next = o
        }
        r.baseQueue = l = i, n.pending = null
    }
    if (l !== null) {
        i = l.next, r = r.baseState;
        var u = o = null,
            a = null,
            s = i;
        do {
            var d = s.lane;
            if ((xn & d) === d) a !== null && (a = a.next = {
                lane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null
            }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
            else {
                var c = {
                    lane: d,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                };
                a === null ? (u = a = c, o = r) : a = a.next = c, pe.lanes |= d, Cn |= d
            }
            s = s.next
        } while (s !== null && s !== i);
        a === null ? o = r : a.next = u, mt(r, t.memoizedState) || (He = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do i = l.lane, pe.lanes |= i, Cn |= i, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function mo(e) {
    var t = ot(),
        n = t.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do i = e(i, o.action), o = o.next; while (o !== l);
        mt(i, t.memoizedState) || (He = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function xf() {}

function Cf(e, t) {
    var n = pe,
        r = ot(),
        l = t(),
        i = !mt(r.memoizedState, l);
    if (i && (r.memoizedState = l, He = !0), r = r.queue, qu(Rf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ce !== null && Ce.memoizedState.tag & 1) {
        if (n.flags |= 2048, tl(9, _f.bind(null, n, r, l, t), void 0, null), Pe === null) throw Error(P(349));
        xn & 30 || Pf(n, t, l)
    }
    return l
}

function Pf(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = pe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function _f(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Lf(t) && Tf(e)
}

function Rf(e, t, n) {
    return n(function() {
        Lf(t) && Tf(e)
    })
}

function Lf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !mt(e, n)
    } catch {
        return !0
    }
}

function Tf(e) {
    var t = zt(e, 1);
    t !== null && ht(t, e, 1, -1)
}

function hs(e) {
    var t = St();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: el,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Wh.bind(null, pe, e), [t.memoizedState, e]
}

function tl(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = pe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Nf() {
    return ot().memoizedState
}

function Wl(e, t, n, r) {
    var l = St();
    pe.flags |= e, l.memoizedState = tl(1 | t, n, void 0, r === void 0 ? null : r)
}

function Li(e, t, n, r) {
    var l = ot();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ee !== null) {
        var o = Ee.memoizedState;
        if (i = o.destroy, r !== null && Gu(r, o.deps)) {
            l.memoizedState = tl(t, n, i, r);
            return
        }
    }
    pe.flags |= e, l.memoizedState = tl(1 | t, n, i, r)
}

function ms(e, t) {
    return Wl(8390656, 8, e, t)
}

function qu(e, t) {
    return Li(2048, 8, e, t)
}

function Df(e, t) {
    return Li(4, 2, e, t)
}

function Mf(e, t) {
    return Li(4, 4, e, t)
}

function zf(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Ff(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Li(4, 4, zf.bind(null, t, e), n)
}

function bu() {}

function Of(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function jf(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function If(e, t, n) {
    return xn & 21 ? (mt(n, t) || (n = $c(), pe.lanes |= n, Cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = n)
}

function Vh(e, t) {
    var n = q;
    q = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = po.transition;
    po.transition = {};
    try {
        e(!1), t()
    } finally {
        q = n, po.transition = r
    }
}

function Uf() {
    return ot().memoizedState
}

function Hh(e, t, n) {
    var r = tn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Af(e)) Bf(t, n);
    else if (n = Sf(e, t, n, r), n !== null) {
        var l = Ae();
        ht(n, e, r, l), $f(n, t, r)
    }
}

function Wh(e, t, n) {
    var r = tn(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Af(e)) Bf(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var o = t.lastRenderedState,
                u = i(o, n);
            if (l.hasEagerState = !0, l.eagerState = u, mt(u, o)) {
                var a = t.interleaved;
                a === null ? (l.next = l, Wu(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = Sf(e, t, l, r), n !== null && (l = Ae(), ht(n, e, r, l), $f(n, t, r))
    }
}

function Af(e) {
    var t = e.alternate;
    return e === pe || t !== null && t === pe
}

function Bf(e, t) {
    jr = pi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function $f(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Nu(e, n)
    }
}
var hi = {
        readContext: it,
        useCallback: De,
        useContext: De,
        useEffect: De,
        useImperativeHandle: De,
        useInsertionEffect: De,
        useLayoutEffect: De,
        useMemo: De,
        useReducer: De,
        useRef: De,
        useState: De,
        useDebugValue: De,
        useDeferredValue: De,
        useTransition: De,
        useMutableSource: De,
        useSyncExternalStore: De,
        useId: De,
        unstable_isNewReconciler: !1
    },
    Qh = {
        readContext: it,
        useCallback: function(e, t) {
            return St().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: it,
        useEffect: ms,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Wl(4194308, 4, zf.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Wl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Wl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = St();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = St();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Hh.bind(null, pe, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = St();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: hs,
        useDebugValue: bu,
        useDeferredValue: function(e) {
            return St().memoizedState = e
        },
        useTransition: function() {
            var e = hs(!1),
                t = e[0];
            return e = Vh.bind(null, e[1]), St().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = pe,
                l = St();
            if (ce) {
                if (n === void 0) throw Error(P(407));
                n = n()
            } else {
                if (n = t(), Pe === null) throw Error(P(349));
                xn & 30 || Pf(r, t, n)
            }
            l.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return l.queue = i, ms(Rf.bind(null, r, i, e), [e]), r.flags |= 2048, tl(9, _f.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = St(),
                t = Pe.identifierPrefix;
            if (ce) {
                var n = Tt,
                    r = Lt;
                n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = br++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = $h++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Kh = {
        readContext: it,
        useCallback: Of,
        useContext: it,
        useEffect: qu,
        useImperativeHandle: Ff,
        useInsertionEffect: Df,
        useLayoutEffect: Mf,
        useMemo: jf,
        useReducer: ho,
        useRef: Nf,
        useState: function() {
            return ho(el)
        },
        useDebugValue: bu,
        useDeferredValue: function(e) {
            var t = ot();
            return If(t, Ee.memoizedState, e)
        },
        useTransition: function() {
            var e = ho(el)[0],
                t = ot().memoizedState;
            return [e, t]
        },
        useMutableSource: xf,
        useSyncExternalStore: Cf,
        useId: Uf,
        unstable_isNewReconciler: !1
    },
    Yh = {
        readContext: it,
        useCallback: Of,
        useContext: it,
        useEffect: qu,
        useImperativeHandle: Ff,
        useInsertionEffect: Df,
        useLayoutEffect: Mf,
        useMemo: jf,
        useReducer: mo,
        useRef: Nf,
        useState: function() {
            return mo(el)
        },
        useDebugValue: bu,
        useDeferredValue: function(e) {
            var t = ot();
            return Ee === null ? t.memoizedState = e : If(t, Ee.memoizedState, e)
        },
        useTransition: function() {
            var e = mo(el)[0],
                t = ot().memoizedState;
            return [e, t]
        },
        useMutableSource: xf,
        useSyncExternalStore: Cf,
        useId: Uf,
        unstable_isNewReconciler: !1
    };

function st(e, t) {
    if (e && e.defaultProps) {
        t = he({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function bo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ti = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Rn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ae(),
            l = tn(e),
            i = Nt(r, l);
        i.payload = t, n != null && (i.callback = n), t = bt(e, i, l), t !== null && (ht(t, e, l, r), Vl(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ae(),
            l = tn(e),
            i = Nt(r, l);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = bt(e, i, l), t !== null && (ht(t, e, l, r), Vl(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ae(),
            r = tn(e),
            l = Nt(n, r);
        l.tag = 2, t != null && (l.callback = t), t = bt(e, l, r), t !== null && (ht(t, e, r, n), Vl(t, e, r))
    }
};

function vs(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Yr(n, r) || !Yr(l, i) : !0
}

function Vf(e, t, n) {
    var r = !1,
        l = on,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = it(i) : (l = Qe(t) ? En : Fe.current, r = t.contextTypes, i = (r = r != null) ? nr(e, l) : on), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ti, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function ys(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ti.enqueueReplaceState(t, t.state, null)
}

function eu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Qu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = it(i) : (i = Qe(t) ? En : Fe.current, l.context = nr(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (bo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ti.enqueueReplaceState(l, l.state, null), fi(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function or(e, t) {
    try {
        var n = "",
            r = t;
        do n += Ep(r), r = r.return; while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function vo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function tu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Xh = typeof WeakMap == "function" ? WeakMap : Map;

function Hf(e, t, n) {
    n = Nt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        vi || (vi = !0, fu = r), tu(e, t)
    }, n
}

function Wf(e, t, n) {
    n = Nt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            tu(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        tu(e, t), typeof r != "function" && (en === null ? en = new Set([this]) : en.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function gs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Xh;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = am.bind(null, e, t, n), t.then(e, e))
}

function ws(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Ss(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, bt(n, t, 1))), n.lanes |= 1), e)
}
var Gh = Ot.ReactCurrentOwner,
    He = !1;

function Ue(e, t, n, r) {
    t.child = e === null ? wf(t, null, n, r) : lr(t, e.child, n, r)
}

function Es(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return bn(t, l), r = Zu(e, t, n, r, i, l), n = Ju(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ft(e, t, l)) : (ce && n && Uu(t), t.flags |= 1, Ue(e, t, r, l), t.child)
}

function ks(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !ua(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Qf(e, t, i, r, l)) : (e = Xl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Yr, n(o, r) && e.ref === t.ref) return Ft(e, t, l)
    }
    return t.flags |= 1, e = nn(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Qf(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Yr(i, r) && e.ref === t.ref)
            if (He = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (He = !0);
            else return t.lanes = e.lanes, Ft(e, t, l)
    }
    return nu(e, t, n, r, l)
}

function Kf(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, re(Yn, Xe), Xe |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, re(Yn, Xe), Xe |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, re(Yn, Xe), Xe |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, re(Yn, Xe), Xe |= r;
    return Ue(e, t, l, n), t.child
}

function Yf(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function nu(e, t, n, r, l) {
    var i = Qe(n) ? En : Fe.current;
    return i = nr(t, i), bn(t, l), n = Zu(e, t, n, r, i, l), r = Ju(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ft(e, t, l)) : (ce && r && Uu(t), t.flags |= 1, Ue(e, t, n, l), t.child)
}

function xs(e, t, n, r, l) {
    if (Qe(n)) {
        var i = !0;
        oi(t)
    } else i = !1;
    if (bn(t, l), t.stateNode === null) Ql(e, t), Vf(t, n, r), eu(t, n, r, l), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            u = t.memoizedProps;
        o.props = u;
        var a = o.context,
            s = n.contextType;
        typeof s == "object" && s !== null ? s = it(s) : (s = Qe(n) ? En : Fe.current, s = nr(t, s));
        var d = n.getDerivedStateFromProps,
            c = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== s) && ys(t, o, r, s), Wt = !1;
        var p = t.memoizedState;
        o.state = p, fi(t, r, o, l), a = t.memoizedState, u !== r || p !== a || We.current || Wt ? (typeof d == "function" && (bo(t, n, d, r), a = t.memoizedState), (u = Wt || vs(t, n, u, r, p, a, s)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = s, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, Ef(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : st(t.type, u), o.props = s, c = t.pendingProps, p = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = it(a) : (a = Qe(n) ? En : Fe.current, a = nr(t, a));
        var k = n.getDerivedStateFromProps;
        (d = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== c || p !== a) && ys(t, o, r, a), Wt = !1, p = t.memoizedState, o.state = p, fi(t, r, o, l);
        var S = t.memoizedState;
        u !== c || p !== S || We.current || Wt ? (typeof k == "function" && (bo(t, n, k, r), S = t.memoizedState), (s = Wt || vs(t, n, s, r, p, S, a) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, S, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), o.props = r, o.state = S, o.context = a, r = s) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ru(e, t, n, r, i, l)
}

function ru(e, t, n, r, l, i) {
    Yf(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && as(t, n, !1), Ft(e, t, i);
    r = t.stateNode, Gh.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = lr(t, e.child, null, i), t.child = lr(t, null, u, i)) : Ue(e, t, u, i), t.memoizedState = r.state, l && as(t, n, !0), t.child
}

function Xf(e) {
    var t = e.stateNode;
    t.pendingContext ? us(e, t.pendingContext, t.pendingContext !== t.context) : t.context && us(e, t.context, !1), Ku(e, t.containerInfo)
}

function Cs(e, t, n, r, l) {
    return rr(), Bu(l), t.flags |= 256, Ue(e, t, n, r), t.child
}
var lu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function iu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Gf(e, t, n) {
    var r = t.pendingProps,
        l = de.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), re(de, l & 1), e === null) return Jo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Mi(o, r, 0, null), e = Sn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = iu(n), t.memoizedState = lu, e) : ea(t, o));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Zh(e, t, o, r, u, l, n);
    if (i) {
        i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = nn(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = nn(u, i) : (i = Sn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? iu(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = lu, r
    }
    return i = e.child, e = i.sibling, r = nn(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function ea(e, t) {
    return t = Mi({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function zl(e, t, n, r) {
    return r !== null && Bu(r), lr(t, e.child, null, n), e = ea(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Zh(e, t, n, r, l, i, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = vo(Error(P(422))), zl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Mi({
        mode: "visible",
        children: r.children
    }, l, 0, null), i = Sn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && lr(t, e.child, null, o), t.child.memoizedState = iu(o), t.memoizedState = lu, i);
    if (!(t.mode & 1)) return zl(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
        return r = u, i = Error(P(419)), r = vo(i, r, void 0), zl(e, t, o, r)
    }
    if (u = (o & e.childLanes) !== 0, He || u) {
        if (r = Pe, r !== null) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, zt(e, l), ht(r, e, l, -1))
        }
        return oa(), r = vo(Error(P(421))), zl(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ze = qt(l.nextSibling), Je = t, ce = !0, dt = null, e !== null && (tt[nt++] = Lt, tt[nt++] = Tt, tt[nt++] = kn, Lt = e.id, Tt = e.overflow, kn = t), t = ea(t, r.children), t.flags |= 4096, t)
}

function Ps(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), qo(e.return, t, n)
}

function yo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
}

function Zf(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if (Ue(e, t, r.children, n), r = de.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Ps(e, n, t);
            else if (e.tag === 19) Ps(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (re(de, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && di(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), yo(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && di(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            yo(t, !0, n, null, i);
            break;
        case "together":
            yo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Ql(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ft(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Cn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(P(153));
    if (t.child !== null) {
        for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Jh(e, t, n) {
    switch (t.tag) {
        case 3:
            Xf(t), rr();
            break;
        case 5:
            kf(t);
            break;
        case 1:
            Qe(t.type) && oi(t);
            break;
        case 4:
            Ku(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            re(si, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (re(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gf(e, t, n) : (re(de, de.current & 1), e = Ft(e, t, n), e !== null ? e.sibling : null);
            re(de, de.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Zf(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), re(de, de.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Kf(e, t, n)
    }
    return Ft(e, t, n)
}
var Jf, ou, qf, bf;
Jf = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
ou = function() {};
qf = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, vn(xt.current);
        var i = null;
        switch (n) {
            case "input":
                l = Lo(e, l), r = Lo(e, r), i = [];
                break;
            case "select":
                l = he({}, l, {
                    value: void 0
                }), r = he({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                l = Do(e, l), r = Do(e, r), i = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = li)
        }
        zo(n, r);
        var o;
        n = null;
        for (s in l)
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
                if (s === "style") {
                    var u = l[s];
                    for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Br.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
        for (s in r) {
            var a = r[s];
            if (u = l ? .[s], r.hasOwnProperty(s) && a !== u && (a != null || u != null))
                if (s === "style")
                    if (u) {
                        for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o])
                    } else n || (i || (i = []), i.push(s, n)), n = a;
            else s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Br.hasOwnProperty(s) ? (a != null && s === "onScroll" && ie("scroll", e), i || u === a || (i = [])) : (i = i || []).push(s, a))
        }
        n && (i = i || []).push("style", n);
        var s = i;
        (t.updateQueue = s) && (t.flags |= 4)
    }
};
bf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Er(e, t) {
    if (!ce) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function qh(e, t, n) {
    var r = t.pendingProps;
    switch (Au(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Me(t), null;
        case 1:
            return Qe(t.type) && ii(), Me(t), null;
        case 3:
            return r = t.stateNode, ir(), oe(We), oe(Fe), Xu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Dl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (hu(dt), dt = null))), ou(e, t), Me(t), null;
        case 5:
            Yu(t);
            var l = vn(qr.current);
            if (n = t.type, e !== null && t.stateNode != null) qf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(P(166));
                    return Me(t), null
                }
                if (e = vn(xt.current), Dl(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Et] = t, r[Zr] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            ie("cancel", r), ie("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ie("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Tr.length; l++) ie(Tr[l], r);
                            break;
                        case "source":
                            ie("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ie("error", r), ie("load", r);
                            break;
                        case "details":
                            ie("toggle", r);
                            break;
                        case "input":
                            Fa(r, i), ie("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, ie("invalid", r);
                            break;
                        case "textarea":
                            ja(r, i), ie("invalid", r)
                    }
                    zo(n, i), l = null;
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var u = i[o];
                            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Nl(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Nl(r.textContent, u, e), l = ["children", "" + u]) : Br.hasOwnProperty(o) && u != null && o === "onScroll" && ie("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            kl(r), Oa(r, i, !0);
                            break;
                        case "textarea":
                            kl(r), Ia(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = li)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _c(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Et] = t, e[Zr] = r, Jf(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = Fo(n, r), n) {
                            case "dialog":
                                ie("cancel", e), ie("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ie("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Tr.length; l++) ie(Tr[l], e);
                                l = r;
                                break;
                            case "source":
                                ie("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ie("error", e), ie("load", e), l = r;
                                break;
                            case "details":
                                ie("toggle", e), l = r;
                                break;
                            case "input":
                                Fa(e, r), l = Lo(e, r), ie("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = he({}, r, {
                                    value: void 0
                                }), ie("invalid", e);
                                break;
                            case "textarea":
                                ja(e, r), l = Do(e, r), ie("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        zo(n, l),
                        u = l;
                        for (i in u)
                            if (u.hasOwnProperty(i)) {
                                var a = u[i];
                                i === "style" ? Tc(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Rc(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && $r(e, a) : typeof a == "number" && $r(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Br.hasOwnProperty(i) ? a != null && i === "onScroll" && ie("scroll", e) : a != null && Cu(e, i, a, o))
                            }
                        switch (n) {
                            case "input":
                                kl(e), Oa(e, r, !1);
                                break;
                            case "textarea":
                                kl(e), Ia(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ln(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Gn(e, !!r.multiple, i, !1) : r.defaultValue != null && Gn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = li)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Me(t), null;
        case 6:
            if (e && t.stateNode != null) bf(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
                if (n = vn(qr.current), vn(xt.current), Dl(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Et] = t, (i = r.nodeValue !== n) && (e = Je, e !== null)) switch (e.tag) {
                        case 3:
                            Nl(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Nl(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Et] = t, t.stateNode = r
            }
            return Me(t), null;
        case 13:
            if (oe(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (ce && Ze !== null && t.mode & 1 && !(t.flags & 128)) yf(), rr(), t.flags |= 98560, i = !1;
                else if (i = Dl(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(P(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(P(317));
                        i[Et] = t
                    } else rr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Me(t), i = !1
                } else dt !== null && (hu(dt), dt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? ke === 0 && (ke = 3) : oa())), t.updateQueue !== null && (t.flags |= 4), Me(t), null);
        case 4:
            return ir(), ou(e, t), e === null && Xr(t.stateNode.containerInfo), Me(t), null;
        case 10:
            return Hu(t.type._context), Me(t), null;
        case 17:
            return Qe(t.type) && ii(), Me(t), null;
        case 19:
            if (oe(de), i = t.memoizedState, i === null) return Me(t), null;
            if (r = (t.flags & 128) !== 0, o = i.rendering, o === null)
                if (r) Er(i, !1);
                else {
                    if (ke !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = di(e), o !== null) {
                                for (t.flags |= 128, Er(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return re(de, de.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && ge() > ur && (t.flags |= 128, r = !0, Er(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = di(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Er(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !ce) return Me(t), null
                    } else 2 * ge() - i.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128, r = !0, Er(i, !1), t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ge(), t.sibling = null, n = de.current, re(de, r ? n & 1 | 2 : n & 1), t) : (Me(t), null);
        case 22:
        case 23:
            return ia(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Xe & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(P(156, t.tag))
}

function bh(e, t) {
    switch (Au(t), t.tag) {
        case 1:
            return Qe(t.type) && ii(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return ir(), oe(We), oe(Fe), Xu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Yu(t), null;
        case 13:
            if (oe(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(P(340));
                rr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return oe(de), null;
        case 4:
            return ir(), null;
        case 10:
            return Hu(t.type._context), null;
        case 22:
        case 23:
            return ia(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Fl = !1,
    ze = !1,
    em = typeof WeakSet == "function" ? WeakSet : Set,
    F = null;

function Kn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ve(e, t, r)
        } else n.current = null
}

function uu(e, t, n) {
    try {
        n()
    } catch (r) {
        ve(e, t, r)
    }
}
var _s = !1;

function tm(e, t) {
    if (Wo = ti, e = rf(), Iu(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    u = -1,
                    a = -1,
                    s = 0,
                    d = 0,
                    c = e,
                    p = null;
                t: for (;;) {
                    for (var k; c !== n || l !== 0 && c.nodeType !== 3 || (u = o + l), c !== i || r !== 0 && c.nodeType !== 3 || (a = o + r), c.nodeType === 3 && (o += c.nodeValue.length), (k = c.firstChild) !== null;) p = c, c = k;
                    for (;;) {
                        if (c === e) break t;
                        if (p === n && ++s === l && (u = o), p === i && ++d === r && (a = o), (k = c.nextSibling) !== null) break;
                        c = p, p = c.parentNode
                    }
                    c = k
                }
                n = u === -1 || a === -1 ? null : {
                    start: u,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Qo = {
            focusedElem: e,
            selectionRange: n
        }, ti = !1, F = t; F !== null;)
        if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
        else
            for (; F !== null;) {
                t = F;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var E = S.memoizedProps,
                                    _ = S.memoizedState,
                                    m = t.stateNode,
                                    f = m.getSnapshotBeforeUpdate(t.elementType === t.type ? E : st(t.type, E), _);
                                m.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                    }
                } catch (C) {
                    ve(t, t.return, C)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, F = e;
                    break
                }
                F = t.return
            }
    return S = _s, _s = !1, S
}

function Ir(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0, i !== void 0 && uu(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}

function Ni(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function au(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function ed(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ed(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Et], delete t[Zr], delete t[Xo], delete t[Ih], delete t[Uh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function td(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Rs(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || td(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function su(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = li));
    else if (r !== 4 && (e = e.child, e !== null))
        for (su(e, t, n), e = e.sibling; e !== null;) su(e, t, n), e = e.sibling
}

function cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (cu(e, t, n), e = e.sibling; e !== null;) cu(e, t, n), e = e.sibling
}
var Le = null,
    ct = !1;

function $t(e, t, n) {
    for (n = n.child; n !== null;) nd(e, t, n), n = n.sibling
}

function nd(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function") try {
        kt.onCommitFiberUnmount(ki, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ze || Kn(n, t);
        case 6:
            var r = Le,
                l = ct;
            Le = null, $t(e, t, n), Le = r, ct = l, Le !== null && (ct ? (e = Le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Le.removeChild(n.stateNode));
            break;
        case 18:
            Le !== null && (ct ? (e = Le, n = n.stateNode, e.nodeType === 8 ? so(e.parentNode, n) : e.nodeType === 1 && so(e, n), Qr(e)) : so(Le, n.stateNode));
            break;
        case 4:
            r = Le, l = ct, Le = n.stateNode.containerInfo, ct = !0, $t(e, t, n), Le = r, ct = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    i = i.tag, o !== void 0 && (i & 2 || i & 4) && uu(n, t, o), l = l.next
                } while (l !== r)
            }
            $t(e, t, n);
            break;
        case 1:
            if (!ze && (Kn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (u) {
                ve(n, t, u)
            }
            $t(e, t, n);
            break;
        case 21:
            $t(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, $t(e, t, n), ze = r) : $t(e, t, n);
            break;
        default:
            $t(e, t, n)
    }
}

function Ls(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new em), t.forEach(function(r) {
            var l = cm.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function at(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    u = o;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            Le = u.stateNode, ct = !1;
                            break e;
                        case 3:
                            Le = u.stateNode.containerInfo, ct = !0;
                            break e;
                        case 4:
                            Le = u.stateNode.containerInfo, ct = !0;
                            break e
                    }
                    u = u.return
                }
                if (Le === null) throw Error(P(160));
                nd(i, o, l), Le = null, ct = !1;
                var a = l.alternate;
                a !== null && (a.return = null), l.return = null
            } catch (s) {
                ve(l, t, s)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) rd(t, e), t = t.sibling
}

function rd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (at(t, e), wt(e), r & 4) {
                try {
                    Ir(3, e, e.return), Ni(3, e)
                } catch (E) {
                    ve(e, e.return, E)
                }
                try {
                    Ir(5, e, e.return)
                } catch (E) {
                    ve(e, e.return, E)
                }
            }
            break;
        case 1:
            at(t, e), wt(e), r & 512 && n !== null && Kn(n, n.return);
            break;
        case 5:
            if (at(t, e), wt(e), r & 512 && n !== null && Kn(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    $r(l, "")
                } catch (E) {
                    ve(e, e.return, E)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    u = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    u === "input" && i.type === "radio" && i.name != null && Cc(l, i), Fo(u, o);
                    var s = Fo(u, i);
                    for (o = 0; o < a.length; o += 2) {
                        var d = a[o],
                            c = a[o + 1];
                        d === "style" ? Tc(l, c) : d === "dangerouslySetInnerHTML" ? Rc(l, c) : d === "children" ? $r(l, c) : Cu(l, d, c, s)
                    }
                    switch (u) {
                        case "input":
                            To(l, i);
                            break;
                        case "textarea":
                            Pc(l, i);
                            break;
                        case "select":
                            var p = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!i.multiple;
                            var k = i.value;
                            k != null ? Gn(l, !!i.multiple, k, !1) : p !== !!i.multiple && (i.defaultValue != null ? Gn(l, !!i.multiple, i.defaultValue, !0) : Gn(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Zr] = i
                } catch (E) {
                    ve(e, e.return, E)
                }
            }
            break;
        case 6:
            if (at(t, e), wt(e), r & 4) {
                if (e.stateNode === null) throw Error(P(162));
                l = e.stateNode, i = e.memoizedProps;
                try {
                    l.nodeValue = i
                } catch (E) {
                    ve(e, e.return, E)
                }
            }
            break;
        case 3:
            if (at(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Qr(t.containerInfo)
            } catch (E) {
                ve(e, e.return, E)
            }
            break;
        case 4:
            at(t, e), wt(e);
            break;
        case 13:
            at(t, e), wt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (ra = ge())), r & 4 && Ls(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (s = ze) || d, at(t, e), ze = s) : at(t, e), wt(e), r & 8192) {
                if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !d && e.mode & 1)
                    for (F = e, d = e.child; d !== null;) {
                        for (c = F = d; F !== null;) {
                            switch (p = F, k = p.child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ir(4, p, p.return);
                                    break;
                                case 1:
                                    Kn(p, p.return);
                                    var S = p.stateNode;
                                    if (typeof S.componentWillUnmount == "function") {
                                        r = p, n = p.return;
                                        try {
                                            t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount()
                                        } catch (E) {
                                            ve(r, n, E)
                                        }
                                    }
                                    break;
                                case 5:
                                    Kn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        Ns(c);
                                        continue
                                    }
                            }
                            k !== null ? (k.return = p, F = k) : Ns(c)
                        }
                        d = d.sibling
                    }
                e: for (d = null, c = e;;) {
                    if (c.tag === 5) {
                        if (d === null) {
                            d = c;
                            try {
                                l = c.stateNode, s ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = c.stateNode, a = c.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Lc("display", o))
                            } catch (E) {
                                ve(e, e.return, E)
                            }
                        }
                    } else if (c.tag === 6) {
                        if (d === null) try {
                            c.stateNode.nodeValue = s ? "" : c.memoizedProps
                        } catch (E) {
                            ve(e, e.return, E)
                        }
                    } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                        c.child.return = c, c = c.child;
                        continue
                    }
                    if (c === e) break e;
                    for (; c.sibling === null;) {
                        if (c.return === null || c.return === e) break e;
                        d === c && (d = null), c = c.return
                    }
                    d === c && (d = null), c.sibling.return = c.return, c = c.sibling
                }
            }
            break;
        case 19:
            at(t, e), wt(e), r & 4 && Ls(e);
            break;
        case 21:
            break;
        default:
            at(t, e), wt(e)
    }
}

function wt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (td(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && ($r(l, ""), r.flags &= -33);
                    var i = Rs(e);
                    cu(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        u = Rs(e);
                    su(e, u, o);
                    break;
                default:
                    throw Error(P(161))
            }
        }
        catch (a) {
            ve(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function nm(e, t, n) {
    F = e, ld(e)
}

function ld(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null;) {
        var l = F,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || Fl;
            if (!o) {
                var u = l.alternate,
                    a = u !== null && u.memoizedState !== null || ze;
                u = Fl;
                var s = ze;
                if (Fl = o, (ze = a) && !s)
                    for (F = l; F !== null;) o = F, a = o.child, o.tag === 22 && o.memoizedState !== null ? Ds(l) : a !== null ? (a.return = o, F = a) : Ds(l);
                for (; i !== null;) F = i, ld(i), i = i.sibling;
                F = l, Fl = u, ze = s
            }
            Ts(e)
        } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, F = i) : Ts(e)
    }
}

function Ts(e) {
    for (; F !== null;) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ze || Ni(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ze)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && ps(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            ps(t, o, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var s = t.alternate;
                            if (s !== null) {
                                var d = s.memoizedState;
                                if (d !== null) {
                                    var c = d.dehydrated;
                                    c !== null && Qr(c)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163))
                }
                ze || t.flags & 512 && au(t)
            } catch (p) {
                ve(t, t.return, p)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, F = n;
            break
        }
        F = t.return
    }
}

function Ns(e) {
    for (; F !== null;) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, F = n;
            break
        }
        F = t.return
    }
}

function Ds(e) {
    for (; F !== null;) {
        var t = F;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ni(4, t)
                    } catch (a) {
                        ve(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            ve(t, l, a)
                        }
                    }
                    var i = t.return;
                    try {
                        au(t)
                    } catch (a) {
                        ve(t, i, a)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        au(t)
                    } catch (a) {
                        ve(t, o, a)
                    }
            }
        } catch (a) {
            ve(t, t.return, a)
        }
        if (t === e) {
            F = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return, F = u;
            break
        }
        F = t.return
    }
}
var rm = Math.ceil,
    mi = Ot.ReactCurrentDispatcher,
    ta = Ot.ReactCurrentOwner,
    lt = Ot.ReactCurrentBatchConfig,
    Y = 0,
    Pe = null,
    Se = null,
    Te = 0,
    Xe = 0,
    Yn = an(0),
    ke = 0,
    nl = null,
    Cn = 0,
    Di = 0,
    na = 0,
    Ur = null,
    Ve = null,
    ra = 0,
    ur = 1 / 0,
    _t = null,
    vi = !1,
    fu = null,
    en = null,
    Ol = !1,
    Xt = null,
    yi = 0,
    Ar = 0,
    du = null,
    Kl = -1,
    Yl = 0;

function Ae() {
    return Y & 6 ? ge() : Kl !== -1 ? Kl : Kl = ge()
}

function tn(e) {
    return e.mode & 1 ? Y & 2 && Te !== 0 ? Te & -Te : Bh.transition !== null ? (Yl === 0 && (Yl = $c()), Yl) : (e = q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Xc(e.type)), e) : 1
}

function ht(e, t, n, r) {
    if (50 < Ar) throw Ar = 0, du = null, Error(P(185));
    ul(e, n, r), (!(Y & 2) || e !== Pe) && (e === Pe && (!(Y & 2) && (Di |= n), ke === 4 && Kt(e, Te)), Ke(e, r), n === 1 && Y === 0 && !(t.mode & 1) && (ur = ge() + 500, Ri && sn()))
}

function Ke(e, t) {
    var n = e.callbackNode;
    Bp(e, t);
    var r = ei(e, e === Pe ? Te : 0);
    if (r === 0) n !== null && Ba(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Ba(n), t === 1) e.tag === 0 ? Ah(Ms.bind(null, e)) : hf(Ms.bind(null, e)), Oh(function() {
            !(Y & 6) && sn()
        }), n = null;
        else {
            switch (Vc(r)) {
                case 1:
                    n = Tu;
                    break;
                case 4:
                    n = Ac;
                    break;
                case 16:
                    n = bl;
                    break;
                case 536870912:
                    n = Bc;
                    break;
                default:
                    n = bl
            }
            n = dd(n, id.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function id(e, t) {
    if (Kl = -1, Yl = 0, Y & 6) throw Error(P(327));
    var n = e.callbackNode;
    if (er() && e.callbackNode !== n) return null;
    var r = ei(e, e === Pe ? Te : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = gi(e, r);
    else {
        t = r;
        var l = Y;
        Y |= 2;
        var i = ud();
        (Pe !== e || Te !== t) && (_t = null, ur = ge() + 500, wn(e, t));
        do try {
            om();
            break
        } catch (u) {
            od(e, u)
        }
        while (1);
        Vu(), mi.current = i, Y = l, Se !== null ? t = 0 : (Pe = null, Te = 0, t = ke)
    }
    if (t !== 0) {
        if (t === 2 && (l = Ao(e), l !== 0 && (r = l, t = pu(e, l))), t === 1) throw n = nl, wn(e, 0), Kt(e, r), Ke(e, ge()), n;
        if (t === 6) Kt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !lm(l) && (t = gi(e, r), t === 2 && (i = Ao(e), i !== 0 && (r = i, t = pu(e, i))), t === 1)) throw n = nl, wn(e, 0), Kt(e, r), Ke(e, ge()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(P(345));
                case 2:
                    dn(e, Ve, _t);
                    break;
                case 3:
                    if (Kt(e, r), (r & 130023424) === r && (t = ra + 500 - ge(), 10 < t)) {
                        if (ei(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            Ae(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Yo(dn.bind(null, e, Ve, _t), t);
                        break
                    }
                    dn(e, Ve, _t);
                    break;
                case 4:
                    if (Kt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var o = 31 - pt(r);
                        i = 1 << o, o = t[o], o > l && (l = o), r &= ~i
                    }
                    if (r = l, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * rm(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Yo(dn.bind(null, e, Ve, _t), r);
                        break
                    }
                    dn(e, Ve, _t);
                    break;
                case 5:
                    dn(e, Ve, _t);
                    break;
                default:
                    throw Error(P(329))
            }
        }
    }
    return Ke(e, ge()), e.callbackNode === n ? id.bind(null, e) : null
}

function pu(e, t) {
    var n = Ur;
    return e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256), e = gi(e, t), e !== 2 && (t = Ve, Ve = n, t !== null && hu(t)), e
}

function hu(e) {
    Ve === null ? Ve = e : Ve.push.apply(Ve, e)
}

function lm(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!mt(i(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Kt(e, t) {
    for (t &= ~na, t &= ~Di, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - pt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Ms(e) {
    if (Y & 6) throw Error(P(327));
    er();
    var t = ei(e, 0);
    if (!(t & 1)) return Ke(e, ge()), null;
    var n = gi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ao(e);
        r !== 0 && (t = r, n = pu(e, r))
    }
    if (n === 1) throw n = nl, wn(e, 0), Kt(e, t), Ke(e, ge()), n;
    if (n === 6) throw Error(P(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, dn(e, Ve, _t), Ke(e, ge()), null
}

function la(e, t) {
    var n = Y;
    Y |= 1;
    try {
        return e(t)
    } finally {
        Y = n, Y === 0 && (ur = ge() + 500, Ri && sn())
    }
}

function Pn(e) {
    Xt !== null && Xt.tag === 0 && !(Y & 6) && er();
    var t = Y;
    Y |= 1;
    var n = lt.transition,
        r = q;
    try {
        if (lt.transition = null, q = 1, e) return e()
    } finally {
        q = r, lt.transition = n, Y = t, !(Y & 6) && sn()
    }
}

function ia() {
    Xe = Yn.current, oe(Yn)
}

function wn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Fh(n)), Se !== null)
        for (n = Se.return; n !== null;) {
            var r = n;
            switch (Au(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ii();
                    break;
                case 3:
                    ir(), oe(We), oe(Fe), Xu();
                    break;
                case 5:
                    Yu(r);
                    break;
                case 4:
                    ir();
                    break;
                case 13:
                    oe(de);
                    break;
                case 19:
                    oe(de);
                    break;
                case 10:
                    Hu(r.type._context);
                    break;
                case 22:
                case 23:
                    ia()
            }
            n = n.return
        }
    if (Pe = e, Se = e = nn(e.current, null), Te = Xe = t, ke = 0, nl = null, na = Di = Cn = 0, Ve = Ur = null, mn !== null) {
        for (t = 0; t < mn.length; t++)
            if (n = mn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l, r.next = o
                }
                n.pending = r
            }
        mn = null
    }
    return e
}

function od(e, t) {
    do {
        var n = Se;
        try {
            if (Vu(), Hl.current = hi, pi) {
                for (var r = pe.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                pi = !1
            }
            if (xn = 0, Ce = Ee = pe = null, jr = !1, br = 0, ta.current = null, n === null || n.return === null) {
                ke = 1, nl = t, Se = null;
                break
            }
            e: {
                var i = e,
                    o = n.return,
                    u = n,
                    a = t;
                if (t = Te, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var s = a,
                        d = u,
                        c = d.tag;
                    if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var p = d.alternate;
                        p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var k = ws(o);
                    if (k !== null) {
                        k.flags &= -257, Ss(k, o, u, i, t), k.mode & 1 && gs(i, s, t), t = k, a = s;
                        var S = t.updateQueue;
                        if (S === null) {
                            var E = new Set;
                            E.add(a), t.updateQueue = E
                        } else S.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            gs(i, s, t), oa();
                            break e
                        }
                        a = Error(P(426))
                    }
                } else if (ce && u.mode & 1) {
                    var _ = ws(o);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256), Ss(_, o, u, i, t), Bu(or(a, u));
                        break e
                    }
                }
                i = a = or(a, u),
                ke !== 4 && (ke = 2),
                Ur === null ? Ur = [i] : Ur.push(i),
                i = o;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var m = Hf(i, a, t);
                            ds(i, m);
                            break e;
                        case 1:
                            u = a;
                            var f = i.type,
                                v = i.stateNode;
                            if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (en === null || !en.has(v)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var C = Wf(i, u, t);
                                ds(i, C);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            sd(n)
        } catch (T) {
            t = T, Se === n && n !== null && (Se = n = n.return);
            continue
        }
        break
    } while (1)
}

function ud() {
    var e = mi.current;
    return mi.current = hi, e === null ? hi : e
}

function oa() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Pe === null || !(Cn & 268435455) && !(Di & 268435455) || Kt(Pe, Te)
}

function gi(e, t) {
    var n = Y;
    Y |= 2;
    var r = ud();
    (Pe !== e || Te !== t) && (_t = null, wn(e, t));
    do try {
        im();
        break
    } catch (l) {
        od(e, l)
    }
    while (1);
    if (Vu(), Y = n, mi.current = r, Se !== null) throw Error(P(261));
    return Pe = null, Te = 0, ke
}

function im() {
    for (; Se !== null;) ad(Se)
}

function om() {
    for (; Se !== null && !Dp();) ad(Se)
}

function ad(e) {
    var t = fd(e.alternate, e, Xe);
    e.memoizedProps = e.pendingProps, t === null ? sd(e) : Se = t, ta.current = null
}

function sd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = bh(n, t), n !== null) {
                n.flags &= 32767, Se = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ke = 6, Se = null;
                return
            }
        } else if (n = qh(n, t, Xe), n !== null) {
            Se = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Se = t;
            return
        }
        Se = t = e
    } while (t !== null);
    ke === 0 && (ke = 5)
}

function dn(e, t, n) {
    var r = q,
        l = lt.transition;
    try {
        lt.transition = null, q = 1, um(e, t, n, r)
    } finally {
        lt.transition = l, q = r
    }
    return null
}

function um(e, t, n, r) {
    do er(); while (Xt !== null);
    if (Y & 6) throw Error(P(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if ($p(e, i), e === Pe && (Se = Pe = null, Te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ol || (Ol = !0, dd(bl, function() {
            return er(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = lt.transition, lt.transition = null;
        var o = q;
        q = 1;
        var u = Y;
        Y |= 4, ta.current = null, tm(e, n), rd(n, e), Rh(Qo), ti = !!Wo, Qo = Wo = null, e.current = n, nm(n), Mp(), Y = u, q = o, lt.transition = i
    } else e.current = n;
    if (Ol && (Ol = !1, Xt = e, yi = l), i = e.pendingLanes, i === 0 && (en = null), Op(n.stateNode), Ke(e, ge()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (vi) throw vi = !1, e = fu, fu = null, e;
    return yi & 1 && e.tag !== 0 && er(), i = e.pendingLanes, i & 1 ? e === du ? Ar++ : (Ar = 0, du = e) : Ar = 0, sn(), null
}

function er() {
    if (Xt !== null) {
        var e = Vc(yi),
            t = lt.transition,
            n = q;
        try {
            if (lt.transition = null, q = 16 > e ? 16 : e, Xt === null) var r = !1;
            else {
                if (e = Xt, Xt = null, yi = 0, Y & 6) throw Error(P(331));
                var l = Y;
                for (Y |= 4, F = e.current; F !== null;) {
                    var i = F,
                        o = i.child;
                    if (F.flags & 16) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var a = 0; a < u.length; a++) {
                                var s = u[a];
                                for (F = s; F !== null;) {
                                    var d = F;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ir(8, d, i)
                                    }
                                    var c = d.child;
                                    if (c !== null) c.return = d, F = c;
                                    else
                                        for (; F !== null;) {
                                            d = F;
                                            var p = d.sibling,
                                                k = d.return;
                                            if (ed(d), d === s) {
                                                F = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = k, F = p;
                                                break
                                            }
                                            F = k
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var E = S.child;
                                if (E !== null) {
                                    S.child = null;
                                    do {
                                        var _ = E.sibling;
                                        E.sibling = null, E = _
                                    } while (E !== null)
                                }
                            }
                            F = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) o.return = i, F = o;
                    else e: for (; F !== null;) {
                        if (i = F, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ir(9, i, i.return)
                        }
                        var m = i.sibling;
                        if (m !== null) {
                            m.return = i.return, F = m;
                            break e
                        }
                        F = i.return
                    }
                }
                var f = e.current;
                for (F = f; F !== null;) {
                    o = F;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null) v.return = o, F = v;
                    else e: for (o = f; F !== null;) {
                        if (u = F, u.flags & 2048) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ni(9, u)
                            }
                        } catch (T) {
                            ve(u, u.return, T)
                        }
                        if (u === o) {
                            F = null;
                            break e
                        }
                        var C = u.sibling;
                        if (C !== null) {
                            C.return = u.return, F = C;
                            break e
                        }
                        F = u.return
                    }
                }
                if (Y = l, sn(), kt && typeof kt.onPostCommitFiberRoot == "function") try {
                    kt.onPostCommitFiberRoot(ki, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            q = n, lt.transition = t
        }
    }
    return !1
}

function zs(e, t, n) {
    t = or(n, t), t = Hf(e, t, 1), e = bt(e, t, 1), t = Ae(), e !== null && (ul(e, 1, t), Ke(e, t))
}

function ve(e, t, n) {
    if (e.tag === 3) zs(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                zs(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
                    e = or(n, e), e = Wf(t, e, 1), t = bt(t, e, 1), e = Ae(), t !== null && (ul(t, 1, e), Ke(t, e));
                    break
                }
            }
            t = t.return
        }
}

function am(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ae(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (Te & n) === n && (ke === 4 || ke === 3 && (Te & 130023424) === Te && 500 > ge() - ra ? wn(e, 0) : na |= n), Ke(e, t)
}

function cd(e, t) {
    t === 0 && (e.mode & 1 ? (t = Pl, Pl <<= 1, !(Pl & 130023424) && (Pl = 4194304)) : t = 1);
    var n = Ae();
    e = zt(e, t), e !== null && (ul(e, t, n), Ke(e, n))
}

function sm(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), cd(e, n)
}

function cm(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(P(314))
    }
    r !== null && r.delete(t), cd(e, n)
}
var fd;
fd = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || We.current) He = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return He = !1, Jh(e, t, n);
            He = !!(e.flags & 131072)
        }
    else He = !1, ce && t.flags & 1048576 && mf(t, ai, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Ql(e, t), e = t.pendingProps;
            var l = nr(t, Fe.current);
            bn(t, n), l = Zu(null, t, r, e, l, n);
            var i = Ju();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Qe(r) ? (i = !0, oi(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Qu(t), l.updater = Ti, t.stateNode = l, l._reactInternals = t, eu(t, r, e, n), t = ru(null, t, r, !0, i, n)) : (t.tag = 0, ce && i && Uu(t), Ue(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Ql(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = dm(r), e = st(r, e), l) {
                    case 0:
                        t = nu(null, t, r, e, n);
                        break e;
                    case 1:
                        t = xs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Es(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ks(null, t, r, st(r.type, e), n);
                        break e
                }
                throw Error(P(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), nu(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), xs(e, t, r, l, n);
        case 3:
            e: {
                if (Xf(t), e === null) throw Error(P(387));r = t.pendingProps,
                i = t.memoizedState,
                l = i.element,
                Ef(e, t),
                fi(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        l = or(Error(P(423)), t), t = Cs(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = or(Error(P(424)), t), t = Cs(e, t, r, n, l);
                    break e
                } else
                    for (Ze = qt(t.stateNode.containerInfo.firstChild), Je = t, ce = !0, dt = null, n = wf(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (rr(), r === l) {
                        t = Ft(e, t, n);
                        break e
                    }
                    Ue(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return kf(t), e === null && Jo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Ko(r, l) ? o = null : i !== null && Ko(r, i) && (t.flags |= 32), Yf(e, t), Ue(e, t, o, n), t.child;
        case 6:
            return e === null && Jo(t), null;
        case 13:
            return Gf(e, t, n);
        case 4:
            return Ku(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = lr(t, null, r, n) : Ue(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), Es(e, t, r, l, n);
        case 7:
            return Ue(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ue(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ue(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, re(si, r._currentValue), r._currentValue = o, i !== null)
                    if (mt(i.value, o)) {
                        if (i.children === l.children && !We.current) {
                            t = Ft(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var u = i.dependencies;
                            if (u !== null) {
                                o = i.child;
                                for (var a = u.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (i.tag === 1) {
                                            a = Nt(-1, n & -n), a.tag = 2;
                                            var s = i.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var d = s.pending;
                                                d === null ? a.next = a : (a.next = d.next, d.next = a), s.pending = a
                                            }
                                        }
                                        i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), qo(i.return, n, t), u.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (o = i.return, o === null) throw Error(P(341));
                                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), qo(o, n, t), o = i.sibling
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (i = o.sibling, i !== null) {
                                        i.return = o.return, o = i;
                                        break
                                    }
                                    o = o.return
                                }
                            i = o
                        }
                Ue(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, bn(t, n), l = it(l), r = r(l), t.flags |= 1, Ue(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = st(r, t.pendingProps), l = st(r.type, l), ks(e, t, r, l, n);
        case 15:
            return Qf(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), Ql(e, t), t.tag = 1, Qe(r) ? (e = !0, oi(t)) : e = !1, bn(t, n), Vf(t, r, l), eu(t, r, l, n), ru(null, t, r, !0, e, n);
        case 19:
            return Zf(e, t, n);
        case 22:
            return Kf(e, t, n)
    }
    throw Error(P(156, t.tag))
};

function dd(e, t) {
    return Uc(e, t)
}

function fm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function rt(e, t, n, r) {
    return new fm(e, t, n, r)
}

function ua(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function dm(e) {
    if (typeof e == "function") return ua(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === _u) return 11;
        if (e === Ru) return 14
    }
    return 2
}

function nn(e, t) {
    var n = e.alternate;
    return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Xl(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") ua(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case In:
            return Sn(n.children, l, i, t);
        case Pu:
            o = 8, l |= 8;
            break;
        case Co:
            return e = rt(12, n, t, l | 2), e.elementType = Co, e.lanes = i, e;
        case Po:
            return e = rt(13, n, t, l), e.elementType = Po, e.lanes = i, e;
        case _o:
            return e = rt(19, n, t, l), e.elementType = _o, e.lanes = i, e;
        case Ec:
            return Mi(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case wc:
                    o = 10;
                    break e;
                case Sc:
                    o = 9;
                    break e;
                case _u:
                    o = 11;
                    break e;
                case Ru:
                    o = 14;
                    break e;
                case Ht:
                    o = 16, r = null;
                    break e
            }
            throw Error(P(130, e == null ? e : typeof e, ""))
    }
    return t = rt(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
}

function Sn(e, t, n, r) {
    return e = rt(7, e, r, t), e.lanes = n, e
}

function Mi(e, t, n, r) {
    return e = rt(22, e, r, t), e.elementType = Ec, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function go(e, t, n) {
    return e = rt(6, e, null, t), e.lanes = n, e
}

function wo(e, t, n) {
    return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function pm(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = qi(0), this.expirationTimes = qi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function aa(e, t, n, r, l, i, o, u, a) {
    return e = new pm(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = rt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Qu(i), e
}

function hm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: jn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function pd(e) {
    if (!e) return on;
    e = e._reactInternals;
    e: {
        if (Rn(e) !== e || e.tag !== 1) throw Error(P(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Qe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Qe(n)) return pf(e, n, t)
    }
    return t
}

function hd(e, t, n, r, l, i, o, u, a) {
    return e = aa(n, r, !0, e, l, i, o, u, a), e.context = pd(null), n = e.current, r = Ae(), l = tn(n), i = Nt(r, l), i.callback = t ? ? null, bt(n, i, l), e.current.lanes = l, ul(e, l, r), Ke(e, r), e
}

function zi(e, t, n, r) {
    var l = t.current,
        i = Ae(),
        o = tn(l);
    return n = pd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(i, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = bt(l, t, o), e !== null && (ht(e, l, o, i), Vl(e, l, o)), o
}

function wi(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Fs(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function sa(e, t) {
    Fs(e, t), (e = e.alternate) && Fs(e, t)
}

function mm() {
    return null
}
var md = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function ca(e) {
    this._internalRoot = e
}
Fi.prototype.render = ca.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(P(409));
    zi(e, t, null, null)
};
Fi.prototype.unmount = ca.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Pn(function() {
            zi(null, e, null, null)
        }), t[Mt] = null
    }
};

function Fi(e) {
    this._internalRoot = e
}
Fi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Qc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
        Qt.splice(n, 0, e), n === 0 && Yc(e)
    }
};

function fa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Oi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Os() {}

function vm(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var s = wi(o);
                i.call(s)
            }
        }
        var o = hd(t, r, e, 0, null, !1, !1, "", Os);
        return e._reactRootContainer = o, e[Mt] = o.current, Xr(e.nodeType === 8 ? e.parentNode : e), Pn(), o
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var s = wi(a);
            u.call(s)
        }
    }
    var a = aa(e, 0, !1, null, null, !1, !1, "", Os);
    return e._reactRootContainer = a, e[Mt] = a.current, Xr(e.nodeType === 8 ? e.parentNode : e), Pn(function() {
        zi(t, a, n, r)
    }), a
}

function ji(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var a = wi(o);
                u.call(a)
            }
        }
        zi(t, o, e, l)
    } else o = vm(n, t, e, l, r);
    return wi(o)
}
Hc = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Lr(t.pendingLanes);
                n !== 0 && (Nu(t, n | 1), Ke(t, ge()), !(Y & 6) && (ur = ge() + 500, sn()))
            }
            break;
        case 13:
            Pn(function() {
                var r = zt(e, 1);
                if (r !== null) {
                    var l = Ae();
                    ht(r, e, 1, l)
                }
            }), sa(e, 1)
    }
};
Du = function(e) {
    if (e.tag === 13) {
        var t = zt(e, 134217728);
        if (t !== null) {
            var n = Ae();
            ht(t, e, 134217728, n)
        }
        sa(e, 134217728)
    }
};
Wc = function(e) {
    if (e.tag === 13) {
        var t = tn(e),
            n = zt(e, t);
        if (n !== null) {
            var r = Ae();
            ht(n, e, t, r)
        }
        sa(e, t)
    }
};
Qc = function() {
    return q
};
Kc = function(e, t) {
    var n = q;
    try {
        return q = e, t()
    } finally {
        q = n
    }
};
jo = function(e, t, n) {
    switch (t) {
        case "input":
            if (To(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = _i(r);
                        if (!l) throw Error(P(90));
                        xc(r), To(r, l)
                    }
                }
            }
            break;
        case "textarea":
            Pc(e, n);
            break;
        case "select":
            t = n.value, t != null && Gn(e, !!n.multiple, t, !1)
    }
};
Mc = la;
zc = Pn;
var ym = {
        usingClientEntryPoint: !1,
        Events: [sl, $n, _i, Nc, Dc, la]
    },
    kr = {
        findFiberByHostInstance: hn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    gm = {
        bundleType: kr.bundleType,
        version: kr.version,
        rendererPackageName: kr.rendererPackageName,
        rendererConfig: kr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ot.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = jc(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: kr.findFiberByHostInstance || mm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jl.isDisabled && jl.supportsFiber) try {
        ki = jl.inject(gm), kt = jl
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ym;
be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fa(t)) throw Error(P(200));
    return hm(e, t, null, n)
};
be.createRoot = function(e, t) {
    if (!fa(e)) throw Error(P(299));
    var n = !1,
        r = "",
        l = md;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = aa(e, 1, !1, null, null, n, !1, r, l), e[Mt] = t.current, Xr(e.nodeType === 8 ? e.parentNode : e), new ca(t)
};
be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
    return e = jc(t), e = e === null ? null : e.stateNode, e
};
be.flushSync = function(e) {
    return Pn(e)
};
be.hydrate = function(e, t, n) {
    if (!Oi(t)) throw Error(P(200));
    return ji(null, e, t, !0, n)
};
be.hydrateRoot = function(e, t, n) {
    if (!fa(e)) throw Error(P(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        i = "",
        o = md;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = hd(t, null, e, 1, n ? ? null, l, !1, i, o), e[Mt] = t.current, Xr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Fi(t)
};
be.render = function(e, t, n) {
    if (!Oi(t)) throw Error(P(200));
    return ji(null, e, t, !1, n)
};
be.unmountComponentAtNode = function(e) {
    if (!Oi(e)) throw Error(P(40));
    return e._reactRootContainer ? (Pn(function() {
        ji(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Mt] = null
        })
    }), !0) : !1
};
be.unstable_batchedUpdates = la;
be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Oi(n)) throw Error(P(200));
    if (e == null || e._reactInternals === void 0) throw Error(P(38));
    return ji(e, t, n, !1, r)
};
be.version = "18.3.1-next-f1338f8080-20240426";

function vd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd)
    } catch (e) {
        console.error(e)
    }
}
vd(), mc.exports = be;
var yd = mc.exports;
const wm = ic(yd),
    Sm = lc({
        __proto__: null,
        default: wm
    }, [yd]);
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fe() {
    return fe = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, fe.apply(this, arguments)
}
var ye;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(ye || (ye = {}));
const js = "popstate";

function Em(e) {
    e === void 0 && (e = {});

    function t(r, l) {
        let {
            pathname: i,
            search: o,
            hash: u
        } = r.location;
        return rl("", {
            pathname: i,
            search: o,
            hash: u
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }

    function n(r, l) {
        return typeof l == "string" ? l : fl(l)
    }
    return xm(t, n, null, e)
}

function Q(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function ar(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function km() {
    return Math.random().toString(36).substr(2, 8)
}

function Is(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function rl(e, t, n, r) {
    return n === void 0 && (n = null), fe({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? jt(t) : t, {
        state: n,
        key: t && t.key || r || km()
    })
}

function fl(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function jt(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function xm(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: l = document.defaultView,
        v5Compat: i = !1
    } = r, o = l.history, u = ye.Pop, a = null, s = d();
    s == null && (s = 0, o.replaceState(fe({}, o.state, {
        idx: s
    }), ""));

    function d() {
        return (o.state || {
            idx: null
        }).idx
    }

    function c() {
        u = ye.Pop;
        let _ = d(),
            m = _ == null ? null : _ - s;
        s = _, a && a({
            action: u,
            location: E.location,
            delta: m
        })
    }

    function p(_, m) {
        u = ye.Push;
        let f = rl(E.location, _, m);
        n && n(f, _), s = d() + 1;
        let v = Is(f, s),
            C = E.createHref(f);
        try {
            o.pushState(v, "", C)
        } catch (T) {
            if (T instanceof DOMException && T.name === "DataCloneError") throw T;
            l.location.assign(C)
        }
        i && a && a({
            action: u,
            location: E.location,
            delta: 1
        })
    }

    function k(_, m) {
        u = ye.Replace;
        let f = rl(E.location, _, m);
        n && n(f, _), s = d();
        let v = Is(f, s),
            C = E.createHref(f);
        o.replaceState(v, "", C), i && a && a({
            action: u,
            location: E.location,
            delta: 0
        })
    }

    function S(_) {
        let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
            f = typeof _ == "string" ? _ : fl(_);
        return f = f.replace(/ $/, "%20"), Q(m, "No window.location.(origin|href) available to create URL for href: " + f), new URL(f, m)
    }
    let E = {
        get action() {
            return u
        },
        get location() {
            return e(l, o)
        },
        listen(_) {
            if (a) throw new Error("A history only accepts one active listener");
            return l.addEventListener(js, c), a = _, () => {
                l.removeEventListener(js, c), a = null
            }
        },
        createHref(_) {
            return t(l, _)
        },
        createURL: S,
        encodeLocation(_) {
            let m = S(_);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: p,
        replace: k,
        go(_) {
            return o.go(_)
        }
    };
    return E
}
var ne;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(ne || (ne = {}));
const Cm = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function Pm(e) {
    return e.index === !0
}

function ll(e, t, n, r) {
    return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((l, i) => {
        let o = [...n, String(i)],
            u = typeof l.id == "string" ? l.id : o.join("-");
        if (Q(l.index !== !0 || !l.children, "Cannot specify children on an index route"), Q(!r[u], 'Found a route id collision on id "' + u + `".  Route id's must be globally unique within Data Router usages`), Pm(l)) {
            let a = fe({}, l, t(l), {
                id: u
            });
            return r[u] = a, a
        } else {
            let a = fe({}, l, t(l), {
                id: u,
                children: void 0
            });
            return r[u] = a, l.children && (a.children = ll(l.children, t, o, r)), a
        }
    })
}

function pn(e, t, n) {
    return n === void 0 && (n = "/"), Gl(e, t, n, !1)
}

function Gl(e, t, n, r) {
    let l = typeof t == "string" ? jt(t) : t,
        i = dl(l.pathname || "/", n);
    if (i == null) return null;
    let o = gd(e);
    Rm(o);
    let u = null;
    for (let a = 0; u == null && a < o.length; ++a) {
        let s = Um(i);
        u = jm(o[a], s, r)
    }
    return u
}

function _m(e, t) {
    let {
        route: n,
        pathname: r,
        params: l
    } = e;
    return {
        id: n.id,
        pathname: r,
        params: l,
        data: t[n.id],
        handle: n.handle
    }
}

function gd(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let l = (i, o, u) => {
        let a = {
            relativePath: u === void 0 ? i.path || "" : u,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        a.relativePath.startsWith("/") && (Q(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let s = rn([r, a.relativePath]),
            d = n.concat(a);
        i.children && i.children.length > 0 && (Q(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')), gd(i.children, t, d, s)), !(i.path == null && !i.index) && t.push({
            path: s,
            score: Fm(s, i.index),
            routesMeta: d
        })
    };
    return e.forEach((i, o) => {
        var u;
        if (i.path === "" || !((u = i.path) != null && u.includes("?"))) l(i, o);
        else
            for (let a of wd(i.path)) l(i, o, a)
    }), t
}

function wd(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [i, ""] : [i];
    let o = wd(r.join("/")),
        u = [];
    return u.push(...o.map(a => a === "" ? i : [i, a].join("/"))), l && u.push(...o), u.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function Rm(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Om(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Lm = /^:[\w-]+$/,
    Tm = 3,
    Nm = 2,
    Dm = 1,
    Mm = 10,
    zm = -2,
    Us = e => e === "*";

function Fm(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Us) && (r += zm), t && (r += Nm), n.filter(l => !Us(l)).reduce((l, i) => l + (Lm.test(i) ? Tm : i === "" ? Dm : Mm), r)
}

function Om(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function jm(e, t, n) {
    n === void 0 && (n = !1);
    let {
        routesMeta: r
    } = e, l = {}, i = "/", o = [];
    for (let u = 0; u < r.length; ++u) {
        let a = r[u],
            s = u === r.length - 1,
            d = i === "/" ? t : t.slice(i.length) || "/",
            c = As({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: s
            }, d),
            p = a.route;
        if (!c && s && n && !r[r.length - 1].route.index && (c = As({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: !1
            }, d)), !c) return null;
        Object.assign(l, c.params), o.push({
            params: l,
            pathname: rn([i, c.pathname]),
            pathnameBase: $m(rn([i, c.pathnameBase])),
            route: p
        }), c.pathnameBase !== "/" && (i = rn([i, c.pathnameBase]))
    }
    return o
}

function As(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Im(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let i = l[0],
        o = i.replace(/(.)\/+$/, "$1"),
        u = l.slice(1);
    return {
        params: r.reduce((s, d, c) => {
            let {
                paramName: p,
                isOptional: k
            } = d;
            if (p === "*") {
                let E = u[c] || "";
                o = i.slice(0, i.length - E.length).replace(/(.)\/+$/, "$1")
            }
            const S = u[c];
            return k && !S ? s[p] = void 0 : s[p] = (S || "").replace(/%2F/g, "/"), s
        }, {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}

function Im(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), ar(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, u, a) => (r.push({
            paramName: u,
            isOptional: a != null
        }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]
}

function Um(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return ar(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function dl(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function Am(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = ""
    } = typeof e == "string" ? jt(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Bm(n, t) : t,
        search: Vm(r),
        hash: Hm(l)
    }
}

function Bm(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }), n.length > 1 ? n.join("/") : "/"
}

function So(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Sd(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Ed(e, t) {
    let n = Sd(e);
    return t ? n.map((r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function kd(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = jt(e) : (l = fe({}, e), Q(!l.pathname || !l.pathname.includes("?"), So("?", "pathname", "search", l)), Q(!l.pathname || !l.pathname.includes("#"), So("#", "pathname", "hash", l)), Q(!l.search || !l.search.includes("#"), So("#", "search", "hash", l)));
    let i = e === "" || l.pathname === "",
        o = i ? "/" : l.pathname,
        u;
    if (o == null) u = n;
    else {
        let c = t.length - 1;
        if (!r && o.startsWith("..")) {
            let p = o.split("/");
            for (; p[0] === "..";) p.shift(), c -= 1;
            l.pathname = p.join("/")
        }
        u = c >= 0 ? t[c] : "/"
    }
    let a = Am(l, u),
        s = o && o !== "/" && o.endsWith("/"),
        d = (i || o === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (s || d) && (a.pathname += "/"), a
}
const rn = e => e.join("/").replace(/\/\/+/g, "/"),
    $m = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Vm = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    Hm = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class da {
    constructor(t, n, r, l) {
        l === void 0 && (l = !1), this.status = t, this.statusText = n || "", this.internal = l, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
    }
}

function Ii(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const xd = ["post", "put", "patch", "delete"],
    Wm = new Set(xd),
    Qm = ["get", ...xd],
    Km = new Set(Qm),
    Ym = new Set([301, 302, 303, 307, 308]),
    Xm = new Set([307, 308]),
    Eo = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    Gm = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    xr = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    pa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Zm = e => ({
        hasErrorBoundary: !!e.hasErrorBoundary
    }),
    Cd = "remix-router-transitions";

function Jm(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
        r = !n;
    Q(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let l;
    if (e.mapRouteProperties) l = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let h = e.detectErrorBoundary;
        l = y => ({
            hasErrorBoundary: h(y)
        })
    } else l = Zm;
    let i = {},
        o = ll(e.routes, l, void 0, i),
        u, a = e.basename || "/",
        s = e.unstable_dataStrategy || nv,
        d = e.unstable_patchRoutesOnMiss,
        c = fe({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            v7_skipActionErrorRevalidation: !1
        }, e.future),
        p = null,
        k = new Set,
        S = null,
        E = null,
        _ = null,
        m = e.hydrationData != null,
        f = pn(o, e.history.location, a),
        v = null;
    if (f == null && !d) {
        let h = Ie(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: y,
                route: w
            } = Gs(o);
        f = y, v = {
            [w.id]: h
        }
    }
    f && d && !e.hydrationData && Ki(f, o, e.history.location.pathname).active && (f = null);
    let C;
    if (!f) C = !1, f = [];
    else if (f.some(h => h.route.lazy)) C = !1;
    else if (!f.some(h => h.route.loader)) C = !0;
    else if (c.v7_partialHydration) {
        let h = e.hydrationData ? e.hydrationData.loaderData : null,
            y = e.hydrationData ? e.hydrationData.errors : null,
            w = x => x.route.loader ? typeof x.route.loader == "function" && x.route.loader.hydrate === !0 ? !1 : h && h[x.route.id] !== void 0 || y && y[x.route.id] !== void 0 : !0;
        if (y) {
            let x = f.findIndex(z => y[z.route.id] !== void 0);
            C = f.slice(0, x + 1).every(w)
        } else C = f.every(w)
    } else C = e.hydrationData != null;
    let T, g = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: f,
            initialized: C,
            navigation: Eo,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || v,
            fetchers: new Map,
            blockers: new Map
        },
        D = ye.Pop,
        L = !1,
        O, j = !1,
        X = new Map,
        ue = null,
        xe = !1,
        te = !1,
        vt = [],
        It = [],
        ae = new Map,
        M = 0,
        $ = -1,
        V = new Map,
        G = new Set,
        le = new Map,
        yt = new Map,
        _e = new Set,
        ut = new Map,
        Oe = new Map,
        Tn = new Map,
        Vi = !1;

    function Od() {
        if (p = e.history.listen(h => {
                let {
                    action: y,
                    location: w,
                    delta: x
                } = h;
                if (Vi) {
                    Vi = !1;
                    return
                }
                ar(Oe.size === 0 || x != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let z = Ca({
                    currentLocation: g.location,
                    nextLocation: w,
                    historyAction: y
                });
                if (z && x != null) {
                    Vi = !0, e.history.go(x * -1), hl(z, {
                        state: "blocked",
                        location: w,
                        proceed() {
                            hl(z, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: w
                            }), e.history.go(x)
                        },
                        reset() {
                            let I = new Map(g.blockers);
                            I.set(z, xr), je({
                                blockers: I
                            })
                        }
                    });
                    return
                }
                return cn(y, w)
            }), n) {
            mv(t, X);
            let h = () => vv(t, X);
            t.addEventListener("pagehide", h), ue = () => t.removeEventListener("pagehide", h)
        }
        return g.initialized || cn(ye.Pop, g.location, {
            initialHydration: !0
        }), T
    }

    function jd() {
        p && p(), ue && ue(), k.clear(), O && O.abort(), g.fetchers.forEach((h, y) => pl(y)), g.blockers.forEach((h, y) => xa(y))
    }

    function Id(h) {
        return k.add(h), () => k.delete(h)
    }

    function je(h, y) {
        y === void 0 && (y = {}), g = fe({}, g, h);
        let w = [],
            x = [];
        c.v7_fetcherPersist && g.fetchers.forEach((z, I) => {
            z.state === "idle" && (_e.has(I) ? x.push(I) : w.push(I))
        }), [...k].forEach(z => z(g, {
            deletedFetchers: x,
            unstable_viewTransitionOpts: y.viewTransitionOpts,
            unstable_flushSync: y.flushSync === !0
        })), c.v7_fetcherPersist && (w.forEach(z => g.fetchers.delete(z)), x.forEach(z => pl(z)))
    }

    function Nn(h, y, w) {
        var x, z;
        let {
            flushSync: I
        } = w === void 0 ? {} : w, B = g.actionData != null && g.navigation.formMethod != null && ft(g.navigation.formMethod) && g.navigation.state === "loading" && ((x = h.state) == null ? void 0 : x._isRedirect) !== !0, N;
        y.actionData ? Object.keys(y.actionData).length > 0 ? N = y.actionData : N = null : B ? N = g.actionData : N = null;
        let H = y.loaderData ? Ys(g.loaderData, y.loaderData, y.matches || [], y.errors) : g.loaderData,
            U = g.blockers;
        U.size > 0 && (U = new Map(U), U.forEach((J, ee) => U.set(ee, xr)));
        let A = L === !0 || g.navigation.formMethod != null && ft(g.navigation.formMethod) && ((z = h.state) == null ? void 0 : z._isRedirect) !== !0;
        u && (o = u, u = void 0), xe || D === ye.Pop || (D === ye.Push ? e.history.push(h, h.state) : D === ye.Replace && e.history.replace(h, h.state));
        let b;
        if (D === ye.Pop) {
            let J = X.get(g.location.pathname);
            J && J.has(h.pathname) ? b = {
                currentLocation: g.location,
                nextLocation: h
            } : X.has(h.pathname) && (b = {
                currentLocation: h,
                nextLocation: g.location
            })
        } else if (j) {
            let J = X.get(g.location.pathname);
            J ? J.add(h.pathname) : (J = new Set([h.pathname]), X.set(g.location.pathname, J)), b = {
                currentLocation: g.location,
                nextLocation: h
            }
        }
        je(fe({}, y, {
            actionData: N,
            loaderData: H,
            historyAction: D,
            location: h,
            initialized: !0,
            navigation: Eo,
            revalidation: "idle",
            restoreScrollPosition: _a(h, y.matches || g.matches),
            preventScrollReset: A,
            blockers: U
        }), {
            viewTransitionOpts: b,
            flushSync: I === !0
        }), D = ye.Pop, L = !1, j = !1, xe = !1, te = !1, vt = [], It = []
    }
    async function va(h, y) {
        if (typeof h == "number") {
            e.history.go(h);
            return
        }
        let w = mu(g.location, g.matches, a, c.v7_prependBasename, h, c.v7_relativeSplatPath, y ? .fromRouteId, y ? .relative),
            {
                path: x,
                submission: z,
                error: I
            } = Bs(c.v7_normalizeFormMethod, !1, w, y),
            B = g.location,
            N = rl(g.location, x, y && y.state);
        N = fe({}, N, e.history.encodeLocation(N));
        let H = y && y.replace != null ? y.replace : void 0,
            U = ye.Push;
        H === !0 ? U = ye.Replace : H === !1 || z != null && ft(z.formMethod) && z.formAction === g.location.pathname + g.location.search && (U = ye.Replace);
        let A = y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0,
            b = (y && y.unstable_flushSync) === !0,
            J = Ca({
                currentLocation: B,
                nextLocation: N,
                historyAction: U
            });
        if (J) {
            hl(J, {
                state: "blocked",
                location: N,
                proceed() {
                    hl(J, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: N
                    }), va(h, y)
                },
                reset() {
                    let ee = new Map(g.blockers);
                    ee.set(J, xr), je({
                        blockers: ee
                    })
                }
            });
            return
        }
        return await cn(U, N, {
            submission: z,
            pendingError: I,
            preventScrollReset: A,
            replace: y && y.replace,
            enableViewTransition: y && y.unstable_viewTransition,
            flushSync: b
        })
    }

    function Ud() {
        if (Hi(), je({
                revalidation: "loading"
            }), g.navigation.state !== "submitting") {
            if (g.navigation.state === "idle") {
                cn(g.historyAction, g.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            cn(D || g.historyAction, g.navigation.location, {
                overrideNavigation: g.navigation
            })
        }
    }
    async function cn(h, y, w) {
        O && O.abort(), O = null, D = h, xe = (w && w.startUninterruptedRevalidation) === !0, Xd(g.location, g.matches), L = (w && w.preventScrollReset) === !0, j = (w && w.enableViewTransition) === !0;
        let x = u || o,
            z = w && w.overrideNavigation,
            I = pn(x, y, a),
            B = (w && w.flushSync) === !0,
            N = Ki(I, x, y.pathname);
        if (N.active && N.matches && (I = N.matches), !I) {
            let {
                error: Z,
                notFoundMatches: Re,
                route: we
            } = Wi(y.pathname);
            Nn(y, {
                matches: Re,
                loaderData: {},
                errors: {
                    [we.id]: Z
                }
            }, {
                flushSync: B
            });
            return
        }
        if (g.initialized && !te && av(g.location, y) && !(w && w.submission && ft(w.submission.formMethod))) {
            Nn(y, {
                matches: I
            }, {
                flushSync: B
            });
            return
        }
        O = new AbortController;
        let H = On(e.history, y, O.signal, w && w.submission),
            U;
        if (w && w.pendingError) U = [Xn(I).route.id, {
            type: ne.error,
            error: w.pendingError
        }];
        else if (w && w.submission && ft(w.submission.formMethod)) {
            let Z = await Ad(H, y, w.submission, I, N.active, {
                replace: w.replace,
                flushSync: B
            });
            if (Z.shortCircuited) return;
            if (Z.pendingActionResult) {
                let [Re, we] = Z.pendingActionResult;
                if (Ge(we) && Ii(we.error) && we.error.status === 404) {
                    O = null, Nn(y, {
                        matches: Z.matches,
                        loaderData: {},
                        errors: {
                            [Re]: we.error
                        }
                    });
                    return
                }
            }
            I = Z.matches || I, U = Z.pendingActionResult, z = ko(y, w.submission), B = !1, N.active = !1, H = On(e.history, H.url, H.signal)
        }
        let {
            shortCircuited: A,
            matches: b,
            loaderData: J,
            errors: ee
        } = await Bd(H, y, I, N.active, z, w && w.submission, w && w.fetcherSubmission, w && w.replace, w && w.initialHydration === !0, B, U);
        A || (O = null, Nn(y, fe({
            matches: b || I
        }, Xs(U), {
            loaderData: J,
            errors: ee
        })))
    }
    async function Ad(h, y, w, x, z, I) {
        I === void 0 && (I = {}), Hi();
        let B = pv(y, w);
        if (je({
                navigation: B
            }, {
                flushSync: I.flushSync === !0
            }), z) {
            let U = await vl(x, y.pathname, h.signal);
            if (U.type === "aborted") return {
                shortCircuited: !0
            };
            if (U.type === "error") {
                let {
                    boundaryId: A,
                    error: b
                } = ml(y.pathname, U);
                return {
                    matches: U.partialMatches,
                    pendingActionResult: [A, {
                        type: ne.error,
                        error: b
                    }]
                }
            } else if (U.matches) x = U.matches;
            else {
                let {
                    notFoundMatches: A,
                    error: b,
                    route: J
                } = Wi(y.pathname);
                return {
                    matches: A,
                    pendingActionResult: [J.id, {
                        type: ne.error,
                        error: b
                    }]
                }
            }
        }
        let N, H = Nr(x, y);
        if (!H.route.action && !H.route.lazy) N = {
            type: ne.error,
            error: Ie(405, {
                method: h.method,
                pathname: y.pathname,
                routeId: H.route.id
            })
        };
        else if (N = (await pr("action", h, [H], x))[0], h.signal.aborted) return {
            shortCircuited: !0
        };
        if (gn(N)) {
            let U;
            return I && I.replace != null ? U = I.replace : U = Ws(N.response.headers.get("Location"), new URL(h.url), a) === g.location.pathname + g.location.search, await dr(h, N, {
                submission: w,
                replace: U
            }), {
                shortCircuited: !0
            }
        }
        if (yn(N)) throw Ie(400, {
            type: "defer-action"
        });
        if (Ge(N)) {
            let U = Xn(x, H.route.id);
            return (I && I.replace) !== !0 && (D = ye.Push), {
                matches: x,
                pendingActionResult: [U.route.id, N]
            }
        }
        return {
            matches: x,
            pendingActionResult: [H.route.id, N]
        }
    }
    async function Bd(h, y, w, x, z, I, B, N, H, U, A) {
        let b = z || ko(y, I),
            J = I || B || qs(b),
            ee = !xe && (!c.v7_partialHydration || !H);
        if (x) {
            if (ee) {
                let me = ya(A);
                je(fe({
                    navigation: b
                }, me !== void 0 ? {
                    actionData: me
                } : {}), {
                    flushSync: U
                })
            }
            let W = await vl(w, y.pathname, h.signal);
            if (W.type === "aborted") return {
                shortCircuited: !0
            };
            if (W.type === "error") {
                let {
                    boundaryId: me,
                    error: Ye
                } = ml(y.pathname, W);
                return {
                    matches: W.partialMatches,
                    loaderData: {},
                    errors: {
                        [me]: Ye
                    }
                }
            } else if (W.matches) w = W.matches;
            else {
                let {
                    error: me,
                    notFoundMatches: Ye,
                    route: se
                } = Wi(y.pathname);
                return {
                    matches: Ye,
                    loaderData: {},
                    errors: {
                        [se.id]: me
                    }
                }
            }
        }
        let Z = u || o,
            [Re, we] = $s(e.history, g, w, J, y, c.v7_partialHydration && H === !0, c.v7_skipActionErrorRevalidation, te, vt, It, _e, le, G, Z, a, A);
        if (Qi(W => !(w && w.some(me => me.route.id === W)) || Re && Re.some(me => me.route.id === W)), $ = ++M, Re.length === 0 && we.length === 0) {
            let W = Ea();
            return Nn(y, fe({
                matches: w,
                loaderData: {},
                errors: A && Ge(A[1]) ? {
                    [A[0]]: A[1].error
                } : null
            }, Xs(A), W ? {
                fetchers: new Map(g.fetchers)
            } : {}), {
                flushSync: U
            }), {
                shortCircuited: !0
            }
        }
        if (ee) {
            let W = {};
            if (!x) {
                W.navigation = b;
                let me = ya(A);
                me !== void 0 && (W.actionData = me)
            }
            we.length > 0 && (W.fetchers = $d(we)), je(W, {
                flushSync: U
            })
        }
        we.forEach(W => {
            ae.has(W.key) && At(W.key), W.controller && ae.set(W.key, W.controller)
        });
        let hr = () => we.forEach(W => At(W.key));
        O && O.signal.addEventListener("abort", hr);
        let {
            loaderResults: Bt,
            fetcherResults: Dn
        } = await ga(g.matches, w, Re, we, h);
        if (h.signal.aborted) return {
            shortCircuited: !0
        };
        O && O.signal.removeEventListener("abort", hr), we.forEach(W => ae.delete(W.key));
        let Mn = Zs([...Bt, ...Dn]);
        if (Mn) {
            if (Mn.idx >= Re.length) {
                let W = we[Mn.idx - Re.length].key;
                G.add(W)
            }
            return await dr(h, Mn.result, {
                replace: N
            }), {
                shortCircuited: !0
            }
        }
        let {
            loaderData: zn,
            errors: gt
        } = Ks(g, w, Re, Bt, A, we, Dn, ut);
        ut.forEach((W, me) => {
            W.subscribe(Ye => {
                (Ye || W.done) && ut.delete(me)
            })
        }), c.v7_partialHydration && H && g.errors && Object.entries(g.errors).filter(W => {
            let [me] = W;
            return !Re.some(Ye => Ye.route.id === me)
        }).forEach(W => {
            let [me, Ye] = W;
            gt = Object.assign(gt || {}, {
                [me]: Ye
            })
        });
        let yl = Ea(),
            gl = ka($),
            wl = yl || gl || we.length > 0;
        return fe({
            matches: w,
            loaderData: zn,
            errors: gt
        }, wl ? {
            fetchers: new Map(g.fetchers)
        } : {})
    }

    function ya(h) {
        if (h && !Ge(h[1])) return {
            [h[0]]: h[1].data
        };
        if (g.actionData) return Object.keys(g.actionData).length === 0 ? null : g.actionData
    }

    function $d(h) {
        return h.forEach(y => {
            let w = g.fetchers.get(y.key),
                x = Cr(void 0, w ? w.data : void 0);
            g.fetchers.set(y.key, x)
        }), new Map(g.fetchers)
    }

    function Vd(h, y, w, x) {
        if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        ae.has(h) && At(h);
        let z = (x && x.unstable_flushSync) === !0,
            I = u || o,
            B = mu(g.location, g.matches, a, c.v7_prependBasename, w, c.v7_relativeSplatPath, y, x ? .relative),
            N = pn(I, B, a),
            H = Ki(N, I, B);
        if (H.active && H.matches && (N = H.matches), !N) {
            Ct(h, y, Ie(404, {
                pathname: B
            }), {
                flushSync: z
            });
            return
        }
        let {
            path: U,
            submission: A,
            error: b
        } = Bs(c.v7_normalizeFormMethod, !0, B, x);
        if (b) {
            Ct(h, y, b, {
                flushSync: z
            });
            return
        }
        let J = Nr(N, U);
        if (L = (x && x.preventScrollReset) === !0, A && ft(A.formMethod)) {
            Hd(h, y, U, J, N, H.active, z, A);
            return
        }
        le.set(h, {
            routeId: y,
            path: U
        }), Wd(h, y, U, J, N, H.active, z, A)
    }
    async function Hd(h, y, w, x, z, I, B, N) {
        Hi(), le.delete(h);

        function H(se) {
            if (!se.route.action && !se.route.lazy) {
                let Pt = Ie(405, {
                    method: N.formMethod,
                    pathname: w,
                    routeId: y
                });
                return Ct(h, y, Pt, {
                    flushSync: B
                }), !0
            }
            return !1
        }
        if (!I && H(x)) return;
        let U = g.fetchers.get(h);
        Ut(h, hv(N, U), {
            flushSync: B
        });
        let A = new AbortController,
            b = On(e.history, w, A.signal, N);
        if (I) {
            let se = await vl(z, w, b.signal);
            if (se.type === "aborted") return;
            if (se.type === "error") {
                let {
                    error: Pt
                } = ml(w, se);
                Ct(h, y, Pt, {
                    flushSync: B
                });
                return
            } else if (se.matches) {
                if (z = se.matches, x = Nr(z, w), H(x)) return
            } else {
                Ct(h, y, Ie(404, {
                    pathname: w
                }), {
                    flushSync: B
                });
                return
            }
        }
        ae.set(h, A);
        let J = M,
            Z = (await pr("action", b, [x], z))[0];
        if (b.signal.aborted) {
            ae.get(h) === A && ae.delete(h);
            return
        }
        if (c.v7_fetcherPersist && _e.has(h)) {
            if (gn(Z) || Ge(Z)) {
                Ut(h, Vt(void 0));
                return
            }
        } else {
            if (gn(Z))
                if (ae.delete(h), $ > J) {
                    Ut(h, Vt(void 0));
                    return
                } else return G.add(h), Ut(h, Cr(N)), dr(b, Z, {
                    fetcherSubmission: N
                });
            if (Ge(Z)) {
                Ct(h, y, Z.error);
                return
            }
        }
        if (yn(Z)) throw Ie(400, {
            type: "defer-action"
        });
        let Re = g.navigation.location || g.location,
            we = On(e.history, Re, A.signal),
            hr = u || o,
            Bt = g.navigation.state !== "idle" ? pn(hr, g.navigation.location, a) : g.matches;
        Q(Bt, "Didn't find any matches after fetcher action");
        let Dn = ++M;
        V.set(h, Dn);
        let Mn = Cr(N, Z.data);
        g.fetchers.set(h, Mn);
        let [zn, gt] = $s(e.history, g, Bt, N, Re, !1, c.v7_skipActionErrorRevalidation, te, vt, It, _e, le, G, hr, a, [x.route.id, Z]);
        gt.filter(se => se.key !== h).forEach(se => {
            let Pt = se.key,
                Ra = g.fetchers.get(Pt),
                Jd = Cr(void 0, Ra ? Ra.data : void 0);
            g.fetchers.set(Pt, Jd), ae.has(Pt) && At(Pt), se.controller && ae.set(Pt, se.controller)
        }), je({
            fetchers: new Map(g.fetchers)
        });
        let yl = () => gt.forEach(se => At(se.key));
        A.signal.addEventListener("abort", yl);
        let {
            loaderResults: gl,
            fetcherResults: wl
        } = await ga(g.matches, Bt, zn, gt, we);
        if (A.signal.aborted) return;
        A.signal.removeEventListener("abort", yl), V.delete(h), ae.delete(h), gt.forEach(se => ae.delete(se.key));
        let W = Zs([...gl, ...wl]);
        if (W) {
            if (W.idx >= zn.length) {
                let se = gt[W.idx - zn.length].key;
                G.add(se)
            }
            return dr(we, W.result)
        }
        let {
            loaderData: me,
            errors: Ye
        } = Ks(g, g.matches, zn, gl, void 0, gt, wl, ut);
        if (g.fetchers.has(h)) {
            let se = Vt(Z.data);
            g.fetchers.set(h, se)
        }
        ka(Dn), g.navigation.state === "loading" && Dn > $ ? (Q(D, "Expected pending action"), O && O.abort(), Nn(g.navigation.location, {
            matches: Bt,
            loaderData: me,
            errors: Ye,
            fetchers: new Map(g.fetchers)
        })) : (je({
            errors: Ye,
            loaderData: Ys(g.loaderData, me, Bt, Ye),
            fetchers: new Map(g.fetchers)
        }), te = !1)
    }
    async function Wd(h, y, w, x, z, I, B, N) {
        let H = g.fetchers.get(h);
        Ut(h, Cr(N, H ? H.data : void 0), {
            flushSync: B
        });
        let U = new AbortController,
            A = On(e.history, w, U.signal);
        if (I) {
            let Z = await vl(z, w, A.signal);
            if (Z.type === "aborted") return;
            if (Z.type === "error") {
                let {
                    error: Re
                } = ml(w, Z);
                Ct(h, y, Re, {
                    flushSync: B
                });
                return
            } else if (Z.matches) z = Z.matches, x = Nr(z, w);
            else {
                Ct(h, y, Ie(404, {
                    pathname: w
                }), {
                    flushSync: B
                });
                return
            }
        }
        ae.set(h, U);
        let b = M,
            ee = (await pr("loader", A, [x], z))[0];
        if (yn(ee) && (ee = await Td(ee, A.signal, !0) || ee), ae.get(h) === U && ae.delete(h), !A.signal.aborted) {
            if (_e.has(h)) {
                Ut(h, Vt(void 0));
                return
            }
            if (gn(ee))
                if ($ > b) {
                    Ut(h, Vt(void 0));
                    return
                } else {
                    G.add(h), await dr(A, ee);
                    return
                }
            if (Ge(ee)) {
                Ct(h, y, ee.error);
                return
            }
            Q(!yn(ee), "Unhandled fetcher deferred data"), Ut(h, Vt(ee.data))
        }
    }
    async function dr(h, y, w) {
        let {
            submission: x,
            fetcherSubmission: z,
            replace: I
        } = w === void 0 ? {} : w;
        y.response.headers.has("X-Remix-Revalidate") && (te = !0);
        let B = y.response.headers.get("Location");
        Q(B, "Expected a Location header on the redirect Response"), B = Ws(B, new URL(h.url), a);
        let N = rl(g.location, B, {
            _isRedirect: !0
        });
        if (n) {
            let ee = !1;
            if (y.response.headers.has("X-Remix-Reload-Document")) ee = !0;
            else if (pa.test(B)) {
                const Z = e.history.createURL(B);
                ee = Z.origin !== t.location.origin || dl(Z.pathname, a) == null
            }
            if (ee) {
                I ? t.location.replace(B) : t.location.assign(B);
                return
            }
        }
        O = null;
        let H = I === !0 ? ye.Replace : ye.Push,
            {
                formMethod: U,
                formAction: A,
                formEncType: b
            } = g.navigation;
        !x && !z && U && A && b && (x = qs(g.navigation));
        let J = x || z;
        if (Xm.has(y.response.status) && J && ft(J.formMethod)) await cn(H, N, {
            submission: fe({}, J, {
                formAction: B
            }),
            preventScrollReset: L
        });
        else {
            let ee = ko(N, x);
            await cn(H, N, {
                overrideNavigation: ee,
                fetcherSubmission: z,
                preventScrollReset: L
            })
        }
    }
    async function pr(h, y, w, x) {
        try {
            let z = await rv(s, h, y, w, x, i, l);
            return await Promise.all(z.map((I, B) => {
                if (cv(I)) {
                    let N = I.result;
                    return {
                        type: ne.redirect,
                        response: ov(N, y, w[B].route.id, x, a, c.v7_relativeSplatPath)
                    }
                }
                return iv(I)
            }))
        } catch (z) {
            return w.map(() => ({
                type: ne.error,
                error: z
            }))
        }
    }
    async function ga(h, y, w, x, z) {
        let [I, ...B] = await Promise.all([w.length ? pr("loader", z, w, y) : [], ...x.map(N => {
            if (N.matches && N.match && N.controller) {
                let H = On(e.history, N.path, N.controller.signal);
                return pr("loader", H, [N.match], N.matches).then(U => U[0])
            } else return Promise.resolve({
                type: ne.error,
                error: Ie(404, {
                    pathname: N.path
                })
            })
        })]);
        return await Promise.all([Js(h, w, I, I.map(() => z.signal), !1, g.loaderData), Js(h, x.map(N => N.match), B, x.map(N => N.controller ? N.controller.signal : null), !0)]), {
            loaderResults: I,
            fetcherResults: B
        }
    }

    function Hi() {
        te = !0, vt.push(...Qi()), le.forEach((h, y) => {
            ae.has(y) && (It.push(y), At(y))
        })
    }

    function Ut(h, y, w) {
        w === void 0 && (w = {}), g.fetchers.set(h, y), je({
            fetchers: new Map(g.fetchers)
        }, {
            flushSync: (w && w.flushSync) === !0
        })
    }

    function Ct(h, y, w, x) {
        x === void 0 && (x = {});
        let z = Xn(g.matches, y);
        pl(h), je({
            errors: {
                [z.route.id]: w
            },
            fetchers: new Map(g.fetchers)
        }, {
            flushSync: (x && x.flushSync) === !0
        })
    }

    function wa(h) {
        return c.v7_fetcherPersist && (yt.set(h, (yt.get(h) || 0) + 1), _e.has(h) && _e.delete(h)), g.fetchers.get(h) || Gm
    }

    function pl(h) {
        let y = g.fetchers.get(h);
        ae.has(h) && !(y && y.state === "loading" && V.has(h)) && At(h), le.delete(h), V.delete(h), G.delete(h), _e.delete(h), g.fetchers.delete(h)
    }

    function Qd(h) {
        if (c.v7_fetcherPersist) {
            let y = (yt.get(h) || 0) - 1;
            y <= 0 ? (yt.delete(h), _e.add(h)) : yt.set(h, y)
        } else pl(h);
        je({
            fetchers: new Map(g.fetchers)
        })
    }

    function At(h) {
        let y = ae.get(h);
        Q(y, "Expected fetch controller: " + h), y.abort(), ae.delete(h)
    }

    function Sa(h) {
        for (let y of h) {
            let w = wa(y),
                x = Vt(w.data);
            g.fetchers.set(y, x)
        }
    }

    function Ea() {
        let h = [],
            y = !1;
        for (let w of G) {
            let x = g.fetchers.get(w);
            Q(x, "Expected fetcher: " + w), x.state === "loading" && (G.delete(w), h.push(w), y = !0)
        }
        return Sa(h), y
    }

    function ka(h) {
        let y = [];
        for (let [w, x] of V)
            if (x < h) {
                let z = g.fetchers.get(w);
                Q(z, "Expected fetcher: " + w), z.state === "loading" && (At(w), V.delete(w), y.push(w))
            }
        return Sa(y), y.length > 0
    }

    function Kd(h, y) {
        let w = g.blockers.get(h) || xr;
        return Oe.get(h) !== y && Oe.set(h, y), w
    }

    function xa(h) {
        g.blockers.delete(h), Oe.delete(h)
    }

    function hl(h, y) {
        let w = g.blockers.get(h) || xr;
        Q(w.state === "unblocked" && y.state === "blocked" || w.state === "blocked" && y.state === "blocked" || w.state === "blocked" && y.state === "proceeding" || w.state === "blocked" && y.state === "unblocked" || w.state === "proceeding" && y.state === "unblocked", "Invalid blocker state transition: " + w.state + " -> " + y.state);
        let x = new Map(g.blockers);
        x.set(h, y), je({
            blockers: x
        })
    }

    function Ca(h) {
        let {
            currentLocation: y,
            nextLocation: w,
            historyAction: x
        } = h;
        if (Oe.size === 0) return;
        Oe.size > 1 && ar(!1, "A router only supports one blocker at a time");
        let z = Array.from(Oe.entries()),
            [I, B] = z[z.length - 1],
            N = g.blockers.get(I);
        if (!(N && N.state === "proceeding") && B({
                currentLocation: y,
                nextLocation: w,
                historyAction: x
            })) return I
    }

    function Wi(h) {
        let y = Ie(404, {
                pathname: h
            }),
            w = u || o,
            {
                matches: x,
                route: z
            } = Gs(w);
        return Qi(), {
            notFoundMatches: x,
            route: z,
            error: y
        }
    }

    function ml(h, y) {
        return {
            boundaryId: Xn(y.partialMatches).route.id,
            error: Ie(400, {
                type: "route-discovery",
                pathname: h,
                message: y.error != null && "message" in y.error ? y.error : String(y.error)
            })
        }
    }

    function Qi(h) {
        let y = [];
        return ut.forEach((w, x) => {
            (!h || h(x)) && (w.cancel(), y.push(x), ut.delete(x))
        }), y
    }

    function Yd(h, y, w) {
        if (S = h, _ = y, E = w || null, !m && g.navigation === Eo) {
            m = !0;
            let x = _a(g.location, g.matches);
            x != null && je({
                restoreScrollPosition: x
            })
        }
        return () => {
            S = null, _ = null, E = null
        }
    }

    function Pa(h, y) {
        return E && E(h, y.map(x => _m(x, g.loaderData))) || h.key
    }

    function Xd(h, y) {
        if (S && _) {
            let w = Pa(h, y);
            S[w] = _()
        }
    }

    function _a(h, y) {
        if (S) {
            let w = Pa(h, y),
                x = S[w];
            if (typeof x == "number") return x
        }
        return null
    }

    function Ki(h, y, w) {
        if (d)
            if (h) {
                let x = h[h.length - 1].route;
                if (x.path && (x.path === "*" || x.path.endsWith("/*"))) return {
                    active: !0,
                    matches: Gl(y, w, a, !0)
                }
            } else return {
                active: !0,
                matches: Gl(y, w, a, !0) || []
            };
        return {
            active: !1,
            matches: null
        }
    }
    async function vl(h, y, w) {
        let x = h,
            z = x.length > 0 ? x[x.length - 1].route : null;
        for (;;) {
            let I = u == null,
                B = u || o;
            try {
                await tv(d, y, x, B, i, l, Tn, w)
            } catch (A) {
                return {
                    type: "error",
                    error: A,
                    partialMatches: x
                }
            } finally {
                I && (o = [...o])
            }
            if (w.aborted) return {
                type: "aborted"
            };
            let N = pn(B, y, a),
                H = !1;
            if (N) {
                let A = N[N.length - 1].route;
                if (A.index) return {
                    type: "success",
                    matches: N
                };
                if (A.path && A.path.length > 0)
                    if (A.path === "*") H = !0;
                    else return {
                        type: "success",
                        matches: N
                    }
            }
            let U = Gl(B, y, a, !0);
            if (!U || x.map(A => A.route.id).join("-") === U.map(A => A.route.id).join("-")) return {
                type: "success",
                matches: H ? N : null
            };
            if (x = U, z = x[x.length - 1].route, z.path === "*") return {
                type: "success",
                matches: x
            }
        }
    }

    function Gd(h) {
        i = {}, u = ll(h, l, void 0, i)
    }

    function Zd(h, y) {
        let w = u == null;
        _d(h, y, u || o, i, l), w && (o = [...o], je({}))
    }
    return T = {
        get basename() {
            return a
        },
        get future() {
            return c
        },
        get state() {
            return g
        },
        get routes() {
            return o
        },
        get window() {
            return t
        },
        initialize: Od,
        subscribe: Id,
        enableScrollRestoration: Yd,
        navigate: va,
        fetch: Vd,
        revalidate: Ud,
        createHref: h => e.history.createHref(h),
        encodeLocation: h => e.history.encodeLocation(h),
        getFetcher: wa,
        deleteFetcher: Qd,
        dispose: jd,
        getBlocker: Kd,
        deleteBlocker: xa,
        patchRoutes: Zd,
        _internalFetchControllers: ae,
        _internalActiveDeferreds: ut,
        _internalSetRoutes: Gd
    }, T
}

function qm(e) {
    return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0)
}

function mu(e, t, n, r, l, i, o, u) {
    let a, s;
    if (o) {
        a = [];
        for (let c of t)
            if (a.push(c), c.route.id === o) {
                s = c;
                break
            }
    } else a = t, s = t[t.length - 1];
    let d = kd(l || ".", Ed(a, i), dl(e.pathname, n) || e.pathname, u === "path");
    return l == null && (d.search = e.search, d.hash = e.hash), (l == null || l === "" || l === ".") && s && s.route.index && !ha(d.search) && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (d.pathname = d.pathname === "/" ? n : rn([n, d.pathname])), fl(d)
}

function Bs(e, t, n, r) {
    if (!r || !qm(r)) return {
        path: n
    };
    if (r.formMethod && !dv(r.formMethod)) return {
        path: n,
        error: Ie(405, {
            method: r.formMethod
        })
    };
    let l = () => ({
            path: n,
            error: Ie(400, {
                type: "invalid-body"
            })
        }),
        i = r.formMethod || "get",
        o = e ? i.toUpperCase() : i.toLowerCase(),
        u = Rd(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!ft(o)) return l();
            let p = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((k, S) => {
                let [E, _] = S;
                return "" + k + E + "=" + _ + `
`
            }, "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: o,
                    formAction: u,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: p
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!ft(o)) return l();
            try {
                let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: o,
                        formAction: u,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: p,
                        text: void 0
                    }
                }
            } catch {
                return l()
            }
        }
    }
    Q(typeof FormData == "function", "FormData is not available in this environment");
    let a, s;
    if (r.formData) a = vu(r.formData), s = r.formData;
    else if (r.body instanceof FormData) a = vu(r.body), s = r.body;
    else if (r.body instanceof URLSearchParams) a = r.body, s = Qs(a);
    else if (r.body == null) a = new URLSearchParams, s = new FormData;
    else try {
        a = new URLSearchParams(r.body), s = Qs(a)
    } catch {
        return l()
    }
    let d = {
        formMethod: o,
        formAction: u,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: s,
        json: void 0,
        text: void 0
    };
    if (ft(d.formMethod)) return {
        path: n,
        submission: d
    };
    let c = jt(n);
    return t && c.search && ha(c.search) && a.append("index", ""), c.search = "?" + a, {
        path: fl(c),
        submission: d
    }
}

function bm(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(l => l.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}

function $s(e, t, n, r, l, i, o, u, a, s, d, c, p, k, S, E) {
    let _ = E ? Ge(E[1]) ? E[1].error : E[1].data : void 0,
        m = e.createURL(t.location),
        f = e.createURL(l),
        v = E && Ge(E[1]) ? E[0] : void 0,
        C = v ? bm(n, v) : n,
        T = E ? E[1].statusCode : void 0,
        g = o && T && T >= 400,
        D = C.filter((O, j) => {
            let {
                route: X
            } = O;
            if (X.lazy) return !0;
            if (X.loader == null) return !1;
            if (i) return typeof X.loader != "function" || X.loader.hydrate ? !0 : t.loaderData[X.id] === void 0 && (!t.errors || t.errors[X.id] === void 0);
            if (ev(t.loaderData, t.matches[j], O) || a.some(te => te === O.route.id)) return !0;
            let ue = t.matches[j],
                xe = O;
            return Vs(O, fe({
                currentUrl: m,
                currentParams: ue.params,
                nextUrl: f,
                nextParams: xe.params
            }, r, {
                actionResult: _,
                actionStatus: T,
                defaultShouldRevalidate: g ? !1 : u || m.pathname + m.search === f.pathname + f.search || m.search !== f.search || Pd(ue, xe)
            }))
        }),
        L = [];
    return c.forEach((O, j) => {
        if (i || !n.some(vt => vt.route.id === O.routeId) || d.has(j)) return;
        let X = pn(k, O.path, S);
        if (!X) {
            L.push({
                key: j,
                routeId: O.routeId,
                path: O.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let ue = t.fetchers.get(j),
            xe = Nr(X, O.path),
            te = !1;
        p.has(j) ? te = !1 : s.includes(j) ? te = !0 : ue && ue.state !== "idle" && ue.data === void 0 ? te = u : te = Vs(xe, fe({
            currentUrl: m,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: f,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: _,
            actionStatus: T,
            defaultShouldRevalidate: g ? !1 : u
        })), te && L.push({
            key: j,
            routeId: O.routeId,
            path: O.path,
            matches: X,
            match: xe,
            controller: new AbortController
        })
    }), [D, L]
}

function ev(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        l = e[n.route.id] === void 0;
    return r || l
}

function Pd(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function Vs(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n
    }
    return t.defaultShouldRevalidate
}
async function tv(e, t, n, r, l, i, o, u) {
    let a = [t, ...n.map(s => s.route.id)].join("-");
    try {
        let s = o.get(a);
        s || (s = e({
            path: t,
            matches: n,
            patch: (d, c) => {
                u.aborted || _d(d, c, r, l, i)
            }
        }), o.set(a, s)), s && sv(s) && await s
    } finally {
        o.delete(a)
    }
}

function _d(e, t, n, r, l) {
    if (e) {
        var i;
        let o = r[e];
        Q(o, "No route found to patch children into: routeId = " + e);
        let u = ll(t, l, [e, "patch", String(((i = o.children) == null ? void 0 : i.length) || "0")], r);
        o.children ? o.children.push(...u) : o.children = u
    } else {
        let o = ll(t, l, ["patch", String(n.length || "0")], r);
        n.push(...o)
    }
}
async function Hs(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let l = n[e.id];
    Q(l, "No route found in manifest");
    let i = {};
    for (let o in r) {
        let a = l[o] !== void 0 && o !== "hasErrorBoundary";
        ar(!a, 'Route "' + l.id + '" has a static property "' + o + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + o + '" will be ignored.')), !a && !Cm.has(o) && (i[o] = r[o])
    }
    Object.assign(l, i), Object.assign(l, fe({}, t(l), {
        lazy: void 0
    }))
}

function nv(e) {
    return Promise.all(e.matches.map(t => t.resolve()))
}
async function rv(e, t, n, r, l, i, o, u) {
    let a = r.reduce((c, p) => c.add(p.route.id), new Set),
        s = new Set,
        d = await e({
            matches: l.map(c => {
                let p = a.has(c.route.id);
                return fe({}, c, {
                    shouldLoad: p,
                    resolve: S => (s.add(c.route.id), p ? lv(t, n, c, i, o, S, u) : Promise.resolve({
                        type: ne.data,
                        result: void 0
                    }))
                })
            }),
            request: n,
            params: l[0].params,
            context: u
        });
    return l.forEach(c => Q(s.has(c.route.id), '`match.resolve()` was not called for route id "' + c.route.id + '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')), d.filter((c, p) => a.has(l[p].route.id))
}
async function lv(e, t, n, r, l, i, o) {
    let u, a, s = d => {
        let c, p = new Promise((E, _) => c = _);
        a = () => c(), t.signal.addEventListener("abort", a);
        let k = E => typeof d != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : d({
                request: t,
                params: n.params,
                context: o
            }, ...E !== void 0 ? [E] : []),
            S;
        return i ? S = i(E => k(E)) : S = (async () => {
            try {
                return {
                    type: "data",
                    result: await k()
                }
            } catch (E) {
                return {
                    type: "error",
                    result: E
                }
            }
        })(), Promise.race([S, p])
    };
    try {
        let d = n.route[e];
        if (n.route.lazy)
            if (d) {
                let c, [p] = await Promise.all([s(d).catch(k => {
                    c = k
                }), Hs(n.route, l, r)]);
                if (c !== void 0) throw c;
                u = p
            } else if (await Hs(n.route, l, r), d = n.route[e], d) u = await s(d);
        else if (e === "action") {
            let c = new URL(t.url),
                p = c.pathname + c.search;
            throw Ie(405, {
                method: t.method,
                pathname: p,
                routeId: n.route.id
            })
        } else return {
            type: ne.data,
            result: void 0
        };
        else if (d) u = await s(d);
        else {
            let c = new URL(t.url),
                p = c.pathname + c.search;
            throw Ie(404, {
                pathname: p
            })
        }
        Q(u.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (d) {
        return {
            type: ne.error,
            result: d
        }
    } finally {
        a && t.signal.removeEventListener("abort", a)
    }
    return u
}
async function iv(e) {
    let {
        result: t,
        type: n,
        status: r
    } = e;
    if (Ld(t)) {
        let o;
        try {
            let u = t.headers.get("Content-Type");
            u && /\bapplication\/json\b/.test(u) ? t.body == null ? o = null : o = await t.json() : o = await t.text()
        } catch (u) {
            return {
                type: ne.error,
                error: u
            }
        }
        return n === ne.error ? {
            type: ne.error,
            error: new da(t.status, t.statusText, o),
            statusCode: t.status,
            headers: t.headers
        } : {
            type: ne.data,
            data: o,
            statusCode: t.status,
            headers: t.headers
        }
    }
    if (n === ne.error) return {
        type: ne.error,
        error: t,
        statusCode: Ii(t) ? t.status : r
    };
    if (fv(t)) {
        var l, i;
        return {
            type: ne.deferred,
            deferredData: t,
            statusCode: (l = t.init) == null ? void 0 : l.status,
            headers: ((i = t.init) == null ? void 0 : i.headers) && new Headers(t.init.headers)
        }
    }
    return {
        type: ne.data,
        data: t,
        statusCode: r
    }
}

function ov(e, t, n, r, l, i) {
    let o = e.headers.get("Location");
    if (Q(o, "Redirects returned/thrown from loaders/actions must have a Location header"), !pa.test(o)) {
        let u = r.slice(0, r.findIndex(a => a.route.id === n) + 1);
        o = mu(new URL(t.url), u, l, !0, o, i), e.headers.set("Location", o)
    }
    return e
}

function Ws(e, t, n) {
    if (pa.test(e)) {
        let r = e,
            l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
            i = dl(l.pathname, n) != null;
        if (l.origin === t.origin && i) return l.pathname + l.search + l.hash
    }
    return e
}

function On(e, t, n, r) {
    let l = e.createURL(Rd(t)).toString(),
        i = {
            signal: n
        };
    if (r && ft(r.formMethod)) {
        let {
            formMethod: o,
            formEncType: u
        } = r;
        i.method = o.toUpperCase(), u === "application/json" ? (i.headers = new Headers({
            "Content-Type": u
        }), i.body = JSON.stringify(r.json)) : u === "text/plain" ? i.body = r.text : u === "application/x-www-form-urlencoded" && r.formData ? i.body = vu(r.formData) : i.body = r.formData
    }
    return new Request(l, i)
}

function vu(e) {
    let t = new URLSearchParams;
    for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
    return t
}

function Qs(e) {
    let t = new FormData;
    for (let [n, r] of e.entries()) t.append(n, r);
    return t
}

function uv(e, t, n, r, l, i) {
    let o = {},
        u = null,
        a, s = !1,
        d = {},
        c = r && Ge(r[1]) ? r[1].error : void 0;
    return n.forEach((p, k) => {
        let S = t[k].route.id;
        if (Q(!gn(p), "Cannot handle redirect results in processLoaderData"), Ge(p)) {
            let E = p.error;
            if (c !== void 0 && (E = c, c = void 0), u = u || {}, i) u[S] = E;
            else {
                let _ = Xn(e, S);
                u[_.route.id] == null && (u[_.route.id] = E)
            }
            o[S] = void 0, s || (s = !0, a = Ii(p.error) ? p.error.status : 500), p.headers && (d[S] = p.headers)
        } else yn(p) ? (l.set(S, p.deferredData), o[S] = p.deferredData.data, p.statusCode != null && p.statusCode !== 200 && !s && (a = p.statusCode), p.headers && (d[S] = p.headers)) : (o[S] = p.data, p.statusCode && p.statusCode !== 200 && !s && (a = p.statusCode), p.headers && (d[S] = p.headers))
    }), c !== void 0 && r && (u = {
        [r[0]]: c
    }, o[r[0]] = void 0), {
        loaderData: o,
        errors: u,
        statusCode: a || 200,
        loaderHeaders: d
    }
}

function Ks(e, t, n, r, l, i, o, u) {
    let {
        loaderData: a,
        errors: s
    } = uv(t, n, r, l, u, !1);
    for (let d = 0; d < i.length; d++) {
        let {
            key: c,
            match: p,
            controller: k
        } = i[d];
        Q(o !== void 0 && o[d] !== void 0, "Did not find corresponding fetcher result");
        let S = o[d];
        if (!(k && k.signal.aborted))
            if (Ge(S)) {
                let E = Xn(e.matches, p ? .route.id);
                s && s[E.route.id] || (s = fe({}, s, {
                    [E.route.id]: S.error
                })), e.fetchers.delete(c)
            } else if (gn(S)) Q(!1, "Unhandled fetcher revalidation redirect");
        else if (yn(S)) Q(!1, "Unhandled fetcher deferred data");
        else {
            let E = Vt(S.data);
            e.fetchers.set(c, E)
        }
    }
    return {
        loaderData: a,
        errors: s
    }
}

function Ys(e, t, n, r) {
    let l = fe({}, t);
    for (let i of n) {
        let o = i.route.id;
        if (t.hasOwnProperty(o) ? t[o] !== void 0 && (l[o] = t[o]) : e[o] !== void 0 && i.route.loader && (l[o] = e[o]), r && r.hasOwnProperty(o)) break
    }
    return l
}

function Xs(e) {
    return e ? Ge(e[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {}
}

function Xn(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}

function Gs(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}

function Ie(e, t) {
    let {
        pathname: n,
        routeId: r,
        method: l,
        type: i,
        message: o
    } = t === void 0 ? {} : t, u = "Unknown Server Error", a = "Unknown @remix-run/router error";
    return e === 400 ? (u = "Bad Request", i === "route-discovery" ? a = 'Unable to match URL "' + n + '" - the `unstable_patchRoutesOnMiss()` ' + (`function threw the following error:
` + o) : l && n && r ? a = "You made a " + l + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : i === "defer-action" ? a = "defer() is not supported in actions" : i === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (u = "Forbidden", a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (u = "Not Found", a = 'No route matches URL "' + n + '"') : e === 405 && (u = "Method Not Allowed", l && n && r ? a = "You made a " + l.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')), new da(e || 500, u, new Error(a), !0)
}

function Zs(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (gn(n)) return {
            result: n,
            idx: t
        }
    }
}

function Rd(e) {
    let t = typeof e == "string" ? jt(e) : e;
    return fl(fe({}, t, {
        hash: ""
    }))
}

function av(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}

function sv(e) {
    return typeof e == "object" && e != null && "then" in e
}

function cv(e) {
    return Ld(e.result) && Ym.has(e.result.status)
}

function yn(e) {
    return e.type === ne.deferred
}

function Ge(e) {
    return e.type === ne.error
}

function gn(e) {
    return (e && e.type) === ne.redirect
}

function fv(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}

function Ld(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}

function dv(e) {
    return Km.has(e.toLowerCase())
}

function ft(e) {
    return Wm.has(e.toLowerCase())
}
async function Js(e, t, n, r, l, i) {
    for (let o = 0; o < n.length; o++) {
        let u = n[o],
            a = t[o];
        if (!a) continue;
        let s = e.find(c => c.route.id === a.route.id),
            d = s != null && !Pd(s, a) && (i && i[a.route.id]) !== void 0;
        if (yn(u) && (l || d)) {
            let c = r[o];
            Q(c, "Expected an AbortSignal for revalidating fetcher deferred result"), await Td(u, c, l).then(p => {
                p && (n[o] = p || n[o])
            })
        }
    }
}
async function Td(e, t, n) {
    if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
        if (n) try {
            return {
                type: ne.data,
                data: e.deferredData.unwrappedData
            }
        } catch (l) {
            return {
                type: ne.error,
                error: l
            }
        }
        return {
            type: ne.data,
            data: e.deferredData.data
        }
    }
}

function ha(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}

function Nr(e, t) {
    let n = typeof t == "string" ? jt(t).search : t.search;
    if (e[e.length - 1].route.index && ha(n || "")) return e[e.length - 1];
    let r = Sd(e);
    return r[r.length - 1]
}

function qs(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: l,
        formData: i,
        json: o
    } = e;
    if (!(!t || !n || !r)) {
        if (l != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: void 0,
            text: l
        };
        if (i != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: i,
            json: void 0,
            text: void 0
        };
        if (o !== void 0) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: o,
            text: void 0
        }
    }
}

function ko(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}

function pv(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}

function Cr(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}

function hv(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}

function Vt(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}

function mv(e, t) {
    try {
        let n = e.sessionStorage.getItem(Cd);
        if (n) {
            let r = JSON.parse(n);
            for (let [l, i] of Object.entries(r || {})) i && Array.isArray(i) && t.set(l, new Set(i || []))
        }
    } catch {}
}

function vv(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let [r, l] of t) n[r] = [...l];
        try {
            e.sessionStorage.setItem(Cd, JSON.stringify(n))
        } catch (r) {
            ar(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function il() {
    return il = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, il.apply(this, arguments)
}
const Ui = R.createContext(null),
    Nd = R.createContext(null),
    Ai = R.createContext(null),
    Bi = R.createContext(null),
    Ln = R.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Dd = R.createContext(null);

function $i() {
    return R.useContext(Bi) != null
}

function ma() {
    return $i() || Q(!1), R.useContext(Bi).location
}

function Md(e) {
    R.useContext(Ai).static || R.useLayoutEffect(e)
}

function yv() {
    let {
        isDataRoute: e
    } = R.useContext(Ln);
    return e ? Dv() : gv()
}

function gv() {
    $i() || Q(!1);
    let e = R.useContext(Ui),
        {
            basename: t,
            future: n,
            navigator: r
        } = R.useContext(Ai),
        {
            matches: l
        } = R.useContext(Ln),
        {
            pathname: i
        } = ma(),
        o = JSON.stringify(Ed(l, n.v7_relativeSplatPath)),
        u = R.useRef(!1);
    return Md(() => {
        u.current = !0
    }), R.useCallback(function(s, d) {
        if (d === void 0 && (d = {}), !u.current) return;
        if (typeof s == "number") {
            r.go(s);
            return
        }
        let c = kd(s, JSON.parse(o), i, d.relative === "path");
        e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : rn([t, c.pathname])), (d.replace ? r.replace : r.push)(c, d.state, d)
    }, [t, r, o, i, e])
}
const wv = R.createContext(null);

function Sv(e) {
    let t = R.useContext(Ln).outlet;
    return t && R.createElement(wv.Provider, {
        value: e
    }, t)
}

function Ev(e, t, n, r) {
    $i() || Q(!1);
    let {
        navigator: l
    } = R.useContext(Ai), {
        matches: i
    } = R.useContext(Ln), o = i[i.length - 1], u = o ? o.params : {};
    o && o.pathname;
    let a = o ? o.pathnameBase : "/";
    o && o.route;
    let s = ma(),
        d;
    if (t) {
        var c;
        let _ = typeof t == "string" ? jt(t) : t;
        a === "/" || (c = _.pathname) != null && c.startsWith(a) || Q(!1), d = _
    } else d = s;
    let p = d.pathname || "/",
        k = p;
    if (a !== "/") {
        let _ = a.replace(/^\//, "").split("/");
        k = "/" + p.replace(/^\//, "").split("/").slice(_.length).join("/")
    }
    let S = pn(e, {
            pathname: k
        }),
        E = _v(S && S.map(_ => Object.assign({}, _, {
            params: Object.assign({}, u, _.params),
            pathname: rn([a, l.encodeLocation ? l.encodeLocation(_.pathname).pathname : _.pathname]),
            pathnameBase: _.pathnameBase === "/" ? a : rn([a, l.encodeLocation ? l.encodeLocation(_.pathnameBase).pathname : _.pathnameBase])
        })), i, n, r);
    return t && E ? R.createElement(Bi.Provider, {
        value: {
            location: il({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: ye.Pop
        }
    }, E) : E
}

function kv() {
    let e = Nv(),
        t = Ii(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        },
        i = null;
    return R.createElement(R.Fragment, null, R.createElement("h2", null, "Unexpected Application Error!"), R.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? R.createElement("pre", {
        style: l
    }, n) : null, i)
}
const xv = R.createElement(kv, null);
class Cv extends R.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? R.createElement(Ln.Provider, {
            value: this.props.routeContext
        }, R.createElement(Dd.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function Pv(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, l = R.useContext(Ui);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), R.createElement(Ln.Provider, {
        value: t
    }, r)
}

function _v(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if ((i = n) != null && i.errors) e = n.matches;
        else return null
    }
    let o = e,
        u = (l = n) == null ? void 0 : l.errors;
    if (u != null) {
        let d = o.findIndex(c => c.route.id && u ? .[c.route.id] !== void 0);
        d >= 0 || Q(!1), o = o.slice(0, Math.min(o.length, d + 1))
    }
    let a = !1,
        s = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let c = o[d];
            if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (s = d), c.route.id) {
                let {
                    loaderData: p,
                    errors: k
                } = n, S = c.route.loader && p[c.route.id] === void 0 && (!k || k[c.route.id] === void 0);
                if (c.route.lazy || S) {
                    a = !0, s >= 0 ? o = o.slice(0, s + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((d, c, p) => {
        let k, S = !1,
            E = null,
            _ = null;
        n && (k = u && c.route.id ? u[c.route.id] : void 0, E = c.route.errorElement || xv, a && (s < 0 && p === 0 ? (Mv("route-fallback", !1), S = !0, _ = null) : s === p && (S = !0, _ = c.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, p + 1)),
            f = () => {
                let v;
                return k ? v = E : S ? v = _ : c.route.Component ? v = R.createElement(c.route.Component, null) : c.route.element ? v = c.route.element : v = d, R.createElement(Pv, {
                    match: c,
                    routeContext: {
                        outlet: d,
                        matches: m,
                        isDataRoute: n != null
                    },
                    children: v
                })
            };
        return n && (c.route.ErrorBoundary || c.route.errorElement || p === 0) ? R.createElement(Cv, {
            location: n.location,
            revalidation: n.revalidation,
            component: E,
            error: k,
            children: f(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : f()
    }, null)
}
var zd = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(zd || {}),
    Si = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(Si || {});

function Rv(e) {
    let t = R.useContext(Ui);
    return t || Q(!1), t
}

function Lv(e) {
    let t = R.useContext(Nd);
    return t || Q(!1), t
}

function Tv(e) {
    let t = R.useContext(Ln);
    return t || Q(!1), t
}

function Fd(e) {
    let t = Tv(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Q(!1), n.route.id
}

function Nv() {
    var e;
    let t = R.useContext(Dd),
        n = Lv(Si.UseRouteError),
        r = Fd(Si.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function Dv() {
    let {
        router: e
    } = Rv(zd.UseNavigateStable), t = Fd(Si.UseNavigateStable), n = R.useRef(!1);
    return Md(() => {
        n.current = !0
    }), R.useCallback(function(l, i) {
        i === void 0 && (i = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, il({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
const bs = {};

function Mv(e, t, n) {
    !t && !bs[e] && (bs[e] = !0)
}

function Gv(e) {
    return Sv(e.context)
}

function zv(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = ye.Pop,
        navigator: i,
        static: o = !1,
        future: u
    } = e;
    $i() && Q(!1);
    let a = t.replace(/^\/*/, "/"),
        s = R.useMemo(() => ({
            basename: a,
            navigator: i,
            static: o,
            future: il({
                v7_relativeSplatPath: !1
            }, u)
        }), [a, u, i, o]);
    typeof r == "string" && (r = jt(r));
    let {
        pathname: d = "/",
        search: c = "",
        hash: p = "",
        state: k = null,
        key: S = "default"
    } = r, E = R.useMemo(() => {
        let _ = dl(d, a);
        return _ == null ? null : {
            location: {
                pathname: _,
                search: c,
                hash: p,
                state: k,
                key: S
            },
            navigationType: l
        }
    }, [a, d, c, p, k, S, l]);
    return E == null ? null : R.createElement(Ai.Provider, {
        value: s
    }, R.createElement(Bi.Provider, {
        children: n,
        value: E
    }))
}
new Promise(() => {});

function Fv(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: R.createElement(e.Component),
        Component: void 0
    }), e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: R.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }), e.ErrorBoundary && Object.assign(t, {
        errorElement: R.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }), t
}
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ei() {
    return Ei = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ei.apply(this, arguments)
}

function yu(e) {
    return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(l => [n, l]) : [
            [n, r]
        ])
    }, []))
}

function Ov(e, t) {
    let n = yu(e);
    return t && t.forEach((r, l) => {
        n.has(l) || t.getAll(l).forEach(i => {
            n.append(l, i)
        })
    }), n
}
const jv = "6";
try {
    window.__reactRouterVersion = jv
} catch {}

function Zv(e, t) {
    return Jm({
        basename: t ? .basename,
        future: Ei({}, t ? .future, {
            v7_prependBasename: !0
        }),
        history: Em({
            window: t ? .window
        }),
        hydrationData: t ? .hydrationData || Iv(),
        routes: e,
        mapRouteProperties: Fv,
        unstable_dataStrategy: t ? .unstable_dataStrategy,
        unstable_patchRoutesOnMiss: t ? .unstable_patchRoutesOnMiss,
        window: t ? .window
    }).initialize()
}

function Iv() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = Ei({}, t, {
        errors: Uv(t.errors)
    })), t
}

function Uv(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, l] of t)
        if (l && l.__type === "RouteErrorResponse") n[r] = new da(l.status, l.statusText, l.data, l.internal === !0);
        else if (l && l.__type === "Error") {
        if (l.__subType) {
            let i = window[l.__subType];
            if (typeof i == "function") try {
                let o = new i(l.message);
                o.stack = "", n[r] = o
            } catch {}
        }
        if (n[r] == null) {
            let i = new Error(l.message);
            i.stack = "", n[r] = i
        }
    } else n[r] = l;
    return n
}
const Av = R.createContext({
        isTransitioning: !1
    }),
    Bv = R.createContext(new Map),
    $v = "startTransition",
    ec = hp[$v],
    Vv = "flushSync",
    tc = Sm[Vv];

function Hv(e) {
    ec ? ec(e) : e()
}

function Pr(e) {
    tc ? tc(e) : e()
}
class Wv {
    constructor() {
        this.status = "pending", this.promise = new Promise((t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved", t(r))
            }, this.reject = r => {
                this.status === "pending" && (this.status = "rejected", n(r))
            }
        })
    }
}

function Jv(e) {
    let {
        fallbackElement: t,
        router: n,
        future: r
    } = e, [l, i] = R.useState(n.state), [o, u] = R.useState(), [a, s] = R.useState({
        isTransitioning: !1
    }), [d, c] = R.useState(), [p, k] = R.useState(), [S, E] = R.useState(), _ = R.useRef(new Map), {
        v7_startTransition: m
    } = r || {}, f = R.useCallback(L => {
        m ? Hv(L) : L()
    }, [m]), v = R.useCallback((L, O) => {
        let {
            deletedFetchers: j,
            unstable_flushSync: X,
            unstable_viewTransitionOpts: ue
        } = O;
        j.forEach(te => _.current.delete(te)), L.fetchers.forEach((te, vt) => {
            te.data !== void 0 && _.current.set(vt, te.data)
        });
        let xe = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
        if (!ue || xe) {
            X ? Pr(() => i(L)) : f(() => i(L));
            return
        }
        if (X) {
            Pr(() => {
                p && (d && d.resolve(), p.skipTransition()), s({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: ue.currentLocation,
                    nextLocation: ue.nextLocation
                })
            });
            let te = n.window.document.startViewTransition(() => {
                Pr(() => i(L))
            });
            te.finished.finally(() => {
                Pr(() => {
                    c(void 0), k(void 0), u(void 0), s({
                        isTransitioning: !1
                    })
                })
            }), Pr(() => k(te));
            return
        }
        p ? (d && d.resolve(), p.skipTransition(), E({
            state: L,
            currentLocation: ue.currentLocation,
            nextLocation: ue.nextLocation
        })) : (u(L), s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: ue.currentLocation,
            nextLocation: ue.nextLocation
        }))
    }, [n.window, p, d, _, f]);
    R.useLayoutEffect(() => n.subscribe(v), [n, v]), R.useEffect(() => {
        a.isTransitioning && !a.flushSync && c(new Wv)
    }, [a]), R.useEffect(() => {
        if (d && o && n.window) {
            let L = o,
                O = d.promise,
                j = n.window.document.startViewTransition(async () => {
                    f(() => i(L)), await O
                });
            j.finished.finally(() => {
                c(void 0), k(void 0), u(void 0), s({
                    isTransitioning: !1
                })
            }), k(j)
        }
    }, [f, o, d, n.window]), R.useEffect(() => {
        d && o && l.location.key === o.location.key && d.resolve()
    }, [d, p, l.location, o]), R.useEffect(() => {
        !a.isTransitioning && S && (u(S.state), s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: S.currentLocation,
            nextLocation: S.nextLocation
        }), E(void 0))
    }, [a.isTransitioning, S]), R.useEffect(() => {}, []);
    let C = R.useMemo(() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: L => n.navigate(L),
            push: (L, O, j) => n.navigate(L, {
                state: O,
                preventScrollReset: j ? .preventScrollReset
            }),
            replace: (L, O, j) => n.navigate(L, {
                replace: !0,
                state: O,
                preventScrollReset: j ? .preventScrollReset
            })
        }), [n]),
        T = n.basename || "/",
        g = R.useMemo(() => ({
            router: n,
            navigator: C,
            static: !1,
            basename: T
        }), [n, C, T]),
        D = R.useMemo(() => ({
            v7_relativeSplatPath: n.future.v7_relativeSplatPath
        }), [n.future.v7_relativeSplatPath]);
    return R.createElement(R.Fragment, null, R.createElement(Ui.Provider, {
        value: g
    }, R.createElement(Nd.Provider, {
        value: l
    }, R.createElement(Bv.Provider, {
        value: _.current
    }, R.createElement(Av.Provider, {
        value: a
    }, R.createElement(zv, {
        basename: T,
        location: l.location,
        navigationType: l.historyAction,
        navigator: C,
        future: D
    }, l.initialized || n.future.v7_partialHydration ? R.createElement(Qv, {
        routes: n.routes,
        future: n.future,
        state: l
    }) : t))))), null)
}
const Qv = R.memo(Kv);

function Kv(e) {
    let {
        routes: t,
        future: n,
        state: r
    } = e;
    return Ev(t, void 0, r, n)
}
var nc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(nc || (nc = {}));
var rc;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(rc || (rc = {}));

function qv(e) {
    let t = R.useRef(yu(e)),
        n = R.useRef(!1),
        r = ma(),
        l = R.useMemo(() => Ov(r.search, n.current ? null : t.current), [r.search]),
        i = yv(),
        o = R.useCallback((u, a) => {
            const s = yu(typeof u == "function" ? u(l) : u);
            n.current = !0, i("?" + s, a)
        }, [i, l]);
    return [l, o]
}
export {
    Gv as O, pp as R, yd as a, Xv as b, Yv as c, ma as d, qv as e, hp as f, ic as g, wm as h, Zv as i, Jv as j, R as r, yv as u
};