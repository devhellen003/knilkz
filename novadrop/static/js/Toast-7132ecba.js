import {
    j as r
} from "./rainbowkit-1c226f0f.js";
import {
    I as i
} from "./index-fd010574.js";
import {
    a as n
} from "./react-74e86ac5.js";
class a {
    constructor() {
        this.events = {}
    }
    on(t, s) {
        this.events[t] || (this.events[t] = []), this.events[t].push(s)
    }
    remove(t, s) {
        this.events[t] && (this.events[t] = this.events[t].filter(e => e !== s))
    }
    emit(t, s) {
        this.events[t] && this.events[t].forEach(e => e(s))
    }
}
const p = new a;

function f() {
    const o = r.jsx(i, {
        position: "top-right",
        containerClassName: "my-toast z-[9999999999]",
        containerStyle: {
            top: "8rem",
            right: "3rem"
        },
        toastOptions: {
            className: "toast-inner-container",
            style: {
                background: "#35373F",
                color: "#A0A5AD",
                zIndex: "99999999",
                fontFamily: "Chakra Petch"
            }
        }
    });
    return n.createPortal(o, document.body)
}
export {
    f as T, p as e
};