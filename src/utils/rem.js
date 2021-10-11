export function px2Rem(val) {
    (function (n, val) {
        var e = n.document,
            t = e.documentElement,
            i = 375,
            d = i / val,
            o = "orientationchange" in n ? "orientationchange" : "resize",
            a = function () {
                var n = t.clientWidth || 320;
                n > 750 && (n = 750);
                t.style.fontSize = n / d + "px";
            };
        if (true) {
            a()
            // fontSize需要在页面加载之前立即执行，这样才能在获取在rem值下生成的正确的宽高，而不需要根据原始的去处理
        }
        e.addEventListener &&
            (n.addEventListener(o, a, !1),
                e.addEventListener("DOMContentLoaded", a, !1));
    })(window, val);
}