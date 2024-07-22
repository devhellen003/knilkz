import {
    l as be,
    m as ht,
    n as Mt,
    w as wt,
    _ as L,
    s as In,
    o as On,
    p as zn,
    q as Ln,
    r as Sn,
    t as Pn,
    v as Rn,
    x as _n,
    y as Bn,
    z as Un,
    A as Yn,
    B as Fn,
    C as Wn,
    D as Qn,
    E as Gn,
    F as Vn,
    G as Hn,
    H as $n,
    I as Zn,
    J as Xn,
    K as qn,
    L as Kn,
    M as Jn,
    j as w,
    Q as eo,
    W as to,
    N as no,
    O as oo
} from "./rainbowkit-1c226f0f.js";
import {
    a as Ae,
    r as c,
    g as ro,
    i as io,
    j as so
} from "./react-74e86ac5.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
    new MutationObserver(r => {
        for (const i of r)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && o(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(r) {
        const i = {};
        return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function o(r) {
        if (r.ep) return;
        r.ep = !0;
        const i = n(r);
        fetch(r.href, i)
    }
})();
var yt, ot = Ae;
yt = ot.createRoot, ot.hydrateRoot;

function Nt(e) {
    if (typeof window > "u" || typeof window.ethereum > "u") return;
    const t = window.ethereum.providers;
    return t ? t.find(n => n[e]) : window.ethereum[e] ? window.ethereum : void 0
}

function Et(e) {
    const t = (n, o) => {
        const [r, ...i] = o.split("."), s = n[r];
        if (s) return i.length === 0 ? s : t(s, i.join("."))
    };
    if (typeof window < "u") return t(window, e)
}

function ao({
    flag: e,
    namespace: t
}) {
    return !!(t && typeof Et(t) < "u" || e && typeof Nt(e) < "u")
}

function co({
    flag: e,
    namespace: t
}) {
    if (typeof window > "u") return;
    if (t) {
        const o = Et(t);
        if (o) return o
    }
    const n = window.ethereum ? .providers;
    if (e) {
        const o = Nt(e);
        if (o) return o
    }
    return typeof n < "u" && n.length > 0 ? n[0] : window.ethereum
}

function lo(e) {
    return t => {
        const n = e ? {
            target: () => ({
                id: t.rkDetails.id,
                name: t.rkDetails.name,
                provider: e
            })
        } : {};
        return be(o => ({ ...ht(n)(o),
            ...t
        }))
    }
}

function Dt({
    flag: e,
    namespace: t,
    target: n
}) {
    const o = n || co({
        flag: e,
        namespace: t
    });
    return lo(o)
}
const uo = () => {
        let e = !1;
        (function(n) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))) && (e = !0)
        })(navigator.userAgent || navigator.vendor || window.opera);
        const t = window.innerWidth <= 800;
        return e || t
    },
    vt = ({
        projectId: e,
        walletConnectParameters: t
    }) => {
        const o = uo();
        return {
            id: "binance-wallet",
            name: "Binance Web3 Wallet",
            iconUrl: "novadrop/images/binance.svg",
            iconBackground: "#000",
            downloadUrls: {
                android: "https://www.binance.com/en/download",
                ios: "https://www.binance.com/en/download",
                chrome: "https://chromewebstore.google.com/detail/%E5%B8%81%E5%AE%89%E9%93%BE%E9%92%B1%E5%8C%85/fhbohimaelbohpjbbldcngcnapndodjp",
                qrCode: "https://okx.com/download"
            },
            mobile: {
                getUri: r => r
            },
            qrCode: o ? void 0 : {
                getUri: r => r,
                instructions: {
                    learnMoreUrl: "https://www.binance.com/en/web3wallet",
                    steps: [{
                        description: "We recommend putting Binance Wallet on your home screen for faster access to your wallet.",
                        step: "install",
                        title: "Open the Binance Wallet app"
                    }, {
                        description: "After you scan, a connection prompt will appear for you to connect your wallet.",
                        step: "scan",
                        title: "Tap the scan button"
                    }]
                }
            },
            extension: {
                instructions: {
                    learnMoreUrl: "https://www.binance.com/en/web3wallet",
                    steps: [{
                        description: "We recommend pinning Binance Wallet to your taskbar for quicker access to your wallet.",
                        step: "install",
                        title: "Install the Binance Wallet extension"
                    }, {
                        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
                        step: "create",
                        title: "Create or Import a Wallet"
                    }, {
                        description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
                        step: "refresh",
                        title: "Refresh your browser"
                    }]
                }
            },
            createConnector: o ? Dt({}) : Mt({
                projectId: e,
                walletConnectParameters: t
            })
        }
    },
    fo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMzk3XzM3NjQpIj4KPHJlY3Qgd2lkdGg9IjE5MiIgaGVpZ2h0PSIxOTIiIHJ4PSI4IiBmaWxsPSJ3aGl0ZSIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDFfMTM5N18zNzY0KSI+CjxyZWN0IHk9IjE1NC4zNjciIHdpZHRoPSIxOTIiIGhlaWdodD0iMzcuNjMyIiBmaWxsPSIjMDI1NUVCIi8+CjxwYXRoIGQ9Ik05Ni4wMDAyIDEwNS44OEM4OC4yOTQxIDEwNS44OCA4MC45MDM3IDEwMi44MiA3NS40NTQ3IDk3LjM3MjJDNzAuMDA1NyA5MS45MjQ4IDY2Ljk0NDUgODQuNTM2NSA2Ni45NDQ1IDc2LjgzMjdDNjYuOTQ0NSA2OS4xMjg5IDcwLjAwNTcgNjEuNzQwNiA3NS40NTQ3IDU2LjI5MzFDODAuOTAzNyA1MC44NDU3IDg4LjI5NDEgNDcuNzg1NCA5Ni4wMDAyIDQ3Ljc4NTRWMjQuMDA1NEM4NS41NTE0IDI0LjAwNTQgNzUuMzM3MiAyNy4xMDI5IDY2LjY0OTMgMzIuOTA2M0M1Ny45NjE0IDM4LjcwOTcgNTEuMTkgNDYuOTU4MiA0Ny4xOTE0IDU2LjYwODlDNDMuMTkyOCA2Ni4yNTk2IDQyLjE0NjYgNzYuODc4OSA0NC4xODUxIDg3LjEyNEM0Ni4yMjM1IDk3LjM2OTEgNTEuMjU1MSAxMDYuNzggNTguNjQzNiAxMTQuMTY2QzY2LjAzMiAxMjEuNTUyIDc1LjQ0NTQgMTI2LjU4MyA4NS42OTM1IDEyOC42MkM5NS45NDE2IDEzMC42NTggMTA2LjU2NCAxMjkuNjEyIDExNi4yMTcgMTI1LjYxNUMxMjUuODcxIDEyMS42MTggMTM0LjEyMiAxMTQuODQ4IDEzOS45MjcgMTA2LjE2M0MxNDUuNzMyIDk3LjQ3NzQgMTQ4LjgzIDg3LjI2NjIgMTQ4LjgzIDc2LjgyMDNIMTI1LjAzMUMxMjUuMDM2IDgwLjYzNDggMTI0LjI4OSA4NC40MTI3IDEyMi44MzIgODcuOTM4MkMxMjEuMzc1IDkxLjQ2MzYgMTE5LjIzOCA5NC42Njc1IDExNi41NDEgOTcuMzY2NEMxMTMuODQ1IDEwMC4wNjUgMTEwLjY0MyAxMDIuMjA2IDEwNy4xMTggMTAzLjY2N0MxMDMuNTk0IDEwNS4xMjggOTkuODE1NyAxMDUuODggOTYuMDAwMiAxMDUuODhaIiBmaWxsPSIjMDI1NUVCIi8+CjxwYXRoIGQ9Ik0xMjUuMDU2IDQ3Ljc3MUg5NlY3Ni44MTgzSDEyNS4wNTZWNDcuNzcxWiIgZmlsbD0iIzAwRTY5NyIvPgo8cGF0aCBkPSJNMTkxLjk3NSAxNDkuOTk1QzE2My4xNyAxNDMuMDg1IDEzMC41NzMgMTM5LjE4MiA5NS45ODc3IDEzOS4xODJDNjEuNDAyIDEzOS4xODIgMjguODA0OSAxNDMuMDg1IDAgMTQ5Ljk5NVYxNTQuMzE3QzAgMTY0LjMwNyAzLjk2OTE2IDE3My44ODggMTEuMDM0NCAxODAuOTUyQzE4LjA5OTUgMTg4LjAxNiAyNy42ODIgMTkxLjk4NSAzNy42NzM3IDE5MS45ODVIMTU0LjMyNkMxNjQuMzE4IDE5MS45ODUgMTczLjkgMTg4LjAxNiAxODAuOTY2IDE4MC45NTJDMTg4LjAzMSAxNzMuODg4IDE5MiAxNjQuMzA3IDE5MiAxNTQuMzE3TDE5MS45NzUgMTQ5Ljk5NVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xMzk3XzM3NjQpIi8+CjxwYXRoIGQ9Ik0xOTEuOTc1IDE1NC4zMzhDMTYzLjM4NyAxNDcuMTI1IDEzMC43MDkgMTQzLjAzMSA5NS45ODc3IDE0My4wMzFDNjEuMjY2MSAxNDMuMDMxIDI4LjU4ODggMTQ3LjEyNSAwIDE1NC4zMzhDMCAxNjQuMzI4IDMuOTY5MTYgMTczLjkwOSAxMS4wMzQ0IDE4MC45NzNDMTguMDk5NSAxODguMDM3IDI3LjY4MiAxOTIuMDA1IDM3LjY3MzcgMTkyLjAwNUgxNTQuMzI2QzE2NC4zMTggMTkyLjAwNSAxNzMuOSAxODguMDM3IDE4MC45NjYgMTgwLjk3M0MxODguMDMxIDE3My45MDkgMTkyIDE2NC4zMjggMTkyIDE1NC4zMzhIMTkxLjk3NVoiIGZpbGw9IiMwMjU1RUIiLz4KPHBhdGggZD0iTTc1LjI3MDYgMTc2LjgxNkg3MC4xOTk0TDY2LjI0NjMgMTU5LjI0Mkw2Mi4yMTI4IDE3Ni44MTZINTcuMTQxNkw1Mi42NzU4IDE1Ni42NDhINTYuMTU5NUw1OS43MzU5IDE3My41OTNMNjMuNzM4NSAxNTYuNjQ4SDY4Ljc4NDlMNzIuNjc2MyAxNzMuNTMxTDc2LjIzNDEgMTU2LjY0OEg3OS43Nzk2TDc1LjI3MDYgMTc2LjgxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05Ni4wNzQzIDE2MS41MjFWMTc2Ljc5Mkg5Mi43NjM1VjE3NC43NDJDOTIuMTQ0NyAxNzUuNDU1IDkxLjM4MjkgMTc2LjAyOSA5MC41Mjc1IDE3Ni40MjhDODkuNjQ4OSAxNzYuODQyIDg4LjY4ODMgMTc3LjA1MyA4Ny43MTcgMTc3LjA0NUM4Ni4zODM1IDE3Ny4wNTIgODUuMDc1MiAxNzYuNjgyIDgzLjk0MyAxNzUuOTc3QzgyLjE5MTEgMTc0Ljg3NyA4MC45Mjc3IDE3My4xNDcgODAuNDEzIDE3MS4xNDRDNzkuODk4MiAxNjkuMTQgODAuMTcxMiAxNjcuMDE2IDgxLjE3NTggMTY1LjIwOEM4MS44MjYgMTY0LjAyOSA4Mi43NzM3IDE2My4wNDEgODMuOTI0NSAxNjIuMzQzQzg1LjA1OSAxNjEuNjQ1IDg2LjM2NjUgMTYxLjI3OSA4Ny42OTg1IDE2MS4yODdDODguNjY5OCAxNjEuMjc5IDg5LjYzMDMgMTYxLjQ5IDkwLjUwODkgMTYxLjkwNEM5MS4zNTg5IDE2Mi4yOTggOTIuMTE5NyAxNjIuODYyIDkyLjc0NDkgMTYzLjU1OVYxNjEuNTE1TDk2LjA3NDMgMTYxLjUyMVpNOTAuNTE1MSAxNzMuMzc4QzkxLjI0MyAxNzIuOTUzIDkxLjg0NzcgMTcyLjM0NyA5Mi4yNjk0IDE3MS42MThDOTIuNjg3IDE3MC44ODcgOTIuOTAwMyAxNzAuMDU3IDkyLjg4NyAxNjkuMjE2QzkyLjg5NDQgMTY4LjU3NiA5Mi43NzQ0IDE2Ny45NDIgOTIuNTM0IDE2Ny4zNUM5Mi4yOTM3IDE2Ni43NTcgOTEuOTM3OCAxNjYuMjE4IDkxLjQ4NyAxNjUuNzY1QzkxLjAzNjMgMTY1LjMxMSA5MC40OTk3IDE2NC45NTIgODkuOTA4NyAxNjQuNzA4Qzg5LjMxNzYgMTY0LjQ2NCA4OC42ODM5IDE2NC4zNCA4OC4wNDQ0IDE2NC4zNDNDODcuMTk5NSAxNjQuMzM4IDg2LjM2ODkgMTY0LjU2MiA4NS42NDE2IDE2NC45OTJDODQuOTA4MyAxNjUuNDE1IDg0LjI5NzUgMTY2LjAyMiA4My44Njg5IDE2Ni43NTJDODMuNDI2OCAxNjcuNDg2IDgzLjE5OCAxNjguMzI4IDgzLjIwNzkgMTY5LjE4NUM4My4yMDYgMTcwLjAzMyA4My40MjcgMTcwLjg2NiA4My44NDg3IDE3MS42MDJDODQuMjcwMyAxNzIuMzM4IDg0Ljg3OCAxNzIuOTUgODUuNjEwNyAxNzMuMzc4Qzg2LjM1MjYgMTczLjgwMiA4Ny4xOTI2IDE3NC4wMjYgODguMDQ3NSAxNzQuMDI2Qzg4LjkwMjMgMTc0LjAyNiA4OS43NDI0IDE3My44MDIgOTAuNDg0MiAxNzMuMzc4SDkwLjUxNTFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOTkuMjc0OSAxNzYuODE2VjE1Ni42NDhIMTAyLjU5MlYxNzYuODE2SDk5LjI3NDlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTA1Ljc2IDE3Ni44MTZWMTU2LjY0OEgxMDkuMDc3VjE3Ni44MTZIMTA1Ljc2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyMy41NjcgMTYyLjM0MUMxMjQuNzYyIDE2My4wMjggMTI1Ljc1NCAxNjQuMDE3IDEyNi40NDIgMTY1LjIxQzEyNy4xMzEgMTY2LjQwMyAxMjcuNDkyIDE2Ny43NTcgMTI3LjQ5IDE2OS4xMzRDMTI3LjQ4NiAxNjkuNTQ3IDEyNy40NTcgMTY5Ljk1OSAxMjcuNDAzIDE3MC4zNjlIMTE1LjAxM0MxMTUuMTM3IDE3MS4wNjIgMTE1LjQxMSAxNzEuNzE5IDExNS44MTYgMTcyLjI5NUMxMTYuMjY2IDE3Mi44NzkgMTE2Ljg1MSAxNzMuMzQ1IDExNy41MiAxNzMuNjU0QzExOC4xODQgMTczLjkzOCAxMTguODk4IDE3NC4wODUgMTE5LjYyIDE3NC4wODZDMTIwLjQ3NyAxNzQuMDgyIDEyMS4zMjIgMTczLjg4NCAxMjIuMDkxIDE3My41MDZDMTIyLjc4MSAxNzMuMTk4IDEyMy4zOTggMTcyLjc0OCAxMjMuOTAxIDE3Mi4xODRMMTI2LjgxNiAxNzIuOTg3QzEyNi4xNyAxNzQuMjI5IDEyNS4xNSAxNzUuMjM3IDEyMy45MDEgMTc1Ljg3MUMxMjIuNTg0IDE3Ni42MjQgMTIxLjA5NCAxNzcuMDIyIDExOS41NzcgMTc3LjAyNUMxMTguMTg5IDE3Ny4wMzMgMTE2LjgyNSAxNzYuNjY0IDExNS42MyAxNzUuOTU3QzExNC40MzcgMTc1LjI2MiAxMTMuNDQ1IDE3NC4yNjggMTEyLjc1MiAxNzMuMDczQzExMi4wNTIgMTcxLjg3NiAxMTEuNjg0IDE3MC41MTQgMTExLjY4NCAxNjkuMTI4QzExMS42ODQgMTY3Ljc0MSAxMTIuMDUyIDE2Ni4zNzkgMTEyLjc1MiAxNjUuMTgyQzExMy40NDIgMTYzLjk5IDExNC40MzUgMTYzLjAwMSAxMTUuNjMgMTYyLjMxN0MxMTYuODMgMTYxLjYyNSAxMTguMTkyIDE2MS4yNiAxMTkuNTc3IDE2MS4yNkMxMjAuOTYzIDE2MS4yNiAxMjIuMzI0IDE2MS42MjUgMTIzLjUyNCAxNjIuMzE3TDEyMy41NjcgMTYyLjM0MVpNMTE3LjYxOSAxNjQuNzc0QzExNi45OSAxNjUuMDY0IDExNi40MyAxNjUuNDg1IDExNS45NzYgMTY2LjAwOUMxMTUuNTMyIDE2Ni41MzMgMTE1LjIyMSAxNjcuMTU1IDExNS4wNjggMTY3LjgyNUgxMjQuMjY1QzEyNC4wOTQgMTY3LjE1NiAxMjMuNzczIDE2Ni41MzYgMTIzLjMyNiAxNjYuMDA5QzEyMi44NzcgMTY1LjQ4OSAxMjIuMzI0IDE2NS4wNjggMTIxLjcwMiAxNjQuNzc0QzEyMS4wNjUgMTY0LjQ3IDEyMC4zNjcgMTY0LjMxMSAxMTkuNjYxIDE2NC4zMTFDMTE4Ljk1NCAxNjQuMzExIDExOC4yNTYgMTY0LjQ3IDExNy42MTkgMTY0Ljc3NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMzEuNjk2IDE1Ny44OTFIMTM0Ljk1MVYxNjEuNTQ2SDEzOS42NTJWMTY0LjQ2MUgxMzQuOTUxVjE3MS42MDVDMTM0Ljk0NiAxNzIuMDExIDEzNS4wNTggMTcyLjQxIDEzNS4yNzIgMTcyLjc1NEMxMzUuNDgyIDE3My4wOTkgMTM1Ljc3MiAxNzMuMzg3IDEzNi4xMTkgMTczLjU5NEMxMzYuNDcyIDE3My44MDIgMTM2Ljg3NiAxNzMuOTExIDEzNy4yODYgMTczLjkwOUgxMzkuNzk0VjE3Ni44MTdIMTM2LjU5NEMxMzUuNzI1IDE3Ni44MyAxMzQuODcgMTc2LjYwMSAxMzQuMTI0IDE3Ni4xNTZDMTMzLjM3OSAxNzUuNzIyIDEzMi43NjIgMTc1LjEgMTMyLjMzMiAxNzQuMzUzQzEzMS44OTQgMTczLjYwNCAxMzEuNjY2IDE3Mi43NTEgMTMxLjY3MSAxNzEuODgzVjE2NC40NzNIMTI4Ljc5M1YxNjEuNTU5SDEzMS42NzFMMTMxLjY5NiAxNTcuODkxWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTM5N18zNzY0IiB4MT0iLTEzMC4yNCIgeTE9IjE2NS41ODciIHgyPSIzMzAuNjMzIiB5Mj0iMTY1LjU4NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMjUiIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC41IiBzdG9wLWNvbG9yPSIjMDBFNzlEIi8+CjxzdG9wIG9mZnNldD0iMC43NSIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMzk3XzM3NjQiPgo8cmVjdCB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgcng9IjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMTM5N18zNzY0Ij4KPHJlY3Qgd2lkdGg9IjE5MiIgaGVpZ2h0PSIxOTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
    bt = ({
        projectId: e,
        walletConnectParameters: t
    }) => {
        const o = !ao({
            namespace: "gatewallet"
        });
        return {
            id: "gate",
            name: "GateWallet",
            iconUrl: fo,
            iconAccent: "#000",
            iconBackground: "#000",
            downloadUrls: {
                android: "https://www.gate.io/mobileapp",
                ios: "https://www.gate.io/mobileapp",
                mobile: "https://www.gate.io/mobileapp",
                qrCode: "https://www.gate.io/mobileapp",
                chrome: "https://chromewebstore.google.com/detail/gate-wallet/cpmkedoipcpimgecpmgpldfpohjplkpp",
                browserExtension: "https://chromewebstore.google.com/detail/gate-wallet/cpmkedoipcpimgecpmgpldfpohjplkpp"
            },
            mobile: {
                getUri: r => r
            },
            qrCode: o ? {
                getUri: r => r,
                instructions: {
                    learnMoreUrl: "https://www.gate.io/mobileapp",
                    steps: [{
                        description: "We recommend putting Gate Wallet on your home screen for quicker access.",
                        step: "install",
                        title: "Open the Gate Wallet app"
                    }, {
                        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
                        step: "create",
                        title: "Create or Import a Wallet"
                    }, {
                        description: "After you scan, a connection prompt will appear for you to connect your wallet.",
                        step: "scan",
                        title: "Tap the scan button"
                    }]
                }
            } : void 0,
            extension: {
                instructions: {
                    learnMoreUrl: "https://www.gate.io/mobileapp",
                    steps: [{
                        description: "We recommend pinning Binance Wallet to your taskbar for quicker access to your wallet.",
                        step: "install",
                        title: "Install the Gate Wallet extension"
                    }, {
                        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
                        step: "create",
                        title: "Create or Import a Wallet"
                    }, {
                        description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
                        step: "refresh",
                        title: "Refresh your browser"
                    }]
                }
            },
            createConnector: o ? Mt({
                projectId: e,
                walletConnectParameters: t
            }) : Dt({
                namespace: "gatewallet"
            })
        }
    };

