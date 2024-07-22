import {
    r as I,
    g as pu,
    c as gm,
    R as g,
    a as bm
} from "./react-74e86ac5.js";
var mu = {
        exports: {}
    },
    jo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ym = I,
    wm = Symbol.for("react.element"),
    vm = Symbol.for("react.fragment"),
    Cm = Object.prototype.hasOwnProperty,
    Em = ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Am = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function gu(e, t, n) {
    var r, o = {},
        s = null,
        i = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Cm.call(t, r) && !Am.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: wm,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: Em.current
    }
}
jo.Fragment = vm;
jo.jsx = gu;
jo.jsxs = gu;
mu.exports = jo;
var xm = mu.exports;
const Im = "2.17.9",
    km = e => e,
    yr = e => e,
    Bm = () => `viem@${Im}`;
let j = class ni extends Error {
    constructor(t, n = {}) {
        super(), Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ViemError"
        }), Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Bm()
        });
        const r = n.cause instanceof ni ? n.cause.details : n.cause ? .message ? n.cause.message : n.details,
            o = n.cause instanceof ni && n.cause.docsPath || n.docsPath;
        this.message = [t || "An error occurred.", "", ...n.metaMessages ? [...n.metaMessages, ""] : [], ...o ? [`Docs: ${n.docsBaseUrl??"https://viem.sh"}${o}${n.docsSlug?`#${n.docsSlug}`:""}`] : [], ...r ? [`Details: ${r}`] : [], `Version: ${this.version}`].join(`
`), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = o, this.metaMessages = n.metaMessages, this.shortMessage = t
    }
    walk(t) {
        return bu(this, t)
    }
};

function bu(e, t) {
    return t ? .(e) ? e : e && typeof e == "object" && "cause" in e ? bu(e.cause, t) : t ? null : e
}
class jm extends j {
    constructor({
        max: t,
        min: n,
        signed: r,
        size: o,
        value: s
    }) {
        super(`Number "${s}" is not in safe ${o?`${o*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${t?`(${n} to ${t})`:`(above ${n})`}`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IntegerOutOfRangeError"
        })
    }
}
class Sm extends j {
    constructor(t) {
        super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidBytesBooleanError"
        })
    }
}
class Pm extends j {
    constructor({
        givenSize: t,
        maxSize: n
    }) {
        super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SizeOverflowError"
        })
    }
}
class yu extends j {
    constructor({
        offset: t,
        position: n,
        size: r
    }) {
        super(`Slice ${n==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${r}).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SliceOffsetOutOfBoundsError"
        })
    }
}
class wu extends j {
    constructor({
        size: t,
        targetSize: n,
        type: r
    }) {
        super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SizeExceedsPaddingSizeError"
        })
    }
}
class xc extends j {
    constructor({
        size: t,
        targetSize: n,
        type: r
    }) {
        super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${t} ${r} long.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidBytesLengthError"
        })
    }
}

function Zt(e, {
    dir: t,
    size: n = 32
} = {}) {
    return typeof e == "string" ? It(e, {
        dir: t,
        size: n
    }) : Tm(e, {
        dir: t,
        size: n
    })
}

function It(e, {
    dir: t,
    size: n = 32
} = {}) {
    if (n === null) return e;
    const r = e.replace("0x", "");
    if (r.length > n * 2) throw new wu({
        size: Math.ceil(r.length / 2),
        targetSize: n,
        type: "hex"
    });
    return `0x${r[t==="right"?"padEnd":"padStart"](n*2,"0")}`
}

function Tm(e, {
    dir: t,
    size: n = 32
} = {}) {
    if (n === null) return e;
    if (e.length > n) throw new wu({
        size: e.length,
        targetSize: n,
        type: "bytes"
    });
    const r = new Uint8Array(n);
    for (let o = 0; o < n; o++) {
        const s = t === "right";
        r[s ? o : n - o - 1] = e[s ? o : e.length - o - 1]
    }
    return r
}

function Re(e, {
    strict: t = !0
} = {}) {
    return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x")
}

function ae(e) {
    return Re(e, {
        strict: !1
    }) ? Math.ceil((e.length - 2) / 2) : e.length
}

function ot(e, {
    dir: t = "left"
} = {}) {
    let n = typeof e == "string" ? e.replace("0x", "") : e,
        r = 0;
    for (let o = 0; o < n.length - 1 && n[t === "left" ? o : n.length - o - 1].toString() === "0"; o++) r++;
    return n = t === "left" ? n.slice(r) : n.slice(0, n.length - r), typeof e == "string" ? (n.length === 1 && t === "right" && (n = `${n}0`), `0x${n.length%2===1?`0${n}`:n}`) : n
}
const Om = new TextEncoder;

function rt(e, t = {}) {
    return typeof e == "number" || typeof e == "bigint" ? Rm(e, t) : typeof e == "boolean" ? Mm(e, t) : Re(e) ? We(e, t) : zt(e, t)
}

function Mm(e, t = {}) {
    const n = new Uint8Array(1);
    return n[0] = Number(e), typeof t.size == "number" ? (Ze(n, {
        size: t.size
    }), Zt(n, {
        size: t.size
    })) : n
}
const ft = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};

function Ic(e) {
    if (e >= ft.zero && e <= ft.nine) return e - ft.zero;
    if (e >= ft.A && e <= ft.F) return e - (ft.A - 10);
    if (e >= ft.a && e <= ft.f) return e - (ft.a - 10)
}

function We(e, t = {}) {
    let n = e;
    t.size && (Ze(n, {
        size: t.size
    }), n = Zt(n, {
        dir: "right",
        size: t.size
    }));
    let r = n.slice(2);
    r.length % 2 && (r = `0${r}`);
    const o = r.length / 2,
        s = new Uint8Array(o);
    for (let i = 0, a = 0; i < o; i++) {
        const c = Ic(r.charCodeAt(a++)),
            l = Ic(r.charCodeAt(a++));
        if (c === void 0 || l === void 0) throw new j(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);
        s[i] = c * 16 + l
    }
    return s
}

function Rm(e, t) {
    const n = W(e, t);
    return We(n)
}

function zt(e, t = {}) {
    const n = Om.encode(e);
    return typeof t.size == "number" ? (Ze(n, {
        size: t.size
    }), Zt(n, {
        dir: "right",
        size: t.size
    })) : n
}

function Ze(e, {
    size: t
}) {
    if (ae(e) > t) throw new Pm({
        givenSize: ae(e),
        maxSize: t
    })
}

function re(e, t = {}) {
    const {
        signed: n
    } = t;
    t.size && Ze(e, {
        size: t.size
    });
    const r = BigInt(e);
    if (!n) return r;
    const o = (e.length - 2) / 2,
        s = (1 n << BigInt(o) * 8 n - 1 n) - 1 n;
    return r <= s ? r : r - BigInt(`0x${"f".padStart(o*2,"f")}`) - 1 n
}

function Ke(e, t = {}) {
    return Number(re(e, t))
}

function _m(e, t = {}) {
    let n = We(e);
    return t.size && (Ze(n, {
        size: t.size
    }), n = ot(n, {
        dir: "right"
    })), new TextDecoder().decode(n)
}
const Dm = Array.from({
    length: 256
}, (e, t) => t.toString(16).padStart(2, "0"));

function L(e, t = {}) {
    return typeof e == "number" || typeof e == "bigint" ? W(e, t) : typeof e == "string" ? fn(e, t) : typeof e == "boolean" ? vu(e, t) : ue(e, t)
}

function vu(e, t = {}) {
    const n = `0x${Number(e)}`;
    return typeof t.size == "number" ? (Ze(n, {
        size: t.size
    }), Zt(n, {
        size: t.size
    })) : n
}

function ue(e, t = {}) {
    let n = "";
    for (let o = 0; o < e.length; o++) n += Dm[e[o]];
    const r = `0x${n}`;
    return typeof t.size == "number" ? (Ze(r, {
        size: t.size
    }), Zt(r, {
        dir: "right",
        size: t.size
    })) : r
}

function W(e, t = {}) {
    const {
        signed: n,
        size: r
    } = t, o = BigInt(e);
    let s;
    r ? n ? s = (1 n << BigInt(r) * 8 n - 1 n) - 1 n : s = 2 n ** (BigInt(r) * 8 n) - 1 n : typeof e == "number" && (s = BigInt(Number.MAX_SAFE_INTEGER));
    const i = typeof s == "bigint" && n ? -s - 1 n : 0;
    if (s && o > s || o < i) {
        const c = typeof e == "bigint" ? "n" : "";
        throw new jm({
            max: s ? `${s}${c}` : void 0,
            min: `${i}${c}`,
            signed: n,
            size: r,
            value: `${e}${c}`
        })
    }
    const a = `0x${(n&&o<0?(1n<<BigInt(r*8))+BigInt(o):o).toString(16)}`;
    return r ? Zt(a, {
        size: r
    }) : a
}
const Nm = new TextEncoder;

function fn(e, t = {}) {
    const n = Nm.encode(e);
    return ue(n, t)
}
async function Fm(e, {
    chain: t
}) {
    const {
        id: n,
        name: r,
        nativeCurrency: o,
        rpcUrls: s,
        blockExplorers: i
    } = t;
    await e.request({
        method: "wallet_addEthereumChain",
        params: [{
            chainId: W(n),
            chainName: r,
            nativeCurrency: o,
            rpcUrls: s.default.http,
            blockExplorerUrls: i ? Object.values(i).map(({
                url: a
            }) => a) : void 0
        }]
    }, {
        dedupe: !0,
        retryCount: 0
    })
}

function mt(e, {
    includeName: t = !1
} = {}) {
    if (e.type !== "function" && e.type !== "event" && e.type !== "error") throw new Zm(e.type);
    return `${e.name}(${So(e.inputs,{includeName:t})})`
}

function So(e, {
    includeName: t = !1
} = {}) {
    return e ? e.map(n => Lm(n, {
        includeName: t
    })).join(t ? ", " : ",") : ""
}

function Lm(e, {
    includeName: t
}) {
    return e.type.startsWith("tuple") ? `(${So(e.components,{includeName:t})})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "")
}
class Um extends j {
    constructor({
        docsPath: t
    }) {
        super(["A constructor was not found on the ABI.", "Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`), {
            docsPath: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiConstructorNotFoundError"
        })
    }
}
class kc extends j {
    constructor({
        docsPath: t
    }) {
        super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.", "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`), {
            docsPath: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiConstructorParamsNotFoundError"
        })
    }
}
class Cu extends j {
    constructor({
        data: t,
        params: n,
        size: r
    }) {
        super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`), {
            metaMessages: [`Params: (${So(n,{includeName:!0})})`, `Data:   ${t} (${r} bytes)`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiDecodingDataSizeTooSmallError"
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = t, this.params = n, this.size = r
    }
}
class Po extends j {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiDecodingZeroDataError"
        })
    }
}
class zm extends j {
    constructor({
        expectedLength: t,
        givenLength: n,
        type: r
    }) {
        super([`ABI encoding array length mismatch for type ${r}.`, `Expected length: ${t}`, `Given length: ${n}`].join(`
`)), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEncodingArrayLengthMismatchError"
        })
    }
}
class Wm extends j {
    constructor({
        expectedSize: t,
        value: n
    }) {
        super(`Size of bytes "${n}" (bytes${ae(n)}) does not match expected size (bytes${t}).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEncodingBytesSizeMismatchError"
        })
    }
}
class qm extends j {
    constructor({
        expectedLength: t,
        givenLength: n
    }) {
        super(["ABI encoding params/values length mismatch.", `Expected length (params): ${t}`, `Given length (values): ${n}`].join(`
`)), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEncodingLengthMismatchError"
        })
    }
}
class Eu extends j {
    constructor(t, {
        docsPath: n
    }) {
        super([`Encoded error signature "${t}" not found on ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`), {
            docsPath: n
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiErrorSignatureNotFoundError"
        }), Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.signature = t
    }
}
class Hm extends j {
    constructor({
        docsPath: t
    }) {
        super("Cannot extract event signature from empty topics.", {
            docsPath: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEventSignatureEmptyTopicsError"
        })
    }
}
class Au extends j {
    constructor(t, {
        docsPath: n
    }) {
        super([`Encoded event signature "${t}" not found on ABI.`, "Make sure you are using the correct ABI and that the event exists on it.", `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`), {
            docsPath: n
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEventSignatureNotFoundError"
        })
    }
}
class Bc extends j {
    constructor(t, {
        docsPath: n
    } = {}) {
        super([`Event ${t?`"${t}" `:""}not found on ABI.`, "Make sure you are using the correct ABI and that the event exists on it."].join(`
`), {
            docsPath: n
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEventNotFoundError"
        })
    }
}
class ao extends j {
    constructor(t, {
        docsPath: n
    } = {}) {
        super([`Function ${t?`"${t}" `:""}not found on ABI.`, "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
            docsPath: n
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiFunctionNotFoundError"
        })
    }
}
class Qm extends j {
    constructor(t, {
        docsPath: n
    }) {
        super([`Function "${t}" does not contain any \`outputs\` on ABI.`, "Cannot decode function result without knowing what the parameter types are.", "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
            docsPath: n
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiFunctionOutputsNotFoundError"
        })
    }
}
class Vm extends j {
    constructor(t, n) {
        super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [`\`${t.type}\` in \`${mt(t.abiItem)}\`, and`, `\`${n.type}\` in \`${mt(n.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItemAmbiguityError"
        })
    }
}
class $m extends j {
    constructor({
        expectedSize: t,
        givenSize: n
    }) {
        super(`Expected bytes${t}, got bytes${n}.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BytesSizeMismatchError"
        })
    }
}
class Qn extends j {
    constructor({
        abiItem: t,
        data: n,
        params: r,
        size: o
    }) {
        super([`Data size of ${o} bytes is too small for non-indexed event parameters.`].join(`
`), {
            metaMessages: [`Params: (${So(r,{includeName:!0})})`, `Data:   ${n} (${o} bytes)`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DecodeLogDataMismatch"
        }), Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.abiItem = t, this.data = n, this.params = r, this.size = o
    }
}
class To extends j {
    constructor({
        abiItem: t,
        param: n
    }) {
        super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${mt(t,{includeName:!0})}".`].join(`
`)), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DecodeLogTopicsMismatch"
        }), Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.abiItem = t
    }
}
class Gm extends j {
    constructor(t, {
        docsPath: n
    }) {
        super([`Type "${t}" is not a valid encoding type.`, "Please provide a valid ABI type."].join(`
`), {
            docsPath: n
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiEncodingType"
        })
    }
}
class Km extends j {
    constructor(t, {
        docsPath: n
    }) {
        super([`Type "${t}" is not a valid decoding type.`, "Please provide a valid ABI type."].join(`
`), {
            docsPath: n
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiDecodingType"
        })
    }
}
class Jm extends j {
    constructor(t) {
        super([`Value "${t}" is not a valid array.`].join(`
`)), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidArrayError"
        })
    }
}
class Zm extends j {
    constructor(t) {
        super([`"${t}" is not a valid definition type.`, 'Valid types: "function", "event", "error"'].join(`
`)), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidDefinitionTypeError"
        })
    }
}

function st(e) {
    return typeof e[0] == "string" ? bt(e) : Ym(e)
}

function Ym(e) {
    let t = 0;
    for (const o of e) t += o.length;
    const n = new Uint8Array(t);
    let r = 0;
    for (const o of e) n.set(o, r), r += o.length;
    return n
}

function bt(e) {
    return `0x${e.reduce((t,n)=>t+n.replace("0x",""),"")}`
}
class ve extends j {
    constructor({
        address: t
    }) {
        super(`Address "${t}" is invalid.`, {
            metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAddressError"
        })
    }
}
class Zi extends Map {
    constructor(t) {
        super(), Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.maxSize = t
    }
    set(t, n) {
        return super.set(t, n), this.maxSize && this.size > this.maxSize && this.delete(this.keys().next().value), this
    }
}

function co(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw new Error(`positive integer expected, not ${e}`)
}

function Xm(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array"
}

function wr(e, ...t) {
    if (!Xm(e)) throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length)) throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
}

function e0(e) {
    if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    co(e.outputLen), co(e.blockLen)
}

function hn(e, t = !0) {
    if (e.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && e.finished) throw new Error("Hash#digest() has already been called")
}

function xu(e, t) {
    wr(e);
    const n = t.outputLen;
    if (e.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`)
}
const Fr = BigInt(2 ** 32 - 1),
    jc = BigInt(32);

function t0(e, t = !1) {
    return t ? {
        h: Number(e & Fr),
        l: Number(e >> jc & Fr)
    } : {
        h: Number(e >> jc & Fr) | 0,
        l: Number(e & Fr) | 0
    }
}

function n0(e, t = !1) {
    let n = new Uint32Array(e.length),
        r = new Uint32Array(e.length);
    for (let o = 0; o < e.length; o++) {
        const {
            h: s,
            l: i
        } = t0(e[o], t);
        [n[o], r[o]] = [s, i]
    }
    return [n, r]
}
const r0 = (e, t, n) => e << n | t >>> 32 - n,
    o0 = (e, t, n) => t << n | e >>> 32 - n,
    s0 = (e, t, n) => t << n - 32 | e >>> 64 - n,
    i0 = (e, t, n) => e << n - 32 | t >>> 64 - n,
    gs = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const a0 = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
    bs = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
    nt = (e, t) => e << 32 - t | e >>> t,
    Sc = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68,
    c0 = e => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;

function Pc(e) {
    for (let t = 0; t < e.length; t++) e[t] = c0(e[t])
}

function l0(e) {
    if (typeof e != "string") throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
    return new Uint8Array(new TextEncoder().encode(e))
}

function Oo(e) {
    return typeof e == "string" && (e = l0(e)), wr(e), e
}

function u0(...e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        wr(o), t += o.length
    }
    const n = new Uint8Array(t);
    for (let r = 0, o = 0; r < e.length; r++) {
        const s = e[r];
        n.set(s, o), o += s.length
    }
    return n
}
class Yi {
    clone() {
        return this._cloneInto()
    }
}

function Iu(e) {
    const t = r => e().update(Oo(r)).digest(),
        n = e();
    return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t
}

function ku(e = 32) {
    if (gs && typeof gs.getRandomValues == "function") return gs.getRandomValues(new Uint8Array(e));
    throw new Error("crypto.getRandomValues must be defined")
}
const Bu = [],
    ju = [],
    Su = [],
    d0 = BigInt(0),
    Dn = BigInt(1),
    f0 = BigInt(2),
    h0 = BigInt(7),
    p0 = BigInt(256),
    m0 = BigInt(113);
for (let e = 0, t = Dn, n = 1, r = 0; e < 24; e++) {
    [n, r] = [r, (2 * n + 3 * r) % 5], Bu.push(2 * (5 * r + n)), ju.push((e + 1) * (e + 2) / 2 % 64);
    let o = d0;
    for (let s = 0; s < 7; s++) t = (t << Dn ^ (t >> h0) * m0) % p0, t & f0 && (o ^= Dn << (Dn << BigInt(s)) - Dn);
    Su.push(o)
}
const [g0, b0] = n0(Su, !0), Tc = (e, t, n) => n > 32 ? s0(e, t, n) : r0(e, t, n), Oc = (e, t, n) => n > 32 ? i0(e, t, n) : o0(e, t, n);

function y0(e, t = 24) {
    const n = new Uint32Array(10);
    for (let r = 24 - t; r < 24; r++) {
        for (let i = 0; i < 10; i++) n[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
        for (let i = 0; i < 10; i += 2) {
            const a = (i + 8) % 10,
                c = (i + 2) % 10,
                l = n[c],
                u = n[c + 1],
                f = Tc(l, u, 1) ^ n[a],
                d = Oc(l, u, 1) ^ n[a + 1];
            for (let h = 0; h < 50; h += 10) e[i + h] ^= f, e[i + h + 1] ^= d
        }
        let o = e[2],
            s = e[3];
        for (let i = 0; i < 24; i++) {
            const a = ju[i],
                c = Tc(o, s, a),
                l = Oc(o, s, a),
                u = Bu[i];
            o = e[u], s = e[u + 1], e[u] = c, e[u + 1] = l
        }
        for (let i = 0; i < 50; i += 10) {
            for (let a = 0; a < 10; a++) n[a] = e[i + a];
            for (let a = 0; a < 10; a++) e[i + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10]
        }
        e[0] ^= g0[r], e[1] ^= b0[r]
    }
    n.fill(0)
}
class Xi extends Yi {
    constructor(t, n, r, o = !1, s = 24) {
        if (super(), this.blockLen = t, this.suffix = n, this.outputLen = r, this.enableXOF = o, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, co(r), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200), this.state32 = a0(this.state)
    }
    keccak() {
        Sc || Pc(this.state32), y0(this.state32, this.rounds), Sc || Pc(this.state32), this.posOut = 0, this.pos = 0
    }
    update(t) {
        hn(this);
        const {
            blockLen: n,
            state: r
        } = this;
        t = Oo(t);
        const o = t.length;
        for (let s = 0; s < o;) {
            const i = Math.min(n - this.pos, o - s);
            for (let a = 0; a < i; a++) r[this.pos++] ^= t[s++];
            this.pos === n && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished) return;
        this.finished = !0;
        const {
            state: t,
            suffix: n,
            pos: r,
            blockLen: o
        } = this;
        t[r] ^= n, n & 128 && r === o - 1 && this.keccak(), t[o - 1] ^= 128, this.keccak()
    }
    writeInto(t) {
        hn(this, !1), wr(t), this.finish();
        const n = this.state,
            {
                blockLen: r
            } = this;
        for (let o = 0, s = t.length; o < s;) {
            this.posOut >= r && this.keccak();
            const i = Math.min(r - this.posOut, s - o);
            t.set(n.subarray(this.posOut, this.posOut + i), o), this.posOut += i, o += i
        }
        return t
    }
    xofInto(t) {
        if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
        return this.writeInto(t)
    }
    xof(t) {
        return co(t), this.xofInto(new Uint8Array(t))
    }
    digestInto(t) {
        if (xu(t, this), this.finished) throw new Error("digest() was already called");
        return this.writeInto(t), this.destroy(), t
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0, this.state.fill(0)
    }
    _cloneInto(t) {
        const {
            blockLen: n,
            suffix: r,
            outputLen: o,
            rounds: s,
            enableXOF: i
        } = this;
        return t || (t = new Xi(n, r, o, i, s)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s, t.suffix = r, t.outputLen = o, t.enableXOF = i, t.destroyed = this.destroyed, t
    }
}
const w0 = (e, t, n) => Iu(() => new Xi(t, e, n)),
    v0 = w0(1, 136, 256 / 8);

function xe(e, t) {
    const n = t || "hex",
        r = v0(Re(e, {
            strict: !1
        }) ? rt(e) : e);
    return n === "bytes" ? r : L(r)
}
const ys = new Zi(8192);

function vr(e, t) {
    if (ys.has(`${e}.${t}`)) return ys.get(`${e}.${t}`);
    const n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
        r = xe(zt(n), "bytes"),
        o = (t ? n.substring(`${t}0x`.length) : n).split("");
    for (let i = 0; i < 40; i += 2) r[i >> 1] >> 4 >= 8 && o[i] && (o[i] = o[i].toUpperCase()), (r[i >> 1] & 15) >= 8 && o[i + 1] && (o[i + 1] = o[i + 1].toUpperCase());
    const s = `0x${o.join("")}`;
    return ys.set(`${e}.${t}`, s), s
}

function we(e, t) {
    if (!le(e, {
            strict: !1
        })) throw new ve({
        address: e
    });
    return vr(e, t)
}
const C0 = /^0x[a-fA-F0-9]{40}$/,
    ws = new Zi(8192);

function le(e, t) {
    const {
        strict: n = !0
    } = t ? ? {}, r = `${e}.${n}`;
    if (ws.has(r)) return ws.get(r);
    const o = (() => C0.test(e) ? e.toLowerCase() === e ? !0 : n ? vr(e) === e : !0 : !1)();
    return ws.set(r, o), o
}

function Vn(e, t, n, {
    strict: r
} = {}) {
    return Re(e, {
        strict: !1
    }) ? Mu(e, t, n, {
        strict: r
    }) : Ou(e, t, n, {
        strict: r
    })
}

function Pu(e, t) {
    if (typeof t == "number" && t > 0 && t > ae(e) - 1) throw new yu({
        offset: t,
        position: "start",
        size: ae(e)
    })
}

function Tu(e, t, n) {
    if (typeof t == "number" && typeof n == "number" && ae(e) !== n - t) throw new yu({
        offset: n,
        position: "end",
        size: ae(e)
    })
}

function Ou(e, t, n, {
    strict: r
} = {}) {
    Pu(e, t);
    const o = e.slice(t, n);
    return r && Tu(o, t, n), o
}

function Mu(e, t, n, {
    strict: r
} = {}) {
    Pu(e, t);
    const o = `0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;
    return r && Tu(o, t, n), o
}

function Yt(e, t) {
    if (e.length !== t.length) throw new qm({
        expectedLength: e.length,
        givenLength: t.length
    });
    const n = E0({
            params: e,
            values: t
        }),
        r = ta(n);
    return r.length === 0 ? "0x" : r
}

function E0({
    params: e,
    values: t
}) {
    const n = [];
    for (let r = 0; r < e.length; r++) n.push(ea({
        param: e[r],
        value: t[r]
    }));
    return n
}

function ea({
    param: e,
    value: t
}) {
    const n = na(e.type);
    if (n) {
        const [r, o] = n;
        return x0(t, {
            length: r,
            param: { ...e,
                type: o
            }
        })
    }
    if (e.type === "tuple") return S0(t, {
        param: e
    });
    if (e.type === "address") return A0(t);
    if (e.type === "bool") return k0(t);
    if (e.type.startsWith("uint") || e.type.startsWith("int")) {
        const r = e.type.startsWith("int");
        return B0(t, {
            signed: r
        })
    }
    if (e.type.startsWith("bytes")) return I0(t, {
        param: e
    });
    if (e.type === "string") return j0(t);
    throw new Gm(e.type, {
        docsPath: "/docs/contract/encodeAbiParameters"
    })
}

function ta(e) {
    let t = 0;
    for (let s = 0; s < e.length; s++) {
        const {
            dynamic: i,
            encoded: a
        } = e[s];
        i ? t += 32 : t += ae(a)
    }
    const n = [],
        r = [];
    let o = 0;
    for (let s = 0; s < e.length; s++) {
        const {
            dynamic: i,
            encoded: a
        } = e[s];
        i ? (n.push(W(t + o, {
            size: 32
        })), r.push(a), o += ae(a)) : n.push(a)
    }
    return st([...n, ...r])
}

function A0(e) {
    if (!le(e)) throw new ve({
        address: e
    });
    return {
        dynamic: !1,
        encoded: It(e.toLowerCase())
    }
}

function x0(e, {
    length: t,
    param: n
}) {
    const r = t === null;
    if (!Array.isArray(e)) throw new Jm(e);
    if (!r && e.length !== t) throw new zm({
        expectedLength: t,
        givenLength: e.length,
        type: `${n.type}[${t}]`
    });
    let o = !1;
    const s = [];
    for (let i = 0; i < e.length; i++) {
        const a = ea({
            param: n,
            value: e[i]
        });
        a.dynamic && (o = !0), s.push(a)
    }
    if (r || o) {
        const i = ta(s);
        if (r) {
            const a = W(s.length, {
                size: 32
            });
            return {
                dynamic: !0,
                encoded: s.length > 0 ? st([a, i]) : a
            }
        }
        if (o) return {
            dynamic: !0,
            encoded: i
        }
    }
    return {
        dynamic: !1,
        encoded: st(s.map(({
            encoded: i
        }) => i))
    }
}

function I0(e, {
    param: t
}) {
    const [, n] = t.type.split("bytes"), r = ae(e);
    if (!n) {
        let o = e;
        return r % 32 !== 0 && (o = It(o, {
            dir: "right",
            size: Math.ceil((e.length - 2) / 2 / 32) * 32
        })), {
            dynamic: !0,
            encoded: st([It(W(r, {
                size: 32
            })), o])
        }
    }
    if (r !== Number.parseInt(n)) throw new Wm({
        expectedSize: Number.parseInt(n),
        value: e
    });
    return {
        dynamic: !1,
        encoded: It(e, {
            dir: "right"
        })
    }
}

function k0(e) {
    if (typeof e != "boolean") throw new j(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: !1,
        encoded: It(vu(e))
    }
}

function B0(e, {
    signed: t
}) {
    return {
        dynamic: !1,
        encoded: W(e, {
            size: 32,
            signed: t
        })
    }
}

function j0(e) {
    const t = fn(e),
        n = Math.ceil(ae(t) / 32),
        r = [];
    for (let o = 0; o < n; o++) r.push(It(Vn(t, o * 32, (o + 1) * 32), {
        dir: "right"
    }));
    return {
        dynamic: !0,
        encoded: st([It(W(ae(t), {
            size: 32
        })), ...r])
    }
}

function S0(e, {
    param: t
}) {
    let n = !1;
    const r = [];
    for (let o = 0; o < t.components.length; o++) {
        const s = t.components[o],
            i = Array.isArray(e) ? o : s.name,
            a = ea({
                param: s,
                value: e[i]
            });
        r.push(a), a.dynamic && (n = !0)
    }
    return {
        dynamic: n,
        encoded: n ? ta(r) : st(r.map(({
            encoded: o
        }) => o))
    }
}

function na(e) {
    const t = e.match(/^(.*)\[(\d+)?\]$/);
    return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
}
const vs = "/docs/contract/encodeDeployData";

function Mo(e) {
    const {
        abi: t,
        args: n,
        bytecode: r
    } = e;
    if (!n || n.length === 0) return r;
    const o = t.find(i => "type" in i && i.type === "constructor");
    if (!o) throw new Um({
        docsPath: vs
    });
    if (!("inputs" in o)) throw new kc({
        docsPath: vs
    });
    if (!o.inputs || o.inputs.length === 0) throw new kc({
        docsPath: vs
    });
    const s = Yt(o.inputs, n);
    return bt([r, s])
}

function _e(e) {
    return typeof e == "string" ? {
        address: e,
        type: "json-rpc"
    } : e
}
class Ro extends j {
    constructor({
        docsPath: t
    } = {}) {
        super(["Could not find an Account to execute with this Action.", "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`), {
            docsPath: t,
            docsSlug: "account"
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AccountNotFoundError"
        })
    }
}
class ri extends j {
    constructor({
        blockNumber: t,
        chain: n,
        contract: r
    }) {
        super(`Chain "${n.name}" does not support contract "${r.name}".`, {
            metaMessages: ["This could be due to any of the following:", ...t && r.blockCreated && r.blockCreated > t ? [`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`] : [`- The chain does not have the contract "${r.name}" configured.`]]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainDoesNotSupportContract"
        })
    }
}
class P0 extends j {
    constructor({
        chain: t,
        currentChainId: n
    }) {
        super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`, {
            metaMessages: [`Current Chain ID:  ${n}`, `Expected Chain ID: ${t.id} – ${t.name}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainMismatchError"
        })
    }
}
class T0 extends j {
    constructor() {
        super(["No chain was provided to the request.", "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainNotFoundError"
        })
    }
}
class Ru extends j {
    constructor() {
        super("No chain was provided to the Client."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ClientChainNotConfiguredError"
        })
    }
}
class _o extends j {
    constructor({
        chainId: t
    }) {
        super(typeof t == "number" ? `Chain ID "${t}" is invalid.` : "Chain ID is invalid."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidChainIdError"
        })
    }
}

function _u({
    chain: e,
    currentChainId: t
}) {
    if (!e) throw new T0;
    if (t !== e.id) throw new P0({
        chain: e,
        currentChainId: t
    })
}
const O0 = {
        gwei: 9,
        wei: 18
    },
    M0 = {
        ether: -9,
        wei: 9
    },
    R0 = {
        ether: -18,
        gwei: -9
    };

function Do(e, t) {
    let n = e.toString();
    const r = n.startsWith("-");
    r && (n = n.slice(1)), n = n.padStart(t, "0");
    let [o, s] = [n.slice(0, n.length - t), n.slice(n.length - t)];
    return s = s.replace(/(0+)$/, ""), `${r?"-":""}${o||"0"}${s?`.${s}`:""}`
}

function Te(e, t = "wei") {
    return Do(e, M0[t])
}
class sn extends j {
    constructor({
        cause: t,
        message: n
    } = {}) {
        const r = n ? .replace("execution reverted: ", "") ? .replace("execution reverted", "");
        super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`, {
            cause: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ExecutionRevertedError"
        })
    }
}
Object.defineProperty(sn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 3
});
Object.defineProperty(sn, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /execution reverted/
});
class qt extends j {
    constructor({
        cause: t,
        maxFeePerGas: n
    } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${n?` = ${Te(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FeeCapTooHigh"
        })
    }
}
Object.defineProperty(qt, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class oi extends j {
    constructor({
        cause: t,
        maxFeePerGas: n
    } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${n?` = ${Te(n)}`:""} gwei) cannot be lower than the block base fee.`, {
            cause: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FeeCapTooLow"
        })
    }
}
Object.defineProperty(oi, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class si extends j {
    constructor({
        cause: t,
        nonce: n
    } = {}) {
        super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`, {
            cause: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "NonceTooHighError"
        })
    }
}
Object.defineProperty(si, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too high/
});
class ii extends j {
    constructor({
        cause: t,
        nonce: n
    } = {}) {
        super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`, "Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`), {
            cause: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "NonceTooLowError"
        })
    }
}
Object.defineProperty(ii, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too low|transaction already imported|already known/
});
class ai extends j {
    constructor({
        cause: t,
        nonce: n
    } = {}) {
        super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`, {
            cause: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "NonceMaxValueError"
        })
    }
}
Object.defineProperty(ai, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce has max value/
});
class ci extends j {
    constructor({
        cause: t
    } = {}) {
        super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`), {
            cause: t,
            metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InsufficientFundsError"
        })
    }
}
Object.defineProperty(ci, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /insufficient funds/
});
class li extends j {
    constructor({
        cause: t,
        gas: n
    } = {}) {
        super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`, {
            cause: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IntrinsicGasTooHighError"
        })
    }
}
Object.defineProperty(li, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too high|gas limit reached/
});
class ui extends j {
    constructor({
        cause: t,
        gas: n
    } = {}) {
        super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`, {
            cause: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IntrinsicGasTooLowError"
        })
    }
}
Object.defineProperty(ui, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too low/
});
class di extends j {
    constructor({
        cause: t
    }) {
        super("The transaction type is not supported for this chain.", {
            cause: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionTypeNotSupportedError"
        })
    }
}
Object.defineProperty(di, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /transaction type not valid/
});
class $n extends j {
    constructor({
        cause: t,
        maxPriorityFeePerGas: n,
        maxFeePerGas: r
    } = {}) {
        super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${Te(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${Te(r)} gwei`:""}).`].join(`
`), {
            cause: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TipAboveFeeCapError"
        })
    }
}
Object.defineProperty($n, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class No extends j {
    constructor({
        cause: t
    }) {
        super(`An error occurred while executing: ${t?.shortMessage}`, {
            cause: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownNodeError"
        })
    }
}

function ra(e, t = "wei") {
    return Do(e, O0[t])
}

function Cr(e) {
    const t = Object.entries(e).map(([r, o]) => o === void 0 || o === !1 ? null : [r, o]).filter(Boolean),
        n = t.reduce((r, [o]) => Math.max(r, o.length), 0);
    return t.map(([r, o]) => `  ${`${r}:`.padEnd(n+1)}  ${o}`).join(`
`)
}
class _0 extends j {
    constructor() {
        super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.", "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FeeConflictError"
        })
    }
}
class D0 extends j {
    constructor({
        v: t
    }) {
        super(`Invalid \`v\` value "${t}". Expected 27 or 28.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidLegacyVError"
        })
    }
}
class N0 extends j {
    constructor({
        transaction: t
    }) {
        super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: ["Provided Transaction:", "{", Cr(t), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or", "- a Legacy Transaction with `gasPrice`"]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidSerializableTransactionError"
        })
    }
}
class F0 extends j {
    constructor({
        storageKey: t
    }) {
        super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length-2)/2)} bytes.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidStorageKeySizeError"
        })
    }
}
class L0 extends j {
    constructor(t, {
        account: n,
        docsPath: r,
        chain: o,
        data: s,
        gas: i,
        gasPrice: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: l,
        nonce: u,
        to: f,
        value: d
    }) {
        const h = Cr({
            chain: o && `${o?.name} (id: ${o?.id})`,
            from: n ? .address,
            to: f,
            value: typeof d < "u" && `${ra(d)} ${o?.nativeCurrency?.symbol||"ETH"}`,
            data: s,
            gas: i,
            gasPrice: typeof a < "u" && `${Te(a)} gwei`,
            maxFeePerGas: typeof c < "u" && `${Te(c)} gwei`,
            maxPriorityFeePerGas: typeof l < "u" && `${Te(l)} gwei`,
            nonce: u
        });
        super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Request Arguments:", h].filter(Boolean)
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionExecutionError"
        }), this.cause = t
    }
}
class Du extends j {
    constructor({
        blockHash: t,
        blockNumber: n,
        blockTag: r,
        hash: o,
        index: s
    }) {
        let i = "Transaction";
        r && s !== void 0 && (i = `Transaction at block time "${r}" at index "${s}"`), t && s !== void 0 && (i = `Transaction at block hash "${t}" at index "${s}"`), n && s !== void 0 && (i = `Transaction at block number "${n}" at index "${s}"`), o && (i = `Transaction with hash "${o}"`), super(`${i} could not be found.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionNotFoundError"
        })
    }
}
class Nu extends j {
    constructor({
        hash: t
    }) {
        super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionReceiptNotFoundError"
        })
    }
}
class Mc extends j {
    constructor({
        hash: t
    }) {
        super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "WaitForTransactionReceiptTimeoutError"
        })
    }
}
const fe = (e, t, n) => JSON.stringify(e, (r, o) => {
    const s = typeof o == "bigint" ? o.toString() : o;
    return typeof t == "function" ? t(r, s) : s
}, n);
class Wt extends j {
    constructor({
        body: t,
        cause: n,
        details: r,
        headers: o,
        status: s,
        url: i
    }) {
        super("HTTP request failed.", {
            cause: n,
            details: r,
            metaMessages: [s && `Status: ${s}`, `URL: ${yr(i)}`, t && `Request body: ${fe(t)}`].filter(Boolean)
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "HttpRequestError"
        }), Object.defineProperty(this, "body", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "headers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "status", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.body = t, this.headers = o, this.status = s, this.url = i
    }
}
class Fu extends j {
    constructor({
        body: t,
        error: n,
        url: r
    }) {
        super("RPC Request failed.", {
            cause: n,
            details: n.message,
            metaMessages: [`URL: ${yr(r)}`, `Request body: ${fe(t)}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcRequestError"
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.code = n.code
    }
}
class Rc extends j {
    constructor({
        body: t,
        url: n
    }) {
        super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [`URL: ${yr(n)}`, `Request body: ${fe(t)}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TimeoutError"
        })
    }
}
const U0 = -1;
class Oe extends j {
    constructor(t, {
        code: n,
        docsPath: r,
        metaMessages: o,
        shortMessage: s
    }) {
        super(s, {
            cause: t,
            docsPath: r,
            metaMessages: o || t ? .metaMessages
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcError"
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.name = t.name, this.code = t instanceof Fu ? t.code : n ? ? U0
    }
}
class kn extends Oe {
    constructor(t, n) {
        super(t, n), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ProviderRpcError"
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = n.data
    }
}
class Gn extends Oe {
    constructor(t) {
        super(t, {
            code: Gn.code,
            shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ParseRpcError"
        })
    }
}
Object.defineProperty(Gn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32700
});
class Kn extends Oe {
    constructor(t) {
        super(t, {
            code: Kn.code,
            shortMessage: "JSON is not a valid request object."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidRequestRpcError"
        })
    }
}
Object.defineProperty(Kn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32600
});
class Jn extends Oe {
    constructor(t) {
        super(t, {
            code: Jn.code,
            shortMessage: "The method does not exist / is not available."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MethodNotFoundRpcError"
        })
    }
}
Object.defineProperty(Jn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32601
});
class Zn extends Oe {
    constructor(t) {
        super(t, {
            code: Zn.code,
            shortMessage: ["Invalid parameters were provided to the RPC method.", "Double check you have provided the correct parameters."].join(`
`)
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParamsRpcError"
        })
    }
}
Object.defineProperty(Zn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32602
});
class Ht extends Oe {
    constructor(t) {
        super(t, {
            code: Ht.code,
            shortMessage: "An internal error was received."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InternalRpcError"
        })
    }
}
Object.defineProperty(Ht, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32603
});
class Qt extends Oe {
    constructor(t) {
        super(t, {
            code: Qt.code,
            shortMessage: ["Missing or invalid parameters.", "Double check you have provided the correct parameters."].join(`
`)
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidInputRpcError"
        })
    }
}
Object.defineProperty(Qt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32e3
});
class Yn extends Oe {
    constructor(t) {
        super(t, {
            code: Yn.code,
            shortMessage: "Requested resource not found."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceNotFoundRpcError"
        })
    }
}
Object.defineProperty(Yn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32001
});
class kt extends Oe {
    constructor(t) {
        super(t, {
            code: kt.code,
            shortMessage: "Requested resource not available."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceUnavailableRpcError"
        })
    }
}
Object.defineProperty(kt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32002
});
class Xn extends Oe {
    constructor(t) {
        super(t, {
            code: Xn.code,
            shortMessage: "Transaction creation failed."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionRejectedRpcError"
        })
    }
}
Object.defineProperty(Xn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32003
});
class er extends Oe {
    constructor(t) {
        super(t, {
            code: er.code,
            shortMessage: "Method is not implemented."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MethodNotSupportedRpcError"
        })
    }
}
Object.defineProperty(er, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32004
});
class pn extends Oe {
    constructor(t) {
        super(t, {
            code: pn.code,
            shortMessage: "Request exceeds defined limit."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "LimitExceededRpcError"
        })
    }
}
Object.defineProperty(pn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32005
});
class tr extends Oe {
    constructor(t) {
        super(t, {
            code: tr.code,
            shortMessage: "Version of JSON-RPC protocol is not supported."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "JsonRpcVersionUnsupportedError"
        })
    }
}
Object.defineProperty(tr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32006
});
class oe extends kn {
    constructor(t) {
        super(t, {
            code: oe.code,
            shortMessage: "User rejected the request."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UserRejectedRequestError"
        })
    }
}
Object.defineProperty(oe, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4001
});
class nr extends kn {
    constructor(t) {
        super(t, {
            code: nr.code,
            shortMessage: "The requested method and/or account has not been authorized by the user."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnauthorizedProviderError"
        })
    }
}
Object.defineProperty(nr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4100
});
class rr extends kn {
    constructor(t) {
        super(t, {
            code: rr.code,
            shortMessage: "The Provider does not support the requested method."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnsupportedProviderMethodError"
        })
    }
}
Object.defineProperty(rr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4200
});
class or extends kn {
    constructor(t) {
        super(t, {
            code: or.code,
            shortMessage: "The Provider is disconnected from all chains."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ProviderDisconnectedError"
        })
    }
}
Object.defineProperty(or, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4900
});
class sr extends kn {
    constructor(t) {
        super(t, {
            code: sr.code,
            shortMessage: "The Provider is not connected to the requested chain."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainDisconnectedError"
        })
    }
}
Object.defineProperty(sr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4901
});
class qe extends kn {
    constructor(t) {
        super(t, {
            code: qe.code,
            shortMessage: "An error occurred when attempting to switch chain."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SwitchChainError"
        })
    }
}
Object.defineProperty(qe, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4902
});
class z0 extends Oe {
    constructor(t) {
        super(t, {
            shortMessage: "An unknown RPC error occurred."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownRpcError"
        })
    }
}

function oa(e, t) {
    const n = (e.details || "").toLowerCase(),
        r = e instanceof j ? e.walk(o => o.code === sn.code) : e;
    return r instanceof j ? new sn({
        cause: e,
        message: r.details
    }) : sn.nodeMessage.test(n) ? new sn({
        cause: e,
        message: e.details
    }) : qt.nodeMessage.test(n) ? new qt({
        cause: e,
        maxFeePerGas: t ? .maxFeePerGas
    }) : oi.nodeMessage.test(n) ? new oi({
        cause: e,
        maxFeePerGas: t ? .maxFeePerGas
    }) : si.nodeMessage.test(n) ? new si({
        cause: e,
        nonce: t ? .nonce
    }) : ii.nodeMessage.test(n) ? new ii({
        cause: e,
        nonce: t ? .nonce
    }) : ai.nodeMessage.test(n) ? new ai({
        cause: e,
        nonce: t ? .nonce
    }) : ci.nodeMessage.test(n) ? new ci({
        cause: e
    }) : li.nodeMessage.test(n) ? new li({
        cause: e,
        gas: t ? .gas
    }) : ui.nodeMessage.test(n) ? new ui({
        cause: e,
        gas: t ? .gas
    }) : di.nodeMessage.test(n) ? new di({
        cause: e
    }) : $n.nodeMessage.test(n) ? new $n({
        cause: e,
        maxFeePerGas: t ? .maxFeePerGas,
        maxPriorityFeePerGas: t ? .maxPriorityFeePerGas
    }) : new No({
        cause: e
    })
}

function W0(e, {
    docsPath: t,
    ...n
}) {
    const r = (() => {
        const o = oa(e, n);
        return o instanceof No ? e : o
    })();
    return new L0(r, {
        docsPath: t,
        ...n
    })
}

function sa(e, {
    format: t
}) {
    if (!t) return {};
    const n = {};

    function r(s) {
        const i = Object.keys(s);
        for (const a of i) a in e && (n[a] = e[a]), s[a] && typeof s[a] == "object" && !Array.isArray(s[a]) && r(s[a])
    }
    const o = t(e || {});
    return r(o), n
}

function Fo(e, t) {
    return ({
        exclude: n,
        format: r
    }) => ({
        exclude: n,
        format: o => {
            const s = t(o);
            if (n)
                for (const i of n) delete s[i];
            return { ...s,
                ...r(o)
            }
        },
        type: e
    })
}
const q0 = {
    legacy: "0x0",
    eip2930: "0x1",
    eip1559: "0x2",
    eip4844: "0x3"
};

function Er(e) {
    const t = {};
    return typeof e.accessList < "u" && (t.accessList = e.accessList), typeof e.blobVersionedHashes < "u" && (t.blobVersionedHashes = e.blobVersionedHashes), typeof e.blobs < "u" && (typeof e.blobs[0] != "string" ? t.blobs = e.blobs.map(n => ue(n)) : t.blobs = e.blobs), typeof e.data < "u" && (t.data = e.data), typeof e.from < "u" && (t.from = e.from), typeof e.gas < "u" && (t.gas = W(e.gas)), typeof e.gasPrice < "u" && (t.gasPrice = W(e.gasPrice)), typeof e.maxFeePerBlobGas < "u" && (t.maxFeePerBlobGas = W(e.maxFeePerBlobGas)), typeof e.maxFeePerGas < "u" && (t.maxFeePerGas = W(e.maxFeePerGas)), typeof e.maxPriorityFeePerGas < "u" && (t.maxPriorityFeePerGas = W(e.maxPriorityFeePerGas)), typeof e.nonce < "u" && (t.nonce = W(e.nonce)), typeof e.to < "u" && (t.to = e.to), typeof e.type < "u" && (t.type = q0[e.type]), typeof e.value < "u" && (t.value = W(e.value)), t
}
const H0 = Fo("transactionRequest", Er);

function F(e, t, n) {
    const r = e[t.name];
    if (typeof r == "function") return r;
    const o = e[n];
    return typeof o == "function" ? o : s => t(e, s)
}

function Ar(e) {
    const {
        account: t,
        gasPrice: n,
        maxFeePerGas: r,
        maxPriorityFeePerGas: o,
        to: s
    } = e, i = t ? _e(t) : void 0;
    if (i && !le(i.address)) throw new ve({
        address: i.address
    });
    if (s && !le(s)) throw new ve({
        address: s
    });
    if (typeof n < "u" && (typeof r < "u" || typeof o < "u")) throw new _0;
    if (r && r > 2 n ** 256 n - 1 n) throw new qt({
        maxFeePerGas: r
    });
    if (o && r && o > r) throw new $n({
        maxFeePerGas: r,
        maxPriorityFeePerGas: o
    })
}
async function xr(e) {
    const t = await e.request({
        method: "eth_chainId"
    }, {
        dedupe: !0
    });
    return Ke(t)
}
class Q0 extends j {
    constructor() {
        super("`baseFeeMultiplier` must be greater than 1."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseFeeScalarError"
        })
    }
}
class ia extends j {
    constructor() {
        super("Chain does not support EIP-1559 fees."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Eip1559FeesNotSupportedError"
        })
    }
}
class V0 extends j {
    constructor({
        maxPriorityFeePerGas: t
    }) {
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Te(t)} gwei).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MaxFeePerGasTooLowError"
        })
    }
}
class Lu extends j {
    constructor({
        blockHash: t,
        blockNumber: n
    }) {
        let r = "Block";
        t && (r = `Block at hash "${t}"`), n && (r = `Block at number "${n}"`), super(`${r} could not be found.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BlockNotFoundError"
        })
    }
}
const Uu = {
    "0x0": "legacy",
    "0x1": "eip2930",
    "0x2": "eip1559",
    "0x3": "eip4844"
};

function Lo(e) {
    const t = { ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        chainId: e.chainId ? Ke(e.chainId) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
        maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
        nonce: e.nonce ? Ke(e.nonce) : void 0,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
        type: e.type ? Uu[e.type] : void 0,
        typeHex: e.type ? e.type : void 0,
        value: e.value ? BigInt(e.value) : void 0,
        v: e.v ? BigInt(e.v) : void 0
    };
    return t.yParity = (() => {
        if (e.yParity) return Number(e.yParity);
        if (typeof t.v == "bigint") {
            if (t.v === 0 n || t.v === 27 n) return 0;
            if (t.v === 1 n || t.v === 28 n) return 1;
            if (t.v >= 35 n) return t.v % 2 n === 0 n ? 1 : 0
        }
    })(), t.type === "legacy" && (delete t.accessList, delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), t.type === "eip2930" && (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), t.type === "eip1559" && delete t.maxFeePerBlobGas, t
}
const zu = Fo("transaction", Lo);

function aa(e) {
    const t = e.transactions ? .map(n => typeof n == "string" ? n : Lo(n));
    return { ...e,
        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
        hash: e.hash ? e.hash : null,
        logsBloom: e.logsBloom ? e.logsBloom : null,
        nonce: e.nonce ? e.nonce : null,
        number: e.number ? BigInt(e.number) : null,
        size: e.size ? BigInt(e.size) : void 0,
        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
        transactions: t,
        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
    }
}
const Wu = Fo("block", aa);
async function Bt(e, {
    blockHash: t,
    blockNumber: n,
    blockTag: r,
    includeTransactions: o
} = {}) {
    const s = r ? ? "latest",
        i = o ? ? !1,
        a = n !== void 0 ? W(n) : void 0;
    let c = null;
    if (t ? c = await e.request({
            method: "eth_getBlockByHash",
            params: [t, i]
        }, {
            dedupe: !0
        }) : c = await e.request({
            method: "eth_getBlockByNumber",
            params: [a || s, i]
        }, {
            dedupe: !!a
        }), !c) throw new Lu({
        blockHash: t,
        blockNumber: n
    });
    return (e.chain ? .formatters ? .block ? .format || aa)(c)
}
async function ca(e) {
    const t = await e.request({
        method: "eth_gasPrice"
    });
    return BigInt(t)
}
async function $0(e, t) {
    return qu(e, t)
}
async function qu(e, t) {
    const {
        block: n,
        chain: r = e.chain,
        request: o
    } = t || {};
    if (typeof r ? .fees ? .defaultPriorityFee == "function") {
        const s = n || await F(e, Bt, "getBlock")({});
        return r.fees.defaultPriorityFee({
            block: s,
            client: e,
            request: o
        })
    }
    if (typeof r ? .fees ? .defaultPriorityFee < "u") return r ? .fees ? .defaultPriorityFee;
    try {
        const s = await e.request({
            method: "eth_maxPriorityFeePerGas"
        });
        return re(s)
    } catch {
        const [s, i] = await Promise.all([n ? Promise.resolve(n) : F(e, Bt, "getBlock")({}), F(e, ca, "getGasPrice")({})]);
        if (typeof s.baseFeePerGas != "bigint") throw new ia;
        const a = i - s.baseFeePerGas;
        return a < 0 n ? 0 n : a
    }
}
async function G0(e, t) {
    return fi(e, t)
}
async function fi(e, t) {
    const {
        block: n,
        chain: r = e.chain,
        request: o,
        type: s = "eip1559"
    } = t || {}, i = await (async () => typeof r ? .fees ? .baseFeeMultiplier == "function" ? r.fees.baseFeeMultiplier({
        block: n,
        client: e,
        request: o
    }) : r ? .fees ? .baseFeeMultiplier ? ? 1.2)();
    if (i < 1) throw new Q0;
    const c = 10 ** (i.toString().split(".")[1] ? .length ? ? 0),
        l = d => d * BigInt(Math.ceil(i * c)) / BigInt(c),
        u = n || await F(e, Bt, "getBlock")({});
    if (typeof r ? .fees ? .estimateFeesPerGas == "function") {
        const d = await r.fees.estimateFeesPerGas({
            block: n,
            client: e,
            multiply: l,
            request: o,
            type: s
        });
        if (d !== null) return d
    }
    if (s === "eip1559") {
        if (typeof u.baseFeePerGas != "bigint") throw new ia;
        const d = typeof o ? .maxPriorityFeePerGas == "bigint" ? o.maxPriorityFeePerGas : await qu(e, {
                block: u,
                chain: r,
                request: o
            }),
            h = l(u.baseFeePerGas);
        return {
            maxFeePerGas: o ? .maxFeePerGas ? ? h + d,
            maxPriorityFeePerGas: d
        }
    }
    return {
        gasPrice: o ? .gasPrice ? ? l(await F(e, ca, "getGasPrice")({}))
    }
}
class K0 extends j {
    constructor(t, {
        account: n,
        docsPath: r,
        chain: o,
        data: s,
        gas: i,
        gasPrice: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: l,
        nonce: u,
        to: f,
        value: d
    }) {
        const h = Cr({
            from: n ? .address,
            to: f,
            value: typeof d < "u" && `${ra(d)} ${o?.nativeCurrency?.symbol||"ETH"}`,
            data: s,
            gas: i,
            gasPrice: typeof a < "u" && `${Te(a)} gwei`,
            maxFeePerGas: typeof c < "u" && `${Te(c)} gwei`,
            maxPriorityFeePerGas: typeof l < "u" && `${Te(l)} gwei`,
            nonce: u
        });
        super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Estimate Gas Arguments:", h].filter(Boolean)
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EstimateGasExecutionError"
        }), this.cause = t
    }
}

function J0(e, {
    docsPath: t,
    ...n
}) {
    const r = (() => {
        const o = oa(e, n);
        return o instanceof No ? e : o
    })();
    return new K0(r, {
        docsPath: t,
        ...n
    })
}
class Z0 extends j {
    constructor({
        address: t
    }) {
        super(`State for account "${t}" is set multiple times.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AccountStateConflictError"
        })
    }
}
class Y0 extends j {
    constructor() {
        super("state and stateDiff are set on the same account."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "StateAssignmentConflictError"
        })
    }
}

function _c(e) {
    return e.reduce((t, {
        slot: n,
        value: r
    }) => `${t}        ${n}: ${r}
`, "")
}

function X0(e) {
    return e.reduce((t, {
        address: n,
        ...r
    }) => {
        let o = `${t}    ${n}:
`;
        return r.nonce && (o += `      nonce: ${r.nonce}
`), r.balance && (o += `      balance: ${r.balance}
`), r.code && (o += `      code: ${r.code}
`), r.state && (o += `      state:
`, o += _c(r.state)), r.stateDiff && (o += `      stateDiff:
`, o += _c(r.stateDiff)), o
    }, `  State Override:
`).slice(0, -1)
}

function Dc(e) {
    if (!(!e || e.length === 0)) return e.reduce((t, {
        slot: n,
        value: r
    }) => {
        if (n.length !== 66) throw new xc({
            size: n.length,
            targetSize: 66,
            type: "hex"
        });
        if (r.length !== 66) throw new xc({
            size: r.length,
            targetSize: 66,
            type: "hex"
        });
        return t[n] = r, t
    }, {})
}

function eg(e) {
    const {
        balance: t,
        nonce: n,
        state: r,
        stateDiff: o,
        code: s
    } = e, i = {};
    if (s !== void 0 && (i.code = s), t !== void 0 && (i.balance = W(t)), n !== void 0 && (i.nonce = W(n)), r !== void 0 && (i.state = Dc(r)), o !== void 0) {
        if (i.state) throw new Y0;
        i.stateDiff = Dc(o)
    }
    return i
}

function Hu(e) {
    if (!e) return;
    const t = {};
    for (const {
            address: n,
            ...r
        } of e) {
        if (!le(n, {
                strict: !1
            })) throw new ve({
            address: n
        });
        if (t[n]) throw new Z0({
            address: n
        });
        t[n] = eg(r)
    }
    return t
}
async function la(e, t) {
    const n = t.account ? ? e.account,
        r = n ? _e(n) : void 0;
    try {
        const {
            accessList: o,
            blobs: s,
            blobVersionedHashes: i,
            blockNumber: a,
            blockTag: c,
            data: l,
            gas: u,
            gasPrice: f,
            maxFeePerBlobGas: d,
            maxFeePerGas: h,
            maxPriorityFeePerGas: p,
            nonce: m,
            to: b,
            value: w,
            stateOverride: v,
            ...C
        } = await Uo(e, { ...t,
            parameters: r ? .type === "local" ? void 0 : ["blobVersionedHashes"]
        }), A = (a ? W(a) : void 0) || c, E = Hu(v);
        Ar(t);
        const k = e.chain ? .formatters ? .transactionRequest ? .format,
            S = (k || Er)({ ...sa(C, {
                    format: k
                }),
                from: r ? .address,
                accessList: o,
                blobs: s,
                blobVersionedHashes: i,
                data: l,
                gas: u,
                gasPrice: f,
                maxFeePerBlobGas: d,
                maxFeePerGas: h,
                maxPriorityFeePerGas: p,
                nonce: m,
                to: b,
                value: w
            }),
            P = await e.request({
                method: "eth_estimateGas",
                params: E ? [S, A ? ? "latest", E] : A ? [S, A] : [S]
            });
        return BigInt(P)
    } catch (o) {
        throw J0(o, { ...t,
            account: r,
            chain: e.chain
        })
    }
}
async function Qu(e, {
    address: t,
    blockTag: n = "latest",
    blockNumber: r
}) {
    const o = await e.request({
        method: "eth_getTransactionCount",
        params: [t, r ? W(r) : n]
    }, {
        dedupe: !!r
    });
    return Ke(o)
}

function ua(e) {
    const {
        kzg: t
    } = e, n = e.to ? ? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map(s => We(s)) : e.blobs, o = [];
    for (const s of r) o.push(Uint8Array.from(t.blobToKzgCommitment(s)));
    return n === "bytes" ? o : o.map(s => ue(s))
}

function da(e) {
    const {
        kzg: t
    } = e, n = e.to ? ? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map(i => We(i)) : e.blobs, o = typeof e.commitments[0] == "string" ? e.commitments.map(i => We(i)) : e.commitments, s = [];
    for (let i = 0; i < r.length; i++) {
        const a = r[i],
            c = o[i];
        s.push(Uint8Array.from(t.computeBlobKzgProof(a, c)))
    }
    return n === "bytes" ? s : s.map(i => ue(i))
}

function tg(e, t, n, r) {
    if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, n, r);
    const o = BigInt(32),
        s = BigInt(4294967295),
        i = Number(n >> o & s),
        a = Number(n & s),
        c = r ? 4 : 0,
        l = r ? 0 : 4;
    e.setUint32(t + c, i, r), e.setUint32(t + l, a, r)
}
const ng = (e, t, n) => e & t ^ ~e & n,
    rg = (e, t, n) => e & t ^ e & n ^ t & n;
class og extends Yi {
    constructor(t, n, r, o) {
        super(), this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = o, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = bs(this.buffer)
    }
    update(t) {
        hn(this);
        const {
            view: n,
            buffer: r,
            blockLen: o
        } = this;
        t = Oo(t);
        const s = t.length;
        for (let i = 0; i < s;) {
            const a = Math.min(o - this.pos, s - i);
            if (a === o) {
                const c = bs(t);
                for (; o <= s - i; i += o) this.process(c, i);
                continue
            }
            r.set(t.subarray(i, i + a), this.pos), this.pos += a, i += a, this.pos === o && (this.process(n, 0), this.pos = 0)
        }
        return this.length += t.length, this.roundClean(), this
    }
    digestInto(t) {
        hn(this), xu(t, this), this.finished = !0;
        const {
            buffer: n,
            view: r,
            blockLen: o,
            isLE: s
        } = this;
        let {
            pos: i
        } = this;
        n[i++] = 128, this.buffer.subarray(i).fill(0), this.padOffset > o - i && (this.process(r, 0), i = 0);
        for (let f = i; f < o; f++) n[f] = 0;
        tg(r, o - 8, BigInt(this.length * 8), s), this.process(r, 0);
        const a = bs(t),
            c = this.outputLen;
        if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const l = c / 4,
            u = this.get();
        if (l > u.length) throw new Error("_sha2: outputLen bigger than state");
        for (let f = 0; f < l; f++) a.setUint32(4 * f, u[f], s)
    }
    digest() {
        const {
            buffer: t,
            outputLen: n
        } = this;
        this.digestInto(t);
        const r = t.slice(0, n);
        return this.destroy(), r
    }
    _cloneInto(t) {
        t || (t = new this.constructor), t.set(...this.get());
        const {
            blockLen: n,
            buffer: r,
            length: o,
            finished: s,
            destroyed: i,
            pos: a
        } = this;
        return t.length = o, t.pos = a, t.finished = s, t.destroyed = i, o % n && t.buffer.set(r), t
    }
}
const sg = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    wt = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    vt = new Uint32Array(64);
class ig extends og {
    constructor() {
        super(64, 32, 8, !1), this.A = wt[0] | 0, this.B = wt[1] | 0, this.C = wt[2] | 0, this.D = wt[3] | 0, this.E = wt[4] | 0, this.F = wt[5] | 0, this.G = wt[6] | 0, this.H = wt[7] | 0
    }
    get() {
        const {
            A: t,
            B: n,
            C: r,
            D: o,
            E: s,
            F: i,
            G: a,
            H: c
        } = this;
        return [t, n, r, o, s, i, a, c]
    }
    set(t, n, r, o, s, i, a, c) {
        this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = o | 0, this.E = s | 0, this.F = i | 0, this.G = a | 0, this.H = c | 0
    }
    process(t, n) {
        for (let f = 0; f < 16; f++, n += 4) vt[f] = t.getUint32(n, !1);
        for (let f = 16; f < 64; f++) {
            const d = vt[f - 15],
                h = vt[f - 2],
                p = nt(d, 7) ^ nt(d, 18) ^ d >>> 3,
                m = nt(h, 17) ^ nt(h, 19) ^ h >>> 10;
            vt[f] = m + vt[f - 7] + p + vt[f - 16] | 0
        }
        let {
            A: r,
            B: o,
            C: s,
            D: i,
            E: a,
            F: c,
            G: l,
            H: u
        } = this;
        for (let f = 0; f < 64; f++) {
            const d = nt(a, 6) ^ nt(a, 11) ^ nt(a, 25),
                h = u + d + ng(a, c, l) + sg[f] + vt[f] | 0,
                m = (nt(r, 2) ^ nt(r, 13) ^ nt(r, 22)) + rg(r, o, s) | 0;
            u = l, l = c, c = a, a = i + h | 0, i = s, s = o, o = r, r = h + m | 0
        }
        r = r + this.A | 0, o = o + this.B | 0, s = s + this.C | 0, i = i + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, u = u + this.H | 0, this.set(r, o, s, i, a, c, l, u)
    }
    roundClean() {
        vt.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
    }
}
const ir = Iu(() => new ig);

function Vu(e, t) {
    const n = t || "hex",
        r = ir(Re(e, {
            strict: !1
        }) ? rt(e) : e);
    return n === "bytes" ? r : L(r)
}

function ag(e) {
    const {
        commitment: t,
        version: n = 1
    } = e, r = e.to ? ? (typeof t == "string" ? "hex" : "bytes"), o = Vu(t, "bytes");
    return o.set([n], 0), r === "bytes" ? o : ue(o)
}

function $u(e) {
    const {
        commitments: t,
        version: n
    } = e, r = e.to ? ? (typeof t[0] == "string" ? "hex" : "bytes"), o = [];
    for (const s of t) o.push(ag({
        commitment: s,
        to: r,
        version: n
    }));
    return o
}
const Nc = 6,
    Gu = 32,
    fa = 4096,
    Ku = Gu * fa,
    Fc = Ku * Nc - 1 - 1 * fa * Nc,
    Ju = 1;
class cg extends j {
    constructor({
        maxSize: t,
        size: n
    }) {
        super("Blob size is too large.", {
            metaMessages: [`Max: ${t} bytes`, `Given: ${n} bytes`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BlobSizeTooLargeError"
        })
    }
}
class Zu extends j {
    constructor() {
        super("Blob data must not be empty."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EmptyBlobError"
        })
    }
}
class lg extends j {
    constructor({
        hash: t,
        size: n
    }) {
        super(`Versioned hash "${t}" size is invalid.`, {
            metaMessages: ["Expected: 32", `Received: ${n}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidVersionedHashSizeError"
        })
    }
}
class ug extends j {
    constructor({
        hash: t,
        version: n
    }) {
        super(`Versioned hash "${t}" version is invalid.`, {
            metaMessages: [`Expected: ${Ju}`, `Received: ${n}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidVersionedHashVersionError"
        })
    }
}
class Lc extends j {
    constructor({
        offset: t
    }) {
        super(`Offset \`${t}\` cannot be negative.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "NegativeOffsetError"
        })
    }
}
class Yu extends j {
    constructor({
        length: t,
        position: n
    }) {
        super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PositionOutOfBoundsError"
        })
    }
}
class dg extends j {
    constructor({
        count: t,
        limit: n
    }) {
        super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RecursiveReadLimitExceededError"
        })
    }
}
const fg = {
    bytes: new Uint8Array,
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map,
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new dg({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        })
    },
    assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1) throw new Yu({
            length: this.bytes.length,
            position: e
        })
    },
    decrementPosition(e) {
        if (e < 0) throw new Lc({
            offset: e
        });
        const t = this.position - e;
        this.assertPosition(t), this.position = t
    },
    getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0
    },
    incrementPosition(e) {
        if (e < 0) throw new Lc({
            offset: e
        });
        const t = this.position + e;
        this.assertPosition(t), this.position = t
    },
    inspectByte(e) {
        const t = e ? ? this.position;
        return this.assertPosition(t), this.bytes[t]
    },
    inspectBytes(e, t) {
        const n = t ? ? this.position;
        return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e)
    },
    inspectUint8(e) {
        const t = e ? ? this.position;
        return this.assertPosition(t), this.bytes[t]
    },
    inspectUint16(e) {
        const t = e ? ? this.position;
        return this.assertPosition(t + 1), this.dataView.getUint16(t)
    },
    inspectUint24(e) {
        const t = e ? ? this.position;
        return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    },
    inspectUint32(e) {
        const t = e ? ? this.position;
        return this.assertPosition(t + 3), this.dataView.getUint32(t)
    },
    pushByte(e) {
        this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
    },
    pushBytes(e) {
        this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length
    },
    pushUint8(e) {
        this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
    },
    pushUint16(e) {
        this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2
    },
    pushUint24(e) {
        this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3
    },
    pushUint32(e) {
        this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4
    },
    readByte() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectByte();
        return this.position++, e
    },
    readBytes(e, t) {
        this.assertReadLimit(), this._touch();
        const n = this.inspectBytes(e);
        return this.position += t ? ? e, n
    },
    readUint8() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint8();
        return this.position += 1, e
    },
    readUint16() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint16();
        return this.position += 2, e
    },
    readUint24() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint24();
        return this.position += 3, e
    },
    readUint32() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint32();
        return this.position += 4, e
    },
    get remaining() {
        return this.bytes.length - this.position
    },
    setPosition(e) {
        const t = this.position;
        return this.assertPosition(e), this.position = e, () => this.position = t
    },
    _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const e = this.getReadCount();
        this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++
    }
};

function ha(e, {
    recursiveReadLimit: t = 8192
} = {}) {
    const n = Object.create(fg);
    return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = new Map, n.recursiveReadLimit = t, n
}

function hg(e) {
    const t = e.to ? ? (typeof e.data == "string" ? "hex" : "bytes"),
        n = typeof e.data == "string" ? We(e.data) : e.data,
        r = ae(n);
    if (!r) throw new Zu;
    if (r > Fc) throw new cg({
        maxSize: Fc,
        size: r
    });
    const o = [];
    let s = !0,
        i = 0;
    for (; s;) {
        const a = ha(new Uint8Array(Ku));
        let c = 0;
        for (; c < fa;) {
            const l = n.slice(i, i + (Gu - 1));
            if (a.pushByte(0), a.pushBytes(l), l.length < 31) {
                a.pushByte(128), s = !1;
                break
            }
            c++, i += 31
        }
        o.push(a)
    }
    return t === "bytes" ? o.map(a => a.bytes) : o.map(a => ue(a.bytes))
}

function Xu(e) {
    const {
        data: t,
        kzg: n,
        to: r
    } = e, o = e.blobs ? ? hg({
        data: t,
        to: r
    }), s = e.commitments ? ? ua({
        blobs: o,
        kzg: n,
        to: r
    }), i = e.proofs ? ? da({
        blobs: o,
        commitments: s,
        kzg: n,
        to: r
    }), a = [];
    for (let c = 0; c < o.length; c++) a.push({
        blob: o[c],
        commitment: s[c],
        proof: i[c]
    });
    return a
}

function ed(e) {
    if (e.type) return e.type;
    if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u") return "eip4844";
    if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u") return "eip1559";
    if (typeof e.gasPrice < "u") return typeof e.accessList < "u" ? "eip2930" : "legacy";
    throw new N0({
        transaction: e
    })
}
const td = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"];
async function Uo(e, t) {
    const {
        account: n = e.account,
        blobs: r,
        chain: o,
        gas: s,
        kzg: i,
        nonce: a,
        parameters: c = td,
        type: l
    } = t, u = n ? _e(n) : void 0, f = { ...t,
        ...u ? {
            from: u ? .address
        } : {}
    };
    let d;
    async function h() {
        return d || (d = await F(e, Bt, "getBlock")({
            blockTag: "latest"
        }), d)
    }
    let p;
    async function m() {
        return p || (o ? o.id : typeof t.chainId < "u" ? t.chainId : (p = await F(e, xr, "getChainId")({}), p))
    }
    if ((c.includes("blobVersionedHashes") || c.includes("sidecars")) && r && i) {
        const b = ua({
            blobs: r,
            kzg: i
        });
        if (c.includes("blobVersionedHashes")) {
            const w = $u({
                commitments: b,
                to: "hex"
            });
            f.blobVersionedHashes = w
        }
        if (c.includes("sidecars")) {
            const w = da({
                    blobs: r,
                    commitments: b,
                    kzg: i
                }),
                v = Xu({
                    blobs: r,
                    commitments: b,
                    proofs: w,
                    to: "hex"
                });
            f.sidecars = v
        }
    }
    if (c.includes("chainId") && (f.chainId = await m()), c.includes("nonce") && typeof a > "u" && u)
        if (u.nonceManager) {
            const b = await m();
            f.nonce = await u.nonceManager.consume({
                address: u.address,
                chainId: b,
                client: e
            })
        } else f.nonce = await F(e, Qu, "getTransactionCount")({
            address: u.address,
            blockTag: "pending"
        });
    if ((c.includes("fees") || c.includes("type")) && typeof l > "u") try {
        f.type = ed(f)
    } catch {
        const b = await h();
        f.type = typeof b ? .baseFeePerGas == "bigint" ? "eip1559" : "legacy"
    }
    if (c.includes("fees"))
        if (f.type !== "legacy" && f.type !== "eip2930") {
            if (typeof f.maxFeePerGas > "u" || typeof f.maxPriorityFeePerGas > "u") {
                const b = await h(),
                    {
                        maxFeePerGas: w,
                        maxPriorityFeePerGas: v
                    } = await fi(e, {
                        block: b,
                        chain: o,
                        request: f
                    });
                if (typeof t.maxPriorityFeePerGas > "u" && t.maxFeePerGas && t.maxFeePerGas < v) throw new V0({
                    maxPriorityFeePerGas: v
                });
                f.maxPriorityFeePerGas = v, f.maxFeePerGas = w
            }
        } else {
            if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u") throw new ia;
            const b = await h(),
                {
                    gasPrice: w
                } = await fi(e, {
                    block: b,
                    chain: o,
                    request: f,
                    type: "legacy"
                });
            f.gasPrice = w
        }
    return c.includes("gas") && typeof s > "u" && (f.gas = await F(e, la, "estimateGas")({ ...f,
        account: u ? {
            address: u.address,
            type: "json-rpc"
        } : void 0
    })), Ar(f), delete f.parameters, f
}
async function pa(e, {
    serializedTransaction: t
}) {
    return e.request({
        method: "eth_sendRawTransaction",
        params: [t]
    }, {
        retryCount: 0
    })
}
async function ma(e, t) {
    const {
        account: n = e.account,
        chain: r = e.chain,
        accessList: o,
        blobs: s,
        data: i,
        gas: a,
        gasPrice: c,
        maxFeePerBlobGas: l,
        maxFeePerGas: u,
        maxPriorityFeePerGas: f,
        nonce: d,
        to: h,
        value: p,
        ...m
    } = t;
    if (!n) throw new Ro({
        docsPath: "/docs/actions/wallet/sendTransaction"
    });
    const b = _e(n);
    try {
        Ar(t);
        let w;
        if (r !== null && (w = await F(e, xr, "getChainId")({}), _u({
                currentChainId: w,
                chain: r
            })), b.type === "local") {
            const A = await F(e, Uo, "prepareTransactionRequest")({
                    account: b,
                    accessList: o,
                    blobs: s,
                    chain: r,
                    chainId: w,
                    data: i,
                    gas: a,
                    gasPrice: c,
                    maxFeePerBlobGas: l,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: f,
                    nonce: d,
                    parameters: [...td, "sidecars"],
                    to: h,
                    value: p,
                    ...m
                }),
                E = r ? .serializers ? .transaction,
                k = await b.signTransaction(A, {
                    serializer: E
                });
            return await F(e, pa, "sendRawTransaction")({
                serializedTransaction: k
            })
        }
        const v = e.chain ? .formatters ? .transactionRequest ? .format,
            y = (v || Er)({ ...sa(m, {
                    format: v
                }),
                accessList: o,
                blobs: s,
                chainId: w,
                data: i,
                from: b.address,
                gas: a,
                gasPrice: c,
                maxFeePerBlobGas: l,
                maxFeePerGas: u,
                maxPriorityFeePerGas: f,
                nonce: d,
                to: h,
                value: p
            });
        return await e.request({
            method: "eth_sendTransaction",
            params: [y]
        }, {
            retryCount: 0
        })
    } catch (w) {
        throw W0(w, { ...t,
            account: b,
            chain: t.chain || void 0
        })
    }
}

function pg(e, t) {
    const {
        abi: n,
        args: r,
        bytecode: o,
        ...s
    } = t, i = Mo({
        abi: n,
        args: r,
        bytecode: o
    });
    return ma(e, { ...s,
        data: i
    })
}
const hi = [{
        inputs: [{
            components: [{
                name: "target",
                type: "address"
            }, {
                name: "allowFailure",
                type: "bool"
            }, {
                name: "callData",
                type: "bytes"
            }],
            name: "calls",
            type: "tuple[]"
        }],
        name: "aggregate3",
        outputs: [{
            components: [{
                name: "success",
                type: "bool"
            }, {
                name: "returnData",
                type: "bytes"
            }],
            name: "returnData",
            type: "tuple[]"
        }],
        stateMutability: "view",
        type: "function"
    }],
    nd = [{
        inputs: [],
        name: "ResolverNotFound",
        type: "error"
    }, {
        inputs: [],
        name: "ResolverWildcardNotSupported",
        type: "error"
    }, {
        inputs: [],
        name: "ResolverNotContract",
        type: "error"
    }, {
        inputs: [{
            name: "returnData",
            type: "bytes"
        }],
        name: "ResolverError",
        type: "error"
    }, {
        inputs: [{
            components: [{
                name: "status",
                type: "uint16"
            }, {
                name: "message",
                type: "string"
            }],
            name: "errors",
            type: "tuple[]"
        }],
        name: "HttpError",
        type: "error"
    }],
    rd = [...nd, {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes"
        }, {
            name: "data",
            type: "bytes"
        }],
        outputs: [{
            name: "",
            type: "bytes"
        }, {
            name: "address",
            type: "address"
        }]
    }, {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes"
        }, {
            name: "data",
            type: "bytes"
        }, {
            name: "gateways",
            type: "string[]"
        }],
        outputs: [{
            name: "",
            type: "bytes"
        }, {
            name: "address",
            type: "address"
        }]
    }],
    mg = [...nd, {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [{
            type: "bytes",
            name: "reverseName"
        }],
        outputs: [{
            type: "string",
            name: "resolvedName"
        }, {
            type: "address",
            name: "resolvedAddress"
        }, {
            type: "address",
            name: "reverseResolver"
        }, {
            type: "address",
            name: "resolver"
        }]
    }, {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [{
            type: "bytes",
            name: "reverseName"
        }, {
            type: "string[]",
            name: "gateways"
        }],
        outputs: [{
            type: "string",
            name: "resolvedName"
        }, {
            type: "address",
            name: "resolvedAddress"
        }, {
            type: "address",
            name: "reverseResolver"
        }, {
            type: "address",
            name: "resolver"
        }]
    }],
    Uc = [{
        name: "text",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes32"
        }, {
            name: "key",
            type: "string"
        }],
        outputs: [{
            name: "",
            type: "string"
        }]
    }],
    zc = [{
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes32"
        }],
        outputs: [{
            name: "",
            type: "address"
        }]
    }, {
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes32"
        }, {
            name: "coinType",
            type: "uint256"
        }],
        outputs: [{
            name: "",
            type: "bytes"
        }]
    }],
    gg = [{
        inputs: [{
            internalType: "address",
            name: "_signer",
            type: "address"
        }, {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32"
        }, {
            internalType: "bytes",
            name: "_signature",
            type: "bytes"
        }],
        stateMutability: "nonpayable",
        type: "constructor"
    }];

function bg(e, t = {}) {
    typeof t.size < "u" && Ze(e, {
        size: t.size
    });
    const n = ue(e, t);
    return re(n, t)
}

function yg(e, t = {}) {
    let n = e;
    if (typeof t.size < "u" && (Ze(n, {
            size: t.size
        }), n = ot(n)), n.length > 1 || n[0] > 1) throw new Sm(n);
    return !!n[0]
}

function pt(e, t = {}) {
    typeof t.size < "u" && Ze(e, {
        size: t.size
    });
    const n = ue(e, t);
    return Ke(n, t)
}

function wg(e, t = {}) {
    let n = e;
    return typeof t.size < "u" && (Ze(n, {
        size: t.size
    }), n = ot(n, {
        dir: "right"
    })), new TextDecoder().decode(n)
}

function zo(e, t) {
    const n = typeof t == "string" ? We(t) : t,
        r = ha(n);
    if (ae(n) === 0 && e.length > 0) throw new Po;
    if (ae(t) && ae(t) < 32) throw new Cu({
        data: typeof t == "string" ? t : ue(t),
        params: e,
        size: ae(t)
    });
    let o = 0;
    const s = [];
    for (let i = 0; i < e.length; ++i) {
        const a = e[i];
        r.setPosition(o);
        const [c, l] = cn(r, a, {
            staticPosition: 0
        });
        o += l, s.push(c)
    }
    return s
}

function cn(e, t, {
    staticPosition: n
}) {
    const r = na(t.type);
    if (r) {
        const [o, s] = r;
        return Cg(e, { ...t,
            type: s
        }, {
            length: o,
            staticPosition: n
        })
    }
    if (t.type === "tuple") return Ig(e, t, {
        staticPosition: n
    });
    if (t.type === "address") return vg(e);
    if (t.type === "bool") return Eg(e);
    if (t.type.startsWith("bytes")) return Ag(e, t, {
        staticPosition: n
    });
    if (t.type.startsWith("uint") || t.type.startsWith("int")) return xg(e, t);
    if (t.type === "string") return kg(e, {
        staticPosition: n
    });
    throw new Km(t.type, {
        docsPath: "/docs/contract/decodeAbiParameters"
    })
}
const Wc = 32,
    pi = 32;

function vg(e) {
    const t = e.readBytes(32);
    return [vr(ue(Ou(t, -20))), 32]
}

function Cg(e, t, {
    length: n,
    staticPosition: r
}) {
    if (!n) {
        const i = pt(e.readBytes(pi)),
            a = r + i,
            c = a + Wc;
        e.setPosition(a);
        const l = pt(e.readBytes(Wc)),
            u = ar(t);
        let f = 0;
        const d = [];
        for (let h = 0; h < l; ++h) {
            e.setPosition(c + (u ? h * 32 : f));
            const [p, m] = cn(e, t, {
                staticPosition: c
            });
            f += m, d.push(p)
        }
        return e.setPosition(r + 32), [d, 32]
    }
    if (ar(t)) {
        const i = pt(e.readBytes(pi)),
            a = r + i,
            c = [];
        for (let l = 0; l < n; ++l) {
            e.setPosition(a + l * 32);
            const [u] = cn(e, t, {
                staticPosition: a
            });
            c.push(u)
        }
        return e.setPosition(r + 32), [c, 32]
    }
    let o = 0;
    const s = [];
    for (let i = 0; i < n; ++i) {
        const [a, c] = cn(e, t, {
            staticPosition: r + o
        });
        o += c, s.push(a)
    }
    return [s, o]
}

function Eg(e) {
    return [yg(e.readBytes(32), {
        size: 32
    }), 32]
}

function Ag(e, t, {
    staticPosition: n
}) {
    const [r, o] = t.type.split("bytes");
    if (!o) {
        const i = pt(e.readBytes(32));
        e.setPosition(n + i);
        const a = pt(e.readBytes(32));
        if (a === 0) return e.setPosition(n + 32), ["0x", 32];
        const c = e.readBytes(a);
        return e.setPosition(n + 32), [ue(c), 32]
    }
    return [ue(e.readBytes(Number.parseInt(o), 32)), 32]
}

function xg(e, t) {
    const n = t.type.startsWith("int"),
        r = Number.parseInt(t.type.split("int")[1] || "256"),
        o = e.readBytes(32);
    return [r > 48 ? bg(o, {
        signed: n
    }) : pt(o, {
        signed: n
    }), 32]
}

function Ig(e, t, {
    staticPosition: n
}) {
    const r = t.components.length === 0 || t.components.some(({
            name: i
        }) => !i),
        o = r ? [] : {};
    let s = 0;
    if (ar(t)) {
        const i = pt(e.readBytes(pi)),
            a = n + i;
        for (let c = 0; c < t.components.length; ++c) {
            const l = t.components[c];
            e.setPosition(a + s);
            const [u, f] = cn(e, l, {
                staticPosition: a
            });
            s += f, o[r ? c : l ? .name] = u
        }
        return e.setPosition(n + 32), [o, 32]
    }
    for (let i = 0; i < t.components.length; ++i) {
        const a = t.components[i],
            [c, l] = cn(e, a, {
                staticPosition: n
            });
        o[r ? i : a ? .name] = c, s += l
    }
    return [o, s]
}

function kg(e, {
    staticPosition: t
}) {
    const n = pt(e.readBytes(32)),
        r = t + n;
    e.setPosition(r);
    const o = pt(e.readBytes(32));
    if (o === 0) return e.setPosition(t + 32), ["", 32];
    const s = e.readBytes(o, 32),
        i = wg(ot(s));
    return e.setPosition(t + 32), [i, 32]
}

function ar(e) {
    const {
        type: t
    } = e;
    if (t === "string" || t === "bytes" || t.endsWith("[]")) return !0;
    if (t === "tuple") return e.components ? .some(ar);
    const n = na(e.type);
    return !!(n && ar({ ...e,
        type: n[1]
    }))
}
const Bg = e => xe(rt(e));

function jg(e) {
    return Bg(e)
}
const Sg = "1.0.5";
let He = class mi extends Error {
    constructor(t, n = {}) {
        const r = n.cause instanceof mi ? n.cause.details : n.cause ? .message ? n.cause.message : n.details,
            o = n.cause instanceof mi && n.cause.docsPath || n.docsPath,
            s = [t || "An error occurred.", "", ...n.metaMessages ? [...n.metaMessages, ""] : [], ...o ? [`Docs: https://abitype.dev${o}`] : [], ...r ? [`Details: ${r}`] : [], `Version: abitype@${Sg}`].join(`
`);
        super(s), Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiTypeError"
        }), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = o, this.metaMessages = n.metaMessages, this.shortMessage = t
    }
};

function Ot(e, t) {
    return e.exec(t) ? .groups
}
const od = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
    sd = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
    id = /^\(.+?\).*?$/,
    qc = /^tuple(?<array>(\[(\d*)\])*)$/;

function gi(e) {
    let t = e.type;
    if (qc.test(e.type) && "components" in e) {
        t = "(";
        const n = e.components.length;
        for (let o = 0; o < n; o++) {
            const s = e.components[o];
            t += gi(s), o < n - 1 && (t += ", ")
        }
        const r = Ot(qc, e.type);
        return t += `)${r?.array??""}`, gi({ ...e,
            type: t
        })
    }
    return "indexed" in e && e.indexed && (t = `${t} indexed`), e.name ? `${t} ${e.name}` : t
}

function Nn(e) {
    let t = "";
    const n = e.length;
    for (let r = 0; r < n; r++) {
        const o = e[r];
        t += gi(o), r !== n - 1 && (t += ", ")
    }
    return t
}

function Pg(e) {
    return e.type === "function" ? `function ${e.name}(${Nn(e.inputs)})${e.stateMutability&&e.stateMutability!=="nonpayable"?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${Nn(e.outputs)})`:""}` : e.type === "event" ? `event ${e.name}(${Nn(e.inputs)})` : e.type === "error" ? `error ${e.name}(${Nn(e.inputs)})` : e.type === "constructor" ? `constructor(${Nn(e.inputs)})${e.stateMutability==="payable"?" payable":""}` : e.type === "fallback" ? "fallback()" : "receive() external payable"
}
const ad = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;

function Tg(e) {
    return ad.test(e)
}

function Og(e) {
    return Ot(ad, e)
}
const cd = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;

function Mg(e) {
    return cd.test(e)
}

function Rg(e) {
    return Ot(cd, e)
}
const ld = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;

function _g(e) {
    return ld.test(e)
}

function Dg(e) {
    return Ot(ld, e)
}
const ud = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;

function dd(e) {
    return ud.test(e)
}

function Ng(e) {
    return Ot(ud, e)
}
const fd = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;

function Fg(e) {
    return fd.test(e)
}

function Lg(e) {
    return Ot(fd, e)
}
const Ug = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;

function zg(e) {
    return Ug.test(e)
}
const Wg = /^receive\(\) external payable$/;

function qg(e) {
    return Wg.test(e)
}
const Hg = new Set(["indexed"]),
    bi = new Set(["calldata", "memory", "storage"]);
class Qg extends He {
    constructor({
        type: t
    }) {
        super("Unknown type.", {
            metaMessages: [`Type "${t}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownTypeError"
        })
    }
}
class Vg extends He {
    constructor({
        type: t
    }) {
        super("Unknown type.", {
            metaMessages: [`Type "${t}" is not a valid ABI type.`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSolidityTypeError"
        })
    }
}
class $g extends He {
    constructor({
        param: t
    }) {
        super("Invalid ABI parameter.", {
            details: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParameterError"
        })
    }
}
class Gg extends He {
    constructor({
        param: t,
        name: n
    }) {
        super("Invalid ABI parameter.", {
            details: t,
            metaMessages: [`"${n}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SolidityProtectedKeywordError"
        })
    }
}
class Kg extends He {
    constructor({
        param: t,
        type: n,
        modifier: r
    }) {
        super("Invalid ABI parameter.", {
            details: t,
            metaMessages: [`Modifier "${r}" not allowed${n?` in "${n}" type`:""}.`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidModifierError"
        })
    }
}
class Jg extends He {
    constructor({
        param: t,
        type: n,
        modifier: r
    }) {
        super("Invalid ABI parameter.", {
            details: t,
            metaMessages: [`Modifier "${r}" not allowed${n?` in "${n}" type`:""}.`, `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidFunctionModifierError"
        })
    }
}
class Zg extends He {
    constructor({
        abiParameter: t
    }) {
        super("Invalid ABI parameter.", {
            details: JSON.stringify(t, null, 2),
            metaMessages: ["ABI parameter type is invalid."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiTypeParameterError"
        })
    }
}
class zn extends He {
    constructor({
        signature: t,
        type: n
    }) {
        super(`Invalid ${n} signature.`, {
            details: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidSignatureError"
        })
    }
}
class Yg extends He {
    constructor({
        signature: t
    }) {
        super("Unknown signature.", {
            details: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSignatureError"
        })
    }
}
class Xg extends He {
    constructor({
        signature: t
    }) {
        super("Invalid struct signature.", {
            details: t,
            metaMessages: ["No properties exist."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidStructSignatureError"
        })
    }
}
class eb extends He {
    constructor({
        type: t
    }) {
        super("Circular reference detected.", {
            metaMessages: [`Struct "${t}" is a circular reference.`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CircularReferenceError"
        })
    }
}
class tb extends He {
    constructor({
        current: t,
        depth: n
    }) {
        super("Unbalanced parentheses.", {
            metaMessages: [`"${t.trim()}" has too many ${n>0?"opening":"closing"} parentheses.`],
            details: `Depth "${n}"`
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParenthesisError"
        })
    }
}

function nb(e, t) {
    return t ? `${t}:${e}` : e
}
const Cs = new Map([
    ["address", {
        type: "address"
    }],
    ["bool", {
        type: "bool"
    }],
    ["bytes", {
        type: "bytes"
    }],
    ["bytes32", {
        type: "bytes32"
    }],
    ["int", {
        type: "int256"
    }],
    ["int256", {
        type: "int256"
    }],
    ["string", {
        type: "string"
    }],
    ["uint", {
        type: "uint256"
    }],
    ["uint8", {
        type: "uint8"
    }],
    ["uint16", {
        type: "uint16"
    }],
    ["uint24", {
        type: "uint24"
    }],
    ["uint32", {
        type: "uint32"
    }],
    ["uint64", {
        type: "uint64"
    }],
    ["uint96", {
        type: "uint96"
    }],
    ["uint112", {
        type: "uint112"
    }],
    ["uint160", {
        type: "uint160"
    }],
    ["uint192", {
        type: "uint192"
    }],
    ["uint256", {
        type: "uint256"
    }],
    ["address owner", {
        type: "address",
        name: "owner"
    }],
    ["address to", {
        type: "address",
        name: "to"
    }],
    ["bool approved", {
        type: "bool",
        name: "approved"
    }],
    ["bytes _data", {
        type: "bytes",
        name: "_data"
    }],
    ["bytes data", {
        type: "bytes",
        name: "data"
    }],
    ["bytes signature", {
        type: "bytes",
        name: "signature"
    }],
    ["bytes32 hash", {
        type: "bytes32",
        name: "hash"
    }],
    ["bytes32 r", {
        type: "bytes32",
        name: "r"
    }],
    ["bytes32 root", {
        type: "bytes32",
        name: "root"
    }],
    ["bytes32 s", {
        type: "bytes32",
        name: "s"
    }],
    ["string name", {
        type: "string",
        name: "name"
    }],
    ["string symbol", {
        type: "string",
        name: "symbol"
    }],
    ["string tokenURI", {
        type: "string",
        name: "tokenURI"
    }],
    ["uint tokenId", {
        type: "uint256",
        name: "tokenId"
    }],
    ["uint8 v", {
        type: "uint8",
        name: "v"
    }],
    ["uint256 balance", {
        type: "uint256",
        name: "balance"
    }],
    ["uint256 tokenId", {
        type: "uint256",
        name: "tokenId"
    }],
    ["uint256 value", {
        type: "uint256",
        name: "value"
    }],
    ["event:address indexed from", {
        type: "address",
        name: "from",
        indexed: !0
    }],
    ["event:address indexed to", {
        type: "address",
        name: "to",
        indexed: !0
    }],
    ["event:uint indexed tokenId", {
        type: "uint256",
        name: "tokenId",
        indexed: !0
    }],
    ["event:uint256 indexed tokenId", {
        type: "uint256",
        name: "tokenId",
        indexed: !0
    }]
]);

function rb(e, t = {}) {
    if (_g(e)) {
        const n = Dg(e);
        if (!n) throw new zn({
            signature: e,
            type: "function"
        });
        const r = $e(n.parameters),
            o = [],
            s = r.length;
        for (let a = 0; a < s; a++) o.push(Nt(r[a], {
            modifiers: bi,
            structs: t,
            type: "function"
        }));
        const i = [];
        if (n.returns) {
            const a = $e(n.returns),
                c = a.length;
            for (let l = 0; l < c; l++) i.push(Nt(a[l], {
                modifiers: bi,
                structs: t,
                type: "function"
            }))
        }
        return {
            name: n.name,
            type: "function",
            stateMutability: n.stateMutability ? ? "nonpayable",
            inputs: o,
            outputs: i
        }
    }
    if (Mg(e)) {
        const n = Rg(e);
        if (!n) throw new zn({
            signature: e,
            type: "event"
        });
        const r = $e(n.parameters),
            o = [],
            s = r.length;
        for (let i = 0; i < s; i++) o.push(Nt(r[i], {
            modifiers: Hg,
            structs: t,
            type: "event"
        }));
        return {
            name: n.name,
            type: "event",
            inputs: o
        }
    }
    if (Tg(e)) {
        const n = Og(e);
        if (!n) throw new zn({
            signature: e,
            type: "error"
        });
        const r = $e(n.parameters),
            o = [],
            s = r.length;
        for (let i = 0; i < s; i++) o.push(Nt(r[i], {
            structs: t,
            type: "error"
        }));
        return {
            name: n.name,
            type: "error",
            inputs: o
        }
    }
    if (Fg(e)) {
        const n = Lg(e);
        if (!n) throw new zn({
            signature: e,
            type: "constructor"
        });
        const r = $e(n.parameters),
            o = [],
            s = r.length;
        for (let i = 0; i < s; i++) o.push(Nt(r[i], {
            structs: t,
            type: "constructor"
        }));
        return {
            type: "constructor",
            stateMutability: n.stateMutability ? ? "nonpayable",
            inputs: o
        }
    }
    if (zg(e)) return {
        type: "fallback"
    };
    if (qg(e)) return {
        type: "receive",
        stateMutability: "payable"
    };
    throw new Yg({
        signature: e
    })
}
const ob = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
    sb = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
    ib = /^u?int$/;

function Nt(e, t) {
    const n = nb(e, t ? .type);
    if (Cs.has(n)) return Cs.get(n);
    const r = id.test(e),
        o = Ot(r ? sb : ob, e);
    if (!o) throw new $g({
        param: e
    });
    if (o.name && cb(o.name)) throw new Gg({
        param: e,
        name: o.name
    });
    const s = o.name ? {
            name: o.name
        } : {},
        i = o.modifier === "indexed" ? {
            indexed: !0
        } : {},
        a = t ? .structs ? ? {};
    let c, l = {};
    if (r) {
        c = "tuple";
        const f = $e(o.type),
            d = [],
            h = f.length;
        for (let p = 0; p < h; p++) d.push(Nt(f[p], {
            structs: a
        }));
        l = {
            components: d
        }
    } else if (o.type in a) c = "tuple", l = {
        components: a[o.type]
    };
    else if (ib.test(o.type)) c = `${o.type}256`;
    else if (c = o.type, t ? .type !== "struct" && !hd(c)) throw new Vg({
        type: c
    });
    if (o.modifier) {
        if (!t ? .modifiers ? .has ? .(o.modifier)) throw new Kg({
            param: e,
            type: t ? .type,
            modifier: o.modifier
        });
        if (bi.has(o.modifier) && !lb(c, !!o.array)) throw new Jg({
            param: e,
            type: t ? .type,
            modifier: o.modifier
        })
    }
    const u = {
        type: `${c}${o.array??""}`,
        ...s,
        ...i,
        ...l
    };
    return Cs.set(n, u), u
}

function $e(e, t = [], n = "", r = 0) {
    const o = e.trim().length;
    for (let s = 0; s < o; s++) {
        const i = e[s],
            a = e.slice(s + 1);
        switch (i) {
            case ",":
                return r === 0 ? $e(a, [...t, n.trim()]) : $e(a, t, `${n}${i}`, r);
            case "(":
                return $e(a, t, `${n}${i}`, r + 1);
            case ")":
                return $e(a, t, `${n}${i}`, r - 1);
            default:
                return $e(a, t, `${n}${i}`, r)
        }
    }
    if (n === "") return t;
    if (r !== 0) throw new tb({
        current: n,
        depth: r
    });
    return t.push(n.trim()), t
}

function hd(e) {
    return e === "address" || e === "bool" || e === "function" || e === "string" || od.test(e) || sd.test(e)
}
const ab = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;

function cb(e) {
    return e === "address" || e === "bool" || e === "function" || e === "string" || e === "tuple" || od.test(e) || sd.test(e) || ab.test(e)
}

function lb(e, t) {
    return t || e === "bytes" || e === "string" || e === "tuple"
}

function ub(e) {
    const t = {},
        n = e.length;
    for (let i = 0; i < n; i++) {
        const a = e[i];
        if (!dd(a)) continue;
        const c = Ng(a);
        if (!c) throw new zn({
            signature: a,
            type: "struct"
        });
        const l = c.properties.split(";"),
            u = [],
            f = l.length;
        for (let d = 0; d < f; d++) {
            const p = l[d].trim();
            if (!p) continue;
            const m = Nt(p, {
                type: "struct"
            });
            u.push(m)
        }
        if (!u.length) throw new Xg({
            signature: a
        });
        t[c.name] = u
    }
    const r = {},
        o = Object.entries(t),
        s = o.length;
    for (let i = 0; i < s; i++) {
        const [a, c] = o[i];
        r[a] = pd(c, t)
    }
    return r
}
const db = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;

function pd(e, t, n = new Set) {
    const r = [],
        o = e.length;
    for (let s = 0; s < o; s++) {
        const i = e[s];
        if (id.test(i.type)) r.push(i);
        else {
            const c = Ot(db, i.type);
            if (!c ? .type) throw new Zg({
                abiParameter: i
            });
            const {
                array: l,
                type: u
            } = c;
            if (u in t) {
                if (n.has(u)) throw new eb({
                    type: u
                });
                r.push({ ...i,
                    type: `tuple${l??""}`,
                    components: pd(t[u] ? ? [], t, new Set([...n, u]))
                })
            } else if (hd(u)) r.push(i);
            else throw new Qg({
                type: u
            })
        }
    }
    return r
}

function md(e) {
    const t = ub(e),
        n = [],
        r = e.length;
    for (let o = 0; o < r; o++) {
        const s = e[o];
        dd(s) || n.push(rb(s, t))
    }
    return n
}

function fb(e) {
    let t = !0,
        n = "",
        r = 0,
        o = "",
        s = !1;
    for (let i = 0; i < e.length; i++) {
        const a = e[i];
        if (["(", ")", ","].includes(a) && (t = !0), a === "(" && r++, a === ")" && r--, !!t) {
            if (r === 0) {
                if (a === " " && ["event", "function", ""].includes(o)) o = "";
                else if (o += a, a === ")") {
                    s = !0;
                    break
                }
                continue
            }
            if (a === " ") {
                e[i - 1] !== "," && n !== "," && n !== ",(" && (n = "", t = !1);
                continue
            }
            o += a, n += a
        }
    }
    if (!s) throw new j("Unable to normalize signature.");
    return o
}
const hb = e => {
    const t = (() => typeof e == "string" ? e : Pg(e))();
    return fb(t)
};

function gd(e) {
    return jg(hb(e))
}
const ga = gd,
    ba = e => Vn(gd(e), 0, 4);

function Ir(e) {
    const {
        abi: t,
        args: n = [],
        name: r
    } = e, o = Re(r, {
        strict: !1
    }), s = t.filter(a => o ? a.type === "function" ? ba(a) === r : a.type === "event" ? ga(a) === r : !1 : "name" in a && a.name === r);
    if (s.length === 0) return;
    if (s.length === 1) return s[0];
    let i;
    for (const a of s) {
        if (!("inputs" in a)) continue;
        if (!n || n.length === 0) {
            if (!a.inputs || a.inputs.length === 0) return a;
            continue
        }
        if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== n.length) continue;
        if (n.every((l, u) => {
                const f = "inputs" in a && a.inputs[u];
                return f ? yi(l, f) : !1
            })) {
            if (i && "inputs" in i && i.inputs) {
                const l = bd(a.inputs, i.inputs, n);
                if (l) throw new Vm({
                    abiItem: a,
                    type: l[0]
                }, {
                    abiItem: i,
                    type: l[1]
                })
            }
            i = a
        }
    }
    return i || s[0]
}

function yi(e, t) {
    const n = typeof e,
        r = t.type;
    switch (r) {
        case "address":
            return le(e, {
                strict: !1
            });
        case "bool":
            return n === "boolean";
        case "function":
            return n === "string";
        case "string":
            return n === "string";
        default:
            return r === "tuple" && "components" in t ? Object.values(t.components).every((o, s) => yi(Object.values(e)[s], o)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(e) && e.every(o => yi(o, { ...t,
                type: r.replace(/(\[[0-9]{0,}\])$/, "")
            })) : !1
    }
}

function bd(e, t, n) {
    for (const r in e) {
        const o = e[r],
            s = t[r];
        if (o.type === "tuple" && s.type === "tuple" && "components" in o && "components" in s) return bd(o.components, s.components, n[r]);
        const i = [o.type, s.type];
        if ((() => i.includes("address") && i.includes("bytes20") ? !0 : i.includes("address") && i.includes("string") ? le(n[r], {
                strict: !1
            }) : i.includes("address") && i.includes("bytes") ? le(n[r], {
                strict: !1
            }) : !1)()) return i
    }
}
const Es = "/docs/contract/decodeFunctionResult";

function Bn(e) {
    const {
        abi: t,
        args: n,
        functionName: r,
        data: o
    } = e;
    let s = t[0];
    if (r) {
        const a = Ir({
            abi: t,
            args: n,
            name: r
        });
        if (!a) throw new ao(r, {
            docsPath: Es
        });
        s = a
    }
    if (s.type !== "function") throw new ao(void 0, {
        docsPath: Es
    });
    if (!s.outputs) throw new Qm(s.name, {
        docsPath: Es
    });
    const i = zo(s.outputs, o);
    if (i && i.length > 1) return i;
    if (i && i.length === 1) return i[0]
}
const Hc = "/docs/contract/encodeFunctionData";

function pb(e) {
    const {
        abi: t,
        args: n,
        functionName: r
    } = e;
    let o = t[0];
    if (r) {
        const s = Ir({
            abi: t,
            args: n,
            name: r
        });
        if (!s) throw new ao(r, {
            docsPath: Hc
        });
        o = s
    }
    if (o.type !== "function") throw new ao(void 0, {
        docsPath: Hc
    });
    return {
        abi: [o],
        functionName: ba(mt(o))
    }
}

function Mt(e) {
    const {
        args: t
    } = e, {
        abi: n,
        functionName: r
    } = (() => e.abi.length === 1 && e.functionName ? .startsWith("0x") ? e : pb(e))(), o = n[0], s = r, i = "inputs" in o && o.inputs ? Yt(o.inputs, t ? ? []) : void 0;
    return bt([s, i ? ? "0x"])
}

function jn({
    blockNumber: e,
    chain: t,
    contract: n
}) {
    const r = t ? .contracts ? .[n];
    if (!r) throw new ri({
        chain: t,
        contract: {
            name: n
        }
    });
    if (e && r.blockCreated && r.blockCreated > e) throw new ri({
        blockNumber: e,
        chain: t,
        contract: {
            name: n,
            blockCreated: r.blockCreated
        }
    });
    return r.address
}
const yd = {
        1: "An `assert` condition failed.",
        17: "Arithmetic operation resulted in underflow or overflow.",
        18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
        33: "Attempted to convert to an invalid type.",
        34: "Attempted to access a storage byte array that is incorrectly encoded.",
        49: "Performed `.pop()` on an empty array",
        50: "Array index is out of bounds.",
        65: "Allocated too much memory or created an array which is too large.",
        81: "Attempted to call a zero-initialized variable of internal function type."
    },
    mb = {
        inputs: [{
            name: "message",
            type: "string"
        }],
        name: "Error",
        type: "error"
    },
    gb = {
        inputs: [{
            name: "reason",
            type: "uint256"
        }],
        name: "Panic",
        type: "error"
    };

function wd(e) {
    const {
        abi: t,
        data: n
    } = e, r = Vn(n, 0, 4);
    if (r === "0x") throw new Po;
    const s = [...t || [], mb, gb].find(i => i.type === "error" && r === ba(mt(i)));
    if (!s) throw new Eu(r, {
        docsPath: "/docs/contract/decodeErrorResult"
    });
    return {
        abiItem: s,
        args: "inputs" in s && s.inputs && s.inputs.length > 0 ? zo(s.inputs, Vn(n, 4)) : void 0,
        errorName: s.name
    }
}

function vd({
    abiItem: e,
    args: t,
    includeFunctionName: n = !0,
    includeName: r = !1
}) {
    if ("name" in e && "inputs" in e && e.inputs) return `${n?e.name:""}(${e.inputs.map((o,s)=>`${r&&o.name?`${o.name}: `:""}${typeof t[s]=="object"?fe(t[s]):t[s]}`).join(", ")})`
}
class Cd extends j {
    constructor(t, {
        account: n,
        docsPath: r,
        chain: o,
        data: s,
        gas: i,
        gasPrice: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: l,
        nonce: u,
        to: f,
        value: d,
        stateOverride: h
    }) {
        const p = n ? _e(n) : void 0;
        let m = Cr({
            from: p ? .address,
            to: f,
            value: typeof d < "u" && `${ra(d)} ${o?.nativeCurrency?.symbol||"ETH"}`,
            data: s,
            gas: i,
            gasPrice: typeof a < "u" && `${Te(a)} gwei`,
            maxFeePerGas: typeof c < "u" && `${Te(c)} gwei`,
            maxPriorityFeePerGas: typeof l < "u" && `${Te(l)} gwei`,
            nonce: u
        });
        h && (m += `
${X0(h)}`), super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Raw Call Arguments:", m].filter(Boolean)
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CallExecutionError"
        }), this.cause = t
    }
}
class ya extends j {
    constructor(t, {
        abi: n,
        args: r,
        contractAddress: o,
        docsPath: s,
        functionName: i,
        sender: a
    }) {
        const c = Ir({
                abi: n,
                args: r,
                name: i
            }),
            l = c ? vd({
                abiItem: c,
                args: r,
                includeFunctionName: !1,
                includeName: !1
            }) : void 0,
            u = c ? mt(c, {
                includeName: !0
            }) : void 0,
            f = Cr({
                address: o && km(o),
                function: u,
                args: l && l !== "()" && `${[...Array(i?.length??0).keys()].map(()=>" ").join("")}${l}`,
                sender: a
            });
        super(t.shortMessage || `An unknown error occurred while executing the contract function "${i}".`, {
            cause: t,
            docsPath: s,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Contract Call:", f].filter(Boolean)
        }), Object.defineProperty(this, "abi", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "args", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "contractAddress", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "formattedArgs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "functionName", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "sender", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ContractFunctionExecutionError"
        }), this.abi = n, this.args = r, this.cause = t, this.contractAddress = o, this.functionName = i, this.sender = a
    }
}
class wi extends j {
    constructor({
        abi: t,
        data: n,
        functionName: r,
        message: o
    }) {
        let s, i, a, c;
        if (n && n !== "0x") try {
            i = wd({
                abi: t,
                data: n
            });
            const {
                abiItem: u,
                errorName: f,
                args: d
            } = i;
            if (f === "Error") c = d[0];
            else if (f === "Panic") {
                const [h] = d;
                c = yd[h]
            } else {
                const h = u ? mt(u, {
                        includeName: !0
                    }) : void 0,
                    p = u && d ? vd({
                        abiItem: u,
                        args: d,
                        includeFunctionName: !1,
                        includeName: !1
                    }) : void 0;
                a = [h ? `Error: ${h}` : "", p && p !== "()" ? `       ${[...Array(f?.length??0).keys()].map(()=>" ").join("")}${p}` : ""]
            }
        } catch (u) {
            s = u
        } else o && (c = o);
        let l;
        s instanceof Eu && (l = s.signature, a = [`Unable to decode signature "${l}" as it was not found on the provided ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]), super(c && c !== "execution reverted" || l ? [`The contract function "${r}" reverted with the following ${l?"signature":"reason"}:`, c || l].join(`
`) : `The contract function "${r}" reverted.`, {
            cause: s,
            metaMessages: a
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ContractFunctionRevertedError"
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "reason", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = i, this.reason = c, this.signature = l
    }
}
class bb extends j {
    constructor({
        functionName: t
    }) {
        super(`The contract function "${t}" returned no data ("0x").`, {
            metaMessages: ["This could be due to any of the following:", `  - The contract does not have the function "${t}",`, "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ContractFunctionZeroDataError"
        })
    }
}
class yb extends j {
    constructor({
        factory: t
    }) {
        super(`Deployment for counterfactual contract call failed${t?` for factory "${t}".`:""}`, {
            metaMessages: ["Please ensure:", "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).", "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CounterfactualDeploymentFailedError"
        })
    }
}
class wa extends j {
    constructor({
        data: t,
        message: n
    }) {
        super(n || ""), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 3
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RawContractError"
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = t
    }
}

function va(e, t) {
    if (!(e instanceof j)) return !1;
    const n = e.walk(r => r instanceof wi);
    return n instanceof wi ? !!(n.data ? .errorName === "ResolverNotFound" || n.data ? .errorName === "ResolverWildcardNotSupported" || n.data ? .errorName === "ResolverNotContract" || n.data ? .errorName === "ResolverError" || n.data ? .errorName === "HttpError" || n.reason ? .includes("Wildcard on non-extended resolvers is not supported") || t === "reverse" && n.reason === yd[50]) : !1
}

function Ed(e) {
    if (e.length !== 66 || e.indexOf("[") !== 0 || e.indexOf("]") !== 65) return null;
    const t = `0x${e.slice(1,65)}`;
    return Re(t) ? t : null
}

function eo(e) {
    let t = new Uint8Array(32).fill(0);
    if (!e) return ue(t);
    const n = e.split(".");
    for (let r = n.length - 1; r >= 0; r -= 1) {
        const o = Ed(n[r]),
            s = o ? rt(o) : xe(zt(n[r]), "bytes");
        t = xe(st([t, s]), "bytes")
    }
    return ue(t)
}

function wb(e) {
    return `[${e.slice(2)}]`
}

function vb(e) {
    const t = new Uint8Array(32).fill(0);
    return e ? Ed(e) || xe(zt(e)) : ue(t)
}

function Wo(e) {
    const t = e.replace(/^\.|\.$/gm, "");
    if (t.length === 0) return new Uint8Array(1);
    const n = new Uint8Array(zt(t).byteLength + 2);
    let r = 0;
    const o = t.split(".");
    for (let s = 0; s < o.length; s++) {
        let i = zt(o[s]);
        i.byteLength > 255 && (i = zt(wb(vb(o[s])))), n[r] = i.length, n.set(i, r + 1), r += i.length + 1
    }
    return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n
}
const Cb = 3;

function cr(e, {
    abi: t,
    address: n,
    args: r,
    docsPath: o,
    functionName: s,
    sender: i
}) {
    const {
        code: a,
        data: c,
        message: l,
        shortMessage: u
    } = e instanceof wa ? e : e instanceof j ? e.walk(d => "data" in d) || e.walk() : {}, f = (() => e instanceof Po ? new bb({
        functionName: s
    }) : [Cb, Ht.code].includes(a) && (c || l || u) ? new wi({
        abi: t,
        data: typeof c == "object" ? c.data : c,
        functionName: s,
        message: u ? ? l
    }) : e)();
    return new ya(f, {
        abi: t,
        args: r,
        contractAddress: n,
        docsPath: o,
        functionName: s,
        sender: i
    })
}
const Eb = "modulepreload",
    Ab = function(e) {
        return "/novadrop/" + e
    },
    Qc = {},
    _ = function(t, n, r) {
        if (!n || n.length === 0) return t();
        const o = document.getElementsByTagName("link");
        return Promise.all(n.map(s => {
            if (s = Ab(s), s in Qc) return;
            Qc[s] = !0;
            const i = s.endsWith(".css"),
                a = i ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let u = o.length - 1; u >= 0; u--) {
                    const f = o[u];
                    if (f.href === s && (!i || f.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${s}"]${a}`)) return;
            const l = document.createElement("link");
            if (l.rel = i ? "stylesheet" : Eb, i || (l.as = "script", l.crossOrigin = ""), l.href = s, document.head.appendChild(l), i) return new Promise((u, f) => {
                l.addEventListener("load", u), l.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${s}`)))
            })
        })).then(() => t()).catch(s => {
            const i = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (i.payload = s, window.dispatchEvent(i), !i.defaultPrevented) throw s
        })
    },
    xb = "0x82ad56cb",
    Ib = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
    kb = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
    Bb = "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";

function jb(e, {
    docsPath: t,
    ...n
}) {
    const r = (() => {
        const o = oa(e, n);
        return o instanceof No ? e : o
    })();
    return new Cd(r, {
        docsPath: t,
        ...n
    })
}
const As = new Map;

function Ad({
    fn: e,
    id: t,
    shouldSplitBatch: n,
    wait: r = 0,
    sort: o
}) {
    const s = async () => {
            const u = c();
            i();
            const f = u.map(({
                args: d
            }) => d);
            f.length !== 0 && e(f).then(d => {
                o && Array.isArray(d) && d.sort(o);
                for (let h = 0; h < u.length; h++) {
                    const {
                        pendingPromise: p
                    } = u[h];
                    p.resolve ? .([d[h], d])
                }
            }).catch(d => {
                for (let h = 0; h < u.length; h++) {
                    const {
                        pendingPromise: p
                    } = u[h];
                    p.reject ? .(d)
                }
            })
        },
        i = () => As.delete(t),
        a = () => c().map(({
            args: u
        }) => u),
        c = () => As.get(t) || [],
        l = u => As.set(t, [...c(), u]);
    return {
        flush: i,
        async schedule(u) {
            const f = {},
                d = new Promise((m, b) => {
                    f.resolve = m, f.reject = b
                });
            return n ? .([...a(), u]) && s(), c().length > 0 ? (l({
                args: u,
                pendingPromise: f
            }), d) : (l({
                args: u,
                pendingPromise: f
            }), setTimeout(s, r), d)
        }
    }
}
async function kr(e, t) {
    const {
        account: n = e.account,
        batch: r = !!e.batch ? .multicall,
        blockNumber: o,
        blockTag: s = "latest",
        accessList: i,
        blobs: a,
        code: c,
        data: l,
        factory: u,
        factoryData: f,
        gas: d,
        gasPrice: h,
        maxFeePerBlobGas: p,
        maxFeePerGas: m,
        maxPriorityFeePerGas: b,
        nonce: w,
        to: v,
        value: C,
        stateOverride: y,
        ...A
    } = t, E = n ? _e(n) : void 0;
    if (c && (u || f)) throw new j("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
    if (c && v) throw new j("Cannot provide both `code` & `to` as parameters.");
    const k = c && l,
        B = u && f && v && l,
        S = k || B,
        P = (() => k ? Tb({
            code: c,
            data: l
        }) : B ? Ob({
            data: l,
            factory: u,
            factoryData: f,
            to: v
        }) : l)();
    try {
        Ar(t);
        const O = (o ? W(o) : void 0) || s,
            U = Hu(y),
            X = e.chain ? .formatters ? .transactionRequest ? .format,
            M = (X || Er)({ ...sa(A, {
                    format: X
                }),
                from: E ? .address,
                accessList: i,
                blobs: a,
                data: P,
                gas: d,
                gasPrice: h,
                maxFeePerBlobGas: p,
                maxFeePerGas: m,
                maxPriorityFeePerGas: b,
                nonce: w,
                to: S ? void 0 : v,
                value: C
            });
        if (r && Sb({
                request: M
            }) && !U) try {
            return await Pb(e, { ...M,
                blockNumber: o,
                blockTag: s
            })
        } catch (H) {
            if (!(H instanceof Ru) && !(H instanceof ri)) throw H
        }
        const N = await e.request({
            method: "eth_call",
            params: U ? [M, O, U] : [M, O]
        });
        return N === "0x" ? {
            data: void 0
        } : {
            data: N
        }
    } catch (R) {
        const O = Mb(R),
            {
                offchainLookup: U,
                offchainLookupSignature: X
            } = await _(() => Promise.resolve().then(() => By), void 0);
        if (e.ccipRead !== !1 && O ? .slice(0, 10) === X && v) return {
            data: await U(e, {
                data: O,
                to: v
            })
        };
        throw S && O ? .slice(0, 10) === "0x101bb98d" ? new yb({
            factory: u
        }) : jb(R, { ...t,
            account: E,
            chain: e.chain
        })
    }
}

function Sb({
    request: e
}) {
    const {
        data: t,
        to: n,
        ...r
    } = e;
    return !(!t || t.startsWith(xb) || !n || Object.values(r).filter(o => typeof o < "u").length > 0)
}
async function Pb(e, t) {
    const {
        batchSize: n = 1024,
        wait: r = 0
    } = typeof e.batch ? .multicall == "object" ? e.batch.multicall : {}, {
        blockNumber: o,
        blockTag: s = "latest",
        data: i,
        multicallAddress: a,
        to: c
    } = t;
    let l = a;
    if (!l) {
        if (!e.chain) throw new Ru;
        l = jn({
            blockNumber: o,
            chain: e.chain,
            contract: "multicall3"
        })
    }
    const f = (o ? W(o) : void 0) || s,
        {
            schedule: d
        } = Ad({
            id: `${e.uid}.${f}`,
            wait: r,
            shouldSplitBatch(m) {
                return m.reduce((w, {
                    data: v
                }) => w + (v.length - 2), 0) > n * 2
            },
            fn: async m => {
                const b = m.map(C => ({
                        allowFailure: !0,
                        callData: C.data,
                        target: C.to
                    })),
                    w = Mt({
                        abi: hi,
                        args: [b],
                        functionName: "aggregate3"
                    }),
                    v = await e.request({
                        method: "eth_call",
                        params: [{
                            data: w,
                            to: l
                        }, f]
                    });
                return Bn({
                    abi: hi,
                    args: [b],
                    functionName: "aggregate3",
                    data: v || "0x"
                })
            }
        }),
        [{
            returnData: h,
            success: p
        }] = await d({
            data: i,
            to: c
        });
    if (!p) throw new wa({
        data: h
    });
    return h === "0x" ? {
        data: void 0
    } : {
        data: h
    }
}

function Tb(e) {
    const {
        code: t,
        data: n
    } = e;
    return Mo({
        abi: md(["constructor(bytes, bytes)"]),
        bytecode: Ib,
        args: [t, n]
    })
}

function Ob(e) {
    const {
        data: t,
        factory: n,
        factoryData: r,
        to: o
    } = e;
    return Mo({
        abi: md(["constructor(address, bytes, address, bytes)"]),
        bytecode: kb,
        args: [o, t, n, r]
    })
}

function Mb(e) {
    if (!(e instanceof j)) return;
    const t = e.walk();
    return typeof t ? .data == "object" ? t.data ? .data : t.data
}
async function Je(e, t) {
    const {
        abi: n,
        address: r,
        args: o,
        functionName: s,
        ...i
    } = t, a = Mt({
        abi: n,
        args: o,
        functionName: s
    });
    try {
        const {
            data: c
        } = await F(e, kr, "call")({ ...i,
            data: a,
            to: r
        });
        return Bn({
            abi: n,
            args: o,
            functionName: s,
            data: c || "0x"
        })
    } catch (c) {
        throw cr(c, {
            abi: n,
            address: r,
            args: o,
            docsPath: "/docs/contract/readContract",
            functionName: s
        })
    }
}
async function Rb(e, {
    blockNumber: t,
    blockTag: n,
    coinType: r,
    name: o,
    gatewayUrls: s,
    strict: i,
    universalResolverAddress: a
}) {
    let c = a;
    if (!c) {
        if (!e.chain) throw new Error("client chain not configured. universalResolverAddress is required.");
        c = jn({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver"
        })
    }
    try {
        const l = Mt({
                abi: zc,
                functionName: "addr",
                ...r != null ? {
                    args: [eo(o), BigInt(r)]
                } : {
                    args: [eo(o)]
                }
            }),
            u = {
                address: c,
                abi: rd,
                functionName: "resolve",
                args: [L(Wo(o)), l],
                blockNumber: t,
                blockTag: n
            },
            f = F(e, Je, "readContract"),
            d = s ? await f({ ...u,
                args: [...u.args, s]
            }) : await f(u);
        if (d[0] === "0x") return null;
        const h = Bn({
            abi: zc,
            args: r != null ? [eo(o), BigInt(r)] : void 0,
            functionName: "addr",
            data: d[0]
        });
        return h === "0x" || ot(h) === "0x00" ? null : h
    } catch (l) {
        if (i) throw l;
        if (va(l, "resolve")) return null;
        throw l
    }
}
class _b extends j {
    constructor({
        data: t
    }) {
        super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
            metaMessages: ["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.", "", `Provided data: ${JSON.stringify(t)}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarInvalidMetadataError"
        })
    }
}
class Fn extends j {
    constructor({
        reason: t
    }) {
        super(`ENS NFT avatar URI is invalid. ${t}`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarInvalidNftUriError"
        })
    }
}
class Ca extends j {
    constructor({
        uri: t
    }) {
        super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarUriResolutionError"
        })
    }
}
class Db extends j {
    constructor({
        namespace: t
    }) {
        super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarUnsupportedNamespaceError"
        })
    }
}
const Nb = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
    Fb = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
    Lb = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
    Ub = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function zb(e) {
    try {
        const t = await fetch(e, {
            method: "HEAD"
        });
        return t.status === 200 ? t.headers.get("content-type") ? .startsWith("image/") : !1
    } catch (t) {
        return typeof t == "object" && typeof t.response < "u" || !globalThis.hasOwnProperty("Image") ? !1 : new Promise(n => {
            const r = new Image;
            r.onload = () => {
                n(!0)
            }, r.onerror = () => {
                n(!1)
            }, r.src = e
        })
    }
}

function Vc(e, t) {
    return e ? e.endsWith("/") ? e.slice(0, -1) : e : t
}

function xd({
    uri: e,
    gatewayUrls: t
}) {
    const n = Lb.test(e);
    if (n) return {
        uri: e,
        isOnChain: !0,
        isEncoded: n
    };
    const r = Vc(t ? .ipfs, "https://ipfs.io"),
        o = Vc(t ? .arweave, "https://arweave.net"),
        s = e.match(Nb),
        {
            protocol: i,
            subpath: a,
            target: c,
            subtarget: l = ""
        } = s ? .groups || {},
        u = i === "ipns:/" || a === "ipns/",
        f = i === "ipfs:/" || a === "ipfs/" || Fb.test(e);
    if (e.startsWith("http") && !u && !f) {
        let h = e;
        return t ? .arweave && (h = e.replace(/https:\/\/arweave.net/g, t ? .arweave)), {
            uri: h,
            isOnChain: !1,
            isEncoded: !1
        }
    }
    if ((u || f) && c) return {
        uri: `${r}/${u?"ipns":"ipfs"}/${c}${l}`,
        isOnChain: !1,
        isEncoded: !1
    };
    if (i === "ar:/" && c) return {
        uri: `${o}/${c}${l||""}`,
        isOnChain: !1,
        isEncoded: !1
    };
    let d = e.replace(Ub, "");
    if (d.startsWith("<svg") && (d = `data:image/svg+xml;base64,${btoa(d)}`), d.startsWith("data:") || d.startsWith("{")) return {
        uri: d,
        isOnChain: !0,
        isEncoded: !1
    };
    throw new Ca({
        uri: e
    })
}

function Id(e) {
    if (typeof e != "object" || !("image" in e) && !("image_url" in e) && !("image_data" in e)) throw new _b({
        data: e
    });
    return e.image || e.image_url || e.image_data
}
async function Wb({
    gatewayUrls: e,
    uri: t
}) {
    try {
        const n = await fetch(t).then(o => o.json());
        return await Ea({
            gatewayUrls: e,
            uri: Id(n)
        })
    } catch {
        throw new Ca({
            uri: t
        })
    }
}
async function Ea({
    gatewayUrls: e,
    uri: t
}) {
    const {
        uri: n,
        isOnChain: r
    } = xd({
        uri: t,
        gatewayUrls: e
    });
    if (r || await zb(n)) return n;
    throw new Ca({
        uri: t
    })
}

function qb(e) {
    let t = e;
    t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
    const [n, r, o] = t.split("/"), [s, i] = n.split(":"), [a, c] = r.split(":");
    if (!s || s.toLowerCase() !== "eip155") throw new Fn({
        reason: "Only EIP-155 supported"
    });
    if (!i) throw new Fn({
        reason: "Chain ID not found"
    });
    if (!c) throw new Fn({
        reason: "Contract address not found"
    });
    if (!o) throw new Fn({
        reason: "Token ID not found"
    });
    if (!a) throw new Fn({
        reason: "ERC namespace not found"
    });
    return {
        chainID: Number.parseInt(i),
        namespace: a.toLowerCase(),
        contractAddress: c,
        tokenID: o
    }
}
async function Hb(e, {
    nft: t
}) {
    if (t.namespace === "erc721") return Je(e, {
        address: t.contractAddress,
        abi: [{
            name: "tokenURI",
            type: "function",
            stateMutability: "view",
            inputs: [{
                name: "tokenId",
                type: "uint256"
            }],
            outputs: [{
                name: "",
                type: "string"
            }]
        }],
        functionName: "tokenURI",
        args: [BigInt(t.tokenID)]
    });
    if (t.namespace === "erc1155") return Je(e, {
        address: t.contractAddress,
        abi: [{
            name: "uri",
            type: "function",
            stateMutability: "view",
            inputs: [{
                name: "_id",
                type: "uint256"
            }],
            outputs: [{
                name: "",
                type: "string"
            }]
        }],
        functionName: "uri",
        args: [BigInt(t.tokenID)]
    });
    throw new Db({
        namespace: t.namespace
    })
}
async function Qb(e, {
    gatewayUrls: t,
    record: n
}) {
    return /eip155:/i.test(n) ? Vb(e, {
        gatewayUrls: t,
        record: n
    }) : Ea({
        uri: n,
        gatewayUrls: t
    })
}
async function Vb(e, {
    gatewayUrls: t,
    record: n
}) {
    const r = qb(n),
        o = await Hb(e, {
            nft: r
        }),
        {
            uri: s,
            isOnChain: i,
            isEncoded: a
        } = xd({
            uri: o,
            gatewayUrls: t
        });
    if (i && (s.includes("data:application/json;base64,") || s.startsWith("{"))) {
        const l = a ? atob(s.replace("data:application/json;base64,", "")) : s,
            u = JSON.parse(l);
        return Ea({
            uri: Id(u),
            gatewayUrls: t
        })
    }
    let c = r.tokenID;
    return r.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), Wb({
        gatewayUrls: t,
        uri: s.replace(/(?:0x)?{id}/, c)
    })
}
async function kd(e, {
    blockNumber: t,
    blockTag: n,
    name: r,
    key: o,
    gatewayUrls: s,
    strict: i,
    universalResolverAddress: a
}) {
    let c = a;
    if (!c) {
        if (!e.chain) throw new Error("client chain not configured. universalResolverAddress is required.");
        c = jn({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver"
        })
    }
    try {
        const l = {
                address: c,
                abi: rd,
                functionName: "resolve",
                args: [L(Wo(r)), Mt({
                    abi: Uc,
                    functionName: "text",
                    args: [eo(r), o]
                })],
                blockNumber: t,
                blockTag: n
            },
            u = F(e, Je, "readContract"),
            f = s ? await u({ ...l,
                args: [...l.args, s]
            }) : await u(l);
        if (f[0] === "0x") return null;
        const d = Bn({
            abi: Uc,
            functionName: "text",
            data: f[0]
        });
        return d === "" ? null : d
    } catch (l) {
        if (i) throw l;
        if (va(l, "resolve")) return null;
        throw l
    }
}
async function Bd(e, {
    blockNumber: t,
    blockTag: n,
    assetGatewayUrls: r,
    name: o,
    gatewayUrls: s,
    strict: i,
    universalResolverAddress: a
}) {
    const c = await F(e, kd, "getEnsText")({
        blockNumber: t,
        blockTag: n,
        key: "avatar",
        name: o,
        universalResolverAddress: a,
        gatewayUrls: s,
        strict: i
    });
    if (!c) return null;
    try {
        return await Qb(e, {
            record: c,
            gatewayUrls: r
        })
    } catch {
        return null
    }
}
async function jd(e, {
    address: t,
    blockNumber: n,
    blockTag: r,
    gatewayUrls: o,
    strict: s,
    universalResolverAddress: i
}) {
    let a = i;
    if (!a) {
        if (!e.chain) throw new Error("client chain not configured. universalResolverAddress is required.");
        a = jn({
            blockNumber: n,
            chain: e.chain,
            contract: "ensUniversalResolver"
        })
    }
    const c = `${t.toLowerCase().substring(2)}.addr.reverse`;
    try {
        const l = {
                address: a,
                abi: mg,
                functionName: "reverse",
                args: [L(Wo(c))],
                blockNumber: n,
                blockTag: r
            },
            u = F(e, Je, "readContract"),
            [f, d] = o ? await u({ ...l,
                args: [...l.args, o]
            }) : await u(l);
        return t.toLowerCase() !== d.toLowerCase() ? null : f
    } catch (l) {
        if (s) throw l;
        if (va(l, "reverse")) return null;
        throw l
    }
}
async function $b(e, {
    blockNumber: t,
    blockTag: n,
    name: r,
    universalResolverAddress: o
}) {
    let s = o;
    if (!s) {
        if (!e.chain) throw new Error("client chain not configured. universalResolverAddress is required.");
        s = jn({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver"
        })
    }
    const [i] = await F(e, Je, "readContract")({
        address: s,
        abi: [{
            inputs: [{
                type: "bytes"
            }],
            name: "findResolver",
            outputs: [{
                type: "address"
            }, {
                type: "bytes32"
            }],
            stateMutability: "view",
            type: "function"
        }],
        functionName: "findResolver",
        args: [L(Wo(r))],
        blockNumber: t,
        blockTag: n
    });
    return i
}

function qo(e, {
    method: t
}) {
    const n = {};
    return e.transport.type === "fallback" && e.transport.onResponse ? .(({
        method: r,
        response: o,
        status: s,
        transport: i
    }) => {
        s === "success" && t === r && (n[o] = i.request)
    }), r => n[r] || e.request
}
async function Gb(e) {
    const t = qo(e, {
            method: "eth_newBlockFilter"
        }),
        n = await e.request({
            method: "eth_newBlockFilter"
        });
    return {
        id: n,
        request: t(n),
        type: "block"
    }
}
class Kb extends j {
    constructor(t) {
        super(`Filter type "${t}" is not supported.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FilterTypeNotSupportedError"
        })
    }
}
const $c = "/docs/contract/encodeEventTopics";

function Br(e) {
    const {
        abi: t,
        eventName: n,
        args: r
    } = e;
    let o = t[0];
    if (n) {
        const c = Ir({
            abi: t,
            name: n
        });
        if (!c) throw new Bc(n, {
            docsPath: $c
        });
        o = c
    }
    if (o.type !== "event") throw new Bc(void 0, {
        docsPath: $c
    });
    const s = mt(o),
        i = ga(s);
    let a = [];
    if (r && "inputs" in o) {
        const c = o.inputs ? .filter(u => "indexed" in u && u.indexed),
            l = Array.isArray(r) ? r : Object.values(r).length > 0 ? c ? .map(u => r[u.name]) ? ? [] : [];
        l.length > 0 && (a = c ? .map((u, f) => Array.isArray(l[f]) ? l[f].map((d, h) => Gc({
            param: u,
            value: l[f][h]
        })) : l[f] ? Gc({
            param: u,
            value: l[f]
        }) : null) ? ? [])
    }
    return [i, ...a]
}

function Gc({
    param: e,
    value: t
}) {
    if (e.type === "string" || e.type === "bytes") return xe(rt(t));
    if (e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/)) throw new Kb(e.type);
    return Yt([e], [t])
}
async function Aa(e, t) {
    const {
        address: n,
        abi: r,
        args: o,
        eventName: s,
        fromBlock: i,
        strict: a,
        toBlock: c
    } = t, l = qo(e, {
        method: "eth_newFilter"
    }), u = s ? Br({
        abi: r,
        args: o,
        eventName: s
    }) : void 0, f = await e.request({
        method: "eth_newFilter",
        params: [{
            address: n,
            fromBlock: typeof i == "bigint" ? W(i) : i,
            toBlock: typeof c == "bigint" ? W(c) : c,
            topics: u
        }]
    });
    return {
        abi: r,
        args: o,
        eventName: s,
        id: f,
        request: l(f),
        strict: !!a,
        type: "event"
    }
}
async function Sd(e, {
    address: t,
    args: n,
    event: r,
    events: o,
    fromBlock: s,
    strict: i,
    toBlock: a
} = {}) {
    const c = o ? ? (r ? [r] : void 0),
        l = qo(e, {
            method: "eth_newFilter"
        });
    let u = [];
    c && (u = [c.flatMap(h => Br({
        abi: [h],
        eventName: h.name,
        args: n
    }))], r && (u = u[0]));
    const f = await e.request({
        method: "eth_newFilter",
        params: [{
            address: t,
            fromBlock: typeof s == "bigint" ? W(s) : s,
            toBlock: typeof a == "bigint" ? W(a) : a,
            ...u.length ? {
                topics: u
            } : {}
        }]
    });
    return {
        abi: c,
        args: n,
        eventName: r ? r.name : void 0,
        fromBlock: s,
        id: f,
        request: l(f),
        strict: !!i,
        toBlock: a,
        type: "event"
    }
}
async function Pd(e) {
    const t = qo(e, {
            method: "eth_newPendingTransactionFilter"
        }),
        n = await e.request({
            method: "eth_newPendingTransactionFilter"
        });
    return {
        id: n,
        request: t(n),
        type: "transaction"
    }
}
async function Td(e, t) {
    const {
        abi: n,
        address: r,
        args: o,
        functionName: s,
        ...i
    } = t, a = Mt({
        abi: n,
        args: o,
        functionName: s
    });
    try {
        return await F(e, la, "estimateGas")({
            data: a,
            to: r,
            ...i
        })
    } catch (c) {
        const l = i.account ? _e(i.account) : void 0;
        throw cr(c, {
            abi: n,
            address: r,
            args: o,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: s,
            sender: l ? .address
        })
    }
}
async function Od(e, {
    address: t,
    blockNumber: n,
    blockTag: r = "latest"
}) {
    const o = n ? W(n) : void 0,
        s = await e.request({
            method: "eth_getBalance",
            params: [t, o || r]
        });
    return BigInt(s)
}
async function Jb(e) {
    const t = await e.request({
        method: "eth_blobBaseFee"
    });
    return BigInt(t)
}
const Zb = new Map,
    Yb = new Map;

function Xb(e) {
    const t = (o, s) => ({
            clear: () => s.delete(o),
            get: () => s.get(o),
            set: i => s.set(o, i)
        }),
        n = t(e, Zb),
        r = t(e, Yb);
    return {
        clear: () => {
            n.clear(), r.clear()
        },
        promise: n,
        response: r
    }
}
async function ey(e, {
    cacheKey: t,
    cacheTime: n = Number.POSITIVE_INFINITY
}) {
    const r = Xb(t),
        o = r.response.get();
    if (o && n > 0 && new Date().getTime() - o.created.getTime() < n) return o.data;
    let s = r.promise.get();
    s || (s = e(), r.promise.set(s));
    try {
        const i = await s;
        return r.response.set({
            created: new Date,
            data: i
        }), i
    } finally {
        r.promise.clear()
    }
}
const ty = e => `blockNumber.${e}`;
async function jr(e, {
    cacheTime: t = e.cacheTime
} = {}) {
    const n = await ey(() => e.request({
        method: "eth_blockNumber"
    }), {
        cacheKey: ty(e.uid),
        cacheTime: t
    });
    return BigInt(n)
}
async function ny(e, {
    blockHash: t,
    blockNumber: n,
    blockTag: r = "latest"
} = {}) {
    const o = n !== void 0 ? W(n) : void 0;
    let s;
    return t ? s = await e.request({
        method: "eth_getBlockTransactionCountByHash",
        params: [t]
    }, {
        dedupe: !0
    }) : s = await e.request({
        method: "eth_getBlockTransactionCountByNumber",
        params: [o || r]
    }, {
        dedupe: !!o
    }), Ke(s)
}
async function vi(e, {
    address: t,
    blockNumber: n,
    blockTag: r = "latest"
}) {
    const o = n !== void 0 ? W(n) : void 0,
        s = await e.request({
            method: "eth_getCode",
            params: [t, o || r]
        }, {
            dedupe: !!o
        });
    if (s !== "0x") return s
}
const Kc = "/docs/contract/decodeEventLog";

function xa(e) {
    const {
        abi: t,
        data: n,
        strict: r,
        topics: o
    } = e, s = r ? ? !0, [i, ...a] = o;
    if (!i) throw new Hm({
        docsPath: Kc
    });
    const c = t.find(m => m.type === "event" && i === ga(mt(m)));
    if (!(c && "name" in c) || c.type !== "event") throw new Au(i, {
        docsPath: Kc
    });
    const {
        name: l,
        inputs: u
    } = c, f = u ? .some(m => !("name" in m && m.name));
    let d = f ? [] : {};
    const h = u.filter(m => "indexed" in m && m.indexed);
    for (let m = 0; m < h.length; m++) {
        const b = h[m],
            w = a[m];
        if (!w) throw new To({
            abiItem: c,
            param: b
        });
        d[f ? m : b.name || m] = ry({
            param: b,
            value: w
        })
    }
    const p = u.filter(m => !("indexed" in m && m.indexed));
    if (p.length > 0) {
        if (n && n !== "0x") try {
            const m = zo(p, n);
            if (m)
                if (f) d = [...d, ...m];
                else
                    for (let b = 0; b < p.length; b++) d[p[b].name] = m[b]
        } catch (m) {
            if (s) throw m instanceof Cu || m instanceof Yu ? new Qn({
                abiItem: c,
                data: n,
                params: p,
                size: ae(n)
            }) : m
        } else if (s) throw new Qn({
            abiItem: c,
            data: "0x",
            params: p,
            size: 0
        })
    }
    return {
        eventName: l,
        args: Object.values(d).length > 0 ? d : void 0
    }
}

function ry({
    param: e,
    value: t
}) {
    return e.type === "string" || e.type === "bytes" || e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/) ? t : (zo([e], t) || [])[0]
}

function Ia({
    abi: e,
    eventName: t,
    logs: n,
    strict: r = !0
}) {
    return n.map(o => {
        try {
            const s = xa({ ...o,
                abi: e,
                strict: r
            });
            return t && !t.includes(s.eventName) ? null : { ...s,
                ...o
            }
        } catch (s) {
            let i, a;
            if (s instanceof Au) return null;
            if (s instanceof Qn || s instanceof To) {
                if (r) return null;
                i = s.abiItem.name, a = s.abiItem.inputs ? .some(c => !("name" in c && c.name))
            }
            return { ...o,
                args: a ? [] : {},
                eventName: i
            }
        }
    }).filter(Boolean)
}

function gt(e, {
    args: t,
    eventName: n
} = {}) {
    return { ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        logIndex: e.logIndex ? Number(e.logIndex) : null,
        transactionHash: e.transactionHash ? e.transactionHash : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
        ...n ? {
            args: t,
            eventName: n
        } : {}
    }
}
async function ka(e, {
    address: t,
    blockHash: n,
    fromBlock: r,
    toBlock: o,
    event: s,
    events: i,
    args: a,
    strict: c
} = {}) {
    const l = c ? ? !1,
        u = i ? ? (s ? [s] : void 0);
    let f = [];
    u && (f = [u.flatMap(m => Br({
        abi: [m],
        eventName: m.name,
        args: a
    }))], s && (f = f[0]));
    let d;
    n ? d = await e.request({
        method: "eth_getLogs",
        params: [{
            address: t,
            topics: f,
            blockHash: n
        }]
    }) : d = await e.request({
        method: "eth_getLogs",
        params: [{
            address: t,
            topics: f,
            fromBlock: typeof r == "bigint" ? W(r) : r,
            toBlock: typeof o == "bigint" ? W(o) : o
        }]
    });
    const h = d.map(p => gt(p));
    return u ? Ia({
        abi: u,
        logs: h,
        strict: l
    }) : h
}
async function Ba(e, t) {
    const {
        abi: n,
        address: r,
        args: o,
        blockHash: s,
        eventName: i,
        fromBlock: a,
        toBlock: c,
        strict: l
    } = t, u = i ? Ir({
        abi: n,
        name: i
    }) : void 0, f = u ? void 0 : n.filter(d => d.type === "event");
    return F(e, ka, "getLogs")({
        address: r,
        args: o,
        blockHash: s,
        event: u,
        events: f,
        fromBlock: a,
        toBlock: c,
        strict: l
    })
}
class oy extends j {
    constructor({
        address: t
    }) {
        super(`No EIP-712 domain found on contract "${t}".`, {
            metaMessages: ["Ensure that:", `- The contract is deployed at the address "${t}".`, "- `eip712Domain()` function exists on the contract.", "- `eip712Domain()` function matches signature to ERC-5267 specification."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Eip712DomainNotFoundError"
        })
    }
}
async function sy(e, t) {
    const {
        address: n,
        factory: r,
        factoryData: o
    } = t;
    try {
        const [s, i, a, c, l, u, f] = await F(e, Je, "readContract")({
            abi: iy,
            address: n,
            functionName: "eip712Domain",
            factory: r,
            factoryData: o
        });
        return {
            domain: {
                name: i,
                version: a,
                chainId: Number(c),
                verifyingContract: l,
                salt: u
            },
            extensions: f,
            fields: s
        }
    } catch (s) {
        const i = s;
        throw i.name === "ContractFunctionExecutionError" && i.cause.name === "ContractFunctionZeroDataError" ? new oy({
            address: n
        }) : i
    }
}
const iy = [{
    inputs: [],
    name: "eip712Domain",
    outputs: [{
        name: "fields",
        type: "bytes1"
    }, {
        name: "name",
        type: "string"
    }, {
        name: "version",
        type: "string"
    }, {
        name: "chainId",
        type: "uint256"
    }, {
        name: "verifyingContract",
        type: "address"
    }, {
        name: "salt",
        type: "bytes32"
    }, {
        name: "extensions",
        type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function"
}];

function ay(e) {
    return {
        baseFeePerGas: e.baseFeePerGas.map(t => BigInt(t)),
        gasUsedRatio: e.gasUsedRatio,
        oldestBlock: BigInt(e.oldestBlock),
        reward: e.reward ? .map(t => t.map(n => BigInt(n)))
    }
}
async function cy(e, {
    blockCount: t,
    blockNumber: n,
    blockTag: r = "latest",
    rewardPercentiles: o
}) {
    const s = n ? W(n) : void 0,
        i = await e.request({
            method: "eth_feeHistory",
            params: [W(t), s || r, o]
        }, {
            dedupe: !!s
        });
    return ay(i)
}
async function Ho(e, {
    filter: t
}) {
    const n = "strict" in t && t.strict,
        r = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id]
        });
    if (typeof r[0] == "string") return r;
    const o = r.map(s => gt(s));
    return !("abi" in t) || !t.abi ? o : Ia({
        abi: t.abi,
        logs: o,
        strict: n
    })
}
async function ly(e, {
    filter: t
}) {
    const n = t.strict ? ? !1,
        o = (await t.request({
            method: "eth_getFilterLogs",
            params: [t.id]
        })).map(s => gt(s));
    return t.abi ? Ia({
        abi: t.abi,
        logs: o,
        strict: n
    }) : o
}
async function uy(e, {
    address: t,
    blockNumber: n,
    blockTag: r = "latest",
    slot: o
}) {
    const s = n !== void 0 ? W(n) : void 0;
    return await e.request({
        method: "eth_getStorageAt",
        params: [t, o, s || r]
    })
}
async function ja(e, {
    blockHash: t,
    blockNumber: n,
    blockTag: r,
    hash: o,
    index: s
}) {
    const i = r || "latest",
        a = n !== void 0 ? W(n) : void 0;
    let c = null;
    if (o ? c = await e.request({
            method: "eth_getTransactionByHash",
            params: [o]
        }, {
            dedupe: !0
        }) : t ? c = await e.request({
            method: "eth_getTransactionByBlockHashAndIndex",
            params: [t, W(s)]
        }, {
            dedupe: !0
        }) : (a || i) && (c = await e.request({
            method: "eth_getTransactionByBlockNumberAndIndex",
            params: [a || i, W(s)]
        }, {
            dedupe: !!a
        })), !c) throw new Du({
        blockHash: t,
        blockNumber: n,
        blockTag: i,
        hash: o,
        index: s
    });
    return (e.chain ? .formatters ? .transaction ? .format || Lo)(c)
}
async function dy(e, {
    hash: t,
    transactionReceipt: n
}) {
    const [r, o] = await Promise.all([F(e, jr, "getBlockNumber")({}), t ? F(e, ja, "getTransaction")({
        hash: t
    }) : void 0]), s = n ? .blockNumber || o ? .blockNumber;
    return s ? r - s + 1 n : 0 n
}
const fy = {
    "0x0": "reverted",
    "0x1": "success"
};

function Md(e) {
    const t = { ...e,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        contractAddress: e.contractAddress ? e.contractAddress : null,
        cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
        effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
        logs: e.logs ? e.logs.map(n => gt(n)) : null,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? Ke(e.transactionIndex) : null,
        status: e.status ? fy[e.status] : null,
        type: e.type ? Uu[e.type] || e.type : null
    };
    return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)), t
}
const Rd = Fo("transactionReceipt", Md);
async function Ci(e, {
    hash: t
}) {
    const n = await e.request({
        method: "eth_getTransactionReceipt",
        params: [t]
    }, {
        dedupe: !0
    });
    if (!n) throw new Nu({
        hash: t
    });
    return (e.chain ? .formatters ? .transactionReceipt ? .format || Md)(n)
}
async function _d(e, t) {
    const {
        allowFailure: n = !0,
        batchSize: r,
        blockNumber: o,
        blockTag: s,
        multicallAddress: i,
        stateOverride: a
    } = t, c = t.contracts, l = r ? ? (typeof e.batch ? .multicall == "object" && e.batch.multicall.batchSize || 1024);
    let u = i;
    if (!u) {
        if (!e.chain) throw new Error("client chain not configured. multicallAddress is required.");
        u = jn({
            blockNumber: o,
            chain: e.chain,
            contract: "multicall3"
        })
    }
    const f = [
        []
    ];
    let d = 0,
        h = 0;
    for (let b = 0; b < c.length; b++) {
        const {
            abi: w,
            address: v,
            args: C,
            functionName: y
        } = c[b];
        try {
            const A = Mt({
                abi: w,
                args: C,
                functionName: y
            });
            h += (A.length - 2) / 2, l > 0 && h > l && f[d].length > 0 && (d++, h = (A.length - 2) / 2, f[d] = []), f[d] = [...f[d], {
                allowFailure: !0,
                callData: A,
                target: v
            }]
        } catch (A) {
            const E = cr(A, {
                abi: w,
                address: v,
                args: C,
                docsPath: "/docs/contract/multicall",
                functionName: y
            });
            if (!n) throw E;
            f[d] = [...f[d], {
                allowFailure: !0,
                callData: "0x",
                target: v
            }]
        }
    }
    const p = await Promise.allSettled(f.map(b => F(e, Je, "readContract")({
            abi: hi,
            address: u,
            args: [b],
            blockNumber: o,
            blockTag: s,
            functionName: "aggregate3",
            stateOverride: a
        }))),
        m = [];
    for (let b = 0; b < p.length; b++) {
        const w = p[b];
        if (w.status === "rejected") {
            if (!n) throw w.reason;
            for (let C = 0; C < f[b].length; C++) m.push({
                status: "failure",
                error: w.reason,
                result: void 0
            });
            continue
        }
        const v = w.value;
        for (let C = 0; C < v.length; C++) {
            const {
                returnData: y,
                success: A
            } = v[C], {
                callData: E
            } = f[b][C], {
                abi: k,
                address: B,
                functionName: S,
                args: P
            } = c[m.length];
            try {
                if (E === "0x") throw new Po;
                if (!A) throw new wa({
                    data: y
                });
                const R = Bn({
                    abi: k,
                    args: P,
                    data: y,
                    functionName: S
                });
                m.push(n ? {
                    result: R,
                    status: "success"
                } : R)
            } catch (R) {
                const O = cr(R, {
                    abi: k,
                    address: B,
                    args: P,
                    docsPath: "/docs/contract/multicall",
                    functionName: S
                });
                if (!n) throw O;
                m.push({
                    error: O,
                    result: void 0,
                    status: "failure"
                })
            }
        }
    }
    if (m.length !== c.length) throw new j("multicall results mismatch");
    return m
}
const xs = new Map,
    Jc = new Map;
let hy = 0;

function jt(e, t, n) {
    const r = ++hy,
        o = () => xs.get(e) || [],
        s = () => {
            const u = o();
            xs.set(e, u.filter(f => f.id !== r))
        },
        i = () => {
            const u = Jc.get(e);
            o().length === 1 && u && u(), s()
        },
        a = o();
    if (xs.set(e, [...a, {
            id: r,
            fns: t
        }]), a && a.length > 0) return i;
    const c = {};
    for (const u in t) c[u] = (...f) => {
        const d = o();
        if (d.length !== 0)
            for (const h of d) h.fns[u] ? .(...f)
    };
    const l = n(c);
    return typeof l == "function" && Jc.set(e, l), i
}
async function Ei(e) {
    return new Promise(t => setTimeout(t, e))
}

function Sr(e, {
    emitOnBegin: t,
    initialWaitTime: n,
    interval: r
}) {
    let o = !0;
    const s = () => o = !1;
    return (async () => {
        let a;
        t && (a = await e({
            unpoll: s
        }));
        const c = await n ? .(a) ? ? r;
        await Ei(c);
        const l = async () => {
            o && (await e({
                unpoll: s
            }), await Ei(r), l())
        };
        l()
    })(), s
}

function py(e, {
    blockTag: t = "latest",
    emitMissed: n = !1,
    emitOnBegin: r = !1,
    onBlock: o,
    onError: s,
    includeTransactions: i,
    poll: a,
    pollingInterval: c = e.pollingInterval
}) {
    const l = (() => typeof a < "u" ? a : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"))(),
        u = i ? ? !1;
    let f;
    return l ? (() => {
        const p = fe(["watchBlocks", e.uid, t, n, r, u, c]);
        return jt(p, {
            onBlock: o,
            onError: s
        }, m => Sr(async () => {
            try {
                const b = await F(e, Bt, "getBlock")({
                    blockTag: t,
                    includeTransactions: u
                });
                if (b.number && f ? .number) {
                    if (b.number === f.number) return;
                    if (b.number - f.number > 1 && n)
                        for (let w = f ? .number + 1 n; w < b.number; w++) {
                            const v = await F(e, Bt, "getBlock")({
                                blockNumber: w,
                                includeTransactions: u
                            });
                            m.onBlock(v, f), f = v
                        }
                }(!f ? .number || t === "pending" && !b ? .number || b.number && b.number > f.number) && (m.onBlock(b, f), f = b)
            } catch (b) {
                m.onError ? .(b)
            }
        }, {
            emitOnBegin: r,
            interval: c
        }))
    })() : (() => {
        let p = !0,
            m = () => p = !1;
        return (async () => {
            try {
                const b = (() => {
                        if (e.transport.type === "fallback") {
                            const v = e.transport.transports.find(C => C.config.type === "webSocket");
                            return v ? v.value : e.transport
                        }
                        return e.transport
                    })(),
                    {
                        unsubscribe: w
                    } = await b.subscribe({
                        params: ["newHeads"],
                        onData(v) {
                            if (!p) return;
                            const y = (e.chain ? .formatters ? .block ? .format || aa)(v.result);
                            o(y, f), f = y
                        },
                        onError(v) {
                            s ? .(v)
                        }
                    });
                m = w, p || m()
            } catch (b) {
                s ? .(b)
            }
        })(), () => m()
    })()
}

function Dd(e, {
    emitOnBegin: t = !1,
    emitMissed: n = !1,
    onBlockNumber: r,
    onError: o,
    poll: s,
    pollingInterval: i = e.pollingInterval
}) {
    const a = (() => typeof s < "u" ? s : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"))();
    let c;
    return a ? (() => {
        const f = fe(["watchBlockNumber", e.uid, t, n, i]);
        return jt(f, {
            onBlockNumber: r,
            onError: o
        }, d => Sr(async () => {
            try {
                const h = await F(e, jr, "getBlockNumber")({
                    cacheTime: 0
                });
                if (c) {
                    if (h === c) return;
                    if (h - c > 1 && n)
                        for (let p = c + 1 n; p < h; p++) d.onBlockNumber(p, c), c = p
                }(!c || h > c) && (d.onBlockNumber(h, c), c = h)
            } catch (h) {
                d.onError ? .(h)
            }
        }, {
            emitOnBegin: t,
            interval: i
        }))
    })() : (() => {
        const f = fe(["watchBlockNumber", e.uid, t, n]);
        return jt(f, {
            onBlockNumber: r,
            onError: o
        }, d => {
            let h = !0,
                p = () => h = !1;
            return (async () => {
                try {
                    const m = (() => {
                            if (e.transport.type === "fallback") {
                                const w = e.transport.transports.find(v => v.config.type === "webSocket");
                                return w ? w.value : e.transport
                            }
                            return e.transport
                        })(),
                        {
                            unsubscribe: b
                        } = await m.subscribe({
                            params: ["newHeads"],
                            onData(w) {
                                if (!h) return;
                                const v = re(w.result ? .number);
                                d.onBlockNumber(v, c), c = v
                            },
                            onError(w) {
                                d.onError ? .(w)
                            }
                        });
                    p = b, h || p()
                } catch (m) {
                    o ? .(m)
                }
            })(), () => p()
        })
    })()
}
async function Qo(e, {
    filter: t
}) {
    return t.request({
        method: "eth_uninstallFilter",
        params: [t.id]
    })
}

function my(e, {
    address: t,
    args: n,
    batch: r = !0,
    event: o,
    events: s,
    fromBlock: i,
    onError: a,
    onLogs: c,
    poll: l,
    pollingInterval: u = e.pollingInterval,
    strict: f
}) {
    const d = (() => typeof l < "u" ? l : typeof i == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"))(),
        h = f ? ? !1;
    return d ? (() => {
        const b = fe(["watchEvent", t, n, r, e.uid, o, u, i]);
        return jt(b, {
            onLogs: c,
            onError: a
        }, w => {
            let v;
            i !== void 0 && (v = i - 1 n);
            let C, y = !1;
            const A = Sr(async () => {
                if (!y) {
                    try {
                        C = await F(e, Sd, "createEventFilter")({
                            address: t,
                            args: n,
                            event: o,
                            events: s,
                            strict: h,
                            fromBlock: i
                        })
                    } catch {}
                    y = !0;
                    return
                }
                try {
                    let E;
                    if (C) E = await F(e, Ho, "getFilterChanges")({
                        filter: C
                    });
                    else {
                        const k = await F(e, jr, "getBlockNumber")({});
                        v && v !== k ? E = await F(e, ka, "getLogs")({
                            address: t,
                            args: n,
                            event: o,
                            events: s,
                            fromBlock: v + 1 n,
                            toBlock: k
                        }) : E = [], v = k
                    }
                    if (E.length === 0) return;
                    if (r) w.onLogs(E);
                    else
                        for (const k of E) w.onLogs([k])
                } catch (E) {
                    C && E instanceof Qt && (y = !1), w.onError ? .(E)
                }
            }, {
                emitOnBegin: !0,
                interval: u
            });
            return async () => {
                C && await F(e, Qo, "uninstallFilter")({
                    filter: C
                }), A()
            }
        })
    })() : (() => {
        let b = !0,
            w = () => b = !1;
        return (async () => {
            try {
                const v = (() => {
                        if (e.transport.type === "fallback") {
                            const E = e.transport.transports.find(k => k.config.type === "webSocket");
                            return E ? E.value : e.transport
                        }
                        return e.transport
                    })(),
                    C = s ? ? (o ? [o] : void 0);
                let y = [];
                C && (y = [C.flatMap(k => Br({
                    abi: [k],
                    eventName: k.name,
                    args: n
                }))], o && (y = y[0]));
                const {
                    unsubscribe: A
                } = await v.subscribe({
                    params: ["logs", {
                        address: t,
                        topics: y
                    }],
                    onData(E) {
                        if (!b) return;
                        const k = E.result;
                        try {
                            const {
                                eventName: B,
                                args: S
                            } = xa({
                                abi: C ? ? [],
                                data: k.data,
                                topics: k.topics,
                                strict: h
                            }), P = gt(k, {
                                args: S,
                                eventName: B
                            });
                            c([P])
                        } catch (B) {
                            let S, P;
                            if (B instanceof Qn || B instanceof To) {
                                if (f) return;
                                S = B.abiItem.name, P = B.abiItem.inputs ? .some(O => !("name" in O && O.name))
                            }
                            const R = gt(k, {
                                args: P ? [] : {},
                                eventName: S
                            });
                            c([R])
                        }
                    },
                    onError(E) {
                        a ? .(E)
                    }
                });
                w = A, b || w()
            } catch (v) {
                a ? .(v)
            }
        })(), () => w()
    })()
}

function gy(e, {
    batch: t = !0,
    onError: n,
    onTransactions: r,
    poll: o,
    pollingInterval: s = e.pollingInterval
}) {
    return (typeof o < "u" ? o : e.transport.type !== "webSocket") ? (() => {
        const l = fe(["watchPendingTransactions", e.uid, t, s]);
        return jt(l, {
            onTransactions: r,
            onError: n
        }, u => {
            let f;
            const d = Sr(async () => {
                try {
                    if (!f) try {
                        f = await F(e, Pd, "createPendingTransactionFilter")({});
                        return
                    } catch (p) {
                        throw d(), p
                    }
                    const h = await F(e, Ho, "getFilterChanges")({
                        filter: f
                    });
                    if (h.length === 0) return;
                    if (t) u.onTransactions(h);
                    else
                        for (const p of h) u.onTransactions([p])
                } catch (h) {
                    u.onError ? .(h)
                }
            }, {
                emitOnBegin: !0,
                interval: s
            });
            return async () => {
                f && await F(e, Qo, "uninstallFilter")({
                    filter: f
                }), d()
            }
        })
    })() : (() => {
        let l = !0,
            u = () => l = !1;
        return (async () => {
            try {
                const {
                    unsubscribe: f
                } = await e.transport.subscribe({
                    params: ["newPendingTransactions"],
                    onData(d) {
                        if (!l) return;
                        const h = d.result;
                        r([h])
                    },
                    onError(d) {
                        n ? .(d)
                    }
                });
                u = f, l || u()
            } catch (f) {
                n ? .(f)
            }
        })(), () => u()
    })()
}
async function by(e) {
    return e.account ? .type === "local" ? [e.account.address] : (await e.request({
        method: "eth_accounts"
    }, {
        dedupe: !0
    })).map(n => vr(n))
}
async function yy(e) {
    return await e.request({
        method: "wallet_getPermissions"
    }, {
        dedupe: !0
    })
}
const Lr = new Zi(8192);

function wy(e, {
    enabled: t = !0,
    id: n
}) {
    if (!t || !n) return e();
    if (Lr.get(n)) return Lr.get(n);
    const r = e().finally(() => Lr.delete(n));
    return Lr.set(n, r), r
}

function lo(e, {
    delay: t = 100,
    retryCount: n = 2,
    shouldRetry: r = () => !0
} = {}) {
    return new Promise((o, s) => {
        const i = async ({
            count: a = 0
        } = {}) => {
            const c = async ({
                error: l
            }) => {
                const u = typeof t == "function" ? t({
                    count: a,
                    error: l
                }) : t;
                u && await Ei(u), i({
                    count: a + 1
                })
            };
            try {
                const l = await e();
                o(l)
            } catch (l) {
                if (a < n && await r({
                        count: a,
                        error: l
                    })) return c({
                    error: l
                });
                s(l)
            }
        };
        i()
    })
}

function vy(e, t = {}) {
    return async (n, r = {}) => {
        const {
            dedupe: o = !1,
            retryDelay: s = 150,
            retryCount: i = 3,
            uid: a
        } = { ...t,
            ...r
        }, c = o ? xe(fn(`${a}.${fe(n)}`)) : void 0;
        return wy(() => lo(async () => {
            try {
                return await e(n)
            } catch (l) {
                const u = l;
                switch (u.code) {
                    case Gn.code:
                        throw new Gn(u);
                    case Kn.code:
                        throw new Kn(u);
                    case Jn.code:
                        throw new Jn(u);
                    case Zn.code:
                        throw new Zn(u);
                    case Ht.code:
                        throw new Ht(u);
                    case Qt.code:
                        throw new Qt(u);
                    case Yn.code:
                        throw new Yn(u);
                    case kt.code:
                        throw new kt(u);
                    case Xn.code:
                        throw new Xn(u);
                    case er.code:
                        throw new er(u);
                    case pn.code:
                        throw new pn(u);
                    case tr.code:
                        throw new tr(u);
                    case oe.code:
                        throw new oe(u);
                    case nr.code:
                        throw new nr(u);
                    case rr.code:
                        throw new rr(u);
                    case or.code:
                        throw new or(u);
                    case sr.code:
                        throw new sr(u);
                    case qe.code:
                        throw new qe(u);
                    case 5e3:
                        throw new oe(u);
                    default:
                        throw l instanceof j ? l : new z0(u)
                }
            }
        }, {
            delay: ({
                count: l,
                error: u
            }) => {
                if (u && u instanceof Wt) {
                    const f = u ? .headers ? .get("Retry-After");
                    if (f ? .match(/\d/)) return Number.parseInt(f) * 1e3
                }
                return ~~(1 << l) * s
            },
            retryCount: i,
            shouldRetry: ({
                error: l
            }) => Cy(l)
        }), {
            enabled: o,
            id: c
        })
    }
}

function Cy(e) {
    return "code" in e && typeof e.code == "number" ? e.code === -1 || e.code === pn.code || e.code === Ht.code : e instanceof Wt && e.status ? e.status === 403 || e.status === 408 || e.status === 413 || e.status === 429 || e.status === 500 || e.status === 502 || e.status === 503 || e.status === 504 : !0
}
class Ey extends j {
    constructor({
        callbackSelector: t,
        cause: n,
        data: r,
        extraData: o,
        sender: s,
        urls: i
    }) {
        super(n.shortMessage || "An error occurred while fetching for an offchain result.", {
            cause: n,
            metaMessages: [...n.metaMessages || [], n.metaMessages ? .length ? "" : [], "Offchain Gateway Call:", i && ["  Gateway URL(s):", ...i.map(a => `    ${yr(a)}`)], `  Sender: ${s}`, `  Data: ${r}`, `  Callback selector: ${t}`, `  Extra data: ${o}`].flat()
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "OffchainLookupError"
        })
    }
}
class Ay extends j {
    constructor({
        result: t,
        url: n
    }) {
        super("Offchain gateway response is malformed. Response data must be a hex value.", {
            metaMessages: [`Gateway URL: ${yr(n)}`, `Response: ${fe(t)}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "OffchainLookupResponseMalformedError"
        })
    }
}
class xy extends j {
    constructor({
        sender: t,
        to: n
    }) {
        super("Reverted sender address does not match target contract address (`to`).", {
            metaMessages: [`Contract address: ${n}`, `OffchainLookup sender address: ${t}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "OffchainLookupSenderMismatchError"
        })
    }
}

function Sa(e, t) {
    if (!le(e, {
            strict: !1
        })) throw new ve({
        address: e
    });
    if (!le(t, {
            strict: !1
        })) throw new ve({
        address: t
    });
    return e.toLowerCase() === t.toLowerCase()
}
const Iy = "0x556f1830",
    Nd = {
        name: "OffchainLookup",
        type: "error",
        inputs: [{
            name: "sender",
            type: "address"
        }, {
            name: "urls",
            type: "string[]"
        }, {
            name: "callData",
            type: "bytes"
        }, {
            name: "callbackFunction",
            type: "bytes4"
        }, {
            name: "extraData",
            type: "bytes"
        }]
    };
async function ky(e, {
    blockNumber: t,
    blockTag: n,
    data: r,
    to: o
}) {
    const {
        args: s
    } = wd({
        data: r,
        abi: [Nd]
    }), [i, a, c, l, u] = s, {
        ccipRead: f
    } = e, d = f && typeof f ? .request == "function" ? f.request : Fd;
    try {
        if (!Sa(o, i)) throw new xy({
            sender: i,
            to: o
        });
        const h = await d({
                data: c,
                sender: i,
                urls: a
            }),
            {
                data: p
            } = await kr(e, {
                blockNumber: t,
                blockTag: n,
                data: st([l, Yt([{
                    type: "bytes"
                }, {
                    type: "bytes"
                }], [h, u])]),
                to: o
            });
        return p
    } catch (h) {
        throw new Ey({
            callbackSelector: l,
            cause: h,
            data: r,
            extraData: u,
            sender: i,
            urls: a
        })
    }
}
async function Fd({
    data: e,
    sender: t,
    urls: n
}) {
    let r = new Error("An unknown error occurred.");
    for (let o = 0; o < n.length; o++) {
        const s = n[o],
            i = s.includes("{data}") ? "GET" : "POST",
            a = i === "POST" ? {
                data: e,
                sender: t
            } : void 0;
        try {
            const c = await fetch(s.replace("{sender}", t).replace("{data}", e), {
                body: JSON.stringify(a),
                method: i
            });
            let l;
            if (c.headers.get("Content-Type") ? .startsWith("application/json") ? l = (await c.json()).data : l = await c.text(), !c.ok) {
                r = new Wt({
                    body: a,
                    details: l ? .error ? fe(l.error) : c.statusText,
                    headers: c.headers,
                    status: c.status,
                    url: s
                });
                continue
            }
            if (!Re(l)) {
                r = new Ay({
                    result: l,
                    url: s
                });
                continue
            }
            return l
        } catch (c) {
            r = new Wt({
                body: a,
                details: c.message,
                url: s
            })
        }
    }
    throw r
}
const By = Object.freeze(Object.defineProperty({
    __proto__: null,
    ccipRequest: Fd,
    offchainLookup: ky,
    offchainLookupAbiItem: Nd,
    offchainLookupSignature: Iy
}, Symbol.toStringTag, {
    value: "Module"
}));

function Ie(e) {
    return {
        formatters: void 0,
        fees: void 0,
        serializers: void 0,
        ...e
    }
}
const jy = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
    Sy = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;

function Pa(e, {
    errorInstance: t = new Error("timed out"),
    timeout: n,
    signal: r
}) {
    return new Promise((o, s) => {
        (async () => {
            let i;
            try {
                const a = new AbortController;
                n > 0 && (i = setTimeout(() => {
                    r ? a.abort() : s(t)
                }, n)), o(await e({
                    signal: a ? .signal || null
                }))
            } catch (a) {
                a ? .name === "AbortError" && s(t), s(a)
            } finally {
                clearTimeout(i)
            }
        })()
    })
}

function Py() {
    return {
        current: 0,
        take() {
            return this.current++
        },
        reset() {
            this.current = 0
        }
    }
}
const Zc = Py();

function Ty(e, t = {}) {
    return {
        async request(n) {
            const {
                body: r,
                onRequest: o = t.onRequest,
                onResponse: s = t.onResponse,
                timeout: i = t.timeout ? ? 1e4
            } = n, a = { ...t.fetchOptions ? ? {},
                ...n.fetchOptions ? ? {}
            }, {
                headers: c,
                method: l,
                signal: u
            } = a;
            try {
                const f = await Pa(async ({
                    signal: h
                }) => {
                    const p = { ...a,
                            body: Array.isArray(r) ? fe(r.map(w => ({
                                jsonrpc: "2.0",
                                id: w.id ? ? Zc.take(),
                                ...w
                            }))) : fe({
                                jsonrpc: "2.0",
                                id: r.id ? ? Zc.take(),
                                ...r
                            }),
                            headers: {
                                "Content-Type": "application/json",
                                ...c
                            },
                            method: l || "POST",
                            signal: u || (i > 0 ? h : null)
                        },
                        m = new Request(e, p);
                    return o && await o(m), await fetch(e, p)
                }, {
                    errorInstance: new Rc({
                        body: r,
                        url: e
                    }),
                    timeout: i,
                    signal: !0
                });
                s && await s(f);
                let d;
                if (f.headers.get("Content-Type") ? .startsWith("application/json") ? d = await f.json() : (d = await f.text(), d = JSON.parse(d || "{}")), !f.ok) throw new Wt({
                    body: r,
                    details: fe(d.error) || f.statusText,
                    headers: f.headers,
                    status: f.status,
                    url: e
                });
                return d
            } catch (f) {
                throw f instanceof Wt || f instanceof Rc ? f : new Wt({
                    body: r,
                    cause: f,
                    url: e
                })
            }
        }
    }
}

function Oy(e) {
    const {
        domain: t = {},
        message: n,
        primaryType: r
    } = e, o = {
        EIP712Domain: Hd({
            domain: t
        }),
        ...e.types
    };
    qd({
        domain: t,
        message: n,
        primaryType: r,
        types: o
    });
    const s = ["0x1901"];
    return t && s.push(My({
        domain: t,
        types: o
    })), r !== "EIP712Domain" && s.push(Ld({
        data: n,
        primaryType: r,
        types: o
    })), xe(st(s))
}

function My({
    domain: e,
    types: t
}) {
    return Ld({
        data: e,
        primaryType: "EIP712Domain",
        types: t
    })
}

function Ld({
    data: e,
    primaryType: t,
    types: n
}) {
    const r = Ud({
        data: e,
        primaryType: t,
        types: n
    });
    return xe(r)
}

function Ud({
    data: e,
    primaryType: t,
    types: n
}) {
    const r = [{
            type: "bytes32"
        }],
        o = [Ry({
            primaryType: t,
            types: n
        })];
    for (const s of n[t]) {
        const [i, a] = Wd({
            types: n,
            name: s.name,
            type: s.type,
            value: e[s.name]
        });
        r.push(i), o.push(a)
    }
    return Yt(r, o)
}

function Ry({
    primaryType: e,
    types: t
}) {
    const n = L(_y({
        primaryType: e,
        types: t
    }));
    return xe(n)
}

function _y({
    primaryType: e,
    types: t
}) {
    let n = "";
    const r = zd({
        primaryType: e,
        types: t
    });
    r.delete(e);
    const o = [e, ...Array.from(r).sort()];
    for (const s of o) n += `${s}(${t[s].map(({name:i,type:a})=>`
    $ {
        a
    }
    $ {
        i
    }
    `).join(",")})`;
    return n
}

function zd({
    primaryType: e,
    types: t
}, n = new Set) {
    const o = e.match(/^\w*/u) ? .[0];
    if (n.has(o) || t[o] === void 0) return n;
    n.add(o);
    for (const s of t[o]) zd({
        primaryType: s.type,
        types: t
    }, n);
    return n
}

function Wd({
    types: e,
    name: t,
    type: n,
    value: r
}) {
    if (e[n] !== void 0) return [{
        type: "bytes32"
    }, xe(Ud({
        data: r,
        primaryType: n,
        types: e
    }))];
    if (n === "bytes") return r = `0x${(r.length%2?"0":"")+r.slice(2)}`, [{
        type: "bytes32"
    }, xe(r)];
    if (n === "string") return [{
        type: "bytes32"
    }, xe(L(r))];
    if (n.lastIndexOf("]") === n.length - 1) {
        const o = n.slice(0, n.lastIndexOf("[")),
            s = r.map(i => Wd({
                name: t,
                type: o,
                types: e,
                value: i
            }));
        return [{
            type: "bytes32"
        }, xe(Yt(s.map(([i]) => i), s.map(([, i]) => i)))]
    }
    return [{
        type: n
    }, r]
}

function Dy(e) {
    const {
        domain: t,
        message: n,
        primaryType: r,
        types: o
    } = e, s = (c, l) => {
        const u = { ...l
        };
        for (const f of c) {
            const {
                name: d,
                type: h
            } = f;
            h === "address" && (u[d] = u[d].toLowerCase())
        }
        return u
    }, i = (() => o.EIP712Domain ? t ? s(o.EIP712Domain, t) : {} : {})(), a = (() => {
        if (r !== "EIP712Domain") return s(o[r], n)
    })();
    return fe({
        domain: i,
        message: a,
        primaryType: r,
        types: o
    })
}

function qd(e) {
    const {
        domain: t,
        message: n,
        primaryType: r,
        types: o
    } = e, s = (i, a) => {
        for (const c of i) {
            const {
                name: l,
                type: u
            } = c, f = a[l], d = u.match(Sy);
            if (d && (typeof f == "number" || typeof f == "bigint")) {
                const [m, b, w] = d;
                W(f, {
                    signed: b === "int",
                    size: Number.parseInt(w) / 8
                })
            }
            if (u === "address" && typeof f == "string" && !le(f)) throw new ve({
                address: f
            });
            const h = u.match(jy);
            if (h) {
                const [m, b] = h;
                if (b && ae(f) !== Number.parseInt(b)) throw new $m({
                    expectedSize: Number.parseInt(b),
                    givenSize: ae(f)
                })
            }
            const p = o[u];
            p && s(p, f)
        }
    };
    o.EIP712Domain && t && s(o.EIP712Domain, t), r !== "EIP712Domain" && s(o[r], n)
}

function Hd({
    domain: e
}) {
    return [typeof e ? .name == "string" && {
        name: "name",
        type: "string"
    }, e ? .version && {
        name: "version",
        type: "string"
    }, typeof e ? .chainId == "number" && {
        name: "chainId",
        type: "uint256"
    }, e ? .verifyingContract && {
        name: "verifyingContract",
        type: "address"
    }, e ? .salt && {
        name: "salt",
        type: "bytes32"
    }].filter(Boolean)
}

function Ny(e) {
    const t = xe(`0x${e.substring(4)}`).substring(26);
    return vr(`0x${t}`)
}

function Vt(e, t = "hex") {
    const n = Qd(e),
        r = ha(new Uint8Array(n.length));
    return n.encode(r), t === "hex" ? ue(r.bytes) : r.bytes
}

function Qd(e) {
    return Array.isArray(e) ? Fy(e.map(t => Qd(t))) : Ly(e)
}

function Fy(e) {
    const t = e.reduce((o, s) => o + s.length, 0),
        n = Vd(t);
    return {
        length: (() => t <= 55 ? 1 + t : 1 + n + t)(),
        encode(o) {
            t <= 55 ? o.pushByte(192 + t) : (o.pushByte(192 + 55 + n), n === 1 ? o.pushUint8(t) : n === 2 ? o.pushUint16(t) : n === 3 ? o.pushUint24(t) : o.pushUint32(t));
            for (const {
                    encode: s
                } of e) s(o)
        }
    }
}

function Ly(e) {
    const t = typeof e == "string" ? We(e) : e,
        n = Vd(t.length);
    return {
        length: (() => t.length === 1 && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + n + t.length)(),
        encode(o) {
            t.length === 1 && t[0] < 128 ? o.pushBytes(t) : t.length <= 55 ? (o.pushByte(128 + t.length), o.pushBytes(t)) : (o.pushByte(128 + 55 + n), n === 1 ? o.pushUint8(t.length) : n === 2 ? o.pushUint16(t.length) : n === 3 ? o.pushUint24(t.length) : o.pushUint32(t.length), o.pushBytes(t))
        }
    }
}

function Vd(e) {
    if (e < 2 ** 8) return 1;
    if (e < 2 ** 16) return 2;
    if (e < 2 ** 24) return 3;
    if (e < 2 ** 32) return 4;
    throw new j("Length is too large.")
}
async function Uy({
    hash: e,
    signature: t
}) {
    const n = Re(e) ? e : L(e),
        {
            secp256k1: r
        } = await _(() => Promise.resolve().then(() => Xw), void 0);
    return `0x${(()=>{if(typeof t=="object"&&"r"in t&&"s"in t){const{r:l,s:u,v:f,yParity:d}=t,h=Number(d??f),p=Yc(h);return new r.Signature(re(l),re(u)).addRecoveryBit(p)}const i=Re(t)?t:L(t),a=Ke(`
    0x $ {
        i.slice(130)
    }
    `),c=Yc(a);return r.Signature.fromCompact(i.substring(2,130)).addRecoveryBit(c)})().recoverPublicKey(n.substring(2)).toHex(!1)}`
}

function Yc(e) {
    if (e === 0 || e === 1) return e;
    if (e === 27) return 0;
    if (e === 28) return 1;
    throw new Error("Invalid yParityOrV value")
}
async function zy({
    hash: e,
    signature: t
}) {
    return Ny(await Uy({
        hash: e,
        signature: t
    }))
}
const Wy = `Ethereum Signed Message:
`;

function qy(e) {
    const t = (() => typeof e == "string" ? fn(e) : typeof e.raw == "string" ? e.raw : ue(e.raw))(),
        n = fn(`${Wy}${ae(t)}`);
    return st([n, t])
}

function $d(e, t) {
    return xe(qy(e), t)
}
const Gd = "0x6492649264926492649264926492649264926492649264926492649264926492";

function Hy(e) {
    return Mu(e, -32) === Gd
}

function Qy(e) {
    const {
        address: t,
        data: n,
        signature: r
    } = e;
    return bt([Yt([{
        type: "address"
    }, {
        type: "bytes"
    }, {
        type: "bytes"
    }], [t, n, r]), Gd])
}

function Vy(e) {
    const {
        blobVersionedHashes: t
    } = e;
    if (t) {
        if (t.length === 0) throw new Zu;
        for (const n of t) {
            const r = ae(n),
                o = Ke(Vn(n, 0, 1));
            if (r !== 32) throw new lg({
                hash: n,
                size: r
            });
            if (o !== Ju) throw new ug({
                hash: n,
                version: o
            })
        }
    }
    Kd(e)
}

function Kd(e) {
    const {
        chainId: t,
        maxPriorityFeePerGas: n,
        maxFeePerGas: r,
        to: o
    } = e;
    if (t <= 0) throw new _o({
        chainId: t
    });
    if (o && !le(o)) throw new ve({
        address: o
    });
    if (r && r > 2 n ** 256 n - 1 n) throw new qt({
        maxFeePerGas: r
    });
    if (n && r && n > r) throw new $n({
        maxFeePerGas: r,
        maxPriorityFeePerGas: n
    })
}

function $y(e) {
    const {
        chainId: t,
        maxPriorityFeePerGas: n,
        gasPrice: r,
        maxFeePerGas: o,
        to: s
    } = e;
    if (t <= 0) throw new _o({
        chainId: t
    });
    if (s && !le(s)) throw new ve({
        address: s
    });
    if (n || o) throw new j("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
    if (r && r > 2 n ** 256 n - 1 n) throw new qt({
        maxFeePerGas: r
    })
}

function Gy(e) {
    const {
        chainId: t,
        maxPriorityFeePerGas: n,
        gasPrice: r,
        maxFeePerGas: o,
        to: s,
        accessList: i
    } = e;
    if (s && !le(s)) throw new ve({
        address: s
    });
    if (typeof t < "u" && t <= 0) throw new _o({
        chainId: t
    });
    if (n || o) throw new j("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
    if (r && r > 2 n ** 256 n - 1 n) throw new qt({
        maxFeePerGas: r
    });
    if (i) throw new j("`accessList` is not a valid Legacy Transaction attribute.")
}

function Ta(e) {
    if (!e || e.length === 0) return [];
    const t = [];
    for (let n = 0; n < e.length; n++) {
        const {
            address: r,
            storageKeys: o
        } = e[n];
        for (let s = 0; s < o.length; s++)
            if (o[s].length - 2 !== 64) throw new F0({
                storageKey: o[s]
            });
        if (!le(r, {
                strict: !1
            })) throw new ve({
            address: r
        });
        t.push([r, o])
    }
    return t
}

function Jd(e, t) {
    const n = ed(e);
    return n === "eip1559" ? Jy(e, t) : n === "eip2930" ? Zy(e, t) : n === "eip4844" ? Ky(e, t) : Yy(e, t)
}

function Ky(e, t) {
    const {
        chainId: n,
        gas: r,
        nonce: o,
        to: s,
        value: i,
        maxFeePerBlobGas: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: l,
        accessList: u,
        data: f
    } = e;
    Vy(e);
    let d = e.blobVersionedHashes,
        h = e.sidecars;
    if (e.blobs && (typeof d > "u" || typeof h > "u")) {
        const C = typeof e.blobs[0] == "string" ? e.blobs : e.blobs.map(E => ue(E)),
            y = e.kzg,
            A = ua({
                blobs: C,
                kzg: y
            });
        if (typeof d > "u" && (d = $u({
                commitments: A
            })), typeof h > "u") {
            const E = da({
                blobs: C,
                commitments: A,
                kzg: y
            });
            h = Xu({
                blobs: C,
                commitments: A,
                proofs: E
            })
        }
    }
    const p = Ta(u),
        m = [L(n), o ? L(o) : "0x", l ? L(l) : "0x", c ? L(c) : "0x", r ? L(r) : "0x", s ? ? "0x", i ? L(i) : "0x", f ? ? "0x", p, a ? L(a) : "0x", d ? ? [], ...Oa(e, t)],
        b = [],
        w = [],
        v = [];
    if (h)
        for (let C = 0; C < h.length; C++) {
            const {
                blob: y,
                commitment: A,
                proof: E
            } = h[C];
            b.push(y), w.push(A), v.push(E)
        }
    return bt(["0x03", Vt(h ? [m, b, w, v] : m)])
}

function Jy(e, t) {
    const {
        chainId: n,
        gas: r,
        nonce: o,
        to: s,
        value: i,
        maxFeePerGas: a,
        maxPriorityFeePerGas: c,
        accessList: l,
        data: u
    } = e;
    Kd(e);
    const f = Ta(l),
        d = [L(n), o ? L(o) : "0x", c ? L(c) : "0x", a ? L(a) : "0x", r ? L(r) : "0x", s ? ? "0x", i ? L(i) : "0x", u ? ? "0x", f, ...Oa(e, t)];
    return bt(["0x02", Vt(d)])
}

function Zy(e, t) {
    const {
        chainId: n,
        gas: r,
        data: o,
        nonce: s,
        to: i,
        value: a,
        accessList: c,
        gasPrice: l
    } = e;
    $y(e);
    const u = Ta(c),
        f = [L(n), s ? L(s) : "0x", l ? L(l) : "0x", r ? L(r) : "0x", i ? ? "0x", a ? L(a) : "0x", o ? ? "0x", u, ...Oa(e, t)];
    return bt(["0x01", Vt(f)])
}

function Yy(e, t) {
    const {
        chainId: n = 0,
        gas: r,
        data: o,
        nonce: s,
        to: i,
        value: a,
        gasPrice: c
    } = e;
    Gy(e);
    let l = [s ? L(s) : "0x", c ? L(c) : "0x", r ? L(r) : "0x", i ? ? "0x", a ? L(a) : "0x", o ? ? "0x"];
    if (t) {
        const u = (() => {
                if (t.v >= 35 n) return (t.v - 35 n) / 2 n > 0 ? t.v : 27 n + (t.v === 35 n ? 0 n : 1 n);
                if (n > 0) return BigInt(n * 2) + BigInt(35 n + t.v - 27 n);
                const h = 27 n + (t.v === 27 n ? 0 n : 1 n);
                if (t.v !== h) throw new D0({
                    v: t.v
                });
                return h
            })(),
            f = ot(t.r),
            d = ot(t.s);
        l = [...l, L(u), f === "0x00" ? "0x" : f, d === "0x00" ? "0x" : d]
    } else n > 0 && (l = [...l, L(n), "0x", "0x"]);
    return Vt(l)
}

function Oa(e, t) {
    const n = t ? ? e,
        {
            v: r,
            yParity: o
        } = n;
    if (typeof n.r > "u") return [];
    if (typeof n.s > "u") return [];
    if (typeof r > "u" && typeof o > "u") return [];
    const s = ot(n.r),
        i = ot(n.s);
    return [(() => typeof o == "number" ? o ? L(1) : "0x" : r === 0 n ? "0x" : r === 1 n ? L(1) : r === 27 n ? "0x" : L(1))(), s === "0x00" ? "0x" : s, i === "0x00" ? "0x" : i]
}

function _x(e, t) {
    let [n, r = "0"] = e.split(".");
    const o = n.startsWith("-");
    if (o && (n = n.slice(1)), r = r.replace(/(0+)$/, ""), t === 0) Math.round(+`.${r}`) === 1 && (n = `${BigInt(n)+1n}`), r = "";
    else if (r.length > t) {
        const [s, i, a] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)], c = Math.round(+`${i}.${a}`);
        c > 9 ? r = `${BigInt(s)+BigInt(1)}0`.padStart(s.length + 1, "0") : r = `${s}${c}`, r.length > t && (r = r.slice(1), n = `${BigInt(n)+1n}`), r = r.slice(0, t)
    } else r = r.padEnd(t, "0");
    return BigInt(`${o?"-":""}${n}${r}`)
}

function Xy(e) {
    return e.map(t => ({ ...t,
        value: BigInt(t.value)
    }))
}

function ew(e) {
    return { ...e,
        balance: e.balance ? BigInt(e.balance) : void 0,
        nonce: e.nonce ? Ke(e.nonce) : void 0,
        storageProof: e.storageProof ? Xy(e.storageProof) : void 0
    }
}
async function tw(e, {
    address: t,
    blockNumber: n,
    blockTag: r,
    storageKeys: o
}) {
    const s = r ? ? "latest",
        i = n !== void 0 ? W(n) : void 0,
        a = await e.request({
            method: "eth_getProof",
            params: [t, o, i || s]
        });
    return ew(a)
}
async function nw(e, {
    confirmations: t = 1,
    hash: n,
    onReplaced: r,
    pollingInterval: o = e.pollingInterval,
    retryCount: s = 6,
    retryDelay: i = ({
        count: c
    }) => ~~(1 << c) * 200,
    timeout: a
}) {
    const c = fe(["waitForTransactionReceipt", e.uid, n]);
    let l = 0,
        u, f, d, h = !1;
    return new Promise((p, m) => {
        a && setTimeout(() => m(new Mc({
            hash: n
        })), a);
        const b = jt(c, {
            onReplaced: r,
            resolve: p,
            reject: m
        }, w => {
            const v = F(e, Dd, "watchBlockNumber")({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: o,
                async onBlockNumber(C) {
                    const y = E => {
                        v(), E(), b()
                    };
                    let A = C;
                    if (!h) {
                        l > s && y(() => w.reject(new Mc({
                            hash: n
                        })));
                        try {
                            if (d) {
                                if (t > 1 && (!d.blockNumber || A - d.blockNumber + 1 n < t)) return;
                                y(() => w.resolve(d));
                                return
                            }
                            if (u || (h = !0, await lo(async () => {
                                    u = await F(e, ja, "getTransaction")({
                                        hash: n
                                    }), u.blockNumber && (A = u.blockNumber)
                                }, {
                                    delay: i,
                                    retryCount: s
                                }), h = !1), d = await F(e, Ci, "getTransactionReceipt")({
                                    hash: n
                                }), t > 1 && (!d.blockNumber || A - d.blockNumber + 1 n < t)) return;
                            y(() => w.resolve(d))
                        } catch (E) {
                            if (E instanceof Du || E instanceof Nu) {
                                if (!u) {
                                    h = !1;
                                    return
                                }
                                try {
                                    f = u, h = !0;
                                    const k = await lo(() => F(e, Bt, "getBlock")({
                                        blockNumber: A,
                                        includeTransactions: !0
                                    }), {
                                        delay: i,
                                        retryCount: s,
                                        shouldRetry: ({
                                            error: P
                                        }) => P instanceof Lu
                                    });
                                    h = !1;
                                    const B = k.transactions.find(({
                                        from: P,
                                        nonce: R
                                    }) => P === f.from && R === f.nonce);
                                    if (!B || (d = await F(e, Ci, "getTransactionReceipt")({
                                            hash: B.hash
                                        }), t > 1 && (!d.blockNumber || A - d.blockNumber + 1 n < t))) return;
                                    let S = "replaced";
                                    B.to === f.to && B.value === f.value ? S = "repriced" : B.from === B.to && B.value === 0 n && (S = "cancelled"), y(() => {
                                        w.onReplaced ? .({
                                            reason: S,
                                            replacedTransaction: f,
                                            transaction: B,
                                            transactionReceipt: d
                                        }), w.resolve(d)
                                    })
                                } catch (k) {
                                    y(() => w.reject(k))
                                }
                            } else y(() => w.reject(E))
                        } finally {
                            l++
                        }
                    }
                }
            })
        })
    })
}
async function rw(e) {
    return (await e.request({
        method: "eth_requestAccounts"
    }, {
        dedupe: !0,
        retryCount: 0
    })).map(n => we(n))
}
async function ow(e, t) {
    return e.request({
        method: "wallet_requestPermissions",
        params: [t]
    }, {
        retryCount: 0
    })
}
async function sw(e, t) {
    const {
        account: n = e.account,
        chain: r = e.chain,
        ...o
    } = t;
    if (!n) throw new Ro({
        docsPath: "/docs/actions/wallet/signTransaction"
    });
    const s = _e(n);
    Ar({
        account: s,
        ...t
    });
    const i = await F(e, xr, "getChainId")({});
    r !== null && _u({
        currentChainId: i,
        chain: r
    });
    const c = (r ? .formatters || e.chain ? .formatters) ? .transactionRequest ? .format || Er;
    return s.type === "local" ? s.signTransaction({ ...o,
        chainId: i
    }, {
        serializer: e.chain ? .serializers ? .transaction
    }) : await e.request({
        method: "eth_signTransaction",
        params: [{ ...c(o),
            chainId: W(i),
            from: s.address
        }]
    }, {
        retryCount: 0
    })
}
async function Zd(e, {
    account: t = e.account,
    message: n
}) {
    if (!t) throw new Ro({
        docsPath: "/docs/actions/wallet/signMessage"
    });
    const r = _e(t);
    if (r.type === "local") return r.signMessage({
        message: n
    });
    const o = (() => typeof n == "string" ? fn(n) : n.raw instanceof Uint8Array ? L(n.raw) : n.raw)();
    return e.request({
        method: "personal_sign",
        params: [o, r.address]
    }, {
        retryCount: 0
    })
}
async function iw(e, t) {
    const {
        account: n = e.account,
        domain: r,
        message: o,
        primaryType: s
    } = t;
    if (!n) throw new Ro({
        docsPath: "/docs/actions/wallet/signTypedData"
    });
    const i = _e(n),
        a = {
            EIP712Domain: Hd({
                domain: r
            }),
            ...t.types
        };
    if (qd({
            domain: r,
            message: o,
            primaryType: s,
            types: a
        }), i.type === "local") return i.signTypedData({
        domain: r,
        message: o,
        primaryType: s,
        types: a
    });
    const c = Dy({
        domain: r,
        message: o,
        primaryType: s,
        types: a
    });
    return e.request({
        method: "eth_signTypedData_v4",
        params: [i.address, c]
    }, {
        retryCount: 0
    })
}
async function Yd(e, t) {
    const {
        abi: n,
        address: r,
        args: o,
        dataSuffix: s,
        functionName: i,
        ...a
    } = t, c = a.account ? _e(a.account) : e.account, l = Mt({
        abi: n,
        args: o,
        functionName: i
    });
    try {
        const {
            data: u
        } = await F(e, kr, "call")({
            batch: !1,
            data: `${l}${s?s.replace("0x",""):""}`,
            to: r,
            ...a,
            account: c
        }), f = Bn({
            abi: n,
            args: o,
            functionName: i,
            data: u || "0x"
        }), d = n.filter(h => "name" in h && h.name === t.functionName);
        return {
            result: f,
            request: {
                abi: d,
                address: r,
                args: o,
                dataSuffix: s,
                functionName: i,
                ...a,
                account: c
            }
        }
    } catch (u) {
        throw cr(u, {
            abi: n,
            address: r,
            args: o,
            docsPath: "/docs/contract/simulateContract",
            functionName: i,
            sender: c ? .address
        })
    }
}
async function aw(e, {
    id: t
}) {
    await e.request({
        method: "wallet_switchEthereumChain",
        params: [{
            chainId: W(t)
        }]
    }, {
        retryCount: 0
    })
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Xd = BigInt(0),
    Vo = BigInt(1),
    cw = BigInt(2);

function $t(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array"
}

function it(e) {
    if (!$t(e)) throw new Error("Uint8Array expected")
}
const lw = Array.from({
    length: 256
}, (e, t) => t.toString(16).padStart(2, "0"));

function mn(e) {
    it(e);
    let t = "";
    for (let n = 0; n < e.length; n++) t += lw[e[n]];
    return t
}

function ef(e) {
    const t = e.toString(16);
    return t.length & 1 ? `0${t}` : t
}

function Ma(e) {
    if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
    return BigInt(e === "" ? "0" : `0x${e}`)
}
const ht = {
    _0: 48,
    _9: 57,
    _A: 65,
    _F: 70,
    _a: 97,
    _f: 102
};

function Xc(e) {
    if (e >= ht._0 && e <= ht._9) return e - ht._0;
    if (e >= ht._A && e <= ht._F) return e - (ht._A - 10);
    if (e >= ht._a && e <= ht._f) return e - (ht._a - 10)
}

function gn(e) {
    if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
    const t = e.length,
        n = t / 2;
    if (t % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t);
    const r = new Uint8Array(n);
    for (let o = 0, s = 0; o < n; o++, s += 2) {
        const i = Xc(e.charCodeAt(s)),
            a = Xc(e.charCodeAt(s + 1));
        if (i === void 0 || a === void 0) {
            const c = e[s] + e[s + 1];
            throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + s)
        }
        r[o] = i * 16 + a
    }
    return r
}

function Be(e) {
    return Ma(mn(e))
}

function Ra(e) {
    return it(e), Ma(mn(Uint8Array.from(e).reverse()))
}

function St(e, t) {
    return gn(e.toString(16).padStart(t * 2, "0"))
}

function _a(e, t) {
    return St(e, t).reverse()
}

function uw(e) {
    return gn(ef(e))
}

function Ae(e, t, n) {
    let r;
    if (typeof t == "string") try {
            r = gn(t)
        } catch (s) {
            throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${s}`)
        } else if ($t(t)) r = Uint8Array.from(t);
        else throw new Error(`${e} must be hex string or Uint8Array`);
    const o = r.length;
    if (typeof n == "number" && o !== n) throw new Error(`${e} expected ${n} bytes, got ${o}`);
    return r
}

function Me(...e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        it(o), t += o.length
    }
    const n = new Uint8Array(t);
    for (let r = 0, o = 0; r < e.length; r++) {
        const s = e[r];
        n.set(s, o), o += s.length
    }
    return n
}

function tf(e, t) {
    if (e.length !== t.length) return !1;
    let n = 0;
    for (let r = 0; r < e.length; r++) n |= e[r] ^ t[r];
    return n === 0
}

function $o(e) {
    if (typeof e != "string") throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
    return new Uint8Array(new TextEncoder().encode(e))
}

function dw(e) {
    let t;
    for (t = 0; e > Xd; e >>= Vo, t += 1);
    return t
}

function fw(e, t) {
    return e >> BigInt(t) & Vo
}

function hw(e, t, n) {
    return e | (n ? Vo : Xd) << BigInt(t)
}
const Da = e => (cw << BigInt(e - 1)) - Vo,
    Is = e => new Uint8Array(e),
    el = e => Uint8Array.from(e);

function nf(e, t, n) {
    if (typeof e != "number" || e < 2) throw new Error("hashLen must be a number");
    if (typeof t != "number" || t < 2) throw new Error("qByteLen must be a number");
    if (typeof n != "function") throw new Error("hmacFn must be a function");
    let r = Is(e),
        o = Is(e),
        s = 0;
    const i = () => {
            r.fill(1), o.fill(0), s = 0
        },
        a = (...f) => n(o, r, ...f),
        c = (f = Is()) => {
            o = a(el([0]), f), r = a(), f.length !== 0 && (o = a(el([1]), f), r = a())
        },
        l = () => {
            if (s++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let f = 0;
            const d = [];
            for (; f < t;) {
                r = a();
                const h = r.slice();
                d.push(h), f += r.length
            }
            return Me(...d)
        };
    return (f, d) => {
        i(), c(f);
        let h;
        for (; !(h = d(l()));) c();
        return i(), h
    }
}
const pw = {
    bigint: e => typeof e == "bigint",
    function: e => typeof e == "function",
    boolean: e => typeof e == "boolean",
    string: e => typeof e == "string",
    stringOrUint8Array: e => typeof e == "string" || $t(e),
    isSafeInteger: e => Number.isSafeInteger(e),
    array: e => Array.isArray(e),
    field: (e, t) => t.Fp.isValid(e),
    hash: e => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};

function Sn(e, t, n = {}) {
    const r = (o, s, i) => {
        const a = pw[s];
        if (typeof a != "function") throw new Error(`Invalid validator "${s}", expected function`);
        const c = e[o];
        if (!(i && c === void 0) && !a(c, e)) throw new Error(`Invalid param ${String(o)}=${c} (${typeof c}), expected ${s}`)
    };
    for (const [o, s] of Object.entries(t)) r(o, s, !1);
    for (const [o, s] of Object.entries(n)) r(o, s, !0);
    return e
}
const mw = Object.freeze(Object.defineProperty({
    __proto__: null,
    abytes: it,
    bitGet: fw,
    bitLen: dw,
    bitMask: Da,
    bitSet: hw,
    bytesToHex: mn,
    bytesToNumberBE: Be,
    bytesToNumberLE: Ra,
    concatBytes: Me,
    createHmacDrbg: nf,
    ensureBytes: Ae,
    equalBytes: tf,
    hexToBytes: gn,
    hexToNumber: Ma,
    isBytes: $t,
    numberToBytesBE: St,
    numberToBytesLE: _a,
    numberToHexUnpadded: ef,
    numberToVarBytesBE: uw,
    utf8ToBytes: $o,
    validateObject: Sn
}, Symbol.toStringTag, {
    value: "Module"
}));

function gw(e, t) {
    const n = Re(e) ? rt(e) : e,
        r = Re(t) ? rt(t) : t;
    return tf(n, r)
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const be = BigInt(0),
    ce = BigInt(1),
    Ft = BigInt(2),
    bw = BigInt(3),
    Ai = BigInt(4),
    tl = BigInt(5),
    nl = BigInt(8);
BigInt(9);
BigInt(16);

function ge(e, t) {
    const n = e % t;
    return n >= be ? n : t + n
}

function yw(e, t, n) {
    if (n <= be || t < be) throw new Error("Expected power/modulo > 0");
    if (n === ce) return be;
    let r = ce;
    for (; t > be;) t & ce && (r = r * e % n), e = e * e % n, t >>= ce;
    return r
}

function Ne(e, t, n) {
    let r = e;
    for (; t-- > be;) r *= r, r %= n;
    return r
}

function xi(e, t) {
    if (e === be || t <= be) throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
    let n = ge(e, t),
        r = t,
        o = be,
        s = ce;
    for (; n !== be;) {
        const a = r / n,
            c = r % n,
            l = o - s * a;
        r = n, n = c, o = s, s = l
    }
    if (r !== ce) throw new Error("invert: does not exist");
    return ge(o, t)
}

function ww(e) {
    const t = (e - ce) / Ft;
    let n, r, o;
    for (n = e - ce, r = 0; n % Ft === be; n /= Ft, r++);
    for (o = Ft; o < e && yw(o, t, e) !== e - ce; o++);
    if (r === 1) {
        const i = (e + ce) / Ai;
        return function(c, l) {
            const u = c.pow(l, i);
            if (!c.eql(c.sqr(u), l)) throw new Error("Cannot find square root");
            return u
        }
    }
    const s = (n + ce) / Ft;
    return function(a, c) {
        if (a.pow(c, t) === a.neg(a.ONE)) throw new Error("Cannot find square root");
        let l = r,
            u = a.pow(a.mul(a.ONE, o), n),
            f = a.pow(c, s),
            d = a.pow(c, n);
        for (; !a.eql(d, a.ONE);) {
            if (a.eql(d, a.ZERO)) return a.ZERO;
            let h = 1;
            for (let m = a.sqr(d); h < l && !a.eql(m, a.ONE); h++) m = a.sqr(m);
            const p = a.pow(u, ce << BigInt(l - h - 1));
            u = a.sqr(p), f = a.mul(f, p), d = a.mul(d, u), l = h
        }
        return f
    }
}

function vw(e) {
    if (e % Ai === bw) {
        const t = (e + ce) / Ai;
        return function(r, o) {
            const s = r.pow(o, t);
            if (!r.eql(r.sqr(s), o)) throw new Error("Cannot find square root");
            return s
        }
    }
    if (e % nl === tl) {
        const t = (e - tl) / nl;
        return function(r, o) {
            const s = r.mul(o, Ft),
                i = r.pow(s, t),
                a = r.mul(o, i),
                c = r.mul(r.mul(a, Ft), i),
                l = r.mul(a, r.sub(c, r.ONE));
            if (!r.eql(r.sqr(l), o)) throw new Error("Cannot find square root");
            return l
        }
    }
    return ww(e)
}
const Cw = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

function rf(e) {
    const t = {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "isSafeInteger",
            BITS: "isSafeInteger"
        },
        n = Cw.reduce((r, o) => (r[o] = "function", r), t);
    return Sn(e, n)
}

function Ew(e, t, n) {
    if (n < be) throw new Error("Expected power > 0");
    if (n === be) return e.ONE;
    if (n === ce) return t;
    let r = e.ONE,
        o = t;
    for (; n > be;) n & ce && (r = e.mul(r, o)), o = e.sqr(o), n >>= ce;
    return r
}

function Aw(e, t) {
    const n = new Array(t.length),
        r = t.reduce((s, i, a) => e.is0(i) ? s : (n[a] = s, e.mul(s, i)), e.ONE),
        o = e.inv(r);
    return t.reduceRight((s, i, a) => e.is0(i) ? s : (n[a] = e.mul(s, n[a]), e.mul(s, i)), o), n
}

function of (e, t) {
    const n = t !== void 0 ? t : e.toString(2).length,
        r = Math.ceil(n / 8);
    return {
        nBitLength: n,
        nByteLength: r
    }
}

function xw(e, t, n = !1, r = {}) {
    if (e <= be) throw new Error(`Expected Field ORDER > 0, got ${e}`);
    const {
        nBitLength: o,
        nByteLength: s
    } = of (e, t);
    if (s > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
    const i = vw(e),
        a = Object.freeze({
            ORDER: e,
            BITS: o,
            BYTES: s,
            MASK: Da(o),
            ZERO: be,
            ONE: ce,
            create: c => ge(c, e),
            isValid: c => {
                if (typeof c != "bigint") throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
                return be <= c && c < e
            },
            is0: c => c === be,
            isOdd: c => (c & ce) === ce,
            neg: c => ge(-c, e),
            eql: (c, l) => c === l,
            sqr: c => ge(c * c, e),
            add: (c, l) => ge(c + l, e),
            sub: (c, l) => ge(c - l, e),
            mul: (c, l) => ge(c * l, e),
            pow: (c, l) => Ew(a, c, l),
            div: (c, l) => ge(c * xi(l, e), e),
            sqrN: c => c * c,
            addN: (c, l) => c + l,
            subN: (c, l) => c - l,
            mulN: (c, l) => c * l,
            inv: c => xi(c, e),
            sqrt: r.sqrt || (c => i(a, c)),
            invertBatch: c => Aw(a, c),
            cmov: (c, l, u) => u ? l : c,
            toBytes: c => n ? _a(c, s) : St(c, s),
            fromBytes: c => {
                if (c.length !== s) throw new Error(`Fp.fromBytes: expected ${s}, got ${c.length}`);
                return n ? Ra(c) : Be(c)
            }
        });
    return Object.freeze(a)
}

function sf(e) {
    if (typeof e != "bigint") throw new Error("field order must be bigint");
    const t = e.toString(2).length;
    return Math.ceil(t / 8)
}

function af(e) {
    const t = sf(e);
    return t + Math.ceil(t / 2)
}

function Iw(e, t, n = !1) {
    const r = e.length,
        o = sf(t),
        s = af(t);
    if (r < 16 || r < s || r > 1024) throw new Error(`expected ${s}-1024 bytes of input, got ${r}`);
    const i = n ? Be(e) : Ra(e),
        a = ge(i, t - ce) + ce;
    return n ? _a(a, o) : St(a, o)
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const kw = BigInt(0),
    ks = BigInt(1);

function Bw(e, t) {
    const n = (o, s) => {
            const i = s.negate();
            return o ? i : s
        },
        r = o => {
            const s = Math.ceil(t / o) + 1,
                i = 2 ** (o - 1);
            return {
                windows: s,
                windowSize: i
            }
        };
    return {
        constTimeNegate: n,
        unsafeLadder(o, s) {
            let i = e.ZERO,
                a = o;
            for (; s > kw;) s & ks && (i = i.add(a)), a = a.double(), s >>= ks;
            return i
        },
        precomputeWindow(o, s) {
            const {
                windows: i,
                windowSize: a
            } = r(s), c = [];
            let l = o,
                u = l;
            for (let f = 0; f < i; f++) {
                u = l, c.push(u);
                for (let d = 1; d < a; d++) u = u.add(l), c.push(u);
                l = u.double()
            }
            return c
        },
        wNAF(o, s, i) {
            const {
                windows: a,
                windowSize: c
            } = r(o);
            let l = e.ZERO,
                u = e.BASE;
            const f = BigInt(2 ** o - 1),
                d = 2 ** o,
                h = BigInt(o);
            for (let p = 0; p < a; p++) {
                const m = p * c;
                let b = Number(i & f);
                i >>= h, b > c && (b -= d, i += ks);
                const w = m,
                    v = m + Math.abs(b) - 1,
                    C = p % 2 !== 0,
                    y = b < 0;
                b === 0 ? u = u.add(n(C, s[w])) : l = l.add(n(y, s[v]))
            }
            return {
                p: l,
                f: u
            }
        },
        wNAFCached(o, s, i, a) {
            const c = o._WINDOW_SIZE || 1;
            let l = s.get(o);
            return l || (l = this.precomputeWindow(o, c), c !== 1 && s.set(o, a(l))), this.wNAF(c, l, i)
        }
    }
}

function cf(e) {
    return rf(e.Fp), Sn(e, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }), Object.freeze({ ... of (e.n, e.nBitLength),
        ...e,
        p: e.Fp.ORDER
    })
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function jw(e) {
    const t = cf(e);
    Sn(t, {
        a: "field",
        b: "field"
    }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
    });
    const {
        endo: n,
        Fp: r,
        a: o
    } = t;
    if (n) {
        if (!r.eql(o, r.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function") throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")
    }
    return Object.freeze({ ...t
    })
}
const {
    bytesToNumberBE: Sw,
    hexToBytes: Pw
} = mw, Lt = {
    Err: class extends Error {
        constructor(t = "") {
            super(t)
        }
    },
    _parseInt(e) {
        const {
            Err: t
        } = Lt;
        if (e.length < 2 || e[0] !== 2) throw new t("Invalid signature integer tag");
        const n = e[1],
            r = e.subarray(2, n + 2);
        if (!n || r.length !== n) throw new t("Invalid signature integer: wrong length");
        if (r[0] & 128) throw new t("Invalid signature integer: negative");
        if (r[0] === 0 && !(r[1] & 128)) throw new t("Invalid signature integer: unnecessary leading zero");
        return {
            d: Sw(r),
            l: e.subarray(n + 2)
        }
    },
    toSig(e) {
        const {
            Err: t
        } = Lt, n = typeof e == "string" ? Pw(e) : e;
        it(n);
        let r = n.length;
        if (r < 2 || n[0] != 48) throw new t("Invalid signature tag");
        if (n[1] !== r - 2) throw new t("Invalid signature: incorrect length");
        const {
            d: o,
            l: s
        } = Lt._parseInt(n.subarray(2)), {
            d: i,
            l: a
        } = Lt._parseInt(s);
        if (a.length) throw new t("Invalid signature: left bytes after parsing");
        return {
            r: o,
            s: i
        }
    },
    hexFromSig(e) {
        const t = l => Number.parseInt(l[0], 16) & 8 ? "00" + l : l,
            n = l => {
                const u = l.toString(16);
                return u.length & 1 ? `0${u}` : u
            },
            r = t(n(e.s)),
            o = t(n(e.r)),
            s = r.length / 2,
            i = o.length / 2,
            a = n(s),
            c = n(i);
        return `30${n(i+s+4)}02${c}${o}02${a}${r}`
    }
}, Ge = BigInt(0), ie = BigInt(1), Ct = BigInt(2), uo = BigInt(3), rl = BigInt(4);

function Tw(e) {
    const t = jw(e),
        {
            Fp: n
        } = t,
        r = t.toBytes || ((p, m, b) => {
            const w = m.toAffine();
            return Me(Uint8Array.from([4]), n.toBytes(w.x), n.toBytes(w.y))
        }),
        o = t.fromBytes || (p => {
            const m = p.subarray(1),
                b = n.fromBytes(m.subarray(0, n.BYTES)),
                w = n.fromBytes(m.subarray(n.BYTES, 2 * n.BYTES));
            return {
                x: b,
                y: w
            }
        });

    function s(p) {
        const {
            a: m,
            b
        } = t, w = n.sqr(p), v = n.mul(w, p);
        return n.add(n.add(v, n.mul(p, m)), b)
    }
    if (!n.eql(n.sqr(t.Gy), s(t.Gx))) throw new Error("bad generator point: equation left != right");

    function i(p) {
        return typeof p == "bigint" && Ge < p && p < t.n
    }

    function a(p) {
        if (!i(p)) throw new Error("Expected valid bigint: 0 < bigint < curve.n")
    }

    function c(p) {
        const {
            allowedPrivateKeyLengths: m,
            nByteLength: b,
            wrapPrivateKey: w,
            n: v
        } = t;
        if (m && typeof p != "bigint") {
            if ($t(p) && (p = mn(p)), typeof p != "string" || !m.includes(p.length)) throw new Error("Invalid key");
            p = p.padStart(b * 2, "0")
        }
        let C;
        try {
            C = typeof p == "bigint" ? p : Be(Ae("private key", p, b))
        } catch {
            throw new Error(`private key must be ${b} bytes, hex or bigint, not ${typeof p}`)
        }
        return w && (C = ge(C, v)), a(C), C
    }
    const l = new Map;

    function u(p) {
        if (!(p instanceof f)) throw new Error("ProjectivePoint expected")
    }
    class f {
        constructor(m, b, w) {
            if (this.px = m, this.py = b, this.pz = w, m == null || !n.isValid(m)) throw new Error("x required");
            if (b == null || !n.isValid(b)) throw new Error("y required");
            if (w == null || !n.isValid(w)) throw new Error("z required")
        }
        static fromAffine(m) {
            const {
                x: b,
                y: w
            } = m || {};
            if (!m || !n.isValid(b) || !n.isValid(w)) throw new Error("invalid affine point");
            if (m instanceof f) throw new Error("projective point not allowed");
            const v = C => n.eql(C, n.ZERO);
            return v(b) && v(w) ? f.ZERO : new f(b, w, n.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(m) {
            const b = n.invertBatch(m.map(w => w.pz));
            return m.map((w, v) => w.toAffine(b[v])).map(f.fromAffine)
        }
        static fromHex(m) {
            const b = f.fromAffine(o(Ae("pointHex", m)));
            return b.assertValidity(), b
        }
        static fromPrivateKey(m) {
            return f.BASE.multiply(c(m))
        }
        _setWindowSize(m) {
            this._WINDOW_SIZE = m, l.delete(this)
        }
        assertValidity() {
            if (this.is0()) {
                if (t.allowInfinityPoint && !n.is0(this.py)) return;
                throw new Error("bad point: ZERO")
            }
            const {
                x: m,
                y: b
            } = this.toAffine();
            if (!n.isValid(m) || !n.isValid(b)) throw new Error("bad point: x or y not FE");
            const w = n.sqr(b),
                v = s(m);
            if (!n.eql(w, v)) throw new Error("bad point: equation left != right");
            if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup")
        }
        hasEvenY() {
            const {
                y: m
            } = this.toAffine();
            if (n.isOdd) return !n.isOdd(m);
            throw new Error("Field doesn't support isOdd")
        }
        equals(m) {
            u(m);
            const {
                px: b,
                py: w,
                pz: v
            } = this, {
                px: C,
                py: y,
                pz: A
            } = m, E = n.eql(n.mul(b, A), n.mul(C, v)), k = n.eql(n.mul(w, A), n.mul(y, v));
            return E && k
        }
        negate() {
            return new f(this.px, n.neg(this.py), this.pz)
        }
        double() {
            const {
                a: m,
                b
            } = t, w = n.mul(b, uo), {
                px: v,
                py: C,
                pz: y
            } = this;
            let A = n.ZERO,
                E = n.ZERO,
                k = n.ZERO,
                B = n.mul(v, v),
                S = n.mul(C, C),
                P = n.mul(y, y),
                R = n.mul(v, C);
            return R = n.add(R, R), k = n.mul(v, y), k = n.add(k, k), A = n.mul(m, k), E = n.mul(w, P), E = n.add(A, E), A = n.sub(S, E), E = n.add(S, E), E = n.mul(A, E), A = n.mul(R, A), k = n.mul(w, k), P = n.mul(m, P), R = n.sub(B, P), R = n.mul(m, R), R = n.add(R, k), k = n.add(B, B), B = n.add(k, B), B = n.add(B, P), B = n.mul(B, R), E = n.add(E, B), P = n.mul(C, y), P = n.add(P, P), B = n.mul(P, R), A = n.sub(A, B), k = n.mul(P, S), k = n.add(k, k), k = n.add(k, k), new f(A, E, k)
        }
        add(m) {
            u(m);
            const {
                px: b,
                py: w,
                pz: v
            } = this, {
                px: C,
                py: y,
                pz: A
            } = m;
            let E = n.ZERO,
                k = n.ZERO,
                B = n.ZERO;
            const S = t.a,
                P = n.mul(t.b, uo);
            let R = n.mul(b, C),
                O = n.mul(w, y),
                U = n.mul(v, A),
                X = n.add(b, w),
                T = n.add(C, y);
            X = n.mul(X, T), T = n.add(R, O), X = n.sub(X, T), T = n.add(b, v);
            let M = n.add(C, A);
            return T = n.mul(T, M), M = n.add(R, U), T = n.sub(T, M), M = n.add(w, v), E = n.add(y, A), M = n.mul(M, E), E = n.add(O, U), M = n.sub(M, E), B = n.mul(S, T), E = n.mul(P, U), B = n.add(E, B), E = n.sub(O, B), B = n.add(O, B), k = n.mul(E, B), O = n.add(R, R), O = n.add(O, R), U = n.mul(S, U), T = n.mul(P, T), O = n.add(O, U), U = n.sub(R, U), U = n.mul(S, U), T = n.add(T, U), R = n.mul(O, T), k = n.add(k, R), R = n.mul(M, T), E = n.mul(X, E), E = n.sub(E, R), R = n.mul(X, O), B = n.mul(M, B), B = n.add(B, R), new f(E, k, B)
        }
        subtract(m) {
            return this.add(m.negate())
        }
        is0() {
            return this.equals(f.ZERO)
        }
        wNAF(m) {
            return h.wNAFCached(this, l, m, b => {
                const w = n.invertBatch(b.map(v => v.pz));
                return b.map((v, C) => v.toAffine(w[C])).map(f.fromAffine)
            })
        }
        multiplyUnsafe(m) {
            const b = f.ZERO;
            if (m === Ge) return b;
            if (a(m), m === ie) return this;
            const {
                endo: w
            } = t;
            if (!w) return h.unsafeLadder(this, m);
            let {
                k1neg: v,
                k1: C,
                k2neg: y,
                k2: A
            } = w.splitScalar(m), E = b, k = b, B = this;
            for (; C > Ge || A > Ge;) C & ie && (E = E.add(B)), A & ie && (k = k.add(B)), B = B.double(), C >>= ie, A >>= ie;
            return v && (E = E.negate()), y && (k = k.negate()), k = new f(n.mul(k.px, w.beta), k.py, k.pz), E.add(k)
        }
        multiply(m) {
            a(m);
            let b = m,
                w, v;
            const {
                endo: C
            } = t;
            if (C) {
                const {
                    k1neg: y,
                    k1: A,
                    k2neg: E,
                    k2: k
                } = C.splitScalar(b);
                let {
                    p: B,
                    f: S
                } = this.wNAF(A), {
                    p: P,
                    f: R
                } = this.wNAF(k);
                B = h.constTimeNegate(y, B), P = h.constTimeNegate(E, P), P = new f(n.mul(P.px, C.beta), P.py, P.pz), w = B.add(P), v = S.add(R)
            } else {
                const {
                    p: y,
                    f: A
                } = this.wNAF(b);
                w = y, v = A
            }
            return f.normalizeZ([w, v])[0]
        }
        multiplyAndAddUnsafe(m, b, w) {
            const v = f.BASE,
                C = (A, E) => E === Ge || E === ie || !A.equals(v) ? A.multiplyUnsafe(E) : A.multiply(E),
                y = C(this, b).add(C(m, w));
            return y.is0() ? void 0 : y
        }
        toAffine(m) {
            const {
                px: b,
                py: w,
                pz: v
            } = this, C = this.is0();
            m == null && (m = C ? n.ONE : n.inv(v));
            const y = n.mul(b, m),
                A = n.mul(w, m),
                E = n.mul(v, m);
            if (C) return {
                x: n.ZERO,
                y: n.ZERO
            };
            if (!n.eql(E, n.ONE)) throw new Error("invZ was invalid");
            return {
                x: y,
                y: A
            }
        }
        isTorsionFree() {
            const {
                h: m,
                isTorsionFree: b
            } = t;
            if (m === ie) return !0;
            if (b) return b(f, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            const {
                h: m,
                clearCofactor: b
            } = t;
            return m === ie ? this : b ? b(f, this) : this.multiplyUnsafe(t.h)
        }
        toRawBytes(m = !0) {
            return this.assertValidity(), r(f, this, m)
        }
        toHex(m = !0) {
            return mn(this.toRawBytes(m))
        }
    }
    f.BASE = new f(t.Gx, t.Gy, n.ONE), f.ZERO = new f(n.ZERO, n.ONE, n.ZERO);
    const d = t.nBitLength,
        h = Bw(f, t.endo ? Math.ceil(d / 2) : d);
    return {
        CURVE: t,
        ProjectivePoint: f,
        normPrivateKeyToScalar: c,
        weierstrassEquation: s,
        isWithinCurveOrder: i
    }
}

function Ow(e) {
    const t = cf(e);
    return Sn(t, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
    }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
    }), Object.freeze({
        lowS: !0,
        ...t
    })
}

function Mw(e) {
    const t = Ow(e),
        {
            Fp: n,
            n: r
        } = t,
        o = n.BYTES + 1,
        s = 2 * n.BYTES + 1;

    function i(T) {
        return Ge < T && T < n.ORDER
    }

    function a(T) {
        return ge(T, r)
    }

    function c(T) {
        return xi(T, r)
    }
    const {
        ProjectivePoint: l,
        normPrivateKeyToScalar: u,
        weierstrassEquation: f,
        isWithinCurveOrder: d
    } = Tw({ ...t,
        toBytes(T, M, N) {
            const H = M.toAffine(),
                Q = n.toBytes(H.x),
                Y = Me;
            return N ? Y(Uint8Array.from([M.hasEvenY() ? 2 : 3]), Q) : Y(Uint8Array.from([4]), Q, n.toBytes(H.y))
        },
        fromBytes(T) {
            const M = T.length,
                N = T[0],
                H = T.subarray(1);
            if (M === o && (N === 2 || N === 3)) {
                const Q = Be(H);
                if (!i(Q)) throw new Error("Point is not on curve");
                const Y = f(Q);
                let me;
                try {
                    me = n.sqrt(Y)
                } catch (K) {
                    const ee = K instanceof Error ? ": " + K.message : "";
                    throw new Error("Point is not on curve" + ee)
                }
                const se = (me & ie) === ie;
                return (N & 1) === 1 !== se && (me = n.neg(me)), {
                    x: Q,
                    y: me
                }
            } else if (M === s && N === 4) {
                const Q = n.fromBytes(H.subarray(0, n.BYTES)),
                    Y = n.fromBytes(H.subarray(n.BYTES, 2 * n.BYTES));
                return {
                    x: Q,
                    y: Y
                }
            } else throw new Error(`Point of length ${M} was invalid. Expected ${o} compressed bytes or ${s} uncompressed bytes`)
        }
    }), h = T => mn(St(T, t.nByteLength));

    function p(T) {
        const M = r >> ie;
        return T > M
    }

    function m(T) {
        return p(T) ? a(-T) : T
    }
    const b = (T, M, N) => Be(T.slice(M, N));
    class w {
        constructor(M, N, H) {
            this.r = M, this.s = N, this.recovery = H, this.assertValidity()
        }
        static fromCompact(M) {
            const N = t.nByteLength;
            return M = Ae("compactSignature", M, N * 2), new w(b(M, 0, N), b(M, N, 2 * N))
        }
        static fromDER(M) {
            const {
                r: N,
                s: H
            } = Lt.toSig(Ae("DER", M));
            return new w(N, H)
        }
        assertValidity() {
            if (!d(this.r)) throw new Error("r must be 0 < r < CURVE.n");
            if (!d(this.s)) throw new Error("s must be 0 < s < CURVE.n")
        }
        addRecoveryBit(M) {
            return new w(this.r, this.s, M)
        }
        recoverPublicKey(M) {
            const {
                r: N,
                s: H,
                recovery: Q
            } = this, Y = k(Ae("msgHash", M));
            if (Q == null || ![0, 1, 2, 3].includes(Q)) throw new Error("recovery id invalid");
            const me = Q === 2 || Q === 3 ? N + t.n : N;
            if (me >= n.ORDER) throw new Error("recovery id 2 or 3 invalid");
            const se = Q & 1 ? "03" : "02",
                z = l.fromHex(se + h(me)),
                K = c(me),
                ee = a(-Y * K),
                ne = a(H * K),
                Pe = l.BASE.multiplyAndAddUnsafe(z, ee, ne);
            if (!Pe) throw new Error("point at infinify");
            return Pe.assertValidity(), Pe
        }
        hasHighS() {
            return p(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new w(this.r, a(-this.s), this.recovery) : this
        }
        toDERRawBytes() {
            return gn(this.toDERHex())
        }
        toDERHex() {
            return Lt.hexFromSig({
                r: this.r,
                s: this.s
            })
        }
        toCompactRawBytes() {
            return gn(this.toCompactHex())
        }
        toCompactHex() {
            return h(this.r) + h(this.s)
        }
    }
    const v = {
        isValidPrivateKey(T) {
            try {
                return u(T), !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: u,
        randomPrivateKey: () => {
            const T = af(t.n);
            return Iw(t.randomBytes(T), t.n)
        },
        precompute(T = 8, M = l.BASE) {
            return M._setWindowSize(T), M.multiply(BigInt(3)), M
        }
    };

    function C(T, M = !0) {
        return l.fromPrivateKey(T).toRawBytes(M)
    }

    function y(T) {
        const M = $t(T),
            N = typeof T == "string",
            H = (M || N) && T.length;
        return M ? H === o || H === s : N ? H === 2 * o || H === 2 * s : T instanceof l
    }

    function A(T, M, N = !0) {
        if (y(T)) throw new Error("first arg must be private key");
        if (!y(M)) throw new Error("second arg must be public key");
        return l.fromHex(M).multiply(u(T)).toRawBytes(N)
    }
    const E = t.bits2int || function(T) {
            const M = Be(T),
                N = T.length * 8 - t.nBitLength;
            return N > 0 ? M >> BigInt(N) : M
        },
        k = t.bits2int_modN || function(T) {
            return a(E(T))
        },
        B = Da(t.nBitLength);

    function S(T) {
        if (typeof T != "bigint") throw new Error("bigint expected");
        if (!(Ge <= T && T < B)) throw new Error(`bigint expected < 2^${t.nBitLength}`);
        return St(T, t.nByteLength)
    }

    function P(T, M, N = R) {
        if (["recovered", "canonical"].some(Ye => Ye in N)) throw new Error("sign() legacy options not supported");
        const {
            hash: H,
            randomBytes: Q
        } = t;
        let {
            lowS: Y,
            prehash: me,
            extraEntropy: se
        } = N;
        Y == null && (Y = !0), T = Ae("msgHash", T), me && (T = Ae("prehashed msgHash", H(T)));
        const z = k(T),
            K = u(M),
            ee = [S(K), S(z)];
        if (se != null && se !== !1) {
            const Ye = se === !0 ? Q(n.BYTES) : se;
            ee.push(Ae("extraEntropy", Ye))
        }
        const ne = Me(...ee),
            Pe = z;

        function yt(Ye) {
            const lt = E(Ye);
            if (!d(lt)) return;
            const _r = c(lt),
                ke = l.BASE.multiply(lt).toAffine(),
                ut = a(ke.x);
            if (ut === Ge) return;
            const Xe = a(_r * a(Pe + ut * K));
            if (Xe === Ge) return;
            let Dr = (ke.x === ut ? 0 : 2) | Number(ke.y & ie),
                en = Xe;
            return Y && p(Xe) && (en = m(Xe), Dr ^= 1), new w(ut, en, Dr)
        }
        return {
            seed: ne,
            k2sig: yt
        }
    }
    const R = {
            lowS: t.lowS,
            prehash: !1
        },
        O = {
            lowS: t.lowS,
            prehash: !1
        };

    function U(T, M, N = R) {
        const {
            seed: H,
            k2sig: Q
        } = P(T, M, N), Y = t;
        return nf(Y.hash.outputLen, Y.nByteLength, Y.hmac)(H, Q)
    }
    l.BASE._setWindowSize(8);

    function X(T, M, N, H = O) {
        const Q = T;
        if (M = Ae("msgHash", M), N = Ae("publicKey", N), "strict" in H) throw new Error("options.strict was renamed to lowS");
        const {
            lowS: Y,
            prehash: me
        } = H;
        let se, z;
        try {
            if (typeof Q == "string" || $t(Q)) try {
                se = w.fromDER(Q)
            } catch (ke) {
                if (!(ke instanceof Lt.Err)) throw ke;
                se = w.fromCompact(Q)
            } else if (typeof Q == "object" && typeof Q.r == "bigint" && typeof Q.s == "bigint") {
                const {
                    r: ke,
                    s: ut
                } = Q;
                se = new w(ke, ut)
            } else throw new Error("PARSE");
            z = l.fromHex(N)
        } catch (ke) {
            if (ke.message === "PARSE") throw new Error("signature must be Signature instance, Uint8Array or hex string");
            return !1
        }
        if (Y && se.hasHighS()) return !1;
        me && (M = t.hash(M));
        const {
            r: K,
            s: ee
        } = se, ne = k(M), Pe = c(ee), yt = a(ne * Pe), Ye = a(K * Pe), lt = l.BASE.multiplyAndAddUnsafe(z, yt, Ye) ? .toAffine();
        return lt ? a(lt.x) === K : !1
    }
    return {
        CURVE: t,
        getPublicKey: C,
        getSharedSecret: A,
        sign: U,
        verify: X,
        ProjectivePoint: l,
        Signature: w,
        utils: v
    }
}

function Rw(e, t) {
    const n = e.ORDER;
    let r = Ge;
    for (let p = n - ie; p % Ct === Ge; p /= Ct) r += ie;
    const o = r,
        s = Ct << o - ie - ie,
        i = s * Ct,
        a = (n - ie) / i,
        c = (a - ie) / Ct,
        l = i - ie,
        u = s,
        f = e.pow(t, a),
        d = e.pow(t, (a + ie) / Ct);
    let h = (p, m) => {
        let b = f,
            w = e.pow(m, l),
            v = e.sqr(w);
        v = e.mul(v, m);
        let C = e.mul(p, v);
        C = e.pow(C, c), C = e.mul(C, w), w = e.mul(C, m), v = e.mul(C, p);
        let y = e.mul(v, w);
        C = e.pow(y, u);
        let A = e.eql(C, e.ONE);
        w = e.mul(v, d), C = e.mul(y, b), v = e.cmov(w, v, A), y = e.cmov(C, y, A);
        for (let E = o; E > ie; E--) {
            let k = E - Ct;
            k = Ct << k - ie;
            let B = e.pow(y, k);
            const S = e.eql(B, e.ONE);
            w = e.mul(v, b), b = e.mul(b, b), B = e.mul(y, b), v = e.cmov(w, v, S), y = e.cmov(B, y, S)
        }
        return {
            isValid: A,
            value: v
        }
    };
    if (e.ORDER % rl === uo) {
        const p = (e.ORDER - uo) / rl,
            m = e.sqrt(e.neg(t));
        h = (b, w) => {
            let v = e.sqr(w);
            const C = e.mul(b, w);
            v = e.mul(v, C);
            let y = e.pow(v, p);
            y = e.mul(y, C);
            const A = e.mul(y, m),
                E = e.mul(e.sqr(y), w),
                k = e.eql(E, b);
            let B = e.cmov(A, y, k);
            return {
                isValid: k,
                value: B
            }
        }
    }
    return h
}

function _w(e, t) {
    if (rf(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z)) throw new Error("mapToCurveSimpleSWU: invalid opts");
    const n = Rw(e, t.Z);
    if (!e.isOdd) throw new Error("Fp.isOdd is not implemented!");
    return r => {
        let o, s, i, a, c, l, u, f;
        o = e.sqr(r), o = e.mul(o, t.Z), s = e.sqr(o), s = e.add(s, o), i = e.add(s, e.ONE), i = e.mul(i, t.B), a = e.cmov(t.Z, e.neg(s), !e.eql(s, e.ZERO)), a = e.mul(a, t.A), s = e.sqr(i), l = e.sqr(a), c = e.mul(l, t.A), s = e.add(s, c), s = e.mul(s, i), l = e.mul(l, a), c = e.mul(l, t.B), s = e.add(s, c), u = e.mul(o, i);
        const {
            isValid: d,
            value: h
        } = n(s, l);
        f = e.mul(o, r), f = e.mul(f, h), u = e.cmov(u, i, d), f = e.cmov(f, h, d);
        const p = e.isOdd(r) === e.isOdd(f);
        return f = e.cmov(e.neg(f), f, p), u = e.div(u, a), {
            x: u,
            y: f
        }
    }
}
const Dw = Be;

function At(e, t) {
    if (e < 0 || e >= 1 << 8 * t) throw new Error(`bad I2OSP call: value=${e} length=${t}`);
    const n = Array.from({
        length: t
    }).fill(0);
    for (let r = t - 1; r >= 0; r--) n[r] = e & 255, e >>>= 8;
    return new Uint8Array(n)
}

function Nw(e, t) {
    const n = new Uint8Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = e[r] ^ t[r];
    return n
}

function Na(e) {
    if (!Number.isSafeInteger(e)) throw new Error("number expected")
}

function Fw(e, t, n, r) {
    it(e), it(t), Na(n), t.length > 255 && (t = r(Me($o("H2C-OVERSIZE-DST-"), t)));
    const {
        outputLen: o,
        blockLen: s
    } = r, i = Math.ceil(n / o);
    if (i > 255) throw new Error("Invalid xmd length");
    const a = Me(t, At(t.length, 1)),
        c = At(0, s),
        l = At(n, 2),
        u = new Array(i),
        f = r(Me(c, e, l, At(0, 1), a));
    u[0] = r(Me(f, At(1, 1), a));
    for (let h = 1; h <= i; h++) {
        const p = [Nw(f, u[h - 1]), At(h + 1, 1), a];
        u[h] = r(Me(...p))
    }
    return Me(...u).slice(0, n)
}

function Lw(e, t, n, r, o) {
    if (it(e), it(t), Na(n), t.length > 255) {
        const s = Math.ceil(2 * r / 8);
        t = o.create({
            dkLen: s
        }).update($o("H2C-OVERSIZE-DST-")).update(t).digest()
    }
    if (n > 65535 || t.length > 255) throw new Error("expand_message_xof: invalid lenInBytes");
    return o.create({
        dkLen: n
    }).update(e).update(At(n, 2)).update(t).update(At(t.length, 1)).digest()
}

function ol(e, t, n) {
    Sn(n, {
        DST: "stringOrUint8Array",
        p: "bigint",
        m: "isSafeInteger",
        k: "isSafeInteger",
        hash: "hash"
    });
    const {
        p: r,
        k: o,
        m: s,
        hash: i,
        expand: a,
        DST: c
    } = n;
    it(e), Na(t);
    const l = typeof c == "string" ? $o(c) : c,
        u = r.toString(2).length,
        f = Math.ceil((u + o) / 8),
        d = t * s * f;
    let h;
    if (a === "xmd") h = Fw(e, l, d, i);
    else if (a === "xof") h = Lw(e, l, d, o, i);
    else if (a === "_internal_pass") h = e;
    else throw new Error('expand must be "xmd" or "xof"');
    const p = new Array(t);
    for (let m = 0; m < t; m++) {
        const b = new Array(s);
        for (let w = 0; w < s; w++) {
            const v = f * (w + m * s),
                C = h.subarray(v, v + f);
            b[w] = ge(Dw(C), r)
        }
        p[m] = b
    }
    return p
}

function Uw(e, t) {
    const n = t.map(r => Array.from(r).reverse());
    return (r, o) => {
        const [s, i, a, c] = n.map(l => l.reduce((u, f) => e.add(e.mul(u, r), f)));
        return r = e.div(s, i), o = e.mul(o, e.div(a, c)), {
            x: r,
            y: o
        }
    }
}

function zw(e, t, n) {
    if (typeof t != "function") throw new Error("mapToCurve() must be defined");
    return {
        hashToCurve(r, o) {
            const s = ol(r, 2, { ...n,
                    DST: n.DST,
                    ...o
                }),
                i = e.fromAffine(t(s[0])),
                a = e.fromAffine(t(s[1])),
                c = i.add(a).clearCofactor();
            return c.assertValidity(), c
        },
        encodeToCurve(r, o) {
            const s = ol(r, 1, { ...n,
                    DST: n.encodeDST,
                    ...o
                }),
                i = e.fromAffine(t(s[0])).clearCofactor();
            return i.assertValidity(), i
        }
    }
}
class lf extends Yi {
    constructor(t, n) {
        super(), this.finished = !1, this.destroyed = !1, e0(t);
        const r = Oo(n);
        if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const o = this.blockLen,
            s = new Uint8Array(o);
        s.set(r.length > o ? t.create().update(r).digest() : r);
        for (let i = 0; i < s.length; i++) s[i] ^= 54;
        this.iHash.update(s), this.oHash = t.create();
        for (let i = 0; i < s.length; i++) s[i] ^= 106;
        this.oHash.update(s), s.fill(0)
    }
    update(t) {
        return hn(this), this.iHash.update(t), this
    }
    digestInto(t) {
        hn(this), wr(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
    }
    digest() {
        const t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        const {
            oHash: n,
            iHash: r,
            finished: o,
            destroyed: s,
            blockLen: i,
            outputLen: a
        } = this;
        return t = t, t.finished = o, t.destroyed = s, t.blockLen = i, t.outputLen = a, t.oHash = n._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
    }
}
const uf = (e, t, n) => new lf(e, t).update(n).digest();
uf.create = (e, t) => new lf(e, t); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Ww(e) {
    return {
        hash: e,
        hmac: (t, ...n) => uf(e, t, u0(...n)),
        randomBytes: ku
    }
}

function qw(e, t) {
    const n = r => Mw({ ...e,
        ...Ww(r)
    });
    return Object.freeze({ ...n(t),
        create: n
    })
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Go = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    fo = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    df = BigInt(1),
    ho = BigInt(2),
    sl = (e, t) => (e + t / ho) / t;

function ff(e) {
    const t = Go,
        n = BigInt(3),
        r = BigInt(6),
        o = BigInt(11),
        s = BigInt(22),
        i = BigInt(23),
        a = BigInt(44),
        c = BigInt(88),
        l = e * e * e % t,
        u = l * l * e % t,
        f = Ne(u, n, t) * u % t,
        d = Ne(f, n, t) * u % t,
        h = Ne(d, ho, t) * l % t,
        p = Ne(h, o, t) * h % t,
        m = Ne(p, s, t) * p % t,
        b = Ne(m, a, t) * m % t,
        w = Ne(b, c, t) * b % t,
        v = Ne(w, a, t) * m % t,
        C = Ne(v, n, t) * u % t,
        y = Ne(C, i, t) * p % t,
        A = Ne(y, r, t) * l % t,
        E = Ne(A, ho, t);
    if (!Pt.eql(Pt.sqr(E), e)) throw new Error("Cannot find square root");
    return E
}
const Pt = xw(Go, void 0, void 0, {
        sqrt: ff
    }),
    Pn = qw({
        a: BigInt(0),
        b: BigInt(7),
        Fp: Pt,
        n: fo,
        Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
        Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
        h: BigInt(1),
        lowS: !0,
        endo: {
            beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
            splitScalar: e => {
                const t = fo,
                    n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                    r = -df * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                    o = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                    s = n,
                    i = BigInt("0x100000000000000000000000000000000"),
                    a = sl(s * e, t),
                    c = sl(-r * e, t);
                let l = ge(e - a * n - c * o, t),
                    u = ge(-a * r - c * s, t);
                const f = l > i,
                    d = u > i;
                if (f && (l = t - l), d && (u = t - u), l > i || u > i) throw new Error("splitScalar: Endomorphism failed, k=" + e);
                return {
                    k1neg: f,
                    k1: l,
                    k2neg: d,
                    k2: u
                }
            }
        }
    }, ir),
    Ko = BigInt(0),
    hf = e => typeof e == "bigint" && Ko < e && e < Go,
    Hw = e => typeof e == "bigint" && Ko < e && e < fo,
    il = {};

function po(e, ...t) {
    let n = il[e];
    if (n === void 0) {
        const r = ir(Uint8Array.from(e, o => o.charCodeAt(0)));
        n = Me(r, r), il[e] = n
    }
    return ir(Me(n, ...t))
}
const Fa = e => e.toRawBytes(!0).slice(1),
    Ii = e => St(e, 32),
    Bs = e => ge(e, Go),
    lr = e => ge(e, fo),
    La = Pn.ProjectivePoint,
    Qw = (e, t, n) => La.BASE.multiplyAndAddUnsafe(e, t, n);

function ki(e) {
    let t = Pn.utils.normPrivateKeyToScalar(e),
        n = La.fromPrivateKey(t);
    return {
        scalar: n.hasEvenY() ? t : lr(-t),
        bytes: Fa(n)
    }
}

function pf(e) {
    if (!hf(e)) throw new Error("bad x: need 0 < x < p");
    const t = Bs(e * e),
        n = Bs(t * e + BigInt(7));
    let r = ff(n);
    r % ho !== Ko && (r = Bs(-r));
    const o = new La(e, r, df);
    return o.assertValidity(), o
}

function mf(...e) {
    return lr(Be(po("BIP0340/challenge", ...e)))
}

function Vw(e) {
    return ki(e).bytes
}

function $w(e, t, n = ku(32)) {
    const r = Ae("message", e),
        {
            bytes: o,
            scalar: s
        } = ki(t),
        i = Ae("auxRand", n, 32),
        a = Ii(s ^ Be(po("BIP0340/aux", i))),
        c = po("BIP0340/nonce", a, o, r),
        l = lr(Be(c));
    if (l === Ko) throw new Error("sign failed: k is zero");
    const {
        bytes: u,
        scalar: f
    } = ki(l), d = mf(u, o, r), h = new Uint8Array(64);
    if (h.set(u, 0), h.set(Ii(lr(f + d * s)), 32), !gf(h, r, o)) throw new Error("sign: Invalid signature produced");
    return h
}

function gf(e, t, n) {
    const r = Ae("signature", e, 64),
        o = Ae("message", t),
        s = Ae("publicKey", n, 32);
    try {
        const i = pf(Be(s)),
            a = Be(r.subarray(0, 32));
        if (!hf(a)) return !1;
        const c = Be(r.subarray(32, 64));
        if (!Hw(c)) return !1;
        const l = mf(Ii(a), Fa(i), o),
            u = Qw(i, c, lr(-l));
        return !(!u || !u.hasEvenY() || u.toAffine().x !== a)
    } catch {
        return !1
    }
}
const Gw = (() => ({
        getPublicKey: Vw,
        sign: $w,
        verify: gf,
        utils: {
            randomPrivateKey: Pn.utils.randomPrivateKey,
            lift_x: pf,
            pointToBytes: Fa,
            numberToBytesBE: St,
            bytesToNumberBE: Be,
            taggedHash: po,
            mod: ge
        }
    }))(),
    Kw = (() => Uw(Pt, [
        ["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7", "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581", "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262", "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],
        ["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b", "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14", "0x0000000000000000000000000000000000000000000000000000000000000001"],
        ["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c", "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3", "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931", "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],
        ["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b", "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573", "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f", "0x0000000000000000000000000000000000000000000000000000000000000001"]
    ].map(e => e.map(t => BigInt(t)))))(),
    Jw = (() => _w(Pt, {
        A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
        B: BigInt("1771"),
        Z: Pt.create(BigInt("-11"))
    }))(),
    bf = (() => zw(Pn.ProjectivePoint, e => {
        const {
            x: t,
            y: n
        } = Jw(Pt.create(e[0]));
        return Kw(t, n)
    }, {
        DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
        encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
        p: Pt.ORDER,
        m: 1,
        k: 128,
        expand: "xmd",
        hash: ir
    }))(),
    Zw = (() => bf.hashToCurve)(),
    Yw = (() => bf.encodeToCurve)(),
    Xw = Object.freeze(Object.defineProperty({
        __proto__: null,
        encodeToCurve: Yw,
        hashToCurve: Zw,
        schnorr: Gw,
        secp256k1: Pn
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function e1({
    r: e,
    s: t,
    v: n,
    yParity: r
}) {
    const o = (() => {
        if (r === 0 || r === 1) return r;
        if (n && (n === 27 n || n === 28 n || n >= 35 n)) return n % 2 n === 0 n ? 1 : 0;
        throw new Error("Invalid `v` or `yParity` value")
    })();
    return `0x${new Pn.Signature(re(e),re(t)).toCompactHex()}${o===0?"1b":"1c"}`
}
async function Ua(e, t) {
    const {
        address: n,
        factory: r,
        factoryData: o,
        hash: s,
        signature: i,
        ...a
    } = t, c = (() => Re(i) ? i : typeof i == "object" && "r" in i && "s" in i ? e1(i) : ue(i))(), l = await (async () => !r && !o || Hy(c) || await F(e, vi, "getCode")({
        address: n
    }) ? c : Qy({
        address: r,
        data: o,
        signature: c
    }))();
    try {
        const {
            data: u
        } = await F(e, kr, "call")({
            data: Mo({
                abi: gg,
                args: [n, s, l],
                bytecode: Bb
            }),
            ...a
        });
        return gw(u ? ? "0x0", "0x1")
    } catch (u) {
        try {
            if (Sa(we(n), await zy({
                    hash: s,
                    signature: i
                }))) return !0
        } catch {}
        if (u instanceof Cd) return !1;
        throw u
    }
}
async function t1(e, {
    address: t,
    message: n,
    factory: r,
    factoryData: o,
    signature: s,
    ...i
}) {
    const a = $d(n);
    return Ua(e, {
        address: t,
        factory: r,
        factoryData: o,
        hash: a,
        signature: s,
        ...i
    })
}
async function n1(e, t) {
    const {
        address: n,
        factory: r,
        factoryData: o,
        signature: s,
        message: i,
        primaryType: a,
        types: c,
        domain: l,
        ...u
    } = t, f = Oy({
        message: i,
        primaryType: a,
        types: c,
        domain: l
    });
    return Ua(e, {
        address: n,
        factory: r,
        factoryData: o,
        hash: f,
        signature: s,
        ...u
    })
}
async function r1(e, t) {
    return await e.request({
        method: "wallet_watchAsset",
        params: t
    }, {
        retryCount: 0
    })
}

function yf(e, t) {
    const {
        abi: n,
        address: r,
        args: o,
        batch: s = !0,
        eventName: i,
        fromBlock: a,
        onError: c,
        onLogs: l,
        poll: u,
        pollingInterval: f = e.pollingInterval,
        strict: d
    } = t;
    return (() => typeof u < "u" ? u : typeof a == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"))() ? (() => {
        const b = d ? ? !1,
            w = fe(["watchContractEvent", r, o, s, e.uid, i, f, b, a]);
        return jt(w, {
            onLogs: l,
            onError: c
        }, v => {
            let C;
            a !== void 0 && (C = a - 1 n);
            let y, A = !1;
            const E = Sr(async () => {
                if (!A) {
                    try {
                        y = await F(e, Aa, "createContractEventFilter")({
                            abi: n,
                            address: r,
                            args: o,
                            eventName: i,
                            strict: b,
                            fromBlock: a
                        })
                    } catch {}
                    A = !0;
                    return
                }
                try {
                    let k;
                    if (y) k = await F(e, Ho, "getFilterChanges")({
                        filter: y
                    });
                    else {
                        const B = await F(e, jr, "getBlockNumber")({});
                        C && C < B ? k = await F(e, Ba, "getContractEvents")({
                            abi: n,
                            address: r,
                            args: o,
                            eventName: i,
                            fromBlock: C + 1 n,
                            toBlock: B,
                            strict: b
                        }) : k = [], C = B
                    }
                    if (k.length === 0) return;
                    if (s) v.onLogs(k);
                    else
                        for (const B of k) v.onLogs([B])
                } catch (k) {
                    y && k instanceof Qt && (A = !1), v.onError ? .(k)
                }
            }, {
                emitOnBegin: !0,
                interval: f
            });
            return async () => {
                y && await F(e, Qo, "uninstallFilter")({
                    filter: y
                }), E()
            }
        })
    })() : (() => {
        const b = d ? ? !1,
            w = fe(["watchContractEvent", r, o, s, e.uid, i, f, b]);
        let v = !0,
            C = () => v = !1;
        return jt(w, {
            onLogs: l,
            onError: c
        }, y => ((async () => {
            try {
                const A = (() => {
                        if (e.transport.type === "fallback") {
                            const B = e.transport.transports.find(S => S.config.type === "webSocket");
                            return B ? B.value : e.transport
                        }
                        return e.transport
                    })(),
                    E = i ? Br({
                        abi: n,
                        eventName: i,
                        args: o
                    }) : [],
                    {
                        unsubscribe: k
                    } = await A.subscribe({
                        params: ["logs", {
                            address: r,
                            topics: E
                        }],
                        onData(B) {
                            if (!v) return;
                            const S = B.result;
                            try {
                                const {
                                    eventName: P,
                                    args: R
                                } = xa({
                                    abi: n,
                                    data: S.data,
                                    topics: S.topics,
                                    strict: d
                                }), O = gt(S, {
                                    args: R,
                                    eventName: P
                                });
                                y.onLogs([O])
                            } catch (P) {
                                let R, O;
                                if (P instanceof Qn || P instanceof To) {
                                    if (d) return;
                                    R = P.abiItem.name, O = P.abiItem.inputs ? .some(X => !("name" in X && X.name))
                                }
                                const U = gt(S, {
                                    args: O ? [] : {},
                                    eventName: R
                                });
                                y.onLogs([U])
                            }
                        },
                        onError(B) {
                            y.onError ? .(B)
                        }
                    });
                C = k, v || C()
            } catch (A) {
                c ? .(A)
            }
        })(), () => C()))
    })()
}
async function wf(e, t) {
    const {
        abi: n,
        address: r,
        args: o,
        dataSuffix: s,
        functionName: i,
        ...a
    } = t, c = Mt({
        abi: n,
        args: o,
        functionName: i
    });
    return F(e, ma, "sendTransaction")({
        data: `${c}${s?s.replace("0x",""):""}`,
        to: r,
        ...a
    })
}

function Tn(e, t, n) {
    const r = e[t.name];
    if (typeof r == "function") return r;
    const o = e[n];
    return typeof o == "function" ? o : s => t(e, s)
}
const to = "2.12.2",
    o1 = () => `@wagmi/core@${to}`;
var vf = globalThis && globalThis.__classPrivateFieldGet || function(e, t, n, r) {
        if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
        if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e)
    },
    mo, Cf;
let Rt = class Bi extends Error {
    get docsBaseUrl() {
        return "https://wagmi.sh/core"
    }
    get version() {
        return o1()
    }
    constructor(t, n = {}) {
        super(), mo.add(this), Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "WagmiCoreError"
        });
        const r = n.cause instanceof Bi ? n.cause.details : n.cause ? .message ? n.cause.message : n.details,
            o = n.cause instanceof Bi && n.cause.docsPath || n.docsPath;
        this.message = [t || "An error occurred.", "", ...n.metaMessages ? [...n.metaMessages, ""] : [], ...o ? [`Docs: ${this.docsBaseUrl}${o}.html${n.docsSlug?`#${n.docsSlug}`:""}`] : [], ...r ? [`Details: ${r}`] : [], `Version: ${this.version}`].join(`
`), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = o, this.metaMessages = n.metaMessages, this.shortMessage = t
    }
    walk(t) {
        return vf(this, mo, "m", Cf).call(this, this, t)
    }
};
mo = new WeakSet, Cf = function e(t, n) {
    return n ? .(t) ? t : t.cause ? vf(this, mo, "m", e).call(this, t.cause, n) : t
};
class Gt extends Rt {
    constructor() {
        super("Chain not configured."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainNotConfiguredError"
        })
    }
}
class s1 extends Rt {
    constructor() {
        super("Connector already connected."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ConnectorAlreadyConnectedError"
        })
    }
}
class i1 extends Rt {
    constructor() {
        super("Connector not connected."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ConnectorNotConnectedError"
        })
    }
}
class a1 extends Rt {
    constructor({
        address: t,
        connector: n
    }) {
        super(`Account "${t}" not found for connector "${n.name}".`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ConnectorAccountNotFoundError"
        })
    }
}
class c1 extends Rt {
    constructor({
        connectionChainId: t,
        connectorChainId: n
    }) {
        super(`The current chain of the connector (id: ${n}) does not match the connection's chain (id: ${t}).`, {
            metaMessages: [`Current Chain ID:  ${n}`, `Expected Chain ID: ${t}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ConnectorChainMismatchError"
        })
    }
}
async function l1(e, t) {
    let n;
    if (typeof t.connector == "function" ? n = e._internal.connectors.setup(t.connector) : n = t.connector, n.uid === e.state.current) throw new s1;
    try {
        e.setState(s => ({ ...s,
            status: "connecting"
        })), n.emitter.emit("message", {
            type: "connecting"
        });
        const r = await n.connect({
                chainId: t.chainId
            }),
            o = r.accounts;
        return n.emitter.off("connect", e._internal.events.connect), n.emitter.on("change", e._internal.events.change), n.emitter.on("disconnect", e._internal.events.disconnect), await e.storage ? .setItem("recentConnectorId", n.id), e.setState(s => ({ ...s,
            connections: new Map(s.connections).set(n.uid, {
                accounts: o,
                chainId: r.chainId,
                connector: n
            }),
            current: n.uid,
            status: "connected"
        })), {
            accounts: o,
            chainId: r.chainId
        }
    } catch (r) {
        throw e.setState(o => ({ ...o,
            status: o.current ? "connected" : "disconnected"
        })), r
    }
}

function Nx({
    abi: e,
    address: t,
    client: n
}) {
    const r = n,
        [o, s] = (() => r ? "public" in r && "wallet" in r ? [r.public, r.wallet] : "public" in r ? [r.public, void 0] : "wallet" in r ? [void 0, r.wallet] : [r, r] : [void 0, void 0])(),
        i = o != null,
        a = s != null,
        c = {};
    let l = !1,
        u = !1,
        f = !1;
    for (const d of e)
        if (d.type === "function" ? d.stateMutability === "view" || d.stateMutability === "pure" ? l = !0 : u = !0 : d.type === "event" && (f = !0), l && u && f) break;
    return i && (l && (c.read = new Proxy({}, {
        get(d, h) {
            return (...p) => {
                const {
                    args: m,
                    options: b
                } = Ur(p);
                return F(o, Je, "readContract")({
                    abi: e,
                    address: t,
                    functionName: h,
                    args: m,
                    ...b
                })
            }
        }
    })), u && (c.simulate = new Proxy({}, {
        get(d, h) {
            return (...p) => {
                const {
                    args: m,
                    options: b
                } = Ur(p);
                return F(o, Yd, "simulateContract")({
                    abi: e,
                    address: t,
                    functionName: h,
                    args: m,
                    ...b
                })
            }
        }
    })), f && (c.createEventFilter = new Proxy({}, {
        get(d, h) {
            return (...p) => {
                const m = e.find(v => v.type === "event" && v.name === h),
                    {
                        args: b,
                        options: w
                    } = js(p, m);
                return F(o, Aa, "createContractEventFilter")({
                    abi: e,
                    address: t,
                    eventName: h,
                    args: b,
                    ...w
                })
            }
        }
    }), c.getEvents = new Proxy({}, {
        get(d, h) {
            return (...p) => {
                const m = e.find(v => v.type === "event" && v.name === h),
                    {
                        args: b,
                        options: w
                    } = js(p, m);
                return F(o, Ba, "getContractEvents")({
                    abi: e,
                    address: t,
                    eventName: h,
                    args: b,
                    ...w
                })
            }
        }
    }), c.watchEvent = new Proxy({}, {
        get(d, h) {
            return (...p) => {
                const m = e.find(v => v.type === "event" && v.name === h),
                    {
                        args: b,
                        options: w
                    } = js(p, m);
                return F(o, yf, "watchContractEvent")({
                    abi: e,
                    address: t,
                    eventName: h,
                    args: b,
                    ...w
                })
            }
        }
    }))), a && u && (c.write = new Proxy({}, {
        get(d, h) {
            return (...p) => {
                const {
                    args: m,
                    options: b
                } = Ur(p);
                return F(s, wf, "writeContract")({
                    abi: e,
                    address: t,
                    functionName: h,
                    args: m,
                    ...b
                })
            }
        }
    })), (i || a) && u && (c.estimateGas = new Proxy({}, {
        get(d, h) {
            return (...p) => {
                const {
                    args: m,
                    options: b
                } = Ur(p);
                return F(o ? ? s, Td, "estimateContractGas")({
                    abi: e,
                    address: t,
                    functionName: h,
                    args: m,
                    ...b,
                    account: b.account ? ? s.account
                })
            }
        }
    })), c.address = t, c.abi = e, c
}

function Ur(e) {
    const t = e.length && Array.isArray(e[0]),
        n = t ? e[0] : [],
        r = (t ? e[1] : e[0]) ? ? {};
    return {
        args: n,
        options: r
    }
}

function js(e, t) {
    let n = !1;
    Array.isArray(e[0]) ? n = !0 : e.length === 1 ? n = t.inputs.some(s => s.indexed) : e.length === 2 && (n = !0);
    const r = n ? e[0] : void 0,
        o = (n ? e[1] : e[0]) ? ? {};
    return {
        args: r,
        options: o
    }
}
const ji = 256;
let zr = ji,
    Wr;

function Ef(e = 11) {
    if (!Wr || zr + e > ji * 2) {
        Wr = "", zr = 0;
        for (let t = 0; t < ji; t++) Wr += (256 + Math.random() * 256 | 0).toString(16).substring(1)
    }
    return Wr.substring(zr, zr++ + e)
}

function za(e) {
    const {
        batch: t,
        cacheTime: n = e.pollingInterval ? ? 4e3,
        ccipRead: r,
        key: o = "base",
        name: s = "Base Client",
        pollingInterval: i = 4e3,
        type: a = "base"
    } = e, c = e.chain, l = e.account ? _e(e.account) : void 0, {
        config: u,
        request: f,
        value: d
    } = e.transport({
        chain: c,
        pollingInterval: i
    }), h = { ...u,
        ...d
    }, p = {
        account: l,
        batch: t,
        cacheTime: n,
        ccipRead: r,
        chain: c,
        key: o,
        name: s,
        pollingInterval: i,
        request: f,
        transport: h,
        type: a,
        uid: Ef()
    };

    function m(b) {
        return w => {
            const v = w(b);
            for (const y in p) delete v[y];
            const C = { ...b,
                ...v
            };
            return Object.assign(C, {
                extend: m(C)
            })
        }
    }
    return Object.assign(p, {
        extend: m(p)
    })
}

function Af({
    key: e,
    name: t,
    request: n,
    retryCount: r = 3,
    retryDelay: o = 150,
    timeout: s,
    type: i
}, a) {
    const c = Ef();
    return {
        config: {
            key: e,
            name: t,
            request: n,
            retryCount: r,
            retryDelay: o,
            timeout: s,
            type: i
        },
        request: vy(n, {
            retryCount: r,
            retryDelay: o,
            uid: c
        }),
        value: a
    }
}

function u1(e, t = {}) {
    const {
        key: n = "custom",
        name: r = "Custom Provider",
        retryDelay: o
    } = t;
    return ({
        retryCount: s
    }) => Af({
        key: n,
        name: r,
        request: e.request.bind(e),
        retryCount: t.retryCount ? ? s,
        retryDelay: o,
        type: "custom"
    })
}
class d1 extends j {
    constructor() {
        super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
            docsPath: "/docs/clients/intro"
        })
    }
}

function f1(e, t = {}) {
    const {
        batch: n,
        fetchOptions: r,
        key: o = "http",
        name: s = "HTTP JSON-RPC",
        onFetchRequest: i,
        onFetchResponse: a,
        retryDelay: c
    } = t;
    return ({
        chain: l,
        retryCount: u,
        timeout: f
    }) => {
        const {
            batchSize: d = 1e3,
            wait: h = 0
        } = typeof n == "object" ? n : {}, p = t.retryCount ? ? u, m = f ? ? t.timeout ? ? 1e4, b = e || l ? .rpcUrls.default.http[0];
        if (!b) throw new d1;
        const w = Ty(b, {
            fetchOptions: r,
            onRequest: i,
            onResponse: a,
            timeout: m
        });
        return Af({
            key: o,
            name: s,
            async request({
                method: v,
                params: C
            }) {
                const y = {
                        method: v,
                        params: C
                    },
                    {
                        schedule: A
                    } = Ad({
                        id: b,
                        wait: h,
                        shouldSplitBatch(S) {
                            return S.length > d
                        },
                        fn: S => w.request({
                            body: S
                        }),
                        sort: (S, P) => S.id - P.id
                    }),
                    E = async S => n ? A(S) : [await w.request({
                        body: S
                    })],
                    [{
                        error: k,
                        result: B
                    }] = await E(y);
                if (k) throw new Fu({
                    body: y,
                    error: k,
                    url: b
                });
                return B
            },
            retryCount: p,
            retryDelay: c,
            timeout: m,
            type: "http"
        }, {
            fetchOptions: r,
            url: b
        })
    }
}

function h1(e) {
    const {
        scheme: t,
        statement: n,
        ...r
    } = e.match(p1) ? .groups ? ? {}, {
        chainId: o,
        expirationTime: s,
        issuedAt: i,
        notBefore: a,
        requestId: c,
        ...l
    } = e.match(m1) ? .groups ? ? {}, u = e.split("Resources:")[1] ? .split(`
- `).slice(1);
    return { ...r,
        ...l,
        ...o ? {
            chainId: Number(o)
        } : {},
        ...s ? {
            expirationTime: new Date(s)
        } : {},
        ...i ? {
            issuedAt: new Date(i)
        } : {},
        ...a ? {
            notBefore: new Date(a)
        } : {},
        ...c ? {
            requestId: c
        } : {},
        ...u ? {
            resources: u
        } : {},
        ...t ? {
            scheme: t
        } : {},
        ...n ? {
            statement: n
        } : {}
    }
}
const p1 = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
    m1 = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;

function g1(e) {
    const {
        address: t,
        domain: n,
        message: r,
        nonce: o,
        scheme: s,
        time: i = new Date
    } = e;
    if (n && r.domain !== n || o && r.nonce !== o || s && r.scheme !== s || r.expirationTime && i >= r.expirationTime || r.notBefore && i < r.notBefore) return !1;
    try {
        if (!r.address || t && !Sa(r.address, t)) return !1
    } catch {
        return !1
    }
    return !0
}
async function b1(e, t) {
    const {
        address: n,
        domain: r,
        message: o,
        nonce: s,
        scheme: i,
        signature: a,
        time: c = new Date,
        ...l
    } = t, u = h1(o);
    if (!u.address || !g1({
            address: n,
            domain: r,
            message: u,
            nonce: s,
            scheme: i,
            time: c
        })) return !1;
    const d = $d(o);
    return Ua(e, {
        address: u.address,
        hash: d,
        signature: a,
        ...l
    })
}

function y1(e) {
    return {
        call: t => kr(e, t),
        createBlockFilter: () => Gb(e),
        createContractEventFilter: t => Aa(e, t),
        createEventFilter: t => Sd(e, t),
        createPendingTransactionFilter: () => Pd(e),
        estimateContractGas: t => Td(e, t),
        estimateGas: t => la(e, t),
        getBalance: t => Od(e, t),
        getBlobBaseFee: () => Jb(e),
        getBlock: t => Bt(e, t),
        getBlockNumber: t => jr(e, t),
        getBlockTransactionCount: t => ny(e, t),
        getBytecode: t => vi(e, t),
        getChainId: () => xr(e),
        getCode: t => vi(e, t),
        getContractEvents: t => Ba(e, t),
        getEip712Domain: t => sy(e, t),
        getEnsAddress: t => Rb(e, t),
        getEnsAvatar: t => Bd(e, t),
        getEnsName: t => jd(e, t),
        getEnsResolver: t => $b(e, t),
        getEnsText: t => kd(e, t),
        getFeeHistory: t => cy(e, t),
        estimateFeesPerGas: t => G0(e, t),
        getFilterChanges: t => Ho(e, t),
        getFilterLogs: t => ly(e, t),
        getGasPrice: () => ca(e),
        getLogs: t => ka(e, t),
        getProof: t => tw(e, t),
        estimateMaxPriorityFeePerGas: t => $0(e, t),
        getStorageAt: t => uy(e, t),
        getTransaction: t => ja(e, t),
        getTransactionConfirmations: t => dy(e, t),
        getTransactionCount: t => Qu(e, t),
        getTransactionReceipt: t => Ci(e, t),
        multicall: t => _d(e, t),
        prepareTransactionRequest: t => Uo(e, t),
        readContract: t => Je(e, t),
        sendRawTransaction: t => pa(e, t),
        simulateContract: t => Yd(e, t),
        verifyMessage: t => t1(e, t),
        verifySiweMessage: t => b1(e, t),
        verifyTypedData: t => n1(e, t),
        uninstallFilter: t => Qo(e, t),
        waitForTransactionReceipt: t => nw(e, t),
        watchBlocks: t => py(e, t),
        watchBlockNumber: t => Dd(e, t),
        watchContractEvent: t => yf(e, t),
        watchEvent: t => my(e, t),
        watchPendingTransactions: t => gy(e, t)
    }
}

function Si(e) {
    return {
        addChain: t => Fm(e, t),
        deployContract: t => pg(e, t),
        getAddresses: () => by(e),
        getChainId: () => xr(e),
        getPermissions: () => yy(e),
        prepareTransactionRequest: t => Uo(e, t),
        requestAddresses: () => rw(e),
        requestPermissions: t => ow(e, t),
        sendRawTransaction: t => pa(e, t),
        sendTransaction: t => ma(e, t),
        signMessage: t => Zd(e, t),
        signTransaction: t => sw(e, t),
        signTypedData: t => iw(e, t),
        switchChain: t => aw(e, t),
        watchAsset: t => r1(e, t),
        writeContract: t => wf(e, t)
    }
}

function Fx(e) {
    const {
        key: t = "wallet",
        name: n = "Wallet Client",
        transport: r
    } = e;
    return za({ ...e,
        key: t,
        name: n,
        transport: r,
        type: "walletClient"
    }).extend(Si)
}
const w1 = 2 n ** 16 n - 1 n;
async function xf(e, t = {}) {
    let n;
    if (t.connector) {
        const {
            connector: l
        } = t, [u, f] = await Promise.all([l.getAccounts(), l.getChainId()]);
        n = {
            accounts: u,
            chainId: f,
            connector: l
        }
    } else n = e.state.connections.get(e.state.current);
    if (!n) throw new i1;
    const r = t.chainId ? ? n.chainId,
        o = await n.connector.getChainId();
    if (o !== n.chainId) throw new c1({
        connectionChainId: n.chainId,
        connectorChainId: o
    });
    const s = n.connector;
    if (s.getClient) return s.getClient({
        chainId: r
    });
    const i = _e(t.account ? ? n.accounts[0]);
    i.address = we(i.address);
    const a = e.chains.find(l => l.id === r),
        c = await n.connector.getProvider({
            chainId: r
        });
    if (t.account && !n.accounts.some(l => l.toLowerCase() === i.address.toLowerCase())) throw new a1({
        address: i.address,
        connector: s
    });
    return za({
        account: i,
        chain: a,
        name: "Connector Client",
        transport: l => u1(c)({ ...l,
            retryCount: 0
        })
    })
}
async function v1(e, t = {}) {
    let n;
    if (t.connector) n = t.connector;
    else {
        const {
            connections: o,
            current: s
        } = e.state;
        n = o.get(s) ? .connector
    }
    const r = e.state.connections;
    n && (await n.disconnect(), n.emitter.off("change", e._internal.events.change), n.emitter.off("disconnect", e._internal.events.disconnect), n.emitter.on("connect", e._internal.events.connect), r.delete(n.uid)), e.setState(o => {
        if (r.size === 0) return { ...o,
            connections: new Map,
            current: null,
            status: "disconnected"
        };
        const s = r.values().next().value;
        return { ...o,
            connections: new Map(r),
            current: s.connector.uid
        }
    }); {
        const o = e.state.current;
        if (!o) return;
        const s = e.state.connections.get(o) ? .connector;
        if (!s) return;
        await e.storage ? .setItem("recentConnectorId", s.id)
    }
}

function If(e) {
    return typeof e == "number" ? e : e === "wei" ? 0 : Math.abs(R0[e])
}

function kf(e) {
    const t = e.state.current,
        n = e.state.connections.get(t),
        r = n ? .accounts,
        o = r ? .[0],
        s = e.chains.find(a => a.id === n ? .chainId),
        i = e.state.status;
    switch (i) {
        case "connected":
            return {
                address: o,
                addresses: r,
                chain: s,
                chainId: n ? .chainId,
                connector: n ? .connector,
                isConnected: !0,
                isConnecting: !1,
                isDisconnected: !1,
                isReconnecting: !1,
                status: i
            };
        case "reconnecting":
            return {
                address: o,
                addresses: r,
                chain: s,
                chainId: n ? .chainId,
                connector: n ? .connector,
                isConnected: !!o,
                isConnecting: !1,
                isDisconnected: !1,
                isReconnecting: !0,
                status: i
            };
        case "connecting":
            return {
                address: o,
                addresses: r,
                chain: s,
                chainId: n ? .chainId,
                connector: n ? .connector,
                isConnected: !1,
                isConnecting: !0,
                isDisconnected: !1,
                isReconnecting: !1,
                status: i
            };
        case "disconnected":
            return {
                address: void 0,
                addresses: void 0,
                chain: void 0,
                chainId: void 0,
                connector: void 0,
                isConnected: !1,
                isConnecting: !1,
                isDisconnected: !0,
                isReconnecting: !1,
                status: i
            }
    }
}
async function C1(e, t) {
    const {
        allowFailure: n = !0,
        chainId: r,
        contracts: o,
        ...s
    } = t, i = e.getClient({
        chainId: r
    });
    return Tn(i, _d, "multicall")({
        allowFailure: n,
        contracts: o,
        ...s
    })
}

function E1(e, t) {
    const {
        chainId: n,
        ...r
    } = t, o = e.getClient({
        chainId: n
    });
    return Tn(o, Je, "readContract")(r)
}
async function A1(e, t) {
    const {
        allowFailure: n = !0,
        blockNumber: r,
        blockTag: o,
        ...s
    } = t, i = t.contracts;
    try {
        const a = {};
        for (const [f, d] of i.entries()) {
            const h = d.chainId ? ? e.state.chainId;
            a[h] || (a[h] = []), a[h] ? .push({
                contract: d,
                index: f
            })
        }
        const c = () => Object.entries(a).map(([f, d]) => C1(e, { ...s,
                allowFailure: n,
                blockNumber: r,
                blockTag: o,
                chainId: Number.parseInt(f),
                contracts: d.map(({
                    contract: h
                }) => h)
            })),
            l = (await Promise.all(c())).flat(),
            u = Object.values(a).flatMap(f => f.map(({
                index: d
            }) => d));
        return l.reduce((f, d, h) => (f && (f[u[h]] = d), f), [])
    } catch (a) {
        if (a instanceof ya) throw a;
        const c = () => i.map(l => E1(e, { ...l,
            blockNumber: r,
            blockTag: o
        }));
        return n ? (await Promise.allSettled(c())).map(l => l.status === "fulfilled" ? {
            result: l.value,
            status: "success"
        } : {
            error: l.reason,
            result: void 0,
            status: "failure"
        }) : await Promise.all(c())
    }
}
async function x1(e, t) {
    const {
        address: n,
        blockNumber: r,
        blockTag: o,
        chainId: s,
        token: i,
        unit: a = "ether"
    } = t;
    if (i) try {
        return al(e, {
            balanceAddress: n,
            chainId: s,
            symbolType: "string",
            tokenAddress: i
        })
    } catch (d) {
        if (d instanceof ya) {
            const h = await al(e, {
                    balanceAddress: n,
                    chainId: s,
                    symbolType: "bytes32",
                    tokenAddress: i
                }),
                p = _m(ot(h.symbol, {
                    dir: "right"
                }));
            return { ...h,
                symbol: p
            }
        }
        throw d
    }
    const c = e.getClient({
            chainId: s
        }),
        u = await Tn(c, Od, "getBalance")(r ? {
            address: n,
            blockNumber: r
        } : {
            address: n,
            blockTag: o
        }),
        f = e.chains.find(d => d.id === s) ? ? c.chain;
    return {
        decimals: f.nativeCurrency.decimals,
        formatted: Do(u, If(a)),
        symbol: f.nativeCurrency.symbol,
        value: u
    }
}
async function al(e, t) {
    const {
        balanceAddress: n,
        chainId: r,
        symbolType: o,
        tokenAddress: s,
        unit: i
    } = t, a = {
        abi: [{
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{
                type: "address"
            }],
            outputs: [{
                type: "uint256"
            }]
        }, {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{
                type: "uint8"
            }]
        }, {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{
                type: o
            }]
        }],
        address: s
    }, [c, l, u] = await A1(e, {
        allowFailure: !1,
        contracts: [{ ...a,
            functionName: "balanceOf",
            args: [n],
            chainId: r
        }, { ...a,
            functionName: "decimals",
            chainId: r
        }, { ...a,
            functionName: "symbol",
            chainId: r
        }]
    }), f = Do(c ? ? "0", If(i ? ? l));
    return {
        decimals: l,
        formatted: f,
        symbol: u,
        value: c
    }
}

function cl(e) {
    return e.state.chainId
}

function Tt(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        let n, r;
        if (Array.isArray(e) && Array.isArray(t)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Tt(e[r], t[r])) return !1;
            return !0
        }
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        const o = Object.keys(e);
        if (n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const s = o[r];
            if (s && !Tt(e[s], t[s])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}
let Ss = [];

function ll(e) {
    const t = e.chains;
    return Tt(Ss, t) ? Ss : (Ss = t, t)
}

function I1(e, t = {}) {
    let n;
    try {
        n = e.getClient(t)
    } catch {}
    return n
}
let qr = [];

function Pi(e) {
    const t = [...e.state.connections.values()];
    return e.state.status === "reconnecting" || Tt(qr, t) ? qr : (qr = t, t)
}
let Ps = [];

function ul(e) {
    const t = e.connectors;
    return Tt(Ps, t) ? Ps : (Ps = t, t)
}

function k1(e, t) {
    const {
        chainId: n,
        ...r
    } = t, o = e.getClient({
        chainId: n
    });
    return Tn(o, Bd, "getEnsAvatar")(r)
}

function B1(e, t) {
    const {
        chainId: n,
        ...r
    } = t, o = e.getClient({
        chainId: n
    });
    return Tn(o, jd, "getEnsName")(r)
}

function Ti(e, t = {}) {
    return I1(e, t) ? .extend(y1)
}
async function j1(e, t = {}) {
    const n = await xf(e, t);
    return n.extend(Si), n.extend(Si)
}
let Ts = !1;
async function S1(e, t = {}) {
    if (Ts) return [];
    Ts = !0, e.setState(l => ({ ...l,
        status: l.current ? "reconnecting" : "connecting"
    }));
    const n = [];
    if (t.connectors ? .length)
        for (const l of t.connectors) {
            let u;
            typeof l == "function" ? u = e._internal.connectors.setup(l) : u = l, n.push(u)
        } else n.push(...e.connectors);
    let r;
    try {
        r = await e.storage ? .getItem("recentConnectorId")
    } catch {}
    const o = {};
    for (const [, l] of e.state.connections) o[l.connector.id] = 1;
    r && (o[r] = 0);
    const s = Object.keys(o).length > 0 ? [...n].sort((l, u) => (o[l.id] ? ? 10) - (o[u.id] ? ? 10)) : n;
    let i = !1;
    const a = [],
        c = [];
    for (const l of s) {
        const u = await l.getProvider().catch(() => {});
        if (!u || c.some(h => h === u) || !await l.isAuthorized()) continue;
        const d = await l.connect({
            isReconnecting: !0
        }).catch(() => null);
        d && (l.emitter.off("connect", e._internal.events.connect), l.emitter.on("change", e._internal.events.change), l.emitter.on("disconnect", e._internal.events.disconnect), e.setState(h => {
            const p = new Map(i ? h.connections : new Map).set(l.uid, {
                accounts: d.accounts,
                chainId: d.chainId,
                connector: l
            });
            return { ...h,
                current: i ? h.current : l.uid,
                connections: p
            }
        }), a.push({
            accounts: d.accounts,
            chainId: d.chainId,
            connector: l
        }), c.push(u), i = !0)
    }
    return (e.state.status === "reconnecting" || e.state.status === "connecting") && (i ? e.setState(l => ({ ...l,
        status: "connected"
    })) : e.setState(l => ({ ...l,
        connections: new Map,
        current: null,
        status: "disconnected"
    }))), Ts = !1, a
}
async function P1(e, t) {
    const {
        account: n,
        connector: r,
        ...o
    } = t;
    let s;
    return typeof n == "object" && n.type === "local" ? s = e.getClient() : s = await xf(e, {
        account: n,
        connector: r
    }), Tn(s, Zd, "signMessage")({ ...o,
        ...n ? {
            account: n
        } : {}
    })
}
class Le extends Rt {
    constructor() {
        super("Provider not found."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ProviderNotFoundError"
        })
    }
}
class T1 extends Rt {
    constructor({
        connector: t
    }) {
        super(`"${t.name}" does not support programmatic chain switching.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SwitchChainNotSupportedError"
        })
    }
}
async function O1(e, t) {
    const {
        addEthereumChainParameter: n,
        chainId: r
    } = t, o = e.state.connections.get(t.connector ? .uid ? ? e.state.current);
    if (o) {
        const i = o.connector;
        if (!i.switchChain) throw new T1({
            connector: i
        });
        return await i.switchChain({
            addEthereumChainParameter: n,
            chainId: r
        })
    }
    const s = e.chains.find(i => i.id === r);
    if (!s) throw new Gt;
    return e.setState(i => ({ ...i,
        chainId: r
    })), s
}

function Bf(e, t) {
    const {
        onChange: n
    } = t;
    return e.subscribe(() => kf(e), n, {
        equalityFn(r, o) {
            const {
                connector: s,
                ...i
            } = r, {
                connector: a,
                ...c
            } = o;
            return Tt(i, c) && s ? .id === a ? .id && s ? .uid === a ? .uid
        }
    })
}

function M1(e, t) {
    const {
        onChange: n
    } = t;
    return e.subscribe(r => r.chainId, n)
}

function R1(e, t) {
    const {
        onChange: n
    } = t;
    return e.subscribe(() => Pi(e), n, {
        equalityFn: Tt
    })
}

function _1(e, t) {
    const {
        onChange: n
    } = t;
    return e._internal.connectors.subscribe((r, o) => {
        n(Object.values(r), o)
    })
}

function D1(e, t) {
    const {
        onChange: n
    } = t;
    return e.subscribe(() => Ti(e), n, {
        equalityFn(r, o) {
            return r ? .uid === o ? .uid
        }
    })
}

function Lx(e) {
    return e
}
const N1 = /(rabby|trustwallet)/,
    F1 = {
        coinbaseWallet: {
            id: "coinbaseWallet",
            name: "Coinbase Wallet",
            provider(e) {
                return e ? .coinbaseWalletExtension ? e.coinbaseWalletExtension : no(e, "isCoinbaseWallet")
            }
        },
        metaMask: {
            id: "metaMask",
            name: "MetaMask",
            provider(e) {
                return no(e, t => {
                    if (!t.isMetaMask || t.isBraveWallet && !t._events && !t._state) return !1;
                    const n = ["isApexWallet", "isAvalanche", "isBitKeep", "isBlockWallet", "isKuCoinWallet", "isMathWallet", "isOkxWallet", "isOKExWallet", "isOneInchIOSWallet", "isOneInchAndroidWallet", "isOpera", "isPortal", "isRabby", "isTokenPocket", "isTokenary", "isZerion"];
                    for (const r of n)
                        if (t[r]) return !1;
                    return !0
                })
            }
        },
        phantom: {
            id: "phantom",
            name: "Phantom",
            provider(e) {
                return e ? .phantom ? .ethereum ? e.phantom ? .ethereum : no(e, "isPhantom")
            }
        }
    };
Jo.type = "injected";

function Jo(e = {}) {
    const {
        shimDisconnect: t = !0,
        unstable_shimAsyncInject: n
    } = e;

    function r() {
        const c = e.target;
        if (typeof c == "function") {
            const l = c();
            if (l) return l
        }
        return typeof c == "object" ? c : typeof c == "string" ? { ...F1[c] ? ? {
                id: c,
                name: `${c[0].toUpperCase()}${c.slice(1)}`,
                provider: `is${c[0].toUpperCase()}${c.slice(1)}`
            }
        } : {
            id: "injected",
            name: "Injected",
            provider(l) {
                return l ? .ethereum
            }
        }
    }
    let o, s, i, a;
    return c => ({
        get icon() {
            return r().icon
        },
        get id() {
            return r().id
        },
        get name() {
            return r().name
        },
        get supportsSimulation() {
            return N1.test(this.id.toLowerCase())
        },
        type: Jo.type,
        async setup() {
            const l = await this.getProvider();
            l && e.target && (i || (i = this.onConnect.bind(this), l.on("connect", i)), o || (o = this.onAccountsChanged.bind(this), l.on("accountsChanged", o)))
        },
        async connect({
            chainId: l,
            isReconnecting: u
        } = {}) {
            const f = await this.getProvider();
            if (!f) throw new Le;
            let d = [];
            if (u) d = await this.getAccounts().catch(() => []);
            else if (t) try {
                d = (await f.request({
                    method: "wallet_requestPermissions",
                    params: [{
                        eth_accounts: {}
                    }]
                }))[0] ? .caveats ? .[0] ? .value ? .map(p => we(p)), d.length > 0 && (d = await this.getAccounts())
            } catch (h) {
                const p = h;
                if (p.code === oe.code) throw new oe(p);
                if (p.code === kt.code) throw p
            }
            try {
                !d ? .length && !u && (d = (await f.request({
                    method: "eth_requestAccounts"
                })).map(m => we(m))), i && (f.removeListener("connect", i), i = void 0), o || (o = this.onAccountsChanged.bind(this), f.on("accountsChanged", o)), s || (s = this.onChainChanged.bind(this), f.on("chainChanged", s)), a || (a = this.onDisconnect.bind(this), f.on("disconnect", a));
                let h = await this.getChainId();
                return l && h !== l && (h = (await this.switchChain({
                    chainId: l
                }).catch(m => {
                    if (m.code === oe.code) throw m;
                    return {
                        id: h
                    }
                })) ? .id ? ? h), t && await c.storage ? .removeItem(`${this.id}.disconnected`), e.target || await c.storage ? .setItem("injected.connected", !0), {
                    accounts: d,
                    chainId: h
                }
            } catch (h) {
                const p = h;
                throw p.code === oe.code ? new oe(p) : p.code === kt.code ? new kt(p) : p
            }
        },
        async disconnect() {
            const l = await this.getProvider();
            if (!l) throw new Le;
            s && (l.removeListener("chainChanged", s), s = void 0), a && (l.removeListener("disconnect", a), a = void 0), i || (i = this.onConnect.bind(this), l.on("connect", i));
            try {
                await Pa(() => l.request({
                    method: "wallet_revokePermissions",
                    params: [{
                        eth_accounts: {}
                    }]
                }), {
                    timeout: 100
                })
            } catch {}
            t && await c.storage ? .setItem(`${this.id}.disconnected`, !0), e.target || await c.storage ? .removeItem("injected.connected")
        },
        async getAccounts() {
            const l = await this.getProvider();
            if (!l) throw new Le;
            return (await l.request({
                method: "eth_accounts"
            })).map(f => we(f))
        },
        async getChainId() {
            const l = await this.getProvider();
            if (!l) throw new Le;
            const u = await l.request({
                method: "eth_chainId"
            });
            return Number(u)
        },
        async getProvider() {
            if (typeof window > "u") return;
            let l;
            const u = r();
            return typeof u.provider == "function" ? l = u.provider(window) : typeof u.provider == "string" ? l = no(window, u.provider) : l = u.provider, l && !l.removeListener && ("off" in l && typeof l.off == "function" ? l.removeListener = l.off : l.removeListener = () => {}), l
        },
        async isAuthorized() {
            try {
                if (t && await c.storage ? .getItem(`${this.id}.disconnected`) || !e.target && !await c.storage ? .getItem("injected.connected")) return !1;
                if (!await this.getProvider()) {
                    if (n !== void 0 && n !== !1) {
                        const d = async () => (typeof window < "u" && window.removeEventListener("ethereum#initialized", d), !!await this.getProvider()),
                            h = typeof n == "number" ? n : 1e3;
                        if (await Promise.race([...typeof window < "u" ? [new Promise(m => window.addEventListener("ethereum#initialized", () => m(d()), {
                                once: !0
                            }))] : [], new Promise(m => setTimeout(() => m(d()), h))])) return !0
                    }
                    throw new Le
                }
                return !!(await lo(() => this.getAccounts())).length
            } catch {
                return !1
            }
        },
        async switchChain({
            addEthereumChainParameter: l,
            chainId: u
        }) {
            const f = await this.getProvider();
            if (!f) throw new Le;
            const d = c.chains.find(h => h.id === u);
            if (!d) throw new qe(new Gt);
            try {
                return await Promise.all([f.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: W(u)
                    }]
                }).then(async () => {
                    await this.getChainId() === u && c.emitter.emit("change", {
                        chainId: u
                    })
                }), new Promise(h => c.emitter.once("change", ({
                    chainId: p
                }) => {
                    p === u && h()
                }))]), d
            } catch (h) {
                const p = h;
                if (p.code === 4902 || p ? .data ? .originalError ? .code === 4902) try {
                    const {
                        default: m,
                        ...b
                    } = d.blockExplorers ? ? {};
                    let w;
                    l ? .blockExplorerUrls ? w = l.blockExplorerUrls : m && (w = [m.url, ...Object.values(b).map(A => A.url)]);
                    let v;
                    l ? .rpcUrls ? .length ? v = l.rpcUrls : v = [d.rpcUrls.default ? .http[0] ? ? ""];
                    const C = {
                        blockExplorerUrls: w,
                        chainId: W(u),
                        chainName: l ? .chainName ? ? d.name,
                        iconUrls: l ? .iconUrls,
                        nativeCurrency: l ? .nativeCurrency ? ? d.nativeCurrency,
                        rpcUrls: v
                    };
                    if (await f.request({
                            method: "wallet_addEthereumChain",
                            params: [C]
                        }), await this.getChainId() !== u) throw new oe(new Error("User rejected switch after adding network."));
                    return d
                } catch (m) {
                    throw new oe(m)
                }
                throw p.code === oe.code ? new oe(p) : new qe(p)
            }
        },
        async onAccountsChanged(l) {
            if (l.length === 0) this.onDisconnect();
            else if (c.emitter.listenerCount("connect")) {
                const u = (await this.getChainId()).toString();
                this.onConnect({
                    chainId: u
                }), t && await c.storage ? .removeItem(`${this.id}.disconnected`)
            } else c.emitter.emit("change", {
                accounts: l.map(u => we(u))
            })
        },
        onChainChanged(l) {
            const u = Number(l);
            c.emitter.emit("change", {
                chainId: u
            })
        },
        async onConnect(l) {
            const u = await this.getAccounts();
            if (u.length === 0) return;
            const f = Number(l.chainId);
            c.emitter.emit("connect", {
                accounts: u,
                chainId: f
            });
            const d = await this.getProvider();
            d && (i && (d.removeListener("connect", i), i = void 0), o || (o = this.onAccountsChanged.bind(this), d.on("accountsChanged", o)), s || (s = this.onChainChanged.bind(this), d.on("chainChanged", s)), a || (a = this.onDisconnect.bind(this), d.on("disconnect", a)))
        },
        async onDisconnect(l) {
            const u = await this.getProvider();
            l && l.code === 1013 && u && (await this.getAccounts()).length || (c.emitter.emit("disconnect"), u && (s && (u.removeListener("chainChanged", s), s = void 0), a && (u.removeListener("disconnect", a), a = void 0), i || (i = this.onConnect.bind(this), u.on("connect", i))))
        }
    })
}

function no(e, t) {
    function n(o) {
        return typeof t == "function" ? t(o) : typeof t == "string" ? o[t] : !0
    }
    const r = e.ethereum;
    if (r ? .providers) return r.providers.find(o => n(o));
    if (r && n(r)) return r
}

function L1(e) {
    if (typeof window > "u") return;
    const t = n => e(n.detail);
    return window.addEventListener("eip6963:announceProvider", t), window.dispatchEvent(new CustomEvent("eip6963:requestProvider")), () => window.removeEventListener("eip6963:announceProvider", t)
}

function U1() {
    const e = new Set;
    let t = [];
    const n = () => L1(o => {
        t.some(({
            info: s
        }) => s.uuid === o.info.uuid) || (t = [...t, o], e.forEach(s => s(t, {
            added: [o]
        })))
    });
    let r = n();
    return {
        _listeners() {
            return e
        },
        clear() {
            e.forEach(o => o([], {
                removed: [...t]
            })), t = []
        },
        destroy() {
            this.clear(), e.clear(), r ? .()
        },
        findProvider({
            rdns: o
        }) {
            return t.find(s => s.info.rdns === o)
        },
        getProviders() {
            return t
        },
        reset() {
            this.clear(), r ? .(), r = n()
        },
        subscribe(o, {
            emitImmediately: s
        } = {}) {
            return e.add(o), s && o(t, {
                added: t
            }), () => e.delete(o)
        }
    }
}
const z1 = e => (t, n, r) => {
        const o = r.subscribe;
        return r.subscribe = (i, a, c) => {
            let l = i;
            if (a) {
                const u = c ? .equalityFn || Object.is;
                let f = i(r.getState());
                l = d => {
                    const h = i(d);
                    if (!u(f, h)) {
                        const p = f;
                        a(f = h, p)
                    }
                }, c ? .fireImmediately && a(f, f)
            }
            return o(l)
        }, e(t, n, r)
    },
    W1 = z1;

function q1(e, t) {
    let n;
    try {
        n = e()
    } catch {
        return
    }
    return {
        getItem: o => {
            var s;
            const i = c => c === null ? null : JSON.parse(c, t ? .reviver),
                a = (s = n.getItem(o)) != null ? s : null;
            return a instanceof Promise ? a.then(i) : i(a)
        },
        setItem: (o, s) => n.setItem(o, JSON.stringify(s, t ? .replacer)),
        removeItem: o => n.removeItem(o)
    }
}
const ur = e => t => {
        try {
            const n = e(t);
            return n instanceof Promise ? n : {
                then(r) {
                    return ur(r)(n)
                },
                catch (r) {
                    return this
                }
            }
        } catch (n) {
            return {
                then(r) {
                    return this
                },
                catch (r) {
                    return ur(r)(n)
                }
            }
        }
    },
    H1 = (e, t) => (n, r, o) => {
        let s = {
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: b => b,
                version: 0,
                merge: (b, w) => ({ ...w,
                    ...b
                }),
                ...t
            },
            i = !1;
        const a = new Set,
            c = new Set;
        let l;
        try {
            l = s.getStorage()
        } catch {}
        if (!l) return e((...b) => {
            console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), n(...b)
        }, r, o);
        const u = ur(s.serialize),
            f = () => {
                const b = s.partialize({ ...r()
                });
                let w;
                const v = u({
                    state: b,
                    version: s.version
                }).then(C => l.setItem(s.name, C)).catch(C => {
                    w = C
                });
                if (w) throw w;
                return v
            },
            d = o.setState;
        o.setState = (b, w) => {
            d(b, w), f()
        };
        const h = e((...b) => {
            n(...b), f()
        }, r, o);
        let p;
        const m = () => {
            var b;
            if (!l) return;
            i = !1, a.forEach(v => v(r()));
            const w = ((b = s.onRehydrateStorage) == null ? void 0 : b.call(s, r())) || void 0;
            return ur(l.getItem.bind(l))(s.name).then(v => {
                if (v) return s.deserialize(v)
            }).then(v => {
                if (v)
                    if (typeof v.version == "number" && v.version !== s.version) {
                        if (s.migrate) return s.migrate(v.state, v.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return v.state
            }).then(v => {
                var C;
                return p = s.merge(v, (C = r()) != null ? C : h), n(p, !0), f()
            }).then(() => {
                w ? .(p, void 0), i = !0, c.forEach(v => v(p))
            }).catch(v => {
                w ? .(void 0, v)
            })
        };
        return o.persist = {
            setOptions: b => {
                s = { ...s,
                    ...b
                }, b.getStorage && (l = b.getStorage())
            },
            clearStorage: () => {
                l ? .removeItem(s.name)
            },
            getOptions: () => s,
            rehydrate: () => m(),
            hasHydrated: () => i,
            onHydrate: b => (a.add(b), () => {
                a.delete(b)
            }),
            onFinishHydration: b => (c.add(b), () => {
                c.delete(b)
            })
        }, m(), p || h
    },
    Q1 = (e, t) => (n, r, o) => {
        let s = {
                storage: q1(() => localStorage),
                partialize: m => m,
                version: 0,
                merge: (m, b) => ({ ...b,
                    ...m
                }),
                ...t
            },
            i = !1;
        const a = new Set,
            c = new Set;
        let l = s.storage;
        if (!l) return e((...m) => {
            console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), n(...m)
        }, r, o);
        const u = () => {
                const m = s.partialize({ ...r()
                });
                return l.setItem(s.name, {
                    state: m,
                    version: s.version
                })
            },
            f = o.setState;
        o.setState = (m, b) => {
            f(m, b), u()
        };
        const d = e((...m) => {
            n(...m), u()
        }, r, o);
        let h;
        const p = () => {
            var m, b;
            if (!l) return;
            i = !1, a.forEach(v => {
                var C;
                return v((C = r()) != null ? C : d)
            });
            const w = ((b = s.onRehydrateStorage) == null ? void 0 : b.call(s, (m = r()) != null ? m : d)) || void 0;
            return ur(l.getItem.bind(l))(s.name).then(v => {
                if (v)
                    if (typeof v.version == "number" && v.version !== s.version) {
                        if (s.migrate) return s.migrate(v.state, v.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return v.state
            }).then(v => {
                var C;
                return h = s.merge(v, (C = r()) != null ? C : d), n(h, !0), u()
            }).then(() => {
                w ? .(h, void 0), h = r(), i = !0, c.forEach(v => v(h))
            }).catch(v => {
                w ? .(void 0, v)
            })
        };
        return o.persist = {
            setOptions: m => {
                s = { ...s,
                    ...m
                }, m.storage && (l = m.storage)
            },
            clearStorage: () => {
                l ? .removeItem(s.name)
            },
            getOptions: () => s,
            rehydrate: () => p(),
            hasHydrated: () => i,
            onHydrate: m => (a.add(m), () => {
                a.delete(m)
            }),
            onFinishHydration: m => (c.add(m), () => {
                c.delete(m)
            })
        }, s.skipHydration || p(), h || d
    },
    V1 = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? H1(e, t) : Q1(e, t),
    $1 = V1,
    dl = e => {
        let t;
        const n = new Set,
            r = (c, l) => {
                const u = typeof c == "function" ? c(t) : c;
                if (!Object.is(u, t)) {
                    const f = t;
                    t = l ? ? typeof u != "object" ? u : Object.assign({}, t, u), n.forEach(d => d(t, f))
                }
            },
            o = () => t,
            a = {
                setState: r,
                getState: o,
                subscribe: c => (n.add(c), () => n.delete(c)),
                destroy: () => {
                    n.clear()
                }
            };
        return t = e(r, o, a), a
    },
    Os = e => e ? dl(e) : dl;
var jf = {
    exports: {}
};
(function(e) {
    var t = Object.prototype.hasOwnProperty,
        n = "~";

    function r() {}
    Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1));

    function o(c, l, u) {
        this.fn = c, this.context = l, this.once = u || !1
    }

    function s(c, l, u, f, d) {
        if (typeof u != "function") throw new TypeError("The listener must be a function");
        var h = new o(u, f || c, d),
            p = n ? n + l : l;
        return c._events[p] ? c._events[p].fn ? c._events[p] = [c._events[p], h] : c._events[p].push(h) : (c._events[p] = h, c._eventsCount++), c
    }

    function i(c, l) {
        --c._eventsCount === 0 ? c._events = new r : delete c._events[l]
    }

    function a() {
        this._events = new r, this._eventsCount = 0
    }
    a.prototype.eventNames = function() {
        var l = [],
            u, f;
        if (this._eventsCount === 0) return l;
        for (f in u = this._events) t.call(u, f) && l.push(n ? f.slice(1) : f);
        return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l
    }, a.prototype.listeners = function(l) {
        var u = n ? n + l : l,
            f = this._events[u];
        if (!f) return [];
        if (f.fn) return [f.fn];
        for (var d = 0, h = f.length, p = new Array(h); d < h; d++) p[d] = f[d].fn;
        return p
    }, a.prototype.listenerCount = function(l) {
        var u = n ? n + l : l,
            f = this._events[u];
        return f ? f.fn ? 1 : f.length : 0
    }, a.prototype.emit = function(l, u, f, d, h, p) {
        var m = n ? n + l : l;
        if (!this._events[m]) return !1;
        var b = this._events[m],
            w = arguments.length,
            v, C;
        if (b.fn) {
            switch (b.once && this.removeListener(l, b.fn, void 0, !0), w) {
                case 1:
                    return b.fn.call(b.context), !0;
                case 2:
                    return b.fn.call(b.context, u), !0;
                case 3:
                    return b.fn.call(b.context, u, f), !0;
                case 4:
                    return b.fn.call(b.context, u, f, d), !0;
                case 5:
                    return b.fn.call(b.context, u, f, d, h), !0;
                case 6:
                    return b.fn.call(b.context, u, f, d, h, p), !0
            }
            for (C = 1, v = new Array(w - 1); C < w; C++) v[C - 1] = arguments[C];
            b.fn.apply(b.context, v)
        } else {
            var y = b.length,
                A;
            for (C = 0; C < y; C++) switch (b[C].once && this.removeListener(l, b[C].fn, void 0, !0), w) {
                case 1:
                    b[C].fn.call(b[C].context);
                    break;
                case 2:
                    b[C].fn.call(b[C].context, u);
                    break;
                case 3:
                    b[C].fn.call(b[C].context, u, f);
                    break;
                case 4:
                    b[C].fn.call(b[C].context, u, f, d);
                    break;
                default:
                    if (!v)
                        for (A = 1, v = new Array(w - 1); A < w; A++) v[A - 1] = arguments[A];
                    b[C].fn.apply(b[C].context, v)
            }
        }
        return !0
    }, a.prototype.on = function(l, u, f) {
        return s(this, l, u, f, !1)
    }, a.prototype.once = function(l, u, f) {
        return s(this, l, u, f, !0)
    }, a.prototype.removeListener = function(l, u, f, d) {
        var h = n ? n + l : l;
        if (!this._events[h]) return this;
        if (!u) return i(this, h), this;
        var p = this._events[h];
        if (p.fn) p.fn === u && (!d || p.once) && (!f || p.context === f) && i(this, h);
        else {
            for (var m = 0, b = [], w = p.length; m < w; m++)(p[m].fn !== u || d && !p[m].once || f && p[m].context !== f) && b.push(p[m]);
            b.length ? this._events[h] = b.length === 1 ? b[0] : b : i(this, h)
        }
        return this
    }, a.prototype.removeAllListeners = function(l) {
        var u;
        return l ? (u = n ? n + l : l, this._events[u] && i(this, u)) : (this._events = new r, this._eventsCount = 0), this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, e.exports = a
})(jf);
var G1 = jf.exports;
const K1 = pu(G1);
class J1 {
    constructor(t) {
        Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }), Object.defineProperty(this, "_emitter", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new K1
        })
    }
    on(t, n) {
        this._emitter.on(t, n)
    }
    once(t, n) {
        this._emitter.once(t, n)
    }
    off(t, n) {
        this._emitter.off(t, n)
    }
    emit(t, ...n) {
        const r = n[0];
        this._emitter.emit(t, {
            uid: this.uid,
            ...r
        })
    }
    listenerCount(t) {
        return this._emitter.listenerCount(t)
    }
}

function Z1(e) {
    return new J1(e)
}

function Y1(e, t) {
    return JSON.parse(e, (n, r) => {
        let o = r;
        return o ? .__type === "bigint" && (o = BigInt(o.value)), o ? .__type === "Map" && (o = new Map(o.value)), t ? .(n, o) ? ? o
    })
}

function fl(e, t) {
    return e.slice(0, t).join(".") || "."
}

function hl(e, t) {
    const {
        length: n
    } = e;
    for (let r = 0; r < n; ++r)
        if (e[r] === t) return r + 1;
    return 0
}

function X1(e, t) {
    const n = typeof e == "function",
        r = typeof t == "function",
        o = [],
        s = [];
    return function(a, c) {
        if (typeof c == "object")
            if (o.length) {
                const l = hl(o, this);
                l === 0 ? o[o.length] = this : (o.splice(l), s.splice(l)), s[s.length] = a;
                const u = hl(o, c);
                if (u !== 0) return r ? t.call(this, a, c, fl(s, u)) : `[ref=${fl(s,u)}]`
            } else o[0] = c, s[0] = a;
        return n ? e.call(this, a, c) : c
    }
}

function ev(e, t, n, r) {
    return JSON.stringify(e, X1((o, s) => {
        let i = s;
        return typeof i == "bigint" && (i = {
            __type: "bigint",
            value: s.toString()
        }), i instanceof Map && (i = {
            __type: "Map",
            value: Array.from(s.entries())
        }), t ? .(o, i) ? ? i
    }, r), n ? ? void 0)
}

function tv(e) {
    const {
        deserialize: t = Y1,
        key: n = "wagmi",
        serialize: r = ev,
        storage: o = Sf
    } = e;

    function s(i) {
        return i instanceof Promise ? i.then(a => a).catch(() => null) : i
    }
    return { ...o,
        key: n,
        async getItem(i, a) {
            const c = o.getItem(`${n}.${i}`),
                l = await s(c);
            return l ? t(l) ? ? null : a ? ? null
        },
        async setItem(i, a) {
            const c = `${n}.${i}`;
            a === null ? await s(o.removeItem(c)) : await s(o.setItem(c, r(a)))
        },
        async removeItem(i) {
            await s(o.removeItem(`${n}.${i}`))
        }
    }
}
const Sf = {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {}
    },
    Oi = 256;
let Hr = Oi,
    Qr;

function nv(e = 11) {
    if (!Qr || Hr + e > Oi * 2) {
        Qr = "", Hr = 0;
        for (let t = 0; t < Oi; t++) Qr += (256 + Math.random() * 256 | 0).toString(16).substring(1)
    }
    return Qr.substring(Hr, Hr++ + e)
}

function rv(e) {
    const {
        multiInjectedProviderDiscovery: t = !0,
        storage: n = tv({
            storage: typeof window < "u" && window.localStorage ? window.localStorage : Sf
        }),
        syncConnectedChain: r = !0,
        ssr: o = !1,
        ...s
    } = e, i = typeof window < "u" && t ? U1() : void 0, a = Os(() => s.chains), c = Os(() => [...s.connectors ? ? [], ...o ? [] : i ? .getProviders().map(u) ? ? []].map(l));

    function l(y) {
        const A = Z1(nv()),
            E = { ...y({
                    emitter: A,
                    chains: a.getState(),
                    storage: n
                }),
                emitter: A,
                uid: A.uid
            };
        return A.on("connect", v), E.setup ? .(), E
    }

    function u(y) {
        const {
            info: A
        } = y, E = y.provider;
        return Jo({
            target: { ...A,
                id: A.rdns,
                provider: E
            }
        })
    }
    const f = new Map;

    function d(y = {}) {
        const A = y.chainId ? ? b.getState().chainId,
            E = a.getState().find(B => B.id === A);
        if (y.chainId && !E) throw new Gt; {
            const B = f.get(b.getState().chainId);
            if (B && !E) return B;
            if (!E) throw new Gt
        } {
            const B = f.get(A);
            if (B) return B
        }
        let k;
        if (s.client) k = s.client({
            chain: E
        });
        else {
            const B = E.id,
                S = a.getState().map(O => O.id),
                P = {},
                R = Object.entries(s);
            for (const [O, U] of R)
                if (!(O === "chains" || O === "client" || O === "connectors" || O === "transports"))
                    if (typeof U == "object")
                        if (B in U) P[O] = U[B];
                        else {
                            if (S.some(T => T in U)) continue;
                            P[O] = U
                        }
            else P[O] = U;
            k = za({ ...P,
                chain: E,
                batch: P.batch ? ? {
                    multicall: !0
                },
                transport: O => s.transports[B]({ ...O,
                    connectors: c
                })
            })
        }
        return f.set(A, k), k
    }

    function h() {
        return {
            chainId: a.getState()[0].id,
            connections: new Map,
            current: null,
            status: "disconnected"
        }
    }
    let p;
    const m = "0.0.0-canary-";
    to.startsWith(m) ? p = Number.parseInt(to.replace(m, "")) : p = Number.parseInt(to.split(".")[0] ? ? "0");
    const b = Os(W1(n ? $1(h, {
        migrate(y, A) {
            if (A === p) return y;
            const E = h(),
                k = y && typeof y == "object" && "chainId" in y && typeof y.chainId == "number" && a.getState().some(B => B.id === y.chainId) ? y.chainId : E.chainId;
            return { ...E,
                chainId: k
            }
        },
        name: "store",
        partialize(y) {
            return {
                connections: {
                    __type: "Map",
                    value: Array.from(y.connections.entries()).map(([A, E]) => {
                        const {
                            id: k,
                            name: B,
                            type: S,
                            uid: P
                        } = E.connector;
                        return [A, { ...E,
                            connector: {
                                id: k,
                                name: B,
                                type: S,
                                uid: P
                            }
                        }]
                    })
                },
                chainId: y.chainId,
                current: y.current
            }
        },
        merge(y, A) {
            return typeof y == "object" && y && "status" in y && delete y.status, { ...A,
                ...y
            }
        },
        skipHydration: o,
        storage: n,
        version: p
    }) : h));
    r && b.subscribe(({
        connections: y,
        current: A
    }) => A ? y.get(A) ? .chainId : void 0, y => {
        if (a.getState().some(E => E.id === y)) return b.setState(E => ({ ...E,
            chainId: y ? ? E.chainId
        }))
    }), i ? .subscribe(y => {
        const A = new Map;
        for (const k of c.getState()) A.set(k.id, !0);
        const E = [];
        for (const k of y) {
            const B = l(u(k));
            A.has(B.id) || E.push(B)
        }
        n && !b.persist.hasHydrated() || c.setState(k => [...k, ...E], !0)
    });

    function w(y) {
        b.setState(A => {
            const E = A.connections.get(y.uid);
            return E ? { ...A,
                connections: new Map(A.connections).set(y.uid, {
                    accounts: y.accounts ? ? E.accounts,
                    chainId: y.chainId ? ? E.chainId,
                    connector: E.connector
                })
            } : A
        })
    }

    function v(y) {
        b.getState().status === "connecting" || b.getState().status === "reconnecting" || b.setState(A => {
            const E = c.getState().find(k => k.uid === y.uid);
            return E ? (E.emitter.listenerCount("connect") && E.emitter.off("connect", w), E.emitter.listenerCount("change") || E.emitter.on("change", w), E.emitter.listenerCount("disconnect") || E.emitter.on("disconnect", C), { ...A,
                connections: new Map(A.connections).set(y.uid, {
                    accounts: y.accounts,
                    chainId: y.chainId,
                    connector: E
                }),
                current: y.uid,
                status: "connected"
            }) : A
        })
    }

    function C(y) {
        b.setState(A => {
            const E = A.connections.get(y.uid);
            if (E) {
                const B = E.connector;
                B.emitter.listenerCount("change") && E.connector.emitter.off("change", w), B.emitter.listenerCount("disconnect") && E.connector.emitter.off("disconnect", C), B.emitter.listenerCount("connect") || E.connector.emitter.on("connect", v)
            }
            if (A.connections.delete(y.uid), A.connections.size === 0) return { ...A,
                connections: new Map,
                current: null,
                status: "disconnected"
            };
            const k = A.connections.values().next().value;
            return { ...A,
                connections: new Map(A.connections),
                current: k.connector.uid
            }
        })
    }
    return {
        get chains() {
            return a.getState()
        },
        get connectors() {
            return c.getState()
        },
        storage: n,
        getClient: d,
        get state() {
            return b.getState()
        },
        setState(y) {
            let A;
            typeof y == "function" ? A = y(b.getState()) : A = y;
            const E = h();
            typeof A != "object" && (A = E), Object.keys(E).some(B => !(B in A)) && (A = E), b.setState(A, !0)
        },
        subscribe(y, A, E) {
            return b.subscribe(y, A, E ? { ...E,
                fireImmediately: E.emitImmediately
            } : void 0)
        },
        _internal: {
            mipd: i,
            store: b,
            ssr: !!o,
            syncConnectedChain: r,
            transports: s.transports,
            chains: {
                setState(y) {
                    const A = typeof y == "function" ? y(a.getState()) : y;
                    if (A.length !== 0) return a.setState(A, !0)
                },
                subscribe(y) {
                    return a.subscribe(y)
                }
            },
            connectors: {
                providerDetailToConnector: u,
                setup: l,
                setState(y) {
                    return c.setState(typeof y == "function" ? y(c.getState()) : y, !0)
                },
                subscribe(y) {
                    return c.subscribe(y)
                }
            },
            events: {
                change: w,
                connect: v,
                disconnect: C
            }
        }
    }
}

function ov(e, t) {
    const {
        initialState: n,
        reconnectOnMount: r
    } = t;
    return n && !e._internal.store.persist.hasHydrated() && e.setState({ ...n,
        chainId: e.chains.some(o => o.id === n.chainId) ? n.chainId : e.chains[0].id,
        connections: r ? n.connections : new Map,
        status: r ? "reconnecting" : "disconnected"
    }), {
        async onMount() {
            if (e._internal.ssr) {
                await e._internal.store.persist.rehydrate();
                const o = e._internal.mipd ? .getProviders().map(e._internal.connectors.providerDetailToConnector).map(e._internal.connectors.setup);
                e._internal.connectors.setState(s => [...s, ...o ? ? []])
            }
            r ? S1(e) : e.storage && e.setState(o => ({ ...o,
                connections: new Map
            }))
        }
    }
}

function sv(e) {
    const {
        children: t,
        config: n,
        initialState: r,
        reconnectOnMount: o = !0
    } = e, {
        onMount: s
    } = ov(n, {
        initialState: r,
        reconnectOnMount: o
    });
    n._internal.ssr || s();
    const i = I.useRef(!0);
    return I.useEffect(() => {
        if (i.current && n._internal.ssr) return s(), () => {
            i.current = !1
        }
    }, []), t
}
const Pf = I.createContext(void 0);

function Ux(e) {
    const {
        children: t,
        config: n
    } = e, r = {
        value: n
    };
    return I.createElement(sv, e, I.createElement(Pf.Provider, r, t))
}
const iv = "2.11.3",
    av = () => `wagmi@${iv}`;
class cv extends Rt {
    constructor() {
        super(...arguments), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "WagmiError"
        })
    }
    get docsBaseUrl() {
        return "https://wagmi.sh/react"
    }
    get version() {
        return av()
    }
}
class lv extends cv {
    constructor() {
        super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider"
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "WagmiProviderNotFoundError"
        })
    }
}

function he(e = {}) {
    const t = e.config ? ? I.useContext(Pf);
    if (!t) throw new lv;
    return t
}

function uv(e, t) {
    const {
        onChange: n
    } = t;
    return e._internal.chains.subscribe((r, o) => {
        n(r, o)
    })
}
var Tf = {
        exports: {}
    },
    Of = {},
    Mf = {
        exports: {}
    },
    Rf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn = I;

function dv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var fv = typeof Object.is == "function" ? Object.is : dv,
    hv = bn.useState,
    pv = bn.useEffect,
    mv = bn.useLayoutEffect,
    gv = bn.useDebugValue;

function bv(e, t) {
    var n = t(),
        r = hv({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        o = r[0].inst,
        s = r[1];
    return mv(function() {
        o.value = n, o.getSnapshot = t, Ms(o) && s({
            inst: o
        })
    }, [e, n, t]), pv(function() {
        return Ms(o) && s({
            inst: o
        }), e(function() {
            Ms(o) && s({
                inst: o
            })
        })
    }, [e]), gv(n), n
}

function Ms(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !fv(e, n)
    } catch {
        return !0
    }
}

function yv(e, t) {
    return t()
}
var wv = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? yv : bv;
Rf.useSyncExternalStore = bn.useSyncExternalStore !== void 0 ? bn.useSyncExternalStore : wv;
Mf.exports = Rf;
var vv = Mf.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zo = I,
    Cv = vv;

function Ev(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Av = typeof Object.is == "function" ? Object.is : Ev,
    xv = Cv.useSyncExternalStore,
    Iv = Zo.useRef,
    kv = Zo.useEffect,
    Bv = Zo.useMemo,
    jv = Zo.useDebugValue;
Of.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
    var s = Iv(null);
    if (s.current === null) {
        var i = {
            hasValue: !1,
            value: null
        };
        s.current = i
    } else i = s.current;
    s = Bv(function() {
        function c(h) {
            if (!l) {
                if (l = !0, u = h, h = r(h), o !== void 0 && i.hasValue) {
                    var p = i.value;
                    if (o(p, h)) return f = p
                }
                return f = h
            }
            if (p = f, Av(u, h)) return p;
            var m = r(h);
            return o !== void 0 && o(p, m) ? p : (u = h, f = m)
        }
        var l = !1,
            u, f, d = n === void 0 ? null : n;
        return [function() {
            return c(t())
        }, d === null ? void 0 : function() {
            return c(d())
        }]
    }, [t, n, r, o]);
    var a = xv(e, s[0], s[1]);
    return kv(function() {
        i.hasValue = !0, i.value = a
    }, [a]), jv(a), a
};
Tf.exports = Of;
var Wa = Tf.exports;
const zx = pu(Wa),
    Rs = e => typeof e == "object" && !Array.isArray(e);

function Sv(e, t, n = t, r = Tt) {
    const o = I.useRef([]),
        s = Wa.useSyncExternalStoreWithSelector(e, t, n, i => i, (i, a) => {
            if (Rs(i) && Rs(a) && o.current.length) {
                for (const c of o.current)
                    if (!r(i[c], a[c])) return !1;
                return !0
            }
            return r(i, a)
        });
    if (Rs(s)) {
        const i = { ...s
        };
        let a = {};
        for (const [c, l] of Object.entries(i)) a = { ...a,
            [c]: {
                configurable: !1,
                enumerable: !0,
                get: () => (o.current.includes(c) || o.current.push(c), l)
            }
        };
        return Object.defineProperties(i, a), i
    }
    return s
}

function Se(e = {}) {
    const t = he(e);
    return Sv(n => Bf(t, {
        onChange: n
    }), () => kf(t))
}

function _f(e = {}) {
    const {
        onConnect: t,
        onDisconnect: n
    } = e, r = he(e);
    I.useEffect(() => Bf(r, {
        onChange(o, s) {
            if ((s.status === "reconnecting" || s.status === "connecting" && s.address === void 0) && o.status === "connected") {
                const {
                    address: i,
                    addresses: a,
                    chain: c,
                    chainId: l,
                    connector: u
                } = o, f = s.status === "reconnecting" || s.status === void 0;
                t ? .({
                    address: i,
                    addresses: a,
                    chain: c,
                    chainId: l,
                    connector: u,
                    isReconnected: f
                })
            } else s.status === "connected" && o.status === "disconnected" && n ? .()
        }
    }), [r, t, n])
}
var On = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    yn = typeof window > "u" || "Deno" in globalThis;

function Fe() {}

function Pv(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Mi(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Df(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function ln(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Ve(e, t) {
    return typeof e == "function" ? e(t) : e
}

function pl(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: o,
        predicate: s,
        queryKey: i,
        stale: a
    } = e;
    if (i) {
        if (r) {
            if (t.queryHash !== qa(i, t.options)) return !1
        } else if (!dr(t.queryKey, i)) return !1
    }
    if (n !== "all") {
        const c = t.isActive();
        if (n === "active" && !c || n === "inactive" && c) return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || s && !s(t))
}

function ml(e, t) {
    const {
        exact: n,
        status: r,
        predicate: o,
        mutationKey: s
    } = e;
    if (s) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Kt(t.options.mutationKey) !== Kt(s)) return !1
        } else if (!dr(t.options.mutationKey, s)) return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}

function qa(e, t) {
    return (t ? .queryKeyHashFn || Kt)(e)
}

function Kt(e) {
    return JSON.stringify(e, (t, n) => Ri(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function dr(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !dr(e[n], t[n])) : !1
}

function Nf(e, t) {
    if (e === t) return e;
    const n = gl(e) && gl(t);
    if (n || Ri(e) && Ri(t)) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            s = n ? t : Object.keys(t),
            i = s.length,
            a = n ? [] : {};
        let c = 0;
        for (let l = 0; l < i; l++) {
            const u = n ? l : s[l];
            (!n && r.includes(u) || n) && e[u] === void 0 && t[u] === void 0 ? (a[u] = void 0, c++) : (a[u] = Nf(e[u], t[u]), a[u] === e[u] && e[u] !== void 0 && c++)
        }
        return o === i && c === o ? e : a
    }
    return t
}

function go(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (e[n] !== t[n]) return !1;
    return !0
}

function gl(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Ri(e) {
    if (!bl(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!bl(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function bl(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function Tv(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function _i(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Nf(e, t) : t
}

function Ov(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function Mv(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Ff = Symbol();

function Lf(e, t) {
    return !e.queryFn && t ? .initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === Ff ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Rv = class extends On {#
        e;#
        t;#
        r;
        constructor() {
            super(), this.#r = e => {
                if (!yn && window.addEventListener) {
                    const t = () => e();
                    return window.addEventListener("visibilitychange", t, !1), () => {
                        window.removeEventListener("visibilitychange", t)
                    }
                }
            }
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#r)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t ? .(), this.#t = void 0)
        }
        setEventListener(e) {
            this.#r = e, this.#t ? .(), this.#t = e(t => {
                typeof t == "boolean" ? this.setFocused(t) : this.onFocus()
            })
        }
        setFocused(e) {
            this.#e !== e && (this.#e = e, this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(t => {
                t(e)
            })
        }
        isFocused() {
            return typeof this.#e == "boolean" ? this.#e : globalThis.document ? .visibilityState !== "hidden"
        }
    },
    Ha = new Rv,
    _v = class extends On {#
        e = !0;#
        t;#
        r;
        constructor() {
            super(), this.#r = e => {
                if (!yn && window.addEventListener) {
                    const t = () => e(!0),
                        n = () => e(!1);
                    return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
                        window.removeEventListener("online", t), window.removeEventListener("offline", n)
                    }
                }
            }
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#r)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t ? .(), this.#t = void 0)
        }
        setEventListener(e) {
            this.#r = e, this.#t ? .(), this.#t = e(this.setOnline.bind(this))
        }
        setOnline(e) {
            this.#e !== e && (this.#e = e, this.listeners.forEach(n => {
                n(e)
            }))
        }
        isOnline() {
            return this.#e
        }
    },
    bo = new _v;

function Dv(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function Uf(e) {
    return (e ? ? "online") === "online" ? bo.isOnline() : !0
}
var zf = class {
    constructor(e) {
        this.revert = e ? .revert, this.silent = e ? .silent
    }
};

function _s(e) {
    return e instanceof zf
}

function Wf(e) {
    let t = !1,
        n = 0,
        r = !1,
        o, s, i;
    const a = new Promise((w, v) => {
            s = w, i = v
        }),
        c = w => {
            r || (p(new zf(w)), e.abort ? .())
        },
        l = () => {
            t = !0
        },
        u = () => {
            t = !1
        },
        f = () => Ha.isFocused() && (e.networkMode === "always" || bo.isOnline()) && e.canRun(),
        d = () => Uf(e.networkMode) && e.canRun(),
        h = w => {
            r || (r = !0, e.onSuccess ? .(w), o ? .(), s(w))
        },
        p = w => {
            r || (r = !0, e.onError ? .(w), o ? .(), i(w))
        },
        m = () => new Promise(w => {
            o = v => {
                (r || f()) && w(v)
            }, e.onPause ? .()
        }).then(() => {
            o = void 0, r || e.onContinue ? .()
        }),
        b = () => {
            if (r) return;
            let w;
            const v = n === 0 ? e.initialPromise : void 0;
            try {
                w = v ? ? e.fn()
            } catch (C) {
                w = Promise.reject(C)
            }
            Promise.resolve(w).then(h).catch(C => {
                if (r) return;
                const y = e.retry ? ? (yn ? 0 : 3),
                    A = e.retryDelay ? ? Dv,
                    E = typeof A == "function" ? A(n, C) : A,
                    k = y === !0 || typeof y == "number" && n < y || typeof y == "function" && y(n, C);
                if (t || !k) {
                    p(C);
                    return
                }
                n++, e.onFail ? .(n, C), Tv(E).then(() => f() ? void 0 : m()).then(() => {
                    t ? p(C) : b()
                })
            })
        };
    return {
        promise: a,
        cancel: c,
        continue: () => (o ? .(), a),
        cancelRetry: l,
        continueRetry: u,
        canStart: d,
        start: () => (d() ? b() : m().then(b), a)
    }
}

function Nv() {
    let e = [],
        t = 0,
        n = d => {
            d()
        },
        r = d => {
            d()
        },
        o = d => setTimeout(d, 0);
    const s = d => {
            o = d
        },
        i = d => {
            let h;
            t++;
            try {
                h = d()
            } finally {
                t--, t || l()
            }
            return h
        },
        a = d => {
            t ? e.push(d) : o(() => {
                n(d)
            })
        },
        c = d => (...h) => {
            a(() => {
                d(...h)
            })
        },
        l = () => {
            const d = e;
            e = [], d.length && o(() => {
                r(() => {
                    d.forEach(h => {
                        n(h)
                    })
                })
            })
        };
    return {
        batch: i,
        batchCalls: c,
        schedule: a,
        setNotifyFunction: d => {
            n = d
        },
        setBatchNotifyFunction: d => {
            r = d
        },
        setScheduler: s
    }
}
var de = Nv(),
    qf = class {#
        e;
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), Mi(this.gcTime) && (this.#e = setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (yn ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            this.#e && (clearTimeout(this.#e), this.#e = void 0)
        }
    },
    Fv = class extends qf {#
        e;#
        t;#
        r;#
        n;#
        i;#
        s;
        constructor(e) {
            super(), this.#s = !1, this.#i = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#r = e.cache, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = e.state || Lv(this.options), this.state = this.#e, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            return this.#n ? .promise
        }
        setOptions(e) {
            this.options = { ...this.#i,
                ...e
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this)
        }
        setData(e, t) {
            const n = _i(this.state.data, e, this.options);
            return this.#o({
                data: n,
                type: "success",
                dataUpdatedAt: t ? .updatedAt,
                manual: t ? .manual
            }), n
        }
        setState(e, t) {
            this.#o({
                type: "setState",
                state: e,
                setStateOptions: t
            })
        }
        cancel(e) {
            const t = this.#n ? .promise;
            return this.#n ? .cancel(e), t ? t.then(Fe).catch(Fe) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(this.#e)
        }
        isActive() {
            return this.observers.some(e => Ve(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(e = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !Df(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            this.observers.find(t => t.shouldFetchOnWindowFocus()) ? .refetch({
                cancelRefetch: !1
            }), this.#n ? .continue()
        }
        onOnline() {
            this.observers.find(t => t.shouldFetchOnReconnect()) ? .refetch({
                cancelRefetch: !1
            }), this.#n ? .continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#r.notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#n && (this.#s ? this.#n.cancel({
                revert: !0
            }) : this.#n.cancelRetry()), this.scheduleGc()), this.#r.notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || this.#o({
                type: "invalidate"
            })
        }
        fetch(e, t) {
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && t ? .cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#n) return this.#n.continueRetry(), this.#n.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const a = this.observers.find(c => c.options.queryFn);
                a && this.setOptions(a.options)
            }
            const n = new AbortController,
                r = a => {
                    Object.defineProperty(a, "signal", {
                        enumerable: !0,
                        get: () => (this.#s = !0, n.signal)
                    })
                },
                o = () => {
                    const a = Lf(this.options, t),
                        c = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                    return r(c), this.#s = !1, this.options.persister ? this.options.persister(a, c, this) : a(c)
                },
                s = {
                    fetchOptions: t,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: o
                };
            r(s), this.options.behavior ? .onFetch(s, this), this.#t = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== s.fetchOptions ? .meta) && this.#o({
                type: "fetch",
                meta: s.fetchOptions ? .meta
            });
            const i = a => {
                _s(a) && a.silent || this.#o({
                    type: "error",
                    error: a
                }), _s(a) || (this.#r.config.onError ? .(a, this), this.#r.config.onSettled ? .(this.state.data, a, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            };
            return this.#n = Wf({
                initialPromise: t ? .initialPromise,
                fn: s.fetchFn,
                abort: n.abort.bind(n),
                onSuccess: a => {
                    if (a === void 0) {
                        i(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    this.setData(a), this.#r.config.onSuccess ? .(a, this), this.#r.config.onSettled ? .(a, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                },
                onError: i,
                onFail: (a, c) => {
                    this.#o({
                        type: "failed",
                        failureCount: a,
                        error: c
                    })
                },
                onPause: () => {
                    this.#o({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#o({
                        type: "continue"
                    })
                },
                retry: s.options.retry,
                retryDelay: s.options.retryDelay,
                networkMode: s.options.networkMode,
                canRun: () => !0
            }), this.#n.start()
        }#
        o(e) {
            const t = n => {
                switch (e.type) {
                    case "failed":
                        return { ...n,
                            fetchFailureCount: e.failureCount,
                            fetchFailureReason: e.error
                        };
                    case "pause":
                        return { ...n,
                            fetchStatus: "paused"
                        };
                    case "continue":
                        return { ...n,
                            fetchStatus: "fetching"
                        };
                    case "fetch":
                        return { ...n,
                            ...Hf(n.data, this.options),
                            fetchMeta: e.meta ? ? null
                        };
                    case "success":
                        return { ...n,
                            data: e.data,
                            dataUpdateCount: n.dataUpdateCount + 1,
                            dataUpdatedAt: e.dataUpdatedAt ? ? Date.now(),
                            error: null,
                            isInvalidated: !1,
                            status: "success",
                            ...!e.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                    case "error":
                        const r = e.error;
                        return _s(r) && r.revert && this.#t ? { ...this.#t,
                            fetchStatus: "idle"
                        } : { ...n,
                            error: r,
                            errorUpdateCount: n.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: n.fetchFailureCount + 1,
                            fetchFailureReason: r,
                            fetchStatus: "idle",
                            status: "error"
                        };
                    case "invalidate":
                        return { ...n,
                            isInvalidated: !0
                        };
                    case "setState":
                        return { ...n,
                            ...e.state
                        }
                }
            };
            this.state = t(this.state), de.batch(() => {
                this.observers.forEach(n => {
                    n.onQueryUpdate()
                }), this.#r.notify({
                    query: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

function Hf(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Uf(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function Lv(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Uv = class extends On {
        constructor(e = {}) {
            super(), this.config = e, this.#e = new Map
        }#
        e;
        build(e, t, n) {
            const r = t.queryKey,
                o = t.queryHash ? ? qa(r, t);
            let s = this.get(o);
            return s || (s = new Fv({
                cache: this,
                queryKey: r,
                queryHash: o,
                options: e.defaultQueryOptions(t),
                state: n,
                defaultOptions: e.getQueryDefaults(r)
            }), this.add(s)), s
        }
        add(e) {
            this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const t = this.#e.get(e.queryHash);
            t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            de.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return this.#e.get(e)
        }
        getAll() {
            return [...this.#e.values()]
        }
        find(e) {
            const t = {
                exact: !0,
                ...e
            };
            return this.getAll().find(n => pl(t, n))
        }
        findAll(e = {}) {
            const t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter(n => pl(e, n)) : t
        }
        notify(e) {
            de.batch(() => {
                this.listeners.forEach(t => {
                    t(e)
                })
            })
        }
        onFocus() {
            de.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            de.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    },
    zv = class extends qf {#
        e;#
        t;#
        r;
        constructor(e) {
            super(), this.mutationId = e.mutationId, this.#t = e.mutationCache, this.#e = [], this.state = e.state || Qf(), this.setOptions(e.options), this.scheduleGc()
        }
        setOptions(e) {
            this.options = e, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(e) {
            this.#e.includes(e) || (this.#e.push(e), this.clearGcTimeout(), this.#t.notify({
                type: "observerAdded",
                mutation: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.#e = this.#e.filter(t => t !== e), this.scheduleGc(), this.#t.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e
            })
        }
        optionalRemove() {
            this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this))
        }
        continue () {
            return this.#r ? .continue() ? ? this.execute(this.state.variables)
        }
        async execute(e) {
            this.#r = Wf({
                fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
                onFail: (r, o) => {
                    this.#n({
                        type: "failed",
                        failureCount: r,
                        error: o
                    })
                },
                onPause: () => {
                    this.#n({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#n({
                        type: "continue"
                    })
                },
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => this.#t.canRun(this)
            });
            const t = this.state.status === "pending",
                n = !this.#r.canStart();
            try {
                if (!t) {
                    this.#n({
                        type: "pending",
                        variables: e,
                        isPaused: n
                    }), await this.#t.config.onMutate ? .(e, this);
                    const o = await this.options.onMutate ? .(e);
                    o !== this.state.context && this.#n({
                        type: "pending",
                        context: o,
                        variables: e,
                        isPaused: n
                    })
                }
                const r = await this.#r.start();
                return await this.#t.config.onSuccess ? .(r, e, this.state.context, this), await this.options.onSuccess ? .(r, e, this.state.context), await this.#t.config.onSettled ? .(r, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(r, null, e, this.state.context), this.#n({
                    type: "success",
                    data: r
                }), r
            } catch (r) {
                try {
                    throw await this.#t.config.onError ? .(r, e, this.state.context, this), await this.options.onError ? .(r, e, this.state.context), await this.#t.config.onSettled ? .(void 0, r, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, r, e, this.state.context), r
                } finally {
                    this.#n({
                        type: "error",
                        error: r
                    })
                }
            } finally {
                this.#t.runNext(this)
            }
        }#
        n(e) {
            const t = n => {
                switch (e.type) {
                    case "failed":
                        return { ...n,
                            failureCount: e.failureCount,
                            failureReason: e.error
                        };
                    case "pause":
                        return { ...n,
                            isPaused: !0
                        };
                    case "continue":
                        return { ...n,
                            isPaused: !1
                        };
                    case "pending":
                        return { ...n,
                            context: e.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: e.isPaused,
                            status: "pending",
                            variables: e.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return { ...n,
                            data: e.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1
                        };
                    case "error":
                        return { ...n,
                            data: void 0,
                            error: e.error,
                            failureCount: n.failureCount + 1,
                            failureReason: e.error,
                            isPaused: !1,
                            status: "error"
                        }
                }
            };
            this.state = t(this.state), de.batch(() => {
                this.#e.forEach(n => {
                    n.onMutationUpdate(e)
                }), this.#t.notify({
                    mutation: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

function Qf() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Wv = class extends On {
    constructor(e = {}) {
        super(), this.config = e, this.#e = new Map, this.#t = Date.now()
    }#
    e;#
    t;
    build(e, t, n) {
        const r = new zv({
            mutationCache: this,
            mutationId: ++this.#t,
            options: e.defaultMutationOptions(t),
            state: n
        });
        return this.add(r), r
    }
    add(e) {
        const t = Vr(e),
            n = this.#e.get(t) ? ? [];
        n.push(e), this.#e.set(t, n), this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        const t = Vr(e);
        if (this.#e.has(t)) {
            const n = this.#e.get(t) ? .filter(r => r !== e);
            n && (n.length === 0 ? this.#e.delete(t) : this.#e.set(t, n))
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const t = this.#e.get(Vr(e)) ? .find(n => n.state.status === "pending");
        return !t || t === e
    }
    runNext(e) {
        return this.#e.get(Vr(e)) ? .find(n => n !== e && n.state.isPaused) ? .continue() ? ? Promise.resolve()
    }
    clear() {
        de.batch(() => {
            this.getAll().forEach(e => {
                this.remove(e)
            })
        })
    }
    getAll() {
        return [...this.#e.values()].flat()
    }
    find(e) {
        const t = {
            exact: !0,
            ...e
        };
        return this.getAll().find(n => ml(t, n))
    }
    findAll(e = {}) {
        return this.getAll().filter(t => ml(e, t))
    }
    notify(e) {
        de.batch(() => {
            this.listeners.forEach(t => {
                t(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(t => t.state.isPaused);
        return de.batch(() => Promise.all(e.map(t => t.continue().catch(Fe))))
    }
};

function Vr(e) {
    return e.options.scope ? .id ? ? String(e.mutationId)
}

function qv(e) {
    return {
        onFetch: (t, n) => {
            const r = async () => {
                const o = t.options,
                    s = t.fetchOptions ? .meta ? .fetchMore ? .direction,
                    i = t.state.data ? .pages || [],
                    a = t.state.data ? .pageParams || [],
                    c = {
                        pages: [],
                        pageParams: []
                    };
                let l = !1;
                const u = p => {
                        Object.defineProperty(p, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? l = !0 : t.signal.addEventListener("abort", () => {
                                l = !0
                            }), t.signal)
                        })
                    },
                    f = Lf(t.options, t.fetchOptions),
                    d = async (p, m, b) => {
                        if (l) return Promise.reject();
                        if (m == null && p.pages.length) return Promise.resolve(p);
                        const w = {
                            queryKey: t.queryKey,
                            pageParam: m,
                            direction: b ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        u(w);
                        const v = await f(w),
                            {
                                maxPages: C
                            } = t.options,
                            y = b ? Mv : Ov;
                        return {
                            pages: y(p.pages, v, C),
                            pageParams: y(p.pageParams, m, C)
                        }
                    };
                let h;
                if (s && i.length) {
                    const p = s === "backward",
                        m = p ? Hv : yl,
                        b = {
                            pages: i,
                            pageParams: a
                        },
                        w = m(o, b);
                    h = await d(b, w, p)
                } else {
                    h = await d(c, a[0] ? ? o.initialPageParam);
                    const p = e ? ? i.length;
                    for (let m = 1; m < p; m++) {
                        const b = yl(o, h);
                        h = await d(h, b)
                    }
                }
                return h
            };
            t.options.persister ? t.fetchFn = () => t.options.persister ? .(r, {
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal
            }, n) : t.fetchFn = r
        }
    }
}

function yl(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function Hv(e, {
    pages: t,
    pageParams: n
}) {
    return t.length > 0 ? e.getPreviousPageParam ? .(t[0], t, n[0], n) : void 0
}
var Wx = class {#
        e;#
        t;#
        r;#
        n;#
        i;#
        s;#
        o;#
        a;
        constructor(e = {}) {
            this.#e = e.queryCache || new Uv, this.#t = e.mutationCache || new Wv, this.#r = e.defaultOptions || {}, this.#n = new Map, this.#i = new Map, this.#s = 0
        }
        mount() {
            this.#s++, this.#s === 1 && (this.#o = Ha.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#e.onFocus())
            }), this.#a = bo.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#e.onOnline())
            }))
        }
        unmount() {
            this.#s--, this.#s === 0 && (this.#o ? .(), this.#o = void 0, this.#a ? .(), this.#a = void 0)
        }
        isFetching(e) {
            return this.#e.findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return this.#t.findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(t.queryHash) ? .state.data
        }
        ensureQueryData(e) {
            const t = this.getQueryData(e.queryKey);
            if (t === void 0) return this.fetchQuery(e); {
                const n = this.defaultQueryOptions(e),
                    r = this.#e.build(this, n);
                return e.revalidateIfStale && r.isStaleByTime(ln(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t)
            }
        }
        getQueriesData(e) {
            return this.#e.findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                s = this.#e.get(r.queryHash) ? .state.data,
                i = Pv(t, s);
            if (i !== void 0) return this.#e.build(this, r).setData(i, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return de.batch(() => this.#e.findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(t.queryHash) ? .state
        }
        removeQueries(e) {
            const t = this.#e;
            de.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = this.#e,
                r = {
                    type: "active",
                    ...e
                };
            return de.batch(() => (n.findAll(e).forEach(o => {
                o.reset()
            }), this.refetchQueries(r, t)))
        }
        cancelQueries(e = {}, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = de.batch(() => this.#e.findAll(e).map(o => o.cancel(n)));
            return Promise.all(r).then(Fe).catch(Fe)
        }
        invalidateQueries(e = {}, t = {}) {
            return de.batch(() => {
                if (this.#e.findAll(e).forEach(r => {
                        r.invalidate()
                    }), e.refetchType === "none") return Promise.resolve();
                const n = { ...e,
                    type: e.refetchType ? ? e.type ? ? "active"
                };
                return this.refetchQueries(n, t)
            })
        }
        refetchQueries(e = {}, t) {
            const n = { ...t,
                    cancelRefetch: t ? .cancelRefetch ? ? !0
                },
                r = de.batch(() => this.#e.findAll(e).filter(o => !o.isDisabled()).map(o => {
                    let s = o.fetch(void 0, n);
                    return n.throwOnError || (s = s.catch(Fe)), o.state.fetchStatus === "paused" ? Promise.resolve() : s
                }));
            return Promise.all(r).then(Fe)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = this.#e.build(this, t);
            return n.isStaleByTime(ln(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(Fe).catch(Fe)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = qv(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(Fe).catch(Fe)
        }
        resumePausedMutations() {
            return bo.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return this.#e
        }
        getMutationCache() {
            return this.#t
        }
        getDefaultOptions() {
            return this.#r
        }
        setDefaultOptions(e) {
            this.#r = e
        }
        setQueryDefaults(e, t) {
            this.#n.set(Kt(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...this.#n.values()];
            let n = {};
            return t.forEach(r => {
                dr(e, r.queryKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        setMutationDefaults(e, t) {
            this.#i.set(Kt(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...this.#i.values()];
            let n = {};
            return t.forEach(r => {
                dr(e, r.mutationKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...this.#r.queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = qa(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === Ff && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e ? ._defaulted ? e : { ...this.#r.mutations,
                ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted : !0
            }
        }
        clear() {
            this.#e.clear(), this.#t.clear()
        }
    },
    Qv = class extends On {
        constructor(e, t) {
            super(), this.options = t, this.#e = e, this.#o = null, this.bindMethods(), this.setOptions(t)
        }#
        e;#
        t = void 0;#
        r = void 0;#
        n = void 0;#
        i;#
        s;#
        o;#
        a;#
        f;#
        h;#
        l;#
        u;#
        c;#
        p = new Set;
        bindMethods() {
            this.refetch = this.refetch.bind(this)
        }
        onSubscribe() {
            this.listeners.size === 1 && (this.#t.addObserver(this), wl(this.#t, this.options) ? this.#d() : this.updateResult(), this.#y())
        }
        onUnsubscribe() {
            this.hasListeners() || this.destroy()
        }
        shouldFetchOnReconnect() {
            return Di(this.#t, this.options, this.options.refetchOnReconnect)
        }
        shouldFetchOnWindowFocus() {
            return Di(this.#t, this.options, this.options.refetchOnWindowFocus)
        }
        destroy() {
            this.listeners = new Set, this.#w(), this.#v(), this.#t.removeObserver(this)
        }
        setOptions(e, t) {
            const n = this.options,
                r = this.#t;
            if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Ve(this.options.enabled, this.#t) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
            this.#C(), this.#t.setOptions(this.options), n._defaulted && !go(this.options, n) && this.#e.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.#t,
                observer: this
            });
            const o = this.hasListeners();
            o && vl(this.#t, r, this.options, n) && this.#d(), this.updateResult(t), o && (this.#t !== r || Ve(this.options.enabled, this.#t) !== Ve(n.enabled, this.#t) || ln(this.options.staleTime, this.#t) !== ln(n.staleTime, this.#t)) && this.#m();
            const s = this.#g();
            o && (this.#t !== r || Ve(this.options.enabled, this.#t) !== Ve(n.enabled, this.#t) || s !== this.#c) && this.#b(s)
        }
        getOptimisticResult(e) {
            const t = this.#e.getQueryCache().build(this.#e, e),
                n = this.createResult(t, e);
            return $v(this, n) && (this.#n = n, this.#s = this.options, this.#i = this.#t.state), n
        }
        getCurrentResult() {
            return this.#n
        }
        trackResult(e, t) {
            const n = {};
            return Object.keys(e).forEach(r => {
                Object.defineProperty(n, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackProp(r), t ? .(r), e[r])
                })
            }), n
        }
        trackProp(e) {
            this.#p.add(e)
        }
        getCurrentQuery() {
            return this.#t
        }
        refetch({ ...e
        } = {}) {
            return this.fetch({ ...e
            })
        }
        fetchOptimistic(e) {
            const t = this.#e.defaultQueryOptions(e),
                n = this.#e.getQueryCache().build(this.#e, t);
            return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, t))
        }
        fetch(e) {
            return this.#d({ ...e,
                cancelRefetch: e.cancelRefetch ? ? !0
            }).then(() => (this.updateResult(), this.#n))
        }#
        d(e) {
            this.#C();
            let t = this.#t.fetch(this.options, e);
            return e ? .throwOnError || (t = t.catch(Fe)), t
        }#
        m() {
            this.#w();
            const e = ln(this.options.staleTime, this.#t);
            if (yn || this.#n.isStale || !Mi(e)) return;
            const n = Df(this.#n.dataUpdatedAt, e) + 1;
            this.#l = setTimeout(() => {
                this.#n.isStale || this.updateResult()
            }, n)
        }#
        g() {
            return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ? ? !1
        }#
        b(e) {
            this.#v(), this.#c = e, !(yn || Ve(this.options.enabled, this.#t) === !1 || !Mi(this.#c) || this.#c === 0) && (this.#u = setInterval(() => {
                (this.options.refetchIntervalInBackground || Ha.isFocused()) && this.#d()
            }, this.#c))
        }#
        y() {
            this.#m(), this.#b(this.#g())
        }#
        w() {
            this.#l && (clearTimeout(this.#l), this.#l = void 0)
        }#
        v() {
            this.#u && (clearInterval(this.#u), this.#u = void 0)
        }
        createResult(e, t) {
            const n = this.#t,
                r = this.options,
                o = this.#n,
                s = this.#i,
                i = this.#s,
                c = e !== n ? e.state : this.#r,
                {
                    state: l
                } = e;
            let u = { ...l
                },
                f = !1,
                d;
            if (t._optimisticResults) {
                const E = this.hasListeners(),
                    k = !E && wl(e, t),
                    B = E && vl(e, n, t, r);
                (k || B) && (u = { ...u,
                    ...Hf(l.data, e.options)
                }), t._optimisticResults === "isRestoring" && (u.fetchStatus = "idle")
            }
            let {
                error: h,
                errorUpdatedAt: p,
                status: m
            } = u;
            if (t.select && u.data !== void 0)
                if (o && u.data === s ? .data && t.select === this.#a) d = this.#f;
                else try {
                    this.#a = t.select, d = t.select(u.data), d = _i(o ? .data, d, t), this.#f = d, this.#o = null
                } catch (E) {
                    this.#o = E
                } else d = u.data;
            if (t.placeholderData !== void 0 && d === void 0 && m === "pending") {
                let E;
                if (o ? .isPlaceholderData && t.placeholderData === i ? .placeholderData) E = o.data;
                else if (E = typeof t.placeholderData == "function" ? t.placeholderData(this.#h ? .state.data, this.#h) : t.placeholderData, t.select && E !== void 0) try {
                    E = t.select(E), this.#o = null
                } catch (k) {
                    this.#o = k
                }
                E !== void 0 && (m = "success", d = _i(o ? .data, E, t), f = !0)
            }
            this.#o && (h = this.#o, d = this.#f, p = Date.now(), m = "error");
            const b = u.fetchStatus === "fetching",
                w = m === "pending",
                v = m === "error",
                C = w && b,
                y = d !== void 0;
            return {
                status: m,
                fetchStatus: u.fetchStatus,
                isPending: w,
                isSuccess: m === "success",
                isError: v,
                isInitialLoading: C,
                isLoading: C,
                data: d,
                dataUpdatedAt: u.dataUpdatedAt,
                error: h,
                errorUpdatedAt: p,
                failureCount: u.fetchFailureCount,
                failureReason: u.fetchFailureReason,
                errorUpdateCount: u.errorUpdateCount,
                isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
                isFetchedAfterMount: u.dataUpdateCount > c.dataUpdateCount || u.errorUpdateCount > c.errorUpdateCount,
                isFetching: b,
                isRefetching: b && !w,
                isLoadingError: v && !y,
                isPaused: u.fetchStatus === "paused",
                isPlaceholderData: f,
                isRefetchError: v && y,
                isStale: Qa(e, t),
                refetch: this.refetch
            }
        }
        updateResult(e) {
            const t = this.#n,
                n = this.createResult(this.#t, this.options);
            if (this.#i = this.#t.state, this.#s = this.options, this.#i.data !== void 0 && (this.#h = this.#t), go(n, t)) return;
            this.#n = n;
            const r = {},
                o = () => {
                    if (!t) return !0;
                    const {
                        notifyOnChangeProps: s
                    } = this.options, i = typeof s == "function" ? s() : s;
                    if (i === "all" || !i && !this.#p.size) return !0;
                    const a = new Set(i ? ? this.#p);
                    return this.options.throwOnError && a.add("error"), Object.keys(this.#n).some(c => {
                        const l = c;
                        return this.#n[l] !== t[l] && a.has(l)
                    })
                };
            e ? .listeners !== !1 && o() && (r.listeners = !0), this.#E({ ...r,
                ...e
            })
        }#
        C() {
            const e = this.#e.getQueryCache().build(this.#e, this.options);
            if (e === this.#t) return;
            const t = this.#t;
            this.#t = e, this.#r = e.state, this.hasListeners() && (t ? .removeObserver(this), e.addObserver(this))
        }
        onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#y()
        }#
        E(e) {
            de.batch(() => {
                e.listeners && this.listeners.forEach(t => {
                    t(this.#n)
                }), this.#e.getQueryCache().notify({
                    query: this.#t,
                    type: "observerResultsUpdated"
                })
            })
        }
    };

function Vv(e, t) {
    return Ve(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1)
}

function wl(e, t) {
    return Vv(e, t) || e.state.data !== void 0 && Di(e, t, t.refetchOnMount)
}

function Di(e, t, n) {
    if (Ve(t.enabled, e) !== !1) {
        const r = typeof n == "function" ? n(e) : n;
        return r === "always" || r !== !1 && Qa(e, t)
    }
    return !1
}

function vl(e, t, n, r) {
    return (e !== t || Ve(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && Qa(e, n)
}

function Qa(e, t) {
    return Ve(t.enabled, e) !== !1 && e.isStaleByTime(ln(t.staleTime, e))
}

function $v(e, t) {
    return !go(e.getCurrentResult(), t)
}
var Gv = class extends On {#
    e;#
    t = void 0;#
    r;#
    n;
    constructor(e, t) {
        super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#i()
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
    }
    setOptions(e) {
        const t = this.options;
        this.options = this.#e.defaultMutationOptions(e), go(this.options, t) || this.#e.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#r,
            observer: this
        }), t ? .mutationKey && this.options.mutationKey && Kt(t.mutationKey) !== Kt(this.options.mutationKey) ? this.reset() : this.#r ? .state.status === "pending" && this.#r.setOptions(this.options)
    }
    onUnsubscribe() {
        this.hasListeners() || this.#r ? .removeObserver(this)
    }
    onMutationUpdate(e) {
        this.#i(), this.#s(e)
    }
    getCurrentResult() {
        return this.#t
    }
    reset() {
        this.#r ? .removeObserver(this), this.#r = void 0, this.#i(), this.#s()
    }
    mutate(e, t) {
        return this.#n = t, this.#r ? .removeObserver(this), this.#r = this.#e.getMutationCache().build(this.#e, this.options), this.#r.addObserver(this), this.#r.execute(e)
    }#
    i() {
        const e = this.#r ? .state ? ? Qf();
        this.#t = { ...e,
            isPending: e.status === "pending",
            isSuccess: e.status === "success",
            isError: e.status === "error",
            isIdle: e.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        }
    }#
    s(e) {
        de.batch(() => {
            if (this.#n && this.hasListeners()) {
                const t = this.#t.variables,
                    n = this.#t.context;
                e ? .type === "success" ? (this.#n.onSuccess ? .(e.data, t, n), this.#n.onSettled ? .(e.data, null, t, n)) : e ? .type === "error" && (this.#n.onError ? .(e.error, t, n), this.#n.onSettled ? .(void 0, e.error, t, n))
            }
            this.listeners.forEach(t => {
                t(this.#t)
            })
        })
    }
};

function Kv(e) {
    return JSON.stringify(e, (t, n) => Jv(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : typeof n == "bigint" ? n.toString() : n)
}

function Jv(e) {
    if (!Cl(e)) return !1;
    const t = e.constructor;
    if (typeof t > "u") return !0;
    const n = t.prototype;
    return !(!Cl(n) || !n.hasOwnProperty("isPrototypeOf"))
}

function Cl(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function Yo(e) {
    const {
        _defaulted: t,
        behavior: n,
        gcTime: r,
        initialData: o,
        initialDataUpdatedAt: s,
        maxPages: i,
        meta: a,
        networkMode: c,
        queryFn: l,
        queryHash: u,
        queryKey: f,
        queryKeyHashFn: d,
        retry: h,
        retryDelay: p,
        structuralSharing: m,
        getPreviousPageParam: b,
        getNextPageParam: w,
        initialPageParam: v,
        _optimisticResults: C,
        enabled: y,
        notifyOnChangeProps: A,
        placeholderData: E,
        refetchInterval: k,
        refetchIntervalInBackground: B,
        refetchOnMount: S,
        refetchOnReconnect: P,
        refetchOnWindowFocus: R,
        retryOnMount: O,
        select: U,
        staleTime: X,
        suspense: T,
        throwOnError: M,
        config: N,
        connector: H,
        query: Q,
        ...Y
    } = e;
    return Y
}

function Zv(e) {
    return {
        mutationFn(t) {
            return l1(e, t)
        },
        mutationKey: ["connect"]
    }
}

function Yv(e) {
    return {
        mutationFn(t) {
            return v1(e, t)
        },
        mutationKey: ["disconnect"]
    }
}

function Xv(e, t = {}) {
    return {
        async queryFn({
            queryKey: n
        }) {
            const {
                address: r,
                scopeKey: o,
                ...s
            } = n[1];
            if (!r) throw new Error("address is required");
            return await x1(e, { ...s,
                address: r
            }) ? ? null
        },
        queryKey: e6(t)
    }
}

function e6(e = {}) {
    return ["balance", Yo(e)]
}

function t6(e, t = {}) {
    return {
        async queryFn({
            queryKey: n
        }) {
            const {
                name: r,
                scopeKey: o,
                ...s
            } = n[1];
            if (!r) throw new Error("name is required");
            return k1(e, { ...s,
                name: r
            })
        },
        queryKey: n6(t)
    }
}

function n6(e = {}) {
    return ["ensAvatar", Yo(e)]
}

function r6(e, t = {}) {
    return {
        async queryFn({
            queryKey: n
        }) {
            const {
                address: r,
                scopeKey: o,
                ...s
            } = n[1];
            if (!r) throw new Error("address is required");
            return B1(e, { ...s,
                address: r
            })
        },
        queryKey: o6(t)
    }
}

function o6(e = {}) {
    return ["ensName", Yo(e)]
}

function s6(e, t = {}) {
    return {
        gcTime: 0,
        async queryFn({
            queryKey: n
        }) {
            const {
                connector: r
            } = t, {
                connectorUid: o,
                scopeKey: s,
                ...i
            } = n[1];
            return j1(e, { ...i,
                connector: r
            })
        },
        queryKey: i6(t)
    }
}

function i6(e = {}) {
    const {
        connector: t,
        ...n
    } = e;
    return ["walletClient", { ...Yo(n),
        connectorUid: t ? .uid
    }]
}

function a6(e) {
    return {
        mutationFn(t) {
            return P1(e, t)
        },
        mutationKey: ["signMessage"]
    }
}

function c6(e) {
    return {
        mutationFn(t) {
            return O1(e, t)
        },
        mutationKey: ["switchChain"]
    }
}
var Vf = I.createContext(void 0),
    Va = e => {
        const t = I.useContext(Vf);
        if (e) return e;
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t
    },
    qx = ({
        client: e,
        children: t
    }) => (I.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), xm.jsx(Vf.Provider, {
        value: e,
        children: t
    })),
    $f = I.createContext(!1),
    l6 = () => I.useContext($f);
$f.Provider;

function u6() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        },
        reset: () => {
            e = !0
        },
        isReset: () => e
    }
}
var d6 = I.createContext(u6()),
    f6 = () => I.useContext(d6);

function Gf(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}

function h6() {}
var p6 = (e, t) => {
        (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1))
    },
    m6 = e => {
        I.useEffect(() => {
            e.clearReset()
        }, [e])
    },
    g6 = ({
        result: e,
        errorResetBoundary: t,
        throwOnError: n,
        query: r
    }) => e.isError && !t.isReset() && !e.isFetching && r && Gf(n, [e.error, r]),
    b6 = e => {
        e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3)
    },
    y6 = (e, t) => e ? .suspense && t.isPending,
    w6 = (e, t, n) => t.fetchOptimistic(e).catch(() => {
        n.clearReset()
    });

function v6(e, t, n) {
    const r = Va(n),
        o = l6(),
        s = f6(),
        i = r.defaultQueryOptions(e);
    r.getDefaultOptions().queries ? ._experimental_beforeQuery ? .(i), i._optimisticResults = o ? "isRestoring" : "optimistic", b6(i), p6(i, s), m6(s);
    const [a] = I.useState(() => new t(r, i)), c = a.getOptimisticResult(i);
    if (I.useSyncExternalStore(I.useCallback(l => {
            const u = o ? () => {} : a.subscribe(de.batchCalls(l));
            return a.updateResult(), u
        }, [a, o]), () => a.getCurrentResult(), () => a.getCurrentResult()), I.useEffect(() => {
            a.setOptions(i, {
                listeners: !1
            })
        }, [i, a]), y6(i, c)) throw w6(i, a, s);
    if (g6({
            result: c,
            errorResetBoundary: s,
            throwOnError: i.throwOnError,
            query: r.getQueryCache().get(i.queryHash)
        })) throw c.error;
    return r.getDefaultOptions().queries ? ._experimental_afterQuery ? .(i, c), i.notifyOnChangeProps ? c : a.trackResult(c)
}

function Kf(e, t) {
    return v6(e, Qv, t)
}

function Xo(e, t) {
    const n = Va(t),
        [r] = I.useState(() => new Gv(n, e));
    I.useEffect(() => {
        r.setOptions(e)
    }, [r, e]);
    const o = I.useSyncExternalStore(I.useCallback(i => r.subscribe(de.batchCalls(i)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()),
        s = I.useCallback((i, a) => {
            r.mutate(i, a).catch(h6)
        }, [r]);
    if (o.error && Gf(r.options.throwOnError, [o.error])) throw o.error;
    return { ...o,
        mutate: s,
        mutateAsync: o.mutate
    }
}

function es(e) {
    const t = Kf({ ...e,
        queryKeyHashFn: Kv
    });
    return t.queryKey = e.queryKey, t
}

function ts(e = {}) {
    const t = he(e);
    return I.useSyncExternalStore(n => M1(t, {
        onChange: n
    }), () => cl(t), () => cl(t))
}

function Jf(e = {}) {
    const {
        address: t,
        query: n = {}
    } = e, r = he(e), o = ts({
        config: r
    }), s = Xv(r, { ...e,
        chainId: e.chainId ? ? o
    }), i = !!(t && (n.enabled ? ? !0));
    return es({ ...n,
        ...s,
        enabled: i
    })
}

function C6(e = {}) {
    const t = he(e);
    return I.useSyncExternalStore(n => uv(t, {
        onChange: n
    }), () => ll(t), () => ll(t))
}

function E6(e = {}) {
    const t = he(e);
    return I.useSyncExternalStore(n => _1(t, {
        onChange: n
    }), () => ul(t), () => ul(t))
}

function A6(e = {}) {
    const {
        mutation: t
    } = e, n = he(e), r = Zv(n), {
        mutate: o,
        mutateAsync: s,
        ...i
    } = Xo({ ...t,
        ...r
    });
    return I.useEffect(() => n.subscribe(({
        status: a
    }) => a, (a, c) => {
        c === "connected" && a === "disconnected" && i.reset()
    }), [n, i.reset]), { ...i,
        connect: o,
        connectAsync: s,
        connectors: E6({
            config: n
        })
    }
}

function x6(e = {}) {
    const t = he(e);
    return I.useSyncExternalStore(n => R1(t, {
        onChange: n
    }), () => Pi(t), () => Pi(t))
}

function $a(e = {}) {
    const {
        mutation: t
    } = e, n = he(e), r = Yv(n), {
        mutate: o,
        mutateAsync: s,
        ...i
    } = Xo({ ...t,
        ...r
    });
    return { ...i,
        connectors: x6({
            config: n
        }).map(a => a.connector),
        disconnect: o,
        disconnectAsync: s
    }
}

function I6(e = {}) {
    const {
        name: t,
        query: n = {}
    } = e, r = he(e), o = ts({
        config: r
    }), s = t6(r, { ...e,
        chainId: e.chainId ? ? o
    }), i = !!(t && (n.enabled ? ? !0));
    return es({ ...n,
        ...s,
        enabled: i
    })
}

function k6(e = {}) {
    const {
        address: t,
        query: n = {}
    } = e, r = he(e), o = ts({
        config: r
    }), s = r6(r, { ...e,
        chainId: e.chainId ? ? o
    }), i = !!(t && (n.enabled ? ? !0));
    return es({ ...n,
        ...s,
        enabled: i
    })
}

function B6(e = {}) {
    const t = he(e);
    return Wa.useSyncExternalStoreWithSelector(n => D1(t, {
        onChange: n
    }), () => Ti(t, e), () => Ti(t, e), n => n, (n, r) => n ? .uid === r ? .uid)
}

function j6(e = {}) {
    const {
        mutation: t
    } = e, n = he(e), r = a6(n), {
        mutate: o,
        mutateAsync: s,
        ...i
    } = Xo({ ...t,
        ...r
    });
    return { ...i,
        signMessage: o,
        signMessageAsync: s
    }
}

function S6(e = {}) {
    const {
        mutation: t
    } = e, n = he(e), r = c6(n), {
        mutate: o,
        mutateAsync: s,
        ...i
    } = Xo({ ...t,
        ...r
    });
    return { ...i,
        chains: C6({
            config: n
        }),
        switchChain: o,
        switchChainAsync: s
    }
}

function Hx(e = {}) {
    const {
        query: t = {},
        ...n
    } = e, r = he(n), o = Va(), {
        address: s,
        connector: i,
        status: a
    } = Se({
        config: r
    }), c = ts({
        config: r
    }), {
        queryKey: l,
        ...u
    } = s6(r, { ...e,
        chainId: e.chainId ? ? c,
        connector: e.connector ? ? i
    }), f = !!(a !== "disconnected" && (t.enabled ? ? !0)), d = I.useRef(s);
    return I.useEffect(() => {
        const h = d.current;
        !s && h ? (o.removeQueries({
            queryKey: l
        }), d.current = void 0) : s !== h && (o.invalidateQueries({
            queryKey: l
        }), d.current = s)
    }, [s, o]), es({ ...t,
        ...u,
        queryKey: l,
        enabled: f,
        staleTime: Number.POSITIVE_INFINITY
    })
}
const P6 = {
        gasPriceOracle: {
            address: "0x420000000000000000000000000000000000000F"
        },
        l1Block: {
            address: "0x4200000000000000000000000000000000000015"
        },
        l2CrossDomainMessenger: {
            address: "0x4200000000000000000000000000000000000007"
        },
        l2Erc721Bridge: {
            address: "0x4200000000000000000000000000000000000014"
        },
        l2StandardBridge: {
            address: "0x4200000000000000000000000000000000000010"
        },
        l2ToL1MessagePasser: {
            address: "0x4200000000000000000000000000000000000016"
        }
    },
    T6 = {
        block: Wu({
            format(e) {
                return {
                    transactions: e.transactions ? .map(n => {
                        if (typeof n == "string") return n;
                        const r = Lo(n);
                        return r.typeHex === "0x7e" && (r.isSystemTx = n.isSystemTx, r.mint = n.mint ? re(n.mint) : void 0, r.sourceHash = n.sourceHash, r.type = "deposit"), r
                    }),
                    stateRoot: e.stateRoot
                }
            }
        }),
        transaction: zu({
            format(e) {
                const t = {};
                return e.type === "0x7e" && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? re(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t
            }
        }),
        transactionReceipt: Rd({
            format(e) {
                return {
                    l1GasPrice: e.l1GasPrice ? re(e.l1GasPrice) : null,
                    l1GasUsed: e.l1GasUsed ? re(e.l1GasUsed) : null,
                    l1Fee: e.l1Fee ? re(e.l1Fee) : null,
                    l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null
                }
            }
        })
    };

function O6(e, t) {
    return _6(e) ? R6(e) : Jd(e, t)
}
const M6 = {
    transaction: O6
};

function R6(e) {
    D6(e);
    const {
        sourceHash: t,
        data: n,
        from: r,
        gas: o,
        isSystemTx: s,
        mint: i,
        to: a,
        value: c
    } = e, l = [t, r, a ? ? "0x", i ? L(i) : "0x", c ? L(c) : "0x", o ? L(o) : "0x", s ? "0x1" : "0x", n ? ? "0x"];
    return bt(["0x7e", Vt(l)])
}

function _6(e) {
    return e.type === "deposit" || typeof e.sourceHash < "u"
}

function D6(e) {
    const {
        from: t,
        to: n
    } = e;
    if (t && !le(t)) throw new ve({
        address: t
    });
    if (n && !le(n)) throw new ve({
        address: n
    })
}
const yo = {
        contracts: P6,
        formatters: T6,
        serializers: M6
    },
    Qx = Ie({
        id: 42161,
        name: "Arbitrum One",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://arb1.arbitrum.io/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Arbiscan",
                url: "https://arbiscan.io",
                apiUrl: "https://api.arbiscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 7654707
            }
        }
    }),
    Vx = Ie({
        id: 421614,
        name: "Arbitrum Sepolia",
        nativeCurrency: {
            name: "Arbitrum Sepolia Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia-rollup.arbitrum.io/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Arbiscan",
                url: "https://sepolia.arbiscan.io",
                apiUrl: "https://api-sepolia.arbiscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 81930
            }
        },
        testnet: !0
    }),
    $r = 1,
    $x = Ie({ ...yo,
        id: 8453,
        name: "Base",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.base.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Basescan",
                url: "https://basescan.org",
                apiUrl: "https://api.basescan.org/api"
            }
        },
        contracts: { ...yo.contracts,
            l2OutputOracle: {
                [$r]: {
                    address: "0x56315b90c40730925ec5485cf004d835058518A0"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 5022
            },
            portal: {
                [$r]: {
                    address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                    blockCreated: 17482143
                }
            },
            l1StandardBridge: {
                [$r]: {
                    address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                    blockCreated: 17482143
                }
            }
        },
        sourceId: $r
    }),
    Gx = Ie({
        id: 59144,
        name: "Linea Mainnet",
        nativeCurrency: {
            name: "Linea Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.linea.build"],
                webSocket: ["wss://rpc.linea.build"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://lineascan.build",
                apiUrl: "https://api.lineascan.build/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 42
            }
        },
        testnet: !1
    }),
    Kx = Ie({
        id: 59141,
        name: "Linea Sepolia Testnet",
        nativeCurrency: {
            name: "Linea Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.sepolia.linea.build"],
                webSocket: ["wss://rpc.sepolia.linea.build"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://sepolia.lineascan.build",
                apiUrl: "https://api-sepolia.lineascan.build/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 227427
            }
        },
        testnet: !0
    }),
    Ga = 50000 n,
    El = w1 * 32 n,
    Zf = {
        block: Wu({
            format(e) {
                const t = e.transactions ? .map(n => {
                    if (typeof n == "string") return n;
                    const r = Zf.transaction ? .format(n);
                    return r.typeHex === "0x71" ? r.type = "eip712" : r.typeHex === "0xff" && (r.type = "priority"), r
                });
                return {
                    l1BatchNumber: e.l1BatchNumber ? re(e.l1BatchNumber) : null,
                    l1BatchTimestamp: e.l1BatchTimestamp ? re(e.l1BatchTimestamp) : null,
                    transactions: t
                }
            }
        }),
        transaction: zu({
            format(e) {
                const t = {};
                return e.type === "0x71" ? t.type = "eip712" : e.type === "0xff" && (t.type = "priority"), { ...t,
                    l1BatchNumber: e.l1BatchNumber ? re(e.l1BatchNumber) : null,
                    l1BatchTxIndex: e.l1BatchTxIndex ? re(e.l1BatchTxIndex) : null
                }
            }
        }),
        transactionReceipt: Rd({
            format(e) {
                return {
                    l1BatchNumber: e.l1BatchNumber ? re(e.l1BatchNumber) : null,
                    l1BatchTxIndex: e.l1BatchTxIndex ? re(e.l1BatchTxIndex) : null,
                    logs: e.logs.map(t => ({ ...gt(t),
                        l1BatchNumber: t.l1BatchNumber ? re(t.l1BatchNumber) : null,
                        transactionLogIndex: Ke(t.transactionLogIndex),
                        logType: t.logType
                    })),
                    l2ToL1Logs: e.l2ToL1Logs.map(t => ({
                        blockNumber: re(t.blockHash),
                        blockHash: t.blockHash,
                        l1BatchNumber: re(t.l1BatchNumber),
                        transactionIndex: re(t.transactionIndex),
                        shardId: re(t.shardId),
                        isService: t.isService,
                        sender: t.sender,
                        key: t.key,
                        value: t.value,
                        transactionHash: t.transactionHash,
                        logIndex: re(t.logIndex)
                    }))
                }
            }
        }),
        transactionRequest: H0({
            exclude: ["customSignature", "factoryDeps", "gasPerPubdata", "paymaster", "paymasterInput"],
            format(e) {
                return e.gasPerPubdata || e.paymaster && e.paymasterInput || e.factoryDeps || e.customSignature ? {
                    eip712Meta: { ...e.gasPerPubdata ? {
                            gasPerPubdata: L(e.gasPerPubdata)
                        } : {
                            gasPerPubdata: L(Ga)
                        },
                        ...e.paymaster && e.paymasterInput ? {
                            paymasterParams: {
                                paymaster: e.paymaster,
                                paymasterInput: Array.from(We(e.paymasterInput))
                            }
                        } : {},
                        ...e.factoryDeps ? {
                            factoryDeps: e.factoryDeps.map(t => Array.from(We(t)))
                        } : {},
                        ...e.customSignature ? {
                            customSignature: Array.from(We(e.customSignature))
                        } : {}
                    },
                    type: "0x71"
                } : {}
            }
        })
    };
class N6 extends j {
    constructor() {
        super(["Transaction is not an EIP712 transaction.", "", "Transaction must:", '  - include `type: "eip712"`', "  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`"].join(`
`)), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidEip712TransactionError"
        })
    }
}

function Yf(e) {
    return !!(e.type === "eip712" || "customSignature" in e && e.customSignature || "paymaster" in e && e.paymaster || "paymasterInput" in e && e.paymasterInput || "gasPerPubdata" in e && typeof e.gasPerPubdata == "bigint" || "factoryDeps" in e && e.factoryDeps)
}

function Xf(e) {
    const {
        chainId: t,
        to: n,
        from: r,
        paymaster: o,
        paymasterInput: s
    } = e;
    if (!Yf(e)) throw new N6;
    if (!t || t <= 0) throw new _o({
        chainId: t
    });
    if (n && !le(n)) throw new ve({
        address: n
    });
    if (r && !le(r)) throw new ve({
        address: r
    });
    if (o && !le(o)) throw new ve({
        address: o
    });
    if (o && !s) throw new j("`paymasterInput` must be provided when `paymaster` is defined");
    if (!o && s) throw new j("`paymaster` must be provided when `paymasterInput` is defined")
}

function F6(e, t) {
    return Yf(e) ? U6(e) : Jd(e, t)
}
const L6 = {
    transaction: F6
};

function U6(e) {
    const {
        chainId: t,
        gas: n,
        nonce: r,
        to: o,
        from: s,
        value: i,
        maxFeePerGas: a,
        maxPriorityFeePerGas: c,
        customSignature: l,
        factoryDeps: u,
        paymaster: f,
        paymasterInput: d,
        gasPerPubdata: h,
        data: p
    } = e;
    Xf(e);
    const m = [r ? L(r) : "0x", c ? L(c) : "0x", a ? L(a) : "0x", n ? L(n) : "0x", o ? ? "0x", i ? L(i) : "0x", p ? ? "0x0", L(t), L(""), L(""), L(t), s ? ? "0x", L(h || Ga), u ? ? [], l ? ? "0x", f && d ? [f, d] : []];
    return bt(["0x71", Vt(m)])
}
class z6 extends j {
    constructor({
        givenLength: t,
        maxBytecodeSize: n
    }) {
        super(`Bytecode cannot be longer than ${n} bytes. Given length: ${t}`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BytecodeLengthExceedsMaxSizeError"
        })
    }
}
class W6 extends j {
    constructor({
        givenLengthInWords: t
    }) {
        super(`Bytecode length in 32-byte words must be odd. Given length in words: ${t}`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BytecodeLengthInWordsMustBeOddError"
        })
    }
}
class q6 extends j {
    constructor({
        givenLength: t
    }) {
        super(`The bytecode length in bytes must be divisible by 32. Given length: ${t}`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BytecodeLengthMustBeDivisibleBy32Error"
        })
    }
}

function H6(e) {
    const t = rt(e);
    if (t.length % 32 !== 0) throw new q6({
        givenLength: t.length
    });
    if (t.length > El) throw new z6({
        givenLength: t.length,
        maxBytecodeSize: El
    });
    const n = Vu(t),
        r = rt(n),
        o = t.length / 32;
    if (o % 2 === 0) throw new W6({
        givenLengthInWords: o
    });
    const s = rt(o),
        i = Zt(s, {
            size: 2
        }),
        a = new Uint8Array([1, 0]);
    return r.set(a, 0), r.set(i, 2), r
}
const Q6 = e => {
    Xf(e);
    const t = V6(e);
    return {
        domain: {
            name: "zkSync",
            version: "2",
            chainId: e.chainId
        },
        types: {
            Transaction: [{
                name: "txType",
                type: "uint256"
            }, {
                name: "from",
                type: "uint256"
            }, {
                name: "to",
                type: "uint256"
            }, {
                name: "gasLimit",
                type: "uint256"
            }, {
                name: "gasPerPubdataByteLimit",
                type: "uint256"
            }, {
                name: "maxFeePerGas",
                type: "uint256"
            }, {
                name: "maxPriorityFeePerGas",
                type: "uint256"
            }, {
                name: "paymaster",
                type: "uint256"
            }, {
                name: "nonce",
                type: "uint256"
            }, {
                name: "value",
                type: "uint256"
            }, {
                name: "data",
                type: "bytes"
            }, {
                name: "factoryDeps",
                type: "bytes32[]"
            }, {
                name: "paymasterInput",
                type: "bytes"
            }]
        },
        primaryType: "Transaction",
        message: t
    }
};

function V6(e) {
    const {
        gas: t,
        nonce: n,
        to: r,
        from: o,
        value: s,
        maxFeePerGas: i,
        maxPriorityFeePerGas: a,
        factoryDeps: c,
        paymaster: l,
        paymasterInput: u,
        gasPerPubdata: f,
        data: d
    } = e;
    return {
        txType: 113 n,
        from: BigInt(o),
        to: r ? BigInt(r) : 0 n,
        gasLimit: t ? ? 0 n,
        gasPerPubdataByteLimit: f ? ? Ga,
        maxFeePerGas: i ? ? 0 n,
        maxPriorityFeePerGas: a ? ? 0 n,
        paymaster: l ? BigInt(l) : 0 n,
        nonce: n ? BigInt(n) : 0 n,
        value: s ? ? 0 n,
        data: d || "0x0",
        factoryDeps: c ? .map(h => L(H6(h))) ? ? [],
        paymasterInput: u || "0x"
    }
}
const eh = {
        formatters: Zf,
        serializers: L6,
        custom: {
            getEip712Domain: Q6
        }
    },
    Ka = Ie({
        id: 1,
        name: "Ethereum",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://cloudflare-eth.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://etherscan.io",
                apiUrl: "https://api.etherscan.io/api"
            }
        },
        contracts: {
            ensRegistry: {
                address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
            },
            ensUniversalResolver: {
                address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
                blockCreated: 19258213
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 14353601
            }
        }
    }),
    Jx = Ie({
        id: 169,
        name: "Manta Pacific Mainnet",
        network: "manta",
        nativeCurrency: {
            decimals: 18,
            name: "ETH",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://pacific-rpc.manta.network/http"]
            }
        },
        blockExplorers: {
            default: {
                name: "Manta Explorer",
                url: "https://pacific-explorer.manta.network",
                apiUrl: "https://pacific-explorer.manta.network/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 332890
            }
        }
    }),
    Zx = Ie({
        id: 3441005,
        name: "Manta Pacific Testnet",
        network: "manta-testnet",
        nativeCurrency: {
            decimals: 18,
            name: "ETH",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://manta-testnet.calderachain.xyz/http"]
            }
        },
        blockExplorers: {
            default: {
                name: "Manta Testnet Explorer",
                url: "https://pacific-explorer.testnet.manta.network",
                apiUrl: "https://pacific-explorer.testnet.manta.network/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C",
                blockCreated: 419915
            }
        },
        testnet: !0
    }),
    Yx = Ie({
        id: 5e3,
        name: "Mantle",
        nativeCurrency: {
            decimals: 18,
            name: "MNT",
            symbol: "MNT"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.mantle.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "Mantle Explorer",
                url: "https://mantlescan.xyz/",
                apiUrl: "https://api.mantlescan.xyz/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 304717
            }
        }
    }),
    Xx = Ie({
        id: 5003,
        name: "Mantle Sepolia Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "MNT",
            symbol: "MNT"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.sepolia.mantle.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "Mantle Testnet Explorer",
                url: "https://explorer.sepolia.mantle.xyz/",
                apiUrl: "https://explorer.sepolia.mantle.xyz/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 4584012
            }
        },
        testnet: !0
    }),
    e7 = Ie({
        id: 5001,
        name: "Mantle Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "MNT",
            symbol: "MNT"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.testnet.mantle.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "Mantle Testnet Explorer",
                url: "https://explorer.testnet.mantle.xyz",
                apiUrl: "https://explorer.testnet.mantle.xyz/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 561333
            }
        },
        testnet: !0
    }),
    Ln = 1,
    t7 = Ie({ ...yo,
        id: 10,
        name: "OP Mainnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.optimism.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Optimism Explorer",
                url: "https://optimistic.etherscan.io",
                apiUrl: "https://api-optimistic.etherscan.io/api"
            }
        },
        contracts: { ...yo.contracts,
            disputeGameFactory: {
                [Ln]: {
                    address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9"
                }
            },
            l2OutputOracle: {
                [Ln]: {
                    address: "0xdfe97868233d1aa22e815a266982f2cf17685a27"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 4286263
            },
            portal: {
                [Ln]: {
                    address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"
                }
            },
            l1StandardBridge: {
                [Ln]: {
                    address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
                }
            }
        },
        sourceId: Ln
    }),
    n7 = Ie({
        id: 534351,
        name: "Scroll Sepolia",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia-rpc.scroll.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Scrollscan",
                url: "https://sepolia.scrollscan.com",
                apiUrl: "https://api-sepolia.scrollscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 9473
            }
        },
        testnet: !0
    }),
    r7 = Ie({
        id: 11155111,
        name: "Sepolia",
        nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.sepolia.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://sepolia.etherscan.io",
                apiUrl: "https://api-sepolia.etherscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 751532
            },
            ensRegistry: {
                address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
            },
            ensUniversalResolver: {
                address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
                blockCreated: 5317080
            }
        },
        testnet: !0
    }),
    o7 = Ie({ ...eh,
        id: 324,
        name: "zkSync Era",
        network: "zksync-era",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.era.zksync.io"],
                webSocket: ["wss://mainnet.era.zksync.io/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://era.zksync.network/",
                apiUrl: "https://api-era.zksync.network/api"
            },
            native: {
                name: "zkSync Explorer",
                url: "https://explorer.zksync.io/"
            }
        },
        contracts: {
            multicall3: {
                address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
            }
        }
    }),
    s7 = Ie({ ...eh,
        id: 300,
        name: "zkSync Sepolia Testnet",
        network: "zksync-sepolia-testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia.era.zksync.dev"],
                webSocket: ["wss://sepolia.era.zksync.dev/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://sepolia-era.zksync.network/"
            },
            native: {
                name: "zkSync Explorer",
                url: "https://sepolia.explorer.zksync.io/"
            }
        },
        contracts: {
            multicall3: {
                address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
            }
        },
        testnet: !0
    });
var Al = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    $6 = {
        rounded: `SFRounded, ui-rounded, "SF Pro Rounded", ${Al}`,
        system: Al
    },
    Un = {
        large: {
            actionButton: "9999px",
            connectButton: "12px",
            modal: "24px",
            modalMobile: "28px"
        },
        medium: {
            actionButton: "10px",
            connectButton: "8px",
            modal: "16px",
            modalMobile: "18px"
        },
        none: {
            actionButton: "0px",
            connectButton: "0px",
            modal: "0px",
            modalMobile: "0px"
        },
        small: {
            actionButton: "4px",
            connectButton: "4px",
            modal: "8px",
            modalMobile: "8px"
        }
    },
    G6 = {
        large: {
            modalOverlay: "blur(20px)"
        },
        none: {
            modalOverlay: "blur(0px)"
        },
        small: {
            modalOverlay: "blur(4px)"
        }
    },
    K6 = ({
        borderRadius: e = "large",
        fontStack: t = "rounded",
        overlayBlur: n = "none"
    }) => ({
        blurs: {
            modalOverlay: G6[n].modalOverlay
        },
        fonts: {
            body: $6[t]
        },
        radii: {
            actionButton: Un[e].actionButton,
            connectButton: Un[e].connectButton,
            menuButton: Un[e].connectButton,
            modal: Un[e].modal,
            modalMobile: Un[e].modalMobile
        }
    }),
    th = {
        blue: {
            accentColor: "#0E76FD",
            accentColorForeground: "#FFF"
        },
        green: {
            accentColor: "#1DB847",
            accentColorForeground: "#FFF"
        },
        orange: {
            accentColor: "#FF801F",
            accentColorForeground: "#FFF"
        },
        pink: {
            accentColor: "#FF5CA0",
            accentColorForeground: "#FFF"
        },
        purple: {
            accentColor: "#5F5AFA",
            accentColorForeground: "#FFF"
        },
        red: {
            accentColor: "#FA423C",
            accentColorForeground: "#FFF"
        }
    },
    xl = th.blue,
    nh = ({
        accentColor: e = xl.accentColor,
        accentColorForeground: t = xl.accentColorForeground,
        ...n
    } = {}) => ({ ...K6(n),
        colors: {
            accentColor: e,
            accentColorForeground: t,
            actionButtonBorder: "rgba(0, 0, 0, 0.04)",
            actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
            actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
            closeButton: "rgba(60, 66, 66, 0.8)",
            closeButtonBackground: "rgba(0, 0, 0, 0.06)",
            connectButtonBackground: "#FFF",
            connectButtonBackgroundError: "#FF494A",
            connectButtonInnerBackground: "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
            connectButtonText: "#25292E",
            connectButtonTextError: "#FFF",
            connectionIndicator: "#30E000",
            downloadBottomCardBackground: "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
            downloadTopCardBackground: "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
            error: "#FF494A",
            generalBorder: "rgba(0, 0, 0, 0.06)",
            generalBorderDim: "rgba(0, 0, 0, 0.03)",
            menuItemBackground: "rgba(60, 66, 66, 0.1)",
            modalBackdrop: "rgba(0, 0, 0, 0.3)",
            modalBackground: "#FFF",
            modalBorder: "transparent",
            modalText: "#25292E",
            modalTextDim: "rgba(60, 66, 66, 0.3)",
            modalTextSecondary: "rgba(60, 66, 66, 0.6)",
            profileAction: "#FFF",
            profileActionHover: "rgba(255, 255, 255, 0.5)",
            profileForeground: "rgba(60, 66, 66, 0.06)",
            selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
            standby: "#FFD641"
        },
        shadows: {
            connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
            profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
            selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
            selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
            walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
        }
    });
nh.accentColors = th;
var Il = `{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`;

function J6(e, t) {
    return Object.defineProperty(e, "__recipe__", {
        value: t,
        writable: !1
    }), e
}
var rh = J6;

function oh(e) {
    var {
        conditions: t
    } = e;
    if (!t) throw new Error("Styles have no conditions");

    function n(r) {
        if (typeof r == "string" || typeof r == "number" || typeof r == "boolean") {
            if (!t.defaultCondition) throw new Error("No default condition");
            return {
                [t.defaultCondition]: r
            }
        }
        if (Array.isArray(r)) {
            if (!("responsiveArray" in t)) throw new Error("Responsive arrays are not supported");
            var o = {};
            for (var s in t.responsiveArray) r[s] != null && (o[t.responsiveArray[s]] = r[s]);
            return o
        }
        return r
    }
    return rh(n, {
        importPath: "@vanilla-extract/sprinkles/createUtils",
        importName: "createNormalizeValueFn",
        args: [{
            conditions: e.conditions
        }]
    })
}

function Z6(e) {
    var {
        conditions: t
    } = e;
    if (!t) throw new Error("Styles have no conditions");
    var n = oh(e);

    function r(o, s) {
        if (typeof o == "string" || typeof o == "number" || typeof o == "boolean") {
            if (!t.defaultCondition) throw new Error("No default condition");
            return s(o, t.defaultCondition)
        }
        var i = Array.isArray(o) ? n(o) : o,
            a = {};
        for (var c in i) i[c] != null && (a[c] = s(i[c], c));
        return a
    }
    return rh(r, {
        importPath: "@vanilla-extract/sprinkles/createUtils",
        importName: "createMapValueFn",
        args: [{
            conditions: e.conditions
        }]
    })
}

function Y6(e, t) {
    if (typeof e != "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function X6(e) {
    var t = Y6(e, "string");
    return typeof t == "symbol" ? t : String(t)
}

function e3(e, t, n) {
    return t = X6(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function kl(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Ds(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? kl(Object(n), !0).forEach(function(r) {
            e3(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kl(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
var t3 = e => function() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        var o = Object.assign({}, ...n.map(c => c.styles)),
            s = Object.keys(o),
            i = s.filter(c => "mappings" in o[c]),
            a = c => {
                var l = [],
                    u = {},
                    f = Ds({}, c),
                    d = !1;
                for (var h of i) {
                    var p = c[h];
                    if (p != null) {
                        var m = o[h];
                        d = !0;
                        for (var b of m.mappings) u[b] = p, f[b] == null && delete f[b]
                    }
                }
                var w = d ? Ds(Ds({}, u), f) : c,
                    v = function() {
                        var E = w[C],
                            k = o[C];
                        try {
                            if (k.mappings) return "continue";
                            if (typeof E == "string" || typeof E == "number") l.push(k.values[E].defaultClass);
                            else if (Array.isArray(E))
                                for (var B = 0; B < E.length; B++) {
                                    var S = E[B];
                                    if (S != null) {
                                        var P = k.responsiveArray[B];
                                        l.push(k.values[S].conditions[P])
                                    }
                                } else
                                    for (var R in E) {
                                        var O = E[R];
                                        O != null && l.push(k.values[O].conditions[R])
                                    }
                        } catch (U) {
                            throw U
                        }
                    };
                for (var C in w) var y = v();
                return e(l.join(" "))
            };
        return Object.assign(a, {
            properties: new Set(s)
        })
    },
    n3 = e => e,
    r3 = function() {
        return t3(n3)(...arguments)
    };

function sh(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = sh(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function ih() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = sh(e)) && (r && (r += " "), r += t);
    return r
}
var o3 = "AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI";
const Bl = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"]
    ]),
    jl = 4;

function s3(e) {
    let t = 0;

    function n() {
        return e[t++] << 8 | e[t++]
    }
    let r = n(),
        o = 1,
        s = [0, 1];
    for (let A = 1; A < r; A++) s.push(o += n());
    let i = n(),
        a = t;
    t += i;
    let c = 0,
        l = 0;

    function u() {
        return c == 0 && (l = l << 8 | e[t++], c = 8), l >> --c & 1
    }
    const f = 31,
        d = 2 ** f,
        h = d >>> 1,
        p = h >> 1,
        m = d - 1;
    let b = 0;
    for (let A = 0; A < f; A++) b = b << 1 | u();
    let w = [],
        v = 0,
        C = d;
    for (;;) {
        let A = Math.floor(((b - v + 1) * o - 1) / C),
            E = 0,
            k = r;
        for (; k - E > 1;) {
            let P = E + k >>> 1;
            A < s[P] ? k = P : E = P
        }
        if (E == 0) break;
        w.push(E);
        let B = v + Math.floor(C * s[E] / o),
            S = v + Math.floor(C * s[E + 1] / o) - 1;
        for (; !((B ^ S) & h);) b = b << 1 & m | u(), B = B << 1 & m, S = S << 1 & m | 1;
        for (; B & ~S & p;) b = b & h | b << 1 & m >>> 1 | u(), B = B << 1 ^ h, S = (S ^ h) << 1 | h | 1;
        v = B, C = 1 + S - B
    }
    let y = r - 4;
    return w.map(A => {
        switch (A - y) {
            case 3:
                return y + 65792 + (e[a++] << 16 | e[a++] << 8 | e[a++]);
            case 2:
                return y + 256 + (e[a++] << 8 | e[a++]);
            case 1:
                return y + e[a++];
            default:
                return A - 1
        }
    })
}

function i3(e) {
    let t = 0;
    return () => e[t++]
}

function ah(e) {
    return i3(s3(a3(e)))
}

function a3(e) {
    let t = [];
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((o, s) => t[o.charCodeAt(0)] = s);
    let n = e.length,
        r = new Uint8Array(6 * n >> 3);
    for (let o = 0, s = 0, i = 0, a = 0; o < n; o++) a = a << 6 | t[e.charCodeAt(o)], i += 6, i >= 8 && (r[s++] = a >> (i -= 8));
    return r
}

function c3(e) {
    return e & 1 ? ~e >> 1 : e >> 1
}

function l3(e, t) {
    let n = Array(e);
    for (let r = 0, o = 0; r < e; r++) n[r] = o += c3(t());
    return n
}

function fr(e, t = 0) {
    let n = [];
    for (;;) {
        let r = e(),
            o = e();
        if (!o) break;
        t += r;
        for (let s = 0; s < o; s++) n.push(t + s);
        t += o + 1
    }
    return n
}

function ch(e) {
    return hr(() => {
        let t = fr(e);
        if (t.length) return t
    })
}

function lh(e) {
    let t = [];
    for (;;) {
        let n = e();
        if (n == 0) break;
        t.push(u3(n, e))
    }
    for (;;) {
        let n = e() - 1;
        if (n < 0) break;
        t.push(d3(n, e))
    }
    return t.flat()
}

function hr(e) {
    let t = [];
    for (;;) {
        let n = e(t.length);
        if (!n) break;
        t.push(n)
    }
    return t
}

function uh(e, t, n) {
    let r = Array(e).fill().map(() => []);
    for (let o = 0; o < t; o++) l3(e, n).forEach((s, i) => r[i].push(s));
    return r
}

function u3(e, t) {
    let n = 1 + t(),
        r = t(),
        o = hr(t);
    return uh(o.length, 1 + e, t).flatMap((i, a) => {
        let [c, ...l] = i;
        return Array(o[a]).fill().map((u, f) => {
            let d = f * r;
            return [c + f * n, l.map(h => h + d)]
        })
    })
}

function d3(e, t) {
    let n = 1 + t();
    return uh(n, 1 + e, t).map(o => [o[0], o.slice(1)])
}

function f3(e) {
    let t = [],
        n = fr(e);
    return o(r([]), []), t;

    function r(s) {
        let i = e(),
            a = hr(() => {
                let c = fr(e).map(l => n[l]);
                if (c.length) return r(c)
            });
        return {
            S: i,
            B: a,
            Q: s
        }
    }

    function o({
        S: s,
        B: i
    }, a, c) {
        if (!(s & 4 && c === a[a.length - 1])) {
            s & 2 && (c = a[a.length - 1]), s & 1 && t.push(a);
            for (let l of i)
                for (let u of l.Q) o(l, [...a, u], c)
        }
    }
}

function h3(e) {
    return e.toString(16).toUpperCase().padStart(2, "0")
}

function dh(e) {
    return `{${h3(e)}}`
}

function p3(e) {
    let t = [];
    for (let n = 0, r = e.length; n < r;) {
        let o = e.codePointAt(n);
        n += o < 65536 ? 1 : 2, t.push(o)
    }
    return t
}

function wn(e) {
    let n = e.length;
    if (n < 4096) return String.fromCodePoint(...e);
    let r = [];
    for (let o = 0; o < n;) r.push(String.fromCodePoint(...e.slice(o, o += 4096)));
    return r.join("")
}

function m3(e, t) {
    let n = e.length,
        r = n - t.length;
    for (let o = 0; r == 0 && o < n; o++) r = e[o] - t[o];
    return r
}
var g3 = "AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g";
const pr = 44032,
    wo = 4352,
    vo = 4449,
    Co = 4519,
    fh = 19,
    hh = 21,
    vn = 28,
    Eo = hh * vn,
    b3 = fh * Eo,
    y3 = pr + b3,
    w3 = wo + fh,
    v3 = vo + hh,
    C3 = Co + vn;

function Wn(e) {
    return e >> 24 & 255
}

function ph(e) {
    return e & 16777215
}
let Ni, Sl, Fi, ro;

function E3() {
    let e = ah(g3);
    Ni = new Map(ch(e).flatMap((t, n) => t.map(r => [r, n + 1 << 24]))), Sl = new Set(fr(e)), Fi = new Map, ro = new Map;
    for (let [t, n] of lh(e)) {
        if (!Sl.has(t) && n.length == 2) {
            let [r, o] = n, s = ro.get(r);
            s || (s = new Map, ro.set(r, s)), s.set(o, t)
        }
        Fi.set(t, n.reverse())
    }
}

function mh(e) {
    return e >= pr && e < y3
}

function A3(e, t) {
    if (e >= wo && e < w3 && t >= vo && t < v3) return pr + (e - wo) * Eo + (t - vo) * vn;
    if (mh(e) && t > Co && t < C3 && (e - pr) % vn == 0) return e + (t - Co); {
        let n = ro.get(e);
        return n && (n = n.get(t), n) ? n : -1
    }
}

function gh(e) {
    Ni || E3();
    let t = [],
        n = [],
        r = !1;

    function o(s) {
        let i = Ni.get(s);
        i && (r = !0, s |= i), t.push(s)
    }
    for (let s of e)
        for (;;) {
            if (s < 128) t.push(s);
            else if (mh(s)) {
                let i = s - pr,
                    a = i / Eo | 0,
                    c = i % Eo / vn | 0,
                    l = i % vn;
                o(wo + a), o(vo + c), l > 0 && o(Co + l)
            } else {
                let i = Fi.get(s);
                i ? n.push(...i) : o(s)
            }
            if (!n.length) break;
            s = n.pop()
        }
    if (r && t.length > 1) {
        let s = Wn(t[0]);
        for (let i = 1; i < t.length; i++) {
            let a = Wn(t[i]);
            if (a == 0 || s <= a) {
                s = a;
                continue
            }
            let c = i - 1;
            for (;;) {
                let l = t[c + 1];
                if (t[c + 1] = t[c], t[c] = l, !c || (s = Wn(t[--c]), s <= a)) break
            }
            s = Wn(t[i])
        }
    }
    return t
}

function x3(e) {
    let t = [],
        n = [],
        r = -1,
        o = 0;
    for (let s of e) {
        let i = Wn(s),
            a = ph(s);
        if (r == -1) i == 0 ? r = a : t.push(a);
        else if (o > 0 && o >= i) i == 0 ? (t.push(r, ...n), n.length = 0, r = a) : n.push(a), o = i;
        else {
            let c = A3(r, a);
            c >= 0 ? r = c : o == 0 && i == 0 ? (t.push(r), r = a) : (n.push(a), o = i)
        }
    }
    return r >= 0 && t.push(r, ...n), t
}

function bh(e) {
    return gh(e).map(ph)
}

function I3(e) {
    return x3(gh(e))
}
const Pl = 45,
    yh = ".",
    wh = 65039,
    vh = 1,
    an = e => Array.from(e);

function mr(e, t) {
    return e.P.has(t) || e.Q.has(t)
}
class k3 extends Array {
    get is_emoji() {
        return !0
    }
}
let Li, Ch, Ut, Ui, Eh, un, Ns, on, Ah, Tl, zi;

function Ja() {
    if (Li) return;
    let e = ah(o3);
    const t = () => fr(e),
        n = () => new Set(t());
    Li = new Map(lh(e)), Ch = n(), Ut = t(), Ui = new Set(t().map(u => Ut[u])), Ut = new Set(Ut), Eh = n(), n();
    let r = ch(e),
        o = e();
    const s = () => new Set(t().flatMap(u => r[u]).concat(t()));
    un = hr(u => {
        let f = hr(e).map(d => d + 96);
        if (f.length) {
            let d = u >= o;
            f[0] -= 32, f = wn(f), d && (f = `Restricted[${f}]`);
            let h = s(),
                p = s(),
                m = !e();
            return {
                N: f,
                P: h,
                Q: p,
                M: m,
                R: d
            }
        }
    }), Ns = n(), on = new Map;
    let i = t().concat(an(Ns)).sort((u, f) => u - f);
    i.forEach((u, f) => {
        let d = e(),
            h = i[f] = d ? i[f - d] : {
                V: [],
                M: new Map
            };
        h.V.push(u), Ns.has(u) || on.set(u, h)
    });
    for (let {
            V: u,
            M: f
        } of new Set(on.values())) {
        let d = [];
        for (let p of u) {
            let m = un.filter(w => mr(w, p)),
                b = d.find(({
                    G: w
                }) => m.some(v => w.has(v)));
            b || (b = {
                G: new Set,
                V: []
            }, d.push(b)), b.V.push(p), m.forEach(w => b.G.add(w))
        }
        let h = d.flatMap(p => an(p.G));
        for (let {
                G: p,
                V: m
            } of d) {
            let b = new Set(h.filter(w => !p.has(w)));
            for (let w of m) f.set(w, b)
        }
    }
    let a = new Set,
        c = new Set;
    const l = u => a.has(u) ? c.add(u) : a.add(u);
    for (let u of un) {
        for (let f of u.P) l(f);
        for (let f of u.Q) l(f)
    }
    for (let u of a) !on.has(u) && !c.has(u) && on.set(u, vh);
    Ah = new Set(an(a).concat(an(bh(a)))), Tl = f3(e).map(u => k3.from(u)).sort(m3), zi = new Map;
    for (let u of Tl) {
        let f = [zi];
        for (let d of u) {
            let h = f.map(p => {
                let m = p.get(d);
                return m || (m = new Map, p.set(d, m)), m
            });
            d === wh ? f.push(...h) : f = h
        }
        for (let d of f) d.V = u
    }
}

function Za(e) {
    return (xh(e) ? "" : `${Ya(ns([e]))} `) + dh(e)
}

function Ya(e) {
    return `"${e}"‎`
}

function B3(e) {
    if (e.length >= 4 && e[2] == Pl && e[3] == Pl) throw new Error(`invalid label extension: "${wn(e.slice(0,4))}"`)
}

function j3(e) {
    for (let n = e.lastIndexOf(95); n > 0;)
        if (e[--n] !== 95) throw new Error("underscore allowed only at start")
}

function S3(e) {
    let t = e[0],
        n = Bl.get(t);
    if (n) throw qn(`leading ${n}`);
    let r = e.length,
        o = -1;
    for (let s = 1; s < r; s++) {
        t = e[s];
        let i = Bl.get(t);
        if (i) {
            if (o == s) throw qn(`${n} + ${i}`);
            o = s + 1, n = i
        }
    }
    if (o == r) throw qn(`trailing ${n}`)
}

function ns(e, t = dh) {
    let n = [];
    P3(e[0]) && n.push("◌");
    let r = 0,
        o = e.length;
    for (let s = 0; s < o; s++) {
        let i = e[s];
        xh(i) && (n.push(wn(e.slice(r, s))), n.push(t(i)), r = s + 1)
    }
    return n.push(wn(e.slice(r, o))), n.join("")
}

function P3(e) {
    return Ja(), Ut.has(e)
}

function xh(e) {
    return Ja(), Eh.has(e)
}

function T3(e) {
    return _3(O3(e, I3, F3))
}

function O3(e, t, n) {
    if (!e) return [];
    Ja();
    let r = 0;
    return e.split(yh).map(o => {
        let s = p3(o),
            i = {
                input: s,
                offset: r
            };
        r += s.length + 1;
        try {
            let a = i.tokens = N3(s, t, n),
                c = a.length,
                l;
            if (!c) throw new Error("empty label");
            let u = i.output = a.flat();
            if (j3(u), !(i.emoji = c > 1 || a[0].is_emoji) && u.every(d => d < 128)) B3(u), l = "ASCII";
            else {
                let d = a.flatMap(h => h.is_emoji ? [] : h);
                if (!d.length) l = "Emoji";
                else {
                    if (Ut.has(u[0])) throw qn("leading combining mark");
                    for (let m = 1; m < c; m++) {
                        let b = a[m];
                        if (!b.is_emoji && Ut.has(b[0])) throw qn(`emoji + combining mark: "${wn(a[m-1])} + ${ns([b[0]])}"`)
                    }
                    S3(u);
                    let h = an(new Set(d)),
                        [p] = R3(h);
                    D3(p, d), M3(p, h), l = p.N
                }
            }
            i.type = l
        } catch (a) {
            i.error = a
        }
        return i
    })
}

function M3(e, t) {
    let n, r = [];
    for (let o of t) {
        let s = on.get(o);
        if (s === vh) return;
        if (s) {
            let i = s.M.get(o);
            if (n = n ? n.filter(a => i.has(a)) : an(i), !n.length) return
        } else r.push(o)
    }
    if (n) {
        for (let o of n)
            if (r.every(s => mr(o, s))) throw new Error(`whole-script confusable: ${e.N}/${o.N}`)
    }
}

function R3(e) {
    let t = un;
    for (let n of e) {
        let r = t.filter(o => mr(o, n));
        if (!r.length) throw un.some(o => mr(o, n)) ? kh(t[0], n) : Ih(n);
        if (t = r, r.length == 1) break
    }
    return t
}

function _3(e) {
    return e.map(({
        input: t,
        error: n,
        output: r
    }) => {
        if (n) {
            let o = n.message;
            throw new Error(e.length == 1 ? o : `Invalid label ${Ya(ns(t))}: ${o}`)
        }
        return wn(r)
    }).join(yh)
}

function Ih(e) {
    return new Error(`disallowed character: ${Za(e)}`)
}

function kh(e, t) {
    let n = Za(t),
        r = un.find(o => o.P.has(t));
    return r && (n = `${r.N} ${n}`), new Error(`illegal mixture: ${e.N} + ${n}`)
}

function qn(e) {
    return new Error(`illegal placement: ${e}`)
}

function D3(e, t) {
    for (let n of t)
        if (!mr(e, n)) throw kh(e, n);
    if (e.M) {
        let n = bh(t);
        for (let r = 1, o = n.length; r < o; r++)
            if (Ui.has(n[r])) {
                let s = r + 1;
                for (let i; s < o && Ui.has(i = n[s]); s++)
                    for (let a = r; a < s; a++)
                        if (n[a] == i) throw new Error(`duplicate non-spacing marks: ${Za(i)}`);
                if (s - r > jl) throw new Error(`excessive non-spacing marks: ${Ya(ns(n.slice(r-1,s)))} (${s-r}/${jl})`);
                r = s
            }
    }
}

function N3(e, t, n) {
    let r = [],
        o = [];
    for (e = e.slice().reverse(); e.length;) {
        let s = L3(e);
        if (s) o.length && (r.push(t(o)), o = []), r.push(n(s));
        else {
            let i = e.pop();
            if (Ah.has(i)) o.push(i);
            else {
                let a = Li.get(i);
                if (a) o.push(...a);
                else if (!Ch.has(i)) throw Ih(i)
            }
        }
    }
    return o.length && r.push(t(o)), r
}

function F3(e) {
    return e.filter(t => t != wh)
}

function L3(e, t) {
    let n = zi,
        r, o = e.length;
    for (; o && (n = n.get(e[--o]), !!n);) {
        let {
            V: s
        } = n;
        s && (r = s, t && t.push(...e.slice(o).reverse()), e.length = o)
    }
    return r
}

function U3(e) {
    return T3(e)
}
var Wi = function(e, t) {
    return Wi = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(n, r) {
        n.__proto__ = r
    } || function(n, r) {
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
    }, Wi(e, t)
};

function Bh(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    Wi(e, t);

    function n() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n)
}
var Ue = function() {
    return Ue = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }, Ue.apply(this, arguments)
};

function rs(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}

function jh(e, t, n, r) {
    var o = arguments.length,
        s = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r,
        i;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(e, t, n, r);
    else
        for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
    return o > 3 && s && Object.defineProperty(t, n, s), s
}

function Sh(e, t) {
    return function(n, r) {
        t(n, r, e)
    }
}

function z3(e, t, n, r, o, s) {
    function i(w) {
        if (w !== void 0 && typeof w != "function") throw new TypeError("Function expected");
        return w
    }
    for (var a = r.kind, c = a === "getter" ? "get" : a === "setter" ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, u = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), f, d = !1, h = n.length - 1; h >= 0; h--) {
        var p = {};
        for (var m in r) p[m] = m === "access" ? {} : r[m];
        for (var m in r.access) p.access[m] = r.access[m];
        p.addInitializer = function(w) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            s.push(i(w || null))
        };
        var b = (0, n[h])(a === "accessor" ? {
            get: u.get,
            set: u.set
        } : u[c], p);
        if (a === "accessor") {
            if (b === void 0) continue;
            if (b === null || typeof b != "object") throw new TypeError("Object expected");
            (f = i(b.get)) && (u.get = f), (f = i(b.set)) && (u.set = f), (f = i(b.init)) && o.unshift(f)
        } else(f = i(b)) && (a === "field" ? o.unshift(f) : u[c] = f)
    }
    l && Object.defineProperty(l, r.name, u), d = !0
}

function W3(e, t, n) {
    for (var r = arguments.length > 2, o = 0; o < t.length; o++) n = r ? t[o].call(e, n) : t[o].call(e);
    return r ? n : void 0
}

function q3(e) {
    return typeof e == "symbol" ? e : "".concat(e)
}

function H3(e, t, n) {
    return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
        configurable: !0,
        value: n ? "".concat(n, " ", t) : t
    })
}

function Ph(e, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t)
}

function Th(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        })
    }
    return new(n || (n = Promise))(function(s, i) {
        function a(u) {
            try {
                l(r.next(u))
            } catch (f) {
                i(f)
            }
        }

        function c(u) {
            try {
                l(r.throw(u))
            } catch (f) {
                i(f)
            }
        }

        function l(u) {
            u.done ? s(u.value) : o(u.value).then(a, c)
        }
        l((r = r.apply(e, t || [])).next())
    })
}

function Oh(e, t) {
    var n = {
            label: 0,
            sent: function() {
                if (s[0] & 1) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        },
        r, o, s, i;
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }), i;

    function a(l) {
        return function(u) {
            return c([l, u])
        }
    }

    function c(l) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; i && (i = 0, l[0] && (n = 0)), n;) try {
            if (r = 1, o && (s = l[0] & 2 ? o.return : l[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, l[1])).done) return s;
            switch (o = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
                case 0:
                case 1:
                    s = l;
                    break;
                case 4:
                    return n.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    n.label++, o = l[1], l = [0];
                    continue;
                case 7:
                    l = n.ops.pop(), n.trys.pop();
                    continue;
                default:
                    if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
                        n.label = l[1];
                        break
                    }
                    if (l[0] === 6 && n.label < s[1]) {
                        n.label = s[1], s = l;
                        break
                    }
                    if (s && n.label < s[2]) {
                        n.label = s[2], n.ops.push(l);
                        break
                    }
                    s[2] && n.ops.pop(), n.trys.pop();
                    continue
            }
            l = t.call(e, n)
        } catch (u) {
            l = [6, u], o = 0
        } finally {
            r = s = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}
var os = Object.create ? function(e, t, n, r) {
    r === void 0 && (r = n);
    var o = Object.getOwnPropertyDescriptor(t, n);
    (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
        enumerable: !0,
        get: function() {
            return t[n]
        }
    }), Object.defineProperty(e, r, o)
} : function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n]
};

function Mh(e, t) {
    for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && os(t, e, n)
}

function Ao(e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        n = t && e[t],
        r = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && r >= e.length && (e = void 0), {
                value: e && e[r++],
                done: !e
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function Xa(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var r = n.call(e),
        o, s = [],
        i;
    try {
        for (;
            (t === void 0 || t-- > 0) && !(o = r.next()).done;) s.push(o.value)
    } catch (a) {
        i = {
            error: a
        }
    } finally {
        try {
            o && !o.done && (n = r.return) && n.call(r)
        } finally {
            if (i) throw i.error
        }
    }
    return s
}

function Rh() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Xa(arguments[t]));
    return e
}

function _h() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
    for (var r = Array(e), o = 0, t = 0; t < n; t++)
        for (var s = arguments[t], i = 0, a = s.length; i < a; i++, o++) r[o] = s[i];
    return r
}

function ec(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)(s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}

function Cn(e) {
    return this instanceof Cn ? (this.v = e, this) : new Cn(e)
}

function Dh(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []),
        o, s = [];
    return o = {}, a("next"), a("throw"), a("return", i), o[Symbol.asyncIterator] = function() {
        return this
    }, o;

    function i(h) {
        return function(p) {
            return Promise.resolve(p).then(h, f)
        }
    }

    function a(h, p) {
        r[h] && (o[h] = function(m) {
            return new Promise(function(b, w) {
                s.push([h, m, b, w]) > 1 || c(h, m)
            })
        }, p && (o[h] = p(o[h])))
    }

    function c(h, p) {
        try {
            l(r[h](p))
        } catch (m) {
            d(s[0][3], m)
        }
    }

    function l(h) {
        h.value instanceof Cn ? Promise.resolve(h.value.v).then(u, f) : d(s[0][2], h)
    }

    function u(h) {
        c("next", h)
    }

    function f(h) {
        c("throw", h)
    }

    function d(h, p) {
        h(p), s.shift(), s.length && c(s[0][0], s[0][1])
    }
}

function Nh(e) {
    var t, n;
    return t = {}, r("next"), r("throw", function(o) {
        throw o
    }), r("return"), t[Symbol.iterator] = function() {
        return this
    }, t;

    function r(o, s) {
        t[o] = e[o] ? function(i) {
            return (n = !n) ? {
                value: Cn(e[o](i)),
                done: !1
            } : s ? s(i) : i
        } : s
    }
}

function Fh(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator],
        n;
    return t ? t.call(e) : (e = typeof Ao == "function" ? Ao(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
        return this
    }, n);

    function r(s) {
        n[s] = e[s] && function(i) {
            return new Promise(function(a, c) {
                i = e[s](i), o(a, c, i.done, i.value)
            })
        }
    }

    function o(s, i, a, c) {
        Promise.resolve(c).then(function(l) {
            s({
                value: l,
                done: a
            })
        }, i)
    }
}

function Lh(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
    }) : e.raw = t, e
}
var Q3 = Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    })
} : function(e, t) {
    e.default = t
};

function Uh(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null)
        for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && os(t, e, n);
    return Q3(t, e), t
}

function zh(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function Wh(e, t, n, r) {
    if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e)
}

function qh(e, t, n, r, o) {
    if (r === "m") throw new TypeError("Private method is not writable");
    if (r === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return r === "a" ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
}

function Hh(e, t) {
    if (t === null || typeof t != "object" && typeof t != "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof e == "function" ? t === e : e.has(t)
}

function Qh(e, t, n) {
    if (t != null) {
        if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
        var r, o;
        if (n) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose]
        }
        if (r === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = t[Symbol.dispose], n && (o = r)
        }
        if (typeof r != "function") throw new TypeError("Object not disposable.");
        o && (r = function() {
            try {
                o.call(this)
            } catch (s) {
                return Promise.reject(s)
            }
        }), e.stack.push({
            value: t,
            dispose: r,
            async: n
        })
    } else n && e.stack.push({
        async: !0
    });
    return t
}
var V3 = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
    var r = new Error(n);
    return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
};

function Vh(e) {
    function t(r) {
        e.error = e.hasError ? new V3(r, e.error, "An error was suppressed during disposal.") : r, e.hasError = !0
    }

    function n() {
        for (; e.stack.length;) {
            var r = e.stack.pop();
            try {
                var o = r.dispose && r.dispose.call(r.value);
                if (r.async) return Promise.resolve(o).then(n, function(s) {
                    return t(s), n()
                })
            } catch (s) {
                t(s)
            }
        }
        if (e.hasError) throw e.error
    }
    return n()
}
const $3 = {
        __extends: Bh,
        __assign: Ue,
        __rest: rs,
        __decorate: jh,
        __param: Sh,
        __metadata: Ph,
        __awaiter: Th,
        __generator: Oh,
        __createBinding: os,
        __exportStar: Mh,
        __values: Ao,
        __read: Xa,
        __spread: Rh,
        __spreadArrays: _h,
        __spreadArray: ec,
        __await: Cn,
        __asyncGenerator: Dh,
        __asyncDelegator: Nh,
        __asyncValues: Fh,
        __makeTemplateObject: Lh,
        __importStar: Uh,
        __importDefault: zh,
        __classPrivateFieldGet: Wh,
        __classPrivateFieldSet: qh,
        __classPrivateFieldIn: Hh,
        __addDisposableResource: Qh,
        __disposeResources: Vh
    },
    i7 = Object.freeze(Object.defineProperty({
        __proto__: null,
        __addDisposableResource: Qh,
        get __assign() {
            return Ue
        },
        __asyncDelegator: Nh,
        __asyncGenerator: Dh,
        __asyncValues: Fh,
        __await: Cn,
        __awaiter: Th,
        __classPrivateFieldGet: Wh,
        __classPrivateFieldIn: Hh,
        __classPrivateFieldSet: qh,
        __createBinding: os,
        __decorate: jh,
        __disposeResources: Vh,
        __esDecorate: z3,
        __exportStar: Mh,
        __extends: Bh,
        __generator: Oh,
        __importDefault: zh,
        __importStar: Uh,
        __makeTemplateObject: Lh,
        __metadata: Ph,
        __param: Sh,
        __propKey: q3,
        __read: Xa,
        __rest: rs,
        __runInitializers: W3,
        __setFunctionName: H3,
        __spread: Rh,
        __spreadArray: ec,
        __spreadArrays: _h,
        __values: Ao,
        default: $3
    }, Symbol.toStringTag, {
        value: "Module"
    }));
var oo = "right-scroll-bar-position",
    so = "width-before-scroll-bar",
    G3 = "with-scroll-bars-hidden",
    K3 = "--removed-body-scroll-bar-size";

function Fs(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function J3(e, t) {
    var n = I.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r, n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var Z3 = typeof window < "u" ? I.useLayoutEffect : I.useEffect,
    Ol = new WeakMap;

function Y3(e, t) {
    var n = J3(t || null, function(r) {
        return e.forEach(function(o) {
            return Fs(o, r)
        })
    });
    return Z3(function() {
        var r = Ol.get(n);
        if (r) {
            var o = new Set(r),
                s = new Set(e),
                i = n.current;
            o.forEach(function(a) {
                s.has(a) || Fs(a, null)
            }), s.forEach(function(a) {
                o.has(a) || Fs(a, i)
            })
        }
        Ol.set(n, e)
    }, [e]), n
}

function X3(e) {
    return e
}

function eC(e, t) {
    t === void 0 && (t = X3);
    var n = [],
        r = !1,
        o = {
            read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(s) {
                var i = t(s, r);
                return n.push(i),
                    function() {
                        n = n.filter(function(a) {
                            return a !== i
                        })
                    }
            },
            assignSyncMedium: function(s) {
                for (r = !0; n.length;) {
                    var i = n;
                    n = [], i.forEach(s)
                }
                n = {
                    push: function(a) {
                        return s(a)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(s) {
                r = !0;
                var i = [];
                if (n.length) {
                    var a = n;
                    n = [], a.forEach(s), i = n
                }
                var c = function() {
                        var u = i;
                        i = [], u.forEach(s)
                    },
                    l = function() {
                        return Promise.resolve().then(c)
                    };
                l(), n = {
                    push: function(u) {
                        i.push(u), l()
                    },
                    filter: function(u) {
                        return i = i.filter(u), n
                    }
                }
            }
        };
    return o
}

function tC(e) {
    e === void 0 && (e = {});
    var t = eC(null);
    return t.options = Ue({
        async: !0,
        ssr: !1
    }, e), t
}
var $h = function(e) {
    var t = e.sideCar,
        n = rs(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return I.createElement(r, Ue({}, n))
};
$h.isSideCarExport = !0;

function nC(e, t) {
    return e.useMedium(t), $h
}
var Gh = tC(),
    Ls = function() {},
    ss = I.forwardRef(function(e, t) {
        var n = I.useRef(null),
            r = I.useState({
                onScrollCapture: Ls,
                onWheelCapture: Ls,
                onTouchMoveCapture: Ls
            }),
            o = r[0],
            s = r[1],
            i = e.forwardProps,
            a = e.children,
            c = e.className,
            l = e.removeScrollBar,
            u = e.enabled,
            f = e.shards,
            d = e.sideCar,
            h = e.noIsolation,
            p = e.inert,
            m = e.allowPinchZoom,
            b = e.as,
            w = b === void 0 ? "div" : b,
            v = e.gapMode,
            C = rs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            y = d,
            A = Y3([n, t]),
            E = Ue(Ue({}, C), o);
        return I.createElement(I.Fragment, null, u && I.createElement(y, {
            sideCar: Gh,
            removeScrollBar: l,
            shards: f,
            noIsolation: h,
            inert: p,
            setCallbacks: s,
            allowPinchZoom: !!m,
            lockRef: n,
            gapMode: v
        }), i ? I.cloneElement(I.Children.only(a), Ue(Ue({}, E), {
            ref: A
        })) : I.createElement(w, Ue({}, E, {
            className: c,
            ref: A
        }), a))
    });
ss.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
ss.classNames = {
    fullWidth: so,
    zeroRight: oo
};
var Ml, rC = function() {
    if (Ml) return Ml;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function oC() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = rC();
    return t && e.setAttribute("nonce", t), e
}

function sC(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function iC(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var aC = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = oC()) && (sC(t, n), iC(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    cC = function() {
        var e = aC();
        return function(t, n) {
            I.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    Kh = function() {
        var e = cC(),
            t = function(n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null
            };
        return t
    },
    lC = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Us = function(e) {
        return parseInt(e || "", 10) || 0
    },
    uC = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Us(n), Us(r), Us(o)]
    },
    dC = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return lC;
        var t = uC(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    fC = Kh(),
    dn = "data-scroll-locked",
    hC = function(e, t, n, r) {
        var o = e.left,
            s = e.top,
            i = e.right,
            a = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(G3, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(dn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(oo, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(so, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(oo, " .").concat(oo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(so, " .").concat(so, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(dn, `] {
    `).concat(K3, ": ").concat(a, `px;
  }
`)
    },
    Rl = function() {
        var e = parseInt(document.body.getAttribute(dn) || "0", 10);
        return isFinite(e) ? e : 0
    },
    pC = function() {
        I.useEffect(function() {
            return document.body.setAttribute(dn, (Rl() + 1).toString()),
                function() {
                    var e = Rl() - 1;
                    e <= 0 ? document.body.removeAttribute(dn) : document.body.setAttribute(dn, e.toString())
                }
        }, [])
    },
    mC = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r;
        pC();
        var s = I.useMemo(function() {
            return dC(o)
        }, [o]);
        return I.createElement(fC, {
            styles: hC(s, !t, o, n ? "" : "!important")
        })
    },
    qi = !1;
if (typeof window < "u") try {
    var Gr = Object.defineProperty({}, "passive", {
        get: function() {
            return qi = !0, !0
        }
    });
    window.addEventListener("test", Gr, Gr), window.removeEventListener("test", Gr, Gr)
} catch {
    qi = !1
}
var nn = qi ? {
        passive: !1
    } : !1,
    gC = function(e) {
        return e.tagName === "TEXTAREA"
    },
    Jh = function(e, t) {
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !gC(e) && n[t] === "visible")
    },
    bC = function(e) {
        return Jh(e, "overflowY")
    },
    yC = function(e) {
        return Jh(e, "overflowX")
    },
    _l = function(e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = Zh(e, r);
            if (o) {
                var s = Yh(e, r),
                    i = s[1],
                    a = s[2];
                if (i > a) return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    },
    wC = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r]
    },
    vC = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r]
    },
    Zh = function(e, t) {
        return e === "v" ? bC(t) : yC(t)
    },
    Yh = function(e, t) {
        return e === "v" ? wC(t) : vC(t)
    },
    CC = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    EC = function(e, t, n, r, o) {
        var s = CC(e, window.getComputedStyle(t).direction),
            i = s * r,
            a = n.target,
            c = t.contains(a),
            l = !1,
            u = i > 0,
            f = 0,
            d = 0;
        do {
            var h = Yh(e, a),
                p = h[0],
                m = h[1],
                b = h[2],
                w = m - b - s * p;
            (p || w) && Zh(e, a) && (f += w, d += p), a instanceof ShadowRoot ? a = a.host : a = a.parentNode
        } while (!c && a !== document.body || c && (t.contains(a) || t === a));
        return (u && (o && Math.abs(f) < 1 || !o && i > f) || !u && (o && Math.abs(d) < 1 || !o && -i > d)) && (l = !0), l
    },
    Kr = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    Dl = function(e) {
        return [e.deltaX, e.deltaY]
    },
    Nl = function(e) {
        return e && "current" in e ? e.current : e
    },
    AC = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    xC = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    IC = 0,
    rn = [];

function kC(e) {
    var t = I.useRef([]),
        n = I.useRef([0, 0]),
        r = I.useRef(),
        o = I.useState(IC++)[0],
        s = I.useState(Kh)[0],
        i = I.useRef(e);
    I.useEffect(function() {
        i.current = e
    }, [e]), I.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var m = ec([e.lockRef.current], (e.shards || []).map(Nl), !0).filter(Boolean);
            return m.forEach(function(b) {
                    return b.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(b) {
                        return b.classList.remove("allow-interactivity-".concat(o))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = I.useCallback(function(m, b) {
            if ("touches" in m && m.touches.length === 2) return !i.current.allowPinchZoom;
            var w = Kr(m),
                v = n.current,
                C = "deltaX" in m ? m.deltaX : v[0] - w[0],
                y = "deltaY" in m ? m.deltaY : v[1] - w[1],
                A, E = m.target,
                k = Math.abs(C) > Math.abs(y) ? "h" : "v";
            if ("touches" in m && k === "h" && E.type === "range") return !1;
            var B = _l(k, E);
            if (!B) return !0;
            if (B ? A = k : (A = k === "v" ? "h" : "v", B = _l(k, E)), !B) return !1;
            if (!r.current && "changedTouches" in m && (C || y) && (r.current = A), !A) return !0;
            var S = r.current || A;
            return EC(S, b, m, S === "h" ? C : y, !0)
        }, []),
        c = I.useCallback(function(m) {
            var b = m;
            if (!(!rn.length || rn[rn.length - 1] !== s)) {
                var w = "deltaY" in b ? Dl(b) : Kr(b),
                    v = t.current.filter(function(A) {
                        return A.name === b.type && (A.target === b.target || b.target === A.shadowParent) && AC(A.delta, w)
                    })[0];
                if (v && v.should) {
                    b.cancelable && b.preventDefault();
                    return
                }
                if (!v) {
                    var C = (i.current.shards || []).map(Nl).filter(Boolean).filter(function(A) {
                            return A.contains(b.target)
                        }),
                        y = C.length > 0 ? a(b, C[0]) : !i.current.noIsolation;
                    y && b.cancelable && b.preventDefault()
                }
            }
        }, []),
        l = I.useCallback(function(m, b, w, v) {
            var C = {
                name: m,
                delta: b,
                target: w,
                should: v,
                shadowParent: BC(w)
            };
            t.current.push(C), setTimeout(function() {
                t.current = t.current.filter(function(y) {
                    return y !== C
                })
            }, 1)
        }, []),
        u = I.useCallback(function(m) {
            n.current = Kr(m), r.current = void 0
        }, []),
        f = I.useCallback(function(m) {
            l(m.type, Dl(m), m.target, a(m, e.lockRef.current))
        }, []),
        d = I.useCallback(function(m) {
            l(m.type, Kr(m), m.target, a(m, e.lockRef.current))
        }, []);
    I.useEffect(function() {
        return rn.push(s), e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: d
            }), document.addEventListener("wheel", c, nn), document.addEventListener("touchmove", c, nn), document.addEventListener("touchstart", u, nn),
            function() {
                rn = rn.filter(function(m) {
                    return m !== s
                }), document.removeEventListener("wheel", c, nn), document.removeEventListener("touchmove", c, nn), document.removeEventListener("touchstart", u, nn)
            }
    }, []);
    var h = e.removeScrollBar,
        p = e.inert;
    return I.createElement(I.Fragment, null, p ? I.createElement(s, {
        styles: xC(o)
    }) : null, h ? I.createElement(mC, {
        gapMode: e.gapMode
    }) : null)
}

function BC(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const jC = nC(Gh, kC);
var Xh = I.forwardRef(function(e, t) {
    return I.createElement(ss, Ue({}, e, {
        ref: t,
        sideCar: jC
    }))
});
Xh.classNames = ss.classNames;
const SC = Xh;

function Fl(e) {
    var t = e.match(/^var\((.*)\)$/);
    return t ? t[1] : e
}

function PC(e, t) {
    var n = e;
    for (var r of t) {
        if (!(r in n)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
        n = n[r]
    }
    return n
}

function ep(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
        r = {};
    for (var o in e) {
        var s = e[o],
            i = [...n, o];
        typeof s == "string" || typeof s == "number" || s == null ? r[o] = t(s, i) : typeof s == "object" && !Array.isArray(s) ? r[o] = ep(s, t, i) : console.warn('Skipping invalid key "'.concat(i.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(s) ? "Array" : typeof s, '"'))
    }
    return r
}

function Ll(e, t) {
    var n = {};
    if (typeof t == "object") {
        var r = e;
        ep(t, (a, c) => {
            if (a != null) {
                var l = PC(r, c);
                n[Fl(l)] = String(a)
            }
        })
    } else {
        var o = e;
        for (var s in o) {
            var i = o[s];
            i != null && (n[Fl(s)] = i)
        }
    }
    return Object.defineProperty(n, "toString", {
        value: function() {
            return Object.keys(this).map(c => "".concat(c, ":").concat(this[c])).join(";")
        },
        writable: !1
    }), n
}
var Hi = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        var o = "1.0.38",
            s = "",
            i = "?",
            a = "function",
            c = "undefined",
            l = "object",
            u = "string",
            f = "major",
            d = "model",
            h = "name",
            p = "type",
            m = "vendor",
            b = "version",
            w = "architecture",
            v = "console",
            C = "mobile",
            y = "tablet",
            A = "smarttv",
            E = "wearable",
            k = "embedded",
            B = 500,
            S = "Amazon",
            P = "Apple",
            R = "ASUS",
            O = "BlackBerry",
            U = "Browser",
            X = "Chrome",
            T = "Edge",
            M = "Firefox",
            N = "Google",
            H = "Huawei",
            Q = "LG",
            Y = "Microsoft",
            me = "Motorola",
            se = "Opera",
            z = "Samsung",
            K = "Sharp",
            ee = "Sony",
            ne = "Xiaomi",
            Pe = "Zebra",
            yt = "Facebook",
            Ye = "Chromium OS",
            lt = "Mac OS",
            _r = function($, Z) {
                var V = {};
                for (var te in $) Z[te] && Z[te].length % 2 === 0 ? V[te] = Z[te].concat($[te]) : V[te] = $[te];
                return V
            },
            ke = function($) {
                for (var Z = {}, V = 0; V < $.length; V++) Z[$[V].toUpperCase()] = $[V];
                return Z
            },
            ut = function($, Z) {
                return typeof $ === u ? Xe(Z).indexOf(Xe($)) !== -1 : !1
            },
            Xe = function($) {
                return $.toLowerCase()
            },
            Dr = function($) {
                return typeof $ === u ? $.replace(/[^\d\.]/g, s).split(".")[0] : r
            },
            en = function($, Z) {
                if (typeof $ === u) return $ = $.replace(/^\s\s*/, s), typeof Z === c ? $ : $.substring(0, B)
            },
            _n = function($, Z) {
                for (var V = 0, te, dt, et, J, q, tt; V < Z.length && !q;) {
                    var ms = Z[V],
                        Ac = Z[V + 1];
                    for (te = dt = 0; te < ms.length && !q && ms[te];)
                        if (q = ms[te++].exec($), q)
                            for (et = 0; et < Ac.length; et++) tt = q[++dt], J = Ac[et], typeof J === l && J.length > 0 ? J.length === 2 ? typeof J[1] == a ? this[J[0]] = J[1].call(this, tt) : this[J[0]] = J[1] : J.length === 3 ? typeof J[1] === a && !(J[1].exec && J[1].test) ? this[J[0]] = tt ? J[1].call(this, tt, J[2]) : r : this[J[0]] = tt ? tt.replace(J[1], J[2]) : r : J.length === 4 && (this[J[0]] = tt ? J[3].call(this, tt.replace(J[1], J[2])) : r) : this[J] = tt || r;
                    V += 2
                }
            },
            ps = function($, Z) {
                for (var V in Z)
                    if (typeof Z[V] === l && Z[V].length > 0) {
                        for (var te = 0; te < Z[V].length; te++)
                            if (ut(Z[V][te], $)) return V === i ? r : V
                    } else if (ut(Z[V], $)) return V === i ? r : V;
                return $
            },
            mm = {
                "1.0": "/8",
                "1.2": "/1",
                "1.3": "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            },
            Cc = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            },
            Ec = {
                browser: [
                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                    [b, [h, "Chrome"]],
                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                    [b, [h, "Edge"]],
                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                    [h, b],
                    [/opios[\/ ]+([\w\.]+)/i],
                    [b, [h, se + " Mini"]],
                    [/\bop(?:rg)?x\/([\w\.]+)/i],
                    [b, [h, se + " GX"]],
                    [/\bopr\/([\w\.]+)/i],
                    [b, [h, se]],
                    [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                    [b, [h, "Baidu"]],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                    [h, b],
                    [/\bddg\/([\w\.]+)/i],
                    [b, [h, "DuckDuckGo"]],
                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                    [b, [h, "UC" + U]],
                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                    [b, [h, "WeChat"]],
                    [/konqueror\/([\w\.]+)/i],
                    [b, [h, "Konqueror"]],
                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                    [b, [h, "IE"]],
                    [/ya(?:search)?browser\/([\w\.]+)/i],
                    [b, [h, "Yandex"]],
                    [/slbrowser\/([\w\.]+)/i],
                    [b, [h, "Smart Lenovo " + U]],
                    [/(avast|avg)\/([\w\.]+)/i],
                    [
                        [h, /(.+)/, "$1 Secure " + U], b
                    ],
                    [/\bfocus\/([\w\.]+)/i],
                    [b, [h, M + " Focus"]],
                    [/\bopt\/([\w\.]+)/i],
                    [b, [h, se + " Touch"]],
                    [/coc_coc\w+\/([\w\.]+)/i],
                    [b, [h, "Coc Coc"]],
                    [/dolfin\/([\w\.]+)/i],
                    [b, [h, "Dolphin"]],
                    [/coast\/([\w\.]+)/i],
                    [b, [h, se + " Coast"]],
                    [/miuibrowser\/([\w\.]+)/i],
                    [b, [h, "MIUI " + U]],
                    [/fxios\/([-\w\.]+)/i],
                    [b, [h, M]],
                    [/\bqihu|(qi?ho?o?|360)browser/i],
                    [
                        [h, "360 " + U]
                    ],
                    [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                    [
                        [h, /(.+)/, "$1 " + U], b
                    ],
                    [/samsungbrowser\/([\w\.]+)/i],
                    [b, [h, z + " Internet"]],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [h, /_/g, " "], b
                    ],
                    [/metasr[\/ ]?([\d\.]+)/i],
                    [b, [h, "Sogou Explorer"]],
                    [/(sogou)mo\w+\/([\d\.]+)/i],
                    [
                        [h, "Sogou Mobile"], b
                    ],
                    [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                    [h, b],
                    [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                    [h],
                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                    [
                        [h, yt], b
                    ],
                    [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                    [h, b],
                    [/\bgsa\/([\w\.]+) .*safari\//i],
                    [b, [h, "GSA"]],
                    [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                    [b, [h, "TikTok"]],
                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                    [b, [h, X + " Headless"]],
                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [h, X + " WebView"], b
                    ],
                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                    [b, [h, "Android " + U]],
                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                    [h, b],
                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                    [b, [h, "Mobile Safari"]],
                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                    [b, h],
                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                    [h, [b, ps, mm]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [h, b],
                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                    [
                        [h, "Netscape"], b
                    ],
                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                    [b, [h, M + " Reality"]],
                    [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                    [h, b],
                    [/(cobalt)\/([\w\.]+)/i],
                    [h, [b, /master.|lts./, ""]]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                    [
                        [w, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [w, Xe]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [w, "ia32"]
                    ],
                    [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                    [
                        [w, "arm64"]
                    ],
                    [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                    [
                        [w, "armhf"]
                    ],
                    [/windows (ce|mobile); ppc;/i],
                    [
                        [w, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                    [
                        [w, /ower/, s, Xe]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [w, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                    [
                        [w, Xe]
                    ]
                ],
                device: [
                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                    [d, [m, z],
                        [p, y]
                    ],
                    [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                    [d, [m, z],
                        [p, C]
                    ],
                    [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                    [d, [m, P],
                        [p, C]
                    ],
                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                    [d, [m, P],
                        [p, y]
                    ],
                    [/(macintosh);/i],
                    [d, [m, P]],
                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                    [d, [m, K],
                        [p, C]
                    ],
                    [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                    [d, [m, H],
                        [p, y]
                    ],
                    [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                    [d, [m, H],
                        [p, C]
                    ],
                    [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                    [
                        [d, /_/g, " "],
                        [m, ne],
                        [p, C]
                    ],
                    [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                    [
                        [d, /_/g, " "],
                        [m, ne],
                        [p, y]
                    ],
                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                    [d, [m, "OPPO"],
                        [p, C]
                    ],
                    [/\b(opd2\d{3}a?) bui/i],
                    [d, [m, "OPPO"],
                        [p, y]
                    ],
                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                    [d, [m, "Vivo"],
                        [p, C]
                    ],
                    [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                    [d, [m, "Realme"],
                        [p, C]
                    ],
                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                    [d, [m, me],
                        [p, C]
                    ],
                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                    [d, [m, me],
                        [p, y]
                    ],
                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                    [d, [m, Q],
                        [p, y]
                    ],
                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                    [d, [m, Q],
                        [p, C]
                    ],
                    [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                    [d, [m, "Lenovo"],
                        [p, y]
                    ],
                    [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                    [
                        [d, /_/g, " "],
                        [m, "Nokia"],
                        [p, C]
                    ],
                    [/(pixel c)\b/i],
                    [d, [m, N],
                        [p, y]
                    ],
                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                    [d, [m, N],
                        [p, C]
                    ],
                    [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [d, [m, ee],
                        [p, C]
                    ],
                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                    [
                        [d, "Xperia Tablet"],
                        [m, ee],
                        [p, y]
                    ],
                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                    [d, [m, "OnePlus"],
                        [p, C]
                    ],
                    [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                    [d, [m, S],
                        [p, y]
                    ],
                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                    [
                        [d, /(.+)/g, "Fire Phone $1"],
                        [m, S],
                        [p, C]
                    ],
                    [/(playbook);[-\w\),; ]+(rim)/i],
                    [d, m, [p, y]],
                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                    [d, [m, O],
                        [p, C]
                    ],
                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                    [d, [m, R],
                        [p, y]
                    ],
                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                    [d, [m, R],
                        [p, C]
                    ],
                    [/(nexus 9)/i],
                    [d, [m, "HTC"],
                        [p, y]
                    ],
                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                    [m, [d, /_/g, " "],
                        [p, C]
                    ],
                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                    [d, [m, "Acer"],
                        [p, y]
                    ],
                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                    [d, [m, "Meizu"],
                        [p, C]
                    ],
                    [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                    [d, [m, "Ulefone"],
                        [p, C]
                    ],
                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                    [m, d, [p, C]],
                    [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                    [m, d, [p, y]],
                    [/(surface duo)/i],
                    [d, [m, Y],
                        [p, y]
                    ],
                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                    [d, [m, "Fairphone"],
                        [p, C]
                    ],
                    [/(u304aa)/i],
                    [d, [m, "AT&T"],
                        [p, C]
                    ],
                    [/\bsie-(\w*)/i],
                    [d, [m, "Siemens"],
                        [p, C]
                    ],
                    [/\b(rct\w+) b/i],
                    [d, [m, "RCA"],
                        [p, y]
                    ],
                    [/\b(venue[\d ]{2,7}) b/i],
                    [d, [m, "Dell"],
                        [p, y]
                    ],
                    [/\b(q(?:mv|ta)\w+) b/i],
                    [d, [m, "Verizon"],
                        [p, y]
                    ],
                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                    [d, [m, "Barnes & Noble"],
                        [p, y]
                    ],
                    [/\b(tm\d{3}\w+) b/i],
                    [d, [m, "NuVision"],
                        [p, y]
                    ],
                    [/\b(k88) b/i],
                    [d, [m, "ZTE"],
                        [p, y]
                    ],
                    [/\b(nx\d{3}j) b/i],
                    [d, [m, "ZTE"],
                        [p, C]
                    ],
                    [/\b(gen\d{3}) b.+49h/i],
                    [d, [m, "Swiss"],
                        [p, C]
                    ],
                    [/\b(zur\d{3}) b/i],
                    [d, [m, "Swiss"],
                        [p, y]
                    ],
                    [/\b((zeki)?tb.*\b) b/i],
                    [d, [m, "Zeki"],
                        [p, y]
                    ],
                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                    [
                        [m, "Dragon Touch"], d, [p, y]
                    ],
                    [/\b(ns-?\w{0,9}) b/i],
                    [d, [m, "Insignia"],
                        [p, y]
                    ],
                    [/\b((nxa|next)-?\w{0,9}) b/i],
                    [d, [m, "NextBook"],
                        [p, y]
                    ],
                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                    [
                        [m, "Voice"], d, [p, C]
                    ],
                    [/\b(lvtel\-)?(v1[12]) b/i],
                    [
                        [m, "LvTel"], d, [p, C]
                    ],
                    [/\b(ph-1) /i],
                    [d, [m, "Essential"],
                        [p, C]
                    ],
                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                    [d, [m, "Envizen"],
                        [p, y]
                    ],
                    [/\b(trio[-\w\. ]+) b/i],
                    [d, [m, "MachSpeed"],
                        [p, y]
                    ],
                    [/\btu_(1491) b/i],
                    [d, [m, "Rotor"],
                        [p, y]
                    ],
                    [/(shield[\w ]+) b/i],
                    [d, [m, "Nvidia"],
                        [p, y]
                    ],
                    [/(sprint) (\w+)/i],
                    [m, d, [p, C]],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [d, /\./g, " "],
                        [m, Y],
                        [p, C]
                    ],
                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                    [d, [m, Pe],
                        [p, y]
                    ],
                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                    [d, [m, Pe],
                        [p, C]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [m, [p, A]],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [d, /^/, "SmartTV"],
                        [m, z],
                        [p, A]
                    ],
                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                    [
                        [m, Q],
                        [p, A]
                    ],
                    [/(apple) ?tv/i],
                    [m, [d, P + " TV"],
                        [p, A]
                    ],
                    [/crkey/i],
                    [
                        [d, X + "cast"],
                        [m, N],
                        [p, A]
                    ],
                    [/droid.+aft(\w+)( bui|\))/i],
                    [d, [m, S],
                        [p, A]
                    ],
                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                    [d, [m, K],
                        [p, A]
                    ],
                    [/(bravia[\w ]+)( bui|\))/i],
                    [d, [m, ee],
                        [p, A]
                    ],
                    [/(mitv-\w{5}) bui/i],
                    [d, [m, ne],
                        [p, A]
                    ],
                    [/Hbbtv.*(technisat) (.*);/i],
                    [m, d, [p, A]],
                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                    [
                        [m, en],
                        [d, en],
                        [p, A]
                    ],
                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                    [
                        [p, A]
                    ],
                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                    [m, d, [p, v]],
                    [/droid.+; (shield) bui/i],
                    [d, [m, "Nvidia"],
                        [p, v]
                    ],
                    [/(playstation [345portablevi]+)/i],
                    [d, [m, ee],
                        [p, v]
                    ],
                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                    [d, [m, Y],
                        [p, v]
                    ],
                    [/((pebble))app/i],
                    [m, d, [p, E]],
                    [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                    [d, [m, P],
                        [p, E]
                    ],
                    [/droid.+; (glass) \d/i],
                    [d, [m, N],
                        [p, E]
                    ],
                    [/droid.+; (wt63?0{2,3})\)/i],
                    [d, [m, Pe],
                        [p, E]
                    ],
                    [/(quest( \d| pro)?)/i],
                    [d, [m, yt],
                        [p, E]
                    ],
                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                    [m, [p, k]],
                    [/(aeobc)\b/i],
                    [d, [m, S],
                        [p, k]
                    ],
                    [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                    [d, [p, C]],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                    [d, [p, y]],
                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                    [
                        [p, y]
                    ],
                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                    [
                        [p, C]
                    ],
                    [/(android[-\w\. ]{0,9});.+buil/i],
                    [d, [m, "Generic"]]
                ],
                engine: [
                    [/windows.+ edge\/([\w\.]+)/i],
                    [b, [h, T + "HTML"]],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [b, [h, "Blink"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                    [h, b],
                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                    [b, h]
                ],
                os: [
                    [/microsoft (windows) (vista|xp)/i],
                    [h, b],
                    [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                    [h, [b, ps, Cc]],
                    [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                    [
                        [b, ps, Cc],
                        [h, "Windows"]
                    ],
                    [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                    [
                        [b, /_/g, "."],
                        [h, "iOS"]
                    ],
                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                    [
                        [h, lt],
                        [b, /_/g, "."]
                    ],
                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                    [b, h],
                    [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                    [h, b],
                    [/\(bb(10);/i],
                    [b, [h, O]],
                    [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                    [b, [h, "Symbian"]],
                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                    [b, [h, M + " OS"]],
                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                    [b, [h, "webOS"]],
                    [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                    [b, [h, "watchOS"]],
                    [/crkey\/([\d\.]+)/i],
                    [b, [h, X + "cast"]],
                    [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                    [
                        [h, Ye], b
                    ],
                    [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                    [h, b],
                    [/(sunos) ?([\w\.\d]*)/i],
                    [
                        [h, "Solaris"], b
                    ],
                    [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                    [h, b]
                ]
            },
            Qe = function($, Z) {
                if (typeof $ === l && (Z = $, $ = r), !(this instanceof Qe)) return new Qe($, Z).getResult();
                var V = typeof n !== c && n.navigator ? n.navigator : r,
                    te = $ || (V && V.userAgent ? V.userAgent : s),
                    dt = V && V.userAgentData ? V.userAgentData : r,
                    et = Z ? _r(Ec, Z) : Ec,
                    J = V && V.userAgent == te;
                return this.getBrowser = function() {
                    var q = {};
                    return q[h] = r, q[b] = r, _n.call(q, te, et.browser), q[f] = Dr(q[b]), J && V && V.brave && typeof V.brave.isBrave == a && (q[h] = "Brave"), q
                }, this.getCPU = function() {
                    var q = {};
                    return q[w] = r, _n.call(q, te, et.cpu), q
                }, this.getDevice = function() {
                    var q = {};
                    return q[m] = r, q[d] = r, q[p] = r, _n.call(q, te, et.device), J && !q[p] && dt && dt.mobile && (q[p] = C), J && q[d] == "Macintosh" && V && typeof V.standalone !== c && V.maxTouchPoints && V.maxTouchPoints > 2 && (q[d] = "iPad", q[p] = y), q
                }, this.getEngine = function() {
                    var q = {};
                    return q[h] = r, q[b] = r, _n.call(q, te, et.engine), q
                }, this.getOS = function() {
                    var q = {};
                    return q[h] = r, q[b] = r, _n.call(q, te, et.os), J && !q[h] && dt && dt.platform && dt.platform != "Unknown" && (q[h] = dt.platform.replace(/chrome os/i, Ye).replace(/macos/i, lt)), q
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return te
                }, this.setUA = function(q) {
                    return te = typeof q === u && q.length > B ? en(q, B) : q, this
                }, this.setUA(te), this
            };
        Qe.VERSION = o, Qe.BROWSER = ke([h, b, f]), Qe.CPU = ke([w]), Qe.DEVICE = ke([d, m, p, v, C, A, y, E, k]), Qe.ENGINE = Qe.OS = ke([h, b]), e.exports && (t = e.exports = Qe), t.UAParser = Qe;
        var tn = typeof n !== c && (n.jQuery || n.Zepto);
        if (tn && !tn.ua) {
            var Nr = new Qe;
            tn.ua = Nr.getResult(), tn.ua.get = function() {
                return Nr.getUA()
            }, tn.ua.set = function($) {
                Nr.setUA($);
                var Z = Nr.getResult();
                for (var V in Z) tn.ua[V] = Z[V]
            }
        }
    })(typeof window == "object" ? window : gm)
})(Hi, Hi.exports);
var TC = Hi.exports,
    Pr = {},
    OC = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
    },
    tp = {},
    De = {};
let tc;
const MC = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
De.getSymbolSize = function(t) {
    if (!t) throw new Error('"version" cannot be null or undefined');
    if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
    return t * 4 + 17
};
De.getSymbolTotalCodewords = function(t) {
    return MC[t]
};
De.getBCHDigit = function(e) {
    let t = 0;
    for (; e !== 0;) t++, e >>>= 1;
    return t
};
De.setToSJISFunction = function(t) {
    if (typeof t != "function") throw new Error('"toSJISFunc" is not a valid function.');
    tc = t
};
De.isKanjiModeEnabled = function() {
    return typeof tc < "u"
};
De.toSJIS = function(t) {
    return tc(t)
};
var is = {};
(function(e) {
    e.L = {
        bit: 1
    }, e.M = {
        bit: 0
    }, e.Q = {
        bit: 3
    }, e.H = {
        bit: 2
    };

    function t(n) {
        if (typeof n != "string") throw new Error("Param is not a string");
        switch (n.toLowerCase()) {
            case "l":
            case "low":
                return e.L;
            case "m":
            case "medium":
                return e.M;
            case "q":
            case "quartile":
                return e.Q;
            case "h":
            case "high":
                return e.H;
            default:
                throw new Error("Unknown EC Level: " + n)
        }
    }
    e.isValid = function(r) {
        return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4
    }, e.from = function(r, o) {
        if (e.isValid(r)) return r;
        try {
            return t(r)
        } catch {
            return o
        }
    }
})(is);

function np() {
    this.buffer = [], this.length = 0
}
np.prototype = {
    get: function(e) {
        const t = Math.floor(e / 8);
        return (this.buffer[t] >>> 7 - e % 8 & 1) === 1
    },
    put: function(e, t) {
        for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) === 1)
    },
    getLengthInBits: function() {
        return this.length
    },
    putBit: function(e) {
        const t = Math.floor(this.length / 8);
        this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
    }
};
var RC = np;

function Tr(e) {
    if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
}
Tr.prototype.set = function(e, t, n, r) {
    const o = e * this.size + t;
    this.data[o] = n, r && (this.reservedBit[o] = !0)
};
Tr.prototype.get = function(e, t) {
    return this.data[e * this.size + t]
};
Tr.prototype.xor = function(e, t, n) {
    this.data[e * this.size + t] ^= n
};
Tr.prototype.isReserved = function(e, t) {
    return this.reservedBit[e * this.size + t]
};
var _C = Tr,
    rp = {};
(function(e) {
    const t = De.getSymbolSize;
    e.getRowColCoords = function(r) {
        if (r === 1) return [];
        const o = Math.floor(r / 7) + 2,
            s = t(r),
            i = s === 145 ? 26 : Math.ceil((s - 13) / (2 * o - 2)) * 2,
            a = [s - 7];
        for (let c = 1; c < o - 1; c++) a[c] = a[c - 1] - i;
        return a.push(6), a.reverse()
    }, e.getPositions = function(r) {
        const o = [],
            s = e.getRowColCoords(r),
            i = s.length;
        for (let a = 0; a < i; a++)
            for (let c = 0; c < i; c++) a === 0 && c === 0 || a === 0 && c === i - 1 || a === i - 1 && c === 0 || o.push([s[a], s[c]]);
        return o
    }
})(rp);
var op = {};
const DC = De.getSymbolSize,
    Ul = 7;
op.getPositions = function(t) {
    const n = DC(t);
    return [
        [0, 0],
        [n - Ul, 0],
        [0, n - Ul]
    ]
};
var sp = {};
(function(e) {
    e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    const t = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
    };
    e.isValid = function(o) {
        return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7
    }, e.from = function(o) {
        return e.isValid(o) ? parseInt(o, 10) : void 0
    }, e.getPenaltyN1 = function(o) {
        const s = o.size;
        let i = 0,
            a = 0,
            c = 0,
            l = null,
            u = null;
        for (let f = 0; f < s; f++) {
            a = c = 0, l = u = null;
            for (let d = 0; d < s; d++) {
                let h = o.get(f, d);
                h === l ? a++ : (a >= 5 && (i += t.N1 + (a - 5)), l = h, a = 1), h = o.get(d, f), h === u ? c++ : (c >= 5 && (i += t.N1 + (c - 5)), u = h, c = 1)
            }
            a >= 5 && (i += t.N1 + (a - 5)), c >= 5 && (i += t.N1 + (c - 5))
        }
        return i
    }, e.getPenaltyN2 = function(o) {
        const s = o.size;
        let i = 0;
        for (let a = 0; a < s - 1; a++)
            for (let c = 0; c < s - 1; c++) {
                const l = o.get(a, c) + o.get(a, c + 1) + o.get(a + 1, c) + o.get(a + 1, c + 1);
                (l === 4 || l === 0) && i++
            }
        return i * t.N2
    }, e.getPenaltyN3 = function(o) {
        const s = o.size;
        let i = 0,
            a = 0,
            c = 0;
        for (let l = 0; l < s; l++) {
            a = c = 0;
            for (let u = 0; u < s; u++) a = a << 1 & 2047 | o.get(l, u), u >= 10 && (a === 1488 || a === 93) && i++, c = c << 1 & 2047 | o.get(u, l), u >= 10 && (c === 1488 || c === 93) && i++
        }
        return i * t.N3
    }, e.getPenaltyN4 = function(o) {
        let s = 0;
        const i = o.data.length;
        for (let c = 0; c < i; c++) s += o.data[c];
        return Math.abs(Math.ceil(s * 100 / i / 5) - 10) * t.N4
    };

    function n(r, o, s) {
        switch (r) {
            case e.Patterns.PATTERN000:
                return (o + s) % 2 === 0;
            case e.Patterns.PATTERN001:
                return o % 2 === 0;
            case e.Patterns.PATTERN010:
                return s % 3 === 0;
            case e.Patterns.PATTERN011:
                return (o + s) % 3 === 0;
            case e.Patterns.PATTERN100:
                return (Math.floor(o / 2) + Math.floor(s / 3)) % 2 === 0;
            case e.Patterns.PATTERN101:
                return o * s % 2 + o * s % 3 === 0;
            case e.Patterns.PATTERN110:
                return (o * s % 2 + o * s % 3) % 2 === 0;
            case e.Patterns.PATTERN111:
                return (o * s % 3 + (o + s) % 2) % 2 === 0;
            default:
                throw new Error("bad maskPattern:" + r)
        }
    }
    e.applyMask = function(o, s) {
        const i = s.size;
        for (let a = 0; a < i; a++)
            for (let c = 0; c < i; c++) s.isReserved(c, a) || s.xor(c, a, n(o, c, a))
    }, e.getBestMask = function(o, s) {
        const i = Object.keys(e.Patterns).length;
        let a = 0,
            c = 1 / 0;
        for (let l = 0; l < i; l++) {
            s(l), e.applyMask(l, o);
            const u = e.getPenaltyN1(o) + e.getPenaltyN2(o) + e.getPenaltyN3(o) + e.getPenaltyN4(o);
            e.applyMask(l, o), u < c && (c = u, a = l)
        }
        return a
    }
})(sp);
var as = {};
const xt = is,
    Jr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
    Zr = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
as.getBlocksCount = function(t, n) {
    switch (n) {
        case xt.L:
            return Jr[(t - 1) * 4 + 0];
        case xt.M:
            return Jr[(t - 1) * 4 + 1];
        case xt.Q:
            return Jr[(t - 1) * 4 + 2];
        case xt.H:
            return Jr[(t - 1) * 4 + 3];
        default:
            return
    }
};
as.getTotalCodewordsCount = function(t, n) {
    switch (n) {
        case xt.L:
            return Zr[(t - 1) * 4 + 0];
        case xt.M:
            return Zr[(t - 1) * 4 + 1];
        case xt.Q:
            return Zr[(t - 1) * 4 + 2];
        case xt.H:
            return Zr[(t - 1) * 4 + 3];
        default:
            return
    }
};
var ip = {},
    cs = {};
const Hn = new Uint8Array(512),
    xo = new Uint8Array(256);
(function() {
    let t = 1;
    for (let n = 0; n < 255; n++) Hn[n] = t, xo[t] = n, t <<= 1, t & 256 && (t ^= 285);
    for (let n = 255; n < 512; n++) Hn[n] = Hn[n - 255]
})();
cs.log = function(t) {
    if (t < 1) throw new Error("log(" + t + ")");
    return xo[t]
};
cs.exp = function(t) {
    return Hn[t]
};
cs.mul = function(t, n) {
    return t === 0 || n === 0 ? 0 : Hn[xo[t] + xo[n]]
};
(function(e) {
    const t = cs;
    e.mul = function(r, o) {
        const s = new Uint8Array(r.length + o.length - 1);
        for (let i = 0; i < r.length; i++)
            for (let a = 0; a < o.length; a++) s[i + a] ^= t.mul(r[i], o[a]);
        return s
    }, e.mod = function(r, o) {
        let s = new Uint8Array(r);
        for (; s.length - o.length >= 0;) {
            const i = s[0];
            for (let c = 0; c < o.length; c++) s[c] ^= t.mul(o[c], i);
            let a = 0;
            for (; a < s.length && s[a] === 0;) a++;
            s = s.slice(a)
        }
        return s
    }, e.generateECPolynomial = function(r) {
        let o = new Uint8Array([1]);
        for (let s = 0; s < r; s++) o = e.mul(o, new Uint8Array([1, t.exp(s)]));
        return o
    }
})(ip);
const ap = ip;

function nc(e) {
    this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
}
nc.prototype.initialize = function(t) {
    this.degree = t, this.genPoly = ap.generateECPolynomial(this.degree)
};
nc.prototype.encode = function(t) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    const n = new Uint8Array(t.length + this.degree);
    n.set(t);
    const r = ap.mod(n, this.genPoly),
        o = this.degree - r.length;
    if (o > 0) {
        const s = new Uint8Array(this.degree);
        return s.set(r, o), s
    }
    return r
};
var NC = nc,
    cp = {},
    _t = {},
    rc = {};
rc.isValid = function(t) {
    return !isNaN(t) && t >= 1 && t <= 40
};
var ct = {};
const lp = "[0-9]+",
    FC = "[A-Z $%*+\\-./:]+";
let gr = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
gr = gr.replace(/u/g, "\\u");
const LC = "(?:(?![A-Z0-9 $%*+\\-./:]|" + gr + `)(?:.|[\r
]))+`;
ct.KANJI = new RegExp(gr, "g");
ct.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
ct.BYTE = new RegExp(LC, "g");
ct.NUMERIC = new RegExp(lp, "g");
ct.ALPHANUMERIC = new RegExp(FC, "g");
const UC = new RegExp("^" + gr + "$"),
    zC = new RegExp("^" + lp + "$"),
    WC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
ct.testKanji = function(t) {
    return UC.test(t)
};
ct.testNumeric = function(t) {
    return zC.test(t)
};
ct.testAlphanumeric = function(t) {
    return WC.test(t)
};
(function(e) {
    const t = rc,
        n = ct;
    e.NUMERIC = {
        id: "Numeric",
        bit: 1,
        ccBits: [10, 12, 14]
    }, e.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [9, 11, 13]
    }, e.BYTE = {
        id: "Byte",
        bit: 4,
        ccBits: [8, 16, 16]
    }, e.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [8, 10, 12]
    }, e.MIXED = {
        bit: -1
    }, e.getCharCountIndicator = function(s, i) {
        if (!s.ccBits) throw new Error("Invalid mode: " + s);
        if (!t.isValid(i)) throw new Error("Invalid version: " + i);
        return i >= 1 && i < 10 ? s.ccBits[0] : i < 27 ? s.ccBits[1] : s.ccBits[2]
    }, e.getBestModeForData = function(s) {
        return n.testNumeric(s) ? e.NUMERIC : n.testAlphanumeric(s) ? e.ALPHANUMERIC : n.testKanji(s) ? e.KANJI : e.BYTE
    }, e.toString = function(s) {
        if (s && s.id) return s.id;
        throw new Error("Invalid mode")
    }, e.isValid = function(s) {
        return s && s.bit && s.ccBits
    };

    function r(o) {
        if (typeof o != "string") throw new Error("Param is not a string");
        switch (o.toLowerCase()) {
            case "numeric":
                return e.NUMERIC;
            case "alphanumeric":
                return e.ALPHANUMERIC;
            case "kanji":
                return e.KANJI;
            case "byte":
                return e.BYTE;
            default:
                throw new Error("Unknown mode: " + o)
        }
    }
    e.from = function(s, i) {
        if (e.isValid(s)) return s;
        try {
            return r(s)
        } catch {
            return i
        }
    }
})(_t);
(function(e) {
    const t = De,
        n = as,
        r = is,
        o = _t,
        s = rc,
        i = 7973,
        a = t.getBCHDigit(i);

    function c(d, h, p) {
        for (let m = 1; m <= 40; m++)
            if (h <= e.getCapacity(m, p, d)) return m
    }

    function l(d, h) {
        return o.getCharCountIndicator(d, h) + 4
    }

    function u(d, h) {
        let p = 0;
        return d.forEach(function(m) {
            const b = l(m.mode, h);
            p += b + m.getBitsLength()
        }), p
    }

    function f(d, h) {
        for (let p = 1; p <= 40; p++)
            if (u(d, p) <= e.getCapacity(p, h, o.MIXED)) return p
    }
    e.from = function(h, p) {
        return s.isValid(h) ? parseInt(h, 10) : p
    }, e.getCapacity = function(h, p, m) {
        if (!s.isValid(h)) throw new Error("Invalid QR Code version");
        typeof m > "u" && (m = o.BYTE);
        const b = t.getSymbolTotalCodewords(h),
            w = n.getTotalCodewordsCount(h, p),
            v = (b - w) * 8;
        if (m === o.MIXED) return v;
        const C = v - l(m, h);
        switch (m) {
            case o.NUMERIC:
                return Math.floor(C / 10 * 3);
            case o.ALPHANUMERIC:
                return Math.floor(C / 11 * 2);
            case o.KANJI:
                return Math.floor(C / 13);
            case o.BYTE:
            default:
                return Math.floor(C / 8)
        }
    }, e.getBestVersionForData = function(h, p) {
        let m;
        const b = r.from(p, r.M);
        if (Array.isArray(h)) {
            if (h.length > 1) return f(h, b);
            if (h.length === 0) return 1;
            m = h[0]
        } else m = h;
        return c(m.mode, m.getLength(), b)
    }, e.getEncodedBits = function(h) {
        if (!s.isValid(h) || h < 7) throw new Error("Invalid QR Code version");
        let p = h << 12;
        for (; t.getBCHDigit(p) - a >= 0;) p ^= i << t.getBCHDigit(p) - a;
        return h << 12 | p
    }
})(cp);
var up = {};
const Qi = De,
    dp = 1335,
    qC = 21522,
    zl = Qi.getBCHDigit(dp);
up.getEncodedBits = function(t, n) {
    const r = t.bit << 3 | n;
    let o = r << 10;
    for (; Qi.getBCHDigit(o) - zl >= 0;) o ^= dp << Qi.getBCHDigit(o) - zl;
    return (r << 10 | o) ^ qC
};
var fp = {};
const HC = _t;

function En(e) {
    this.mode = HC.NUMERIC, this.data = e.toString()
}
En.getBitsLength = function(t) {
    return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
};
En.prototype.getLength = function() {
    return this.data.length
};
En.prototype.getBitsLength = function() {
    return En.getBitsLength(this.data.length)
};
En.prototype.write = function(t) {
    let n, r, o;
    for (n = 0; n + 3 <= this.data.length; n += 3) r = this.data.substr(n, 3), o = parseInt(r, 10), t.put(o, 10);
    const s = this.data.length - n;
    s > 0 && (r = this.data.substr(n), o = parseInt(r, 10), t.put(o, s * 3 + 1))
};
var QC = En;
const VC = _t,
    zs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

function An(e) {
    this.mode = VC.ALPHANUMERIC, this.data = e
}
An.getBitsLength = function(t) {
    return 11 * Math.floor(t / 2) + 6 * (t % 2)
};
An.prototype.getLength = function() {
    return this.data.length
};
An.prototype.getBitsLength = function() {
    return An.getBitsLength(this.data.length)
};
An.prototype.write = function(t) {
    let n;
    for (n = 0; n + 2 <= this.data.length; n += 2) {
        let r = zs.indexOf(this.data[n]) * 45;
        r += zs.indexOf(this.data[n + 1]), t.put(r, 11)
    }
    this.data.length % 2 && t.put(zs.indexOf(this.data[n]), 6)
};
var $C = An,
    GC = function(t) {
        for (var n = [], r = t.length, o = 0; o < r; o++) {
            var s = t.charCodeAt(o);
            if (s >= 55296 && s <= 56319 && r > o + 1) {
                var i = t.charCodeAt(o + 1);
                i >= 56320 && i <= 57343 && (s = (s - 55296) * 1024 + i - 56320 + 65536, o += 1)
            }
            if (s < 128) {
                n.push(s);
                continue
            }
            if (s < 2048) {
                n.push(s >> 6 | 192), n.push(s & 63 | 128);
                continue
            }
            if (s < 55296 || s >= 57344 && s < 65536) {
                n.push(s >> 12 | 224), n.push(s >> 6 & 63 | 128), n.push(s & 63 | 128);
                continue
            }
            if (s >= 65536 && s <= 1114111) {
                n.push(s >> 18 | 240), n.push(s >> 12 & 63 | 128), n.push(s >> 6 & 63 | 128), n.push(s & 63 | 128);
                continue
            }
            n.push(239, 191, 189)
        }
        return new Uint8Array(n).buffer
    };
const KC = GC,
    JC = _t;

function xn(e) {
    this.mode = JC.BYTE, typeof e == "string" && (e = KC(e)), this.data = new Uint8Array(e)
}
xn.getBitsLength = function(t) {
    return t * 8
};
xn.prototype.getLength = function() {
    return this.data.length
};
xn.prototype.getBitsLength = function() {
    return xn.getBitsLength(this.data.length)
};
xn.prototype.write = function(e) {
    for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
};
var ZC = xn;
const YC = _t,
    XC = De;

function In(e) {
    this.mode = YC.KANJI, this.data = e
}
In.getBitsLength = function(t) {
    return t * 13
};
In.prototype.getLength = function() {
    return this.data.length
};
In.prototype.getBitsLength = function() {
    return In.getBitsLength(this.data.length)
};
In.prototype.write = function(e) {
    let t;
    for (t = 0; t < this.data.length; t++) {
        let n = XC.toSJIS(this.data[t]);
        if (n >= 33088 && n <= 40956) n -= 33088;
        else if (n >= 57408 && n <= 60351) n -= 49472;
        else throw new Error("Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`);
        n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13)
    }
};
var e2 = In,
    hp = {
        exports: {}
    };
(function(e) {
    var t = {
        single_source_shortest_paths: function(n, r, o) {
            var s = {},
                i = {};
            i[r] = 0;
            var a = t.PriorityQueue.make();
            a.push(r, 0);
            for (var c, l, u, f, d, h, p, m, b; !a.empty();) {
                c = a.pop(), l = c.value, f = c.cost, d = n[l] || {};
                for (u in d) d.hasOwnProperty(u) && (h = d[u], p = f + h, m = i[u], b = typeof i[u] > "u", (b || m > p) && (i[u] = p, a.push(u, p), s[u] = l))
            }
            if (typeof o < "u" && typeof i[o] > "u") {
                var w = ["Could not find a path from ", r, " to ", o, "."].join("");
                throw new Error(w)
            }
            return s
        },
        extract_shortest_path_from_predecessor_list: function(n, r) {
            for (var o = [], s = r; s;) o.push(s), n[s], s = n[s];
            return o.reverse(), o
        },
        find_path: function(n, r, o) {
            var s = t.single_source_shortest_paths(n, r, o);
            return t.extract_shortest_path_from_predecessor_list(s, o)
        },
        PriorityQueue: {
            make: function(n) {
                var r = t.PriorityQueue,
                    o = {},
                    s;
                n = n || {};
                for (s in r) r.hasOwnProperty(s) && (o[s] = r[s]);
                return o.queue = [], o.sorter = n.sorter || r.default_sorter, o
            },
            default_sorter: function(n, r) {
                return n.cost - r.cost
            },
            push: function(n, r) {
                var o = {
                    value: n,
                    cost: r
                };
                this.queue.push(o), this.queue.sort(this.sorter)
            },
            pop: function() {
                return this.queue.shift()
            },
            empty: function() {
                return this.queue.length === 0
            }
        }
    };
    e.exports = t
})(hp);
var t2 = hp.exports;
(function(e) {
    const t = _t,
        n = QC,
        r = $C,
        o = ZC,
        s = e2,
        i = ct,
        a = De,
        c = t2;

    function l(w) {
        return unescape(encodeURIComponent(w)).length
    }

    function u(w, v, C) {
        const y = [];
        let A;
        for (;
            (A = w.exec(C)) !== null;) y.push({
            data: A[0],
            index: A.index,
            mode: v,
            length: A[0].length
        });
        return y
    }

    function f(w) {
        const v = u(i.NUMERIC, t.NUMERIC, w),
            C = u(i.ALPHANUMERIC, t.ALPHANUMERIC, w);
        let y, A;
        return a.isKanjiModeEnabled() ? (y = u(i.BYTE, t.BYTE, w), A = u(i.KANJI, t.KANJI, w)) : (y = u(i.BYTE_KANJI, t.BYTE, w), A = []), v.concat(C, y, A).sort(function(k, B) {
            return k.index - B.index
        }).map(function(k) {
            return {
                data: k.data,
                mode: k.mode,
                length: k.length
            }
        })
    }

    function d(w, v) {
        switch (v) {
            case t.NUMERIC:
                return n.getBitsLength(w);
            case t.ALPHANUMERIC:
                return r.getBitsLength(w);
            case t.KANJI:
                return s.getBitsLength(w);
            case t.BYTE:
                return o.getBitsLength(w)
        }
    }

    function h(w) {
        return w.reduce(function(v, C) {
            const y = v.length - 1 >= 0 ? v[v.length - 1] : null;
            return y && y.mode === C.mode ? (v[v.length - 1].data += C.data, v) : (v.push(C), v)
        }, [])
    }

    function p(w) {
        const v = [];
        for (let C = 0; C < w.length; C++) {
            const y = w[C];
            switch (y.mode) {
                case t.NUMERIC:
                    v.push([y, {
                        data: y.data,
                        mode: t.ALPHANUMERIC,
                        length: y.length
                    }, {
                        data: y.data,
                        mode: t.BYTE,
                        length: y.length
                    }]);
                    break;
                case t.ALPHANUMERIC:
                    v.push([y, {
                        data: y.data,
                        mode: t.BYTE,
                        length: y.length
                    }]);
                    break;
                case t.KANJI:
                    v.push([y, {
                        data: y.data,
                        mode: t.BYTE,
                        length: l(y.data)
                    }]);
                    break;
                case t.BYTE:
                    v.push([{
                        data: y.data,
                        mode: t.BYTE,
                        length: l(y.data)
                    }])
            }
        }
        return v
    }

    function m(w, v) {
        const C = {},
            y = {
                start: {}
            };
        let A = ["start"];
        for (let E = 0; E < w.length; E++) {
            const k = w[E],
                B = [];
            for (let S = 0; S < k.length; S++) {
                const P = k[S],
                    R = "" + E + S;
                B.push(R), C[R] = {
                    node: P,
                    lastCount: 0
                }, y[R] = {};
                for (let O = 0; O < A.length; O++) {
                    const U = A[O];
                    C[U] && C[U].node.mode === P.mode ? (y[U][R] = d(C[U].lastCount + P.length, P.mode) - d(C[U].lastCount, P.mode), C[U].lastCount += P.length) : (C[U] && (C[U].lastCount = P.length), y[U][R] = d(P.length, P.mode) + 4 + t.getCharCountIndicator(P.mode, v))
                }
            }
            A = B
        }
        for (let E = 0; E < A.length; E++) y[A[E]].end = 0;
        return {
            map: y,
            table: C
        }
    }

    function b(w, v) {
        let C;
        const y = t.getBestModeForData(w);
        if (C = t.from(v, y), C !== t.BYTE && C.bit < y.bit) throw new Error('"' + w + '" cannot be encoded with mode ' + t.toString(C) + `.
 Suggested mode is: ` + t.toString(y));
        switch (C === t.KANJI && !a.isKanjiModeEnabled() && (C = t.BYTE), C) {
            case t.NUMERIC:
                return new n(w);
            case t.ALPHANUMERIC:
                return new r(w);
            case t.KANJI:
                return new s(w);
            case t.BYTE:
                return new o(w)
        }
    }
    e.fromArray = function(v) {
        return v.reduce(function(C, y) {
            return typeof y == "string" ? C.push(b(y, null)) : y.data && C.push(b(y.data, y.mode)), C
        }, [])
    }, e.fromString = function(v, C) {
        const y = f(v, a.isKanjiModeEnabled()),
            A = p(y),
            E = m(A, C),
            k = c.find_path(E.map, "start", "end"),
            B = [];
        for (let S = 1; S < k.length - 1; S++) B.push(E.table[k[S]].node);
        return e.fromArray(h(B))
    }, e.rawSplit = function(v) {
        return e.fromArray(f(v, a.isKanjiModeEnabled()))
    }
})(fp);
const ls = De,
    Ws = is,
    n2 = RC,
    r2 = _C,
    o2 = rp,
    s2 = op,
    Vi = sp,
    $i = as,
    i2 = NC,
    Io = cp,
    a2 = up,
    c2 = _t,
    qs = fp;

function l2(e, t) {
    const n = e.size,
        r = s2.getPositions(t);
    for (let o = 0; o < r.length; o++) {
        const s = r[o][0],
            i = r[o][1];
        for (let a = -1; a <= 7; a++)
            if (!(s + a <= -1 || n <= s + a))
                for (let c = -1; c <= 7; c++) i + c <= -1 || n <= i + c || (a >= 0 && a <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (a === 0 || a === 6) || a >= 2 && a <= 4 && c >= 2 && c <= 4 ? e.set(s + a, i + c, !0, !0) : e.set(s + a, i + c, !1, !0))
    }
}

function u2(e) {
    const t = e.size;
    for (let n = 8; n < t - 8; n++) {
        const r = n % 2 === 0;
        e.set(n, 6, r, !0), e.set(6, n, r, !0)
    }
}

function d2(e, t) {
    const n = o2.getPositions(t);
    for (let r = 0; r < n.length; r++) {
        const o = n[r][0],
            s = n[r][1];
        for (let i = -2; i <= 2; i++)
            for (let a = -2; a <= 2; a++) i === -2 || i === 2 || a === -2 || a === 2 || i === 0 && a === 0 ? e.set(o + i, s + a, !0, !0) : e.set(o + i, s + a, !1, !0)
    }
}

function f2(e, t) {
    const n = e.size,
        r = Io.getEncodedBits(t);
    let o, s, i;
    for (let a = 0; a < 18; a++) o = Math.floor(a / 3), s = a % 3 + n - 8 - 3, i = (r >> a & 1) === 1, e.set(o, s, i, !0), e.set(s, o, i, !0)
}

function Hs(e, t, n) {
    const r = e.size,
        o = a2.getEncodedBits(t, n);
    let s, i;
    for (s = 0; s < 15; s++) i = (o >> s & 1) === 1, s < 6 ? e.set(s, 8, i, !0) : s < 8 ? e.set(s + 1, 8, i, !0) : e.set(r - 15 + s, 8, i, !0), s < 8 ? e.set(8, r - s - 1, i, !0) : s < 9 ? e.set(8, 15 - s - 1 + 1, i, !0) : e.set(8, 15 - s - 1, i, !0);
    e.set(r - 8, 8, 1, !0)
}

function h2(e, t) {
    const n = e.size;
    let r = -1,
        o = n - 1,
        s = 7,
        i = 0;
    for (let a = n - 1; a > 0; a -= 2)
        for (a === 6 && a--;;) {
            for (let c = 0; c < 2; c++)
                if (!e.isReserved(o, a - c)) {
                    let l = !1;
                    i < t.length && (l = (t[i] >>> s & 1) === 1), e.set(o, a - c, l), s--, s === -1 && (i++, s = 7)
                }
            if (o += r, o < 0 || n <= o) {
                o -= r, r = -r;
                break
            }
        }
}

function p2(e, t, n) {
    const r = new n2;
    n.forEach(function(c) {
        r.put(c.mode.bit, 4), r.put(c.getLength(), c2.getCharCountIndicator(c.mode, e)), c.write(r)
    });
    const o = ls.getSymbolTotalCodewords(e),
        s = $i.getTotalCodewordsCount(e, t),
        i = (o - s) * 8;
    for (r.getLengthInBits() + 4 <= i && r.put(0, 4); r.getLengthInBits() % 8 !== 0;) r.putBit(0);
    const a = (i - r.getLengthInBits()) / 8;
    for (let c = 0; c < a; c++) r.put(c % 2 ? 17 : 236, 8);
    return m2(r, e, t)
}

function m2(e, t, n) {
    const r = ls.getSymbolTotalCodewords(t),
        o = $i.getTotalCodewordsCount(t, n),
        s = r - o,
        i = $i.getBlocksCount(t, n),
        a = r % i,
        c = i - a,
        l = Math.floor(r / i),
        u = Math.floor(s / i),
        f = u + 1,
        d = l - u,
        h = new i2(d);
    let p = 0;
    const m = new Array(i),
        b = new Array(i);
    let w = 0;
    const v = new Uint8Array(e.buffer);
    for (let k = 0; k < i; k++) {
        const B = k < c ? u : f;
        m[k] = v.slice(p, p + B), b[k] = h.encode(m[k]), p += B, w = Math.max(w, B)
    }
    const C = new Uint8Array(r);
    let y = 0,
        A, E;
    for (A = 0; A < w; A++)
        for (E = 0; E < i; E++) A < m[E].length && (C[y++] = m[E][A]);
    for (A = 0; A < d; A++)
        for (E = 0; E < i; E++) C[y++] = b[E][A];
    return C
}

function g2(e, t, n, r) {
    let o;
    if (Array.isArray(e)) o = qs.fromArray(e);
    else if (typeof e == "string") {
        let l = t;
        if (!l) {
            const u = qs.rawSplit(e);
            l = Io.getBestVersionForData(u, n)
        }
        o = qs.fromString(e, l || 40)
    } else throw new Error("Invalid data");
    const s = Io.getBestVersionForData(o, n);
    if (!s) throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!t) t = s;
    else if (t < s) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + s + `.
`);
    const i = p2(t, n, o),
        a = ls.getSymbolSize(t),
        c = new r2(a);
    return l2(c, t), u2(c), d2(c, t), Hs(c, n, 0), t >= 7 && f2(c, t), h2(c, i), isNaN(r) && (r = Vi.getBestMask(c, Hs.bind(null, c, n))), Vi.applyMask(r, c), Hs(c, n, r), {
        modules: c,
        version: t,
        errorCorrectionLevel: n,
        maskPattern: r,
        segments: o
    }
}
tp.create = function(t, n) {
    if (typeof t > "u" || t === "") throw new Error("No input text");
    let r = Ws.M,
        o, s;
    return typeof n < "u" && (r = Ws.from(n.errorCorrectionLevel, Ws.M), o = Io.from(n.version), s = Vi.from(n.maskPattern), n.toSJISFunc && ls.setToSJISFunction(n.toSJISFunc)), g2(t, o, r, s)
};
var pp = {},
    oc = {};
(function(e) {
    function t(n) {
        if (typeof n == "number" && (n = n.toString()), typeof n != "string") throw new Error("Color should be defined as hex string");
        let r = n.slice().replace("#", "").split("");
        if (r.length < 3 || r.length === 5 || r.length > 8) throw new Error("Invalid hex color: " + n);
        (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(s) {
            return [s, s]
        }))), r.length === 6 && r.push("F", "F");
        const o = parseInt(r.join(""), 16);
        return {
            r: o >> 24 & 255,
            g: o >> 16 & 255,
            b: o >> 8 & 255,
            a: o & 255,
            hex: "#" + r.slice(0, 6).join("")
        }
    }
    e.getOptions = function(r) {
        r || (r = {}), r.color || (r.color = {});
        const o = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin,
            s = r.width && r.width >= 21 ? r.width : void 0,
            i = r.scale || 4;
        return {
            width: s,
            scale: s ? 4 : i,
            margin: o,
            color: {
                dark: t(r.color.dark || "#000000ff"),
                light: t(r.color.light || "#ffffffff")
            },
            type: r.type,
            rendererOpts: r.rendererOpts || {}
        }
    }, e.getScale = function(r, o) {
        return o.width && o.width >= r + o.margin * 2 ? o.width / (r + o.margin * 2) : o.scale
    }, e.getImageWidth = function(r, o) {
        const s = e.getScale(r, o);
        return Math.floor((r + o.margin * 2) * s)
    }, e.qrToImageData = function(r, o, s) {
        const i = o.modules.size,
            a = o.modules.data,
            c = e.getScale(i, s),
            l = Math.floor((i + s.margin * 2) * c),
            u = s.margin * c,
            f = [s.color.light, s.color.dark];
        for (let d = 0; d < l; d++)
            for (let h = 0; h < l; h++) {
                let p = (d * l + h) * 4,
                    m = s.color.light;
                if (d >= u && h >= u && d < l - u && h < l - u) {
                    const b = Math.floor((d - u) / c),
                        w = Math.floor((h - u) / c);
                    m = f[a[b * i + w] ? 1 : 0]
                }
                r[p++] = m.r, r[p++] = m.g, r[p++] = m.b, r[p] = m.a
            }
    }
})(oc);
(function(e) {
    const t = oc;

    function n(o, s, i) {
        o.clearRect(0, 0, s.width, s.height), s.style || (s.style = {}), s.height = i, s.width = i, s.style.height = i + "px", s.style.width = i + "px"
    }

    function r() {
        try {
            return document.createElement("canvas")
        } catch {
            throw new Error("You need to specify a canvas element")
        }
    }
    e.render = function(s, i, a) {
        let c = a,
            l = i;
        typeof c > "u" && (!i || !i.getContext) && (c = i, i = void 0), i || (l = r()), c = t.getOptions(c);
        const u = t.getImageWidth(s.modules.size, c),
            f = l.getContext("2d"),
            d = f.createImageData(u, u);
        return t.qrToImageData(d.data, s, c), n(f, l, u), f.putImageData(d, 0, 0), l
    }, e.renderToDataURL = function(s, i, a) {
        let c = a;
        typeof c > "u" && (!i || !i.getContext) && (c = i, i = void 0), c || (c = {});
        const l = e.render(s, i, c),
            u = c.type || "image/png",
            f = c.rendererOpts || {};
        return l.toDataURL(u, f.quality)
    }
})(pp);
var mp = {};
const b2 = oc;

function Wl(e, t) {
    const n = e.a / 255,
        r = t + '="' + e.hex + '"';
    return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
}

function Qs(e, t, n) {
    let r = e + t;
    return typeof n < "u" && (r += " " + n), r
}

function y2(e, t, n) {
    let r = "",
        o = 0,
        s = !1,
        i = 0;
    for (let a = 0; a < e.length; a++) {
        const c = Math.floor(a % t),
            l = Math.floor(a / t);
        !c && !s && (s = !0), e[a] ? (i++, a > 0 && c > 0 && e[a - 1] || (r += s ? Qs("M", c + n, .5 + l + n) : Qs("m", o, 0), o = 0, s = !1), c + 1 < t && e[a + 1] || (r += Qs("h", i), i = 0)) : o++
    }
    return r
}
mp.render = function(t, n, r) {
    const o = b2.getOptions(n),
        s = t.modules.size,
        i = t.modules.data,
        a = s + o.margin * 2,
        c = o.color.light.a ? "<path " + Wl(o.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "",
        l = "<path " + Wl(o.color.dark, "stroke") + ' d="' + y2(i, s, o.margin) + '"/>',
        u = 'viewBox="0 0 ' + a + " " + a + '"',
        d = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + u + ' shape-rendering="crispEdges">' + c + l + `</svg>
`;
    return typeof r == "function" && r(null, d), d
};
const w2 = OC,
    Gi = tp,
    gp = pp,
    v2 = mp;

function sc(e, t, n, r, o) {
    const s = [].slice.call(arguments, 1),
        i = s.length,
        a = typeof s[i - 1] == "function";
    if (!a && !w2()) throw new Error("Callback required as last argument");
    if (a) {
        if (i < 2) throw new Error("Too few arguments provided");
        i === 2 ? (o = n, n = t, t = r = void 0) : i === 3 && (t.getContext && typeof o > "u" ? (o = r, r = void 0) : (o = r, r = n, n = t, t = void 0))
    } else {
        if (i < 1) throw new Error("Too few arguments provided");
        return i === 1 ? (n = t, t = r = void 0) : i === 2 && !t.getContext && (r = n, n = t, t = void 0), new Promise(function(c, l) {
            try {
                const u = Gi.create(n, r);
                c(e(u, t, r))
            } catch (u) {
                l(u)
            }
        })
    }
    try {
        const c = Gi.create(n, r);
        o(null, e(c, t, r))
    } catch (c) {
        o(c)
    }
}
Pr.create = Gi.create;
Pr.toCanvas = sc.bind(null, gp.render);
Pr.toDataURL = sc.bind(null, gp.renderToDataURL);
Pr.toString = sc.bind(null, function(e, t, n) {
    return v2.render(e, n)
});
us.type = "coinbaseWallet";

function us(e = {}) {
    return e.version === "3" || e.headlessMode ? E2(e) : C2(e)
}

function C2(e) {
    let t, n, r, o, s;
    return i => ({
        id: "coinbaseWalletSDK",
        name: "Coinbase Wallet",
        supportsSimulation: !0,
        type: us.type,
        async connect({
            chainId: a
        } = {}) {
            try {
                const c = await this.getProvider(),
                    l = (await c.request({
                        method: "eth_requestAccounts"
                    })).map(f => we(f));
                r || (r = this.onAccountsChanged.bind(this), c.on("accountsChanged", r)), o || (o = this.onChainChanged.bind(this), c.on("chainChanged", o)), s || (s = this.onDisconnect.bind(this), c.on("disconnect", s));
                let u = await this.getChainId();
                return a && u !== a && (u = (await this.switchChain({
                    chainId: a
                }).catch(d => {
                    if (d.code === oe.code) throw d;
                    return {
                        id: u
                    }
                })) ? .id ? ? u), {
                    accounts: l,
                    chainId: u
                }
            } catch (c) {
                throw /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(c.message) ? new oe(c) : c
            }
        },
        async disconnect() {
            const a = await this.getProvider();
            r && (a.removeListener("accountsChanged", r), r = void 0), o && (a.removeListener("chainChanged", o), o = void 0), s && (a.removeListener("disconnect", s), s = void 0), a.disconnect(), a.close ? .()
        },
        async getAccounts() {
            return (await (await this.getProvider()).request({
                method: "eth_accounts"
            })).map(c => we(c))
        },
        async getChainId() {
            const c = await (await this.getProvider()).request({
                method: "eth_chainId"
            });
            return Number(c)
        },
        async getProvider() {
            if (!n) {
                const a = await (async () => {
                    const {
                        default: c
                    } = await _(() =>
                        import ("./index-b8c3edf5.js").then(l => l.i), ["static/js/index-b8c3edf5.js", "static/js/react-74e86ac5.js", "static/js/hooks.module-8e5b7080.js", "static/js/events-3e14e1f5.js", "static/js/___vite-browser-external_commonjs-proxy-d1c6d304.js", "static/js/inherits_browser-2c87d58f.js"]);
                    return typeof c != "function" && typeof c.default == "function" ? c.default : c
                })();
                t = new a({ ...e,
                    appChainIds: i.chains.map(c => c.id)
                }), n = t.makeWeb3Provider({ ...e,
                    options: e.preference ? ? "all"
                })
            }
            return n
        },
        async isAuthorized() {
            try {
                return !!(await this.getAccounts()).length
            } catch {
                return !1
            }
        },
        async switchChain({
            addEthereumChainParameter: a,
            chainId: c
        }) {
            const l = i.chains.find(f => f.id === c);
            if (!l) throw new qe(new Gt);
            const u = await this.getProvider();
            try {
                return await u.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: W(l.id)
                    }]
                }), l
            } catch (f) {
                if (f.code === 4902) try {
                    let d;
                    a ? .blockExplorerUrls ? d = a.blockExplorerUrls : d = l.blockExplorers ? .default.url ? [l.blockExplorers ? .default.url] : [];
                    let h;
                    a ? .rpcUrls ? .length ? h = a.rpcUrls : h = [l.rpcUrls.default ? .http[0] ? ? ""];
                    const p = {
                        blockExplorerUrls: d,
                        chainId: W(c),
                        chainName: a ? .chainName ? ? l.name,
                        iconUrls: a ? .iconUrls,
                        nativeCurrency: a ? .nativeCurrency ? ? l.nativeCurrency,
                        rpcUrls: h
                    };
                    return await u.request({
                        method: "wallet_addEthereumChain",
                        params: [p]
                    }), l
                } catch (d) {
                    throw new oe(d)
                }
                throw new qe(f)
            }
        },
        onAccountsChanged(a) {
            a.length === 0 ? this.onDisconnect() : i.emitter.emit("change", {
                accounts: a.map(c => we(c))
            })
        },
        onChainChanged(a) {
            const c = Number(a);
            i.emitter.emit("change", {
                chainId: c
            })
        },
        async onDisconnect(a) {
            i.emitter.emit("disconnect");
            const c = await this.getProvider();
            r && (c.removeListener("accountsChanged", r), r = void 0), o && (c.removeListener("chainChanged", o), o = void 0), s && (c.removeListener("disconnect", s), s = void 0)
        }
    })
}

function E2(e) {
    let n, r, o, s, i;
    return a => ({
        id: "coinbaseWalletSDK",
        name: "Coinbase Wallet",
        supportsSimulation: !0,
        type: us.type,
        async connect({
            chainId: c
        } = {}) {
            try {
                const l = await this.getProvider(),
                    u = (await l.request({
                        method: "eth_requestAccounts"
                    })).map(d => we(d));
                o || (o = this.onAccountsChanged.bind(this), l.on("accountsChanged", o)), s || (s = this.onChainChanged.bind(this), l.on("chainChanged", s)), i || (i = this.onDisconnect.bind(this), l.on("disconnect", i));
                let f = await this.getChainId();
                return c && f !== c && (f = (await this.switchChain({
                    chainId: c
                }).catch(h => {
                    if (h.code === oe.code) throw h;
                    return {
                        id: f
                    }
                })) ? .id ? ? f), {
                    accounts: u,
                    chainId: f
                }
            } catch (l) {
                throw /(user closed modal|accounts received is empty|user denied account)/i.test(l.message) ? new oe(l) : l
            }
        },
        async disconnect() {
            const c = await this.getProvider();
            o && (c.removeListener("accountsChanged", o), o = void 0), s && (c.removeListener("chainChanged", s), s = void 0), i && (c.removeListener("disconnect", i), i = void 0), c.disconnect(), c.close()
        },
        async getAccounts() {
            return (await (await this.getProvider()).request({
                method: "eth_accounts"
            })).map(l => we(l))
        },
        async getChainId() {
            const l = await (await this.getProvider()).request({
                method: "eth_chainId"
            });
            return Number(l)
        },
        async getProvider() {
            if (!r) {
                const c = await (async () => {
                    const {
                        default: h
                    } = await _(() =>
                        import ("./index-2b0eb9a7.js").then(p => p.i), ["static/js/index-2b0eb9a7.js", "static/js/react-74e86ac5.js", "static/js/bn-1b8fac16.js", "static/js/___vite-browser-external_commonjs-proxy-d1c6d304.js", "static/js/hooks.module-8e5b7080.js", "static/js/events-3e14e1f5.js", "static/js/inherits_browser-2c87d58f.js"]);
                    return typeof h != "function" && typeof h.default == "function" ? h.default : h
                })();
                n = new c({ ...e,
                    reloadOnDisconnect: !1
                });
                const l = n.walletExtension ? .getChainId(),
                    u = a.chains.find(h => e.chainId ? h.id === e.chainId : h.id === l) || a.chains[0],
                    f = e.chainId || u ? .id,
                    d = e.jsonRpcUrl || u ? .rpcUrls.default.http[0];
                r = n.makeWeb3Provider(d, f)
            }
            return r
        },
        async isAuthorized() {
            try {
                return !!(await this.getAccounts()).length
            } catch {
                return !1
            }
        },
        async switchChain({
            addEthereumChainParameter: c,
            chainId: l
        }) {
            const u = a.chains.find(d => d.id === l);
            if (!u) throw new qe(new Gt);
            const f = await this.getProvider();
            try {
                return await f.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: W(u.id)
                    }]
                }), u
            } catch (d) {
                if (d.code === 4902) try {
                    let h;
                    c ? .blockExplorerUrls ? h = c.blockExplorerUrls : h = u.blockExplorers ? .default.url ? [u.blockExplorers ? .default.url] : [];
                    let p;
                    c ? .rpcUrls ? .length ? p = c.rpcUrls : p = [u.rpcUrls.default ? .http[0] ? ? ""];
                    const m = {
                        blockExplorerUrls: h,
                        chainId: W(l),
                        chainName: c ? .chainName ? ? u.name,
                        iconUrls: c ? .iconUrls,
                        nativeCurrency: c ? .nativeCurrency ? ? u.nativeCurrency,
                        rpcUrls: p
                    };
                    return await f.request({
                        method: "wallet_addEthereumChain",
                        params: [m]
                    }), u
                } catch (h) {
                    throw new oe(h)
                }
                throw new qe(d)
            }
        },
        onAccountsChanged(c) {
            c.length === 0 ? this.onDisconnect() : a.emitter.emit("change", {
                accounts: c.map(l => we(l))
            })
        },
        onChainChanged(c) {
            const l = Number(c);
            a.emitter.emit("change", {
                chainId: l
            })
        },
        async onDisconnect(c) {
            a.emitter.emit("disconnect");
            const l = await this.getProvider();
            o && (l.removeListener("accountsChanged", o), o = void 0), s && (l.removeListener("chainChanged", s), s = void 0), i && (l.removeListener("disconnect", i), i = void 0)
        }
    })
}
bp.type = "safe";

function bp(e = {}) {
    const {
        shimDisconnect: t = !1
    } = e;
    let n, r;
    return o => ({
        id: "safe",
        name: "Safe",
        type: bp.type,
        async connect() {
            const s = await this.getProvider();
            if (!s) throw new Le;
            const i = await this.getAccounts(),
                a = await this.getChainId();
            return r || (r = this.onDisconnect.bind(this), s.on("disconnect", r)), t && await o.storage ? .removeItem("safe.disconnected"), {
                accounts: i,
                chainId: a
            }
        },
        async disconnect() {
            const s = await this.getProvider();
            if (!s) throw new Le;
            r && (s.removeListener("disconnect", r), r = void 0), t && await o.storage ? .setItem("safe.disconnected", !0)
        },
        async getAccounts() {
            const s = await this.getProvider();
            if (!s) throw new Le;
            return (await s.request({
                method: "eth_accounts"
            })).map(we)
        },
        async getProvider() {
            if (typeof window < "u" && window ? .parent !== window) {
                if (!n) {
                    const {
                        default: i
                    } = await _(() =>
                        import ("./index-7deb5fe3.js"), ["static/js/index-7deb5fe3.js", "static/js/react-74e86ac5.js"]), a = new i(e), c = await Pa(() => a.safe.getInfo(), {
                        timeout: e.unstable_getInfoTimeout ? ? 10
                    });
                    if (!c) throw new Error("Could not load Safe information");
                    const {
                        SafeAppProvider: l
                    } = await _(() =>
                        import ("./index-f6cc0ed5.js").then(u => u.i), ["static/js/index-f6cc0ed5.js", "static/js/react-74e86ac5.js", "static/js/events-3e14e1f5.js"]);
                    n = new l(c, a)
                }
                return n
            }
        },
        async getChainId() {
            const s = await this.getProvider();
            if (!s) throw new Le;
            return Number(s.chainId)
        },
        async isAuthorized() {
            try {
                return t && await o.storage ? .getItem("safe.disconnected") ? !1 : !!(await this.getAccounts()).length
            } catch {
                return !1
            }
        },
        onAccountsChanged() {},
        onChainChanged() {},
        onDisconnect() {
            o.emitter.emit("disconnect")
        }
    })
}
ic.type = "walletConnect";

function ic(e) {
    const t = e.isNewChainsStale ? ? !0;
    let n, r;
    const o = "eip155";
    let s, i, a, c, l, u;
    return f => ({
        id: "walletConnect",
        name: "WalletConnect",
        type: ic.type,
        async setup() {
            const d = await this.getProvider().catch(() => null);
            d && (a || (a = this.onConnect.bind(this), d.on("connect", a)), l || (l = this.onSessionDelete.bind(this), d.on("session_delete", l)))
        },
        async connect({
            chainId: d,
            ...h
        } = {}) {
            try {
                const p = await this.getProvider();
                if (!p) throw new Le;
                c || (c = this.onDisplayUri, p.on("display_uri", c));
                let m = d;
                if (!m) {
                    const C = await f.storage ? .getItem("state") ? ? {};
                    f.chains.some(A => A.id === C.chainId) ? m = C.chainId : m = f.chains[0] ? .id
                }
                if (!m) throw new Error("No chains found on connector.");
                const b = await this.isChainsStale();
                if (p.session && b && await p.disconnect(), !p.session || b) {
                    const C = f.chains.filter(y => y.id !== m).map(y => y.id);
                    await p.connect({
                        optionalChains: [m, ...C],
                        ..."pairingTopic" in h ? {
                            pairingTopic: h.pairingTopic
                        } : {}
                    }), this.setRequestedChainsIds(f.chains.map(y => y.id))
                }
                const w = (await p.enable()).map(C => we(C)),
                    v = await this.getChainId();
                return c && (p.removeListener("display_uri", c), c = void 0), a && (p.removeListener("connect", a), a = void 0), s || (s = this.onAccountsChanged.bind(this), p.on("accountsChanged", s)), i || (i = this.onChainChanged.bind(this), p.on("chainChanged", i)), u || (u = this.onDisconnect.bind(this), p.on("disconnect", u)), l || (l = this.onSessionDelete.bind(this), p.on("session_delete", l)), {
                    accounts: w,
                    chainId: v
                }
            } catch (p) {
                throw /(user rejected|connection request reset)/i.test(p ? .message) ? new oe(p) : p
            }
        },
        async disconnect() {
            const d = await this.getProvider();
            try {
                await d ? .disconnect()
            } catch (h) {
                if (!/No matching key/i.test(h.message)) throw h
            } finally {
                i && (d ? .removeListener("chainChanged", i), i = void 0), u && (d ? .removeListener("disconnect", u), u = void 0), a || (a = this.onConnect.bind(this), d ? .on("connect", a)), s && (d ? .removeListener("accountsChanged", s), s = void 0), l && (d ? .removeListener("session_delete", l), l = void 0), this.setRequestedChainsIds([])
            }
        },
        async getAccounts() {
            return (await this.getProvider()).accounts.map(h => we(h))
        },
        async getProvider({
            chainId: d
        } = {}) {
            async function h() {
                const p = f.chains.map(b => b.id);
                if (!p.length) return;
                const {
                    EthereumProvider: m
                } = await _(() =>
                    import ("./index.es-b7e34828.js"), ["static/js/index.es-b7e34828.js", "static/js/events-3e14e1f5.js", "static/js/react-74e86ac5.js", "static/js/___vite-browser-external_commonjs-proxy-d1c6d304.js"]);
                return await m.init({ ...e,
                    disableProviderPing: !0,
                    optionalChains: p,
                    projectId: e.projectId,
                    rpcMap: Object.fromEntries(f.chains.map(b => [b.id, b.rpcUrls.default.http[0]])),
                    showQrModal: e.showQrModal ? ? !0
                })
            }
            return n || (r || (r = h()), n = await r, n ? .events.setMaxListeners(Number.POSITIVE_INFINITY)), d && await this.switchChain ? .({
                chainId: d
            }), n
        },
        async getChainId() {
            return (await this.getProvider()).chainId
        },
        async isAuthorized() {
            try {
                const [d, h] = await Promise.all([this.getAccounts(), this.getProvider()]);
                return d.length ? await this.isChainsStale() && h.session ? (await h.disconnect().catch(() => {}), !1) : !0 : !1
            } catch {
                return !1
            }
        },
        async switchChain({
            addEthereumChainParameter: d,
            chainId: h
        }) {
            const p = await this.getProvider();
            if (!p) throw new Le;
            const m = f.chains.find(b => b.id === h);
            if (!m) throw new qe(new Gt);
            try {
                await Promise.all([new Promise(w => {
                    const v = ({
                        chainId: C
                    }) => {
                        C === h && (f.emitter.off("change", v), w())
                    };
                    f.emitter.on("change", v)
                }), p.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: W(h)
                    }]
                })]);
                const b = await this.getRequestedChainsIds();
                return this.setRequestedChainsIds([...b, h]), m
            } catch (b) {
                const w = b;
                if (/(user rejected)/i.test(w.message)) throw new oe(w);
                try {
                    let v;
                    d ? .blockExplorerUrls ? v = d.blockExplorerUrls : v = m.blockExplorers ? .default.url ? [m.blockExplorers ? .default.url] : [];
                    let C;
                    d ? .rpcUrls ? .length ? C = d.rpcUrls : C = [...m.rpcUrls.default.http];
                    const y = {
                        blockExplorerUrls: v,
                        chainId: W(h),
                        chainName: d ? .chainName ? ? m.name,
                        iconUrls: d ? .iconUrls,
                        nativeCurrency: d ? .nativeCurrency ? ? m.nativeCurrency,
                        rpcUrls: C
                    };
                    await p.request({
                        method: "wallet_addEthereumChain",
                        params: [y]
                    });
                    const A = await this.getRequestedChainsIds();
                    return this.setRequestedChainsIds([...A, h]), m
                } catch (v) {
                    throw new oe(v)
                }
            }
        },
        onAccountsChanged(d) {
            d.length === 0 ? this.onDisconnect() : f.emitter.emit("change", {
                accounts: d.map(h => we(h))
            })
        },
        onChainChanged(d) {
            const h = Number(d);
            f.emitter.emit("change", {
                chainId: h
            })
        },
        async onConnect(d) {
            const h = Number(d.chainId),
                p = await this.getAccounts();
            f.emitter.emit("connect", {
                accounts: p,
                chainId: h
            })
        },
        async onDisconnect(d) {
            this.setRequestedChainsIds([]), f.emitter.emit("disconnect");
            const h = await this.getProvider();
            s && (h.removeListener("accountsChanged", s), s = void 0), i && (h.removeListener("chainChanged", i), i = void 0), u && (h.removeListener("disconnect", u), u = void 0), l && (h.removeListener("session_delete", l), l = void 0), a || (a = this.onConnect.bind(this), h.on("connect", a))
        },
        onDisplayUri(d) {
            f.emitter.emit("message", {
                type: "display_uri",
                data: d
            })
        },
        onSessionDelete() {
            this.onDisconnect()
        },
        getNamespaceChainsIds() {
            return n ? n.session ? .namespaces[o] ? .accounts ? .map(h => Number.parseInt(h.split(":")[1] || "")) ? ? [] : []
        },
        async getRequestedChainsIds() {
            return await f.storage ? .getItem(this.requestedChainsStorageKey) ? ? []
        },
        async isChainsStale() {
            if (!t) return !1;
            const d = f.chains.map(m => m.id),
                h = this.getNamespaceChainsIds();
            if (h.length && !h.some(m => d.includes(m))) return !1;
            const p = await this.getRequestedChainsIds();
            return !d.every(m => p.includes(m))
        },
        async setRequestedChainsIds(d) {
            await f.storage ? .setItem(this.requestedChainsStorageKey, d)
        },
        get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`
        }
    })
}
var A2 = 768;
Z6({
    conditions: {
        defaultCondition: "smallScreen",
        conditionNames: ["smallScreen", "largeScreen"],
        responsiveArray: void 0
    }
});
var x2 = oh({
        conditions: {
            defaultCondition: "smallScreen",
            conditionNames: ["smallScreen", "largeScreen"],
            responsiveArray: void 0
        }
    }),
    Ki = r3({
        conditions: {
            defaultCondition: "base",
            conditionNames: ["base", "hover", "active"],
            responsiveArray: void 0
        },
        styles: {
            background: {
                values: {
                    accentColor: {
                        conditions: {
                            base: "ju367v9i",
                            hover: "ju367v9j",
                            active: "ju367v9k"
                        },
                        defaultClass: "ju367v9i"
                    },
                    accentColorForeground: {
                        conditions: {
                            base: "ju367v9l",
                            hover: "ju367v9m",
                            active: "ju367v9n"
                        },
                        defaultClass: "ju367v9l"
                    },
                    actionButtonBorder: {
                        conditions: {
                            base: "ju367v9o",
                            hover: "ju367v9p",
                            active: "ju367v9q"
                        },
                        defaultClass: "ju367v9o"
                    },
                    actionButtonBorderMobile: {
                        conditions: {
                            base: "ju367v9r",
                            hover: "ju367v9s",
                            active: "ju367v9t"
                        },
                        defaultClass: "ju367v9r"
                    },
                    actionButtonSecondaryBackground: {
                        conditions: {
                            base: "ju367v9u",
                            hover: "ju367v9v",
                            active: "ju367v9w"
                        },
                        defaultClass: "ju367v9u"
                    },
                    closeButton: {
                        conditions: {
                            base: "ju367v9x",
                            hover: "ju367v9y",
                            active: "ju367v9z"
                        },
                        defaultClass: "ju367v9x"
                    },
                    closeButtonBackground: {
                        conditions: {
                            base: "ju367va0",
                            hover: "ju367va1",
                            active: "ju367va2"
                        },
                        defaultClass: "ju367va0"
                    },
                    connectButtonBackground: {
                        conditions: {
                            base: "ju367va3",
                            hover: "ju367va4",
                            active: "ju367va5"
                        },
                        defaultClass: "ju367va3"
                    },
                    connectButtonBackgroundError: {
                        conditions: {
                            base: "ju367va6",
                            hover: "ju367va7",
                            active: "ju367va8"
                        },
                        defaultClass: "ju367va6"
                    },
                    connectButtonInnerBackground: {
                        conditions: {
                            base: "ju367va9",
                            hover: "ju367vaa",
                            active: "ju367vab"
                        },
                        defaultClass: "ju367va9"
                    },
                    connectButtonText: {
                        conditions: {
                            base: "ju367vac",
                            hover: "ju367vad",
                            active: "ju367vae"
                        },
                        defaultClass: "ju367vac"
                    },
                    connectButtonTextError: {
                        conditions: {
                            base: "ju367vaf",
                            hover: "ju367vag",
                            active: "ju367vah"
                        },
                        defaultClass: "ju367vaf"
                    },
                    connectionIndicator: {
                        conditions: {
                            base: "ju367vai",
                            hover: "ju367vaj",
                            active: "ju367vak"
                        },
                        defaultClass: "ju367vai"
                    },
                    downloadBottomCardBackground: {
                        conditions: {
                            base: "ju367val",
                            hover: "ju367vam",
                            active: "ju367van"
                        },
                        defaultClass: "ju367val"
                    },
                    downloadTopCardBackground: {
                        conditions: {
                            base: "ju367vao",
                            hover: "ju367vap",
                            active: "ju367vaq"
                        },
                        defaultClass: "ju367vao"
                    },
                    error: {
                        conditions: {
                            base: "ju367var",
                            hover: "ju367vas",
                            active: "ju367vat"
                        },
                        defaultClass: "ju367var"
                    },
                    generalBorder: {
                        conditions: {
                            base: "ju367vau",
                            hover: "ju367vav",
                            active: "ju367vaw"
                        },
                        defaultClass: "ju367vau"
                    },
                    generalBorderDim: {
                        conditions: {
                            base: "ju367vax",
                            hover: "ju367vay",
                            active: "ju367vaz"
                        },
                        defaultClass: "ju367vax"
                    },
                    menuItemBackground: {
                        conditions: {
                            base: "ju367vb0",
                            hover: "ju367vb1",
                            active: "ju367vb2"
                        },
                        defaultClass: "ju367vb0"
                    },
                    modalBackdrop: {
                        conditions: {
                            base: "ju367vb3",
                            hover: "ju367vb4",
                            active: "ju367vb5"
                        },
                        defaultClass: "ju367vb3"
                    },
                    modalBackground: {
                        conditions: {
                            base: "ju367vb6",
                            hover: "ju367vb7",
                            active: "ju367vb8"
                        },
                        defaultClass: "ju367vb6"
                    },
                    modalBorder: {
                        conditions: {
                            base: "ju367vb9",
                            hover: "ju367vba",
                            active: "ju367vbb"
                        },
                        defaultClass: "ju367vb9"
                    },
                    modalText: {
                        conditions: {
                            base: "ju367vbc",
                            hover: "ju367vbd",
                            active: "ju367vbe"
                        },
                        defaultClass: "ju367vbc"
                    },
                    modalTextDim: {
                        conditions: {
                            base: "ju367vbf",
                            hover: "ju367vbg",
                            active: "ju367vbh"
                        },
                        defaultClass: "ju367vbf"
                    },
                    modalTextSecondary: {
                        conditions: {
                            base: "ju367vbi",
                            hover: "ju367vbj",
                            active: "ju367vbk"
                        },
                        defaultClass: "ju367vbi"
                    },
                    profileAction: {
                        conditions: {
                            base: "ju367vbl",
                            hover: "ju367vbm",
                            active: "ju367vbn"
                        },
                        defaultClass: "ju367vbl"
                    },
                    profileActionHover: {
                        conditions: {
                            base: "ju367vbo",
                            hover: "ju367vbp",
                            active: "ju367vbq"
                        },
                        defaultClass: "ju367vbo"
                    },
                    profileForeground: {
                        conditions: {
                            base: "ju367vbr",
                            hover: "ju367vbs",
                            active: "ju367vbt"
                        },
                        defaultClass: "ju367vbr"
                    },
                    selectedOptionBorder: {
                        conditions: {
                            base: "ju367vbu",
                            hover: "ju367vbv",
                            active: "ju367vbw"
                        },
                        defaultClass: "ju367vbu"
                    },
                    standby: {
                        conditions: {
                            base: "ju367vbx",
                            hover: "ju367vby",
                            active: "ju367vbz"
                        },
                        defaultClass: "ju367vbx"
                    }
                }
            },
            borderColor: {
                values: {
                    accentColor: {
                        conditions: {
                            base: "ju367vc0",
                            hover: "ju367vc1",
                            active: "ju367vc2"
                        },
                        defaultClass: "ju367vc0"
                    },
                    accentColorForeground: {
                        conditions: {
                            base: "ju367vc3",
                            hover: "ju367vc4",
                            active: "ju367vc5"
                        },
                        defaultClass: "ju367vc3"
                    },
                    actionButtonBorder: {
                        conditions: {
                            base: "ju367vc6",
                            hover: "ju367vc7",
                            active: "ju367vc8"
                        },
                        defaultClass: "ju367vc6"
                    },
                    actionButtonBorderMobile: {
                        conditions: {
                            base: "ju367vc9",
                            hover: "ju367vca",
                            active: "ju367vcb"
                        },
                        defaultClass: "ju367vc9"
                    },
                    actionButtonSecondaryBackground: {
                        conditions: {
                            base: "ju367vcc",
                            hover: "ju367vcd",
                            active: "ju367vce"
                        },
                        defaultClass: "ju367vcc"
                    },
                    closeButton: {
                        conditions: {
                            base: "ju367vcf",
                            hover: "ju367vcg",
                            active: "ju367vch"
                        },
                        defaultClass: "ju367vcf"
                    },
                    closeButtonBackground: {
                        conditions: {
                            base: "ju367vci",
                            hover: "ju367vcj",
                            active: "ju367vck"
                        },
                        defaultClass: "ju367vci"
                    },
                    connectButtonBackground: {
                        conditions: {
                            base: "ju367vcl",
                            hover: "ju367vcm",
                            active: "ju367vcn"
                        },
                        defaultClass: "ju367vcl"
                    },
                    connectButtonBackgroundError: {
                        conditions: {
                            base: "ju367vco",
                            hover: "ju367vcp",
                            active: "ju367vcq"
                        },
                        defaultClass: "ju367vco"
                    },
                    connectButtonInnerBackground: {
                        conditions: {
                            base: "ju367vcr",
                            hover: "ju367vcs",
                            active: "ju367vct"
                        },
                        defaultClass: "ju367vcr"
                    },
                    connectButtonText: {
                        conditions: {
                            base: "ju367vcu",
                            hover: "ju367vcv",
                            active: "ju367vcw"
                        },
                        defaultClass: "ju367vcu"
                    },
                    connectButtonTextError: {
                        conditions: {
                            base: "ju367vcx",
                            hover: "ju367vcy",
                            active: "ju367vcz"
                        },
                        defaultClass: "ju367vcx"
                    },
                    connectionIndicator: {
                        conditions: {
                            base: "ju367vd0",
                            hover: "ju367vd1",
                            active: "ju367vd2"
                        },
                        defaultClass: "ju367vd0"
                    },
                    downloadBottomCardBackground: {
                        conditions: {
                            base: "ju367vd3",
                            hover: "ju367vd4",
                            active: "ju367vd5"
                        },
                        defaultClass: "ju367vd3"
                    },
                    downloadTopCardBackground: {
                        conditions: {
                            base: "ju367vd6",
                            hover: "ju367vd7",
                            active: "ju367vd8"
                        },
                        defaultClass: "ju367vd6"
                    },
                    error: {
                        conditions: {
                            base: "ju367vd9",
                            hover: "ju367vda",
                            active: "ju367vdb"
                        },
                        defaultClass: "ju367vd9"
                    },
                    generalBorder: {
                        conditions: {
                            base: "ju367vdc",
                            hover: "ju367vdd",
                            active: "ju367vde"
                        },
                        defaultClass: "ju367vdc"
                    },
                    generalBorderDim: {
                        conditions: {
                            base: "ju367vdf",
                            hover: "ju367vdg",
                            active: "ju367vdh"
                        },
                        defaultClass: "ju367vdf"
                    },
                    menuItemBackground: {
                        conditions: {
                            base: "ju367vdi",
                            hover: "ju367vdj",
                            active: "ju367vdk"
                        },
                        defaultClass: "ju367vdi"
                    },
                    modalBackdrop: {
                        conditions: {
                            base: "ju367vdl",
                            hover: "ju367vdm",
                            active: "ju367vdn"
                        },
                        defaultClass: "ju367vdl"
                    },
                    modalBackground: {
                        conditions: {
                            base: "ju367vdo",
                            hover: "ju367vdp",
                            active: "ju367vdq"
                        },
                        defaultClass: "ju367vdo"
                    },
                    modalBorder: {
                        conditions: {
                            base: "ju367vdr",
                            hover: "ju367vds",
                            active: "ju367vdt"
                        },
                        defaultClass: "ju367vdr"
                    },
                    modalText: {
                        conditions: {
                            base: "ju367vdu",
                            hover: "ju367vdv",
                            active: "ju367vdw"
                        },
                        defaultClass: "ju367vdu"
                    },
                    modalTextDim: {
                        conditions: {
                            base: "ju367vdx",
                            hover: "ju367vdy",
                            active: "ju367vdz"
                        },
                        defaultClass: "ju367vdx"
                    },
                    modalTextSecondary: {
                        conditions: {
                            base: "ju367ve0",
                            hover: "ju367ve1",
                            active: "ju367ve2"
                        },
                        defaultClass: "ju367ve0"
                    },
                    profileAction: {
                        conditions: {
                            base: "ju367ve3",
                            hover: "ju367ve4",
                            active: "ju367ve5"
                        },
                        defaultClass: "ju367ve3"
                    },
                    profileActionHover: {
                        conditions: {
                            base: "ju367ve6",
                            hover: "ju367ve7",
                            active: "ju367ve8"
                        },
                        defaultClass: "ju367ve6"
                    },
                    profileForeground: {
                        conditions: {
                            base: "ju367ve9",
                            hover: "ju367vea",
                            active: "ju367veb"
                        },
                        defaultClass: "ju367ve9"
                    },
                    selectedOptionBorder: {
                        conditions: {
                            base: "ju367vec",
                            hover: "ju367ved",
                            active: "ju367vee"
                        },
                        defaultClass: "ju367vec"
                    },
                    standby: {
                        conditions: {
                            base: "ju367vef",
                            hover: "ju367veg",
                            active: "ju367veh"
                        },
                        defaultClass: "ju367vef"
                    }
                }
            },
            boxShadow: {
                values: {
                    connectButton: {
                        conditions: {
                            base: "ju367vei",
                            hover: "ju367vej",
                            active: "ju367vek"
                        },
                        defaultClass: "ju367vei"
                    },
                    dialog: {
                        conditions: {
                            base: "ju367vel",
                            hover: "ju367vem",
                            active: "ju367ven"
                        },
                        defaultClass: "ju367vel"
                    },
                    profileDetailsAction: {
                        conditions: {
                            base: "ju367veo",
                            hover: "ju367vep",
                            active: "ju367veq"
                        },
                        defaultClass: "ju367veo"
                    },
                    selectedOption: {
                        conditions: {
                            base: "ju367ver",
                            hover: "ju367ves",
                            active: "ju367vet"
                        },
                        defaultClass: "ju367ver"
                    },
                    selectedWallet: {
                        conditions: {
                            base: "ju367veu",
                            hover: "ju367vev",
                            active: "ju367vew"
                        },
                        defaultClass: "ju367veu"
                    },
                    walletLogo: {
                        conditions: {
                            base: "ju367vex",
                            hover: "ju367vey",
                            active: "ju367vez"
                        },
                        defaultClass: "ju367vex"
                    }
                }
            },
            color: {
                values: {
                    accentColor: {
                        conditions: {
                            base: "ju367vf0",
                            hover: "ju367vf1",
                            active: "ju367vf2"
                        },
                        defaultClass: "ju367vf0"
                    },
                    accentColorForeground: {
                        conditions: {
                            base: "ju367vf3",
                            hover: "ju367vf4",
                            active: "ju367vf5"
                        },
                        defaultClass: "ju367vf3"
                    },
                    actionButtonBorder: {
                        conditions: {
                            base: "ju367vf6",
                            hover: "ju367vf7",
                            active: "ju367vf8"
                        },
                        defaultClass: "ju367vf6"
                    },
                    actionButtonBorderMobile: {
                        conditions: {
                            base: "ju367vf9",
                            hover: "ju367vfa",
                            active: "ju367vfb"
                        },
                        defaultClass: "ju367vf9"
                    },
                    actionButtonSecondaryBackground: {
                        conditions: {
                            base: "ju367vfc",
                            hover: "ju367vfd",
                            active: "ju367vfe"
                        },
                        defaultClass: "ju367vfc"
                    },
                    closeButton: {
                        conditions: {
                            base: "ju367vff",
                            hover: "ju367vfg",
                            active: "ju367vfh"
                        },
                        defaultClass: "ju367vff"
                    },
                    closeButtonBackground: {
                        conditions: {
                            base: "ju367vfi",
                            hover: "ju367vfj",
                            active: "ju367vfk"
                        },
                        defaultClass: "ju367vfi"
                    },
                    connectButtonBackground: {
                        conditions: {
                            base: "ju367vfl",
                            hover: "ju367vfm",
                            active: "ju367vfn"
                        },
                        defaultClass: "ju367vfl"
                    },
                    connectButtonBackgroundError: {
                        conditions: {
                            base: "ju367vfo",
                            hover: "ju367vfp",
                            active: "ju367vfq"
                        },
                        defaultClass: "ju367vfo"
                    },
                    connectButtonInnerBackground: {
                        conditions: {
                            base: "ju367vfr",
                            hover: "ju367vfs",
                            active: "ju367vft"
                        },
                        defaultClass: "ju367vfr"
                    },
                    connectButtonText: {
                        conditions: {
                            base: "ju367vfu",
                            hover: "ju367vfv",
                            active: "ju367vfw"
                        },
                        defaultClass: "ju367vfu"
                    },
                    connectButtonTextError: {
                        conditions: {
                            base: "ju367vfx",
                            hover: "ju367vfy",
                            active: "ju367vfz"
                        },
                        defaultClass: "ju367vfx"
                    },
                    connectionIndicator: {
                        conditions: {
                            base: "ju367vg0",
                            hover: "ju367vg1",
                            active: "ju367vg2"
                        },
                        defaultClass: "ju367vg0"
                    },
                    downloadBottomCardBackground: {
                        conditions: {
                            base: "ju367vg3",
                            hover: "ju367vg4",
                            active: "ju367vg5"
                        },
                        defaultClass: "ju367vg3"
                    },
                    downloadTopCardBackground: {
                        conditions: {
                            base: "ju367vg6",
                            hover: "ju367vg7",
                            active: "ju367vg8"
                        },
                        defaultClass: "ju367vg6"
                    },
                    error: {
                        conditions: {
                            base: "ju367vg9",
                            hover: "ju367vga",
                            active: "ju367vgb"
                        },
                        defaultClass: "ju367vg9"
                    },
                    generalBorder: {
                        conditions: {
                            base: "ju367vgc",
                            hover: "ju367vgd",
                            active: "ju367vge"
                        },
                        defaultClass: "ju367vgc"
                    },
                    generalBorderDim: {
                        conditions: {
                            base: "ju367vgf",
                            hover: "ju367vgg",
                            active: "ju367vgh"
                        },
                        defaultClass: "ju367vgf"
                    },
                    menuItemBackground: {
                        conditions: {
                            base: "ju367vgi",
                            hover: "ju367vgj",
                            active: "ju367vgk"
                        },
                        defaultClass: "ju367vgi"
                    },
                    modalBackdrop: {
                        conditions: {
                            base: "ju367vgl",
                            hover: "ju367vgm",
                            active: "ju367vgn"
                        },
                        defaultClass: "ju367vgl"
                    },
                    modalBackground: {
                        conditions: {
                            base: "ju367vgo",
                            hover: "ju367vgp",
                            active: "ju367vgq"
                        },
                        defaultClass: "ju367vgo"
                    },
                    modalBorder: {
                        conditions: {
                            base: "ju367vgr",
                            hover: "ju367vgs",
                            active: "ju367vgt"
                        },
                        defaultClass: "ju367vgr"
                    },
                    modalText: {
                        conditions: {
                            base: "ju367vgu",
                            hover: "ju367vgv",
                            active: "ju367vgw"
                        },
                        defaultClass: "ju367vgu"
                    },
                    modalTextDim: {
                        conditions: {
                            base: "ju367vgx",
                            hover: "ju367vgy",
                            active: "ju367vgz"
                        },
                        defaultClass: "ju367vgx"
                    },
                    modalTextSecondary: {
                        conditions: {
                            base: "ju367vh0",
                            hover: "ju367vh1",
                            active: "ju367vh2"
                        },
                        defaultClass: "ju367vh0"
                    },
                    profileAction: {
                        conditions: {
                            base: "ju367vh3",
                            hover: "ju367vh4",
                            active: "ju367vh5"
                        },
                        defaultClass: "ju367vh3"
                    },
                    profileActionHover: {
                        conditions: {
                            base: "ju367vh6",
                            hover: "ju367vh7",
                            active: "ju367vh8"
                        },
                        defaultClass: "ju367vh6"
                    },
                    profileForeground: {
                        conditions: {
                            base: "ju367vh9",
                            hover: "ju367vha",
                            active: "ju367vhb"
                        },
                        defaultClass: "ju367vh9"
                    },
                    selectedOptionBorder: {
                        conditions: {
                            base: "ju367vhc",
                            hover: "ju367vhd",
                            active: "ju367vhe"
                        },
                        defaultClass: "ju367vhc"
                    },
                    standby: {
                        conditions: {
                            base: "ju367vhf",
                            hover: "ju367vhg",
                            active: "ju367vhh"
                        },
                        defaultClass: "ju367vhf"
                    }
                }
            }
        }
    }, {
        conditions: {
            defaultCondition: "smallScreen",
            conditionNames: ["smallScreen", "largeScreen"],
            responsiveArray: void 0
        },
        styles: {
            alignItems: {
                values: {
                    "flex-start": {
                        conditions: {
                            smallScreen: "ju367v0",
                            largeScreen: "ju367v1"
                        },
                        defaultClass: "ju367v0"
                    },
                    "flex-end": {
                        conditions: {
                            smallScreen: "ju367v2",
                            largeScreen: "ju367v3"
                        },
                        defaultClass: "ju367v2"
                    },
                    center: {
                        conditions: {
                            smallScreen: "ju367v4",
                            largeScreen: "ju367v5"
                        },
                        defaultClass: "ju367v4"
                    }
                }
            },
            display: {
                values: {
                    none: {
                        conditions: {
                            smallScreen: "ju367v6",
                            largeScreen: "ju367v7"
                        },
                        defaultClass: "ju367v6"
                    },
                    block: {
                        conditions: {
                            smallScreen: "ju367v8",
                            largeScreen: "ju367v9"
                        },
                        defaultClass: "ju367v8"
                    },
                    flex: {
                        conditions: {
                            smallScreen: "ju367va",
                            largeScreen: "ju367vb"
                        },
                        defaultClass: "ju367va"
                    },
                    inline: {
                        conditions: {
                            smallScreen: "ju367vc",
                            largeScreen: "ju367vd"
                        },
                        defaultClass: "ju367vc"
                    }
                }
            }
        }
    }, {
        conditions: void 0,
        styles: {
            margin: {
                mappings: ["marginTop", "marginBottom", "marginLeft", "marginRight"]
            },
            marginX: {
                mappings: ["marginLeft", "marginRight"]
            },
            marginY: {
                mappings: ["marginTop", "marginBottom"]
            },
            padding: {
                mappings: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"]
            },
            paddingX: {
                mappings: ["paddingLeft", "paddingRight"]
            },
            paddingY: {
                mappings: ["paddingTop", "paddingBottom"]
            },
            alignSelf: {
                values: {
                    "flex-start": {
                        defaultClass: "ju367ve"
                    },
                    "flex-end": {
                        defaultClass: "ju367vf"
                    },
                    center: {
                        defaultClass: "ju367vg"
                    }
                }
            },
            backgroundSize: {
                values: {
                    cover: {
                        defaultClass: "ju367vh"
                    }
                }
            },
            borderRadius: {
                values: {
                    1: {
                        defaultClass: "ju367vi"
                    },
                    6: {
                        defaultClass: "ju367vj"
                    },
                    10: {
                        defaultClass: "ju367vk"
                    },
                    13: {
                        defaultClass: "ju367vl"
                    },
                    actionButton: {
                        defaultClass: "ju367vm"
                    },
                    connectButton: {
                        defaultClass: "ju367vn"
                    },
                    menuButton: {
                        defaultClass: "ju367vo"
                    },
                    modal: {
                        defaultClass: "ju367vp"
                    },
                    modalMobile: {
                        defaultClass: "ju367vq"
                    },
                    "25%": {
                        defaultClass: "ju367vr"
                    },
                    full: {
                        defaultClass: "ju367vs"
                    }
                }
            },
            borderStyle: {
                values: {
                    solid: {
                        defaultClass: "ju367vt"
                    }
                }
            },
            borderWidth: {
                values: {
                    0: {
                        defaultClass: "ju367vu"
                    },
                    1: {
                        defaultClass: "ju367vv"
                    },
                    2: {
                        defaultClass: "ju367vw"
                    },
                    4: {
                        defaultClass: "ju367vx"
                    }
                }
            },
            cursor: {
                values: {
                    pointer: {
                        defaultClass: "ju367vy"
                    },
                    none: {
                        defaultClass: "ju367vz"
                    }
                }
            },
            pointerEvents: {
                values: {
                    none: {
                        defaultClass: "ju367v10"
                    },
                    all: {
                        defaultClass: "ju367v11"
                    }
                }
            },
            minHeight: {
                values: {
                    8: {
                        defaultClass: "ju367v12"
                    },
                    44: {
                        defaultClass: "ju367v13"
                    }
                }
            },
            flexDirection: {
                values: {
                    row: {
                        defaultClass: "ju367v14"
                    },
                    column: {
                        defaultClass: "ju367v15"
                    }
                }
            },
            fontFamily: {
                values: {
                    body: {
                        defaultClass: "ju367v16"
                    }
                }
            },
            fontSize: {
                values: {
                    12: {
                        defaultClass: "ju367v17"
                    },
                    13: {
                        defaultClass: "ju367v18"
                    },
                    14: {
                        defaultClass: "ju367v19"
                    },
                    16: {
                        defaultClass: "ju367v1a"
                    },
                    18: {
                        defaultClass: "ju367v1b"
                    },
                    20: {
                        defaultClass: "ju367v1c"
                    },
                    23: {
                        defaultClass: "ju367v1d"
                    }
                }
            },
            fontWeight: {
                values: {
                    regular: {
                        defaultClass: "ju367v1e"
                    },
                    medium: {
                        defaultClass: "ju367v1f"
                    },
                    semibold: {
                        defaultClass: "ju367v1g"
                    },
                    bold: {
                        defaultClass: "ju367v1h"
                    },
                    heavy: {
                        defaultClass: "ju367v1i"
                    }
                }
            },
            gap: {
                values: {
                    0: {
                        defaultClass: "ju367v1j"
                    },
                    1: {
                        defaultClass: "ju367v1k"
                    },
                    2: {
                        defaultClass: "ju367v1l"
                    },
                    3: {
                        defaultClass: "ju367v1m"
                    },
                    4: {
                        defaultClass: "ju367v1n"
                    },
                    5: {
                        defaultClass: "ju367v1o"
                    },
                    6: {
                        defaultClass: "ju367v1p"
                    },
                    8: {
                        defaultClass: "ju367v1q"
                    },
                    10: {
                        defaultClass: "ju367v1r"
                    },
                    12: {
                        defaultClass: "ju367v1s"
                    },
                    14: {
                        defaultClass: "ju367v1t"
                    },
                    16: {
                        defaultClass: "ju367v1u"
                    },
                    18: {
                        defaultClass: "ju367v1v"
                    },
                    20: {
                        defaultClass: "ju367v1w"
                    },
                    24: {
                        defaultClass: "ju367v1x"
                    },
                    28: {
                        defaultClass: "ju367v1y"
                    },
                    32: {
                        defaultClass: "ju367v1z"
                    },
                    36: {
                        defaultClass: "ju367v20"
                    },
                    44: {
                        defaultClass: "ju367v21"
                    },
                    64: {
                        defaultClass: "ju367v22"
                    },
                    "-1": {
                        defaultClass: "ju367v23"
                    }
                }
            },
            height: {
                values: {
                    1: {
                        defaultClass: "ju367v24"
                    },
                    2: {
                        defaultClass: "ju367v25"
                    },
                    4: {
                        defaultClass: "ju367v26"
                    },
                    8: {
                        defaultClass: "ju367v27"
                    },
                    12: {
                        defaultClass: "ju367v28"
                    },
                    20: {
                        defaultClass: "ju367v29"
                    },
                    24: {
                        defaultClass: "ju367v2a"
                    },
                    28: {
                        defaultClass: "ju367v2b"
                    },
                    30: {
                        defaultClass: "ju367v2c"
                    },
                    32: {
                        defaultClass: "ju367v2d"
                    },
                    34: {
                        defaultClass: "ju367v2e"
                    },
                    36: {
                        defaultClass: "ju367v2f"
                    },
                    40: {
                        defaultClass: "ju367v2g"
                    },
                    44: {
                        defaultClass: "ju367v2h"
                    },
                    48: {
                        defaultClass: "ju367v2i"
                    },
                    54: {
                        defaultClass: "ju367v2j"
                    },
                    60: {
                        defaultClass: "ju367v2k"
                    },
                    200: {
                        defaultClass: "ju367v2l"
                    },
                    full: {
                        defaultClass: "ju367v2m"
                    },
                    max: {
                        defaultClass: "ju367v2n"
                    }
                }
            },
            justifyContent: {
                values: {
                    "flex-start": {
                        defaultClass: "ju367v2o"
                    },
                    "flex-end": {
                        defaultClass: "ju367v2p"
                    },
                    center: {
                        defaultClass: "ju367v2q"
                    },
                    "space-between": {
                        defaultClass: "ju367v2r"
                    },
                    "space-around": {
                        defaultClass: "ju367v2s"
                    }
                }
            },
            textAlign: {
                values: {
                    left: {
                        defaultClass: "ju367v2t"
                    },
                    center: {
                        defaultClass: "ju367v2u"
                    },
                    inherit: {
                        defaultClass: "ju367v2v"
                    }
                }
            },
            marginBottom: {
                values: {
                    0: {
                        defaultClass: "ju367v2w"
                    },
                    1: {
                        defaultClass: "ju367v2x"
                    },
                    2: {
                        defaultClass: "ju367v2y"
                    },
                    3: {
                        defaultClass: "ju367v2z"
                    },
                    4: {
                        defaultClass: "ju367v30"
                    },
                    5: {
                        defaultClass: "ju367v31"
                    },
                    6: {
                        defaultClass: "ju367v32"
                    },
                    8: {
                        defaultClass: "ju367v33"
                    },
                    10: {
                        defaultClass: "ju367v34"
                    },
                    12: {
                        defaultClass: "ju367v35"
                    },
                    14: {
                        defaultClass: "ju367v36"
                    },
                    16: {
                        defaultClass: "ju367v37"
                    },
                    18: {
                        defaultClass: "ju367v38"
                    },
                    20: {
                        defaultClass: "ju367v39"
                    },
                    24: {
                        defaultClass: "ju367v3a"
                    },
                    28: {
                        defaultClass: "ju367v3b"
                    },
                    32: {
                        defaultClass: "ju367v3c"
                    },
                    36: {
                        defaultClass: "ju367v3d"
                    },
                    44: {
                        defaultClass: "ju367v3e"
                    },
                    64: {
                        defaultClass: "ju367v3f"
                    },
                    "-1": {
                        defaultClass: "ju367v3g"
                    }
                }
            },
            marginLeft: {
                values: {
                    0: {
                        defaultClass: "ju367v3h"
                    },
                    1: {
                        defaultClass: "ju367v3i"
                    },
                    2: {
                        defaultClass: "ju367v3j"
                    },
                    3: {
                        defaultClass: "ju367v3k"
                    },
                    4: {
                        defaultClass: "ju367v3l"
                    },
                    5: {
                        defaultClass: "ju367v3m"
                    },
                    6: {
                        defaultClass: "ju367v3n"
                    },
                    8: {
                        defaultClass: "ju367v3o"
                    },
                    10: {
                        defaultClass: "ju367v3p"
                    },
                    12: {
                        defaultClass: "ju367v3q"
                    },
                    14: {
                        defaultClass: "ju367v3r"
                    },
                    16: {
                        defaultClass: "ju367v3s"
                    },
                    18: {
                        defaultClass: "ju367v3t"
                    },
                    20: {
                        defaultClass: "ju367v3u"
                    },
                    24: {
                        defaultClass: "ju367v3v"
                    },
                    28: {
                        defaultClass: "ju367v3w"
                    },
                    32: {
                        defaultClass: "ju367v3x"
                    },
                    36: {
                        defaultClass: "ju367v3y"
                    },
                    44: {
                        defaultClass: "ju367v3z"
                    },
                    64: {
                        defaultClass: "ju367v40"
                    },
                    "-1": {
                        defaultClass: "ju367v41"
                    }
                }
            },
            marginRight: {
                values: {
                    0: {
                        defaultClass: "ju367v42"
                    },
                    1: {
                        defaultClass: "ju367v43"
                    },
                    2: {
                        defaultClass: "ju367v44"
                    },
                    3: {
                        defaultClass: "ju367v45"
                    },
                    4: {
                        defaultClass: "ju367v46"
                    },
                    5: {
                        defaultClass: "ju367v47"
                    },
                    6: {
                        defaultClass: "ju367v48"
                    },
                    8: {
                        defaultClass: "ju367v49"
                    },
                    10: {
                        defaultClass: "ju367v4a"
                    },
                    12: {
                        defaultClass: "ju367v4b"
                    },
                    14: {
                        defaultClass: "ju367v4c"
                    },
                    16: {
                        defaultClass: "ju367v4d"
                    },
                    18: {
                        defaultClass: "ju367v4e"
                    },
                    20: {
                        defaultClass: "ju367v4f"
                    },
                    24: {
                        defaultClass: "ju367v4g"
                    },
                    28: {
                        defaultClass: "ju367v4h"
                    },
                    32: {
                        defaultClass: "ju367v4i"
                    },
                    36: {
                        defaultClass: "ju367v4j"
                    },
                    44: {
                        defaultClass: "ju367v4k"
                    },
                    64: {
                        defaultClass: "ju367v4l"
                    },
                    "-1": {
                        defaultClass: "ju367v4m"
                    }
                }
            },
            marginTop: {
                values: {
                    0: {
                        defaultClass: "ju367v4n"
                    },
                    1: {
                        defaultClass: "ju367v4o"
                    },
                    2: {
                        defaultClass: "ju367v4p"
                    },
                    3: {
                        defaultClass: "ju367v4q"
                    },
                    4: {
                        defaultClass: "ju367v4r"
                    },
                    5: {
                        defaultClass: "ju367v4s"
                    },
                    6: {
                        defaultClass: "ju367v4t"
                    },
                    8: {
                        defaultClass: "ju367v4u"
                    },
                    10: {
                        defaultClass: "ju367v4v"
                    },
                    12: {
                        defaultClass: "ju367v4w"
                    },
                    14: {
                        defaultClass: "ju367v4x"
                    },
                    16: {
                        defaultClass: "ju367v4y"
                    },
                    18: {
                        defaultClass: "ju367v4z"
                    },
                    20: {
                        defaultClass: "ju367v50"
                    },
                    24: {
                        defaultClass: "ju367v51"
                    },
                    28: {
                        defaultClass: "ju367v52"
                    },
                    32: {
                        defaultClass: "ju367v53"
                    },
                    36: {
                        defaultClass: "ju367v54"
                    },
                    44: {
                        defaultClass: "ju367v55"
                    },
                    64: {
                        defaultClass: "ju367v56"
                    },
                    "-1": {
                        defaultClass: "ju367v57"
                    }
                }
            },
            maxWidth: {
                values: {
                    1: {
                        defaultClass: "ju367v58"
                    },
                    2: {
                        defaultClass: "ju367v59"
                    },
                    4: {
                        defaultClass: "ju367v5a"
                    },
                    8: {
                        defaultClass: "ju367v5b"
                    },
                    12: {
                        defaultClass: "ju367v5c"
                    },
                    20: {
                        defaultClass: "ju367v5d"
                    },
                    24: {
                        defaultClass: "ju367v5e"
                    },
                    28: {
                        defaultClass: "ju367v5f"
                    },
                    30: {
                        defaultClass: "ju367v5g"
                    },
                    32: {
                        defaultClass: "ju367v5h"
                    },
                    34: {
                        defaultClass: "ju367v5i"
                    },
                    36: {
                        defaultClass: "ju367v5j"
                    },
                    40: {
                        defaultClass: "ju367v5k"
                    },
                    44: {
                        defaultClass: "ju367v5l"
                    },
                    48: {
                        defaultClass: "ju367v5m"
                    },
                    54: {
                        defaultClass: "ju367v5n"
                    },
                    60: {
                        defaultClass: "ju367v5o"
                    },
                    200: {
                        defaultClass: "ju367v5p"
                    },
                    full: {
                        defaultClass: "ju367v5q"
                    },
                    max: {
                        defaultClass: "ju367v5r"
                    }
                }
            },
            minWidth: {
                values: {
                    1: {
                        defaultClass: "ju367v5s"
                    },
                    2: {
                        defaultClass: "ju367v5t"
                    },
                    4: {
                        defaultClass: "ju367v5u"
                    },
                    8: {
                        defaultClass: "ju367v5v"
                    },
                    12: {
                        defaultClass: "ju367v5w"
                    },
                    20: {
                        defaultClass: "ju367v5x"
                    },
                    24: {
                        defaultClass: "ju367v5y"
                    },
                    28: {
                        defaultClass: "ju367v5z"
                    },
                    30: {
                        defaultClass: "ju367v60"
                    },
                    32: {
                        defaultClass: "ju367v61"
                    },
                    34: {
                        defaultClass: "ju367v62"
                    },
                    36: {
                        defaultClass: "ju367v63"
                    },
                    40: {
                        defaultClass: "ju367v64"
                    },
                    44: {
                        defaultClass: "ju367v65"
                    },
                    48: {
                        defaultClass: "ju367v66"
                    },
                    54: {
                        defaultClass: "ju367v67"
                    },
                    60: {
                        defaultClass: "ju367v68"
                    },
                    200: {
                        defaultClass: "ju367v69"
                    },
                    full: {
                        defaultClass: "ju367v6a"
                    },
                    max: {
                        defaultClass: "ju367v6b"
                    }
                }
            },
            overflow: {
                values: {
                    hidden: {
                        defaultClass: "ju367v6c"
                    }
                }
            },
            paddingBottom: {
                values: {
                    0: {
                        defaultClass: "ju367v6d"
                    },
                    1: {
                        defaultClass: "ju367v6e"
                    },
                    2: {
                        defaultClass: "ju367v6f"
                    },
                    3: {
                        defaultClass: "ju367v6g"
                    },
                    4: {
                        defaultClass: "ju367v6h"
                    },
                    5: {
                        defaultClass: "ju367v6i"
                    },
                    6: {
                        defaultClass: "ju367v6j"
                    },
                    8: {
                        defaultClass: "ju367v6k"
                    },
                    10: {
                        defaultClass: "ju367v6l"
                    },
                    12: {
                        defaultClass: "ju367v6m"
                    },
                    14: {
                        defaultClass: "ju367v6n"
                    },
                    16: {
                        defaultClass: "ju367v6o"
                    },
                    18: {
                        defaultClass: "ju367v6p"
                    },
                    20: {
                        defaultClass: "ju367v6q"
                    },
                    24: {
                        defaultClass: "ju367v6r"
                    },
                    28: {
                        defaultClass: "ju367v6s"
                    },
                    32: {
                        defaultClass: "ju367v6t"
                    },
                    36: {
                        defaultClass: "ju367v6u"
                    },
                    44: {
                        defaultClass: "ju367v6v"
                    },
                    64: {
                        defaultClass: "ju367v6w"
                    },
                    "-1": {
                        defaultClass: "ju367v6x"
                    }
                }
            },
            paddingLeft: {
                values: {
                    0: {
                        defaultClass: "ju367v6y"
                    },
                    1: {
                        defaultClass: "ju367v6z"
                    },
                    2: {
                        defaultClass: "ju367v70"
                    },
                    3: {
                        defaultClass: "ju367v71"
                    },
                    4: {
                        defaultClass: "ju367v72"
                    },
                    5: {
                        defaultClass: "ju367v73"
                    },
                    6: {
                        defaultClass: "ju367v74"
                    },
                    8: {
                        defaultClass: "ju367v75"
                    },
                    10: {
                        defaultClass: "ju367v76"
                    },
                    12: {
                        defaultClass: "ju367v77"
                    },
                    14: {
                        defaultClass: "ju367v78"
                    },
                    16: {
                        defaultClass: "ju367v79"
                    },
                    18: {
                        defaultClass: "ju367v7a"
                    },
                    20: {
                        defaultClass: "ju367v7b"
                    },
                    24: {
                        defaultClass: "ju367v7c"
                    },
                    28: {
                        defaultClass: "ju367v7d"
                    },
                    32: {
                        defaultClass: "ju367v7e"
                    },
                    36: {
                        defaultClass: "ju367v7f"
                    },
                    44: {
                        defaultClass: "ju367v7g"
                    },
                    64: {
                        defaultClass: "ju367v7h"
                    },
                    "-1": {
                        defaultClass: "ju367v7i"
                    }
                }
            },
            paddingRight: {
                values: {
                    0: {
                        defaultClass: "ju367v7j"
                    },
                    1: {
                        defaultClass: "ju367v7k"
                    },
                    2: {
                        defaultClass: "ju367v7l"
                    },
                    3: {
                        defaultClass: "ju367v7m"
                    },
                    4: {
                        defaultClass: "ju367v7n"
                    },
                    5: {
                        defaultClass: "ju367v7o"
                    },
                    6: {
                        defaultClass: "ju367v7p"
                    },
                    8: {
                        defaultClass: "ju367v7q"
                    },
                    10: {
                        defaultClass: "ju367v7r"
                    },
                    12: {
                        defaultClass: "ju367v7s"
                    },
                    14: {
                        defaultClass: "ju367v7t"
                    },
                    16: {
                        defaultClass: "ju367v7u"
                    },
                    18: {
                        defaultClass: "ju367v7v"
                    },
                    20: {
                        defaultClass: "ju367v7w"
                    },
                    24: {
                        defaultClass: "ju367v7x"
                    },
                    28: {
                        defaultClass: "ju367v7y"
                    },
                    32: {
                        defaultClass: "ju367v7z"
                    },
                    36: {
                        defaultClass: "ju367v80"
                    },
                    44: {
                        defaultClass: "ju367v81"
                    },
                    64: {
                        defaultClass: "ju367v82"
                    },
                    "-1": {
                        defaultClass: "ju367v83"
                    }
                }
            },
            paddingTop: {
                values: {
                    0: {
                        defaultClass: "ju367v84"
                    },
                    1: {
                        defaultClass: "ju367v85"
                    },
                    2: {
                        defaultClass: "ju367v86"
                    },
                    3: {
                        defaultClass: "ju367v87"
                    },
                    4: {
                        defaultClass: "ju367v88"
                    },
                    5: {
                        defaultClass: "ju367v89"
                    },
                    6: {
                        defaultClass: "ju367v8a"
                    },
                    8: {
                        defaultClass: "ju367v8b"
                    },
                    10: {
                        defaultClass: "ju367v8c"
                    },
                    12: {
                        defaultClass: "ju367v8d"
                    },
                    14: {
                        defaultClass: "ju367v8e"
                    },
                    16: {
                        defaultClass: "ju367v8f"
                    },
                    18: {
                        defaultClass: "ju367v8g"
                    },
                    20: {
                        defaultClass: "ju367v8h"
                    },
                    24: {
                        defaultClass: "ju367v8i"
                    },
                    28: {
                        defaultClass: "ju367v8j"
                    },
                    32: {
                        defaultClass: "ju367v8k"
                    },
                    36: {
                        defaultClass: "ju367v8l"
                    },
                    44: {
                        defaultClass: "ju367v8m"
                    },
                    64: {
                        defaultClass: "ju367v8n"
                    },
                    "-1": {
                        defaultClass: "ju367v8o"
                    }
                }
            },
            position: {
                values: {
                    absolute: {
                        defaultClass: "ju367v8p"
                    },
                    fixed: {
                        defaultClass: "ju367v8q"
                    },
                    relative: {
                        defaultClass: "ju367v8r"
                    }
                }
            },
            WebkitUserSelect: {
                values: {
                    none: {
                        defaultClass: "ju367v8s"
                    }
                }
            },
            right: {
                values: {
                    0: {
                        defaultClass: "ju367v8t"
                    }
                }
            },
            transition: {
                values: {
                    default: {
                        defaultClass: "ju367v8u"
                    },
                    transform: {
                        defaultClass: "ju367v8v"
                    }
                }
            },
            userSelect: {
                values: {
                    none: {
                        defaultClass: "ju367v8w"
                    }
                }
            },
            width: {
                values: {
                    1: {
                        defaultClass: "ju367v8x"
                    },
                    2: {
                        defaultClass: "ju367v8y"
                    },
                    4: {
                        defaultClass: "ju367v8z"
                    },
                    8: {
                        defaultClass: "ju367v90"
                    },
                    12: {
                        defaultClass: "ju367v91"
                    },
                    20: {
                        defaultClass: "ju367v92"
                    },
                    24: {
                        defaultClass: "ju367v93"
                    },
                    28: {
                        defaultClass: "ju367v94"
                    },
                    30: {
                        defaultClass: "ju367v95"
                    },
                    32: {
                        defaultClass: "ju367v96"
                    },
                    34: {
                        defaultClass: "ju367v97"
                    },
                    36: {
                        defaultClass: "ju367v98"
                    },
                    40: {
                        defaultClass: "ju367v99"
                    },
                    44: {
                        defaultClass: "ju367v9a"
                    },
                    48: {
                        defaultClass: "ju367v9b"
                    },
                    54: {
                        defaultClass: "ju367v9c"
                    },
                    60: {
                        defaultClass: "ju367v9d"
                    },
                    200: {
                        defaultClass: "ju367v9e"
                    },
                    full: {
                        defaultClass: "ju367v9f"
                    },
                    max: {
                        defaultClass: "ju367v9g"
                    }
                }
            },
            backdropFilter: {
                values: {
                    modalOverlay: {
                        defaultClass: "ju367v9h"
                    }
                }
            }
        }
    }),
    ql = {
        colors: {
            accentColor: "var(--rk-colors-accentColor)",
            accentColorForeground: "var(--rk-colors-accentColorForeground)",
            actionButtonBorder: "var(--rk-colors-actionButtonBorder)",
            actionButtonBorderMobile: "var(--rk-colors-actionButtonBorderMobile)",
            actionButtonSecondaryBackground: "var(--rk-colors-actionButtonSecondaryBackground)",
            closeButton: "var(--rk-colors-closeButton)",
            closeButtonBackground: "var(--rk-colors-closeButtonBackground)",
            connectButtonBackground: "var(--rk-colors-connectButtonBackground)",
            connectButtonBackgroundError: "var(--rk-colors-connectButtonBackgroundError)",
            connectButtonInnerBackground: "var(--rk-colors-connectButtonInnerBackground)",
            connectButtonText: "var(--rk-colors-connectButtonText)",
            connectButtonTextError: "var(--rk-colors-connectButtonTextError)",
            connectionIndicator: "var(--rk-colors-connectionIndicator)",
            downloadBottomCardBackground: "var(--rk-colors-downloadBottomCardBackground)",
            downloadTopCardBackground: "var(--rk-colors-downloadTopCardBackground)",
            error: "var(--rk-colors-error)",
            generalBorder: "var(--rk-colors-generalBorder)",
            generalBorderDim: "var(--rk-colors-generalBorderDim)",
            menuItemBackground: "var(--rk-colors-menuItemBackground)",
            modalBackdrop: "var(--rk-colors-modalBackdrop)",
            modalBackground: "var(--rk-colors-modalBackground)",
            modalBorder: "var(--rk-colors-modalBorder)",
            modalText: "var(--rk-colors-modalText)",
            modalTextDim: "var(--rk-colors-modalTextDim)",
            modalTextSecondary: "var(--rk-colors-modalTextSecondary)",
            profileAction: "var(--rk-colors-profileAction)",
            profileActionHover: "var(--rk-colors-profileActionHover)",
            profileForeground: "var(--rk-colors-profileForeground)",
            selectedOptionBorder: "var(--rk-colors-selectedOptionBorder)",
            standby: "var(--rk-colors-standby)"
        },
        fonts: {
            body: "var(--rk-fonts-body)"
        },
        radii: {
            actionButton: "var(--rk-radii-actionButton)",
            connectButton: "var(--rk-radii-connectButton)",
            menuButton: "var(--rk-radii-menuButton)",
            modal: "var(--rk-radii-modal)",
            modalMobile: "var(--rk-radii-modalMobile)"
        },
        shadows: {
            connectButton: "var(--rk-shadows-connectButton)",
            dialog: "var(--rk-shadows-dialog)",
            profileDetailsAction: "var(--rk-shadows-profileDetailsAction)",
            selectedOption: "var(--rk-shadows-selectedOption)",
            selectedWallet: "var(--rk-shadows-selectedWallet)",
            walletLogo: "var(--rk-shadows-walletLogo)"
        },
        blurs: {
            modalOverlay: "var(--rk-blurs-modalOverlay)"
        }
    },
    I2 = {
        shrink: "_12cbo8i6",
        shrinkSm: "_12cbo8i7"
    },
    k2 = "_12cbo8i3 ju367v8r",
    B2 = {
        grow: "_12cbo8i4",
        growLg: "_12cbo8i5"
    };

function Ce({
    active: e,
    hover: t
}) {
    return [k2, t && B2[t], I2[e]]
}
var yp = I.createContext(null);

function j2() {
    const {
        adapter: e
    } = I.useContext(yp) ? ? {};
    if (!e) throw new Error("No authentication adapter found");
    return e
}

function ds() {
    return I.useContext(yp) ? .status ? ? null
}

function wp() {
    const e = ds(),
        {
            isConnected: t
        } = Se();
    return t ? e && (e === "loading" || e === "unauthenticated") ? e : "connected" : "disconnected"
}

function ac() {
    return typeof navigator < "u" && /android/i.test(navigator.userAgent)
}

function S2() {
    return typeof navigator < "u" && /iPhone|iPod/.test(navigator.userAgent)
}

function P2() {
    return typeof navigator < "u" && (/iPad/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
}

function Xt() {
    return S2() || P2()
}

function Ee() {
    return ac() || Xt()
}
var T2 = "iekbcc0",
    O2 = {
        a: "iekbcca",
        blockquote: "iekbcc2",
        button: "iekbcc9",
        input: "iekbcc8 iekbcc5 iekbcc4",
        mark: "iekbcc6",
        ol: "iekbcc1",
        q: "iekbcc2",
        select: "iekbcc7 iekbcc5 iekbcc4",
        table: "iekbcc3",
        textarea: "iekbcc5 iekbcc4",
        ul: "iekbcc1"
    },
    M2 = ({
        reset: e,
        ...t
    }) => {
        if (!e) return Ki(t);
        const n = O2[e],
            r = Ki(t);
        return ih(T2, n, r)
    },
    x = I.forwardRef(({
        as: e = "div",
        className: t,
        testId: n,
        ...r
    }, o) => {
        const s = {},
            i = {};
        for (const c in r) Ki.properties.has(c) ? s[c] = r[c] : i[c] = r[c];
        const a = M2({
            reset: typeof e == "string" ? e : "div",
            ...s
        });
        return I.createElement(e, {
            className: ih(a, t),
            ...i,
            "data-testid": n ? `rk-${n.replace(/^rk-/,"")}` : void 0,
            ref: o
        })
    });
x.displayName = "Box";
var vp = new Map,
    Vs = new Map;
async function Cp(e) {
    const t = Vs.get(e);
    if (t) return t;
    const n = async () => e().then(async o => (vp.set(e, o), o)),
        r = n().catch(o => n().catch(s => {
            Vs.delete(e)
        }));
    return Vs.set(e, r), r
}
async function at(...e) {
    return await Promise.all(e.map(t => typeof t == "function" ? Cp(t) : t))
}

function R2() {
    const [, e] = I.useReducer(t => t + 1, 0);
    return e
}

function cc(e) {
    const t = typeof e == "function" ? vp.get(e) : void 0,
        n = R2();
    return I.useEffect(() => {
        typeof e == "function" && !t && Cp(e).then(n)
    }, [e, t, n]), typeof e == "function" ? t : e
}

function ye({
    alt: e,
    background: t,
    borderColor: n,
    borderRadius: r,
    useAsImage: o,
    boxShadow: s,
    height: i,
    src: a,
    width: c,
    testId: l
}) {
    const u = Xt(),
        f = cc(a),
        d = f && /^http/.test(f),
        [h, p] = I.useReducer(() => !0, !1);
    return g.createElement(x, {
        "aria-label": e,
        borderRadius: r,
        boxShadow: s,
        height: typeof i == "string" ? i : void 0,
        overflow: "hidden",
        position: "relative",
        role: "img",
        style: {
            background: t,
            height: typeof i == "number" ? i : void 0,
            width: typeof c == "number" ? c : void 0
        },
        width: typeof c == "string" ? c : void 0,
        testId: l
    }, g.createElement(x, { ...d ? {
            "aria-hidden": !0,
            as: "img",
            onLoad: p,
            src: f
        } : {
            "aria-hidden": !0,
            as: "img",
            src: f
        },
        height: "full",
        position: "absolute",
        ...u ? {
            WebkitUserSelect: "none"
        } : {},
        style: {
            WebkitTouchCallout: "none",
            transition: "opacity .15s linear",
            userSelect: "none",
            ...!o && d ? {
                opacity: h ? 1 : 0
            } : {}
        },
        width: "full"
    }), n ? g.createElement(x, { ...typeof n == "object" && "custom" in n ? {
            style: {
                borderColor: n.custom
            }
        } : {
            borderColor: n
        },
        borderRadius: r,
        borderStyle: "solid",
        borderWidth: "1",
        height: "full",
        position: "relative",
        width: "full"
    }) : null)
}
var _2 = "_1luule42",
    D2 = "_1luule43",
    N2 = e => I.useMemo(() => `${e}_${Math.round(Math.random()*1e9)}`, [e]),
    br = ({
        height: e = 21,
        width: t = 21
    }) => {
        const n = N2("spinner");
        return g.createElement("svg", {
            className: _2,
            fill: "none",
            height: e,
            viewBox: "0 0 21 21",
            width: t,
            xmlns: "http://www.w3.org/2000/svg"
        }, g.createElement("title", null, "Loading"), g.createElement("clipPath", {
            id: n
        }, g.createElement("path", {
            d: "M10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C11.3284 18 12 18.6716 12 19.5C12 20.3284 11.3284 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5C21 11.3284 20.3284 12 19.5 12C18.6716 12 18 11.3284 18 10.5C18 6.35786 14.6421 3 10.5 3Z"
        })), g.createElement("foreignObject", {
            clipPath: `url(#${n})`,
            height: "21",
            width: "21",
            x: "0",
            y: "0"
        }, g.createElement("div", {
            className: D2
        })))
    },
    G = ["#FC5C54", "#FFD95A", "#E95D72", "#6A87C8", "#5FD0F3", "#75C06B", "#FFDD86", "#5FC6D4", "#FF949A", "#FF8024", "#9BA1A4", "#EC66FF", "#FF8CBC", "#FF9A23", "#C5DADB", "#A8CE63", "#71ABFF", "#FFE279", "#B6B1B6", "#FF6780", "#A575FF", "#4D82FF", "#FFB35A"],
    Hl = [{
        color: G[0],
        emoji: "🌶"
    }, {
        color: G[1],
        emoji: "🤑"
    }, {
        color: G[2],
        emoji: "🐙"
    }, {
        color: G[3],
        emoji: "🫐"
    }, {
        color: G[4],
        emoji: "🐳"
    }, {
        color: G[0],
        emoji: "🤶"
    }, {
        color: G[5],
        emoji: "🌲"
    }, {
        color: G[6],
        emoji: "🌞"
    }, {
        color: G[7],
        emoji: "🐒"
    }, {
        color: G[8],
        emoji: "🐵"
    }, {
        color: G[9],
        emoji: "🦊"
    }, {
        color: G[10],
        emoji: "🐼"
    }, {
        color: G[11],
        emoji: "🦄"
    }, {
        color: G[12],
        emoji: "🐷"
    }, {
        color: G[13],
        emoji: "🐧"
    }, {
        color: G[8],
        emoji: "🦩"
    }, {
        color: G[14],
        emoji: "👽"
    }, {
        color: G[0],
        emoji: "🎈"
    }, {
        color: G[8],
        emoji: "🍉"
    }, {
        color: G[1],
        emoji: "🎉"
    }, {
        color: G[15],
        emoji: "🐲"
    }, {
        color: G[16],
        emoji: "🌎"
    }, {
        color: G[17],
        emoji: "🍊"
    }, {
        color: G[18],
        emoji: "🐭"
    }, {
        color: G[19],
        emoji: "🍣"
    }, {
        color: G[1],
        emoji: "🐥"
    }, {
        color: G[20],
        emoji: "👾"
    }, {
        color: G[15],
        emoji: "🥦"
    }, {
        color: G[0],
        emoji: "👹"
    }, {
        color: G[17],
        emoji: "🙀"
    }, {
        color: G[4],
        emoji: "⛱"
    }, {
        color: G[21],
        emoji: "⛵️"
    }, {
        color: G[17],
        emoji: "🥳"
    }, {
        color: G[8],
        emoji: "🤯"
    }, {
        color: G[22],
        emoji: "🤠"
    }];

function F2(e) {
    let t = 0;
    if (e.length === 0) return t;
    for (let n = 0; n < e.length; n++) {
        const r = e.charCodeAt(n);
        t = (t << 5) - t + r, t |= 0
    }
    return t
}

function L2(e) {
    const n = Math.abs(F2((typeof e == "string" ? e : "").toLowerCase()) % Hl.length);
    return Hl[n ? ? 0]
}
var U2 = ({
        address: e,
        ensImage: t,
        size: n
    }) => {
        const [r, o] = I.useState(!1);
        I.useEffect(() => {
            if (t) {
                const a = new Image;
                a.src = t, a.onload = () => o(!0)
            }
        }, [t]);
        const {
            color: s,
            emoji: i
        } = I.useMemo(() => L2(e), [e]);
        return t ? r ? g.createElement(x, {
            backgroundSize: "cover",
            borderRadius: "full",
            position: "absolute",
            style: {
                backgroundImage: `url(${t})`,
                backgroundPosition: "center",
                height: n,
                width: n
            }
        }) : g.createElement(x, {
            alignItems: "center",
            backgroundSize: "cover",
            borderRadius: "full",
            color: "modalText",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            style: {
                height: n,
                width: n
            }
        }, g.createElement(br, null)) : g.createElement(x, {
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            style: { ...!t && {
                    backgroundColor: s
                },
                height: n,
                width: n
            }
        }, i)
    },
    Ep = U2,
    Ap = I.createContext(Ep);

function z2({
    address: e,
    imageUrl: t,
    loading: n,
    size: r
}) {
    const o = I.useContext(Ap);
    return g.createElement(x, {
        "aria-hidden": !0,
        borderRadius: "full",
        overflow: "hidden",
        position: "relative",
        style: {
            height: `${r}px`,
            width: `${r}px`
        },
        userSelect: "none"
    }, g.createElement(x, {
        alignItems: "center",
        borderRadius: "full",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        position: "absolute",
        style: {
            fontSize: `${Math.round(r*.55)}px`,
            height: `${r}px`,
            transform: n ? "scale(0.72)" : void 0,
            transition: ".25s ease",
            transitionDelay: n ? void 0 : ".1s",
            width: `${r}px`,
            willChange: "transform"
        },
        userSelect: "none"
    }, g.createElement(o, {
        address: e,
        ensImage: t,
        size: r
    })), n && g.createElement(x, {
        color: "accentColor",
        display: "flex",
        height: "full",
        position: "absolute",
        width: "full"
    }, g.createElement(br, {
        height: "100%",
        width: "100%"
    })))
}
var Ql = {
        defaultLocale: "en",
        locale: "en"
    },
    W2 = class {
        constructor(e) {
            this.listeners = new Set, this.defaultLocale = Ql.defaultLocale, this.enableFallback = !1, this.locale = Ql.locale, this.cachedLocales = [], this.translations = {};
            for (const [t, n] of Object.entries(e)) this.cachedLocales = [...this.cachedLocales, t], this.translations = { ...this.translations,
                ...this.flattenTranslation(n, t)
            }
        }
        missingMessage(e) {
            return `[missing: "${this.locale}.${e}" translation]`
        }
        flattenTranslation(e, t) {
            const n = {},
                r = (o, s) => {
                    for (const i of Object.keys(o)) {
                        const a = `${s}.${i}`,
                            c = o[i];
                        typeof c == "object" && c !== null ? r(c, a) : n[a] = c
                    }
                };
            return r(e, t), n
        }
        translateWithReplacements(e, t = {}) {
            let n = e;
            for (const r in t) {
                const o = t[r];
                n = n.replace(`%{${r}}`, o)
            }
            return n
        }
        t(e, t, n) {
            const r = `${this.locale}.${e}`,
                o = this.translations[r];
            if (!o) {
                if (this.enableFallback) {
                    const s = `${this.defaultLocale}.${e}`,
                        i = this.translations[s];
                    if (i) return this.translateWithReplacements(i, t)
                }
                return n ? .rawKeyIfTranslationMissing ? e : this.missingMessage(e)
            }
            return this.translateWithReplacements(o, t)
        }
        isLocaleCached(e) {
            return this.cachedLocales.includes(e)
        }
        updateLocale(e) {
            this.locale = e, this.notifyListeners()
        }
        setTranslations(e, t) {
            this.isLocaleCached(e) || (this.cachedLocales = [...this.cachedLocales, e], this.translations = { ...this.translations,
                ...this.flattenTranslation(t, e)
            }), this.locale = e, this.notifyListeners()
        }
        notifyListeners() {
            for (const e of this.listeners) e()
        }
        onChange(e) {
            return this.listeners.add(e), () => {
                this.listeners.delete(e)
            }
        }
    },
    ze = new W2({
        en: JSON.parse(Il),
        "en-US": JSON.parse(Il)
    });
ze.defaultLocale = "en-US";
ze.locale = "en-US";
ze.enableFallback = !0;
var q2 = async e => {
    switch (e) {
        case "ar":
        case "ar-AR":
            return (await _(() =>
                import ("./ar_AR-OBNLAES4-3875c546.js"), [])).default;
        case "en":
        case "en-US":
            return (await _(() =>
                import ("./en_US-UZE3UTP2-641a6bd3.js"), ["static/js/en_US-UZE3UTP2-641a6bd3.js", "static/js/react-74e86ac5.js"])).default;
        case "es":
        case "es-419":
            return (await _(() =>
                import ("./es_419-O2GTQZ7N-e4137373.js"), [])).default;
        case "fr":
        case "fr-FR":
            return (await _(() =>
                import ("./fr_FR-L4QMIDHZ-d4160f35.js"), [])).default;
        case "hi":
        case "hi-IN":
            return (await _(() =>
                import ("./hi_IN-JNRRBHWZ-a3baec0d.js"), [])).default;
        case "id":
        case "id-ID":
            return (await _(() =>
                import ("./id_ID-ZGYTXMOP-3fb51813.js"), [])).default;
        case "ja":
        case "ja-JP":
            return (await _(() =>
                import ("./ja_JP-HOTHN4EA-a4ed6bdc.js"), [])).default;
        case "ko":
        case "ko-KR":
            return (await _(() =>
                import ("./ko_KR-GIW3THCV-9725fc26.js"), [])).default;
        case "pt":
        case "pt-BR":
            return (await _(() =>
                import ("./pt_BR-F7QMXAJN-47d3fd6a.js"), [])).default;
        case "ru":
        case "ru-RU":
            return (await _(() =>
                import ("./ru_RU-X7PLXGFL-8f0f1448.js"), [])).default;
        case "th":
        case "th-TH":
            return (await _(() =>
                import ("./th_TH-SRCDFUPR-a4fa288c.js"), [])).default;
        case "tr":
        case "tr-TR":
            return (await _(() =>
                import ("./tr_TR-YZS5CIK5-afbb615d.js"), [])).default;
        case "ua":
        case "uk-UA":
            return (await _(() =>
                import ("./uk_UA-Y3657REC-9c75bd92.js"), [])).default;
        case "zh":
        case "zh-CN":
            return (await _(() =>
                import ("./zh_CN-UU5O3W4T-de09ce4f.js"), [])).default;
        default:
            return (await _(() =>
                import ("./en_US-UZE3UTP2-641a6bd3.js"), ["static/js/en_US-UZE3UTP2-641a6bd3.js", "static/js/react-74e86ac5.js"])).default
    }
};
async function Vl(e) {
    if (ze.isLocaleCached(e)) {
        ze.updateLocale(e);
        return
    }
    const n = await q2(e);
    ze.setTranslations(e, JSON.parse(n))
}
var H2 = () => {
        if (typeof window < "u" && typeof navigator < "u") {
            if (navigator.languages ? .length) return navigator.languages[0];
            if (navigator.language) return navigator.language
        }
    },
    pe = I.createContext({
        i18n: ze
    }),
    Q2 = ({
        children: e,
        locale: t
    }) => {
        const [n, r] = I.useState(0), o = I.useMemo(() => H2(), []);
        I.useEffect(() => ze.onChange(() => {
            r(a => a + 1)
        }), []), I.useEffect(() => {
            t && t !== ze.locale ? Vl(t) : !t && o && o !== ze.locale && Vl(o)
        }, [t, o]);
        const s = I.useMemo(() => ({
            t: (a, c) => ze.t(a, c),
            i18n: ze
        }), [n]);
        return g.createElement(pe.Provider, {
            value: s
        }, e)
    };

function xp(e) {
    return e != null
}
var $s = {
        iconBackground: "#96bedc",
        iconUrl: async () => (await _(() =>
            import ("./arbitrum-IA4OWRTN-04d06b5d.js"), [])).default
    },
    $l = {
        iconBackground: "#e84141",
        iconUrl: async () => (await _(() =>
            import ("./avalanche-MXEFEDSW-7c43b5dd.js"), [])).default
    },
    Gs = {
        iconBackground: "#0052ff",
        iconUrl: async () => (await _(() =>
            import ("./base-Z4LFBE5D-a49c8c01.js"), [])).default
    },
    Gl = {
        iconBackground: "#000000",
        iconUrl: async () => (await _(() =>
            import ("./blast-TN2WIMWF-93f498e0.js"), [])).default
    },
    Kl = {
        iconBackground: "#ebac0e",
        iconUrl: async () => (await _(() =>
            import ("./bsc-RVE67I5L-04856910.js"), [])).default
    },
    Jl = {
        iconBackground: "#002D74",
        iconUrl: async () => (await _(() =>
            import ("./cronos-ROYR77VZ-29ad21f3.js"), [])).default
    },
    Et = {
        iconBackground: "#484c50",
        iconUrl: async () => (await _(() =>
            import ("./ethereum-RFBAMUVK-d34c3fc9.js"), [])).default
    },
    V2 = {
        iconBackground: "#f9f7ec",
        iconUrl: async () => (await _(() =>
            import ("./hardhat-NEEC6JX7-e261276f.js"), [])).default
    },
    Zl = {
        iconBackground: "transparent",
        iconUrl: async () => (await _(() =>
            import ("./klaytn-QTDBZIB3-1f7117af.js"), [])).default
    },
    Yr = {
        iconBackground: "#ff5a57",
        iconUrl: async () => (await _(() =>
            import ("./optimism-VD7XDD2W-36bb3ba8.js"), [])).default
    },
    Ks = {
        iconBackground: "#ffffff",
        iconUrl: async () => (await _(() =>
            import ("./manta-5V6W5D7G-cf4a7f5d.js"), [])).default
    },
    Yl = {
        iconBackground: "#000000",
        iconUrl: async () => (await _(() =>
            import ("./mantle-KBL3OIYT-ce066004.js"), [])).default
    },
    Xl = {
        iconBackground: "#9f71ec",
        iconUrl: async () => (await _(() =>
            import ("./polygon-WWEUOMKW-9ab1e573.js"), [])).default
    },
    eu = {
        iconBackground: "#f9f7ec",
        iconUrl: async () => (await _(() =>
            import ("./xdc-X7V4QFNF-c302191e.js"), [])).default
    },
    tu = {
        iconBackground: "#000000",
        iconUrl: async () => (await _(() =>
            import ("./zetachain-BMJKVYBN-b37f2c8c.js"), [])).default
    },
    nu = {
        iconBackground: "#f9f7ec",
        iconUrl: async () => (await _(() =>
            import ("./zkSync-JL26RB7U-c5241f87.js"), [])).default
    },
    Js = {
        iconBackground: "#000000",
        iconUrl: async () => (await _(() =>
            import ("./zora-YZH32HP3-13f3fbdd.js"), [])).default
    },
    $2 = {
        iconBackground: "#1273EA",
        iconUrl: async () => (await _(() =>
            import ("./ronin-PNHX5V6H-3a7f4d1f.js"), [])).default
    },
    G2 = {
        arbitrum: {
            chainId: 42161,
            name: "Arbitrum",
            ...$s
        },
        arbitrumGoerli: {
            chainId: 421613,
            ...$s
        },
        arbitrumSepolia: {
            chainId: 421614,
            ...$s
        },
        avalanche: {
            chainId: 43114,
            ...$l
        },
        avalancheFuji: {
            chainId: 43113,
            ...$l
        },
        base: {
            chainId: 8453,
            name: "Base",
            ...Gs
        },
        baseGoerli: {
            chainId: 84531,
            ...Gs
        },
        baseSepolia: {
            chainId: 84532,
            ...Gs
        },
        blast: {
            chainId: 81457,
            name: "Blast",
            ...Gl
        },
        blastSepolia: {
            chainId: 168587773,
            ...Gl
        },
        bsc: {
            chainId: 56,
            name: "BSC",
            ...Kl
        },
        bscTestnet: {
            chainId: 97,
            ...Kl
        },
        cronos: {
            chainId: 25,
            ...Jl
        },
        cronosTestnet: {
            chainId: 338,
            ...Jl
        },
        goerli: {
            chainId: 5,
            ...Et
        },
        hardhat: {
            chainId: 31337,
            ...V2
        },
        holesky: {
            chainId: 17e3,
            ...Et
        },
        kovan: {
            chainId: 42,
            ...Et
        },
        klaytn: {
            chainId: 8217,
            name: "Klaytn",
            ...Zl
        },
        klaytnBaobab: {
            chainId: 1001,
            name: "Klaytn Baobab",
            ...Zl
        },
        localhost: {
            chainId: 1337,
            ...Et
        },
        mainnet: {
            chainId: 1,
            name: "Ethereum",
            ...Et
        },
        manta: {
            chainId: 169,
            name: "Manta",
            ...Ks
        },
        mantaSepolia: {
            chainId: 3441006,
            ...Ks
        },
        mantaTestnet: {
            chainId: 3441005,
            ...Ks
        },
        mantle: {
            chainId: 5e3,
            ...Yl
        },
        mantleTestnet: {
            chainId: 5001,
            ...Yl
        },
        optimism: {
            chainId: 10,
            name: "Optimism",
            ...Yr
        },
        optimismGoerli: {
            chainId: 420,
            ...Yr
        },
        optimismKovan: {
            chainId: 69,
            ...Yr
        },
        optimismSepolia: {
            chainId: 11155420,
            ...Yr
        },
        polygon: {
            chainId: 137,
            name: "Polygon",
            ...Xl
        },
        polygonMumbai: {
            chainId: 80001,
            ...Xl
        },
        rinkeby: {
            chainId: 4,
            ...Et
        },
        ropsten: {
            chainId: 3,
            ...Et
        },
        ronin: {
            chainId: 2020,
            ...$2
        },
        sepolia: {
            chainId: 11155111,
            ...Et
        },
        xdc: {
            chainId: 50,
            name: "XinFin",
            ...eu
        },
        xdcTestnet: {
            chainId: 51,
            ...eu
        },
        zetachain: {
            chainId: 7e3,
            name: "ZetaChain",
            ...tu
        },
        zetachainAthensTestnet: {
            chainId: 7001,
            name: "Zeta Athens",
            ...tu
        },
        zkSync: {
            chainId: 324,
            name: "zkSync",
            ...nu
        },
        zkSyncTestnet: {
            chainId: 280,
            ...nu
        },
        zora: {
            chainId: 7777777,
            name: "Zora",
            ...Js
        },
        zoraSepolia: {
            chainId: 999999999,
            ...Js
        },
        zoraTestnet: {
            chainId: 999,
            ...Js
        }
    },
    K2 = Object.fromEntries(Object.values(G2).filter(xp).map(({
        chainId: e,
        ...t
    }) => [e, t])),
    J2 = e => e.map(t => {
        const n = K2[t.id] ? ? {};
        return { ...t,
            name: n.name ? ? t.name,
            iconUrl: t.iconUrl ? ? n.iconUrl,
            iconBackground: t.iconBackground ? ? n.iconBackground
        }
    }),
    lc = I.createContext({
        chains: []
    });

function Z2({
    children: e,
    initialChain: t
}) {
    const {
        chains: n
    } = he();
    return g.createElement(lc.Provider, {
        value: I.useMemo(() => ({
            chains: J2(n),
            initialChainId: typeof t == "number" ? t : t ? .id
        }), [n, t])
    }, e)
}
var Mn = () => I.useContext(lc).chains,
    Y2 = () => I.useContext(lc).initialChainId,
    X2 = () => {
        const e = Mn();
        return I.useMemo(() => {
            const t = {};
            for (const n of e) t[n.id] = n;
            return t
        }, [e])
    },
    Ip = I.createContext({
        showBalance: void 0,
        setShowBalance: () => {}
    });

function eE({
    children: e
}) {
    const [t, n] = I.useState();
    return g.createElement(Ip.Provider, {
        value: {
            showBalance: t,
            setShowBalance: n
        }
    }, e)
}
var tE = () => I.useContext(Ip);

function nE() {
    const [e, t] = I.useState(!1);
    return I.useEffect(() => (t(!0), () => {
        t(!1)
    }), []), I.useCallback(() => e, [e])
}

function kp() {
    const e = Mn(),
        t = Ka.id;
    return e.some(r => r.id === t)
}

function rE(e) {
    const t = kp(),
        n = o => {
            try {
                return U3(o)
            } catch {}
        },
        {
            data: r
        } = I6({
            chainId: Ka.id,
            name: e ? n(e) : void 0,
            query: {
                enabled: t
            }
        });
    return r
}
async function Dt(e, t) {
    if (t = {
            headers: {},
            method: "get",
            ...t,
            timeout: t.timeout ? ? 1e4
        }, !e) throw new Error("rainbowFetch: Missing url argument");
    const n = new AbortController,
        r = setTimeout(() => n.abort(), t.timeout),
        {
            body: o,
            params: s,
            headers: i,
            ...a
        } = t,
        c = o && typeof o == "object" ? JSON.stringify(t.body) : t.body,
        l = await fetch(`${e}${sE(s)}`, { ...a,
            body: c,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                ...i
            },
            signal: n.signal
        });
    clearTimeout(r);
    const u = await oE(l);
    if (l.ok) {
        const {
            headers: h,
            status: p
        } = l;
        return {
            data: u,
            headers: h,
            status: p
        }
    }
    throw iE({
        requestBody: o,
        response: l,
        responseBody: typeof u == "string" ? {
            error: u
        } : u
    })
}

function oE(e) {
    return e.headers.get("Content-Type") ? .startsWith("application/json") ? e.json() : e.text()
}

function sE(e) {
    return e && Object.keys(e).length ? `?${new URLSearchParams(e)}` : ""
}

function iE({
    requestBody: e,
    response: t,
    responseBody: n
}) {
    const r = n ? .error || t ? .statusText || "There was an error with the request.",
        o = new Error(r);
    return o.response = t, o.responseBody = n, o.requestBody = e, o
}
var aE = class {
    constructor(e = {}) {
        const {
            baseUrl: t = "",
            ...n
        } = e;
        this.baseUrl = t, this.opts = n
    }
    get(e, t) {
        return Dt(`${this.baseUrl}${e}`, { ...this.opts,
            ...t || {},
            method: "get"
        })
    }
    delete(e, t) {
        return Dt(`${this.baseUrl}${e}`, { ...this.opts,
            ...t || {},
            method: "delete"
        })
    }
    head(e, t) {
        return Dt(`${this.baseUrl}${e}`, { ...this.opts,
            ...t || {},
            method: "head"
        })
    }
    options(e, t) {
        return Dt(`${this.baseUrl}${e}`, { ...this.opts,
            ...t || {},
            method: "options"
        })
    }
    post(e, t, n) {
        return Dt(`${this.baseUrl}${e}`, { ...this.opts,
            ...n || {},
            body: t,
            method: "post"
        })
    }
    put(e, t, n) {
        return Dt(`${this.baseUrl}${e}`, { ...this.opts,
            ...n || {},
            body: t,
            method: "put"
        })
    }
    patch(e, t, n) {
        return Dt(`${this.baseUrl}${e}`, { ...this.opts,
            ...n || {},
            body: t,
            method: "patch"
        })
    }
};

function cE({
    baseUrl: e,
    headers: t,
    params: n,
    timeout: r
}) {
    return new aE({
        baseUrl: e,
        headers: t,
        params: n,
        timeout: r
    })
}
var lE = cE({
    baseUrl: "https://enhanced-provider.rainbow.me",
    headers: {
        "x-api-key": typeof process < "u" && typeof process.env < "u" && {}.RAINBOW_PROVIDER_API_KEY || "LzbasoBiLqltex3VkcQ7LRmL4PtfiiZ1EMJrizrgfonWN6byJReu/l6yrUoo3zLW"
    }
});

function uE(e, t, n = {}) {
    return [e, t, n]
}

function io(e) {
    return `rk-ens-name-${e}`
}

function dE(e) {
    try {
        const t = e ? JSON.parse(e) : null;
        return typeof t == "object" ? t : null
    } catch {
        return null
    }
}

function fE(e, t) {
    if (!le(e)) return;
    const n = new Date,
        r = new Date(n.getTime() + 180 * 6e4);
    localStorage.setItem(io(e), JSON.stringify({
        ensName: t,
        expires: r.getTime()
    }))
}

function hE(e) {
    const t = dE(localStorage.getItem(io(e)));
    if (!t) return null;
    const {
        ensName: n,
        expires: r
    } = t;
    return typeof n != "string" || Number.isNaN(Number(r)) || new Date().getTime() > Number(r) ? (localStorage.removeItem(io(e)), null) : n
}
async function pE({
    address: e
}) {
    const t = hE(e);
    if (t) return t;
    const r = (await lE.get("/v1/resolve-ens", {
        params: {
            address: e
        }
    })).data.data;
    return r && fE(e, r), r
}

function mE(e) {
    const t = kp(),
        {
            data: n
        } = k6({
            chainId: Ka.id,
            address: e,
            query: {
                enabled: t
            }
        }),
        {
            data: r
        } = Kf({
            queryKey: uE("address", e),
            queryFn: () => pE({
                address: e
            }),
            enabled: !t && !!e,
            staleTime: 10 * (60 * 1e3),
            retry: 1
        });
    return n || r
}

function Bp({
    address: e,
    includeBalance: t
}) {
    const n = mE(e),
        r = rE(n),
        {
            data: o
        } = Jf({
            address: t ? e : void 0
        });
    return {
        ensName: n,
        ensAvatar: r,
        balance: o
    }
}

function uc() {
    const {
        chain: e
    } = Se();
    return e ? .id ? ? null
}
var jp = "rk-transactions";

function gE(e) {
    try {
        const t = e ? JSON.parse(e) : {};
        return typeof t == "object" ? t : {}
    } catch {
        return {}
    }
}

function ru() {
    return gE(typeof localStorage < "u" ? localStorage.getItem(jp) : null)
}
var bE = /^0x([A-Fa-f0-9]{64})$/;

function yE(e) {
    const t = [];
    return bE.test(e.hash) || t.push("Invalid transaction hash"), typeof e.description != "string" && t.push("Transaction must have a description"), typeof e.confirmations < "u" && (!Number.isInteger(e.confirmations) || e.confirmations < 1) && t.push("Transaction confirmations must be a positiver integer"), t
}

function wE({
    provider: e
}) {
    let t = ru(),
        n = e;
    const r = new Set,
        o = new Set,
        s = new Map;

    function i(v) {
        n = v
    }

    function a(v, C) {
        return t[v] ? .[C] ? ? []
    }

    function c(v, C, y) {
        const A = yE(y);
        if (A.length > 0) throw new Error(["Unable to add transaction", ...A].join(`
`));
        d(v, C, E => [{ ...y,
            status: "pending"
        }, ...E.filter(({
            hash: k
        }) => k !== y.hash)])
    }

    function l(v, C) {
        d(v, C, () => [])
    }

    function u(v, C, y, A) {
        d(v, C, E => E.map(k => k.hash === y ? { ...k,
            status: A
        } : k))
    }
    async function f(v, C) {
        await Promise.all(a(v, C).filter(y => y.status === "pending").map(async y => {
            const {
                confirmations: A,
                hash: E
            } = y, k = s.get(E);
            if (k) return await k;
            const B = n.waitForTransactionReceipt({
                confirmations: A,
                hash: E,
                timeout: 3e5
            }).then(({
                status: S
            }) => {
                s.delete(E), S !== void 0 && (u(v, C, E, S === 0 || S === "reverted" ? "failed" : "confirmed"), m(S))
            }).catch(() => {
                u(v, C, E, "failed")
            });
            return s.set(E, B), await B
        }))
    }

    function d(v, C, y) {
        t = ru(), t[v] = t[v] ? ? {};
        let A = 0;
        const E = 10,
            k = y(t[v][C] ? ? []).filter(({
                status: B
            }) => B === "pending" ? !0 : A++ <= E);
        t[v][C] = k.length > 0 ? k : void 0, h(), p(), f(v, C)
    }

    function h() {
        localStorage.setItem(jp, JSON.stringify(t))
    }

    function p() {
        for (const v of r) v()
    }

    function m(v) {
        for (const C of o) C(v)
    }

    function b(v) {
        return r.add(v), () => {
            r.delete(v)
        }
    }

    function w(v) {
        return o.add(v), () => {
            o.delete(v)
        }
    }
    return {
        addTransaction: c,
        clearTransactions: l,
        getTransactions: a,
        onTransactionStatus: w,
        onChange: b,
        setProvider: i,
        waitForPendingTransactions: f
    }
}
var ou, Sp = I.createContext(null);

function vE({
    children: e
}) {
    const t = B6(),
        {
            address: n
        } = Se(),
        r = uc(),
        {
            refetch: o
        } = Jf({
            address: n,
            query: {
                enabled: !1
            }
        }),
        [s] = I.useState(() => ou ? ? (ou = wE({
            provider: t
        }))),
        i = I.useCallback(a => {
            a === "success" && o()
        }, [o]);
    return I.useEffect(() => {
        s.setProvider(t)
    }, [s, t]), I.useEffect(() => {
        n && r && s.waitForPendingTransactions(n, r)
    }, [s, n, r]), I.useEffect(() => {
        if (s && n && r) return s.onTransactionStatus(i)
    }, [s, n, r, i]), g.createElement(Sp.Provider, {
        value: s
    }, e)
}

function Pp() {
    const e = I.useContext(Sp);
    if (!e) throw new Error("Transaction hooks must be used within RainbowKitProvider");
    return e
}

function Tp() {
    const e = Pp(),
        {
            address: t
        } = Se(),
        n = uc(),
        [r, o] = I.useState(() => e && t && n ? e.getTransactions(t, n) : []);
    return I.useEffect(() => {
        if (e && t && n) return o(e.getTransactions(t, n)), e.onChange(() => {
            o(e.getTransactions(t, n))
        })
    }, [e, t, n]), r
}
var su = e => typeof e == "function" ? e() : e;

function CE(e, {
    extends: t
} = {}) {
    const n = { ...Ll(ql, su(e))
    };
    if (!t) return n;
    const r = Ll(ql, su(t));
    return Object.fromEntries(Object.entries(n).filter(([s, i]) => i !== r[s]))
}

function iu(e, t = {}) {
    return Object.entries(CE(e, t)).map(([n, r]) => `${n}:${r.replace(/[:;{}</>]/g,"")};`).join("")
}
var Op = {
        appName: void 0,
        disclaimer: void 0,
        learnMoreUrl: "https://learn.rainbow.me/understanding-web3?utm_source=rainbowkit&utm_campaign=learnmore"
    },
    Or = I.createContext(Op),
    Mp = I.createContext(!1);

function EE(e, t) {
    let n;
    return () => {
        n && clearTimeout(n), n = setTimeout(() => {
            n = null, e()
        }, t)
    }
}
var Rp = () => {
        const [e, t] = I.useState({
            height: void 0,
            width: void 0
        });
        return I.useEffect(() => {
            const n = EE(() => {
                t({
                    height: window.innerHeight,
                    width: window.innerWidth
                })
            }, 500);
            return window.addEventListener("resize", n), n(), () => window.removeEventListener("resize", n)
        }, []), e
    },
    Mr = I.createContext({
        connector: null,
        setConnector: () => {}
    });

function AE({
    children: e
}) {
    const [t, n] = I.useState(null);
    return g.createElement(Mr.Provider, {
        value: I.useMemo(() => ({
            connector: t,
            setConnector: n
        }), [t])
    }, e)
}
var Rr = {
        COMPACT: "compact",
        WIDE: "wide"
    },
    fs = I.createContext(Rr.WIDE);

function xE({
    children: e,
    modalSize: t
}) {
    const {
        width: n
    } = Rp(), r = n && n < A2, {
        connector: o
    } = I.useContext(Mr);
    return g.createElement(fs.Provider, {
        value: r || o ? Rr.COMPACT : t
    }, e)
}
var dc = I.createContext(!1),
    IE = "rk-version";

function kE({
    version: e
}) {
    localStorage.setItem(IE, e)
}

function BE() {
    const e = I.useCallback(() => {
        kE({
            version: "2.1.3"
        })
    }, []);
    I.useEffect(() => {
        e()
    }, [e])
}

function jE(e, t) {
    const n = {};
    for (const r of e) {
        const o = t(r);
        o && (n[o] = r)
    }
    return n
}

function fc() {
    return typeof navigator < "u" && typeof navigator.userAgent < "u" && /Version\/([0-9._]+).*Safari/.test(navigator.userAgent)
}

function SE() {
    return typeof document < "u" && getComputedStyle(document.body).getPropertyValue("--arc-palette-focus") !== ""
}

function hc() {
    if (typeof navigator > "u") return "Browser";
    const e = navigator.userAgent ? .toLowerCase();
    return navigator.brave ? .isBrave ? "Brave" : e ? .indexOf("edg/") > -1 ? "Edge" : e ? .indexOf("op") > -1 ? "Opera" : SE() ? "Arc" : e ? .indexOf("chrome") > -1 ? "Chrome" : e ? .indexOf("firefox") > -1 ? "Firefox" : fc() ? "Safari" : "Browser"
}
var PE = TC.UAParser(),
    {
        os: pc
    } = PE;

function TE() {
    return pc.name === "Windows"
}

function OE() {
    return pc.name === "Mac OS"
}

function ME() {
    return ["Ubuntu", "Mint", "Fedora", "Debian", "Arch", "Linux"].includes(pc.name)
}

function mc() {
    return TE() ? "Windows" : OE() ? "macOS" : ME() ? "Linux" : "Desktop"
}
var RE = e => {
        const t = hc();
        return {
            Arc: e ? .downloadUrls ? .chrome,
            Brave: e ? .downloadUrls ? .chrome,
            Chrome: e ? .downloadUrls ? .chrome,
            Edge: e ? .downloadUrls ? .edge || e ? .downloadUrls ? .chrome,
            Firefox: e ? .downloadUrls ? .firefox,
            Opera: e ? .downloadUrls ? .opera || e ? .downloadUrls ? .chrome,
            Safari: e ? .downloadUrls ? .safari,
            Browser: e ? .downloadUrls ? .browserExtension
        }[t] ? ? e ? .downloadUrls ? .browserExtension
    },
    _E = e => (Xt() ? e ? .downloadUrls ? .ios : e ? .downloadUrls ? .android) ? ? e ? .downloadUrls ? .mobile,
    DE = e => {
        const t = mc();
        return {
            Windows: e ? .downloadUrls ? .windows,
            macOS: e ? .downloadUrls ? .macos,
            Linux: e ? .downloadUrls ? .linux,
            Desktop: e ? .downloadUrls ? .desktop
        }[t] ? ? e ? .downloadUrls ? .desktop
    },
    _p = (e, t) => e.some(n => n.id === t),
    NE = e => !!e.isRainbowKitConnector,
    au = e => !!(!e.isRainbowKitConnector && e.icon ? .startsWith("data:image") && e.uid && e.name),
    FE = (e, t) => e.id === "walletConnect" && t ? { ...e,
        walletConnectModalConnector: t
    } : e,
    LE = ({
        wallets: e,
        recentWallets: t
    }) => [...t, ...e.filter(n => !_p(t, n.id))],
    Dp = "rk-recent";

function UE(e) {
    try {
        const t = e ? JSON.parse(e) : [];
        return Array.isArray(t) ? t : []
    } catch {
        return []
    }
}

function Np() {
    return typeof localStorage < "u" ? UE(localStorage.getItem(Dp)) : []
}

function zE(e) {
    return [...new Set(e)]
}

function WE(e) {
    const t = zE([e, ...Np()]);
    localStorage.setItem(Dp, JSON.stringify(t))
}

function hs(e = !1) {
    const t = Mn(),
        n = Y2(),
        {
            connectAsync: r,
            connectors: o
        } = A6(),
        s = o,
        {
            setIsWalletConnectModalOpen: i
        } = cm(),
        a = s.map(y => ({ ...y,
            ...y.rkDetails || {}
        }));
    async function c(y) {
        const A = await y.getChainId(),
            E = await r({
                chainId: n ? ? t.find(({
                    id: k
                }) => k === A) ? .id ? ? t[0] ? .id,
                connector: y
            });
        return E && WE(y.id), E
    }
    async function l(y) {
        try {
            i(!0), await c(y), i(!1)
        } catch (A) {
            const E = A.name === "UserRejectedRequestError" || A.message === "Connection request reset. Please try again.";
            if (i(!1), !E) throw A
        }
    }
    const u = async (y, A) => {
            const E = await y.getProvider();
            return y.id === "coinbase" ? E.qrUrl : new Promise(k => E.once("display_uri", B => {
                k(A(B))
            }))
        },
        f = a.find(y => y.id === "walletConnect" && y.isWalletConnectModalConnector),
        d = a.filter(au).map(y => ({ ...y,
            groupIndex: 0
        })),
        h = a.filter(NE).filter(y => !y.isWalletConnectModalConnector).filter(y => e ? !d.some(E => E.id === y.rdns) : !0).map(y => FE(y, f)),
        p = [...d, ...h],
        m = jE(p, y => y.id),
        b = 3,
        w = Np().map(y => m[y]).filter(Boolean).slice(0, b),
        v = [],
        C = LE({
            wallets: p,
            recentWallets: w
        });
    for (const y of C) {
        if (!y) continue;
        const A = au(y),
            E = _p(w, y.id);
        if (A) {
            v.push({ ...y,
                iconUrl: y.icon,
                ready: !0,
                connect: () => c(y),
                groupName: "Installed",
                recent: E
            });
            continue
        }
        v.push({ ...y,
            ready: y.installed ? ? !0,
            connect: () => c(y),
            desktopDownloadUrl: DE(y),
            extensionDownloadUrl: RE(y),
            groupName: y.groupName,
            mobileDownloadUrl: _E(y),
            getQrCodeUri: y.qrCode ? .getUri ? () => u(y, y.qrCode.getUri) : void 0,
            getDesktopUri: y.desktop ? .getUri ? () => u(y, y.desktop.getUri) : void 0,
            getMobileUri: y.mobile ? .getUri ? () => u(y, y.mobile ? .getUri) : void 0,
            recent: E,
            showWalletConnectModal: y.walletConnectModalConnector ? () => l(y.walletConnectModalConnector) : void 0
        })
    }
    return v
}
var Fp = async () => (await _(() =>
        import ("./assets-NU2OP443-f2b42c29.js"), [])).default,
    qE = () => at(Fp),
    HE = () => g.createElement(ye, {
        background: "#d0d5de",
        borderRadius: "10",
        height: "48",
        src: Fp,
        width: "48"
    }),
    Lp = async () => (await _(() =>
        import ("./login-CWDTIDNK-8d95a610.js"), [])).default,
    QE = () => at(Lp),
    VE = () => g.createElement(ye, {
        background: "#d0d5de",
        borderRadius: "10",
        height: "48",
        src: Lp,
        width: "48"
    }),
    D = g.forwardRef(({
        as: e = "div",
        children: t,
        className: n,
        color: r,
        display: o,
        font: s = "body",
        id: i,
        size: a = "16",
        style: c,
        tabIndex: l,
        textAlign: u = "inherit",
        weight: f = "regular",
        testId: d
    }, h) => g.createElement(x, {
        as: e,
        className: n,
        color: r,
        display: o,
        fontFamily: s,
        fontSize: a,
        fontWeight: f,
        id: i,
        ref: h,
        style: c,
        tabIndex: l,
        textAlign: u,
        testId: d
    }, t));
D.displayName = "Text";
var $E = {
    large: {
        fontSize: "16",
        paddingX: "24",
        paddingY: "10"
    },
    medium: {
        fontSize: "14",
        height: "28",
        paddingX: "12",
        paddingY: "4"
    },
    small: {
        fontSize: "14",
        paddingX: "10",
        paddingY: "5"
    }
};

function je({
    disabled: e = !1,
    href: t,
    label: n,
    onClick: r,
    rel: o = "noreferrer noopener",
    size: s = "medium",
    target: i = "_blank",
    testId: a,
    type: c = "primary"
}) {
    const l = c === "primary",
        u = s !== "large",
        f = Ee(),
        d = e ? "actionButtonSecondaryBackground" : l ? "accentColor" : u ? "actionButtonSecondaryBackground" : null,
        {
            fontSize: h,
            height: p,
            paddingX: m,
            paddingY: b
        } = $E[s],
        w = !f || !u;
    return g.createElement(x, { ...t ? e ? {} : {
            as: "a",
            href: t,
            rel: o,
            target: i
        } : {
            as: "button",
            type: "button"
        },
        onClick: e ? void 0 : r,
        ...w ? {
            borderColor: f && !u && !l ? "actionButtonBorderMobile" : "actionButtonBorder",
            borderStyle: "solid",
            borderWidth: "1"
        } : {},
        borderRadius: "actionButton",
        className: !e && Ce({
            active: "shrinkSm",
            hover: "grow"
        }),
        display: "block",
        paddingX: m,
        paddingY: b,
        style: {
            willChange: "transform"
        },
        testId: a,
        textAlign: "center",
        transition: "transform",
        ...d ? {
            background: d
        } : {},
        ...p ? {
            height: p
        } : {}
    }, g.createElement(D, {
        color: e ? "modalTextSecondary" : l ? "accentColorForeground" : "accentColor",
        size: h,
        weight: "bold"
    }, n))
}
var GE = () => Ee() ? g.createElement("svg", {
        "aria-hidden": !0,
        fill: "none",
        height: "11.5",
        viewBox: "0 0 11.5 11.5",
        width: "11.5",
        xmlns: "http://www.w3.org/2000/svg"
    }, g.createElement("title", null, "Close"), g.createElement("path", {
        d: "M2.13388 0.366117C1.64573 -0.122039 0.854272 -0.122039 0.366117 0.366117C-0.122039 0.854272 -0.122039 1.64573 0.366117 2.13388L3.98223 5.75L0.366117 9.36612C-0.122039 9.85427 -0.122039 10.6457 0.366117 11.1339C0.854272 11.622 1.64573 11.622 2.13388 11.1339L5.75 7.51777L9.36612 11.1339C9.85427 11.622 10.6457 11.622 11.1339 11.1339C11.622 10.6457 11.622 9.85427 11.1339 9.36612L7.51777 5.75L11.1339 2.13388C11.622 1.64573 11.622 0.854272 11.1339 0.366117C10.6457 -0.122039 9.85427 -0.122039 9.36612 0.366117L5.75 3.98223L2.13388 0.366117Z",
        fill: "currentColor"
    })) : g.createElement("svg", {
        "aria-hidden": !0,
        fill: "none",
        height: "10",
        viewBox: "0 0 10 10",
        width: "10",
        xmlns: "http://www.w3.org/2000/svg"
    }, g.createElement("title", null, "Close"), g.createElement("path", {
        d: "M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z",
        fill: "currentColor"
    })),
    Jt = ({
        "aria-label": e = "Close",
        onClose: t
    }) => {
        const n = Ee();
        return g.createElement(x, {
            alignItems: "center",
            "aria-label": e,
            as: "button",
            background: "closeButtonBackground",
            borderColor: "actionButtonBorder",
            borderRadius: "full",
            borderStyle: "solid",
            borderWidth: n ? "0" : "1",
            className: Ce({
                active: "shrinkSm",
                hover: "growLg"
            }),
            color: "closeButton",
            display: "flex",
            height: n ? "30" : "28",
            justifyContent: "center",
            onClick: t,
            style: {
                willChange: "transform"
            },
            transition: "default",
            type: "button",
            width: n ? "30" : "28"
        }, g.createElement(GE, null))
    },
    Up = async () => (await _(() =>
        import ("./sign-A7IJEUT5-f23ac888.js"), [])).default;

function KE({
    onClose: e,
    onCloseModal: t
}) {
    const {
        i18n: n
    } = I.useContext(pe), [{
        status: r,
        ...o
    }, s] = g.useState({
        status: "idle"
    }), i = j2(), a = I.useCallback(async () => {
        try {
            const p = await i.getNonce();
            s(m => ({ ...m,
                nonce: p
            }))
        } catch {
            s(p => ({ ...p,
                errorMessage: n.t("sign_in.message.preparing_error"),
                status: "idle"
            }))
        }
    }, [i, n.t]), c = I.useRef(!1);
    g.useEffect(() => {
        c.current || (c.current = !0, a())
    }, [a]);
    const l = Ee(),
        {
            address: u,
            chain: f
        } = Se(),
        {
            signMessageAsync: d
        } = j6(),
        h = async () => {
            try {
                const p = f ? .id,
                    {
                        nonce: m
                    } = o;
                if (!u || !p || !m) return;
                s(v => ({ ...v,
                    errorMessage: void 0,
                    status: "signing"
                }));
                const b = i.createMessage({
                    address: u,
                    chainId: p,
                    nonce: m
                });
                let w;
                try {
                    w = await d({
                        message: i.getMessageBody({
                            message: b
                        })
                    })
                } catch (v) {
                    return v instanceof oe ? s(C => ({ ...C,
                        status: "idle"
                    })) : s(C => ({ ...C,
                        errorMessage: n.t("sign_in.signature.signing_error"),
                        status: "idle"
                    }))
                }
                s(v => ({ ...v,
                    status: "verifying"
                }));
                try {
                    if (await i.verify({
                            message: b,
                            signature: w
                        })) {
                        t();
                        return
                    }
                    throw new Error
                } catch {
                    return s(v => ({ ...v,
                        errorMessage: n.t("sign_in.signature.verifying_error"),
                        status: "idle"
                    }))
                }
            } catch {
                s({
                    errorMessage: n.t("sign_in.signature.oops_error"),
                    status: "idle"
                })
            }
        };
    return g.createElement(x, {
        position: "relative"
    }, g.createElement(x, {
        display: "flex",
        paddingRight: "16",
        paddingTop: "16",
        position: "absolute",
        right: "0"
    }, g.createElement(Jt, {
        onClose: e
    })), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: l ? "32" : "24",
        padding: "24",
        paddingX: "18",
        style: {
            paddingTop: l ? "60px" : "36px"
        }
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: l ? "6" : "4",
        style: {
            maxWidth: l ? 320 : 280
        }
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: l ? "32" : "16"
    }, g.createElement(ye, {
        height: 40,
        src: Up,
        width: 40
    }), g.createElement(D, {
        color: "modalText",
        size: l ? "20" : "18",
        textAlign: "center",
        weight: "heavy"
    }, n.t("sign_in.label"))), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: l ? "16" : "12"
    }, g.createElement(D, {
        color: "modalTextSecondary",
        size: l ? "16" : "14",
        textAlign: "center"
    }, n.t("sign_in.description")), r === "idle" && o.errorMessage ? g.createElement(D, {
        color: "error",
        size: l ? "16" : "14",
        textAlign: "center",
        weight: "bold"
    }, o.errorMessage) : null)), g.createElement(x, {
        alignItems: l ? void 0 : "center",
        display: "flex",
        flexDirection: "column",
        gap: "8",
        width: "full"
    }, g.createElement(je, {
        disabled: !o.nonce || r === "signing" || r === "verifying",
        label: o.nonce ? r === "signing" ? n.t("sign_in.signature.waiting") : r === "verifying" ? n.t("sign_in.signature.verifying") : n.t("sign_in.message.send") : n.t("sign_in.message.preparing"),
        onClick: h,
        size: l ? "large" : "medium",
        testId: "auth-message-button"
    }), l ? g.createElement(je, {
        label: "Cancel",
        onClick: e,
        size: "large",
        type: "secondary"
    }) : g.createElement(x, {
        as: "button",
        borderRadius: "full",
        className: Ce({
            active: "shrink",
            hover: "grow"
        }),
        display: "block",
        onClick: e,
        paddingX: "10",
        paddingY: "5",
        rel: "noreferrer",
        style: {
            willChange: "transform"
        },
        target: "_blank",
        transition: "default"
    }, g.createElement(D, {
        color: "closeButton",
        size: l ? "16" : "14",
        weight: "bold"
    }, n.t("sign_in.message.cancel"))))))
}

function JE() {
    const e = Mn(),
        t = hs(),
        n = ds() === "unauthenticated",
        r = I.useCallback(() => {
            at(...t.map(o => o.iconUrl), ...e.map(o => o.iconUrl).filter(xp)), Ee() || (qE(), QE()), n && at(Up)
        }, [t, e, n]);
    I.useEffect(() => {
        r()
    }, [r])
}
var zp = "WALLETCONNECT_DEEPLINK_CHOICE";

function ZE({
    mobileUri: e,
    name: t
}) {
    localStorage.setItem(zp, JSON.stringify({
        href: e.split("?")[0],
        name: t
    }))
}

function YE() {
    localStorage.removeItem(zp)
}
var Wp = I.createContext(void 0),
    Ji = "data-rk",
    qp = e => ({
        [Ji]: e || ""
    }),
    XE = e => {
        if (e && !/^[a-zA-Z0-9_]+$/.test(e)) throw new Error(`Invalid ID: ${e}`);
        return e ? `[${Ji}="${e}"]` : `[${Ji}]`
    },
    eA = () => {
        const e = I.useContext(Wp);
        return qp(e)
    },
    tA = nh();

function a7({
    appInfo: e,
    avatar: t,
    children: n,
    coolMode: r = !1,
    id: o,
    initialChain: s,
    locale: i,
    modalSize: a = Rr.WIDE,
    showRecentTransactions: c = !1,
    theme: l = tA
}) {
    if (JE(), BE(), _f({
            onDisconnect: YE
        }), typeof l == "function") throw new Error('A theme function was provided to the "theme" prop instead of a theme object. You must execute this function to get the resulting theme object.');
    const u = XE(o),
        f = { ...Op,
            ...e
        },
        d = t ? ? Ep;
    return g.createElement(Z2, {
        initialChain: s
    }, g.createElement(AE, null, g.createElement(Q2, {
        locale: i
    }, g.createElement(Mp.Provider, {
        value: r
    }, g.createElement(xE, {
        modalSize: a
    }, g.createElement(dc.Provider, {
        value: c
    }, g.createElement(vE, null, g.createElement(Ap.Provider, {
        value: d
    }, g.createElement(Or.Provider, {
        value: f
    }, g.createElement(Wp.Provider, {
        value: o
    }, g.createElement(eE, null, g.createElement(gx, null, l ? g.createElement("div", { ...qp(o)
    }, g.createElement("style", {
        dangerouslySetInnerHTML: {
            __html: [`${u}{${iu("lightMode"in l?l.lightMode:l)}}`, "darkMode" in l ? `@media(prefers-color-scheme:dark){${u}{${iu(l.darkMode,{extends:l.lightMode})}}}` : null].join("")
        }
    }), n) : n))))))))))))
}
var nA = "_9pm4ki5 ju367va ju367v15 ju367v8r",
    rA = "_9pm4ki3 ju367v9h ju367vb3 ju367va ju367v2q ju367v8q",
    cu = (e, t) => {
        const n = e.querySelectorAll("button:not(:disabled), a[href]");
        n.length !== 0 && n[t === "end" ? n.length - 1 : 0].focus()
    };

function oA(e) {
    const t = I.useRef(null);
    return I.useEffect(() => {
        const n = document.activeElement;
        return () => {
            n.focus ? .()
        }
    }, []), I.useEffect(() => {
        if (t.current) {
            const n = t.current.querySelector("[data-auto-focus]");
            n ? n.focus() : t.current.focus()
        }
    }, []), g.createElement(g.Fragment, null, g.createElement("div", {
        onFocus: I.useCallback(() => t.current && cu(t.current, "end"), []),
        tabIndex: 0
    }), g.createElement("div", {
        ref: t,
        style: {
            outline: "none"
        },
        tabIndex: -1,
        ...e
    }), g.createElement("div", {
        onFocus: I.useCallback(() => t.current && cu(t.current, "start"), []),
        tabIndex: 0
    }))
}
var sA = e => e.stopPropagation();

function ko({
    children: e,
    onClose: t,
    open: n,
    titleId: r
}) {
    I.useEffect(() => {
        const l = u => n && u.key === "Escape" && t();
        return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l)
    }, [n, t]);
    const [o, s] = I.useState(!0);
    I.useEffect(() => {
        s(getComputedStyle(window.document.body).overflow !== "hidden")
    }, []);
    const i = I.useCallback(() => t(), [t]),
        a = eA(),
        c = Ee();
    return g.createElement(g.Fragment, null, n ? bm.createPortal(g.createElement(SC, {
        enabled: o
    }, g.createElement(x, { ...a
    }, g.createElement(x, { ...a,
        alignItems: c ? "flex-end" : "center",
        "aria-labelledby": r,
        "aria-modal": !0,
        className: rA,
        onClick: i,
        position: "fixed",
        role: "dialog"
    }, g.createElement(oA, {
        className: nA,
        onClick: sA,
        role: "document"
    }, e)))), document.body) : null)
}
var iA = "_1ckjpok7",
    aA = "_1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r",
    cA = "_1ckjpok4 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r",
    lA = "_1ckjpok6 ju367vq",
    uA = "_1ckjpok3 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r",
    dA = "_1ckjpok2 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r";

function Bo({
    bottomSheetOnMobile: e = !1,
    children: t,
    marginTop: n,
    padding: r = "16",
    paddingBottom: o,
    wide: s = !1
}) {
    const i = Ee(),
        c = I.useContext(fs) === Rr.COMPACT;
    return g.createElement(x, {
        marginTop: n
    }, g.createElement(x, {
        className: [s ? i ? dA : c ? cA : uA : aA, i ? lA : null, i && e ? iA : null].join(" ")
    }, g.createElement(x, {
        padding: r,
        paddingBottom: o ? ? r
    }, t)))
}
var lu = ["k", "m", "b", "t"];

function Xr(e, t = 1) {
    return e.toString().replace(new RegExp(`(.+\\.\\d{${t}})\\d+`), "$1").replace(/(\.[1-9]*)0+$/, "$1").replace(/\.$/, "")
}

function Hp(e) {
    if (e < 1) return Xr(e, 3);
    if (e < 10 ** 2) return Xr(e, 2);
    if (e < 10 ** 4) return new Intl.NumberFormat().format(parseFloat(Xr(e, 1)));
    const t = 10 ** 1;
    let n = String(e);
    for (let r = lu.length - 1; r >= 0; r--) {
        const o = 10 ** ((r + 1) * 3);
        if (o <= e) {
            e = e * t / o / t, n = Xr(e, 1) + lu[r];
            break
        }
    }
    return n
}

function Qp(e) {
    return e.length < 4 + 4 ? e : `${e.substring(0,4)}…${e.substring(e.length-4)}`
}

function Vp(e) {
    if (!e) return "";
    const t = e.split("."),
        n = t.pop();
    return t.join(".").length > 24 ? `${t.join(".").substring(0,24)}...` : `${t.join(".")}.${n}`
}
var fA = () => g.createElement("svg", {
        fill: "none",
        height: "13",
        viewBox: "0 0 13 13",
        width: "13",
        xmlns: "http://www.w3.org/2000/svg"
    }, g.createElement("title", null, "Copied"), g.createElement("path", {
        d: "M4.94568 12.2646C5.41052 12.2646 5.77283 12.0869 6.01892 11.7109L12.39 1.96973C12.5677 1.69629 12.6429 1.44336 12.6429 1.2041C12.6429 0.561523 12.1644 0.0966797 11.5082 0.0966797C11.057 0.0966797 10.7767 0.260742 10.5033 0.691406L4.9115 9.50977L2.07458 5.98926C1.82166 5.68848 1.54822 5.55176 1.16541 5.55176C0.502319 5.55176 0.0238037 6.02344 0.0238037 6.66602C0.0238037 6.95312 0.112671 7.20605 0.358765 7.48633L3.88611 11.7588C4.18005 12.1074 4.50818 12.2646 4.94568 12.2646Z",
        fill: "currentColor"
    })),
    hA = () => g.createElement("svg", {
        fill: "none",
        height: "16",
        viewBox: "0 0 17 16",
        width: "17",
        xmlns: "http://www.w3.org/2000/svg"
    }, g.createElement("title", null, "Copy"), g.createElement("path", {
        d: "M3.04236 12.3027H4.18396V13.3008C4.18396 14.8525 5.03845 15.7002 6.59705 15.7002H13.6244C15.183 15.7002 16.0375 14.8525 16.0375 13.3008V6.24609C16.0375 4.69434 15.183 3.84668 13.6244 3.84668H12.4828V2.8418C12.4828 1.29688 11.6283 0.442383 10.0697 0.442383H3.04236C1.48376 0.442383 0.629272 1.29004 0.629272 2.8418V9.90332C0.629272 11.4551 1.48376 12.3027 3.04236 12.3027ZM3.23376 10.5391C2.68689 10.5391 2.39294 10.2656 2.39294 9.68457V3.06055C2.39294 2.47949 2.68689 2.21289 3.23376 2.21289H9.8783C10.4252 2.21289 10.7191 2.47949 10.7191 3.06055V3.84668H6.59705C5.03845 3.84668 4.18396 4.69434 4.18396 6.24609V10.5391H3.23376ZM6.78845 13.9365C6.24158 13.9365 5.94763 13.6699 5.94763 13.0889V6.45801C5.94763 5.87695 6.24158 5.61035 6.78845 5.61035H13.433C13.9799 5.61035 14.2738 5.87695 14.2738 6.45801V13.0889C14.2738 13.6699 13.9799 13.9365 13.433 13.9365H6.78845Z",
        fill: "currentColor"
    })),
    pA = () => g.createElement("svg", {
        fill: "none",
        height: "16",
        viewBox: "0 0 18 16",
        width: "18",
        xmlns: "http://www.w3.org/2000/svg"
    }, g.createElement("title", null, "Disconnect"), g.createElement("path", {
        d: "M2.67834 15.5908H9.99963C11.5514 15.5908 12.399 14.7432 12.399 13.1777V10.2656H10.6354V12.9863C10.6354 13.5332 10.3688 13.8271 9.78772 13.8271H2.89026C2.3092 13.8271 2.0426 13.5332 2.0426 12.9863V3.15625C2.0426 2.60254 2.3092 2.30859 2.89026 2.30859H9.78772C10.3688 2.30859 10.6354 2.60254 10.6354 3.15625V5.89746H12.399V2.95801C12.399 1.39941 11.5514 0.544922 9.99963 0.544922H2.67834C1.12659 0.544922 0.278931 1.39941 0.278931 2.95801V13.1777C0.278931 14.7432 1.12659 15.5908 2.67834 15.5908ZM7.43616 8.85059H14.0875L15.0924 8.78906L14.566 9.14453L13.6842 9.96484C13.5406 10.1016 13.4586 10.2861 13.4586 10.4844C13.4586 10.8398 13.7321 11.168 14.1217 11.168C14.3199 11.168 14.4635 11.0928 14.6002 10.9561L16.7809 8.68652C16.986 8.48145 17.0543 8.27637 17.0543 8.06445C17.0543 7.85254 16.986 7.64746 16.7809 7.43555L14.6002 5.17285C14.4635 5.03613 14.3199 4.9541 14.1217 4.9541C13.7321 4.9541 13.4586 5.27539 13.4586 5.6377C13.4586 5.83594 13.5406 6.02734 13.6842 6.15723L14.566 6.98438L15.0924 7.33984L14.0875 7.27148H7.43616C7.01917 7.27148 6.65686 7.62012 6.65686 8.06445C6.65686 8.50195 7.01917 8.85059 7.43616 8.85059Z",
        fill: "currentColor"
    }));

function mA() {
    const e = Pp(),
        {
            address: t
        } = Se(),
        n = uc();
    return I.useCallback(() => {
        if (!t || !n) throw new Error("No address or chain ID found");
        e.clearTransactions(t, n)
    }, [e, t, n])
}
var $p = e => e ? .blockExplorers ? .default ? .url,
    Gp = () => g.createElement("svg", {
        fill: "none",
        height: "19",
        viewBox: "0 0 20 19",
        width: "20",
        xmlns: "http://www.w3.org/2000/svg"
    }, g.createElement("title", null, "Link"), g.createElement("path", {
        d: "M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM12.7158 12.1416C13.2432 12.1416 13.5684 11.7549 13.5684 11.1836V7.19336C13.5684 6.44629 13.1377 6.05957 12.417 6.05957H8.40918C7.8291 6.05957 7.45117 6.38477 7.45117 6.91211C7.45117 7.43945 7.8291 7.77344 8.40918 7.77344H9.69238L10.7207 7.63281L9.53418 8.67871L6.73047 11.4912C6.53711 11.6758 6.41406 11.9395 6.41406 12.2031C6.41406 12.7832 6.85352 13.1699 7.39844 13.1699C7.68848 13.1699 7.92578 13.0732 8.1543 12.8623L10.9316 10.0762L11.9775 8.89844L11.8545 9.98828V11.1836C11.8545 11.7725 12.1885 12.1416 12.7158 12.1416Z",
        fill: "currentColor"
    })),
    gA = () => g.createElement("svg", {
        fill: "none",
        height: "19",
        viewBox: "0 0 20 19",
        width: "20",
        xmlns: "http://www.w3.org/2000/svg"
    }, g.createElement("title", null, "Cancel"), g.createElement("path", {
        d: "M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM7.29297 13.3018C7.58301 13.3018 7.81152 13.2139 7.99609 13.0205L10 11.0166L12.0127 13.0205C12.1973 13.2051 12.4258 13.3018 12.707 13.3018C13.2432 13.3018 13.6562 12.8887 13.6562 12.3525C13.6562 12.0977 13.5508 11.8691 13.3662 11.6934L11.3535 9.67188L13.375 7.6416C13.5596 7.44824 13.6562 7.22852 13.6562 6.98242C13.6562 6.44629 13.2432 6.0332 12.7158 6.0332C12.4346 6.0332 12.2148 6.12109 12.0215 6.31445L10 8.32715L7.9873 6.32324C7.80273 6.12988 7.58301 6.04199 7.29297 6.04199C6.76562 6.04199 6.35254 6.45508 6.35254 6.99121C6.35254 7.2373 6.44922 7.46582 6.63379 7.6416L8.65527 9.67188L6.63379 11.6934C6.44922 11.8691 6.35254 12.1064 6.35254 12.3525C6.35254 12.8887 6.76562 13.3018 7.29297 13.3018Z",
        fill: "currentColor"
    })),
    bA = () => g.createElement("svg", {
        fill: "none",
        height: "20",
        viewBox: "0 0 20 20",
        width: "20",
        xmlns: "http://www.w3.org/2000/svg"
    }, g.createElement("title", null, "Success"), g.createElement("path", {
        d: "M10 19.4443C15.0977 19.4443 19.2812 15.252 19.2812 10.1543C19.2812 5.06543 15.0889 0.873047 10 0.873047C4.90234 0.873047 0.71875 5.06543 0.71875 10.1543C0.71875 15.252 4.91113 19.4443 10 19.4443ZM10 17.1328C6.1416 17.1328 3.03906 14.0215 3.03906 10.1543C3.03906 6.2959 6.13281 3.18457 10 3.18457C13.8584 3.18457 16.9697 6.2959 16.9697 10.1543C16.9785 14.0215 13.8672 17.1328 10 17.1328ZM9.07715 14.3379C9.4375 14.3379 9.7627 14.1533 9.97363 13.8369L13.7441 8.00977C13.8848 7.79883 13.9814 7.5791 13.9814 7.36816C13.9814 6.84961 13.5244 6.48926 13.0322 6.48926C12.707 6.48926 12.4258 6.66504 12.2148 7.0166L9.05957 12.0967L7.5918 10.2949C7.37207 10.0225 7.13477 9.9082 6.84473 9.9082C6.33496 9.9082 5.92188 10.3125 5.92188 10.8223C5.92188 11.0684 6.00098 11.2793 6.18555 11.5078L8.1543 13.8545C8.40918 14.1709 8.70801 14.3379 9.07715 14.3379Z",
        fill: "currentColor"
    })),
    yA = e => {
        switch (e) {
            case "pending":
                return br;
            case "confirmed":
                return bA;
            case "failed":
                return gA;
            default:
                return br
        }
    };

function wA({
    tx: e
}) {
    const t = Ee(),
        n = yA(e.status),
        r = e.status === "failed" ? "error" : "accentColor",
        {
            chain: o
        } = Se(),
        s = e.status === "confirmed" ? "Confirmed" : e.status === "failed" ? "Failed" : "Pending",
        i = $p(o);
    return g.createElement(g.Fragment, null, g.createElement(x, { ...i ? {
            as: "a",
            background: {
                hover: "profileForeground"
            },
            borderRadius: "menuButton",
            className: Ce({
                active: "shrink"
            }),
            href: `${i}/tx/${e.hash}`,
            rel: "noreferrer noopener",
            target: "_blank",
            transition: "default"
        } : {},
        color: "modalText",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "8",
        width: "full"
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: t ? "16" : "14"
    }, g.createElement(x, {
        color: r
    }, g.createElement(n, null)), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: t ? "3" : "1"
    }, g.createElement(x, null, g.createElement(D, {
        color: "modalText",
        font: "body",
        size: t ? "16" : "14",
        weight: "bold"
    }, e ? .description)), g.createElement(x, null, g.createElement(D, {
        color: e.status === "pending" ? "modalTextSecondary" : r,
        font: "body",
        size: "14",
        weight: t ? "medium" : "regular"
    }, s)))), i && g.createElement(x, {
        alignItems: "center",
        color: "modalTextDim",
        display: "flex"
    }, g.createElement(Gp, null))))
}
var vA = 3;

function CA({
    address: e
}) {
    const t = Tp(),
        n = mA(),
        {
            chain: r
        } = Se(),
        o = $p(r),
        s = t.slice(0, vA),
        i = s.length > 0,
        a = Ee(),
        {
            appName: c
        } = I.useContext(Or),
        {
            i18n: l
        } = I.useContext(pe);
    return g.createElement(g.Fragment, null, g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "10",
        paddingBottom: "2",
        paddingTop: "16",
        paddingX: a ? "8" : "18"
    }, i && g.createElement(x, {
        paddingBottom: a ? "4" : "0",
        paddingTop: "8",
        paddingX: a ? "12" : "6"
    }, g.createElement(x, {
        display: "flex",
        justifyContent: "space-between"
    }, g.createElement(D, {
        color: "modalTextSecondary",
        size: a ? "16" : "14",
        weight: "semibold"
    }, l.t("profile.transactions.recent.title")), g.createElement(x, {
        style: {
            marginBottom: -6,
            marginLeft: -10,
            marginRight: -10,
            marginTop: -6
        }
    }, g.createElement(x, {
        as: "button",
        background: {
            hover: "profileForeground"
        },
        borderRadius: "actionButton",
        className: Ce({
            active: "shrink"
        }),
        onClick: n,
        paddingX: a ? "8" : "12",
        paddingY: a ? "4" : "5",
        transition: "default",
        type: "button"
    }, g.createElement(D, {
        color: "modalTextSecondary",
        size: a ? "16" : "14",
        weight: "semibold"
    }, l.t("profile.transactions.clear.label")))))), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "4"
    }, i ? s.map(u => g.createElement(wA, {
        key: u.hash,
        tx: u
    })) : g.createElement(g.Fragment, null, g.createElement(x, {
        padding: a ? "12" : "8"
    }, g.createElement(D, {
        color: "modalTextDim",
        size: a ? "16" : "14",
        weight: a ? "medium" : "bold"
    }, c ? l.t("profile.transactions.description", {
        appName: c
    }) : l.t("profile.transactions.description_fallback"))), a && g.createElement(x, {
        background: "generalBorderDim",
        height: "1",
        marginX: "12",
        marginY: "8"
    })))), o && g.createElement(x, {
        paddingBottom: "18",
        paddingX: a ? "8" : "18"
    }, g.createElement(x, {
        alignItems: "center",
        as: "a",
        background: {
            hover: "profileForeground"
        },
        borderRadius: "menuButton",
        className: Ce({
            active: "shrink"
        }),
        color: "modalTextDim",
        display: "flex",
        flexDirection: "row",
        href: `${o}/address/${e}`,
        justifyContent: "space-between",
        paddingX: "8",
        paddingY: "12",
        rel: "noreferrer noopener",
        style: {
            willChange: "transform"
        },
        target: "_blank",
        transition: "default",
        width: "full",
        ...a ? {
            paddingLeft: "12"
        } : {}
    }, g.createElement(D, {
        color: "modalText",
        font: "body",
        size: a ? "16" : "14",
        weight: a ? "semibold" : "bold"
    }, l.t("profile.explorer.label")), g.createElement(Gp, null))))
}

function uu({
    action: e,
    icon: t,
    label: n,
    testId: r,
    url: o
}) {
    const s = Ee();
    return g.createElement(x, { ...o ? {
            as: "a",
            href: o,
            rel: "noreferrer noopener",
            target: "_blank"
        } : {
            as: "button",
            type: "button"
        },
        background: {
            base: "profileAction",
            ...s ? {} : {
                hover: "profileActionHover"
            }
        },
        borderRadius: "menuButton",
        boxShadow: "profileDetailsAction",
        className: Ce({
            active: "shrinkSm",
            hover: s ? void 0 : "grow"
        }),
        display: "flex",
        onClick: e,
        padding: s ? "6" : "8",
        style: {
            willChange: "transform"
        },
        testId: r,
        transition: "default",
        width: "full"
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1",
        justifyContent: "center",
        paddingTop: "2",
        width: "full"
    }, g.createElement(x, {
        color: "modalText",
        height: "max"
    }, t), g.createElement(x, null, g.createElement(D, {
        color: "modalText",
        size: s ? "12" : "13",
        weight: "semibold"
    }, n))))
}

function EA({
    address: e,
    ensAvatar: t,
    ensName: n,
    balance: r,
    onClose: o,
    onDisconnect: s
}) {
    const i = I.useContext(dc),
        [a, c] = I.useState(!1),
        l = I.useCallback(() => {
            e && (navigator.clipboard.writeText(e), c(!0))
        }, [e]);
    if (I.useEffect(() => {
            if (a) {
                const b = setTimeout(() => {
                    c(!1)
                }, 1500);
                return () => clearTimeout(b)
            }
        }, [a]), !e) return null;
    const u = n ? Vp(n) : Qp(e),
        f = r ? .formatted,
        d = f ? Hp(parseFloat(f)) : void 0,
        h = "rk_profile_title",
        p = Ee(),
        {
            i18n: m
        } = I.useContext(pe);
    return g.createElement(g.Fragment, null, g.createElement(x, {
        display: "flex",
        flexDirection: "column"
    }, g.createElement(x, {
        background: "profileForeground",
        padding: "16"
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: p ? "16" : "12",
        justifyContent: "center",
        margin: "8",
        style: {
            textAlign: "center"
        }
    }, g.createElement(x, {
        style: {
            position: "absolute",
            right: 16,
            top: 16,
            willChange: "transform"
        }
    }, g.createElement(Jt, {
        onClose: o
    })), " ", g.createElement(x, {
        marginTop: p ? "24" : "0"
    }, g.createElement(z2, {
        address: e,
        imageUrl: t,
        size: p ? 82 : 74
    })), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: p ? "4" : "0",
        textAlign: "center"
    }, g.createElement(x, {
        textAlign: "center"
    }, g.createElement(D, {
        as: "h1",
        color: "modalText",
        id: h,
        size: p ? "20" : "18",
        weight: "heavy"
    }, u)), !!r && g.createElement(x, {
        textAlign: "center"
    }, g.createElement(D, {
        as: "h1",
        color: "modalTextSecondary",
        id: h,
        size: p ? "16" : "14",
        weight: "semibold"
    }, d, " ", r.symbol)))), g.createElement(x, {
        display: "flex",
        flexDirection: "row",
        gap: "8",
        margin: "2",
        marginTop: "16"
    }, g.createElement(uu, {
        action: l,
        icon: a ? g.createElement(fA, null) : g.createElement(hA, null),
        label: a ? m.t("profile.copy_address.copied") : m.t("profile.copy_address.label")
    }), g.createElement(uu, {
        action: s,
        icon: g.createElement(pA, null),
        label: m.t("profile.disconnect.label"),
        testId: "disconnect-button"
    }))), i && g.createElement(g.Fragment, null, g.createElement(x, {
        background: "generalBorder",
        height: "1",
        marginTop: "-1"
    }), g.createElement(x, null, g.createElement(CA, {
        address: e
    })))))
}

function AA({
    onClose: e,
    open: t
}) {
    const {
        address: n
    } = Se(), {
        balance: r,
        ensAvatar: o,
        ensName: s
    } = Bp({
        address: n,
        includeBalance: t
    }), {
        disconnect: i
    } = $a();
    if (!n) return null;
    const a = "rk_account_modal_title";
    return g.createElement(g.Fragment, null, n && g.createElement(ko, {
        onClose: e,
        open: t,
        titleId: a
    }, g.createElement(Bo, {
        bottomSheetOnMobile: !0,
        padding: "0"
    }, g.createElement(EA, {
        address: n,
        ensAvatar: o,
        ensName: s,
        balance: r,
        onClose: e,
        onDisconnect: i
    }))))
}
var xA = ({
        size: e
    }) => g.createElement("svg", {
        fill: "none",
        height: e,
        viewBox: "0 0 28 28",
        width: e,
        xmlns: "http://www.w3.org/2000/svg"
    }, g.createElement("title", null, "Disconnect"), g.createElement("path", {
        d: "M6.742 22.195h8.367c1.774 0 2.743-.968 2.743-2.758V16.11h-2.016v3.11c0 .625-.305.96-.969.96H6.984c-.664 0-.968-.335-.968-.96V7.984c0-.632.304-.968.968-.968h7.883c.664 0 .969.336.969.968v3.133h2.016v-3.36c0-1.78-.97-2.757-2.743-2.757H6.742C4.97 5 4 5.977 4 7.758v11.68c0 1.789.969 2.757 2.742 2.757Zm5.438-7.703h7.601l1.149-.07-.602.406-1.008.938a.816.816 0 0 0-.258.593c0 .407.313.782.758.782.227 0 .39-.086.547-.243l2.492-2.593c.235-.235.313-.47.313-.711 0-.242-.078-.477-.313-.719l-2.492-2.586c-.156-.156-.32-.25-.547-.25-.445 0-.758.367-.758.781 0 .227.094.446.258.594l1.008.945.602.407-1.149-.079H12.18a.904.904 0 0 0 0 1.805Z",
        fill: "currentColor"
    })),
    IA = "v9horb0",
    gc = g.forwardRef(({
        children: e,
        currentlySelected: t = !1,
        onClick: n,
        testId: r,
        ...o
    }, s) => {
        const i = Ee();
        return g.createElement(x, {
            as: "button",
            borderRadius: "menuButton",
            disabled: t,
            display: "flex",
            onClick: n,
            ref: s,
            testId: r,
            type: "button"
        }, g.createElement(x, {
            borderRadius: "menuButton",
            className: [i ? IA : void 0, !t && Ce({
                active: "shrink"
            })],
            padding: i ? "8" : "6",
            transition: "default",
            width: "full",
            ...t ? {
                background: "accentColor",
                borderColor: "selectedOptionBorder",
                borderStyle: "solid",
                borderWidth: "1",
                boxShadow: "selectedOption",
                color: "accentColorForeground"
            } : {
                background: {
                    hover: "menuItemBackground"
                },
                color: "modalText",
                transition: "default"
            },
            ...o
        }, e))
    });
gc.displayName = "MenuButton";
var kA = ({
        chainId: e,
        currentChainId: t,
        switchChain: n,
        chainIconSize: r,
        isLoading: o,
        src: s,
        name: i,
        iconBackground: a,
        idx: c
    }) => {
        const l = Ee(),
            {
                i18n: u
            } = I.useContext(pe),
            f = Mn(),
            d = t === e;
        return g.createElement(I.Fragment, null, g.createElement(gc, {
            currentlySelected: d,
            onClick: d ? void 0 : () => n({
                chainId: e
            }),
            testId: `chain-option-${e}`
        }, g.createElement(x, {
            fontFamily: "body",
            fontSize: "16",
            fontWeight: "bold"
        }, g.createElement(x, {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }, g.createElement(x, {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: "4",
            height: r
        }, s && g.createElement(x, {
            height: "full",
            marginRight: "8"
        }, g.createElement(ye, {
            alt: i,
            background: a,
            borderRadius: "full",
            height: r,
            src: s,
            width: r,
            testId: `chain-option-${e}-icon`
        })), g.createElement("div", null, i ? ? i)), d && g.createElement(x, {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            marginRight: "6"
        }, g.createElement(D, {
            color: "accentColorForeground",
            size: "14",
            weight: "medium"
        }, u.t("chains.connected")), g.createElement(x, {
            background: "connectionIndicator",
            borderColor: "selectedOptionBorder",
            borderRadius: "full",
            borderStyle: "solid",
            borderWidth: "1",
            height: "8",
            marginLeft: "8",
            width: "8"
        })), o && g.createElement(x, {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            marginRight: "6"
        }, g.createElement(D, {
            color: "modalText",
            size: "14",
            weight: "medium"
        }, u.t("chains.confirm")), g.createElement(x, {
            background: "standby",
            borderRadius: "full",
            height: "8",
            marginLeft: "8",
            width: "8"
        }))))), l && c < f.length - 1 && g.createElement(x, {
            background: "generalBorderDim",
            height: "1",
            marginX: "8"
        }))
    },
    BA = kA,
    jA = "_18dqw9x0",
    SA = "_18dqw9x1";

function PA({
    onClose: e,
    open: t
}) {
    const {
        chainId: n
    } = Se(), {
        chains: r
    } = he(), [o, s] = I.useState(null), {
        switchChain: i
    } = S6({
        mutation: {
            onMutate: ({
                chainId: p
            }) => {
                s(p)
            },
            onSuccess: () => {
                o && s(null)
            },
            onError: () => {
                o && s(null)
            },
            onSettled: () => {
                e()
            }
        }
    }), {
        i18n: a
    } = I.useContext(pe), {
        disconnect: c
    } = $a(), l = "rk_chain_modal_title", u = Ee(), f = r.some(p => p.id === n), d = u ? "36" : "28", h = Mn();
    return n ? g.createElement(ko, {
        onClose: e,
        open: t,
        titleId: l
    }, g.createElement(Bo, {
        bottomSheetOnMobile: !0,
        paddingBottom: "0"
    }, g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "14"
    }, g.createElement(x, {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }, u && g.createElement(x, {
        width: "30"
    }), g.createElement(x, {
        paddingBottom: "0",
        paddingLeft: "8",
        paddingTop: "4"
    }, g.createElement(D, {
        as: "h1",
        color: "modalText",
        id: l,
        size: u ? "20" : "18",
        weight: "heavy"
    }, a.t("chains.title"))), g.createElement(Jt, {
        onClose: e
    })), !f && g.createElement(x, {
        marginX: "8",
        textAlign: u ? "center" : "left"
    }, g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        weight: "medium"
    }, a.t("chains.wrong_network"))), g.createElement(x, {
        className: u ? SA : jA,
        display: "flex",
        flexDirection: "column",
        gap: "4",
        padding: "2",
        paddingBottom: "16"
    }, h.map(({
        iconBackground: p,
        iconUrl: m,
        id: b,
        name: w
    }, v) => g.createElement(BA, {
        key: b,
        chainId: b,
        currentChainId: n,
        switchChain: i,
        chainIconSize: d,
        isLoading: o === b,
        src: m,
        name: w,
        iconBackground: p,
        idx: v
    })), !f && g.createElement(g.Fragment, null, g.createElement(x, {
        background: "generalBorderDim",
        height: "1",
        marginX: "8"
    }), g.createElement(gc, {
        onClick: () => c(),
        testId: "chain-option-disconnect"
    }, g.createElement(x, {
        color: "error",
        fontFamily: "body",
        fontSize: "16",
        fontWeight: "bold"
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: "4",
        height: d
    }, g.createElement(x, {
        alignItems: "center",
        color: "error",
        height: d,
        justifyContent: "center",
        marginRight: "8"
    }, g.createElement(xA, {
        size: Number(d)
    })), g.createElement("div", null, a.t("chains.disconnect"))))))))))) : null
}

function TA(e, t) {
    const n = {};
    for (const r of e) {
        const o = t(r);
        o && (n[o] || (n[o] = []), n[o].push(r))
    }
    return n
}
var bc = ({
        children: e,
        href: t
    }) => g.createElement(x, {
        as: "a",
        color: "accentColor",
        href: t,
        rel: "noreferrer",
        target: "_blank"
    }, e),
    yc = ({
        children: e
    }) => g.createElement(D, {
        color: "modalTextSecondary",
        size: "12",
        weight: "medium"
    }, e);

function du({
    compactModeEnabled: e = !1,
    getWallet: t
}) {
    const {
        disclaimer: n,
        learnMoreUrl: r
    } = I.useContext(Or), {
        i18n: o
    } = I.useContext(pe);
    return g.createElement(g.Fragment, null, g.createElement(x, {
        alignItems: "center",
        color: "accentColor",
        display: "flex",
        flexDirection: "column",
        height: "full",
        justifyContent: "space-around"
    }, g.createElement(x, {
        marginBottom: "10"
    }, !e && g.createElement(D, {
        color: "modalText",
        size: "18",
        weight: "heavy"
    }, o.t("intro.title"))), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "32",
        justifyContent: "center",
        marginY: "20",
        style: {
            maxWidth: 312
        }
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: "16"
    }, g.createElement(x, {
        borderRadius: "6",
        height: "48",
        minWidth: "48",
        width: "48"
    }, g.createElement(HE, null)), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "4"
    }, g.createElement(D, {
        color: "modalText",
        size: "14",
        weight: "bold"
    }, o.t("intro.digital_asset.title")), g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        weight: "medium"
    }, o.t("intro.digital_asset.description")))), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: "16"
    }, g.createElement(x, {
        borderRadius: "6",
        height: "48",
        minWidth: "48",
        width: "48"
    }, g.createElement(VE, null)), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "4"
    }, g.createElement(D, {
        color: "modalText",
        size: "14",
        weight: "bold"
    }, o.t("intro.login.title")), g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        weight: "medium"
    }, o.t("intro.login.description"))))), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "12",
        justifyContent: "center",
        margin: "10"
    }, g.createElement(je, {
        label: o.t("intro.get.label"),
        onClick: t
    }), g.createElement(x, {
        as: "a",
        className: Ce({
            active: "shrink",
            hover: "grow"
        }),
        display: "block",
        href: r,
        paddingX: "12",
        paddingY: "4",
        rel: "noreferrer",
        style: {
            willChange: "transform"
        },
        target: "_blank",
        transition: "default"
    }, g.createElement(D, {
        color: "accentColor",
        size: "14",
        weight: "bold"
    }, o.t("intro.learn_more.label")))), n && !e && g.createElement(x, {
        marginBottom: "8",
        marginTop: "12",
        textAlign: "center"
    }, g.createElement(n, {
        Link: bc,
        Text: yc
    }))))
}
var Kp = () => g.createElement("svg", {
        fill: "none",
        height: "17",
        viewBox: "0 0 11 17",
        width: "11",
        xmlns: "http://www.w3.org/2000/svg"
    }, g.createElement("title", null, "Back"), g.createElement("path", {
        d: "M0.99707 8.6543C0.99707 9.08496 1.15527 9.44531 1.51562 9.79688L8.16016 16.3096C8.43262 16.5732 8.74902 16.7051 9.13574 16.7051C9.90918 16.7051 10.5508 16.0811 10.5508 15.3076C10.5508 14.9121 10.3838 14.5605 10.0938 14.2705L4.30176 8.64551L10.0938 3.0293C10.3838 2.74805 10.5508 2.3877 10.5508 2.00098C10.5508 1.23633 9.90918 0.603516 9.13574 0.603516C8.74902 0.603516 8.43262 0.735352 8.16016 0.999023L1.51562 7.51172C1.15527 7.85449 1.00586 8.21484 0.99707 8.6543Z",
        fill: "currentColor"
    })),
    OA = () => g.createElement("svg", {
        fill: "none",
        height: "12",
        viewBox: "0 0 8 12",
        width: "8",
        xmlns: "http://www.w3.org/2000/svg"
    }, g.createElement("title", null, "Info"), g.createElement("path", {
        d: "M3.64258 7.99609C4.19336 7.99609 4.5625 7.73828 4.68555 7.24609C4.69141 7.21094 4.70312 7.16406 4.70898 7.13477C4.80859 6.60742 5.05469 6.35547 6.04492 5.76367C7.14648 5.10156 7.67969 4.3457 7.67969 3.24414C7.67969 1.39844 6.17383 0.255859 3.95898 0.255859C2.32422 0.255859 1.05859 0.894531 0.548828 1.86719C0.396484 2.14844 0.320312 2.44727 0.320312 2.74023C0.314453 3.37305 0.742188 3.79492 1.42188 3.79492C1.91406 3.79492 2.33594 3.54883 2.53516 3.11523C2.78711 2.47656 3.23242 2.21289 3.83594 2.21289C4.55664 2.21289 5.10742 2.65234 5.10742 3.29102C5.10742 3.9707 4.7793 4.29883 3.81836 4.87891C3.02148 5.36523 2.50586 5.92773 2.50586 6.76562V6.90039C2.50586 7.55664 2.96289 7.99609 3.64258 7.99609ZM3.67188 11.4473C4.42773 11.4473 5.04297 10.8672 5.04297 10.1406C5.04297 9.41406 4.42773 8.83984 3.67188 8.83984C2.91602 8.83984 2.30664 9.41406 2.30664 10.1406C2.30664 10.8672 2.91602 11.4473 3.67188 11.4473Z",
        fill: "currentColor"
    })),
    MA = ({
        "aria-label": e = "Info",
        onClick: t
    }) => {
        const n = Ee();
        return g.createElement(x, {
            alignItems: "center",
            "aria-label": e,
            as: "button",
            background: "closeButtonBackground",
            borderColor: "actionButtonBorder",
            borderRadius: "full",
            borderStyle: "solid",
            borderWidth: n ? "0" : "1",
            className: Ce({
                active: "shrinkSm",
                hover: "growLg"
            }),
            color: "closeButton",
            display: "flex",
            height: n ? "30" : "28",
            justifyContent: "center",
            onClick: t,
            style: {
                willChange: "transform"
            },
            transition: "default",
            type: "button",
            width: n ? "30" : "28"
        }, g.createElement(OA, null))
    },
    Jp = e => {
        const t = I.useRef(null),
            n = I.useContext(Mp),
            r = cc(e);
        return I.useEffect(() => {
            if (n && t.current && r) return _A(t.current, r)
        }, [n, r]), t
    },
    RA = () => {
        const e = "_rk_coolMode",
            t = document.getElementById(e);
        if (t) return t;
        const n = document.createElement("div");
        return n.setAttribute("id", e), n.setAttribute("style", ["overflow:hidden", "position:fixed", "height:100%", "top:0", "left:0", "right:0", "bottom:0", "pointer-events:none", "z-index:2147483647"].join(";")), document.body.appendChild(n), n
    },
    fu = 0;

function _A(e, t) {
    fu++;
    const n = [15, 20, 25, 35, 45],
        r = 35;
    let o = [],
        s = !1,
        i = 0,
        a = 0;
    const c = RA();

    function l() {
        const y = n[Math.floor(Math.random() * n.length)],
            A = Math.random() * 10,
            E = Math.random() * 25,
            k = Math.random() * 360,
            B = Math.random() * 35 * (Math.random() <= .5 ? -1 : 1),
            S = a - y / 2,
            P = i - y / 2,
            R = Math.random() <= .5 ? -1 : 1,
            O = document.createElement("div");
        O.innerHTML = `<img src="${t}" width="${y}" height="${y}" style="border-radius: 25%">`, O.setAttribute("style", ["position:absolute", "will-change:transform", `top:${S}px`, `left:${P}px`, `transform:rotate(${k}deg)`].join(";")), c.appendChild(O), o.push({
            direction: R,
            element: O,
            left: P,
            size: y,
            speedHorz: A,
            speedUp: E,
            spinSpeed: B,
            spinVal: k,
            top: S
        })
    }

    function u() {
        for (const y of o) y.left = y.left - y.speedHorz * y.direction, y.top = y.top - y.speedUp, y.speedUp = Math.min(y.size, y.speedUp - 1), y.spinVal = y.spinVal + y.spinSpeed, y.top >= Math.max(window.innerHeight, document.body.clientHeight) + y.size && (o = o.filter(A => A !== y), y.element.remove()), y.element.setAttribute("style", ["position:absolute", "will-change:transform", `top:${y.top}px`, `left:${y.left}px`, `transform:rotate(${y.spinVal}deg)`].join(";"))
    }
    let f;

    function d() {
        s && o.length < r && l(), u(), f = requestAnimationFrame(d)
    }
    d();
    const h = "ontouchstart" in window || navigator.msMaxTouchPoints,
        p = h ? "touchstart" : "mousedown",
        m = h ? "touchend" : "mouseup",
        b = h ? "touchmove" : "mousemove",
        w = y => {
            "touches" in y ? (i = y.touches ? .[0].clientX, a = y.touches ? .[0].clientY) : (i = y.clientX, a = y.clientY)
        },
        v = y => {
            w(y), s = !0
        },
        C = () => {
            s = !1
        };
    return e.addEventListener(b, w, {
        passive: !1
    }), e.addEventListener(p, v), e.addEventListener(m, C), e.addEventListener("mouseleave", C), () => {
        e.removeEventListener(b, w), e.removeEventListener(p, v), e.removeEventListener(m, C), e.removeEventListener("mouseleave", C);
        const y = setInterval(() => {
            f && o.length === 0 && (cancelAnimationFrame(f), clearInterval(y), --fu === 0 && c.remove())
        }, 500)
    }
}
var DA = "g5kl0l0",
    Zp = ({
        as: e = "button",
        currentlySelected: t = !1,
        iconBackground: n,
        iconUrl: r,
        name: o,
        onClick: s,
        ready: i,
        recent: a,
        testId: c,
        isRainbowKitConnector: l,
        ...u
    }) => {
        const f = Jp(r),
            [d, h] = I.useState(!1),
            {
                i18n: p
            } = I.useContext(pe);
        return g.createElement(x, {
            display: "flex",
            flexDirection: "column",
            onMouseEnter: () => h(!0),
            onMouseLeave: () => h(!1),
            ref: f
        }, g.createElement(x, {
            as: e,
            borderRadius: "menuButton",
            borderStyle: "solid",
            borderWidth: "1",
            className: t ? void 0 : [DA, Ce({
                active: "shrink"
            })],
            disabled: t,
            onClick: s,
            padding: "5",
            style: {
                willChange: "transform"
            },
            testId: c,
            transition: "default",
            width: "full",
            ...t ? {
                background: "accentColor",
                borderColor: "selectedOptionBorder",
                boxShadow: "selectedWallet"
            } : {
                background: {
                    hover: "menuItemBackground"
                }
            },
            ...u
        }, g.createElement(x, {
            color: t ? "accentColorForeground" : "modalText",
            disabled: !i,
            fontFamily: "body",
            fontSize: "16",
            fontWeight: "bold",
            transition: "default"
        }, g.createElement(x, {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: "12"
        }, g.createElement(ye, {
            background: n,
            ...!d && l ? {
                borderColor: "actionButtonBorder"
            } : {},
            useAsImage: !l,
            borderRadius: "6",
            height: "28",
            src: r,
            width: "28"
        }), g.createElement(x, null, g.createElement(x, {
            style: {
                marginTop: a ? -2 : void 0
            },
            maxWidth: "200"
        }, o), a && g.createElement(D, {
            color: t ? "accentColorForeground" : "accentColor",
            size: "12",
            style: {
                lineHeight: 1,
                marginTop: -1
            },
            weight: "medium"
        }, p.t("connect.recent")))))))
    };
Zp.displayName = "ModalSelection";
var NA = "rk-latest-id";

function FA(e) {
    localStorage.setItem(NA, e)
}
var Zs = (e, t = 1) => {
        let n = e.replace("#", "");
        n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
        const r = parseInt(n.substring(0, 2), 16),
            o = parseInt(n.substring(2, 4), 16),
            s = parseInt(n.substring(4, 6), 16);
        return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${s},${t})`
    },
    LA = e => e ? [Zs(e, .2), Zs(e, .14), Zs(e, .1)] : null,
    UA = e => /^#([0-9a-f]{3}){1,2}$/i.test(e),
    Yp = async () => (await _(() =>
        import ("./connect-MR6XDLIE-281cd6f6.js"), [])).default,
    zA = () => at(Yp),
    WA = () => g.createElement(ye, {
        background: "#515a70",
        borderColor: "generalBorder",
        borderRadius: "10",
        height: "48",
        src: Yp,
        width: "48"
    }),
    Xp = async () => (await _(() =>
        import ("./create-X4WFHLCW-fac25a4f.js"), [])).default,
    em = () => at(Xp),
    qA = () => g.createElement(ye, {
        background: "#e3a5e8",
        borderColor: "generalBorder",
        borderRadius: "10",
        height: "48",
        src: Xp,
        width: "48"
    }),
    tm = async () => (await _(() =>
        import ("./refresh-HJGJRASX-ffa7bd58.js"), [])).default,
    HA = () => at(tm),
    QA = () => g.createElement(ye, {
        background: "#515a70",
        borderColor: "generalBorder",
        borderRadius: "10",
        height: "48",
        src: tm,
        width: "48"
    }),
    nm = async () => (await _(() =>
        import ("./scan-DEOT2M37-4394e524.js"), [])).default,
    rm = () => at(nm),
    VA = () => g.createElement(ye, {
        background: "#515a70",
        borderColor: "generalBorder",
        borderRadius: "10",
        height: "48",
        src: nm,
        width: "48"
    }),
    $A = "_1vwt0cg0",
    GA = "_1vwt0cg2 ju367v7a ju367v7v",
    KA = "_1vwt0cg3",
    JA = "_1vwt0cg4",
    ZA = (e, t) => {
        const n = Array.prototype.slice.call(Pr.create(e, {
                errorCorrectionLevel: t
            }).modules.data, 0),
            r = Math.sqrt(n.length);
        return n.reduce((o, s, i) => (i % r === 0 ? o.push([s]) : o[o.length - 1].push(s)) && o, [])
    };

function om({
    ecl: e = "M",
    logoBackground: t,
    logoMargin: n = 10,
    logoSize: r = 50,
    logoUrl: o,
    size: s = 200,
    uri: i
}) {
    const a = "20",
        c = s - parseInt(a, 10) * 2,
        l = I.useMemo(() => {
            const d = [],
                h = ZA(i, e),
                p = c / h.length;
            [{
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 0
            }, {
                x: 0,
                y: 1
            }].forEach(({
                x: C,
                y
            }) => {
                const A = (h.length - 7) * p * C,
                    E = (h.length - 7) * p * y;
                for (let k = 0; k < 3; k++) d.push(g.createElement("rect", {
                    fill: k % 2 !== 0 ? "white" : "black",
                    height: p * (7 - k * 2),
                    key: `${k}-${C}-${y}`,
                    rx: (k - 2) * -5 + (k === 0 ? 2 : 0),
                    ry: (k - 2) * -5 + (k === 0 ? 2 : 0),
                    width: p * (7 - k * 2),
                    x: A + p * k,
                    y: E + p * k
                }))
            });
            const b = Math.floor((r + 25) / p),
                w = h.length / 2 - b / 2,
                v = h.length / 2 + b / 2 - 1;
            return h.forEach((C, y) => {
                C.forEach((A, E) => {
                    h[y][E] && (y < 7 && E < 7 || y > h.length - 8 && E < 7 || y < 7 && E > h.length - 8 || y > w && y < v && E > w && E < v || d.push(g.createElement("circle", {
                        cx: y * p + p / 2,
                        cy: E * p + p / 2,
                        fill: "black",
                        key: `circle-${y}-${E}`,
                        r: p / 3
                    })))
                })
            }), d
        }, [e, r, c, i]),
        u = c / 2 - r / 2,
        f = r + n * 2;
    return g.createElement(x, {
        borderColor: "generalBorder",
        borderRadius: "menuButton",
        borderStyle: "solid",
        borderWidth: "1",
        className: $A,
        padding: a,
        width: "max"
    }, g.createElement(x, {
        style: {
            height: c,
            userSelect: "none",
            width: c
        },
        userSelect: "none"
    }, g.createElement(x, {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        style: {
            height: 0,
            top: u,
            width: c
        },
        width: "full"
    }, g.createElement(ye, {
        background: t,
        borderColor: {
            custom: "rgba(0, 0, 0, 0.06)"
        },
        borderRadius: "13",
        height: r,
        src: o,
        width: r
    })), g.createElement("svg", {
        height: c,
        style: {
            all: "revert"
        },
        width: c
    }, g.createElement("title", null, "QR Code"), g.createElement("defs", null, g.createElement("clipPath", {
        id: "clip-wrapper"
    }, g.createElement("rect", {
        height: f,
        width: f
    })), g.createElement("clipPath", {
        id: "clip-logo"
    }, g.createElement("rect", {
        height: r,
        width: r
    }))), g.createElement("rect", {
        fill: "transparent",
        height: c,
        width: c
    }), l)))
}
var sm = async () => {
        switch (hc()) {
            case "Arc":
                return (await _(() =>
                    import ("./Arc-R3PUWRPJ-89f7fe18.js"), [])).default;
            case "Brave":
                return (await _(() =>
                    import ("./Brave-24BM36UM-c9f6bef2.js"), [])).default;
            case "Chrome":
                return (await _(() =>
                    import ("./Chrome-TLI42HDP-6c3a13ef.js"), [])).default;
            case "Edge":
                return (await _(() =>
                    import ("./Edge-AZ34LAFM-a633a5f6.js"), [])).default;
            case "Firefox":
                return (await _(() =>
                    import ("./Firefox-ZDK7RHKK-5830e666.js"), [])).default;
            case "Opera":
                return (await _(() =>
                    import ("./Opera-BKMCKUXC-42eb5773.js"), [])).default;
            case "Safari":
                return (await _(() =>
                    import ("./Safari-PXQIVS6N-014ec84c.js"), [])).default;
            default:
                return (await _(() =>
                    import ("./Browser-4R4QKTV2-fb41f584.js"), [])).default
        }
    },
    YA = () => at(sm),
    im = async () => {
        switch (mc()) {
            case "Windows":
                return (await _(() =>
                    import ("./Windows-GTAT3OTE-26307651.js"), [])).default;
            case "macOS":
                return (await _(() =>
                    import ("./Macos-5QL4JBJE-2ccc70a7.js"), [])).default;
            case "Linux":
                return (await _(() =>
                    import ("./Linux-VYP66PDO-822e33c6.js"), [])).default;
            default:
                return (await _(() =>
                    import ("./Linux-VYP66PDO-822e33c6.js"), [])).default
        }
    },
    XA = () => at(im);

function ex({
    getWalletDownload: e,
    compactModeEnabled: t
}) {
    const r = hs().filter(s => s.isRainbowKitConnector).splice(0, 5),
        {
            i18n: o
        } = I.useContext(pe);
    return g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "full",
        marginTop: "18",
        width: "full"
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "28",
        height: "full",
        width: "full"
    }, r ? .filter(s => s.extensionDownloadUrl || s.desktopDownloadUrl || s.qrCode && s.downloadUrls ? .qrCode).map(s => {
        const {
            downloadUrls: i,
            iconBackground: a,
            iconUrl: c,
            id: l,
            name: u,
            qrCode: f
        } = s, d = i ? .qrCode && f, h = !!s.extensionDownloadUrl, p = i ? .qrCode && h, m = i ? .qrCode && !!s.desktopDownloadUrl;
        return g.createElement(x, {
            alignItems: "center",
            display: "flex",
            gap: "16",
            justifyContent: "space-between",
            key: s.id,
            width: "full"
        }, g.createElement(x, {
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: "16"
        }, g.createElement(ye, {
            background: a,
            borderColor: "actionButtonBorder",
            borderRadius: "10",
            height: "48",
            src: c,
            width: "48"
        }), g.createElement(x, {
            display: "flex",
            flexDirection: "column",
            gap: "2"
        }, g.createElement(D, {
            color: "modalText",
            size: "14",
            weight: "bold"
        }, u), g.createElement(D, {
            color: "modalTextSecondary",
            size: "14",
            weight: "medium"
        }, p ? o.t("get.mobile_and_extension.description") : m ? o.t("get.mobile_and_desktop.description") : d ? o.t("get.mobile.description") : h ? o.t("get.extension.description") : null))), g.createElement(x, {
            display: "flex",
            flexDirection: "column",
            gap: "4"
        }, g.createElement(je, {
            label: o.t("get.action.label"),
            onClick: () => e(l),
            type: "secondary"
        })))
    })), g.createElement(x, {
        alignItems: "center",
        borderRadius: "10",
        display: "flex",
        flexDirection: "column",
        gap: "8",
        justifyContent: "space-between",
        marginBottom: "4",
        paddingY: "8",
        style: {
            maxWidth: 275,
            textAlign: "center"
        }
    }, g.createElement(D, {
        color: "modalText",
        size: "14",
        weight: "bold"
    }, o.t("get.looking_for.title")), g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        weight: "medium"
    }, t ? o.t("get.looking_for.desktop.compact_description") : o.t("get.looking_for.desktop.wide_description"))))
}
var Ys = "44";

function tx({
    changeWalletStep: e,
    compactModeEnabled: t,
    connectionError: n,
    onClose: r,
    qrCodeUri: o,
    reconnect: s,
    wallet: i
}) {
    const {
        downloadUrls: a,
        iconBackground: c,
        iconUrl: l,
        name: u,
        qrCode: f,
        ready: d,
        showWalletConnectModal: h,
        getDesktopUri: p
    } = i, m = !!p, b = fc(), {
        i18n: w
    } = I.useContext(pe), v = !!i.extensionDownloadUrl, C = a ? .qrCode && v, y = a ? .qrCode && !!i.desktopDownloadUrl, A = f && o, E = async () => {
        const P = await p ? .();
        window.open(P, b ? "_blank" : "_self")
    }, k = h ? {
        description: t ? w.t("connect.walletconnect.description.compact") : w.t("connect.walletconnect.description.full"),
        label: w.t("connect.walletconnect.open.label"),
        onClick: () => {
            r(), h()
        }
    } : A ? {
        description: w.t("connect.secondary_action.get.description", {
            wallet: u
        }),
        label: w.t("connect.secondary_action.get.label"),
        onClick: () => e(C || y ? "DOWNLOAD_OPTIONS" : "DOWNLOAD")
    } : null, {
        width: B
    } = Rp(), S = B && B < 768;
    return I.useEffect(() => {
        YA(), XA()
    }, []), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        height: "full",
        width: "full"
    }, A ? g.createElement(x, {
        alignItems: "center",
        display: "flex",
        height: "full",
        justifyContent: "center"
    }, g.createElement(om, {
        logoBackground: c,
        logoSize: t ? 60 : 72,
        logoUrl: l,
        size: t ? 318 : S ? Math.max(280, Math.min(B - 308, 382)) : 382,
        uri: o
    })) : g.createElement(x, {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        style: {
            flexGrow: 1
        }
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8"
    }, g.createElement(x, {
        borderRadius: "10",
        height: Ys,
        overflow: "hidden"
    }, g.createElement(ye, {
        useAsImage: !i.isRainbowKitConnector,
        height: Ys,
        src: l,
        width: Ys
    })), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "4",
        paddingX: "32",
        style: {
            textAlign: "center"
        }
    }, g.createElement(D, {
        color: "modalText",
        size: "18",
        weight: "bold"
    }, d ? w.t("connect.status.opening", {
        wallet: u
    }) : v ? w.t("connect.status.not_installed", {
        wallet: u
    }) : w.t("connect.status.not_available", {
        wallet: u
    })), !d && v ? g.createElement(x, {
        paddingTop: "20"
    }, g.createElement(je, {
        href: i.extensionDownloadUrl,
        label: w.t("connect.secondary_action.install.label"),
        type: "secondary"
    })) : null, d && !A && g.createElement(g.Fragment, null, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }, g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        textAlign: "center",
        weight: "medium"
    }, w.t("connect.status.confirm"))), g.createElement(x, {
        alignItems: "center",
        color: "modalText",
        display: "flex",
        flexDirection: "row",
        height: "32",
        marginTop: "8"
    }, n ? g.createElement(je, {
        label: w.t("connect.secondary_action.retry.label"),
        onClick: async () => {
            m && E(), s(i)
        }
    }) : g.createElement(x, {
        color: "modalTextSecondary"
    }, g.createElement(br, null))))))), g.createElement(x, {
        alignItems: "center",
        borderRadius: "10",
        display: "flex",
        flexDirection: "row",
        gap: "8",
        height: "28",
        justifyContent: "space-between",
        marginTop: "12"
    }, d && k && g.createElement(g.Fragment, null, g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        weight: "medium"
    }, k.description), g.createElement(je, {
        label: k.label,
        onClick: k.onClick,
        type: "secondary"
    }))))
}
var Xs = ({
    actionLabel: e,
    description: t,
    iconAccent: n,
    iconBackground: r,
    iconUrl: o,
    isCompact: s,
    onAction: i,
    title: a,
    url: c,
    variant: l
}) => {
    const u = l === "browser",
        f = !u && n && LA(n);
    return g.createElement(x, {
        alignItems: "center",
        borderRadius: "13",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        paddingX: s ? "18" : "44",
        position: "relative",
        style: {
            flex: 1,
            isolation: "isolate"
        },
        width: "full"
    }, g.createElement(x, {
        borderColor: "actionButtonBorder",
        borderRadius: "13",
        borderStyle: "solid",
        borderWidth: "1",
        style: {
            bottom: "0",
            left: "0",
            position: "absolute",
            right: "0",
            top: "0",
            zIndex: 1
        }
    }), u && g.createElement(x, {
        background: "downloadTopCardBackground",
        height: "full",
        position: "absolute",
        style: {
            zIndex: 0
        },
        width: "full"
    }, g.createElement(x, {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        style: {
            bottom: "0",
            filter: "blur(20px)",
            left: "0",
            position: "absolute",
            right: "0",
            top: "0",
            transform: "translate3d(0, 0, 0)"
        }
    }, g.createElement(x, {
        style: {
            filter: "blur(100px)",
            marginLeft: -27,
            marginTop: -20,
            opacity: .6,
            transform: "translate3d(0, 0, 0)"
        }
    }, g.createElement(ye, {
        borderRadius: "full",
        height: "200",
        src: o,
        width: "200"
    })), g.createElement(x, {
        style: {
            filter: "blur(100px)",
            marginRight: 0,
            marginTop: 105,
            opacity: .6,
            overflow: "auto",
            transform: "translate3d(0, 0, 0)"
        }
    }, g.createElement(ye, {
        borderRadius: "full",
        height: "200",
        src: o,
        width: "200"
    })))), !u && f && g.createElement(x, {
        background: "downloadBottomCardBackground",
        style: {
            bottom: "0",
            left: "0",
            position: "absolute",
            right: "0",
            top: "0"
        }
    }, g.createElement(x, {
        position: "absolute",
        style: {
            background: `radial-gradient(50% 50% at 50% 50%, ${f[0]} 0%, ${f[1]} 25%, rgba(0,0,0,0) 100%)`,
            height: 564,
            left: -215,
            top: -197,
            transform: "translate3d(0, 0, 0)",
            width: 564
        }
    }), g.createElement(x, {
        position: "absolute",
        style: {
            background: `radial-gradient(50% 50% at 50% 50%, ${f[2]} 0%, rgba(0, 0, 0, 0) 100%)`,
            height: 564,
            left: -1,
            top: -76,
            transform: "translate3d(0, 0, 0)",
            width: 564
        }
    })), g.createElement(x, {
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
        gap: "24",
        height: "max",
        justifyContent: "center",
        style: {
            zIndex: 1
        }
    }, g.createElement(x, null, g.createElement(ye, {
        height: "60",
        src: o,
        width: "60",
        ...r ? {
            background: r,
            borderColor: "generalBorder",
            borderRadius: "10"
        } : null
    })), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "4",
        style: {
            flex: 1
        },
        width: "full"
    }, g.createElement(D, {
        color: "modalText",
        size: "14",
        weight: "bold"
    }, a), g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        weight: "medium"
    }, t), g.createElement(x, {
        marginTop: "14",
        width: "max"
    }, g.createElement(je, {
        href: c,
        label: e,
        onClick: i,
        size: "medium"
    })))))
};

function nx({
    changeWalletStep: e,
    wallet: t
}) {
    const n = hc(),
        r = mc(),
        s = I.useContext(fs) === "compact",
        {
            desktop: i,
            desktopDownloadUrl: a,
            extension: c,
            extensionDownloadUrl: l,
            mobileDownloadUrl: u
        } = t,
        {
            i18n: f
        } = I.useContext(pe);
    return I.useEffect(() => {
        em(), rm(), HA(), zA()
    }, []), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "24",
        height: "full",
        marginBottom: "8",
        marginTop: "4",
        width: "full"
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8",
        height: "full",
        justifyContent: "center",
        width: "full"
    }, l && g.createElement(Xs, {
        actionLabel: f.t("get_options.extension.download.label", {
            browser: n
        }),
        description: f.t("get_options.extension.description"),
        iconUrl: sm,
        isCompact: s,
        onAction: () => e(c ? .instructions ? "INSTRUCTIONS_EXTENSION" : "CONNECT"),
        title: f.t("get_options.extension.title", {
            wallet: t.name,
            browser: n
        }),
        url: l,
        variant: "browser"
    }), a && g.createElement(Xs, {
        actionLabel: f.t("get_options.desktop.download.label", {
            platform: r
        }),
        description: f.t("get_options.desktop.description"),
        iconUrl: im,
        isCompact: s,
        onAction: () => e(i ? .instructions ? "INSTRUCTIONS_DESKTOP" : "CONNECT"),
        title: f.t("get_options.desktop.title", {
            wallet: t.name,
            platform: r
        }),
        url: a,
        variant: "desktop"
    }), u && g.createElement(Xs, {
        actionLabel: f.t("get_options.mobile.download.label", {
            wallet: t.name
        }),
        description: f.t("get_options.mobile.description"),
        iconAccent: t.iconAccent,
        iconBackground: t.iconBackground,
        iconUrl: t.iconUrl,
        isCompact: s,
        onAction: () => {
            e("DOWNLOAD")
        },
        title: f.t("get_options.mobile.title", {
            wallet: t.name
        }),
        variant: "app"
    })))
}

function rx({
    changeWalletStep: e,
    wallet: t
}) {
    const {
        downloadUrls: n,
        qrCode: r
    } = t, {
        i18n: o
    } = I.useContext(pe);
    return I.useEffect(() => {
        em(), rm()
    }, []), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "24",
        height: "full",
        width: "full"
    }, g.createElement(x, {
        style: {
            maxWidth: 220,
            textAlign: "center"
        }
    }, g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        weight: "semibold"
    }, o.t("get_mobile.description"))), g.createElement(x, {
        height: "full"
    }, n ? .qrCode ? g.createElement(om, {
        logoSize: 0,
        size: 268,
        uri: n.qrCode
    }) : null), g.createElement(x, {
        alignItems: "center",
        borderRadius: "10",
        display: "flex",
        flexDirection: "row",
        gap: "8",
        height: "34",
        justifyContent: "space-between",
        marginBottom: "12",
        paddingY: "8"
    }, g.createElement(je, {
        label: o.t("get_mobile.continue.label"),
        onClick: () => e(r ? .instructions ? "INSTRUCTIONS_MOBILE" : "CONNECT")
    })))
}
var wc = {
    connect: () => g.createElement(WA, null),
    create: () => g.createElement(qA, null),
    install: e => g.createElement(ye, {
        background: e.iconBackground,
        borderColor: "generalBorder",
        borderRadius: "10",
        height: "48",
        src: e.iconUrl,
        width: "48"
    }),
    refresh: () => g.createElement(QA, null),
    scan: () => g.createElement(VA, null)
};

function ox({
    connectWallet: e,
    wallet: t
}) {
    const {
        i18n: n
    } = I.useContext(pe);
    return g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "full",
        width: "full"
    }, g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "28",
        height: "full",
        justifyContent: "center",
        paddingY: "32",
        style: {
            maxWidth: 320
        }
    }, t ? .qrCode ? .instructions ? .steps.map((r, o) => g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: "16",
        key: o
    }, g.createElement(x, {
        borderRadius: "10",
        height: "48",
        minWidth: "48",
        overflow: "hidden",
        position: "relative",
        width: "48"
    }, wc[r.step] ? .(t)), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "4"
    }, g.createElement(D, {
        color: "modalText",
        size: "14",
        weight: "bold"
    }, n.t(r.title, void 0, {
        rawKeyIfTranslationMissing: !0
    })), g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        weight: "medium"
    }, n.t(r.description, void 0, {
        rawKeyIfTranslationMissing: !0
    })))))), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "12",
        justifyContent: "center",
        marginBottom: "16"
    }, g.createElement(je, {
        label: n.t("get_instructions.mobile.connect.label"),
        onClick: () => e(t)
    }), g.createElement(x, {
        as: "a",
        className: Ce({
            active: "shrink",
            hover: "grow"
        }),
        display: "block",
        href: t ? .qrCode ? .instructions ? .learnMoreUrl,
        paddingX: "12",
        paddingY: "4",
        rel: "noreferrer",
        style: {
            willChange: "transform"
        },
        target: "_blank",
        transition: "default"
    }, g.createElement(D, {
        color: "accentColor",
        size: "14",
        weight: "bold"
    }, n.t("get_instructions.mobile.learn_more.label")))))
}

function sx({
    wallet: e
}) {
    const {
        i18n: t
    } = I.useContext(pe);
    return g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "full",
        width: "full"
    }, g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "28",
        height: "full",
        justifyContent: "center",
        paddingY: "32",
        style: {
            maxWidth: 320
        }
    }, e ? .extension ? .instructions ? .steps.map((n, r) => g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: "16",
        key: r
    }, g.createElement(x, {
        borderRadius: "10",
        height: "48",
        minWidth: "48",
        overflow: "hidden",
        position: "relative",
        width: "48"
    }, wc[n.step] ? .(e)), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "4"
    }, g.createElement(D, {
        color: "modalText",
        size: "14",
        weight: "bold"
    }, t.t(n.title, void 0, {
        rawKeyIfTranslationMissing: !0
    })), g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        weight: "medium"
    }, t.t(n.description, void 0, {
        rawKeyIfTranslationMissing: !0
    })))))), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "12",
        justifyContent: "center",
        marginBottom: "16"
    }, g.createElement(je, {
        label: t.t("get_instructions.extension.refresh.label"),
        onClick: window.location.reload.bind(window.location)
    }), g.createElement(x, {
        as: "a",
        className: Ce({
            active: "shrink",
            hover: "grow"
        }),
        display: "block",
        href: e ? .extension ? .instructions ? .learnMoreUrl,
        paddingX: "12",
        paddingY: "4",
        rel: "noreferrer",
        style: {
            willChange: "transform"
        },
        target: "_blank",
        transition: "default"
    }, g.createElement(D, {
        color: "accentColor",
        size: "14",
        weight: "bold"
    }, t.t("get_instructions.extension.learn_more.label")))))
}

function ix({
    connectWallet: e,
    wallet: t
}) {
    const {
        i18n: n
    } = I.useContext(pe);
    return g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "full",
        width: "full"
    }, g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "28",
        height: "full",
        justifyContent: "center",
        paddingY: "32",
        style: {
            maxWidth: 320
        }
    }, t ? .desktop ? .instructions ? .steps.map((r, o) => g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: "16",
        key: o
    }, g.createElement(x, {
        borderRadius: "10",
        height: "48",
        minWidth: "48",
        overflow: "hidden",
        position: "relative",
        width: "48"
    }, wc[r.step] ? .(t)), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "4"
    }, g.createElement(D, {
        color: "modalText",
        size: "14",
        weight: "bold"
    }, n.t(r.title, void 0, {
        rawKeyIfTranslationMissing: !0
    })), g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        weight: "medium"
    }, n.t(r.description, void 0, {
        rawKeyIfTranslationMissing: !0
    })))))), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "12",
        justifyContent: "center",
        marginBottom: "16"
    }, g.createElement(je, {
        label: n.t("get_instructions.desktop.connect.label"),
        onClick: () => e(t)
    }), g.createElement(x, {
        as: "a",
        className: Ce({
            active: "shrink",
            hover: "grow"
        }),
        display: "block",
        href: t ? .desktop ? .instructions ? .learnMoreUrl,
        paddingX: "12",
        paddingY: "4",
        rel: "noreferrer",
        style: {
            willChange: "transform"
        },
        target: "_blank",
        transition: "default"
    }, g.createElement(D, {
        color: "accentColor",
        size: "14",
        weight: "bold"
    }, n.t("get_instructions.desktop.learn_more.label")))))
}

function ax({
    onClose: e
}) {
    const t = "rk_connect_title",
        [n, r] = I.useState(),
        [o, s] = I.useState(),
        [i, a] = I.useState(),
        c = !!o ? .qrCode && i,
        [l, u] = I.useState(!1),
        d = I.useContext(fs) === Rr.COMPACT,
        {
            disclaimer: h
        } = I.useContext(Or),
        {
            i18n: p
        } = I.useContext(pe),
        m = fc(),
        b = I.useRef(!1),
        {
            connector: w
        } = I.useContext(Mr),
        C = hs(!w).filter(z => z.ready || !!z.extensionDownloadUrl).sort((z, K) => z.groupIndex - K.groupIndex),
        y = TA(C, z => z.groupName),
        A = ["Recommended", "Other", "Popular", "More", "Others", "Installed"];
    I.useEffect(() => {
        w && !b.current && (O("CONNECT"), S(w), b.current = !0)
    }, [w]);
    const E = z => {
            u(!1), z.ready && z ? .connect ? .() ? .catch(() => {
                u(!0)
            })
        },
        k = async z => {
            const K = C.find(ee => z.id === ee.id);
            K ? .getDesktopUri && setTimeout(async () => {
                const ee = await K ? .getDesktopUri ? .();
                ee && window.open(ee, m ? "_blank" : "_self")
            }, 0)
        },
        B = async z => {
            const K = C.find(ne => z.id === ne.id),
                ee = await K ? .getQrCodeUri ? .();
            a(ee), setTimeout(() => {
                s(K), O("CONNECT")
            }, ee ? 0 : 50)
        },
        S = async z => {
            FA(z.id), z.ready && (B(z), k(z)), E(z), r(z.id), z.ready || (s(z), O(z ? .extensionDownloadUrl ? "DOWNLOAD_OPTIONS" : "CONNECT"))
        },
        P = z => {
            r(z);
            const K = C.find(yt => z === yt.id),
                ee = K ? .downloadUrls ? .qrCode,
                ne = !!K ? .desktopDownloadUrl,
                Pe = !!K ? .extensionDownloadUrl;
            s(K), O(ee && (Pe || ne) ? "DOWNLOAD_OPTIONS" : ee ? "DOWNLOAD" : ne ? "INSTRUCTIONS_DESKTOP" : "INSTRUCTIONS_EXTENSION")
        },
        R = () => {
            r(void 0), s(void 0), a(void 0)
        },
        O = (z, K = !1) => {
            K && z === "GET" && U === "GET" ? R() : !K && z === "GET" ? X("GET") : !K && z === "CONNECT" && X("CONNECT"), M(z)
        },
        [U, X] = I.useState("NONE"),
        [T, M] = I.useState("NONE");
    let N = null,
        H = null,
        Q = null,
        Y;
    I.useEffect(() => {
        u(!1)
    }, [T, o]);
    const se = !!(!!o ? .extensionDownloadUrl && o ? .mobileDownloadUrl);
    switch (T) {
        case "NONE":
            N = g.createElement(du, {
                getWallet: () => O("GET")
            });
            break;
        case "LEARN_COMPACT":
            N = g.createElement(du, {
                compactModeEnabled: d,
                getWallet: () => O("GET")
            }), H = p.t("intro.title"), Q = "NONE";
            break;
        case "GET":
            N = g.createElement(ex, {
                getWalletDownload: P,
                compactModeEnabled: d
            }), H = p.t("get.title"), Q = d ? "LEARN_COMPACT" : "NONE";
            break;
        case "CONNECT":
            N = o && g.createElement(tx, {
                changeWalletStep: O,
                compactModeEnabled: d,
                connectionError: l,
                onClose: e,
                qrCodeUri: i,
                reconnect: E,
                wallet: o
            }), H = c && (o.name === "WalletConnect" ? p.t("connect_scan.fallback_title") : p.t("connect_scan.title", {
                wallet: o.name
            })), Q = d ? w ? null : "NONE" : null, Y = d ? w ? () => {} : R : () => {};
            break;
        case "DOWNLOAD_OPTIONS":
            N = o && g.createElement(nx, {
                changeWalletStep: O,
                wallet: o
            }), H = o && p.t("get_options.short_title", {
                wallet: o.name
            }), Q = w ? "CONNECT" : d ? "NONE" : null;
            break;
        case "DOWNLOAD":
            N = o && g.createElement(rx, {
                changeWalletStep: O,
                wallet: o
            }), H = o && p.t("get_mobile.title", {
                wallet: o.name
            }), Q = se ? "DOWNLOAD_OPTIONS" : U;
            break;
        case "INSTRUCTIONS_MOBILE":
            N = o && g.createElement(ox, {
                connectWallet: S,
                wallet: o
            }), H = o && p.t("get_options.title", {
                wallet: d && o.shortName || o.name
            }), Q = "DOWNLOAD";
            break;
        case "INSTRUCTIONS_EXTENSION":
            N = o && g.createElement(sx, {
                wallet: o
            }), H = o && p.t("get_options.title", {
                wallet: d && o.shortName || o.name
            }), Q = "DOWNLOAD_OPTIONS";
            break;
        case "INSTRUCTIONS_DESKTOP":
            N = o && g.createElement(ix, {
                connectWallet: S,
                wallet: o
            }), H = o && p.t("get_options.title", {
                wallet: d && o.shortName || o.name
            }), Q = "DOWNLOAD_OPTIONS";
            break
    }
    return g.createElement(x, {
        display: "flex",
        flexDirection: "row",
        style: {
            maxHeight: d ? 468 : 504
        }
    }, (d ? T === "NONE" : !0) && g.createElement(x, {
        className: d ? JA : KA,
        display: "flex",
        flexDirection: "column",
        marginTop: "16"
    }, g.createElement(x, {
        display: "flex",
        justifyContent: "space-between"
    }, d && h && g.createElement(x, {
        marginLeft: "16",
        width: "28"
    }, g.createElement(MA, {
        onClick: () => O("LEARN_COMPACT")
    })), d && !h && g.createElement(x, {
        marginLeft: "16",
        width: "28"
    }), g.createElement(x, {
        marginLeft: d ? "0" : "6",
        paddingBottom: "8",
        paddingTop: "2",
        paddingX: "18"
    }, g.createElement(D, {
        as: "h1",
        color: "modalText",
        id: t,
        size: "18",
        weight: "heavy",
        testId: "connect-header-label"
    }, p.t("connect.title"))), d && g.createElement(x, {
        marginRight: "16"
    }, g.createElement(Jt, {
        onClose: e
    }))), g.createElement(x, {
        className: GA,
        paddingBottom: "18"
    }, Object.entries(y).map(([z, K], ee) => K.length > 0 && g.createElement(I.Fragment, {
        key: ee
    }, z ? g.createElement(x, {
        marginBottom: "8",
        marginTop: "16",
        marginX: "6"
    }, g.createElement(D, {
        color: z === "Installed" ? "accentColor" : "modalTextSecondary",
        size: "14",
        weight: "bold"
    }, A.includes(z) ? p.t(`connector_group.${z.toLowerCase()}`) : z)) : null, g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        gap: "4"
    }, K.map(ne => g.createElement(Zp, {
        currentlySelected: ne.id === n,
        iconBackground: ne.iconBackground,
        iconUrl: ne.iconUrl,
        key: ne.id,
        name: ne.name,
        onClick: () => S(ne),
        ready: ne.ready,
        recent: ne.recent,
        testId: `wallet-option-${ne.id}`,
        isRainbowKitConnector: ne.isRainbowKitConnector
    })))))), d && g.createElement(g.Fragment, null, g.createElement(x, {
        background: "generalBorder",
        height: "1",
        marginTop: "-1"
    }), h ? g.createElement(x, {
        paddingX: "24",
        paddingY: "16",
        textAlign: "center"
    }, g.createElement(h, {
        Link: bc,
        Text: yc
    })) : g.createElement(x, {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        paddingX: "24",
        paddingY: "16"
    }, g.createElement(x, {
        paddingY: "4"
    }, g.createElement(D, {
        color: "modalTextSecondary",
        size: "14",
        weight: "medium"
    }, p.t("connect.new_to_ethereum.description"))), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: "4",
        justifyContent: "center"
    }, g.createElement(x, {
        className: Ce({
            active: "shrink",
            hover: "grow"
        }),
        cursor: "pointer",
        onClick: () => O("LEARN_COMPACT"),
        paddingY: "4",
        style: {
            willChange: "transform"
        },
        transition: "default"
    }, g.createElement(D, {
        color: "accentColor",
        size: "14",
        weight: "bold"
    }, p.t("connect.new_to_ethereum.learn_more.label"))))))), (d ? T !== "NONE" : !0) && g.createElement(g.Fragment, null, !d && g.createElement(x, {
        background: "generalBorder",
        minWidth: "1",
        width: "1"
    }), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        margin: "16",
        style: {
            flexGrow: 1
        }
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "12"
    }, g.createElement(x, {
        width: "28"
    }, Q && g.createElement(x, {
        as: "button",
        className: Ce({
            active: "shrinkSm",
            hover: "growLg"
        }),
        color: "accentColor",
        onClick: () => {
            Q && O(Q, !0), Y ? .()
        },
        paddingX: "8",
        paddingY: "4",
        style: {
            boxSizing: "content-box",
            height: 17,
            willChange: "transform"
        },
        transition: "default",
        type: "button"
    }, g.createElement(Kp, null))), g.createElement(x, {
        display: "flex",
        justifyContent: "center",
        style: {
            flexGrow: 1
        }
    }, H && g.createElement(D, {
        color: "modalText",
        size: "18",
        textAlign: "center",
        weight: "heavy"
    }, H)), g.createElement(Jt, {
        onClose: e
    })), g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        style: {
            minHeight: d ? 396 : 432
        }
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "6",
        height: "full",
        justifyContent: "center",
        marginX: "8"
    }, N)))))
}
var cx = "_1am14412",
    lx = "_1am14410",
    ux = "_1am14413",
    dx = ({
        wallet: e
    }) => g.createElement("svg", {
        className: ux,
        viewBox: "0 0 86 86",
        width: "86",
        height: "86"
    }, g.createElement("title", null, "Loading"), g.createElement("rect", {
        x: "3",
        y: "3",
        width: 80,
        height: 80,
        rx: 20,
        ry: 20,
        strokeDasharray: `${160/3} ${2*160/3}`,
        strokeDashoffset: 160,
        className: cx,
        style: {
            stroke: e ? .iconAccent || "#0D3887"
        }
    }));

function am({
    onClose: e,
    wallet: t,
    connecting: n
}) {
    const {
        connect: r,
        iconBackground: o,
        iconUrl: s,
        id: i,
        name: a,
        getMobileUri: c,
        ready: l,
        shortName: u,
        showWalletConnectModal: f
    } = t, d = Jp(s), h = I.useRef(!1), {
        i18n: p
    } = I.useContext(pe), m = I.useCallback(async () => {
        if (i !== "walletConnect" && (async () => {
                const w = await c ? .();
                if (w)
                    if (w && ZE({
                            mobileUri: w,
                            name: a
                        }), w.startsWith("http")) {
                        const v = document.createElement("a");
                        v.href = w, v.target = "_blank", v.rel = "noreferrer noopener", v.click()
                    } else window.location.href = w
            })(), f) {
            f(), e ? .();
            return
        }
        r ? .()
    }, [r, c, f, e, a, i]);
    return I.useEffect(() => {
        n && !h.current && (m(), h.current = !0)
    }, [n, m]), g.createElement(x, {
        as: "button",
        color: l ? "modalText" : "modalTextSecondary",
        disabled: !l,
        fontFamily: "body",
        key: i,
        onClick: m,
        ref: d,
        style: {
            overflow: "visible",
            textAlign: "center"
        },
        testId: `wallet-option-${i}`,
        type: "button",
        width: "full"
    }, g.createElement(x, {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }, g.createElement(x, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "8",
        paddingTop: "10",
        position: "relative"
    }, n ? g.createElement(dx, {
        wallet: t
    }) : null, g.createElement(ye, {
        background: o,
        borderRadius: "13",
        boxShadow: "walletLogo",
        height: "60",
        src: s,
        width: "60"
    })), n ? null : g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
    }, g.createElement(D, {
        as: "h2",
        color: t.ready ? "modalText" : "modalTextSecondary",
        size: "13",
        weight: "medium"
    }, g.createElement(x, {
        as: "span",
        position: "relative"
    }, u ? ? a, !t.ready && " (unsupported)")), t.recent && g.createElement(D, {
        color: "accentColor",
        size: "12",
        weight: "medium"
    }, p.t("connect.recent")))))
}

function fx({
    onClose: e
}) {
    const t = "rk_connect_title",
        n = hs().filter(h => h.isRainbowKitConnector),
        {
            disclaimer: r,
            learnMoreUrl: o
        } = I.useContext(Or);
    let s = null,
        i = null,
        a = !1,
        c = null;
    const [l, u] = I.useState("CONNECT"), {
        i18n: f
    } = I.useContext(pe), d = Xt();
    switch (l) {
        case "CONNECT":
            {
                s = f.t("connect.title"),
                a = !0,
                i = g.createElement(x, null, g.createElement(x, {
                    background: "profileForeground",
                    className: lx,
                    display: "flex",
                    paddingBottom: "20",
                    paddingTop: "6"
                }, g.createElement(x, {
                    display: "flex",
                    style: {
                        margin: "0 auto"
                    }
                }, n.filter(h => h.ready).map(h => g.createElement(x, {
                    key: h.id,
                    paddingX: "20"
                }, g.createElement(x, {
                    width: "60"
                }, g.createElement(am, {
                    onClose: e,
                    wallet: h
                })))))), g.createElement(x, {
                    background: "generalBorder",
                    height: "1",
                    marginBottom: "32",
                    marginTop: "-1"
                }), g.createElement(x, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "32",
                    paddingX: "32",
                    style: {
                        textAlign: "center"
                    }
                }, g.createElement(x, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "8",
                    textAlign: "center"
                }, g.createElement(D, {
                    color: "modalText",
                    size: "16",
                    weight: "bold"
                }, f.t("intro.title")), g.createElement(D, {
                    color: "modalTextSecondary",
                    size: "16"
                }, f.t("intro.description")))), g.createElement(x, {
                    paddingTop: "32",
                    paddingX: "20"
                }, g.createElement(x, {
                    display: "flex",
                    gap: "14",
                    justifyContent: "center"
                }, g.createElement(je, {
                    label: f.t("intro.get.label"),
                    onClick: () => u("GET"),
                    size: "large",
                    type: "secondary"
                }), g.createElement(je, {
                    href: o,
                    label: f.t("intro.learn_more.label"),
                    size: "large",
                    type: "secondary"
                }))), r && g.createElement(x, {
                    marginTop: "28",
                    marginX: "32",
                    textAlign: "center"
                }, g.createElement(r, {
                    Link: bc,
                    Text: yc
                })));
                break
            }
        case "GET":
            {
                s = f.t("get.title"),
                c = "CONNECT";
                const h = n ? .filter(p => p.downloadUrls ? .ios || p.downloadUrls ? .android || p.downloadUrls ? .mobile) ? .splice(0, 3);i = g.createElement(x, null, g.createElement(x, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "full",
                    marginBottom: "36",
                    marginTop: "5",
                    paddingTop: "12",
                    width: "full"
                }, h.map((p, m) => {
                    const {
                        downloadUrls: b,
                        iconBackground: w,
                        iconUrl: v,
                        name: C
                    } = p;
                    return !b ? .ios && !b ? .android && !b ? .mobile ? null : g.createElement(x, {
                        display: "flex",
                        gap: "16",
                        key: p.id,
                        paddingX: "20",
                        width: "full"
                    }, g.createElement(x, {
                        style: {
                            minHeight: 48,
                            minWidth: 48
                        }
                    }, g.createElement(ye, {
                        background: w,
                        borderColor: "generalBorder",
                        borderRadius: "10",
                        height: "48",
                        src: v,
                        width: "48"
                    })), g.createElement(x, {
                        display: "flex",
                        flexDirection: "column",
                        width: "full"
                    }, g.createElement(x, {
                        alignItems: "center",
                        display: "flex",
                        height: "48"
                    }, g.createElement(x, {
                        width: "full"
                    }, g.createElement(D, {
                        color: "modalText",
                        size: "18",
                        weight: "bold"
                    }, C)), g.createElement(je, {
                        href: (d ? b ? .ios : b ? .android) || b ? .mobile,
                        label: f.t("get.action.label"),
                        size: "small",
                        type: "secondary"
                    })), m < h.length - 1 && g.createElement(x, {
                        background: "generalBorderDim",
                        height: "1",
                        marginY: "10",
                        width: "full"
                    })))
                })), g.createElement(x, {
                    style: {
                        marginBottom: "42px"
                    }
                }), g.createElement(x, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "36",
                    paddingX: "36",
                    style: {
                        textAlign: "center"
                    }
                }, g.createElement(x, {
                    display: "flex",
                    flexDirection: "column",
                    gap: "12",
                    textAlign: "center"
                }, g.createElement(D, {
                    color: "modalText",
                    size: "16",
                    weight: "bold"
                }, f.t("get.looking_for.title")), g.createElement(D, {
                    color: "modalTextSecondary",
                    size: "16"
                }, f.t("get.looking_for.mobile.description")))));
                break
            }
    }
    return g.createElement(x, {
        display: "flex",
        flexDirection: "column",
        paddingBottom: "36"
    }, g.createElement(x, {
        background: a ? "profileForeground" : "modalBackground",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "4",
        paddingTop: "14"
    }, g.createElement(x, {
        display: "flex",
        justifyContent: "center",
        paddingBottom: "6",
        paddingX: "20",
        position: "relative"
    }, c && g.createElement(x, {
        display: "flex",
        position: "absolute",
        style: {
            left: 0,
            marginBottom: -20,
            marginTop: -20
        }
    }, g.createElement(x, {
        alignItems: "center",
        as: "button",
        className: Ce({
            active: "shrinkSm",
            hover: "growLg"
        }),
        color: "accentColor",
        display: "flex",
        marginLeft: "4",
        marginTop: "20",
        onClick: () => u(c),
        padding: "16",
        style: {
            height: 17,
            willChange: "transform"
        },
        transition: "default",
        type: "button"
    }, g.createElement(Kp, null))), g.createElement(x, {
        marginTop: "4",
        textAlign: "center",
        width: "full"
    }, g.createElement(D, {
        as: "h1",
        color: "modalText",
        id: t,
        size: "20",
        weight: "bold"
    }, s)), g.createElement(x, {
        alignItems: "center",
        display: "flex",
        height: "32",
        paddingRight: "14",
        position: "absolute",
        right: "0"
    }, g.createElement(x, {
        style: {
            marginBottom: -20,
            marginTop: -20
        }
    }, g.createElement(Jt, {
        onClose: e
    }))))), g.createElement(x, {
        display: "flex",
        flexDirection: "column"
    }, i))
}
var hx = ({
    onClose: e
}) => {
    const {
        connector: t
    } = I.useContext(Mr), {
        i18n: n
    } = I.useContext(pe), r = t ? .name || "";
    return g.createElement(x, null, g.createElement(x, {
        display: "flex",
        paddingBottom: "32",
        justifyContent: "center",
        alignItems: "center",
        background: "profileForeground",
        flexDirection: "column"
    }, g.createElement(x, {
        width: "full",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "18",
        marginRight: "24"
    }, g.createElement(Jt, {
        onClose: e
    })), g.createElement(x, {
        width: "60"
    }, g.createElement(am, {
        onClose: e,
        wallet: t,
        connecting: !0
    })), g.createElement(x, {
        marginTop: "20"
    }, g.createElement(D, {
        textAlign: "center",
        color: "modalText",
        size: "18",
        weight: "semibold"
    }, n.t("connect.status.connect_mobile", {
        wallet: r
    }))), g.createElement(x, {
        maxWidth: "full",
        marginTop: "8"
    }, g.createElement(D, {
        textAlign: "center",
        color: "modalText",
        size: "16",
        weight: "medium"
    }, n.t("connect.status.confirm_mobile", {
        wallet: r
    })))))
};

function px({
    onClose: e
}) {
    const {
        connector: t
    } = I.useContext(Mr);
    return Ee() ? t ? g.createElement(hx, {
        onClose: e
    }) : g.createElement(fx, {
        onClose: e
    }) : g.createElement(ax, {
        onClose: e
    })
}

function mx({
    onClose: e,
    open: t
}) {
    const n = "rk_connect_title",
        r = wp(),
        {
            disconnect: o
        } = $a(),
        {
            isConnecting: s
        } = Se(),
        i = g.useCallback(() => {
            e(), o()
        }, [e, o]),
        a = g.useCallback(() => {
            s && o(), e()
        }, [e, o, s]);
    return r === "disconnected" ? g.createElement(ko, {
        onClose: a,
        open: t,
        titleId: n
    }, g.createElement(Bo, {
        bottomSheetOnMobile: !0,
        padding: "0",
        wide: !0
    }, g.createElement(px, {
        onClose: a
    }))) : r === "unauthenticated" ? g.createElement(ko, {
        onClose: i,
        open: t,
        titleId: n
    }, g.createElement(Bo, {
        bottomSheetOnMobile: !0,
        padding: "0"
    }, g.createElement(KE, {
        onClose: i,
        onCloseModal: e
    }))) : null
}

function ei() {
    const [e, t] = I.useState(!1);
    return {
        closeModal: I.useCallback(() => t(!1), []),
        isModalOpen: e,
        openModal: I.useCallback(() => t(!0), [])
    }
}
var Rn = I.createContext({
    accountModalOpen: !1,
    chainModalOpen: !1,
    connectModalOpen: !1,
    isWalletConnectModalOpen: !1,
    setIsWalletConnectModalOpen: () => {}
});

function gx({
    children: e
}) {
    const {
        closeModal: t,
        isModalOpen: n,
        openModal: r
    } = ei(), {
        closeModal: o,
        isModalOpen: s,
        openModal: i
    } = ei(), {
        closeModal: a,
        isModalOpen: c,
        openModal: l
    } = ei(), [u, f] = I.useState(!1), d = wp(), {
        chainId: h
    } = Se(), {
        chains: p
    } = he(), m = p.some(v => v.id === h);

    function b({
        keepConnectModalOpen: v = !1
    } = {}) {
        v || t(), o(), a()
    }
    const w = ds() === "unauthenticated";
    return _f({
        onConnect: () => b({
            keepConnectModalOpen: w
        }),
        onDisconnect: () => b()
    }), I.useEffect(() => {
        w && b()
    }, [w]), g.createElement(Rn.Provider, {
        value: I.useMemo(() => ({
            accountModalOpen: s,
            chainModalOpen: c,
            connectModalOpen: n,
            isWalletConnectModalOpen: u,
            openAccountModal: m && d === "connected" ? i : void 0,
            openChainModal: d === "connected" ? l : void 0,
            openConnectModal: d === "disconnected" || d === "unauthenticated" ? r : void 0,
            setIsWalletConnectModalOpen: f
        }), [d, s, c, n, i, l, r, m, u])
    }, e, g.createElement(mx, {
        onClose: t,
        open: n
    }), g.createElement(AA, {
        onClose: o,
        open: s
    }), g.createElement(PA, {
        onClose: a,
        open: c
    }))
}

function bx() {
    const {
        accountModalOpen: e,
        chainModalOpen: t,
        connectModalOpen: n
    } = I.useContext(Rn);
    return {
        accountModalOpen: e,
        chainModalOpen: t,
        connectModalOpen: n
    }
}

function yx() {
    const {
        accountModalOpen: e,
        openAccountModal: t
    } = I.useContext(Rn);
    return {
        accountModalOpen: e,
        openAccountModal: t
    }
}

function wx() {
    const {
        chainModalOpen: e,
        openChainModal: t
    } = I.useContext(Rn);
    return {
        chainModalOpen: e,
        openChainModal: t
    }
}

function cm() {
    const {
        isWalletConnectModalOpen: e,
        setIsWalletConnectModalOpen: t
    } = I.useContext(Rn);
    return {
        isWalletConnectModalOpen: e,
        setIsWalletConnectModalOpen: t
    }
}

function vx() {
    const {
        connectModalOpen: e,
        openConnectModal: t
    } = I.useContext(Rn), {
        isWalletConnectModalOpen: n
    } = cm();
    return {
        connectModalOpen: e || n,
        openConnectModal: t
    }
}
var ti = () => {};

function Cx({
    children: e
}) {
    const t = nE(),
        {
            address: n
        } = Se(),
        {
            chainId: r
        } = Se(),
        {
            chains: o
        } = he(),
        s = o.some(O => O.id === r),
        i = X2(),
        a = ds() ? ? void 0,
        c = r ? i[r] : void 0,
        l = c ? .name ? ? void 0,
        u = c ? .iconUrl ? ? void 0,
        f = c ? .iconBackground ? ? void 0,
        d = cc(u),
        h = I.useContext(dc),
        p = Tp().some(({
            status: O
        }) => O === "pending") && h,
        {
            showBalance: m
        } = tE(),
        w = (() => typeof m == "boolean" ? m : m ? x2(m)[Ee() ? "smallScreen" : "largeScreen"] : !0)(),
        {
            balance: v,
            ensAvatar: C,
            ensName: y
        } = Bp({
            address: n,
            includeBalance: w
        }),
        A = v ? `${Hp(parseFloat(v.formatted))} ${v.symbol}` : void 0,
        {
            openConnectModal: E
        } = vx(),
        {
            openChainModal: k
        } = wx(),
        {
            openAccountModal: B
        } = yx(),
        {
            accountModalOpen: S,
            chainModalOpen: P,
            connectModalOpen: R
        } = bx();
    return g.createElement(g.Fragment, null, e({
        account: n ? {
            address: n,
            balanceDecimals: v ? .decimals,
            balanceFormatted: v ? .formatted,
            balanceSymbol: v ? .symbol,
            displayBalance: A,
            displayName: y ? Vp(y) : Qp(n),
            ensAvatar: C ? ? void 0,
            ensName: y ? ? void 0,
            hasPendingTransactions: p
        } : void 0,
        accountModalOpen: S,
        authenticationStatus: a,
        chain: r ? {
            hasIcon: !!u,
            iconBackground: f,
            iconUrl: d,
            id: r,
            name: l,
            unsupported: !s
        } : void 0,
        chainModalOpen: P,
        connectModalOpen: R,
        mounted: t(),
        openAccountModal: B ? ? ti,
        openChainModal: k ? ? ti,
        openConnectModal: E ? ? ti
    }))
}
Cx.displayName = "ConnectButton.Custom";
var lm = ({
    appName: e,
    appDescription: t,
    appUrl: n,
    appIcon: r
}) => ({
    name: e,
    description: t ? ? e,
    url: n ? ? (typeof window < "u" ? window.location.href : ""),
    icons: [...r ? [r] : []]
});

function Ex(e) {
    return Object.fromEntries(Object.entries(e).filter(([t, n]) => n !== void 0))
}

function Ax(e, t) {
    const n = [];
    for (const r of e) n.some(o => o[t] === r[t]) || n.push(r);
    return n
}
var xx = (e, {
        projectId: t,
        walletConnectParameters: n,
        appName: r,
        appDescription: o,
        appUrl: s,
        appIcon: i
    }) => {
        if (!e.length) throw new Error("No wallet list was provided");
        for (const {
                wallets: h,
                groupName: p
            } of e)
            if (!h.length) throw new Error(`No wallets provided for group: ${p}`);
        let a = -1;
        const c = [],
            l = [],
            u = [],
            f = lm({
                appName: r,
                appDescription: o,
                appUrl: s,
                appIcon: i
            });
        e.forEach(({
            groupName: h,
            wallets: p
        }, m) => {
            p.forEach(b => {
                a++;
                const w = b({
                    projectId: t,
                    appName: r,
                    appIcon: i,
                    options: {
                        metadata: f,
                        ...n
                    },
                    walletConnectParameters: {
                        metadata: f,
                        ...n
                    }
                });
                if (w ? .iconAccent && !UA(w ? .iconAccent)) throw new Error(`Property \`iconAccent\` is not a hex value for wallet: ${w.name}`);
                const v = { ...w,
                    groupIndex: m + 1,
                    groupName: h,
                    index: a
                };
                typeof w.hidden == "function" ? u.push(v) : l.push(v)
            })
        });
        const d = Ax([...l, ...u], "id");
        for (const {
                createConnector: h,
                groupIndex: p,
                groupName: m,
                hidden: b,
                ...w
            } of d) {
            if (typeof b == "function" && b()) continue;
            const v = A => ({
                rkDetails: Ex({ ...w,
                    groupIndex: p,
                    groupName: m,
                    isRainbowKitConnector: !0,
                    ...A || {}
                })
            });
            w.id === "walletConnect" && c.push(h(v({
                isWalletConnectModalConnector: !0,
                showQrModal: !0
            })));
            const y = h(v());
            c.push(y)
        }
        return c
    },
    hu = new Map,
    Ix = ({
        projectId: e,
        walletConnectParameters: t,
        rkDetailsShowQrModal: n
    }) => {
        let r = { ...t || {},
            projectId: e,
            showQrModal: !1
        };
        n && (r = { ...r,
            showQrModal: !0
        });
        const o = JSON.stringify(r),
            s = hu.get(o);
        if (s) return s;
        const i = ic(r);
        return hu.set(o, i), i
    };

function kx({
    projectId: e,
    walletDetails: t,
    walletConnectParameters: n
}) {
    return r => ({ ...Ix({
            projectId: e,
            walletConnectParameters: n,
            rkDetailsShowQrModal: t.rkDetails.showQrModal
        })(r),
        ...t
    })
}

function vc({
    projectId: e,
    walletConnectParameters: t
}) {
    const n = "21fef48091f12692cad574a6f7753643";
    if (!e || e === "") throw new Error("No projectId found. Every dApp must now provide a WalletConnect Cloud projectId to enable WalletConnect v2 https://www.rainbowkit.com/docs/installation#configure");
    return e === "YOUR_PROJECT_ID" && (e = n), r => kx({
        projectId: e,
        walletDetails: r,
        walletConnectParameters: t
    })
}

function um(e) {
    const t = typeof window < "u" ? window : void 0;
    if (typeof t > "u" || typeof t.ethereum > "u") return;
    const n = t.ethereum.providers;
    return n ? n.find(r => r[e]) : t.ethereum[e] ? t.ethereum : void 0
}

function dm(e) {
    const t = (n, r) => {
        const [o, ...s] = r.split("."), i = n[o];
        if (i) return s.length === 0 ? i : t(i, s.join("."))
    };
    if (typeof window < "u") return t(window, e)
}

function fm({
    flag: e,
    namespace: t
}) {
    return !!(t && typeof dm(t) < "u" || e && typeof um(e) < "u")
}

function Bx({
    flag: e,
    namespace: t
}) {
    const n = typeof window < "u" ? window : void 0;
    if (typeof n > "u") return;
    if (t) {
        const o = dm(t);
        if (o) return o
    }
    const r = n.ethereum ? .providers;
    if (e) {
        const o = um(e);
        if (o) return o
    }
    return typeof r < "u" && r.length > 0 ? r[0] : n.ethereum
}

function jx(e) {
    return t => {
        const n = e ? {
            target: () => ({
                id: t.rkDetails.id,
                name: t.rkDetails.name,
                provider: e
            })
        } : {};
        return r => ({ ...Jo(n)(r),
            ...t
        })
    }
}

function hm({
    flag: e,
    namespace: t,
    target: n
}) {
    const r = n || Bx({
        flag: e,
        namespace: t
    });
    return jx(r)
}
var pm = ({
    appName: e,
    appIcon: t
}) => {
    const n = o => o,
        r = Xt();
    return {
        id: "coinbase",
        name: "Coinbase Wallet",
        shortName: "Coinbase",
        rdns: "com.coinbase.wallet",
        iconUrl: async () => (await _(() =>
            import ("./coinbaseWallet-WWX6LF36-ff8dff1b.js"), [])).default,
        iconAccent: "#2c5ff6",
        iconBackground: "#2c5ff6",
        installed: !0,
        downloadUrls: {
            android: "https://play.google.com/store/apps/details?id=org.toshi",
            ios: "https://apps.apple.com/us/app/coinbase-wallet-store-crypto/id1278383455",
            mobile: "https://coinbase.com/wallet/downloads",
            qrCode: "https://coinbase-wallet.onelink.me/q5Sx/fdb9b250",
            chrome: "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
            browserExtension: "https://coinbase.com/wallet"
        },
        ...r ? {} : {
            qrCode: {
                getUri: n,
                instructions: {
                    learnMoreUrl: "https://coinbase.com/wallet/articles/getting-started-mobile",
                    steps: [{
                        description: "wallet_connectors.coinbase.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.coinbase.qr_code.step1.title"
                    }, {
                        description: "wallet_connectors.coinbase.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.coinbase.qr_code.step2.title"
                    }, {
                        description: "wallet_connectors.coinbase.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.coinbase.qr_code.step3.title"
                    }]
                }
            },
            extension: {
                instructions: {
                    learnMoreUrl: "https://coinbase.com/wallet/articles/getting-started-extension",
                    steps: [{
                        description: "wallet_connectors.coinbase.extension.step1.description",
                        step: "install",
                        title: "wallet_connectors.coinbase.extension.step1.title"
                    }, {
                        description: "wallet_connectors.coinbase.extension.step2.description",
                        step: "create",
                        title: "wallet_connectors.coinbase.extension.step2.title"
                    }, {
                        description: "wallet_connectors.coinbase.extension.step3.description",
                        step: "refresh",
                        title: "wallet_connectors.coinbase.extension.step3.title"
                    }]
                }
            }
        },
        createConnector: o => {
            const s = us({
                appName: e,
                appLogoUrl: t,
                preference: pm.preference
            });
            return i => ({ ...s(i),
                ...o
            })
        }
    }
};

function Sx(e) {
    return !(!e ? .isMetaMask || e.isBraveWallet && !e._events && !e._state || e.isApexWallet || e.isAvalanche || e.isBackpack || e.isBifrost || e.isBitKeep || e.isBitski || e.isBlockWallet || e.isCoinbaseWallet || e.isDawn || e.isEnkrypt || e.isExodus || e.isFrame || e.isFrontier || e.isGamestop || e.isHyperPay || e.isImToken || e.isKuCoinWallet || e.isMathWallet || e.isNestWallet || e.isOkxWallet || e.isOKExWallet || e.isOneInchIOSWallet || e.isOneInchAndroidWallet || e.isOpera || e.isPhantom || e.isPortal || e.isRabby || e.isRainbow || e.isStatus || e.isTalisman || e.isTally || e.isTokenPocket || e.isTokenary || e.isTrust || e.isTrustWallet || e.isXDEFI || e.isZeal || e.isZerion || e.__seif)
}
var Px = ({
        projectId: e,
        walletConnectParameters: t
    }) => {
        const n = fm({
                flag: "isMetaMask"
            }),
            r = !n,
            o = s => ac() ? s : Xt() ? `metamask://wc?uri=${encodeURIComponent(s)}` : `https://metamask.app.link/wc?uri=${encodeURIComponent(s)}`;
        return {
            id: "metaMask",
            name: "MetaMask",
            rdns: "io.metamask",
            iconUrl: async () => (await _(() =>
                import ("./metaMaskWallet-YFHEHW7V-1f5c9db6.js"), [])).default,
            iconAccent: "#f6851a",
            iconBackground: "#fff",
            installed: r ? void 0 : n,
            downloadUrls: {
                android: "https://play.google.com/store/apps/details?id=io.metamask",
                ios: "https://apps.apple.com/us/app/metamask/id1438144202",
                mobile: "https://metamask.io/download",
                qrCode: "https://metamask.io/download",
                chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
                edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",
                firefox: "https://addons.mozilla.org/firefox/addon/ether-metamask",
                opera: "https://addons.opera.com/extensions/details/metamask-10",
                browserExtension: "https://metamask.io/download"
            },
            mobile: {
                getUri: r ? o : void 0
            },
            qrCode: r ? {
                getUri: o,
                instructions: {
                    learnMoreUrl: "https://metamask.io/faqs/",
                    steps: [{
                        description: "wallet_connectors.metamask.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.metamask.qr_code.step1.title"
                    }, {
                        description: "wallet_connectors.metamask.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.metamask.qr_code.step2.title"
                    }, {
                        description: "wallet_connectors.metamask.qr_code.step3.description",
                        step: "refresh",
                        title: "wallet_connectors.metamask.qr_code.step3.title"
                    }]
                }
            } : void 0,
            extension: {
                instructions: {
                    learnMoreUrl: "https://metamask.io/faqs/",
                    steps: [{
                        description: "wallet_connectors.metamask.extension.step1.description",
                        step: "install",
                        title: "wallet_connectors.metamask.extension.step1.title"
                    }, {
                        description: "wallet_connectors.metamask.extension.step2.description",
                        step: "create",
                        title: "wallet_connectors.metamask.extension.step2.title"
                    }, {
                        description: "wallet_connectors.metamask.extension.step3.description",
                        step: "refresh",
                        title: "wallet_connectors.metamask.extension.step3.title"
                    }]
                }
            },
            createConnector: r ? vc({
                projectId: e,
                walletConnectParameters: t
            }) : hm({
                target: typeof window < "u" ? window.ethereum ? .providers ? .find(Sx) ? ? window.ethereum : void 0
            })
        }
    },
    Tx = ({
        projectId: e,
        walletConnectParameters: t
    }) => {
        const n = fm({
                flag: "isRainbow"
            }),
            r = !n,
            o = s => ac() ? s : Xt() ? `rainbow://wc?uri=${encodeURIComponent(s)}&connector=rainbowkit` : `https://rnbwapp.com/wc?uri=${encodeURIComponent(s)}&connector=rainbowkit`;
        return {
            id: "rainbow",
            name: "Rainbow",
            rdns: "me.rainbow",
            iconUrl: async () => (await _(() =>
                import ("./rainbowWallet-2SR6TVBF-4ca036b5.js"), [])).default,
            iconBackground: "#0c2f78",
            installed: r ? void 0 : n,
            downloadUrls: {
                android: "https://play.google.com/store/apps/details?id=me.rainbow&referrer=utm_source%3Drainbowkit&utm_source=rainbowkit",
                ios: "https://apps.apple.com/app/apple-store/id1457119021?pt=119997837&ct=rainbowkit&mt=8",
                mobile: "https://rainbow.download?utm_source=rainbowkit",
                qrCode: "https://rainbow.download?utm_source=rainbowkit&utm_medium=qrcode",
                browserExtension: "https://rainbow.me/extension?utm_source=rainbowkit"
            },
            mobile: {
                getUri: r ? o : void 0
            },
            qrCode: r ? {
                getUri: o,
                instructions: {
                    learnMoreUrl: "https://learn.rainbow.me/connect-to-a-website-or-app?utm_source=rainbowkit&utm_medium=connector&utm_campaign=learnmore",
                    steps: [{
                        description: "wallet_connectors.rainbow.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.rainbow.qr_code.step1.title"
                    }, {
                        description: "wallet_connectors.rainbow.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.rainbow.qr_code.step2.title"
                    }, {
                        description: "wallet_connectors.rainbow.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.rainbow.qr_code.step3.title"
                    }]
                }
            } : void 0,
            createConnector: r ? vc({
                projectId: e,
                walletConnectParameters: t
            }) : hm({
                flag: "isRainbow"
            })
        }
    },
    Ox = ({
        projectId: e,
        options: t
    }) => ({
        id: "walletConnect",
        name: "WalletConnect",
        installed: void 0,
        iconUrl: async () => (await _(() =>
            import ("./walletConnectWallet-FNSU4KNU-24906fea.js"), [])).default,
        iconBackground: "#3b99fc",
        qrCode: {
            getUri: r => r
        },
        createConnector: vc({
            projectId: e,
            walletConnectParameters: t
        })
    }),
    Mx = e => e.reduce((n, r) => {
        const o = r.id;
        return n[o] = f1(), n
    }, {}),
    c7 = ({
        appName: e,
        appDescription: t,
        appUrl: n,
        appIcon: r,
        wallets: o,
        projectId: s,
        ...i
    }) => {
        const {
            transports: a,
            chains: c,
            ...l
        } = i, u = lm({
            appName: e,
            appDescription: t,
            appUrl: n,
            appIcon: r
        }), f = xx(o || [{
            groupName: "Popular",
            wallets: [Tx, pm, Px, Ox]
        }], {
            projectId: s,
            appName: e,
            appDescription: t,
            appUrl: n,
            appIcon: r,
            walletConnectParameters: {
                metadata: u
            }
        });
        return rv({
            connectors: f,
            chains: c,
            transports: a || Mx(c),
            ...l
        })
    };
export {
    Nx as $, Qx as A, Vx as B, n7 as C, o7 as D, s7 as E, Kx as F, e7 as G, Zx as H, Xx as I, Jx as J, t7 as K, $x as L, Ie as M, qx as N, a7 as O, G1 as P, Wx as Q, SC as R, S6 as S, B6 as T, Hx as U, hi as V, Ux as W, Fx as X, u1 as Y, Jf as Z, _, $a as a, _x as a0, i7 as a1, j6 as b, vx as c, zx as d, Il as e, Do as f, Mt as g, $d as h, Oy as i, xm as j, Pr as k, Lx as l, Jo as m, vc as n, xx as o, c7 as p, rv as q, za as r, bp as s, f1 as t, Se as u, Ka as v, ic as w, r7 as x, Gx as y, Yx as z
};