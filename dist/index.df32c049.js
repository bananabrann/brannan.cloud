let e = window.innerHeight,
    t = window.innerWidth;
const n = 600,
    d = 6e3 / n;
let o = { clouds1: 0, clouds2: t - t / 2, clouds3: 0 };
const s = document.getElementsByClassName("clouds1")[0],
    i = document.getElementById("clouds2"),
    l = document.getElementById("clouds3");
function c(e, d, s) {
    (o[e] -= ((t + d.offsetWidth) / n) * s),
        (d.style.left = o[e] + "px"),
        o[e] < -d.offsetWidth && (o[e] = t);
}
setInterval(function () {
    c("clouds1", s, 0.05), c("clouds2", i, 0.015), c("clouds3", l, 0.002);
}, d),
    addEventListener("resize", (n) => {
        (e = window.innerHeight), (t = window.innerWidth);
    });
//# sourceMappingURL=index.df32c049.js.map