function At(e) {
    const t = typeof window < "u" ? window : void 0;
    if (typeof t > "u" || typeof t.ethereum > "u") return;
    const n = t.ethereum.providers;
    return n ? n.find(o => o[e]) : t.ethereum[e] ? t.ethereum : void 0
}

function Tt(e) {
    const t = (n, o) => {
        const [r, ...i] = o.split("."), s = n[r];
        if (s) return i.length === 0 ? s : t(s, i.join("."))
    };
    if (typeof window < "u") return t(window, e)
}

function Ye({
    flag: e,
    namespace: t
}) {
    return !!(t && typeof Tt(t) < "u" || e && typeof At(e) < "u")
}

function po({
    flag: e,
    namespace: t
}) {
    const n = typeof window < "u" ? window : void 0;
    if (typeof n > "u") return;
    if (t) {
        const r = Tt(t);
        if (r) return r
    }
    const o = n.ethereum ? .providers;
    if (e) {
        const r = At(e);
        if (r) return r
    }
    return typeof o < "u" && o.length > 0 ? o[0] : n.ethereum
}

function go(e) {
    return t => {
        const n = e ? {
            target: () => ({
                id: t.rkDetails.id,
                name: t.rkDetails.name,
                provider: e
            })
        } : {};
        return be(o => ({ ...ht(n)(o),
            ...t
        }))
    }
}

function Te({
    flag: e,
    namespace: t,
    target: n
}) {
    const o = n || po({
        flag: e,
        namespace: t
    });
    return go(o)
}

function kt() {
    return typeof navigator < "u" && /android/i.test(navigator.userAgent)
}

function mo() {
    return typeof navigator < "u" && /iPhone|iPod/.test(navigator.userAgent)
}

