import { g as j, r as v, j as a } from "./react.PneIXFW0.js";
import { u as E } from "./useGoBackButton.CPJjDcfO.js";
import { C as x } from "./CustomButton.aFAv9M3W.js";
import { c as T, b as A, n as S, D as R, p as k } from "./index.L_oMLRKj.js";
import { m as w } from "./proxy.B82iKJfU.js";
const z = "_wrapper_7rlzr_1",
  B = "_modalBlock_7rlzr_7",
  I = "_modalContent_7rlzr_12",
  U = "_s1_7rlzr_20",
  q = "_s2_7rlzr_27",
  F = "_s3_7rlzr_34",
  $ = "_t1_7rlzr_42",
  L = "_value_7rlzr_47",
  M = "_birdsPackInfo_7rlzr_64",
  W = "_info_7rlzr_76",
  G = "_birdsPack_7rlzr_64",
  r = { wrapper: z, modalBlock: B, modalContent: I, s1: U, s2: q, s3: F, t1: $, value: L, birdsPackInfo: M, info: W, birdsPack: G },
  H = "/topup-bg.webp";
var C, N;
function J() {
  return (
    N ||
      ((N = 1),
      (C = function () {
        var o = document.getSelection();
        if (!o.rangeCount) return function () {};
        for (var s = document.activeElement, n = [], u = 0; u < o.rangeCount; u++) n.push(o.getRangeAt(u));
        switch (s.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            s.blur();
            break;
          default:
            s = null;
            break;
        }
        return (
          o.removeAllRanges(),
          function () {
            (o.type === "Caret" && o.removeAllRanges(),
              o.rangeCount ||
                n.forEach(function (g) {
                  o.addRange(g);
                }),
              s && s.focus());
          }
        );
      })),
    C
  );
}
var _, D;
function K() {
  if (D) return _;
  D = 1;
  var o = J(),
    s = { "text/plain": "Text", "text/html": "Url", default: "Text" },
    n = "Copy to clipboard: #{key}, Enter";
  function u(c) {
    var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return c.replace(/#{\s*key\s*}/g, e);
  }
  function g(c, e) {
    var i,
      d,
      h,
      p,
      m,
      t,
      b = !1;
    (e || (e = {}), (i = e.debug || !1));
    try {
      ((h = o()),
        (p = document.createRange()),
        (m = document.getSelection()),
        (t = document.createElement("span")),
        (t.textContent = c),
        (t.ariaHidden = "true"),
        (t.style.all = "unset"),
        (t.style.position = "fixed"),
        (t.style.top = 0),
        (t.style.clip = "rect(0, 0, 0, 0)"),
        (t.style.whiteSpace = "pre"),
        (t.style.webkitUserSelect = "text"),
        (t.style.MozUserSelect = "text"),
        (t.style.msUserSelect = "text"),
        (t.style.userSelect = "text"),
        t.addEventListener("copy", function (l) {
          if ((l.stopPropagation(), e.format))
            if ((l.preventDefault(), typeof l.clipboardData > "u")) {
              (i && console.warn("unable to use e.clipboardData"), i && console.warn("trying IE specific stuff"), window.clipboardData.clearData());
              var y = s[e.format] || s.default;
              window.clipboardData.setData(y, c);
            } else (l.clipboardData.clearData(), l.clipboardData.setData(e.format, c));
          e.onCopy && (l.preventDefault(), e.onCopy(l.clipboardData));
        }),
        document.body.appendChild(t),
        p.selectNodeContents(t),
        m.addRange(p));
      var f = document.execCommand("copy");
      if (!f) throw new Error("copy command was unsuccessful");
      b = !0;
    } catch (l) {
      (i && console.error("unable to copy using execCommand: ", l), i && console.warn("trying IE specific stuff"));
      try {
        (window.clipboardData.setData(e.format || "text", c), e.onCopy && e.onCopy(window.clipboardData), (b = !0));
      } catch (y) {
        (i && console.error("unable to copy using clipboardData: ", y), i && console.error("falling back to prompt"), (d = u("message" in e ? e.message : n)), window.prompt(d, c));
      }
    } finally {
      (m && (typeof m.removeRange == "function" ? m.removeRange(p) : m.removeAllRanges()), t && document.body.removeChild(t), h());
    }
    return b;
  }
  return ((_ = g), _);
}
var O = K();
const P = j(O),
  ee = () => {
    E();
    const o = T(),
      s = new URLSearchParams(window.location.search),
      { t: n } = A(),
      u = s.get("currency"),
      g = s.get("amount"),
      c = s.get("pack_id"),
      [e, i] = v.useState(null),
      [d, h] = v.useState(s.get("amount") || 0),
      [p, m] = v.useState("");
    (v.useEffect(() => {
      if (!d || !u) {
        o(-1);
        return;
      }
      try {
        const f = JSON.parse(u);
        i(f);
      } catch (f) {
        (console.error("Invalid currency param", f), S(), o(-1));
      }
    }, []),
      v.useEffect(() => {
        if (!e || !d) return;
        (async () => {
          const l = { currency_code: e.currency_code, network: e.network, amount: Number(d), ...(Number(c) !== 0 && { pack_id: Number(c) }) },
            y = await R(l);
          (m(y.address), h(y.amount));
        })();
      }, [e]));
    const t = () => {
        (k(), !(!d || !e) && P(String(d)));
      },
      b = () => {
        (k(), p && P(p));
      };
    return a.jsxs("div", {
      className: r.wrapper,
      children: [
        c
          ? a.jsxs("h1", { className: "pagetitle21 " + r.birdsPack, children: [n("birdsPack.pricePack"), " $", g] })
          : a.jsxs("h1", { className: "pagetitle21", children: [n("topupPage.pageTitle"), " ", e && (e == null ? void 0 : e.currency_code)] }),
        a.jsxs(w.div, {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 0.5, delay: 0.3 },
          className: r.modalBlock,
          children: [
            a.jsx("img", { src: H, alt: "" }),
            a.jsxs("div", {
              className: r.modalContent,
              children: [
                a.jsxs("div", {
                  className: r.s1,
                  children: [
                    a.jsx("h2", { className: r.t1, children: n("topupPage.sendThisAmount") }),
                    a.jsxs("div", { className: r.value, style: { textAlign: "center" }, children: [e && Number(d), " ", e && e.currency_code] }),
                  ],
                }),
                a.jsx("div", { className: r.s2, children: a.jsx(x, { onClick: t, text: n("topupPage.copyAmount"), className: `blueButton ${r.copyAmountBtn}` }) }),
                a.jsxs("div", {
                  className: r.s3,
                  children: [a.jsx("h2", { className: r.t1, children: n("topupPage.toThisWallet") }), a.jsx("div", { className: r.value, style: { fontSize: 16, padding: 12 }, children: p })],
                }),
                a.jsx("div", { className: r.s2, style: { marginTop: 14 }, children: a.jsx(x, { onClick: b, text: n("topupPage.copyWallet"), className: `blueButton ${r.copyAmountBtn}` }) }),
              ],
            }),
            a.jsx(w.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1, duration: 0.4 },
              className: c ? r.birdsPackInfo : r.info,
              children: n(c ? "birdsPack.info" : "topupPage.disclaimer"),
            }),
          ],
        }),
      ],
    });
  };
export { ee as default };
