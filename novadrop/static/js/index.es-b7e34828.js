import {
    _ as Q3
} from "./rainbowkit-1c226f0f.js";
import {
    e as Si,
    W as Bl
} from "./events-3e14e1f5.js";
import {
    b as E1,
    g as rc,
    c as Bi
} from "./react-74e86ac5.js";
import {
    r as J3
} from "./___vite-browser-external_commonjs-proxy-d1c6d304.js";
var u0 = globalThis && globalThis.__spreadArray || function(r, t, e) {
        if (e || arguments.length === 2)
            for (var i = 0, s = t.length, a; i < s; i++)(a || !(i in t)) && (a || (a = Array.prototype.slice.call(t, 0, i)), a[i] = t[i]);
        return r.concat(a || Array.prototype.slice.call(t))
    },
    X3 = function() {
        function r(t, e, i) {
            this.name = t, this.version = e, this.os = i, this.type = "browser"
        }
        return r
    }(),
    Z3 = function() {
        function r(t) {
            this.version = t, this.type = "node", this.name = "node", this.os = process.platform
        }
        return r
    }(),
    t6 = function() {
        function r(t, e, i, s) {
            this.name = t, this.version = e, this.os = i, this.bot = s, this.type = "bot-device"
        }
        return r
    }(),
    e6 = function() {
        function r() {
            this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
        }
        return r
    }(),
    r6 = function() {
        function r() {
            this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
        }
        return r
    }(),
    i6 = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    n6 = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    c0 = 3,
    s6 = [
        ["aol", /AOLShield\/([0-9\._]+)/],
        ["edge", /Edge\/([0-9\._]+)/],
        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
        ["silk", /\bSilk\/([0-9._-]+)\b/],
        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
        ["fxios", /FxiOS\/([0-9\.]+)/],
        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
        ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
        ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
        ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
        ["ie", /MSIE\s(7\.0)/],
        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
        ["android", /Android\s([0-9\.]+)/],
        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
        ["safari", /Version\/([0-9\._]+).*Safari/],
        ["facebook", /FB[AS]V\/([0-9\.]+)/],
        ["instagram", /Instagram\s([0-9\.]+)/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
        ["curl", /^curl\/([0-9\.]+)$/],
        ["searchbot", i6]
    ],
    h0 = [
        ["iOS", /iP(hone|od|ad)/],
        ["Android OS", /Android/],
        ["BlackBerry OS", /BlackBerry|BB10/],
        ["Windows Mobile", /IEMobile/],
        ["Amazon OS", /Kindle/],
        ["Windows 3.11", /Win16/],
        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
        ["Windows 98", /(Windows 98)|(Win98)/],
        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
        ["Windows Server 2003", /(Windows NT 5.2)/],
        ["Windows Vista", /(Windows NT 6.0)/],
        ["Windows 7", /(Windows NT 6.1)/],
        ["Windows 8", /(Windows NT 6.2)/],
        ["Windows 8.1", /(Windows NT 6.3)/],
        ["Windows 10", /(Windows NT 10.0)/],
        ["Windows ME", /Windows ME/],
        ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
        ["Open BSD", /OpenBSD/],
        ["Sun OS", /SunOS/],
        ["Chrome OS", /CrOS/],
        ["Linux", /(Linux)|(X11)/],
        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
        ["QNX", /QNX/],
        ["BeOS", /BeOS/],
        ["OS/2", /OS\/2/]
    ];

function o6(r) {
    return r ? l0(r) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new r6 : typeof navigator < "u" ? l0(navigator.userAgent) : c6()
}

function a6(r) {
    return r !== "" && s6.reduce(function(t, e) {
        var i = e[0],
            s = e[1];
        if (t) return t;
        var a = s.exec(r);
        return !!a && [i, a]
    }, !1)
}

function l0(r) {
    var t = a6(r);
    if (!t) return null;
    var e = t[0],
        i = t[1];
    if (e === "searchbot") return new e6;
    var s = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
    s ? s.length < c0 && (s = u0(u0([], s, !0), h6(c0 - s.length), !0)) : s = [];
    var a = s.join("."),
        c = u6(r),
        f = n6.exec(r);
    return f && f[1] ? new t6(e, a, c, f[1]) : new X3(e, a, c)
}

function u6(r) {
    for (var t = 0, e = h0.length; t < e; t++) {
        var i = h0[t],
            s = i[0],
            a = i[1],
            c = a.exec(r);
        if (c) return s
    }
    return null
}

function c6() {
    var r = typeof process < "u" && process.version;
    return r ? new Z3(process.version.slice(1)) : null
}

function h6(r) {
    for (var t = [], e = 0; e < r; e++) t.push("0");
    return t
}
var bt = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var al = function(r, t) {
    return al = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(e, i) {
        e.__proto__ = i
    } || function(e, i) {
        for (var s in i) i.hasOwnProperty(s) && (e[s] = i[s])
    }, al(r, t)
};

function l6(r, t) {
    al(r, t);

    function e() {
        this.constructor = r
    }
    r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e)
}
var ul = function() {
    return ul = Object.assign || function(t) {
        for (var e, i = 1, s = arguments.length; i < s; i++) {
            e = arguments[i];
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
        }
        return t
    }, ul.apply(this, arguments)
};

function f6(r, t) {
    var e = {};
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && t.indexOf(i) < 0 && (e[i] = r[i]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, i = Object.getOwnPropertySymbols(r); s < i.length; s++) t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[s]) && (e[i[s]] = r[i[s]]);
    return e
}

function d6(r, t, e, i) {
    var s = arguments.length,
        a = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, e) : i,
        c;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(r, t, e, i);
    else
        for (var f = r.length - 1; f >= 0; f--)(c = r[f]) && (a = (s < 3 ? c(a) : s > 3 ? c(t, e, a) : c(t, e)) || a);
    return s > 3 && a && Object.defineProperty(t, e, a), a
}

function p6(r, t) {
    return function(e, i) {
        t(e, i, r)
    }
}

function g6(r, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(r, t)
}

function m6(r, t, e, i) {
    function s(a) {
        return a instanceof e ? a : new e(function(c) {
            c(a)
        })
    }
    return new(e || (e = Promise))(function(a, c) {
        function f(b) {
            try {
                d(i.next(b))
            } catch (E) {
                c(E)
            }
        }

        function p(b) {
            try {
                d(i.throw(b))
            } catch (E) {
                c(E)
            }
        }

        function d(b) {
            b.done ? a(b.value) : s(b.value).then(f, p)
        }
        d((i = i.apply(r, t || [])).next())
    })
}

function v6(r, t) {
    var e = {
            label: 0,
            sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        },
        i, s, a, c;
    return c = {
        next: f(0),
        throw: f(1),
        return: f(2)
    }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
        return this
    }), c;

    function f(d) {
        return function(b) {
            return p([d, b])
        }
    }

    function p(d) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; e;) try {
            if (i = 1, s && (a = d[0] & 2 ? s.return : d[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, d[1])).done) return a;
            switch (s = 0, a && (d = [d[0] & 2, a.value]), d[0]) {
                case 0:
                case 1:
                    a = d;
                    break;
                case 4:
                    return e.label++, {
                        value: d[1],
                        done: !1
                    };
                case 5:
                    e.label++, s = d[1], d = [0];
                    continue;
                case 7:
                    d = e.ops.pop(), e.trys.pop();
                    continue;
                default:
                    if (a = e.trys, !(a = a.length > 0 && a[a.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                        e = 0;
                        continue
                    }
                    if (d[0] === 3 && (!a || d[1] > a[0] && d[1] < a[3])) {
                        e.label = d[1];
                        break
                    }
                    if (d[0] === 6 && e.label < a[1]) {
                        e.label = a[1], a = d;
                        break
                    }
                    if (a && e.label < a[2]) {
                        e.label = a[2], e.ops.push(d);
                        break
                    }
                    a[2] && e.ops.pop(), e.trys.pop();
                    continue
            }
            d = t.call(r, e)
        } catch (b) {
            d = [6, b], s = 0
        } finally {
            i = a = 0
        }
        if (d[0] & 5) throw d[1];
        return {
            value: d[0] ? d[1] : void 0,
            done: !0
        }
    }
}

function y6(r, t, e, i) {
    i === void 0 && (i = e), r[i] = t[e]
}

function w6(r, t) {
    for (var e in r) e !== "default" && !t.hasOwnProperty(e) && (t[e] = r[e])
}

function cl(r) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        e = t && r[t],
        i = 0;
    if (e) return e.call(r);
    if (r && typeof r.length == "number") return {
        next: function() {
            return r && i >= r.length && (r = void 0), {
                value: r && r[i++],
                done: !r
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function A1(r, t) {
    var e = typeof Symbol == "function" && r[Symbol.iterator];
    if (!e) return r;
    var i = e.call(r),
        s, a = [],
        c;
    try {
        for (;
            (t === void 0 || t-- > 0) && !(s = i.next()).done;) a.push(s.value)
    } catch (f) {
        c = {
            error: f
        }
    } finally {
        try {
            s && !s.done && (e = i.return) && e.call(i)
        } finally {
            if (c) throw c.error
        }
    }
    return a
}

function b6() {
    for (var r = [], t = 0; t < arguments.length; t++) r = r.concat(A1(arguments[t]));
    return r
}

function _6() {
    for (var r = 0, t = 0, e = arguments.length; t < e; t++) r += arguments[t].length;
    for (var i = Array(r), s = 0, t = 0; t < e; t++)
        for (var a = arguments[t], c = 0, f = a.length; c < f; c++, s++) i[s] = a[c];
    return i
}

function Zo(r) {
    return this instanceof Zo ? (this.v = r, this) : new Zo(r)
}

function E6(r, t, e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = e.apply(r, t || []),
        s, a = [];
    return s = {}, c("next"), c("throw"), c("return"), s[Symbol.asyncIterator] = function() {
        return this
    }, s;

    function c(x) {
        i[x] && (s[x] = function(D) {
            return new Promise(function(P, Y) {
                a.push([x, D, P, Y]) > 1 || f(x, D)
            })
        })
    }

    function f(x, D) {
        try {
            p(i[x](D))
        } catch (P) {
            E(a[0][3], P)
        }
    }

    function p(x) {
        x.value instanceof Zo ? Promise.resolve(x.value.v).then(d, b) : E(a[0][2], x)
    }

    function d(x) {
        f("next", x)
    }

    function b(x) {
        f("throw", x)
    }

    function E(x, D) {
        x(D), a.shift(), a.length && f(a[0][0], a[0][1])
    }
}

function A6(r) {
    var t, e;
    return t = {}, i("next"), i("throw", function(s) {
        throw s
    }), i("return"), t[Symbol.iterator] = function() {
        return this
    }, t;

    function i(s, a) {
        t[s] = r[s] ? function(c) {
            return (e = !e) ? {
                value: Zo(r[s](c)),
                done: s === "return"
            } : a ? a(c) : c
        } : a
    }
}

function S6(r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = r[Symbol.asyncIterator],
        e;
    return t ? t.call(r) : (r = typeof cl == "function" ? cl(r) : r[Symbol.iterator](), e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
        return this
    }, e);

    function i(a) {
        e[a] = r[a] && function(c) {
            return new Promise(function(f, p) {
                c = r[a](c), s(f, p, c.done, c.value)
            })
        }
    }

    function s(a, c, f, p) {
        Promise.resolve(p).then(function(d) {
            a({
                value: d,
                done: f
            })
        }, c)
    }
}

function I6(r, t) {
    return Object.defineProperty ? Object.defineProperty(r, "raw", {
        value: t
    }) : r.raw = t, r
}

function D6(r) {
    if (r && r.__esModule) return r;
    var t = {};
    if (r != null)
        for (var e in r) Object.hasOwnProperty.call(r, e) && (t[e] = r[e]);
    return t.default = r, t
}

function x6(r) {
    return r && r.__esModule ? r : {
        default: r
    }
}

function M6(r, t) {
    if (!t.has(r)) throw new TypeError("attempted to get private field on non-instance");
    return t.get(r)
}

function C6(r, t, e) {
    if (!t.has(r)) throw new TypeError("attempted to set private field on non-instance");
    return t.set(r, e), e
}
const P6 = Object.freeze(Object.defineProperty({
        __proto__: null,
        get __assign() {
            return ul
        },
        __asyncDelegator: A6,
        __asyncGenerator: E6,
        __asyncValues: S6,
        __await: Zo,
        __awaiter: m6,
        __classPrivateFieldGet: M6,
        __classPrivateFieldSet: C6,
        __createBinding: y6,
        __decorate: d6,
        __exportStar: w6,
        __extends: l6,
        __generator: v6,
        __importDefault: x6,
        __importStar: D6,
        __makeTemplateObject: I6,
        __metadata: g6,
        __param: p6,
        __read: A1,
        __rest: f6,
        __spread: b6,
        __spreadArrays: _6,
        __values: cl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    aa = E1(P6);
var Dh = {},
    Lo = {},
    f0;

function O6() {
    if (f0) return Lo;
    f0 = 1, Object.defineProperty(Lo, "__esModule", {
        value: !0
    }), Lo.delay = void 0;

    function r(t) {
        return new Promise(e => {
            setTimeout(() => {
                e(!0)
            }, t)
        })
    }
    return Lo.delay = r, Lo
}
var ms = {},
    xh = {},
    vs = {},
    d0;

function N6() {
    return d0 || (d0 = 1, Object.defineProperty(vs, "__esModule", {
        value: !0
    }), vs.ONE_THOUSAND = vs.ONE_HUNDRED = void 0, vs.ONE_HUNDRED = 100, vs.ONE_THOUSAND = 1e3), vs
}
var Mh = {},
    p0;

function R6() {
    return p0 || (p0 = 1, function(r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.ONE_YEAR = r.FOUR_WEEKS = r.THREE_WEEKS = r.TWO_WEEKS = r.ONE_WEEK = r.THIRTY_DAYS = r.SEVEN_DAYS = r.FIVE_DAYS = r.THREE_DAYS = r.ONE_DAY = r.TWENTY_FOUR_HOURS = r.TWELVE_HOURS = r.SIX_HOURS = r.THREE_HOURS = r.ONE_HOUR = r.SIXTY_MINUTES = r.THIRTY_MINUTES = r.TEN_MINUTES = r.FIVE_MINUTES = r.ONE_MINUTE = r.SIXTY_SECONDS = r.THIRTY_SECONDS = r.TEN_SECONDS = r.FIVE_SECONDS = r.ONE_SECOND = void 0, r.ONE_SECOND = 1, r.FIVE_SECONDS = 5, r.TEN_SECONDS = 10, r.THIRTY_SECONDS = 30, r.SIXTY_SECONDS = 60, r.ONE_MINUTE = r.SIXTY_SECONDS, r.FIVE_MINUTES = r.ONE_MINUTE * 5, r.TEN_MINUTES = r.ONE_MINUTE * 10, r.THIRTY_MINUTES = r.ONE_MINUTE * 30, r.SIXTY_MINUTES = r.ONE_MINUTE * 60, r.ONE_HOUR = r.SIXTY_MINUTES, r.THREE_HOURS = r.ONE_HOUR * 3, r.SIX_HOURS = r.ONE_HOUR * 6, r.TWELVE_HOURS = r.ONE_HOUR * 12, r.TWENTY_FOUR_HOURS = r.ONE_HOUR * 24, r.ONE_DAY = r.TWENTY_FOUR_HOURS, r.THREE_DAYS = r.ONE_DAY * 3, r.FIVE_DAYS = r.ONE_DAY * 5, r.SEVEN_DAYS = r.ONE_DAY * 7, r.THIRTY_DAYS = r.ONE_DAY * 30, r.ONE_WEEK = r.SEVEN_DAYS, r.TWO_WEEKS = r.ONE_WEEK * 2, r.THREE_WEEKS = r.ONE_WEEK * 3, r.FOUR_WEEKS = r.ONE_WEEK * 4, r.ONE_YEAR = r.ONE_DAY * 365
    }(Mh)), Mh
}
var g0;

function S1() {
    return g0 || (g0 = 1, function(r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const t = aa;
        t.__exportStar(N6(), r), t.__exportStar(R6(), r)
    }(xh)), xh
}
var m0;

function T6() {
    if (m0) return ms;
    m0 = 1, Object.defineProperty(ms, "__esModule", {
        value: !0
    }), ms.fromMiliseconds = ms.toMiliseconds = void 0;
    const r = S1();

    function t(i) {
        return i * r.ONE_THOUSAND
    }
    ms.toMiliseconds = t;

    function e(i) {
        return Math.floor(i / r.ONE_THOUSAND)
    }
    return ms.fromMiliseconds = e, ms
}
var v0;

function F6() {
    return v0 || (v0 = 1, function(r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const t = aa;
        t.__exportStar(O6(), r), t.__exportStar(T6(), r)
    }(Dh)), Dh
}
var Ws = {},
    y0;

function B6() {
    if (y0) return Ws;
    y0 = 1, Object.defineProperty(Ws, "__esModule", {
        value: !0
    }), Ws.Watch = void 0;
    class r {
        constructor() {
            this.timestamps = new Map
        }
        start(e) {
            if (this.timestamps.has(e)) throw new Error(`Watch already started for label: ${e}`);
            this.timestamps.set(e, {
                started: Date.now()
            })
        }
        stop(e) {
            const i = this.get(e);
            if (typeof i.elapsed < "u") throw new Error(`Watch already stopped for label: ${e}`);
            const s = Date.now() - i.started;
            this.timestamps.set(e, {
                started: i.started,
                elapsed: s
            })
        }
        get(e) {
            const i = this.timestamps.get(e);
            if (typeof i > "u") throw new Error(`No timestamp found for label: ${e}`);
            return i
        }
        elapsed(e) {
            const i = this.get(e);
            return i.elapsed || Date.now() - i.started
        }
    }
    return Ws.Watch = r, Ws.default = r, Ws
}
var Ch = {},
    qo = {},
    w0;

function U6() {
    if (w0) return qo;
    w0 = 1, Object.defineProperty(qo, "__esModule", {
        value: !0
    }), qo.IWatch = void 0;
    class r {}
    return qo.IWatch = r, qo
}
var b0;

function L6() {
    return b0 || (b0 = 1, function(r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), aa.__exportStar(U6(), r)
    }(Ch)), Ch
}(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    const t = aa;
    t.__exportStar(F6(), r), t.__exportStar(B6(), r), t.__exportStar(L6(), r), t.__exportStar(S1(), r)
})(bt);
var qe = {};
Object.defineProperty(qe, "__esModule", {
    value: !0
});
qe.getLocalStorage = qe.getLocalStorageOrThrow = qe.getCrypto = qe.getCryptoOrThrow = I1 = qe.getLocation = qe.getLocationOrThrow = Ll = qe.getNavigator = qe.getNavigatorOrThrow = Ul = qe.getDocument = qe.getDocumentOrThrow = qe.getFromWindowOrThrow = qe.getFromWindow = void 0;

function Is(r) {
    let t;
    return typeof window < "u" && typeof window[r] < "u" && (t = window[r]), t
}
qe.getFromWindow = Is;

function co(r) {
    const t = Is(r);
    if (!t) throw new Error(`${r} is not defined in Window`);
    return t
}
qe.getFromWindowOrThrow = co;

function q6() {
    return co("document")
}
qe.getDocumentOrThrow = q6;

function j6() {
    return Is("document")
}
var Ul = qe.getDocument = j6;

function $6() {
    return co("navigator")
}
qe.getNavigatorOrThrow = $6;

function z6() {
    return Is("navigator")
}
var Ll = qe.getNavigator = z6;

function k6() {
    return co("location")
}
qe.getLocationOrThrow = k6;

function H6() {
    return Is("location")
}
var I1 = qe.getLocation = H6;

function K6() {
    return co("crypto")
}
qe.getCryptoOrThrow = K6;

function V6() {
    return Is("crypto")
}
qe.getCrypto = V6;

function G6() {
    return co("localStorage")
}
qe.getLocalStorageOrThrow = G6;

function W6() {
    return Is("localStorage")
}
qe.getLocalStorage = W6;
var ql = {};
Object.defineProperty(ql, "__esModule", {
    value: !0
});
var D1 = ql.getWindowMetadata = void 0;
const _0 = qe;

function Y6() {
    let r, t;
    try {
        r = _0.getDocumentOrThrow(), t = _0.getLocationOrThrow()
    } catch {
        return null
    }

    function e() {
        const E = r.getElementsByTagName("link"),
            x = [];
        for (let D = 0; D < E.length; D++) {
            const P = E[D],
                Y = P.getAttribute("rel");
            if (Y && Y.toLowerCase().indexOf("icon") > -1) {
                const G = P.getAttribute("href");
                if (G)
                    if (G.toLowerCase().indexOf("https:") === -1 && G.toLowerCase().indexOf("http:") === -1 && G.indexOf("//") !== 0) {
                        let tt = t.protocol + "//" + t.host;
                        if (G.indexOf("/") === 0) tt += G;
                        else {
                            const K = t.pathname.split("/");
                            K.pop();
                            const V = K.join("/");
                            tt += V + "/" + G
                        }
                        x.push(tt)
                    } else if (G.indexOf("//") === 0) {
                    const tt = t.protocol + G;
                    x.push(tt)
                } else x.push(G)
            }
        }
        return x
    }

    function i(...E) {
        const x = r.getElementsByTagName("meta");
        for (let D = 0; D < x.length; D++) {
            const P = x[D],
                Y = ["itemprop", "property", "name"].map(G => P.getAttribute(G)).filter(G => G ? E.includes(G) : !1);
            if (Y.length && Y) {
                const G = P.getAttribute("content");
                if (G) return G
            }
        }
        return ""
    }

    function s() {
        let E = i("name", "og:site_name", "og:title", "twitter:title");
        return E || (E = r.title), E
    }

    function a() {
        return i("description", "og:description", "twitter:description", "keywords")
    }
    const c = s(),
        f = a(),
        p = t.origin,
        d = e();
    return {
        description: f,
        url: p,
        icons: d,
        name: c
    }
}
D1 = ql.getWindowMetadata = Y6;
var ta = {},
    Q6 = r => encodeURIComponent(r).replace(/[!'()*]/g, t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`),
    x1 = "%[a-f0-9]{2}",
    E0 = new RegExp("(" + x1 + ")|([^%]+?)", "gi"),
    A0 = new RegExp("(" + x1 + ")+", "gi");

function hl(r, t) {
    try {
        return [decodeURIComponent(r.join(""))]
    } catch {}
    if (r.length === 1) return r;
    t = t || 1;
    var e = r.slice(0, t),
        i = r.slice(t);
    return Array.prototype.concat.call([], hl(e), hl(i))
}

function J6(r) {
    try {
        return decodeURIComponent(r)
    } catch {
        for (var t = r.match(E0) || [], e = 1; e < t.length; e++) r = hl(t, e).join(""), t = r.match(E0) || [];
        return r
    }
}

function X6(r) {
    for (var t = {
            "%FE%FF": "��",
            "%FF%FE": "��"
        }, e = A0.exec(r); e;) {
        try {
            t[e[0]] = decodeURIComponent(e[0])
        } catch {
            var i = J6(e[0]);
            i !== e[0] && (t[e[0]] = i)
        }
        e = A0.exec(r)
    }
    t["%C2"] = "�";
    for (var s = Object.keys(t), a = 0; a < s.length; a++) {
        var c = s[a];
        r = r.replace(new RegExp(c, "g"), t[c])
    }
    return r
}
var Z6 = function(r) {
        if (typeof r != "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof r + "`");
        try {
            return r = r.replace(/\+/g, " "), decodeURIComponent(r)
        } catch {
            return X6(r)
        }
    },
    t_ = (r, t) => {
        if (!(typeof r == "string" && typeof t == "string")) throw new TypeError("Expected the arguments to be of type `string`");
        if (t === "") return [r];
        const e = r.indexOf(t);
        return e === -1 ? [r] : [r.slice(0, e), r.slice(e + t.length)]
    },
    e_ = function(r, t) {
        for (var e = {}, i = Object.keys(r), s = Array.isArray(t), a = 0; a < i.length; a++) {
            var c = i[a],
                f = r[c];
            (s ? t.indexOf(c) !== -1 : t(c, f, r)) && (e[c] = f)
        }
        return e
    };
(function(r) {
    const t = Q6,
        e = Z6,
        i = t_,
        s = e_,
        a = K => K == null,
        c = Symbol("encodeFragmentIdentifier");

    function f(K) {
        switch (K.arrayFormat) {
            case "index":
                return V => (L, $) => {
                    const z = L.length;
                    return $ === void 0 || K.skipNull && $ === null || K.skipEmptyString && $ === "" ? L : $ === null ? [...L, [b(V, K), "[", z, "]"].join("")] : [...L, [b(V, K), "[", b(z, K), "]=", b($, K)].join("")]
                };
            case "bracket":
                return V => (L, $) => $ === void 0 || K.skipNull && $ === null || K.skipEmptyString && $ === "" ? L : $ === null ? [...L, [b(V, K), "[]"].join("")] : [...L, [b(V, K), "[]=", b($, K)].join("")];
            case "colon-list-separator":
                return V => (L, $) => $ === void 0 || K.skipNull && $ === null || K.skipEmptyString && $ === "" ? L : $ === null ? [...L, [b(V, K), ":list="].join("")] : [...L, [b(V, K), ":list=", b($, K)].join("")];
            case "comma":
            case "separator":
            case "bracket-separator":
                {
                    const V = K.arrayFormat === "bracket-separator" ? "[]=" : "=";
                    return L => ($, z) => z === void 0 || K.skipNull && z === null || K.skipEmptyString && z === "" ? $ : (z = z === null ? "" : z, $.length === 0 ? [
                        [b(L, K), V, b(z, K)].join("")
                    ] : [
                        [$, b(z, K)].join(K.arrayFormatSeparator)
                    ])
                }
            default:
                return V => (L, $) => $ === void 0 || K.skipNull && $ === null || K.skipEmptyString && $ === "" ? L : $ === null ? [...L, b(V, K)] : [...L, [b(V, K), "=", b($, K)].join("")]
        }
    }

    function p(K) {
        let V;
        switch (K.arrayFormat) {
            case "index":
                return (L, $, z) => {
                    if (V = /\[(\d*)\]$/.exec(L), L = L.replace(/\[\d*\]$/, ""), !V) {
                        z[L] = $;
                        return
                    }
                    z[L] === void 0 && (z[L] = {}), z[L][V[1]] = $
                };
            case "bracket":
                return (L, $, z) => {
                    if (V = /(\[\])$/.exec(L), L = L.replace(/\[\]$/, ""), !V) {
                        z[L] = $;
                        return
                    }
                    if (z[L] === void 0) {
                        z[L] = [$];
                        return
                    }
                    z[L] = [].concat(z[L], $)
                };
            case "colon-list-separator":
                return (L, $, z) => {
                    if (V = /(:list)$/.exec(L), L = L.replace(/:list$/, ""), !V) {
                        z[L] = $;
                        return
                    }
                    if (z[L] === void 0) {
                        z[L] = [$];
                        return
                    }
                    z[L] = [].concat(z[L], $)
                };
            case "comma":
            case "separator":
                return (L, $, z) => {
                    const y = typeof $ == "string" && $.includes(K.arrayFormatSeparator),
                        T = typeof $ == "string" && !y && E($, K).includes(K.arrayFormatSeparator);
                    $ = T ? E($, K) : $;
                    const nt = y || T ? $.split(K.arrayFormatSeparator).map(ft => E(ft, K)) : $ === null ? $ : E($, K);
                    z[L] = nt
                };
            case "bracket-separator":
                return (L, $, z) => {
                    const y = /(\[\])$/.test(L);
                    if (L = L.replace(/\[\]$/, ""), !y) {
                        z[L] = $ && E($, K);
                        return
                    }
                    const T = $ === null ? [] : $.split(K.arrayFormatSeparator).map(nt => E(nt, K));
                    if (z[L] === void 0) {
                        z[L] = T;
                        return
                    }
                    z[L] = [].concat(z[L], T)
                };
            default:
                return (L, $, z) => {
                    if (z[L] === void 0) {
                        z[L] = $;
                        return
                    }
                    z[L] = [].concat(z[L], $)
                }
        }
    }

    function d(K) {
        if (typeof K != "string" || K.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string")
    }

    function b(K, V) {
        return V.encode ? V.strict ? t(K) : encodeURIComponent(K) : K
    }

    function E(K, V) {
        return V.decode ? e(K) : K
    }

    function x(K) {
        return Array.isArray(K) ? K.sort() : typeof K == "object" ? x(Object.keys(K)).sort((V, L) => Number(V) - Number(L)).map(V => K[V]) : K
    }

    function D(K) {
        const V = K.indexOf("#");
        return V !== -1 && (K = K.slice(0, V)), K
    }

    function P(K) {
        let V = "";
        const L = K.indexOf("#");
        return L !== -1 && (V = K.slice(L)), V
    }

    function Y(K) {
        K = D(K);
        const V = K.indexOf("?");
        return V === -1 ? "" : K.slice(V + 1)
    }

    function G(K, V) {
        return V.parseNumbers && !Number.isNaN(Number(K)) && typeof K == "string" && K.trim() !== "" ? K = Number(K) : V.parseBooleans && K !== null && (K.toLowerCase() === "true" || K.toLowerCase() === "false") && (K = K.toLowerCase() === "true"), K
    }

    function tt(K, V) {
        V = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, V), d(V.arrayFormatSeparator);
        const L = p(V),
            $ = Object.create(null);
        if (typeof K != "string" || (K = K.trim().replace(/^[?#&]/, ""), !K)) return $;
        for (const z of K.split("&")) {
            if (z === "") continue;
            let [y, T] = i(V.decode ? z.replace(/\+/g, " ") : z, "=");
            T = T === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(V.arrayFormat) ? T : E(T, V), L(E(y, V), T, $)
        }
        for (const z of Object.keys($)) {
            const y = $[z];
            if (typeof y == "object" && y !== null)
                for (const T of Object.keys(y)) y[T] = G(y[T], V);
            else $[z] = G(y, V)
        }
        return V.sort === !1 ? $ : (V.sort === !0 ? Object.keys($).sort() : Object.keys($).sort(V.sort)).reduce((z, y) => {
            const T = $[y];
            return T && typeof T == "object" && !Array.isArray(T) ? z[y] = x(T) : z[y] = T, z
        }, Object.create(null))
    }
    r.extract = Y, r.parse = tt, r.stringify = (K, V) => {
        if (!K) return "";
        V = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, V), d(V.arrayFormatSeparator);
        const L = T => V.skipNull && a(K[T]) || V.skipEmptyString && K[T] === "",
            $ = f(V),
            z = {};
        for (const T of Object.keys(K)) L(T) || (z[T] = K[T]);
        const y = Object.keys(z);
        return V.sort !== !1 && y.sort(V.sort), y.map(T => {
            const nt = K[T];
            return nt === void 0 ? "" : nt === null ? b(T, V) : Array.isArray(nt) ? nt.length === 0 && V.arrayFormat === "bracket-separator" ? b(T, V) + "[]" : nt.reduce($(T), []).join("&") : b(T, V) + "=" + b(nt, V)
        }).filter(T => T.length > 0).join("&")
    }, r.parseUrl = (K, V) => {
        V = Object.assign({
            decode: !0
        }, V);
        const [L, $] = i(K, "#");
        return Object.assign({
            url: L.split("?")[0] || "",
            query: tt(Y(K), V)
        }, V && V.parseFragmentIdentifier && $ ? {
            fragmentIdentifier: E($, V)
        } : {})
    }, r.stringifyUrl = (K, V) => {
        V = Object.assign({
            encode: !0,
            strict: !0,
            [c]: !0
        }, V);
        const L = D(K.url).split("?")[0] || "",
            $ = r.extract(K.url),
            z = r.parse($, {
                sort: !1
            }),
            y = Object.assign(z, K.query);
        let T = r.stringify(y, V);
        T && (T = `?${T}`);
        let nt = P(K.url);
        return K.fragmentIdentifier && (nt = `#${V[c]?b(K.fragmentIdentifier,V):K.fragmentIdentifier}`), `${L}${T}${nt}`
    }, r.pick = (K, V, L) => {
        L = Object.assign({
            parseFragmentIdentifier: !0,
            [c]: !1
        }, L);
        const {
            url: $,
            query: z,
            fragmentIdentifier: y
        } = r.parseUrl(K, L);
        return r.stringifyUrl({
            url: $,
            query: s(z, V),
            fragmentIdentifier: y
        }, L)
    }, r.exclude = (K, V, L) => {
        const $ = Array.isArray(V) ? z => !V.includes(z) : (z, y) => !V(z, y);
        return r.pick(K, $, L)
    }
})(ta);
var jl = {},
    ic = {},
    oe = {},
    M1 = {};
(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });

    function t(f, p) {
        var d = f >>> 16 & 65535,
            b = f & 65535,
            E = p >>> 16 & 65535,
            x = p & 65535;
        return b * x + (d * x + b * E << 16 >>> 0) | 0
    }
    r.mul = Math.imul || t;

    function e(f, p) {
        return f + p | 0
    }
    r.add = e;

    function i(f, p) {
        return f - p | 0
    }
    r.sub = i;

    function s(f, p) {
        return f << p | f >>> 32 - p
    }
    r.rotl = s;

    function a(f, p) {
        return f << 32 - p | f >>> p
    }
    r.rotr = a;

    function c(f) {
        return typeof f == "number" && isFinite(f) && Math.floor(f) === f
    }
    r.isInteger = Number.isInteger || c, r.MAX_SAFE_INTEGER = 9007199254740991, r.isSafeInteger = function(f) {
        return r.isInteger(f) && f >= -r.MAX_SAFE_INTEGER && f <= r.MAX_SAFE_INTEGER
    }
})(M1);
Object.defineProperty(oe, "__esModule", {
    value: !0
});
var C1 = M1;

function r_(r, t) {
    return t === void 0 && (t = 0), (r[t + 0] << 8 | r[t + 1]) << 16 >> 16
}
oe.readInt16BE = r_;

function i_(r, t) {
    return t === void 0 && (t = 0), (r[t + 0] << 8 | r[t + 1]) >>> 0
}
oe.readUint16BE = i_;

function n_(r, t) {
    return t === void 0 && (t = 0), (r[t + 1] << 8 | r[t]) << 16 >> 16
}
oe.readInt16LE = n_;

function s_(r, t) {
    return t === void 0 && (t = 0), (r[t + 1] << 8 | r[t]) >>> 0
}
oe.readUint16LE = s_;

function P1(r, t, e) {
    return t === void 0 && (t = new Uint8Array(2)), e === void 0 && (e = 0), t[e + 0] = r >>> 8, t[e + 1] = r >>> 0, t
}
oe.writeUint16BE = P1;
oe.writeInt16BE = P1;

function O1(r, t, e) {
    return t === void 0 && (t = new Uint8Array(2)), e === void 0 && (e = 0), t[e + 0] = r >>> 0, t[e + 1] = r >>> 8, t
}
oe.writeUint16LE = O1;
oe.writeInt16LE = O1;

function ll(r, t) {
    return t === void 0 && (t = 0), r[t] << 24 | r[t + 1] << 16 | r[t + 2] << 8 | r[t + 3]
}
oe.readInt32BE = ll;

function fl(r, t) {
    return t === void 0 && (t = 0), (r[t] << 24 | r[t + 1] << 16 | r[t + 2] << 8 | r[t + 3]) >>> 0
}
oe.readUint32BE = fl;

function dl(r, t) {
    return t === void 0 && (t = 0), r[t + 3] << 24 | r[t + 2] << 16 | r[t + 1] << 8 | r[t]
}
oe.readInt32LE = dl;

function pl(r, t) {
    return t === void 0 && (t = 0), (r[t + 3] << 24 | r[t + 2] << 16 | r[t + 1] << 8 | r[t]) >>> 0
}
oe.readUint32LE = pl;

function zu(r, t, e) {
    return t === void 0 && (t = new Uint8Array(4)), e === void 0 && (e = 0), t[e + 0] = r >>> 24, t[e + 1] = r >>> 16, t[e + 2] = r >>> 8, t[e + 3] = r >>> 0, t
}
oe.writeUint32BE = zu;
oe.writeInt32BE = zu;

function ku(r, t, e) {
    return t === void 0 && (t = new Uint8Array(4)), e === void 0 && (e = 0), t[e + 0] = r >>> 0, t[e + 1] = r >>> 8, t[e + 2] = r >>> 16, t[e + 3] = r >>> 24, t
}
oe.writeUint32LE = ku;
oe.writeInt32LE = ku;

function o_(r, t) {
    t === void 0 && (t = 0);
    var e = ll(r, t),
        i = ll(r, t + 4);
    return e * 4294967296 + i - (i >> 31) * 4294967296
}
oe.readInt64BE = o_;

function a_(r, t) {
    t === void 0 && (t = 0);
    var e = fl(r, t),
        i = fl(r, t + 4);
    return e * 4294967296 + i
}
oe.readUint64BE = a_;

function u_(r, t) {
    t === void 0 && (t = 0);
    var e = dl(r, t),
        i = dl(r, t + 4);
    return i * 4294967296 + e - (e >> 31) * 4294967296
}
oe.readInt64LE = u_;

function c_(r, t) {
    t === void 0 && (t = 0);
    var e = pl(r, t),
        i = pl(r, t + 4);
    return i * 4294967296 + e
}
oe.readUint64LE = c_;

function N1(r, t, e) {
    return t === void 0 && (t = new Uint8Array(8)), e === void 0 && (e = 0), zu(r / 4294967296 >>> 0, t, e), zu(r >>> 0, t, e + 4), t
}
oe.writeUint64BE = N1;
oe.writeInt64BE = N1;

function R1(r, t, e) {
    return t === void 0 && (t = new Uint8Array(8)), e === void 0 && (e = 0), ku(r >>> 0, t, e), ku(r / 4294967296 >>> 0, t, e + 4), t
}
oe.writeUint64LE = R1;
oe.writeInt64LE = R1;

function h_(r, t, e) {
    if (e === void 0 && (e = 0), r % 8 !== 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (r / 8 > t.length - e) throw new Error("readUintBE: array is too short for the given bitLength");
    for (var i = 0, s = 1, a = r / 8 + e - 1; a >= e; a--) i += t[a] * s, s *= 256;
    return i
}
oe.readUintBE = h_;

function l_(r, t, e) {
    if (e === void 0 && (e = 0), r % 8 !== 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (r / 8 > t.length - e) throw new Error("readUintLE: array is too short for the given bitLength");
    for (var i = 0, s = 1, a = e; a < e + r / 8; a++) i += t[a] * s, s *= 256;
    return i
}
oe.readUintLE = l_;

function f_(r, t, e, i) {
    if (e === void 0 && (e = new Uint8Array(r / 8)), i === void 0 && (i = 0), r % 8 !== 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!C1.isSafeInteger(t)) throw new Error("writeUintBE value must be an integer");
    for (var s = 1, a = r / 8 + i - 1; a >= i; a--) e[a] = t / s & 255, s *= 256;
    return e
}
oe.writeUintBE = f_;

function d_(r, t, e, i) {
    if (e === void 0 && (e = new Uint8Array(r / 8)), i === void 0 && (i = 0), r % 8 !== 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!C1.isSafeInteger(t)) throw new Error("writeUintLE value must be an integer");
    for (var s = 1, a = i; a < i + r / 8; a++) e[a] = t / s & 255, s *= 256;
    return e
}
oe.writeUintLE = d_;

function p_(r, t) {
    t === void 0 && (t = 0);
    var e = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return e.getFloat32(t)
}
oe.readFloat32BE = p_;

function g_(r, t) {
    t === void 0 && (t = 0);
    var e = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return e.getFloat32(t, !0)
}
oe.readFloat32LE = g_;

function m_(r, t) {
    t === void 0 && (t = 0);
    var e = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return e.getFloat64(t)
}
oe.readFloat64BE = m_;

function v_(r, t) {
    t === void 0 && (t = 0);
    var e = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return e.getFloat64(t, !0)
}
oe.readFloat64LE = v_;

function y_(r, t, e) {
    t === void 0 && (t = new Uint8Array(4)), e === void 0 && (e = 0);
    var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return i.setFloat32(e, r), t
}
oe.writeFloat32BE = y_;

function w_(r, t, e) {
    t === void 0 && (t = new Uint8Array(4)), e === void 0 && (e = 0);
    var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return i.setFloat32(e, r, !0), t
}
oe.writeFloat32LE = w_;

function b_(r, t, e) {
    t === void 0 && (t = new Uint8Array(8)), e === void 0 && (e = 0);
    var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return i.setFloat64(e, r), t
}
oe.writeFloat64BE = b_;

function __(r, t, e) {
    t === void 0 && (t = new Uint8Array(8)), e === void 0 && (e = 0);
    var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return i.setFloat64(e, r, !0), t
}
oe.writeFloat64LE = __;
var ii = {};
Object.defineProperty(ii, "__esModule", {
    value: !0
});

function E_(r) {
    for (var t = 0; t < r.length; t++) r[t] = 0;
    return r
}
ii.wipe = E_;
Object.defineProperty(ic, "__esModule", {
    value: !0
});
var wr = oe,
    gl = ii,
    A_ = 20;

function S_(r, t, e) {
    for (var i = 1634760805, s = 857760878, a = 2036477234, c = 1797285236, f = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], p = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], d = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], b = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], E = e[19] << 24 | e[18] << 16 | e[17] << 8 | e[16], x = e[23] << 24 | e[22] << 16 | e[21] << 8 | e[20], D = e[27] << 24 | e[26] << 16 | e[25] << 8 | e[24], P = e[31] << 24 | e[30] << 16 | e[29] << 8 | e[28], Y = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], G = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], tt = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], K = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], V = i, L = s, $ = a, z = c, y = f, T = p, nt = d, ft = b, lt = E, mt = x, l = D, h = P, w = Y, S = G, M = tt, O = K, F = 0; F < A_; F += 2) V = V + y | 0, w ^= V, w = w >>> 32 - 16 | w << 16, lt = lt + w | 0, y ^= lt, y = y >>> 32 - 12 | y << 12, L = L + T | 0, S ^= L, S = S >>> 32 - 16 | S << 16, mt = mt + S | 0, T ^= mt, T = T >>> 32 - 12 | T << 12, $ = $ + nt | 0, M ^= $, M = M >>> 32 - 16 | M << 16, l = l + M | 0, nt ^= l, nt = nt >>> 32 - 12 | nt << 12, z = z + ft | 0, O ^= z, O = O >>> 32 - 16 | O << 16, h = h + O | 0, ft ^= h, ft = ft >>> 32 - 12 | ft << 12, $ = $ + nt | 0, M ^= $, M = M >>> 32 - 8 | M << 8, l = l + M | 0, nt ^= l, nt = nt >>> 32 - 7 | nt << 7, z = z + ft | 0, O ^= z, O = O >>> 32 - 8 | O << 8, h = h + O | 0, ft ^= h, ft = ft >>> 32 - 7 | ft << 7, L = L + T | 0, S ^= L, S = S >>> 32 - 8 | S << 8, mt = mt + S | 0, T ^= mt, T = T >>> 32 - 7 | T << 7, V = V + y | 0, w ^= V, w = w >>> 32 - 8 | w << 8, lt = lt + w | 0, y ^= lt, y = y >>> 32 - 7 | y << 7, V = V + T | 0, O ^= V, O = O >>> 32 - 16 | O << 16, l = l + O | 0, T ^= l, T = T >>> 32 - 12 | T << 12, L = L + nt | 0, w ^= L, w = w >>> 32 - 16 | w << 16, h = h + w | 0, nt ^= h, nt = nt >>> 32 - 12 | nt << 12, $ = $ + ft | 0, S ^= $, S = S >>> 32 - 16 | S << 16, lt = lt + S | 0, ft ^= lt, ft = ft >>> 32 - 12 | ft << 12, z = z + y | 0, M ^= z, M = M >>> 32 - 16 | M << 16, mt = mt + M | 0, y ^= mt, y = y >>> 32 - 12 | y << 12, $ = $ + ft | 0, S ^= $, S = S >>> 32 - 8 | S << 8, lt = lt + S | 0, ft ^= lt, ft = ft >>> 32 - 7 | ft << 7, z = z + y | 0, M ^= z, M = M >>> 32 - 8 | M << 8, mt = mt + M | 0, y ^= mt, y = y >>> 32 - 7 | y << 7, L = L + nt | 0, w ^= L, w = w >>> 32 - 8 | w << 8, h = h + w | 0, nt ^= h, nt = nt >>> 32 - 7 | nt << 7, V = V + T | 0, O ^= V, O = O >>> 32 - 8 | O << 8, l = l + O | 0, T ^= l, T = T >>> 32 - 7 | T << 7;
    wr.writeUint32LE(V + i | 0, r, 0), wr.writeUint32LE(L + s | 0, r, 4), wr.writeUint32LE($ + a | 0, r, 8), wr.writeUint32LE(z + c | 0, r, 12), wr.writeUint32LE(y + f | 0, r, 16), wr.writeUint32LE(T + p | 0, r, 20), wr.writeUint32LE(nt + d | 0, r, 24), wr.writeUint32LE(ft + b | 0, r, 28), wr.writeUint32LE(lt + E | 0, r, 32), wr.writeUint32LE(mt + x | 0, r, 36), wr.writeUint32LE(l + D | 0, r, 40), wr.writeUint32LE(h + P | 0, r, 44), wr.writeUint32LE(w + Y | 0, r, 48), wr.writeUint32LE(S + G | 0, r, 52), wr.writeUint32LE(M + tt | 0, r, 56), wr.writeUint32LE(O + K | 0, r, 60)
}

function T1(r, t, e, i, s) {
    if (s === void 0 && (s = 0), r.length !== 32) throw new Error("ChaCha: key size must be 32 bytes");
    if (i.length < e.length) throw new Error("ChaCha: destination is shorter than source");
    var a, c;
    if (s === 0) {
        if (t.length !== 8 && t.length !== 12) throw new Error("ChaCha nonce must be 8 or 12 bytes");
        a = new Uint8Array(16), c = a.length - t.length, a.set(t, c)
    } else {
        if (t.length !== 16) throw new Error("ChaCha nonce with counter must be 16 bytes");
        a = t, c = s
    }
    for (var f = new Uint8Array(64), p = 0; p < e.length; p += 64) {
        S_(f, a, r);
        for (var d = p; d < p + 64 && d < e.length; d++) i[d] = e[d] ^ f[d - p];
        D_(a, 0, c)
    }
    return gl.wipe(f), s === 0 && gl.wipe(a), i
}
ic.streamXOR = T1;

function I_(r, t, e, i) {
    return i === void 0 && (i = 0), gl.wipe(e), T1(r, t, e, e, i)
}
ic.stream = I_;

function D_(r, t, e) {
    for (var i = 1; e--;) i = i + (r[t] & 255) | 0, r[t] = i & 255, i >>>= 8, t++;
    if (i > 0) throw new Error("ChaCha: counter overflow")
}
var F1 = {},
    Wn = {};
Object.defineProperty(Wn, "__esModule", {
    value: !0
});

function x_(r, t, e) {
    return ~(r - 1) & t | r - 1 & e
}
Wn.select = x_;

function M_(r, t) {
    return (r | 0) - (t | 0) - 1 >>> 31 & 1
}
Wn.lessOrEqual = M_;

function B1(r, t) {
    if (r.length !== t.length) return 0;
    for (var e = 0, i = 0; i < r.length; i++) e |= r[i] ^ t[i];
    return 1 & e - 1 >>> 8
}
Wn.compare = B1;

function C_(r, t) {
    return r.length === 0 || t.length === 0 ? !1 : B1(r, t) !== 0
}
Wn.equal = C_;
(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var t = Wn,
        e = ii;
    r.DIGEST_LENGTH = 16;
    var i = function() {
        function c(f) {
            this.digestLength = r.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
            var p = f[0] | f[1] << 8;
            this._r[0] = p & 8191;
            var d = f[2] | f[3] << 8;
            this._r[1] = (p >>> 13 | d << 3) & 8191;
            var b = f[4] | f[5] << 8;
            this._r[2] = (d >>> 10 | b << 6) & 7939;
            var E = f[6] | f[7] << 8;
            this._r[3] = (b >>> 7 | E << 9) & 8191;
            var x = f[8] | f[9] << 8;
            this._r[4] = (E >>> 4 | x << 12) & 255, this._r[5] = x >>> 1 & 8190;
            var D = f[10] | f[11] << 8;
            this._r[6] = (x >>> 14 | D << 2) & 8191;
            var P = f[12] | f[13] << 8;
            this._r[7] = (D >>> 11 | P << 5) & 8065;
            var Y = f[14] | f[15] << 8;
            this._r[8] = (P >>> 8 | Y << 8) & 8191, this._r[9] = Y >>> 5 & 127, this._pad[0] = f[16] | f[17] << 8, this._pad[1] = f[18] | f[19] << 8, this._pad[2] = f[20] | f[21] << 8, this._pad[3] = f[22] | f[23] << 8, this._pad[4] = f[24] | f[25] << 8, this._pad[5] = f[26] | f[27] << 8, this._pad[6] = f[28] | f[29] << 8, this._pad[7] = f[30] | f[31] << 8
        }
        return c.prototype._blocks = function(f, p, d) {
            for (var b = this._fin ? 0 : 2048, E = this._h[0], x = this._h[1], D = this._h[2], P = this._h[3], Y = this._h[4], G = this._h[5], tt = this._h[6], K = this._h[7], V = this._h[8], L = this._h[9], $ = this._r[0], z = this._r[1], y = this._r[2], T = this._r[3], nt = this._r[4], ft = this._r[5], lt = this._r[6], mt = this._r[7], l = this._r[8], h = this._r[9]; d >= 16;) {
                var w = f[p + 0] | f[p + 1] << 8;
                E += w & 8191;
                var S = f[p + 2] | f[p + 3] << 8;
                x += (w >>> 13 | S << 3) & 8191;
                var M = f[p + 4] | f[p + 5] << 8;
                D += (S >>> 10 | M << 6) & 8191;
                var O = f[p + 6] | f[p + 7] << 8;
                P += (M >>> 7 | O << 9) & 8191;
                var F = f[p + 8] | f[p + 9] << 8;
                Y += (O >>> 4 | F << 12) & 8191, G += F >>> 1 & 8191;
                var I = f[p + 10] | f[p + 11] << 8;
                tt += (F >>> 14 | I << 2) & 8191;
                var g = f[p + 12] | f[p + 13] << 8;
                K += (I >>> 11 | g << 5) & 8191;
                var N = f[p + 14] | f[p + 15] << 8;
                V += (g >>> 8 | N << 8) & 8191, L += N >>> 5 | b;
                var it = 0,
                    dt = it;
                dt += E * $, dt += x * (5 * h), dt += D * (5 * l), dt += P * (5 * mt), dt += Y * (5 * lt), it = dt >>> 13, dt &= 8191, dt += G * (5 * ft), dt += tt * (5 * nt), dt += K * (5 * T), dt += V * (5 * y), dt += L * (5 * z), it += dt >>> 13, dt &= 8191;
                var _ = it;
                _ += E * z, _ += x * $, _ += D * (5 * h), _ += P * (5 * l), _ += Y * (5 * mt), it = _ >>> 13, _ &= 8191, _ += G * (5 * lt), _ += tt * (5 * ft), _ += K * (5 * nt), _ += V * (5 * T), _ += L * (5 * y), it += _ >>> 13, _ &= 8191;
                var Z = it;
                Z += E * y, Z += x * z, Z += D * $, Z += P * (5 * h), Z += Y * (5 * l), it = Z >>> 13, Z &= 8191, Z += G * (5 * mt), Z += tt * (5 * lt), Z += K * (5 * ft), Z += V * (5 * nt), Z += L * (5 * T), it += Z >>> 13, Z &= 8191;
                var U = it;
                U += E * T, U += x * y, U += D * z, U += P * $, U += Y * (5 * h), it = U >>> 13, U &= 8191, U += G * (5 * l), U += tt * (5 * mt), U += K * (5 * lt), U += V * (5 * ft), U += L * (5 * nt), it += U >>> 13, U &= 8191;
                var q = it;
                q += E * nt, q += x * T, q += D * y, q += P * z, q += Y * $, it = q >>> 13, q &= 8191, q += G * (5 * h), q += tt * (5 * l), q += K * (5 * mt), q += V * (5 * lt), q += L * (5 * ft), it += q >>> 13, q &= 8191;
                var k = it;
                k += E * ft, k += x * nt, k += D * T, k += P * y, k += Y * z, it = k >>> 13, k &= 8191, k += G * $, k += tt * (5 * h), k += K * (5 * l), k += V * (5 * mt), k += L * (5 * lt), it += k >>> 13, k &= 8191;
                var m = it;
                m += E * lt, m += x * ft, m += D * nt, m += P * T, m += Y * y, it = m >>> 13, m &= 8191, m += G * z, m += tt * $, m += K * (5 * h), m += V * (5 * l), m += L * (5 * mt), it += m >>> 13, m &= 8191;
                var B = it;
                B += E * mt, B += x * lt, B += D * ft, B += P * nt, B += Y * T, it = B >>> 13, B &= 8191, B += G * y, B += tt * z, B += K * $, B += V * (5 * h), B += L * (5 * l), it += B >>> 13, B &= 8191;
                var et = it;
                et += E * l, et += x * mt, et += D * lt, et += P * ft, et += Y * nt, it = et >>> 13, et &= 8191, et += G * T, et += tt * y, et += K * z, et += V * $, et += L * (5 * h), it += et >>> 13, et &= 8191;
                var ct = it;
                ct += E * h, ct += x * l, ct += D * mt, ct += P * lt, ct += Y * ft, it = ct >>> 13, ct &= 8191, ct += G * nt, ct += tt * T, ct += K * y, ct += V * z, ct += L * $, it += ct >>> 13, ct &= 8191, it = (it << 2) + it | 0, it = it + dt | 0, dt = it & 8191, it = it >>> 13, _ += it, E = dt, x = _, D = Z, P = U, Y = q, G = k, tt = m, K = B, V = et, L = ct, p += 16, d -= 16
            }
            this._h[0] = E, this._h[1] = x, this._h[2] = D, this._h[3] = P, this._h[4] = Y, this._h[5] = G, this._h[6] = tt, this._h[7] = K, this._h[8] = V, this._h[9] = L
        }, c.prototype.finish = function(f, p) {
            p === void 0 && (p = 0);
            var d = new Uint16Array(10),
                b, E, x, D;
            if (this._leftover) {
                for (D = this._leftover, this._buffer[D++] = 1; D < 16; D++) this._buffer[D] = 0;
                this._fin = 1, this._blocks(this._buffer, 0, 16)
            }
            for (b = this._h[1] >>> 13, this._h[1] &= 8191, D = 2; D < 10; D++) this._h[D] += b, b = this._h[D] >>> 13, this._h[D] &= 8191;
            for (this._h[0] += b * 5, b = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += b, b = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += b, d[0] = this._h[0] + 5, b = d[0] >>> 13, d[0] &= 8191, D = 1; D < 10; D++) d[D] = this._h[D] + b, b = d[D] >>> 13, d[D] &= 8191;
            for (d[9] -= 8192, E = (b ^ 1) - 1, D = 0; D < 10; D++) d[D] &= E;
            for (E = ~E, D = 0; D < 10; D++) this._h[D] = this._h[D] & E | d[D];
            for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, x = this._h[0] + this._pad[0], this._h[0] = x & 65535, D = 1; D < 8; D++) x = (this._h[D] + this._pad[D] | 0) + (x >>> 16) | 0, this._h[D] = x & 65535;
            return f[p + 0] = this._h[0] >>> 0, f[p + 1] = this._h[0] >>> 8, f[p + 2] = this._h[1] >>> 0, f[p + 3] = this._h[1] >>> 8, f[p + 4] = this._h[2] >>> 0, f[p + 5] = this._h[2] >>> 8, f[p + 6] = this._h[3] >>> 0, f[p + 7] = this._h[3] >>> 8, f[p + 8] = this._h[4] >>> 0, f[p + 9] = this._h[4] >>> 8, f[p + 10] = this._h[5] >>> 0, f[p + 11] = this._h[5] >>> 8, f[p + 12] = this._h[6] >>> 0, f[p + 13] = this._h[6] >>> 8, f[p + 14] = this._h[7] >>> 0, f[p + 15] = this._h[7] >>> 8, this._finished = !0, this
        }, c.prototype.update = function(f) {
            var p = 0,
                d = f.length,
                b;
            if (this._leftover) {
                b = 16 - this._leftover, b > d && (b = d);
                for (var E = 0; E < b; E++) this._buffer[this._leftover + E] = f[p + E];
                if (d -= b, p += b, this._leftover += b, this._leftover < 16) return this;
                this._blocks(this._buffer, 0, 16), this._leftover = 0
            }
            if (d >= 16 && (b = d - d % 16, this._blocks(f, p, b), p += b, d -= b), d) {
                for (var E = 0; E < d; E++) this._buffer[this._leftover + E] = f[p + E];
                this._leftover += d
            }
            return this
        }, c.prototype.digest = function() {
            if (this._finished) throw new Error("Poly1305 was finished");
            var f = new Uint8Array(16);
            return this.finish(f), f
        }, c.prototype.clean = function() {
            return e.wipe(this._buffer), e.wipe(this._r), e.wipe(this._h), e.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
        }, c
    }();
    r.Poly1305 = i;

    function s(c, f) {
        var p = new i(c);
        p.update(f);
        var d = p.digest();
        return p.clean(), d
    }
    r.oneTimeAuth = s;

    function a(c, f) {
        return c.length !== r.DIGEST_LENGTH || f.length !== r.DIGEST_LENGTH ? !1 : t.equal(c, f)
    }
    r.equal = a
})(F1);
(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var t = ic,
        e = F1,
        i = ii,
        s = oe,
        a = Wn;
    r.KEY_LENGTH = 32, r.NONCE_LENGTH = 12, r.TAG_LENGTH = 16;
    var c = new Uint8Array(16),
        f = function() {
            function p(d) {
                if (this.nonceLength = r.NONCE_LENGTH, this.tagLength = r.TAG_LENGTH, d.length !== r.KEY_LENGTH) throw new Error("ChaCha20Poly1305 needs 32-byte key");
                this._key = new Uint8Array(d)
            }
            return p.prototype.seal = function(d, b, E, x) {
                if (d.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                var D = new Uint8Array(16);
                D.set(d, D.length - d.length);
                var P = new Uint8Array(32);
                t.stream(this._key, D, P, 4);
                var Y = b.length + this.tagLength,
                    G;
                if (x) {
                    if (x.length !== Y) throw new Error("ChaCha20Poly1305: incorrect destination length");
                    G = x
                } else G = new Uint8Array(Y);
                return t.streamXOR(this._key, D, b, G, 4), this._authenticate(G.subarray(G.length - this.tagLength, G.length), P, G.subarray(0, G.length - this.tagLength), E), i.wipe(D), G
            }, p.prototype.open = function(d, b, E, x) {
                if (d.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                if (b.length < this.tagLength) return null;
                var D = new Uint8Array(16);
                D.set(d, D.length - d.length);
                var P = new Uint8Array(32);
                t.stream(this._key, D, P, 4);
                var Y = new Uint8Array(this.tagLength);
                if (this._authenticate(Y, P, b.subarray(0, b.length - this.tagLength), E), !a.equal(Y, b.subarray(b.length - this.tagLength, b.length))) return null;
                var G = b.length - this.tagLength,
                    tt;
                if (x) {
                    if (x.length !== G) throw new Error("ChaCha20Poly1305: incorrect destination length");
                    tt = x
                } else tt = new Uint8Array(G);
                return t.streamXOR(this._key, D, b.subarray(0, b.length - this.tagLength), tt, 4), i.wipe(D), tt
            }, p.prototype.clean = function() {
                return i.wipe(this._key), this
            }, p.prototype._authenticate = function(d, b, E, x) {
                var D = new e.Poly1305(b);
                x && (D.update(x), x.length % 16 > 0 && D.update(c.subarray(x.length % 16))), D.update(E), E.length % 16 > 0 && D.update(c.subarray(E.length % 16));
                var P = new Uint8Array(8);
                x && s.writeUint64LE(x.length, P), D.update(P), s.writeUint64LE(E.length, P), D.update(P);
                for (var Y = D.digest(), G = 0; G < Y.length; G++) d[G] = Y[G];
                D.clean(), i.wipe(Y), i.wipe(P)
            }, p
        }();
    r.ChaCha20Poly1305 = f
})(jl);
var U1 = {},
    ua = {},
    $l = {};
Object.defineProperty($l, "__esModule", {
    value: !0
});

function P_(r) {
    return typeof r.saveState < "u" && typeof r.restoreState < "u" && typeof r.cleanSavedState < "u"
}
$l.isSerializableHash = P_;
Object.defineProperty(ua, "__esModule", {
    value: !0
});
var Vi = $l,
    O_ = Wn,
    N_ = ii,
    L1 = function() {
        function r(t, e) {
            this._finished = !1, this._inner = new t, this._outer = new t, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
            var i = new Uint8Array(this.blockSize);
            e.length > this.blockSize ? this._inner.update(e).finish(i).clean() : i.set(e);
            for (var s = 0; s < i.length; s++) i[s] ^= 54;
            this._inner.update(i);
            for (var s = 0; s < i.length; s++) i[s] ^= 106;
            this._outer.update(i), Vi.isSerializableHash(this._inner) && Vi.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), N_.wipe(i)
        }
        return r.prototype.reset = function() {
            if (!Vi.isSerializableHash(this._inner) || !Vi.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
            return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
        }, r.prototype.clean = function() {
            Vi.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Vi.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
        }, r.prototype.update = function(t) {
            return this._inner.update(t), this
        }, r.prototype.finish = function(t) {
            return this._finished ? (this._outer.finish(t), this) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0, this)
        }, r.prototype.digest = function() {
            var t = new Uint8Array(this.digestLength);
            return this.finish(t), t
        }, r.prototype.saveState = function() {
            if (!Vi.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
            return this._inner.saveState()
        }, r.prototype.restoreState = function(t) {
            if (!Vi.isSerializableHash(this._inner) || !Vi.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
            return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
        }, r.prototype.cleanSavedState = function(t) {
            if (!Vi.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
            this._inner.cleanSavedState(t)
        }, r
    }();
ua.HMAC = L1;

function R_(r, t, e) {
    var i = new L1(r, t);
    i.update(e);
    var s = i.digest();
    return i.clean(), s
}
ua.hmac = R_;
ua.equal = O_.equal;
Object.defineProperty(U1, "__esModule", {
    value: !0
});
var S0 = ua,
    I0 = ii,
    T_ = function() {
        function r(t, e, i, s) {
            i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = s;
            var a = S0.hmac(this._hash, i, e);
            this._hmac = new S0.HMAC(t, a), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
        }
        return r.prototype._fillBuffer = function() {
            this._counter[0]++;
            var t = this._counter[0];
            if (t === 0) throw new Error("hkdf: cannot expand more");
            this._hmac.reset(), t > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
        }, r.prototype.expand = function(t) {
            for (var e = new Uint8Array(t), i = 0; i < e.length; i++) this._bufpos === this._buffer.length && this._fillBuffer(), e[i] = this._buffer[this._bufpos++];
            return e
        }, r.prototype.clean = function() {
            this._hmac.clean(), I0.wipe(this._buffer), I0.wipe(this._counter), this._bufpos = 0
        }, r
    }(),
    F_ = U1.HKDF = T_,
    ho = {},
    nc = {},
    sc = {};
Object.defineProperty(sc, "__esModule", {
    value: !0
});
sc.BrowserRandomSource = void 0;
const D0 = 65536;
class B_ {
    constructor() {
        this.isAvailable = !1, this.isInstantiated = !1;
        const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
        t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0)
    }
    randomBytes(t) {
        if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
        const e = new Uint8Array(t);
        for (let i = 0; i < e.length; i += D0) this._crypto.getRandomValues(e.subarray(i, i + Math.min(e.length - i, D0)));
        return e
    }
}
sc.BrowserRandomSource = B_;

function U_(r) {
    throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var oc = {};
Object.defineProperty(oc, "__esModule", {
    value: !0
});
oc.NodeRandomSource = void 0;
const L_ = ii;
class q_ {
    constructor() {
        if (this.isAvailable = !1, this.isInstantiated = !1, typeof U_ < "u") {
            const t = J3;
            t && t.randomBytes && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0)
        }
    }
    randomBytes(t) {
        if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
        let e = this._crypto.randomBytes(t);
        if (e.length !== t) throw new Error("NodeRandomSource: got fewer bytes than requested");
        const i = new Uint8Array(t);
        for (let s = 0; s < i.length; s++) i[s] = e[s];
        return (0, L_.wipe)(e), i
    }
}
oc.NodeRandomSource = q_;
Object.defineProperty(nc, "__esModule", {
    value: !0
});
nc.SystemRandomSource = void 0;
const j_ = sc,
    $_ = oc;
class z_ {
    constructor() {
        if (this.isAvailable = !1, this.name = "", this._source = new j_.BrowserRandomSource, this._source.isAvailable) {
            this.isAvailable = !0, this.name = "Browser";
            return
        }
        if (this._source = new $_.NodeRandomSource, this._source.isAvailable) {
            this.isAvailable = !0, this.name = "Node";
            return
        }
    }
    randomBytes(t) {
        if (!this.isAvailable) throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(t)
    }
}
nc.SystemRandomSource = z_;
(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.randomStringForEntropy = r.randomString = r.randomUint32 = r.randomBytes = r.defaultRandomSource = void 0;
    const t = nc,
        e = oe,
        i = ii;
    r.defaultRandomSource = new t.SystemRandomSource;

    function s(d, b = r.defaultRandomSource) {
        return b.randomBytes(d)
    }
    r.randomBytes = s;

    function a(d = r.defaultRandomSource) {
        const b = s(4, d),
            E = (0, e.readUint32LE)(b);
        return (0, i.wipe)(b), E
    }
    r.randomUint32 = a;
    const c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    function f(d, b = c, E = r.defaultRandomSource) {
        if (b.length < 2) throw new Error("randomString charset is too short");
        if (b.length > 256) throw new Error("randomString charset is too long");
        let x = "";
        const D = b.length,
            P = 256 - 256 % D;
        for (; d > 0;) {
            const Y = s(Math.ceil(d * 256 / P), E);
            for (let G = 0; G < Y.length && d > 0; G++) {
                const tt = Y[G];
                tt < P && (x += b.charAt(tt % D), d--)
            }(0, i.wipe)(Y)
        }
        return x
    }
    r.randomString = f;

    function p(d, b = c, E = r.defaultRandomSource) {
        const x = Math.ceil(d / (Math.log(b.length) / Math.LN2));
        return f(x, b, E)
    }
    r.randomStringForEntropy = p
})(ho);
var ac = {};
(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var t = oe,
        e = ii;
    r.DIGEST_LENGTH = 32, r.BLOCK_SIZE = 64;
    var i = function() {
        function f() {
            this.digestLength = r.DIGEST_LENGTH, this.blockSize = r.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return f.prototype._initState = function() {
            this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
        }, f.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, f.prototype.clean = function() {
            e.wipe(this._buffer), e.wipe(this._temp), this.reset()
        }, f.prototype.update = function(p, d) {
            if (d === void 0 && (d = p.length), this._finished) throw new Error("SHA256: can't update because hash was finished.");
            var b = 0;
            if (this._bytesHashed += d, this._bufferLength > 0) {
                for (; this._bufferLength < this.blockSize && d > 0;) this._buffer[this._bufferLength++] = p[b++], d--;
                this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (d >= this.blockSize && (b = a(this._temp, this._state, p, b, d), d %= this.blockSize); d > 0;) this._buffer[this._bufferLength++] = p[b++], d--;
            return this
        }, f.prototype.finish = function(p) {
            if (!this._finished) {
                var d = this._bytesHashed,
                    b = this._bufferLength,
                    E = d / 536870912 | 0,
                    x = d << 3,
                    D = d % 64 < 56 ? 64 : 128;
                this._buffer[b] = 128;
                for (var P = b + 1; P < D - 8; P++) this._buffer[P] = 0;
                t.writeUint32BE(E, this._buffer, D - 8), t.writeUint32BE(x, this._buffer, D - 4), a(this._temp, this._state, this._buffer, 0, D), this._finished = !0
            }
            for (var P = 0; P < this.digestLength / 4; P++) t.writeUint32BE(this._state[P], p, P * 4);
            return this
        }, f.prototype.digest = function() {
            var p = new Uint8Array(this.digestLength);
            return this.finish(p), p
        }, f.prototype.saveState = function() {
            if (this._finished) throw new Error("SHA256: cannot save finished state");
            return {
                state: new Int32Array(this._state),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, f.prototype.restoreState = function(p) {
            return this._state.set(p.state), this._bufferLength = p.bufferLength, p.buffer && this._buffer.set(p.buffer), this._bytesHashed = p.bytesHashed, this._finished = !1, this
        }, f.prototype.cleanSavedState = function(p) {
            e.wipe(p.state), p.buffer && e.wipe(p.buffer), p.bufferLength = 0, p.bytesHashed = 0
        }, f
    }();
    r.SHA256 = i;
    var s = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

    function a(f, p, d, b, E) {
        for (; E >= 64;) {
            for (var x = p[0], D = p[1], P = p[2], Y = p[3], G = p[4], tt = p[5], K = p[6], V = p[7], L = 0; L < 16; L++) {
                var $ = b + L * 4;
                f[L] = t.readUint32BE(d, $)
            }
            for (var L = 16; L < 64; L++) {
                var z = f[L - 2],
                    y = (z >>> 17 | z << 32 - 17) ^ (z >>> 19 | z << 32 - 19) ^ z >>> 10;
                z = f[L - 15];
                var T = (z >>> 7 | z << 32 - 7) ^ (z >>> 18 | z << 32 - 18) ^ z >>> 3;
                f[L] = (y + f[L - 7] | 0) + (T + f[L - 16] | 0)
            }
            for (var L = 0; L < 64; L++) {
                var y = (((G >>> 6 | G << 26) ^ (G >>> 11 | G << 21) ^ (G >>> 25 | G << 7)) + (G & tt ^ ~G & K) | 0) + (V + (s[L] + f[L] | 0) | 0) | 0,
                    T = ((x >>> 2 | x << 32 - 2) ^ (x >>> 13 | x << 32 - 13) ^ (x >>> 22 | x << 32 - 22)) + (x & D ^ x & P ^ D & P) | 0;
                V = K, K = tt, tt = G, G = Y + y | 0, Y = P, P = D, D = x, x = y + T | 0
            }
            p[0] += x, p[1] += D, p[2] += P, p[3] += Y, p[4] += G, p[5] += tt, p[6] += K, p[7] += V, b += 64, E -= 64
        }
        return b
    }

    function c(f) {
        var p = new i;
        p.update(f);
        var d = p.digest();
        return p.clean(), d
    }
    r.hash = c
})(ac);
var zl = {};
(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.sharedKey = r.generateKeyPair = r.generateKeyPairFromSeed = r.scalarMultBase = r.scalarMult = r.SHARED_KEY_LENGTH = r.SECRET_KEY_LENGTH = r.PUBLIC_KEY_LENGTH = void 0;
    const t = ho,
        e = ii;
    r.PUBLIC_KEY_LENGTH = 32, r.SECRET_KEY_LENGTH = 32, r.SHARED_KEY_LENGTH = 32;

    function i(L) {
        const $ = new Float64Array(16);
        if (L)
            for (let z = 0; z < L.length; z++) $[z] = L[z];
        return $
    }
    const s = new Uint8Array(32);
    s[0] = 9;
    const a = i([56129, 1]);

    function c(L) {
        let $ = 1;
        for (let z = 0; z < 16; z++) {
            let y = L[z] + $ + 65535;
            $ = Math.floor(y / 65536), L[z] = y - $ * 65536
        }
        L[0] += $ - 1 + 37 * ($ - 1)
    }

    function f(L, $, z) {
        const y = ~(z - 1);
        for (let T = 0; T < 16; T++) {
            const nt = y & (L[T] ^ $[T]);
            L[T] ^= nt, $[T] ^= nt
        }
    }

    function p(L, $) {
        const z = i(),
            y = i();
        for (let T = 0; T < 16; T++) y[T] = $[T];
        c(y), c(y), c(y);
        for (let T = 0; T < 2; T++) {
            z[0] = y[0] - 65517;
            for (let ft = 1; ft < 15; ft++) z[ft] = y[ft] - 65535 - (z[ft - 1] >> 16 & 1), z[ft - 1] &= 65535;
            z[15] = y[15] - 32767 - (z[14] >> 16 & 1);
            const nt = z[15] >> 16 & 1;
            z[14] &= 65535, f(y, z, 1 - nt)
        }
        for (let T = 0; T < 16; T++) L[2 * T] = y[T] & 255, L[2 * T + 1] = y[T] >> 8
    }

    function d(L, $) {
        for (let z = 0; z < 16; z++) L[z] = $[2 * z] + ($[2 * z + 1] << 8);
        L[15] &= 32767
    }

    function b(L, $, z) {
        for (let y = 0; y < 16; y++) L[y] = $[y] + z[y]
    }

    function E(L, $, z) {
        for (let y = 0; y < 16; y++) L[y] = $[y] - z[y]
    }

    function x(L, $, z) {
        let y, T, nt = 0,
            ft = 0,
            lt = 0,
            mt = 0,
            l = 0,
            h = 0,
            w = 0,
            S = 0,
            M = 0,
            O = 0,
            F = 0,
            I = 0,
            g = 0,
            N = 0,
            it = 0,
            dt = 0,
            _ = 0,
            Z = 0,
            U = 0,
            q = 0,
            k = 0,
            m = 0,
            B = 0,
            et = 0,
            ct = 0,
            at = 0,
            Mt = 0,
            Pt = 0,
            It = 0,
            Ee = 0,
            $t = 0,
            xt = z[0],
            Ut = z[1],
            _t = z[2],
            Et = z[3],
            Vt = z[4],
            yt = z[5],
            At = z[6],
            Bt = z[7],
            wt = z[8],
            Ct = z[9],
            Lt = z[10],
            Ot = z[11],
            Nt = z[12],
            se = z[13],
            Tt = z[14],
            Rt = z[15];
        y = $[0], nt += y * xt, ft += y * Ut, lt += y * _t, mt += y * Et, l += y * Vt, h += y * yt, w += y * At, S += y * Bt, M += y * wt, O += y * Ct, F += y * Lt, I += y * Ot, g += y * Nt, N += y * se, it += y * Tt, dt += y * Rt, y = $[1], ft += y * xt, lt += y * Ut, mt += y * _t, l += y * Et, h += y * Vt, w += y * yt, S += y * At, M += y * Bt, O += y * wt, F += y * Ct, I += y * Lt, g += y * Ot, N += y * Nt, it += y * se, dt += y * Tt, _ += y * Rt, y = $[2], lt += y * xt, mt += y * Ut, l += y * _t, h += y * Et, w += y * Vt, S += y * yt, M += y * At, O += y * Bt, F += y * wt, I += y * Ct, g += y * Lt, N += y * Ot, it += y * Nt, dt += y * se, _ += y * Tt, Z += y * Rt, y = $[3], mt += y * xt, l += y * Ut, h += y * _t, w += y * Et, S += y * Vt, M += y * yt, O += y * At, F += y * Bt, I += y * wt, g += y * Ct, N += y * Lt, it += y * Ot, dt += y * Nt, _ += y * se, Z += y * Tt, U += y * Rt, y = $[4], l += y * xt, h += y * Ut, w += y * _t, S += y * Et, M += y * Vt, O += y * yt, F += y * At, I += y * Bt, g += y * wt, N += y * Ct, it += y * Lt, dt += y * Ot, _ += y * Nt, Z += y * se, U += y * Tt, q += y * Rt, y = $[5], h += y * xt, w += y * Ut, S += y * _t, M += y * Et, O += y * Vt, F += y * yt, I += y * At, g += y * Bt, N += y * wt, it += y * Ct, dt += y * Lt, _ += y * Ot, Z += y * Nt, U += y * se, q += y * Tt, k += y * Rt, y = $[6], w += y * xt, S += y * Ut, M += y * _t, O += y * Et, F += y * Vt, I += y * yt, g += y * At, N += y * Bt, it += y * wt, dt += y * Ct, _ += y * Lt, Z += y * Ot, U += y * Nt, q += y * se, k += y * Tt, m += y * Rt, y = $[7], S += y * xt, M += y * Ut, O += y * _t, F += y * Et, I += y * Vt, g += y * yt, N += y * At, it += y * Bt, dt += y * wt, _ += y * Ct, Z += y * Lt, U += y * Ot, q += y * Nt, k += y * se, m += y * Tt, B += y * Rt, y = $[8], M += y * xt, O += y * Ut, F += y * _t, I += y * Et, g += y * Vt, N += y * yt, it += y * At, dt += y * Bt, _ += y * wt, Z += y * Ct, U += y * Lt, q += y * Ot, k += y * Nt, m += y * se, B += y * Tt, et += y * Rt, y = $[9], O += y * xt, F += y * Ut, I += y * _t, g += y * Et, N += y * Vt, it += y * yt, dt += y * At, _ += y * Bt, Z += y * wt, U += y * Ct, q += y * Lt, k += y * Ot, m += y * Nt, B += y * se, et += y * Tt, ct += y * Rt, y = $[10], F += y * xt, I += y * Ut, g += y * _t, N += y * Et, it += y * Vt, dt += y * yt, _ += y * At, Z += y * Bt, U += y * wt, q += y * Ct, k += y * Lt, m += y * Ot, B += y * Nt, et += y * se, ct += y * Tt, at += y * Rt, y = $[11], I += y * xt, g += y * Ut, N += y * _t, it += y * Et, dt += y * Vt, _ += y * yt, Z += y * At, U += y * Bt, q += y * wt, k += y * Ct, m += y * Lt, B += y * Ot, et += y * Nt, ct += y * se, at += y * Tt, Mt += y * Rt, y = $[12], g += y * xt, N += y * Ut, it += y * _t, dt += y * Et, _ += y * Vt, Z += y * yt, U += y * At, q += y * Bt, k += y * wt, m += y * Ct, B += y * Lt, et += y * Ot, ct += y * Nt, at += y * se, Mt += y * Tt, Pt += y * Rt, y = $[13], N += y * xt, it += y * Ut, dt += y * _t, _ += y * Et, Z += y * Vt, U += y * yt, q += y * At, k += y * Bt, m += y * wt, B += y * Ct, et += y * Lt, ct += y * Ot, at += y * Nt, Mt += y * se, Pt += y * Tt, It += y * Rt, y = $[14], it += y * xt, dt += y * Ut, _ += y * _t, Z += y * Et, U += y * Vt, q += y * yt, k += y * At, m += y * Bt, B += y * wt, et += y * Ct, ct += y * Lt, at += y * Ot, Mt += y * Nt, Pt += y * se, It += y * Tt, Ee += y * Rt, y = $[15], dt += y * xt, _ += y * Ut, Z += y * _t, U += y * Et, q += y * Vt, k += y * yt, m += y * At, B += y * Bt, et += y * wt, ct += y * Ct, at += y * Lt, Mt += y * Ot, Pt += y * Nt, It += y * se, Ee += y * Tt, $t += y * Rt, nt += 38 * _, ft += 38 * Z, lt += 38 * U, mt += 38 * q, l += 38 * k, h += 38 * m, w += 38 * B, S += 38 * et, M += 38 * ct, O += 38 * at, F += 38 * Mt, I += 38 * Pt, g += 38 * It, N += 38 * Ee, it += 38 * $t, T = 1, y = nt + T + 65535, T = Math.floor(y / 65536), nt = y - T * 65536, y = ft + T + 65535, T = Math.floor(y / 65536), ft = y - T * 65536, y = lt + T + 65535, T = Math.floor(y / 65536), lt = y - T * 65536, y = mt + T + 65535, T = Math.floor(y / 65536), mt = y - T * 65536, y = l + T + 65535, T = Math.floor(y / 65536), l = y - T * 65536, y = h + T + 65535, T = Math.floor(y / 65536), h = y - T * 65536, y = w + T + 65535, T = Math.floor(y / 65536), w = y - T * 65536, y = S + T + 65535, T = Math.floor(y / 65536), S = y - T * 65536, y = M + T + 65535, T = Math.floor(y / 65536), M = y - T * 65536, y = O + T + 65535, T = Math.floor(y / 65536), O = y - T * 65536, y = F + T + 65535, T = Math.floor(y / 65536), F = y - T * 65536, y = I + T + 65535, T = Math.floor(y / 65536), I = y - T * 65536, y = g + T + 65535, T = Math.floor(y / 65536), g = y - T * 65536, y = N + T + 65535, T = Math.floor(y / 65536), N = y - T * 65536, y = it + T + 65535, T = Math.floor(y / 65536), it = y - T * 65536, y = dt + T + 65535, T = Math.floor(y / 65536), dt = y - T * 65536, nt += T - 1 + 37 * (T - 1), T = 1, y = nt + T + 65535, T = Math.floor(y / 65536), nt = y - T * 65536, y = ft + T + 65535, T = Math.floor(y / 65536), ft = y - T * 65536, y = lt + T + 65535, T = Math.floor(y / 65536), lt = y - T * 65536, y = mt + T + 65535, T = Math.floor(y / 65536), mt = y - T * 65536, y = l + T + 65535, T = Math.floor(y / 65536), l = y - T * 65536, y = h + T + 65535, T = Math.floor(y / 65536), h = y - T * 65536, y = w + T + 65535, T = Math.floor(y / 65536), w = y - T * 65536, y = S + T + 65535, T = Math.floor(y / 65536), S = y - T * 65536, y = M + T + 65535, T = Math.floor(y / 65536), M = y - T * 65536, y = O + T + 65535, T = Math.floor(y / 65536), O = y - T * 65536, y = F + T + 65535, T = Math.floor(y / 65536), F = y - T * 65536, y = I + T + 65535, T = Math.floor(y / 65536), I = y - T * 65536, y = g + T + 65535, T = Math.floor(y / 65536), g = y - T * 65536, y = N + T + 65535, T = Math.floor(y / 65536), N = y - T * 65536, y = it + T + 65535, T = Math.floor(y / 65536), it = y - T * 65536, y = dt + T + 65535, T = Math.floor(y / 65536), dt = y - T * 65536, nt += T - 1 + 37 * (T - 1), L[0] = nt, L[1] = ft, L[2] = lt, L[3] = mt, L[4] = l, L[5] = h, L[6] = w, L[7] = S, L[8] = M, L[9] = O, L[10] = F, L[11] = I, L[12] = g, L[13] = N, L[14] = it, L[15] = dt
    }

    function D(L, $) {
        x(L, $, $)
    }

    function P(L, $) {
        const z = i();
        for (let y = 0; y < 16; y++) z[y] = $[y];
        for (let y = 253; y >= 0; y--) D(z, z), y !== 2 && y !== 4 && x(z, z, $);
        for (let y = 0; y < 16; y++) L[y] = z[y]
    }

    function Y(L, $) {
        const z = new Uint8Array(32),
            y = new Float64Array(80),
            T = i(),
            nt = i(),
            ft = i(),
            lt = i(),
            mt = i(),
            l = i();
        for (let M = 0; M < 31; M++) z[M] = L[M];
        z[31] = L[31] & 127 | 64, z[0] &= 248, d(y, $);
        for (let M = 0; M < 16; M++) nt[M] = y[M];
        T[0] = lt[0] = 1;
        for (let M = 254; M >= 0; --M) {
            const O = z[M >>> 3] >>> (M & 7) & 1;
            f(T, nt, O), f(ft, lt, O), b(mt, T, ft), E(T, T, ft), b(ft, nt, lt), E(nt, nt, lt), D(lt, mt), D(l, T), x(T, ft, T), x(ft, nt, mt), b(mt, T, ft), E(T, T, ft), D(nt, T), E(ft, lt, l), x(T, ft, a), b(T, T, lt), x(ft, ft, T), x(T, lt, l), x(lt, nt, y), D(nt, mt), f(T, nt, O), f(ft, lt, O)
        }
        for (let M = 0; M < 16; M++) y[M + 16] = T[M], y[M + 32] = ft[M], y[M + 48] = nt[M], y[M + 64] = lt[M];
        const h = y.subarray(32),
            w = y.subarray(16);
        P(h, h), x(w, w, h);
        const S = new Uint8Array(32);
        return p(S, w), S
    }
    r.scalarMult = Y;

    function G(L) {
        return Y(L, s)
    }
    r.scalarMultBase = G;

    function tt(L) {
        if (L.length !== r.SECRET_KEY_LENGTH) throw new Error(`x25519: seed must be ${r.SECRET_KEY_LENGTH} bytes`);
        const $ = new Uint8Array(L);
        return {
            publicKey: G($),
            secretKey: $
        }
    }
    r.generateKeyPairFromSeed = tt;

    function K(L) {
        const $ = (0, t.randomBytes)(32, L),
            z = tt($);
        return (0, e.wipe)($), z
    }
    r.generateKeyPair = K;

    function V(L, $, z = !1) {
        if (L.length !== r.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect secret key length");
        if ($.length !== r.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect public key length");
        const y = Y(L, $);
        if (z) {
            let T = 0;
            for (let nt = 0; nt < y.length; nt++) T |= y[nt];
            if (T === 0) throw new Error("X25519: invalid shared key")
        }
        return y
    }
    r.sharedKey = V
})(zl);

function q1(r = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(r) : new Uint8Array(r)
}

function ml(r, t) {
    t || (t = r.reduce((s, a) => s + a.length, 0));
    const e = q1(t);
    let i = 0;
    for (const s of r) e.set(s, i), i += s.length;
    return e
}

function k_(r, t) {
    if (r.length >= 255) throw new TypeError("Alphabet too long");
    for (var e = new Uint8Array(256), i = 0; i < e.length; i++) e[i] = 255;
    for (var s = 0; s < r.length; s++) {
        var a = r.charAt(s),
            c = a.charCodeAt(0);
        if (e[c] !== 255) throw new TypeError(a + " is ambiguous");
        e[c] = s
    }
    var f = r.length,
        p = r.charAt(0),
        d = Math.log(f) / Math.log(256),
        b = Math.log(256) / Math.log(f);

    function E(P) {
        if (P instanceof Uint8Array || (ArrayBuffer.isView(P) ? P = new Uint8Array(P.buffer, P.byteOffset, P.byteLength) : Array.isArray(P) && (P = Uint8Array.from(P))), !(P instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (P.length === 0) return "";
        for (var Y = 0, G = 0, tt = 0, K = P.length; tt !== K && P[tt] === 0;) tt++, Y++;
        for (var V = (K - tt) * b + 1 >>> 0, L = new Uint8Array(V); tt !== K;) {
            for (var $ = P[tt], z = 0, y = V - 1;
                ($ !== 0 || z < G) && y !== -1; y--, z++) $ += 256 * L[y] >>> 0, L[y] = $ % f >>> 0, $ = $ / f >>> 0;
            if ($ !== 0) throw new Error("Non-zero carry");
            G = z, tt++
        }
        for (var T = V - G; T !== V && L[T] === 0;) T++;
        for (var nt = p.repeat(Y); T < V; ++T) nt += r.charAt(L[T]);
        return nt
    }

    function x(P) {
        if (typeof P != "string") throw new TypeError("Expected String");
        if (P.length === 0) return new Uint8Array;
        var Y = 0;
        if (P[Y] !== " ") {
            for (var G = 0, tt = 0; P[Y] === p;) G++, Y++;
            for (var K = (P.length - Y) * d + 1 >>> 0, V = new Uint8Array(K); P[Y];) {
                var L = e[P.charCodeAt(Y)];
                if (L === 255) return;
                for (var $ = 0, z = K - 1;
                    (L !== 0 || $ < tt) && z !== -1; z--, $++) L += f * V[z] >>> 0, V[z] = L % 256 >>> 0, L = L / 256 >>> 0;
                if (L !== 0) throw new Error("Non-zero carry");
                tt = $, Y++
            }
            if (P[Y] !== " ") {
                for (var y = K - tt; y !== K && V[y] === 0;) y++;
                for (var T = new Uint8Array(G + (K - y)), nt = G; y !== K;) T[nt++] = V[y++];
                return T
            }
        }
    }

    function D(P) {
        var Y = x(P);
        if (Y) return Y;
        throw new Error(`Non-${t} character`)
    }
    return {
        encode: E,
        decodeUnsafe: x,
        decode: D
    }
}
var H_ = k_,
    K_ = H_;
const V_ = r => {
        if (r instanceof Uint8Array && r.constructor.name === "Uint8Array") return r;
        if (r instanceof ArrayBuffer) return new Uint8Array(r);
        if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
        throw new Error("Unknown type, must be binary type")
    },
    G_ = r => new TextEncoder().encode(r),
    W_ = r => new TextDecoder().decode(r);
class Y_ {
    constructor(t, e, i) {
        this.name = t, this.prefix = e, this.baseEncode = i
    }
    encode(t) {
        if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class Q_ {
    constructor(t, e, i) {
        if (this.name = t, this.prefix = e, e.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = e.codePointAt(0), this.baseDecode = i
    }
    decode(t) {
        if (typeof t == "string") {
            if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(t.slice(this.prefix.length))
        } else throw Error("Can only multibase decode strings")
    }
    or(t) {
        return j1(this, t)
    }
}
class J_ {
    constructor(t) {
        this.decoders = t
    }
    or(t) {
        return j1(this, t)
    }
    decode(t) {
        const e = t[0],
            i = this.decoders[e];
        if (i) return i.decode(t);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const j1 = (r, t) => new J_({ ...r.decoders || {
        [r.prefix]: r
    },
    ...t.decoders || {
        [t.prefix]: t
    }
});
class X_ {
    constructor(t, e, i, s) {
        this.name = t, this.prefix = e, this.baseEncode = i, this.baseDecode = s, this.encoder = new Y_(t, e, i), this.decoder = new Q_(t, e, s)
    }
    encode(t) {
        return this.encoder.encode(t)
    }
    decode(t) {
        return this.decoder.decode(t)
    }
}
const uc = ({
        name: r,
        prefix: t,
        encode: e,
        decode: i
    }) => new X_(r, t, e, i),
    ca = ({
        prefix: r,
        name: t,
        alphabet: e
    }) => {
        const {
            encode: i,
            decode: s
        } = K_(e, t);
        return uc({
            prefix: r,
            name: t,
            encode: i,
            decode: a => V_(s(a))
        })
    },
    Z_ = (r, t, e, i) => {
        const s = {};
        for (let b = 0; b < t.length; ++b) s[t[b]] = b;
        let a = r.length;
        for (; r[a - 1] === "=";) --a;
        const c = new Uint8Array(a * e / 8 | 0);
        let f = 0,
            p = 0,
            d = 0;
        for (let b = 0; b < a; ++b) {
            const E = s[r[b]];
            if (E === void 0) throw new SyntaxError(`Non-${i} character`);
            p = p << e | E, f += e, f >= 8 && (f -= 8, c[d++] = 255 & p >> f)
        }
        if (f >= e || 255 & p << 8 - f) throw new SyntaxError("Unexpected end of data");
        return c
    },
    tE = (r, t, e) => {
        const i = t[t.length - 1] === "=",
            s = (1 << e) - 1;
        let a = "",
            c = 0,
            f = 0;
        for (let p = 0; p < r.length; ++p)
            for (f = f << 8 | r[p], c += 8; c > e;) c -= e, a += t[s & f >> c];
        if (c && (a += t[s & f << e - c]), i)
            for (; a.length * e & 7;) a += "=";
        return a
    },
    gr = ({
        name: r,
        prefix: t,
        bitsPerChar: e,
        alphabet: i
    }) => uc({
        prefix: t,
        name: r,
        encode(s) {
            return tE(s, i, e)
        },
        decode(s) {
            return Z_(s, i, e, r)
        }
    }),
    eE = uc({
        prefix: "\0",
        name: "identity",
        encode: r => W_(r),
        decode: r => G_(r)
    }),
    rE = Object.freeze(Object.defineProperty({
        __proto__: null,
        identity: eE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    iE = gr({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1
    }),
    nE = Object.freeze(Object.defineProperty({
        __proto__: null,
        base2: iE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    sE = gr({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3
    }),
    oE = Object.freeze(Object.defineProperty({
        __proto__: null,
        base8: sE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    aE = ca({
        prefix: "9",
        name: "base10",
        alphabet: "0123456789"
    }),
    uE = Object.freeze(Object.defineProperty({
        __proto__: null,
        base10: aE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    cE = gr({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
    }),
    hE = gr({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
    }),
    lE = Object.freeze(Object.defineProperty({
        __proto__: null,
        base16: cE,
        base16upper: hE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    fE = gr({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
    }),
    dE = gr({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
    }),
    pE = gr({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
    }),
    gE = gr({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
    }),
    mE = gr({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
    }),
    vE = gr({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
    }),
    yE = gr({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
    }),
    wE = gr({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
    }),
    bE = gr({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
    }),
    _E = Object.freeze(Object.defineProperty({
        __proto__: null,
        base32: fE,
        base32hex: mE,
        base32hexpad: yE,
        base32hexpadupper: wE,
        base32hexupper: vE,
        base32pad: pE,
        base32padupper: gE,
        base32upper: dE,
        base32z: bE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    EE = ca({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }),
    AE = ca({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }),
    SE = Object.freeze(Object.defineProperty({
        __proto__: null,
        base36: EE,
        base36upper: AE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    IE = ca({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }),
    DE = ca({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    }),
    xE = Object.freeze(Object.defineProperty({
        __proto__: null,
        base58btc: IE,
        base58flickr: DE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ME = gr({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
    }),
    CE = gr({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
    }),
    PE = gr({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
    }),
    OE = gr({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
    }),
    NE = Object.freeze(Object.defineProperty({
        __proto__: null,
        base64: ME,
        base64pad: CE,
        base64url: PE,
        base64urlpad: OE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $1 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
    RE = $1.reduce((r, t, e) => (r[e] = t, r), []),
    TE = $1.reduce((r, t, e) => (r[t.codePointAt(0)] = e, r), []);

function FE(r) {
    return r.reduce((t, e) => (t += RE[e], t), "")
}

function BE(r) {
    const t = [];
    for (const e of r) {
        const i = TE[e.codePointAt(0)];
        if (i === void 0) throw new Error(`Non-base256emoji character: ${e}`);
        t.push(i)
    }
    return new Uint8Array(t)
}
const UE = uc({
        prefix: "🚀",
        name: "base256emoji",
        encode: FE,
        decode: BE
    }),
    LE = Object.freeze(Object.defineProperty({
        __proto__: null,
        base256emoji: UE
    }, Symbol.toStringTag, {
        value: "Module"
    }));
new TextEncoder;
new TextDecoder;
const x0 = { ...rE,
    ...nE,
    ...oE,
    ...uE,
    ...lE,
    ..._E,
    ...SE,
    ...xE,
    ...NE,
    ...LE
};

function z1(r, t, e, i) {
    return {
        name: r,
        prefix: t,
        encoder: {
            name: r,
            prefix: t,
            encode: e
        },
        decoder: {
            decode: i
        }
    }
}
const M0 = z1("utf8", "u", r => "u" + new TextDecoder("utf8").decode(r), r => new TextEncoder().encode(r.substring(1))),
    Ph = z1("ascii", "a", r => {
        let t = "a";
        for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
        return t
    }, r => {
        r = r.substring(1);
        const t = q1(r.length);
        for (let e = 0; e < r.length; e++) t[e] = r.charCodeAt(e);
        return t
    }),
    k1 = {
        utf8: M0,
        "utf-8": M0,
        hex: x0.base16,
        latin1: Ph,
        ascii: Ph,
        binary: Ph,
        ...x0
    };

function kr(r, t = "utf8") {
    const e = k1[t];
    if (!e) throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r, "utf8") : e.decoder.decode(`${e.prefix}${r}`)
}

function Nr(r, t = "utf8") {
    const e = k1[t];
    if (!e) throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString("utf8") : e.encoder.encode(r).substring(1)
}
const qE = {
        waku: {
            publish: "waku_publish",
            batchPublish: "waku_batchPublish",
            subscribe: "waku_subscribe",
            batchSubscribe: "waku_batchSubscribe",
            subscription: "waku_subscription",
            unsubscribe: "waku_unsubscribe",
            batchUnsubscribe: "waku_batchUnsubscribe",
            batchFetchMessages: "waku_batchFetchMessages"
        },
        irn: {
            publish: "irn_publish",
            batchPublish: "irn_batchPublish",
            subscribe: "irn_subscribe",
            batchSubscribe: "irn_batchSubscribe",
            subscription: "irn_subscription",
            unsubscribe: "irn_unsubscribe",
            batchUnsubscribe: "irn_batchUnsubscribe",
            batchFetchMessages: "irn_batchFetchMessages"
        },
        iridium: {
            publish: "iridium_publish",
            batchPublish: "iridium_batchPublish",
            subscribe: "iridium_subscribe",
            batchSubscribe: "iridium_batchSubscribe",
            subscription: "iridium_subscription",
            unsubscribe: "iridium_unsubscribe",
            batchUnsubscribe: "iridium_batchUnsubscribe",
            batchFetchMessages: "iridium_batchFetchMessages"
        }
    },
    jE = ":";

function Nu(r) {
    const [t, e] = r.split(jE);
    return {
        namespace: t,
        reference: e
    }
}

function C0(r, t = []) {
    const e = [];
    return Object.keys(r).forEach(i => {
        if (t.length && !t.includes(i)) return;
        const s = r[i];
        e.push(...s.accounts)
    }), e
}

function H1(r, t) {
    return r.includes(":") ? [r] : t.chains || []
}
var $E = Object.defineProperty,
    P0 = Object.getOwnPropertySymbols,
    zE = Object.prototype.hasOwnProperty,
    kE = Object.prototype.propertyIsEnumerable,
    O0 = (r, t, e) => t in r ? $E(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    N0 = (r, t) => {
        for (var e in t || (t = {})) zE.call(t, e) && O0(r, e, t[e]);
        if (P0)
            for (var e of P0(t)) kE.call(t, e) && O0(r, e, t[e]);
        return r
    };
const HE = "ReactNative",
    ti = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown"
    },
    KE = "js";

function ea() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
}

function lo() {
    return !Ul() && !!Ll() && navigator.product === HE
}

function fo() {
    return !ea() && !!Ll() && !!Ul()
}

function ha() {
    return lo() ? ti.reactNative : ea() ? ti.node : fo() ? ti.browser : ti.unknown
}

function VE() {
    var r;
    try {
        return lo() && typeof global < "u" && typeof(global == null ? void 0 : global.Application) < "u" ? (r = global.Application) == null ? void 0 : r.applicationId : void 0
    } catch {
        return
    }
}

function GE(r, t) {
    let e = ta.parse(r);
    return e = N0(N0({}, e), t), r = ta.stringify(e), r
}

function WE() {
    return D1() || {
        name: "",
        description: "",
        url: "",
        icons: [""]
    }
}

function YE() {
    if (ha() === ti.reactNative && typeof global < "u" && typeof(global == null ? void 0 : global.Platform) < "u") {
        const {
            OS: e,
            Version: i
        } = global.Platform;
        return [e, i].join("-")
    }
    const r = o6();
    if (r === null) return "unknown";
    const t = r.os ? r.os.replace(" ", "").toLowerCase() : "unknown";
    return r.type === "browser" ? [t, r.name, r.version].join("-") : [t, r.version].join("-")
}

function QE() {
    var r;
    const t = ha();
    return t === ti.browser ? [t, ((r = I1()) == null ? void 0 : r.host) || "unknown"].join(":") : t
}

function JE(r, t, e) {
    const i = YE(),
        s = QE();
    return [
        [r, t].join("-"), [KE, e].join("-"), i, s
    ].join("/")
}

function XE({
    protocol: r,
    version: t,
    relayUrl: e,
    sdkVersion: i,
    auth: s,
    projectId: a,
    useOnCloseEvent: c,
    bundleId: f
}) {
    const p = e.split("?"),
        d = JE(r, t, i),
        b = {
            auth: s,
            ua: d,
            projectId: a,
            useOnCloseEvent: c || void 0,
            origin: f || void 0
        },
        E = GE(p[1] || "", b);
    return p[0] + "?" + E
}

function bs(r, t) {
    return r.filter(e => t.includes(e)).length === r.length
}

function K1(r) {
    return Object.fromEntries(r.entries())
}

function V1(r) {
    return new Map(Object.entries(r))
}

function ws(r = bt.FIVE_MINUTES, t) {
    const e = bt.toMiliseconds(r || bt.FIVE_MINUTES);
    let i, s, a;
    return {
        resolve: c => {
            a && i && (clearTimeout(a), i(c))
        },
        reject: c => {
            a && s && (clearTimeout(a), s(c))
        },
        done: () => new Promise((c, f) => {
            a = setTimeout(() => {
                f(new Error(t))
            }, e), i = c, s = f
        })
    }
}

function io(r, t, e) {
    return new Promise(async (i, s) => {
        const a = setTimeout(() => s(new Error(e)), t);
        try {
            const c = await r;
            i(c)
        } catch (c) {
            s(c)
        }
        clearTimeout(a)
    })
}

function G1(r, t) {
    if (typeof t == "string" && t.startsWith(`${r}:`)) return t;
    if (r.toLowerCase() === "topic") {
        if (typeof t != "string") throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${t}`
    } else if (r.toLowerCase() === "id") {
        if (typeof t != "number") throw new Error('Value must be "number" for expirer target type: id');
        return `id:${t}`
    }
    throw new Error(`Unknown expirer target type: ${r}`)
}

function ZE(r) {
    return G1("topic", r)
}

function t5(r) {
    return G1("id", r)
}

function W1(r) {
    const [t, e] = r.split(":"), i = {
        id: void 0,
        topic: void 0
    };
    if (t === "topic" && typeof e == "string") i.topic = e;
    else if (t === "id" && Number.isInteger(Number(e))) i.id = Number(e);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${e}`);
    return i
}

function dr(r, t) {
    return bt.fromMiliseconds((t || Date.now()) + bt.toMiliseconds(r))
}

function $n(r) {
    return Date.now() >= bt.toMiliseconds(r)
}

function de(r, t) {
    return `${r}${t?`:${t}`:""}`
}

function Ru(r = [], t = []) {
    return [...new Set([...r, ...t])]
}
async function e5({
    id: r,
    topic: t,
    wcDeepLink: e
}) {
    try {
        if (!e) return;
        let s = (typeof e == "string" ? JSON.parse(e) : e) ? .href;
        if (typeof s != "string") return;
        s.endsWith("/") && (s = s.slice(0, -1));
        const a = `${s}/wc?requestId=${r}&sessionTopic=${t}`,
            c = ha();
        c === ti.browser ? a.startsWith("https://") || a.startsWith("http://") ? window.open(a, "_blank", "noreferrer noopener") : window.open(a, "_self", "noreferrer noopener") : c === ti.reactNative && typeof(global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(a)
    } catch (i) {
        console.error(i)
    }
}
async function r5(r, t) {
    try {
        return await r.getItem(t) || (fo() ? localStorage.getItem(t) : void 0)
    } catch (e) {
        console.error(e)
    }
}
var Y1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function i5(r) {
    var t = r.default;
    if (typeof t == "function") {
        var e = function() {
            return t.apply(this, arguments)
        };
        e.prototype = t.prototype
    } else e = {};
    return Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.keys(r).forEach(function(i) {
        var s = Object.getOwnPropertyDescriptor(r, i);
        Object.defineProperty(e, i, s.get ? s : {
            enumerable: !0,
            get: function() {
                return r[i]
            }
        })
    }), e
}
var Q1 = {
    exports: {}
};
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
(function(r) {
    (function() {
        var t = "input is invalid type",
            e = "finalize already called",
            i = typeof window == "object",
            s = i ? window : {};
        s.JS_SHA3_NO_WINDOW && (i = !1);
        var a = !i && typeof self == "object",
            c = !s.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
        c ? s = Y1 : a && (s = self);
        var f = !s.JS_SHA3_NO_COMMON_JS && !0 && r.exports,
            p = !s.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
            d = "0123456789abcdef".split(""),
            b = [31, 7936, 2031616, 520093696],
            E = [4, 1024, 262144, 67108864],
            x = [1, 256, 65536, 16777216],
            D = [6, 1536, 393216, 100663296],
            P = [0, 8, 16, 24],
            Y = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
            G = [224, 256, 384, 512],
            tt = [128, 256],
            K = ["hex", "buffer", "arrayBuffer", "array", "digest"],
            V = {
                128: 168,
                256: 136
            };
        (s.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(_) {
            return Object.prototype.toString.call(_) === "[object Array]"
        }), p && (s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(_) {
            return typeof _ == "object" && _.buffer && _.buffer.constructor === ArrayBuffer
        });
        for (var L = function(_, Z, U) {
                return function(q) {
                    return new N(_, Z, _).update(q)[U]()
                }
            }, $ = function(_, Z, U) {
                return function(q, k) {
                    return new N(_, Z, k).update(q)[U]()
                }
            }, z = function(_, Z, U) {
                return function(q, k, m, B) {
                    return h["cshake" + _].update(q, k, m, B)[U]()
                }
            }, y = function(_, Z, U) {
                return function(q, k, m, B) {
                    return h["kmac" + _].update(q, k, m, B)[U]()
                }
            }, T = function(_, Z, U, q) {
                for (var k = 0; k < K.length; ++k) {
                    var m = K[k];
                    _[m] = Z(U, q, m)
                }
                return _
            }, nt = function(_, Z) {
                var U = L(_, Z, "hex");
                return U.create = function() {
                    return new N(_, Z, _)
                }, U.update = function(q) {
                    return U.create().update(q)
                }, T(U, L, _, Z)
            }, ft = function(_, Z) {
                var U = $(_, Z, "hex");
                return U.create = function(q) {
                    return new N(_, Z, q)
                }, U.update = function(q, k) {
                    return U.create(k).update(q)
                }, T(U, $, _, Z)
            }, lt = function(_, Z) {
                var U = V[_],
                    q = z(_, Z, "hex");
                return q.create = function(k, m, B) {
                    return !m && !B ? h["shake" + _].create(k) : new N(_, Z, k).bytepad([m, B], U)
                }, q.update = function(k, m, B, et) {
                    return q.create(m, B, et).update(k)
                }, T(q, z, _, Z)
            }, mt = function(_, Z) {
                var U = V[_],
                    q = y(_, Z, "hex");
                return q.create = function(k, m, B) {
                    return new it(_, Z, m).bytepad(["KMAC", B], U).bytepad([k], U)
                }, q.update = function(k, m, B, et) {
                    return q.create(k, B, et).update(m)
                }, T(q, y, _, Z)
            }, l = [{
                name: "keccak",
                padding: x,
                bits: G,
                createMethod: nt
            }, {
                name: "sha3",
                padding: D,
                bits: G,
                createMethod: nt
            }, {
                name: "shake",
                padding: b,
                bits: tt,
                createMethod: ft
            }, {
                name: "cshake",
                padding: E,
                bits: tt,
                createMethod: lt
            }, {
                name: "kmac",
                padding: E,
                bits: tt,
                createMethod: mt
            }], h = {}, w = [], S = 0; S < l.length; ++S)
            for (var M = l[S], O = M.bits, F = 0; F < O.length; ++F) {
                var I = M.name + "_" + O[F];
                if (w.push(I), h[I] = M.createMethod(O[F], M.padding), M.name !== "sha3") {
                    var g = M.name + O[F];
                    w.push(g), h[g] = h[I]
                }
            }

        function N(_, Z, U) {
            this.blocks = [], this.s = [], this.padding = Z, this.outputBits = U, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (_ << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = U >> 5, this.extraBytes = (U & 31) >> 3;
            for (var q = 0; q < 50; ++q) this.s[q] = 0
        }
        N.prototype.update = function(_) {
            if (this.finalized) throw new Error(e);
            var Z, U = typeof _;
            if (U !== "string") {
                if (U === "object") {
                    if (_ === null) throw new Error(t);
                    if (p && _.constructor === ArrayBuffer) _ = new Uint8Array(_);
                    else if (!Array.isArray(_) && (!p || !ArrayBuffer.isView(_))) throw new Error(t)
                } else throw new Error(t);
                Z = !0
            }
            for (var q = this.blocks, k = this.byteCount, m = _.length, B = this.blockCount, et = 0, ct = this.s, at, Mt; et < m;) {
                if (this.reset)
                    for (this.reset = !1, q[0] = this.block, at = 1; at < B + 1; ++at) q[at] = 0;
                if (Z)
                    for (at = this.start; et < m && at < k; ++et) q[at >> 2] |= _[et] << P[at++ & 3];
                else
                    for (at = this.start; et < m && at < k; ++et) Mt = _.charCodeAt(et), Mt < 128 ? q[at >> 2] |= Mt << P[at++ & 3] : Mt < 2048 ? (q[at >> 2] |= (192 | Mt >> 6) << P[at++ & 3], q[at >> 2] |= (128 | Mt & 63) << P[at++ & 3]) : Mt < 55296 || Mt >= 57344 ? (q[at >> 2] |= (224 | Mt >> 12) << P[at++ & 3], q[at >> 2] |= (128 | Mt >> 6 & 63) << P[at++ & 3], q[at >> 2] |= (128 | Mt & 63) << P[at++ & 3]) : (Mt = 65536 + ((Mt & 1023) << 10 | _.charCodeAt(++et) & 1023), q[at >> 2] |= (240 | Mt >> 18) << P[at++ & 3], q[at >> 2] |= (128 | Mt >> 12 & 63) << P[at++ & 3], q[at >> 2] |= (128 | Mt >> 6 & 63) << P[at++ & 3], q[at >> 2] |= (128 | Mt & 63) << P[at++ & 3]);
                if (this.lastByteIndex = at, at >= k) {
                    for (this.start = at - k, this.block = q[B], at = 0; at < B; ++at) ct[at] ^= q[at];
                    dt(ct), this.reset = !0
                } else this.start = at
            }
            return this
        }, N.prototype.encode = function(_, Z) {
            var U = _ & 255,
                q = 1,
                k = [U];
            for (_ = _ >> 8, U = _ & 255; U > 0;) k.unshift(U), _ = _ >> 8, U = _ & 255, ++q;
            return Z ? k.push(q) : k.unshift(q), this.update(k), k.length
        }, N.prototype.encodeString = function(_) {
            var Z, U = typeof _;
            if (U !== "string") {
                if (U === "object") {
                    if (_ === null) throw new Error(t);
                    if (p && _.constructor === ArrayBuffer) _ = new Uint8Array(_);
                    else if (!Array.isArray(_) && (!p || !ArrayBuffer.isView(_))) throw new Error(t)
                } else throw new Error(t);
                Z = !0
            }
            var q = 0,
                k = _.length;
            if (Z) q = k;
            else
                for (var m = 0; m < _.length; ++m) {
                    var B = _.charCodeAt(m);
                    B < 128 ? q += 1 : B < 2048 ? q += 2 : B < 55296 || B >= 57344 ? q += 3 : (B = 65536 + ((B & 1023) << 10 | _.charCodeAt(++m) & 1023), q += 4)
                }
            return q += this.encode(q * 8), this.update(_), q
        }, N.prototype.bytepad = function(_, Z) {
            for (var U = this.encode(Z), q = 0; q < _.length; ++q) U += this.encodeString(_[q]);
            var k = Z - U % Z,
                m = [];
            return m.length = k, this.update(m), this
        }, N.prototype.finalize = function() {
            if (!this.finalized) {
                this.finalized = !0;
                var _ = this.blocks,
                    Z = this.lastByteIndex,
                    U = this.blockCount,
                    q = this.s;
                if (_[Z >> 2] |= this.padding[Z & 3], this.lastByteIndex === this.byteCount)
                    for (_[0] = _[U], Z = 1; Z < U + 1; ++Z) _[Z] = 0;
                for (_[U - 1] |= 2147483648, Z = 0; Z < U; ++Z) q[Z] ^= _[Z];
                dt(q)
            }
        }, N.prototype.toString = N.prototype.hex = function() {
            this.finalize();
            for (var _ = this.blockCount, Z = this.s, U = this.outputBlocks, q = this.extraBytes, k = 0, m = 0, B = "", et; m < U;) {
                for (k = 0; k < _ && m < U; ++k, ++m) et = Z[k], B += d[et >> 4 & 15] + d[et & 15] + d[et >> 12 & 15] + d[et >> 8 & 15] + d[et >> 20 & 15] + d[et >> 16 & 15] + d[et >> 28 & 15] + d[et >> 24 & 15];
                m % _ === 0 && (dt(Z), k = 0)
            }
            return q && (et = Z[k], B += d[et >> 4 & 15] + d[et & 15], q > 1 && (B += d[et >> 12 & 15] + d[et >> 8 & 15]), q > 2 && (B += d[et >> 20 & 15] + d[et >> 16 & 15])), B
        }, N.prototype.arrayBuffer = function() {
            this.finalize();
            var _ = this.blockCount,
                Z = this.s,
                U = this.outputBlocks,
                q = this.extraBytes,
                k = 0,
                m = 0,
                B = this.outputBits >> 3,
                et;
            q ? et = new ArrayBuffer(U + 1 << 2) : et = new ArrayBuffer(B);
            for (var ct = new Uint32Array(et); m < U;) {
                for (k = 0; k < _ && m < U; ++k, ++m) ct[m] = Z[k];
                m % _ === 0 && dt(Z)
            }
            return q && (ct[k] = Z[k], et = et.slice(0, B)), et
        }, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.digest = N.prototype.array = function() {
            this.finalize();
            for (var _ = this.blockCount, Z = this.s, U = this.outputBlocks, q = this.extraBytes, k = 0, m = 0, B = [], et, ct; m < U;) {
                for (k = 0; k < _ && m < U; ++k, ++m) et = m << 2, ct = Z[k], B[et] = ct & 255, B[et + 1] = ct >> 8 & 255, B[et + 2] = ct >> 16 & 255, B[et + 3] = ct >> 24 & 255;
                m % _ === 0 && dt(Z)
            }
            return q && (et = m << 2, ct = Z[k], B[et] = ct & 255, q > 1 && (B[et + 1] = ct >> 8 & 255), q > 2 && (B[et + 2] = ct >> 16 & 255)), B
        };

        function it(_, Z, U) {
            N.call(this, _, Z, U)
        }
        it.prototype = new N, it.prototype.finalize = function() {
            return this.encode(this.outputBits, !0), N.prototype.finalize.call(this)
        };
        var dt = function(_) {
            var Z, U, q, k, m, B, et, ct, at, Mt, Pt, It, Ee, $t, xt, Ut, _t, Et, Vt, yt, At, Bt, wt, Ct, Lt, Ot, Nt, se, Tt, Rt, He, ue, pe, Ke, ye, _e, _r, Gt, zt, Ie, Wt, Kt, Ae, Jt, Xt, De, Zt, Yt, Me, Qt, qt, Re, te, Ce, Ii, Pe, le, ni, si, oi, ai, ui, or;
            for (q = 0; q < 48; q += 2) k = _[0] ^ _[10] ^ _[20] ^ _[30] ^ _[40], m = _[1] ^ _[11] ^ _[21] ^ _[31] ^ _[41], B = _[2] ^ _[12] ^ _[22] ^ _[32] ^ _[42], et = _[3] ^ _[13] ^ _[23] ^ _[33] ^ _[43], ct = _[4] ^ _[14] ^ _[24] ^ _[34] ^ _[44], at = _[5] ^ _[15] ^ _[25] ^ _[35] ^ _[45], Mt = _[6] ^ _[16] ^ _[26] ^ _[36] ^ _[46], Pt = _[7] ^ _[17] ^ _[27] ^ _[37] ^ _[47], It = _[8] ^ _[18] ^ _[28] ^ _[38] ^ _[48], Ee = _[9] ^ _[19] ^ _[29] ^ _[39] ^ _[49], Z = It ^ (B << 1 | et >>> 31), U = Ee ^ (et << 1 | B >>> 31), _[0] ^= Z, _[1] ^= U, _[10] ^= Z, _[11] ^= U, _[20] ^= Z, _[21] ^= U, _[30] ^= Z, _[31] ^= U, _[40] ^= Z, _[41] ^= U, Z = k ^ (ct << 1 | at >>> 31), U = m ^ (at << 1 | ct >>> 31), _[2] ^= Z, _[3] ^= U, _[12] ^= Z, _[13] ^= U, _[22] ^= Z, _[23] ^= U, _[32] ^= Z, _[33] ^= U, _[42] ^= Z, _[43] ^= U, Z = B ^ (Mt << 1 | Pt >>> 31), U = et ^ (Pt << 1 | Mt >>> 31), _[4] ^= Z, _[5] ^= U, _[14] ^= Z, _[15] ^= U, _[24] ^= Z, _[25] ^= U, _[34] ^= Z, _[35] ^= U, _[44] ^= Z, _[45] ^= U, Z = ct ^ (It << 1 | Ee >>> 31), U = at ^ (Ee << 1 | It >>> 31), _[6] ^= Z, _[7] ^= U, _[16] ^= Z, _[17] ^= U, _[26] ^= Z, _[27] ^= U, _[36] ^= Z, _[37] ^= U, _[46] ^= Z, _[47] ^= U, Z = Mt ^ (k << 1 | m >>> 31), U = Pt ^ (m << 1 | k >>> 31), _[8] ^= Z, _[9] ^= U, _[18] ^= Z, _[19] ^= U, _[28] ^= Z, _[29] ^= U, _[38] ^= Z, _[39] ^= U, _[48] ^= Z, _[49] ^= U, $t = _[0], xt = _[1], De = _[11] << 4 | _[10] >>> 28, Zt = _[10] << 4 | _[11] >>> 28, se = _[20] << 3 | _[21] >>> 29, Tt = _[21] << 3 | _[20] >>> 29, oi = _[31] << 9 | _[30] >>> 23, ai = _[30] << 9 | _[31] >>> 23, Kt = _[40] << 18 | _[41] >>> 14, Ae = _[41] << 18 | _[40] >>> 14, Ke = _[2] << 1 | _[3] >>> 31, ye = _[3] << 1 | _[2] >>> 31, Ut = _[13] << 12 | _[12] >>> 20, _t = _[12] << 12 | _[13] >>> 20, Yt = _[22] << 10 | _[23] >>> 22, Me = _[23] << 10 | _[22] >>> 22, Rt = _[33] << 13 | _[32] >>> 19, He = _[32] << 13 | _[33] >>> 19, ui = _[42] << 2 | _[43] >>> 30, or = _[43] << 2 | _[42] >>> 30, Ce = _[5] << 30 | _[4] >>> 2, Ii = _[4] << 30 | _[5] >>> 2, _e = _[14] << 6 | _[15] >>> 26, _r = _[15] << 6 | _[14] >>> 26, Et = _[25] << 11 | _[24] >>> 21, Vt = _[24] << 11 | _[25] >>> 21, Qt = _[34] << 15 | _[35] >>> 17, qt = _[35] << 15 | _[34] >>> 17, ue = _[45] << 29 | _[44] >>> 3, pe = _[44] << 29 | _[45] >>> 3, Ct = _[6] << 28 | _[7] >>> 4, Lt = _[7] << 28 | _[6] >>> 4, Pe = _[17] << 23 | _[16] >>> 9, le = _[16] << 23 | _[17] >>> 9, Gt = _[26] << 25 | _[27] >>> 7, zt = _[27] << 25 | _[26] >>> 7, yt = _[36] << 21 | _[37] >>> 11, At = _[37] << 21 | _[36] >>> 11, Re = _[47] << 24 | _[46] >>> 8, te = _[46] << 24 | _[47] >>> 8, Jt = _[8] << 27 | _[9] >>> 5, Xt = _[9] << 27 | _[8] >>> 5, Ot = _[18] << 20 | _[19] >>> 12, Nt = _[19] << 20 | _[18] >>> 12, ni = _[29] << 7 | _[28] >>> 25, si = _[28] << 7 | _[29] >>> 25, Ie = _[38] << 8 | _[39] >>> 24, Wt = _[39] << 8 | _[38] >>> 24, Bt = _[48] << 14 | _[49] >>> 18, wt = _[49] << 14 | _[48] >>> 18, _[0] = $t ^ ~Ut & Et, _[1] = xt ^ ~_t & Vt, _[10] = Ct ^ ~Ot & se, _[11] = Lt ^ ~Nt & Tt, _[20] = Ke ^ ~_e & Gt, _[21] = ye ^ ~_r & zt, _[30] = Jt ^ ~De & Yt, _[31] = Xt ^ ~Zt & Me, _[40] = Ce ^ ~Pe & ni, _[41] = Ii ^ ~le & si, _[2] = Ut ^ ~Et & yt, _[3] = _t ^ ~Vt & At, _[12] = Ot ^ ~se & Rt, _[13] = Nt ^ ~Tt & He, _[22] = _e ^ ~Gt & Ie, _[23] = _r ^ ~zt & Wt, _[32] = De ^ ~Yt & Qt, _[33] = Zt ^ ~Me & qt, _[42] = Pe ^ ~ni & oi, _[43] = le ^ ~si & ai, _[4] = Et ^ ~yt & Bt, _[5] = Vt ^ ~At & wt, _[14] = se ^ ~Rt & ue, _[15] = Tt ^ ~He & pe, _[24] = Gt ^ ~Ie & Kt, _[25] = zt ^ ~Wt & Ae, _[34] = Yt ^ ~Qt & Re, _[35] = Me ^ ~qt & te, _[44] = ni ^ ~oi & ui, _[45] = si ^ ~ai & or, _[6] = yt ^ ~Bt & $t, _[7] = At ^ ~wt & xt, _[16] = Rt ^ ~ue & Ct, _[17] = He ^ ~pe & Lt, _[26] = Ie ^ ~Kt & Ke, _[27] = Wt ^ ~Ae & ye, _[36] = Qt ^ ~Re & Jt, _[37] = qt ^ ~te & Xt, _[46] = oi ^ ~ui & Ce, _[47] = ai ^ ~or & Ii, _[8] = Bt ^ ~$t & Ut, _[9] = wt ^ ~xt & _t, _[18] = ue ^ ~Ct & Ot, _[19] = pe ^ ~Lt & Nt, _[28] = Kt ^ ~Ke & _e, _[29] = Ae ^ ~ye & _r, _[38] = Re ^ ~Jt & De, _[39] = te ^ ~Xt & Zt, _[48] = ui ^ ~Ce & Pe, _[49] = or ^ ~Ii & le, _[0] ^= Y[q], _[1] ^= Y[q + 1]
        };
        if (f) r.exports = h;
        else
            for (S = 0; S < w.length; ++S) s[w[S]] = h[w[S]]
    })()
})(Q1);
var n5 = Q1.exports;
const s5 = "logger/5.7.0";
let R0 = !1,
    T0 = !1;
const Tu = {
    debug: 1,
    default: 2,
    info: 2,
    warning: 3,
    error: 4,
    off: 5
};
let F0 = Tu.default,
    Oh = null;

function o5() {
    try {
        const r = [];
        if (["NFD", "NFC", "NFKD", "NFKC"].forEach(t => {
                try {
                    if ("test".normalize(t) !== "test") throw new Error("bad normalize")
                } catch {
                    r.push(t)
                }
            }), r.length) throw new Error("missing " + r.join(", "));
        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
    } catch (r) {
        return r.message
    }
    return null
}
const B0 = o5();
var vl;
(function(r) {
    r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
})(vl || (vl = {}));
var Ti;
(function(r) {
    r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", r.ACTION_REJECTED = "ACTION_REJECTED"
})(Ti || (Ti = {}));
const U0 = "0123456789abcdef";
let pr = class sr {
    constructor(t) {
        Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1
        })
    }
    _log(t, e) {
        const i = t.toLowerCase();
        Tu[i] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(F0 > Tu[i]) && console.log.apply(console, e)
    }
    debug(...t) {
        this._log(sr.levels.DEBUG, t)
    }
    info(...t) {
        this._log(sr.levels.INFO, t)
    }
    warn(...t) {
        this._log(sr.levels.WARNING, t)
    }
    makeError(t, e, i) {
        if (T0) return this.makeError("censored error", e, {});
        e || (e = sr.errors.UNKNOWN_ERROR), i || (i = {});
        const s = [];
        Object.keys(i).forEach(p => {
            const d = i[p];
            try {
                if (d instanceof Uint8Array) {
                    let b = "";
                    for (let E = 0; E < d.length; E++) b += U0[d[E] >> 4], b += U0[d[E] & 15];
                    s.push(p + "=Uint8Array(0x" + b + ")")
                } else s.push(p + "=" + JSON.stringify(d))
            } catch {
                s.push(p + "=" + JSON.stringify(i[p].toString()))
            }
        }), s.push(`code=${e}`), s.push(`version=${this.version}`);
        const a = t;
        let c = "";
        switch (e) {
            case Ti.NUMERIC_FAULT:
                {
                    c = "NUMERIC_FAULT";
                    const p = t;
                    switch (p) {
                        case "overflow":
                        case "underflow":
                        case "division-by-zero":
                            c += "-" + p;
                            break;
                        case "negative-power":
                        case "negative-width":
                            c += "-unsupported";
                            break;
                        case "unbound-bitwise-result":
                            c += "-unbound-result";
                            break
                    }
                    break
                }
            case Ti.CALL_EXCEPTION:
            case Ti.INSUFFICIENT_FUNDS:
            case Ti.MISSING_NEW:
            case Ti.NONCE_EXPIRED:
            case Ti.REPLACEMENT_UNDERPRICED:
            case Ti.TRANSACTION_REPLACED:
            case Ti.UNPREDICTABLE_GAS_LIMIT:
                c = e;
                break
        }
        c && (t += " [ See: https://links.ethers.org/v5-errors-" + c + " ]"), s.length && (t += " (" + s.join(", ") + ")");
        const f = new Error(t);
        return f.reason = a, f.code = e, Object.keys(i).forEach(function(p) {
            f[p] = i[p]
        }), f
    }
    throwError(t, e, i) {
        throw this.makeError(t, e, i)
    }
    throwArgumentError(t, e, i) {
        return this.throwError(t, sr.errors.INVALID_ARGUMENT, {
            argument: e,
            value: i
        })
    }
    assert(t, e, i, s) {
        t || this.throwError(e, i, s)
    }
    assertArgument(t, e, i, s) {
        t || this.throwArgumentError(e, i, s)
    }
    checkNormalize(t) {
        B0 && this.throwError("platform missing String.prototype.normalize", sr.errors.UNSUPPORTED_OPERATION, {
            operation: "String.prototype.normalize",
            form: B0
        })
    }
    checkSafeUint53(t, e) {
        typeof t == "number" && (e == null && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, sr.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "out-of-safe-range",
            value: t
        }), t % 1 && this.throwError(e, sr.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "non-integer",
            value: t
        }))
    }
    checkArgumentCount(t, e, i) {
        i ? i = ": " + i : i = "", t < e && this.throwError("missing argument" + i, sr.errors.MISSING_ARGUMENT, {
            count: t,
            expectedCount: e
        }), t > e && this.throwError("too many arguments" + i, sr.errors.UNEXPECTED_ARGUMENT, {
            count: t,
            expectedCount: e
        })
    }
    checkNew(t, e) {
        (t === Object || t == null) && this.throwError("missing new", sr.errors.MISSING_NEW, {
            name: e.name
        })
    }
    checkAbstract(t, e) {
        t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", sr.errors.UNSUPPORTED_OPERATION, {
            name: t.name,
            operation: "new"
        }) : (t === Object || t == null) && this.throwError("missing new", sr.errors.MISSING_NEW, {
            name: e.name
        })
    }
    static globalLogger() {
        return Oh || (Oh = new sr(s5)), Oh
    }
    static setCensorship(t, e) {
        if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", sr.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            }), R0) {
            if (!t) return;
            this.globalLogger().throwError("error censorship permanent", sr.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            })
        }
        T0 = !!t, R0 = !!e
    }
    static setLogLevel(t) {
        const e = Tu[t.toLowerCase()];
        if (e == null) {
            sr.globalLogger().warn("invalid log level - " + t);
            return
        }
        F0 = e
    }
    static from(t) {
        return new sr(t)
    }
};
pr.errors = Ti, pr.levels = vl;
const a5 = "bytes/5.7.0",
    Xe = new pr(a5);

function J1(r) {
    return !!r.toHexString
}

function no(r) {
    return r.slice || (r.slice = function() {
        const t = Array.prototype.slice.call(arguments);
        return no(new Uint8Array(Array.prototype.slice.apply(r, t)))
    }), r
}

function u5(r) {
    return ei(r) && !(r.length % 2) || po(r)
}

function L0(r) {
    return typeof r == "number" && r == r && r % 1 === 0
}

function po(r) {
    if (r == null) return !1;
    if (r.constructor === Uint8Array) return !0;
    if (typeof r == "string" || !L0(r.length) || r.length < 0) return !1;
    for (let t = 0; t < r.length; t++) {
        const e = r[t];
        if (!L0(e) || e < 0 || e >= 256) return !1
    }
    return !0
}

function We(r, t) {
    if (t || (t = {}), typeof r == "number") {
        Xe.checkSafeUint53(r, "invalid arrayify value");
        const e = [];
        for (; r;) e.unshift(r & 255), r = parseInt(String(r / 256));
        return e.length === 0 && e.push(0), no(new Uint8Array(e))
    }
    if (t.allowMissingPrefix && typeof r == "string" && r.substring(0, 2) !== "0x" && (r = "0x" + r), J1(r) && (r = r.toHexString()), ei(r)) {
        let e = r.substring(2);
        e.length % 2 && (t.hexPad === "left" ? e = "0" + e : t.hexPad === "right" ? e += "0" : Xe.throwArgumentError("hex data is odd-length", "value", r));
        const i = [];
        for (let s = 0; s < e.length; s += 2) i.push(parseInt(e.substring(s, s + 2), 16));
        return no(new Uint8Array(i))
    }
    return po(r) ? no(new Uint8Array(r)) : Xe.throwArgumentError("invalid arrayify value", "value", r)
}

function c5(r) {
    const t = r.map(s => We(s)),
        e = t.reduce((s, a) => s + a.length, 0),
        i = new Uint8Array(e);
    return t.reduce((s, a) => (i.set(a, s), s + a.length), 0), no(i)
}

function h5(r, t) {
    r = We(r), r.length > t && Xe.throwArgumentError("value out of range", "value", arguments[0]);
    const e = new Uint8Array(t);
    return e.set(r, t - r.length), no(e)
}

function ei(r, t) {
    return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || t && r.length !== 2 + 2 * t)
}
const Nh = "0123456789abcdef";

function Mr(r, t) {
    if (t || (t = {}), typeof r == "number") {
        Xe.checkSafeUint53(r, "invalid hexlify value");
        let e = "";
        for (; r;) e = Nh[r & 15] + e, r = Math.floor(r / 16);
        return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
    }
    if (typeof r == "bigint") return r = r.toString(16), r.length % 2 ? "0x0" + r : "0x" + r;
    if (t.allowMissingPrefix && typeof r == "string" && r.substring(0, 2) !== "0x" && (r = "0x" + r), J1(r)) return r.toHexString();
    if (ei(r)) return r.length % 2 && (t.hexPad === "left" ? r = "0x0" + r.substring(2) : t.hexPad === "right" ? r += "0" : Xe.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
    if (po(r)) {
        let e = "0x";
        for (let i = 0; i < r.length; i++) {
            let s = r[i];
            e += Nh[(s & 240) >> 4] + Nh[s & 15]
        }
        return e
    }
    return Xe.throwArgumentError("invalid hexlify value", "value", r)
}

function l5(r) {
    if (typeof r != "string") r = Mr(r);
    else if (!ei(r) || r.length % 2) return null;
    return (r.length - 2) / 2
}

function q0(r, t, e) {
    return typeof r != "string" ? r = Mr(r) : (!ei(r) || r.length % 2) && Xe.throwArgumentError("invalid hexData", "value", r), t = 2 + 2 * t, e != null ? "0x" + r.substring(t, 2 + 2 * e) : "0x" + r.substring(t)
}

function tn(r, t) {
    for (typeof r != "string" ? r = Mr(r) : ei(r) || Xe.throwArgumentError("invalid hex string", "value", r), r.length > 2 * t + 2 && Xe.throwArgumentError("value out of range", "value", arguments[1]); r.length < 2 * t + 2;) r = "0x0" + r.substring(2);
    return r
}

function X1(r) {
    const t = {
        r: "0x",
        s: "0x",
        _vs: "0x",
        recoveryParam: 0,
        v: 0,
        yParityAndS: "0x",
        compact: "0x"
    };
    if (u5(r)) {
        let e = We(r);
        e.length === 64 ? (t.v = 27 + (e[32] >> 7), e[32] &= 127, t.r = Mr(e.slice(0, 32)), t.s = Mr(e.slice(32, 64))) : e.length === 65 ? (t.r = Mr(e.slice(0, 32)), t.s = Mr(e.slice(32, 64)), t.v = e[64]) : Xe.throwArgumentError("invalid signature string", "signature", r), t.v < 27 && (t.v === 0 || t.v === 1 ? t.v += 27 : Xe.throwArgumentError("signature invalid v byte", "signature", r)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (e[32] |= 128), t._vs = Mr(e.slice(32, 64))
    } else {
        if (t.r = r.r, t.s = r.s, t.v = r.v, t.recoveryParam = r.recoveryParam, t._vs = r._vs, t._vs != null) {
            const s = h5(We(t._vs), 32);
            t._vs = Mr(s);
            const a = s[0] >= 128 ? 1 : 0;
            t.recoveryParam == null ? t.recoveryParam = a : t.recoveryParam !== a && Xe.throwArgumentError("signature recoveryParam mismatch _vs", "signature", r), s[0] &= 127;
            const c = Mr(s);
            t.s == null ? t.s = c : t.s !== c && Xe.throwArgumentError("signature v mismatch _vs", "signature", r)
        }
        if (t.recoveryParam == null) t.v == null ? Xe.throwArgumentError("signature missing v and recoveryParam", "signature", r) : t.v === 0 || t.v === 1 ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2;
        else if (t.v == null) t.v = 27 + t.recoveryParam;
        else {
            const s = t.v === 0 || t.v === 1 ? t.v : 1 - t.v % 2;
            t.recoveryParam !== s && Xe.throwArgumentError("signature recoveryParam mismatch v", "signature", r)
        }
        t.r == null || !ei(t.r) ? Xe.throwArgumentError("signature missing or invalid r", "signature", r) : t.r = tn(t.r, 32), t.s == null || !ei(t.s) ? Xe.throwArgumentError("signature missing or invalid s", "signature", r) : t.s = tn(t.s, 32);
        const e = We(t.s);
        e[0] >= 128 && Xe.throwArgumentError("signature s out of range", "signature", r), t.recoveryParam && (e[0] |= 128);
        const i = Mr(e);
        t._vs && (ei(t._vs) || Xe.throwArgumentError("signature invalid _vs", "signature", r), t._vs = tn(t._vs, 32)), t._vs == null ? t._vs = i : t._vs !== i && Xe.throwArgumentError("signature _vs mismatch v and s", "signature", r)
    }
    return t.yParityAndS = t._vs, t.compact = t.r + t.yParityAndS.substring(2), t
}

function kl(r) {
    return "0x" + n5.keccak_256(We(r))
}
var Z1 = {
        exports: {}
    },
    f5 = {},
    d5 = Object.freeze({
        __proto__: null,
        default: f5
    }),
    p5 = i5(d5);
(function(r) {
    (function(t, e) {
        function i(l, h) {
            if (!l) throw new Error(h || "Assertion failed")
        }

        function s(l, h) {
            l.super_ = h;
            var w = function() {};
            w.prototype = h.prototype, l.prototype = new w, l.prototype.constructor = l
        }

        function a(l, h, w) {
            if (a.isBN(l)) return l;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, l !== null && ((h === "le" || h === "be") && (w = h, h = 10), this._init(l || 0, h || 10, w || "be"))
        }
        typeof t == "object" ? t.exports = a : e.BN = a, a.BN = a, a.wordSize = 26;
        var c;
        try {
            typeof window < "u" && typeof window.Buffer < "u" ? c = window.Buffer : c = p5.Buffer
        } catch {}
        a.isBN = function(l) {
            return l instanceof a ? !0 : l !== null && typeof l == "object" && l.constructor.wordSize === a.wordSize && Array.isArray(l.words)
        }, a.max = function(l, h) {
            return l.cmp(h) > 0 ? l : h
        }, a.min = function(l, h) {
            return l.cmp(h) < 0 ? l : h
        }, a.prototype._init = function(l, h, w) {
            if (typeof l == "number") return this._initNumber(l, h, w);
            if (typeof l == "object") return this._initArray(l, h, w);
            h === "hex" && (h = 16), i(h === (h | 0) && h >= 2 && h <= 36), l = l.toString().replace(/\s+/g, "");
            var S = 0;
            l[0] === "-" && (S++, this.negative = 1), S < l.length && (h === 16 ? this._parseHex(l, S, w) : (this._parseBase(l, h, S), w === "le" && this._initArray(this.toArray(), h, w)))
        }, a.prototype._initNumber = function(l, h, w) {
            l < 0 && (this.negative = 1, l = -l), l < 67108864 ? (this.words = [l & 67108863], this.length = 1) : l < 4503599627370496 ? (this.words = [l & 67108863, l / 67108864 & 67108863], this.length = 2) : (i(l < 9007199254740992), this.words = [l & 67108863, l / 67108864 & 67108863, 1], this.length = 3), w === "le" && this._initArray(this.toArray(), h, w)
        }, a.prototype._initArray = function(l, h, w) {
            if (i(typeof l.length == "number"), l.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(l.length / 3), this.words = new Array(this.length);
            for (var S = 0; S < this.length; S++) this.words[S] = 0;
            var M, O, F = 0;
            if (w === "be")
                for (S = l.length - 1, M = 0; S >= 0; S -= 3) O = l[S] | l[S - 1] << 8 | l[S - 2] << 16, this.words[M] |= O << F & 67108863, this.words[M + 1] = O >>> 26 - F & 67108863, F += 24, F >= 26 && (F -= 26, M++);
            else if (w === "le")
                for (S = 0, M = 0; S < l.length; S += 3) O = l[S] | l[S + 1] << 8 | l[S + 2] << 16, this.words[M] |= O << F & 67108863, this.words[M + 1] = O >>> 26 - F & 67108863, F += 24, F >= 26 && (F -= 26, M++);
            return this._strip()
        };

        function f(l, h) {
            var w = l.charCodeAt(h);
            if (w >= 48 && w <= 57) return w - 48;
            if (w >= 65 && w <= 70) return w - 55;
            if (w >= 97 && w <= 102) return w - 87;
            i(!1, "Invalid character in " + l)
        }

        function p(l, h, w) {
            var S = f(l, w);
            return w - 1 >= h && (S |= f(l, w - 1) << 4), S
        }
        a.prototype._parseHex = function(l, h, w) {
            this.length = Math.ceil((l.length - h) / 6), this.words = new Array(this.length);
            for (var S = 0; S < this.length; S++) this.words[S] = 0;
            var M = 0,
                O = 0,
                F;
            if (w === "be")
                for (S = l.length - 1; S >= h; S -= 2) F = p(l, h, S) << M, this.words[O] |= F & 67108863, M >= 18 ? (M -= 18, O += 1, this.words[O] |= F >>> 26) : M += 8;
            else {
                var I = l.length - h;
                for (S = I % 2 === 0 ? h + 1 : h; S < l.length; S += 2) F = p(l, h, S) << M, this.words[O] |= F & 67108863, M >= 18 ? (M -= 18, O += 1, this.words[O] |= F >>> 26) : M += 8
            }
            this._strip()
        };

        function d(l, h, w, S) {
            for (var M = 0, O = 0, F = Math.min(l.length, w), I = h; I < F; I++) {
                var g = l.charCodeAt(I) - 48;
                M *= S, g >= 49 ? O = g - 49 + 10 : g >= 17 ? O = g - 17 + 10 : O = g, i(g >= 0 && O < S, "Invalid character"), M += O
            }
            return M
        }
        a.prototype._parseBase = function(l, h, w) {
            this.words = [0], this.length = 1;
            for (var S = 0, M = 1; M <= 67108863; M *= h) S++;
            S--, M = M / h | 0;
            for (var O = l.length - w, F = O % S, I = Math.min(O, O - F) + w, g = 0, N = w; N < I; N += S) g = d(l, N, N + S, h), this.imuln(M), this.words[0] + g < 67108864 ? this.words[0] += g : this._iaddn(g);
            if (F !== 0) {
                var it = 1;
                for (g = d(l, N, l.length, h), N = 0; N < F; N++) it *= h;
                this.imuln(it), this.words[0] + g < 67108864 ? this.words[0] += g : this._iaddn(g)
            }
            this._strip()
        }, a.prototype.copy = function(l) {
            l.words = new Array(this.length);
            for (var h = 0; h < this.length; h++) l.words[h] = this.words[h];
            l.length = this.length, l.negative = this.negative, l.red = this.red
        };

        function b(l, h) {
            l.words = h.words, l.length = h.length, l.negative = h.negative, l.red = h.red
        }
        if (a.prototype._move = function(l) {
                b(l, this)
            }, a.prototype.clone = function() {
                var l = new a(null);
                return this.copy(l), l
            }, a.prototype._expand = function(l) {
                for (; this.length < l;) this.words[this.length++] = 0;
                return this
            }, a.prototype._strip = function() {
                for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
                return this._normSign()
            }, a.prototype._normSign = function() {
                return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
            }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
            a.prototype[Symbol.for("nodejs.util.inspect.custom")] = E
        } catch {
            a.prototype.inspect = E
        } else a.prototype.inspect = E;

        function E() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        }
        var x = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
            D = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            P = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
        a.prototype.toString = function(l, h) {
            l = l || 10, h = h | 0 || 1;
            var w;
            if (l === 16 || l === "hex") {
                w = "";
                for (var S = 0, M = 0, O = 0; O < this.length; O++) {
                    var F = this.words[O],
                        I = ((F << S | M) & 16777215).toString(16);
                    M = F >>> 24 - S & 16777215, S += 2, S >= 26 && (S -= 26, O--), M !== 0 || O !== this.length - 1 ? w = x[6 - I.length] + I + w : w = I + w
                }
                for (M !== 0 && (w = M.toString(16) + w); w.length % h !== 0;) w = "0" + w;
                return this.negative !== 0 && (w = "-" + w), w
            }
            if (l === (l | 0) && l >= 2 && l <= 36) {
                var g = D[l],
                    N = P[l];
                w = "";
                var it = this.clone();
                for (it.negative = 0; !it.isZero();) {
                    var dt = it.modrn(N).toString(l);
                    it = it.idivn(N), it.isZero() ? w = dt + w : w = x[g - dt.length] + dt + w
                }
                for (this.isZero() && (w = "0" + w); w.length % h !== 0;) w = "0" + w;
                return this.negative !== 0 && (w = "-" + w), w
            }
            i(!1, "Base should be between 2 and 36")
        }, a.prototype.toNumber = function() {
            var l = this.words[0];
            return this.length === 2 ? l += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? l += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -l : l
        }, a.prototype.toJSON = function() {
            return this.toString(16, 2)
        }, c && (a.prototype.toBuffer = function(l, h) {
            return this.toArrayLike(c, l, h)
        }), a.prototype.toArray = function(l, h) {
            return this.toArrayLike(Array, l, h)
        };
        var Y = function(l, h) {
            return l.allocUnsafe ? l.allocUnsafe(h) : new l(h)
        };
        a.prototype.toArrayLike = function(l, h, w) {
            this._strip();
            var S = this.byteLength(),
                M = w || Math.max(1, S);
            i(S <= M, "byte array longer than desired length"), i(M > 0, "Requested array length <= 0");
            var O = Y(l, M),
                F = h === "le" ? "LE" : "BE";
            return this["_toArrayLike" + F](O, S), O
        }, a.prototype._toArrayLikeLE = function(l, h) {
            for (var w = 0, S = 0, M = 0, O = 0; M < this.length; M++) {
                var F = this.words[M] << O | S;
                l[w++] = F & 255, w < l.length && (l[w++] = F >> 8 & 255), w < l.length && (l[w++] = F >> 16 & 255), O === 6 ? (w < l.length && (l[w++] = F >> 24 & 255), S = 0, O = 0) : (S = F >>> 24, O += 2)
            }
            if (w < l.length)
                for (l[w++] = S; w < l.length;) l[w++] = 0
        }, a.prototype._toArrayLikeBE = function(l, h) {
            for (var w = l.length - 1, S = 0, M = 0, O = 0; M < this.length; M++) {
                var F = this.words[M] << O | S;
                l[w--] = F & 255, w >= 0 && (l[w--] = F >> 8 & 255), w >= 0 && (l[w--] = F >> 16 & 255), O === 6 ? (w >= 0 && (l[w--] = F >> 24 & 255), S = 0, O = 0) : (S = F >>> 24, O += 2)
            }
            if (w >= 0)
                for (l[w--] = S; w >= 0;) l[w--] = 0
        }, Math.clz32 ? a.prototype._countBits = function(l) {
            return 32 - Math.clz32(l)
        } : a.prototype._countBits = function(l) {
            var h = l,
                w = 0;
            return h >= 4096 && (w += 13, h >>>= 13), h >= 64 && (w += 7, h >>>= 7), h >= 8 && (w += 4, h >>>= 4), h >= 2 && (w += 2, h >>>= 2), w + h
        }, a.prototype._zeroBits = function(l) {
            if (l === 0) return 26;
            var h = l,
                w = 0;
            return h & 8191 || (w += 13, h >>>= 13), h & 127 || (w += 7, h >>>= 7), h & 15 || (w += 4, h >>>= 4), h & 3 || (w += 2, h >>>= 2), h & 1 || w++, w
        }, a.prototype.bitLength = function() {
            var l = this.words[this.length - 1],
                h = this._countBits(l);
            return (this.length - 1) * 26 + h
        };

        function G(l) {
            for (var h = new Array(l.bitLength()), w = 0; w < h.length; w++) {
                var S = w / 26 | 0,
                    M = w % 26;
                h[w] = l.words[S] >>> M & 1
            }
            return h
        }
        a.prototype.zeroBits = function() {
            if (this.isZero()) return 0;
            for (var l = 0, h = 0; h < this.length; h++) {
                var w = this._zeroBits(this.words[h]);
                if (l += w, w !== 26) break
            }
            return l
        }, a.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
        }, a.prototype.toTwos = function(l) {
            return this.negative !== 0 ? this.abs().inotn(l).iaddn(1) : this.clone()
        }, a.prototype.fromTwos = function(l) {
            return this.testn(l - 1) ? this.notn(l).iaddn(1).ineg() : this.clone()
        }, a.prototype.isNeg = function() {
            return this.negative !== 0
        }, a.prototype.neg = function() {
            return this.clone().ineg()
        }, a.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this
        }, a.prototype.iuor = function(l) {
            for (; this.length < l.length;) this.words[this.length++] = 0;
            for (var h = 0; h < l.length; h++) this.words[h] = this.words[h] | l.words[h];
            return this._strip()
        }, a.prototype.ior = function(l) {
            return i((this.negative | l.negative) === 0), this.iuor(l)
        }, a.prototype.or = function(l) {
            return this.length > l.length ? this.clone().ior(l) : l.clone().ior(this)
        }, a.prototype.uor = function(l) {
            return this.length > l.length ? this.clone().iuor(l) : l.clone().iuor(this)
        }, a.prototype.iuand = function(l) {
            var h;
            this.length > l.length ? h = l : h = this;
            for (var w = 0; w < h.length; w++) this.words[w] = this.words[w] & l.words[w];
            return this.length = h.length, this._strip()
        }, a.prototype.iand = function(l) {
            return i((this.negative | l.negative) === 0), this.iuand(l)
        }, a.prototype.and = function(l) {
            return this.length > l.length ? this.clone().iand(l) : l.clone().iand(this)
        }, a.prototype.uand = function(l) {
            return this.length > l.length ? this.clone().iuand(l) : l.clone().iuand(this)
        }, a.prototype.iuxor = function(l) {
            var h, w;
            this.length > l.length ? (h = this, w = l) : (h = l, w = this);
            for (var S = 0; S < w.length; S++) this.words[S] = h.words[S] ^ w.words[S];
            if (this !== h)
                for (; S < h.length; S++) this.words[S] = h.words[S];
            return this.length = h.length, this._strip()
        }, a.prototype.ixor = function(l) {
            return i((this.negative | l.negative) === 0), this.iuxor(l)
        }, a.prototype.xor = function(l) {
            return this.length > l.length ? this.clone().ixor(l) : l.clone().ixor(this)
        }, a.prototype.uxor = function(l) {
            return this.length > l.length ? this.clone().iuxor(l) : l.clone().iuxor(this)
        }, a.prototype.inotn = function(l) {
            i(typeof l == "number" && l >= 0);
            var h = Math.ceil(l / 26) | 0,
                w = l % 26;
            this._expand(h), w > 0 && h--;
            for (var S = 0; S < h; S++) this.words[S] = ~this.words[S] & 67108863;
            return w > 0 && (this.words[S] = ~this.words[S] & 67108863 >> 26 - w), this._strip()
        }, a.prototype.notn = function(l) {
            return this.clone().inotn(l)
        }, a.prototype.setn = function(l, h) {
            i(typeof l == "number" && l >= 0);
            var w = l / 26 | 0,
                S = l % 26;
            return this._expand(w + 1), h ? this.words[w] = this.words[w] | 1 << S : this.words[w] = this.words[w] & ~(1 << S), this._strip()
        }, a.prototype.iadd = function(l) {
            var h;
            if (this.negative !== 0 && l.negative === 0) return this.negative = 0, h = this.isub(l), this.negative ^= 1, this._normSign();
            if (this.negative === 0 && l.negative !== 0) return l.negative = 0, h = this.isub(l), l.negative = 1, h._normSign();
            var w, S;
            this.length > l.length ? (w = this, S = l) : (w = l, S = this);
            for (var M = 0, O = 0; O < S.length; O++) h = (w.words[O] | 0) + (S.words[O] | 0) + M, this.words[O] = h & 67108863, M = h >>> 26;
            for (; M !== 0 && O < w.length; O++) h = (w.words[O] | 0) + M, this.words[O] = h & 67108863, M = h >>> 26;
            if (this.length = w.length, M !== 0) this.words[this.length] = M, this.length++;
            else if (w !== this)
                for (; O < w.length; O++) this.words[O] = w.words[O];
            return this
        }, a.prototype.add = function(l) {
            var h;
            return l.negative !== 0 && this.negative === 0 ? (l.negative = 0, h = this.sub(l), l.negative ^= 1, h) : l.negative === 0 && this.negative !== 0 ? (this.negative = 0, h = l.sub(this), this.negative = 1, h) : this.length > l.length ? this.clone().iadd(l) : l.clone().iadd(this)
        }, a.prototype.isub = function(l) {
            if (l.negative !== 0) {
                l.negative = 0;
                var h = this.iadd(l);
                return l.negative = 1, h._normSign()
            } else if (this.negative !== 0) return this.negative = 0, this.iadd(l), this.negative = 1, this._normSign();
            var w = this.cmp(l);
            if (w === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            var S, M;
            w > 0 ? (S = this, M = l) : (S = l, M = this);
            for (var O = 0, F = 0; F < M.length; F++) h = (S.words[F] | 0) - (M.words[F] | 0) + O, O = h >> 26, this.words[F] = h & 67108863;
            for (; O !== 0 && F < S.length; F++) h = (S.words[F] | 0) + O, O = h >> 26, this.words[F] = h & 67108863;
            if (O === 0 && F < S.length && S !== this)
                for (; F < S.length; F++) this.words[F] = S.words[F];
            return this.length = Math.max(this.length, F), S !== this && (this.negative = 1), this._strip()
        }, a.prototype.sub = function(l) {
            return this.clone().isub(l)
        };

        function tt(l, h, w) {
            w.negative = h.negative ^ l.negative;
            var S = l.length + h.length | 0;
            w.length = S, S = S - 1 | 0;
            var M = l.words[0] | 0,
                O = h.words[0] | 0,
                F = M * O,
                I = F & 67108863,
                g = F / 67108864 | 0;
            w.words[0] = I;
            for (var N = 1; N < S; N++) {
                for (var it = g >>> 26, dt = g & 67108863, _ = Math.min(N, h.length - 1), Z = Math.max(0, N - l.length + 1); Z <= _; Z++) {
                    var U = N - Z | 0;
                    M = l.words[U] | 0, O = h.words[Z] | 0, F = M * O + dt, it += F / 67108864 | 0, dt = F & 67108863
                }
                w.words[N] = dt | 0, g = it | 0
            }
            return g !== 0 ? w.words[N] = g | 0 : w.length--, w._strip()
        }
        var K = function(l, h, w) {
            var S = l.words,
                M = h.words,
                O = w.words,
                F = 0,
                I, g, N, it = S[0] | 0,
                dt = it & 8191,
                _ = it >>> 13,
                Z = S[1] | 0,
                U = Z & 8191,
                q = Z >>> 13,
                k = S[2] | 0,
                m = k & 8191,
                B = k >>> 13,
                et = S[3] | 0,
                ct = et & 8191,
                at = et >>> 13,
                Mt = S[4] | 0,
                Pt = Mt & 8191,
                It = Mt >>> 13,
                Ee = S[5] | 0,
                $t = Ee & 8191,
                xt = Ee >>> 13,
                Ut = S[6] | 0,
                _t = Ut & 8191,
                Et = Ut >>> 13,
                Vt = S[7] | 0,
                yt = Vt & 8191,
                At = Vt >>> 13,
                Bt = S[8] | 0,
                wt = Bt & 8191,
                Ct = Bt >>> 13,
                Lt = S[9] | 0,
                Ot = Lt & 8191,
                Nt = Lt >>> 13,
                se = M[0] | 0,
                Tt = se & 8191,
                Rt = se >>> 13,
                He = M[1] | 0,
                ue = He & 8191,
                pe = He >>> 13,
                Ke = M[2] | 0,
                ye = Ke & 8191,
                _e = Ke >>> 13,
                _r = M[3] | 0,
                Gt = _r & 8191,
                zt = _r >>> 13,
                Ie = M[4] | 0,
                Wt = Ie & 8191,
                Kt = Ie >>> 13,
                Ae = M[5] | 0,
                Jt = Ae & 8191,
                Xt = Ae >>> 13,
                De = M[6] | 0,
                Zt = De & 8191,
                Yt = De >>> 13,
                Me = M[7] | 0,
                Qt = Me & 8191,
                qt = Me >>> 13,
                Re = M[8] | 0,
                te = Re & 8191,
                Ce = Re >>> 13,
                Ii = M[9] | 0,
                Pe = Ii & 8191,
                le = Ii >>> 13;
            w.negative = l.negative ^ h.negative, w.length = 19, I = Math.imul(dt, Tt), g = Math.imul(dt, Rt), g = g + Math.imul(_, Tt) | 0, N = Math.imul(_, Rt);
            var ni = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (ni >>> 26) | 0, ni &= 67108863, I = Math.imul(U, Tt), g = Math.imul(U, Rt), g = g + Math.imul(q, Tt) | 0, N = Math.imul(q, Rt), I = I + Math.imul(dt, ue) | 0, g = g + Math.imul(dt, pe) | 0, g = g + Math.imul(_, ue) | 0, N = N + Math.imul(_, pe) | 0;
            var si = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (si >>> 26) | 0, si &= 67108863, I = Math.imul(m, Tt), g = Math.imul(m, Rt), g = g + Math.imul(B, Tt) | 0, N = Math.imul(B, Rt), I = I + Math.imul(U, ue) | 0, g = g + Math.imul(U, pe) | 0, g = g + Math.imul(q, ue) | 0, N = N + Math.imul(q, pe) | 0, I = I + Math.imul(dt, ye) | 0, g = g + Math.imul(dt, _e) | 0, g = g + Math.imul(_, ye) | 0, N = N + Math.imul(_, _e) | 0;
            var oi = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (oi >>> 26) | 0, oi &= 67108863, I = Math.imul(ct, Tt), g = Math.imul(ct, Rt), g = g + Math.imul(at, Tt) | 0, N = Math.imul(at, Rt), I = I + Math.imul(m, ue) | 0, g = g + Math.imul(m, pe) | 0, g = g + Math.imul(B, ue) | 0, N = N + Math.imul(B, pe) | 0, I = I + Math.imul(U, ye) | 0, g = g + Math.imul(U, _e) | 0, g = g + Math.imul(q, ye) | 0, N = N + Math.imul(q, _e) | 0, I = I + Math.imul(dt, Gt) | 0, g = g + Math.imul(dt, zt) | 0, g = g + Math.imul(_, Gt) | 0, N = N + Math.imul(_, zt) | 0;
            var ai = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (ai >>> 26) | 0, ai &= 67108863, I = Math.imul(Pt, Tt), g = Math.imul(Pt, Rt), g = g + Math.imul(It, Tt) | 0, N = Math.imul(It, Rt), I = I + Math.imul(ct, ue) | 0, g = g + Math.imul(ct, pe) | 0, g = g + Math.imul(at, ue) | 0, N = N + Math.imul(at, pe) | 0, I = I + Math.imul(m, ye) | 0, g = g + Math.imul(m, _e) | 0, g = g + Math.imul(B, ye) | 0, N = N + Math.imul(B, _e) | 0, I = I + Math.imul(U, Gt) | 0, g = g + Math.imul(U, zt) | 0, g = g + Math.imul(q, Gt) | 0, N = N + Math.imul(q, zt) | 0, I = I + Math.imul(dt, Wt) | 0, g = g + Math.imul(dt, Kt) | 0, g = g + Math.imul(_, Wt) | 0, N = N + Math.imul(_, Kt) | 0;
            var ui = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (ui >>> 26) | 0, ui &= 67108863, I = Math.imul($t, Tt), g = Math.imul($t, Rt), g = g + Math.imul(xt, Tt) | 0, N = Math.imul(xt, Rt), I = I + Math.imul(Pt, ue) | 0, g = g + Math.imul(Pt, pe) | 0, g = g + Math.imul(It, ue) | 0, N = N + Math.imul(It, pe) | 0, I = I + Math.imul(ct, ye) | 0, g = g + Math.imul(ct, _e) | 0, g = g + Math.imul(at, ye) | 0, N = N + Math.imul(at, _e) | 0, I = I + Math.imul(m, Gt) | 0, g = g + Math.imul(m, zt) | 0, g = g + Math.imul(B, Gt) | 0, N = N + Math.imul(B, zt) | 0, I = I + Math.imul(U, Wt) | 0, g = g + Math.imul(U, Kt) | 0, g = g + Math.imul(q, Wt) | 0, N = N + Math.imul(q, Kt) | 0, I = I + Math.imul(dt, Jt) | 0, g = g + Math.imul(dt, Xt) | 0, g = g + Math.imul(_, Jt) | 0, N = N + Math.imul(_, Xt) | 0;
            var or = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (or >>> 26) | 0, or &= 67108863, I = Math.imul(_t, Tt), g = Math.imul(_t, Rt), g = g + Math.imul(Et, Tt) | 0, N = Math.imul(Et, Rt), I = I + Math.imul($t, ue) | 0, g = g + Math.imul($t, pe) | 0, g = g + Math.imul(xt, ue) | 0, N = N + Math.imul(xt, pe) | 0, I = I + Math.imul(Pt, ye) | 0, g = g + Math.imul(Pt, _e) | 0, g = g + Math.imul(It, ye) | 0, N = N + Math.imul(It, _e) | 0, I = I + Math.imul(ct, Gt) | 0, g = g + Math.imul(ct, zt) | 0, g = g + Math.imul(at, Gt) | 0, N = N + Math.imul(at, zt) | 0, I = I + Math.imul(m, Wt) | 0, g = g + Math.imul(m, Kt) | 0, g = g + Math.imul(B, Wt) | 0, N = N + Math.imul(B, Kt) | 0, I = I + Math.imul(U, Jt) | 0, g = g + Math.imul(U, Xt) | 0, g = g + Math.imul(q, Jt) | 0, N = N + Math.imul(q, Xt) | 0, I = I + Math.imul(dt, Zt) | 0, g = g + Math.imul(dt, Yt) | 0, g = g + Math.imul(_, Zt) | 0, N = N + Math.imul(_, Yt) | 0;
            var Li = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (Li >>> 26) | 0, Li &= 67108863, I = Math.imul(yt, Tt), g = Math.imul(yt, Rt), g = g + Math.imul(At, Tt) | 0, N = Math.imul(At, Rt), I = I + Math.imul(_t, ue) | 0, g = g + Math.imul(_t, pe) | 0, g = g + Math.imul(Et, ue) | 0, N = N + Math.imul(Et, pe) | 0, I = I + Math.imul($t, ye) | 0, g = g + Math.imul($t, _e) | 0, g = g + Math.imul(xt, ye) | 0, N = N + Math.imul(xt, _e) | 0, I = I + Math.imul(Pt, Gt) | 0, g = g + Math.imul(Pt, zt) | 0, g = g + Math.imul(It, Gt) | 0, N = N + Math.imul(It, zt) | 0, I = I + Math.imul(ct, Wt) | 0, g = g + Math.imul(ct, Kt) | 0, g = g + Math.imul(at, Wt) | 0, N = N + Math.imul(at, Kt) | 0, I = I + Math.imul(m, Jt) | 0, g = g + Math.imul(m, Xt) | 0, g = g + Math.imul(B, Jt) | 0, N = N + Math.imul(B, Xt) | 0, I = I + Math.imul(U, Zt) | 0, g = g + Math.imul(U, Yt) | 0, g = g + Math.imul(q, Zt) | 0, N = N + Math.imul(q, Yt) | 0, I = I + Math.imul(dt, Qt) | 0, g = g + Math.imul(dt, qt) | 0, g = g + Math.imul(_, Qt) | 0, N = N + Math.imul(_, qt) | 0;
            var Qn = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (Qn >>> 26) | 0, Qn &= 67108863, I = Math.imul(wt, Tt), g = Math.imul(wt, Rt), g = g + Math.imul(Ct, Tt) | 0, N = Math.imul(Ct, Rt), I = I + Math.imul(yt, ue) | 0, g = g + Math.imul(yt, pe) | 0, g = g + Math.imul(At, ue) | 0, N = N + Math.imul(At, pe) | 0, I = I + Math.imul(_t, ye) | 0, g = g + Math.imul(_t, _e) | 0, g = g + Math.imul(Et, ye) | 0, N = N + Math.imul(Et, _e) | 0, I = I + Math.imul($t, Gt) | 0, g = g + Math.imul($t, zt) | 0, g = g + Math.imul(xt, Gt) | 0, N = N + Math.imul(xt, zt) | 0, I = I + Math.imul(Pt, Wt) | 0, g = g + Math.imul(Pt, Kt) | 0, g = g + Math.imul(It, Wt) | 0, N = N + Math.imul(It, Kt) | 0, I = I + Math.imul(ct, Jt) | 0, g = g + Math.imul(ct, Xt) | 0, g = g + Math.imul(at, Jt) | 0, N = N + Math.imul(at, Xt) | 0, I = I + Math.imul(m, Zt) | 0, g = g + Math.imul(m, Yt) | 0, g = g + Math.imul(B, Zt) | 0, N = N + Math.imul(B, Yt) | 0, I = I + Math.imul(U, Qt) | 0, g = g + Math.imul(U, qt) | 0, g = g + Math.imul(q, Qt) | 0, N = N + Math.imul(q, qt) | 0, I = I + Math.imul(dt, te) | 0, g = g + Math.imul(dt, Ce) | 0, g = g + Math.imul(_, te) | 0, N = N + Math.imul(_, Ce) | 0;
            var qi = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (qi >>> 26) | 0, qi &= 67108863, I = Math.imul(Ot, Tt), g = Math.imul(Ot, Rt), g = g + Math.imul(Nt, Tt) | 0, N = Math.imul(Nt, Rt), I = I + Math.imul(wt, ue) | 0, g = g + Math.imul(wt, pe) | 0, g = g + Math.imul(Ct, ue) | 0, N = N + Math.imul(Ct, pe) | 0, I = I + Math.imul(yt, ye) | 0, g = g + Math.imul(yt, _e) | 0, g = g + Math.imul(At, ye) | 0, N = N + Math.imul(At, _e) | 0, I = I + Math.imul(_t, Gt) | 0, g = g + Math.imul(_t, zt) | 0, g = g + Math.imul(Et, Gt) | 0, N = N + Math.imul(Et, zt) | 0, I = I + Math.imul($t, Wt) | 0, g = g + Math.imul($t, Kt) | 0, g = g + Math.imul(xt, Wt) | 0, N = N + Math.imul(xt, Kt) | 0, I = I + Math.imul(Pt, Jt) | 0, g = g + Math.imul(Pt, Xt) | 0, g = g + Math.imul(It, Jt) | 0, N = N + Math.imul(It, Xt) | 0, I = I + Math.imul(ct, Zt) | 0, g = g + Math.imul(ct, Yt) | 0, g = g + Math.imul(at, Zt) | 0, N = N + Math.imul(at, Yt) | 0, I = I + Math.imul(m, Qt) | 0, g = g + Math.imul(m, qt) | 0, g = g + Math.imul(B, Qt) | 0, N = N + Math.imul(B, qt) | 0, I = I + Math.imul(U, te) | 0, g = g + Math.imul(U, Ce) | 0, g = g + Math.imul(q, te) | 0, N = N + Math.imul(q, Ce) | 0, I = I + Math.imul(dt, Pe) | 0, g = g + Math.imul(dt, le) | 0, g = g + Math.imul(_, Pe) | 0, N = N + Math.imul(_, le) | 0;
            var Jn = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (Jn >>> 26) | 0, Jn &= 67108863, I = Math.imul(Ot, ue), g = Math.imul(Ot, pe), g = g + Math.imul(Nt, ue) | 0, N = Math.imul(Nt, pe), I = I + Math.imul(wt, ye) | 0, g = g + Math.imul(wt, _e) | 0, g = g + Math.imul(Ct, ye) | 0, N = N + Math.imul(Ct, _e) | 0, I = I + Math.imul(yt, Gt) | 0, g = g + Math.imul(yt, zt) | 0, g = g + Math.imul(At, Gt) | 0, N = N + Math.imul(At, zt) | 0, I = I + Math.imul(_t, Wt) | 0, g = g + Math.imul(_t, Kt) | 0, g = g + Math.imul(Et, Wt) | 0, N = N + Math.imul(Et, Kt) | 0, I = I + Math.imul($t, Jt) | 0, g = g + Math.imul($t, Xt) | 0, g = g + Math.imul(xt, Jt) | 0, N = N + Math.imul(xt, Xt) | 0, I = I + Math.imul(Pt, Zt) | 0, g = g + Math.imul(Pt, Yt) | 0, g = g + Math.imul(It, Zt) | 0, N = N + Math.imul(It, Yt) | 0, I = I + Math.imul(ct, Qt) | 0, g = g + Math.imul(ct, qt) | 0, g = g + Math.imul(at, Qt) | 0, N = N + Math.imul(at, qt) | 0, I = I + Math.imul(m, te) | 0, g = g + Math.imul(m, Ce) | 0, g = g + Math.imul(B, te) | 0, N = N + Math.imul(B, Ce) | 0, I = I + Math.imul(U, Pe) | 0, g = g + Math.imul(U, le) | 0, g = g + Math.imul(q, Pe) | 0, N = N + Math.imul(q, le) | 0;
            var Xn = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (Xn >>> 26) | 0, Xn &= 67108863, I = Math.imul(Ot, ye), g = Math.imul(Ot, _e), g = g + Math.imul(Nt, ye) | 0, N = Math.imul(Nt, _e), I = I + Math.imul(wt, Gt) | 0, g = g + Math.imul(wt, zt) | 0, g = g + Math.imul(Ct, Gt) | 0, N = N + Math.imul(Ct, zt) | 0, I = I + Math.imul(yt, Wt) | 0, g = g + Math.imul(yt, Kt) | 0, g = g + Math.imul(At, Wt) | 0, N = N + Math.imul(At, Kt) | 0, I = I + Math.imul(_t, Jt) | 0, g = g + Math.imul(_t, Xt) | 0, g = g + Math.imul(Et, Jt) | 0, N = N + Math.imul(Et, Xt) | 0, I = I + Math.imul($t, Zt) | 0, g = g + Math.imul($t, Yt) | 0, g = g + Math.imul(xt, Zt) | 0, N = N + Math.imul(xt, Yt) | 0, I = I + Math.imul(Pt, Qt) | 0, g = g + Math.imul(Pt, qt) | 0, g = g + Math.imul(It, Qt) | 0, N = N + Math.imul(It, qt) | 0, I = I + Math.imul(ct, te) | 0, g = g + Math.imul(ct, Ce) | 0, g = g + Math.imul(at, te) | 0, N = N + Math.imul(at, Ce) | 0, I = I + Math.imul(m, Pe) | 0, g = g + Math.imul(m, le) | 0, g = g + Math.imul(B, Pe) | 0, N = N + Math.imul(B, le) | 0;
            var ji = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (ji >>> 26) | 0, ji &= 67108863, I = Math.imul(Ot, Gt), g = Math.imul(Ot, zt), g = g + Math.imul(Nt, Gt) | 0, N = Math.imul(Nt, zt), I = I + Math.imul(wt, Wt) | 0, g = g + Math.imul(wt, Kt) | 0, g = g + Math.imul(Ct, Wt) | 0, N = N + Math.imul(Ct, Kt) | 0, I = I + Math.imul(yt, Jt) | 0, g = g + Math.imul(yt, Xt) | 0, g = g + Math.imul(At, Jt) | 0, N = N + Math.imul(At, Xt) | 0, I = I + Math.imul(_t, Zt) | 0, g = g + Math.imul(_t, Yt) | 0, g = g + Math.imul(Et, Zt) | 0, N = N + Math.imul(Et, Yt) | 0, I = I + Math.imul($t, Qt) | 0, g = g + Math.imul($t, qt) | 0, g = g + Math.imul(xt, Qt) | 0, N = N + Math.imul(xt, qt) | 0, I = I + Math.imul(Pt, te) | 0, g = g + Math.imul(Pt, Ce) | 0, g = g + Math.imul(It, te) | 0, N = N + Math.imul(It, Ce) | 0, I = I + Math.imul(ct, Pe) | 0, g = g + Math.imul(ct, le) | 0, g = g + Math.imul(at, Pe) | 0, N = N + Math.imul(at, le) | 0;
            var Mn = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (Mn >>> 26) | 0, Mn &= 67108863, I = Math.imul(Ot, Wt), g = Math.imul(Ot, Kt), g = g + Math.imul(Nt, Wt) | 0, N = Math.imul(Nt, Kt), I = I + Math.imul(wt, Jt) | 0, g = g + Math.imul(wt, Xt) | 0, g = g + Math.imul(Ct, Jt) | 0, N = N + Math.imul(Ct, Xt) | 0, I = I + Math.imul(yt, Zt) | 0, g = g + Math.imul(yt, Yt) | 0, g = g + Math.imul(At, Zt) | 0, N = N + Math.imul(At, Yt) | 0, I = I + Math.imul(_t, Qt) | 0, g = g + Math.imul(_t, qt) | 0, g = g + Math.imul(Et, Qt) | 0, N = N + Math.imul(Et, qt) | 0, I = I + Math.imul($t, te) | 0, g = g + Math.imul($t, Ce) | 0, g = g + Math.imul(xt, te) | 0, N = N + Math.imul(xt, Ce) | 0, I = I + Math.imul(Pt, Pe) | 0, g = g + Math.imul(Pt, le) | 0, g = g + Math.imul(It, Pe) | 0, N = N + Math.imul(It, le) | 0;
            var Cn = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (Cn >>> 26) | 0, Cn &= 67108863, I = Math.imul(Ot, Jt), g = Math.imul(Ot, Xt), g = g + Math.imul(Nt, Jt) | 0, N = Math.imul(Nt, Xt), I = I + Math.imul(wt, Zt) | 0, g = g + Math.imul(wt, Yt) | 0, g = g + Math.imul(Ct, Zt) | 0, N = N + Math.imul(Ct, Yt) | 0, I = I + Math.imul(yt, Qt) | 0, g = g + Math.imul(yt, qt) | 0, g = g + Math.imul(At, Qt) | 0, N = N + Math.imul(At, qt) | 0, I = I + Math.imul(_t, te) | 0, g = g + Math.imul(_t, Ce) | 0, g = g + Math.imul(Et, te) | 0, N = N + Math.imul(Et, Ce) | 0, I = I + Math.imul($t, Pe) | 0, g = g + Math.imul($t, le) | 0, g = g + Math.imul(xt, Pe) | 0, N = N + Math.imul(xt, le) | 0;
            var Er = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (Er >>> 26) | 0, Er &= 67108863, I = Math.imul(Ot, Zt), g = Math.imul(Ot, Yt), g = g + Math.imul(Nt, Zt) | 0, N = Math.imul(Nt, Yt), I = I + Math.imul(wt, Qt) | 0, g = g + Math.imul(wt, qt) | 0, g = g + Math.imul(Ct, Qt) | 0, N = N + Math.imul(Ct, qt) | 0, I = I + Math.imul(yt, te) | 0, g = g + Math.imul(yt, Ce) | 0, g = g + Math.imul(At, te) | 0, N = N + Math.imul(At, Ce) | 0, I = I + Math.imul(_t, Pe) | 0, g = g + Math.imul(_t, le) | 0, g = g + Math.imul(Et, Pe) | 0, N = N + Math.imul(Et, le) | 0;
            var Zn = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (Zn >>> 26) | 0, Zn &= 67108863, I = Math.imul(Ot, Qt), g = Math.imul(Ot, qt), g = g + Math.imul(Nt, Qt) | 0, N = Math.imul(Nt, qt), I = I + Math.imul(wt, te) | 0, g = g + Math.imul(wt, Ce) | 0, g = g + Math.imul(Ct, te) | 0, N = N + Math.imul(Ct, Ce) | 0, I = I + Math.imul(yt, Pe) | 0, g = g + Math.imul(yt, le) | 0, g = g + Math.imul(At, Pe) | 0, N = N + Math.imul(At, le) | 0;
            var ts = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (ts >>> 26) | 0, ts &= 67108863, I = Math.imul(Ot, te), g = Math.imul(Ot, Ce), g = g + Math.imul(Nt, te) | 0, N = Math.imul(Nt, Ce), I = I + Math.imul(wt, Pe) | 0, g = g + Math.imul(wt, le) | 0, g = g + Math.imul(Ct, Pe) | 0, N = N + Math.imul(Ct, le) | 0;
            var es = (F + I | 0) + ((g & 8191) << 13) | 0;
            F = (N + (g >>> 13) | 0) + (es >>> 26) | 0, es &= 67108863, I = Math.imul(Ot, Pe), g = Math.imul(Ot, le), g = g + Math.imul(Nt, Pe) | 0, N = Math.imul(Nt, le);
            var rs = (F + I | 0) + ((g & 8191) << 13) | 0;
            return F = (N + (g >>> 13) | 0) + (rs >>> 26) | 0, rs &= 67108863, O[0] = ni, O[1] = si, O[2] = oi, O[3] = ai, O[4] = ui, O[5] = or, O[6] = Li, O[7] = Qn, O[8] = qi, O[9] = Jn, O[10] = Xn, O[11] = ji, O[12] = Mn, O[13] = Cn, O[14] = Er, O[15] = Zn, O[16] = ts, O[17] = es, O[18] = rs, F !== 0 && (O[19] = F, w.length++), w
        };
        Math.imul || (K = tt);

        function V(l, h, w) {
            w.negative = h.negative ^ l.negative, w.length = l.length + h.length;
            for (var S = 0, M = 0, O = 0; O < w.length - 1; O++) {
                var F = M;
                M = 0;
                for (var I = S & 67108863, g = Math.min(O, h.length - 1), N = Math.max(0, O - l.length + 1); N <= g; N++) {
                    var it = O - N,
                        dt = l.words[it] | 0,
                        _ = h.words[N] | 0,
                        Z = dt * _,
                        U = Z & 67108863;
                    F = F + (Z / 67108864 | 0) | 0, U = U + I | 0, I = U & 67108863, F = F + (U >>> 26) | 0, M += F >>> 26, F &= 67108863
                }
                w.words[O] = I, S = F, F = M
            }
            return S !== 0 ? w.words[O] = S : w.length--, w._strip()
        }

        function L(l, h, w) {
            return V(l, h, w)
        }
        a.prototype.mulTo = function(l, h) {
            var w, S = this.length + l.length;
            return this.length === 10 && l.length === 10 ? w = K(this, l, h) : S < 63 ? w = tt(this, l, h) : S < 1024 ? w = V(this, l, h) : w = L(this, l, h), w
        }, a.prototype.mul = function(l) {
            var h = new a(null);
            return h.words = new Array(this.length + l.length), this.mulTo(l, h)
        }, a.prototype.mulf = function(l) {
            var h = new a(null);
            return h.words = new Array(this.length + l.length), L(this, l, h)
        }, a.prototype.imul = function(l) {
            return this.clone().mulTo(l, this)
        }, a.prototype.imuln = function(l) {
            var h = l < 0;
            h && (l = -l), i(typeof l == "number"), i(l < 67108864);
            for (var w = 0, S = 0; S < this.length; S++) {
                var M = (this.words[S] | 0) * l,
                    O = (M & 67108863) + (w & 67108863);
                w >>= 26, w += M / 67108864 | 0, w += O >>> 26, this.words[S] = O & 67108863
            }
            return w !== 0 && (this.words[S] = w, this.length++), h ? this.ineg() : this
        }, a.prototype.muln = function(l) {
            return this.clone().imuln(l)
        }, a.prototype.sqr = function() {
            return this.mul(this)
        }, a.prototype.isqr = function() {
            return this.imul(this.clone())
        }, a.prototype.pow = function(l) {
            var h = G(l);
            if (h.length === 0) return new a(1);
            for (var w = this, S = 0; S < h.length && h[S] === 0; S++, w = w.sqr());
            if (++S < h.length)
                for (var M = w.sqr(); S < h.length; S++, M = M.sqr()) h[S] !== 0 && (w = w.mul(M));
            return w
        }, a.prototype.iushln = function(l) {
            i(typeof l == "number" && l >= 0);
            var h = l % 26,
                w = (l - h) / 26,
                S = 67108863 >>> 26 - h << 26 - h,
                M;
            if (h !== 0) {
                var O = 0;
                for (M = 0; M < this.length; M++) {
                    var F = this.words[M] & S,
                        I = (this.words[M] | 0) - F << h;
                    this.words[M] = I | O, O = F >>> 26 - h
                }
                O && (this.words[M] = O, this.length++)
            }
            if (w !== 0) {
                for (M = this.length - 1; M >= 0; M--) this.words[M + w] = this.words[M];
                for (M = 0; M < w; M++) this.words[M] = 0;
                this.length += w
            }
            return this._strip()
        }, a.prototype.ishln = function(l) {
            return i(this.negative === 0), this.iushln(l)
        }, a.prototype.iushrn = function(l, h, w) {
            i(typeof l == "number" && l >= 0);
            var S;
            h ? S = (h - h % 26) / 26 : S = 0;
            var M = l % 26,
                O = Math.min((l - M) / 26, this.length),
                F = 67108863 ^ 67108863 >>> M << M,
                I = w;
            if (S -= O, S = Math.max(0, S), I) {
                for (var g = 0; g < O; g++) I.words[g] = this.words[g];
                I.length = O
            }
            if (O !== 0)
                if (this.length > O)
                    for (this.length -= O, g = 0; g < this.length; g++) this.words[g] = this.words[g + O];
                else this.words[0] = 0, this.length = 1;
            var N = 0;
            for (g = this.length - 1; g >= 0 && (N !== 0 || g >= S); g--) {
                var it = this.words[g] | 0;
                this.words[g] = N << 26 - M | it >>> M, N = it & F
            }
            return I && N !== 0 && (I.words[I.length++] = N), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
        }, a.prototype.ishrn = function(l, h, w) {
            return i(this.negative === 0), this.iushrn(l, h, w)
        }, a.prototype.shln = function(l) {
            return this.clone().ishln(l)
        }, a.prototype.ushln = function(l) {
            return this.clone().iushln(l)
        }, a.prototype.shrn = function(l) {
            return this.clone().ishrn(l)
        }, a.prototype.ushrn = function(l) {
            return this.clone().iushrn(l)
        }, a.prototype.testn = function(l) {
            i(typeof l == "number" && l >= 0);
            var h = l % 26,
                w = (l - h) / 26,
                S = 1 << h;
            if (this.length <= w) return !1;
            var M = this.words[w];
            return !!(M & S)
        }, a.prototype.imaskn = function(l) {
            i(typeof l == "number" && l >= 0);
            var h = l % 26,
                w = (l - h) / 26;
            if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= w) return this;
            if (h !== 0 && w++, this.length = Math.min(w, this.length), h !== 0) {
                var S = 67108863 ^ 67108863 >>> h << h;
                this.words[this.length - 1] &= S
            }
            return this._strip()
        }, a.prototype.maskn = function(l) {
            return this.clone().imaskn(l)
        }, a.prototype.iaddn = function(l) {
            return i(typeof l == "number"), i(l < 67108864), l < 0 ? this.isubn(-l) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= l ? (this.words[0] = l - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(l), this.negative = 1, this) : this._iaddn(l)
        }, a.prototype._iaddn = function(l) {
            this.words[0] += l;
            for (var h = 0; h < this.length && this.words[h] >= 67108864; h++) this.words[h] -= 67108864, h === this.length - 1 ? this.words[h + 1] = 1 : this.words[h + 1]++;
            return this.length = Math.max(this.length, h + 1), this
        }, a.prototype.isubn = function(l) {
            if (i(typeof l == "number"), i(l < 67108864), l < 0) return this.iaddn(-l);
            if (this.negative !== 0) return this.negative = 0, this.iaddn(l), this.negative = 1, this;
            if (this.words[0] -= l, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
            else
                for (var h = 0; h < this.length && this.words[h] < 0; h++) this.words[h] += 67108864, this.words[h + 1] -= 1;
            return this._strip()
        }, a.prototype.addn = function(l) {
            return this.clone().iaddn(l)
        }, a.prototype.subn = function(l) {
            return this.clone().isubn(l)
        }, a.prototype.iabs = function() {
            return this.negative = 0, this
        }, a.prototype.abs = function() {
            return this.clone().iabs()
        }, a.prototype._ishlnsubmul = function(l, h, w) {
            var S = l.length + w,
                M;
            this._expand(S);
            var O, F = 0;
            for (M = 0; M < l.length; M++) {
                O = (this.words[M + w] | 0) + F;
                var I = (l.words[M] | 0) * h;
                O -= I & 67108863, F = (O >> 26) - (I / 67108864 | 0), this.words[M + w] = O & 67108863
            }
            for (; M < this.length - w; M++) O = (this.words[M + w] | 0) + F, F = O >> 26, this.words[M + w] = O & 67108863;
            if (F === 0) return this._strip();
            for (i(F === -1), F = 0, M = 0; M < this.length; M++) O = -(this.words[M] | 0) + F, F = O >> 26, this.words[M] = O & 67108863;
            return this.negative = 1, this._strip()
        }, a.prototype._wordDiv = function(l, h) {
            var w = this.length - l.length,
                S = this.clone(),
                M = l,
                O = M.words[M.length - 1] | 0,
                F = this._countBits(O);
            w = 26 - F, w !== 0 && (M = M.ushln(w), S.iushln(w), O = M.words[M.length - 1] | 0);
            var I = S.length - M.length,
                g;
            if (h !== "mod") {
                g = new a(null), g.length = I + 1, g.words = new Array(g.length);
                for (var N = 0; N < g.length; N++) g.words[N] = 0
            }
            var it = S.clone()._ishlnsubmul(M, 1, I);
            it.negative === 0 && (S = it, g && (g.words[I] = 1));
            for (var dt = I - 1; dt >= 0; dt--) {
                var _ = (S.words[M.length + dt] | 0) * 67108864 + (S.words[M.length + dt - 1] | 0);
                for (_ = Math.min(_ / O | 0, 67108863), S._ishlnsubmul(M, _, dt); S.negative !== 0;) _--, S.negative = 0, S._ishlnsubmul(M, 1, dt), S.isZero() || (S.negative ^= 1);
                g && (g.words[dt] = _)
            }
            return g && g._strip(), S._strip(), h !== "div" && w !== 0 && S.iushrn(w), {
                div: g || null,
                mod: S
            }
        }, a.prototype.divmod = function(l, h, w) {
            if (i(!l.isZero()), this.isZero()) return {
                div: new a(0),
                mod: new a(0)
            };
            var S, M, O;
            return this.negative !== 0 && l.negative === 0 ? (O = this.neg().divmod(l, h), h !== "mod" && (S = O.div.neg()), h !== "div" && (M = O.mod.neg(), w && M.negative !== 0 && M.iadd(l)), {
                div: S,
                mod: M
            }) : this.negative === 0 && l.negative !== 0 ? (O = this.divmod(l.neg(), h), h !== "mod" && (S = O.div.neg()), {
                div: S,
                mod: O.mod
            }) : this.negative & l.negative ? (O = this.neg().divmod(l.neg(), h), h !== "div" && (M = O.mod.neg(), w && M.negative !== 0 && M.isub(l)), {
                div: O.div,
                mod: M
            }) : l.length > this.length || this.cmp(l) < 0 ? {
                div: new a(0),
                mod: this
            } : l.length === 1 ? h === "div" ? {
                div: this.divn(l.words[0]),
                mod: null
            } : h === "mod" ? {
                div: null,
                mod: new a(this.modrn(l.words[0]))
            } : {
                div: this.divn(l.words[0]),
                mod: new a(this.modrn(l.words[0]))
            } : this._wordDiv(l, h)
        }, a.prototype.div = function(l) {
            return this.divmod(l, "div", !1).div
        }, a.prototype.mod = function(l) {
            return this.divmod(l, "mod", !1).mod
        }, a.prototype.umod = function(l) {
            return this.divmod(l, "mod", !0).mod
        }, a.prototype.divRound = function(l) {
            var h = this.divmod(l);
            if (h.mod.isZero()) return h.div;
            var w = h.div.negative !== 0 ? h.mod.isub(l) : h.mod,
                S = l.ushrn(1),
                M = l.andln(1),
                O = w.cmp(S);
            return O < 0 || M === 1 && O === 0 ? h.div : h.div.negative !== 0 ? h.div.isubn(1) : h.div.iaddn(1)
        }, a.prototype.modrn = function(l) {
            var h = l < 0;
            h && (l = -l), i(l <= 67108863);
            for (var w = (1 << 26) % l, S = 0, M = this.length - 1; M >= 0; M--) S = (w * S + (this.words[M] | 0)) % l;
            return h ? -S : S
        }, a.prototype.modn = function(l) {
            return this.modrn(l)
        }, a.prototype.idivn = function(l) {
            var h = l < 0;
            h && (l = -l), i(l <= 67108863);
            for (var w = 0, S = this.length - 1; S >= 0; S--) {
                var M = (this.words[S] | 0) + w * 67108864;
                this.words[S] = M / l | 0, w = M % l
            }
            return this._strip(), h ? this.ineg() : this
        }, a.prototype.divn = function(l) {
            return this.clone().idivn(l)
        }, a.prototype.egcd = function(l) {
            i(l.negative === 0), i(!l.isZero());
            var h = this,
                w = l.clone();
            h.negative !== 0 ? h = h.umod(l) : h = h.clone();
            for (var S = new a(1), M = new a(0), O = new a(0), F = new a(1), I = 0; h.isEven() && w.isEven();) h.iushrn(1), w.iushrn(1), ++I;
            for (var g = w.clone(), N = h.clone(); !h.isZero();) {
                for (var it = 0, dt = 1; !(h.words[0] & dt) && it < 26; ++it, dt <<= 1);
                if (it > 0)
                    for (h.iushrn(it); it-- > 0;)(S.isOdd() || M.isOdd()) && (S.iadd(g), M.isub(N)), S.iushrn(1), M.iushrn(1);
                for (var _ = 0, Z = 1; !(w.words[0] & Z) && _ < 26; ++_, Z <<= 1);
                if (_ > 0)
                    for (w.iushrn(_); _-- > 0;)(O.isOdd() || F.isOdd()) && (O.iadd(g), F.isub(N)), O.iushrn(1), F.iushrn(1);
                h.cmp(w) >= 0 ? (h.isub(w), S.isub(O), M.isub(F)) : (w.isub(h), O.isub(S), F.isub(M))
            }
            return {
                a: O,
                b: F,
                gcd: w.iushln(I)
            }
        }, a.prototype._invmp = function(l) {
            i(l.negative === 0), i(!l.isZero());
            var h = this,
                w = l.clone();
            h.negative !== 0 ? h = h.umod(l) : h = h.clone();
            for (var S = new a(1), M = new a(0), O = w.clone(); h.cmpn(1) > 0 && w.cmpn(1) > 0;) {
                for (var F = 0, I = 1; !(h.words[0] & I) && F < 26; ++F, I <<= 1);
                if (F > 0)
                    for (h.iushrn(F); F-- > 0;) S.isOdd() && S.iadd(O), S.iushrn(1);
                for (var g = 0, N = 1; !(w.words[0] & N) && g < 26; ++g, N <<= 1);
                if (g > 0)
                    for (w.iushrn(g); g-- > 0;) M.isOdd() && M.iadd(O), M.iushrn(1);
                h.cmp(w) >= 0 ? (h.isub(w), S.isub(M)) : (w.isub(h), M.isub(S))
            }
            var it;
            return h.cmpn(1) === 0 ? it = S : it = M, it.cmpn(0) < 0 && it.iadd(l), it
        }, a.prototype.gcd = function(l) {
            if (this.isZero()) return l.abs();
            if (l.isZero()) return this.abs();
            var h = this.clone(),
                w = l.clone();
            h.negative = 0, w.negative = 0;
            for (var S = 0; h.isEven() && w.isEven(); S++) h.iushrn(1), w.iushrn(1);
            do {
                for (; h.isEven();) h.iushrn(1);
                for (; w.isEven();) w.iushrn(1);
                var M = h.cmp(w);
                if (M < 0) {
                    var O = h;
                    h = w, w = O
                } else if (M === 0 || w.cmpn(1) === 0) break;
                h.isub(w)
            } while (!0);
            return w.iushln(S)
        }, a.prototype.invm = function(l) {
            return this.egcd(l).a.umod(l)
        }, a.prototype.isEven = function() {
            return (this.words[0] & 1) === 0
        }, a.prototype.isOdd = function() {
            return (this.words[0] & 1) === 1
        }, a.prototype.andln = function(l) {
            return this.words[0] & l
        }, a.prototype.bincn = function(l) {
            i(typeof l == "number");
            var h = l % 26,
                w = (l - h) / 26,
                S = 1 << h;
            if (this.length <= w) return this._expand(w + 1), this.words[w] |= S, this;
            for (var M = S, O = w; M !== 0 && O < this.length; O++) {
                var F = this.words[O] | 0;
                F += M, M = F >>> 26, F &= 67108863, this.words[O] = F
            }
            return M !== 0 && (this.words[O] = M, this.length++), this
        }, a.prototype.isZero = function() {
            return this.length === 1 && this.words[0] === 0
        }, a.prototype.cmpn = function(l) {
            var h = l < 0;
            if (this.negative !== 0 && !h) return -1;
            if (this.negative === 0 && h) return 1;
            this._strip();
            var w;
            if (this.length > 1) w = 1;
            else {
                h && (l = -l), i(l <= 67108863, "Number is too big");
                var S = this.words[0] | 0;
                w = S === l ? 0 : S < l ? -1 : 1
            }
            return this.negative !== 0 ? -w | 0 : w
        }, a.prototype.cmp = function(l) {
            if (this.negative !== 0 && l.negative === 0) return -1;
            if (this.negative === 0 && l.negative !== 0) return 1;
            var h = this.ucmp(l);
            return this.negative !== 0 ? -h | 0 : h
        }, a.prototype.ucmp = function(l) {
            if (this.length > l.length) return 1;
            if (this.length < l.length) return -1;
            for (var h = 0, w = this.length - 1; w >= 0; w--) {
                var S = this.words[w] | 0,
                    M = l.words[w] | 0;
                if (S !== M) {
                    S < M ? h = -1 : S > M && (h = 1);
                    break
                }
            }
            return h
        }, a.prototype.gtn = function(l) {
            return this.cmpn(l) === 1
        }, a.prototype.gt = function(l) {
            return this.cmp(l) === 1
        }, a.prototype.gten = function(l) {
            return this.cmpn(l) >= 0
        }, a.prototype.gte = function(l) {
            return this.cmp(l) >= 0
        }, a.prototype.ltn = function(l) {
            return this.cmpn(l) === -1
        }, a.prototype.lt = function(l) {
            return this.cmp(l) === -1
        }, a.prototype.lten = function(l) {
            return this.cmpn(l) <= 0
        }, a.prototype.lte = function(l) {
            return this.cmp(l) <= 0
        }, a.prototype.eqn = function(l) {
            return this.cmpn(l) === 0
        }, a.prototype.eq = function(l) {
            return this.cmp(l) === 0
        }, a.red = function(l) {
            return new lt(l)
        }, a.prototype.toRed = function(l) {
            return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), l.convertTo(this)._forceRed(l)
        }, a.prototype.fromRed = function() {
            return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
        }, a.prototype._forceRed = function(l) {
            return this.red = l, this
        }, a.prototype.forceRed = function(l) {
            return i(!this.red, "Already a number in reduction context"), this._forceRed(l)
        }, a.prototype.redAdd = function(l) {
            return i(this.red, "redAdd works only with red numbers"), this.red.add(this, l)
        }, a.prototype.redIAdd = function(l) {
            return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, l)
        }, a.prototype.redSub = function(l) {
            return i(this.red, "redSub works only with red numbers"), this.red.sub(this, l)
        }, a.prototype.redISub = function(l) {
            return i(this.red, "redISub works only with red numbers"), this.red.isub(this, l)
        }, a.prototype.redShl = function(l) {
            return i(this.red, "redShl works only with red numbers"), this.red.shl(this, l)
        }, a.prototype.redMul = function(l) {
            return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, l), this.red.mul(this, l)
        }, a.prototype.redIMul = function(l) {
            return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, l), this.red.imul(this, l)
        }, a.prototype.redSqr = function() {
            return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
        }, a.prototype.redISqr = function() {
            return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
        }, a.prototype.redSqrt = function() {
            return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
        }, a.prototype.redInvm = function() {
            return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
        }, a.prototype.redNeg = function() {
            return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
        }, a.prototype.redPow = function(l) {
            return i(this.red && !l.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, l)
        };
        var $ = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };

        function z(l, h) {
            this.name = l, this.p = new a(h, 16), this.n = this.p.bitLength(), this.k = new a(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
        }
        z.prototype._tmp = function() {
            var l = new a(null);
            return l.words = new Array(Math.ceil(this.n / 13)), l
        }, z.prototype.ireduce = function(l) {
            var h = l,
                w;
            do this.split(h, this.tmp), h = this.imulK(h), h = h.iadd(this.tmp), w = h.bitLength(); while (w > this.n);
            var S = w < this.n ? -1 : h.ucmp(this.p);
            return S === 0 ? (h.words[0] = 0, h.length = 1) : S > 0 ? h.isub(this.p) : h.strip !== void 0 ? h.strip() : h._strip(), h
        }, z.prototype.split = function(l, h) {
            l.iushrn(this.n, 0, h)
        }, z.prototype.imulK = function(l) {
            return l.imul(this.k)
        };

        function y() {
            z.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }
        s(y, z), y.prototype.split = function(l, h) {
            for (var w = 4194303, S = Math.min(l.length, 9), M = 0; M < S; M++) h.words[M] = l.words[M];
            if (h.length = S, l.length <= 9) {
                l.words[0] = 0, l.length = 1;
                return
            }
            var O = l.words[9];
            for (h.words[h.length++] = O & w, M = 10; M < l.length; M++) {
                var F = l.words[M] | 0;
                l.words[M - 10] = (F & w) << 4 | O >>> 22, O = F
            }
            O >>>= 22, l.words[M - 10] = O, O === 0 && l.length > 10 ? l.length -= 10 : l.length -= 9
        }, y.prototype.imulK = function(l) {
            l.words[l.length] = 0, l.words[l.length + 1] = 0, l.length += 2;
            for (var h = 0, w = 0; w < l.length; w++) {
                var S = l.words[w] | 0;
                h += S * 977, l.words[w] = h & 67108863, h = S * 64 + (h / 67108864 | 0)
            }
            return l.words[l.length - 1] === 0 && (l.length--, l.words[l.length - 1] === 0 && l.length--), l
        };

        function T() {
            z.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }
        s(T, z);

        function nt() {
            z.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }
        s(nt, z);

        function ft() {
            z.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }
        s(ft, z), ft.prototype.imulK = function(l) {
            for (var h = 0, w = 0; w < l.length; w++) {
                var S = (l.words[w] | 0) * 19 + h,
                    M = S & 67108863;
                S >>>= 26, l.words[w] = M, h = S
            }
            return h !== 0 && (l.words[l.length++] = h), l
        }, a._prime = function(l) {
            if ($[l]) return $[l];
            var h;
            if (l === "k256") h = new y;
            else if (l === "p224") h = new T;
            else if (l === "p192") h = new nt;
            else if (l === "p25519") h = new ft;
            else throw new Error("Unknown prime " + l);
            return $[l] = h, h
        };

        function lt(l) {
            if (typeof l == "string") {
                var h = a._prime(l);
                this.m = h.p, this.prime = h
            } else i(l.gtn(1), "modulus must be greater than 1"), this.m = l, this.prime = null
        }
        lt.prototype._verify1 = function(l) {
            i(l.negative === 0, "red works only with positives"), i(l.red, "red works only with red numbers")
        }, lt.prototype._verify2 = function(l, h) {
            i((l.negative | h.negative) === 0, "red works only with positives"), i(l.red && l.red === h.red, "red works only with red numbers")
        }, lt.prototype.imod = function(l) {
            return this.prime ? this.prime.ireduce(l)._forceRed(this) : (b(l, l.umod(this.m)._forceRed(this)), l)
        }, lt.prototype.neg = function(l) {
            return l.isZero() ? l.clone() : this.m.sub(l)._forceRed(this)
        }, lt.prototype.add = function(l, h) {
            this._verify2(l, h);
            var w = l.add(h);
            return w.cmp(this.m) >= 0 && w.isub(this.m), w._forceRed(this)
        }, lt.prototype.iadd = function(l, h) {
            this._verify2(l, h);
            var w = l.iadd(h);
            return w.cmp(this.m) >= 0 && w.isub(this.m), w
        }, lt.prototype.sub = function(l, h) {
            this._verify2(l, h);
            var w = l.sub(h);
            return w.cmpn(0) < 0 && w.iadd(this.m), w._forceRed(this)
        }, lt.prototype.isub = function(l, h) {
            this._verify2(l, h);
            var w = l.isub(h);
            return w.cmpn(0) < 0 && w.iadd(this.m), w
        }, lt.prototype.shl = function(l, h) {
            return this._verify1(l), this.imod(l.ushln(h))
        }, lt.prototype.imul = function(l, h) {
            return this._verify2(l, h), this.imod(l.imul(h))
        }, lt.prototype.mul = function(l, h) {
            return this._verify2(l, h), this.imod(l.mul(h))
        }, lt.prototype.isqr = function(l) {
            return this.imul(l, l.clone())
        }, lt.prototype.sqr = function(l) {
            return this.mul(l, l)
        }, lt.prototype.sqrt = function(l) {
            if (l.isZero()) return l.clone();
            var h = this.m.andln(3);
            if (i(h % 2 === 1), h === 3) {
                var w = this.m.add(new a(1)).iushrn(2);
                return this.pow(l, w)
            }
            for (var S = this.m.subn(1), M = 0; !S.isZero() && S.andln(1) === 0;) M++, S.iushrn(1);
            i(!S.isZero());
            var O = new a(1).toRed(this),
                F = O.redNeg(),
                I = this.m.subn(1).iushrn(1),
                g = this.m.bitLength();
            for (g = new a(2 * g * g).toRed(this); this.pow(g, I).cmp(F) !== 0;) g.redIAdd(F);
            for (var N = this.pow(g, S), it = this.pow(l, S.addn(1).iushrn(1)), dt = this.pow(l, S), _ = M; dt.cmp(O) !== 0;) {
                for (var Z = dt, U = 0; Z.cmp(O) !== 0; U++) Z = Z.redSqr();
                i(U < _);
                var q = this.pow(N, new a(1).iushln(_ - U - 1));
                it = it.redMul(q), N = q.redSqr(), dt = dt.redMul(N), _ = U
            }
            return it
        }, lt.prototype.invm = function(l) {
            var h = l._invmp(this.m);
            return h.negative !== 0 ? (h.negative = 0, this.imod(h).redNeg()) : this.imod(h)
        }, lt.prototype.pow = function(l, h) {
            if (h.isZero()) return new a(1).toRed(this);
            if (h.cmpn(1) === 0) return l.clone();
            var w = 4,
                S = new Array(1 << w);
            S[0] = new a(1).toRed(this), S[1] = l;
            for (var M = 2; M < S.length; M++) S[M] = this.mul(S[M - 1], l);
            var O = S[0],
                F = 0,
                I = 0,
                g = h.bitLength() % 26;
            for (g === 0 && (g = 26), M = h.length - 1; M >= 0; M--) {
                for (var N = h.words[M], it = g - 1; it >= 0; it--) {
                    var dt = N >> it & 1;
                    if (O !== S[0] && (O = this.sqr(O)), dt === 0 && F === 0) {
                        I = 0;
                        continue
                    }
                    F <<= 1, F |= dt, I++, !(I !== w && (M !== 0 || it !== 0)) && (O = this.mul(O, S[F]), I = 0, F = 0)
                }
                g = 26
            }
            return O
        }, lt.prototype.convertTo = function(l) {
            var h = l.umod(this.m);
            return h === l ? h.clone() : h
        }, lt.prototype.convertFrom = function(l) {
            var h = l.clone();
            return h.red = null, h
        }, a.mont = function(l) {
            return new mt(l)
        };

        function mt(l) {
            lt.call(this, l), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new a(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
        }
        s(mt, lt), mt.prototype.convertTo = function(l) {
            return this.imod(l.ushln(this.shift))
        }, mt.prototype.convertFrom = function(l) {
            var h = this.imod(l.mul(this.rinv));
            return h.red = null, h
        }, mt.prototype.imul = function(l, h) {
            if (l.isZero() || h.isZero()) return l.words[0] = 0, l.length = 1, l;
            var w = l.imul(h),
                S = w.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                M = w.isub(S).iushrn(this.shift),
                O = M;
            return M.cmp(this.m) >= 0 ? O = M.isub(this.m) : M.cmpn(0) < 0 && (O = M.iadd(this.m)), O._forceRed(this)
        }, mt.prototype.mul = function(l, h) {
            if (l.isZero() || h.isZero()) return new a(0)._forceRed(this);
            var w = l.mul(h),
                S = w.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                M = w.isub(S).iushrn(this.shift),
                O = M;
            return M.cmp(this.m) >= 0 ? O = M.isub(this.m) : M.cmpn(0) < 0 && (O = M.iadd(this.m)), O._forceRed(this)
        }, mt.prototype.invm = function(l) {
            var h = this.imod(l._invmp(this.m).mul(this.r2));
            return h._forceRed(this)
        }
    })(r, Y1)
})(Z1);
var ne = Z1.exports;
const tg = "bignumber/5.7.0";
var Hu = ne.BN;
const En = new pr(tg),
    Rh = {},
    j0 = 9007199254740991;

function g5(r) {
    return r != null && (Rr.isBigNumber(r) || typeof r == "number" && r % 1 === 0 || typeof r == "string" && !!r.match(/^-?[0-9]+$/) || ei(r) || typeof r == "bigint" || po(r))
}
let $0 = !1,
    Rr = class Ri {
        constructor(t, e) {
            t !== Rh && En.throwError("cannot call constructor directly; use BigNumber.from", pr.errors.UNSUPPORTED_OPERATION, {
                operation: "new (BigNumber)"
            }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
        }
        fromTwos(t) {
            return qr(me(this).fromTwos(t))
        }
        toTwos(t) {
            return qr(me(this).toTwos(t))
        }
        abs() {
            return this._hex[0] === "-" ? Ri.from(this._hex.substring(1)) : this
        }
        add(t) {
            return qr(me(this).add(me(t)))
        }
        sub(t) {
            return qr(me(this).sub(me(t)))
        }
        div(t) {
            return Ri.from(t).isZero() && vi("division-by-zero", "div"), qr(me(this).div(me(t)))
        }
        mul(t) {
            return qr(me(this).mul(me(t)))
        }
        mod(t) {
            const e = me(t);
            return e.isNeg() && vi("division-by-zero", "mod"), qr(me(this).umod(e))
        }
        pow(t) {
            const e = me(t);
            return e.isNeg() && vi("negative-power", "pow"), qr(me(this).pow(e))
        }
        and(t) {
            const e = me(t);
            return (this.isNegative() || e.isNeg()) && vi("unbound-bitwise-result", "and"), qr(me(this).and(e))
        }
        or(t) {
            const e = me(t);
            return (this.isNegative() || e.isNeg()) && vi("unbound-bitwise-result", "or"), qr(me(this).or(e))
        }
        xor(t) {
            const e = me(t);
            return (this.isNegative() || e.isNeg()) && vi("unbound-bitwise-result", "xor"), qr(me(this).xor(e))
        }
        mask(t) {
            return (this.isNegative() || t < 0) && vi("negative-width", "mask"), qr(me(this).maskn(t))
        }
        shl(t) {
            return (this.isNegative() || t < 0) && vi("negative-width", "shl"), qr(me(this).shln(t))
        }
        shr(t) {
            return (this.isNegative() || t < 0) && vi("negative-width", "shr"), qr(me(this).shrn(t))
        }
        eq(t) {
            return me(this).eq(me(t))
        }
        lt(t) {
            return me(this).lt(me(t))
        }
        lte(t) {
            return me(this).lte(me(t))
        }
        gt(t) {
            return me(this).gt(me(t))
        }
        gte(t) {
            return me(this).gte(me(t))
        }
        isNegative() {
            return this._hex[0] === "-"
        }
        isZero() {
            return me(this).isZero()
        }
        toNumber() {
            try {
                return me(this).toNumber()
            } catch {
                vi("overflow", "toNumber", this.toString())
            }
            return null
        }
        toBigInt() {
            try {
                return BigInt(this.toString())
            } catch {}
            return En.throwError("this platform does not support BigInt", pr.errors.UNSUPPORTED_OPERATION, {
                value: this.toString()
            })
        }
        toString() {
            return arguments.length > 0 && (arguments[0] === 10 ? $0 || ($0 = !0, En.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? En.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", pr.errors.UNEXPECTED_ARGUMENT, {}) : En.throwError("BigNumber.toString does not accept parameters", pr.errors.UNEXPECTED_ARGUMENT, {})), me(this).toString(10)
        }
        toHexString() {
            return this._hex
        }
        toJSON(t) {
            return {
                type: "BigNumber",
                hex: this.toHexString()
            }
        }
        static from(t) {
            if (t instanceof Ri) return t;
            if (typeof t == "string") return t.match(/^-?0x[0-9a-f]+$/i) ? new Ri(Rh, ra(t)) : t.match(/^-?[0-9]+$/) ? new Ri(Rh, ra(new Hu(t))) : En.throwArgumentError("invalid BigNumber string", "value", t);
            if (typeof t == "number") return t % 1 && vi("underflow", "BigNumber.from", t), (t >= j0 || t <= -j0) && vi("overflow", "BigNumber.from", t), Ri.from(String(t));
            const e = t;
            if (typeof e == "bigint") return Ri.from(e.toString());
            if (po(e)) return Ri.from(Mr(e));
            if (e)
                if (e.toHexString) {
                    const i = e.toHexString();
                    if (typeof i == "string") return Ri.from(i)
                } else {
                    let i = e._hex;
                    if (i == null && e.type === "BigNumber" && (i = e.hex), typeof i == "string" && (ei(i) || i[0] === "-" && ei(i.substring(1)))) return Ri.from(i)
                }
            return En.throwArgumentError("invalid BigNumber value", "value", t)
        }
        static isBigNumber(t) {
            return !!(t && t._isBigNumber)
        }
    };

function ra(r) {
    if (typeof r != "string") return ra(r.toString(16));
    if (r[0] === "-") return r = r.substring(1), r[0] === "-" && En.throwArgumentError("invalid hex", "value", r), r = ra(r), r === "0x00" ? r : "-" + r;
    if (r.substring(0, 2) !== "0x" && (r = "0x" + r), r === "0x") return "0x00";
    for (r.length % 2 && (r = "0x0" + r.substring(2)); r.length > 4 && r.substring(0, 4) === "0x00";) r = "0x" + r.substring(4);
    return r
}

function qr(r) {
    return Rr.from(ra(r))
}

function me(r) {
    const t = Rr.from(r).toHexString();
    return t[0] === "-" ? new Hu("-" + t.substring(3), 16) : new Hu(t.substring(2), 16)
}

function vi(r, t, e) {
    const i = {
        fault: r,
        operation: t
    };
    return e != null && (i.value = e), En.throwError(r, pr.errors.NUMERIC_FAULT, i)
}

function m5(r) {
    return new Hu(r, 36).toString(16)
}
const Cr = new pr(tg),
    Qo = {},
    eg = Rr.from(0),
    rg = Rr.from(-1);

function ig(r, t, e, i) {
    const s = {
        fault: t,
        operation: e
    };
    return i !== void 0 && (s.value = i), Cr.throwError(r, pr.errors.NUMERIC_FAULT, s)
}
let Jo = "0";
for (; Jo.length < 256;) Jo += Jo;

function Hl(r) {
    if (typeof r != "number") try {
        r = Rr.from(r).toNumber()
    } catch {}
    return typeof r == "number" && r >= 0 && r <= 256 && !(r % 1) ? "1" + Jo.substring(0, r) : Cr.throwArgumentError("invalid decimal size", "decimals", r)
}

function Th(r, t) {
    t == null && (t = 0);
    const e = Hl(t);
    r = Rr.from(r);
    const i = r.lt(eg);
    i && (r = r.mul(rg));
    let s = r.mod(e).toString();
    for (; s.length < e.length - 1;) s = "0" + s;
    s = s.match(/^([0-9]*[1-9]|0)(0*)/)[1];
    const a = r.div(e).toString();
    return e.length === 1 ? r = a : r = a + "." + s, i && (r = "-" + r), r
}

function yn(r, t) {
    t == null && (t = 0);
    const e = Hl(t);
    (typeof r != "string" || !r.match(/^-?[0-9.]+$/)) && Cr.throwArgumentError("invalid decimal value", "value", r);
    const i = r.substring(0, 1) === "-";
    i && (r = r.substring(1)), r === "." && Cr.throwArgumentError("missing value", "value", r);
    const s = r.split(".");
    s.length > 2 && Cr.throwArgumentError("too many decimal points", "value", r);
    let a = s[0],
        c = s[1];
    for (a || (a = "0"), c || (c = "0"); c[c.length - 1] === "0";) c = c.substring(0, c.length - 1);
    for (c.length > e.length - 1 && ig("fractional component exceeds decimals", "underflow", "parseFixed"), c === "" && (c = "0"); c.length < e.length - 1;) c += "0";
    const f = Rr.from(a),
        p = Rr.from(c);
    let d = f.mul(e).add(p);
    return i && (d = d.mul(rg)), d
}
let Fh = class yl {
        constructor(t, e, i, s) {
            t !== Qo && Cr.throwError("cannot use FixedFormat constructor; use FixedFormat.from", pr.errors.UNSUPPORTED_OPERATION, {
                operation: "new FixedFormat"
            }), this.signed = e, this.width = i, this.decimals = s, this.name = (e ? "" : "u") + "fixed" + String(i) + "x" + String(s), this._multiplier = Hl(s), Object.freeze(this)
        }
        static from(t) {
            if (t instanceof yl) return t;
            typeof t == "number" && (t = `fixed128x${t}`);
            let e = !0,
                i = 128,
                s = 18;
            if (typeof t == "string") {
                if (t !== "fixed")
                    if (t === "ufixed") e = !1;
                    else {
                        const a = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                        a || Cr.throwArgumentError("invalid fixed format", "format", t), e = a[1] !== "u", i = parseInt(a[2]), s = parseInt(a[3])
                    }
            } else if (t) {
                const a = (c, f, p) => t[c] == null ? p : (typeof t[c] !== f && Cr.throwArgumentError("invalid fixed format (" + c + " not " + f + ")", "format." + c, t[c]), t[c]);
                e = a("signed", "boolean", e), i = a("width", "number", i), s = a("decimals", "number", s)
            }
            return i % 8 && Cr.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i), s > 80 && Cr.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", s), new yl(Qo, e, i, s)
        }
    },
    ng = class xr {
        constructor(t, e, i, s) {
            t !== Qo && Cr.throwError("cannot use FixedNumber constructor; use FixedNumber.from", pr.errors.UNSUPPORTED_OPERATION, {
                operation: "new FixedFormat"
            }), this.format = s, this._hex = e, this._value = i, this._isFixedNumber = !0, Object.freeze(this)
        }
        _checkFormat(t) {
            this.format.name !== t.format.name && Cr.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
        }
        addUnsafe(t) {
            this._checkFormat(t);
            const e = yn(this._value, this.format.decimals),
                i = yn(t._value, t.format.decimals);
            return xr.fromValue(e.add(i), this.format.decimals, this.format)
        }
        subUnsafe(t) {
            this._checkFormat(t);
            const e = yn(this._value, this.format.decimals),
                i = yn(t._value, t.format.decimals);
            return xr.fromValue(e.sub(i), this.format.decimals, this.format)
        }
        mulUnsafe(t) {
            this._checkFormat(t);
            const e = yn(this._value, this.format.decimals),
                i = yn(t._value, t.format.decimals);
            return xr.fromValue(e.mul(i).div(this.format._multiplier), this.format.decimals, this.format)
        }
        divUnsafe(t) {
            this._checkFormat(t);
            const e = yn(this._value, this.format.decimals),
                i = yn(t._value, t.format.decimals);
            return xr.fromValue(e.mul(this.format._multiplier).div(i), this.format.decimals, this.format)
        }
        floor() {
            const t = this.toString().split(".");
            t.length === 1 && t.push("0");
            let e = xr.from(t[0], this.format);
            const i = !t[1].match(/^(0*)$/);
            return this.isNegative() && i && (e = e.subUnsafe(z0.toFormat(e.format))), e
        }
        ceiling() {
            const t = this.toString().split(".");
            t.length === 1 && t.push("0");
            let e = xr.from(t[0], this.format);
            const i = !t[1].match(/^(0*)$/);
            return !this.isNegative() && i && (e = e.addUnsafe(z0.toFormat(e.format))), e
        }
        round(t) {
            t == null && (t = 0);
            const e = this.toString().split(".");
            if (e.length === 1 && e.push("0"), (t < 0 || t > 80 || t % 1) && Cr.throwArgumentError("invalid decimal count", "decimals", t), e[1].length <= t) return this;
            const i = xr.from("1" + Jo.substring(0, t), this.format),
                s = v5.toFormat(this.format);
            return this.mulUnsafe(i).addUnsafe(s).floor().divUnsafe(i)
        }
        isZero() {
            return this._value === "0.0" || this._value === "0"
        }
        isNegative() {
            return this._value[0] === "-"
        }
        toString() {
            return this._value
        }
        toHexString(t) {
            if (t == null) return this._hex;
            t % 8 && Cr.throwArgumentError("invalid byte width", "width", t);
            const e = Rr.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
            return tn(e, t / 8)
        }
        toUnsafeFloat() {
            return parseFloat(this.toString())
        }
        toFormat(t) {
            return xr.fromString(this._value, t)
        }
        static fromValue(t, e, i) {
            return i == null && e != null && !g5(e) && (i = e, e = null), e == null && (e = 0), i == null && (i = "fixed"), xr.fromString(Th(t, e), Fh.from(i))
        }
        static fromString(t, e) {
            e == null && (e = "fixed");
            const i = Fh.from(e),
                s = yn(t, i.decimals);
            !i.signed && s.lt(eg) && ig("unsigned value cannot be negative", "overflow", "value", t);
            let a = null;
            i.signed ? a = s.toTwos(i.width).toHexString() : (a = s.toHexString(), a = tn(a, i.width / 8));
            const c = Th(s, i.decimals);
            return new xr(Qo, a, c, i)
        }
        static fromBytes(t, e) {
            e == null && (e = "fixed");
            const i = Fh.from(e);
            if (We(t).length > i.width / 8) throw new Error("overflow");
            let s = Rr.from(t);
            i.signed && (s = s.fromTwos(i.width));
            const a = s.toTwos((i.signed ? 0 : 1) + i.width).toHexString(),
                c = Th(s, i.decimals);
            return new xr(Qo, a, c, i)
        }
        static from(t, e) {
            if (typeof t == "string") return xr.fromString(t, e);
            if (po(t)) return xr.fromBytes(t, e);
            try {
                return xr.fromValue(t, 0, e)
            } catch (i) {
                if (i.code !== pr.errors.INVALID_ARGUMENT) throw i
            }
            return Cr.throwArgumentError("invalid FixedNumber value", "value", t)
        }
        static isFixedNumber(t) {
            return !!(t && t._isFixedNumber)
        }
    };
const z0 = ng.from(1),
    v5 = ng.from("0.5"),
    y5 = "strings/5.7.0",
    w5 = new pr(y5);
var Ku;
(function(r) {
    r.current = "", r.NFC = "NFC", r.NFD = "NFD", r.NFKC = "NFKC", r.NFKD = "NFKD"
})(Ku || (Ku = {}));
var k0;
(function(r) {
    r.UNEXPECTED_CONTINUE = "unexpected continuation byte", r.BAD_PREFIX = "bad codepoint prefix", r.OVERRUN = "string overrun", r.MISSING_CONTINUE = "missing continuation byte", r.OUT_OF_RANGE = "out of UTF-8 range", r.UTF16_SURROGATE = "UTF-16 surrogate", r.OVERLONG = "overlong representation"
})(k0 || (k0 = {}));

function Bh(r, t = Ku.current) {
    t != Ku.current && (w5.checkNormalize(), r = r.normalize(t));
    let e = [];
    for (let i = 0; i < r.length; i++) {
        const s = r.charCodeAt(i);
        if (s < 128) e.push(s);
        else if (s < 2048) e.push(s >> 6 | 192), e.push(s & 63 | 128);
        else if ((s & 64512) == 55296) {
            i++;
            const a = r.charCodeAt(i);
            if (i >= r.length || (a & 64512) !== 56320) throw new Error("invalid utf-8 string");
            const c = 65536 + ((s & 1023) << 10) + (a & 1023);
            e.push(c >> 18 | 240), e.push(c >> 12 & 63 | 128), e.push(c >> 6 & 63 | 128), e.push(c & 63 | 128)
        } else e.push(s >> 12 | 224), e.push(s >> 6 & 63 | 128), e.push(s & 63 | 128)
    }
    return We(e)
}

function b5(r) {
    if (r.length % 4 !== 0) throw new Error("bad data");
    let t = [];
    for (let e = 0; e < r.length; e += 4) t.push(parseInt(r.substring(e, e + 4), 16));
    return t
}

function Uh(r, t) {
    t || (t = function(s) {
        return [parseInt(s, 16)]
    });
    let e = 0,
        i = {};
    return r.split(",").forEach(s => {
        let a = s.split(":");
        e += parseInt(a[0], 16), i[e] = t(a[1])
    }), i
}

function H0(r) {
    let t = 0;
    return r.split(",").map(e => {
        let i = e.split("-");
        i.length === 1 ? i[1] = "0" : i[1] === "" && (i[1] = "1");
        let s = t + parseInt(i[0], 16);
        return t = parseInt(i[1], 16), {
            l: s,
            h: t
        }
    })
}
H0("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(r => parseInt(r, 16)), Uh("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Uh("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Uh("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", b5), H0("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");

function _5(r) {
    r = atob(r);
    const t = [];
    for (let e = 0; e < r.length; e++) t.push(r.charCodeAt(e));
    return We(t)
}

function sg(r, t) {
    t == null && (t = 1);
    const e = [],
        i = e.forEach,
        s = function(a, c) {
            i.call(a, function(f) {
                c > 0 && Array.isArray(f) ? s(f, c - 1) : e.push(f)
            })
        };
    return s(r, t), e
}

function E5(r) {
    const t = {};
    for (let e = 0; e < r.length; e++) {
        const i = r[e];
        t[i[0]] = i[1]
    }
    return t
}

function A5(r) {
    let t = 0;

    function e() {
        return r[t++] << 8 | r[t++]
    }
    let i = e(),
        s = 1,
        a = [0, 1];
    for (let $ = 1; $ < i; $++) a.push(s += e());
    let c = e(),
        f = t;
    t += c;
    let p = 0,
        d = 0;

    function b() {
        return p == 0 && (d = d << 8 | r[t++], p = 8), d >> --p & 1
    }
    const E = 31,
        x = Math.pow(2, E),
        D = x >>> 1,
        P = D >> 1,
        Y = x - 1;
    let G = 0;
    for (let $ = 0; $ < E; $++) G = G << 1 | b();
    let tt = [],
        K = 0,
        V = x;
    for (;;) {
        let $ = Math.floor(((G - K + 1) * s - 1) / V),
            z = 0,
            y = i;
        for (; y - z > 1;) {
            let ft = z + y >>> 1;
            $ < a[ft] ? y = ft : z = ft
        }
        if (z == 0) break;
        tt.push(z);
        let T = K + Math.floor(V * a[z] / s),
            nt = K + Math.floor(V * a[z + 1] / s) - 1;
        for (; !((T ^ nt) & D);) G = G << 1 & Y | b(), T = T << 1 & Y, nt = nt << 1 & Y | 1;
        for (; T & ~nt & P;) G = G & D | G << 1 & Y >>> 1 | b(), T = T << 1 ^ D, nt = (nt ^ D) << 1 | D | 1;
        K = T, V = 1 + nt - T
    }
    let L = i - 4;
    return tt.map($ => {
        switch ($ - L) {
            case 3:
                return L + 65792 + (r[f++] << 16 | r[f++] << 8 | r[f++]);
            case 2:
                return L + 256 + (r[f++] << 8 | r[f++]);
            case 1:
                return L + r[f++];
            default:
                return $ - 1
        }
    })
}

function S5(r) {
    let t = 0;
    return () => r[t++]
}

function I5(r) {
    return S5(A5(r))
}

function D5(r) {
    return r & 1 ? ~r >> 1 : r >> 1
}

function x5(r, t) {
    let e = Array(r);
    for (let i = 0; i < r; i++) e[i] = 1 + t();
    return e
}

function K0(r, t) {
    let e = Array(r);
    for (let i = 0, s = -1; i < r; i++) e[i] = s += 1 + t();
    return e
}

function M5(r, t) {
    let e = Array(r);
    for (let i = 0, s = 0; i < r; i++) e[i] = s += D5(t());
    return e
}

function Vu(r, t) {
    let e = K0(r(), r),
        i = r(),
        s = K0(i, r),
        a = x5(i, r);
    for (let c = 0; c < i; c++)
        for (let f = 0; f < a[c]; f++) e.push(s[c] + f);
    return t ? e.map(c => t[c]) : e
}

function C5(r) {
    let t = [];
    for (;;) {
        let e = r();
        if (e == 0) break;
        t.push(O5(e, r))
    }
    for (;;) {
        let e = r() - 1;
        if (e < 0) break;
        t.push(N5(e, r))
    }
    return E5(sg(t))
}

function P5(r) {
    let t = [];
    for (;;) {
        let e = r();
        if (e == 0) break;
        t.push(e)
    }
    return t
}

function og(r, t, e) {
    let i = Array(r).fill(void 0).map(() => []);
    for (let s = 0; s < t; s++) M5(r, e).forEach((a, c) => i[c].push(a));
    return i
}

function O5(r, t) {
    let e = 1 + t(),
        i = t(),
        s = P5(t),
        a = og(s.length, 1 + r, t);
    return sg(a.map((c, f) => {
        const p = c[0],
            d = c.slice(1);
        return Array(s[f]).fill(void 0).map((b, E) => {
            let x = E * i;
            return [p + E * e, d.map(D => D + x)]
        })
    }))
}

function N5(r, t) {
    let e = 1 + t();
    return og(e, 1 + r, t).map(i => [i[0], i.slice(1)])
}

function R5(r) {
    let t = Vu(r).sort((i, s) => i - s);
    return e();

    function e() {
        let i = [];
        for (;;) {
            let d = Vu(r, t);
            if (d.length == 0) break;
            i.push({
                set: new Set(d),
                node: e()
            })
        }
        i.sort((d, b) => b.set.size - d.set.size);
        let s = r(),
            a = s % 3;
        s = s / 3 | 0;
        let c = !!(s & 1);
        s >>= 1;
        let f = s == 1,
            p = s == 2;
        return {
            branches: i,
            valid: a,
            fe0f: c,
            save: f,
            check: p
        }
    }
}

function T5() {
    return I5(_5("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="))
}
const _u = T5();
new Set(Vu(_u)), new Set(Vu(_u)), C5(_u), R5(_u);
const F5 = new Uint8Array(32);
F5.fill(0);
const B5 = `Ethereum Signed Message:
`;

function ag(r) {
    return typeof r == "string" && (r = Bh(r)), kl(c5([Bh(B5), Bh(String(r.length)), r]))
}
const U5 = "address/5.7.0",
    Go = new pr(U5);

function V0(r) {
    ei(r, 20) || Go.throwArgumentError("invalid address", "address", r), r = r.toLowerCase();
    const t = r.substring(2).split(""),
        e = new Uint8Array(40);
    for (let s = 0; s < 40; s++) e[s] = t[s].charCodeAt(0);
    const i = We(kl(e));
    for (let s = 0; s < 40; s += 2) i[s >> 1] >> 4 >= 8 && (t[s] = t[s].toUpperCase()), (i[s >> 1] & 15) >= 8 && (t[s + 1] = t[s + 1].toUpperCase());
    return "0x" + t.join("")
}
const L5 = 9007199254740991;

function q5(r) {
    return Math.log10 ? Math.log10(r) : Math.log(r) / Math.LN10
}
const Kl = {};
for (let r = 0; r < 10; r++) Kl[String(r)] = String(r);
for (let r = 0; r < 26; r++) Kl[String.fromCharCode(65 + r)] = String(10 + r);
const G0 = Math.floor(q5(L5));

function j5(r) {
    r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
    let t = r.split("").map(i => Kl[i]).join("");
    for (; t.length >= G0;) {
        let i = t.substring(0, G0);
        t = parseInt(i, 10) % 97 + t.substring(i.length)
    }
    let e = String(98 - parseInt(t, 10) % 97);
    for (; e.length < 2;) e = "0" + e;
    return e
}

function $5(r) {
    let t = null;
    if (typeof r != "string" && Go.throwArgumentError("invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) r.substring(0, 2) !== "0x" && (r = "0x" + r), t = V0(r), r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== r && Go.throwArgumentError("bad address checksum", "address", r);
    else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        for (r.substring(2, 4) !== j5(r) && Go.throwArgumentError("bad icap checksum", "address", r), t = m5(r.substring(4)); t.length < 40;) t = "0" + t;
        t = V0("0x" + t)
    } else Go.throwArgumentError("invalid address", "address", r);
    return t
}

function jo(r, t, e) {
    Object.defineProperty(r, t, {
        enumerable: !0,
        value: e,
        writable: !1
    })
}
const z5 = new Uint8Array(32);
z5.fill(0), Rr.from(-1);
const k5 = Rr.from(0),
    H5 = Rr.from(1);
Rr.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), tn(H5.toHexString(), 32), tn(k5.toHexString(), 32);
var Gi = {},
    ve = {},
    la = ug;

function ug(r, t) {
    if (!r) throw new Error(t || "Assertion failed")
}
ug.equal = function(r, t, e) {
    if (r != t) throw new Error(e || "Assertion failed: " + r + " != " + t)
};
var wl = {
    exports: {}
};
typeof Object.create == "function" ? wl.exports = function(r, t) {
    t && (r.super_ = t, r.prototype = Object.create(t.prototype, {
        constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }))
} : wl.exports = function(r, t) {
    if (t) {
        r.super_ = t;
        var e = function() {};
        e.prototype = t.prototype, r.prototype = new e, r.prototype.constructor = r
    }
};
var K5 = la,
    V5 = wl.exports;
ve.inherits = V5;

function G5(r, t) {
    return (r.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= r.length ? !1 : (r.charCodeAt(t + 1) & 64512) === 56320
}

function W5(r, t) {
    if (Array.isArray(r)) return r.slice();
    if (!r) return [];
    var e = [];
    if (typeof r == "string")
        if (t) {
            if (t === "hex")
                for (r = r.replace(/[^a-z0-9]+/ig, ""), r.length % 2 !== 0 && (r = "0" + r), s = 0; s < r.length; s += 2) e.push(parseInt(r[s] + r[s + 1], 16))
        } else
            for (var i = 0, s = 0; s < r.length; s++) {
                var a = r.charCodeAt(s);
                a < 128 ? e[i++] = a : a < 2048 ? (e[i++] = a >> 6 | 192, e[i++] = a & 63 | 128) : G5(r, s) ? (a = 65536 + ((a & 1023) << 10) + (r.charCodeAt(++s) & 1023), e[i++] = a >> 18 | 240, e[i++] = a >> 12 & 63 | 128, e[i++] = a >> 6 & 63 | 128, e[i++] = a & 63 | 128) : (e[i++] = a >> 12 | 224, e[i++] = a >> 6 & 63 | 128, e[i++] = a & 63 | 128)
            } else
                for (s = 0; s < r.length; s++) e[s] = r[s] | 0;
    return e
}
ve.toArray = W5;

function Y5(r) {
    for (var t = "", e = 0; e < r.length; e++) t += hg(r[e].toString(16));
    return t
}
ve.toHex = Y5;

function cg(r) {
    var t = r >>> 24 | r >>> 8 & 65280 | r << 8 & 16711680 | (r & 255) << 24;
    return t >>> 0
}
ve.htonl = cg;

function Q5(r, t) {
    for (var e = "", i = 0; i < r.length; i++) {
        var s = r[i];
        t === "little" && (s = cg(s)), e += lg(s.toString(16))
    }
    return e
}
ve.toHex32 = Q5;

function hg(r) {
    return r.length === 1 ? "0" + r : r
}
ve.zero2 = hg;

function lg(r) {
    return r.length === 7 ? "0" + r : r.length === 6 ? "00" + r : r.length === 5 ? "000" + r : r.length === 4 ? "0000" + r : r.length === 3 ? "00000" + r : r.length === 2 ? "000000" + r : r.length === 1 ? "0000000" + r : r
}
ve.zero8 = lg;

function J5(r, t, e, i) {
    var s = e - t;
    K5(s % 4 === 0);
    for (var a = new Array(s / 4), c = 0, f = t; c < a.length; c++, f += 4) {
        var p;
        i === "big" ? p = r[f] << 24 | r[f + 1] << 16 | r[f + 2] << 8 | r[f + 3] : p = r[f + 3] << 24 | r[f + 2] << 16 | r[f + 1] << 8 | r[f], a[c] = p >>> 0
    }
    return a
}
ve.join32 = J5;

function X5(r, t) {
    for (var e = new Array(r.length * 4), i = 0, s = 0; i < r.length; i++, s += 4) {
        var a = r[i];
        t === "big" ? (e[s] = a >>> 24, e[s + 1] = a >>> 16 & 255, e[s + 2] = a >>> 8 & 255, e[s + 3] = a & 255) : (e[s + 3] = a >>> 24, e[s + 2] = a >>> 16 & 255, e[s + 1] = a >>> 8 & 255, e[s] = a & 255)
    }
    return e
}
ve.split32 = X5;

function Z5(r, t) {
    return r >>> t | r << 32 - t
}
ve.rotr32 = Z5;

function tA(r, t) {
    return r << t | r >>> 32 - t
}
ve.rotl32 = tA;

function eA(r, t) {
    return r + t >>> 0
}
ve.sum32 = eA;

function rA(r, t, e) {
    return r + t + e >>> 0
}
ve.sum32_3 = rA;

function iA(r, t, e, i) {
    return r + t + e + i >>> 0
}
ve.sum32_4 = iA;

function nA(r, t, e, i, s) {
    return r + t + e + i + s >>> 0
}
ve.sum32_5 = nA;

function sA(r, t, e, i) {
    var s = r[t],
        a = r[t + 1],
        c = i + a >>> 0,
        f = (c < i ? 1 : 0) + e + s;
    r[t] = f >>> 0, r[t + 1] = c
}
ve.sum64 = sA;

function oA(r, t, e, i) {
    var s = t + i >>> 0,
        a = (s < t ? 1 : 0) + r + e;
    return a >>> 0
}
ve.sum64_hi = oA;

function aA(r, t, e, i) {
    var s = t + i;
    return s >>> 0
}
ve.sum64_lo = aA;

function uA(r, t, e, i, s, a, c, f) {
    var p = 0,
        d = t;
    d = d + i >>> 0, p += d < t ? 1 : 0, d = d + a >>> 0, p += d < a ? 1 : 0, d = d + f >>> 0, p += d < f ? 1 : 0;
    var b = r + e + s + c + p;
    return b >>> 0
}
ve.sum64_4_hi = uA;

function cA(r, t, e, i, s, a, c, f) {
    var p = t + i + a + f;
    return p >>> 0
}
ve.sum64_4_lo = cA;

function hA(r, t, e, i, s, a, c, f, p, d) {
    var b = 0,
        E = t;
    E = E + i >>> 0, b += E < t ? 1 : 0, E = E + a >>> 0, b += E < a ? 1 : 0, E = E + f >>> 0, b += E < f ? 1 : 0, E = E + d >>> 0, b += E < d ? 1 : 0;
    var x = r + e + s + c + p + b;
    return x >>> 0
}
ve.sum64_5_hi = hA;

function lA(r, t, e, i, s, a, c, f, p, d) {
    var b = t + i + a + f + d;
    return b >>> 0
}
ve.sum64_5_lo = lA;

function fA(r, t, e) {
    var i = t << 32 - e | r >>> e;
    return i >>> 0
}
ve.rotr64_hi = fA;

function dA(r, t, e) {
    var i = r << 32 - e | t >>> e;
    return i >>> 0
}
ve.rotr64_lo = dA;

function pA(r, t, e) {
    return r >>> e
}
ve.shr64_hi = pA;

function gA(r, t, e) {
    var i = r << 32 - e | t >>> e;
    return i >>> 0
}
ve.shr64_lo = gA;
var go = {},
    W0 = ve,
    mA = la;

function Eu() {
    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
}
go.BlockHash = Eu, Eu.prototype.update = function(r, t) {
    if (r = W0.toArray(r, t), this.pending ? this.pending = this.pending.concat(r) : this.pending = r, this.pendingTotal += r.length, this.pending.length >= this._delta8) {
        r = this.pending;
        var e = r.length % this._delta8;
        this.pending = r.slice(r.length - e, r.length), this.pending.length === 0 && (this.pending = null), r = W0.join32(r, 0, r.length - e, this.endian);
        for (var i = 0; i < r.length; i += this._delta32) this._update(r, i, i + this._delta32)
    }
    return this
}, Eu.prototype.digest = function(r) {
    return this.update(this._pad()), mA(this.pending === null), this._digest(r)
}, Eu.prototype._pad = function() {
    var r = this.pendingTotal,
        t = this._delta8,
        e = t - (r + this.padLength) % t,
        i = new Array(e + this.padLength);
    i[0] = 128;
    for (var s = 1; s < e; s++) i[s] = 0;
    if (r <<= 3, this.endian === "big") {
        for (var a = 8; a < this.padLength; a++) i[s++] = 0;
        i[s++] = 0, i[s++] = 0, i[s++] = 0, i[s++] = 0, i[s++] = r >>> 24 & 255, i[s++] = r >>> 16 & 255, i[s++] = r >>> 8 & 255, i[s++] = r & 255
    } else
        for (i[s++] = r & 255, i[s++] = r >>> 8 & 255, i[s++] = r >>> 16 & 255, i[s++] = r >>> 24 & 255, i[s++] = 0, i[s++] = 0, i[s++] = 0, i[s++] = 0, a = 8; a < this.padLength; a++) i[s++] = 0;
    return i
};
var Xs = {},
    an = {},
    vA = ve,
    en = vA.rotr32;

function yA(r, t, e, i) {
    if (r === 0) return fg(t, e, i);
    if (r === 1 || r === 3) return pg(t, e, i);
    if (r === 2) return dg(t, e, i)
}
an.ft_1 = yA;

function fg(r, t, e) {
    return r & t ^ ~r & e
}
an.ch32 = fg;

function dg(r, t, e) {
    return r & t ^ r & e ^ t & e
}
an.maj32 = dg;

function pg(r, t, e) {
    return r ^ t ^ e
}
an.p32 = pg;

function wA(r) {
    return en(r, 2) ^ en(r, 13) ^ en(r, 22)
}
an.s0_256 = wA;

function bA(r) {
    return en(r, 6) ^ en(r, 11) ^ en(r, 25)
}
an.s1_256 = bA;

function _A(r) {
    return en(r, 7) ^ en(r, 18) ^ r >>> 3
}
an.g0_256 = _A;

function EA(r) {
    return en(r, 17) ^ en(r, 19) ^ r >>> 10
}
an.g1_256 = EA;
var ao = ve,
    AA = go,
    SA = an,
    Lh = ao.rotl32,
    $o = ao.sum32,
    IA = ao.sum32_5,
    DA = SA.ft_1,
    gg = AA.BlockHash,
    xA = [1518500249, 1859775393, 2400959708, 3395469782];

function Ji() {
    if (!(this instanceof Ji)) return new Ji;
    gg.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
}
ao.inherits(Ji, gg);
var MA = Ji;
Ji.blockSize = 512, Ji.outSize = 160, Ji.hmacStrength = 80, Ji.padLength = 64, Ji.prototype._update = function(r, t) {
    for (var e = this.W, i = 0; i < 16; i++) e[i] = r[t + i];
    for (; i < e.length; i++) e[i] = Lh(e[i - 3] ^ e[i - 8] ^ e[i - 14] ^ e[i - 16], 1);
    var s = this.h[0],
        a = this.h[1],
        c = this.h[2],
        f = this.h[3],
        p = this.h[4];
    for (i = 0; i < e.length; i++) {
        var d = ~~(i / 20),
            b = IA(Lh(s, 5), DA(d, a, c, f), p, e[i], xA[d]);
        p = f, f = c, c = Lh(a, 30), a = s, s = b
    }
    this.h[0] = $o(this.h[0], s), this.h[1] = $o(this.h[1], a), this.h[2] = $o(this.h[2], c), this.h[3] = $o(this.h[3], f), this.h[4] = $o(this.h[4], p)
}, Ji.prototype._digest = function(r) {
    return r === "hex" ? ao.toHex32(this.h, "big") : ao.split32(this.h, "big")
};
var uo = ve,
    CA = go,
    mo = an,
    PA = la,
    Oi = uo.sum32,
    OA = uo.sum32_4,
    NA = uo.sum32_5,
    RA = mo.ch32,
    TA = mo.maj32,
    FA = mo.s0_256,
    BA = mo.s1_256,
    UA = mo.g0_256,
    LA = mo.g1_256,
    mg = CA.BlockHash,
    qA = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

function Xi() {
    if (!(this instanceof Xi)) return new Xi;
    mg.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = qA, this.W = new Array(64)
}
uo.inherits(Xi, mg);
var vg = Xi;
Xi.blockSize = 512, Xi.outSize = 256, Xi.hmacStrength = 192, Xi.padLength = 64, Xi.prototype._update = function(r, t) {
    for (var e = this.W, i = 0; i < 16; i++) e[i] = r[t + i];
    for (; i < e.length; i++) e[i] = OA(LA(e[i - 2]), e[i - 7], UA(e[i - 15]), e[i - 16]);
    var s = this.h[0],
        a = this.h[1],
        c = this.h[2],
        f = this.h[3],
        p = this.h[4],
        d = this.h[5],
        b = this.h[6],
        E = this.h[7];
    for (PA(this.k.length === e.length), i = 0; i < e.length; i++) {
        var x = NA(E, BA(p), RA(p, d, b), this.k[i], e[i]),
            D = Oi(FA(s), TA(s, a, c));
        E = b, b = d, d = p, p = Oi(f, x), f = c, c = a, a = s, s = Oi(x, D)
    }
    this.h[0] = Oi(this.h[0], s), this.h[1] = Oi(this.h[1], a), this.h[2] = Oi(this.h[2], c), this.h[3] = Oi(this.h[3], f), this.h[4] = Oi(this.h[4], p), this.h[5] = Oi(this.h[5], d), this.h[6] = Oi(this.h[6], b), this.h[7] = Oi(this.h[7], E)
}, Xi.prototype._digest = function(r) {
    return r === "hex" ? uo.toHex32(this.h, "big") : uo.split32(this.h, "big")
};
var bl = ve,
    yg = vg;

function An() {
    if (!(this instanceof An)) return new An;
    yg.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
}
bl.inherits(An, yg);
var jA = An;
An.blockSize = 512, An.outSize = 224, An.hmacStrength = 192, An.padLength = 64, An.prototype._digest = function(r) {
    return r === "hex" ? bl.toHex32(this.h.slice(0, 7), "big") : bl.split32(this.h.slice(0, 7), "big")
};
var Hr = ve,
    $A = go,
    zA = la,
    rn = Hr.rotr64_hi,
    nn = Hr.rotr64_lo,
    wg = Hr.shr64_hi,
    bg = Hr.shr64_lo,
    jn = Hr.sum64,
    qh = Hr.sum64_hi,
    jh = Hr.sum64_lo,
    kA = Hr.sum64_4_hi,
    HA = Hr.sum64_4_lo,
    KA = Hr.sum64_5_hi,
    VA = Hr.sum64_5_lo,
    _g = $A.BlockHash,
    GA = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

function Fi() {
    if (!(this instanceof Fi)) return new Fi;
    _g.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = GA, this.W = new Array(160)
}
Hr.inherits(Fi, _g);
var Eg = Fi;
Fi.blockSize = 1024, Fi.outSize = 512, Fi.hmacStrength = 192, Fi.padLength = 128, Fi.prototype._prepareBlock = function(r, t) {
    for (var e = this.W, i = 0; i < 32; i++) e[i] = r[t + i];
    for (; i < e.length; i += 2) {
        var s = n8(e[i - 4], e[i - 3]),
            a = s8(e[i - 4], e[i - 3]),
            c = e[i - 14],
            f = e[i - 13],
            p = r8(e[i - 30], e[i - 29]),
            d = i8(e[i - 30], e[i - 29]),
            b = e[i - 32],
            E = e[i - 31];
        e[i] = kA(s, a, c, f, p, d, b, E), e[i + 1] = HA(s, a, c, f, p, d, b, E)
    }
}, Fi.prototype._update = function(r, t) {
    this._prepareBlock(r, t);
    var e = this.W,
        i = this.h[0],
        s = this.h[1],
        a = this.h[2],
        c = this.h[3],
        f = this.h[4],
        p = this.h[5],
        d = this.h[6],
        b = this.h[7],
        E = this.h[8],
        x = this.h[9],
        D = this.h[10],
        P = this.h[11],
        Y = this.h[12],
        G = this.h[13],
        tt = this.h[14],
        K = this.h[15];
    zA(this.k.length === e.length);
    for (var V = 0; V < e.length; V += 2) {
        var L = tt,
            $ = K,
            z = t8(E, x),
            y = e8(E, x),
            T = WA(E, x, D, P, Y),
            nt = YA(E, x, D, P, Y, G),
            ft = this.k[V],
            lt = this.k[V + 1],
            mt = e[V],
            l = e[V + 1],
            h = KA(L, $, z, y, T, nt, ft, lt, mt, l),
            w = VA(L, $, z, y, T, nt, ft, lt, mt, l);
        L = XA(i, s), $ = ZA(i, s), z = QA(i, s, a, c, f), y = JA(i, s, a, c, f, p);
        var S = qh(L, $, z, y),
            M = jh(L, $, z, y);
        tt = Y, K = G, Y = D, G = P, D = E, P = x, E = qh(d, b, h, w), x = jh(b, b, h, w), d = f, b = p, f = a, p = c, a = i, c = s, i = qh(h, w, S, M), s = jh(h, w, S, M)
    }
    jn(this.h, 0, i, s), jn(this.h, 2, a, c), jn(this.h, 4, f, p), jn(this.h, 6, d, b), jn(this.h, 8, E, x), jn(this.h, 10, D, P), jn(this.h, 12, Y, G), jn(this.h, 14, tt, K)
}, Fi.prototype._digest = function(r) {
    return r === "hex" ? Hr.toHex32(this.h, "big") : Hr.split32(this.h, "big")
};

function WA(r, t, e, i, s) {
    var a = r & e ^ ~r & s;
    return a < 0 && (a += 4294967296), a
}

function YA(r, t, e, i, s, a) {
    var c = t & i ^ ~t & a;
    return c < 0 && (c += 4294967296), c
}

function QA(r, t, e, i, s) {
    var a = r & e ^ r & s ^ e & s;
    return a < 0 && (a += 4294967296), a
}

function JA(r, t, e, i, s, a) {
    var c = t & i ^ t & a ^ i & a;
    return c < 0 && (c += 4294967296), c
}

function XA(r, t) {
    var e = rn(r, t, 28),
        i = rn(t, r, 2),
        s = rn(t, r, 7),
        a = e ^ i ^ s;
    return a < 0 && (a += 4294967296), a
}

function ZA(r, t) {
    var e = nn(r, t, 28),
        i = nn(t, r, 2),
        s = nn(t, r, 7),
        a = e ^ i ^ s;
    return a < 0 && (a += 4294967296), a
}

function t8(r, t) {
    var e = rn(r, t, 14),
        i = rn(r, t, 18),
        s = rn(t, r, 9),
        a = e ^ i ^ s;
    return a < 0 && (a += 4294967296), a
}

function e8(r, t) {
    var e = nn(r, t, 14),
        i = nn(r, t, 18),
        s = nn(t, r, 9),
        a = e ^ i ^ s;
    return a < 0 && (a += 4294967296), a
}

function r8(r, t) {
    var e = rn(r, t, 1),
        i = rn(r, t, 8),
        s = wg(r, t, 7),
        a = e ^ i ^ s;
    return a < 0 && (a += 4294967296), a
}

function i8(r, t) {
    var e = nn(r, t, 1),
        i = nn(r, t, 8),
        s = bg(r, t, 7),
        a = e ^ i ^ s;
    return a < 0 && (a += 4294967296), a
}

function n8(r, t) {
    var e = rn(r, t, 19),
        i = rn(t, r, 29),
        s = wg(r, t, 6),
        a = e ^ i ^ s;
    return a < 0 && (a += 4294967296), a
}

function s8(r, t) {
    var e = nn(r, t, 19),
        i = nn(t, r, 29),
        s = bg(r, t, 6),
        a = e ^ i ^ s;
    return a < 0 && (a += 4294967296), a
}
var _l = ve,
    Ag = Eg;

function Sn() {
    if (!(this instanceof Sn)) return new Sn;
    Ag.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
}
_l.inherits(Sn, Ag);
var o8 = Sn;
Sn.blockSize = 1024, Sn.outSize = 384, Sn.hmacStrength = 192, Sn.padLength = 128, Sn.prototype._digest = function(r) {
    return r === "hex" ? _l.toHex32(this.h.slice(0, 12), "big") : _l.split32(this.h.slice(0, 12), "big")
}, Xs.sha1 = MA, Xs.sha224 = jA, Xs.sha256 = vg, Xs.sha384 = o8, Xs.sha512 = Eg;
var Sg = {},
    As = ve,
    a8 = go,
    Au = As.rotl32,
    Y0 = As.sum32,
    zo = As.sum32_3,
    Q0 = As.sum32_4,
    Ig = a8.BlockHash;

function Wi() {
    if (!(this instanceof Wi)) return new Wi;
    Ig.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
}
As.inherits(Wi, Ig), Sg.ripemd160 = Wi, Wi.blockSize = 512, Wi.outSize = 160, Wi.hmacStrength = 192, Wi.padLength = 64, Wi.prototype._update = function(r, t) {
    for (var e = this.h[0], i = this.h[1], s = this.h[2], a = this.h[3], c = this.h[4], f = e, p = i, d = s, b = a, E = c, x = 0; x < 80; x++) {
        var D = Y0(Au(Q0(e, J0(x, i, s, a), r[h8[x] + t], u8(x)), f8[x]), c);
        e = c, c = a, a = Au(s, 10), s = i, i = D, D = Y0(Au(Q0(f, J0(79 - x, p, d, b), r[l8[x] + t], c8(x)), d8[x]), E), f = E, E = b, b = Au(d, 10), d = p, p = D
    }
    D = zo(this.h[1], s, b), this.h[1] = zo(this.h[2], a, E), this.h[2] = zo(this.h[3], c, f), this.h[3] = zo(this.h[4], e, p), this.h[4] = zo(this.h[0], i, d), this.h[0] = D
}, Wi.prototype._digest = function(r) {
    return r === "hex" ? As.toHex32(this.h, "little") : As.split32(this.h, "little")
};

function J0(r, t, e, i) {
    return r <= 15 ? t ^ e ^ i : r <= 31 ? t & e | ~t & i : r <= 47 ? (t | ~e) ^ i : r <= 63 ? t & i | e & ~i : t ^ (e | ~i)
}

function u8(r) {
    return r <= 15 ? 0 : r <= 31 ? 1518500249 : r <= 47 ? 1859775393 : r <= 63 ? 2400959708 : 2840853838
}

function c8(r) {
    return r <= 15 ? 1352829926 : r <= 31 ? 1548603684 : r <= 47 ? 1836072691 : r <= 63 ? 2053994217 : 0
}
var h8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
    l8 = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
    f8 = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
    d8 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
    p8 = ve,
    g8 = la;

function so(r, t, e) {
    if (!(this instanceof so)) return new so(r, t, e);
    this.Hash = r, this.blockSize = r.blockSize / 8, this.outSize = r.outSize / 8, this.inner = null, this.outer = null, this._init(p8.toArray(t, e))
}
var m8 = so;
so.prototype._init = function(r) {
        r.length > this.blockSize && (r = new this.Hash().update(r).digest()), g8(r.length <= this.blockSize);
        for (var t = r.length; t < this.blockSize; t++) r.push(0);
        for (t = 0; t < r.length; t++) r[t] ^= 54;
        for (this.inner = new this.Hash().update(r), t = 0; t < r.length; t++) r[t] ^= 106;
        this.outer = new this.Hash().update(r)
    }, so.prototype.update = function(r, t) {
        return this.inner.update(r, t), this
    }, so.prototype.digest = function(r) {
        return this.outer.update(this.inner.digest()), this.outer.digest(r)
    },
    function(r) {
        var t = r;
        t.utils = ve, t.common = go, t.sha = Xs, t.ripemd = Sg, t.hmac = m8, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160
    }(Gi);

function vo(r, t, e) {
    return e = {
        path: t,
        exports: {},
        require: function(i, s) {
            return v8(i, s ? ? e.path)
        }
    }, r(e, e.exports), e.exports
}

function v8() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
}
var Vl = Dg;

function Dg(r, t) {
    if (!r) throw new Error(t || "Assertion failed")
}
Dg.equal = function(r, t, e) {
    if (r != t) throw new Error(e || "Assertion failed: " + r + " != " + t)
};
var Ui = vo(function(r, t) {
        var e = t;

        function i(c, f) {
            if (Array.isArray(c)) return c.slice();
            if (!c) return [];
            var p = [];
            if (typeof c != "string") {
                for (var d = 0; d < c.length; d++) p[d] = c[d] | 0;
                return p
            }
            if (f === "hex") {
                c = c.replace(/[^a-z0-9]+/ig, ""), c.length % 2 !== 0 && (c = "0" + c);
                for (var d = 0; d < c.length; d += 2) p.push(parseInt(c[d] + c[d + 1], 16))
            } else
                for (var d = 0; d < c.length; d++) {
                    var b = c.charCodeAt(d),
                        E = b >> 8,
                        x = b & 255;
                    E ? p.push(E, x) : p.push(x)
                }
            return p
        }
        e.toArray = i;

        function s(c) {
            return c.length === 1 ? "0" + c : c
        }
        e.zero2 = s;

        function a(c) {
            for (var f = "", p = 0; p < c.length; p++) f += s(c[p].toString(16));
            return f
        }
        e.toHex = a, e.encode = function(c, f) {
            return f === "hex" ? a(c) : c
        }
    }),
    ri = vo(function(r, t) {
        var e = t;
        e.assert = Vl, e.toArray = Ui.toArray, e.zero2 = Ui.zero2, e.toHex = Ui.toHex, e.encode = Ui.encode;

        function i(p, d, b) {
            var E = new Array(Math.max(p.bitLength(), b) + 1);
            E.fill(0);
            for (var x = 1 << d + 1, D = p.clone(), P = 0; P < E.length; P++) {
                var Y, G = D.andln(x - 1);
                D.isOdd() ? (G > (x >> 1) - 1 ? Y = (x >> 1) - G : Y = G, D.isubn(Y)) : Y = 0, E[P] = Y, D.iushrn(1)
            }
            return E
        }
        e.getNAF = i;

        function s(p, d) {
            var b = [
                [],
                []
            ];
            p = p.clone(), d = d.clone();
            for (var E = 0, x = 0, D; p.cmpn(-E) > 0 || d.cmpn(-x) > 0;) {
                var P = p.andln(3) + E & 3,
                    Y = d.andln(3) + x & 3;
                P === 3 && (P = -1), Y === 3 && (Y = -1);
                var G;
                P & 1 ? (D = p.andln(7) + E & 7, (D === 3 || D === 5) && Y === 2 ? G = -P : G = P) : G = 0, b[0].push(G);
                var tt;
                Y & 1 ? (D = d.andln(7) + x & 7, (D === 3 || D === 5) && P === 2 ? tt = -Y : tt = Y) : tt = 0, b[1].push(tt), 2 * E === G + 1 && (E = 1 - E), 2 * x === tt + 1 && (x = 1 - x), p.iushrn(1), d.iushrn(1)
            }
            return b
        }
        e.getJSF = s;

        function a(p, d, b) {
            var E = "_" + d;
            p.prototype[d] = function() {
                return this[E] !== void 0 ? this[E] : this[E] = b.call(this)
            }
        }
        e.cachedProperty = a;

        function c(p) {
            return typeof p == "string" ? e.toArray(p, "hex") : p
        }
        e.parseBytes = c;

        function f(p) {
            return new ne(p, "hex", "le")
        }
        e.intFromLE = f
    }),
    Su = ri.getNAF,
    y8 = ri.getJSF,
    Gu = ri.assert;

function kn(r, t) {
    this.type = r, this.p = new ne(t.p, 16), this.red = t.prime ? ne.red(t.prime) : ne.mont(this.p), this.zero = new ne(0).toRed(this.red), this.one = new ne(1).toRed(this.red), this.two = new ne(2).toRed(this.red), this.n = t.n && new ne(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
    var e = this.n && this.p.div(this.n);
    !e || e.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
}
var Ds = kn;
kn.prototype.point = function() {
    throw new Error("Not implemented")
}, kn.prototype.validate = function() {
    throw new Error("Not implemented")
}, kn.prototype._fixedNafMul = function(r, t) {
    Gu(r.precomputed);
    var e = r._getDoubles(),
        i = Su(t, 1, this._bitLength),
        s = (1 << e.step + 1) - (e.step % 2 === 0 ? 2 : 1);
    s /= 3;
    var a = [],
        c, f;
    for (c = 0; c < i.length; c += e.step) {
        f = 0;
        for (var p = c + e.step - 1; p >= c; p--) f = (f << 1) + i[p];
        a.push(f)
    }
    for (var d = this.jpoint(null, null, null), b = this.jpoint(null, null, null), E = s; E > 0; E--) {
        for (c = 0; c < a.length; c++) f = a[c], f === E ? b = b.mixedAdd(e.points[c]) : f === -E && (b = b.mixedAdd(e.points[c].neg()));
        d = d.add(b)
    }
    return d.toP()
}, kn.prototype._wnafMul = function(r, t) {
    var e = 4,
        i = r._getNAFPoints(e);
    e = i.wnd;
    for (var s = i.points, a = Su(t, e, this._bitLength), c = this.jpoint(null, null, null), f = a.length - 1; f >= 0; f--) {
        for (var p = 0; f >= 0 && a[f] === 0; f--) p++;
        if (f >= 0 && p++, c = c.dblp(p), f < 0) break;
        var d = a[f];
        Gu(d !== 0), r.type === "affine" ? d > 0 ? c = c.mixedAdd(s[d - 1 >> 1]) : c = c.mixedAdd(s[-d - 1 >> 1].neg()) : d > 0 ? c = c.add(s[d - 1 >> 1]) : c = c.add(s[-d - 1 >> 1].neg())
    }
    return r.type === "affine" ? c.toP() : c
}, kn.prototype._wnafMulAdd = function(r, t, e, i, s) {
    var a = this._wnafT1,
        c = this._wnafT2,
        f = this._wnafT3,
        p = 0,
        d, b, E;
    for (d = 0; d < i; d++) {
        E = t[d];
        var x = E._getNAFPoints(r);
        a[d] = x.wnd, c[d] = x.points
    }
    for (d = i - 1; d >= 1; d -= 2) {
        var D = d - 1,
            P = d;
        if (a[D] !== 1 || a[P] !== 1) {
            f[D] = Su(e[D], a[D], this._bitLength), f[P] = Su(e[P], a[P], this._bitLength), p = Math.max(f[D].length, p), p = Math.max(f[P].length, p);
            continue
        }
        var Y = [t[D], null, null, t[P]];
        t[D].y.cmp(t[P].y) === 0 ? (Y[1] = t[D].add(t[P]), Y[2] = t[D].toJ().mixedAdd(t[P].neg())) : t[D].y.cmp(t[P].y.redNeg()) === 0 ? (Y[1] = t[D].toJ().mixedAdd(t[P]), Y[2] = t[D].add(t[P].neg())) : (Y[1] = t[D].toJ().mixedAdd(t[P]), Y[2] = t[D].toJ().mixedAdd(t[P].neg()));
        var G = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
            tt = y8(e[D], e[P]);
        for (p = Math.max(tt[0].length, p), f[D] = new Array(p), f[P] = new Array(p), b = 0; b < p; b++) {
            var K = tt[0][b] | 0,
                V = tt[1][b] | 0;
            f[D][b] = G[(K + 1) * 3 + (V + 1)], f[P][b] = 0, c[D] = Y
        }
    }
    var L = this.jpoint(null, null, null),
        $ = this._wnafT4;
    for (d = p; d >= 0; d--) {
        for (var z = 0; d >= 0;) {
            var y = !0;
            for (b = 0; b < i; b++) $[b] = f[b][d] | 0, $[b] !== 0 && (y = !1);
            if (!y) break;
            z++, d--
        }
        if (d >= 0 && z++, L = L.dblp(z), d < 0) break;
        for (b = 0; b < i; b++) {
            var T = $[b];
            T !== 0 && (T > 0 ? E = c[b][T - 1 >> 1] : T < 0 && (E = c[b][-T - 1 >> 1].neg()), E.type === "affine" ? L = L.mixedAdd(E) : L = L.add(E))
        }
    }
    for (d = 0; d < i; d++) c[d] = null;
    return s ? L : L.toP()
};

function yi(r, t) {
    this.curve = r, this.type = t, this.precomputed = null
}
kn.BasePoint = yi, yi.prototype.eq = function() {
    throw new Error("Not implemented")
}, yi.prototype.validate = function() {
    return this.curve.validate(this)
}, kn.prototype.decodePoint = function(r, t) {
    r = ri.toArray(r, t);
    var e = this.p.byteLength();
    if ((r[0] === 4 || r[0] === 6 || r[0] === 7) && r.length - 1 === 2 * e) {
        r[0] === 6 ? Gu(r[r.length - 1] % 2 === 0) : r[0] === 7 && Gu(r[r.length - 1] % 2 === 1);
        var i = this.point(r.slice(1, 1 + e), r.slice(1 + e, 1 + 2 * e));
        return i
    } else if ((r[0] === 2 || r[0] === 3) && r.length - 1 === e) return this.pointFromX(r.slice(1, 1 + e), r[0] === 3);
    throw new Error("Unknown point format")
}, yi.prototype.encodeCompressed = function(r) {
    return this.encode(r, !0)
}, yi.prototype._encode = function(r) {
    var t = this.curve.p.byteLength(),
        e = this.getX().toArray("be", t);
    return r ? [this.getY().isEven() ? 2 : 3].concat(e) : [4].concat(e, this.getY().toArray("be", t))
}, yi.prototype.encode = function(r, t) {
    return ri.encode(this._encode(t), r)
}, yi.prototype.precompute = function(r) {
    if (this.precomputed) return this;
    var t = {
        doubles: null,
        naf: null,
        beta: null
    };
    return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, r), t.beta = this._getBeta(), this.precomputed = t, this
}, yi.prototype._hasDoubles = function(r) {
    if (!this.precomputed) return !1;
    var t = this.precomputed.doubles;
    return t ? t.points.length >= Math.ceil((r.bitLength() + 1) / t.step) : !1
}, yi.prototype._getDoubles = function(r, t) {
    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
    for (var e = [this], i = this, s = 0; s < t; s += r) {
        for (var a = 0; a < r; a++) i = i.dbl();
        e.push(i)
    }
    return {
        step: r,
        points: e
    }
}, yi.prototype._getNAFPoints = function(r) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
    for (var t = [this], e = (1 << r) - 1, i = e === 1 ? null : this.dbl(), s = 1; s < e; s++) t[s] = t[s - 1].add(i);
    return {
        wnd: r,
        points: t
    }
}, yi.prototype._getBeta = function() {
    return null
}, yi.prototype.dblp = function(r) {
    for (var t = this, e = 0; e < r; e++) t = t.dbl();
    return t
};
var Gl = vo(function(r) {
        typeof Object.create == "function" ? r.exports = function(t, e) {
            e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : r.exports = function(t, e) {
            if (e) {
                t.super_ = e;
                var i = function() {};
                i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
            }
        }
    }),
    w8 = ri.assert;

function Ai(r) {
    Ds.call(this, "short", r), this.a = new ne(r.a, 16).toRed(this.red), this.b = new ne(r.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(r), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
}
Gl(Ai, Ds);
var b8 = Ai;
Ai.prototype._getEndomorphism = function(r) {
    if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
        var t, e;
        if (r.beta) t = new ne(r.beta, 16).toRed(this.red);
        else {
            var i = this._getEndoRoots(this.p);
            t = i[0].cmp(i[1]) < 0 ? i[0] : i[1], t = t.toRed(this.red)
        }
        if (r.lambda) e = new ne(r.lambda, 16);
        else {
            var s = this._getEndoRoots(this.n);
            this.g.mul(s[0]).x.cmp(this.g.x.redMul(t)) === 0 ? e = s[0] : (e = s[1], w8(this.g.mul(e).x.cmp(this.g.x.redMul(t)) === 0))
        }
        var a;
        return r.basis ? a = r.basis.map(function(c) {
            return {
                a: new ne(c.a, 16),
                b: new ne(c.b, 16)
            }
        }) : a = this._getEndoBasis(e), {
            beta: t,
            lambda: e,
            basis: a
        }
    }
}, Ai.prototype._getEndoRoots = function(r) {
    var t = r === this.p ? this.red : ne.mont(r),
        e = new ne(2).toRed(t).redInvm(),
        i = e.redNeg(),
        s = new ne(3).toRed(t).redNeg().redSqrt().redMul(e),
        a = i.redAdd(s).fromRed(),
        c = i.redSub(s).fromRed();
    return [a, c]
}, Ai.prototype._getEndoBasis = function(r) {
    for (var t = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), e = r, i = this.n.clone(), s = new ne(1), a = new ne(0), c = new ne(0), f = new ne(1), p, d, b, E, x, D, P, Y = 0, G, tt; e.cmpn(0) !== 0;) {
        var K = i.div(e);
        G = i.sub(K.mul(e)), tt = c.sub(K.mul(s));
        var V = f.sub(K.mul(a));
        if (!b && G.cmp(t) < 0) p = P.neg(), d = s, b = G.neg(), E = tt;
        else if (b && ++Y === 2) break;
        P = G, i = e, e = G, c = s, s = tt, f = a, a = V
    }
    x = G.neg(), D = tt;
    var L = b.sqr().add(E.sqr()),
        $ = x.sqr().add(D.sqr());
    return $.cmp(L) >= 0 && (x = p, D = d), b.negative && (b = b.neg(), E = E.neg()), x.negative && (x = x.neg(), D = D.neg()), [{
        a: b,
        b: E
    }, {
        a: x,
        b: D
    }]
}, Ai.prototype._endoSplit = function(r) {
    var t = this.endo.basis,
        e = t[0],
        i = t[1],
        s = i.b.mul(r).divRound(this.n),
        a = e.b.neg().mul(r).divRound(this.n),
        c = s.mul(e.a),
        f = a.mul(i.a),
        p = s.mul(e.b),
        d = a.mul(i.b),
        b = r.sub(c).sub(f),
        E = p.add(d).neg();
    return {
        k1: b,
        k2: E
    }
}, Ai.prototype.pointFromX = function(r, t) {
    r = new ne(r, 16), r.red || (r = r.toRed(this.red));
    var e = r.redSqr().redMul(r).redIAdd(r.redMul(this.a)).redIAdd(this.b),
        i = e.redSqrt();
    if (i.redSqr().redSub(e).cmp(this.zero) !== 0) throw new Error("invalid point");
    var s = i.fromRed().isOdd();
    return (t && !s || !t && s) && (i = i.redNeg()), this.point(r, i)
}, Ai.prototype.validate = function(r) {
    if (r.inf) return !0;
    var t = r.x,
        e = r.y,
        i = this.a.redMul(t),
        s = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
    return e.redSqr().redISub(s).cmpn(0) === 0
}, Ai.prototype._endoWnafMulAdd = function(r, t, e) {
    for (var i = this._endoWnafT1, s = this._endoWnafT2, a = 0; a < r.length; a++) {
        var c = this._endoSplit(t[a]),
            f = r[a],
            p = f._getBeta();
        c.k1.negative && (c.k1.ineg(), f = f.neg(!0)), c.k2.negative && (c.k2.ineg(), p = p.neg(!0)), i[a * 2] = f, i[a * 2 + 1] = p, s[a * 2] = c.k1, s[a * 2 + 1] = c.k2
    }
    for (var d = this._wnafMulAdd(1, i, s, a * 2, e), b = 0; b < a * 2; b++) i[b] = null, s[b] = null;
    return d
};

function cr(r, t, e, i) {
    Ds.BasePoint.call(this, r, "affine"), t === null && e === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new ne(t, 16), this.y = new ne(e, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
}
Gl(cr, Ds.BasePoint), Ai.prototype.point = function(r, t, e) {
    return new cr(this, r, t, e)
}, Ai.prototype.pointFromJSON = function(r, t) {
    return cr.fromJSON(this, r, t)
}, cr.prototype._getBeta = function() {
    if (this.curve.endo) {
        var r = this.precomputed;
        if (r && r.beta) return r.beta;
        var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
        if (r) {
            var e = this.curve,
                i = function(s) {
                    return e.point(s.x.redMul(e.endo.beta), s.y)
                };
            r.beta = t, t.precomputed = {
                beta: null,
                naf: r.naf && {
                    wnd: r.naf.wnd,
                    points: r.naf.points.map(i)
                },
                doubles: r.doubles && {
                    step: r.doubles.step,
                    points: r.doubles.points.map(i)
                }
            }
        }
        return t
    }
}, cr.prototype.toJSON = function() {
    return this.precomputed ? [this.x, this.y, this.precomputed && {
        doubles: this.precomputed.doubles && {
            step: this.precomputed.doubles.step,
            points: this.precomputed.doubles.points.slice(1)
        },
        naf: this.precomputed.naf && {
            wnd: this.precomputed.naf.wnd,
            points: this.precomputed.naf.points.slice(1)
        }
    }] : [this.x, this.y]
}, cr.fromJSON = function(r, t, e) {
    typeof t == "string" && (t = JSON.parse(t));
    var i = r.point(t[0], t[1], e);
    if (!t[2]) return i;

    function s(c) {
        return r.point(c[0], c[1], e)
    }
    var a = t[2];
    return i.precomputed = {
        beta: null,
        doubles: a.doubles && {
            step: a.doubles.step,
            points: [i].concat(a.doubles.points.map(s))
        },
        naf: a.naf && {
            wnd: a.naf.wnd,
            points: [i].concat(a.naf.points.map(s))
        }
    }, i
}, cr.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
}, cr.prototype.isInfinity = function() {
    return this.inf
}, cr.prototype.add = function(r) {
    if (this.inf) return r;
    if (r.inf) return this;
    if (this.eq(r)) return this.dbl();
    if (this.neg().eq(r)) return this.curve.point(null, null);
    if (this.x.cmp(r.x) === 0) return this.curve.point(null, null);
    var t = this.y.redSub(r.y);
    t.cmpn(0) !== 0 && (t = t.redMul(this.x.redSub(r.x).redInvm()));
    var e = t.redSqr().redISub(this.x).redISub(r.x),
        i = t.redMul(this.x.redSub(e)).redISub(this.y);
    return this.curve.point(e, i)
}, cr.prototype.dbl = function() {
    if (this.inf) return this;
    var r = this.y.redAdd(this.y);
    if (r.cmpn(0) === 0) return this.curve.point(null, null);
    var t = this.curve.a,
        e = this.x.redSqr(),
        i = r.redInvm(),
        s = e.redAdd(e).redIAdd(e).redIAdd(t).redMul(i),
        a = s.redSqr().redISub(this.x.redAdd(this.x)),
        c = s.redMul(this.x.redSub(a)).redISub(this.y);
    return this.curve.point(a, c)
}, cr.prototype.getX = function() {
    return this.x.fromRed()
}, cr.prototype.getY = function() {
    return this.y.fromRed()
}, cr.prototype.mul = function(r) {
    return r = new ne(r, 16), this.isInfinity() ? this : this._hasDoubles(r) ? this.curve._fixedNafMul(this, r) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [r]) : this.curve._wnafMul(this, r)
}, cr.prototype.mulAdd = function(r, t, e) {
    var i = [this, t],
        s = [r, e];
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, s) : this.curve._wnafMulAdd(1, i, s, 2)
}, cr.prototype.jmulAdd = function(r, t, e) {
    var i = [this, t],
        s = [r, e];
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, s, !0) : this.curve._wnafMulAdd(1, i, s, 2, !0)
}, cr.prototype.eq = function(r) {
    return this === r || this.inf === r.inf && (this.inf || this.x.cmp(r.x) === 0 && this.y.cmp(r.y) === 0)
}, cr.prototype.neg = function(r) {
    if (this.inf) return this;
    var t = this.curve.point(this.x, this.y.redNeg());
    if (r && this.precomputed) {
        var e = this.precomputed,
            i = function(s) {
                return s.neg()
            };
        t.precomputed = {
            naf: e.naf && {
                wnd: e.naf.wnd,
                points: e.naf.points.map(i)
            },
            doubles: e.doubles && {
                step: e.doubles.step,
                points: e.doubles.points.map(i)
            }
        }
    }
    return t
}, cr.prototype.toJ = function() {
    if (this.inf) return this.curve.jpoint(null, null, null);
    var r = this.curve.jpoint(this.x, this.y, this.curve.one);
    return r
};

function fr(r, t, e, i) {
    Ds.BasePoint.call(this, r, "jacobian"), t === null && e === null && i === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new ne(0)) : (this.x = new ne(t, 16), this.y = new ne(e, 16), this.z = new ne(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
}
Gl(fr, Ds.BasePoint), Ai.prototype.jpoint = function(r, t, e) {
    return new fr(this, r, t, e)
}, fr.prototype.toP = function() {
    if (this.isInfinity()) return this.curve.point(null, null);
    var r = this.z.redInvm(),
        t = r.redSqr(),
        e = this.x.redMul(t),
        i = this.y.redMul(t).redMul(r);
    return this.curve.point(e, i)
}, fr.prototype.neg = function() {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
}, fr.prototype.add = function(r) {
    if (this.isInfinity()) return r;
    if (r.isInfinity()) return this;
    var t = r.z.redSqr(),
        e = this.z.redSqr(),
        i = this.x.redMul(t),
        s = r.x.redMul(e),
        a = this.y.redMul(t.redMul(r.z)),
        c = r.y.redMul(e.redMul(this.z)),
        f = i.redSub(s),
        p = a.redSub(c);
    if (f.cmpn(0) === 0) return p.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var d = f.redSqr(),
        b = d.redMul(f),
        E = i.redMul(d),
        x = p.redSqr().redIAdd(b).redISub(E).redISub(E),
        D = p.redMul(E.redISub(x)).redISub(a.redMul(b)),
        P = this.z.redMul(r.z).redMul(f);
    return this.curve.jpoint(x, D, P)
}, fr.prototype.mixedAdd = function(r) {
    if (this.isInfinity()) return r.toJ();
    if (r.isInfinity()) return this;
    var t = this.z.redSqr(),
        e = this.x,
        i = r.x.redMul(t),
        s = this.y,
        a = r.y.redMul(t).redMul(this.z),
        c = e.redSub(i),
        f = s.redSub(a);
    if (c.cmpn(0) === 0) return f.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var p = c.redSqr(),
        d = p.redMul(c),
        b = e.redMul(p),
        E = f.redSqr().redIAdd(d).redISub(b).redISub(b),
        x = f.redMul(b.redISub(E)).redISub(s.redMul(d)),
        D = this.z.redMul(c);
    return this.curve.jpoint(E, x, D)
}, fr.prototype.dblp = function(r) {
    if (r === 0) return this;
    if (this.isInfinity()) return this;
    if (!r) return this.dbl();
    var t;
    if (this.curve.zeroA || this.curve.threeA) {
        var e = this;
        for (t = 0; t < r; t++) e = e.dbl();
        return e
    }
    var i = this.curve.a,
        s = this.curve.tinv,
        a = this.x,
        c = this.y,
        f = this.z,
        p = f.redSqr().redSqr(),
        d = c.redAdd(c);
    for (t = 0; t < r; t++) {
        var b = a.redSqr(),
            E = d.redSqr(),
            x = E.redSqr(),
            D = b.redAdd(b).redIAdd(b).redIAdd(i.redMul(p)),
            P = a.redMul(E),
            Y = D.redSqr().redISub(P.redAdd(P)),
            G = P.redISub(Y),
            tt = D.redMul(G);
        tt = tt.redIAdd(tt).redISub(x);
        var K = d.redMul(f);
        t + 1 < r && (p = p.redMul(x)), a = Y, f = K, d = tt
    }
    return this.curve.jpoint(a, d.redMul(s), f)
}, fr.prototype.dbl = function() {
    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
}, fr.prototype._zeroDbl = function() {
    var r, t, e;
    if (this.zOne) {
        var i = this.x.redSqr(),
            s = this.y.redSqr(),
            a = s.redSqr(),
            c = this.x.redAdd(s).redSqr().redISub(i).redISub(a);
        c = c.redIAdd(c);
        var f = i.redAdd(i).redIAdd(i),
            p = f.redSqr().redISub(c).redISub(c),
            d = a.redIAdd(a);
        d = d.redIAdd(d), d = d.redIAdd(d), r = p, t = f.redMul(c.redISub(p)).redISub(d), e = this.y.redAdd(this.y)
    } else {
        var b = this.x.redSqr(),
            E = this.y.redSqr(),
            x = E.redSqr(),
            D = this.x.redAdd(E).redSqr().redISub(b).redISub(x);
        D = D.redIAdd(D);
        var P = b.redAdd(b).redIAdd(b),
            Y = P.redSqr(),
            G = x.redIAdd(x);
        G = G.redIAdd(G), G = G.redIAdd(G), r = Y.redISub(D).redISub(D), t = P.redMul(D.redISub(r)).redISub(G), e = this.y.redMul(this.z), e = e.redIAdd(e)
    }
    return this.curve.jpoint(r, t, e)
}, fr.prototype._threeDbl = function() {
    var r, t, e;
    if (this.zOne) {
        var i = this.x.redSqr(),
            s = this.y.redSqr(),
            a = s.redSqr(),
            c = this.x.redAdd(s).redSqr().redISub(i).redISub(a);
        c = c.redIAdd(c);
        var f = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
            p = f.redSqr().redISub(c).redISub(c);
        r = p;
        var d = a.redIAdd(a);
        d = d.redIAdd(d), d = d.redIAdd(d), t = f.redMul(c.redISub(p)).redISub(d), e = this.y.redAdd(this.y)
    } else {
        var b = this.z.redSqr(),
            E = this.y.redSqr(),
            x = this.x.redMul(E),
            D = this.x.redSub(b).redMul(this.x.redAdd(b));
        D = D.redAdd(D).redIAdd(D);
        var P = x.redIAdd(x);
        P = P.redIAdd(P);
        var Y = P.redAdd(P);
        r = D.redSqr().redISub(Y), e = this.y.redAdd(this.z).redSqr().redISub(E).redISub(b);
        var G = E.redSqr();
        G = G.redIAdd(G), G = G.redIAdd(G), G = G.redIAdd(G), t = D.redMul(P.redISub(r)).redISub(G)
    }
    return this.curve.jpoint(r, t, e)
}, fr.prototype._dbl = function() {
    var r = this.curve.a,
        t = this.x,
        e = this.y,
        i = this.z,
        s = i.redSqr().redSqr(),
        a = t.redSqr(),
        c = e.redSqr(),
        f = a.redAdd(a).redIAdd(a).redIAdd(r.redMul(s)),
        p = t.redAdd(t);
    p = p.redIAdd(p);
    var d = p.redMul(c),
        b = f.redSqr().redISub(d.redAdd(d)),
        E = d.redISub(b),
        x = c.redSqr();
    x = x.redIAdd(x), x = x.redIAdd(x), x = x.redIAdd(x);
    var D = f.redMul(E).redISub(x),
        P = e.redAdd(e).redMul(i);
    return this.curve.jpoint(b, D, P)
}, fr.prototype.trpl = function() {
    if (!this.curve.zeroA) return this.dbl().add(this);
    var r = this.x.redSqr(),
        t = this.y.redSqr(),
        e = this.z.redSqr(),
        i = t.redSqr(),
        s = r.redAdd(r).redIAdd(r),
        a = s.redSqr(),
        c = this.x.redAdd(t).redSqr().redISub(r).redISub(i);
    c = c.redIAdd(c), c = c.redAdd(c).redIAdd(c), c = c.redISub(a);
    var f = c.redSqr(),
        p = i.redIAdd(i);
    p = p.redIAdd(p), p = p.redIAdd(p), p = p.redIAdd(p);
    var d = s.redIAdd(c).redSqr().redISub(a).redISub(f).redISub(p),
        b = t.redMul(d);
    b = b.redIAdd(b), b = b.redIAdd(b);
    var E = this.x.redMul(f).redISub(b);
    E = E.redIAdd(E), E = E.redIAdd(E);
    var x = this.y.redMul(d.redMul(p.redISub(d)).redISub(c.redMul(f)));
    x = x.redIAdd(x), x = x.redIAdd(x), x = x.redIAdd(x);
    var D = this.z.redAdd(c).redSqr().redISub(e).redISub(f);
    return this.curve.jpoint(E, x, D)
}, fr.prototype.mul = function(r, t) {
    return r = new ne(r, t), this.curve._wnafMul(this, r)
}, fr.prototype.eq = function(r) {
    if (r.type === "affine") return this.eq(r.toJ());
    if (this === r) return !0;
    var t = this.z.redSqr(),
        e = r.z.redSqr();
    if (this.x.redMul(e).redISub(r.x.redMul(t)).cmpn(0) !== 0) return !1;
    var i = t.redMul(this.z),
        s = e.redMul(r.z);
    return this.y.redMul(s).redISub(r.y.redMul(i)).cmpn(0) === 0
}, fr.prototype.eqXToP = function(r) {
    var t = this.z.redSqr(),
        e = r.toRed(this.curve.red).redMul(t);
    if (this.x.cmp(e) === 0) return !0;
    for (var i = r.clone(), s = this.curve.redN.redMul(t);;) {
        if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
        if (e.redIAdd(s), this.x.cmp(e) === 0) return !0
    }
}, fr.prototype.inspect = function() {
    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
}, fr.prototype.isInfinity = function() {
    return this.z.cmpn(0) === 0
};
var Fu = vo(function(r, t) {
        var e = t;
        e.base = Ds, e.short = b8, e.mont = null, e.edwards = null
    }),
    Bu = vo(function(r, t) {
        var e = t,
            i = ri.assert;

        function s(f) {
            f.type === "short" ? this.curve = new Fu.short(f) : f.type === "edwards" ? this.curve = new Fu.edwards(f) : this.curve = new Fu.mont(f), this.g = this.curve.g, this.n = this.curve.n, this.hash = f.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }
        e.PresetCurve = s;

        function a(f, p) {
            Object.defineProperty(e, f, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var d = new s(p);
                    return Object.defineProperty(e, f, {
                        configurable: !0,
                        enumerable: !0,
                        value: d
                    }), d
                }
            })
        }
        a("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: Gi.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }), a("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: Gi.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }), a("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: Gi.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }), a("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: Gi.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }), a("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: Gi.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }), a("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: Gi.sha256,
            gRed: !1,
            g: ["9"]
        }), a("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: Gi.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        var c;
        try {
            c = null.crash()
        } catch {
            c = void 0
        }
        a("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: Gi.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [{
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }],
            gRed: !1,
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", c]
        })
    });

function Hn(r) {
    if (!(this instanceof Hn)) return new Hn(r);
    this.hash = r.hash, this.predResist = !!r.predResist, this.outLen = this.hash.outSize, this.minEntropy = r.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
    var t = Ui.toArray(r.entropy, r.entropyEnc || "hex"),
        e = Ui.toArray(r.nonce, r.nonceEnc || "hex"),
        i = Ui.toArray(r.pers, r.persEnc || "hex");
    Vl(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, e, i)
}
var X0 = Hn;
Hn.prototype._init = function(r, t, e) {
    var i = r.concat(t).concat(e);
    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
    for (var s = 0; s < this.V.length; s++) this.K[s] = 0, this.V[s] = 1;
    this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656
}, Hn.prototype._hmac = function() {
    return new Gi.hmac(this.hash, this.K)
}, Hn.prototype._update = function(r) {
    var t = this._hmac().update(this.V).update([0]);
    r && (t = t.update(r)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), r && (this.K = this._hmac().update(this.V).update([1]).update(r).digest(), this.V = this._hmac().update(this.V).digest())
}, Hn.prototype.reseed = function(r, t, e, i) {
    typeof t != "string" && (i = e, e = t, t = null), r = Ui.toArray(r, t), e = Ui.toArray(e, i), Vl(r.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(r.concat(e || [])), this._reseed = 1
}, Hn.prototype.generate = function(r, t, e, i) {
    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
    typeof t != "string" && (i = e, e = t, t = null), e && (e = Ui.toArray(e, i || "hex"), this._update(e));
    for (var s = []; s.length < r;) this.V = this._hmac().update(this.V).digest(), s = s.concat(this.V);
    var a = s.slice(0, r);
    return this._update(e), this._reseed++, Ui.encode(a, t)
};
var $h = ri.assert;

function br(r, t) {
    this.ec = r, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
}
var zh = br;
br.fromPublic = function(r, t, e) {
    return t instanceof br ? t : new br(r, {
        pub: t,
        pubEnc: e
    })
}, br.fromPrivate = function(r, t, e) {
    return t instanceof br ? t : new br(r, {
        priv: t,
        privEnc: e
    })
}, br.prototype.validate = function() {
    var r = this.getPublic();
    return r.isInfinity() ? {
        result: !1,
        reason: "Invalid public key"
    } : r.validate() ? r.mul(this.ec.curve.n).isInfinity() ? {
        result: !0,
        reason: null
    } : {
        result: !1,
        reason: "Public key * N != O"
    } : {
        result: !1,
        reason: "Public key is not a point"
    }
}, br.prototype.getPublic = function(r, t) {
    return typeof r == "string" && (t = r, r = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, r) : this.pub
}, br.prototype.getPrivate = function(r) {
    return r === "hex" ? this.priv.toString(16, 2) : this.priv
}, br.prototype._importPrivate = function(r, t) {
    this.priv = new ne(r, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
}, br.prototype._importPublic = function(r, t) {
    if (r.x || r.y) {
        this.ec.curve.type === "mont" ? $h(r.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && $h(r.x && r.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(r.x, r.y);
        return
    }
    this.pub = this.ec.curve.decodePoint(r, t)
}, br.prototype.derive = function(r) {
    return r.validate() || $h(r.validate(), "public point not validated"), r.mul(this.priv).getX()
}, br.prototype.sign = function(r, t, e) {
    return this.ec.sign(r, this, t, e)
}, br.prototype.verify = function(r, t) {
    return this.ec.verify(r, t, this)
}, br.prototype.inspect = function() {
    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
};
var _8 = ri.assert;

function cc(r, t) {
    if (r instanceof cc) return r;
    this._importDER(r, t) || (_8(r.r && r.s, "Signature without r or s"), this.r = new ne(r.r, 16), this.s = new ne(r.s, 16), r.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = r.recoveryParam)
}
var Iu = cc;

function E8() {
    this.place = 0
}

function kh(r, t) {
    var e = r[t.place++];
    if (!(e & 128)) return e;
    var i = e & 15;
    if (i === 0 || i > 4) return !1;
    for (var s = 0, a = 0, c = t.place; a < i; a++, c++) s <<= 8, s |= r[c], s >>>= 0;
    return s <= 127 ? !1 : (t.place = c, s)
}

function Z0(r) {
    for (var t = 0, e = r.length - 1; !r[t] && !(r[t + 1] & 128) && t < e;) t++;
    return t === 0 ? r : r.slice(t)
}
cc.prototype._importDER = function(r, t) {
    r = ri.toArray(r, t);
    var e = new E8;
    if (r[e.place++] !== 48) return !1;
    var i = kh(r, e);
    if (i === !1 || i + e.place !== r.length || r[e.place++] !== 2) return !1;
    var s = kh(r, e);
    if (s === !1) return !1;
    var a = r.slice(e.place, s + e.place);
    if (e.place += s, r[e.place++] !== 2) return !1;
    var c = kh(r, e);
    if (c === !1 || r.length !== c + e.place) return !1;
    var f = r.slice(e.place, c + e.place);
    if (a[0] === 0)
        if (a[1] & 128) a = a.slice(1);
        else return !1;
    if (f[0] === 0)
        if (f[1] & 128) f = f.slice(1);
        else return !1;
    return this.r = new ne(a), this.s = new ne(f), this.recoveryParam = null, !0
};

function Hh(r, t) {
    if (t < 128) {
        r.push(t);
        return
    }
    var e = 1 + (Math.log(t) / Math.LN2 >>> 3);
    for (r.push(e | 128); --e;) r.push(t >>> (e << 3) & 255);
    r.push(t)
}
cc.prototype.toDER = function(r) {
    var t = this.r.toArray(),
        e = this.s.toArray();
    for (t[0] & 128 && (t = [0].concat(t)), e[0] & 128 && (e = [0].concat(e)), t = Z0(t), e = Z0(e); !e[0] && !(e[1] & 128);) e = e.slice(1);
    var i = [2];
    Hh(i, t.length), i = i.concat(t), i.push(2), Hh(i, e.length);
    var s = i.concat(e),
        a = [48];
    return Hh(a, s.length), a = a.concat(s), ri.encode(a, r)
};
var A8 = function() {
        throw new Error("unsupported")
    },
    xg = ri.assert;

function _i(r) {
    if (!(this instanceof _i)) return new _i(r);
    typeof r == "string" && (xg(Object.prototype.hasOwnProperty.call(Bu, r), "Unknown curve " + r), r = Bu[r]), r instanceof Bu.PresetCurve && (r = {
        curve: r
    }), this.curve = r.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = r.curve.g, this.g.precompute(r.curve.n.bitLength() + 1), this.hash = r.hash || r.curve.hash
}
var S8 = _i;
_i.prototype.keyPair = function(r) {
    return new zh(this, r)
}, _i.prototype.keyFromPrivate = function(r, t) {
    return zh.fromPrivate(this, r, t)
}, _i.prototype.keyFromPublic = function(r, t) {
    return zh.fromPublic(this, r, t)
}, _i.prototype.genKeyPair = function(r) {
    r || (r = {});
    for (var t = new X0({
            hash: this.hash,
            pers: r.pers,
            persEnc: r.persEnc || "utf8",
            entropy: r.entropy || A8(this.hash.hmacStrength),
            entropyEnc: r.entropy && r.entropyEnc || "utf8",
            nonce: this.n.toArray()
        }), e = this.n.byteLength(), i = this.n.sub(new ne(2));;) {
        var s = new ne(t.generate(e));
        if (!(s.cmp(i) > 0)) return s.iaddn(1), this.keyFromPrivate(s)
    }
}, _i.prototype._truncateToN = function(r, t) {
    var e = r.byteLength() * 8 - this.n.bitLength();
    return e > 0 && (r = r.ushrn(e)), !t && r.cmp(this.n) >= 0 ? r.sub(this.n) : r
}, _i.prototype.sign = function(r, t, e, i) {
    typeof e == "object" && (i = e, e = null), i || (i = {}), t = this.keyFromPrivate(t, e), r = this._truncateToN(new ne(r, 16));
    for (var s = this.n.byteLength(), a = t.getPrivate().toArray("be", s), c = r.toArray("be", s), f = new X0({
            hash: this.hash,
            entropy: a,
            nonce: c,
            pers: i.pers,
            persEnc: i.persEnc || "utf8"
        }), p = this.n.sub(new ne(1)), d = 0;; d++) {
        var b = i.k ? i.k(d) : new ne(f.generate(this.n.byteLength()));
        if (b = this._truncateToN(b, !0), !(b.cmpn(1) <= 0 || b.cmp(p) >= 0)) {
            var E = this.g.mul(b);
            if (!E.isInfinity()) {
                var x = E.getX(),
                    D = x.umod(this.n);
                if (D.cmpn(0) !== 0) {
                    var P = b.invm(this.n).mul(D.mul(t.getPrivate()).iadd(r));
                    if (P = P.umod(this.n), P.cmpn(0) !== 0) {
                        var Y = (E.getY().isOdd() ? 1 : 0) | (x.cmp(D) !== 0 ? 2 : 0);
                        return i.canonical && P.cmp(this.nh) > 0 && (P = this.n.sub(P), Y ^= 1), new Iu({
                            r: D,
                            s: P,
                            recoveryParam: Y
                        })
                    }
                }
            }
        }
    }
}, _i.prototype.verify = function(r, t, e, i) {
    r = this._truncateToN(new ne(r, 16)), e = this.keyFromPublic(e, i), t = new Iu(t, "hex");
    var s = t.r,
        a = t.s;
    if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0 || a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
    var c = a.invm(this.n),
        f = c.mul(r).umod(this.n),
        p = c.mul(s).umod(this.n),
        d;
    return this.curve._maxwellTrick ? (d = this.g.jmulAdd(f, e.getPublic(), p), d.isInfinity() ? !1 : d.eqXToP(s)) : (d = this.g.mulAdd(f, e.getPublic(), p), d.isInfinity() ? !1 : d.getX().umod(this.n).cmp(s) === 0)
}, _i.prototype.recoverPubKey = function(r, t, e, i) {
    xg((3 & e) === e, "The recovery param is more than two bits"), t = new Iu(t, i);
    var s = this.n,
        a = new ne(r),
        c = t.r,
        f = t.s,
        p = e & 1,
        d = e >> 1;
    if (c.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d) throw new Error("Unable to find sencond key candinate");
    d ? c = this.curve.pointFromX(c.add(this.curve.n), p) : c = this.curve.pointFromX(c, p);
    var b = t.r.invm(s),
        E = s.sub(a).mul(b).umod(s),
        x = f.mul(b).umod(s);
    return this.g.mulAdd(E, c, x)
}, _i.prototype.getKeyRecoveryParam = function(r, t, e, i) {
    if (t = new Iu(t, i), t.recoveryParam !== null) return t.recoveryParam;
    for (var s = 0; s < 4; s++) {
        var a;
        try {
            a = this.recoverPubKey(r, t, s)
        } catch {
            continue
        }
        if (a.eq(e)) return s
    }
    throw new Error("Unable to find valid recovery factor")
};
var I8 = vo(function(r, t) {
        var e = t;
        e.version = "6.5.4", e.utils = ri, e.rand = function() {
            throw new Error("unsupported")
        }, e.curve = Fu, e.curves = Bu, e.ec = S8, e.eddsa = null
    }),
    D8 = I8.ec;
const x8 = "signing-key/5.7.0",
    El = new pr(x8);
let Kh = null;

function Zi() {
    return Kh || (Kh = new D8("secp256k1")), Kh
}
class M8 {
    constructor(t) {
        jo(this, "curve", "secp256k1"), jo(this, "privateKey", Mr(t)), l5(this.privateKey) !== 32 && El.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
        const e = Zi().keyFromPrivate(We(this.privateKey));
        jo(this, "publicKey", "0x" + e.getPublic(!1, "hex")), jo(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), jo(this, "_isSigningKey", !0)
    }
    _addPoint(t) {
        const e = Zi().keyFromPublic(We(this.publicKey)),
            i = Zi().keyFromPublic(We(t));
        return "0x" + e.pub.add(i.pub).encodeCompressed("hex")
    }
    signDigest(t) {
        const e = Zi().keyFromPrivate(We(this.privateKey)),
            i = We(t);
        i.length !== 32 && El.throwArgumentError("bad digest length", "digest", t);
        const s = e.sign(i, {
            canonical: !0
        });
        return X1({
            recoveryParam: s.recoveryParam,
            r: tn("0x" + s.r.toString(16), 32),
            s: tn("0x" + s.s.toString(16), 32)
        })
    }
    computeSharedSecret(t) {
        const e = Zi().keyFromPrivate(We(this.privateKey)),
            i = Zi().keyFromPublic(We(Mg(t)));
        return tn("0x" + e.derive(i.getPublic()).toString(16), 32)
    }
    static isSigningKey(t) {
        return !!(t && t._isSigningKey)
    }
}

function C8(r, t) {
    const e = X1(t),
        i = {
            r: We(e.r),
            s: We(e.s)
        };
    return "0x" + Zi().recoverPubKey(We(r), i, e.recoveryParam).encode("hex", !1)
}

function Mg(r, t) {
    const e = We(r);
    if (e.length === 32) {
        const i = new M8(e);
        return t ? "0x" + Zi().keyFromPrivate(e).getPublic(!0, "hex") : i.publicKey
    } else {
        if (e.length === 33) return t ? Mr(e) : "0x" + Zi().keyFromPublic(e).getPublic(!1, "hex");
        if (e.length === 65) return t ? "0x" + Zi().keyFromPublic(e).getPublic(!0, "hex") : Mr(e)
    }
    return El.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
}
var tp;
(function(r) {
    r[r.legacy = 0] = "legacy", r[r.eip2930 = 1] = "eip2930", r[r.eip1559 = 2] = "eip1559"
})(tp || (tp = {}));

function P8(r) {
    const t = Mg(r);
    return $5(q0(kl(q0(t, 1)), 12))
}

function O8(r, t) {
    return P8(C8(We(r), t))
}
const N8 = "https://rpc.walletconnect.com/v1";
async function R8(r, t, e, i, s, a) {
    switch (e.t) {
        case "eip191":
            return T8(r, t, e.s);
        case "eip1271":
            return await F8(r, t, e.s, i, s, a);
        default:
            throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${e.t}`)
    }
}

function T8(r, t, e) {
    return O8(ag(t), e).toLowerCase() === r.toLowerCase()
}
async function F8(r, t, e, i, s, a) {
    try {
        const c = "0x1626ba7e",
            f = "0000000000000000000000000000000000000000000000000000000000000040",
            p = "0000000000000000000000000000000000000000000000000000000000000041",
            d = e.substring(2),
            b = ag(t).substring(2),
            E = c + b + f + p + d,
            x = await fetch(`${a||N8}/?chainId=${i}&projectId=${s}`, {
                method: "POST",
                body: JSON.stringify({
                    id: B8(),
                    jsonrpc: "2.0",
                    method: "eth_call",
                    params: [{
                        to: r,
                        data: E
                    }, "latest"]
                })
            }),
            {
                result: D
            } = await x.json();
        return D ? D.slice(0, c.length).toLowerCase() === c.toLowerCase() : !1
    } catch (c) {
        return console.error("isValidEip1271Signature: ", c), !1
    }
}

function B8() {
    return Date.now() + Math.floor(Math.random() * 1e3)
}
var U8 = Object.defineProperty,
    L8 = Object.defineProperties,
    q8 = Object.getOwnPropertyDescriptors,
    ep = Object.getOwnPropertySymbols,
    j8 = Object.prototype.hasOwnProperty,
    $8 = Object.prototype.propertyIsEnumerable,
    rp = (r, t, e) => t in r ? U8(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    z8 = (r, t) => {
        for (var e in t || (t = {})) j8.call(t, e) && rp(r, e, t[e]);
        if (ep)
            for (var e of ep(t)) $8.call(t, e) && rp(r, e, t[e]);
        return r
    },
    k8 = (r, t) => L8(r, q8(t));
const H8 = "did:pkh:",
    Wl = r => r ? .split(":"),
    Cg = r => {
        const t = r && Wl(r);
        if (t) return r.includes(H8) ? t[3] : t[1]
    },
    ip = r => {
        const t = r && Wl(r);
        if (t) return t[2] + ":" + t[3]
    },
    Wu = r => {
        const t = r && Wl(r);
        if (t) return t.pop()
    };
async function np(r) {
    const {
        cacao: t,
        projectId: e
    } = r, {
        s: i,
        p: s
    } = t, a = Pg(s, s.iss), c = Wu(s.iss);
    return await R8(c, a, i, Cg(s.iss), e)
}
const Pg = (r, t) => {
    const e = `${r.domain} wants you to sign in with your Ethereum account:`,
        i = Wu(t);
    if (!r.aud && !r.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
    let s = r.statement || void 0;
    const a = `URI: ${r.aud||r.uri}`,
        c = `Version: ${r.version}`,
        f = `Chain ID: ${Cg(t)}`,
        p = `Nonce: ${r.nonce}`,
        d = `Issued At: ${r.iat}`,
        b = r.resources ? `Resources:${r.resources.map(x=>`
- ${x}`).join("")}` : void 0,
        E = Uu(r.resources);
    if (E) {
        const x = ia(E);
        s = Z8(s, x)
    }
    return [e, i, "", s, "", a, c, f, p, d, b].filter(x => x != null).join(`
`)
};

function K8(r) {
    return Buffer.from(JSON.stringify(r)).toString("base64")
}

function V8(r) {
    return JSON.parse(Buffer.from(r, "base64").toString("utf-8"))
}

function Ss(r) {
    if (!r) throw new Error("No recap provided, value is undefined");
    if (!r.att) throw new Error("No `att` property found");
    const t = Object.keys(r.att);
    if (!(t != null && t.length)) throw new Error("No resources found in `att` property");
    t.forEach(e => {
        const i = r.att[e];
        if (Array.isArray(i)) throw new Error(`Resource must be an object: ${e}`);
        if (typeof i != "object") throw new Error(`Resource must be an object: ${e}`);
        if (!Object.keys(i).length) throw new Error(`Resource object is empty: ${e}`);
        Object.keys(i).forEach(s => {
            const a = i[s];
            if (!Array.isArray(a)) throw new Error(`Ability limits ${s} must be an array of objects, found: ${a}`);
            if (!a.length) throw new Error(`Value of ${s} is empty array, must be an array with objects`);
            a.forEach(c => {
                if (typeof c != "object") throw new Error(`Ability limits (${s}) must be an array of objects, found: ${c}`)
            })
        })
    })
}

function G8(r, t, e, i = {}) {
    return e ? .sort((s, a) => s.localeCompare(a)), {
        att: {
            [r]: W8(t, e, i)
        }
    }
}

function W8(r, t, e = {}) {
    t = t ? .sort((s, a) => s.localeCompare(a));
    const i = t.map(s => ({
        [`${r}/${s}`]: [e]
    }));
    return Object.assign({}, ...i)
}

function Og(r) {
    return Ss(r), `urn:recap:${K8(r).replace(/=/g,"")}`
}

function ia(r) {
    const t = V8(r.replace("urn:recap:", ""));
    return Ss(t), t
}

function Y8(r, t, e) {
    const i = G8(r, t, e);
    return Og(i)
}

function Q8(r) {
    return r && r.includes("urn:recap:")
}

function J8(r, t) {
    const e = ia(r),
        i = ia(t),
        s = X8(e, i);
    return Og(s)
}

function X8(r, t) {
    Ss(r), Ss(t);
    const e = Object.keys(r.att).concat(Object.keys(t.att)).sort((s, a) => s.localeCompare(a)),
        i = {
            att: {}
        };
    return e.forEach(s => {
        var a, c;
        Object.keys(((a = r.att) == null ? void 0 : a[s]) || {}).concat(Object.keys(((c = t.att) == null ? void 0 : c[s]) || {})).sort((f, p) => f.localeCompare(p)).forEach(f => {
            var p, d;
            i.att[s] = k8(z8({}, i.att[s]), {
                [f]: ((p = r.att[s]) == null ? void 0 : p[f]) || ((d = t.att[s]) == null ? void 0 : d[f])
            })
        })
    }), i
}

function Z8(r = "", t) {
    Ss(t);
    const e = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (r.includes(e)) return r;
    const i = [];
    let s = 0;
    Object.keys(t.att).forEach(f => {
        const p = Object.keys(t.att[f]).map(E => ({
            ability: E.split("/")[0],
            action: E.split("/")[1]
        }));
        p.sort((E, x) => E.action.localeCompare(x.action));
        const d = {};
        p.forEach(E => {
            d[E.ability] || (d[E.ability] = []), d[E.ability].push(E.action)
        });
        const b = Object.keys(d).map(E => (s++, `(${s}) '${E}': '${d[E].join("', '")}' for '${f}'.`));
        i.push(b.join(", ").replace(".,", "."))
    });
    const a = i.join(" "),
        c = `${e}${a}`;
    return `${r?r+" ":""}${c}`
}

function sp(r) {
    var t;
    const e = ia(r);
    Ss(e);
    const i = (t = e.att) == null ? void 0 : t.eip155;
    return i ? Object.keys(i).map(s => s.split("/")[1]) : []
}

function op(r) {
    const t = ia(r);
    Ss(t);
    const e = [];
    return Object.values(t.att).forEach(i => {
        Object.values(i).forEach(s => {
            var a;
            (a = s ? .[0]) != null && a.chains && e.push(s[0].chains)
        })
    }), [...new Set(e.flat())]
}

function Uu(r) {
    if (!r) return;
    const t = r ? .[r.length - 1];
    return Q8(t) ? t : void 0
}
const Ng = "base10",
    Or = "base16",
    Al = "base64pad",
    Yl = "utf8",
    Rg = 0,
    Kn = 1,
    t4 = 0,
    ap = 1,
    Sl = 12,
    Ql = 32;

function e4() {
    const r = zl.generateKeyPair();
    return {
        privateKey: Nr(r.secretKey, Or),
        publicKey: Nr(r.publicKey, Or)
    }
}

function Il() {
    const r = ho.randomBytes(Ql);
    return Nr(r, Or)
}

function r4(r, t) {
    const e = zl.sharedKey(kr(r, Or), kr(t, Or), !0),
        i = new F_(ac.SHA256, e).expand(Ql);
    return Nr(i, Or)
}

function Lu(r) {
    const t = ac.hash(kr(r, Or));
    return Nr(t, Or)
}

function _s(r) {
    const t = ac.hash(kr(r, Yl));
    return Nr(t, Or)
}

function i4(r) {
    return kr(`${r}`, Ng)
}

function fa(r) {
    return Number(Nr(r, Ng))
}

function n4(r) {
    const t = i4(typeof r.type < "u" ? r.type : Rg);
    if (fa(t) === Kn && typeof r.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const e = typeof r.senderPublicKey < "u" ? kr(r.senderPublicKey, Or) : void 0,
        i = typeof r.iv < "u" ? kr(r.iv, Or) : ho.randomBytes(Sl),
        s = new jl.ChaCha20Poly1305(kr(r.symKey, Or)).seal(i, kr(r.message, Yl));
    return o4({
        type: t,
        sealed: s,
        iv: i,
        senderPublicKey: e
    })
}

function s4(r) {
    const t = new jl.ChaCha20Poly1305(kr(r.symKey, Or)),
        {
            sealed: e,
            iv: i
        } = Yu(r.encoded),
        s = t.open(i, e);
    if (s === null) throw new Error("Failed to decrypt");
    return Nr(s, Yl)
}

function o4(r) {
    if (fa(r.type) === Kn) {
        if (typeof r.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
        return Nr(ml([r.type, r.senderPublicKey, r.iv, r.sealed]), Al)
    }
    return Nr(ml([r.type, r.iv, r.sealed]), Al)
}

function Yu(r) {
    const t = kr(r, Al),
        e = t.slice(t4, ap),
        i = ap;
    if (fa(e) === Kn) {
        const f = i + Ql,
            p = f + Sl,
            d = t.slice(i, f),
            b = t.slice(f, p),
            E = t.slice(p);
        return {
            type: e,
            sealed: E,
            iv: b,
            senderPublicKey: d
        }
    }
    const s = i + Sl,
        a = t.slice(i, s),
        c = t.slice(s);
    return {
        type: e,
        sealed: c,
        iv: a
    }
}

function a4(r, t) {
    const e = Yu(r);
    return Tg({
        type: fa(e.type),
        senderPublicKey: typeof e.senderPublicKey < "u" ? Nr(e.senderPublicKey, Or) : void 0,
        receiverPublicKey: t ? .receiverPublicKey
    })
}

function Tg(r) {
    const t = r ? .type || Rg;
    if (t === Kn) {
        if (typeof r ? .senderPublicKey > "u") throw new Error("missing sender public key");
        if (typeof r ? .receiverPublicKey > "u") throw new Error("missing receiver public key")
    }
    return {
        type: t,
        senderPublicKey: r ? .senderPublicKey,
        receiverPublicKey: r ? .receiverPublicKey
    }
}

function up(r) {
    return r.type === Kn && typeof r.senderPublicKey == "string" && typeof r.receiverPublicKey == "string"
}
const u4 = "irn";

function Dl(r) {
    return r ? .relay || {
        protocol: u4
    }
}

function Wo(r) {
    const t = qE[r];
    if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${r}`);
    return t
}
var c4 = Object.defineProperty,
    h4 = Object.defineProperties,
    l4 = Object.getOwnPropertyDescriptors,
    cp = Object.getOwnPropertySymbols,
    f4 = Object.prototype.hasOwnProperty,
    d4 = Object.prototype.propertyIsEnumerable,
    hp = (r, t, e) => t in r ? c4(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    lp = (r, t) => {
        for (var e in t || (t = {})) f4.call(t, e) && hp(r, e, t[e]);
        if (cp)
            for (var e of cp(t)) d4.call(t, e) && hp(r, e, t[e]);
        return r
    },
    p4 = (r, t) => h4(r, l4(t));

function g4(r, t = "-") {
    const e = {},
        i = "relay" + t;
    return Object.keys(r).forEach(s => {
        if (s.startsWith(i)) {
            const a = s.replace(i, ""),
                c = r[s];
            e[a] = c
        }
    }), e
}

function fp(r) {
    r = r.includes("wc://") ? r.replace("wc://", "") : r, r = r.includes("wc:") ? r.replace("wc:", "") : r;
    const t = r.indexOf(":"),
        e = r.indexOf("?") !== -1 ? r.indexOf("?") : void 0,
        i = r.substring(0, t),
        s = r.substring(t + 1, e).split("@"),
        a = typeof e < "u" ? r.substring(e) : "",
        c = ta.parse(a),
        f = typeof c.methods == "string" ? c.methods.split(",") : void 0;
    return {
        protocol: i,
        topic: m4(s[0]),
        version: parseInt(s[1], 10),
        symKey: c.symKey,
        relay: g4(c),
        methods: f,
        expiryTimestamp: c.expiryTimestamp ? parseInt(c.expiryTimestamp, 10) : void 0
    }
}

function m4(r) {
    return r.startsWith("//") ? r.substring(2) : r
}

function v4(r, t = "-") {
    const e = "relay",
        i = {};
    return Object.keys(r).forEach(s => {
        const a = e + t + s;
        r[s] && (i[a] = r[s])
    }), i
}

function y4(r) {
    return `${r.protocol}:${r.topic}@${r.version}?` + ta.stringify(lp(p4(lp({
        symKey: r.symKey
    }, v4(r.relay)), {
        expiryTimestamp: r.expiryTimestamp
    }), r.methods ? {
        methods: r.methods.join(",")
    } : {}))
}

function yo(r) {
    const t = [];
    return r.forEach(e => {
        const [i, s] = e.split(":");
        t.push(`${i}:${s}`)
    }), t
}

function w4(r) {
    const t = [];
    return Object.values(r).forEach(e => {
        t.push(...yo(e.accounts))
    }), t
}

function b4(r, t) {
    const e = [];
    return Object.values(r).forEach(i => {
        yo(i.accounts).includes(t) && e.push(...i.methods)
    }), e
}

function _4(r, t) {
    const e = [];
    return Object.values(r).forEach(i => {
        yo(i.accounts).includes(t) && e.push(...i.events)
    }), e
}

function Jl(r) {
    return r.includes(":")
}

function Yo(r) {
    return Jl(r) ? r.split(":")[0] : r
}

function E4(r) {
    const t = {};
    return r ? .forEach(e => {
        const [i, s] = e.split(":");
        t[i] || (t[i] = {
            accounts: [],
            chains: [],
            events: []
        }), t[i].accounts.push(e), t[i].chains.push(`${i}:${s}`)
    }), t
}

function dp(r, t) {
    t = t.map(i => i.replace("did:pkh:", ""));
    const e = E4(t);
    for (const [i, s] of Object.entries(e)) s.methods ? s.methods = Ru(s.methods, r) : s.methods = r, s.events = ["chainChanged", "accountsChanged"];
    return e
}
const A4 = {
        INVALID_METHOD: {
            message: "Invalid method.",
            code: 1001
        },
        INVALID_EVENT: {
            message: "Invalid event.",
            code: 1002
        },
        INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003
        },
        INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004
        },
        INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005
        },
        UNAUTHORIZED_METHOD: {
            message: "Unauthorized method.",
            code: 3001
        },
        UNAUTHORIZED_EVENT: {
            message: "Unauthorized event.",
            code: 3002
        },
        UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004
        },
        USER_REJECTED: {
            message: "User rejected.",
            code: 5e3
        },
        USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001
        },
        USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002
        },
        USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003
        },
        UNSUPPORTED_CHAINS: {
            message: "Unsupported chains.",
            code: 5100
        },
        UNSUPPORTED_METHODS: {
            message: "Unsupported methods.",
            code: 5101
        },
        UNSUPPORTED_EVENTS: {
            message: "Unsupported events.",
            code: 5102
        },
        UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103
        },
        UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104
        },
        USER_DISCONNECTED: {
            message: "User disconnected.",
            code: 6e3
        },
        SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3
        },
        WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001
        }
    },
    S4 = {
        NOT_INITIALIZED: {
            message: "Not initialized.",
            code: 1
        },
        NO_MATCHING_KEY: {
            message: "No matching key.",
            code: 2
        },
        RESTORE_WILL_OVERRIDE: {
            message: "Restore will override.",
            code: 3
        },
        RESUBSCRIBED: {
            message: "Resubscribed.",
            code: 4
        },
        MISSING_OR_INVALID: {
            message: "Missing or invalid.",
            code: 5
        },
        EXPIRED: {
            message: "Expired.",
            code: 6
        },
        UNKNOWN_TYPE: {
            message: "Unknown type.",
            code: 7
        },
        MISMATCHED_TOPIC: {
            message: "Mismatched topic.",
            code: 8
        },
        NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9
        }
    };

function gt(r, t) {
    const {
        message: e,
        code: i
    } = S4[r];
    return {
        message: t ? `${e} ${t}` : e,
        code: i
    }
}

function Ne(r, t) {
    const {
        message: e,
        code: i
    } = A4[r];
    return {
        message: t ? `${e} ${t}` : e,
        code: i
    }
}

function on(r, t) {
    return Array.isArray(r) ? typeof t < "u" && r.length ? r.every(t) : !0 : !1
}

function na(r) {
    return Object.getPrototypeOf(r) === Object.prototype && Object.keys(r).length
}

function Pr(r) {
    return typeof r > "u"
}

function Ze(r, t) {
    return t && Pr(r) ? !0 : typeof r == "string" && !!r.trim().length
}

function Xl(r, t) {
    return t && Pr(r) ? !0 : typeof r == "number" && !isNaN(r)
}

function I4(r, t) {
    const {
        requiredNamespaces: e
    } = t, i = Object.keys(r.namespaces), s = Object.keys(e);
    let a = !0;
    return bs(s, i) ? (i.forEach(c => {
        const {
            accounts: f,
            methods: p,
            events: d
        } = r.namespaces[c], b = yo(f), E = e[c];
        (!bs(H1(c, E), b) || !bs(E.methods, p) || !bs(E.events, d)) && (a = !1)
    }), a) : !1
}

function Qu(r) {
    return Ze(r, !1) && r.includes(":") ? r.split(":").length === 2 : !1
}

function D4(r) {
    if (Ze(r, !1) && r.includes(":")) {
        const t = r.split(":");
        if (t.length === 3) {
            const e = t[0] + ":" + t[1];
            return !!t[2] && Qu(e)
        }
    }
    return !1
}

function x4(r) {
    if (Ze(r, !1)) try {
        return typeof new URL(r) < "u"
    } catch {
        return !1
    }
    return !1
}

function M4(r) {
    var t;
    return (t = r ? .proposer) == null ? void 0 : t.publicKey
}

function C4(r) {
    return r ? .topic
}

function P4(r, t) {
    let e = null;
    return Ze(r ? .publicKey, !1) || (e = gt("MISSING_OR_INVALID", `${t} controller public key should be a string`)), e
}

function pp(r) {
    let t = !0;
    return on(r) ? r.length && (t = r.every(e => Ze(e, !1))) : t = !1, t
}

function O4(r, t, e) {
    let i = null;
    return on(t) && t.length ? t.forEach(s => {
        i || Qu(s) || (i = Ne("UNSUPPORTED_CHAINS", `${e}, chain ${s} should be a string and conform to "namespace:chainId" format`))
    }) : Qu(r) || (i = Ne("UNSUPPORTED_CHAINS", `${e}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i
}

function N4(r, t, e) {
    let i = null;
    return Object.entries(r).forEach(([s, a]) => {
        if (i) return;
        const c = O4(s, H1(s, a), `${t} ${e}`);
        c && (i = c)
    }), i
}

function R4(r, t) {
    let e = null;
    return on(r) ? r.forEach(i => {
        e || D4(i) || (e = Ne("UNSUPPORTED_ACCOUNTS", `${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`))
    }) : e = Ne("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), e
}

function T4(r, t) {
    let e = null;
    return Object.values(r).forEach(i => {
        if (e) return;
        const s = R4(i ? .accounts, `${t} namespace`);
        s && (e = s)
    }), e
}

function F4(r, t) {
    let e = null;
    return pp(r ? .methods) ? pp(r ? .events) || (e = Ne("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : e = Ne("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), e
}

function Fg(r, t) {
    let e = null;
    return Object.values(r).forEach(i => {
        if (e) return;
        const s = F4(i, `${t}, namespace`);
        s && (e = s)
    }), e
}

function B4(r, t, e) {
    let i = null;
    if (r && na(r)) {
        const s = Fg(r, t);
        s && (i = s);
        const a = N4(r, t, e);
        a && (i = a)
    } else i = gt("MISSING_OR_INVALID", `${t}, ${e} should be an object with data`);
    return i
}

function Vh(r, t) {
    let e = null;
    if (r && na(r)) {
        const i = Fg(r, t);
        i && (e = i);
        const s = T4(r, t);
        s && (e = s)
    } else e = gt("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
    return e
}

function Bg(r) {
    return Ze(r.protocol, !0)
}

function U4(r, t) {
    let e = !1;
    return t && !r ? e = !0 : r && on(r) && r.length && r.forEach(i => {
        e = Bg(i)
    }), e
}

function L4(r) {
    return typeof r == "number"
}

function $r(r) {
    return typeof r < "u" && typeof r !== null
}

function q4(r) {
    return !(!r || typeof r != "object" || !r.code || !Xl(r.code, !1) || !r.message || !Ze(r.message, !1))
}

function j4(r) {
    return !(Pr(r) || !Ze(r.method, !1))
}

function $4(r) {
    return !(Pr(r) || Pr(r.result) && Pr(r.error) || !Xl(r.id, !1) || !Ze(r.jsonrpc, !1))
}

function z4(r) {
    return !(Pr(r) || !Ze(r.name, !1))
}

function gp(r, t) {
    return !(!Qu(t) || !w4(r).includes(t))
}

function k4(r, t, e) {
    return Ze(e, !1) ? b4(r, t).includes(e) : !1
}

function H4(r, t, e) {
    return Ze(e, !1) ? _4(r, t).includes(e) : !1
}

function mp(r, t, e) {
    let i = null;
    const s = K4(r),
        a = V4(t),
        c = Object.keys(s),
        f = Object.keys(a),
        p = vp(Object.keys(r)),
        d = vp(Object.keys(t)),
        b = p.filter(E => !d.includes(E));
    return b.length && (i = gt("NON_CONFORMING_NAMESPACES", `${e} namespaces keys don't satisfy requiredNamespaces.
      Required: ${b.toString()}
      Received: ${Object.keys(t).toString()}`)), bs(c, f) || (i = gt("NON_CONFORMING_NAMESPACES", `${e} namespaces chains don't satisfy required namespaces.
      Required: ${c.toString()}
      Approved: ${f.toString()}`)), Object.keys(t).forEach(E => {
        if (!E.includes(":") || i) return;
        const x = yo(t[E].accounts);
        x.includes(E) || (i = gt("NON_CONFORMING_NAMESPACES", `${e} namespaces accounts don't satisfy namespace accounts for ${E}
        Required: ${E}
        Approved: ${x.toString()}`))
    }), c.forEach(E => {
        i || (bs(s[E].methods, a[E].methods) ? bs(s[E].events, a[E].events) || (i = gt("NON_CONFORMING_NAMESPACES", `${e} namespaces events don't satisfy namespace events for ${E}`)) : i = gt("NON_CONFORMING_NAMESPACES", `${e} namespaces methods don't satisfy namespace methods for ${E}`))
    }), i
}

function K4(r) {
    const t = {};
    return Object.keys(r).forEach(e => {
        var i;
        e.includes(":") ? t[e] = r[e] : (i = r[e].chains) == null || i.forEach(s => {
            t[s] = {
                methods: r[e].methods,
                events: r[e].events
            }
        })
    }), t
}

function vp(r) {
    return [...new Set(r.map(t => t.includes(":") ? t.split(":")[0] : t))]
}

function V4(r) {
    const t = {};
    return Object.keys(r).forEach(e => {
        e.includes(":") ? t[e] = r[e] : yo(r[e].accounts) ? .forEach(s => {
            t[s] = {
                accounts: r[e].accounts.filter(a => a.includes(`${s}:`)),
                methods: r[e].methods,
                events: r[e].events
            }
        })
    }), t
}

function G4(r, t) {
    return Xl(r, !1) && r <= t.max && r >= t.min
}

function yp() {
    const r = ha();
    return new Promise(t => {
        switch (r) {
            case ti.browser:
                t(W4());
                break;
            case ti.reactNative:
                t(Y4());
                break;
            case ti.node:
                t(Q4());
                break;
            default:
                t(!0)
        }
    })
}

function W4() {
    return fo() && navigator ? .onLine
}
async function Y4() {
    return lo() && typeof global < "u" && global != null && global.NetInfo ? (await (global == null ? void 0 : global.NetInfo.fetch())) ? .isConnected : !0
}

function Q4() {
    return !0
}

function J4(r) {
    switch (ha()) {
        case ti.browser:
            X4(r);
            break;
        case ti.reactNative:
            Z4(r);
            break
    }
}

function X4(r) {
    !lo() && fo() && (window.addEventListener("online", () => r(!0)), window.addEventListener("offline", () => r(!1)))
}

function Z4(r) {
    lo() && typeof global < "u" && global != null && global.NetInfo && global ? .NetInfo.addEventListener(t => r(t ? .isConnected))
}
const Gh = {};
class ko {
    static get(t) {
        return Gh[t]
    }
    static set(t, e) {
        Gh[t] = e
    }
    static delete(t) {
        delete Gh[t]
    }
}
const tS = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    eS = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    rS = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function iS(r, t) {
    if (r === "__proto__" || r === "constructor" && t && typeof t == "object" && "prototype" in t) {
        nS(r);
        return
    }
    return t
}

function nS(r) {
    console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`)
}

function Du(r, t = {}) {
    if (typeof r != "string") return r;
    const e = r.trim();
    if (r[0] === '"' && r.endsWith('"') && !r.includes("\\")) return e.slice(1, -1);
    if (e.length <= 9) {
        const i = e.toLowerCase();
        if (i === "true") return !0;
        if (i === "false") return !1;
        if (i === "undefined") return;
        if (i === "null") return null;
        if (i === "nan") return Number.NaN;
        if (i === "infinity") return Number.POSITIVE_INFINITY;
        if (i === "-infinity") return Number.NEGATIVE_INFINITY
    }
    if (!rS.test(r)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return r
    }
    try {
        if (tS.test(r) || eS.test(r)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(r, iS)
        }
        return JSON.parse(r)
    } catch (i) {
        if (t.strict) throw i;
        return r
    }
}

function sS(r) {
    return !r || typeof r.then != "function" ? Promise.resolve(r) : r
}

function hr(r, ...t) {
    try {
        return sS(r(...t))
    } catch (e) {
        return Promise.reject(e)
    }
}

function oS(r) {
    const t = typeof r;
    return r === null || t !== "object" && t !== "function"
}

function aS(r) {
    const t = Object.getPrototypeOf(r);
    return !t || t.isPrototypeOf(Object)
}

function qu(r) {
    if (oS(r)) return String(r);
    if (aS(r) || Array.isArray(r)) return JSON.stringify(r);
    if (typeof r.toJSON == "function") return qu(r.toJSON());
    throw new Error("[unstorage] Cannot stringify value!")
}

function Ug() {
    if (typeof Buffer === void 0) throw new TypeError("[unstorage] Buffer is not supported!")
}
const xl = "base64:";

function uS(r) {
    if (typeof r == "string") return r;
    Ug();
    const t = Buffer.from(r).toString("base64");
    return xl + t
}

function cS(r) {
    return typeof r != "string" || !r.startsWith(xl) ? r : (Ug(), Buffer.from(r.slice(xl.length), "base64"))
}

function jr(r) {
    return r ? r.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
}

function hS(...r) {
    return jr(r.join(":"))
}

function xu(r) {
    return r = jr(r), r ? r + ":" : ""
}
const lS = "memory",
    fS = () => {
        const r = new Map;
        return {
            name: lS,
            options: {},
            hasItem(t) {
                return r.has(t)
            },
            getItem(t) {
                return r.get(t) ? ? null
            },
            getItemRaw(t) {
                return r.get(t) ? ? null
            },
            setItem(t, e) {
                r.set(t, e)
            },
            setItemRaw(t, e) {
                r.set(t, e)
            },
            removeItem(t) {
                r.delete(t)
            },
            getKeys() {
                return Array.from(r.keys())
            },
            clear() {
                r.clear()
            },
            dispose() {
                r.clear()
            }
        }
    };

function dS(r = {}) {
    const t = {
            mounts: {
                "": r.driver || fS()
            },
            mountpoints: [""],
            watching: !1,
            watchListeners: [],
            unwatch: {}
        },
        e = d => {
            for (const b of t.mountpoints)
                if (d.startsWith(b)) return {
                    base: b,
                    relativeKey: d.slice(b.length),
                    driver: t.mounts[b]
                };
            return {
                base: "",
                relativeKey: d,
                driver: t.mounts[""]
            }
        },
        i = (d, b) => t.mountpoints.filter(E => E.startsWith(d) || b && d.startsWith(E)).map(E => ({
            relativeBase: d.length > E.length ? d.slice(E.length) : void 0,
            mountpoint: E,
            driver: t.mounts[E]
        })),
        s = (d, b) => {
            if (t.watching) {
                b = jr(b);
                for (const E of t.watchListeners) E(d, b)
            }
        },
        a = async () => {
            if (!t.watching) {
                t.watching = !0;
                for (const d in t.mounts) t.unwatch[d] = await wp(t.mounts[d], s, d)
            }
        },
        c = async () => {
            if (t.watching) {
                for (const d in t.unwatch) await t.unwatch[d]();
                t.unwatch = {}, t.watching = !1
            }
        },
        f = (d, b, E) => {
            const x = new Map,
                D = P => {
                    let Y = x.get(P.base);
                    return Y || (Y = {
                        driver: P.driver,
                        base: P.base,
                        items: []
                    }, x.set(P.base, Y)), Y
                };
            for (const P of d) {
                const Y = typeof P == "string",
                    G = jr(Y ? P : P.key),
                    tt = Y ? void 0 : P.value,
                    K = Y || !P.options ? b : { ...b,
                        ...P.options
                    },
                    V = e(G);
                D(V).items.push({
                    key: G,
                    value: tt,
                    relativeKey: V.relativeKey,
                    options: K
                })
            }
            return Promise.all([...x.values()].map(P => E(P))).then(P => P.flat())
        },
        p = {
            hasItem(d, b = {}) {
                d = jr(d);
                const {
                    relativeKey: E,
                    driver: x
                } = e(d);
                return hr(x.hasItem, E, b)
            },
            getItem(d, b = {}) {
                d = jr(d);
                const {
                    relativeKey: E,
                    driver: x
                } = e(d);
                return hr(x.getItem, E, b).then(D => Du(D))
            },
            getItems(d, b) {
                return f(d, b, E => E.driver.getItems ? hr(E.driver.getItems, E.items.map(x => ({
                    key: x.relativeKey,
                    options: x.options
                })), b).then(x => x.map(D => ({
                    key: hS(E.base, D.key),
                    value: Du(D.value)
                }))) : Promise.all(E.items.map(x => hr(E.driver.getItem, x.relativeKey, x.options).then(D => ({
                    key: x.key,
                    value: Du(D)
                })))))
            },
            getItemRaw(d, b = {}) {
                d = jr(d);
                const {
                    relativeKey: E,
                    driver: x
                } = e(d);
                return x.getItemRaw ? hr(x.getItemRaw, E, b) : hr(x.getItem, E, b).then(D => cS(D))
            },
            async setItem(d, b, E = {}) {
                if (b === void 0) return p.removeItem(d);
                d = jr(d);
                const {
                    relativeKey: x,
                    driver: D
                } = e(d);
                D.setItem && (await hr(D.setItem, x, qu(b), E), D.watch || s("update", d))
            },
            async setItems(d, b) {
                await f(d, b, async E => {
                    if (E.driver.setItems) return hr(E.driver.setItems, E.items.map(x => ({
                        key: x.relativeKey,
                        value: qu(x.value),
                        options: x.options
                    })), b);
                    E.driver.setItem && await Promise.all(E.items.map(x => hr(E.driver.setItem, x.relativeKey, qu(x.value), x.options)))
                })
            },
            async setItemRaw(d, b, E = {}) {
                if (b === void 0) return p.removeItem(d, E);
                d = jr(d);
                const {
                    relativeKey: x,
                    driver: D
                } = e(d);
                if (D.setItemRaw) await hr(D.setItemRaw, x, b, E);
                else if (D.setItem) await hr(D.setItem, x, uS(b), E);
                else return;
                D.watch || s("update", d)
            },
            async removeItem(d, b = {}) {
                typeof b == "boolean" && (b = {
                    removeMeta: b
                }), d = jr(d);
                const {
                    relativeKey: E,
                    driver: x
                } = e(d);
                x.removeItem && (await hr(x.removeItem, E, b), (b.removeMeta || b.removeMata) && await hr(x.removeItem, E + "$", b), x.watch || s("remove", d))
            },
            async getMeta(d, b = {}) {
                typeof b == "boolean" && (b = {
                    nativeOnly: b
                }), d = jr(d);
                const {
                    relativeKey: E,
                    driver: x
                } = e(d), D = Object.create(null);
                if (x.getMeta && Object.assign(D, await hr(x.getMeta, E, b)), !b.nativeOnly) {
                    const P = await hr(x.getItem, E + "$", b).then(Y => Du(Y));
                    P && typeof P == "object" && (typeof P.atime == "string" && (P.atime = new Date(P.atime)), typeof P.mtime == "string" && (P.mtime = new Date(P.mtime)), Object.assign(D, P))
                }
                return D
            },
            setMeta(d, b, E = {}) {
                return this.setItem(d + "$", b, E)
            },
            removeMeta(d, b = {}) {
                return this.removeItem(d + "$", b)
            },
            async getKeys(d, b = {}) {
                d = xu(d);
                const E = i(d, !0);
                let x = [];
                const D = [];
                for (const P of E) {
                    const G = (await hr(P.driver.getKeys, P.relativeBase, b)).map(tt => P.mountpoint + jr(tt)).filter(tt => !x.some(K => tt.startsWith(K)));
                    D.push(...G), x = [P.mountpoint, ...x.filter(tt => !tt.startsWith(P.mountpoint))]
                }
                return d ? D.filter(P => P.startsWith(d) && !P.endsWith("$")) : D.filter(P => !P.endsWith("$"))
            },
            async clear(d, b = {}) {
                d = xu(d), await Promise.all(i(d, !1).map(async E => {
                    if (E.driver.clear) return hr(E.driver.clear, E.relativeBase, b);
                    if (E.driver.removeItem) {
                        const x = await E.driver.getKeys(E.relativeBase || "", b);
                        return Promise.all(x.map(D => E.driver.removeItem(D, b)))
                    }
                }))
            },
            async dispose() {
                await Promise.all(Object.values(t.mounts).map(d => bp(d)))
            },
            async watch(d) {
                return await a(), t.watchListeners.push(d), async () => {
                    t.watchListeners = t.watchListeners.filter(b => b !== d), t.watchListeners.length === 0 && await c()
                }
            },
            async unwatch() {
                t.watchListeners = [], await c()
            },
            mount(d, b) {
                if (d = xu(d), d && t.mounts[d]) throw new Error(`already mounted at ${d}`);
                return d && (t.mountpoints.push(d), t.mountpoints.sort((E, x) => x.length - E.length)), t.mounts[d] = b, t.watching && Promise.resolve(wp(b, s, d)).then(E => {
                    t.unwatch[d] = E
                }).catch(console.error), p
            },
            async unmount(d, b = !0) {
                d = xu(d), !(!d || !t.mounts[d]) && (t.watching && d in t.unwatch && (t.unwatch[d](), delete t.unwatch[d]), b && await bp(t.mounts[d]), t.mountpoints = t.mountpoints.filter(E => E !== d), delete t.mounts[d])
            },
            getMount(d = "") {
                d = jr(d) + ":";
                const b = e(d);
                return {
                    driver: b.driver,
                    base: b.base
                }
            },
            getMounts(d = "", b = {}) {
                return d = jr(d), i(d, b.parents).map(x => ({
                    driver: x.driver,
                    base: x.mountpoint
                }))
            }
        };
    return p
}

function wp(r, t, e) {
    return r.watch ? r.watch((i, s) => t(i, e + s)) : () => {}
}
async function bp(r) {
    typeof r.dispose == "function" && await hr(r.dispose)
}

function xs(r) {
    return new Promise((t, e) => {
        r.oncomplete = r.onsuccess = () => t(r.result), r.onabort = r.onerror = () => e(r.error)
    })
}

function Lg(r, t) {
    const e = indexedDB.open(r);
    e.onupgradeneeded = () => e.result.createObjectStore(t);
    const i = xs(e);
    return (s, a) => i.then(c => a(c.transaction(t, s).objectStore(t)))
}
let Wh;

function da() {
    return Wh || (Wh = Lg("keyval-store", "keyval")), Wh
}

function _p(r, t = da()) {
    return t("readonly", e => xs(e.get(r)))
}

function pS(r, t, e = da()) {
    return e("readwrite", i => (i.put(t, r), xs(i.transaction)))
}

function gS(r, t = da()) {
    return t("readwrite", e => (e.delete(r), xs(e.transaction)))
}

function mS(r = da()) {
    return r("readwrite", t => (t.clear(), xs(t.transaction)))
}

function vS(r, t) {
    return r.openCursor().onsuccess = function() {
        this.result && (t(this.result), this.result.continue())
    }, xs(r.transaction)
}

function yS(r = da()) {
    return r("readonly", t => {
        if (t.getAllKeys) return xs(t.getAllKeys());
        const e = [];
        return vS(t, i => e.push(i.key)).then(() => e)
    })
}
const wS = r => JSON.stringify(r, (t, e) => typeof e == "bigint" ? e.toString() + "n" : e),
    bS = r => {
        const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            e = r.replace(t, '$1"$2n"$3');
        return JSON.parse(e, (i, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s)
    };

function pa(r) {
    if (typeof r != "string") throw new Error(`Cannot safe json parse value of type ${typeof r}`);
    try {
        return bS(r)
    } catch {
        return r
    }
}

function In(r) {
    return typeof r == "string" ? r : wS(r) || ""
}
const _S = "idb-keyval";
var ES = (r = {}) => {
    const t = r.base && r.base.length > 0 ? `${r.base}:` : "",
        e = s => t + s;
    let i;
    return r.dbName && r.storeName && (i = Lg(r.dbName, r.storeName)), {
        name: _S,
        options: r,
        async hasItem(s) {
            return !(typeof await _p(e(s), i) > "u")
        },
        async getItem(s) {
            return await _p(e(s), i) ? ? null
        },
        setItem(s, a) {
            return pS(e(s), a, i)
        },
        removeItem(s) {
            return gS(e(s), i)
        },
        getKeys() {
            return yS(i)
        },
        clear() {
            return mS(i)
        }
    }
};
const AS = "WALLET_CONNECT_V2_INDEXED_DB",
    SS = "keyvaluestorage";
let IS = class {
    constructor() {
        this.indexedDb = dS({
            driver: ES({
                dbName: AS,
                storeName: SS
            })
        })
    }
    async getKeys() {
        return this.indexedDb.getKeys()
    }
    async getEntries() {
        return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(t => [t.key, t.value])
    }
    async getItem(t) {
        const e = await this.indexedDb.getItem(t);
        if (e !== null) return e
    }
    async setItem(t, e) {
        await this.indexedDb.setItem(t, In(e))
    }
    async removeItem(t) {
        await this.indexedDb.removeItem(t)
    }
};
var Yh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    ju = {
        exports: {}
    };
(function() {
    let r;

    function t() {}
    r = t, r.prototype.getItem = function(e) {
        return this.hasOwnProperty(e) ? String(this[e]) : null
    }, r.prototype.setItem = function(e, i) {
        this[e] = String(i)
    }, r.prototype.removeItem = function(e) {
        delete this[e]
    }, r.prototype.clear = function() {
        const e = this;
        Object.keys(e).forEach(function(i) {
            e[i] = void 0, delete e[i]
        })
    }, r.prototype.key = function(e) {
        return e = e || 0, Object.keys(this)[e]
    }, r.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length
    }), typeof Yh < "u" && Yh.localStorage ? ju.exports = Yh.localStorage : typeof window < "u" && window.localStorage ? ju.exports = window.localStorage : ju.exports = new t
})();

function DS(r) {
    var t;
    return [r[0], pa((t = r[1]) != null ? t : "")]
}
class xS {
    constructor() {
        this.localStorage = ju.exports
    }
    async getKeys() {
        return Object.keys(this.localStorage)
    }
    async getEntries() {
        return Object.entries(this.localStorage).map(DS)
    }
    async getItem(t) {
        const e = this.localStorage.getItem(t);
        if (e !== null) return pa(e)
    }
    async setItem(t, e) {
        this.localStorage.setItem(t, In(e))
    }
    async removeItem(t) {
        this.localStorage.removeItem(t)
    }
}
const MS = "wc_storage_version",
    Ep = 1,
    CS = async (r, t, e) => {
        const i = MS,
            s = await t.getItem(i);
        if (s && s >= Ep) {
            e(t);
            return
        }
        const a = await r.getKeys();
        if (!a.length) {
            e(t);
            return
        }
        const c = [];
        for (; a.length;) {
            const f = a.shift();
            if (!f) continue;
            const p = f.toLowerCase();
            if (p.includes("wc@") || p.includes("walletconnect") || p.includes("wc_") || p.includes("wallet_connect")) {
                const d = await r.getItem(f);
                await t.setItem(f, d), c.push(f)
            }
        }
        await t.setItem(i, Ep), e(t), PS(r, c)
    },
    PS = async (r, t) => {
        t.length && t.forEach(async e => {
            await r.removeItem(e)
        })
    };
let OS = class {
    constructor() {
        this.initialized = !1, this.setInitialized = e => {
            this.storage = e, this.initialized = !0
        };
        const t = new xS;
        this.storage = t;
        try {
            const e = new IS;
            CS(t, e, this.setInitialized)
        } catch {
            this.initialized = !0
        }
    }
    async getKeys() {
        return await this.initialize(), this.storage.getKeys()
    }
    async getEntries() {
        return await this.initialize(), this.storage.getEntries()
    }
    async getItem(t) {
        return await this.initialize(), this.storage.getItem(t)
    }
    async setItem(t, e) {
        return await this.initialize(), this.storage.setItem(t, e)
    }
    async removeItem(t) {
        return await this.initialize(), this.storage.removeItem(t)
    }
    async initialize() {
        this.initialized || await new Promise(t => {
            const e = setInterval(() => {
                this.initialized && (clearInterval(e), t())
            }, 20)
        })
    }
};
class Ms {}
let NS = class extends Ms {
    constructor(t) {
        super()
    }
};
const Ap = bt.FIVE_SECONDS,
    ga = {
        pulse: "heartbeat_pulse"
    };
let RS = class qg extends NS {
    constructor(t) {
        super(t), this.events = new Si.EventEmitter, this.interval = Ap, this.interval = t ? .interval || Ap
    }
    static async init(t) {
        const e = new qg(t);
        return await e.init(), e
    }
    async init() {
        await this.initialize()
    }
    stop() {
        clearInterval(this.intervalRef)
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    async initialize() {
        this.intervalRef = setInterval(() => this.pulse(), bt.toMiliseconds(this.interval))
    }
    pulse() {
        this.events.emit(ga.pulse)
    }
};

function TS(r) {
    try {
        return JSON.stringify(r)
    } catch {
        return '"[Circular]"'
    }
}
var FS = BS;

function BS(r, t, e) {
    var i = e && e.stringify || TS,
        s = 1;
    if (typeof r == "object" && r !== null) {
        var a = t.length + s;
        if (a === 1) return r;
        var c = new Array(a);
        c[0] = i(r);
        for (var f = 1; f < a; f++) c[f] = i(t[f]);
        return c.join(" ")
    }
    if (typeof r != "string") return r;
    var p = t.length;
    if (p === 0) return r;
    for (var d = "", b = 1 - s, E = -1, x = r && r.length || 0, D = 0; D < x;) {
        if (r.charCodeAt(D) === 37 && D + 1 < x) {
            switch (E = E > -1 ? E : 0, r.charCodeAt(D + 1)) {
                case 100:
                case 102:
                    if (b >= p || t[b] == null) break;
                    E < D && (d += r.slice(E, D)), d += Number(t[b]), E = D + 2, D++;
                    break;
                case 105:
                    if (b >= p || t[b] == null) break;
                    E < D && (d += r.slice(E, D)), d += Math.floor(Number(t[b])), E = D + 2, D++;
                    break;
                case 79:
                case 111:
                case 106:
                    if (b >= p || t[b] === void 0) break;
                    E < D && (d += r.slice(E, D));
                    var P = typeof t[b];
                    if (P === "string") {
                        d += "'" + t[b] + "'", E = D + 2, D++;
                        break
                    }
                    if (P === "function") {
                        d += t[b].name || "<anonymous>", E = D + 2, D++;
                        break
                    }
                    d += i(t[b]), E = D + 2, D++;
                    break;
                case 115:
                    if (b >= p) break;
                    E < D && (d += r.slice(E, D)), d += String(t[b]), E = D + 2, D++;
                    break;
                case 37:
                    E < D && (d += r.slice(E, D)), d += "%", E = D + 2, D++, b--;
                    break
            }++b
        }++D
    }
    return E === -1 ? r : (E < x && (d += r.slice(E)), d)
}
const Sp = FS;
var Zs = sn;
const sa = VS().console || {},
    US = {
        mapHttpRequest: Mu,
        mapHttpResponse: Mu,
        wrapRequestSerializer: Qh,
        wrapResponseSerializer: Qh,
        wrapErrorSerializer: Qh,
        req: Mu,
        res: Mu,
        err: zS
    };

function LS(r, t) {
    return Array.isArray(r) ? r.filter(function(i) {
        return i !== "!stdSerializers.err"
    }) : r === !0 ? Object.keys(t) : !1
}

function sn(r) {
    r = r || {}, r.browser = r.browser || {};
    const t = r.browser.transmit;
    if (t && typeof t.send != "function") throw Error("pino: transmit option must have a send function");
    const e = r.browser.write || sa;
    r.browser.write && (r.browser.asObject = !0);
    const i = r.serializers || {},
        s = LS(r.browser.serialize, i);
    let a = r.browser.serialize;
    Array.isArray(r.browser.serialize) && r.browser.serialize.indexOf("!stdSerializers.err") > -1 && (a = !1);
    const c = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof e == "function" && (e.error = e.fatal = e.warn = e.info = e.debug = e.trace = e), r.enabled === !1 && (r.level = "silent");
    const f = r.level || "info",
        p = Object.create(e);
    p.log || (p.log = oa), Object.defineProperty(p, "levelVal", {
        get: b
    }), Object.defineProperty(p, "level", {
        get: E,
        set: x
    });
    const d = {
        transmit: t,
        serialize: s,
        asObject: r.browser.asObject,
        levels: c,
        timestamp: kS(r)
    };
    p.levels = sn.levels, p.level = f, p.setMaxListeners = p.getMaxListeners = p.emit = p.addListener = p.on = p.prependListener = p.once = p.prependOnceListener = p.removeListener = p.removeAllListeners = p.listeners = p.listenerCount = p.eventNames = p.write = p.flush = oa, p.serializers = i, p._serialize = s, p._stdErrSerialize = a, p.child = D, t && (p._logEvent = Ml());

    function b() {
        return this.level === "silent" ? 1 / 0 : this.levels.values[this.level]
    }

    function E() {
        return this._level
    }

    function x(P) {
        if (P !== "silent" && !this.levels.values[P]) throw Error("unknown level " + P);
        this._level = P, Ys(d, p, "error", "log"), Ys(d, p, "fatal", "error"), Ys(d, p, "warn", "error"), Ys(d, p, "info", "log"), Ys(d, p, "debug", "log"), Ys(d, p, "trace", "log")
    }

    function D(P, Y) {
        if (!P) throw new Error("missing bindings for child Pino");
        Y = Y || {}, s && P.serializers && (Y.serializers = P.serializers);
        const G = Y.serializers;
        if (s && G) {
            var tt = Object.assign({}, i, G),
                K = r.browser.serialize === !0 ? Object.keys(tt) : s;
            delete P.serializers, hc([P], K, tt, this._stdErrSerialize)
        }

        function V(L) {
            this._childLevel = (L._childLevel | 0) + 1, this.error = Qs(L, P, "error"), this.fatal = Qs(L, P, "fatal"), this.warn = Qs(L, P, "warn"), this.info = Qs(L, P, "info"), this.debug = Qs(L, P, "debug"), this.trace = Qs(L, P, "trace"), tt && (this.serializers = tt, this._serialize = K), t && (this._logEvent = Ml([].concat(L._logEvent.bindings, P)))
        }
        return V.prototype = this, new V(this)
    }
    return p
}
sn.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
    }
};
sn.stdSerializers = US;
sn.stdTimeFunctions = Object.assign({}, {
    nullTime: jg,
    epochTime: $g,
    unixTime: HS,
    isoTime: KS
});

function Ys(r, t, e, i) {
    const s = Object.getPrototypeOf(t);
    t[e] = t.levelVal > t.levels.values[e] ? oa : s[e] ? s[e] : sa[e] || sa[i] || oa, qS(r, t, e)
}

function qS(r, t, e) {
    !r.transmit && t[e] === oa || (t[e] = function(i) {
        return function() {
            const a = r.timestamp(),
                c = new Array(arguments.length),
                f = Object.getPrototypeOf && Object.getPrototypeOf(this) === sa ? sa : this;
            for (var p = 0; p < c.length; p++) c[p] = arguments[p];
            if (r.serialize && !r.asObject && hc(c, this._serialize, this.serializers, this._stdErrSerialize), r.asObject ? i.call(f, jS(this, e, c, a)) : i.apply(f, c), r.transmit) {
                const d = r.transmit.level || t.level,
                    b = sn.levels.values[d],
                    E = sn.levels.values[e];
                if (E < b) return;
                $S(this, {
                    ts: a,
                    methodLevel: e,
                    methodValue: E,
                    transmitLevel: d,
                    transmitValue: sn.levels.values[r.transmit.level || t.level],
                    send: r.transmit.send,
                    val: t.levelVal
                }, c)
            }
        }
    }(t[e]))
}

function jS(r, t, e, i) {
    r._serialize && hc(e, r._serialize, r.serializers, r._stdErrSerialize);
    const s = e.slice();
    let a = s[0];
    const c = {};
    i && (c.time = i), c.level = sn.levels.values[t];
    let f = (r._childLevel | 0) + 1;
    if (f < 1 && (f = 1), a !== null && typeof a == "object") {
        for (; f-- && typeof s[0] == "object";) Object.assign(c, s.shift());
        a = s.length ? Sp(s.shift(), s) : void 0
    } else typeof a == "string" && (a = Sp(s.shift(), s));
    return a !== void 0 && (c.msg = a), c
}

function hc(r, t, e, i) {
    for (const s in r)
        if (i && r[s] instanceof Error) r[s] = sn.stdSerializers.err(r[s]);
        else if (typeof r[s] == "object" && !Array.isArray(r[s]))
        for (const a in r[s]) t && t.indexOf(a) > -1 && a in e && (r[s][a] = e[a](r[s][a]))
}

function Qs(r, t, e) {
    return function() {
        const i = new Array(1 + arguments.length);
        i[0] = t;
        for (var s = 1; s < i.length; s++) i[s] = arguments[s - 1];
        return r[e].apply(this, i)
    }
}

function $S(r, t, e) {
    const i = t.send,
        s = t.ts,
        a = t.methodLevel,
        c = t.methodValue,
        f = t.val,
        p = r._logEvent.bindings;
    hc(e, r._serialize || Object.keys(r.serializers), r.serializers, r._stdErrSerialize === void 0 ? !0 : r._stdErrSerialize), r._logEvent.ts = s, r._logEvent.messages = e.filter(function(d) {
        return p.indexOf(d) === -1
    }), r._logEvent.level.label = a, r._logEvent.level.value = c, i(a, r._logEvent, f), r._logEvent = Ml(p)
}

function Ml(r) {
    return {
        ts: 0,
        messages: [],
        bindings: r || [],
        level: {
            label: "",
            value: 0
        }
    }
}

function zS(r) {
    const t = {
        type: r.constructor.name,
        msg: r.message,
        stack: r.stack
    };
    for (const e in r) t[e] === void 0 && (t[e] = r[e]);
    return t
}

function kS(r) {
    return typeof r.timestamp == "function" ? r.timestamp : r.timestamp === !1 ? jg : $g
}

function Mu() {
    return {}
}

function Qh(r) {
    return r
}

function oa() {}

function jg() {
    return !1
}

function $g() {
    return Date.now()
}

function HS() {
    return Math.round(Date.now() / 1e3)
}

function KS() {
    return new Date(Date.now()).toISOString()
}

function VS() {
    function r(t) {
        return typeof t < "u" && t
    }
    try {
        return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
            get: function() {
                return delete Object.prototype.globalThis, this.globalThis = this
            },
            configurable: !0
        }), globalThis
    } catch {
        return r(self) || r(window) || r(this) || {}
    }
}
const ma = rc(Zs),
    GS = {
        level: "info"
    },
    va = "custom_context",
    Zl = 1e3 * 1024;
let WS = class {
        constructor(t) {
            this.nodeValue = t, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null
        }
        get value() {
            return this.nodeValue
        }
        get size() {
            return this.sizeInBytes
        }
    },
    Ip = class {
        constructor(t) {
            this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = t, this.sizeInBytes = 0
        }
        append(t) {
            const e = new WS(t);
            if (e.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${t} with size ${e.size}`);
            for (; this.size + e.size > this.maxSizeInBytes;) this.shift();
            this.head ? (this.tail && (this.tail.next = e), this.tail = e) : (this.head = e, this.tail = e), this.lengthInNodes++, this.sizeInBytes += e.size
        }
        shift() {
            if (!this.head) return;
            const t = this.head;
            this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= t.size
        }
        toArray() {
            const t = [];
            let e = this.head;
            for (; e !== null;) t.push(e.value), e = e.next;
            return t
        }
        get length() {
            return this.lengthInNodes
        }
        get size() {
            return this.sizeInBytes
        }
        toOrderedArray() {
            return Array.from(this)
        }[Symbol.iterator]() {
            let t = this.head;
            return {
                next: () => {
                    if (!t) return {
                        done: !0,
                        value: null
                    };
                    const e = t.value;
                    return t = t.next, {
                        done: !1,
                        value: e
                    }
                }
            }
        }
    },
    zg = class {
        constructor(t, e = Zl) {
            this.level = t ? ? "error", this.levelValue = Zs.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = e, this.logs = new Ip(this.MAX_LOG_SIZE_IN_BYTES)
        }
        forwardToConsole(t, e) {
            e === Zs.levels.values.error ? console.error(t) : e === Zs.levels.values.warn ? console.warn(t) : e === Zs.levels.values.debug ? console.debug(t) : e === Zs.levels.values.trace ? console.trace(t) : console.log(t)
        }
        appendToLogs(t) {
            this.logs.append(In({
                timestamp: new Date().toISOString(),
                log: t
            }));
            const e = typeof t == "string" ? JSON.parse(t).level : t.level;
            e >= this.levelValue && this.forwardToConsole(t, e)
        }
        getLogs() {
            return this.logs
        }
        clearLogs() {
            this.logs = new Ip(this.MAX_LOG_SIZE_IN_BYTES)
        }
        getLogArray() {
            return Array.from(this.logs)
        }
        logsToBlob(t) {
            const e = this.getLogArray();
            return e.push(In({
                extraMetadata: t
            })), new Blob(e, {
                type: "application/json"
            })
        }
    },
    YS = class {
        constructor(t, e = Zl) {
            this.baseChunkLogger = new zg(t, e)
        }
        write(t) {
            this.baseChunkLogger.appendToLogs(t)
        }
        getLogs() {
            return this.baseChunkLogger.getLogs()
        }
        clearLogs() {
            this.baseChunkLogger.clearLogs()
        }
        getLogArray() {
            return this.baseChunkLogger.getLogArray()
        }
        logsToBlob(t) {
            return this.baseChunkLogger.logsToBlob(t)
        }
        downloadLogsBlobInBrowser(t) {
            const e = URL.createObjectURL(this.logsToBlob(t)),
                i = document.createElement("a");
            i.href = e, i.download = `walletconnect-logs-${new Date().toISOString()}.txt`, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(e)
        }
    },
    QS = class {
        constructor(t, e = Zl) {
            this.baseChunkLogger = new zg(t, e)
        }
        write(t) {
            this.baseChunkLogger.appendToLogs(t)
        }
        getLogs() {
            return this.baseChunkLogger.getLogs()
        }
        clearLogs() {
            this.baseChunkLogger.clearLogs()
        }
        getLogArray() {
            return this.baseChunkLogger.getLogArray()
        }
        logsToBlob(t) {
            return this.baseChunkLogger.logsToBlob(t)
        }
    };
var JS = Object.defineProperty,
    XS = Object.defineProperties,
    ZS = Object.getOwnPropertyDescriptors,
    Dp = Object.getOwnPropertySymbols,
    tI = Object.prototype.hasOwnProperty,
    eI = Object.prototype.propertyIsEnumerable,
    xp = (r, t, e) => t in r ? JS(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    Ju = (r, t) => {
        for (var e in t || (t = {})) tI.call(t, e) && xp(r, e, t[e]);
        if (Dp)
            for (var e of Dp(t)) eI.call(t, e) && xp(r, e, t[e]);
        return r
    },
    Xu = (r, t) => XS(r, ZS(t));

function lc(r) {
    return Xu(Ju({}, r), {
        level: r ? .level || GS.level
    })
}

function rI(r, t = va) {
    return r[t] || ""
}

function iI(r, t, e = va) {
    return r[e] = t, r
}

function Kr(r, t = va) {
    let e = "";
    return typeof r.bindings > "u" ? e = rI(r, t) : e = r.bindings().context || "", e
}

function nI(r, t, e = va) {
    const i = Kr(r, e);
    return i.trim() ? `${i}/${t}` : t
}

function Vr(r, t, e = va) {
    const i = nI(r, t, e),
        s = r.child({
            context: i
        });
    return iI(s, i, e)
}

function sI(r) {
    var t, e;
    const i = new YS((t = r.opts) == null ? void 0 : t.level, r.maxSizeInBytes);
    return {
        logger: ma(Xu(Ju({}, r.opts), {
            level: "trace",
            browser: Xu(Ju({}, (e = r.opts) == null ? void 0 : e.browser), {
                write: s => i.write(s)
            })
        })),
        chunkLoggerController: i
    }
}

function oI(r) {
    var t;
    const e = new QS((t = r.opts) == null ? void 0 : t.level, r.maxSizeInBytes);
    return {
        logger: ma(Xu(Ju({}, r.opts), {
            level: "trace"
        }), e),
        chunkLoggerController: e
    }
}

function aI(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : typeof window < "u" ? sI(r) : oI(r)
}
let uI = class extends Ms {
        constructor(t) {
            super(), this.opts = t, this.protocol = "wc", this.version = 2
        }
    },
    cI = class extends Ms {
        constructor(t, e) {
            super(), this.core = t, this.logger = e, this.records = new Map
        }
    },
    hI = class {
        constructor(t, e) {
            this.logger = t, this.core = e
        }
    },
    lI = class extends Ms {
        constructor(t, e) {
            super(), this.relayer = t, this.logger = e
        }
    },
    fI = class extends Ms {
        constructor(t) {
            super()
        }
    },
    dI = class {
        constructor(t, e, i, s) {
            this.core = t, this.logger = e, this.name = i
        }
    },
    pI = class extends Ms {
        constructor(t, e) {
            super(), this.relayer = t, this.logger = e
        }
    },
    gI = class extends Ms {
        constructor(t, e) {
            super(), this.core = t, this.logger = e
        }
    },
    mI = class {
        constructor(t, e) {
            this.projectId = t, this.logger = e
        }
    },
    vI = class {
        constructor(t, e) {
            this.projectId = t, this.logger = e
        }
    },
    yI = class {
        constructor(t) {
            this.opts = t, this.protocol = "wc", this.version = 2
        }
    },
    wI = class {
        constructor(t) {
            this.client = t
        }
    };
var tf = {},
    kg = {};
(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var t = oe,
        e = ii;
    r.DIGEST_LENGTH = 64, r.BLOCK_SIZE = 128;
    var i = function() {
        function f() {
            this.digestLength = r.DIGEST_LENGTH, this.blockSize = r.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return f.prototype._initState = function() {
            this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
        }, f.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, f.prototype.clean = function() {
            e.wipe(this._buffer), e.wipe(this._tempHi), e.wipe(this._tempLo), this.reset()
        }, f.prototype.update = function(p, d) {
            if (d === void 0 && (d = p.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
            var b = 0;
            if (this._bytesHashed += d, this._bufferLength > 0) {
                for (; this._bufferLength < r.BLOCK_SIZE && d > 0;) this._buffer[this._bufferLength++] = p[b++], d--;
                this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (d >= this.blockSize && (b = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, p, b, d), d %= this.blockSize); d > 0;) this._buffer[this._bufferLength++] = p[b++], d--;
            return this
        }, f.prototype.finish = function(p) {
            if (!this._finished) {
                var d = this._bytesHashed,
                    b = this._bufferLength,
                    E = d / 536870912 | 0,
                    x = d << 3,
                    D = d % 128 < 112 ? 128 : 256;
                this._buffer[b] = 128;
                for (var P = b + 1; P < D - 8; P++) this._buffer[P] = 0;
                t.writeUint32BE(E, this._buffer, D - 8), t.writeUint32BE(x, this._buffer, D - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, D), this._finished = !0
            }
            for (var P = 0; P < this.digestLength / 8; P++) t.writeUint32BE(this._stateHi[P], p, P * 8), t.writeUint32BE(this._stateLo[P], p, P * 8 + 4);
            return this
        }, f.prototype.digest = function() {
            var p = new Uint8Array(this.digestLength);
            return this.finish(p), p
        }, f.prototype.saveState = function() {
            if (this._finished) throw new Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, f.prototype.restoreState = function(p) {
            return this._stateHi.set(p.stateHi), this._stateLo.set(p.stateLo), this._bufferLength = p.bufferLength, p.buffer && this._buffer.set(p.buffer), this._bytesHashed = p.bytesHashed, this._finished = !1, this
        }, f.prototype.cleanSavedState = function(p) {
            e.wipe(p.stateHi), e.wipe(p.stateLo), p.buffer && e.wipe(p.buffer), p.bufferLength = 0, p.bytesHashed = 0
        }, f
    }();
    r.SHA512 = i;
    var s = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

    function a(f, p, d, b, E, x, D) {
        for (var P = d[0], Y = d[1], G = d[2], tt = d[3], K = d[4], V = d[5], L = d[6], $ = d[7], z = b[0], y = b[1], T = b[2], nt = b[3], ft = b[4], lt = b[5], mt = b[6], l = b[7], h, w, S, M, O, F, I, g; D >= 128;) {
            for (var N = 0; N < 16; N++) {
                var it = 8 * N + x;
                f[N] = t.readUint32BE(E, it), p[N] = t.readUint32BE(E, it + 4)
            }
            for (var N = 0; N < 80; N++) {
                var dt = P,
                    _ = Y,
                    Z = G,
                    U = tt,
                    q = K,
                    k = V,
                    m = L,
                    B = $,
                    et = z,
                    ct = y,
                    at = T,
                    Mt = nt,
                    Pt = ft,
                    It = lt,
                    Ee = mt,
                    $t = l;
                if (h = $, w = l, O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = (K >>> 14 | ft << 32 - 14) ^ (K >>> 18 | ft << 32 - 18) ^ (ft >>> 41 - 32 | K << 32 - (41 - 32)), w = (ft >>> 14 | K << 32 - 14) ^ (ft >>> 18 | K << 32 - 18) ^ (K >>> 41 - 32 | ft << 32 - (41 - 32)), O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, h = K & V ^ ~K & L, w = ft & lt ^ ~ft & mt, O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, h = s[N * 2], w = s[N * 2 + 1], O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, h = f[N % 16], w = p[N % 16], O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, S = I & 65535 | g << 16, M = O & 65535 | F << 16, h = S, w = M, O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = (P >>> 28 | z << 32 - 28) ^ (z >>> 34 - 32 | P << 32 - (34 - 32)) ^ (z >>> 39 - 32 | P << 32 - (39 - 32)), w = (z >>> 28 | P << 32 - 28) ^ (P >>> 34 - 32 | z << 32 - (34 - 32)) ^ (P >>> 39 - 32 | z << 32 - (39 - 32)), O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, h = P & Y ^ P & G ^ Y & G, w = z & y ^ z & T ^ y & T, O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, B = I & 65535 | g << 16, $t = O & 65535 | F << 16, h = U, w = Mt, O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = S, w = M, O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, U = I & 65535 | g << 16, Mt = O & 65535 | F << 16, Y = dt, G = _, tt = Z, K = U, V = q, L = k, $ = m, P = B, y = et, T = ct, nt = at, ft = Mt, lt = Pt, mt = It, l = Ee, z = $t, N % 16 === 15)
                    for (var it = 0; it < 16; it++) h = f[it], w = p[it], O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = f[(it + 9) % 16], w = p[(it + 9) % 16], O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, S = f[(it + 1) % 16], M = p[(it + 1) % 16], h = (S >>> 1 | M << 32 - 1) ^ (S >>> 8 | M << 32 - 8) ^ S >>> 7, w = (M >>> 1 | S << 32 - 1) ^ (M >>> 8 | S << 32 - 8) ^ (M >>> 7 | S << 32 - 7), O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, S = f[(it + 14) % 16], M = p[(it + 14) % 16], h = (S >>> 19 | M << 32 - 19) ^ (M >>> 61 - 32 | S << 32 - (61 - 32)) ^ S >>> 6, w = (M >>> 19 | S << 32 - 19) ^ (S >>> 61 - 32 | M << 32 - (61 - 32)) ^ (M >>> 6 | S << 32 - 6), O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, f[it] = I & 65535 | g << 16, p[it] = O & 65535 | F << 16
            }
            h = P, w = z, O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = d[0], w = b[0], O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, d[0] = P = I & 65535 | g << 16, b[0] = z = O & 65535 | F << 16, h = Y, w = y, O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = d[1], w = b[1], O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, d[1] = Y = I & 65535 | g << 16, b[1] = y = O & 65535 | F << 16, h = G, w = T, O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = d[2], w = b[2], O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, d[2] = G = I & 65535 | g << 16, b[2] = T = O & 65535 | F << 16, h = tt, w = nt, O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = d[3], w = b[3], O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, d[3] = tt = I & 65535 | g << 16, b[3] = nt = O & 65535 | F << 16, h = K, w = ft, O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = d[4], w = b[4], O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, d[4] = K = I & 65535 | g << 16, b[4] = ft = O & 65535 | F << 16, h = V, w = lt, O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = d[5], w = b[5], O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, d[5] = V = I & 65535 | g << 16, b[5] = lt = O & 65535 | F << 16, h = L, w = mt, O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = d[6], w = b[6], O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, d[6] = L = I & 65535 | g << 16, b[6] = mt = O & 65535 | F << 16, h = $, w = l, O = w & 65535, F = w >>> 16, I = h & 65535, g = h >>> 16, h = d[7], w = b[7], O += w & 65535, F += w >>> 16, I += h & 65535, g += h >>> 16, F += O >>> 16, I += F >>> 16, g += I >>> 16, d[7] = $ = I & 65535 | g << 16, b[7] = l = O & 65535 | F << 16, x += 128, D -= 128
        }
        return x
    }

    function c(f) {
        var p = new i;
        p.update(f);
        var d = p.digest();
        return p.clean(), d
    }
    r.hash = c
})(kg);
(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.convertSecretKeyToX25519 = r.convertPublicKeyToX25519 = r.verify = r.sign = r.extractPublicKeyFromSecretKey = r.generateKeyPair = r.generateKeyPairFromSeed = r.SEED_LENGTH = r.SECRET_KEY_LENGTH = r.PUBLIC_KEY_LENGTH = r.SIGNATURE_LENGTH = void 0;
    const t = ho,
        e = kg,
        i = ii;
    r.SIGNATURE_LENGTH = 64, r.PUBLIC_KEY_LENGTH = 32, r.SECRET_KEY_LENGTH = 64, r.SEED_LENGTH = 32;

    function s(U) {
        const q = new Float64Array(16);
        if (U)
            for (let k = 0; k < U.length; k++) q[k] = U[k];
        return q
    }
    const a = new Uint8Array(32);
    a[0] = 9;
    const c = s(),
        f = s([1]),
        p = s([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
        d = s([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
        b = s([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
        E = s([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
        x = s([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

    function D(U, q) {
        for (let k = 0; k < 16; k++) U[k] = q[k] | 0
    }

    function P(U) {
        let q = 1;
        for (let k = 0; k < 16; k++) {
            let m = U[k] + q + 65535;
            q = Math.floor(m / 65536), U[k] = m - q * 65536
        }
        U[0] += q - 1 + 37 * (q - 1)
    }

    function Y(U, q, k) {
        const m = ~(k - 1);
        for (let B = 0; B < 16; B++) {
            const et = m & (U[B] ^ q[B]);
            U[B] ^= et, q[B] ^= et
        }
    }

    function G(U, q) {
        const k = s(),
            m = s();
        for (let B = 0; B < 16; B++) m[B] = q[B];
        P(m), P(m), P(m);
        for (let B = 0; B < 2; B++) {
            k[0] = m[0] - 65517;
            for (let ct = 1; ct < 15; ct++) k[ct] = m[ct] - 65535 - (k[ct - 1] >> 16 & 1), k[ct - 1] &= 65535;
            k[15] = m[15] - 32767 - (k[14] >> 16 & 1);
            const et = k[15] >> 16 & 1;
            k[14] &= 65535, Y(m, k, 1 - et)
        }
        for (let B = 0; B < 16; B++) U[2 * B] = m[B] & 255, U[2 * B + 1] = m[B] >> 8
    }

    function tt(U, q) {
        let k = 0;
        for (let m = 0; m < 32; m++) k |= U[m] ^ q[m];
        return (1 & k - 1 >>> 8) - 1
    }

    function K(U, q) {
        const k = new Uint8Array(32),
            m = new Uint8Array(32);
        return G(k, U), G(m, q), tt(k, m)
    }

    function V(U) {
        const q = new Uint8Array(32);
        return G(q, U), q[0] & 1
    }

    function L(U, q) {
        for (let k = 0; k < 16; k++) U[k] = q[2 * k] + (q[2 * k + 1] << 8);
        U[15] &= 32767
    }

    function $(U, q, k) {
        for (let m = 0; m < 16; m++) U[m] = q[m] + k[m]
    }

    function z(U, q, k) {
        for (let m = 0; m < 16; m++) U[m] = q[m] - k[m]
    }

    function y(U, q, k) {
        let m, B, et = 0,
            ct = 0,
            at = 0,
            Mt = 0,
            Pt = 0,
            It = 0,
            Ee = 0,
            $t = 0,
            xt = 0,
            Ut = 0,
            _t = 0,
            Et = 0,
            Vt = 0,
            yt = 0,
            At = 0,
            Bt = 0,
            wt = 0,
            Ct = 0,
            Lt = 0,
            Ot = 0,
            Nt = 0,
            se = 0,
            Tt = 0,
            Rt = 0,
            He = 0,
            ue = 0,
            pe = 0,
            Ke = 0,
            ye = 0,
            _e = 0,
            _r = 0,
            Gt = k[0],
            zt = k[1],
            Ie = k[2],
            Wt = k[3],
            Kt = k[4],
            Ae = k[5],
            Jt = k[6],
            Xt = k[7],
            De = k[8],
            Zt = k[9],
            Yt = k[10],
            Me = k[11],
            Qt = k[12],
            qt = k[13],
            Re = k[14],
            te = k[15];
        m = q[0], et += m * Gt, ct += m * zt, at += m * Ie, Mt += m * Wt, Pt += m * Kt, It += m * Ae, Ee += m * Jt, $t += m * Xt, xt += m * De, Ut += m * Zt, _t += m * Yt, Et += m * Me, Vt += m * Qt, yt += m * qt, At += m * Re, Bt += m * te, m = q[1], ct += m * Gt, at += m * zt, Mt += m * Ie, Pt += m * Wt, It += m * Kt, Ee += m * Ae, $t += m * Jt, xt += m * Xt, Ut += m * De, _t += m * Zt, Et += m * Yt, Vt += m * Me, yt += m * Qt, At += m * qt, Bt += m * Re, wt += m * te, m = q[2], at += m * Gt, Mt += m * zt, Pt += m * Ie, It += m * Wt, Ee += m * Kt, $t += m * Ae, xt += m * Jt, Ut += m * Xt, _t += m * De, Et += m * Zt, Vt += m * Yt, yt += m * Me, At += m * Qt, Bt += m * qt, wt += m * Re, Ct += m * te, m = q[3], Mt += m * Gt, Pt += m * zt, It += m * Ie, Ee += m * Wt, $t += m * Kt, xt += m * Ae, Ut += m * Jt, _t += m * Xt, Et += m * De, Vt += m * Zt, yt += m * Yt, At += m * Me, Bt += m * Qt, wt += m * qt, Ct += m * Re, Lt += m * te, m = q[4], Pt += m * Gt, It += m * zt, Ee += m * Ie, $t += m * Wt, xt += m * Kt, Ut += m * Ae, _t += m * Jt, Et += m * Xt, Vt += m * De, yt += m * Zt, At += m * Yt, Bt += m * Me, wt += m * Qt, Ct += m * qt, Lt += m * Re, Ot += m * te, m = q[5], It += m * Gt, Ee += m * zt, $t += m * Ie, xt += m * Wt, Ut += m * Kt, _t += m * Ae, Et += m * Jt, Vt += m * Xt, yt += m * De, At += m * Zt, Bt += m * Yt, wt += m * Me, Ct += m * Qt, Lt += m * qt, Ot += m * Re, Nt += m * te, m = q[6], Ee += m * Gt, $t += m * zt, xt += m * Ie, Ut += m * Wt, _t += m * Kt, Et += m * Ae, Vt += m * Jt, yt += m * Xt, At += m * De, Bt += m * Zt, wt += m * Yt, Ct += m * Me, Lt += m * Qt, Ot += m * qt, Nt += m * Re, se += m * te, m = q[7], $t += m * Gt, xt += m * zt, Ut += m * Ie, _t += m * Wt, Et += m * Kt, Vt += m * Ae, yt += m * Jt, At += m * Xt, Bt += m * De, wt += m * Zt, Ct += m * Yt, Lt += m * Me, Ot += m * Qt, Nt += m * qt, se += m * Re, Tt += m * te, m = q[8], xt += m * Gt, Ut += m * zt, _t += m * Ie, Et += m * Wt, Vt += m * Kt, yt += m * Ae, At += m * Jt, Bt += m * Xt, wt += m * De, Ct += m * Zt, Lt += m * Yt, Ot += m * Me, Nt += m * Qt, se += m * qt, Tt += m * Re, Rt += m * te, m = q[9], Ut += m * Gt, _t += m * zt, Et += m * Ie, Vt += m * Wt, yt += m * Kt, At += m * Ae, Bt += m * Jt, wt += m * Xt, Ct += m * De, Lt += m * Zt, Ot += m * Yt, Nt += m * Me, se += m * Qt, Tt += m * qt, Rt += m * Re, He += m * te, m = q[10], _t += m * Gt, Et += m * zt, Vt += m * Ie, yt += m * Wt, At += m * Kt, Bt += m * Ae, wt += m * Jt, Ct += m * Xt, Lt += m * De, Ot += m * Zt, Nt += m * Yt, se += m * Me, Tt += m * Qt, Rt += m * qt, He += m * Re, ue += m * te, m = q[11], Et += m * Gt, Vt += m * zt, yt += m * Ie, At += m * Wt, Bt += m * Kt, wt += m * Ae, Ct += m * Jt, Lt += m * Xt, Ot += m * De, Nt += m * Zt, se += m * Yt, Tt += m * Me, Rt += m * Qt, He += m * qt, ue += m * Re, pe += m * te, m = q[12], Vt += m * Gt, yt += m * zt, At += m * Ie, Bt += m * Wt, wt += m * Kt, Ct += m * Ae, Lt += m * Jt, Ot += m * Xt, Nt += m * De, se += m * Zt, Tt += m * Yt, Rt += m * Me, He += m * Qt, ue += m * qt, pe += m * Re, Ke += m * te, m = q[13], yt += m * Gt, At += m * zt, Bt += m * Ie, wt += m * Wt, Ct += m * Kt, Lt += m * Ae, Ot += m * Jt, Nt += m * Xt, se += m * De, Tt += m * Zt, Rt += m * Yt, He += m * Me, ue += m * Qt, pe += m * qt, Ke += m * Re, ye += m * te, m = q[14], At += m * Gt, Bt += m * zt, wt += m * Ie, Ct += m * Wt, Lt += m * Kt, Ot += m * Ae, Nt += m * Jt, se += m * Xt, Tt += m * De, Rt += m * Zt, He += m * Yt, ue += m * Me, pe += m * Qt, Ke += m * qt, ye += m * Re, _e += m * te, m = q[15], Bt += m * Gt, wt += m * zt, Ct += m * Ie, Lt += m * Wt, Ot += m * Kt, Nt += m * Ae, se += m * Jt, Tt += m * Xt, Rt += m * De, He += m * Zt, ue += m * Yt, pe += m * Me, Ke += m * Qt, ye += m * qt, _e += m * Re, _r += m * te, et += 38 * wt, ct += 38 * Ct, at += 38 * Lt, Mt += 38 * Ot, Pt += 38 * Nt, It += 38 * se, Ee += 38 * Tt, $t += 38 * Rt, xt += 38 * He, Ut += 38 * ue, _t += 38 * pe, Et += 38 * Ke, Vt += 38 * ye, yt += 38 * _e, At += 38 * _r, B = 1, m = et + B + 65535, B = Math.floor(m / 65536), et = m - B * 65536, m = ct + B + 65535, B = Math.floor(m / 65536), ct = m - B * 65536, m = at + B + 65535, B = Math.floor(m / 65536), at = m - B * 65536, m = Mt + B + 65535, B = Math.floor(m / 65536), Mt = m - B * 65536, m = Pt + B + 65535, B = Math.floor(m / 65536), Pt = m - B * 65536, m = It + B + 65535, B = Math.floor(m / 65536), It = m - B * 65536, m = Ee + B + 65535, B = Math.floor(m / 65536), Ee = m - B * 65536, m = $t + B + 65535, B = Math.floor(m / 65536), $t = m - B * 65536, m = xt + B + 65535, B = Math.floor(m / 65536), xt = m - B * 65536, m = Ut + B + 65535, B = Math.floor(m / 65536), Ut = m - B * 65536, m = _t + B + 65535, B = Math.floor(m / 65536), _t = m - B * 65536, m = Et + B + 65535, B = Math.floor(m / 65536), Et = m - B * 65536, m = Vt + B + 65535, B = Math.floor(m / 65536), Vt = m - B * 65536, m = yt + B + 65535, B = Math.floor(m / 65536), yt = m - B * 65536, m = At + B + 65535, B = Math.floor(m / 65536), At = m - B * 65536, m = Bt + B + 65535, B = Math.floor(m / 65536), Bt = m - B * 65536, et += B - 1 + 37 * (B - 1), B = 1, m = et + B + 65535, B = Math.floor(m / 65536), et = m - B * 65536, m = ct + B + 65535, B = Math.floor(m / 65536), ct = m - B * 65536, m = at + B + 65535, B = Math.floor(m / 65536), at = m - B * 65536, m = Mt + B + 65535, B = Math.floor(m / 65536), Mt = m - B * 65536, m = Pt + B + 65535, B = Math.floor(m / 65536), Pt = m - B * 65536, m = It + B + 65535, B = Math.floor(m / 65536), It = m - B * 65536, m = Ee + B + 65535, B = Math.floor(m / 65536), Ee = m - B * 65536, m = $t + B + 65535, B = Math.floor(m / 65536), $t = m - B * 65536, m = xt + B + 65535, B = Math.floor(m / 65536), xt = m - B * 65536, m = Ut + B + 65535, B = Math.floor(m / 65536), Ut = m - B * 65536, m = _t + B + 65535, B = Math.floor(m / 65536), _t = m - B * 65536, m = Et + B + 65535, B = Math.floor(m / 65536), Et = m - B * 65536, m = Vt + B + 65535, B = Math.floor(m / 65536), Vt = m - B * 65536, m = yt + B + 65535, B = Math.floor(m / 65536), yt = m - B * 65536, m = At + B + 65535, B = Math.floor(m / 65536), At = m - B * 65536, m = Bt + B + 65535, B = Math.floor(m / 65536), Bt = m - B * 65536, et += B - 1 + 37 * (B - 1), U[0] = et, U[1] = ct, U[2] = at, U[3] = Mt, U[4] = Pt, U[5] = It, U[6] = Ee, U[7] = $t, U[8] = xt, U[9] = Ut, U[10] = _t, U[11] = Et, U[12] = Vt, U[13] = yt, U[14] = At, U[15] = Bt
    }

    function T(U, q) {
        y(U, q, q)
    }

    function nt(U, q) {
        const k = s();
        let m;
        for (m = 0; m < 16; m++) k[m] = q[m];
        for (m = 253; m >= 0; m--) T(k, k), m !== 2 && m !== 4 && y(k, k, q);
        for (m = 0; m < 16; m++) U[m] = k[m]
    }

    function ft(U, q) {
        const k = s();
        let m;
        for (m = 0; m < 16; m++) k[m] = q[m];
        for (m = 250; m >= 0; m--) T(k, k), m !== 1 && y(k, k, q);
        for (m = 0; m < 16; m++) U[m] = k[m]
    }

    function lt(U, q) {
        const k = s(),
            m = s(),
            B = s(),
            et = s(),
            ct = s(),
            at = s(),
            Mt = s(),
            Pt = s(),
            It = s();
        z(k, U[1], U[0]), z(It, q[1], q[0]), y(k, k, It), $(m, U[0], U[1]), $(It, q[0], q[1]), y(m, m, It), y(B, U[3], q[3]), y(B, B, d), y(et, U[2], q[2]), $(et, et, et), z(ct, m, k), z(at, et, B), $(Mt, et, B), $(Pt, m, k), y(U[0], ct, at), y(U[1], Pt, Mt), y(U[2], Mt, at), y(U[3], ct, Pt)
    }

    function mt(U, q, k) {
        for (let m = 0; m < 4; m++) Y(U[m], q[m], k)
    }

    function l(U, q) {
        const k = s(),
            m = s(),
            B = s();
        nt(B, q[2]), y(k, q[0], B), y(m, q[1], B), G(U, m), U[31] ^= V(k) << 7
    }

    function h(U, q, k) {
        D(U[0], c), D(U[1], f), D(U[2], f), D(U[3], c);
        for (let m = 255; m >= 0; --m) {
            const B = k[m / 8 | 0] >> (m & 7) & 1;
            mt(U, q, B), lt(q, U), lt(U, U), mt(U, q, B)
        }
    }

    function w(U, q) {
        const k = [s(), s(), s(), s()];
        D(k[0], b), D(k[1], E), D(k[2], f), y(k[3], b, E), h(U, k, q)
    }

    function S(U) {
        if (U.length !== r.SEED_LENGTH) throw new Error(`ed25519: seed must be ${r.SEED_LENGTH} bytes`);
        const q = (0, e.hash)(U);
        q[0] &= 248, q[31] &= 127, q[31] |= 64;
        const k = new Uint8Array(32),
            m = [s(), s(), s(), s()];
        w(m, q), l(k, m);
        const B = new Uint8Array(64);
        return B.set(U), B.set(k, 32), {
            publicKey: k,
            secretKey: B
        }
    }
    r.generateKeyPairFromSeed = S;

    function M(U) {
        const q = (0, t.randomBytes)(32, U),
            k = S(q);
        return (0, i.wipe)(q), k
    }
    r.generateKeyPair = M;

    function O(U) {
        if (U.length !== r.SECRET_KEY_LENGTH) throw new Error(`ed25519: secret key must be ${r.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array(U.subarray(32))
    }
    r.extractPublicKeyFromSecretKey = O;
    const F = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

    function I(U, q) {
        let k, m, B, et;
        for (m = 63; m >= 32; --m) {
            for (k = 0, B = m - 32, et = m - 12; B < et; ++B) q[B] += k - 16 * q[m] * F[B - (m - 32)], k = Math.floor((q[B] + 128) / 256), q[B] -= k * 256;
            q[B] += k, q[m] = 0
        }
        for (k = 0, B = 0; B < 32; B++) q[B] += k - (q[31] >> 4) * F[B], k = q[B] >> 8, q[B] &= 255;
        for (B = 0; B < 32; B++) q[B] -= k * F[B];
        for (m = 0; m < 32; m++) q[m + 1] += q[m] >> 8, U[m] = q[m] & 255
    }

    function g(U) {
        const q = new Float64Array(64);
        for (let k = 0; k < 64; k++) q[k] = U[k];
        for (let k = 0; k < 64; k++) U[k] = 0;
        I(U, q)
    }

    function N(U, q) {
        const k = new Float64Array(64),
            m = [s(), s(), s(), s()],
            B = (0, e.hash)(U.subarray(0, 32));
        B[0] &= 248, B[31] &= 127, B[31] |= 64;
        const et = new Uint8Array(64);
        et.set(B.subarray(32), 32);
        const ct = new e.SHA512;
        ct.update(et.subarray(32)), ct.update(q);
        const at = ct.digest();
        ct.clean(), g(at), w(m, at), l(et, m), ct.reset(), ct.update(et.subarray(0, 32)), ct.update(U.subarray(32)), ct.update(q);
        const Mt = ct.digest();
        g(Mt);
        for (let Pt = 0; Pt < 32; Pt++) k[Pt] = at[Pt];
        for (let Pt = 0; Pt < 32; Pt++)
            for (let It = 0; It < 32; It++) k[Pt + It] += Mt[Pt] * B[It];
        return I(et.subarray(32), k), et
    }
    r.sign = N;

    function it(U, q) {
        const k = s(),
            m = s(),
            B = s(),
            et = s(),
            ct = s(),
            at = s(),
            Mt = s();
        return D(U[2], f), L(U[1], q), T(B, U[1]), y(et, B, p), z(B, B, U[2]), $(et, U[2], et), T(ct, et), T(at, ct), y(Mt, at, ct), y(k, Mt, B), y(k, k, et), ft(k, k), y(k, k, B), y(k, k, et), y(k, k, et), y(U[0], k, et), T(m, U[0]), y(m, m, et), K(m, B) && y(U[0], U[0], x), T(m, U[0]), y(m, m, et), K(m, B) ? -1 : (V(U[0]) === q[31] >> 7 && z(U[0], c, U[0]), y(U[3], U[0], U[1]), 0)
    }

    function dt(U, q, k) {
        const m = new Uint8Array(32),
            B = [s(), s(), s(), s()],
            et = [s(), s(), s(), s()];
        if (k.length !== r.SIGNATURE_LENGTH) throw new Error(`ed25519: signature must be ${r.SIGNATURE_LENGTH} bytes`);
        if (it(et, U)) return !1;
        const ct = new e.SHA512;
        ct.update(k.subarray(0, 32)), ct.update(U), ct.update(q);
        const at = ct.digest();
        return g(at), h(B, et, at), w(et, k.subarray(32)), lt(B, et), l(m, B), !tt(k, m)
    }
    r.verify = dt;

    function _(U) {
        let q = [s(), s(), s(), s()];
        if (it(q, U)) throw new Error("Ed25519: invalid public key");
        let k = s(),
            m = s(),
            B = q[1];
        $(k, f, B), z(m, f, B), nt(m, m), y(k, k, m);
        let et = new Uint8Array(32);
        return G(et, k), et
    }
    r.convertPublicKeyToX25519 = _;

    function Z(U) {
        const q = (0, e.hash)(U.subarray(0, 32));
        q[0] &= 248, q[31] &= 127, q[31] |= 64;
        const k = new Uint8Array(q.subarray(0, 32));
        return (0, i.wipe)(q), k
    }
    r.convertSecretKeyToX25519 = Z
})(tf);
const bI = "EdDSA",
    _I = "JWT",
    Hg = ".",
    Kg = "base64url",
    EI = "utf8",
    AI = "utf8",
    SI = ":",
    II = "did",
    DI = "key",
    Mp = "base58btc",
    xI = "z",
    MI = "K36",
    CI = 32;

function Zu(r) {
    return Nr(kr(In(r), EI), Kg)
}

function Vg(r) {
    const t = kr(MI, Mp),
        e = xI + Nr(ml([t, r]), Mp);
    return [II, DI, e].join(SI)
}

function PI(r) {
    return Nr(r, Kg)
}

function OI(r) {
    return kr([Zu(r.header), Zu(r.payload)].join(Hg), AI)
}

function NI(r) {
    return [Zu(r.header), Zu(r.payload), PI(r.signature)].join(Hg)
}

function Cp(r = ho.randomBytes(CI)) {
    return tf.generateKeyPairFromSeed(r)
}
async function RI(r, t, e, i, s = bt.fromMiliseconds(Date.now())) {
    const a = {
            alg: bI,
            typ: _I
        },
        c = Vg(i.publicKey),
        f = s + e,
        p = {
            iss: c,
            sub: r,
            aud: t,
            iat: s,
            exp: f
        },
        d = OI({
            header: a,
            payload: p
        }),
        b = tf.sign(i.secretKey, d);
    return NI({
        header: a,
        payload: p,
        signature: b
    })
}
const TI = "PARSE_ERROR",
    FI = "INVALID_REQUEST",
    BI = "METHOD_NOT_FOUND",
    UI = "INVALID_PARAMS",
    Gg = "INTERNAL_ERROR",
    ef = "SERVER_ERROR",
    LI = [-32700, -32600, -32601, -32602, -32603],
    Xo = {
        [TI]: {
            code: -32700,
            message: "Parse error"
        },
        [FI]: {
            code: -32600,
            message: "Invalid Request"
        },
        [BI]: {
            code: -32601,
            message: "Method not found"
        },
        [UI]: {
            code: -32602,
            message: "Invalid params"
        },
        [Gg]: {
            code: -32603,
            message: "Internal error"
        },
        [ef]: {
            code: -32e3,
            message: "Server error"
        }
    },
    Wg = ef;

function qI(r) {
    return LI.includes(r)
}

function Pp(r) {
    return Object.keys(Xo).includes(r) ? Xo[r] : Xo[Wg]
}

function jI(r) {
    const t = Object.values(Xo).find(e => e.code === r);
    return t || Xo[Wg]
}

function Yg(r, t, e) {
    return r.message.includes("getaddrinfo ENOTFOUND") || r.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${e} RPC url at ${t}`) : r
}
var Qg = {},
    wn = {},
    Op;

function $I() {
    if (Op) return wn;
    Op = 1, Object.defineProperty(wn, "__esModule", {
        value: !0
    }), wn.isBrowserCryptoAvailable = wn.getSubtleCrypto = wn.getBrowerCrypto = void 0;

    function r() {
        return (Bi === null || Bi === void 0 ? void 0 : Bi.crypto) || (Bi === null || Bi === void 0 ? void 0 : Bi.msCrypto) || {}
    }
    wn.getBrowerCrypto = r;

    function t() {
        const i = r();
        return i.subtle || i.webkitSubtle
    }
    wn.getSubtleCrypto = t;

    function e() {
        return !!r() && !!t()
    }
    return wn.isBrowserCryptoAvailable = e, wn
}
var bn = {},
    Np;

function zI() {
    if (Np) return bn;
    Np = 1, Object.defineProperty(bn, "__esModule", {
        value: !0
    }), bn.isBrowser = bn.isNode = bn.isReactNative = void 0;

    function r() {
        return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative"
    }
    bn.isReactNative = r;

    function t() {
        return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
    }
    bn.isNode = t;

    function e() {
        return !r() && !t()
    }
    return bn.isBrowser = e, bn
}(function(r) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    const t = aa;
    t.__exportStar($I(), r), t.__exportStar(zI(), r)
})(Qg);

function zn(r = 3) {
    const t = Date.now() * Math.pow(10, r),
        e = Math.floor(Math.random() * Math.pow(10, r));
    return t + e
}

function Es(r = 6) {
    return BigInt(zn(r))
}

function oo(r, t, e) {
    return {
        id: e || zn(),
        jsonrpc: "2.0",
        method: r,
        params: t
    }
}

function fc(r, t) {
    return {
        id: r,
        jsonrpc: "2.0",
        result: t
    }
}

function dc(r, t, e) {
    return {
        id: r,
        jsonrpc: "2.0",
        error: kI(t, e)
    }
}

function kI(r, t) {
    return typeof r > "u" ? Pp(Gg) : (typeof r == "string" && (r = Object.assign(Object.assign({}, Pp(ef)), {
        message: r
    })), typeof t < "u" && (r.data = t), qI(r.code) && (r = jI(r.code)), r)
}
class HI {}
class KI extends HI {
    constructor() {
        super()
    }
}
class VI extends KI {
    constructor(t) {
        super()
    }
}
const GI = "^https?:",
    WI = "^wss?:";

function YI(r) {
    const t = r.match(new RegExp(/^\w+:/, "gi"));
    if (!(!t || !t.length)) return t[0]
}

function Jg(r, t) {
    const e = YI(r);
    return typeof e > "u" ? !1 : new RegExp(t).test(e)
}

function Rp(r) {
    return Jg(r, GI)
}

function Tp(r) {
    return Jg(r, WI)
}

function QI(r) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(r)
}

function Xg(r) {
    return typeof r == "object" && "id" in r && "jsonrpc" in r && r.jsonrpc === "2.0"
}

function rf(r) {
    return Xg(r) && "method" in r
}

function pc(r) {
    return Xg(r) && (Yi(r) || Ei(r))
}

function Yi(r) {
    return "result" in r
}

function Ei(r) {
    return "error" in r
}
let Dn = class extends VI {
    constructor(t) {
        super(t), this.events = new Si.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
    }
    async connect(t = this.connection) {
        await this.open(t)
    }
    async disconnect() {
        await this.close()
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    async request(t, e) {
        return this.requestStrict(oo(t.method, t.params || [], t.id || Es().toString()), e)
    }
    async requestStrict(t, e) {
        return new Promise(async (i, s) => {
            if (!this.connection.connected) try {
                await this.open()
            } catch (a) {
                s(a)
            }
            this.events.on(`${t.id}`, a => {
                Ei(a) ? s(a.error) : i(a.result)
            });
            try {
                await this.connection.send(t, e)
            } catch (a) {
                s(a)
            }
        })
    }
    setConnection(t = this.connection) {
        return t
    }
    onPayload(t) {
        this.events.emit("payload", t), pc(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
            type: t.method,
            data: t.params
        })
    }
    onClose(t) {
        t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
    }
    async open(t = this.connection) {
        this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", t => this.onPayload(t)), this.connection.on("close", t => this.onClose(t)), this.connection.on("error", t => this.events.emit("error", t)), this.connection.on("register_error", t => this.onClose()), this.hasRegisteredEventListeners = !0)
    }
};
const JI = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"),
    XI = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u",
    Fp = r => r.split("?")[0],
    Bp = 10,
    ZI = JI();
let tD = class {
    constructor(t) {
        if (this.url = t, this.events = new Si.EventEmitter, this.registering = !1, !Tp(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        this.url = t
    }
    get connected() {
        return typeof this.socket < "u"
    }
    get connecting() {
        return this.registering
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    async open(t = this.url) {
        await this.register(t)
    }
    async close() {
        return new Promise((t, e) => {
            if (typeof this.socket > "u") {
                e(new Error("Connection already closed"));
                return
            }
            this.socket.onclose = i => {
                this.onClose(i), t()
            }, this.socket.close()
        })
    }
    async send(t) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send(In(t))
        } catch (e) {
            this.onError(t.id, e)
        }
    }
    register(t = this.url) {
        if (!Tp(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        if (this.registering) {
            const e = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((i, s) => {
                this.events.once("register_error", a => {
                    this.resetMaxListeners(), s(a)
                }), this.events.once("open", () => {
                    if (this.resetMaxListeners(), typeof this.socket > "u") return s(new Error("WebSocket connection is missing or invalid"));
                    i(this.socket)
                })
            })
        }
        return this.url = t, this.registering = !0, new Promise((e, i) => {
            const s = new URLSearchParams(t).get("origin"),
                a = Qg.isReactNative() ? {
                    headers: {
                        origin: s
                    }
                } : {
                    rejectUnauthorized: !QI(t)
                },
                c = new ZI(t, [], a);
            XI() ? c.onerror = f => {
                const p = f;
                i(this.emitError(p.error))
            } : c.on("error", f => {
                i(this.emitError(f))
            }), c.onopen = () => {
                this.onOpen(c), e(c)
            }
        })
    }
    onOpen(t) {
        t.onmessage = e => this.onPayload(e), t.onclose = e => this.onClose(e), this.socket = t, this.registering = !1, this.events.emit("open")
    }
    onClose(t) {
        this.socket = void 0, this.registering = !1, this.events.emit("close", t)
    }
    onPayload(t) {
        if (typeof t.data > "u") return;
        const e = typeof t.data == "string" ? pa(t.data) : t.data;
        this.events.emit("payload", e)
    }
    onError(t, e) {
        const i = this.parseError(e),
            s = i.message || i.toString(),
            a = dc(t, s);
        this.events.emit("payload", a)
    }
    parseError(t, e = this.url) {
        return Yg(t, Fp(e), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Bp && this.events.setMaxListeners(Bp)
    }
    emitError(t) {
        const e = this.parseError(new Error(t ? .message || `WebSocket connection failed for host: ${Fp(this.url)}`));
        return this.events.emit("register_error", e), e
    }
};
var tc = {
    exports: {}
};
tc.exports;
(function(r, t) {
    var e = 200,
        i = "__lodash_hash_undefined__",
        s = 1,
        a = 2,
        c = 9007199254740991,
        f = "[object Arguments]",
        p = "[object Array]",
        d = "[object AsyncFunction]",
        b = "[object Boolean]",
        E = "[object Date]",
        x = "[object Error]",
        D = "[object Function]",
        P = "[object GeneratorFunction]",
        Y = "[object Map]",
        G = "[object Number]",
        tt = "[object Null]",
        K = "[object Object]",
        V = "[object Promise]",
        L = "[object Proxy]",
        $ = "[object RegExp]",
        z = "[object Set]",
        y = "[object String]",
        T = "[object Symbol]",
        nt = "[object Undefined]",
        ft = "[object WeakMap]",
        lt = "[object ArrayBuffer]",
        mt = "[object DataView]",
        l = "[object Float32Array]",
        h = "[object Float64Array]",
        w = "[object Int8Array]",
        S = "[object Int16Array]",
        M = "[object Int32Array]",
        O = "[object Uint8Array]",
        F = "[object Uint8ClampedArray]",
        I = "[object Uint16Array]",
        g = "[object Uint32Array]",
        N = /[\\^$.*+?()[\]{}|]/g,
        it = /^\[object .+?Constructor\]$/,
        dt = /^(?:0|[1-9]\d*)$/,
        _ = {};
    _[l] = _[h] = _[w] = _[S] = _[M] = _[O] = _[F] = _[I] = _[g] = !0, _[f] = _[p] = _[lt] = _[b] = _[mt] = _[E] = _[x] = _[D] = _[Y] = _[G] = _[K] = _[$] = _[z] = _[y] = _[ft] = !1;
    var Z = typeof Bi == "object" && Bi && Bi.Object === Object && Bi,
        U = typeof self == "object" && self && self.Object === Object && self,
        q = Z || U || Function("return this")(),
        k = t && !t.nodeType && t,
        m = k && !0 && r && !r.nodeType && r,
        B = m && m.exports === k,
        et = B && Z.process,
        ct = function() {
            try {
                return et && et.binding && et.binding("util")
            } catch {}
        }(),
        at = ct && ct.isTypedArray;

    function Mt(j, Q) {
        for (var ht = -1, St = j == null ? 0 : j.length, Be = 0, re = []; ++ht < St;) {
            var je = j[ht];
            Q(je, ht, j) && (re[Be++] = je)
        }
        return re
    }

    function Pt(j, Q) {
        for (var ht = -1, St = Q.length, Be = j.length; ++ht < St;) j[Be + ht] = Q[ht];
        return j
    }

    function It(j, Q) {
        for (var ht = -1, St = j == null ? 0 : j.length; ++ht < St;)
            if (Q(j[ht], ht, j)) return !0;
        return !1
    }

    function Ee(j, Q) {
        for (var ht = -1, St = Array(j); ++ht < j;) St[ht] = Q(ht);
        return St
    }

    function $t(j) {
        return function(Q) {
            return j(Q)
        }
    }

    function xt(j, Q) {
        return j.has(Q)
    }

    function Ut(j, Q) {
        return j ? .[Q]
    }

    function _t(j) {
        var Q = -1,
            ht = Array(j.size);
        return j.forEach(function(St, Be) {
            ht[++Q] = [Be, St]
        }), ht
    }

    function Et(j, Q) {
        return function(ht) {
            return j(Q(ht))
        }
    }

    function Vt(j) {
        var Q = -1,
            ht = Array(j.size);
        return j.forEach(function(St) {
            ht[++Q] = St
        }), ht
    }
    var yt = Array.prototype,
        At = Function.prototype,
        Bt = Object.prototype,
        wt = q["__core-js_shared__"],
        Ct = At.toString,
        Lt = Bt.hasOwnProperty,
        Ot = function() {
            var j = /[^.]+$/.exec(wt && wt.keys && wt.keys.IE_PROTO || "");
            return j ? "Symbol(src)_1." + j : ""
        }(),
        Nt = Bt.toString,
        se = RegExp("^" + Ct.call(Lt).replace(N, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Tt = B ? q.Buffer : void 0,
        Rt = q.Symbol,
        He = q.Uint8Array,
        ue = Bt.propertyIsEnumerable,
        pe = yt.splice,
        Ke = Rt ? Rt.toStringTag : void 0,
        ye = Object.getOwnPropertySymbols,
        _e = Tt ? Tt.isBuffer : void 0,
        _r = Et(Object.keys, Object),
        Gt = Gr(q, "DataView"),
        zt = Gr(q, "Map"),
        Ie = Gr(q, "Promise"),
        Wt = Gr(q, "Set"),
        Kt = Gr(q, "WeakMap"),
        Ae = Gr(Object, "create"),
        Jt = un(Gt),
        Xt = un(zt),
        De = un(Ie),
        Zt = un(Wt),
        Yt = un(Kt),
        Me = Rt ? Rt.prototype : void 0,
        Qt = Me ? Me.valueOf : void 0;

    function qt(j) {
        var Q = -1,
            ht = j == null ? 0 : j.length;
        for (this.clear(); ++Q < ht;) {
            var St = j[Q];
            this.set(St[0], St[1])
        }
    }

    function Re() {
        this.__data__ = Ae ? Ae(null) : {}, this.size = 0
    }

    function te(j) {
        var Q = this.has(j) && delete this.__data__[j];
        return this.size -= Q ? 1 : 0, Q
    }

    function Ce(j) {
        var Q = this.__data__;
        if (Ae) {
            var ht = Q[j];
            return ht === i ? void 0 : ht
        }
        return Lt.call(Q, j) ? Q[j] : void 0
    }

    function Ii(j) {
        var Q = this.__data__;
        return Ae ? Q[j] !== void 0 : Lt.call(Q, j)
    }

    function Pe(j, Q) {
        var ht = this.__data__;
        return this.size += this.has(j) ? 0 : 1, ht[j] = Ae && Q === void 0 ? i : Q, this
    }
    qt.prototype.clear = Re, qt.prototype.delete = te, qt.prototype.get = Ce, qt.prototype.has = Ii, qt.prototype.set = Pe;

    function le(j) {
        var Q = -1,
            ht = j == null ? 0 : j.length;
        for (this.clear(); ++Q < ht;) {
            var St = j[Q];
            this.set(St[0], St[1])
        }
    }

    function ni() {
        this.__data__ = [], this.size = 0
    }

    function si(j) {
        var Q = this.__data__,
            ht = is(Q, j);
        if (ht < 0) return !1;
        var St = Q.length - 1;
        return ht == St ? Q.pop() : pe.call(Q, ht, 1), --this.size, !0
    }

    function oi(j) {
        var Q = this.__data__,
            ht = is(Q, j);
        return ht < 0 ? void 0 : Q[ht][1]
    }

    function ai(j) {
        return is(this.__data__, j) > -1
    }

    function ui(j, Q) {
        var ht = this.__data__,
            St = is(ht, j);
        return St < 0 ? (++this.size, ht.push([j, Q])) : ht[St][1] = Q, this
    }
    le.prototype.clear = ni, le.prototype.delete = si, le.prototype.get = oi, le.prototype.has = ai, le.prototype.set = ui;

    function or(j) {
        var Q = -1,
            ht = j == null ? 0 : j.length;
        for (this.clear(); ++Q < ht;) {
            var St = j[Q];
            this.set(St[0], St[1])
        }
    }

    function Li() {
        this.size = 0, this.__data__ = {
            hash: new qt,
            map: new(zt || le),
            string: new qt
        }
    }

    function Qn(j) {
        var Q = Pn(this, j).delete(j);
        return this.size -= Q ? 1 : 0, Q
    }

    function qi(j) {
        return Pn(this, j).get(j)
    }

    function Jn(j) {
        return Pn(this, j).has(j)
    }

    function Xn(j, Q) {
        var ht = Pn(this, j),
            St = ht.size;
        return ht.set(j, Q), this.size += ht.size == St ? 0 : 1, this
    }
    or.prototype.clear = Li, or.prototype.delete = Qn, or.prototype.get = qi, or.prototype.has = Jn, or.prototype.set = Xn;

    function ji(j) {
        var Q = -1,
            ht = j == null ? 0 : j.length;
        for (this.__data__ = new or; ++Q < ht;) this.add(j[Q])
    }

    function Mn(j) {
        return this.__data__.set(j, i), this
    }

    function Cn(j) {
        return this.__data__.has(j)
    }
    ji.prototype.add = ji.prototype.push = Mn, ji.prototype.has = Cn;

    function Er(j) {
        var Q = this.__data__ = new le(j);
        this.size = Q.size
    }

    function Zn() {
        this.__data__ = new le, this.size = 0
    }

    function ts(j) {
        var Q = this.__data__,
            ht = Q.delete(j);
        return this.size = Q.size, ht
    }

    function es(j) {
        return this.__data__.get(j)
    }

    function rs(j) {
        return this.__data__.has(j)
    }

    function wa(j, Q) {
        var ht = this.__data__;
        if (ht instanceof le) {
            var St = ht.__data__;
            if (!zt || St.length < e - 1) return St.push([j, Q]), this.size = ++ht.size, this;
            ht = this.__data__ = new or(St)
        }
        return ht.set(j, Q), this.size = ht.size, this
    }
    Er.prototype.clear = Zn, Er.prototype.delete = ts, Er.prototype.get = es, Er.prototype.has = rs, Er.prototype.set = wa;

    function ba(j, Q) {
        var ht = Rs(j),
            St = !ht && Na(j),
            Be = !ht && !St && _o(j),
            re = !ht && !St && !Be && Fa(j),
            je = ht || St || Be || re,
            tr = je ? Ee(j.length, String) : [],
            we = tr.length;
        for (var Ue in j)(Q || Lt.call(j, Ue)) && !(je && (Ue == "length" || Be && (Ue == "offset" || Ue == "parent") || re && (Ue == "buffer" || Ue == "byteLength" || Ue == "byteOffset") || xa(Ue, we))) && tr.push(Ue);
        return tr
    }

    function is(j, Q) {
        for (var ht = j.length; ht--;)
            if (Oa(j[ht][0], Q)) return ht;
        return -1
    }

    function wo(j, Q, ht) {
        var St = Q(j);
        return Rs(j) ? St : Pt(St, ht(j))
    }

    function ns(j) {
        return j == null ? j === void 0 ? nt : tt : Ke && Ke in Object(j) ? Ia(j) : wc(j)
    }

    function bo(j) {
        return os(j) && ns(j) == f
    }

    function ss(j, Q, ht, St, Be) {
        return j === Q ? !0 : j == null || Q == null || !os(j) && !os(Q) ? j !== j && Q !== Q : _a(j, Q, ht, St, ss, Be)
    }

    function _a(j, Q, ht, St, Be, re) {
        var je = Rs(j),
            tr = Rs(Q),
            we = je ? p : $i(j),
            Ue = tr ? p : $i(Q);
        we = we == f ? K : we, Ue = Ue == f ? K : Ue;
        var Ye = we == K,
            Tr = Ue == K,
            er = we == Ue;
        if (er && _o(j)) {
            if (!_o(Q)) return !1;
            je = !0, Ye = !1
        }
        if (er && !Ye) return re || (re = new Er), je || Fa(j) ? Os(j, Q, ht, St, Be, re) : yc(j, Q, we, ht, St, Be, re);
        if (!(ht & s)) {
            var $e = Ye && Lt.call(j, "__wrapped__"),
                Ar = Tr && Lt.call(Q, "__wrapped__");
            if ($e || Ar) {
                var Di = $e ? j.value() : j,
                    ci = Ar ? Q.value() : Q;
                return re || (re = new Er), Be(Di, ci, ht, St, re)
            }
        }
        return er ? (re || (re = new Er), Sa(j, Q, ht, St, Be, re)) : !1
    }

    function vc(j) {
        if (!Ta(j) || Ca(j)) return !1;
        var Q = Ts(j) ? se : it;
        return Q.test(un(j))
    }

    function Ea(j) {
        return os(j) && Ra(j.length) && !!_[ns(j)]
    }

    function Aa(j) {
        if (!Pa(j)) return _r(j);
        var Q = [];
        for (var ht in Object(j)) Lt.call(j, ht) && ht != "constructor" && Q.push(ht);
        return Q
    }

    function Os(j, Q, ht, St, Be, re) {
        var je = ht & s,
            tr = j.length,
            we = Q.length;
        if (tr != we && !(je && we > tr)) return !1;
        var Ue = re.get(j);
        if (Ue && re.get(Q)) return Ue == Q;
        var Ye = -1,
            Tr = !0,
            er = ht & a ? new ji : void 0;
        for (re.set(j, Q), re.set(Q, j); ++Ye < tr;) {
            var $e = j[Ye],
                Ar = Q[Ye];
            if (St) var Di = je ? St(Ar, $e, Ye, Q, j, re) : St($e, Ar, Ye, j, Q, re);
            if (Di !== void 0) {
                if (Di) continue;
                Tr = !1;
                break
            }
            if (er) {
                if (!It(Q, function(ci, zi) {
                        if (!xt(er, zi) && ($e === ci || Be($e, ci, ht, St, re))) return er.push(zi)
                    })) {
                    Tr = !1;
                    break
                }
            } else if (!($e === Ar || Be($e, Ar, ht, St, re))) {
                Tr = !1;
                break
            }
        }
        return re.delete(j), re.delete(Q), Tr
    }

    function yc(j, Q, ht, St, Be, re, je) {
        switch (ht) {
            case mt:
                if (j.byteLength != Q.byteLength || j.byteOffset != Q.byteOffset) return !1;
                j = j.buffer, Q = Q.buffer;
            case lt:
                return !(j.byteLength != Q.byteLength || !re(new He(j), new He(Q)));
            case b:
            case E:
            case G:
                return Oa(+j, +Q);
            case x:
                return j.name == Q.name && j.message == Q.message;
            case $:
            case y:
                return j == Q + "";
            case Y:
                var tr = _t;
            case z:
                var we = St & s;
                if (tr || (tr = Vt), j.size != Q.size && !we) return !1;
                var Ue = je.get(j);
                if (Ue) return Ue == Q;
                St |= a, je.set(j, Q);
                var Ye = Os(tr(j), tr(Q), St, Be, re, je);
                return je.delete(j), Ye;
            case T:
                if (Qt) return Qt.call(j) == Qt.call(Q)
        }
        return !1
    }

    function Sa(j, Q, ht, St, Be, re) {
        var je = ht & s,
            tr = Ns(j),
            we = tr.length,
            Ue = Ns(Q),
            Ye = Ue.length;
        if (we != Ye && !je) return !1;
        for (var Tr = we; Tr--;) {
            var er = tr[Tr];
            if (!(je ? er in Q : Lt.call(Q, er))) return !1
        }
        var $e = re.get(j);
        if ($e && re.get(Q)) return $e == Q;
        var Ar = !0;
        re.set(j, Q), re.set(Q, j);
        for (var Di = je; ++Tr < we;) {
            er = tr[Tr];
            var ci = j[er],
                zi = Q[er];
            if (St) var Eo = je ? St(zi, ci, er, Q, j, re) : St(ci, zi, er, j, Q, re);
            if (!(Eo === void 0 ? ci === zi || Be(ci, zi, ht, St, re) : Eo)) {
                Ar = !1;
                break
            }
            Di || (Di = er == "constructor")
        }
        if (Ar && !Di) {
            var as = j.constructor,
                ar = Q.constructor;
            as != ar && "constructor" in j && "constructor" in Q && !(typeof as == "function" && as instanceof as && typeof ar == "function" && ar instanceof ar) && (Ar = !1)
        }
        return re.delete(j), re.delete(Q), Ar
    }

    function Ns(j) {
        return wo(j, Ec, Da)
    }

    function Pn(j, Q) {
        var ht = j.__data__;
        return Ma(Q) ? ht[typeof Q == "string" ? "string" : "hash"] : ht.map
    }

    function Gr(j, Q) {
        var ht = Ut(j, Q);
        return vc(ht) ? ht : void 0
    }

    function Ia(j) {
        var Q = Lt.call(j, Ke),
            ht = j[Ke];
        try {
            j[Ke] = void 0;
            var St = !0
        } catch {}
        var Be = Nt.call(j);
        return St && (Q ? j[Ke] = ht : delete j[Ke]), Be
    }
    var Da = ye ? function(j) {
            return j == null ? [] : (j = Object(j), Mt(ye(j), function(Q) {
                return ue.call(j, Q)
            }))
        } : Fe,
        $i = ns;
    (Gt && $i(new Gt(new ArrayBuffer(1))) != mt || zt && $i(new zt) != Y || Ie && $i(Ie.resolve()) != V || Wt && $i(new Wt) != z || Kt && $i(new Kt) != ft) && ($i = function(j) {
        var Q = ns(j),
            ht = Q == K ? j.constructor : void 0,
            St = ht ? un(ht) : "";
        if (St) switch (St) {
            case Jt:
                return mt;
            case Xt:
                return Y;
            case De:
                return V;
            case Zt:
                return z;
            case Yt:
                return ft
        }
        return Q
    });

    function xa(j, Q) {
        return Q = Q ? ? c, !!Q && (typeof j == "number" || dt.test(j)) && j > -1 && j % 1 == 0 && j < Q
    }

    function Ma(j) {
        var Q = typeof j;
        return Q == "string" || Q == "number" || Q == "symbol" || Q == "boolean" ? j !== "__proto__" : j === null
    }

    function Ca(j) {
        return !!Ot && Ot in j
    }

    function Pa(j) {
        var Q = j && j.constructor,
            ht = typeof Q == "function" && Q.prototype || Bt;
        return j === ht
    }

    function wc(j) {
        return Nt.call(j)
    }

    function un(j) {
        if (j != null) {
            try {
                return Ct.call(j)
            } catch {}
            try {
                return j + ""
            } catch {}
        }
        return ""
    }

    function Oa(j, Q) {
        return j === Q || j !== j && Q !== Q
    }
    var Na = bo(function() {
            return arguments
        }()) ? bo : function(j) {
            return os(j) && Lt.call(j, "callee") && !ue.call(j, "callee")
        },
        Rs = Array.isArray;

    function bc(j) {
        return j != null && Ra(j.length) && !Ts(j)
    }
    var _o = _e || Te;

    function _c(j, Q) {
        return ss(j, Q)
    }

    function Ts(j) {
        if (!Ta(j)) return !1;
        var Q = ns(j);
        return Q == D || Q == P || Q == d || Q == L
    }

    function Ra(j) {
        return typeof j == "number" && j > -1 && j % 1 == 0 && j <= c
    }

    function Ta(j) {
        var Q = typeof j;
        return j != null && (Q == "object" || Q == "function")
    }

    function os(j) {
        return j != null && typeof j == "object"
    }
    var Fa = at ? $t(at) : Ea;

    function Ec(j) {
        return bc(j) ? ba(j) : Aa(j)
    }

    function Fe() {
        return []
    }

    function Te() {
        return !1
    }
    r.exports = _c
})(tc, tc.exports);
var eD = tc.exports;
const rD = rc(eD);

function iD(r, t) {
    return t = t || {}, new Promise(function(e, i) {
        var s = new XMLHttpRequest,
            a = [],
            c = [],
            f = {},
            p = function() {
                return {
                    ok: (s.status / 100 | 0) == 2,
                    statusText: s.statusText,
                    status: s.status,
                    url: s.responseURL,
                    text: function() {
                        return Promise.resolve(s.responseText)
                    },
                    json: function() {
                        return Promise.resolve(s.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([s.response]))
                    },
                    clone: p,
                    headers: {
                        keys: function() {
                            return a
                        },
                        entries: function() {
                            return c
                        },
                        get: function(b) {
                            return f[b.toLowerCase()]
                        },
                        has: function(b) {
                            return b.toLowerCase() in f
                        }
                    }
                }
            };
        for (var d in s.open(t.method || "get", r, !0), s.onload = function() {
                s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(b, E, x) {
                    a.push(E = E.toLowerCase()), c.push([E, x]), f[E] = f[E] ? f[E] + "," + x : x
                }), e(p())
            }, s.onerror = i, s.withCredentials = t.credentials == "include", t.headers) s.setRequestHeader(d, t.headers[d]);
        s.send(t.body || null)
    })
}
const nD = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: iD
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Up = E1(nD);
var sD = self.fetch || (self.fetch = Up.default || Up);
const oD = rc(sD);

function aD(r, t) {
    if (r.length >= 255) throw new TypeError("Alphabet too long");
    for (var e = new Uint8Array(256), i = 0; i < e.length; i++) e[i] = 255;
    for (var s = 0; s < r.length; s++) {
        var a = r.charAt(s),
            c = a.charCodeAt(0);
        if (e[c] !== 255) throw new TypeError(a + " is ambiguous");
        e[c] = s
    }
    var f = r.length,
        p = r.charAt(0),
        d = Math.log(f) / Math.log(256),
        b = Math.log(256) / Math.log(f);

    function E(P) {
        if (P instanceof Uint8Array || (ArrayBuffer.isView(P) ? P = new Uint8Array(P.buffer, P.byteOffset, P.byteLength) : Array.isArray(P) && (P = Uint8Array.from(P))), !(P instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (P.length === 0) return "";
        for (var Y = 0, G = 0, tt = 0, K = P.length; tt !== K && P[tt] === 0;) tt++, Y++;
        for (var V = (K - tt) * b + 1 >>> 0, L = new Uint8Array(V); tt !== K;) {
            for (var $ = P[tt], z = 0, y = V - 1;
                ($ !== 0 || z < G) && y !== -1; y--, z++) $ += 256 * L[y] >>> 0, L[y] = $ % f >>> 0, $ = $ / f >>> 0;
            if ($ !== 0) throw new Error("Non-zero carry");
            G = z, tt++
        }
        for (var T = V - G; T !== V && L[T] === 0;) T++;
        for (var nt = p.repeat(Y); T < V; ++T) nt += r.charAt(L[T]);
        return nt
    }

    function x(P) {
        if (typeof P != "string") throw new TypeError("Expected String");
        if (P.length === 0) return new Uint8Array;
        var Y = 0;
        if (P[Y] !== " ") {
            for (var G = 0, tt = 0; P[Y] === p;) G++, Y++;
            for (var K = (P.length - Y) * d + 1 >>> 0, V = new Uint8Array(K); P[Y];) {
                var L = e[P.charCodeAt(Y)];
                if (L === 255) return;
                for (var $ = 0, z = K - 1;
                    (L !== 0 || $ < tt) && z !== -1; z--, $++) L += f * V[z] >>> 0, V[z] = L % 256 >>> 0, L = L / 256 >>> 0;
                if (L !== 0) throw new Error("Non-zero carry");
                tt = $, Y++
            }
            if (P[Y] !== " ") {
                for (var y = K - tt; y !== K && V[y] === 0;) y++;
                for (var T = new Uint8Array(G + (K - y)), nt = G; y !== K;) T[nt++] = V[y++];
                return T
            }
        }
    }

    function D(P) {
        var Y = x(P);
        if (Y) return Y;
        throw new Error(`Non-${t} character`)
    }
    return {
        encode: E,
        decodeUnsafe: x,
        decode: D
    }
}
var uD = aD,
    cD = uD;
const Zg = r => {
        if (r instanceof Uint8Array && r.constructor.name === "Uint8Array") return r;
        if (r instanceof ArrayBuffer) return new Uint8Array(r);
        if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
        throw new Error("Unknown type, must be binary type")
    },
    hD = r => new TextEncoder().encode(r),
    lD = r => new TextDecoder().decode(r);
class fD {
    constructor(t, e, i) {
        this.name = t, this.prefix = e, this.baseEncode = i
    }
    encode(t) {
        if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
        throw Error("Unknown type, must be binary type")
    }
}
let dD = class {
        constructor(t, e, i) {
            if (this.name = t, this.prefix = e, e.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
            this.prefixCodePoint = e.codePointAt(0), this.baseDecode = i
        }
        decode(t) {
            if (typeof t == "string") {
                if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                return this.baseDecode(t.slice(this.prefix.length))
            } else throw Error("Can only multibase decode strings")
        }
        or(t) {
            return tm(this, t)
        }
    },
    pD = class {
        constructor(t) {
            this.decoders = t
        }
        or(t) {
            return tm(this, t)
        }
        decode(t) {
            const e = t[0],
                i = this.decoders[e];
            if (i) return i.decode(t);
            throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
        }
    };
const tm = (r, t) => new pD({ ...r.decoders || {
        [r.prefix]: r
    },
    ...t.decoders || {
        [t.prefix]: t
    }
});
let gD = class {
    constructor(t, e, i, s) {
        this.name = t, this.prefix = e, this.baseEncode = i, this.baseDecode = s, this.encoder = new fD(t, e, i), this.decoder = new dD(t, e, s)
    }
    encode(t) {
        return this.encoder.encode(t)
    }
    decode(t) {
        return this.decoder.decode(t)
    }
};
const gc = ({
        name: r,
        prefix: t,
        encode: e,
        decode: i
    }) => new gD(r, t, e, i),
    ya = ({
        prefix: r,
        name: t,
        alphabet: e
    }) => {
        const {
            encode: i,
            decode: s
        } = cD(e, t);
        return gc({
            prefix: r,
            name: t,
            encode: i,
            decode: a => Zg(s(a))
        })
    },
    mD = (r, t, e, i) => {
        const s = {};
        for (let b = 0; b < t.length; ++b) s[t[b]] = b;
        let a = r.length;
        for (; r[a - 1] === "=";) --a;
        const c = new Uint8Array(a * e / 8 | 0);
        let f = 0,
            p = 0,
            d = 0;
        for (let b = 0; b < a; ++b) {
            const E = s[r[b]];
            if (E === void 0) throw new SyntaxError(`Non-${i} character`);
            p = p << e | E, f += e, f >= 8 && (f -= 8, c[d++] = 255 & p >> f)
        }
        if (f >= e || 255 & p << 8 - f) throw new SyntaxError("Unexpected end of data");
        return c
    },
    vD = (r, t, e) => {
        const i = t[t.length - 1] === "=",
            s = (1 << e) - 1;
        let a = "",
            c = 0,
            f = 0;
        for (let p = 0; p < r.length; ++p)
            for (f = f << 8 | r[p], c += 8; c > e;) c -= e, a += t[s & f >> c];
        if (c && (a += t[s & f << e - c]), i)
            for (; a.length * e & 7;) a += "=";
        return a
    },
    mr = ({
        name: r,
        prefix: t,
        bitsPerChar: e,
        alphabet: i
    }) => gc({
        prefix: t,
        name: r,
        encode(s) {
            return vD(s, i, e)
        },
        decode(s) {
            return mD(s, i, e, r)
        }
    }),
    yD = gc({
        prefix: "\0",
        name: "identity",
        encode: r => lD(r),
        decode: r => hD(r)
    });
var wD = Object.freeze({
    __proto__: null,
    identity: yD
});
const bD = mr({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var _D = Object.freeze({
    __proto__: null,
    base2: bD
});
const ED = mr({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var AD = Object.freeze({
    __proto__: null,
    base8: ED
});
const SD = ya({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var ID = Object.freeze({
    __proto__: null,
    base10: SD
});
const DD = mr({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
    }),
    xD = mr({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
    });
var MD = Object.freeze({
    __proto__: null,
    base16: DD,
    base16upper: xD
});
const CD = mr({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
    }),
    PD = mr({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
    }),
    OD = mr({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
    }),
    ND = mr({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
    }),
    RD = mr({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
    }),
    TD = mr({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
    }),
    FD = mr({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
    }),
    BD = mr({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
    }),
    UD = mr({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
    });
var LD = Object.freeze({
    __proto__: null,
    base32: CD,
    base32upper: PD,
    base32pad: OD,
    base32padupper: ND,
    base32hex: RD,
    base32hexupper: TD,
    base32hexpad: FD,
    base32hexpadupper: BD,
    base32z: UD
});
const qD = ya({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }),
    jD = ya({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
var $D = Object.freeze({
    __proto__: null,
    base36: qD,
    base36upper: jD
});
const zD = ya({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }),
    kD = ya({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    });
var HD = Object.freeze({
    __proto__: null,
    base58btc: zD,
    base58flickr: kD
});
const KD = mr({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
    }),
    VD = mr({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
    }),
    GD = mr({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
    }),
    WD = mr({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
    });
var YD = Object.freeze({
    __proto__: null,
    base64: KD,
    base64pad: VD,
    base64url: GD,
    base64urlpad: WD
});
const em = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
    QD = em.reduce((r, t, e) => (r[e] = t, r), []),
    JD = em.reduce((r, t, e) => (r[t.codePointAt(0)] = e, r), []);

function XD(r) {
    return r.reduce((t, e) => (t += QD[e], t), "")
}

function ZD(r) {
    const t = [];
    for (const e of r) {
        const i = JD[e.codePointAt(0)];
        if (i === void 0) throw new Error(`Non-base256emoji character: ${e}`);
        t.push(i)
    }
    return new Uint8Array(t)
}
const tx = gc({
    prefix: "🚀",
    name: "base256emoji",
    encode: XD,
    decode: ZD
});
var ex = Object.freeze({
        __proto__: null,
        base256emoji: tx
    }),
    rx = rm,
    Lp = 128,
    ix = 127,
    nx = ~ix,
    sx = Math.pow(2, 31);

function rm(r, t, e) {
    t = t || [], e = e || 0;
    for (var i = e; r >= sx;) t[e++] = r & 255 | Lp, r /= 128;
    for (; r & nx;) t[e++] = r & 255 | Lp, r >>>= 7;
    return t[e] = r | 0, rm.bytes = e - i + 1, t
}
var ox = Cl,
    ax = 128,
    qp = 127;

function Cl(r, i) {
    var e = 0,
        i = i || 0,
        s = 0,
        a = i,
        c, f = r.length;
    do {
        if (a >= f) throw Cl.bytes = 0, new RangeError("Could not decode varint");
        c = r[a++], e += s < 28 ? (c & qp) << s : (c & qp) * Math.pow(2, s), s += 7
    } while (c >= ax);
    return Cl.bytes = a - i, e
}
var ux = Math.pow(2, 7),
    cx = Math.pow(2, 14),
    hx = Math.pow(2, 21),
    lx = Math.pow(2, 28),
    fx = Math.pow(2, 35),
    dx = Math.pow(2, 42),
    px = Math.pow(2, 49),
    gx = Math.pow(2, 56),
    mx = Math.pow(2, 63),
    vx = function(r) {
        return r < ux ? 1 : r < cx ? 2 : r < hx ? 3 : r < lx ? 4 : r < fx ? 5 : r < dx ? 6 : r < px ? 7 : r < gx ? 8 : r < mx ? 9 : 10
    },
    yx = {
        encode: rx,
        decode: ox,
        encodingLength: vx
    },
    im = yx;
const jp = (r, t, e = 0) => (im.encode(r, t, e), t),
    $p = r => im.encodingLength(r),
    Pl = (r, t) => {
        const e = t.byteLength,
            i = $p(r),
            s = i + $p(e),
            a = new Uint8Array(s + e);
        return jp(r, a, 0), jp(e, a, i), a.set(t, s), new wx(r, e, t, a)
    };
class wx {
    constructor(t, e, i, s) {
        this.code = t, this.size = e, this.digest = i, this.bytes = s
    }
}
const nm = ({
    name: r,
    code: t,
    encode: e
}) => new bx(r, t, e);
class bx {
    constructor(t, e, i) {
        this.name = t, this.code = e, this.encode = i
    }
    digest(t) {
        if (t instanceof Uint8Array) {
            const e = this.encode(t);
            return e instanceof Uint8Array ? Pl(this.code, e) : e.then(i => Pl(this.code, i))
        } else throw Error("Unknown type, must be binary type")
    }
}
const sm = r => async t => new Uint8Array(await crypto.subtle.digest(r, t)),
    _x = nm({
        name: "sha2-256",
        code: 18,
        encode: sm("SHA-256")
    }),
    Ex = nm({
        name: "sha2-512",
        code: 19,
        encode: sm("SHA-512")
    });
var Ax = Object.freeze({
    __proto__: null,
    sha256: _x,
    sha512: Ex
});
const om = 0,
    Sx = "identity",
    am = Zg,
    Ix = r => Pl(om, am(r)),
    Dx = {
        code: om,
        name: Sx,
        encode: am,
        digest: Ix
    };
var xx = Object.freeze({
    __proto__: null,
    identity: Dx
});
new TextEncoder, new TextDecoder;
const zp = { ...wD,
    ..._D,
    ...AD,
    ...ID,
    ...MD,
    ...LD,
    ...$D,
    ...HD,
    ...YD,
    ...ex
};
({ ...Ax,
    ...xx
});

function Mx(r = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(r) : new Uint8Array(r)
}

function um(r, t, e, i) {
    return {
        name: r,
        prefix: t,
        encoder: {
            name: r,
            prefix: t,
            encode: e
        },
        decoder: {
            decode: i
        }
    }
}
const kp = um("utf8", "u", r => "u" + new TextDecoder("utf8").decode(r), r => new TextEncoder().encode(r.substring(1))),
    Jh = um("ascii", "a", r => {
        let t = "a";
        for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
        return t
    }, r => {
        r = r.substring(1);
        const t = Mx(r.length);
        for (let e = 0; e < r.length; e++) t[e] = r.charCodeAt(e);
        return t
    }),
    Cx = {
        utf8: kp,
        "utf-8": kp,
        hex: zp.base16,
        latin1: Jh,
        ascii: Jh,
        binary: Jh,
        ...zp
    };

function Px(r, t = "utf8") {
    const e = Cx[t];
    if (!e) throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r, "utf8") : e.decoder.decode(`${e.prefix}${r}`)
}
const cm = "wc",
    Ox = 2,
    nf = "core",
    Vn = `${cm}@2:${nf}:`,
    Nx = {
        name: nf,
        logger: "error"
    },
    Rx = {
        database: ":memory:"
    },
    Tx = "crypto",
    Hp = "client_ed25519_seed",
    Fx = bt.ONE_DAY,
    Bx = "keychain",
    Ux = "0.3",
    Lx = "messages",
    qx = "0.3",
    jx = bt.SIX_HOURS,
    $x = "publisher",
    hm = "irn",
    zx = "error",
    lm = "wss://relay.walletconnect.com",
    Kp = "wss://relay.walletconnect.org",
    kx = "relayer",
    zr = {
        message: "relayer_message",
        message_ack: "relayer_message_ack",
        connect: "relayer_connect",
        disconnect: "relayer_disconnect",
        error: "relayer_error",
        connection_stalled: "relayer_connection_stalled",
        transport_closed: "relayer_transport_closed",
        publish: "relayer_publish"
    },
    Hx = "_subscription",
    wi = {
        payload: "payload",
        connect: "connect",
        disconnect: "disconnect",
        error: "error"
    },
    Kx = bt.ONE_SECOND,
    Vx = "2.13.0",
    Gx = 1e4,
    Wx = "0.3",
    Yx = "WALLETCONNECT_CLIENT_ID",
    Qi = {
        created: "subscription_created",
        deleted: "subscription_deleted",
        expired: "subscription_expired",
        disabled: "subscription_disabled",
        sync: "subscription_sync",
        resubscribed: "subscription_resubscribed"
    },
    Qx = "subscription",
    Jx = "0.3",
    Xx = bt.FIVE_SECONDS * 1e3,
    Zx = "pairing",
    t7 = "0.3",
    Ho = {
        wc_pairingDelete: {
            req: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 1e3
            },
            res: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 1001
            }
        },
        wc_pairingPing: {
            req: {
                ttl: bt.THIRTY_SECONDS,
                prompt: !1,
                tag: 1002
            },
            res: {
                ttl: bt.THIRTY_SECONDS,
                prompt: !1,
                tag: 1003
            }
        },
        unregistered_method: {
            req: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 0
            },
            res: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 0
            }
        }
    },
    eo = {
        create: "pairing_create",
        expire: "pairing_expire",
        delete: "pairing_delete",
        ping: "pairing_ping"
    },
    Ni = {
        created: "history_created",
        updated: "history_updated",
        deleted: "history_deleted",
        sync: "history_sync"
    },
    e7 = "history",
    r7 = "0.3",
    i7 = "expirer",
    bi = {
        created: "expirer_created",
        deleted: "expirer_deleted",
        expired: "expirer_expired",
        sync: "expirer_sync"
    },
    n7 = "0.3",
    Xh = "verify-api",
    ro = "https://verify.walletconnect.com",
    Ol = "https://verify.walletconnect.org",
    s7 = [ro, Ol],
    o7 = "echo",
    a7 = "https://echo.walletconnect.com";
class u7 {
    constructor(t, e) {
        this.core = t, this.logger = e, this.keychain = new Map, this.name = Bx, this.version = Ux, this.initialized = !1, this.storagePrefix = Vn, this.init = async () => {
            if (!this.initialized) {
                const i = await this.getKeyChain();
                typeof i < "u" && (this.keychain = i), this.initialized = !0
            }
        }, this.has = i => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, s) => {
            this.isInitialized(), this.keychain.set(i, s), await this.persist()
        }, this.get = i => {
            this.isInitialized();
            const s = this.keychain.get(i);
            if (typeof s > "u") {
                const {
                    message: a
                } = gt("NO_MATCHING_KEY", `${this.name}: ${i}`);
                throw new Error(a)
            }
            return s
        }, this.del = async i => {
            this.isInitialized(), this.keychain.delete(i), await this.persist()
        }, this.core = t, this.logger = Vr(e, this.name)
    }
    get context() {
        return Kr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setKeyChain(t) {
        await this.core.storage.setItem(this.storageKey, K1(t))
    }
    async getKeyChain() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? V1(t) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = gt("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class c7 {
    constructor(t, e, i) {
        this.core = t, this.logger = e, this.name = Tx, this.initialized = !1, this.init = async () => {
            this.initialized || (await this.keychain.init(), this.initialized = !0)
        }, this.hasKeys = s => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
            this.isInitialized();
            const s = await this.getClientSeed(),
                a = Cp(s);
            return Vg(a.publicKey)
        }, this.generateKeyPair = () => {
            this.isInitialized();
            const s = e4();
            return this.setPrivateKey(s.publicKey, s.privateKey)
        }, this.signJWT = async s => {
            this.isInitialized();
            const a = await this.getClientSeed(),
                c = Cp(a),
                f = Il();
            return await RI(f, s, Fx, c)
        }, this.generateSharedKey = (s, a, c) => {
            this.isInitialized();
            const f = this.getPrivateKey(s),
                p = r4(f, a);
            return this.setSymKey(p, c)
        }, this.setSymKey = async (s, a) => {
            this.isInitialized();
            const c = a || Lu(s);
            return await this.keychain.set(c, s), c
        }, this.deleteKeyPair = async s => {
            this.isInitialized(), await this.keychain.del(s)
        }, this.deleteSymKey = async s => {
            this.isInitialized(), await this.keychain.del(s)
        }, this.encode = async (s, a, c) => {
            this.isInitialized();
            const f = Tg(c),
                p = In(a);
            if (up(f)) {
                const x = f.senderPublicKey,
                    D = f.receiverPublicKey;
                s = await this.generateSharedKey(x, D)
            }
            const d = this.getSymKey(s),
                {
                    type: b,
                    senderPublicKey: E
                } = f;
            return n4({
                type: b,
                symKey: d,
                message: p,
                senderPublicKey: E
            })
        }, this.decode = async (s, a, c) => {
            this.isInitialized();
            const f = a4(a, c);
            if (up(f)) {
                const p = f.receiverPublicKey,
                    d = f.senderPublicKey;
                s = await this.generateSharedKey(p, d)
            }
            try {
                const p = this.getSymKey(s),
                    d = s4({
                        symKey: p,
                        encoded: a
                    });
                return pa(d)
            } catch (p) {
                this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(p)
            }
        }, this.getPayloadType = s => {
            const a = Yu(s);
            return fa(a.type)
        }, this.getPayloadSenderPublicKey = s => {
            const a = Yu(s);
            return a.senderPublicKey ? Nr(a.senderPublicKey, Or) : void 0
        }, this.core = t, this.logger = Vr(e, this.name), this.keychain = i || new u7(this.core, this.logger)
    }
    get context() {
        return Kr(this.logger)
    }
    async setPrivateKey(t, e) {
        return await this.keychain.set(t, e), t
    }
    getPrivateKey(t) {
        return this.keychain.get(t)
    }
    async getClientSeed() {
        let t = "";
        try {
            t = this.keychain.get(Hp)
        } catch {
            t = Il(), await this.keychain.set(Hp, t)
        }
        return Px(t, "base16")
    }
    getSymKey(t) {
        return this.keychain.get(t)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = gt("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class h7 extends hI {
    constructor(t, e) {
        super(t, e), this.logger = t, this.core = e, this.messages = new Map, this.name = Lx, this.version = qx, this.initialized = !1, this.storagePrefix = Vn, this.init = async () => {
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const i = await this.getRelayerMessages();
                    typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (i) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i)
                } finally {
                    this.initialized = !0
                }
            }
        }, this.set = async (i, s) => {
            this.isInitialized();
            const a = _s(s);
            let c = this.messages.get(i);
            return typeof c > "u" && (c = {}), typeof c[a] < "u" || (c[a] = s, this.messages.set(i, c), await this.persist()), a
        }, this.get = i => {
            this.isInitialized();
            let s = this.messages.get(i);
            return typeof s > "u" && (s = {}), s
        }, this.has = (i, s) => {
            this.isInitialized();
            const a = this.get(i),
                c = _s(s);
            return typeof a[c] < "u"
        }, this.del = async i => {
            this.isInitialized(), this.messages.delete(i), await this.persist()
        }, this.logger = Vr(t, this.name), this.core = e
    }
    get context() {
        return Kr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setRelayerMessages(t) {
        await this.core.storage.setItem(this.storageKey, K1(t))
    }
    async getRelayerMessages() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? V1(t) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = gt("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class l7 extends lI {
    constructor(t, e) {
        super(t, e), this.relayer = t, this.logger = e, this.events = new Si.EventEmitter, this.name = $x, this.queue = new Map, this.publishTimeout = bt.toMiliseconds(bt.ONE_MINUTE), this.failedPublishTimeout = bt.toMiliseconds(bt.ONE_SECOND), this.needsTransportRestart = !1, this.publish = async (i, s, a) => {
            var c;
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: i,
                    message: s,
                    opts: a
                }
            });
            const f = a ? .ttl || jx,
                p = Dl(a),
                d = a ? .prompt || !1,
                b = a ? .tag || 0,
                E = a ? .id || Es().toString(),
                x = {
                    topic: i,
                    message: s,
                    opts: {
                        ttl: f,
                        relay: p,
                        prompt: d,
                        tag: b,
                        id: E
                    }
                },
                D = `Failed to publish payload, please try again. id:${E} tag:${b}`,
                P = Date.now();
            let Y, G = 1;
            try {
                for (; Y === void 0;) {
                    if (Date.now() - P > this.publishTimeout) throw new Error(D);
                    this.logger.trace({
                        id: E,
                        attempts: G
                    }, `publisher.publish - attempt ${G}`), Y = await await io(this.rpcPublish(i, s, f, p, d, b, E).catch(tt => this.logger.warn(tt)), this.publishTimeout, D), G++, Y || await new Promise(tt => setTimeout(tt, this.failedPublishTimeout))
                }
                this.relayer.events.emit(zr.publish, x), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        id: E,
                        topic: i,
                        message: s,
                        opts: a
                    }
                })
            } catch (tt) {
                if (this.logger.debug("Failed to Publish Payload"), this.logger.error(tt), (c = a ? .internal) != null && c.throwOnFailedPublish) throw tt;
                this.queue.set(E, x)
            }
        }, this.on = (i, s) => {
            this.events.on(i, s)
        }, this.once = (i, s) => {
            this.events.once(i, s)
        }, this.off = (i, s) => {
            this.events.off(i, s)
        }, this.removeListener = (i, s) => {
            this.events.removeListener(i, s)
        }, this.relayer = t, this.logger = Vr(e, this.name), this.registerEventListeners()
    }
    get context() {
        return Kr(this.logger)
    }
    rpcPublish(t, e, i, s, a, c, f) {
        var p, d, b, E;
        const x = {
            method: Wo(s.protocol).publish,
            params: {
                topic: t,
                message: e,
                ttl: i,
                prompt: a,
                tag: c
            },
            id: f
        };
        return Pr((p = x.params) == null ? void 0 : p.prompt) && ((d = x.params) == null || delete d.prompt), Pr((b = x.params) == null ? void 0 : b.tag) && ((E = x.params) == null || delete E.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: x
        }), this.relayer.request(x)
    }
    removeRequestFromQueue(t) {
        this.queue.delete(t)
    }
    checkQueue() {
        this.queue.forEach(async t => {
            const {
                topic: e,
                message: i,
                opts: s
            } = t;
            await this.publish(e, i, s)
        })
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(ga.pulse, () => {
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1, this.relayer.events.emit(zr.connection_stalled);
                return
            }
            this.checkQueue()
        }), this.relayer.on(zr.message_ack, t => {
            this.removeRequestFromQueue(t.id.toString())
        })
    }
}
class f7 {
    constructor() {
        this.map = new Map, this.set = (t, e) => {
            const i = this.get(t);
            this.exists(t, e) || this.map.set(t, [...i, e])
        }, this.get = t => this.map.get(t) || [], this.exists = (t, e) => this.get(t).includes(e), this.delete = (t, e) => {
            if (typeof e > "u") {
                this.map.delete(t);
                return
            }
            if (!this.map.has(t)) return;
            const i = this.get(t);
            if (!this.exists(t, e)) return;
            const s = i.filter(a => a !== e);
            if (!s.length) {
                this.map.delete(t);
                return
            }
            this.map.set(t, s)
        }, this.clear = () => {
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var d7 = Object.defineProperty,
    p7 = Object.defineProperties,
    g7 = Object.getOwnPropertyDescriptors,
    Vp = Object.getOwnPropertySymbols,
    m7 = Object.prototype.hasOwnProperty,
    v7 = Object.prototype.propertyIsEnumerable,
    Gp = (r, t, e) => t in r ? d7(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    Ko = (r, t) => {
        for (var e in t || (t = {})) m7.call(t, e) && Gp(r, e, t[e]);
        if (Vp)
            for (var e of Vp(t)) v7.call(t, e) && Gp(r, e, t[e]);
        return r
    },
    Zh = (r, t) => p7(r, g7(t));
class y7 extends pI {
    constructor(t, e) {
        super(t, e), this.relayer = t, this.logger = e, this.subscriptions = new Map, this.topicMap = new f7, this.events = new Si.EventEmitter, this.name = Qx, this.version = Jx, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Vn, this.subscribeTimeout = bt.toMiliseconds(bt.ONE_MINUTE), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
        }, this.subscribe = async (i, s) => {
            await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: i,
                    opts: s
                }
            });
            try {
                const a = Dl(s),
                    c = {
                        topic: i,
                        relay: a
                    };
                this.pending.set(i, c);
                const f = await this.rpcSubscribe(i, a);
                return typeof f == "string" && (this.onSubscribe(f, c), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: i,
                        opts: s
                    }
                })), f
            } catch (a) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(a), a
            }
        }, this.unsubscribe = async (i, s) => {
            await this.restartToComplete(), this.isInitialized(), typeof s ? .id < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s)
        }, this.isSubscribed = async i => {
            if (this.topics.includes(i)) return !0;
            const s = `${this.pendingSubscriptionWatchLabel}_${i}`;
            return await new Promise((a, c) => {
                const f = new bt.Watch;
                f.start(s);
                const p = setInterval(() => {
                    !this.pending.has(i) && this.topics.includes(i) && (clearInterval(p), f.stop(s), a(!0)), f.elapsed(s) >= Xx && (clearInterval(p), f.stop(s), c(new Error("Subscription resolution timeout")))
                }, this.pollingInterval)
            }).catch(() => !1)
        }, this.on = (i, s) => {
            this.events.on(i, s)
        }, this.once = (i, s) => {
            this.events.once(i, s)
        }, this.off = (i, s) => {
            this.events.off(i, s)
        }, this.removeListener = (i, s) => {
            this.events.removeListener(i, s)
        }, this.start = async () => {
            await this.onConnect()
        }, this.stop = async () => {
            await this.onDisconnect()
        }, this.restart = async () => {
            this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
        }, this.relayer = t, this.logger = Vr(e, this.name), this.clientId = ""
    }
    get context() {
        return Kr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    hasSubscription(t, e) {
        let i = !1;
        try {
            i = this.getSubscription(t).topic === e
        } catch {}
        return i
    }
    onEnable() {
        this.cached = [], this.initialized = !0
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
    }
    async unsubscribeByTopic(t, e) {
        const i = this.topicMap.get(t);
        await Promise.all(i.map(async s => await this.unsubscribeById(t, s, e)))
    }
    async unsubscribeById(t, e, i) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: t,
                id: e,
                opts: i
            }
        });
        try {
            const s = Dl(i);
            await this.rpcUnsubscribe(t, e, s);
            const a = Ne("USER_DISCONNECTED", `${this.name}, ${t}`);
            await this.onUnsubscribe(t, e, a), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: t,
                    id: e,
                    opts: i
                }
            })
        } catch (s) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s
        }
    }
    async rpcSubscribe(t, e) {
        const i = {
            method: Wo(e.protocol).subscribe,
            params: {
                topic: t
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        try {
            return await await io(this.relayer.request(i).catch(s => this.logger.warn(s)), this.subscribeTimeout) ? _s(t + this.clientId) : null
        } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(zr.connection_stalled)
        }
        return null
    }
    async rpcBatchSubscribe(t) {
        if (!t.length) return;
        const e = t[0].relay,
            i = {
                method: Wo(e.protocol).batchSubscribe,
                params: {
                    topics: t.map(s => s.topic)
                }
            };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        try {
            return await await io(this.relayer.request(i).catch(s => this.logger.warn(s)), this.subscribeTimeout)
        } catch {
            this.relayer.events.emit(zr.connection_stalled)
        }
    }
    async rpcBatchFetchMessages(t) {
        if (!t.length) return;
        const e = t[0].relay,
            i = {
                method: Wo(e.protocol).batchFetchMessages,
                params: {
                    topics: t.map(a => a.topic)
                }
            };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        let s;
        try {
            s = await await io(this.relayer.request(i).catch(a => this.logger.warn(a)), this.subscribeTimeout)
        } catch {
            this.relayer.events.emit(zr.connection_stalled)
        }
        return s
    }
    rpcUnsubscribe(t, e, i) {
        const s = {
            method: Wo(i.protocol).unsubscribe,
            params: {
                topic: t,
                id: e
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        }), this.relayer.request(s)
    }
    onSubscribe(t, e) {
        this.setSubscription(t, Zh(Ko({}, e), {
            id: t
        })), this.pending.delete(e.topic)
    }
    onBatchSubscribe(t) {
        t.length && t.forEach(e => {
            this.setSubscription(e.id, Ko({}, e)), this.pending.delete(e.topic)
        })
    }
    async onUnsubscribe(t, e, i) {
        this.events.removeAllListeners(e), this.hasSubscription(e, t) && this.deleteSubscription(e, i), await this.relayer.messages.del(t)
    }
    async setRelayerSubscriptions(t) {
        await this.relayer.core.storage.setItem(this.storageKey, t)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(t, e) {
        this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: t,
            subscription: e
        }), this.addSubscription(t, e)
    }
    addSubscription(t, e) {
        this.subscriptions.set(t, Ko({}, e)), this.topicMap.set(e.topic, t), this.events.emit(Qi.created, e)
    }
    getSubscription(t) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: t
        });
        const e = this.subscriptions.get(t);
        if (!e) {
            const {
                message: i
            } = gt("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(i)
        }
        return e
    }
    deleteSubscription(t, e) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: t,
            reason: e
        });
        const i = this.getSubscription(t);
        this.subscriptions.delete(t), this.topicMap.delete(i.topic, t), this.events.emit(Qi.deleted, Zh(Ko({}, i), {
            reason: e
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(Qi.sync)
    }
    async reset() {
        if (this.cached.length) {
            const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let e = 0; e < t; e++) {
                const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchFetchMessages(i), await this.batchSubscribe(i)
            }
        }
        this.events.emit(Qi.resubscribed)
    }
    async restore() {
        try {
            const t = await this.getRelayerSubscriptions();
            if (typeof t > "u" || !t.length) return;
            if (this.subscriptions.size) {
                const {
                    message: e
                } = gt("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(e)
            }
            this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t)
        }
    }
    async batchSubscribe(t) {
        if (!t.length) return;
        const e = await this.rpcBatchSubscribe(t);
        on(e) && this.onBatchSubscribe(e.map((i, s) => Zh(Ko({}, t[s]), {
            id: i
        })))
    }
    async batchFetchMessages(t) {
        if (!t.length) return;
        this.logger.trace(`Fetching batch messages for ${t.length} subscriptions`);
        const e = await this.rpcBatchFetchMessages(t);
        e && e.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(e.messages))
    }
    async onConnect() {
        await this.restart(), this.onEnable()
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (!this.initialized || !this.relayer.connected) return;
        const t = [];
        this.pending.forEach(e => {
            t.push(e)
        }), await this.batchSubscribe(t), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = [])
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(ga.pulse, async () => {
            await this.checkPending()
        }), this.events.on(Qi.created, async t => {
            const e = Qi.created;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                data: t
            }), await this.persist()
        }), this.events.on(Qi.deleted, async t => {
            const e = Qi.deleted;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                data: t
            }), await this.persist()
        })
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = gt("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise(t => {
            const e = setInterval(() => {
                this.restartInProgress || (clearInterval(e), t())
            }, this.pollingInterval)
        })
    }
}
var w7 = Object.defineProperty,
    Wp = Object.getOwnPropertySymbols,
    b7 = Object.prototype.hasOwnProperty,
    _7 = Object.prototype.propertyIsEnumerable,
    Yp = (r, t, e) => t in r ? w7(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    E7 = (r, t) => {
        for (var e in t || (t = {})) b7.call(t, e) && Yp(r, e, t[e]);
        if (Wp)
            for (var e of Wp(t)) _7.call(t, e) && Yp(r, e, t[e]);
        return r
    };
class A7 extends fI {
    constructor(t) {
        super(t), this.protocol = "wc", this.version = 2, this.events = new Si.EventEmitter, this.name = kx, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.heartBeatTimeout = bt.toMiliseconds(bt.THIRTY_SECONDS + bt.ONE_SECOND), this.request = async e => {
            var i, s;
            this.logger.debug("Publishing Request Payload");
            const a = e.id || Es().toString();
            await this.toEstablishConnection();
            try {
                const c = this.provider.request(e);
                this.requestsInFlight.set(a, {
                    promise: c,
                    request: e
                }), this.logger.trace({
                    id: a,
                    method: e.method,
                    topic: (i = e.params) == null ? void 0 : i.topic
                }, "relayer.request - attempt to publish...");
                const f = await new Promise(async (p, d) => {
                    const b = () => {
                        d(new Error(`relayer.request - publish interrupted, id: ${a}`))
                    };
                    this.provider.on(wi.disconnect, b);
                    const E = await c;
                    this.provider.off(wi.disconnect, b), p(E)
                });
                return this.logger.trace({
                    id: a,
                    method: e.method,
                    topic: (s = e.params) == null ? void 0 : s.topic
                }, "relayer.request - published"), f
            } catch (c) {
                throw this.logger.debug(`Failed to Publish Request: ${a}`), c
            } finally {
                this.requestsInFlight.delete(a)
            }
        }, this.resetPingTimeout = () => {
            if (ea()) try {
                clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
                    var e, i, s;
                    (s = (i = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : i.socket) == null || s.terminate()
                }, this.heartBeatTimeout)
            } catch (e) {
                this.logger.warn(e)
            }
        }, this.onPayloadHandler = e => {
            this.onProviderPayload(e), this.resetPingTimeout()
        }, this.onConnectHandler = () => {
            this.startPingTimeout(), this.events.emit(zr.connect)
        }, this.onDisconnectHandler = () => {
            this.onProviderDisconnect()
        }, this.onProviderErrorHandler = e => {
            this.logger.error(e), this.events.emit(zr.error, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
        }, this.registerProviderListeners = () => {
            this.provider.on(wi.payload, this.onPayloadHandler), this.provider.on(wi.connect, this.onConnectHandler), this.provider.on(wi.disconnect, this.onDisconnectHandler), this.provider.on(wi.error, this.onProviderErrorHandler)
        }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Vr(t.logger, this.name) : ma(lc({
            level: t.logger || zx
        })), this.messages = new h7(this.logger, t.core), this.subscriber = new y7(this, this.logger), this.publisher = new l7(this, this.logger), this.relayUrl = t ? .relayUrl || lm, this.projectId = t.projectId, this.bundleId = VE(), this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Kp}...`), await this.restartTransport(Kp)
        }
        this.initialized = !0, setTimeout(async () => {
            this.subscriber.topics.length === 0 && this.subscriber.pending.size === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
        }, Gx)
    }
    get context() {
        return Kr(this.logger)
    }
    get connected() {
        var t, e, i;
        return ((i = (e = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : e.socket) == null ? void 0 : i.readyState) === 1
    }
    get connecting() {
        var t, e, i;
        return ((i = (e = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : e.socket) == null ? void 0 : i.readyState) === 0
    }
    async publish(t, e, i) {
        this.isInitialized(), await this.publisher.publish(t, e, i), await this.recordMessageEvent({
            topic: t,
            message: e,
            publishedAt: Date.now()
        })
    }
    async subscribe(t, e) {
        var i;
        this.isInitialized();
        let s = ((i = this.subscriber.topicMap.get(t)) == null ? void 0 : i[0]) || "",
            a;
        const c = f => {
            f.topic === t && (this.subscriber.off(Qi.created, c), a())
        };
        return await Promise.all([new Promise(f => {
            a = f, this.subscriber.on(Qi.created, c)
        }), new Promise(async f => {
            s = await this.subscriber.subscribe(t, e) || s, f()
        })]), s
    }
    async unsubscribe(t, e) {
        this.isInitialized(), await this.subscriber.unsubscribe(t, e)
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    async transportDisconnect() {
        if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
            await Promise.all(Array.from(this.requestsInFlight.values()).map(t => t.promise))
        } catch (t) {
            this.logger.warn(t)
        }
        this.hasExperiencedNetworkDisruption || this.connected ? await io(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect()
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, await this.transportDisconnect()
    }
    async transportOpen(t) {
        await this.confirmOnlineStateOrThrow(), t && t !== this.relayUrl && (this.relayUrl = t, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
        try {
            await new Promise(async (e, i) => {
                const s = () => {
                    this.provider.off(wi.disconnect, s), i(new Error("Connection interrupted while trying to subscribe"))
                };
                this.provider.on(wi.disconnect, s), await io(this.provider.connect(), bt.toMiliseconds(bt.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch(a => {
                    i(a)
                }), await this.subscriber.start(), this.hasExperiencedNetworkDisruption = !1, e()
            })
        } catch (e) {
            this.logger.error(e);
            const i = e;
            if (this.hasExperiencedNetworkDisruption = !0, !this.isConnectionStalled(i.message)) throw e
        } finally {
            this.connectionAttemptInProgress = !1
        }
    }
    async restartTransport(t) {
        this.connectionAttemptInProgress || (this.relayUrl = t || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen())
    }
    async confirmOnlineStateOrThrow() {
        if (!await yp()) throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    async handleBatchMessageEvents(t) {
        if (t ? .length === 0) {
            this.logger.trace("Batch message events is empty. Ignoring...");
            return
        }
        const e = t.sort((i, s) => i.publishedAt - s.publishedAt);
        this.logger.trace(`Batch of ${e.length} message events sorted`);
        for (const i of e) try {
            await this.onMessageEvent(i)
        } catch (s) {
            this.logger.warn(s)
        }
        this.logger.trace(`Batch of ${e.length} message events processed`)
    }
    startPingTimeout() {
        var t, e, i, s, a;
        if (ea()) try {
            (e = (t = this.provider) == null ? void 0 : t.connection) != null && e.socket && ((a = (s = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : s.socket) == null || a.once("ping", () => {
                this.resetPingTimeout()
            })), this.resetPingTimeout()
        } catch (c) {
            this.logger.warn(c)
        }
    }
    isConnectionStalled(t) {
        return this.staleConnectionErrors.some(e => t.includes(e))
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const t = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new Dn(new tD(XE({
            sdkVersion: Vx,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: t,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))), this.registerProviderListeners()
    }
    async recordMessageEvent(t) {
        const {
            topic: e,
            message: i
        } = t;
        await this.messages.set(e, i)
    }
    async shouldIgnoreMessageEvent(t) {
        const {
            topic: e,
            message: i
        } = t;
        if (!i || i.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
        if (!await this.subscriber.isSubscribed(e)) return this.logger.debug(`Ignoring message for non-subscribed topic ${e}`), !0;
        const s = this.messages.has(e, i);
        return s && this.logger.debug(`Ignoring duplicate message: ${i}`), s
    }
    async onProviderPayload(t) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: t
            }), rf(t)) {
            if (!t.method.endsWith(Hx)) return;
            const e = t.params,
                {
                    topic: i,
                    message: s,
                    publishedAt: a
                } = e.data,
                c = {
                    topic: i,
                    message: s,
                    publishedAt: a
                };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(E7({
                type: "event",
                event: e.id
            }, c)), this.events.emit(e.id, c), await this.acknowledgePayload(t), await this.onMessageEvent(c)
        } else pc(t) && this.events.emit(zr.message_ack, t)
    }
    async onMessageEvent(t) {
        await this.shouldIgnoreMessageEvent(t) || (this.events.emit(zr.message, t), await this.recordMessageEvent(t))
    }
    async acknowledgePayload(t) {
        const e = fc(t.id, !0);
        await this.provider.connection.send(e)
    }
    unregisterProviderListeners() {
        this.provider.off(wi.payload, this.onPayloadHandler), this.provider.off(wi.connect, this.onConnectHandler), this.provider.off(wi.disconnect, this.onDisconnectHandler), this.provider.off(wi.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout)
    }
    async registerEventListeners() {
        let t = await yp();
        J4(async e => {
            t !== e && (t = e, e ? await this.restartTransport().catch(i => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1))
        })
    }
    async onProviderDisconnect() {
        await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(zr.disconnect), this.connectionAttemptInProgress = !1, !this.transportExplicitlyClosed && setTimeout(async () => {
            await this.transportOpen().catch(t => this.logger.error(t))
        }, bt.toMiliseconds(Kx))
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = gt("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async toEstablishConnection() {
        await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise(t => {
            const e = setInterval(() => {
                this.connected && (clearInterval(e), t())
            }, this.connectionStatusPollingInterval)
        }), await this.transportOpen())
    }
}
var S7 = Object.defineProperty,
    Qp = Object.getOwnPropertySymbols,
    I7 = Object.prototype.hasOwnProperty,
    D7 = Object.prototype.propertyIsEnumerable,
    Jp = (r, t, e) => t in r ? S7(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    Xp = (r, t) => {
        for (var e in t || (t = {})) I7.call(t, e) && Jp(r, e, t[e]);
        if (Qp)
            for (var e of Qp(t)) D7.call(t, e) && Jp(r, e, t[e]);
        return r
    };
class Cs extends dI {
    constructor(t, e, i, s = Vn, a = void 0) {
        super(t, e, i, s), this.core = t, this.logger = e, this.name = i, this.map = new Map, this.version = Wx, this.cached = [], this.initialized = !1, this.storagePrefix = Vn, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(c => {
                this.getKey && c !== null && !Pr(c) ? this.map.set(this.getKey(c), c) : M4(c) ? this.map.set(c.id, c) : C4(c) && this.map.set(c.topic, c)
            }), this.cached = [], this.initialized = !0)
        }, this.set = async (c, f) => {
            this.isInitialized(), this.map.has(c) ? await this.update(c, f) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: c,
                value: f
            }), this.map.set(c, f), await this.persist())
        }, this.get = c => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
            type: "method",
            method: "get",
            key: c
        }), this.getData(c)), this.getAll = c => (this.isInitialized(), c ? this.values.filter(f => Object.keys(c).every(p => rD(f[p], c[p]))) : this.values), this.update = async (c, f) => {
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: c,
                update: f
            });
            const p = Xp(Xp({}, this.getData(c)), f);
            this.map.set(c, p), await this.persist()
        }, this.delete = async (c, f) => {
            this.isInitialized(), this.map.has(c) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: c,
                reason: f
            }), this.map.delete(c), this.addToRecentlyDeleted(c), await this.persist())
        }, this.logger = Vr(e, this.name), this.storagePrefix = s, this.getKey = a
    }
    get context() {
        return Kr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    addToRecentlyDeleted(t) {
        this.recentlyDeleted.push(t), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2)
    }
    async setDataStore(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(t) {
        const e = this.map.get(t);
        if (!e) {
            if (this.recentlyDeleted.includes(t)) {
                const {
                    message: s
                } = gt("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${t}`);
                throw this.logger.error(s), new Error(s)
            }
            const {
                message: i
            } = gt("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.error(i), new Error(i)
        }
        return e
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const t = await this.getDataStore();
            if (typeof t > "u" || !t.length) return;
            if (this.map.size) {
                const {
                    message: e
                } = gt("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), new Error(e)
            }
            this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = gt("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class x7 {
    constructor(t, e) {
        this.core = t, this.logger = e, this.name = Zx, this.version = t7, this.events = new Bl, this.initialized = !1, this.storagePrefix = Vn, this.ignoredPayloadTypes = [Kn], this.registeredMethods = [], this.init = async () => {
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
        }, this.register = ({
            methods: i
        }) => {
            this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...i])]
        }, this.create = async i => {
            this.isInitialized();
            const s = Il(),
                a = await this.core.crypto.setSymKey(s),
                c = dr(bt.FIVE_MINUTES),
                f = {
                    protocol: hm
                },
                p = {
                    topic: a,
                    expiry: c,
                    relay: f,
                    active: !1
                },
                d = y4({
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: a,
                    symKey: s,
                    relay: f,
                    expiryTimestamp: c,
                    methods: i ? .methods
                });
            return this.core.expirer.set(a, c), await this.pairings.set(a, p), await this.core.relayer.subscribe(a), {
                topic: a,
                uri: d
            }
        }, this.pair = async i => {
            this.isInitialized(), this.isValidPair(i);
            const {
                topic: s,
                symKey: a,
                relay: c,
                expiryTimestamp: f,
                methods: p
            } = fp(i.uri);
            let d;
            if (this.pairings.keys.includes(s) && (d = this.pairings.get(s), d.active)) throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
            const b = f || dr(bt.FIVE_MINUTES),
                E = {
                    topic: s,
                    relay: c,
                    expiry: b,
                    active: !1,
                    methods: p
                };
            return this.core.expirer.set(s, b), await this.pairings.set(s, E), i.activatePairing && await this.activate({
                topic: s
            }), this.events.emit(eo.create, E), this.core.crypto.keychain.has(s) || await this.core.crypto.setSymKey(a, s), await this.core.relayer.subscribe(s, {
                relay: c
            }), E
        }, this.activate = async ({
            topic: i
        }) => {
            this.isInitialized();
            const s = dr(bt.THIRTY_DAYS);
            this.core.expirer.set(i, s), await this.pairings.update(i, {
                active: !0,
                expiry: s
            })
        }, this.ping = async i => {
            this.isInitialized(), await this.isValidPing(i);
            const {
                topic: s
            } = i;
            if (this.pairings.keys.includes(s)) {
                const a = await this.sendRequest(s, "wc_pairingPing", {}),
                    {
                        done: c,
                        resolve: f,
                        reject: p
                    } = ws();
                this.events.once(de("pairing_ping", a), ({
                    error: d
                }) => {
                    d ? p(d) : f()
                }), await c()
            }
        }, this.updateExpiry = async ({
            topic: i,
            expiry: s
        }) => {
            this.isInitialized(), await this.pairings.update(i, {
                expiry: s
            })
        }, this.updateMetadata = async ({
            topic: i,
            metadata: s
        }) => {
            this.isInitialized(), await this.pairings.update(i, {
                peerMetadata: s
            })
        }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async i => {
            this.isInitialized(), await this.isValidDisconnect(i);
            const {
                topic: s
            } = i;
            this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", Ne("USER_DISCONNECTED")), await this.deletePairing(s))
        }, this.sendRequest = async (i, s, a) => {
            const c = oo(s, a),
                f = await this.core.crypto.encode(i, c),
                p = Ho[s].req;
            return this.core.history.set(i, c), this.core.relayer.publish(i, f, p), c.id
        }, this.sendResult = async (i, s, a) => {
            const c = fc(i, a),
                f = await this.core.crypto.encode(s, c),
                p = await this.core.history.get(s, i),
                d = Ho[p.request.method].res;
            await this.core.relayer.publish(s, f, d), await this.core.history.resolve(c)
        }, this.sendError = async (i, s, a) => {
            const c = dc(i, a),
                f = await this.core.crypto.encode(s, c),
                p = await this.core.history.get(s, i),
                d = Ho[p.request.method] ? Ho[p.request.method].res : Ho.unregistered_method.res;
            await this.core.relayer.publish(s, f, d), await this.core.history.resolve(c)
        }, this.deletePairing = async (i, s) => {
            await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, Ne("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), s ? Promise.resolve() : this.core.expirer.del(i)])
        }, this.cleanup = async () => {
            const i = this.pairings.getAll().filter(s => $n(s.expiry));
            await Promise.all(i.map(s => this.deletePairing(s.topic)))
        }, this.onRelayEventRequest = i => {
            const {
                topic: s,
                payload: a
            } = i;
            switch (a.method) {
                case "wc_pairingPing":
                    return this.onPairingPingRequest(s, a);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(s, a);
                default:
                    return this.onUnknownRpcMethodRequest(s, a)
            }
        }, this.onRelayEventResponse = async i => {
            const {
                topic: s,
                payload: a
            } = i, c = (await this.core.history.get(s, a.id)).request.method;
            switch (c) {
                case "wc_pairingPing":
                    return this.onPairingPingResponse(s, a);
                default:
                    return this.onUnknownRpcMethodResponse(c)
            }
        }, this.onPairingPingRequest = async (i, s) => {
            const {
                id: a
            } = s;
            try {
                this.isValidPing({
                    topic: i
                }), await this.sendResult(a, i, !0), this.events.emit(eo.ping, {
                    id: a,
                    topic: i
                })
            } catch (c) {
                await this.sendError(a, i, c), this.logger.error(c)
            }
        }, this.onPairingPingResponse = (i, s) => {
            const {
                id: a
            } = s;
            setTimeout(() => {
                Yi(s) ? this.events.emit(de("pairing_ping", a), {}) : Ei(s) && this.events.emit(de("pairing_ping", a), {
                    error: s.error
                })
            }, 500)
        }, this.onPairingDeleteRequest = async (i, s) => {
            const {
                id: a
            } = s;
            try {
                this.isValidDisconnect({
                    topic: i
                }), await this.deletePairing(i), this.events.emit(eo.delete, {
                    id: a,
                    topic: i
                })
            } catch (c) {
                await this.sendError(a, i, c), this.logger.error(c)
            }
        }, this.onUnknownRpcMethodRequest = async (i, s) => {
            const {
                id: a,
                method: c
            } = s;
            try {
                if (this.registeredMethods.includes(c)) return;
                const f = Ne("WC_METHOD_UNSUPPORTED", c);
                await this.sendError(a, i, f), this.logger.error(f)
            } catch (f) {
                await this.sendError(a, i, f), this.logger.error(f)
            }
        }, this.onUnknownRpcMethodResponse = i => {
            this.registeredMethods.includes(i) || this.logger.error(Ne("WC_METHOD_UNSUPPORTED", i))
        }, this.isValidPair = i => {
            var s;
            if (!$r(i)) {
                const {
                    message: c
                } = gt("MISSING_OR_INVALID", `pair() params: ${i}`);
                throw new Error(c)
            }
            if (!x4(i.uri)) {
                const {
                    message: c
                } = gt("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
                throw new Error(c)
            }
            const a = fp(i.uri);
            if (!((s = a ? .relay) != null && s.protocol)) {
                const {
                    message: c
                } = gt("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw new Error(c)
            }
            if (!(a != null && a.symKey)) {
                const {
                    message: c
                } = gt("MISSING_OR_INVALID", "pair() uri#symKey");
                throw new Error(c)
            }
            if (a != null && a.expiryTimestamp && bt.toMiliseconds(a ? .expiryTimestamp) < Date.now()) {
                const {
                    message: c
                } = gt("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(c)
            }
        }, this.isValidPing = async i => {
            if (!$r(i)) {
                const {
                    message: a
                } = gt("MISSING_OR_INVALID", `ping() params: ${i}`);
                throw new Error(a)
            }
            const {
                topic: s
            } = i;
            await this.isValidPairingTopic(s)
        }, this.isValidDisconnect = async i => {
            if (!$r(i)) {
                const {
                    message: a
                } = gt("MISSING_OR_INVALID", `disconnect() params: ${i}`);
                throw new Error(a)
            }
            const {
                topic: s
            } = i;
            await this.isValidPairingTopic(s)
        }, this.isValidPairingTopic = async i => {
            if (!Ze(i, !1)) {
                const {
                    message: s
                } = gt("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
                throw new Error(s)
            }
            if (!this.pairings.keys.includes(i)) {
                const {
                    message: s
                } = gt("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
                throw new Error(s)
            }
            if ($n(this.pairings.get(i).expiry)) {
                await this.deletePairing(i);
                const {
                    message: s
                } = gt("EXPIRED", `pairing topic: ${i}`);
                throw new Error(s)
            }
        }, this.core = t, this.logger = Vr(e, this.name), this.pairings = new Cs(this.core, this.logger, this.name, this.storagePrefix)
    }
    get context() {
        return Kr(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = gt("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(zr.message, async t => {
            const {
                topic: e,
                message: i
            } = t;
            if (!this.pairings.keys.includes(e) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) return;
            const s = await this.core.crypto.decode(e, i);
            try {
                rf(s) ? (this.core.history.set(e, s), this.onRelayEventRequest({
                    topic: e,
                    payload: s
                })) : pc(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({
                    topic: e,
                    payload: s
                }), this.core.history.delete(e, s.id))
            } catch (a) {
                this.logger.error(a)
            }
        })
    }
    registerExpirerEvents() {
        this.core.expirer.on(bi.expired, async t => {
            const {
                topic: e
            } = W1(t.target);
            e && this.pairings.keys.includes(e) && (await this.deletePairing(e, !0), this.events.emit(eo.expire, {
                topic: e
            }))
        })
    }
}
class M7 extends cI {
    constructor(t, e) {
        super(t, e), this.core = t, this.logger = e, this.records = new Map, this.events = new Si.EventEmitter, this.name = e7, this.version = r7, this.cached = [], this.initialized = !1, this.storagePrefix = Vn, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(i => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.set = (i, s, a) => {
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                    type: "method",
                    method: "set",
                    topic: i,
                    request: s,
                    chainId: a
                }), this.records.has(s.id)) return;
            const c = {
                id: s.id,
                topic: i,
                request: {
                    method: s.method,
                    params: s.params || null
                },
                chainId: a,
                expiry: dr(bt.THIRTY_DAYS)
            };
            this.records.set(c.id, c), this.persist(), this.events.emit(Ni.created, c)
        }, this.resolve = async i => {
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                    type: "method",
                    method: "update",
                    response: i
                }), !this.records.has(i.id)) return;
            const s = await this.getRecord(i.id);
            typeof s.response > "u" && (s.response = Ei(i) ? {
                error: i.error
            } : {
                result: i.result
            }, this.records.set(s.id, s), this.persist(), this.events.emit(Ni.updated, s))
        }, this.get = async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
            type: "method",
            method: "get",
            topic: i,
            id: s
        }), await this.getRecord(s)), this.delete = (i, s) => {
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: s
            }), this.values.forEach(a => {
                if (a.topic === i) {
                    if (typeof s < "u" && a.id !== s) return;
                    this.records.delete(a.id), this.events.emit(Ni.deleted, a)
                }
            }), this.persist()
        }, this.exists = async (i, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : !1), this.on = (i, s) => {
            this.events.on(i, s)
        }, this.once = (i, s) => {
            this.events.once(i, s)
        }, this.off = (i, s) => {
            this.events.off(i, s)
        }, this.removeListener = (i, s) => {
            this.events.removeListener(i, s)
        }, this.logger = Vr(e, this.name)
    }
    get context() {
        return Kr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const t = [];
        return this.values.forEach(e => {
            if (typeof e.response < "u") return;
            const i = {
                topic: e.topic,
                request: oo(e.request.method, e.request.params, e.id),
                chainId: e.chainId
            };
            return t.push(i)
        }), t
    }
    async setJsonRpcRecords(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(t) {
        this.isInitialized();
        const e = this.records.get(t);
        if (!e) {
            const {
                message: i
            } = gt("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(i)
        }
        return e
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(Ni.sync)
    }
    async restore() {
        try {
            const t = await this.getJsonRpcRecords();
            if (typeof t > "u" || !t.length) return;
            if (this.records.size) {
                const {
                    message: e
                } = gt("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), new Error(e)
            }
            this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
        }
    }
    registerEventListeners() {
        this.events.on(Ni.created, t => {
            const e = Ni.created;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                record: t
            })
        }), this.events.on(Ni.updated, t => {
            const e = Ni.updated;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                record: t
            })
        }), this.events.on(Ni.deleted, t => {
            const e = Ni.deleted;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                record: t
            })
        }), this.core.heartbeat.on(ga.pulse, () => {
            this.cleanup()
        })
    }
    cleanup() {
        try {
            this.isInitialized();
            let t = !1;
            this.records.forEach(e => {
                bt.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.records.delete(e.id), this.events.emit(Ni.deleted, e, !1), t = !0)
            }), t && this.persist()
        } catch (t) {
            this.logger.warn(t)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = gt("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class C7 extends gI {
    constructor(t, e) {
        super(t, e), this.core = t, this.logger = e, this.expirations = new Map, this.events = new Si.EventEmitter, this.name = i7, this.version = n7, this.cached = [], this.initialized = !1, this.storagePrefix = Vn, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(i => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.has = i => {
            try {
                const s = this.formatTarget(i);
                return typeof this.getExpiration(s) < "u"
            } catch {
                return !1
            }
        }, this.set = (i, s) => {
            this.isInitialized();
            const a = this.formatTarget(i),
                c = {
                    target: a,
                    expiry: s
                };
            this.expirations.set(a, c), this.checkExpiry(a, c), this.events.emit(bi.created, {
                target: a,
                expiration: c
            })
        }, this.get = i => {
            this.isInitialized();
            const s = this.formatTarget(i);
            return this.getExpiration(s)
        }, this.del = i => {
            if (this.isInitialized(), this.has(i)) {
                const s = this.formatTarget(i),
                    a = this.getExpiration(s);
                this.expirations.delete(s), this.events.emit(bi.deleted, {
                    target: s,
                    expiration: a
                })
            }
        }, this.on = (i, s) => {
            this.events.on(i, s)
        }, this.once = (i, s) => {
            this.events.once(i, s)
        }, this.off = (i, s) => {
            this.events.off(i, s)
        }, this.removeListener = (i, s) => {
            this.events.removeListener(i, s)
        }, this.logger = Vr(e, this.name)
    }
    get context() {
        return Kr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(t) {
        if (typeof t == "string") return ZE(t);
        if (typeof t == "number") return t5(t);
        const {
            message: e
        } = gt("UNKNOWN_TYPE", `Target type: ${typeof t}`);
        throw new Error(e)
    }
    async setExpirations(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit(bi.sync)
    }
    async restore() {
        try {
            const t = await this.getExpirations();
            if (typeof t > "u" || !t.length) return;
            if (this.expirations.size) {
                const {
                    message: e
                } = gt("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), new Error(e)
            }
            this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t)
        }
    }
    getExpiration(t) {
        const e = this.expirations.get(t);
        if (!e) {
            const {
                message: i
            } = gt("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.warn(i), new Error(i)
        }
        return e
    }
    checkExpiry(t, e) {
        const {
            expiry: i
        } = e;
        bt.toMiliseconds(i) - Date.now() <= 0 && this.expire(t, e)
    }
    expire(t, e) {
        this.expirations.delete(t), this.events.emit(bi.expired, {
            target: t,
            expiration: e
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((t, e) => this.checkExpiry(e, t))
    }
    registerEventListeners() {
        this.core.heartbeat.on(ga.pulse, () => this.checkExpirations()), this.events.on(bi.created, t => {
            const e = bi.created;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                data: t
            }), this.persist()
        }), this.events.on(bi.expired, t => {
            const e = bi.expired;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                data: t
            }), this.persist()
        }), this.events.on(bi.deleted, t => {
            const e = bi.deleted;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                data: t
            }), this.persist()
        })
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = gt("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class P7 extends mI {
    constructor(t, e) {
        super(t, e), this.projectId = t, this.logger = e, this.name = Xh, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async i => {
            if (this.verifyDisabled || lo() || !fo()) return;
            const s = this.getVerifyUrl(i ? .verifyUrl);
            this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
            try {
                await this.createIframe()
            } catch (a) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(a)
            }
            if (!this.initialized) {
                this.removeIframe(), this.verifyUrl = Ol;
                try {
                    await this.createIframe()
                } catch (a) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(a), this.verifyDisabled = !0
                }
            }
        }, this.register = async i => {
            this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init())
        }, this.resolve = async i => {
            if (this.isDevEnv) return "";
            const s = this.getVerifyUrl(i ? .verifyUrl);
            let a;
            try {
                a = await this.fetchAttestation(i.attestationId, s)
            } catch (c) {
                this.logger.info(`failed to resolve attestation: ${i.attestationId} from url: ${s}`), this.logger.info(c), a = await this.fetchAttestation(i.attestationId, Ol)
            }
            return a
        }, this.fetchAttestation = async (i, s) => {
            this.logger.info(`resolving attestation: ${i} from url: ${s}`);
            const a = this.startAbortTimer(bt.ONE_SECOND * 2),
                c = await fetch(`${s}/attestation/${i}`, {
                    signal: this.abortController.signal
                });
            return clearTimeout(a), c.status === 200 ? await c.json() : void 0
        }, this.addToQueue = i => {
            this.queue.push(i)
        }, this.processQueue = () => {
            this.queue.length !== 0 && (this.queue.forEach(i => this.sendPost(i)), this.queue = [])
        }, this.sendPost = i => {
            var s;
            try {
                if (!this.iframe) return;
                (s = this.iframe.contentWindow) == null || s.postMessage(i, "*"), this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`)
            } catch {}
        }, this.createIframe = async () => {
            let i;
            const s = a => {
                a.data === "verify_ready" && (this.onInit(), window.removeEventListener("message", s), i())
            };
            await Promise.race([new Promise(a => {
                const c = document.getElementById(Xh);
                if (c) return this.iframe = c, this.onInit(), a();
                window.addEventListener("message", s);
                const f = document.createElement("iframe");
                f.id = Xh, f.src = `${this.verifyUrl}/${this.projectId}`, f.style.display = "none", document.body.append(f), this.iframe = f, i = a
            }), new Promise((a, c) => setTimeout(() => {
                window.removeEventListener("message", s), c("verify iframe load timeout")
            }, bt.toMiliseconds(bt.FIVE_SECONDS)))])
        }, this.onInit = () => {
            this.initialized = !0, this.processQueue()
        }, this.removeIframe = () => {
            this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
        }, this.getVerifyUrl = i => {
            let s = i || ro;
            return s7.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${ro}`), s = ro), s
        }, this.logger = Vr(e, this.name), this.verifyUrl = ro, this.abortController = new AbortController, this.isDevEnv = ea() && {}.IS_VITEST
    }
    get context() {
        return Kr(this.logger)
    }
    startAbortTimer(t) {
        return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), bt.toMiliseconds(t))
    }
}
let O7 = class extends vI {
    constructor(t, e) {
        super(t, e), this.projectId = t, this.logger = e, this.context = o7, this.registerDeviceToken = async i => {
            const {
                clientId: s,
                token: a,
                notificationType: c,
                enableEncrypted: f = !1
            } = i, p = `${a7}/${this.projectId}/clients`;
            await oD(p, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: s,
                    type: c,
                    token: a,
                    always_raw: f
                })
            })
        }, this.logger = Vr(e, this.context)
    }
};
var N7 = Object.defineProperty,
    Zp = Object.getOwnPropertySymbols,
    R7 = Object.prototype.hasOwnProperty,
    T7 = Object.prototype.propertyIsEnumerable,
    t1 = (r, t, e) => t in r ? N7(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    e1 = (r, t) => {
        for (var e in t || (t = {})) R7.call(t, e) && t1(r, e, t[e]);
        if (Zp)
            for (var e of Zp(t)) T7.call(t, e) && t1(r, e, t[e]);
        return r
    };
let F7 = class fm extends uI {
    constructor(t) {
        var e;
        super(t), this.protocol = cm, this.version = Ox, this.name = nf, this.events = new Si.EventEmitter, this.initialized = !1, this.on = (c, f) => this.events.on(c, f), this.once = (c, f) => this.events.once(c, f), this.off = (c, f) => this.events.off(c, f), this.removeListener = (c, f) => this.events.removeListener(c, f), this.projectId = t ? .projectId, this.relayUrl = t ? .relayUrl || lm, this.customStoragePrefix = t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
        const i = lc({
                level: typeof t ? .logger == "string" && t.logger ? t.logger : Nx.logger
            }),
            {
                logger: s,
                chunkLoggerController: a
            } = aI({
                opts: i,
                maxSizeInBytes: t ? .maxLogBlobSizeInBytes,
                loggerOverride: t ? .logger
            });
        this.logChunkController = a, (e = this.logChunkController) != null && e.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
            var c, f;
            (c = this.logChunkController) != null && c.downloadLogsBlobInBrowser && ((f = this.logChunkController) == null || f.downloadLogsBlobInBrowser({
                clientId: await this.crypto.getClientId()
            }))
        }), this.logger = Vr(s, this.name), this.heartbeat = new RS, this.crypto = new c7(this, this.logger, t ? .keychain), this.history = new M7(this, this.logger), this.expirer = new C7(this, this.logger), this.storage = t != null && t.storage ? t.storage : new OS(e1(e1({}, Rx), t ? .storageOptions)), this.relayer = new A7({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }), this.pairing = new x7(this, this.logger), this.verify = new P7(this.projectId || "", this.logger), this.echoClient = new O7(this.projectId || "", this.logger)
    }
    static async init(t) {
        const e = new fm(t);
        await e.initialize();
        const i = await e.crypto.getClientId();
        return await e.storage.setItem(Yx, i), e
    }
    get context() {
        return Kr(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async getLogsBlob() {
        var t;
        return (t = this.logChunkController) == null ? void 0 : t.logsToBlob({
            clientId: await this.crypto.getClientId()
        })
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
        } catch (t) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t
        }
    }
};
const B7 = F7,
    dm = "wc",
    pm = 2,
    gm = "client",
    sf = `${dm}@${pm}:${gm}:`,
    tl = {
        name: gm,
        logger: "error",
        controller: !1,
        relayUrl: "wss://relay.walletconnect.com"
    },
    r1 = "WALLETCONNECT_DEEPLINK_CHOICE",
    U7 = "proposal",
    mm = "Proposal expired",
    L7 = "session",
    Js = bt.SEVEN_DAYS,
    q7 = "engine",
    Zr = {
        wc_sessionPropose: {
            req: {
                ttl: bt.FIVE_MINUTES,
                prompt: !0,
                tag: 1100
            },
            res: {
                ttl: bt.FIVE_MINUTES,
                prompt: !1,
                tag: 1101
            }
        },
        wc_sessionSettle: {
            req: {
                ttl: bt.FIVE_MINUTES,
                prompt: !1,
                tag: 1102
            },
            res: {
                ttl: bt.FIVE_MINUTES,
                prompt: !1,
                tag: 1103
            }
        },
        wc_sessionUpdate: {
            req: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 1104
            },
            res: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 1105
            }
        },
        wc_sessionExtend: {
            req: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 1106
            },
            res: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 1107
            }
        },
        wc_sessionRequest: {
            req: {
                ttl: bt.FIVE_MINUTES,
                prompt: !0,
                tag: 1108
            },
            res: {
                ttl: bt.FIVE_MINUTES,
                prompt: !1,
                tag: 1109
            }
        },
        wc_sessionEvent: {
            req: {
                ttl: bt.FIVE_MINUTES,
                prompt: !0,
                tag: 1110
            },
            res: {
                ttl: bt.FIVE_MINUTES,
                prompt: !1,
                tag: 1111
            }
        },
        wc_sessionDelete: {
            req: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 1112
            },
            res: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 1113
            }
        },
        wc_sessionPing: {
            req: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 1114
            },
            res: {
                ttl: bt.ONE_DAY,
                prompt: !1,
                tag: 1115
            }
        },
        wc_sessionAuthenticate: {
            req: {
                ttl: bt.ONE_HOUR,
                prompt: !0,
                tag: 1116
            },
            res: {
                ttl: bt.ONE_HOUR,
                prompt: !1,
                tag: 1117
            }
        }
    },
    el = {
        min: bt.FIVE_MINUTES,
        max: bt.SEVEN_DAYS
    },
    _n = {
        idle: "IDLE",
        active: "ACTIVE"
    },
    j7 = "request",
    $7 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"],
    z7 = "wc",
    k7 = "auth",
    H7 = "authKeys",
    K7 = "pairingTopics",
    V7 = "requests",
    mc = `${z7}@${1.5}:${k7}:`,
    $u = `${mc}:PUB_KEY`;
var G7 = Object.defineProperty,
    W7 = Object.defineProperties,
    Y7 = Object.getOwnPropertyDescriptors,
    i1 = Object.getOwnPropertySymbols,
    Q7 = Object.prototype.hasOwnProperty,
    J7 = Object.prototype.propertyIsEnumerable,
    n1 = (r, t, e) => t in r ? G7(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    nr = (r, t) => {
        for (var e in t || (t = {})) Q7.call(t, e) && n1(r, e, t[e]);
        if (i1)
            for (var e of i1(t)) J7.call(t, e) && n1(r, e, t[e]);
        return r
    },
    ys = (r, t) => W7(r, Y7(t));
class X7 extends wI {
    constructor(t) {
        super(t), this.name = q7, this.events = new Bl, this.initialized = !1, this.requestQueue = {
            state: _n.idle,
            queue: []
        }, this.sessionRequestQueue = {
            state: _n.idle,
            queue: []
        }, this.requestQueueDelay = bt.ONE_SECOND, this.expectedPairingMethodMap = new Map, this.recentlyDeletedMap = new Map, this.recentlyDeletedLimit = 200, this.init = async () => {
            this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                methods: Object.keys(Zr)
            }), this.initialized = !0, setTimeout(() => {
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
            }, bt.toMiliseconds(this.requestQueueDelay)))
        }, this.connect = async e => {
            await this.isInitialized();
            const i = ys(nr({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {}
            });
            await this.isValidConnect(i);
            const {
                pairingTopic: s,
                requiredNamespaces: a,
                optionalNamespaces: c,
                sessionProperties: f,
                relays: p
            } = i;
            let d = s,
                b, E = !1;
            try {
                d && (E = this.client.core.pairing.pairings.get(d).active)
            } catch (L) {
                throw this.client.logger.error(`connect() -> pairing.get(${d}) failed`), L
            }
            if (!d || !E) {
                const {
                    topic: L,
                    uri: $
                } = await this.client.core.pairing.create();
                d = L, b = $
            }
            if (!d) {
                const {
                    message: L
                } = gt("NO_MATCHING_KEY", `connect() pairing topic: ${d}`);
                throw new Error(L)
            }
            const x = await this.client.core.crypto.generateKeyPair(),
                D = Zr.wc_sessionPropose.req.ttl || bt.FIVE_MINUTES,
                P = dr(D),
                Y = nr({
                    requiredNamespaces: a,
                    optionalNamespaces: c,
                    relays: p ? ? [{
                        protocol: hm
                    }],
                    proposer: {
                        publicKey: x,
                        metadata: this.client.metadata
                    },
                    expiryTimestamp: P
                }, f && {
                    sessionProperties: f
                }),
                {
                    reject: G,
                    resolve: tt,
                    done: K
                } = ws(D, mm);
            this.events.once(de("session_connect"), async ({
                error: L,
                session: $
            }) => {
                if (L) G(L);
                else if ($) {
                    $.self.publicKey = x;
                    const z = ys(nr({}, $), {
                        requiredNamespaces: Y.requiredNamespaces,
                        optionalNamespaces: Y.optionalNamespaces
                    });
                    await this.client.session.set($.topic, z), await this.setExpiry($.topic, $.expiry), d && await this.client.core.pairing.updateMetadata({
                        topic: d,
                        metadata: $.peer.metadata
                    }), tt(z)
                }
            });
            const V = await this.sendRequest({
                topic: d,
                method: "wc_sessionPropose",
                params: Y,
                throwOnFailedPublish: !0
            });
            return await this.setProposal(V, nr({
                id: V
            }, Y)), {
                uri: b,
                approval: K
            }
        }, this.pair = async e => {
            await this.isInitialized();
            try {
                return await this.client.core.pairing.pair(e)
            } catch (i) {
                throw this.client.logger.error("pair() failed"), i
            }
        }, this.approve = async e => {
            await this.isInitialized();
            try {
                await this.isValidApprove(e)
            } catch (K) {
                throw this.client.logger.error("approve() -> isValidApprove() failed"), K
            }
            const {
                id: i,
                relayProtocol: s,
                namespaces: a,
                sessionProperties: c,
                sessionConfig: f
            } = e;
            let p;
            try {
                p = this.client.proposal.get(i)
            } catch (K) {
                throw this.client.logger.error(`approve() -> proposal.get(${i}) failed`), K
            }
            let {
                pairingTopic: d,
                proposer: b,
                requiredNamespaces: E,
                optionalNamespaces: x
            } = p;
            d = d || "";
            const D = await this.client.core.crypto.generateKeyPair(),
                P = b.publicKey,
                Y = await this.client.core.crypto.generateSharedKey(D, P),
                G = nr(nr({
                    relay: {
                        protocol: s ? ? "irn"
                    },
                    namespaces: a,
                    pairingTopic: d,
                    controller: {
                        publicKey: D,
                        metadata: this.client.metadata
                    },
                    expiry: dr(Js)
                }, c && {
                    sessionProperties: c
                }), f && {
                    sessionConfig: f
                });
            await this.client.core.relayer.subscribe(Y);
            const tt = ys(nr({}, G), {
                topic: Y,
                requiredNamespaces: E,
                optionalNamespaces: x,
                pairingTopic: d,
                acknowledged: !1,
                self: G.controller,
                peer: {
                    publicKey: b.publicKey,
                    metadata: b.metadata
                },
                controller: D
            });
            await this.client.session.set(Y, tt);
            try {
                await this.sendResult({
                    id: i,
                    topic: d,
                    result: {
                        relay: {
                            protocol: s ? ? "irn"
                        },
                        responderPublicKey: D
                    },
                    throwOnFailedPublish: !0
                }), await this.sendRequest({
                    topic: Y,
                    method: "wc_sessionSettle",
                    params: G,
                    throwOnFailedPublish: !0
                })
            } catch (K) {
                throw this.client.logger.error(K), this.client.session.delete(Y, Ne("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(Y), K
            }
            return await this.client.core.pairing.updateMetadata({
                topic: d,
                metadata: b.metadata
            }), await this.client.proposal.delete(i, Ne("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                topic: d
            }), await this.setExpiry(Y, dr(Js)), {
                topic: Y,
                acknowledged: () => new Promise(K => setTimeout(() => K(this.client.session.get(Y)), 500))
            }
        }, this.reject = async e => {
            await this.isInitialized();
            try {
                await this.isValidReject(e)
            } catch (c) {
                throw this.client.logger.error("reject() -> isValidReject() failed"), c
            }
            const {
                id: i,
                reason: s
            } = e;
            let a;
            try {
                a = this.client.proposal.get(i).pairingTopic
            } catch (c) {
                throw this.client.logger.error(`reject() -> proposal.get(${i}) failed`), c
            }
            a && (await this.sendError({
                id: i,
                topic: a,
                error: s
            }), await this.client.proposal.delete(i, Ne("USER_DISCONNECTED")))
        }, this.update = async e => {
            await this.isInitialized();
            try {
                await this.isValidUpdate(e)
            } catch (E) {
                throw this.client.logger.error("update() -> isValidUpdate() failed"), E
            }
            const {
                topic: i,
                namespaces: s
            } = e, {
                done: a,
                resolve: c,
                reject: f
            } = ws(), p = zn(), d = Es().toString(), b = this.client.session.get(i).namespaces;
            return this.events.once(de("session_update", p), ({
                error: E
            }) => {
                E ? f(E) : c()
            }), await this.client.session.update(i, {
                namespaces: s
            }), await this.sendRequest({
                topic: i,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: s
                },
                throwOnFailedPublish: !0,
                clientRpcId: p,
                relayRpcId: d
            }).catch(E => {
                this.client.logger.error(E), this.client.session.update(i, {
                    namespaces: b
                }), f(E)
            }), {
                acknowledged: a
            }
        }, this.extend = async e => {
            await this.isInitialized();
            try {
                await this.isValidExtend(e)
            } catch (p) {
                throw this.client.logger.error("extend() -> isValidExtend() failed"), p
            }
            const {
                topic: i
            } = e, s = zn(), {
                done: a,
                resolve: c,
                reject: f
            } = ws();
            return this.events.once(de("session_extend", s), ({
                error: p
            }) => {
                p ? f(p) : c()
            }), await this.setExpiry(i, dr(Js)), this.sendRequest({
                topic: i,
                method: "wc_sessionExtend",
                params: {},
                clientRpcId: s,
                throwOnFailedPublish: !0
            }).catch(p => {
                f(p)
            }), {
                acknowledged: a
            }
        }, this.request = async e => {
            await this.isInitialized();
            try {
                await this.isValidRequest(e)
            } catch (D) {
                throw this.client.logger.error("request() -> isValidRequest() failed"), D
            }
            const {
                chainId: i,
                request: s,
                topic: a,
                expiry: c = Zr.wc_sessionRequest.req.ttl
            } = e, f = this.client.session.get(a), p = zn(), d = Es().toString(), {
                done: b,
                resolve: E,
                reject: x
            } = ws(c, "Request expired. Please try again.");
            return this.events.once(de("session_request", p), ({
                error: D,
                result: P
            }) => {
                D ? x(D) : E(P)
            }), await Promise.all([new Promise(async D => {
                await this.sendRequest({
                    clientRpcId: p,
                    relayRpcId: d,
                    topic: a,
                    method: "wc_sessionRequest",
                    params: {
                        request: ys(nr({}, s), {
                            expiryTimestamp: dr(c)
                        }),
                        chainId: i
                    },
                    expiry: c,
                    throwOnFailedPublish: !0
                }).catch(P => x(P)), this.client.events.emit("session_request_sent", {
                    topic: a,
                    request: s,
                    chainId: i,
                    id: p
                }), D()
            }), new Promise(async D => {
                var P;
                if (!((P = f.sessionConfig) != null && P.disableDeepLink)) {
                    const Y = await r5(this.client.core.storage, r1);
                    e5({
                        id: p,
                        topic: a,
                        wcDeepLink: Y
                    })
                }
                D()
            }), b()]).then(D => D[2])
        }, this.respond = async e => {
            await this.isInitialized(), await this.isValidRespond(e);
            const {
                topic: i,
                response: s
            } = e, {
                id: a
            } = s;
            Yi(s) ? await this.sendResult({
                id: a,
                topic: i,
                result: s.result,
                throwOnFailedPublish: !0
            }) : Ei(s) && await this.sendError({
                id: a,
                topic: i,
                error: s.error
            }), this.cleanupAfterResponse(e)
        }, this.ping = async e => {
            await this.isInitialized();
            try {
                await this.isValidPing(e)
            } catch (s) {
                throw this.client.logger.error("ping() -> isValidPing() failed"), s
            }
            const {
                topic: i
            } = e;
            if (this.client.session.keys.includes(i)) {
                const s = zn(),
                    a = Es().toString(),
                    {
                        done: c,
                        resolve: f,
                        reject: p
                    } = ws();
                this.events.once(de("session_ping", s), ({
                    error: d
                }) => {
                    d ? p(d) : f()
                }), await Promise.all([this.sendRequest({
                    topic: i,
                    method: "wc_sessionPing",
                    params: {},
                    throwOnFailedPublish: !0,
                    clientRpcId: s,
                    relayRpcId: a
                }), c()])
            } else this.client.core.pairing.pairings.keys.includes(i) && await this.client.core.pairing.ping({
                topic: i
            })
        }, this.emit = async e => {
            await this.isInitialized(), await this.isValidEmit(e);
            const {
                topic: i,
                event: s,
                chainId: a
            } = e, c = Es().toString();
            await this.sendRequest({
                topic: i,
                method: "wc_sessionEvent",
                params: {
                    event: s,
                    chainId: a
                },
                throwOnFailedPublish: !0,
                relayRpcId: c
            })
        }, this.disconnect = async e => {
            await this.isInitialized(), await this.isValidDisconnect(e);
            const {
                topic: i
            } = e;
            if (this.client.session.keys.includes(i)) await this.sendRequest({
                topic: i,
                method: "wc_sessionDelete",
                params: Ne("USER_DISCONNECTED"),
                throwOnFailedPublish: !0
            }), await this.deleteSession({
                topic: i,
                emitEvent: !1
            });
            else if (this.client.core.pairing.pairings.keys.includes(i)) await this.client.core.pairing.disconnect({
                topic: i
            });
            else {
                const {
                    message: s
                } = gt("MISMATCHED_TOPIC", `Session or pairing topic not found: ${i}`);
                throw new Error(s)
            }
        }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(i => I4(i, e))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async e => {
            this.isInitialized(), this.isValidAuthenticate(e);
            const {
                chains: i,
                statement: s = "",
                uri: a,
                domain: c,
                nonce: f,
                type: p,
                exp: d,
                nbf: b,
                methods: E = [],
                expiry: x
            } = e, D = [...e.resources || []], {
                topic: P,
                uri: Y
            } = await this.client.core.pairing.create({
                methods: ["wc_sessionAuthenticate"]
            });
            this.client.logger.info({
                message: "Generated new pairing",
                pairing: {
                    topic: P,
                    uri: Y
                }
            });
            const G = await this.client.core.crypto.generateKeyPair(),
                tt = Lu(G);
            if (await Promise.all([this.client.auth.authKeys.set($u, {
                    responseTopic: tt,
                    publicKey: G
                }), this.client.auth.pairingTopics.set(tt, {
                    topic: tt,
                    pairingTopic: P
                })]), await this.client.core.relayer.subscribe(tt), this.client.logger.info(`sending request to new pairing topic: ${P}`), E.length > 0) {
                const {
                    namespace: l
                } = Nu(i[0]);
                let h = Y8(l, "request", E);
                Uu(D) && (h = J8(h, D.pop())), D.push(h)
            }
            const K = x && x > Zr.wc_sessionAuthenticate.req.ttl ? x : Zr.wc_sessionAuthenticate.req.ttl,
                V = {
                    authPayload: {
                        type: p ? ? "caip122",
                        chains: i,
                        statement: s,
                        aud: a,
                        domain: c,
                        version: "1",
                        nonce: f,
                        iat: new Date().toISOString(),
                        exp: d,
                        nbf: b,
                        resources: D
                    },
                    requester: {
                        publicKey: G,
                        metadata: this.client.metadata
                    },
                    expiryTimestamp: dr(K)
                },
                L = {
                    eip155: {
                        chains: i,
                        methods: [...new Set(["personal_sign", ...E])],
                        events: ["chainChanged", "accountsChanged"]
                    }
                },
                $ = {
                    requiredNamespaces: {},
                    optionalNamespaces: L,
                    relays: [{
                        protocol: "irn"
                    }],
                    proposer: {
                        publicKey: G,
                        metadata: this.client.metadata
                    },
                    expiryTimestamp: dr(Zr.wc_sessionPropose.req.ttl)
                },
                {
                    done: z,
                    resolve: y,
                    reject: T
                } = ws(K, "Request expired"),
                nt = async ({
                    error: l,
                    session: h
                }) => {
                    if (this.events.off(de("session_request", lt), ft), l) T(l);
                    else if (h) {
                        h.self.publicKey = G, await this.client.session.set(h.topic, h), await this.setExpiry(h.topic, h.expiry), P && await this.client.core.pairing.updateMetadata({
                            topic: P,
                            metadata: h.peer.metadata
                        });
                        const w = this.client.session.get(h.topic);
                        await this.deleteProposal(mt), y({
                            session: w
                        })
                    }
                },
                ft = async l => {
                    if (await this.deletePendingAuthRequest(lt, {
                            message: "fulfilled",
                            code: 0
                        }), l.error) {
                        const I = Ne("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                        return l.error.code === I.code ? void 0 : (this.events.off(de("session_connect"), nt), T(l.error.message))
                    }
                    await this.deleteProposal(mt), this.events.off(de("session_connect"), nt);
                    const {
                        cacaos: h,
                        responder: w
                    } = l.result, S = [], M = [];
                    for (const I of h) {
                        await np({
                            cacao: I,
                            projectId: this.client.core.projectId
                        }) || (this.client.logger.error(I, "Signature verification failed"), T(Ne("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                        const {
                            p: g
                        } = I, N = Uu(g.resources), it = [ip(g.iss)], dt = Wu(g.iss);
                        if (N) {
                            const _ = sp(N),
                                Z = op(N);
                            S.push(..._), it.push(...Z)
                        }
                        for (const _ of it) M.push(`${_}:${dt}`)
                    }
                    const O = await this.client.core.crypto.generateSharedKey(G, w.publicKey);
                    let F;
                    S.length > 0 && (F = {
                        topic: O,
                        acknowledged: !0,
                        self: {
                            publicKey: G,
                            metadata: this.client.metadata
                        },
                        peer: w,
                        controller: w.publicKey,
                        expiry: dr(Js),
                        requiredNamespaces: {},
                        optionalNamespaces: {},
                        relay: {
                            protocol: "irn"
                        },
                        pairingTopic: P,
                        namespaces: dp([...new Set(S)], [...new Set(M)])
                    }, await this.client.core.relayer.subscribe(O), await this.client.session.set(O, F), F = this.client.session.get(O)), y({
                        auths: h,
                        session: F
                    })
                },
                lt = zn(),
                mt = zn();
            this.events.once(de("session_connect"), nt), this.events.once(de("session_request", lt), ft);
            try {
                await Promise.all([this.sendRequest({
                    topic: P,
                    method: "wc_sessionAuthenticate",
                    params: V,
                    expiry: e.expiry,
                    throwOnFailedPublish: !0,
                    clientRpcId: lt
                }), this.sendRequest({
                    topic: P,
                    method: "wc_sessionPropose",
                    params: $,
                    expiry: Zr.wc_sessionPropose.req.ttl,
                    throwOnFailedPublish: !0,
                    clientRpcId: mt
                })])
            } catch (l) {
                throw this.events.off(de("session_connect"), nt), this.events.off(de("session_request", lt), ft), l
            }
            return await this.setProposal(mt, nr({
                id: mt
            }, $)), await this.setAuthRequest(lt, {
                request: ys(nr({}, V), {
                    verifyContext: {}
                }),
                pairingTopic: P
            }), {
                uri: Y,
                response: z
            }
        }, this.approveSessionAuthenticate = async e => {
            this.isInitialized();
            const {
                id: i,
                auths: s
            } = e, a = this.getPendingAuthRequest(i);
            if (!a) throw new Error(`Could not find pending auth request with id ${i}`);
            const c = a.requester.publicKey,
                f = await this.client.core.crypto.generateKeyPair(),
                p = Lu(c),
                d = {
                    type: Kn,
                    receiverPublicKey: c,
                    senderPublicKey: f
                },
                b = [],
                E = [];
            for (const P of s) {
                if (!await np({
                        cacao: P,
                        projectId: this.client.core.projectId
                    })) {
                    const V = Ne("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                    throw await this.sendError({
                        id: i,
                        topic: p,
                        error: V,
                        encodeOpts: d
                    }), new Error(V.message)
                }
                const {
                    p: Y
                } = P, G = Uu(Y.resources), tt = [ip(Y.iss)], K = Wu(Y.iss);
                if (G) {
                    const V = sp(G),
                        L = op(G);
                    b.push(...V), tt.push(...L)
                }
                for (const V of tt) E.push(`${V}:${K}`)
            }
            const x = await this.client.core.crypto.generateSharedKey(f, c);
            let D;
            return b ? .length > 0 && (D = {
                topic: x,
                acknowledged: !0,
                self: {
                    publicKey: f,
                    metadata: this.client.metadata
                },
                peer: {
                    publicKey: c,
                    metadata: a.requester.metadata
                },
                controller: c,
                expiry: dr(Js),
                authentication: s,
                requiredNamespaces: {},
                optionalNamespaces: {},
                relay: {
                    protocol: "irn"
                },
                pairingTopic: "",
                namespaces: dp([...new Set(b)], [...new Set(E)])
            }, await this.client.core.relayer.subscribe(x), await this.client.session.set(x, D)), await this.sendResult({
                topic: p,
                id: i,
                result: {
                    cacaos: s,
                    responder: {
                        publicKey: f,
                        metadata: this.client.metadata
                    }
                },
                encodeOpts: d,
                throwOnFailedPublish: !0
            }), await this.client.auth.requests.delete(i, {
                message: "fullfilled",
                code: 0
            }), await this.client.core.pairing.activate({
                topic: a.pairingTopic
            }), {
                session: D
            }
        }, this.rejectSessionAuthenticate = async e => {
            await this.isInitialized();
            const {
                id: i,
                reason: s
            } = e, a = this.getPendingAuthRequest(i);
            if (!a) throw new Error(`Could not find pending auth request with id ${i}`);
            const c = a.requester.publicKey,
                f = await this.client.core.crypto.generateKeyPair(),
                p = Lu(c),
                d = {
                    type: Kn,
                    receiverPublicKey: c,
                    senderPublicKey: f
                };
            await this.sendError({
                id: i,
                topic: p,
                error: s,
                encodeOpts: d
            }), await this.client.auth.requests.delete(i, {
                message: "rejected",
                code: 0
            }), await this.client.proposal.delete(i, Ne("USER_DISCONNECTED"))
        }, this.formatAuthMessage = e => {
            this.isInitialized();
            const {
                request: i,
                iss: s
            } = e;
            return Pg(i, s)
        }, this.cleanupDuplicatePairings = async e => {
            if (e.pairingTopic) try {
                const i = this.client.core.pairing.pairings.get(e.pairingTopic),
                    s = this.client.core.pairing.pairings.getAll().filter(a => {
                        var c, f;
                        return ((c = a.peerMetadata) == null ? void 0 : c.url) && ((f = a.peerMetadata) == null ? void 0 : f.url) === e.peer.metadata.url && a.topic && a.topic !== i.topic
                    });
                if (s.length === 0) return;
                this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map(a => this.client.core.pairing.disconnect({
                    topic: a.topic
                }))), this.client.logger.info("Duplicate pairings clean up finished")
            } catch (i) {
                this.client.logger.error(i)
            }
        }, this.deleteSession = async e => {
            const {
                topic: i,
                expirerHasDeleted: s = !1,
                emitEvent: a = !0,
                id: c = 0
            } = e, {
                self: f
            } = this.client.session.get(i);
            await this.client.core.relayer.unsubscribe(i), await this.client.session.delete(i, Ne("USER_DISCONNECTED")), this.addToRecentlyDeleted(i, "session"), this.client.core.crypto.keychain.has(f.publicKey) && await this.client.core.crypto.deleteKeyPair(f.publicKey), this.client.core.crypto.keychain.has(i) && await this.client.core.crypto.deleteSymKey(i), s || this.client.core.expirer.del(i), this.client.core.storage.removeItem(r1).catch(p => this.client.logger.warn(p)), this.getPendingSessionRequests().forEach(p => {
                p.topic === i && this.deletePendingSessionRequest(p.id, Ne("USER_DISCONNECTED"))
            }), a && this.client.events.emit("session_delete", {
                id: c,
                topic: i
            })
        }, this.deleteProposal = async (e, i) => {
            await Promise.all([this.client.proposal.delete(e, Ne("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "proposal")
        }, this.deletePendingSessionRequest = async (e, i, s = !1) => {
            await Promise.all([this.client.pendingRequest.delete(e, i), s ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(a => a.id !== e), s && (this.sessionRequestQueue.state = _n.idle, this.client.events.emit("session_request_expire", {
                id: e
            }))
        }, this.deletePendingAuthRequest = async (e, i, s = !1) => {
            await Promise.all([this.client.auth.requests.delete(e, i), s ? Promise.resolve() : this.client.core.expirer.del(e)])
        }, this.setExpiry = async (e, i) => {
            this.client.session.keys.includes(e) && (this.client.core.expirer.set(e, i), await this.client.session.update(e, {
                expiry: i
            }))
        }, this.setProposal = async (e, i) => {
            this.client.core.expirer.set(e, dr(Zr.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e, i)
        }, this.setAuthRequest = async (e, i) => {
            const {
                request: s,
                pairingTopic: a
            } = i;
            this.client.core.expirer.set(e, s.expiryTimestamp), await this.client.auth.requests.set(e, {
                authPayload: s.authPayload,
                requester: s.requester,
                expiryTimestamp: s.expiryTimestamp,
                id: e,
                pairingTopic: a,
                verifyContext: s.verifyContext
            })
        }, this.setPendingSessionRequest = async e => {
            const {
                id: i,
                topic: s,
                params: a,
                verifyContext: c
            } = e, f = a.request.expiryTimestamp || dr(Zr.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(i, f), await this.client.pendingRequest.set(i, {
                id: i,
                topic: s,
                params: a,
                verifyContext: c
            })
        }, this.sendRequest = async e => {
            const {
                topic: i,
                method: s,
                params: a,
                expiry: c,
                relayRpcId: f,
                clientRpcId: p,
                throwOnFailedPublish: d
            } = e, b = oo(s, a, p);
            if (fo() && $7.includes(s)) {
                const D = _s(JSON.stringify(b));
                this.client.core.verify.register({
                    attestationId: D
                })
            }
            let E;
            try {
                E = await this.client.core.crypto.encode(i, b)
            } catch (D) {
                throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${i} failed`), D
            }
            const x = Zr[s].req;
            return c && (x.ttl = c), f && (x.id = f), this.client.core.history.set(i, b), d ? (x.internal = ys(nr({}, x.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(i, E, x)) : this.client.core.relayer.publish(i, E, x).catch(D => this.client.logger.error(D)), b.id
        }, this.sendResult = async e => {
            const {
                id: i,
                topic: s,
                result: a,
                throwOnFailedPublish: c,
                encodeOpts: f
            } = e, p = fc(i, a);
            let d;
            try {
                d = await this.client.core.crypto.encode(s, p, f)
            } catch (x) {
                throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), x
            }
            let b;
            try {
                b = await this.client.core.history.get(s, i)
            } catch (x) {
                throw this.client.logger.error(`sendResult() -> history.get(${s}, ${i}) failed`), x
            }
            const E = Zr[b.request.method].res;
            c ? (E.internal = ys(nr({}, E.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(s, d, E)) : this.client.core.relayer.publish(s, d, E).catch(x => this.client.logger.error(x)), await this.client.core.history.resolve(p)
        }, this.sendError = async e => {
            const {
                id: i,
                topic: s,
                error: a,
                encodeOpts: c
            } = e, f = dc(i, a);
            let p;
            try {
                p = await this.client.core.crypto.encode(s, f, c)
            } catch (E) {
                throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), E
            }
            let d;
            try {
                d = await this.client.core.history.get(s, i)
            } catch (E) {
                throw this.client.logger.error(`sendError() -> history.get(${s}, ${i}) failed`), E
            }
            const b = Zr[d.request.method].res;
            this.client.core.relayer.publish(s, p, b), await this.client.core.history.resolve(f)
        }, this.cleanup = async () => {
            const e = [],
                i = [];
            this.client.session.getAll().forEach(s => {
                let a = !1;
                $n(s.expiry) && (a = !0), this.client.core.crypto.keychain.has(s.topic) || (a = !0), a && e.push(s.topic)
            }), this.client.proposal.getAll().forEach(s => {
                $n(s.expiryTimestamp) && i.push(s.id)
            }), await Promise.all([...e.map(s => this.deleteSession({
                topic: s
            })), ...i.map(s => this.deleteProposal(s))])
        }, this.onRelayEventRequest = async e => {
            this.requestQueue.queue.push(e), await this.processRequestsQueue()
        }, this.processRequestsQueue = async () => {
            if (this.requestQueue.state === _n.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                this.requestQueue.state = _n.active;
                const e = this.requestQueue.queue.shift();
                if (e) try {
                    this.processRequest(e), await new Promise(i => setTimeout(i, 300))
                } catch (i) {
                    this.client.logger.warn(i)
                }
            }
            this.requestQueue.state = _n.idle
        }, this.processRequest = e => {
            const {
                topic: i,
                payload: s
            } = e, a = s.method;
            if (!this.shouldIgnorePairingRequest({
                    topic: i,
                    requestMethod: a
                })) switch (a) {
                case "wc_sessionPropose":
                    return this.onSessionProposeRequest(i, s);
                case "wc_sessionSettle":
                    return this.onSessionSettleRequest(i, s);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateRequest(i, s);
                case "wc_sessionExtend":
                    return this.onSessionExtendRequest(i, s);
                case "wc_sessionPing":
                    return this.onSessionPingRequest(i, s);
                case "wc_sessionDelete":
                    return this.onSessionDeleteRequest(i, s);
                case "wc_sessionRequest":
                    return this.onSessionRequest(i, s);
                case "wc_sessionEvent":
                    return this.onSessionEventRequest(i, s);
                case "wc_sessionAuthenticate":
                    return this.onSessionAuthenticateRequest(i, s);
                default:
                    return this.client.logger.info(`Unsupported request method ${a}`)
            }
        }, this.onRelayEventResponse = async e => {
            const {
                topic: i,
                payload: s
            } = e, a = (await this.client.core.history.get(i, s.id)).request.method;
            switch (a) {
                case "wc_sessionPropose":
                    return this.onSessionProposeResponse(i, s);
                case "wc_sessionSettle":
                    return this.onSessionSettleResponse(i, s);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(i, s);
                case "wc_sessionExtend":
                    return this.onSessionExtendResponse(i, s);
                case "wc_sessionPing":
                    return this.onSessionPingResponse(i, s);
                case "wc_sessionRequest":
                    return this.onSessionRequestResponse(i, s);
                case "wc_sessionAuthenticate":
                    return this.onSessionAuthenticateResponse(i, s);
                default:
                    return this.client.logger.info(`Unsupported response method ${a}`)
            }
        }, this.onRelayEventUnknownPayload = e => {
            const {
                topic: i
            } = e, {
                message: s
            } = gt("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(s)
        }, this.shouldIgnorePairingRequest = e => {
            const {
                topic: i,
                requestMethod: s
            } = e, a = this.expectedPairingMethodMap.get(i);
            return !a || a.includes(s) ? !1 : !!(a.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0)
        }, this.onSessionProposeRequest = async (e, i) => {
            const {
                params: s,
                id: a
            } = i;
            try {
                this.isValidConnect(nr({}, i.params));
                const c = s.expiryTimestamp || dr(Zr.wc_sessionPropose.req.ttl),
                    f = nr({
                        id: a,
                        pairingTopic: e,
                        expiryTimestamp: c
                    }, s);
                await this.setProposal(a, f);
                const p = _s(JSON.stringify(i)),
                    d = await this.getVerifyContext(p, f.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: a,
                    params: f,
                    verifyContext: d
                })
            } catch (c) {
                await this.sendError({
                    id: a,
                    topic: e,
                    error: c
                }), this.client.logger.error(c)
            }
        }, this.onSessionProposeResponse = async (e, i) => {
            const {
                id: s
            } = i;
            if (Yi(i)) {
                const {
                    result: a
                } = i;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: a
                });
                const c = this.client.proposal.get(s);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: c
                });
                const f = c.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: f
                });
                const p = a.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: p
                });
                const d = await this.client.core.crypto.generateSharedKey(f, p);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: d
                });
                const b = await this.client.core.relayer.subscribe(d);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: b
                }), await this.client.core.pairing.activate({
                    topic: e
                })
            } else if (Ei(i)) {
                await this.client.proposal.delete(s, Ne("USER_DISCONNECTED"));
                const a = de("session_connect");
                if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners, 954`);
                this.events.emit(de("session_connect"), {
                    error: i.error
                })
            }
        }, this.onSessionSettleRequest = async (e, i) => {
            const {
                id: s,
                params: a
            } = i;
            try {
                this.isValidSessionSettleRequest(a);
                const {
                    relay: c,
                    controller: f,
                    expiry: p,
                    namespaces: d,
                    sessionProperties: b,
                    pairingTopic: E,
                    sessionConfig: x
                } = i.params, D = nr(nr({
                    topic: e,
                    relay: c,
                    expiry: p,
                    namespaces: d,
                    acknowledged: !0,
                    pairingTopic: E,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    controller: f.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: f.publicKey,
                        metadata: f.metadata
                    }
                }, b && {
                    sessionProperties: b
                }), x && {
                    sessionConfig: x
                });
                await this.sendResult({
                    id: i.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0
                });
                const P = de("session_connect");
                if (this.events.listenerCount(P) === 0) throw new Error(`emitting ${P} without any listeners 997`);
                this.events.emit(de("session_connect"), {
                    session: D
                }), this.cleanupDuplicatePairings(D)
            } catch (c) {
                await this.sendError({
                    id: s,
                    topic: e,
                    error: c
                }), this.client.logger.error(c)
            }
        }, this.onSessionSettleResponse = async (e, i) => {
            const {
                id: s
            } = i;
            Yi(i) ? (await this.client.session.update(e, {
                acknowledged: !0
            }), this.events.emit(de("session_approve", s), {})) : Ei(i) && (await this.client.session.delete(e, Ne("USER_DISCONNECTED")), this.events.emit(de("session_approve", s), {
                error: i.error
            }))
        }, this.onSessionUpdateRequest = async (e, i) => {
            const {
                params: s,
                id: a
            } = i;
            try {
                const c = `${e}_session_update`,
                    f = ko.get(c);
                if (f && this.isRequestOutOfSync(f, a)) {
                    this.client.logger.info(`Discarding out of sync request - ${a}`), this.sendError({
                        id: a,
                        topic: e,
                        error: Ne("INVALID_UPDATE_REQUEST")
                    });
                    return
                }
                this.isValidUpdate(nr({
                    topic: e
                }, s));
                try {
                    ko.set(c, a), await this.client.session.update(e, {
                        namespaces: s.namespaces
                    }), await this.sendResult({
                        id: a,
                        topic: e,
                        result: !0,
                        throwOnFailedPublish: !0
                    })
                } catch (p) {
                    throw ko.delete(c), p
                }
                this.client.events.emit("session_update", {
                    id: a,
                    topic: e,
                    params: s
                })
            } catch (c) {
                await this.sendError({
                    id: a,
                    topic: e,
                    error: c
                }), this.client.logger.error(c)
            }
        }, this.isRequestOutOfSync = (e, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, i) => {
            const {
                id: s
            } = i, a = de("session_update", s);
            if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
            Yi(i) ? this.events.emit(de("session_update", s), {}) : Ei(i) && this.events.emit(de("session_update", s), {
                error: i.error
            })
        }, this.onSessionExtendRequest = async (e, i) => {
            const {
                id: s
            } = i;
            try {
                this.isValidExtend({
                    topic: e
                }), await this.setExpiry(e, dr(Js)), await this.sendResult({
                    id: s,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.client.events.emit("session_extend", {
                    id: s,
                    topic: e
                })
            } catch (a) {
                await this.sendError({
                    id: s,
                    topic: e,
                    error: a
                }), this.client.logger.error(a)
            }
        }, this.onSessionExtendResponse = (e, i) => {
            const {
                id: s
            } = i, a = de("session_extend", s);
            if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
            Yi(i) ? this.events.emit(de("session_extend", s), {}) : Ei(i) && this.events.emit(de("session_extend", s), {
                error: i.error
            })
        }, this.onSessionPingRequest = async (e, i) => {
            const {
                id: s
            } = i;
            try {
                this.isValidPing({
                    topic: e
                }), await this.sendResult({
                    id: s,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.client.events.emit("session_ping", {
                    id: s,
                    topic: e
                })
            } catch (a) {
                await this.sendError({
                    id: s,
                    topic: e,
                    error: a
                }), this.client.logger.error(a)
            }
        }, this.onSessionPingResponse = (e, i) => {
            const {
                id: s
            } = i, a = de("session_ping", s);
            if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
            setTimeout(() => {
                Yi(i) ? this.events.emit(de("session_ping", s), {}) : Ei(i) && this.events.emit(de("session_ping", s), {
                    error: i.error
                })
            }, 500)
        }, this.onSessionDeleteRequest = async (e, i) => {
            const {
                id: s
            } = i;
            try {
                this.isValidDisconnect({
                    topic: e,
                    reason: i.params
                }), await Promise.all([new Promise(a => {
                    this.client.core.relayer.once(zr.publish, async () => {
                        a(await this.deleteSession({
                            topic: e,
                            id: s
                        }))
                    })
                }), this.sendResult({
                    id: s,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.cleanupPendingSentRequestsForTopic({
                    topic: e,
                    error: Ne("USER_DISCONNECTED")
                })])
            } catch (a) {
                this.client.logger.error(a)
            }
        }, this.onSessionRequest = async (e, i) => {
            var s;
            const {
                id: a,
                params: c
            } = i;
            try {
                await this.isValidRequest(nr({
                    topic: e
                }, c));
                const f = _s(JSON.stringify(oo("wc_sessionRequest", c, a))),
                    p = this.client.session.get(e),
                    d = await this.getVerifyContext(f, p.peer.metadata),
                    b = {
                        id: a,
                        topic: e,
                        params: c,
                        verifyContext: d
                    };
                await this.setPendingSessionRequest(b), (s = this.client.signConfig) != null && s.disableRequestQueue ? this.emitSessionRequest(b) : (this.addSessionRequestToSessionRequestQueue(b), this.processSessionRequestQueue())
            } catch (f) {
                await this.sendError({
                    id: a,
                    topic: e,
                    error: f
                }), this.client.logger.error(f)
            }
        }, this.onSessionRequestResponse = (e, i) => {
            const {
                id: s
            } = i, a = de("session_request", s);
            if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
            Yi(i) ? this.events.emit(de("session_request", s), {
                result: i.result
            }) : Ei(i) && this.events.emit(de("session_request", s), {
                error: i.error
            })
        }, this.onSessionEventRequest = async (e, i) => {
            const {
                id: s,
                params: a
            } = i;
            try {
                const c = `${e}_session_event_${a.event.name}`,
                    f = ko.get(c);
                if (f && this.isRequestOutOfSync(f, s)) {
                    this.client.logger.info(`Discarding out of sync request - ${s}`);
                    return
                }
                this.isValidEmit(nr({
                    topic: e
                }, a)), this.client.events.emit("session_event", {
                    id: s,
                    topic: e,
                    params: a
                }), ko.set(c, s)
            } catch (c) {
                await this.sendError({
                    id: s,
                    topic: e,
                    error: c
                }), this.client.logger.error(c)
            }
        }, this.onSessionAuthenticateResponse = (e, i) => {
            const {
                id: s
            } = i;
            this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: e,
                payload: i
            }), Yi(i) ? this.events.emit(de("session_request", s), {
                result: i.result
            }) : Ei(i) && this.events.emit(de("session_request", s), {
                error: i.error
            })
        }, this.onSessionAuthenticateRequest = async (e, i) => {
            const {
                requester: s,
                authPayload: a,
                expiryTimestamp: c
            } = i.params, f = _s(JSON.stringify(i)), p = await this.getVerifyContext(f, this.client.metadata), d = {
                requester: s,
                pairingTopic: e,
                id: i.id,
                authPayload: a,
                verifyContext: p,
                expiryTimestamp: c
            };
            await this.setAuthRequest(i.id, {
                request: d,
                pairingTopic: e
            }), this.client.events.emit("session_authenticate", {
                topic: e,
                params: i.params,
                id: i.id
            })
        }, this.addSessionRequestToSessionRequestQueue = e => {
            this.sessionRequestQueue.queue.push(e)
        }, this.cleanupAfterResponse = e => {
            this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0
            }), setTimeout(() => {
                this.sessionRequestQueue.state = _n.idle, this.processSessionRequestQueue()
            }, bt.toMiliseconds(this.requestQueueDelay))
        }, this.cleanupPendingSentRequestsForTopic = ({
            topic: e,
            error: i
        }) => {
            const s = this.client.core.history.pending;
            s.length > 0 && s.filter(a => a.topic === e && a.request.method === "wc_sessionRequest").forEach(a => {
                const c = a.request.id,
                    f = de("session_request", c);
                if (this.events.listenerCount(f) === 0) throw new Error(`emitting ${f} without any listeners`);
                this.events.emit(de("session_request", a.request.id), {
                    error: i
                })
            })
        }, this.processSessionRequestQueue = () => {
            if (this.sessionRequestQueue.state === _n.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            const e = this.sessionRequestQueue.queue[0];
            if (!e) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = _n.active, this.emitSessionRequest(e)
            } catch (i) {
                this.client.logger.error(i)
            }
        }, this.emitSessionRequest = e => {
            this.client.events.emit("session_request", e)
        }, this.onPairingCreated = e => {
            if (e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active) return;
            const i = this.client.proposal.getAll().find(s => s.pairingTopic === e.topic);
            i && this.onSessionProposeRequest(e.topic, oo("wc_sessionPropose", {
                requiredNamespaces: i.requiredNamespaces,
                optionalNamespaces: i.optionalNamespaces,
                relays: i.relays,
                proposer: i.proposer,
                sessionProperties: i.sessionProperties
            }, i.id))
        }, this.isValidConnect = async e => {
            if (!$r(e)) {
                const {
                    message: p
                } = gt("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                throw new Error(p)
            }
            const {
                pairingTopic: i,
                requiredNamespaces: s,
                optionalNamespaces: a,
                sessionProperties: c,
                relays: f
            } = e;
            if (Pr(i) || await this.isValidPairingTopic(i), !U4(f, !0)) {
                const {
                    message: p
                } = gt("MISSING_OR_INVALID", `connect() relays: ${f}`);
                throw new Error(p)
            }!Pr(s) && na(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !Pr(a) && na(a) !== 0 && this.validateNamespaces(a, "optionalNamespaces"), Pr(c) || this.validateSessionProps(c, "sessionProperties")
        }, this.validateNamespaces = (e, i) => {
            const s = B4(e, "connect()", i);
            if (s) throw new Error(s.message)
        }, this.isValidApprove = async e => {
            if (!$r(e)) throw new Error(gt("MISSING_OR_INVALID", `approve() params: ${e}`).message);
            const {
                id: i,
                namespaces: s,
                relayProtocol: a,
                sessionProperties: c
            } = e;
            this.checkRecentlyDeleted(i), await this.isValidProposalId(i);
            const f = this.client.proposal.get(i),
                p = Vh(s, "approve()");
            if (p) throw new Error(p.message);
            const d = mp(f.requiredNamespaces, s, "approve()");
            if (d) throw new Error(d.message);
            if (!Ze(a, !0)) {
                const {
                    message: b
                } = gt("MISSING_OR_INVALID", `approve() relayProtocol: ${a}`);
                throw new Error(b)
            }
            Pr(c) || this.validateSessionProps(c, "sessionProperties")
        }, this.isValidReject = async e => {
            if (!$r(e)) {
                const {
                    message: a
                } = gt("MISSING_OR_INVALID", `reject() params: ${e}`);
                throw new Error(a)
            }
            const {
                id: i,
                reason: s
            } = e;
            if (this.checkRecentlyDeleted(i), await this.isValidProposalId(i), !q4(s)) {
                const {
                    message: a
                } = gt("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
                throw new Error(a)
            }
        }, this.isValidSessionSettleRequest = e => {
            if (!$r(e)) {
                const {
                    message: d
                } = gt("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                throw new Error(d)
            }
            const {
                relay: i,
                controller: s,
                namespaces: a,
                expiry: c
            } = e;
            if (!Bg(i)) {
                const {
                    message: d
                } = gt("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(d)
            }
            const f = P4(s, "onSessionSettleRequest()");
            if (f) throw new Error(f.message);
            const p = Vh(a, "onSessionSettleRequest()");
            if (p) throw new Error(p.message);
            if ($n(c)) {
                const {
                    message: d
                } = gt("EXPIRED", "onSessionSettleRequest()");
                throw new Error(d)
            }
        }, this.isValidUpdate = async e => {
            if (!$r(e)) {
                const {
                    message: p
                } = gt("MISSING_OR_INVALID", `update() params: ${e}`);
                throw new Error(p)
            }
            const {
                topic: i,
                namespaces: s
            } = e;
            this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
            const a = this.client.session.get(i),
                c = Vh(s, "update()");
            if (c) throw new Error(c.message);
            const f = mp(a.requiredNamespaces, s, "update()");
            if (f) throw new Error(f.message)
        }, this.isValidExtend = async e => {
            if (!$r(e)) {
                const {
                    message: s
                } = gt("MISSING_OR_INVALID", `extend() params: ${e}`);
                throw new Error(s)
            }
            const {
                topic: i
            } = e;
            this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i)
        }, this.isValidRequest = async e => {
            if (!$r(e)) {
                const {
                    message: p
                } = gt("MISSING_OR_INVALID", `request() params: ${e}`);
                throw new Error(p)
            }
            const {
                topic: i,
                request: s,
                chainId: a,
                expiry: c
            } = e;
            this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
            const {
                namespaces: f
            } = this.client.session.get(i);
            if (!gp(f, a)) {
                const {
                    message: p
                } = gt("MISSING_OR_INVALID", `request() chainId: ${a}`);
                throw new Error(p)
            }
            if (!j4(s)) {
                const {
                    message: p
                } = gt("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
                throw new Error(p)
            }
            if (!k4(f, a, s.method)) {
                const {
                    message: p
                } = gt("MISSING_OR_INVALID", `request() method: ${s.method}`);
                throw new Error(p)
            }
            if (c && !G4(c, el)) {
                const {
                    message: p
                } = gt("MISSING_OR_INVALID", `request() expiry: ${c}. Expiry must be a number (in seconds) between ${el.min} and ${el.max}`);
                throw new Error(p)
            }
        }, this.isValidRespond = async e => {
            var i;
            if (!$r(e)) {
                const {
                    message: c
                } = gt("MISSING_OR_INVALID", `respond() params: ${e}`);
                throw new Error(c)
            }
            const {
                topic: s,
                response: a
            } = e;
            try {
                await this.isValidSessionTopic(s)
            } catch (c) {
                throw (i = e ? .response) != null && i.id && this.cleanupAfterResponse(e), c
            }
            if (!$4(a)) {
                const {
                    message: c
                } = gt("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(a)}`);
                throw new Error(c)
            }
        }, this.isValidPing = async e => {
            if (!$r(e)) {
                const {
                    message: s
                } = gt("MISSING_OR_INVALID", `ping() params: ${e}`);
                throw new Error(s)
            }
            const {
                topic: i
            } = e;
            await this.isValidSessionOrPairingTopic(i)
        }, this.isValidEmit = async e => {
            if (!$r(e)) {
                const {
                    message: f
                } = gt("MISSING_OR_INVALID", `emit() params: ${e}`);
                throw new Error(f)
            }
            const {
                topic: i,
                event: s,
                chainId: a
            } = e;
            await this.isValidSessionTopic(i);
            const {
                namespaces: c
            } = this.client.session.get(i);
            if (!gp(c, a)) {
                const {
                    message: f
                } = gt("MISSING_OR_INVALID", `emit() chainId: ${a}`);
                throw new Error(f)
            }
            if (!z4(s)) {
                const {
                    message: f
                } = gt("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
                throw new Error(f)
            }
            if (!H4(c, a, s.name)) {
                const {
                    message: f
                } = gt("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
                throw new Error(f)
            }
        }, this.isValidDisconnect = async e => {
            if (!$r(e)) {
                const {
                    message: s
                } = gt("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                throw new Error(s)
            }
            const {
                topic: i
            } = e;
            await this.isValidSessionOrPairingTopic(i)
        }, this.isValidAuthenticate = e => {
            const {
                chains: i,
                uri: s,
                domain: a,
                nonce: c
            } = e;
            if (!Array.isArray(i) || i.length === 0) throw new Error("chains is required and must be a non-empty array");
            if (!Ze(s, !1)) throw new Error("uri is required parameter");
            if (!Ze(a, !1)) throw new Error("domain is required parameter");
            if (!Ze(c, !1)) throw new Error("nonce is required parameter");
            if ([...new Set(i.map(p => Nu(p).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
            const {
                namespace: f
            } = Nu(i[0]);
            if (f !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")
        }, this.getVerifyContext = async (e, i) => {
            const s = {
                verified: {
                    verifyUrl: i.verifyUrl || ro,
                    validation: "UNKNOWN",
                    origin: i.url || ""
                }
            };
            try {
                const a = await this.client.core.verify.resolve({
                    attestationId: e,
                    verifyUrl: i.verifyUrl
                });
                a && (s.verified.origin = a.origin, s.verified.isScam = a.isScam, s.verified.validation = a.origin === new URL(i.url).origin ? "VALID" : "INVALID")
            } catch (a) {
                this.client.logger.info(a)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s
        }, this.validateSessionProps = (e, i) => {
            Object.values(e).forEach(s => {
                if (!Ze(s, !1)) {
                    const {
                        message: a
                    } = gt("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
                    throw new Error(a)
                }
            })
        }, this.getPendingAuthRequest = e => {
            const i = this.client.auth.requests.get(e);
            return typeof i == "object" ? i : void 0
        }, this.addToRecentlyDeleted = (e, i) => {
            if (this.recentlyDeletedMap.set(e, i), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
                let s = 0;
                const a = this.recentlyDeletedLimit / 2;
                for (const c of this.recentlyDeletedMap.keys()) {
                    if (s++ >= a) break;
                    this.recentlyDeletedMap.delete(c)
                }
            }
        }, this.checkRecentlyDeleted = e => {
            const i = this.recentlyDeletedMap.get(e);
            if (i) {
                const {
                    message: s
                } = gt("MISSING_OR_INVALID", `Record was recently deleted - ${i}: ${e}`);
                throw new Error(s)
            }
        }
    }
    async isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = gt("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
        await this.client.core.relayer.confirmOnlineStateOrThrow()
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(zr.message, async t => {
            const {
                topic: e,
                message: i
            } = t, {
                publicKey: s
            } = this.client.auth.authKeys.keys.includes($u) ? this.client.auth.authKeys.get($u) : {
                responseTopic: void 0,
                publicKey: void 0
            }, a = await this.client.core.crypto.decode(e, i, {
                receiverPublicKey: s
            });
            try {
                rf(a) ? (this.client.core.history.set(e, a), this.onRelayEventRequest({
                    topic: e,
                    payload: a
                })) : pc(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({
                    topic: e,
                    payload: a
                }), this.client.core.history.delete(e, a.id)) : this.onRelayEventUnknownPayload({
                    topic: e,
                    payload: a
                })
            } catch (c) {
                this.client.logger.error(c)
            }
        })
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(bi.expired, async t => {
            const {
                topic: e,
                id: i
            } = W1(t.target);
            if (i && this.client.pendingRequest.keys.includes(i)) return await this.deletePendingSessionRequest(i, gt("EXPIRED"), !0);
            if (i && this.client.auth.requests.keys.includes(i)) return await this.deletePendingAuthRequest(i, gt("EXPIRED"), !0);
            e ? this.client.session.keys.includes(e) && (await this.deleteSession({
                topic: e,
                expirerHasDeleted: !0
            }), this.client.events.emit("session_expire", {
                topic: e
            })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", {
                id: i
            }))
        })
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(eo.create, t => this.onPairingCreated(t)), this.client.core.pairing.events.on(eo.delete, t => {
            this.addToRecentlyDeleted(t.topic, "pairing")
        })
    }
    isValidPairingTopic(t) {
        if (!Ze(t, !1)) {
            const {
                message: e
            } = gt("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
            throw new Error(e)
        }
        if (!this.client.core.pairing.pairings.keys.includes(t)) {
            const {
                message: e
            } = gt("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
            throw new Error(e)
        }
        if ($n(this.client.core.pairing.pairings.get(t).expiry)) {
            const {
                message: e
            } = gt("EXPIRED", `pairing topic: ${t}`);
            throw new Error(e)
        }
    }
    async isValidSessionTopic(t) {
        if (!Ze(t, !1)) {
            const {
                message: e
            } = gt("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
            throw new Error(e)
        }
        if (this.checkRecentlyDeleted(t), !this.client.session.keys.includes(t)) {
            const {
                message: e
            } = gt("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
            throw new Error(e)
        }
        if ($n(this.client.session.get(t).expiry)) {
            await this.deleteSession({
                topic: t
            });
            const {
                message: e
            } = gt("EXPIRED", `session topic: ${t}`);
            throw new Error(e)
        }
        if (!this.client.core.crypto.keychain.has(t)) {
            const {
                message: e
            } = gt("MISSING_OR_INVALID", `session topic does not exist in keychain: ${t}`);
            throw await this.deleteSession({
                topic: t
            }), new Error(e)
        }
    }
    async isValidSessionOrPairingTopic(t) {
        if (this.checkRecentlyDeleted(t), this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
        else if (this.client.core.pairing.pairings.keys.includes(t)) this.isValidPairingTopic(t);
        else if (Ze(t, !1)) {
            const {
                message: e
            } = gt("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
            throw new Error(e)
        } else {
            const {
                message: e
            } = gt("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
            throw new Error(e)
        }
    }
    async isValidProposalId(t) {
        if (!L4(t)) {
            const {
                message: e
            } = gt("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
            throw new Error(e)
        }
        if (!this.client.proposal.keys.includes(t)) {
            const {
                message: e
            } = gt("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
            throw new Error(e)
        }
        if ($n(this.client.proposal.get(t).expiryTimestamp)) {
            await this.deleteProposal(t);
            const {
                message: e
            } = gt("EXPIRED", `proposal id: ${t}`);
            throw new Error(e)
        }
    }
}
class Z7 extends Cs {
    constructor(t, e) {
        super(t, e, U7, sf), this.core = t, this.logger = e
    }
}
class t9 extends Cs {
    constructor(t, e) {
        super(t, e, L7, sf), this.core = t, this.logger = e
    }
}
class e9 extends Cs {
    constructor(t, e) {
        super(t, e, j7, sf, i => i.id), this.core = t, this.logger = e
    }
}
class r9 extends Cs {
    constructor(t, e) {
        super(t, e, H7, mc, () => $u), this.core = t, this.logger = e
    }
}
class i9 extends Cs {
    constructor(t, e) {
        super(t, e, K7, mc), this.core = t, this.logger = e
    }
}
class n9 extends Cs {
    constructor(t, e) {
        super(t, e, V7, mc, i => i.id), this.core = t, this.logger = e
    }
}
class s9 {
    constructor(t, e) {
        this.core = t, this.logger = e, this.authKeys = new r9(this.core, this.logger), this.pairingTopics = new i9(this.core, this.logger), this.requests = new n9(this.core, this.logger)
    }
    async init() {
        await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init()
    }
}
class of extends yI {
    constructor(t) {
        super(t), this.protocol = dm, this.version = pm, this.name = tl.name, this.events = new Si.EventEmitter, this.on = (i, s) => this.events.on(i, s), this.once = (i, s) => this.events.once(i, s), this.off = (i, s) => this.events.off(i, s), this.removeListener = (i, s) => this.events.removeListener(i, s), this.removeAllListeners = i => this.events.removeAllListeners(i), this.connect = async i => {
            try {
                return await this.engine.connect(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.pair = async i => {
            try {
                return await this.engine.pair(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.approve = async i => {
            try {
                return await this.engine.approve(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.reject = async i => {
            try {
                return await this.engine.reject(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.update = async i => {
            try {
                return await this.engine.update(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.extend = async i => {
            try {
                return await this.engine.extend(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.request = async i => {
            try {
                return await this.engine.request(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.respond = async i => {
            try {
                return await this.engine.respond(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.ping = async i => {
            try {
                return await this.engine.ping(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.emit = async i => {
            try {
                return await this.engine.emit(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.disconnect = async i => {
            try {
                return await this.engine.disconnect(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.find = i => {
            try {
                return this.engine.find(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.getPendingSessionRequests = () => {
            try {
                return this.engine.getPendingSessionRequests()
            } catch (i) {
                throw this.logger.error(i.message), i
            }
        }, this.authenticate = async i => {
            try {
                return await this.engine.authenticate(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.formatAuthMessage = i => {
            try {
                return this.engine.formatAuthMessage(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.approveSessionAuthenticate = async i => {
            try {
                return await this.engine.approveSessionAuthenticate(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.rejectSessionAuthenticate = async i => {
            try {
                return await this.engine.rejectSessionAuthenticate(i)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.name = t ? .name || tl.name, this.metadata = t ? .metadata || WE(), this.signConfig = t ? .signConfig;
        const e = typeof t ? .logger < "u" && typeof t ? .logger != "string" ? t.logger : ma(lc({
            level: t ? .logger || tl.logger
        }));
        this.core = t ? .core || new B7(t), this.logger = Vr(e, this.name), this.session = new t9(this.core, this.logger), this.proposal = new Z7(this.core, this.logger), this.pendingRequest = new e9(this.core, this.logger), this.engine = new X7(this), this.auth = new s9(this.core, this.logger)
    }
    static async init(t) {
        const e = new of (t);
        return await e.initialize(), e
    }
    get context() {
        return Kr(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), await this.auth.init(), this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }), this.logger.info("SignClient Initialization Success")
        } catch (t) {
            throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t
        }
    }
}
var Nl = {
    exports: {}
};
(function(r, t) {
    var e = typeof self < "u" ? self : Bi,
        i = function() {
            function a() {
                this.fetch = !1, this.DOMException = e.DOMException
            }
            return a.prototype = e, new a
        }();
    (function(a) {
        (function(c) {
            var f = {
                searchParams: "URLSearchParams" in a,
                iterable: "Symbol" in a && "iterator" in Symbol,
                blob: "FileReader" in a && "Blob" in a && function() {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in a,
                arrayBuffer: "ArrayBuffer" in a
            };

            function p(h) {
                return h && DataView.prototype.isPrototypeOf(h)
            }
            if (f.arrayBuffer) var d = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                b = ArrayBuffer.isView || function(h) {
                    return h && d.indexOf(Object.prototype.toString.call(h)) > -1
                };

            function E(h) {
                if (typeof h != "string" && (h = String(h)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(h)) throw new TypeError("Invalid character in header field name");
                return h.toLowerCase()
            }

            function x(h) {
                return typeof h != "string" && (h = String(h)), h
            }

            function D(h) {
                var w = {
                    next: function() {
                        var S = h.shift();
                        return {
                            done: S === void 0,
                            value: S
                        }
                    }
                };
                return f.iterable && (w[Symbol.iterator] = function() {
                    return w
                }), w
            }

            function P(h) {
                this.map = {}, h instanceof P ? h.forEach(function(w, S) {
                    this.append(S, w)
                }, this) : Array.isArray(h) ? h.forEach(function(w) {
                    this.append(w[0], w[1])
                }, this) : h && Object.getOwnPropertyNames(h).forEach(function(w) {
                    this.append(w, h[w])
                }, this)
            }
            P.prototype.append = function(h, w) {
                h = E(h), w = x(w);
                var S = this.map[h];
                this.map[h] = S ? S + ", " + w : w
            }, P.prototype.delete = function(h) {
                delete this.map[E(h)]
            }, P.prototype.get = function(h) {
                return h = E(h), this.has(h) ? this.map[h] : null
            }, P.prototype.has = function(h) {
                return this.map.hasOwnProperty(E(h))
            }, P.prototype.set = function(h, w) {
                this.map[E(h)] = x(w)
            }, P.prototype.forEach = function(h, w) {
                for (var S in this.map) this.map.hasOwnProperty(S) && h.call(w, this.map[S], S, this)
            }, P.prototype.keys = function() {
                var h = [];
                return this.forEach(function(w, S) {
                    h.push(S)
                }), D(h)
            }, P.prototype.values = function() {
                var h = [];
                return this.forEach(function(w) {
                    h.push(w)
                }), D(h)
            }, P.prototype.entries = function() {
                var h = [];
                return this.forEach(function(w, S) {
                    h.push([S, w])
                }), D(h)
            }, f.iterable && (P.prototype[Symbol.iterator] = P.prototype.entries);

            function Y(h) {
                if (h.bodyUsed) return Promise.reject(new TypeError("Already read"));
                h.bodyUsed = !0
            }

            function G(h) {
                return new Promise(function(w, S) {
                    h.onload = function() {
                        w(h.result)
                    }, h.onerror = function() {
                        S(h.error)
                    }
                })
            }

            function tt(h) {
                var w = new FileReader,
                    S = G(w);
                return w.readAsArrayBuffer(h), S
            }

            function K(h) {
                var w = new FileReader,
                    S = G(w);
                return w.readAsText(h), S
            }

            function V(h) {
                for (var w = new Uint8Array(h), S = new Array(w.length), M = 0; M < w.length; M++) S[M] = String.fromCharCode(w[M]);
                return S.join("")
            }

            function L(h) {
                if (h.slice) return h.slice(0);
                var w = new Uint8Array(h.byteLength);
                return w.set(new Uint8Array(h)), w.buffer
            }

            function $() {
                return this.bodyUsed = !1, this._initBody = function(h) {
                    this._bodyInit = h, h ? typeof h == "string" ? this._bodyText = h : f.blob && Blob.prototype.isPrototypeOf(h) ? this._bodyBlob = h : f.formData && FormData.prototype.isPrototypeOf(h) ? this._bodyFormData = h : f.searchParams && URLSearchParams.prototype.isPrototypeOf(h) ? this._bodyText = h.toString() : f.arrayBuffer && f.blob && p(h) ? (this._bodyArrayBuffer = L(h.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : f.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(h) || b(h)) ? this._bodyArrayBuffer = L(h) : this._bodyText = h = Object.prototype.toString.call(h) : this._bodyText = "", this.headers.get("content-type") || (typeof h == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : f.searchParams && URLSearchParams.prototype.isPrototypeOf(h) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, f.blob && (this.blob = function() {
                    var h = Y(this);
                    if (h) return h;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? Y(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(tt)
                }), this.text = function() {
                    var h = Y(this);
                    if (h) return h;
                    if (this._bodyBlob) return K(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(V(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, f.formData && (this.formData = function() {
                    return this.text().then(nt)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var z = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function y(h) {
                var w = h.toUpperCase();
                return z.indexOf(w) > -1 ? w : h
            }

            function T(h, w) {
                w = w || {};
                var S = w.body;
                if (h instanceof T) {
                    if (h.bodyUsed) throw new TypeError("Already read");
                    this.url = h.url, this.credentials = h.credentials, w.headers || (this.headers = new P(h.headers)), this.method = h.method, this.mode = h.mode, this.signal = h.signal, !S && h._bodyInit != null && (S = h._bodyInit, h.bodyUsed = !0)
                } else this.url = String(h);
                if (this.credentials = w.credentials || this.credentials || "same-origin", (w.headers || !this.headers) && (this.headers = new P(w.headers)), this.method = y(w.method || this.method || "GET"), this.mode = w.mode || this.mode || null, this.signal = w.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && S) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(S)
            }
            T.prototype.clone = function() {
                return new T(this, {
                    body: this._bodyInit
                })
            };

            function nt(h) {
                var w = new FormData;
                return h.trim().split("&").forEach(function(S) {
                    if (S) {
                        var M = S.split("="),
                            O = M.shift().replace(/\+/g, " "),
                            F = M.join("=").replace(/\+/g, " ");
                        w.append(decodeURIComponent(O), decodeURIComponent(F))
                    }
                }), w
            }

            function ft(h) {
                var w = new P,
                    S = h.replace(/\r?\n[\t ]+/g, " ");
                return S.split(/\r?\n/).forEach(function(M) {
                    var O = M.split(":"),
                        F = O.shift().trim();
                    if (F) {
                        var I = O.join(":").trim();
                        w.append(F, I)
                    }
                }), w
            }
            $.call(T.prototype);

            function lt(h, w) {
                w || (w = {}), this.type = "default", this.status = w.status === void 0 ? 200 : w.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in w ? w.statusText : "OK", this.headers = new P(w.headers), this.url = w.url || "", this._initBody(h)
            }
            $.call(lt.prototype), lt.prototype.clone = function() {
                return new lt(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new P(this.headers),
                    url: this.url
                })
            }, lt.error = function() {
                var h = new lt(null, {
                    status: 0,
                    statusText: ""
                });
                return h.type = "error", h
            };
            var mt = [301, 302, 303, 307, 308];
            lt.redirect = function(h, w) {
                if (mt.indexOf(w) === -1) throw new RangeError("Invalid status code");
                return new lt(null, {
                    status: w,
                    headers: {
                        location: h
                    }
                })
            }, c.DOMException = a.DOMException;
            try {
                new c.DOMException
            } catch {
                c.DOMException = function(w, S) {
                    this.message = w, this.name = S;
                    var M = Error(w);
                    this.stack = M.stack
                }, c.DOMException.prototype = Object.create(Error.prototype), c.DOMException.prototype.constructor = c.DOMException
            }

            function l(h, w) {
                return new Promise(function(S, M) {
                    var O = new T(h, w);
                    if (O.signal && O.signal.aborted) return M(new c.DOMException("Aborted", "AbortError"));
                    var F = new XMLHttpRequest;

                    function I() {
                        F.abort()
                    }
                    F.onload = function() {
                        var g = {
                            status: F.status,
                            statusText: F.statusText,
                            headers: ft(F.getAllResponseHeaders() || "")
                        };
                        g.url = "responseURL" in F ? F.responseURL : g.headers.get("X-Request-URL");
                        var N = "response" in F ? F.response : F.responseText;
                        S(new lt(N, g))
                    }, F.onerror = function() {
                        M(new TypeError("Network request failed"))
                    }, F.ontimeout = function() {
                        M(new TypeError("Network request failed"))
                    }, F.onabort = function() {
                        M(new c.DOMException("Aborted", "AbortError"))
                    }, F.open(O.method, O.url, !0), O.credentials === "include" ? F.withCredentials = !0 : O.credentials === "omit" && (F.withCredentials = !1), "responseType" in F && f.blob && (F.responseType = "blob"), O.headers.forEach(function(g, N) {
                        F.setRequestHeader(N, g)
                    }), O.signal && (O.signal.addEventListener("abort", I), F.onreadystatechange = function() {
                        F.readyState === 4 && O.signal.removeEventListener("abort", I)
                    }), F.send(typeof O._bodyInit > "u" ? null : O._bodyInit)
                })
            }
            return l.polyfill = !0, a.fetch || (a.fetch = l, a.Headers = P, a.Request = T, a.Response = lt), c.Headers = P, c.Request = T, c.Response = lt, c.fetch = l, Object.defineProperty(c, "__esModule", {
                value: !0
            }), c
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var s = i;
    t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, r.exports = t
})(Nl, Nl.exports);
var o9 = Nl.exports;
const s1 = rc(o9);
var a9 = Object.defineProperty,
    u9 = Object.defineProperties,
    c9 = Object.getOwnPropertyDescriptors,
    o1 = Object.getOwnPropertySymbols,
    h9 = Object.prototype.hasOwnProperty,
    l9 = Object.prototype.propertyIsEnumerable,
    a1 = (r, t, e) => t in r ? a9(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    u1 = (r, t) => {
        for (var e in t || (t = {})) h9.call(t, e) && a1(r, e, t[e]);
        if (o1)
            for (var e of o1(t)) l9.call(t, e) && a1(r, e, t[e]);
        return r
    },
    c1 = (r, t) => u9(r, c9(t));
const f9 = {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    d9 = "POST",
    h1 = {
        headers: f9,
        method: d9
    },
    l1 = 10;
class Yn {
    constructor(t, e = !1) {
        if (this.url = t, this.disableProviderPing = e, this.events = new Si.EventEmitter, this.isAvailable = !1, this.registering = !1, !Rp(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        this.url = t, this.disableProviderPing = e
    }
    get connected() {
        return this.isAvailable
    }
    get connecting() {
        return this.registering
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    async open(t = this.url) {
        await this.register(t)
    }
    async close() {
        if (!this.isAvailable) throw new Error("Connection already closed");
        this.onClose()
    }
    async send(t) {
        this.isAvailable || await this.register();
        try {
            const e = In(t),
                i = await (await s1(this.url, c1(u1({}, h1), {
                    body: e
                }))).json();
            this.onPayload({
                data: i
            })
        } catch (e) {
            this.onError(t.id, e)
        }
    }
    async register(t = this.url) {
        if (!Rp(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        if (this.registering) {
            const e = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((i, s) => {
                this.events.once("register_error", a => {
                    this.resetMaxListeners(), s(a)
                }), this.events.once("open", () => {
                    if (this.resetMaxListeners(), typeof this.isAvailable > "u") return s(new Error("HTTP connection is missing or invalid"));
                    i()
                })
            })
        }
        this.url = t, this.registering = !0;
        try {
            if (!this.disableProviderPing) {
                const e = In({
                    id: 1,
                    jsonrpc: "2.0",
                    method: "test",
                    params: []
                });
                await s1(t, c1(u1({}, h1), {
                    body: e
                }))
            }
            this.onOpen()
        } catch (e) {
            const i = this.parseError(e);
            throw this.events.emit("register_error", i), this.onClose(), i
        }
    }
    onOpen() {
        this.isAvailable = !0, this.registering = !1, this.events.emit("open")
    }
    onClose() {
        this.isAvailable = !1, this.registering = !1, this.events.emit("close")
    }
    onPayload(t) {
        if (typeof t.data > "u") return;
        const e = typeof t.data == "string" ? pa(t.data) : t.data;
        this.events.emit("payload", e)
    }
    onError(t, e) {
        const i = this.parseError(e),
            s = i.message || i.toString(),
            a = dc(t, s);
        this.events.emit("payload", a)
    }
    parseError(t, e = this.url) {
        return Yg(t, e, "HTTP")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > l1 && this.events.setMaxListeners(l1)
    }
}
const f1 = "error",
    p9 = "wss://relay.walletconnect.com",
    g9 = "wc",
    m9 = "universal_provider",
    d1 = `${g9}@2:${m9}:`,
    v9 = "https://rpc.walletconnect.com/v1/",
    xn = {
        DEFAULT_CHAIN_CHANGED: "default_chain_changed"
    };
var Vo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    Rl = {
        exports: {}
    };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(r, t) {
    (function() {
        var e, i = "4.17.21",
            s = 200,
            a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            c = "Expected a function",
            f = "Invalid `variable` option passed into `_.template`",
            p = "__lodash_hash_undefined__",
            d = 500,
            b = "__lodash_placeholder__",
            E = 1,
            x = 2,
            D = 4,
            P = 1,
            Y = 2,
            G = 1,
            tt = 2,
            K = 4,
            V = 8,
            L = 16,
            $ = 32,
            z = 64,
            y = 128,
            T = 256,
            nt = 512,
            ft = 30,
            lt = "...",
            mt = 800,
            l = 16,
            h = 1,
            w = 2,
            S = 3,
            M = 1 / 0,
            O = 9007199254740991,
            F = 17976931348623157e292,
            I = 0 / 0,
            g = 4294967295,
            N = g - 1,
            it = g >>> 1,
            dt = [
                ["ary", y],
                ["bind", G],
                ["bindKey", tt],
                ["curry", V],
                ["curryRight", L],
                ["flip", nt],
                ["partial", $],
                ["partialRight", z],
                ["rearg", T]
            ],
            _ = "[object Arguments]",
            Z = "[object Array]",
            U = "[object AsyncFunction]",
            q = "[object Boolean]",
            k = "[object Date]",
            m = "[object DOMException]",
            B = "[object Error]",
            et = "[object Function]",
            ct = "[object GeneratorFunction]",
            at = "[object Map]",
            Mt = "[object Number]",
            Pt = "[object Null]",
            It = "[object Object]",
            Ee = "[object Promise]",
            $t = "[object Proxy]",
            xt = "[object RegExp]",
            Ut = "[object Set]",
            _t = "[object String]",
            Et = "[object Symbol]",
            Vt = "[object Undefined]",
            yt = "[object WeakMap]",
            At = "[object WeakSet]",
            Bt = "[object ArrayBuffer]",
            wt = "[object DataView]",
            Ct = "[object Float32Array]",
            Lt = "[object Float64Array]",
            Ot = "[object Int8Array]",
            Nt = "[object Int16Array]",
            se = "[object Int32Array]",
            Tt = "[object Uint8Array]",
            Rt = "[object Uint8ClampedArray]",
            He = "[object Uint16Array]",
            ue = "[object Uint32Array]",
            pe = /\b__p \+= '';/g,
            Ke = /\b(__p \+=) '' \+/g,
            ye = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            _e = /&(?:amp|lt|gt|quot|#39);/g,
            _r = /[&<>"']/g,
            Gt = RegExp(_e.source),
            zt = RegExp(_r.source),
            Ie = /<%-([\s\S]+?)%>/g,
            Wt = /<%([\s\S]+?)%>/g,
            Kt = /<%=([\s\S]+?)%>/g,
            Ae = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Jt = /^\w*$/,
            Xt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            De = /[\\^$.*+?()[\]{}|]/g,
            Zt = RegExp(De.source),
            Yt = /^\s+/,
            Me = /\s/,
            Qt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            qt = /\{\n\/\* \[wrapped with (.+)\] \*/,
            Re = /,? & /,
            te = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            Ce = /[()=,{}\[\]\/\s]/,
            Ii = /\\(\\)?/g,
            Pe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            le = /\w*$/,
            ni = /^[-+]0x[0-9a-f]+$/i,
            si = /^0b[01]+$/i,
            oi = /^\[object .+?Constructor\]$/,
            ai = /^0o[0-7]+$/i,
            ui = /^(?:0|[1-9]\d*)$/,
            or = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Li = /($^)/,
            Qn = /['\n\r\u2028\u2029\\]/g,
            qi = "\\ud800-\\udfff",
            Jn = "\\u0300-\\u036f",
            Xn = "\\ufe20-\\ufe2f",
            ji = "\\u20d0-\\u20ff",
            Mn = Jn + Xn + ji,
            Cn = "\\u2700-\\u27bf",
            Er = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Zn = "\\xac\\xb1\\xd7\\xf7",
            ts = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            es = "\\u2000-\\u206f",
            rs = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            wa = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            ba = "\\ufe0e\\ufe0f",
            is = Zn + ts + es + rs,
            wo = "['’]",
            ns = "[" + qi + "]",
            bo = "[" + is + "]",
            ss = "[" + Mn + "]",
            _a = "\\d+",
            vc = "[" + Cn + "]",
            Ea = "[" + Er + "]",
            Aa = "[^" + qi + is + _a + Cn + Er + wa + "]",
            Os = "\\ud83c[\\udffb-\\udfff]",
            yc = "(?:" + ss + "|" + Os + ")",
            Sa = "[^" + qi + "]",
            Ns = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Pn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            Gr = "[" + wa + "]",
            Ia = "\\u200d",
            Da = "(?:" + Ea + "|" + Aa + ")",
            $i = "(?:" + Gr + "|" + Aa + ")",
            xa = "(?:" + wo + "(?:d|ll|m|re|s|t|ve))?",
            Ma = "(?:" + wo + "(?:D|LL|M|RE|S|T|VE))?",
            Ca = yc + "?",
            Pa = "[" + ba + "]?",
            wc = "(?:" + Ia + "(?:" + [Sa, Ns, Pn].join("|") + ")" + Pa + Ca + ")*",
            un = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            Oa = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            Na = Pa + Ca + wc,
            Rs = "(?:" + [vc, Ns, Pn].join("|") + ")" + Na,
            bc = "(?:" + [Sa + ss + "?", ss, Ns, Pn, ns].join("|") + ")",
            _o = RegExp(wo, "g"),
            _c = RegExp(ss, "g"),
            Ts = RegExp(Os + "(?=" + Os + ")|" + bc + Na, "g"),
            Ra = RegExp([Gr + "?" + Ea + "+" + xa + "(?=" + [bo, Gr, "$"].join("|") + ")", $i + "+" + Ma + "(?=" + [bo, Gr + Da, "$"].join("|") + ")", Gr + "?" + Da + "+" + xa, Gr + "+" + Ma, Oa, un, _a, Rs].join("|"), "g"),
            Ta = RegExp("[" + Ia + qi + Mn + ba + "]"),
            os = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Fa = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            Ec = -1,
            Fe = {};
        Fe[Ct] = Fe[Lt] = Fe[Ot] = Fe[Nt] = Fe[se] = Fe[Tt] = Fe[Rt] = Fe[He] = Fe[ue] = !0, Fe[_] = Fe[Z] = Fe[Bt] = Fe[q] = Fe[wt] = Fe[k] = Fe[B] = Fe[et] = Fe[at] = Fe[Mt] = Fe[It] = Fe[xt] = Fe[Ut] = Fe[_t] = Fe[yt] = !1;
        var Te = {};
        Te[_] = Te[Z] = Te[Bt] = Te[wt] = Te[q] = Te[k] = Te[Ct] = Te[Lt] = Te[Ot] = Te[Nt] = Te[se] = Te[at] = Te[Mt] = Te[It] = Te[xt] = Te[Ut] = Te[_t] = Te[Et] = Te[Tt] = Te[Rt] = Te[He] = Te[ue] = !0, Te[B] = Te[et] = Te[yt] = !1;
        var j = {
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s"
            },
            Q = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            ht = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            },
            St = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            Be = parseFloat,
            re = parseInt,
            je = typeof Vo == "object" && Vo && Vo.Object === Object && Vo,
            tr = typeof self == "object" && self && self.Object === Object && self,
            we = je || tr || Function("return this")(),
            Ue = t && !t.nodeType && t,
            Ye = Ue && !0 && r && !r.nodeType && r,
            Tr = Ye && Ye.exports === Ue,
            er = Tr && je.process,
            $e = function() {
                try {
                    var J = Ye && Ye.require && Ye.require("util").types;
                    return J || er && er.binding && er.binding("util")
                } catch {}
            }(),
            Ar = $e && $e.isArrayBuffer,
            Di = $e && $e.isDate,
            ci = $e && $e.isMap,
            zi = $e && $e.isRegExp,
            Eo = $e && $e.isSet,
            as = $e && $e.isTypedArray;

        function ar(J, st, rt) {
            switch (rt.length) {
                case 0:
                    return J.call(st);
                case 1:
                    return J.call(st, rt[0]);
                case 2:
                    return J.call(st, rt[0], rt[1]);
                case 3:
                    return J.call(st, rt[0], rt[1], rt[2])
            }
            return J.apply(st, rt)
        }

        function wm(J, st, rt, Dt) {
            for (var ee = -1, Se = J == null ? 0 : J.length; ++ee < Se;) {
                var rr = J[ee];
                st(Dt, rr, rt(rr), J)
            }
            return Dt
        }

        function hi(J, st) {
            for (var rt = -1, Dt = J == null ? 0 : J.length; ++rt < Dt && st(J[rt], rt, J) !== !1;);
            return J
        }

        function bm(J, st) {
            for (var rt = J == null ? 0 : J.length; rt-- && st(J[rt], rt, J) !== !1;);
            return J
        }

        function cf(J, st) {
            for (var rt = -1, Dt = J == null ? 0 : J.length; ++rt < Dt;)
                if (!st(J[rt], rt, J)) return !1;
            return !0
        }

        function On(J, st) {
            for (var rt = -1, Dt = J == null ? 0 : J.length, ee = 0, Se = []; ++rt < Dt;) {
                var rr = J[rt];
                st(rr, rt, J) && (Se[ee++] = rr)
            }
            return Se
        }

        function Ba(J, st) {
            var rt = J == null ? 0 : J.length;
            return !!rt && Fs(J, st, 0) > -1
        }

        function Ac(J, st, rt) {
            for (var Dt = -1, ee = J == null ? 0 : J.length; ++Dt < ee;)
                if (rt(st, J[Dt])) return !0;
            return !1
        }

        function ze(J, st) {
            for (var rt = -1, Dt = J == null ? 0 : J.length, ee = Array(Dt); ++rt < Dt;) ee[rt] = st(J[rt], rt, J);
            return ee
        }

        function Nn(J, st) {
            for (var rt = -1, Dt = st.length, ee = J.length; ++rt < Dt;) J[ee + rt] = st[rt];
            return J
        }

        function Sc(J, st, rt, Dt) {
            var ee = -1,
                Se = J == null ? 0 : J.length;
            for (Dt && Se && (rt = J[++ee]); ++ee < Se;) rt = st(rt, J[ee], ee, J);
            return rt
        }

        function _m(J, st, rt, Dt) {
            var ee = J == null ? 0 : J.length;
            for (Dt && ee && (rt = J[--ee]); ee--;) rt = st(rt, J[ee], ee, J);
            return rt
        }

        function Ic(J, st) {
            for (var rt = -1, Dt = J == null ? 0 : J.length; ++rt < Dt;)
                if (st(J[rt], rt, J)) return !0;
            return !1
        }
        var Em = Dc("length");

        function Am(J) {
            return J.split("")
        }

        function Sm(J) {
            return J.match(te) || []
        }

        function hf(J, st, rt) {
            var Dt;
            return rt(J, function(ee, Se, rr) {
                if (st(ee, Se, rr)) return Dt = Se, !1
            }), Dt
        }

        function Ua(J, st, rt, Dt) {
            for (var ee = J.length, Se = rt + (Dt ? 1 : -1); Dt ? Se-- : ++Se < ee;)
                if (st(J[Se], Se, J)) return Se;
            return -1
        }

        function Fs(J, st, rt) {
            return st === st ? Bm(J, st, rt) : Ua(J, lf, rt)
        }

        function Im(J, st, rt, Dt) {
            for (var ee = rt - 1, Se = J.length; ++ee < Se;)
                if (Dt(J[ee], st)) return ee;
            return -1
        }

        function lf(J) {
            return J !== J
        }

        function ff(J, st) {
            var rt = J == null ? 0 : J.length;
            return rt ? Mc(J, st) / rt : I
        }

        function Dc(J) {
            return function(st) {
                return st == null ? e : st[J]
            }
        }

        function xc(J) {
            return function(st) {
                return J == null ? e : J[st]
            }
        }

        function df(J, st, rt, Dt, ee) {
            return ee(J, function(Se, rr, Le) {
                rt = Dt ? (Dt = !1, Se) : st(rt, Se, rr, Le)
            }), rt
        }

        function Dm(J, st) {
            var rt = J.length;
            for (J.sort(st); rt--;) J[rt] = J[rt].value;
            return J
        }

        function Mc(J, st) {
            for (var rt, Dt = -1, ee = J.length; ++Dt < ee;) {
                var Se = st(J[Dt]);
                Se !== e && (rt = rt === e ? Se : rt + Se)
            }
            return rt
        }

        function Cc(J, st) {
            for (var rt = -1, Dt = Array(J); ++rt < J;) Dt[rt] = st(rt);
            return Dt
        }

        function xm(J, st) {
            return ze(st, function(rt) {
                return [rt, J[rt]]
            })
        }

        function pf(J) {
            return J && J.slice(0, yf(J) + 1).replace(Yt, "")
        }

        function Wr(J) {
            return function(st) {
                return J(st)
            }
        }

        function Pc(J, st) {
            return ze(st, function(rt) {
                return J[rt]
            })
        }

        function Ao(J, st) {
            return J.has(st)
        }

        function gf(J, st) {
            for (var rt = -1, Dt = J.length; ++rt < Dt && Fs(st, J[rt], 0) > -1;);
            return rt
        }

        function mf(J, st) {
            for (var rt = J.length; rt-- && Fs(st, J[rt], 0) > -1;);
            return rt
        }

        function Mm(J, st) {
            for (var rt = J.length, Dt = 0; rt--;) J[rt] === st && ++Dt;
            return Dt
        }
        var Cm = xc(j),
            Pm = xc(Q);

        function Om(J) {
            return "\\" + St[J]
        }

        function Nm(J, st) {
            return J == null ? e : J[st]
        }

        function Bs(J) {
            return Ta.test(J)
        }

        function Rm(J) {
            return os.test(J)
        }

        function Tm(J) {
            for (var st, rt = []; !(st = J.next()).done;) rt.push(st.value);
            return rt
        }

        function Oc(J) {
            var st = -1,
                rt = Array(J.size);
            return J.forEach(function(Dt, ee) {
                rt[++st] = [ee, Dt]
            }), rt
        }

        function vf(J, st) {
            return function(rt) {
                return J(st(rt))
            }
        }

        function Rn(J, st) {
            for (var rt = -1, Dt = J.length, ee = 0, Se = []; ++rt < Dt;) {
                var rr = J[rt];
                (rr === st || rr === b) && (J[rt] = b, Se[ee++] = rt)
            }
            return Se
        }

        function La(J) {
            var st = -1,
                rt = Array(J.size);
            return J.forEach(function(Dt) {
                rt[++st] = Dt
            }), rt
        }

        function Fm(J) {
            var st = -1,
                rt = Array(J.size);
            return J.forEach(function(Dt) {
                rt[++st] = [Dt, Dt]
            }), rt
        }

        function Bm(J, st, rt) {
            for (var Dt = rt - 1, ee = J.length; ++Dt < ee;)
                if (J[Dt] === st) return Dt;
            return -1
        }

        function Um(J, st, rt) {
            for (var Dt = rt + 1; Dt--;)
                if (J[Dt] === st) return Dt;
            return Dt
        }

        function Us(J) {
            return Bs(J) ? qm(J) : Em(J)
        }

        function xi(J) {
            return Bs(J) ? jm(J) : Am(J)
        }

        function yf(J) {
            for (var st = J.length; st-- && Me.test(J.charAt(st)););
            return st
        }
        var Lm = xc(ht);

        function qm(J) {
            for (var st = Ts.lastIndex = 0; Ts.test(J);) ++st;
            return st
        }

        function jm(J) {
            return J.match(Ts) || []
        }

        function $m(J) {
            return J.match(Ra) || []
        }
        var zm = function J(st) {
                st = st == null ? we : Ls.defaults(we.Object(), st, Ls.pick(we, Fa));
                var rt = st.Array,
                    Dt = st.Date,
                    ee = st.Error,
                    Se = st.Function,
                    rr = st.Math,
                    Le = st.Object,
                    Nc = st.RegExp,
                    km = st.String,
                    li = st.TypeError,
                    qa = rt.prototype,
                    Hm = Se.prototype,
                    qs = Le.prototype,
                    ja = st["__core-js_shared__"],
                    $a = Hm.toString,
                    Oe = qs.hasOwnProperty,
                    Km = 0,
                    wf = function() {
                        var n = /[^.]+$/.exec(ja && ja.keys && ja.keys.IE_PROTO || "");
                        return n ? "Symbol(src)_1." + n : ""
                    }(),
                    za = qs.toString,
                    Vm = $a.call(Le),
                    Gm = we._,
                    Wm = Nc("^" + $a.call(Oe).replace(De, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    ka = Tr ? st.Buffer : e,
                    Tn = st.Symbol,
                    Ha = st.Uint8Array,
                    bf = ka ? ka.allocUnsafe : e,
                    Ka = vf(Le.getPrototypeOf, Le),
                    _f = Le.create,
                    Ef = qs.propertyIsEnumerable,
                    Va = qa.splice,
                    Af = Tn ? Tn.isConcatSpreadable : e,
                    So = Tn ? Tn.iterator : e,
                    us = Tn ? Tn.toStringTag : e,
                    Ga = function() {
                        try {
                            var n = ds(Le, "defineProperty");
                            return n({}, "", {}), n
                        } catch {}
                    }(),
                    Ym = st.clearTimeout !== we.clearTimeout && st.clearTimeout,
                    Qm = Dt && Dt.now !== we.Date.now && Dt.now,
                    Jm = st.setTimeout !== we.setTimeout && st.setTimeout,
                    Wa = rr.ceil,
                    Ya = rr.floor,
                    Rc = Le.getOwnPropertySymbols,
                    Xm = ka ? ka.isBuffer : e,
                    Sf = st.isFinite,
                    Zm = qa.join,
                    tv = vf(Le.keys, Le),
                    ir = rr.max,
                    vr = rr.min,
                    ev = Dt.now,
                    rv = st.parseInt,
                    If = rr.random,
                    iv = qa.reverse,
                    Tc = ds(st, "DataView"),
                    Io = ds(st, "Map"),
                    Fc = ds(st, "Promise"),
                    js = ds(st, "Set"),
                    Do = ds(st, "WeakMap"),
                    xo = ds(Le, "create"),
                    Qa = Do && new Do,
                    $s = {},
                    nv = ps(Tc),
                    sv = ps(Io),
                    ov = ps(Fc),
                    av = ps(js),
                    uv = ps(Do),
                    Ja = Tn ? Tn.prototype : e,
                    Mo = Ja ? Ja.valueOf : e,
                    Df = Ja ? Ja.toString : e;

                function C(n) {
                    if (Ge(n) && !ie(n) && !(n instanceof ge)) {
                        if (n instanceof fi) return n;
                        if (Oe.call(n, "__wrapped__")) return xd(n)
                    }
                    return new fi(n)
                }
                var zs = function() {
                    function n() {}
                    return function(o) {
                        if (!Ve(o)) return {};
                        if (_f) return _f(o);
                        n.prototype = o;
                        var u = new n;
                        return n.prototype = e, u
                    }
                }();

                function Xa() {}

                function fi(n, o) {
                    this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = e
                }
                C.templateSettings = {
                    escape: Ie,
                    evaluate: Wt,
                    interpolate: Kt,
                    variable: "",
                    imports: {
                        _: C
                    }
                }, C.prototype = Xa.prototype, C.prototype.constructor = C, fi.prototype = zs(Xa.prototype), fi.prototype.constructor = fi;

                function ge(n) {
                    this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = g, this.__views__ = []
                }

                function cv() {
                    var n = new ge(this.__wrapped__);
                    return n.__actions__ = Fr(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Fr(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Fr(this.__views__), n
                }

                function hv() {
                    if (this.__filtered__) {
                        var n = new ge(this);
                        n.__dir__ = -1, n.__filtered__ = !0
                    } else n = this.clone(), n.__dir__ *= -1;
                    return n
                }

                function lv() {
                    var n = this.__wrapped__.value(),
                        o = this.__dir__,
                        u = ie(n),
                        v = o < 0,
                        A = u ? n.length : 0,
                        R = Ay(0, A, this.__views__),
                        H = R.start,
                        W = R.end,
                        X = W - H,
                        ot = v ? W : H - 1,
                        ut = this.__iteratees__,
                        pt = ut.length,
                        vt = 0,
                        Ft = vr(X, this.__takeCount__);
                    if (!u || !v && A == X && Ft == X) return Qf(n, this.__actions__);
                    var kt = [];
                    t: for (; X-- && vt < Ft;) {
                        ot += o;
                        for (var ce = -1, Ht = n[ot]; ++ce < pt;) {
                            var fe = ut[ce],
                                be = fe.iteratee,
                                Jr = fe.type,
                                Dr = be(Ht);
                            if (Jr == w) Ht = Dr;
                            else if (!Dr) {
                                if (Jr == h) continue t;
                                break t
                            }
                        }
                        kt[vt++] = Ht
                    }
                    return kt
                }
                ge.prototype = zs(Xa.prototype), ge.prototype.constructor = ge;

                function cs(n) {
                    var o = -1,
                        u = n == null ? 0 : n.length;
                    for (this.clear(); ++o < u;) {
                        var v = n[o];
                        this.set(v[0], v[1])
                    }
                }

                function fv() {
                    this.__data__ = xo ? xo(null) : {}, this.size = 0
                }

                function dv(n) {
                    var o = this.has(n) && delete this.__data__[n];
                    return this.size -= o ? 1 : 0, o
                }

                function pv(n) {
                    var o = this.__data__;
                    if (xo) {
                        var u = o[n];
                        return u === p ? e : u
                    }
                    return Oe.call(o, n) ? o[n] : e
                }

                function gv(n) {
                    var o = this.__data__;
                    return xo ? o[n] !== e : Oe.call(o, n)
                }

                function mv(n, o) {
                    var u = this.__data__;
                    return this.size += this.has(n) ? 0 : 1, u[n] = xo && o === e ? p : o, this
                }
                cs.prototype.clear = fv, cs.prototype.delete = dv, cs.prototype.get = pv, cs.prototype.has = gv, cs.prototype.set = mv;

                function cn(n) {
                    var o = -1,
                        u = n == null ? 0 : n.length;
                    for (this.clear(); ++o < u;) {
                        var v = n[o];
                        this.set(v[0], v[1])
                    }
                }

                function vv() {
                    this.__data__ = [], this.size = 0
                }

                function yv(n) {
                    var o = this.__data__,
                        u = Za(o, n);
                    if (u < 0) return !1;
                    var v = o.length - 1;
                    return u == v ? o.pop() : Va.call(o, u, 1), --this.size, !0
                }

                function wv(n) {
                    var o = this.__data__,
                        u = Za(o, n);
                    return u < 0 ? e : o[u][1]
                }

                function bv(n) {
                    return Za(this.__data__, n) > -1
                }

                function _v(n, o) {
                    var u = this.__data__,
                        v = Za(u, n);
                    return v < 0 ? (++this.size, u.push([n, o])) : u[v][1] = o, this
                }
                cn.prototype.clear = vv, cn.prototype.delete = yv, cn.prototype.get = wv, cn.prototype.has = bv, cn.prototype.set = _v;

                function hn(n) {
                    var o = -1,
                        u = n == null ? 0 : n.length;
                    for (this.clear(); ++o < u;) {
                        var v = n[o];
                        this.set(v[0], v[1])
                    }
                }

                function Ev() {
                    this.size = 0, this.__data__ = {
                        hash: new cs,
                        map: new(Io || cn),
                        string: new cs
                    }
                }

                function Av(n) {
                    var o = lu(this, n).delete(n);
                    return this.size -= o ? 1 : 0, o
                }

                function Sv(n) {
                    return lu(this, n).get(n)
                }

                function Iv(n) {
                    return lu(this, n).has(n)
                }

                function Dv(n, o) {
                    var u = lu(this, n),
                        v = u.size;
                    return u.set(n, o), this.size += u.size == v ? 0 : 1, this
                }
                hn.prototype.clear = Ev, hn.prototype.delete = Av, hn.prototype.get = Sv, hn.prototype.has = Iv, hn.prototype.set = Dv;

                function hs(n) {
                    var o = -1,
                        u = n == null ? 0 : n.length;
                    for (this.__data__ = new hn; ++o < u;) this.add(n[o])
                }

                function xv(n) {
                    return this.__data__.set(n, p), this
                }

                function Mv(n) {
                    return this.__data__.has(n)
                }
                hs.prototype.add = hs.prototype.push = xv, hs.prototype.has = Mv;

                function Mi(n) {
                    var o = this.__data__ = new cn(n);
                    this.size = o.size
                }

                function Cv() {
                    this.__data__ = new cn, this.size = 0
                }

                function Pv(n) {
                    var o = this.__data__,
                        u = o.delete(n);
                    return this.size = o.size, u
                }

                function Ov(n) {
                    return this.__data__.get(n)
                }

                function Nv(n) {
                    return this.__data__.has(n)
                }

                function Rv(n, o) {
                    var u = this.__data__;
                    if (u instanceof cn) {
                        var v = u.__data__;
                        if (!Io || v.length < s - 1) return v.push([n, o]), this.size = ++u.size, this;
                        u = this.__data__ = new hn(v)
                    }
                    return u.set(n, o), this.size = u.size, this
                }
                Mi.prototype.clear = Cv, Mi.prototype.delete = Pv, Mi.prototype.get = Ov, Mi.prototype.has = Nv, Mi.prototype.set = Rv;

                function xf(n, o) {
                    var u = ie(n),
                        v = !u && gs(n),
                        A = !u && !v && qn(n),
                        R = !u && !v && !A && Vs(n),
                        H = u || v || A || R,
                        W = H ? Cc(n.length, km) : [],
                        X = W.length;
                    for (var ot in n)(o || Oe.call(n, ot)) && !(H && (ot == "length" || A && (ot == "offset" || ot == "parent") || R && (ot == "buffer" || ot == "byteLength" || ot == "byteOffset") || pn(ot, X))) && W.push(ot);
                    return W
                }

                function Mf(n) {
                    var o = n.length;
                    return o ? n[Vc(0, o - 1)] : e
                }

                function Tv(n, o) {
                    return fu(Fr(n), ls(o, 0, n.length))
                }

                function Fv(n) {
                    return fu(Fr(n))
                }

                function Bc(n, o, u) {
                    (u !== e && !Ci(n[o], u) || u === e && !(o in n)) && ln(n, o, u)
                }

                function Co(n, o, u) {
                    var v = n[o];
                    (!(Oe.call(n, o) && Ci(v, u)) || u === e && !(o in n)) && ln(n, o, u)
                }

                function Za(n, o) {
                    for (var u = n.length; u--;)
                        if (Ci(n[u][0], o)) return u;
                    return -1
                }

                function Bv(n, o, u, v) {
                    return Fn(n, function(A, R, H) {
                        o(v, A, u(A), H)
                    }), v
                }

                function Cf(n, o) {
                    return n && Hi(o, ur(o), n)
                }

                function Uv(n, o) {
                    return n && Hi(o, Ur(o), n)
                }

                function ln(n, o, u) {
                    o == "__proto__" && Ga ? Ga(n, o, {
                        configurable: !0,
                        enumerable: !0,
                        value: u,
                        writable: !0
                    }) : n[o] = u
                }

                function Uc(n, o) {
                    for (var u = -1, v = o.length, A = rt(v), R = n == null; ++u < v;) A[u] = R ? e : vh(n, o[u]);
                    return A
                }

                function ls(n, o, u) {
                    return n === n && (u !== e && (n = n <= u ? n : u), o !== e && (n = n >= o ? n : o)), n
                }

                function di(n, o, u, v, A, R) {
                    var H, W = o & E,
                        X = o & x,
                        ot = o & D;
                    if (u && (H = A ? u(n, v, A, R) : u(n)), H !== e) return H;
                    if (!Ve(n)) return n;
                    var ut = ie(n);
                    if (ut) {
                        if (H = Iy(n), !W) return Fr(n, H)
                    } else {
                        var pt = yr(n),
                            vt = pt == et || pt == ct;
                        if (qn(n)) return Zf(n, W);
                        if (pt == It || pt == _ || vt && !A) {
                            if (H = X || vt ? {} : yd(n), !W) return X ? py(n, Uv(H, n)) : dy(n, Cf(H, n))
                        } else {
                            if (!Te[pt]) return A ? n : {};
                            H = Dy(n, pt, W)
                        }
                    }
                    R || (R = new Mi);
                    var Ft = R.get(n);
                    if (Ft) return Ft;
                    R.set(n, H), Gd(n) ? n.forEach(function(Ht) {
                        H.add(di(Ht, o, u, Ht, n, R))
                    }) : Kd(n) && n.forEach(function(Ht, fe) {
                        H.set(fe, di(Ht, o, u, fe, n, R))
                    });
                    var kt = ot ? X ? ih : rh : X ? Ur : ur,
                        ce = ut ? e : kt(n);
                    return hi(ce || n, function(Ht, fe) {
                        ce && (fe = Ht, Ht = n[fe]), Co(H, fe, di(Ht, o, u, fe, n, R))
                    }), H
                }

                function Lv(n) {
                    var o = ur(n);
                    return function(u) {
                        return Pf(u, n, o)
                    }
                }

                function Pf(n, o, u) {
                    var v = u.length;
                    if (n == null) return !v;
                    for (n = Le(n); v--;) {
                        var A = u[v],
                            R = o[A],
                            H = n[A];
                        if (H === e && !(A in n) || !R(H)) return !1
                    }
                    return !0
                }

                function Of(n, o, u) {
                    if (typeof n != "function") throw new li(c);
                    return Bo(function() {
                        n.apply(e, u)
                    }, o)
                }

                function Po(n, o, u, v) {
                    var A = -1,
                        R = Ba,
                        H = !0,
                        W = n.length,
                        X = [],
                        ot = o.length;
                    if (!W) return X;
                    u && (o = ze(o, Wr(u))), v ? (R = Ac, H = !1) : o.length >= s && (R = Ao, H = !1, o = new hs(o));
                    t: for (; ++A < W;) {
                        var ut = n[A],
                            pt = u == null ? ut : u(ut);
                        if (ut = v || ut !== 0 ? ut : 0, H && pt === pt) {
                            for (var vt = ot; vt--;)
                                if (o[vt] === pt) continue t;
                            X.push(ut)
                        } else R(o, pt, v) || X.push(ut)
                    }
                    return X
                }
                var Fn = nd(ki),
                    Nf = nd(qc, !0);

                function qv(n, o) {
                    var u = !0;
                    return Fn(n, function(v, A, R) {
                        return u = !!o(v, A, R), u
                    }), u
                }

                function tu(n, o, u) {
                    for (var v = -1, A = n.length; ++v < A;) {
                        var R = n[v],
                            H = o(R);
                        if (H != null && (W === e ? H === H && !Qr(H) : u(H, W))) var W = H,
                            X = R
                    }
                    return X
                }

                function jv(n, o, u, v) {
                    var A = n.length;
                    for (u = ae(u), u < 0 && (u = -u > A ? 0 : A + u), v = v === e || v > A ? A : ae(v), v < 0 && (v += A), v = u > v ? 0 : Yd(v); u < v;) n[u++] = o;
                    return n
                }

                function Rf(n, o) {
                    var u = [];
                    return Fn(n, function(v, A, R) {
                        o(v, A, R) && u.push(v)
                    }), u
                }

                function lr(n, o, u, v, A) {
                    var R = -1,
                        H = n.length;
                    for (u || (u = My), A || (A = []); ++R < H;) {
                        var W = n[R];
                        o > 0 && u(W) ? o > 1 ? lr(W, o - 1, u, v, A) : Nn(A, W) : v || (A[A.length] = W)
                    }
                    return A
                }
                var Lc = sd(),
                    Tf = sd(!0);

                function ki(n, o) {
                    return n && Lc(n, o, ur)
                }

                function qc(n, o) {
                    return n && Tf(n, o, ur)
                }

                function eu(n, o) {
                    return On(o, function(u) {
                        return gn(n[u])
                    })
                }

                function fs(n, o) {
                    o = Un(o, n);
                    for (var u = 0, v = o.length; n != null && u < v;) n = n[Ki(o[u++])];
                    return u && u == v ? n : e
                }

                function Ff(n, o, u) {
                    var v = o(n);
                    return ie(n) ? v : Nn(v, u(n))
                }

                function Sr(n) {
                    return n == null ? n === e ? Vt : Pt : us && us in Le(n) ? Ey(n) : Fy(n)
                }

                function jc(n, o) {
                    return n > o
                }

                function $v(n, o) {
                    return n != null && Oe.call(n, o)
                }

                function zv(n, o) {
                    return n != null && o in Le(n)
                }

                function kv(n, o, u) {
                    return n >= vr(o, u) && n < ir(o, u)
                }

                function $c(n, o, u) {
                    for (var v = u ? Ac : Ba, A = n[0].length, R = n.length, H = R, W = rt(R), X = 1 / 0, ot = []; H--;) {
                        var ut = n[H];
                        H && o && (ut = ze(ut, Wr(o))), X = vr(ut.length, X), W[H] = !u && (o || A >= 120 && ut.length >= 120) ? new hs(H && ut) : e
                    }
                    ut = n[0];
                    var pt = -1,
                        vt = W[0];
                    t: for (; ++pt < A && ot.length < X;) {
                        var Ft = ut[pt],
                            kt = o ? o(Ft) : Ft;
                        if (Ft = u || Ft !== 0 ? Ft : 0, !(vt ? Ao(vt, kt) : v(ot, kt, u))) {
                            for (H = R; --H;) {
                                var ce = W[H];
                                if (!(ce ? Ao(ce, kt) : v(n[H], kt, u))) continue t
                            }
                            vt && vt.push(kt), ot.push(Ft)
                        }
                    }
                    return ot
                }

                function Hv(n, o, u, v) {
                    return ki(n, function(A, R, H) {
                        o(v, u(A), R, H)
                    }), v
                }

                function Oo(n, o, u) {
                    o = Un(o, n), n = Ed(n, o);
                    var v = n == null ? n : n[Ki(gi(o))];
                    return v == null ? e : ar(v, n, u)
                }

                function Bf(n) {
                    return Ge(n) && Sr(n) == _
                }

                function Kv(n) {
                    return Ge(n) && Sr(n) == Bt
                }

                function Vv(n) {
                    return Ge(n) && Sr(n) == k
                }

                function No(n, o, u, v, A) {
                    return n === o ? !0 : n == null || o == null || !Ge(n) && !Ge(o) ? n !== n && o !== o : Gv(n, o, u, v, No, A)
                }

                function Gv(n, o, u, v, A, R) {
                    var H = ie(n),
                        W = ie(o),
                        X = H ? Z : yr(n),
                        ot = W ? Z : yr(o);
                    X = X == _ ? It : X, ot = ot == _ ? It : ot;
                    var ut = X == It,
                        pt = ot == It,
                        vt = X == ot;
                    if (vt && qn(n)) {
                        if (!qn(o)) return !1;
                        H = !0, ut = !1
                    }
                    if (vt && !ut) return R || (R = new Mi), H || Vs(n) ? gd(n, o, u, v, A, R) : by(n, o, X, u, v, A, R);
                    if (!(u & P)) {
                        var Ft = ut && Oe.call(n, "__wrapped__"),
                            kt = pt && Oe.call(o, "__wrapped__");
                        if (Ft || kt) {
                            var ce = Ft ? n.value() : n,
                                Ht = kt ? o.value() : o;
                            return R || (R = new Mi), A(ce, Ht, u, v, R)
                        }
                    }
                    return vt ? (R || (R = new Mi), _y(n, o, u, v, A, R)) : !1
                }

                function Wv(n) {
                    return Ge(n) && yr(n) == at
                }

                function zc(n, o, u, v) {
                    var A = u.length,
                        R = A,
                        H = !v;
                    if (n == null) return !R;
                    for (n = Le(n); A--;) {
                        var W = u[A];
                        if (H && W[2] ? W[1] !== n[W[0]] : !(W[0] in n)) return !1
                    }
                    for (; ++A < R;) {
                        W = u[A];
                        var X = W[0],
                            ot = n[X],
                            ut = W[1];
                        if (H && W[2]) {
                            if (ot === e && !(X in n)) return !1
                        } else {
                            var pt = new Mi;
                            if (v) var vt = v(ot, ut, X, n, o, pt);
                            if (!(vt === e ? No(ut, ot, P | Y, v, pt) : vt)) return !1
                        }
                    }
                    return !0
                }

                function Uf(n) {
                    if (!Ve(n) || Py(n)) return !1;
                    var o = gn(n) ? Wm : oi;
                    return o.test(ps(n))
                }

                function Yv(n) {
                    return Ge(n) && Sr(n) == xt
                }

                function Qv(n) {
                    return Ge(n) && yr(n) == Ut
                }

                function Jv(n) {
                    return Ge(n) && yu(n.length) && !!Fe[Sr(n)]
                }

                function Lf(n) {
                    return typeof n == "function" ? n : n == null ? Lr : typeof n == "object" ? ie(n) ? $f(n[0], n[1]) : jf(n) : o0(n)
                }

                function kc(n) {
                    if (!Fo(n)) return tv(n);
                    var o = [];
                    for (var u in Le(n)) Oe.call(n, u) && u != "constructor" && o.push(u);
                    return o
                }

                function Xv(n) {
                    if (!Ve(n)) return Ty(n);
                    var o = Fo(n),
                        u = [];
                    for (var v in n) v == "constructor" && (o || !Oe.call(n, v)) || u.push(v);
                    return u
                }

                function Hc(n, o) {
                    return n < o
                }

                function qf(n, o) {
                    var u = -1,
                        v = Br(n) ? rt(n.length) : [];
                    return Fn(n, function(A, R, H) {
                        v[++u] = o(A, R, H)
                    }), v
                }

                function jf(n) {
                    var o = sh(n);
                    return o.length == 1 && o[0][2] ? bd(o[0][0], o[0][1]) : function(u) {
                        return u === n || zc(u, n, o)
                    }
                }

                function $f(n, o) {
                    return ah(n) && wd(o) ? bd(Ki(n), o) : function(u) {
                        var v = vh(u, n);
                        return v === e && v === o ? yh(u, n) : No(o, v, P | Y)
                    }
                }

                function ru(n, o, u, v, A) {
                    n !== o && Lc(o, function(R, H) {
                        if (A || (A = new Mi), Ve(R)) Zv(n, o, H, u, ru, v, A);
                        else {
                            var W = v ? v(ch(n, H), R, H + "", n, o, A) : e;
                            W === e && (W = R), Bc(n, H, W)
                        }
                    }, Ur)
                }

                function Zv(n, o, u, v, A, R, H) {
                    var W = ch(n, u),
                        X = ch(o, u),
                        ot = H.get(X);
                    if (ot) {
                        Bc(n, u, ot);
                        return
                    }
                    var ut = R ? R(W, X, u + "", n, o, H) : e,
                        pt = ut === e;
                    if (pt) {
                        var vt = ie(X),
                            Ft = !vt && qn(X),
                            kt = !vt && !Ft && Vs(X);
                        ut = X, vt || Ft || kt ? ie(W) ? ut = W : Qe(W) ? ut = Fr(W) : Ft ? (pt = !1, ut = Zf(X, !0)) : kt ? (pt = !1, ut = td(X, !0)) : ut = [] : Uo(X) || gs(X) ? (ut = W, gs(W) ? ut = Qd(W) : (!Ve(W) || gn(W)) && (ut = yd(X))) : pt = !1
                    }
                    pt && (H.set(X, ut), A(ut, X, v, R, H), H.delete(X)), Bc(n, u, ut)
                }

                function zf(n, o) {
                    var u = n.length;
                    if (u) return o += o < 0 ? u : 0, pn(o, u) ? n[o] : e
                }

                function kf(n, o, u) {
                    o.length ? o = ze(o, function(R) {
                        return ie(R) ? function(H) {
                            return fs(H, R.length === 1 ? R[0] : R)
                        } : R
                    }) : o = [Lr];
                    var v = -1;
                    o = ze(o, Wr(jt()));
                    var A = qf(n, function(R, H, W) {
                        var X = ze(o, function(ot) {
                            return ot(R)
                        });
                        return {
                            criteria: X,
                            index: ++v,
                            value: R
                        }
                    });
                    return Dm(A, function(R, H) {
                        return fy(R, H, u)
                    })
                }

                function ty(n, o) {
                    return Hf(n, o, function(u, v) {
                        return yh(n, v)
                    })
                }

                function Hf(n, o, u) {
                    for (var v = -1, A = o.length, R = {}; ++v < A;) {
                        var H = o[v],
                            W = fs(n, H);
                        u(W, H) && Ro(R, Un(H, n), W)
                    }
                    return R
                }

                function ey(n) {
                    return function(o) {
                        return fs(o, n)
                    }
                }

                function Kc(n, o, u, v) {
                    var A = v ? Im : Fs,
                        R = -1,
                        H = o.length,
                        W = n;
                    for (n === o && (o = Fr(o)), u && (W = ze(n, Wr(u))); ++R < H;)
                        for (var X = 0, ot = o[R], ut = u ? u(ot) : ot;
                            (X = A(W, ut, X, v)) > -1;) W !== n && Va.call(W, X, 1), Va.call(n, X, 1);
                    return n
                }

                function Kf(n, o) {
                    for (var u = n ? o.length : 0, v = u - 1; u--;) {
                        var A = o[u];
                        if (u == v || A !== R) {
                            var R = A;
                            pn(A) ? Va.call(n, A, 1) : Yc(n, A)
                        }
                    }
                    return n
                }

                function Vc(n, o) {
                    return n + Ya(If() * (o - n + 1))
                }

                function ry(n, o, u, v) {
                    for (var A = -1, R = ir(Wa((o - n) / (u || 1)), 0), H = rt(R); R--;) H[v ? R : ++A] = n, n += u;
                    return H
                }

                function Gc(n, o) {
                    var u = "";
                    if (!n || o < 1 || o > O) return u;
                    do o % 2 && (u += n), o = Ya(o / 2), o && (n += n); while (o);
                    return u
                }

                function he(n, o) {
                    return hh(_d(n, o, Lr), n + "")
                }

                function iy(n) {
                    return Mf(Gs(n))
                }

                function ny(n, o) {
                    var u = Gs(n);
                    return fu(u, ls(o, 0, u.length))
                }

                function Ro(n, o, u, v) {
                    if (!Ve(n)) return n;
                    o = Un(o, n);
                    for (var A = -1, R = o.length, H = R - 1, W = n; W != null && ++A < R;) {
                        var X = Ki(o[A]),
                            ot = u;
                        if (X === "__proto__" || X === "constructor" || X === "prototype") return n;
                        if (A != H) {
                            var ut = W[X];
                            ot = v ? v(ut, X, W) : e, ot === e && (ot = Ve(ut) ? ut : pn(o[A + 1]) ? [] : {})
                        }
                        Co(W, X, ot), W = W[X]
                    }
                    return n
                }
                var Vf = Qa ? function(n, o) {
                        return Qa.set(n, o), n
                    } : Lr,
                    sy = Ga ? function(n, o) {
                        return Ga(n, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: bh(o),
                            writable: !0
                        })
                    } : Lr;

                function oy(n) {
                    return fu(Gs(n))
                }

                function pi(n, o, u) {
                    var v = -1,
                        A = n.length;
                    o < 0 && (o = -o > A ? 0 : A + o), u = u > A ? A : u, u < 0 && (u += A), A = o > u ? 0 : u - o >>> 0, o >>>= 0;
                    for (var R = rt(A); ++v < A;) R[v] = n[v + o];
                    return R
                }

                function ay(n, o) {
                    var u;
                    return Fn(n, function(v, A, R) {
                        return u = o(v, A, R), !u
                    }), !!u
                }

                function iu(n, o, u) {
                    var v = 0,
                        A = n == null ? v : n.length;
                    if (typeof o == "number" && o === o && A <= it) {
                        for (; v < A;) {
                            var R = v + A >>> 1,
                                H = n[R];
                            H !== null && !Qr(H) && (u ? H <= o : H < o) ? v = R + 1 : A = R
                        }
                        return A
                    }
                    return Wc(n, o, Lr, u)
                }

                function Wc(n, o, u, v) {
                    var A = 0,
                        R = n == null ? 0 : n.length;
                    if (R === 0) return 0;
                    o = u(o);
                    for (var H = o !== o, W = o === null, X = Qr(o), ot = o === e; A < R;) {
                        var ut = Ya((A + R) / 2),
                            pt = u(n[ut]),
                            vt = pt !== e,
                            Ft = pt === null,
                            kt = pt === pt,
                            ce = Qr(pt);
                        if (H) var Ht = v || kt;
                        else ot ? Ht = kt && (v || vt) : W ? Ht = kt && vt && (v || !Ft) : X ? Ht = kt && vt && !Ft && (v || !ce) : Ft || ce ? Ht = !1 : Ht = v ? pt <= o : pt < o;
                        Ht ? A = ut + 1 : R = ut
                    }
                    return vr(R, N)
                }

                function Gf(n, o) {
                    for (var u = -1, v = n.length, A = 0, R = []; ++u < v;) {
                        var H = n[u],
                            W = o ? o(H) : H;
                        if (!u || !Ci(W, X)) {
                            var X = W;
                            R[A++] = H === 0 ? 0 : H
                        }
                    }
                    return R
                }

                function Wf(n) {
                    return typeof n == "number" ? n : Qr(n) ? I : +n
                }

                function Yr(n) {
                    if (typeof n == "string") return n;
                    if (ie(n)) return ze(n, Yr) + "";
                    if (Qr(n)) return Df ? Df.call(n) : "";
                    var o = n + "";
                    return o == "0" && 1 / n == -M ? "-0" : o
                }

                function Bn(n, o, u) {
                    var v = -1,
                        A = Ba,
                        R = n.length,
                        H = !0,
                        W = [],
                        X = W;
                    if (u) H = !1, A = Ac;
                    else if (R >= s) {
                        var ot = o ? null : yy(n);
                        if (ot) return La(ot);
                        H = !1, A = Ao, X = new hs
                    } else X = o ? [] : W;
                    t: for (; ++v < R;) {
                        var ut = n[v],
                            pt = o ? o(ut) : ut;
                        if (ut = u || ut !== 0 ? ut : 0, H && pt === pt) {
                            for (var vt = X.length; vt--;)
                                if (X[vt] === pt) continue t;
                            o && X.push(pt), W.push(ut)
                        } else A(X, pt, u) || (X !== W && X.push(pt), W.push(ut))
                    }
                    return W
                }

                function Yc(n, o) {
                    return o = Un(o, n), n = Ed(n, o), n == null || delete n[Ki(gi(o))]
                }

                function Yf(n, o, u, v) {
                    return Ro(n, o, u(fs(n, o)), v)
                }

                function nu(n, o, u, v) {
                    for (var A = n.length, R = v ? A : -1;
                        (v ? R-- : ++R < A) && o(n[R], R, n););
                    return u ? pi(n, v ? 0 : R, v ? R + 1 : A) : pi(n, v ? R + 1 : 0, v ? A : R)
                }

                function Qf(n, o) {
                    var u = n;
                    return u instanceof ge && (u = u.value()), Sc(o, function(v, A) {
                        return A.func.apply(A.thisArg, Nn([v], A.args))
                    }, u)
                }

                function Qc(n, o, u) {
                    var v = n.length;
                    if (v < 2) return v ? Bn(n[0]) : [];
                    for (var A = -1, R = rt(v); ++A < v;)
                        for (var H = n[A], W = -1; ++W < v;) W != A && (R[A] = Po(R[A] || H, n[W], o, u));
                    return Bn(lr(R, 1), o, u)
                }

                function Jf(n, o, u) {
                    for (var v = -1, A = n.length, R = o.length, H = {}; ++v < A;) {
                        var W = v < R ? o[v] : e;
                        u(H, n[v], W)
                    }
                    return H
                }

                function Jc(n) {
                    return Qe(n) ? n : []
                }

                function Xc(n) {
                    return typeof n == "function" ? n : Lr
                }

                function Un(n, o) {
                    return ie(n) ? n : ah(n, o) ? [n] : Dd(xe(n))
                }
                var uy = he;

                function Ln(n, o, u) {
                    var v = n.length;
                    return u = u === e ? v : u, !o && u >= v ? n : pi(n, o, u)
                }
                var Xf = Ym || function(n) {
                    return we.clearTimeout(n)
                };

                function Zf(n, o) {
                    if (o) return n.slice();
                    var u = n.length,
                        v = bf ? bf(u) : new n.constructor(u);
                    return n.copy(v), v
                }

                function Zc(n) {
                    var o = new n.constructor(n.byteLength);
                    return new Ha(o).set(new Ha(n)), o
                }

                function cy(n, o) {
                    var u = o ? Zc(n.buffer) : n.buffer;
                    return new n.constructor(u, n.byteOffset, n.byteLength)
                }

                function hy(n) {
                    var o = new n.constructor(n.source, le.exec(n));
                    return o.lastIndex = n.lastIndex, o
                }

                function ly(n) {
                    return Mo ? Le(Mo.call(n)) : {}
                }

                function td(n, o) {
                    var u = o ? Zc(n.buffer) : n.buffer;
                    return new n.constructor(u, n.byteOffset, n.length)
                }

                function ed(n, o) {
                    if (n !== o) {
                        var u = n !== e,
                            v = n === null,
                            A = n === n,
                            R = Qr(n),
                            H = o !== e,
                            W = o === null,
                            X = o === o,
                            ot = Qr(o);
                        if (!W && !ot && !R && n > o || R && H && X && !W && !ot || v && H && X || !u && X || !A) return 1;
                        if (!v && !R && !ot && n < o || ot && u && A && !v && !R || W && u && A || !H && A || !X) return -1
                    }
                    return 0
                }

                function fy(n, o, u) {
                    for (var v = -1, A = n.criteria, R = o.criteria, H = A.length, W = u.length; ++v < H;) {
                        var X = ed(A[v], R[v]);
                        if (X) {
                            if (v >= W) return X;
                            var ot = u[v];
                            return X * (ot == "desc" ? -1 : 1)
                        }
                    }
                    return n.index - o.index
                }

                function rd(n, o, u, v) {
                    for (var A = -1, R = n.length, H = u.length, W = -1, X = o.length, ot = ir(R - H, 0), ut = rt(X + ot), pt = !v; ++W < X;) ut[W] = o[W];
                    for (; ++A < H;)(pt || A < R) && (ut[u[A]] = n[A]);
                    for (; ot--;) ut[W++] = n[A++];
                    return ut
                }

                function id(n, o, u, v) {
                    for (var A = -1, R = n.length, H = -1, W = u.length, X = -1, ot = o.length, ut = ir(R - W, 0), pt = rt(ut + ot), vt = !v; ++A < ut;) pt[A] = n[A];
                    for (var Ft = A; ++X < ot;) pt[Ft + X] = o[X];
                    for (; ++H < W;)(vt || A < R) && (pt[Ft + u[H]] = n[A++]);
                    return pt
                }

                function Fr(n, o) {
                    var u = -1,
                        v = n.length;
                    for (o || (o = rt(v)); ++u < v;) o[u] = n[u];
                    return o
                }

                function Hi(n, o, u, v) {
                    var A = !u;
                    u || (u = {});
                    for (var R = -1, H = o.length; ++R < H;) {
                        var W = o[R],
                            X = v ? v(u[W], n[W], W, u, n) : e;
                        X === e && (X = n[W]), A ? ln(u, W, X) : Co(u, W, X)
                    }
                    return u
                }

                function dy(n, o) {
                    return Hi(n, oh(n), o)
                }

                function py(n, o) {
                    return Hi(n, md(n), o)
                }

                function su(n, o) {
                    return function(u, v) {
                        var A = ie(u) ? wm : Bv,
                            R = o ? o() : {};
                        return A(u, n, jt(v, 2), R)
                    }
                }

                function ks(n) {
                    return he(function(o, u) {
                        var v = -1,
                            A = u.length,
                            R = A > 1 ? u[A - 1] : e,
                            H = A > 2 ? u[2] : e;
                        for (R = n.length > 3 && typeof R == "function" ? (A--, R) : e, H && Ir(u[0], u[1], H) && (R = A < 3 ? e : R, A = 1), o = Le(o); ++v < A;) {
                            var W = u[v];
                            W && n(o, W, v, R)
                        }
                        return o
                    })
                }

                function nd(n, o) {
                    return function(u, v) {
                        if (u == null) return u;
                        if (!Br(u)) return n(u, v);
                        for (var A = u.length, R = o ? A : -1, H = Le(u);
                            (o ? R-- : ++R < A) && v(H[R], R, H) !== !1;);
                        return u
                    }
                }

                function sd(n) {
                    return function(o, u, v) {
                        for (var A = -1, R = Le(o), H = v(o), W = H.length; W--;) {
                            var X = H[n ? W : ++A];
                            if (u(R[X], X, R) === !1) break
                        }
                        return o
                    }
                }

                function gy(n, o, u) {
                    var v = o & G,
                        A = To(n);

                    function R() {
                        var H = this && this !== we && this instanceof R ? A : n;
                        return H.apply(v ? u : this, arguments)
                    }
                    return R
                }

                function od(n) {
                    return function(o) {
                        o = xe(o);
                        var u = Bs(o) ? xi(o) : e,
                            v = u ? u[0] : o.charAt(0),
                            A = u ? Ln(u, 1).join("") : o.slice(1);
                        return v[n]() + A
                    }
                }

                function Hs(n) {
                    return function(o) {
                        return Sc(n0(i0(o).replace(_o, "")), n, "")
                    }
                }

                function To(n) {
                    return function() {
                        var o = arguments;
                        switch (o.length) {
                            case 0:
                                return new n;
                            case 1:
                                return new n(o[0]);
                            case 2:
                                return new n(o[0], o[1]);
                            case 3:
                                return new n(o[0], o[1], o[2]);
                            case 4:
                                return new n(o[0], o[1], o[2], o[3]);
                            case 5:
                                return new n(o[0], o[1], o[2], o[3], o[4]);
                            case 6:
                                return new n(o[0], o[1], o[2], o[3], o[4], o[5]);
                            case 7:
                                return new n(o[0], o[1], o[2], o[3], o[4], o[5], o[6])
                        }
                        var u = zs(n.prototype),
                            v = n.apply(u, o);
                        return Ve(v) ? v : u
                    }
                }

                function my(n, o, u) {
                    var v = To(n);

                    function A() {
                        for (var R = arguments.length, H = rt(R), W = R, X = Ks(A); W--;) H[W] = arguments[W];
                        var ot = R < 3 && H[0] !== X && H[R - 1] !== X ? [] : Rn(H, X);
                        if (R -= ot.length, R < u) return ld(n, o, ou, A.placeholder, e, H, ot, e, e, u - R);
                        var ut = this && this !== we && this instanceof A ? v : n;
                        return ar(ut, this, H)
                    }
                    return A
                }

                function ad(n) {
                    return function(o, u, v) {
                        var A = Le(o);
                        if (!Br(o)) {
                            var R = jt(u, 3);
                            o = ur(o), u = function(W) {
                                return R(A[W], W, A)
                            }
                        }
                        var H = n(o, u, v);
                        return H > -1 ? A[R ? o[H] : H] : e
                    }
                }

                function ud(n) {
                    return dn(function(o) {
                        var u = o.length,
                            v = u,
                            A = fi.prototype.thru;
                        for (n && o.reverse(); v--;) {
                            var R = o[v];
                            if (typeof R != "function") throw new li(c);
                            if (A && !H && hu(R) == "wrapper") var H = new fi([], !0)
                        }
                        for (v = H ? v : u; ++v < u;) {
                            R = o[v];
                            var W = hu(R),
                                X = W == "wrapper" ? nh(R) : e;
                            X && uh(X[0]) && X[1] == (y | V | $ | T) && !X[4].length && X[9] == 1 ? H = H[hu(X[0])].apply(H, X[3]) : H = R.length == 1 && uh(R) ? H[W]() : H.thru(R)
                        }
                        return function() {
                            var ot = arguments,
                                ut = ot[0];
                            if (H && ot.length == 1 && ie(ut)) return H.plant(ut).value();
                            for (var pt = 0, vt = u ? o[pt].apply(this, ot) : ut; ++pt < u;) vt = o[pt].call(this, vt);
                            return vt
                        }
                    })
                }

                function ou(n, o, u, v, A, R, H, W, X, ot) {
                    var ut = o & y,
                        pt = o & G,
                        vt = o & tt,
                        Ft = o & (V | L),
                        kt = o & nt,
                        ce = vt ? e : To(n);

                    function Ht() {
                        for (var fe = arguments.length, be = rt(fe), Jr = fe; Jr--;) be[Jr] = arguments[Jr];
                        if (Ft) var Dr = Ks(Ht),
                            Xr = Mm(be, Dr);
                        if (v && (be = rd(be, v, A, Ft)), R && (be = id(be, R, H, Ft)), fe -= Xr, Ft && fe < ot) {
                            var Je = Rn(be, Dr);
                            return ld(n, o, ou, Ht.placeholder, u, be, Je, W, X, ot - fe)
                        }
                        var Pi = pt ? u : this,
                            vn = vt ? Pi[n] : n;
                        return fe = be.length, W ? be = By(be, W) : kt && fe > 1 && be.reverse(), ut && X < fe && (be.length = X), this && this !== we && this instanceof Ht && (vn = ce || To(vn)), vn.apply(Pi, be)
                    }
                    return Ht
                }

                function cd(n, o) {
                    return function(u, v) {
                        return Hv(u, n, o(v), {})
                    }
                }

                function au(n, o) {
                    return function(u, v) {
                        var A;
                        if (u === e && v === e) return o;
                        if (u !== e && (A = u), v !== e) {
                            if (A === e) return v;
                            typeof u == "string" || typeof v == "string" ? (u = Yr(u), v = Yr(v)) : (u = Wf(u), v = Wf(v)), A = n(u, v)
                        }
                        return A
                    }
                }

                function th(n) {
                    return dn(function(o) {
                        return o = ze(o, Wr(jt())), he(function(u) {
                            var v = this;
                            return n(o, function(A) {
                                return ar(A, v, u)
                            })
                        })
                    })
                }

                function uu(n, o) {
                    o = o === e ? " " : Yr(o);
                    var u = o.length;
                    if (u < 2) return u ? Gc(o, n) : o;
                    var v = Gc(o, Wa(n / Us(o)));
                    return Bs(o) ? Ln(xi(v), 0, n).join("") : v.slice(0, n)
                }

                function vy(n, o, u, v) {
                    var A = o & G,
                        R = To(n);

                    function H() {
                        for (var W = -1, X = arguments.length, ot = -1, ut = v.length, pt = rt(ut + X), vt = this && this !== we && this instanceof H ? R : n; ++ot < ut;) pt[ot] = v[ot];
                        for (; X--;) pt[ot++] = arguments[++W];
                        return ar(vt, A ? u : this, pt)
                    }
                    return H
                }

                function hd(n) {
                    return function(o, u, v) {
                        return v && typeof v != "number" && Ir(o, u, v) && (u = v = e), o = mn(o), u === e ? (u = o, o = 0) : u = mn(u), v = v === e ? o < u ? 1 : -1 : mn(v), ry(o, u, v, n)
                    }
                }

                function cu(n) {
                    return function(o, u) {
                        return typeof o == "string" && typeof u == "string" || (o = mi(o), u = mi(u)), n(o, u)
                    }
                }

                function ld(n, o, u, v, A, R, H, W, X, ot) {
                    var ut = o & V,
                        pt = ut ? H : e,
                        vt = ut ? e : H,
                        Ft = ut ? R : e,
                        kt = ut ? e : R;
                    o |= ut ? $ : z, o &= ~(ut ? z : $), o & K || (o &= ~(G | tt));
                    var ce = [n, o, A, Ft, pt, kt, vt, W, X, ot],
                        Ht = u.apply(e, ce);
                    return uh(n) && Ad(Ht, ce), Ht.placeholder = v, Sd(Ht, n, o)
                }

                function eh(n) {
                    var o = rr[n];
                    return function(u, v) {
                        if (u = mi(u), v = v == null ? 0 : vr(ae(v), 292), v && Sf(u)) {
                            var A = (xe(u) + "e").split("e"),
                                R = o(A[0] + "e" + (+A[1] + v));
                            return A = (xe(R) + "e").split("e"), +(A[0] + "e" + (+A[1] - v))
                        }
                        return o(u)
                    }
                }
                var yy = js && 1 / La(new js([, -0]))[1] == M ? function(n) {
                    return new js(n)
                } : Ah;

                function fd(n) {
                    return function(o) {
                        var u = yr(o);
                        return u == at ? Oc(o) : u == Ut ? Fm(o) : xm(o, n(o))
                    }
                }

                function fn(n, o, u, v, A, R, H, W) {
                    var X = o & tt;
                    if (!X && typeof n != "function") throw new li(c);
                    var ot = v ? v.length : 0;
                    if (ot || (o &= ~($ | z), v = A = e), H = H === e ? H : ir(ae(H), 0), W = W === e ? W : ae(W), ot -= A ? A.length : 0, o & z) {
                        var ut = v,
                            pt = A;
                        v = A = e
                    }
                    var vt = X ? e : nh(n),
                        Ft = [n, o, u, v, A, ut, pt, R, H, W];
                    if (vt && Ry(Ft, vt), n = Ft[0], o = Ft[1], u = Ft[2], v = Ft[3], A = Ft[4], W = Ft[9] = Ft[9] === e ? X ? 0 : n.length : ir(Ft[9] - ot, 0), !W && o & (V | L) && (o &= ~(V | L)), !o || o == G) var kt = gy(n, o, u);
                    else o == V || o == L ? kt = my(n, o, W) : (o == $ || o == (G | $)) && !A.length ? kt = vy(n, o, u, v) : kt = ou.apply(e, Ft);
                    var ce = vt ? Vf : Ad;
                    return Sd(ce(kt, Ft), n, o)
                }

                function dd(n, o, u, v) {
                    return n === e || Ci(n, qs[u]) && !Oe.call(v, u) ? o : n
                }

                function pd(n, o, u, v, A, R) {
                    return Ve(n) && Ve(o) && (R.set(o, n), ru(n, o, e, pd, R), R.delete(o)), n
                }

                function wy(n) {
                    return Uo(n) ? e : n
                }

                function gd(n, o, u, v, A, R) {
                    var H = u & P,
                        W = n.length,
                        X = o.length;
                    if (W != X && !(H && X > W)) return !1;
                    var ot = R.get(n),
                        ut = R.get(o);
                    if (ot && ut) return ot == o && ut == n;
                    var pt = -1,
                        vt = !0,
                        Ft = u & Y ? new hs : e;
                    for (R.set(n, o), R.set(o, n); ++pt < W;) {
                        var kt = n[pt],
                            ce = o[pt];
                        if (v) var Ht = H ? v(ce, kt, pt, o, n, R) : v(kt, ce, pt, n, o, R);
                        if (Ht !== e) {
                            if (Ht) continue;
                            vt = !1;
                            break
                        }
                        if (Ft) {
                            if (!Ic(o, function(fe, be) {
                                    if (!Ao(Ft, be) && (kt === fe || A(kt, fe, u, v, R))) return Ft.push(be)
                                })) {
                                vt = !1;
                                break
                            }
                        } else if (!(kt === ce || A(kt, ce, u, v, R))) {
                            vt = !1;
                            break
                        }
                    }
                    return R.delete(n), R.delete(o), vt
                }

                function by(n, o, u, v, A, R, H) {
                    switch (u) {
                        case wt:
                            if (n.byteLength != o.byteLength || n.byteOffset != o.byteOffset) return !1;
                            n = n.buffer, o = o.buffer;
                        case Bt:
                            return !(n.byteLength != o.byteLength || !R(new Ha(n), new Ha(o)));
                        case q:
                        case k:
                        case Mt:
                            return Ci(+n, +o);
                        case B:
                            return n.name == o.name && n.message == o.message;
                        case xt:
                        case _t:
                            return n == o + "";
                        case at:
                            var W = Oc;
                        case Ut:
                            var X = v & P;
                            if (W || (W = La), n.size != o.size && !X) return !1;
                            var ot = H.get(n);
                            if (ot) return ot == o;
                            v |= Y, H.set(n, o);
                            var ut = gd(W(n), W(o), v, A, R, H);
                            return H.delete(n), ut;
                        case Et:
                            if (Mo) return Mo.call(n) == Mo.call(o)
                    }
                    return !1
                }

                function _y(n, o, u, v, A, R) {
                    var H = u & P,
                        W = rh(n),
                        X = W.length,
                        ot = rh(o),
                        ut = ot.length;
                    if (X != ut && !H) return !1;
                    for (var pt = X; pt--;) {
                        var vt = W[pt];
                        if (!(H ? vt in o : Oe.call(o, vt))) return !1
                    }
                    var Ft = R.get(n),
                        kt = R.get(o);
                    if (Ft && kt) return Ft == o && kt == n;
                    var ce = !0;
                    R.set(n, o), R.set(o, n);
                    for (var Ht = H; ++pt < X;) {
                        vt = W[pt];
                        var fe = n[vt],
                            be = o[vt];
                        if (v) var Jr = H ? v(be, fe, vt, o, n, R) : v(fe, be, vt, n, o, R);
                        if (!(Jr === e ? fe === be || A(fe, be, u, v, R) : Jr)) {
                            ce = !1;
                            break
                        }
                        Ht || (Ht = vt == "constructor")
                    }
                    if (ce && !Ht) {
                        var Dr = n.constructor,
                            Xr = o.constructor;
                        Dr != Xr && "constructor" in n && "constructor" in o && !(typeof Dr == "function" && Dr instanceof Dr && typeof Xr == "function" && Xr instanceof Xr) && (ce = !1)
                    }
                    return R.delete(n), R.delete(o), ce
                }

                function dn(n) {
                    return hh(_d(n, e, Pd), n + "")
                }

                function rh(n) {
                    return Ff(n, ur, oh)
                }

                function ih(n) {
                    return Ff(n, Ur, md)
                }
                var nh = Qa ? function(n) {
                    return Qa.get(n)
                } : Ah;

                function hu(n) {
                    for (var o = n.name + "", u = $s[o], v = Oe.call($s, o) ? u.length : 0; v--;) {
                        var A = u[v],
                            R = A.func;
                        if (R == null || R == n) return A.name
                    }
                    return o
                }

                function Ks(n) {
                    var o = Oe.call(C, "placeholder") ? C : n;
                    return o.placeholder
                }

                function jt() {
                    var n = C.iteratee || _h;
                    return n = n === _h ? Lf : n, arguments.length ? n(arguments[0], arguments[1]) : n
                }

                function lu(n, o) {
                    var u = n.__data__;
                    return Cy(o) ? u[typeof o == "string" ? "string" : "hash"] : u.map
                }

                function sh(n) {
                    for (var o = ur(n), u = o.length; u--;) {
                        var v = o[u],
                            A = n[v];
                        o[u] = [v, A, wd(A)]
                    }
                    return o
                }

                function ds(n, o) {
                    var u = Nm(n, o);
                    return Uf(u) ? u : e
                }

                function Ey(n) {
                    var o = Oe.call(n, us),
                        u = n[us];
                    try {
                        n[us] = e;
                        var v = !0
                    } catch {}
                    var A = za.call(n);
                    return v && (o ? n[us] = u : delete n[us]), A
                }
                var oh = Rc ? function(n) {
                        return n == null ? [] : (n = Le(n), On(Rc(n), function(o) {
                            return Ef.call(n, o)
                        }))
                    } : Sh,
                    md = Rc ? function(n) {
                        for (var o = []; n;) Nn(o, oh(n)), n = Ka(n);
                        return o
                    } : Sh,
                    yr = Sr;
                (Tc && yr(new Tc(new ArrayBuffer(1))) != wt || Io && yr(new Io) != at || Fc && yr(Fc.resolve()) != Ee || js && yr(new js) != Ut || Do && yr(new Do) != yt) && (yr = function(n) {
                    var o = Sr(n),
                        u = o == It ? n.constructor : e,
                        v = u ? ps(u) : "";
                    if (v) switch (v) {
                        case nv:
                            return wt;
                        case sv:
                            return at;
                        case ov:
                            return Ee;
                        case av:
                            return Ut;
                        case uv:
                            return yt
                    }
                    return o
                });

                function Ay(n, o, u) {
                    for (var v = -1, A = u.length; ++v < A;) {
                        var R = u[v],
                            H = R.size;
                        switch (R.type) {
                            case "drop":
                                n += H;
                                break;
                            case "dropRight":
                                o -= H;
                                break;
                            case "take":
                                o = vr(o, n + H);
                                break;
                            case "takeRight":
                                n = ir(n, o - H);
                                break
                        }
                    }
                    return {
                        start: n,
                        end: o
                    }
                }

                function Sy(n) {
                    var o = n.match(qt);
                    return o ? o[1].split(Re) : []
                }

                function vd(n, o, u) {
                    o = Un(o, n);
                    for (var v = -1, A = o.length, R = !1; ++v < A;) {
                        var H = Ki(o[v]);
                        if (!(R = n != null && u(n, H))) break;
                        n = n[H]
                    }
                    return R || ++v != A ? R : (A = n == null ? 0 : n.length, !!A && yu(A) && pn(H, A) && (ie(n) || gs(n)))
                }

                function Iy(n) {
                    var o = n.length,
                        u = new n.constructor(o);
                    return o && typeof n[0] == "string" && Oe.call(n, "index") && (u.index = n.index, u.input = n.input), u
                }

                function yd(n) {
                    return typeof n.constructor == "function" && !Fo(n) ? zs(Ka(n)) : {}
                }

                function Dy(n, o, u) {
                    var v = n.constructor;
                    switch (o) {
                        case Bt:
                            return Zc(n);
                        case q:
                        case k:
                            return new v(+n);
                        case wt:
                            return cy(n, u);
                        case Ct:
                        case Lt:
                        case Ot:
                        case Nt:
                        case se:
                        case Tt:
                        case Rt:
                        case He:
                        case ue:
                            return td(n, u);
                        case at:
                            return new v;
                        case Mt:
                        case _t:
                            return new v(n);
                        case xt:
                            return hy(n);
                        case Ut:
                            return new v;
                        case Et:
                            return ly(n)
                    }
                }

                function xy(n, o) {
                    var u = o.length;
                    if (!u) return n;
                    var v = u - 1;
                    return o[v] = (u > 1 ? "& " : "") + o[v], o = o.join(u > 2 ? ", " : " "), n.replace(Qt, `{
/* [wrapped with ` + o + `] */
`)
                }

                function My(n) {
                    return ie(n) || gs(n) || !!(Af && n && n[Af])
                }

                function pn(n, o) {
                    var u = typeof n;
                    return o = o ? ? O, !!o && (u == "number" || u != "symbol" && ui.test(n)) && n > -1 && n % 1 == 0 && n < o
                }

                function Ir(n, o, u) {
                    if (!Ve(u)) return !1;
                    var v = typeof o;
                    return (v == "number" ? Br(u) && pn(o, u.length) : v == "string" && o in u) ? Ci(u[o], n) : !1
                }

                function ah(n, o) {
                    if (ie(n)) return !1;
                    var u = typeof n;
                    return u == "number" || u == "symbol" || u == "boolean" || n == null || Qr(n) ? !0 : Jt.test(n) || !Ae.test(n) || o != null && n in Le(o)
                }

                function Cy(n) {
                    var o = typeof n;
                    return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? n !== "__proto__" : n === null
                }

                function uh(n) {
                    var o = hu(n),
                        u = C[o];
                    if (typeof u != "function" || !(o in ge.prototype)) return !1;
                    if (n === u) return !0;
                    var v = nh(u);
                    return !!v && n === v[0]
                }

                function Py(n) {
                    return !!wf && wf in n
                }
                var Oy = ja ? gn : Ih;

                function Fo(n) {
                    var o = n && n.constructor,
                        u = typeof o == "function" && o.prototype || qs;
                    return n === u
                }

                function wd(n) {
                    return n === n && !Ve(n)
                }

                function bd(n, o) {
                    return function(u) {
                        return u == null ? !1 : u[n] === o && (o !== e || n in Le(u))
                    }
                }

                function Ny(n) {
                    var o = mu(n, function(v) {
                            return u.size === d && u.clear(), v
                        }),
                        u = o.cache;
                    return o
                }

                function Ry(n, o) {
                    var u = n[1],
                        v = o[1],
                        A = u | v,
                        R = A < (G | tt | y),
                        H = v == y && u == V || v == y && u == T && n[7].length <= o[8] || v == (y | T) && o[7].length <= o[8] && u == V;
                    if (!(R || H)) return n;
                    v & G && (n[2] = o[2], A |= u & G ? 0 : K);
                    var W = o[3];
                    if (W) {
                        var X = n[3];
                        n[3] = X ? rd(X, W, o[4]) : W, n[4] = X ? Rn(n[3], b) : o[4]
                    }
                    return W = o[5], W && (X = n[5], n[5] = X ? id(X, W, o[6]) : W, n[6] = X ? Rn(n[5], b) : o[6]), W = o[7], W && (n[7] = W), v & y && (n[8] = n[8] == null ? o[8] : vr(n[8], o[8])), n[9] == null && (n[9] = o[9]), n[0] = o[0], n[1] = A, n
                }

                function Ty(n) {
                    var o = [];
                    if (n != null)
                        for (var u in Le(n)) o.push(u);
                    return o
                }

                function Fy(n) {
                    return za.call(n)
                }

                function _d(n, o, u) {
                    return o = ir(o === e ? n.length - 1 : o, 0),
                        function() {
                            for (var v = arguments, A = -1, R = ir(v.length - o, 0), H = rt(R); ++A < R;) H[A] = v[o + A];
                            A = -1;
                            for (var W = rt(o + 1); ++A < o;) W[A] = v[A];
                            return W[o] = u(H), ar(n, this, W)
                        }
                }

                function Ed(n, o) {
                    return o.length < 2 ? n : fs(n, pi(o, 0, -1))
                }

                function By(n, o) {
                    for (var u = n.length, v = vr(o.length, u), A = Fr(n); v--;) {
                        var R = o[v];
                        n[v] = pn(R, u) ? A[R] : e
                    }
                    return n
                }

                function ch(n, o) {
                    if (!(o === "constructor" && typeof n[o] == "function") && o != "__proto__") return n[o]
                }
                var Ad = Id(Vf),
                    Bo = Jm || function(n, o) {
                        return we.setTimeout(n, o)
                    },
                    hh = Id(sy);

                function Sd(n, o, u) {
                    var v = o + "";
                    return hh(n, xy(v, Uy(Sy(v), u)))
                }

                function Id(n) {
                    var o = 0,
                        u = 0;
                    return function() {
                        var v = ev(),
                            A = l - (v - u);
                        if (u = v, A > 0) {
                            if (++o >= mt) return arguments[0]
                        } else o = 0;
                        return n.apply(e, arguments)
                    }
                }

                function fu(n, o) {
                    var u = -1,
                        v = n.length,
                        A = v - 1;
                    for (o = o === e ? v : o; ++u < o;) {
                        var R = Vc(u, A),
                            H = n[R];
                        n[R] = n[u], n[u] = H
                    }
                    return n.length = o, n
                }
                var Dd = Ny(function(n) {
                    var o = [];
                    return n.charCodeAt(0) === 46 && o.push(""), n.replace(Xt, function(u, v, A, R) {
                        o.push(A ? R.replace(Ii, "$1") : v || u)
                    }), o
                });

                function Ki(n) {
                    if (typeof n == "string" || Qr(n)) return n;
                    var o = n + "";
                    return o == "0" && 1 / n == -M ? "-0" : o
                }

                function ps(n) {
                    if (n != null) {
                        try {
                            return $a.call(n)
                        } catch {}
                        try {
                            return n + ""
                        } catch {}
                    }
                    return ""
                }

                function Uy(n, o) {
                    return hi(dt, function(u) {
                        var v = "_." + u[0];
                        o & u[1] && !Ba(n, v) && n.push(v)
                    }), n.sort()
                }

                function xd(n) {
                    if (n instanceof ge) return n.clone();
                    var o = new fi(n.__wrapped__, n.__chain__);
                    return o.__actions__ = Fr(n.__actions__), o.__index__ = n.__index__, o.__values__ = n.__values__, o
                }

                function Ly(n, o, u) {
                    (u ? Ir(n, o, u) : o === e) ? o = 1: o = ir(ae(o), 0);
                    var v = n == null ? 0 : n.length;
                    if (!v || o < 1) return [];
                    for (var A = 0, R = 0, H = rt(Wa(v / o)); A < v;) H[R++] = pi(n, A, A += o);
                    return H
                }

                function qy(n) {
                    for (var o = -1, u = n == null ? 0 : n.length, v = 0, A = []; ++o < u;) {
                        var R = n[o];
                        R && (A[v++] = R)
                    }
                    return A
                }

                function jy() {
                    var n = arguments.length;
                    if (!n) return [];
                    for (var o = rt(n - 1), u = arguments[0], v = n; v--;) o[v - 1] = arguments[v];
                    return Nn(ie(u) ? Fr(u) : [u], lr(o, 1))
                }
                var $y = he(function(n, o) {
                        return Qe(n) ? Po(n, lr(o, 1, Qe, !0)) : []
                    }),
                    zy = he(function(n, o) {
                        var u = gi(o);
                        return Qe(u) && (u = e), Qe(n) ? Po(n, lr(o, 1, Qe, !0), jt(u, 2)) : []
                    }),
                    ky = he(function(n, o) {
                        var u = gi(o);
                        return Qe(u) && (u = e), Qe(n) ? Po(n, lr(o, 1, Qe, !0), e, u) : []
                    });

                function Hy(n, o, u) {
                    var v = n == null ? 0 : n.length;
                    return v ? (o = u || o === e ? 1 : ae(o), pi(n, o < 0 ? 0 : o, v)) : []
                }

                function Ky(n, o, u) {
                    var v = n == null ? 0 : n.length;
                    return v ? (o = u || o === e ? 1 : ae(o), o = v - o, pi(n, 0, o < 0 ? 0 : o)) : []
                }

                function Vy(n, o) {
                    return n && n.length ? nu(n, jt(o, 3), !0, !0) : []
                }

                function Gy(n, o) {
                    return n && n.length ? nu(n, jt(o, 3), !0) : []
                }

                function Wy(n, o, u, v) {
                    var A = n == null ? 0 : n.length;
                    return A ? (u && typeof u != "number" && Ir(n, o, u) && (u = 0, v = A), jv(n, o, u, v)) : []
                }

                function Md(n, o, u) {
                    var v = n == null ? 0 : n.length;
                    if (!v) return -1;
                    var A = u == null ? 0 : ae(u);
                    return A < 0 && (A = ir(v + A, 0)), Ua(n, jt(o, 3), A)
                }

                function Cd(n, o, u) {
                    var v = n == null ? 0 : n.length;
                    if (!v) return -1;
                    var A = v - 1;
                    return u !== e && (A = ae(u), A = u < 0 ? ir(v + A, 0) : vr(A, v - 1)), Ua(n, jt(o, 3), A, !0)
                }

                function Pd(n) {
                    var o = n == null ? 0 : n.length;
                    return o ? lr(n, 1) : []
                }

                function Yy(n) {
                    var o = n == null ? 0 : n.length;
                    return o ? lr(n, M) : []
                }

                function Qy(n, o) {
                    var u = n == null ? 0 : n.length;
                    return u ? (o = o === e ? 1 : ae(o), lr(n, o)) : []
                }

                function Jy(n) {
                    for (var o = -1, u = n == null ? 0 : n.length, v = {}; ++o < u;) {
                        var A = n[o];
                        v[A[0]] = A[1]
                    }
                    return v
                }

                function Od(n) {
                    return n && n.length ? n[0] : e
                }

                function Xy(n, o, u) {
                    var v = n == null ? 0 : n.length;
                    if (!v) return -1;
                    var A = u == null ? 0 : ae(u);
                    return A < 0 && (A = ir(v + A, 0)), Fs(n, o, A)
                }

                function Zy(n) {
                    var o = n == null ? 0 : n.length;
                    return o ? pi(n, 0, -1) : []
                }
                var tw = he(function(n) {
                        var o = ze(n, Jc);
                        return o.length && o[0] === n[0] ? $c(o) : []
                    }),
                    ew = he(function(n) {
                        var o = gi(n),
                            u = ze(n, Jc);
                        return o === gi(u) ? o = e : u.pop(), u.length && u[0] === n[0] ? $c(u, jt(o, 2)) : []
                    }),
                    rw = he(function(n) {
                        var o = gi(n),
                            u = ze(n, Jc);
                        return o = typeof o == "function" ? o : e, o && u.pop(), u.length && u[0] === n[0] ? $c(u, e, o) : []
                    });

                function iw(n, o) {
                    return n == null ? "" : Zm.call(n, o)
                }

                function gi(n) {
                    var o = n == null ? 0 : n.length;
                    return o ? n[o - 1] : e
                }

                function nw(n, o, u) {
                    var v = n == null ? 0 : n.length;
                    if (!v) return -1;
                    var A = v;
                    return u !== e && (A = ae(u), A = A < 0 ? ir(v + A, 0) : vr(A, v - 1)), o === o ? Um(n, o, A) : Ua(n, lf, A, !0)
                }

                function sw(n, o) {
                    return n && n.length ? zf(n, ae(o)) : e
                }
                var ow = he(Nd);

                function Nd(n, o) {
                    return n && n.length && o && o.length ? Kc(n, o) : n
                }

                function aw(n, o, u) {
                    return n && n.length && o && o.length ? Kc(n, o, jt(u, 2)) : n
                }

                function uw(n, o, u) {
                    return n && n.length && o && o.length ? Kc(n, o, e, u) : n
                }
                var cw = dn(function(n, o) {
                    var u = n == null ? 0 : n.length,
                        v = Uc(n, o);
                    return Kf(n, ze(o, function(A) {
                        return pn(A, u) ? +A : A
                    }).sort(ed)), v
                });

                function hw(n, o) {
                    var u = [];
                    if (!(n && n.length)) return u;
                    var v = -1,
                        A = [],
                        R = n.length;
                    for (o = jt(o, 3); ++v < R;) {
                        var H = n[v];
                        o(H, v, n) && (u.push(H), A.push(v))
                    }
                    return Kf(n, A), u
                }

                function lh(n) {
                    return n == null ? n : iv.call(n)
                }

                function lw(n, o, u) {
                    var v = n == null ? 0 : n.length;
                    return v ? (u && typeof u != "number" && Ir(n, o, u) ? (o = 0, u = v) : (o = o == null ? 0 : ae(o), u = u === e ? v : ae(u)), pi(n, o, u)) : []
                }

                function fw(n, o) {
                    return iu(n, o)
                }

                function dw(n, o, u) {
                    return Wc(n, o, jt(u, 2))
                }

                function pw(n, o) {
                    var u = n == null ? 0 : n.length;
                    if (u) {
                        var v = iu(n, o);
                        if (v < u && Ci(n[v], o)) return v
                    }
                    return -1
                }

                function gw(n, o) {
                    return iu(n, o, !0)
                }

                function mw(n, o, u) {
                    return Wc(n, o, jt(u, 2), !0)
                }

                function vw(n, o) {
                    var u = n == null ? 0 : n.length;
                    if (u) {
                        var v = iu(n, o, !0) - 1;
                        if (Ci(n[v], o)) return v
                    }
                    return -1
                }

                function yw(n) {
                    return n && n.length ? Gf(n) : []
                }

                function ww(n, o) {
                    return n && n.length ? Gf(n, jt(o, 2)) : []
                }

                function bw(n) {
                    var o = n == null ? 0 : n.length;
                    return o ? pi(n, 1, o) : []
                }

                function _w(n, o, u) {
                    return n && n.length ? (o = u || o === e ? 1 : ae(o), pi(n, 0, o < 0 ? 0 : o)) : []
                }

                function Ew(n, o, u) {
                    var v = n == null ? 0 : n.length;
                    return v ? (o = u || o === e ? 1 : ae(o), o = v - o, pi(n, o < 0 ? 0 : o, v)) : []
                }

                function Aw(n, o) {
                    return n && n.length ? nu(n, jt(o, 3), !1, !0) : []
                }

                function Sw(n, o) {
                    return n && n.length ? nu(n, jt(o, 3)) : []
                }
                var Iw = he(function(n) {
                        return Bn(lr(n, 1, Qe, !0))
                    }),
                    Dw = he(function(n) {
                        var o = gi(n);
                        return Qe(o) && (o = e), Bn(lr(n, 1, Qe, !0), jt(o, 2))
                    }),
                    xw = he(function(n) {
                        var o = gi(n);
                        return o = typeof o == "function" ? o : e, Bn(lr(n, 1, Qe, !0), e, o)
                    });

                function Mw(n) {
                    return n && n.length ? Bn(n) : []
                }

                function Cw(n, o) {
                    return n && n.length ? Bn(n, jt(o, 2)) : []
                }

                function Pw(n, o) {
                    return o = typeof o == "function" ? o : e, n && n.length ? Bn(n, e, o) : []
                }

                function fh(n) {
                    if (!(n && n.length)) return [];
                    var o = 0;
                    return n = On(n, function(u) {
                        if (Qe(u)) return o = ir(u.length, o), !0
                    }), Cc(o, function(u) {
                        return ze(n, Dc(u))
                    })
                }

                function Rd(n, o) {
                    if (!(n && n.length)) return [];
                    var u = fh(n);
                    return o == null ? u : ze(u, function(v) {
                        return ar(o, e, v)
                    })
                }
                var Ow = he(function(n, o) {
                        return Qe(n) ? Po(n, o) : []
                    }),
                    Nw = he(function(n) {
                        return Qc(On(n, Qe))
                    }),
                    Rw = he(function(n) {
                        var o = gi(n);
                        return Qe(o) && (o = e), Qc(On(n, Qe), jt(o, 2))
                    }),
                    Tw = he(function(n) {
                        var o = gi(n);
                        return o = typeof o == "function" ? o : e, Qc(On(n, Qe), e, o)
                    }),
                    Fw = he(fh);

                function Bw(n, o) {
                    return Jf(n || [], o || [], Co)
                }

                function Uw(n, o) {
                    return Jf(n || [], o || [], Ro)
                }
                var Lw = he(function(n) {
                    var o = n.length,
                        u = o > 1 ? n[o - 1] : e;
                    return u = typeof u == "function" ? (n.pop(), u) : e, Rd(n, u)
                });

                function Td(n) {
                    var o = C(n);
                    return o.__chain__ = !0, o
                }

                function qw(n, o) {
                    return o(n), n
                }

                function du(n, o) {
                    return o(n)
                }
                var jw = dn(function(n) {
                    var o = n.length,
                        u = o ? n[0] : 0,
                        v = this.__wrapped__,
                        A = function(R) {
                            return Uc(R, n)
                        };
                    return o > 1 || this.__actions__.length || !(v instanceof ge) || !pn(u) ? this.thru(A) : (v = v.slice(u, +u + (o ? 1 : 0)), v.__actions__.push({
                        func: du,
                        args: [A],
                        thisArg: e
                    }), new fi(v, this.__chain__).thru(function(R) {
                        return o && !R.length && R.push(e), R
                    }))
                });

                function $w() {
                    return Td(this)
                }

                function zw() {
                    return new fi(this.value(), this.__chain__)
                }

                function kw() {
                    this.__values__ === e && (this.__values__ = Wd(this.value()));
                    var n = this.__index__ >= this.__values__.length,
                        o = n ? e : this.__values__[this.__index__++];
                    return {
                        done: n,
                        value: o
                    }
                }

                function Hw() {
                    return this
                }

                function Kw(n) {
                    for (var o, u = this; u instanceof Xa;) {
                        var v = xd(u);
                        v.__index__ = 0, v.__values__ = e, o ? A.__wrapped__ = v : o = v;
                        var A = v;
                        u = u.__wrapped__
                    }
                    return A.__wrapped__ = n, o
                }

                function Vw() {
                    var n = this.__wrapped__;
                    if (n instanceof ge) {
                        var o = n;
                        return this.__actions__.length && (o = new ge(this)), o = o.reverse(), o.__actions__.push({
                            func: du,
                            args: [lh],
                            thisArg: e
                        }), new fi(o, this.__chain__)
                    }
                    return this.thru(lh)
                }

                function Gw() {
                    return Qf(this.__wrapped__, this.__actions__)
                }
                var Ww = su(function(n, o, u) {
                    Oe.call(n, u) ? ++n[u] : ln(n, u, 1)
                });

                function Yw(n, o, u) {
                    var v = ie(n) ? cf : qv;
                    return u && Ir(n, o, u) && (o = e), v(n, jt(o, 3))
                }

                function Qw(n, o) {
                    var u = ie(n) ? On : Rf;
                    return u(n, jt(o, 3))
                }
                var Jw = ad(Md),
                    Xw = ad(Cd);

                function Zw(n, o) {
                    return lr(pu(n, o), 1)
                }

                function tb(n, o) {
                    return lr(pu(n, o), M)
                }

                function eb(n, o, u) {
                    return u = u === e ? 1 : ae(u), lr(pu(n, o), u)
                }

                function Fd(n, o) {
                    var u = ie(n) ? hi : Fn;
                    return u(n, jt(o, 3))
                }

                function Bd(n, o) {
                    var u = ie(n) ? bm : Nf;
                    return u(n, jt(o, 3))
                }
                var rb = su(function(n, o, u) {
                    Oe.call(n, u) ? n[u].push(o) : ln(n, u, [o])
                });

                function ib(n, o, u, v) {
                    n = Br(n) ? n : Gs(n), u = u && !v ? ae(u) : 0;
                    var A = n.length;
                    return u < 0 && (u = ir(A + u, 0)), wu(n) ? u <= A && n.indexOf(o, u) > -1 : !!A && Fs(n, o, u) > -1
                }
                var nb = he(function(n, o, u) {
                        var v = -1,
                            A = typeof o == "function",
                            R = Br(n) ? rt(n.length) : [];
                        return Fn(n, function(H) {
                            R[++v] = A ? ar(o, H, u) : Oo(H, o, u)
                        }), R
                    }),
                    sb = su(function(n, o, u) {
                        ln(n, u, o)
                    });

                function pu(n, o) {
                    var u = ie(n) ? ze : qf;
                    return u(n, jt(o, 3))
                }

                function ob(n, o, u, v) {
                    return n == null ? [] : (ie(o) || (o = o == null ? [] : [o]), u = v ? e : u, ie(u) || (u = u == null ? [] : [u]), kf(n, o, u))
                }
                var ab = su(function(n, o, u) {
                    n[u ? 0 : 1].push(o)
                }, function() {
                    return [
                        [],
                        []
                    ]
                });

                function ub(n, o, u) {
                    var v = ie(n) ? Sc : df,
                        A = arguments.length < 3;
                    return v(n, jt(o, 4), u, A, Fn)
                }

                function cb(n, o, u) {
                    var v = ie(n) ? _m : df,
                        A = arguments.length < 3;
                    return v(n, jt(o, 4), u, A, Nf)
                }

                function hb(n, o) {
                    var u = ie(n) ? On : Rf;
                    return u(n, vu(jt(o, 3)))
                }

                function lb(n) {
                    var o = ie(n) ? Mf : iy;
                    return o(n)
                }

                function fb(n, o, u) {
                    (u ? Ir(n, o, u) : o === e) ? o = 1: o = ae(o);
                    var v = ie(n) ? Tv : ny;
                    return v(n, o)
                }

                function db(n) {
                    var o = ie(n) ? Fv : oy;
                    return o(n)
                }

                function pb(n) {
                    if (n == null) return 0;
                    if (Br(n)) return wu(n) ? Us(n) : n.length;
                    var o = yr(n);
                    return o == at || o == Ut ? n.size : kc(n).length
                }

                function gb(n, o, u) {
                    var v = ie(n) ? Ic : ay;
                    return u && Ir(n, o, u) && (o = e), v(n, jt(o, 3))
                }
                var mb = he(function(n, o) {
                        if (n == null) return [];
                        var u = o.length;
                        return u > 1 && Ir(n, o[0], o[1]) ? o = [] : u > 2 && Ir(o[0], o[1], o[2]) && (o = [o[0]]), kf(n, lr(o, 1), [])
                    }),
                    gu = Qm || function() {
                        return we.Date.now()
                    };

                function vb(n, o) {
                    if (typeof o != "function") throw new li(c);
                    return n = ae(n),
                        function() {
                            if (--n < 1) return o.apply(this, arguments)
                        }
                }

                function Ud(n, o, u) {
                    return o = u ? e : o, o = n && o == null ? n.length : o, fn(n, y, e, e, e, e, o)
                }

                function Ld(n, o) {
                    var u;
                    if (typeof o != "function") throw new li(c);
                    return n = ae(n),
                        function() {
                            return --n > 0 && (u = o.apply(this, arguments)), n <= 1 && (o = e), u
                        }
                }
                var dh = he(function(n, o, u) {
                        var v = G;
                        if (u.length) {
                            var A = Rn(u, Ks(dh));
                            v |= $
                        }
                        return fn(n, v, o, u, A)
                    }),
                    qd = he(function(n, o, u) {
                        var v = G | tt;
                        if (u.length) {
                            var A = Rn(u, Ks(qd));
                            v |= $
                        }
                        return fn(o, v, n, u, A)
                    });

                function jd(n, o, u) {
                    o = u ? e : o;
                    var v = fn(n, V, e, e, e, e, e, o);
                    return v.placeholder = jd.placeholder, v
                }

                function $d(n, o, u) {
                    o = u ? e : o;
                    var v = fn(n, L, e, e, e, e, e, o);
                    return v.placeholder = $d.placeholder, v
                }

                function zd(n, o, u) {
                    var v, A, R, H, W, X, ot = 0,
                        ut = !1,
                        pt = !1,
                        vt = !0;
                    if (typeof n != "function") throw new li(c);
                    o = mi(o) || 0, Ve(u) && (ut = !!u.leading, pt = "maxWait" in u, R = pt ? ir(mi(u.maxWait) || 0, o) : R, vt = "trailing" in u ? !!u.trailing : vt);

                    function Ft(Je) {
                        var Pi = v,
                            vn = A;
                        return v = A = e, ot = Je, H = n.apply(vn, Pi), H
                    }

                    function kt(Je) {
                        return ot = Je, W = Bo(fe, o), ut ? Ft(Je) : H
                    }

                    function ce(Je) {
                        var Pi = Je - X,
                            vn = Je - ot,
                            a0 = o - Pi;
                        return pt ? vr(a0, R - vn) : a0
                    }

                    function Ht(Je) {
                        var Pi = Je - X,
                            vn = Je - ot;
                        return X === e || Pi >= o || Pi < 0 || pt && vn >= R
                    }

                    function fe() {
                        var Je = gu();
                        if (Ht(Je)) return be(Je);
                        W = Bo(fe, ce(Je))
                    }

                    function be(Je) {
                        return W = e, vt && v ? Ft(Je) : (v = A = e, H)
                    }

                    function Jr() {
                        W !== e && Xf(W), ot = 0, v = X = A = W = e
                    }

                    function Dr() {
                        return W === e ? H : be(gu())
                    }

                    function Xr() {
                        var Je = gu(),
                            Pi = Ht(Je);
                        if (v = arguments, A = this, X = Je, Pi) {
                            if (W === e) return kt(X);
                            if (pt) return Xf(W), W = Bo(fe, o), Ft(X)
                        }
                        return W === e && (W = Bo(fe, o)), H
                    }
                    return Xr.cancel = Jr, Xr.flush = Dr, Xr
                }
                var yb = he(function(n, o) {
                        return Of(n, 1, o)
                    }),
                    wb = he(function(n, o, u) {
                        return Of(n, mi(o) || 0, u)
                    });

                function bb(n) {
                    return fn(n, nt)
                }

                function mu(n, o) {
                    if (typeof n != "function" || o != null && typeof o != "function") throw new li(c);
                    var u = function() {
                        var v = arguments,
                            A = o ? o.apply(this, v) : v[0],
                            R = u.cache;
                        if (R.has(A)) return R.get(A);
                        var H = n.apply(this, v);
                        return u.cache = R.set(A, H) || R, H
                    };
                    return u.cache = new(mu.Cache || hn), u
                }
                mu.Cache = hn;

                function vu(n) {
                    if (typeof n != "function") throw new li(c);
                    return function() {
                        var o = arguments;
                        switch (o.length) {
                            case 0:
                                return !n.call(this);
                            case 1:
                                return !n.call(this, o[0]);
                            case 2:
                                return !n.call(this, o[0], o[1]);
                            case 3:
                                return !n.call(this, o[0], o[1], o[2])
                        }
                        return !n.apply(this, o)
                    }
                }

                function _b(n) {
                    return Ld(2, n)
                }
                var Eb = uy(function(n, o) {
                        o = o.length == 1 && ie(o[0]) ? ze(o[0], Wr(jt())) : ze(lr(o, 1), Wr(jt()));
                        var u = o.length;
                        return he(function(v) {
                            for (var A = -1, R = vr(v.length, u); ++A < R;) v[A] = o[A].call(this, v[A]);
                            return ar(n, this, v)
                        })
                    }),
                    ph = he(function(n, o) {
                        var u = Rn(o, Ks(ph));
                        return fn(n, $, e, o, u)
                    }),
                    kd = he(function(n, o) {
                        var u = Rn(o, Ks(kd));
                        return fn(n, z, e, o, u)
                    }),
                    Ab = dn(function(n, o) {
                        return fn(n, T, e, e, e, o)
                    });

                function Sb(n, o) {
                    if (typeof n != "function") throw new li(c);
                    return o = o === e ? o : ae(o), he(n, o)
                }

                function Ib(n, o) {
                    if (typeof n != "function") throw new li(c);
                    return o = o == null ? 0 : ir(ae(o), 0), he(function(u) {
                        var v = u[o],
                            A = Ln(u, 0, o);
                        return v && Nn(A, v), ar(n, this, A)
                    })
                }

                function Db(n, o, u) {
                    var v = !0,
                        A = !0;
                    if (typeof n != "function") throw new li(c);
                    return Ve(u) && (v = "leading" in u ? !!u.leading : v, A = "trailing" in u ? !!u.trailing : A), zd(n, o, {
                        leading: v,
                        maxWait: o,
                        trailing: A
                    })
                }

                function xb(n) {
                    return Ud(n, 1)
                }

                function Mb(n, o) {
                    return ph(Xc(o), n)
                }

                function Cb() {
                    if (!arguments.length) return [];
                    var n = arguments[0];
                    return ie(n) ? n : [n]
                }

                function Pb(n) {
                    return di(n, D)
                }

                function Ob(n, o) {
                    return o = typeof o == "function" ? o : e, di(n, D, o)
                }

                function Nb(n) {
                    return di(n, E | D)
                }

                function Rb(n, o) {
                    return o = typeof o == "function" ? o : e, di(n, E | D, o)
                }

                function Tb(n, o) {
                    return o == null || Pf(n, o, ur(o))
                }

                function Ci(n, o) {
                    return n === o || n !== n && o !== o
                }
                var Fb = cu(jc),
                    Bb = cu(function(n, o) {
                        return n >= o
                    }),
                    gs = Bf(function() {
                        return arguments
                    }()) ? Bf : function(n) {
                        return Ge(n) && Oe.call(n, "callee") && !Ef.call(n, "callee")
                    },
                    ie = rt.isArray,
                    Ub = Ar ? Wr(Ar) : Kv;

                function Br(n) {
                    return n != null && yu(n.length) && !gn(n)
                }

                function Qe(n) {
                    return Ge(n) && Br(n)
                }

                function Lb(n) {
                    return n === !0 || n === !1 || Ge(n) && Sr(n) == q
                }
                var qn = Xm || Ih,
                    qb = Di ? Wr(Di) : Vv;

                function jb(n) {
                    return Ge(n) && n.nodeType === 1 && !Uo(n)
                }

                function $b(n) {
                    if (n == null) return !0;
                    if (Br(n) && (ie(n) || typeof n == "string" || typeof n.splice == "function" || qn(n) || Vs(n) || gs(n))) return !n.length;
                    var o = yr(n);
                    if (o == at || o == Ut) return !n.size;
                    if (Fo(n)) return !kc(n).length;
                    for (var u in n)
                        if (Oe.call(n, u)) return !1;
                    return !0
                }

                function zb(n, o) {
                    return No(n, o)
                }

                function kb(n, o, u) {
                    u = typeof u == "function" ? u : e;
                    var v = u ? u(n, o) : e;
                    return v === e ? No(n, o, e, u) : !!v
                }

                function gh(n) {
                    if (!Ge(n)) return !1;
                    var o = Sr(n);
                    return o == B || o == m || typeof n.message == "string" && typeof n.name == "string" && !Uo(n)
                }

                function Hb(n) {
                    return typeof n == "number" && Sf(n)
                }

                function gn(n) {
                    if (!Ve(n)) return !1;
                    var o = Sr(n);
                    return o == et || o == ct || o == U || o == $t
                }

                function Hd(n) {
                    return typeof n == "number" && n == ae(n)
                }

                function yu(n) {
                    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= O
                }

                function Ve(n) {
                    var o = typeof n;
                    return n != null && (o == "object" || o == "function")
                }

                function Ge(n) {
                    return n != null && typeof n == "object"
                }
                var Kd = ci ? Wr(ci) : Wv;

                function Kb(n, o) {
                    return n === o || zc(n, o, sh(o))
                }

                function Vb(n, o, u) {
                    return u = typeof u == "function" ? u : e, zc(n, o, sh(o), u)
                }

                function Gb(n) {
                    return Vd(n) && n != +n
                }

                function Wb(n) {
                    if (Oy(n)) throw new ee(a);
                    return Uf(n)
                }

                function Yb(n) {
                    return n === null
                }

                function Qb(n) {
                    return n == null
                }

                function Vd(n) {
                    return typeof n == "number" || Ge(n) && Sr(n) == Mt
                }

                function Uo(n) {
                    if (!Ge(n) || Sr(n) != It) return !1;
                    var o = Ka(n);
                    if (o === null) return !0;
                    var u = Oe.call(o, "constructor") && o.constructor;
                    return typeof u == "function" && u instanceof u && $a.call(u) == Vm
                }
                var mh = zi ? Wr(zi) : Yv;

                function Jb(n) {
                    return Hd(n) && n >= -O && n <= O
                }
                var Gd = Eo ? Wr(Eo) : Qv;

                function wu(n) {
                    return typeof n == "string" || !ie(n) && Ge(n) && Sr(n) == _t
                }

                function Qr(n) {
                    return typeof n == "symbol" || Ge(n) && Sr(n) == Et
                }
                var Vs = as ? Wr(as) : Jv;

                function Xb(n) {
                    return n === e
                }

                function Zb(n) {
                    return Ge(n) && yr(n) == yt
                }

                function t2(n) {
                    return Ge(n) && Sr(n) == At
                }
                var e2 = cu(Hc),
                    r2 = cu(function(n, o) {
                        return n <= o
                    });

                function Wd(n) {
                    if (!n) return [];
                    if (Br(n)) return wu(n) ? xi(n) : Fr(n);
                    if (So && n[So]) return Tm(n[So]());
                    var o = yr(n),
                        u = o == at ? Oc : o == Ut ? La : Gs;
                    return u(n)
                }

                function mn(n) {
                    if (!n) return n === 0 ? n : 0;
                    if (n = mi(n), n === M || n === -M) {
                        var o = n < 0 ? -1 : 1;
                        return o * F
                    }
                    return n === n ? n : 0
                }

                function ae(n) {
                    var o = mn(n),
                        u = o % 1;
                    return o === o ? u ? o - u : o : 0
                }

                function Yd(n) {
                    return n ? ls(ae(n), 0, g) : 0
                }

                function mi(n) {
                    if (typeof n == "number") return n;
                    if (Qr(n)) return I;
                    if (Ve(n)) {
                        var o = typeof n.valueOf == "function" ? n.valueOf() : n;
                        n = Ve(o) ? o + "" : o
                    }
                    if (typeof n != "string") return n === 0 ? n : +n;
                    n = pf(n);
                    var u = si.test(n);
                    return u || ai.test(n) ? re(n.slice(2), u ? 2 : 8) : ni.test(n) ? I : +n
                }

                function Qd(n) {
                    return Hi(n, Ur(n))
                }

                function i2(n) {
                    return n ? ls(ae(n), -O, O) : n === 0 ? n : 0
                }

                function xe(n) {
                    return n == null ? "" : Yr(n)
                }
                var n2 = ks(function(n, o) {
                        if (Fo(o) || Br(o)) {
                            Hi(o, ur(o), n);
                            return
                        }
                        for (var u in o) Oe.call(o, u) && Co(n, u, o[u])
                    }),
                    Jd = ks(function(n, o) {
                        Hi(o, Ur(o), n)
                    }),
                    bu = ks(function(n, o, u, v) {
                        Hi(o, Ur(o), n, v)
                    }),
                    s2 = ks(function(n, o, u, v) {
                        Hi(o, ur(o), n, v)
                    }),
                    o2 = dn(Uc);

                function a2(n, o) {
                    var u = zs(n);
                    return o == null ? u : Cf(u, o)
                }
                var u2 = he(function(n, o) {
                        n = Le(n);
                        var u = -1,
                            v = o.length,
                            A = v > 2 ? o[2] : e;
                        for (A && Ir(o[0], o[1], A) && (v = 1); ++u < v;)
                            for (var R = o[u], H = Ur(R), W = -1, X = H.length; ++W < X;) {
                                var ot = H[W],
                                    ut = n[ot];
                                (ut === e || Ci(ut, qs[ot]) && !Oe.call(n, ot)) && (n[ot] = R[ot])
                            }
                        return n
                    }),
                    c2 = he(function(n) {
                        return n.push(e, pd), ar(Xd, e, n)
                    });

                function h2(n, o) {
                    return hf(n, jt(o, 3), ki)
                }

                function l2(n, o) {
                    return hf(n, jt(o, 3), qc)
                }

                function f2(n, o) {
                    return n == null ? n : Lc(n, jt(o, 3), Ur)
                }

                function d2(n, o) {
                    return n == null ? n : Tf(n, jt(o, 3), Ur)
                }

                function p2(n, o) {
                    return n && ki(n, jt(o, 3))
                }

                function g2(n, o) {
                    return n && qc(n, jt(o, 3))
                }

                function m2(n) {
                    return n == null ? [] : eu(n, ur(n))
                }

                function v2(n) {
                    return n == null ? [] : eu(n, Ur(n))
                }

                function vh(n, o, u) {
                    var v = n == null ? e : fs(n, o);
                    return v === e ? u : v
                }

                function y2(n, o) {
                    return n != null && vd(n, o, $v)
                }

                function yh(n, o) {
                    return n != null && vd(n, o, zv)
                }
                var w2 = cd(function(n, o, u) {
                        o != null && typeof o.toString != "function" && (o = za.call(o)), n[o] = u
                    }, bh(Lr)),
                    b2 = cd(function(n, o, u) {
                        o != null && typeof o.toString != "function" && (o = za.call(o)), Oe.call(n, o) ? n[o].push(u) : n[o] = [u]
                    }, jt),
                    _2 = he(Oo);

                function ur(n) {
                    return Br(n) ? xf(n) : kc(n)
                }

                function Ur(n) {
                    return Br(n) ? xf(n, !0) : Xv(n)
                }

                function E2(n, o) {
                    var u = {};
                    return o = jt(o, 3), ki(n, function(v, A, R) {
                        ln(u, o(v, A, R), v)
                    }), u
                }

                function A2(n, o) {
                    var u = {};
                    return o = jt(o, 3), ki(n, function(v, A, R) {
                        ln(u, A, o(v, A, R))
                    }), u
                }
                var S2 = ks(function(n, o, u) {
                        ru(n, o, u)
                    }),
                    Xd = ks(function(n, o, u, v) {
                        ru(n, o, u, v)
                    }),
                    I2 = dn(function(n, o) {
                        var u = {};
                        if (n == null) return u;
                        var v = !1;
                        o = ze(o, function(R) {
                            return R = Un(R, n), v || (v = R.length > 1), R
                        }), Hi(n, ih(n), u), v && (u = di(u, E | x | D, wy));
                        for (var A = o.length; A--;) Yc(u, o[A]);
                        return u
                    });

                function D2(n, o) {
                    return Zd(n, vu(jt(o)))
                }
                var x2 = dn(function(n, o) {
                    return n == null ? {} : ty(n, o)
                });

                function Zd(n, o) {
                    if (n == null) return {};
                    var u = ze(ih(n), function(v) {
                        return [v]
                    });
                    return o = jt(o), Hf(n, u, function(v, A) {
                        return o(v, A[0])
                    })
                }

                function M2(n, o, u) {
                    o = Un(o, n);
                    var v = -1,
                        A = o.length;
                    for (A || (A = 1, n = e); ++v < A;) {
                        var R = n == null ? e : n[Ki(o[v])];
                        R === e && (v = A, R = u), n = gn(R) ? R.call(n) : R
                    }
                    return n
                }

                function C2(n, o, u) {
                    return n == null ? n : Ro(n, o, u)
                }

                function P2(n, o, u, v) {
                    return v = typeof v == "function" ? v : e, n == null ? n : Ro(n, o, u, v)
                }
                var t0 = fd(ur),
                    e0 = fd(Ur);

                function O2(n, o, u) {
                    var v = ie(n),
                        A = v || qn(n) || Vs(n);
                    if (o = jt(o, 4), u == null) {
                        var R = n && n.constructor;
                        A ? u = v ? new R : [] : Ve(n) ? u = gn(R) ? zs(Ka(n)) : {} : u = {}
                    }
                    return (A ? hi : ki)(n, function(H, W, X) {
                        return o(u, H, W, X)
                    }), u
                }

                function N2(n, o) {
                    return n == null ? !0 : Yc(n, o)
                }

                function R2(n, o, u) {
                    return n == null ? n : Yf(n, o, Xc(u))
                }

                function T2(n, o, u, v) {
                    return v = typeof v == "function" ? v : e, n == null ? n : Yf(n, o, Xc(u), v)
                }

                function Gs(n) {
                    return n == null ? [] : Pc(n, ur(n))
                }

                function F2(n) {
                    return n == null ? [] : Pc(n, Ur(n))
                }

                function B2(n, o, u) {
                    return u === e && (u = o, o = e), u !== e && (u = mi(u), u = u === u ? u : 0), o !== e && (o = mi(o), o = o === o ? o : 0), ls(mi(n), o, u)
                }

                function U2(n, o, u) {
                    return o = mn(o), u === e ? (u = o, o = 0) : u = mn(u), n = mi(n), kv(n, o, u)
                }

                function L2(n, o, u) {
                    if (u && typeof u != "boolean" && Ir(n, o, u) && (o = u = e), u === e && (typeof o == "boolean" ? (u = o, o = e) : typeof n == "boolean" && (u = n, n = e)), n === e && o === e ? (n = 0, o = 1) : (n = mn(n), o === e ? (o = n, n = 0) : o = mn(o)), n > o) {
                        var v = n;
                        n = o, o = v
                    }
                    if (u || n % 1 || o % 1) {
                        var A = If();
                        return vr(n + A * (o - n + Be("1e-" + ((A + "").length - 1))), o)
                    }
                    return Vc(n, o)
                }
                var q2 = Hs(function(n, o, u) {
                    return o = o.toLowerCase(), n + (u ? r0(o) : o)
                });

                function r0(n) {
                    return wh(xe(n).toLowerCase())
                }

                function i0(n) {
                    return n = xe(n), n && n.replace(or, Cm).replace(_c, "")
                }

                function j2(n, o, u) {
                    n = xe(n), o = Yr(o);
                    var v = n.length;
                    u = u === e ? v : ls(ae(u), 0, v);
                    var A = u;
                    return u -= o.length, u >= 0 && n.slice(u, A) == o
                }

                function $2(n) {
                    return n = xe(n), n && zt.test(n) ? n.replace(_r, Pm) : n
                }

                function z2(n) {
                    return n = xe(n), n && Zt.test(n) ? n.replace(De, "\\$&") : n
                }
                var k2 = Hs(function(n, o, u) {
                        return n + (u ? "-" : "") + o.toLowerCase()
                    }),
                    H2 = Hs(function(n, o, u) {
                        return n + (u ? " " : "") + o.toLowerCase()
                    }),
                    K2 = od("toLowerCase");

                function V2(n, o, u) {
                    n = xe(n), o = ae(o);
                    var v = o ? Us(n) : 0;
                    if (!o || v >= o) return n;
                    var A = (o - v) / 2;
                    return uu(Ya(A), u) + n + uu(Wa(A), u)
                }

                function G2(n, o, u) {
                    n = xe(n), o = ae(o);
                    var v = o ? Us(n) : 0;
                    return o && v < o ? n + uu(o - v, u) : n
                }

                function W2(n, o, u) {
                    n = xe(n), o = ae(o);
                    var v = o ? Us(n) : 0;
                    return o && v < o ? uu(o - v, u) + n : n
                }

                function Y2(n, o, u) {
                    return u || o == null ? o = 0 : o && (o = +o), rv(xe(n).replace(Yt, ""), o || 0)
                }

                function Q2(n, o, u) {
                    return (u ? Ir(n, o, u) : o === e) ? o = 1 : o = ae(o), Gc(xe(n), o)
                }

                function J2() {
                    var n = arguments,
                        o = xe(n[0]);
                    return n.length < 3 ? o : o.replace(n[1], n[2])
                }
                var X2 = Hs(function(n, o, u) {
                    return n + (u ? "_" : "") + o.toLowerCase()
                });

                function Z2(n, o, u) {
                    return u && typeof u != "number" && Ir(n, o, u) && (o = u = e), u = u === e ? g : u >>> 0, u ? (n = xe(n), n && (typeof o == "string" || o != null && !mh(o)) && (o = Yr(o), !o && Bs(n)) ? Ln(xi(n), 0, u) : n.split(o, u)) : []
                }
                var t3 = Hs(function(n, o, u) {
                    return n + (u ? " " : "") + wh(o)
                });

                function e3(n, o, u) {
                    return n = xe(n), u = u == null ? 0 : ls(ae(u), 0, n.length), o = Yr(o), n.slice(u, u + o.length) == o
                }

                function r3(n, o, u) {
                    var v = C.templateSettings;
                    u && Ir(n, o, u) && (o = e), n = xe(n), o = bu({}, o, v, dd);
                    var A = bu({}, o.imports, v.imports, dd),
                        R = ur(A),
                        H = Pc(A, R),
                        W, X, ot = 0,
                        ut = o.interpolate || Li,
                        pt = "__p += '",
                        vt = Nc((o.escape || Li).source + "|" + ut.source + "|" + (ut === Kt ? Pe : Li).source + "|" + (o.evaluate || Li).source + "|$", "g"),
                        Ft = "//# sourceURL=" + (Oe.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ec + "]") + `
`;
                    n.replace(vt, function(Ht, fe, be, Jr, Dr, Xr) {
                        return be || (be = Jr), pt += n.slice(ot, Xr).replace(Qn, Om), fe && (W = !0, pt += `' +
__e(` + fe + `) +
'`), Dr && (X = !0, pt += `';
` + Dr + `;
__p += '`), be && (pt += `' +
((__t = (` + be + `)) == null ? '' : __t) +
'`), ot = Xr + Ht.length, Ht
                    }), pt += `';
`;
                    var kt = Oe.call(o, "variable") && o.variable;
                    if (!kt) pt = `with (obj) {
` + pt + `
}
`;
                    else if (Ce.test(kt)) throw new ee(f);
                    pt = (X ? pt.replace(pe, "") : pt).replace(Ke, "$1").replace(ye, "$1;"), pt = "function(" + (kt || "obj") + `) {
` + (kt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (W ? ", __e = _.escape" : "") + (X ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + pt + `return __p
}`;
                    var ce = s0(function() {
                        return Se(R, Ft + "return " + pt).apply(e, H)
                    });
                    if (ce.source = pt, gh(ce)) throw ce;
                    return ce
                }

                function i3(n) {
                    return xe(n).toLowerCase()
                }

                function n3(n) {
                    return xe(n).toUpperCase()
                }

                function s3(n, o, u) {
                    if (n = xe(n), n && (u || o === e)) return pf(n);
                    if (!n || !(o = Yr(o))) return n;
                    var v = xi(n),
                        A = xi(o),
                        R = gf(v, A),
                        H = mf(v, A) + 1;
                    return Ln(v, R, H).join("")
                }

                function o3(n, o, u) {
                    if (n = xe(n), n && (u || o === e)) return n.slice(0, yf(n) + 1);
                    if (!n || !(o = Yr(o))) return n;
                    var v = xi(n),
                        A = mf(v, xi(o)) + 1;
                    return Ln(v, 0, A).join("")
                }

                function a3(n, o, u) {
                    if (n = xe(n), n && (u || o === e)) return n.replace(Yt, "");
                    if (!n || !(o = Yr(o))) return n;
                    var v = xi(n),
                        A = gf(v, xi(o));
                    return Ln(v, A).join("")
                }

                function u3(n, o) {
                    var u = ft,
                        v = lt;
                    if (Ve(o)) {
                        var A = "separator" in o ? o.separator : A;
                        u = "length" in o ? ae(o.length) : u, v = "omission" in o ? Yr(o.omission) : v
                    }
                    n = xe(n);
                    var R = n.length;
                    if (Bs(n)) {
                        var H = xi(n);
                        R = H.length
                    }
                    if (u >= R) return n;
                    var W = u - Us(v);
                    if (W < 1) return v;
                    var X = H ? Ln(H, 0, W).join("") : n.slice(0, W);
                    if (A === e) return X + v;
                    if (H && (W += X.length - W), mh(A)) {
                        if (n.slice(W).search(A)) {
                            var ot, ut = X;
                            for (A.global || (A = Nc(A.source, xe(le.exec(A)) + "g")), A.lastIndex = 0; ot = A.exec(ut);) var pt = ot.index;
                            X = X.slice(0, pt === e ? W : pt)
                        }
                    } else if (n.indexOf(Yr(A), W) != W) {
                        var vt = X.lastIndexOf(A);
                        vt > -1 && (X = X.slice(0, vt))
                    }
                    return X + v
                }

                function c3(n) {
                    return n = xe(n), n && Gt.test(n) ? n.replace(_e, Lm) : n
                }
                var h3 = Hs(function(n, o, u) {
                        return n + (u ? " " : "") + o.toUpperCase()
                    }),
                    wh = od("toUpperCase");

                function n0(n, o, u) {
                    return n = xe(n), o = u ? e : o, o === e ? Rm(n) ? $m(n) : Sm(n) : n.match(o) || []
                }
                var s0 = he(function(n, o) {
                        try {
                            return ar(n, e, o)
                        } catch (u) {
                            return gh(u) ? u : new ee(u)
                        }
                    }),
                    l3 = dn(function(n, o) {
                        return hi(o, function(u) {
                            u = Ki(u), ln(n, u, dh(n[u], n))
                        }), n
                    });

                function f3(n) {
                    var o = n == null ? 0 : n.length,
                        u = jt();
                    return n = o ? ze(n, function(v) {
                        if (typeof v[1] != "function") throw new li(c);
                        return [u(v[0]), v[1]]
                    }) : [], he(function(v) {
                        for (var A = -1; ++A < o;) {
                            var R = n[A];
                            if (ar(R[0], this, v)) return ar(R[1], this, v)
                        }
                    })
                }

                function d3(n) {
                    return Lv(di(n, E))
                }

                function bh(n) {
                    return function() {
                        return n
                    }
                }

                function p3(n, o) {
                    return n == null || n !== n ? o : n
                }
                var g3 = ud(),
                    m3 = ud(!0);

                function Lr(n) {
                    return n
                }

                function _h(n) {
                    return Lf(typeof n == "function" ? n : di(n, E))
                }

                function v3(n) {
                    return jf(di(n, E))
                }

                function y3(n, o) {
                    return $f(n, di(o, E))
                }
                var w3 = he(function(n, o) {
                        return function(u) {
                            return Oo(u, n, o)
                        }
                    }),
                    b3 = he(function(n, o) {
                        return function(u) {
                            return Oo(n, u, o)
                        }
                    });

                function Eh(n, o, u) {
                    var v = ur(o),
                        A = eu(o, v);
                    u == null && !(Ve(o) && (A.length || !v.length)) && (u = o, o = n, n = this, A = eu(o, ur(o)));
                    var R = !(Ve(u) && "chain" in u) || !!u.chain,
                        H = gn(n);
                    return hi(A, function(W) {
                        var X = o[W];
                        n[W] = X, H && (n.prototype[W] = function() {
                            var ot = this.__chain__;
                            if (R || ot) {
                                var ut = n(this.__wrapped__),
                                    pt = ut.__actions__ = Fr(this.__actions__);
                                return pt.push({
                                    func: X,
                                    args: arguments,
                                    thisArg: n
                                }), ut.__chain__ = ot, ut
                            }
                            return X.apply(n, Nn([this.value()], arguments))
                        })
                    }), n
                }

                function _3() {
                    return we._ === this && (we._ = Gm), this
                }

                function Ah() {}

                function E3(n) {
                    return n = ae(n), he(function(o) {
                        return zf(o, n)
                    })
                }
                var A3 = th(ze),
                    S3 = th(cf),
                    I3 = th(Ic);

                function o0(n) {
                    return ah(n) ? Dc(Ki(n)) : ey(n)
                }

                function D3(n) {
                    return function(o) {
                        return n == null ? e : fs(n, o)
                    }
                }
                var x3 = hd(),
                    M3 = hd(!0);

                function Sh() {
                    return []
                }

                function Ih() {
                    return !1
                }

                function C3() {
                    return {}
                }

                function P3() {
                    return ""
                }

                function O3() {
                    return !0
                }

                function N3(n, o) {
                    if (n = ae(n), n < 1 || n > O) return [];
                    var u = g,
                        v = vr(n, g);
                    o = jt(o), n -= g;
                    for (var A = Cc(v, o); ++u < n;) o(u);
                    return A
                }

                function R3(n) {
                    return ie(n) ? ze(n, Ki) : Qr(n) ? [n] : Fr(Dd(xe(n)))
                }

                function T3(n) {
                    var o = ++Km;
                    return xe(n) + o
                }
                var F3 = au(function(n, o) {
                        return n + o
                    }, 0),
                    B3 = eh("ceil"),
                    U3 = au(function(n, o) {
                        return n / o
                    }, 1),
                    L3 = eh("floor");

                function q3(n) {
                    return n && n.length ? tu(n, Lr, jc) : e
                }

                function j3(n, o) {
                    return n && n.length ? tu(n, jt(o, 2), jc) : e
                }

                function $3(n) {
                    return ff(n, Lr)
                }

                function z3(n, o) {
                    return ff(n, jt(o, 2))
                }

                function k3(n) {
                    return n && n.length ? tu(n, Lr, Hc) : e
                }

                function H3(n, o) {
                    return n && n.length ? tu(n, jt(o, 2), Hc) : e
                }
                var K3 = au(function(n, o) {
                        return n * o
                    }, 1),
                    V3 = eh("round"),
                    G3 = au(function(n, o) {
                        return n - o
                    }, 0);

                function W3(n) {
                    return n && n.length ? Mc(n, Lr) : 0
                }

                function Y3(n, o) {
                    return n && n.length ? Mc(n, jt(o, 2)) : 0
                }
                return C.after = vb, C.ary = Ud, C.assign = n2, C.assignIn = Jd, C.assignInWith = bu, C.assignWith = s2, C.at = o2, C.before = Ld, C.bind = dh, C.bindAll = l3, C.bindKey = qd, C.castArray = Cb, C.chain = Td, C.chunk = Ly, C.compact = qy, C.concat = jy, C.cond = f3, C.conforms = d3, C.constant = bh, C.countBy = Ww, C.create = a2, C.curry = jd, C.curryRight = $d, C.debounce = zd, C.defaults = u2, C.defaultsDeep = c2, C.defer = yb, C.delay = wb, C.difference = $y, C.differenceBy = zy, C.differenceWith = ky, C.drop = Hy, C.dropRight = Ky, C.dropRightWhile = Vy, C.dropWhile = Gy, C.fill = Wy, C.filter = Qw, C.flatMap = Zw, C.flatMapDeep = tb, C.flatMapDepth = eb, C.flatten = Pd, C.flattenDeep = Yy, C.flattenDepth = Qy, C.flip = bb, C.flow = g3, C.flowRight = m3, C.fromPairs = Jy, C.functions = m2, C.functionsIn = v2, C.groupBy = rb, C.initial = Zy, C.intersection = tw, C.intersectionBy = ew, C.intersectionWith = rw, C.invert = w2, C.invertBy = b2, C.invokeMap = nb, C.iteratee = _h, C.keyBy = sb, C.keys = ur, C.keysIn = Ur, C.map = pu, C.mapKeys = E2, C.mapValues = A2, C.matches = v3, C.matchesProperty = y3, C.memoize = mu, C.merge = S2, C.mergeWith = Xd, C.method = w3, C.methodOf = b3, C.mixin = Eh, C.negate = vu, C.nthArg = E3, C.omit = I2, C.omitBy = D2, C.once = _b, C.orderBy = ob, C.over = A3, C.overArgs = Eb, C.overEvery = S3, C.overSome = I3, C.partial = ph, C.partialRight = kd, C.partition = ab, C.pick = x2, C.pickBy = Zd, C.property = o0, C.propertyOf = D3, C.pull = ow, C.pullAll = Nd, C.pullAllBy = aw, C.pullAllWith = uw, C.pullAt = cw, C.range = x3, C.rangeRight = M3, C.rearg = Ab, C.reject = hb, C.remove = hw, C.rest = Sb, C.reverse = lh, C.sampleSize = fb, C.set = C2, C.setWith = P2, C.shuffle = db, C.slice = lw, C.sortBy = mb, C.sortedUniq = yw, C.sortedUniqBy = ww, C.split = Z2, C.spread = Ib, C.tail = bw, C.take = _w, C.takeRight = Ew, C.takeRightWhile = Aw, C.takeWhile = Sw, C.tap = qw, C.throttle = Db, C.thru = du, C.toArray = Wd, C.toPairs = t0, C.toPairsIn = e0, C.toPath = R3, C.toPlainObject = Qd, C.transform = O2, C.unary = xb, C.union = Iw, C.unionBy = Dw, C.unionWith = xw, C.uniq = Mw, C.uniqBy = Cw, C.uniqWith = Pw, C.unset = N2, C.unzip = fh, C.unzipWith = Rd, C.update = R2, C.updateWith = T2, C.values = Gs, C.valuesIn = F2, C.without = Ow, C.words = n0, C.wrap = Mb, C.xor = Nw, C.xorBy = Rw, C.xorWith = Tw, C.zip = Fw, C.zipObject = Bw, C.zipObjectDeep = Uw, C.zipWith = Lw, C.entries = t0, C.entriesIn = e0, C.extend = Jd, C.extendWith = bu, Eh(C, C), C.add = F3, C.attempt = s0, C.camelCase = q2, C.capitalize = r0, C.ceil = B3, C.clamp = B2, C.clone = Pb, C.cloneDeep = Nb, C.cloneDeepWith = Rb, C.cloneWith = Ob, C.conformsTo = Tb, C.deburr = i0, C.defaultTo = p3, C.divide = U3, C.endsWith = j2, C.eq = Ci, C.escape = $2, C.escapeRegExp = z2, C.every = Yw, C.find = Jw, C.findIndex = Md, C.findKey = h2, C.findLast = Xw, C.findLastIndex = Cd, C.findLastKey = l2, C.floor = L3, C.forEach = Fd, C.forEachRight = Bd, C.forIn = f2, C.forInRight = d2, C.forOwn = p2, C.forOwnRight = g2, C.get = vh, C.gt = Fb, C.gte = Bb, C.has = y2, C.hasIn = yh, C.head = Od, C.identity = Lr, C.includes = ib, C.indexOf = Xy, C.inRange = U2, C.invoke = _2, C.isArguments = gs, C.isArray = ie, C.isArrayBuffer = Ub, C.isArrayLike = Br, C.isArrayLikeObject = Qe, C.isBoolean = Lb, C.isBuffer = qn, C.isDate = qb, C.isElement = jb, C.isEmpty = $b, C.isEqual = zb, C.isEqualWith = kb, C.isError = gh, C.isFinite = Hb, C.isFunction = gn, C.isInteger = Hd, C.isLength = yu, C.isMap = Kd, C.isMatch = Kb, C.isMatchWith = Vb, C.isNaN = Gb, C.isNative = Wb, C.isNil = Qb, C.isNull = Yb, C.isNumber = Vd, C.isObject = Ve, C.isObjectLike = Ge, C.isPlainObject = Uo, C.isRegExp = mh, C.isSafeInteger = Jb, C.isSet = Gd, C.isString = wu, C.isSymbol = Qr, C.isTypedArray = Vs, C.isUndefined = Xb, C.isWeakMap = Zb, C.isWeakSet = t2, C.join = iw, C.kebabCase = k2, C.last = gi, C.lastIndexOf = nw, C.lowerCase = H2, C.lowerFirst = K2, C.lt = e2, C.lte = r2, C.max = q3, C.maxBy = j3, C.mean = $3, C.meanBy = z3, C.min = k3, C.minBy = H3, C.stubArray = Sh, C.stubFalse = Ih, C.stubObject = C3, C.stubString = P3, C.stubTrue = O3, C.multiply = K3, C.nth = sw, C.noConflict = _3, C.noop = Ah, C.now = gu, C.pad = V2, C.padEnd = G2, C.padStart = W2, C.parseInt = Y2, C.random = L2, C.reduce = ub, C.reduceRight = cb, C.repeat = Q2, C.replace = J2, C.result = M2, C.round = V3, C.runInContext = J, C.sample = lb, C.size = pb, C.snakeCase = X2, C.some = gb, C.sortedIndex = fw, C.sortedIndexBy = dw, C.sortedIndexOf = pw, C.sortedLastIndex = gw, C.sortedLastIndexBy = mw, C.sortedLastIndexOf = vw, C.startCase = t3, C.startsWith = e3, C.subtract = G3, C.sum = W3, C.sumBy = Y3, C.template = r3, C.times = N3, C.toFinite = mn, C.toInteger = ae, C.toLength = Yd, C.toLower = i3, C.toNumber = mi, C.toSafeInteger = i2, C.toString = xe, C.toUpper = n3, C.trim = s3, C.trimEnd = o3, C.trimStart = a3, C.truncate = u3, C.unescape = c3, C.uniqueId = T3, C.upperCase = h3, C.upperFirst = wh, C.each = Fd, C.eachRight = Bd, C.first = Od, Eh(C, function() {
                    var n = {};
                    return ki(C, function(o, u) {
                        Oe.call(C.prototype, u) || (n[u] = o)
                    }), n
                }(), {
                    chain: !1
                }), C.VERSION = i, hi(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
                    C[n].placeholder = C
                }), hi(["drop", "take"], function(n, o) {
                    ge.prototype[n] = function(u) {
                        u = u === e ? 1 : ir(ae(u), 0);
                        var v = this.__filtered__ && !o ? new ge(this) : this.clone();
                        return v.__filtered__ ? v.__takeCount__ = vr(u, v.__takeCount__) : v.__views__.push({
                            size: vr(u, g),
                            type: n + (v.__dir__ < 0 ? "Right" : "")
                        }), v
                    }, ge.prototype[n + "Right"] = function(u) {
                        return this.reverse()[n](u).reverse()
                    }
                }), hi(["filter", "map", "takeWhile"], function(n, o) {
                    var u = o + 1,
                        v = u == h || u == S;
                    ge.prototype[n] = function(A) {
                        var R = this.clone();
                        return R.__iteratees__.push({
                            iteratee: jt(A, 3),
                            type: u
                        }), R.__filtered__ = R.__filtered__ || v, R
                    }
                }), hi(["head", "last"], function(n, o) {
                    var u = "take" + (o ? "Right" : "");
                    ge.prototype[n] = function() {
                        return this[u](1).value()[0]
                    }
                }), hi(["initial", "tail"], function(n, o) {
                    var u = "drop" + (o ? "" : "Right");
                    ge.prototype[n] = function() {
                        return this.__filtered__ ? new ge(this) : this[u](1)
                    }
                }), ge.prototype.compact = function() {
                    return this.filter(Lr)
                }, ge.prototype.find = function(n) {
                    return this.filter(n).head()
                }, ge.prototype.findLast = function(n) {
                    return this.reverse().find(n)
                }, ge.prototype.invokeMap = he(function(n, o) {
                    return typeof n == "function" ? new ge(this) : this.map(function(u) {
                        return Oo(u, n, o)
                    })
                }), ge.prototype.reject = function(n) {
                    return this.filter(vu(jt(n)))
                }, ge.prototype.slice = function(n, o) {
                    n = ae(n);
                    var u = this;
                    return u.__filtered__ && (n > 0 || o < 0) ? new ge(u) : (n < 0 ? u = u.takeRight(-n) : n && (u = u.drop(n)), o !== e && (o = ae(o), u = o < 0 ? u.dropRight(-o) : u.take(o - n)), u)
                }, ge.prototype.takeRightWhile = function(n) {
                    return this.reverse().takeWhile(n).reverse()
                }, ge.prototype.toArray = function() {
                    return this.take(g)
                }, ki(ge.prototype, function(n, o) {
                    var u = /^(?:filter|find|map|reject)|While$/.test(o),
                        v = /^(?:head|last)$/.test(o),
                        A = C[v ? "take" + (o == "last" ? "Right" : "") : o],
                        R = v || /^find/.test(o);
                    A && (C.prototype[o] = function() {
                        var H = this.__wrapped__,
                            W = v ? [1] : arguments,
                            X = H instanceof ge,
                            ot = W[0],
                            ut = X || ie(H),
                            pt = function(fe) {
                                var be = A.apply(C, Nn([fe], W));
                                return v && vt ? be[0] : be
                            };
                        ut && u && typeof ot == "function" && ot.length != 1 && (X = ut = !1);
                        var vt = this.__chain__,
                            Ft = !!this.__actions__.length,
                            kt = R && !vt,
                            ce = X && !Ft;
                        if (!R && ut) {
                            H = ce ? H : new ge(this);
                            var Ht = n.apply(H, W);
                            return Ht.__actions__.push({
                                func: du,
                                args: [pt],
                                thisArg: e
                            }), new fi(Ht, vt)
                        }
                        return kt && ce ? n.apply(this, W) : (Ht = this.thru(pt), kt ? v ? Ht.value()[0] : Ht.value() : Ht)
                    })
                }), hi(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
                    var o = qa[n],
                        u = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                        v = /^(?:pop|shift)$/.test(n);
                    C.prototype[n] = function() {
                        var A = arguments;
                        if (v && !this.__chain__) {
                            var R = this.value();
                            return o.apply(ie(R) ? R : [], A)
                        }
                        return this[u](function(H) {
                            return o.apply(ie(H) ? H : [], A)
                        })
                    }
                }), ki(ge.prototype, function(n, o) {
                    var u = C[o];
                    if (u) {
                        var v = u.name + "";
                        Oe.call($s, v) || ($s[v] = []), $s[v].push({
                            name: o,
                            func: u
                        })
                    }
                }), $s[ou(e, tt).name] = [{
                    name: "wrapper",
                    func: e
                }], ge.prototype.clone = cv, ge.prototype.reverse = hv, ge.prototype.value = lv, C.prototype.at = jw, C.prototype.chain = $w, C.prototype.commit = zw, C.prototype.next = kw, C.prototype.plant = Kw, C.prototype.reverse = Vw, C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = Gw, C.prototype.first = C.prototype.head, So && (C.prototype[So] = Hw), C
            },
            Ls = zm();
        Ye ? ((Ye.exports = Ls)._ = Ls, Ue._ = Ls) : we._ = Ls
    }).call(Vo)
})(Rl, Rl.exports);
var y9 = Object.defineProperty,
    w9 = Object.defineProperties,
    b9 = Object.getOwnPropertyDescriptors,
    p1 = Object.getOwnPropertySymbols,
    _9 = Object.prototype.hasOwnProperty,
    E9 = Object.prototype.propertyIsEnumerable,
    g1 = (r, t, e) => t in r ? y9(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    Cu = (r, t) => {
        for (var e in t || (t = {})) _9.call(t, e) && g1(r, e, t[e]);
        if (p1)
            for (var e of p1(t)) E9.call(t, e) && g1(r, e, t[e]);
        return r
    },
    A9 = (r, t) => w9(r, b9(t));

function Gn(r, t, e) {
    var i;
    const s = Nu(r);
    return ((i = t.rpcMap) == null ? void 0 : i[s.reference]) || `${v9}?chainId=${s.namespace}:${s.reference}&projectId=${e}`
}

function Ps(r) {
    return r.includes(":") ? r.split(":")[1] : r
}

function vm(r) {
    return r.map(t => `${t.split(":")[0]}:${t.split(":")[1]}`)
}

function S9(r, t) {
    const e = Object.keys(t.namespaces).filter(s => s.includes(r));
    if (!e.length) return [];
    const i = [];
    return e.forEach(s => {
        const a = t.namespaces[s].accounts;
        i.push(...a)
    }), i
}

function rl(r = {}, t = {}) {
    const e = m1(r),
        i = m1(t);
    return Rl.exports.merge(e, i)
}

function m1(r) {
    var t, e, i, s;
    const a = {};
    if (!na(r)) return a;
    for (const [c, f] of Object.entries(r)) {
        const p = Jl(c) ? [c] : f.chains,
            d = f.methods || [],
            b = f.events || [],
            E = f.rpcMap || {},
            x = Yo(c);
        a[x] = A9(Cu(Cu({}, a[x]), f), {
            chains: Ru(p, (t = a[x]) == null ? void 0 : t.chains),
            methods: Ru(d, (e = a[x]) == null ? void 0 : e.methods),
            events: Ru(b, (i = a[x]) == null ? void 0 : i.events),
            rpcMap: Cu(Cu({}, E), (s = a[x]) == null ? void 0 : s.rpcMap)
        })
    }
    return a
}

function I9(r) {
    return r.includes(":") ? r.split(":")[2] : r
}

function v1(r) {
    const t = {};
    for (const [e, i] of Object.entries(r)) {
        const s = i.methods || [],
            a = i.events || [],
            c = i.accounts || [],
            f = Jl(e) ? [e] : i.chains ? i.chains : vm(i.accounts);
        t[e] = {
            chains: f,
            methods: s,
            events: a,
            accounts: c
        }
    }
    return t
}

function il(r) {
    return typeof r == "number" ? r : r.includes("0x") ? parseInt(r, 16) : (r = r.includes(":") ? r.split(":")[1] : r, isNaN(Number(r)) ? r : Number(r))
}
const ym = {},
    ke = r => ym[r],
    nl = (r, t) => {
        ym[r] = t
    };
class D9 {
    constructor(t) {
        this.name = "polkadot", this.namespace = t.namespace, this.events = ke("events"), this.client = ke("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(xn.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(e => {
            var i;
            const s = Ps(e);
            t[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[e])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const i = this.createHttpProvider(t, e);
        i && (this.httpProviders[t] = i)
    }
    createHttpProvider(t, e) {
        const i = e || Gn(t, this.namespace, this.client.core.projectId);
        if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Dn(new Yn(i, ke("disableProviderPing")))
    }
}
class x9 {
    constructor(t) {
        this.name = "eip155", this.namespace = t.namespace, this.events = ke("events"), this.client = ke("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
    }
    async request(t) {
        switch (t.request.method) {
            case "eth_requestAccounts":
                return this.getAccounts();
            case "eth_accounts":
                return this.getAccounts();
            case "wallet_switchEthereumChain":
                return await this.handleSwitchChain(t);
            case "eth_chainId":
                return parseInt(this.getDefaultChain())
        }
        return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(parseInt(t), e), this.chainId = parseInt(t), this.events.emit(xn.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    createHttpProvider(t, e) {
        const i = e || Gn(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
        if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Dn(new Yn(i, ke("disableProviderPing")))
    }
    setHttpProvider(t, e) {
        const i = this.createHttpProvider(t, e);
        i && (this.httpProviders[t] = i)
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(e => {
            var i;
            const s = parseInt(Ps(e));
            t[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[e])
        }), t
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
    }
    getHttpProvider() {
        const t = this.chainId,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    async handleSwitchChain(t) {
        var e, i;
        let s = t.request.params ? (e = t.request.params[0]) == null ? void 0 : e.chainId : "0x0";
        s = s.startsWith("0x") ? s : `0x${s}`;
        const a = parseInt(s, 16);
        if (this.isChainApproved(a)) this.setDefaultChain(`${a}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
            topic: t.topic,
            request: {
                method: t.request.method,
                params: [{
                    chainId: s
                }]
            },
            chainId: (i = this.namespace.chains) == null ? void 0 : i[0]
        }), this.setDefaultChain(`${a}`);
        else throw new Error(`Failed to switch to chain 'eip155:${a}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null
    }
    isChainApproved(t) {
        return this.namespace.chains.includes(`${this.name}:${t}`)
    }
}
class M9 {
    constructor(t) {
        this.name = "solana", this.namespace = t.namespace, this.events = ke("events"), this.client = ke("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(xn.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(e => {
            var i;
            const s = Ps(e);
            t[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[e])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const i = this.createHttpProvider(t, e);
        i && (this.httpProviders[t] = i)
    }
    createHttpProvider(t, e) {
        const i = e || Gn(t, this.namespace, this.client.core.projectId);
        if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Dn(new Yn(i, ke("disableProviderPing")))
    }
}
class C9 {
    constructor(t) {
        this.name = "cosmos", this.namespace = t.namespace, this.events = ke("events"), this.client = ke("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(xn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(e => {
            var i;
            const s = Ps(e);
            t[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[e])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const i = this.createHttpProvider(t, e);
        i && (this.httpProviders[t] = i)
    }
    createHttpProvider(t, e) {
        const i = e || Gn(t, this.namespace, this.client.core.projectId);
        if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Dn(new Yn(i, ke("disableProviderPing")))
    }
}
class P9 {
    constructor(t) {
        this.name = "cip34", this.namespace = t.namespace, this.events = ke("events"), this.client = ke("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(xn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(e => {
            const i = this.getCardanoRPCUrl(e),
                s = Ps(e);
            t[s] = this.createHttpProvider(s, i)
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    getCardanoRPCUrl(t) {
        const e = this.namespace.rpcMap;
        if (e) return e[t]
    }
    setHttpProvider(t, e) {
        const i = this.createHttpProvider(t, e);
        i && (this.httpProviders[t] = i)
    }
    createHttpProvider(t, e) {
        const i = e || this.getCardanoRPCUrl(t);
        if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Dn(new Yn(i, ke("disableProviderPing")))
    }
}
class O9 {
    constructor(t) {
        this.name = "elrond", this.namespace = t.namespace, this.events = ke("events"), this.client = ke("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(xn.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(e => {
            var i;
            const s = Ps(e);
            t[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[e])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const i = this.createHttpProvider(t, e);
        i && (this.httpProviders[t] = i)
    }
    createHttpProvider(t, e) {
        const i = e || Gn(t, this.namespace, this.client.core.projectId);
        if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Dn(new Yn(i, ke("disableProviderPing")))
    }
}
class N9 {
    constructor(t) {
        this.name = "multiversx", this.namespace = t.namespace, this.events = ke("events"), this.client = ke("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(xn.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(e => {
            var i;
            const s = Ps(e);
            t[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[e])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const i = this.createHttpProvider(t, e);
        i && (this.httpProviders[t] = i)
    }
    createHttpProvider(t, e) {
        const i = e || Gn(t, this.namespace, this.client.core.projectId);
        if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Dn(new Yn(i, ke("disableProviderPing")))
    }
}
class R9 {
    constructor(t) {
        this.name = "near", this.namespace = t.namespace, this.events = ke("events"), this.client = ke("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        if (this.chainId = t, !this.httpProviders[t]) {
            const i = e || Gn(`${this.name}:${t}`, this.namespace);
            if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
            this.setHttpProvider(t, i)
        }
        this.events.emit(xn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(e => {
            var i;
            t[e] = this.createHttpProvider(e, (i = this.namespace.rpcMap) == null ? void 0 : i[e])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const i = this.createHttpProvider(t, e);
        i && (this.httpProviders[t] = i)
    }
    createHttpProvider(t, e) {
        const i = e || Gn(t, this.namespace);
        return typeof i > "u" ? void 0 : new Dn(new Yn(i, ke("disableProviderPing")))
    }
}
var T9 = Object.defineProperty,
    F9 = Object.defineProperties,
    B9 = Object.getOwnPropertyDescriptors,
    y1 = Object.getOwnPropertySymbols,
    U9 = Object.prototype.hasOwnProperty,
    L9 = Object.prototype.propertyIsEnumerable,
    w1 = (r, t, e) => t in r ? T9(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    Pu = (r, t) => {
        for (var e in t || (t = {})) U9.call(t, e) && w1(r, e, t[e]);
        if (y1)
            for (var e of y1(t)) L9.call(t, e) && w1(r, e, t[e]);
        return r
    },
    sl = (r, t) => F9(r, B9(t));
class af {
    constructor(t) {
        this.events = new Bl, this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof t ? .logger < "u" && typeof t ? .logger != "string" ? t.logger : ma(lc({
            level: t ? .logger || f1
        })), this.disableProviderPing = t ? .disableProviderPing || !1
    }
    static async init(t) {
        const e = new af(t);
        return await e.initialize(), e
    }
    async request(t, e, i) {
        const [s, a] = this.validateChain(e);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(s).request({
            request: Pu({}, t),
            chainId: `${s}:${a}`,
            topic: this.session.topic,
            expiry: i
        })
    }
    sendAsync(t, e, i, s) {
        const a = new Date().getTime();
        this.request(t, i, s).then(c => e(null, fc(a, c))).catch(c => e(c, void 0))
    }
    async enable() {
        if (!this.client) throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }), await this.requestAccounts()
    }
    async disconnect() {
        var t;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (t = this.session) == null ? void 0 : t.topic,
            reason: Ne("USER_DISCONNECTED")
        }), await this.cleanup()
    }
    async connect(t) {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic)
    }
    async authenticate(t) {
        if (!this.client) throw new Error("Sign Client not initialized");
        this.setNamespaces(t), await this.cleanupPendingPairings();
        const {
            uri: e,
            response: i
        } = await this.client.authenticate(t);
        e && (this.uri = e, this.events.emit("display_uri", e));
        const s = await i();
        if (this.session = s.session, this.session) {
            const a = v1(this.session.namespaces);
            this.namespaces = rl(this.namespaces, a), this.persist("namespaces", this.namespaces), this.onConnect()
        }
        return s
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(t) {
        this.shouldAbortPairingAttempt = !1;
        let e = 0;
        do {
            if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
            if (e >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
            const {
                uri: i,
                approval: s
            } = await this.client.connect({
                pairingTopic: t,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            i && (this.uri = i, this.events.emit("display_uri", i)), await s().then(a => {
                this.session = a;
                const c = v1(a.namespaces);
                this.namespaces = rl(this.namespaces, c), this.persist("namespaces", this.namespaces)
            }).catch(a => {
                if (a.message !== mm) throw a;
                e++
            })
        } while (!this.session);
        return this.onConnect(), this.session
    }
    setDefaultChain(t, e) {
        try {
            if (!this.session) return;
            const [i, s] = this.validateChain(t);
            this.getProvider(i).setDefaultChain(s, e)
        } catch (i) {
            if (!/Please call connect/.test(i.message)) throw i
        }
    }
    async cleanupPendingPairings(t = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        const e = this.client.pairing.getAll();
        if (on(e)) {
            for (const i of e) t.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
            this.logger.info(`Inactive pairings cleared: ${e.length}`)
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
            const t = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders()
        }
    }
    async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
    }
    async createClient() {
        this.client = this.providerOpts.client || await of .init({
            logger: this.providerOpts.logger || f1,
            relayUrl: this.providerOpts.relayUrl || p9,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name
        }), this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
        const t = [...new Set(Object.keys(this.session.namespaces).map(e => Yo(e)))];
        nl("client", this.client), nl("events", this.events), nl("disableProviderPing", this.disableProviderPing), t.forEach(e => {
            if (!this.session) return;
            const i = S9(e, this.session),
                s = vm(i),
                a = rl(this.namespaces, this.optionalNamespaces),
                c = sl(Pu({}, a[e]), {
                    accounts: i,
                    chains: s
                });
            switch (e) {
                case "eip155":
                    this.rpcProviders[e] = new x9({
                        namespace: c
                    });
                    break;
                case "solana":
                    this.rpcProviders[e] = new M9({
                        namespace: c
                    });
                    break;
                case "cosmos":
                    this.rpcProviders[e] = new C9({
                        namespace: c
                    });
                    break;
                case "polkadot":
                    this.rpcProviders[e] = new D9({
                        namespace: c
                    });
                    break;
                case "cip34":
                    this.rpcProviders[e] = new P9({
                        namespace: c
                    });
                    break;
                case "elrond":
                    this.rpcProviders[e] = new O9({
                        namespace: c
                    });
                    break;
                case "multiversx":
                    this.rpcProviders[e] = new N9({
                        namespace: c
                    });
                    break;
                case "near":
                    this.rpcProviders[e] = new R9({
                        namespace: c
                    });
                    break
            }
        })
    }
    registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", t => {
            this.events.emit("session_ping", t)
        }), this.client.on("session_event", t => {
            const {
                params: e
            } = t, {
                event: i
            } = e;
            if (i.name === "accountsChanged") {
                const s = i.data;
                s && on(s) && this.events.emit("accountsChanged", s.map(I9))
            } else if (i.name === "chainChanged") {
                const s = e.chainId,
                    a = e.event.data,
                    c = Yo(s),
                    f = il(s) !== il(a) ? `${c}:${il(a)}` : s;
                this.onChainChanged(f)
            } else this.events.emit(i.name, i.data);
            this.events.emit("session_event", t)
        }), this.client.on("session_update", ({
            topic: t,
            params: e
        }) => {
            var i;
            const {
                namespaces: s
            } = e, a = (i = this.client) == null ? void 0 : i.session.get(t);
            this.session = sl(Pu({}, a), {
                namespaces: s
            }), this.onSessionUpdate(), this.events.emit("session_update", {
                topic: t,
                params: e
            })
        }), this.client.on("session_delete", async t => {
            await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", sl(Pu({}, Ne("USER_DISCONNECTED")), {
                data: t.topic
            }))
        }), this.on(xn.DEFAULT_CHAIN_CHANGED, t => {
            this.onChainChanged(t, !0)
        })
    }
    getProvider(t) {
        if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
        return this.rpcProviders[t]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(t => {
            var e;
            this.getProvider(t).updateNamespace((e = this.session) == null ? void 0 : e.namespaces[t])
        })
    }
    setNamespaces(t) {
        const {
            namespaces: e,
            optionalNamespaces: i,
            sessionProperties: s
        } = t;
        e && Object.keys(e).length && (this.namespaces = e), i && Object.keys(i).length && (this.optionalNamespaces = i), this.sessionProperties = s, this.persist("namespaces", e), this.persist("optionalNamespaces", i)
    }
    validateChain(t) {
        const [e, i] = t ? .split(":") || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length) return [e, i];
        if (e && !Object.keys(this.namespaces || {}).map(c => Yo(c)).includes(e)) throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
        if (e && i) return [e, i];
        const s = Yo(Object.keys(this.namespaces)[0]),
            a = this.rpcProviders[s].getDefaultChain();
        return [s, a]
    }
    async requestAccounts() {
        const [t] = this.validateChain();
        return await this.getProvider(t).requestAccounts()
    }
    onChainChanged(t, e = !1) {
        if (!this.namespaces) return;
        const [i, s] = this.validateChain(t);
        s && (e || this.getProvider(i).setDefaultChain(s), this.namespaces[i] ? this.namespaces[i].defaultChain = s : this.namespaces[`${i}:${s}`] ? this.namespaces[`${i}:${s}`].defaultChain = s : this.namespaces[`${i}:${s}`] = {
            defaultChain: s
        }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", s))
    }
    onConnect() {
        this.createProviders(), this.events.emit("connect", {
            session: this.session
        })
    }
    async cleanup() {
        this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
            deletePairings: !0
        })
    }
    persist(t, e) {
        this.client.core.storage.setItem(`${d1}/${t}`, e)
    }
    async getFromStore(t) {
        return await this.client.core.storage.getItem(`${d1}/${t}`)
    }
}
const q9 = af,
    j9 = "wc",
    $9 = "ethereum_provider",
    z9 = `${j9}@2:${$9}:`,
    k9 = "https://rpc.walletconnect.com/v1/",
    Tl = ["eth_sendTransaction", "personal_sign"],
    H9 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"],
    Fl = ["chainChanged", "accountsChanged"],
    K9 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var V9 = Object.defineProperty,
    G9 = Object.defineProperties,
    W9 = Object.getOwnPropertyDescriptors,
    b1 = Object.getOwnPropertySymbols,
    Y9 = Object.prototype.hasOwnProperty,
    Q9 = Object.prototype.propertyIsEnumerable,
    _1 = (r, t, e) => t in r ? V9(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    to = (r, t) => {
        for (var e in t || (t = {})) Y9.call(t, e) && _1(r, e, t[e]);
        if (b1)
            for (var e of b1(t)) Q9.call(t, e) && _1(r, e, t[e]);
        return r
    },
    ol = (r, t) => G9(r, W9(t));

function ec(r) {
    return Number(r[0].split(":")[1])
}

function Ou(r) {
    return `0x${r.toString(16)}`
}

function J9(r) {
    const {
        chains: t,
        optionalChains: e,
        methods: i,
        optionalMethods: s,
        events: a,
        optionalEvents: c,
        rpcMap: f
    } = r;
    if (!on(t)) throw new Error("Invalid chains");
    const p = {
            chains: t,
            methods: i || Tl,
            events: a || Fl,
            rpcMap: to({}, t.length ? {
                [ec(t)]: f[ec(t)]
            } : {})
        },
        d = a ? .filter(D => !Fl.includes(D)),
        b = i ? .filter(D => !Tl.includes(D));
    if (!e && !c && !s && !(d != null && d.length) && !(b != null && b.length)) return {
        required: t.length ? p : void 0
    };
    const E = d ? .length && b ? .length || !e,
        x = {
            chains: [...new Set(E ? p.chains.concat(e || []) : e)],
            methods: [...new Set(p.methods.concat(s != null && s.length ? s : H9))],
            events: [...new Set(p.events.concat(c != null && c.length ? c : K9))],
            rpcMap: f
        };
    return {
        required: t.length ? p : void 0,
        optional: e.length ? x : void 0
    }
}
class uf {
    constructor() {
        this.events = new Si.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = z9, this.on = (t, e) => (this.events.on(t, e), this), this.once = (t, e) => (this.events.once(t, e), this), this.removeListener = (t, e) => (this.events.removeListener(t, e), this), this.off = (t, e) => (this.events.off(t, e), this), this.parseAccount = t => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {}
    }
    static async init(t) {
        const e = new uf;
        return await e.initialize(t), e
    }
    async request(t, e) {
        return await this.signer.request(t, this.formatChainId(this.chainId), e)
    }
    sendAsync(t, e, i) {
        this.signer.sendAsync(t, e, this.formatChainId(this.chainId), i)
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1
    }
    async enable() {
        return this.session || await this.connect(), await this.request({
            method: "eth_requestAccounts"
        })
    }
    async connect(t) {
        if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(t);
        const {
            required: e,
            optional: i
        } = J9(this.rpc);
        try {
            const s = await new Promise(async (c, f) => {
                var p;
                this.rpc.showQrModal && ((p = this.modal) == null || p.subscribeModal(d => {
                    !d.open && !this.signer.session && (this.signer.abortPairingAttempt(), f(new Error("Connection request reset. Please try again.")))
                })), await this.signer.connect(ol(to({
                    namespaces: to({}, e && {
                        [this.namespace]: e
                    })
                }, i && {
                    optionalNamespaces: {
                        [this.namespace]: i
                    }
                }), {
                    pairingTopic: t ? .pairingTopic
                })).then(d => {
                    c(d)
                }).catch(d => {
                    f(new Error(d.message))
                })
            });
            if (!s) return;
            const a = C0(s.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : a), this.setAccounts(a), this.events.emit("connect", {
                chainId: Ou(this.chainId)
            })
        } catch (s) {
            throw this.signer.logger.error(s), s
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async authenticate(t) {
        if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts({
            chains: t ? .chains
        });
        try {
            const e = await new Promise(async (s, a) => {
                    var c;
                    this.rpc.showQrModal && ((c = this.modal) == null || c.subscribeModal(f => {
                        !f.open && !this.signer.session && (this.signer.abortPairingAttempt(), a(new Error("Connection request reset. Please try again.")))
                    })), await this.signer.authenticate(ol(to({}, t), {
                        chains: this.rpc.chains
                    })).then(f => {
                        s(f)
                    }).catch(f => {
                        a(new Error(f.message))
                    })
                }),
                i = e.session;
            if (i) {
                const s = C0(i.namespaces, [this.namespace]);
                this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s), this.setAccounts(s), this.events.emit("connect", {
                    chainId: Ou(this.chainId)
                })
            }
            return e
        } catch (e) {
            throw this.signer.logger.error(e), e
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(), this.reset()
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", t => {
            const {
                params: e
            } = t, {
                event: i
            } = e;
            i.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i.data), this.events.emit("accountsChanged", this.accounts)) : i.name === "chainChanged" ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data), this.events.emit("session_event", t)
        }), this.signer.on("chainChanged", t => {
            const e = parseInt(t);
            this.chainId = e, this.events.emit("chainChanged", Ou(this.chainId)), this.persist()
        }), this.signer.on("session_update", t => {
            this.events.emit("session_update", t)
        }), this.signer.on("session_delete", t => {
            this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", ol(to({}, Ne("USER_DISCONNECTED")), {
                data: t.topic,
                name: "USER_DISCONNECTED"
            }))
        }), this.signer.on("display_uri", t => {
            var e, i;
            this.rpc.showQrModal && ((e = this.modal) == null || e.closeModal(), (i = this.modal) == null || i.openModal({
                uri: t
            })), this.events.emit("display_uri", t)
        })
    }
    switchEthereumChain(t) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: t.toString(16)
            }]
        })
    }
    isCompatibleChainId(t) {
        return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1
    }
    formatChainId(t) {
        return `${this.namespace}:${t}`
    }
    parseChainId(t) {
        return Number(t.split(":")[1])
    }
    setChainIds(t) {
        const e = t.filter(i => this.isCompatibleChainId(i)).map(i => this.parseChainId(i));
        e.length && (this.chainId = e[0], this.events.emit("chainChanged", Ou(this.chainId)), this.persist())
    }
    setChainId(t) {
        if (this.isCompatibleChainId(t)) {
            const e = this.parseChainId(t);
            this.chainId = e, this.switchEthereumChain(e)
        }
    }
    parseAccountId(t) {
        const [e, i, s] = t.split(":");
        return {
            chainId: `${e}:${i}`,
            address: s
        }
    }
    setAccounts(t) {
        this.accounts = t.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(t) {
        var e, i;
        const s = (e = t ? .chains) != null ? e : [],
            a = (i = t ? .optionalChains) != null ? i : [],
            c = s.concat(a);
        if (!c.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
        const f = s.length ? t ? .methods || Tl : [],
            p = s.length ? t ? .events || Fl : [],
            d = t ? .optionalMethods || [],
            b = t ? .optionalEvents || [],
            E = t ? .rpcMap || this.buildRpcMap(c, t.projectId),
            x = t ? .qrModalOptions || void 0;
        return {
            chains: s ? .map(D => this.formatChainId(D)),
            optionalChains: a.map(D => this.formatChainId(D)),
            methods: f,
            events: p,
            optionalMethods: d,
            optionalEvents: b,
            rpcMap: E,
            showQrModal: !!(t != null && t.showQrModal),
            qrModalOptions: x,
            projectId: t.projectId,
            metadata: t.metadata
        }
    }
    buildRpcMap(t, e) {
        const i = {};
        return t.forEach(s => {
            i[s] = this.getRpcUrl(s, e)
        }), i
    }
    async initialize(t) {
        if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? ec(this.rpc.chains) : ec(this.rpc.optionalChains), this.signer = await q9.init({
                projectId: this.rpc.projectId,
                metadata: this.rpc.metadata,
                disableProviderPing: t.disableProviderPing,
                relayUrl: t.relayUrl,
                storageOptions: t.storageOptions
            }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
            let e;
            try {
                const {
                    WalletConnectModal: i
                } = await Q3(() =>
                    import ("./index-35203b22.js").then(s => s.i), ["static/js/index-35203b22.js", "static/js/rainbowkit-1c226f0f.js", "static/js/react-74e86ac5.js"]);
                e = i
            } catch {
                throw new Error("To use QR modal, please install @walletconnect/modal package")
            }
            if (e) try {
                this.modal = new e(to({
                    projectId: this.rpc.projectId
                }, this.rpc.qrModalOptions))
            } catch (i) {
                throw this.signer.logger.error(i), new Error("Could not generate WalletConnectModal Instance")
            }
        }
    }
    loadConnectOpts(t) {
        if (!t) return;
        const {
            chains: e,
            optionalChains: i,
            rpcMap: s
        } = t;
        e && on(e) && (this.rpc.chains = e.map(a => this.formatChainId(a)), e.forEach(a => {
            this.rpc.rpcMap[a] = s ? .[a] || this.getRpcUrl(a)
        })), i && on(i) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i ? .map(a => this.formatChainId(a)), i.forEach(a => {
            this.rpc.rpcMap[a] = s ? .[a] || this.getRpcUrl(a)
        }))
    }
    getRpcUrl(t, e) {
        var i;
        return ((i = this.rpc.rpcMap) == null ? void 0 : i[t]) || `${k9}?chainId=eip155:${t}&projectId=${e||this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (this.session) try {
            const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                e = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
            this.setChainIds(t ? [this.formatChainId(t)] : e ? .accounts), this.setAccounts(e ? .accounts)
        } catch (t) {
            this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch(e => this.signer.logger.warn(e))
        }
    }
    reset() {
        this.chainId = 1, this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(t) {
        return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map(e => this.parseAccount(e))
    }
}
const MM = uf;
export {
    MM as EthereumProvider, K9 as OPTIONAL_EVENTS, H9 as OPTIONAL_METHODS, Fl as REQUIRED_EVENTS, Tl as REQUIRED_METHODS, uf as
    default
};