function xo() {
    return typeof navigator < "u" && (/iPad/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
}

function ho() {
    return mo() || xo()
}
var rt = new Map,
    Mo = ({
        projectId: e,
        walletConnectParameters: t,
        rkDetailsShowQrModal: n
    }) => {
        let o = { ...t || {},
            projectId: e,
            showQrModal: !1
        };
        n && (o = { ...o,
            showQrModal: !0
        });
        const r = JSON.stringify(o),
            i = rt.get(r);
        if (i) return i;
        const s = wt(o);
        return rt.set(r, s), s
    };

function wo({
    projectId: e,
    walletDetails: t,
    walletConnectParameters: n
}) {
    return be(o => ({ ...Mo({
            projectId: e,
            walletConnectParameters: n,
            rkDetailsShowQrModal: t.rkDetails.showQrModal
        })(o),
        ...t
    }))
}

function Fe({
    projectId: e,
    walletConnectParameters: t
}) {
    const n = "21fef48091f12692cad574a6f7753643";
    if (!e || e === "") throw new Error("No projectId found. Every dApp must now provide a WalletConnect Cloud projectId to enable WalletConnect v2 https://www.rainbowkit.com/docs/installation#configure");
    return e === "YOUR_PROJECT_ID" && (e = n), o => wo({
        projectId: e,
        walletDetails: o,
        walletConnectParameters: t
    })
}
var Ct = ({
        projectId: e,
        options: t
    }) => ({
        id: "walletConnect",
        name: "WalletConnect",
        installed: void 0,
        iconUrl: async () => (await L(() =>
            import ("./walletConnectWallet-FNSU4KNU-f75b9e5b.js"), [])).default,
        iconBackground: "#3b99fc",
        qrCode: {
            getUri: o => o
        },
        createConnector: Fe({
            projectId: e,
            walletConnectParameters: t
        })
    }),
    yo = () => ({
        id: "safe",
        name: "Safe",
        iconAccent: "#12ff80",
        iconBackground: "#fff",
        iconUrl: async () => (await L(() =>
            import ("./safeWallet-VUYZPLY4-d3e13f45.js"), [])).default,
        installed: !(typeof window > "u") && window ? .parent !== window,
        downloadUrls: {},
        createConnector: e => be(t => ({ ...In()(t),
            ...e
        }))
    }),
    jt = ({
        projectId: e,
        walletConnectParameters: t
    }) => {
        const o = !Ye({
            namespace: "okxwallet"
        });
        return {
            id: "okx",
            name: "OKX Wallet",
            rdns: "com.okex.wallet",
            iconUrl: async () => (await L(() =>
                import ("./okxWallet-GJMKZIND-6b9b69b9.js"), [])).default,
            iconAccent: "#000",
            iconBackground: "#000",
            downloadUrls: {
                android: "https://play.google.com/store/apps/details?id=com.okinc.okex.gp",
                ios: "https://itunes.apple.com/app/id1327268470?mt=8",
                mobile: "https://okx.com/download",
                qrCode: "https://okx.com/download",
                chrome: "https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",
                edge: "https://microsoftedge.microsoft.com/addons/detail/okx-wallet/pbpjkcldjiffchgbbndmhojiacbgflha",
                firefox: "https://addons.mozilla.org/firefox/addon/okexwallet/",
                browserExtension: "https://okx.com/download"
            },
            mobile: {
                getUri: o ? r => kt() ? r : `okex://main/wc?uri=${encodeURIComponent(r)}` : void 0
            },
            qrCode: o ? {
                getUri: r => r,
                instructions: {
                    learnMoreUrl: "https://okx.com/web3/",
                    steps: [{
                        description: "wallet_connectors.okx.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.okx.qr_code.step1.title"
                    }, {
                        description: "wallet_connectors.okx.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.okx.qr_code.step2.title"
                    }, {
                        description: "wallet_connectors.okx.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.okx.qr_code.step3.title"
                    }]
                }
            } : void 0,
            extension: {
                instructions: {
                    learnMoreUrl: "https://okx.com/web3/",
                    steps: [{
                        description: "wallet_connectors.okx.extension.step1.description",
                        step: "install",
                        title: "wallet_connectors.okx.extension.step1.title"
                    }, {
                        description: "wallet_connectors.okx.extension.step2.description",
                        step: "create",
                        title: "wallet_connectors.okx.extension.step2.title"
                    }, {
                        description: "wallet_connectors.okx.extension.step3.description",
                        step: "refresh",
                        title: "wallet_connectors.okx.extension.step3.title"
                    }]
                }
            },
            createConnector: o ? Fe({
                projectId: e,
                walletConnectParameters: t
            }) : Te({
                namespace: "okxwallet"
            })
        }
    },
    No = () => ({
        id: "rabby",
        name: "Rabby Wallet",
        iconUrl: async () => (await L(() =>
            import ("./rabbyWallet-FLVUU35F-7633d926.js"), [])).default,
        rdns: "io.rabby",
        iconBackground: "#8697FF",
        installed: Ye({
            flag: "isRabby"
        }),
        downloadUrls: {
            chrome: "https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch",
            browserExtension: "https://rabby.io"
        },
        extension: {
            instructions: {
                learnMoreUrl: "https://rabby.io/",
                steps: [{
                    description: "wallet_connectors.rabby.extension.step1.description",
                    step: "install",
                    title: "wallet_connectors.rabby.extension.step1.title"
                }, {
                    description: "wallet_connectors.rabby.extension.step2.description",
                    step: "create",
                    title: "wallet_connectors.rabby.extension.step2.title"
                }, {
                    description: "wallet_connectors.rabby.extension.step3.description",
                    step: "refresh",
                    title: "wallet_connectors.rabby.extension.step3.title"
                }]
            }
        },
        createConnector: Te({
            flag: "isRabby"
        })
    });

function Eo(e) {
    return !(!e ? .isMetaMask || e.isBraveWallet && !e._events && !e._state || e.isApexWallet || e.isAvalanche || e.isBackpack || e.isBifrost || e.isBitKeep || e.isBitski || e.isBlockWallet || e.isCoinbaseWallet || e.isDawn || e.isEnkrypt || e.isExodus || e.isFrame || e.isFrontier || e.isGamestop || e.isHyperPay || e.isImToken || e.isKuCoinWallet || e.isMathWallet || e.isNestWallet || e.isOkxWallet || e.isOKExWallet || e.isOneInchIOSWallet || e.isOneInchAndroidWallet || e.isOpera || e.isPhantom || e.isPortal || e.isRabby || e.isRainbow || e.isStatus || e.isTalisman || e.isTally || e.isTokenPocket || e.isTokenary || e.isTrust || e.isTrustWallet || e.isXDEFI || e.isZeal || e.isZerion || e.__seif)
}
var It = ({
        projectId: e,
        walletConnectParameters: t
    }) => {
        const n = Ye({
                flag: "isMetaMask"
            }),
            o = !n,
            r = i => kt() ? i : ho() ? `metamask://wc?uri=${encodeURIComponent(i)}` : `https://metamask.app.link/wc?uri=${encodeURIComponent(i)}`;
        return {
            id: "metaMask",
            name: "MetaMask",
            rdns: "io.metamask",
            iconUrl: async () => (await L(() =>
                import ("./metaMaskWallet-YFHEHW7V-5f37c4db.js"), [])).default,
            iconAccent: "#f6851a",
            iconBackground: "#fff",
            installed: o ? void 0 : n,
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
                getUri: o ? r : void 0
            },
            qrCode: o ? {
                getUri: r,
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
            createConnector: o ? Fe({
                projectId: e,
                walletConnectParameters: t
            }) : Te({
                target: typeof window < "u" ? window.ethereum ? .providers ? .find(Eo) ? ? window.ethereum : void 0
            })
        }
    },
    Ot = () => ({
        id: "injected",
        name: "Browser Wallet",
        iconUrl: async () => (await L(() =>
            import ("./injectedWallet-H7LYKTQS-e614878a.js"), [])).default,
        iconBackground: "#fff",
        createConnector: Te({})
    });
const Do = 1,
    vo = Jn({
        id: 81457,
        name: "Blast",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.blast.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blastscan",
                url: "https://blastscan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 212929
            }
        },
        sourceId: Do
    }),
    V = {
        mainnet: { ...Rn,
            name: "Ethereum",
            network: "mainnet"
        },
        sepolia: { ..._n,
            name: "Ethereum Sepolia Testnet"
        },
        linea: { ...Bn,
            name: "Linea Mainnet"
        },
        mantle: { ...Un,
            name: "Mantle Mainnet"
        },
        arbitrum: { ...Yn,
            name: "Arbitrum Mainnet"
        },
        arbitrumSepolia: { ...Fn,
            name: "Arbitrum Sepolia Testnet",
            blockExplorers: {
                default: {
                    name: "Arbiscan",
                    url: "https://sepolia.arbiscan.io"
                }
            }
        },
        scrollSepolia: { ...Wn,
            name: "Scroll Sepolia Testnet"
        },
        zkSync: { ...Qn,
            name: "zkSync Mainnet"
        },
        zkSyncSepoliaTestnet: { ...Gn,
            name: "zkSync Sepolia Testnet"
        },
        lineaSepoliaTestnet: { ...Vn,
            name: "Linea Sepolia Testnet"
        },
        mantleGoerliTestnet: { ...Hn,
            name: "Mantle Sepolia Testnet"
        },
        mantaGoerliTestnet: { ...$n,
            name: "Manta Goerli Testnet"
        },
        mantleSepoliaTestnet: { ...Zn,
            name: "Manta Sepolia Testnet"
        },
        manta: { ...Xn,
            name: "Manta Mainnet"
        },
        blast: { ...vo,
            name: "Blast Mainnet"
        },
        optimism: { ...qn,
            name: "Optimism Mainnet"
        },
        base: { ...Kn,
            name: "Base Mainnet"
        }
    },
    bo = "primary",
    Ao = [{
        id: 810180,
        key: "ethereum",
        name: "zkLink Nova",
        rpcUrl: "https://rpc.zklink.io",
        logoUrl: "/img/ethereum.svg",
        blockExplorerUrl: "https://explorer.zklink.io",
        blockExplorerApi: "https://explorer-api.zklink.io",
        withdrawalFinalizerApi: "https://withdrawal-api.zklink.io",
        mainContract: "0x5fD9F73286b7E8683Bab45019C94553b93e015Cf",
        erc20BridgeL1: "0xAd16eDCF7DEB7e90096A259c81269d811544B6B6",
        erc20BridgeL2: "0x36CaABbAbfB9C09B722d9C3697C3Cb4A93650ea7",
        l1Gateway: "0x83Bc7394738A7A084081aF22EEC0051908c0055c",
        isEthGasToken: !0,
        l1Network: V.mainnet
    }, {
        id: 810180,
        key: bo,
        name: "zkLink Nova",
        rpcUrl: "https://rpc.zklink.io",
        logoUrl: "/img/linea.svg",
        blockExplorerUrl: "https://explorer.zklink.io",
        blockExplorerApi: "https://explorer-api.zklink.io",
        withdrawalFinalizerApi: "https://withdrawal-api.zklink.io",
        mainContract: "0x5Cb18b6e4e6F3b46Ce646b0f4704D53724C5Df05",
        erc20BridgeL1: "0x62cE247f34dc316f93D3830e4Bf10959FCe630f8",
        erc20BridgeL2: "0x01c3f51294494e350AD69B999Db6B382b3B510b9",
        isEthGasToken: !0,
        l1Network: V.linea
    }, {
        id: 810180,
        key: "zksync",
        name: "zkLink Nova",
        rpcUrl: "https://rpc.zklink.io",
        logoUrl: "/img/zksync.svg",
        blockExplorerUrl: "https://explorer.zklink.io",
        blockExplorerApi: "https://explorer-api.zklink.io",
        withdrawalFinalizerApi: "https://withdrawal-api.zklink.io",
        mainContract: "0xaFe8C7Cf33eD0fee179DFF20ae174C660883273A",
        erc20BridgeL1: "0xaB3DDB86072a35d74beD49AA0f9210098ebf2D08",
        erc20BridgeL2: "0x7187DB8AB8F65450a74dD40474bE778CF468C44a",
        l1Gateway: "0xeCD189e0f390826E137496a4e4a23ACf76c942Ab",
        isEthGasToken: !0,
        l1Network: V.zkSync
    }, {
        id: 810180,
        key: "arbitrum",
        name: "zkLink Nova",
        rpcUrl: "https://rpc.zklink.io",
        logoUrl: "/img/arbitrum-arb-logo.svg",
        blockExplorerUrl: "https://explorer.zklink.io",
        blockExplorerApi: "https://explorer-api.zklink.io",
        withdrawalFinalizerApi: "https://withdrawal-api.zklink.io",
        mainContract: "0xFF73a1a1d27951A005eb23276dc99CB7F8d5420A",
        erc20BridgeL1: "0xfB0Ad0B3C2605A7CA33d6badd0C685E11b8F5585",
        erc20BridgeL2: "0x6B7551DBbaE2fb728cF851baee5c3A52DF6F60a4",
        l1Gateway: "0x273D59aed2d793167c162E64b9162154B07583C0",
        isEthGasToken: !0,
        l1Network: V.arbitrum
    }, {
        id: 810180,
        key: "mantle",
        name: "zkLink Nova",
        rpcUrl: "https://rpc.zklink.io",
        logoUrl: "/img/mantle.svg",
        blockExplorerUrl: "https://explorer.zklink.io",
        blockExplorerApi: "https://explorer-api.zklink.io",
        withdrawalFinalizerApi: "https://withdrawal-api.zklink.io",
        mainContract: "0xD784d7128B46B60Ca7d8BdC17dCEC94917455657",
        erc20BridgeL1: "0x62351b47e060c61868Ab7E05920Cb42bD9A5f2B2",
        erc20BridgeL2: "0x321Ce902eDFC6466B224ce5D9A7Bc16858855272",
        l1Gateway: "0xdE1Ce751405Fe6D836349226EEdCDFFE1C3BE269",
        isEthGasToken: !1,
        l1Network: V.mantle
    }, {
        id: 810180,
        key: "manta",
        name: "zkLink Nova",
        rpcUrl: "https://rpc.zklink.io",
        logoUrl: "/img/manta.jpg",
        blockExplorerUrl: "https://explorer.zklink.io",
        blockExplorerApi: "https://explorer-api.zklink.io",
        withdrawalFinalizerApi: "https://withdrawal-api.zklink.io",
        mainContract: "0xD784d7128B46B60Ca7d8BdC17dCEC94917455657",
        erc20BridgeL1: "0x44a65dc12865A1e5249b45b4868f32b0E37168FF",
        erc20BridgeL2: "0xa898E175CfDE9C6ABfCF5948eEfBA1B852eE5B09",
        l1Gateway: "0x649Dfa2c4d09D877419fA1eDC4005BfbEF7CD82D",
        isEthGasToken: !0,
        l1Network: V.manta
    }, {
        id: 810180,
        key: "blast",
        name: "zkLink Nova",
        rpcUrl: "https://rpc.zklink.io",
        logoUrl: "/img/blast.svg",
        blockExplorerUrl: "https://explorer.zklink.io",
        blockExplorerApi: "https://explorer-api.zklink.io",
        withdrawalFinalizerApi: "https://withdrawal-api.zklink.io",
        mainContract: "0x29BA92Fe724beD5c5EBfd0099F2F64a6DC5078FD",
        erc20BridgeL1: "0x8Df0c2bA3916bF4789c50dEc5A79b2fc719F500b",
        erc20BridgeL2: "0x17887788E01A1192a26F636Cfcfc033c7Bb42348",
        l1Gateway: "0x41FaF46Ca4Dfd912B65B66D29BdD432782BB1158",
        isEthGasToken: !0,
        l1Network: V.blast
    }, {
        id: 810180,
        key: "optimism",
        name: "zkLink Nova",
        rpcUrl: "https://rpc.zklink.io",
        logoUrl: "/img/optimism.svg",
        blockExplorerUrl: "https://explorer.zklink.io",
        blockExplorerApi: "https://explorer-api.zklink.io",
        withdrawalFinalizerApi: "https://withdrawal-api.zklink.io",
        mainContract: "0x46C8D02E93d5a03899dFa7Cf8A40A07589A3fA1b",
        erc20BridgeL1: "0x5Bd51296423A9079b931414C1De65e7057326EaA",
        erc20BridgeL2: "0x6aAdaA7Bf9F5283cAF3eb2E40573D1A4d02C8B15",
        l1Gateway: "0x668e8F67adB8219e1816C2E5bBEa055A78AF3026",
        isEthGasToken: !0,
        l1Network: V.optimism
    }, {
        id: 810180,
        key: "base",
        name: "zkLink Nova",
        rpcUrl: "https://rpc.zklink.io",
        logoUrl: "/img/base.svg",
        blockExplorerUrl: "https://explorer.zklink.io",
        blockExplorerApi: "https://explorer-api.zklink.io",
        withdrawalFinalizerApi: "https://withdrawal-api.zklink.io",
        mainContract: "0xE473ce141b1416Fe526eb63Cf7433b7B8d7264Dd",
        erc20BridgeL1: "0x80d12A78EfE7604F00ed07aB2f16F643301674D5",
        erc20BridgeL2: "0xa03248B029b4e348F156f4b1d93CB433a4e1361e",
        l1Gateway: "0x4eEA93966AA5cd658225E0D43b665A5a491d2b7E",
        isEthGasToken: !0,
        l1Network: V.base
    }],
    ee = "aa1989b48f2f9f37e9e29811f97d58af",
    To = e => ({
        id: e.id,
        name: e.name,
        network: e.key,
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: [e.rpcUrl]
            },
            public: {
                http: [e.rpcUrl]
            }
        },
        blockExplorers: {
            default: {
                url: e.blockExplorerUrl,
                name: "zklink nova explorer"
            }
        },
        contracts: {
            multicall3: {
                address: "0x825267E0fA5CAe92F98540828a54198dcB3Eaeb5"
            }
        }
    }),
    zt = [To(Ao[0])],
    ne = {
        name: "zkLink Nova Drop",
        description: "NovaDrop Round One: Genesis",
        url: "https://zklink.io/novadrop",
        icons: ["../../public/icon.png"]
    };
jt({
    projectId: ee,
    walletConnectParameters: {
        metadata: ne
    }
});
vt({
    projectId: ee,
    walletConnectParameters: {
        metadata: ne
    }
});
bt({
    projectId: ee,
    walletConnectParameters: {
        metadata: ne
    }
});
No();
Ot();
It({
    projectId: ee
});
Ct({
    projectId: ee,
    options: {
        metadata: ne
    }
});
const ko = On([{
        groupName: "Recommended",
        wallets: [Ot, bt, jt, vt, It, Ct, yo]
    }], {
        appName: ne.name,
        projectId: ee
    }),
    Vi = zn({
        appName: ne.name,
        projectId: ee,
        chains: zt,
        ssr: !1
    }),
    Co = Ln({
        chains: zt,
        connectors: [...ko, wt({
            projectId: ee,
            metadata: ne,
            showQrModal: !0
        })],
        multiInjectedProviderDiscovery: !0,
        client: ({
            chain: e
        }) => Sn({
            chain: e,
            transport: Pn()
        })
    });

function jo(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Lt(...e) {
    return t => e.forEach(n => jo(n, t))
}

function oe(...e) {
    return c.useCallback(Lt(...e), e)
}
var We = c.forwardRef((e, t) => {
    const {
        children: n,
        ...o
    } = e, r = c.Children.toArray(n), i = r.find(Io);
    if (i) {
        const s = i.props.children,
            l = r.map(a => a === i ? c.Children.count(s) > 1 ? c.Children.only(null) : c.isValidElement(s) ? s.props.children : null : a);
        return w.jsx(Pe, { ...o,
            ref: t,
            children: c.isValidElement(s) ? c.cloneElement(s, void 0, l) : null
        })
    }
    return w.jsx(Pe, { ...o,
        ref: t,
        children: n
    })
});
We.displayName = "Slot";
var Pe = c.forwardRef((e, t) => {
    const {
        children: n,
        ...o
    } = e;
    if (c.isValidElement(n)) {
        const r = zo(n);
        return c.cloneElement(n, { ...Oo(o, n.props),
            ref: t ? Lt(t, r) : r
        })
    }
    return c.Children.count(n) > 1 ? c.Children.only(null) : null
});
Pe.displayName = "SlotClone";
var St = ({
    children: e
}) => w.jsx(w.Fragment, {
    children: e
});

function Io(e) {
    return c.isValidElement(e) && e.type === St
}

function Oo(e, t) {
    const n = { ...t
    };
    for (const o in t) {
        const r = e[o],
            i = t[o];
        /^on[A-Z]/.test(o) ? r && i ? n[o] = (...l) => {
            i(...l), r(...l)
        } : r && (n[o] = r) : o === "style" ? n[o] = { ...r,
            ...i
        } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function zo(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Lo = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    re = Lo.reduce((e, t) => {
        const n = c.forwardRef((o, r) => {
            const {
                asChild: i,
                ...s
            } = o, l = i ? We : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), w.jsx(l, { ...s,
                ref: r
            })
        });
        return n.displayName = `Primitive.${t}`, { ...e,
            [t]: n
        }
    }, {});

function So(e, t) {
    e && Ae.flushSync(() => e.dispatchEvent(t))
}
var Po = "VisuallyHidden",
    Pt = c.forwardRef((e, t) => w.jsx(re.span, { ...e,
        ref: t,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
Pt.displayName = Po;
var Ro = Pt,
    Rt = {
        exports: {}
    };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var t = {}.hasOwnProperty;

        function n() {
            for (var o = [], r = 0; r < arguments.length; r++) {
                var i = arguments[r];
                if (i) {
                    var s = typeof i;
                    if (s === "string" || s === "number") o.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var l = n.apply(null, i);
                            l && o.push(l)
                        }
                    } else if (s === "object") {
                        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                            o.push(i.toString());
                            continue
                        }
                        for (var a in i) t.call(i, a) && i[a] && o.push(a)
                    }
                }
            }
            return o.join(" ")
        }
        e.exports ? (n.default = n, e.exports = n) : window.classNames = n
    })()
})(Rt);
var _o = Rt.exports;
const Bo = ro(_o);

function Hi(e, t) {
    const n = c.createContext(t);

    function o(i) {
        const {
            children: s,
            ...l
        } = i, a = c.useMemo(() => l, Object.values(l));
        return w.jsx(n.Provider, {
            value: a,
            children: s
        })
    }

    function r(i) {
        const s = c.useContext(n);
        if (s) return s;
        if (t !== void 0) return t;
        throw new Error(`\`${i}\` must be used within \`${e}\``)
    }
    return o.displayName = e + "Provider", [o, r]
}

function _t(e, t = []) {
    let n = [];

    function o(i, s) {
        const l = c.createContext(s),
            a = n.length;
        n = [...n, s];

        function u(f) {
            const {
                scope: g,
                children: p,
                ...m
            } = f, x = g ? .[e][a] || l, h = c.useMemo(() => m, Object.values(m));
            return w.jsx(x.Provider, {
                value: h,
                children: p
            })
        }

        function d(f, g) {
            const p = g ? .[e][a] || l,
                m = c.useContext(p);
            if (m) return m;
            if (s !== void 0) return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider", [u, d]
    }
    const r = () => {
        const i = n.map(s => c.createContext(s));
        return function(l) {
            const a = l ? .[e] || i;
            return c.useMemo(() => ({
                [`__scope${e}`]: { ...l,
                    [e]: a
                }
            }), [l, a])
        }
    };
    return r.scopeName = e, [o, Uo(r, ...t)]
}

function Uo(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const o = e.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(i) {
            const s = o.reduce((l, {
                useScope: a,
                scopeName: u
            }) => {
                const f = a(i)[`__scope${u}`];
                return { ...l,
                    ...f
                }
            }, {});
            return c.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function H(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(r) {
        if (e ? .(r), n === !1 || !r.defaultPrevented) return t ? .(r)
    }
}
var fe = globalThis ? .document ? c.useLayoutEffect : () => {};

function ke(e) {
    const t = c.useRef(e);
    return c.useEffect(() => {
        t.current = e
    }), c.useMemo(() => (...n) => t.current ? .(...n), [])
}

function Yo(e, t = globalThis ? .document) {
    const n = ke(e);
    c.useEffect(() => {
        const o = r => {
            r.key === "Escape" && n(r)
        };
        return t.addEventListener("keydown", o, {
            capture: !0
        }), () => t.removeEventListener("keydown", o, {
            capture: !0
        })
    }, [n, t])
}
var Fo = "DismissableLayer",
    Re = "dismissableLayer.update",
    Wo = "dismissableLayer.pointerDownOutside",
    Qo = "dismissableLayer.focusOutside",
    it, Bt = c.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Ut = c.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: r,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: l,
            ...a
        } = e, u = c.useContext(Bt), [d, f] = c.useState(null), g = d ? .ownerDocument ? ? globalThis ? .document, [, p] = c.useState({}), m = oe(t, v => f(v)), x = Array.from(u.layers), [h] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), M = x.indexOf(h), N = d ? x.indexOf(d) : -1, D = u.layersWithOutsidePointerEventsDisabled.size > 0, y = N >= M, E = Ho(v => {
            const T = v.target,
                O = [...u.branches].some(k => k.contains(T));
            !y || O || (r ? .(v), s ? .(v), v.defaultPrevented || l ? .())
        }, g), b = $o(v => {
            const T = v.target;
            [...u.branches].some(k => k.contains(T)) || (i ? .(v), s ? .(v), v.defaultPrevented || l ? .())
        }, g);
        return Yo(v => {
            N === u.layers.size - 1 && (o ? .(v), !v.defaultPrevented && l && (v.preventDefault(), l()))
        }, g), c.useEffect(() => {
            if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (it = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), st(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = it)
            }
        }, [d, g, n, u]), c.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), st())
        }, [d, u]), c.useEffect(() => {
            const v = () => p({});
            return document.addEventListener(Re, v), () => document.removeEventListener(Re, v)
        }, []), w.jsx(re.div, { ...a,
            ref: m,
            style: {
                pointerEvents: D ? y ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: H(e.onFocusCapture, b.onFocusCapture),
            onBlurCapture: H(e.onBlurCapture, b.onBlurCapture),
            onPointerDownCapture: H(e.onPointerDownCapture, E.onPointerDownCapture)
        })
    });
Ut.displayName = Fo;
var Go = "DismissableLayerBranch",
    Vo = c.forwardRef((e, t) => {
        const n = c.useContext(Bt),
            o = c.useRef(null),
            r = oe(t, o);
        return c.useEffect(() => {
            const i = o.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), w.jsx(re.div, { ...e,
            ref: r
        })
    });
Vo.displayName = Go;

function Ho(e, t = globalThis ? .document) {
    const n = ke(e),
        o = c.useRef(!1),
        r = c.useRef(() => {});
    return c.useEffect(() => {
        const i = l => {
                if (l.target && !o.current) {
                    let a = function() {
                        Yt(Wo, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: l
                    };
                    l.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = a, t.addEventListener("click", r.current, {
                        once: !0
                    })) : a()
                } else t.removeEventListener("click", r.current);
                o.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", r.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function $o(e, t = globalThis ? .document) {
    const n = ke(e),
        o = c.useRef(!1);
    return c.useEffect(() => {
        const r = i => {
            i.target && !o.current && Yt(Qo, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r)
    }, [t, n]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function st() {
    const e = new CustomEvent(Re);
    document.dispatchEvent(e)
}

function Yt(e, t, n, {
    discrete: o
}) {
    const r = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && r.addEventListener(e, t, {
        once: !0
    }), o ? So(r, i) : r.dispatchEvent(i)
}

function Zo(e, t) {
    return c.useReducer((n, o) => t[n][o] ? ? n, e)
}
var Ft = e => {
    const {
        present: t,
        children: n
    } = e, o = Xo(t), r = typeof n == "function" ? n({
        present: o.isPresent
    }) : c.Children.only(n), i = oe(o.ref, qo(r));
    return typeof n == "function" || o.isPresent ? c.cloneElement(r, {
        ref: i
    }) : null
};
Ft.displayName = "Presence";

function Xo(e) {
    const [t, n] = c.useState(), o = c.useRef({}), r = c.useRef(e), i = c.useRef("none"), s = e ? "mounted" : "unmounted", [l, a] = Zo(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return c.useEffect(() => {
        const u = he(o.current);
        i.current = l === "mounted" ? u : "none"
    }, [l]), fe(() => {
        const u = o.current,
            d = r.current;
        if (d !== e) {
            const g = i.current,
                p = he(u);
            e ? a("MOUNT") : p === "none" || u ? .display === "none" ? a("UNMOUNT") : a(d && g !== p ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e
        }
    }, [e, a]), fe(() => {
        if (t) {
            const u = f => {
                    const p = he(o.current).includes(f.animationName);
                    f.target === t && p && Ae.flushSync(() => a("ANIMATION_END"))
                },
                d = f => {
                    f.target === t && (i.current = he(o.current))
                };
            return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
                t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u)
            }
        } else a("ANIMATION_END")
    }, [t, a]), {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: c.useCallback(u => {
            u && (o.current = getComputedStyle(u)), n(u)
        }, [])
    }
}

function he(e) {
    return e ? .animationName || "none"
}

function qo(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
const Ko = {
        asChild: {
            type: "boolean"
        }
    },
    Qe = ["gray", "gold", "bronze", "brown", "yellow", "amber", "orange", "tomato", "red", "ruby", "crimson", "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan", "teal", "jade", "green", "grass", "lime", "mint", "sky"],
    Jo = ["auto", "gray", "mauve", "slate", "sage", "olive", "sand"],
    $i = {
        color: {
            type: "enum",
            values: Qe,
            default: void 0
        }
    },
    Zi = {
        color: {
            type: "enum",
            values: Qe,
            default: ""
        }
    },
    er = ["top", "right", "bottom", "left"],
    Q = Math.min,
    U = Math.max,
    ye = Math.round,
    Me = Math.floor,
    q = e => ({
        x: e,
        y: e
    }),
    tr = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    nr = {
        start: "end",
        end: "start"
    };

function _e(e, t, n) {
    return U(e, Q(t, n))
}

function $(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Z(e) {
    return e.split("-")[0]
}

function le(e) {
    return e.split("-")[1]
}

function Ge(e) {
    return e === "x" ? "y" : "x"
}

function Ve(e) {
    return e === "y" ? "height" : "width"
}

function K(e) {
    return ["top", "bottom"].includes(Z(e)) ? "y" : "x"
}

function He(e) {
    return Ge(K(e))
}

function or(e, t, n) {
    n === void 0 && (n = !1);
    const o = le(e),
        r = He(e),
        i = Ve(r);
    let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Ne(s)), [s, Ne(s)]
}

function rr(e) {
    const t = Ne(e);
    return [Be(e), t, Be(t)]
}

function Be(e) {
    return e.replace(/start|end/g, t => nr[t])
}

function ir(e, t, n) {
    const o = ["left", "right"],
        r = ["right", "left"],
        i = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? r : o : t ? o : r;
        case "left":
        case "right":
            return t ? i : s;
        default:
            return []
    }
}

function sr(e, t, n, o) {
    const r = le(e);
    let i = ir(Z(e), n === "start", o);
    return r && (i = i.map(s => s + "-" + r), t && (i = i.concat(i.map(Be)))), i
}

function Ne(e) {
    return e.replace(/left|right|bottom|top/g, t => tr[t])
}

function ar(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function Wt(e) {
    return typeof e != "number" ? ar(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Ee(e) {
    const {
        x: t,
        y: n,
        width: o,
        height: r
    } = e;
    return {
        width: o,
        height: r,
        top: n,
        left: t,
        right: t + o,
        bottom: n + r,
        x: t,
        y: n
    }
}

function at(e, t, n) {
    let {
        reference: o,
        floating: r
    } = e;
    const i = K(t),
        s = He(t),
        l = Ve(s),
        a = Z(t),
        u = i === "y",
        d = o.x + o.width / 2 - r.width / 2,
        f = o.y + o.height / 2 - r.height / 2,
        g = o[l] / 2 - r[l] / 2;
    let p;
    switch (a) {
        case "top":
            p = {
                x: d,
                y: o.y - r.height
            };
            break;
        case "bottom":
            p = {
                x: d,
                y: o.y + o.height
            };
            break;
        case "right":
            p = {
                x: o.x + o.width,
                y: f
            };
            break;
        case "left":
            p = {
                x: o.x - r.width,
                y: f
            };
            break;
        default:
            p = {
                x: o.x,
                y: o.y
            }
    }
    switch (le(t)) {
        case "start":
            p[s] -= g * (n && u ? -1 : 1);
            break;
        case "end":
            p[s] += g * (n && u ? -1 : 1);
            break
    }
    return p
}
const cr = async (e, t, n) => {
    const {
        placement: o = "bottom",
        strategy: r = "absolute",
        middleware: i = [],
        platform: s
    } = n, l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: r
        }),
        {
            x: d,
            y: f
        } = at(u, o, a),
        g = o,
        p = {},
        m = 0;
    for (let x = 0; x < l.length; x++) {
        const {
            name: h,
            fn: M
        } = l[x], {
            x: N,
            y: D,
            data: y,
            reset: E
        } = await M({
            x: d,
            y: f,
            initialPlacement: o,
            placement: g,
            strategy: r,
            middlewareData: p,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = N ? ? d, f = D ? ? f, p = { ...p,
            [h]: { ...p[h],
                ...y
            }
        }, E && m <= 50 && (m++, typeof E == "object" && (E.placement && (g = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: r
        }) : E.rects), {
            x: d,
            y: f
        } = at(u, g, a)), x = -1)
    }
    return {
        x: d,
        y: f,
        placement: g,
        strategy: r,
        middlewareData: p
    }
};
async function pe(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: o,
        y: r,
        platform: i,
        rects: s,
        elements: l,
        strategy: a
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: f = "floating",
        altBoundary: g = !1,
        padding: p = 0
    } = $(t, e), m = Wt(p), h = l[g ? f === "floating" ? "reference" : "floating" : f], M = Ee(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: a
    })), N = f === "floating" ? {
        x: o,
        y: r,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, D = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), y = await (i.isElement == null ? void 0 : i.isElement(D)) ? await (i.getScale == null ? void 0 : i.getScale(D)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, E = Ee(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: N,
        offsetParent: D,
        strategy: a
    }) : N);
    return {
        top: (M.top - E.top + m.top) / y.y,
        bottom: (E.bottom - M.bottom + m.bottom) / y.y,
        left: (M.left - E.left + m.left) / y.x,
        right: (E.right - M.right + m.right) / y.x
    }
}
const lr = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: o,
                placement: r,
                rects: i,
                platform: s,
                elements: l,
                middlewareData: a
            } = t, {
                element: u,
                padding: d = 0
            } = $(e, t) || {};
            if (u == null) return {};
            const f = Wt(d),
                g = {
                    x: n,
                    y: o
                },
                p = He(r),
                m = Ve(p),
                x = await s.getDimensions(u),
                h = p === "y",
                M = h ? "top" : "left",
                N = h ? "bottom" : "right",
                D = h ? "clientHeight" : "clientWidth",
                y = i.reference[m] + i.reference[p] - g[p] - i.floating[m],
                E = g[p] - i.reference[p],
                b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
            let v = b ? b[D] : 0;
            (!v || !await (s.isElement == null ? void 0 : s.isElement(b))) && (v = l.floating[D] || i.floating[m]);
            const T = y / 2 - E / 2,
                O = v / 2 - x[m] / 2 - 1,
                k = Q(f[M], O),
                S = Q(f[N], O),
                P = k,
                R = v - x[m] - S,
                C = v / 2 - x[m] / 2 + T,
                z = _e(P, C, R),
                _ = !a.arrow && le(r) != null && C !== z && i.reference[m] / 2 - (C < P ? k : S) - x[m] / 2 < 0,
                A = _ ? C < P ? C - P : C - R : 0;
            return {
                [p]: g[p] + A,
                data: {
                    [p]: z,
                    centerOffset: C - z - A,
                    ..._ && {
                        alignmentOffset: A
                    }
                },
                reset: _
            }
        }
    }),
    ur = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, o;
                const {
                    placement: r,
                    middlewareData: i,
                    rects: s,
                    initialPlacement: l,
                    platform: a,
                    elements: u
                } = t, {
                    mainAxis: d = !0,
                    crossAxis: f = !0,
                    fallbackPlacements: g,
                    fallbackStrategy: p = "bestFit",
                    fallbackAxisSideDirection: m = "none",
                    flipAlignment: x = !0,
                    ...h
                } = $(e, t);
                if ((n = i.arrow) != null && n.alignmentOffset) return {};
                const M = Z(r),
                    N = K(l),
                    D = Z(l) === l,
                    y = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
                    E = g || (D || !x ? [Ne(l)] : rr(l)),
                    b = m !== "none";
                !g && b && E.push(...sr(l, x, m, y));
                const v = [l, ...E],
                    T = await pe(t, h),
                    O = [];
                let k = ((o = i.flip) == null ? void 0 : o.overflows) || [];
                if (d && O.push(T[M]), f) {
                    const C = or(r, s, y);
                    O.push(T[C[0]], T[C[1]])
                }
                if (k = [...k, {
                        placement: r,
                        overflows: O
                    }], !O.every(C => C <= 0)) {
                    var S, P;
                    const C = (((S = i.flip) == null ? void 0 : S.index) || 0) + 1,
                        z = v[C];
                    if (z) return {
                        data: {
                            index: C,
                            overflows: k
                        },
                        reset: {
                            placement: z
                        }
                    };
                    let _ = (P = k.filter(A => A.overflows[0] <= 0).sort((A, j) => A.overflows[1] - j.overflows[1])[0]) == null ? void 0 : P.placement;
                    if (!_) switch (p) {
                        case "bestFit":
                            {
                                var R;
                                const A = (R = k.filter(j => {
                                    if (b) {
                                        const I = K(j.placement);
                                        return I === N || I === "y"
                                    }
                                    return !0
                                }).map(j => [j.placement, j.overflows.filter(I => I > 0).reduce((I, ze) => I + ze, 0)]).sort((j, I) => j[1] - I[1])[0]) == null ? void 0 : R[0];A && (_ = A);
                                break
                            }
                        case "initialPlacement":
                            _ = l;
                            break
                    }
                    if (r !== _) return {
                        reset: {
                            placement: _
                        }
                    }
                }
                return {}
            }
        }
    };

function ct(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function lt(e) {
    return er.some(t => e[t] >= 0)
}
const dr = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
            const {
                rects: n
            } = t, {
                strategy: o = "referenceHidden",
                ...r
            } = $(e, t);
            switch (o) {
                case "referenceHidden":
                    {
                        const i = await pe(t, { ...r,
                                elementContext: "reference"
                            }),
                            s = ct(i, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: s,
                                referenceHidden: lt(s)
                            }
                        }
                    }
                case "escaped":
                    {
                        const i = await pe(t, { ...r,
                                altBoundary: !0
                            }),
                            s = ct(i, n.floating);
                        return {
                            data: {
                                escapedOffsets: s,
                                escaped: lt(s)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function fr(e, t) {
    const {
        placement: n,
        platform: o,
        elements: r
    } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = Z(n), l = le(n), a = K(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, d = i && a ? -1 : 1, f = $(t, e);
    let {
        mainAxis: g,
        crossAxis: p,
        alignmentAxis: m
    } = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...f
    };
    return l && typeof m == "number" && (p = l === "end" ? m * -1 : m), a ? {
        x: p * d,
        y: g * u
    } : {
        x: g * u,
        y: p * d
    }
}
const pr = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, o;
                const {
                    x: r,
                    y: i,
                    placement: s,
                    middlewareData: l
                } = t, a = await fr(t, e);
                return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
                    x: r + a.x,
                    y: i + a.y,
                    data: { ...a,
                        placement: s
                    }
                }
            }
        }
    },
    gr = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: o,
                    placement: r
                } = t, {
                    mainAxis: i = !0,
                    crossAxis: s = !1,
                    limiter: l = {
                        fn: h => {
                            let {
                                x: M,
                                y: N
                            } = h;
                            return {
                                x: M,
                                y: N
                            }
                        }
                    },
                    ...a
                } = $(e, t), u = {
                    x: n,
                    y: o
                }, d = await pe(t, a), f = K(Z(r)), g = Ge(f);
                let p = u[g],
                    m = u[f];
                if (i) {
                    const h = g === "y" ? "top" : "left",
                        M = g === "y" ? "bottom" : "right",
                        N = p + d[h],
                        D = p - d[M];
                    p = _e(N, p, D)
                }
                if (s) {
                    const h = f === "y" ? "top" : "left",
                        M = f === "y" ? "bottom" : "right",
                        N = m + d[h],
                        D = m - d[M];
                    m = _e(N, m, D)
                }
                const x = l.fn({ ...t,
                    [g]: p,
                    [f]: m
                });
                return { ...x,
                    data: {
                        x: x.x - n,
                        y: x.y - o
                    }
                }
            }
        }
    },
    mr = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: o,
                    placement: r,
                    rects: i,
                    middlewareData: s
                } = t, {
                    offset: l = 0,
                    mainAxis: a = !0,
                    crossAxis: u = !0
                } = $(e, t), d = {
                    x: n,
                    y: o
                }, f = K(r), g = Ge(f);
                let p = d[g],
                    m = d[f];
                const x = $(l, t),
                    h = typeof x == "number" ? {
                        mainAxis: x,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...x
                    };
                if (a) {
                    const D = g === "y" ? "height" : "width",
                        y = i.reference[g] - i.floating[D] + h.mainAxis,
                        E = i.reference[g] + i.reference[D] - h.mainAxis;
                    p < y ? p = y : p > E && (p = E)
                }
                if (u) {
                    var M, N;
                    const D = g === "y" ? "width" : "height",
                        y = ["top", "left"].includes(Z(r)),
                        E = i.reference[f] - i.floating[D] + (y && ((M = s.offset) == null ? void 0 : M[f]) || 0) + (y ? 0 : h.crossAxis),
                        b = i.reference[f] + i.reference[D] + (y ? 0 : ((N = s.offset) == null ? void 0 : N[f]) || 0) - (y ? h.crossAxis : 0);
                    m < E ? m = E : m > b && (m = b)
                }
                return {
                    [g]: p,
                    [f]: m
                }
            }
        }
    },
    xr = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                const {
                    placement: n,
                    rects: o,
                    platform: r,
                    elements: i
                } = t, {
                    apply: s = () => {},
                    ...l
                } = $(e, t), a = await pe(t, l), u = Z(n), d = le(n), f = K(n) === "y", {
                    width: g,
                    height: p
                } = o.floating;
                let m, x;
                u === "top" || u === "bottom" ? (m = u, x = d === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = u, m = d === "end" ? "top" : "bottom");
                const h = p - a.top - a.bottom,
                    M = g - a.left - a.right,
                    N = Q(p - a[m], h),
                    D = Q(g - a[x], M),
                    y = !t.middlewareData.shift;
                let E = N,
                    b = D;
                if (f ? b = d || y ? Q(D, M) : M : E = d || y ? Q(N, h) : h, y && !d) {
                    const T = U(a.left, 0),
                        O = U(a.right, 0),
                        k = U(a.top, 0),
                        S = U(a.bottom, 0);
                    f ? b = g - 2 * (T !== 0 || O !== 0 ? T + O : U(a.left, a.right)) : E = p - 2 * (k !== 0 || S !== 0 ? k + S : U(a.top, a.bottom))
                }
                await s({ ...t,
                    availableWidth: b,
                    availableHeight: E
                });
                const v = await r.getDimensions(i.floating);
                return g !== v.width || p !== v.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function ue(e) {
    return Qt(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Y(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function X(e) {
    var t;
    return (t = (Qt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function Qt(e) {
    return e instanceof Node || e instanceof Y(e).Node
}

function F(e) {
    return e instanceof Element || e instanceof Y(e).Element
}

function G(e) {
    return e instanceof HTMLElement || e instanceof Y(e).HTMLElement
}

function ut(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Y(e).ShadowRoot
}

function me(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: o,
        display: r
    } = W(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r)
}

function hr(e) {
    return ["table", "td", "th"].includes(ue(e))
}

function Ce(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function $e(e) {
    const t = Ze(),
        n = F(e) ? W(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(o => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some(o => (n.contain || "").includes(o))
}

function Mr(e) {
    let t = J(e);
    for (; G(t) && !ae(t);) {
        if ($e(t)) return t;
        if (Ce(t)) return null;
        t = J(t)
    }
    return null
}

function Ze() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function ae(e) {
    return ["html", "body", "#document"].includes(ue(e))
}

function W(e) {
    return Y(e).getComputedStyle(e)
}

function je(e) {
    return F(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function J(e) {
    if (ue(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || ut(e) && e.host || X(e);
    return ut(t) ? t.host : t
}

function Gt(e) {
    const t = J(e);
    return ae(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : G(t) && me(t) ? t : Gt(t)
}

function ge(e, t, n) {
    var o;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const r = Gt(e),
        i = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
        s = Y(r);
    return i ? t.concat(s, s.visualViewport || [], me(r) ? r : [], s.frameElement && n ? ge(s.frameElement) : []) : t.concat(r, ge(r, [], n))
}

function Vt(e) {
    const t = W(e);
    let n = parseFloat(t.width) || 0,
        o = parseFloat(t.height) || 0;
    const r = G(e),
        i = r ? e.offsetWidth : n,
        s = r ? e.offsetHeight : o,
        l = ye(n) !== i || ye(o) !== s;
    return l && (n = i, o = s), {
        width: n,
        height: o,
        $: l
    }
}

function Xe(e) {
    return F(e) ? e : e.contextElement
}

function se(e) {
    const t = Xe(e);
    if (!G(t)) return q(1);
    const n = t.getBoundingClientRect(),
        {
            width: o,
            height: r,
            $: i
        } = Vt(t);
    let s = (i ? ye(n.width) : n.width) / o,
        l = (i ? ye(n.height) : n.height) / r;
    return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
        x: s,
        y: l
    }
}
const wr = q(0);

function Ht(e) {
    const t = Y(e);
    return !Ze() || !t.visualViewport ? wr : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function yr(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== Y(e) ? !1 : t
}

function te(e, t, n, o) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        i = Xe(e);
    let s = q(1);
    t && (o ? F(o) && (s = se(o)) : s = se(e));
    const l = yr(i, n, o) ? Ht(i) : q(0);
    let a = (r.left + l.x) / s.x,
        u = (r.top + l.y) / s.y,
        d = r.width / s.x,
        f = r.height / s.y;
    if (i) {
        const g = Y(i),
            p = o && F(o) ? Y(o) : o;
        let m = g,
            x = m.frameElement;
        for (; x && o && p !== m;) {
            const h = se(x),
                M = x.getBoundingClientRect(),
                N = W(x),
                D = M.left + (x.clientLeft + parseFloat(N.paddingLeft)) * h.x,
                y = M.top + (x.clientTop + parseFloat(N.paddingTop)) * h.y;
            a *= h.x, u *= h.y, d *= h.x, f *= h.y, a += D, u += y, m = Y(x), x = m.frameElement
        }
    }
    return Ee({
        width: d,
        height: f,
        x: a,
        y: u
    })
}

function Nr(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: o,
        strategy: r
    } = e;
    const i = r === "fixed",
        s = X(o),
        l = t ? Ce(t.floating) : !1;
    if (o === s || l && i) return n;
    let a = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = q(1);
    const d = q(0),
        f = G(o);
    if ((f || !f && !i) && ((ue(o) !== "body" || me(s)) && (a = je(o)), G(o))) {
        const g = te(o);
        u = se(o), d.x = g.x + o.clientLeft, d.y = g.y + o.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + d.x,
        y: n.y * u.y - a.scrollTop * u.y + d.y
    }
}

function Er(e) {
    return Array.from(e.getClientRects())
}

function $t(e) {
    return te(X(e)).left + je(e).scrollLeft
}

function Dr(e) {
    const t = X(e),
        n = je(e),
        o = e.ownerDocument.body,
        r = U(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
        i = U(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
    let s = -n.scrollLeft + $t(e);
    const l = -n.scrollTop;
    return W(o).direction === "rtl" && (s += U(t.clientWidth, o.clientWidth) - r), {
        width: r,
        height: i,
        x: s,
        y: l
    }
}

function vr(e, t) {
    const n = Y(e),
        o = X(e),
        r = n.visualViewport;
    let i = o.clientWidth,
        s = o.clientHeight,
        l = 0,
        a = 0;
    if (r) {
        i = r.width, s = r.height;
        const u = Ze();
        (!u || u && t === "fixed") && (l = r.offsetLeft, a = r.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}

function br(e, t) {
    const n = te(e, !0, t === "fixed"),
        o = n.top + e.clientTop,
        r = n.left + e.clientLeft,
        i = G(e) ? se(e) : q(1),
        s = e.clientWidth * i.x,
        l = e.clientHeight * i.y,
        a = r * i.x,
        u = o * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}

function dt(e, t, n) {
    let o;
    if (t === "viewport") o = vr(e, n);
    else if (t === "document") o = Dr(X(e));
    else if (F(t)) o = br(t, n);
    else {
        const r = Ht(e);
        o = { ...t,
            x: t.x - r.x,
            y: t.y - r.y
        }
    }
    return Ee(o)
}

function Zt(e, t) {
    const n = J(e);
    return n === t || !F(n) || ae(n) ? !1 : W(n).position === "fixed" || Zt(n, t)
}

function Ar(e, t) {
    const n = t.get(e);
    if (n) return n;
    let o = ge(e, [], !1).filter(l => F(l) && ue(l) !== "body"),
        r = null;
    const i = W(e).position === "fixed";
    let s = i ? J(e) : e;
    for (; F(s) && !ae(s);) {
        const l = W(s),
            a = $e(s);
        !a && l.position === "fixed" && (r = null), (i ? !a && !r : !a && l.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || me(s) && !a && Zt(e, s)) ? o = o.filter(d => d !== s) : r = l, s = J(s)
    }
    return t.set(e, o), o
}

function Tr(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: o,
        strategy: r
    } = e;
    const s = [...n === "clippingAncestors" ? Ce(t) ? [] : Ar(t, this._c) : [].concat(n), o],
        l = s[0],
        a = s.reduce((u, d) => {
            const f = dt(t, d, r);
            return u.top = U(f.top, u.top), u.right = Q(f.right, u.right), u.bottom = Q(f.bottom, u.bottom), u.left = U(f.left, u.left), u
        }, dt(t, l, r));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}

function kr(e) {
    const {
        width: t,
        height: n
    } = Vt(e);
    return {
        width: t,
        height: n
    }
}

function Cr(e, t, n) {
    const o = G(t),
        r = X(t),
        i = n === "fixed",
        s = te(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = q(0);
    if (o || !o && !i)
        if ((ue(t) !== "body" || me(r)) && (l = je(t)), o) {
            const f = te(t, !0, i, t);
            a.x = f.x + t.clientLeft, a.y = f.y + t.clientTop
        } else r && (a.x = $t(r));
    const u = s.left + l.scrollLeft - a.x,
        d = s.top + l.scrollTop - a.y;
    return {
        x: u,
        y: d,
        width: s.width,
        height: s.height
    }
}

function Le(e) {
    return W(e).position === "static"
}

function ft(e, t) {
    return !G(e) || W(e).position === "fixed" ? null : t ? t(e) : e.offsetParent
}

function Xt(e, t) {
    const n = Y(e);
    if (Ce(e)) return n;
    if (!G(e)) {
        let r = J(e);
        for (; r && !ae(r);) {
            if (F(r) && !Le(r)) return r;
            r = J(r)
        }
        return n
    }
    let o = ft(e, t);
    for (; o && hr(o) && Le(o);) o = ft(o, t);
    return o && ae(o) && Le(o) && !$e(o) ? n : o || Mr(e) || n
}
const jr = async function(e) {
    const t = this.getOffsetParent || Xt,
        n = this.getDimensions,
        o = await n(e.floating);
    return {
        reference: Cr(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: o.width,
            height: o.height
        }
    }
};

function Ir(e) {
    return W(e).direction === "rtl"
}
const Or = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Nr,
    getDocumentElement: X,
    getClippingRect: Tr,
    getOffsetParent: Xt,
    getElementRects: jr,
    getClientRects: Er,
    getDimensions: kr,
    getScale: se,
    isElement: F,
    isRTL: Ir
};

function zr(e, t) {
    let n = null,
        o;
    const r = X(e);

    function i() {
        var l;
        clearTimeout(o), (l = n) == null || l.disconnect(), n = null
    }

    function s(l, a) {
        l === void 0 && (l = !1), a === void 0 && (a = 1), i();
        const {
            left: u,
            top: d,
            width: f,
            height: g
        } = e.getBoundingClientRect();
        if (l || t(), !f || !g) return;
        const p = Me(d),
            m = Me(r.clientWidth - (u + f)),
            x = Me(r.clientHeight - (d + g)),
            h = Me(u),
            N = {
                rootMargin: -p + "px " + -m + "px " + -x + "px " + -h + "px",
                threshold: U(0, Q(1, a)) || 1
            };
        let D = !0;

        function y(E) {
            const b = E[0].intersectionRatio;
            if (b !== a) {
                if (!D) return s();
                b ? s(!1, b) : o = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            D = !1
        }
        try {
            n = new IntersectionObserver(y, { ...N,
                root: r.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(y, N)
        }
        n.observe(e)
    }
    return s(!0), i
}

function Lr(e, t, n, o) {
    o === void 0 && (o = {});
    const {
        ancestorScroll: r = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: l = typeof IntersectionObserver == "function",
        animationFrame: a = !1
    } = o, u = Xe(e), d = r || i ? [...u ? ge(u) : [], ...ge(t)] : [];
    d.forEach(M => {
        r && M.addEventListener("scroll", n, {
            passive: !0
        }), i && M.addEventListener("resize", n)
    });
    const f = u && l ? zr(u, n) : null;
    let g = -1,
        p = null;
    s && (p = new ResizeObserver(M => {
        let [N] = M;
        N && N.target === u && p && (p.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
            var D;
            (D = p) == null || D.observe(t)
        })), n()
    }), u && !a && p.observe(u), p.observe(t));
    let m, x = a ? te(e) : null;
    a && h();

    function h() {
        const M = te(e);
        x && (M.x !== x.x || M.y !== x.y || M.width !== x.width || M.height !== x.height) && n(), x = M, m = requestAnimationFrame(h)
    }
    return n(), () => {
        var M;
        d.forEach(N => {
            r && N.removeEventListener("scroll", n), i && N.removeEventListener("resize", n)
        }), f ? .(), (M = p) == null || M.disconnect(), p = null, a && cancelAnimationFrame(m)
    }
}
const Sr = pr,
    Pr = gr,
    Rr = ur,
    _r = xr,
    Br = dr,
    pt = lr,
    Ur = mr,
    Yr = (e, t, n) => {
        const o = new Map,
            r = {
                platform: Or,
                ...n
            },
            i = { ...r.platform,
                _c: o
            };
        return cr(e, t, { ...r,
            platform: i
        })
    };
var we = typeof document < "u" ? c.useLayoutEffect : c.useEffect;

function De(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, o, r;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (o = n; o-- !== 0;)
                if (!De(e[o], t[o])) return !1;
            return !0
        }
        if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length) return !1;
        for (o = n; o-- !== 0;)
            if (!{}.hasOwnProperty.call(t, r[o])) return !1;
        for (o = n; o-- !== 0;) {
            const i = r[o];
            if (!(i === "_owner" && e.$$typeof) && !De(e[i], t[i])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function qt(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function gt(e, t) {
    const n = qt(e);
    return Math.round(t * n) / n
}

function mt(e) {
    const t = c.useRef(e);
    return we(() => {
        t.current = e
    }), t
}

function Fr(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: o = [],
        platform: r,
        elements: {
            reference: i,
            floating: s
        } = {},
        transform: l = !0,
        whileElementsMounted: a,
        open: u
    } = e, [d, f] = c.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [g, p] = c.useState(o);
    De(g, o) || p(o);
    const [m, x] = c.useState(null), [h, M] = c.useState(null), N = c.useCallback(A => {
        A !== b.current && (b.current = A, x(A))
    }, []), D = c.useCallback(A => {
        A !== v.current && (v.current = A, M(A))
    }, []), y = i || m, E = s || h, b = c.useRef(null), v = c.useRef(null), T = c.useRef(d), O = a != null, k = mt(a), S = mt(r), P = c.useCallback(() => {
        if (!b.current || !v.current) return;
        const A = {
            placement: t,
            strategy: n,
            middleware: g
        };
        S.current && (A.platform = S.current), Yr(b.current, v.current, A).then(j => {
            const I = { ...j,
                isPositioned: !0
            };
            R.current && !De(T.current, I) && (T.current = I, Ae.flushSync(() => {
                f(I)
            }))
        })
    }, [g, t, n, S]);
    we(() => {
        u === !1 && T.current.isPositioned && (T.current.isPositioned = !1, f(A => ({ ...A,
            isPositioned: !1
        })))
    }, [u]);
    const R = c.useRef(!1);
    we(() => (R.current = !0, () => {
        R.current = !1
    }), []), we(() => {
        if (y && (b.current = y), E && (v.current = E), y && E) {
            if (k.current) return k.current(y, E, P);
            P()
        }
    }, [y, E, P, k, O]);
    const C = c.useMemo(() => ({
            reference: b,
            floating: v,
            setReference: N,
            setFloating: D
        }), [N, D]),
        z = c.useMemo(() => ({
            reference: y,
            floating: E
        }), [y, E]),
        _ = c.useMemo(() => {
            const A = {
                position: n,
                left: 0,
                top: 0
            };
            if (!z.floating) return A;
            const j = gt(z.floating, d.x),
                I = gt(z.floating, d.y);
            return l ? { ...A,
                transform: "translate(" + j + "px, " + I + "px)",
                ...qt(z.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: j,
                top: I
            }
        }, [n, l, z.floating, d.x, d.y]);
    return c.useMemo(() => ({ ...d,
        update: P,
        refs: C,
        elements: z,
        floatingStyles: _
    }), [d, P, C, z, _])
}
const Wr = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: o,
                    padding: r
                } = typeof e == "function" ? e(n) : e;
                return o && t(o) ? o.current != null ? pt({
                    element: o.current,
                    padding: r
                }).fn(n) : {} : o ? pt({
                    element: o,
                    padding: r
                }).fn(n) : {}
            }
        }
    },
    Qr = (e, t) => ({ ...Sr(e),
        options: [e, t]
    }),
    Gr = (e, t) => ({ ...Pr(e),
        options: [e, t]
    }),
    Vr = (e, t) => ({ ...Ur(e),
        options: [e, t]
    }),
    Hr = (e, t) => ({ ...Rr(e),
        options: [e, t]
    }),
    $r = (e, t) => ({ ..._r(e),
        options: [e, t]
    }),
    Zr = (e, t) => ({ ...Br(e),
        options: [e, t]
    }),
    Xr = (e, t) => ({ ...Wr(e),
        options: [e, t]
    });
var qr = "Arrow",
    Kt = c.forwardRef((e, t) => {
        const {
            children: n,
            width: o = 10,
            height: r = 5,
            ...i
        } = e;
        return w.jsx(re.svg, { ...i,
            ref: t,
            width: o,
            height: r,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : w.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Kt.displayName = qr;
var Kr = Kt;

function Jr(e) {
    const [t, n] = c.useState(void 0);
    return fe(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const o = new ResizeObserver(r => {
                if (!Array.isArray(r) || !r.length) return;
                const i = r[0];
                let s, l;
                if ("borderBoxSize" in i) {
                    const a = i.borderBoxSize,
                        u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize, l = u.blockSize
                } else s = e.offsetWidth, l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            });
            return o.observe(e, {
                box: "border-box"
            }), () => o.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var qe = "Popper",
    [Jt, en] = _t(qe),
    [ei, tn] = Jt(qe),
    nn = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [o, r] = c.useState(null);
        return w.jsx(ei, {
            scope: t,
            anchor: o,
            onAnchorChange: r,
            children: n
        })
    };
nn.displayName = qe;
var on = "PopperAnchor",
    rn = c.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: o,
            ...r
        } = e, i = tn(on, n), s = c.useRef(null), l = oe(t, s);
        return c.useEffect(() => {
            i.onAnchorChange(o ? .current || s.current)
        }), o ? null : w.jsx(re.div, { ...r,
            ref: l
        })
    });
rn.displayName = on;
var Ke = "PopperContent",
    [ti, ni] = Jt(Ke),
    sn = c.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            side: o = "bottom",
            sideOffset: r = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: l = 0,
            avoidCollisions: a = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: f = "partial",
            hideWhenDetached: g = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: m,
            ...x
        } = e, h = tn(Ke, n), [M, N] = c.useState(null), D = oe(t, de => N(de)), [y, E] = c.useState(null), b = Jr(y), v = b ? .width ? ? 0, T = b ? .height ? ? 0, O = o + (i !== "center" ? "-" + i : ""), k = typeof d == "number" ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, S = Array.isArray(u) ? u : [u], P = S.length > 0, R = {
            padding: k,
            boundary: S.filter(ri),
            altBoundary: P
        }, {
            refs: C,
            floatingStyles: z,
            placement: _,
            isPositioned: A,
            middlewareData: j
        } = Fr({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...de) => Lr(...de, {
                animationFrame: p === "always"
            }),
            elements: {
                reference: h.anchor
            },
            middleware: [Qr({
                mainAxis: r + T,
                alignmentAxis: s
            }), a && Gr({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === "partial" ? Vr() : void 0,
                ...R
            }), a && Hr({ ...R
            }), $r({ ...R,
                apply: ({
                    elements: de,
                    rects: nt,
                    availableWidth: Tn,
                    availableHeight: kn
                }) => {
                    const {
                        width: Cn,
                        height: jn
                    } = nt.reference, xe = de.floating.style;
                    xe.setProperty("--radix-popper-available-width", `${Tn}px`), xe.setProperty("--radix-popper-available-height", `${kn}px`), xe.setProperty("--radix-popper-anchor-width", `${Cn}px`), xe.setProperty("--radix-popper-anchor-height", `${jn}px`)
                }
            }), y && Xr({
                element: y,
                padding: l
            }), ii({
                arrowWidth: v,
                arrowHeight: T
            }), g && Zr({
                strategy: "referenceHidden",
                ...R
            })]
        }), [I, ze] = ln(_), tt = ke(m);
        fe(() => {
            A && tt ? .()
        }, [A, tt]);
        const En = j.arrow ? .x,
            Dn = j.arrow ? .y,
            vn = j.arrow ? .centerOffset !== 0,
            [bn, An] = c.useState();
        return fe(() => {
            M && An(window.getComputedStyle(M).zIndex)
        }, [M]), w.jsx("div", {
            ref: C.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...z,
                transform: A ? z.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: bn,
                "--radix-popper-transform-origin": [j.transformOrigin ? .x, j.transformOrigin ? .y].join(" "),
                ...j.hide ? .referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: w.jsx(ti, {
                scope: n,
                placedSide: I,
                onArrowChange: E,
                arrowX: En,
                arrowY: Dn,
                shouldHideArrow: vn,
                children: w.jsx(re.div, {
                    "data-side": I,
                    "data-align": ze,
                    ...x,
                    ref: D,
                    style: { ...x.style,
                        animation: A ? void 0 : "none"
                    }
                })
            })
        })
    });
sn.displayName = Ke;
var an = "PopperArrow",
    oi = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    cn = c.forwardRef(function(t, n) {
        const {
            __scopePopper: o,
            ...r
        } = t, i = ni(an, o), s = oi[i.placedSide];
        return w.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: w.jsx(Kr, { ...r,
                ref: n,
                style: { ...r.style,
                    display: "block"
                }
            })
        })
    });
cn.displayName = an;

function ri(e) {
    return e !== null
}
var ii = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        const {
            placement: n,
            rects: o,
            middlewareData: r
        } = t, s = r.arrow ? .centerOffset !== 0, l = s ? 0 : e.arrowWidth, a = s ? 0 : e.arrowHeight, [u, d] = ln(n), f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d], g = (r.arrow ? .x ? ? 0) + l / 2, p = (r.arrow ? .y ? ? 0) + a / 2;
        let m = "",
            x = "";
        return u === "bottom" ? (m = s ? f : `${g}px`, x = `${-a}px`) : u === "top" ? (m = s ? f : `${g}px`, x = `${o.floating.height+a}px`) : u === "right" ? (m = `${-a}px`, x = s ? f : `${p}px`) : u === "left" && (m = `${o.floating.width+a}px`, x = s ? f : `${p}px`), {
            data: {
                x: m,
                y: x
            }
        }
    }
});

function ln(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var Xi = nn,
    si = rn,
    ai = sn,
    ci = cn,
    [Ie, qi] = _t("Tooltip", [en]),
    Je = en(),
    un = "TooltipProvider",
    li = 700,
    xt = "tooltip.open",
    [ui, dn] = Ie(un),
    fn = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = li,
            skipDelayDuration: o = 300,
            disableHoverableContent: r = !1,
            children: i
        } = e, [s, l] = c.useState(!0), a = c.useRef(!1), u = c.useRef(0);
        return c.useEffect(() => {
            const d = u.current;
            return () => window.clearTimeout(d)
        }, []), w.jsx(ui, {
            scope: t,
            isOpenDelayed: s,
            delayDuration: n,
            onOpen: c.useCallback(() => {
                window.clearTimeout(u.current), l(!1)
            }, []),
            onClose: c.useCallback(() => {
                window.clearTimeout(u.current), u.current = window.setTimeout(() => l(!0), o)
            }, [o]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: c.useCallback(d => {
                a.current = d
            }, []),
            disableHoverableContent: r,
            children: i
        })
    };
fn.displayName = un;
var pn = "Tooltip",
    [Ki, Oe] = Ie(pn),
    Ue = "TooltipTrigger",
    di = c.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...o
        } = e, r = Oe(Ue, n), i = dn(Ue, n), s = Je(n), l = c.useRef(null), a = oe(t, l, r.onTriggerChange), u = c.useRef(!1), d = c.useRef(!1), f = c.useCallback(() => u.current = !1, []);
        return c.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), w.jsx(si, {
            asChild: !0,
            ...s,
            children: w.jsx(re.button, {
                "aria-describedby": r.open ? r.contentId : void 0,
                "data-state": r.stateAttribute,
                ...o,
                ref: a,
                onPointerMove: H(e.onPointerMove, g => {
                    g.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (r.onTriggerEnter(), d.current = !0)
                }),
                onPointerLeave: H(e.onPointerLeave, () => {
                    r.onTriggerLeave(), d.current = !1
                }),
                onPointerDown: H(e.onPointerDown, () => {
                    u.current = !0, document.addEventListener("pointerup", f, {
                        once: !0
                    })
                }),
                onFocus: H(e.onFocus, () => {
                    u.current || r.onOpen()
                }),
                onBlur: H(e.onBlur, r.onClose),
                onClick: H(e.onClick, r.onClose)
            })
        })
    });
di.displayName = Ue;
var fi = "TooltipPortal",
    [Ji, pi] = Ie(fi, {
        forceMount: void 0
    }),
    ce = "TooltipContent",
    gi = c.forwardRef((e, t) => {
        const n = pi(ce, e.__scopeTooltip),
            {
                forceMount: o = n.forceMount,
                side: r = "top",
                ...i
            } = e,
            s = Oe(ce, e.__scopeTooltip);
        return w.jsx(Ft, {
            present: o || s.open,
            children: s.disableHoverableContent ? w.jsx(gn, {
                side: r,
                ...i,
                ref: t
            }) : w.jsx(mi, {
                side: r,
                ...i,
                ref: t
            })
        })
    }),
    mi = c.forwardRef((e, t) => {
        const n = Oe(ce, e.__scopeTooltip),
            o = dn(ce, e.__scopeTooltip),
            r = c.useRef(null),
            i = oe(t, r),
            [s, l] = c.useState(null),
            {
                trigger: a,
                onClose: u
            } = n,
            d = r.current,
            {
                onPointerInTransitChange: f
            } = o,
            g = c.useCallback(() => {
                l(null), f(!1)
            }, [f]),
            p = c.useCallback((m, x) => {
                const h = m.currentTarget,
                    M = {
                        x: m.clientX,
                        y: m.clientY
                    },
                    N = wi(M, h.getBoundingClientRect()),
                    D = yi(M, N),
                    y = Ni(x.getBoundingClientRect()),
                    E = Di([...D, ...y]);
                l(E), f(!0)
            }, [f]);
        return c.useEffect(() => () => g(), [g]), c.useEffect(() => {
            if (a && d) {
                const m = h => p(h, d),
                    x = h => p(h, a);
                return a.addEventListener("pointerleave", m), d.addEventListener("pointerleave", x), () => {
                    a.removeEventListener("pointerleave", m), d.removeEventListener("pointerleave", x)
                }
            }
        }, [a, d, p, g]), c.useEffect(() => {
            if (s) {
                const m = x => {
                    const h = x.target,
                        M = {
                            x: x.clientX,
                            y: x.clientY
                        },
                        N = a ? .contains(h) || d ? .contains(h),
                        D = !Ei(M, s);
                    N ? g() : D && (g(), u())
                };
                return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m)
            }
        }, [a, d, s, u, g]), w.jsx(gn, { ...e,
            ref: i
        })
    }),
    [xi, hi] = Ie(pn, {
        isInside: !1
    }),
    gn = c.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: o,
            "aria-label": r,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...l
        } = e, a = Oe(ce, n), u = Je(n), {
            onClose: d
        } = a;
        return c.useEffect(() => (document.addEventListener(xt, d), () => document.removeEventListener(xt, d)), [d]), c.useEffect(() => {
            if (a.trigger) {
                const f = g => {
                    g.target ? .contains(a.trigger) && d()
                };
                return window.addEventListener("scroll", f, {
                    capture: !0
                }), () => window.removeEventListener("scroll", f, {
                    capture: !0
                })
            }
        }, [a.trigger, d]), w.jsx(Ut, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: f => f.preventDefault(),
            onDismiss: d,
            children: w.jsxs(ai, {
                "data-state": a.stateAttribute,
                ...u,
                ...l,
                ref: t,
                style: { ...l.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [w.jsx(St, {
                    children: o
                }), w.jsx(xi, {
                    scope: n,
                    isInside: !0,
                    children: w.jsx(Ro, {
                        id: a.contentId,
                        role: "tooltip",
                        children: r || o
                    })
                })]
            })
        })
    });
gi.displayName = ce;
var mn = "TooltipArrow",
    Mi = c.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...o
        } = e, r = Je(n);
        return hi(mn, n).isInside ? null : w.jsx(ci, { ...r,
            ...o,
            ref: t
        })
    });
Mi.displayName = mn;

function wi(e, t) {
    const n = Math.abs(t.top - e.y),
        o = Math.abs(t.bottom - e.y),
        r = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, o, r, i)) {
        case i:
            return "left";
        case r:
            return "right";
        case n:
            return "top";
        case o:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function yi(e, t, n = 5) {
    const o = [];
    switch (t) {
        case "top":
            o.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            o.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            o.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            o.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return o
}

function Ni(e) {
    const {
        top: t,
        right: n,
        bottom: o,
        left: r
    } = e;
    return [{
        x: r,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: o
    }, {
        x: r,
        y: o
    }]
}

function Ei(e, t) {
    const {
        x: n,
        y: o
    } = e;
    let r = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i].x,
            a = t[i].y,
            u = t[s].x,
            d = t[s].y;
        a > o != d > o && n < (u - l) * (o - a) / (d - a) + l && (r = !r)
    }
    return r
}

function Di(e) {
    const t = e.slice();
    return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), vi(t)
}

function vi(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let o = 0; o < e.length; o++) {
        const r = e[o];
        for (; t.length >= 2;) {
            const i = t[t.length - 1],
                s = t[t.length - 2];
            if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x)) t.pop();
            else break
        }
        t.push(r)
    }
    t.pop();
    const n = [];
    for (let o = e.length - 1; o >= 0; o--) {
        const r = e[o];
        for (; n.length >= 2;) {
            const i = n[n.length - 1],
                s = n[n.length - 2];
            if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x)) n.pop();
            else break
        }
        n.push(r)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var bi = fn,
    xn = c.createContext(void 0),
    Ai = e => {
        const {
            dir: t,
            children: n
        } = e;
        return w.jsx(xn.Provider, {
            value: t,
            children: n
        })
    };

function es(e) {
    const t = c.useContext(xn);
    return e || t || "ltr"
}

function Ti(e) {
    switch (e) {
        case "tomato":
        case "red":
        case "ruby":
        case "crimson":
        case "pink":
        case "plum":
        case "purple":
        case "violet":
            return "mauve";
        case "iris":
        case "indigo":
        case "blue":
        case "sky":
        case "cyan":
            return "slate";
        case "teal":
        case "jade":
        case "mint":
        case "green":
            return "sage";
        case "grass":
        case "lime":
            return "olive";
        case "yellow":
        case "amber":
        case "orange":
        case "brown":
        case "gold":
        case "bronze":
            return "sand";
        case "gray":
            return "gray"
    }
}
const hn = ["none", "small", "medium", "large", "full"],
    ts = {
        radius: {
            type: "enum",
            values: hn,
            default: void 0
        }
    },
    ki = ["inherit", "light", "dark"],
    Ci = ["solid", "translucent"],
    ji = ["90%", "95%", "100%", "105%", "110%"],
    B = { ...Ko,
        hasBackground: {
            type: "boolean",
            default: !0
        },
        appearance: {
            type: "enum",
            values: ki,
            default: "inherit"
        },
        accentColor: {
            type: "enum",
            values: Qe,
            default: "indigo"
        },
        grayColor: {
            type: "enum",
            values: Jo,
            default: "auto"
        },
        panelBackground: {
            type: "enum",
            values: Ci,
            default: "translucent"
        },
        radius: {
            type: "enum",
            values: hn,
            default: "medium"
        },
        scaling: {
            type: "enum",
            values: ji,
            default: "100%"
        }
    },
    ie = () => {},
    ve = c.createContext(void 0);

function ns() {
    const e = c.useContext(ve);
    if (e === void 0) throw new Error("`useThemeContext` must be used within a `Theme`");
    return e
}
const Mn = c.forwardRef((e, t) => c.useContext(ve) === void 0 ? c.createElement(bi, {
    delayDuration: 200
}, c.createElement(Ai, {
    dir: "ltr"
}, c.createElement(wn, { ...e,
    ref: t
}))) : c.createElement(et, { ...e,
    ref: t
}));
Mn.displayName = "Theme";
const wn = c.forwardRef((e, t) => {
    const {
        appearance: n = B.appearance.default,
        accentColor: o = B.accentColor.default,
        grayColor: r = B.grayColor.default,
        panelBackground: i = B.panelBackground.default,
        radius: s = B.radius.default,
        scaling: l = B.scaling.default,
        hasBackground: a = B.hasBackground.default,
        ...u
    } = e, [d, f] = c.useState(n);
    c.useEffect(() => f(n), [n]);
    const [g, p] = c.useState(o);
    c.useEffect(() => p(o), [o]);
    const [m, x] = c.useState(r);
    c.useEffect(() => x(r), [r]);
    const [h, M] = c.useState(i);
    c.useEffect(() => M(i), [i]);
    const [N, D] = c.useState(s);
    c.useEffect(() => D(s), [s]);
    const [y, E] = c.useState(l);
    return c.useEffect(() => E(l), [l]), c.createElement(et, { ...u,
        ref: t,
        isRoot: !0,
        hasBackground: a,
        appearance: d,
        accentColor: g,
        grayColor: m,
        panelBackground: h,
        radius: N,
        scaling: y,
        onAppearanceChange: f,
        onAccentColorChange: p,
        onGrayColorChange: x,
        onPanelBackgroundChange: M,
        onRadiusChange: D,
        onScalingChange: E
    })
});
wn.displayName = "ThemeRoot";
const et = c.forwardRef((e, t) => {
    const n = c.useContext(ve),
        {
            asChild: o,
            isRoot: r,
            hasBackground: i,
            appearance: s = n ? .appearance ? ? B.appearance.default,
            accentColor: l = n ? .accentColor ? ? B.accentColor.default,
            grayColor: a = n ? .resolvedGrayColor ? ? B.grayColor.default,
            panelBackground: u = n ? .panelBackground ? ? B.panelBackground.default,
            radius: d = n ? .radius ? ? B.radius.default,
            scaling: f = n ? .scaling ? ? B.scaling.default,
            onAppearanceChange: g = ie,
            onAccentColorChange: p = ie,
            onGrayColorChange: m = ie,
            onPanelBackgroundChange: x = ie,
            onRadiusChange: h = ie,
            onScalingChange: M = ie,
            ...N
        } = e,
        D = o ? We : "div",
        y = a === "auto" ? Ti(l) : a,
        E = e.appearance === "light" || e.appearance === "dark",
        b = i === void 0 ? r || E : i;
    return c.createElement(ve.Provider, {
        value: c.useMemo(() => ({
            appearance: s,
            accentColor: l,
            grayColor: a,
            resolvedGrayColor: y,
            panelBackground: u,
            radius: d,
            scaling: f,
            onAppearanceChange: g,
            onAccentColorChange: p,
            onGrayColorChange: m,
            onPanelBackgroundChange: x,
            onRadiusChange: h,
            onScalingChange: M
        }), [s, l, a, y, u, d, f, g, p, m, x, h, M])
    }, c.createElement(D, {
        "data-is-root-theme": r ? "true" : "false",
        "data-accent-color": l,
        "data-gray-color": y,
        "data-has-background": b ? "true" : "false",
        "data-panel-background": u,
        "data-radius": d,
        "data-scaling": f,
        ref: t,
        ...N,
        className: Bo("radix-themes", {
            light: s === "light",
            dark: s === "dark"
        }, N.className)
    }))
});
et.displayName = "ThemeImpl";
const Ii = [{
        path: "/",
        Component: c.lazy(() => L(() =>
            import ("./index-0279e603.js"), ["static/js/index-0279e603.js", "static/js/rainbowkit-1c226f0f.js", "static/js/react-74e86ac5.js", "static/js/index-c40f0c0e.js", "static/js/___vite-browser-external_commonjs-proxy-d1c6d304.js", "static/js/useAirdropInfo-319d69b2.js", "static/js/index-fd010574.js", "static/js/Toast-7132ecba.js", "static/js/useTermsStore-46735530.js"])),
        children: [{
            path: "/",
            Component: c.lazy(() => L(() =>
                import ("./index-99f7e67a.js"), ["static/js/index-99f7e67a.js", "static/js/rainbowkit-1c226f0f.js", "static/js/react-74e86ac5.js", "static/js/LoadingButton-eb1fad67.js", "static/js/index-f11a2cde.js", "static/js/index-fd010574.js", "static/js/index-1b0fe9d4.js", "static/css/index-1a90bd11.css", "static/js/useAirdropInfo-319d69b2.js", "static/js/index-c40f0c0e.js", "static/js/___vite-browser-external_commonjs-proxy-d1c6d304.js", "static/js/useTermsStore-46735530.js", "static/css/index-74cc8871.css"]))
        }, {
            path: "/congratulations",
            Component: c.lazy(() => L(() =>
                import ("./index-ace1469d.js"), ["static/js/index-ace1469d.js", "static/js/rainbowkit-1c226f0f.js", "static/js/react-74e86ac5.js", "static/js/LoadingButton-eb1fad67.js", "static/js/index-f11a2cde.js", "static/js/index-fd010574.js", "static/js/index-c40f0c0e.js", "static/js/___vite-browser-external_commonjs-proxy-d1c6d304.js", "static/js/useAirdropInfo-319d69b2.js", "static/js/Toast-7132ecba.js", "static/js/index-c4cc1867.js", "static/css/index-835bcfe5.css"]))
        }, {
            path: "/scaling-with-zklink",
            Component: c.lazy(() => L(() =>
                import ("./index-f807f95d.js"), ["static/js/index-f807f95d.js", "static/js/rainbowkit-1c226f0f.js", "static/js/react-74e86ac5.js", "static/js/index-c4cc1867.js", "static/js/index-f11a2cde.js", "static/js/index-fd010574.js", "static/css/index-2fd403fb.css"]))
        }, {
            path: "/verify",
            Component: c.lazy(() => L(() =>
                import ("./index-f2c02ab3.js"), ["static/js/index-f2c02ab3.js", "static/js/rainbowkit-1c226f0f.js", "static/js/react-74e86ac5.js", "static/js/index-c4cc1867.js", "static/js/index-f11a2cde.js", "static/js/index-fd010574.js", "static/js/VerifyZkPass-59ba3b31.js", "static/js/index-c40f0c0e.js", "static/js/___vite-browser-external_commonjs-proxy-d1c6d304.js", "static/js/LoadingButton-eb1fad67.js", "static/js/Toast-7132ecba.js", "static/css/index-831995d0.css"]))
        }, {
            path: "/check-eligibility",
            Component: c.lazy(() => L(() =>
                import ("./index-adac9b4f.js"), ["static/js/index-adac9b4f.js", "static/js/rainbowkit-1c226f0f.js", "static/js/react-74e86ac5.js", "static/js/index-c4cc1867.js", "static/js/index-f11a2cde.js", "static/js/index-fd010574.js", "static/js/LoadingButton-eb1fad67.js", "static/js/index-c40f0c0e.js", "static/js/___vite-browser-external_commonjs-proxy-d1c6d304.js", "static/js/bn-1b8fac16.js", "static/js/inherits_browser-2c87d58f.js", "static/js/VerifyZkPass-59ba3b31.js", "static/js/Toast-7132ecba.js", "static/css/index-c2e4a002.css"]))
        }, {
            path: "/not-eligible",
            Component: c.lazy(() => L(() =>
                import ("./index-07bcb7c4.js"), ["static/js/index-07bcb7c4.js", "static/js/rainbowkit-1c226f0f.js", "static/js/react-74e86ac5.js", "static/js/index-c4cc1867.js", "static/js/index-f11a2cde.js", "static/js/index-fd010574.js", "static/js/index-1b0fe9d4.js", "static/css/index-1a90bd11.css", "static/css/index-b0faf3b9.css"]))
        }, {
            path: "/maintenance",
            Component: c.lazy(() => L(() => Promise.resolve().then(() => Bi), void 0))
        }]
    }, {
        path: "/not-available",
        Component: c.lazy(() => L(() =>
            import ("./index-e35a4f7e.js"), ["static/js/index-e35a4f7e.js", "static/js/rainbowkit-1c226f0f.js", "static/js/react-74e86ac5.js", "static/js/index-1b0fe9d4.js", "static/css/index-1a90bd11.css", "static/css/index-0dc4888c.css"]))
    }, {
        path: "*",
        Component: c.lazy(() => L(() =>
            import ("./index-12d27312.js"), ["static/js/index-12d27312.js", "static/js/rainbowkit-1c226f0f.js", "static/js/react-74e86ac5.js"]))
    }],
    Oi = "_loadingContainer_kj5n6_1",
    zi = "_loadingIndicator_kj5n6_17",
    Li = "_spin_kj5n6_1",
    Si = "_loadingText_kj5n6_26",
    Se = {
        loadingContainer: Oi,
        loadingIndicator: zi,
        spin: Li,
        loadingText: Si
    },
    Pi = ({
        text: e = "Loading"
    }) => w.jsxs("div", {
        className: Se.loadingContainer,
        children: [w.jsx("div", {
            className: Se.loadingIndicator
        }), w.jsx("p", {
            className: Se.loadingText,
            children: e
        })]
    }),
    Ri = Pi,
    _i = "nexus",
    os = 810180,
    rs = _i === "nexus",
    is = "0xd6d05CBdb8A70d3839166926f1b14d74d9953A08",
    yn = "/novadrop",
    ss = "0xBc6c0Dd07E8CadC730b57ad96028D965ad391e45",
    as = "0xd264f7001F84f25958041B6E622573460db1e8e2",
    cs = "0x3c72958D94171Fb9C7F1AbD98EE3fF385a5E2f07",
    ls = "0x318B4b54f831da07435174FA058b345F5513E7F9",
    us = "0x5720d0AcFFA621aff9DFeEe9dD9CA7500E3671B6",
    ds = "https://forms.gle/KvZdQrTsFD7bEXk88",
    fs = "https://rpc.zklink.io",
    ps = "https://zk.link/governance",
    gs = "https://app.zklink.io",
    ms = "0x825267E0fA5CAe92F98540828a54198dcB3Eaeb5",
    xs = "0xC967dabf591B1f4B86CFc74996EAD065867aF19E",
    hs = "ZKL";
const Nn = () => w.jsxs("div", {
        className: "not-available-container font-chakra-petch",
        children: [w.jsx("div", {
            className: "relative mx-[68px] py-[48px]",
            children: w.jsx("a", {
                href: "https://zk.link",
                target: "_blank",
                className: "inline-block",
                children: w.jsx("img", {
                    src: `${yn}/images/zklink.svg`,
                    alt: "Logo",
                    className: "w-[228px] h-[68px]"
                })
            })
        }), w.jsx("div", {
            className: "main-content relative mt-[100px]",
            children: w.jsxs("div", {
                children: [w.jsx("p", {
                    className: "text-center text-[#fff] text-[34px] md:text-[46px] font-[700] leadint-[40px] md:leading-[56px]",
                    children: "We'll be back soon!"
                }), w.jsx("p", {
                    className: "mt-[20px] text-center text-[#D9D9D9] text-[18px] font-[400]",
                    children: "The website is currently under maintenance"
                })]
            })
        }), w.jsx("div", {
            className: "absolute bottom-[40px] w-full text-center",
            children: w.jsxs("p", {
                className: "text-[#C6D3DD] text-[32px] font-[700]",
                children: ["Contact us in", " ", w.jsx("a", {
                    href: "https://discord.com/invite/zklink",
                    target: "_blank",
                    className: "text-[#03D498]",
                    children: "Discord"
                })]
            })
        })]
    }),
    Bi = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Nn
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ui = "0",
    Yi = io(Ii, {
        basename: yn
    }),
    Fi = yt(document.querySelector("#app")),
    Wi = new eo;
Fi.render(Number(Ui) ? w.jsx(Nn, {}) : w.jsx(to, {
    config: Co,
    children: w.jsx(no, {
        client: Wi,
        children: w.jsx(oo, {
            children: w.jsx(Mn, {
                appearance: "dark",
                accentColor: "green",
                children: w.jsx(c.Suspense, {
                    fallback: w.jsx("div", {
                        className: "fixed top-0 bottom-0 left-0 right-0",
                        children: w.jsx(Ri, {})
                    }),
                    children: w.jsx(so, {
                        router: Yi
                    })
                })
            })
        })
    })
}));
export {
    si as A, zt as B, ai as C, Ut as D, hs as E, ps as F, gs as G, ns as H, Mn as I, ds as J, fs as K, Ri as L, ms as M, os as N, is as O, re as P, ss as Q, Xi as R, We as S, rs as T, Pt as V, xs as Z, H as a, yn as b, _t as c, Ft as d, Jr as e, Hi as f, es as g, ke as h, en as i, ci as j, Lt as k, So as l, fe as m, $i as n, Ko as o, St as p, Ro as q, ts as r, Zi as s, as as t, oe as u, cs as v, ls as w, us as x, Bo as y, Vi as z
};