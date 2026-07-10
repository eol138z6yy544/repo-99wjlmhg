const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/UsersBetsModal.BRtkTjBT.js",
      "assets/react.PneIXFW0.js",
      "assets/formatNameLength.TnJ2gkai.js",
      "assets/ModalLayer.B5DWEgzR.js",
      "assets/useModalContext.CtS9G1hM.js",
      "assets/index.L_oMLRKj.js",
      "assets/index.B6ccmzU4.css",
      "assets/ModalLayer.CXW2sm24.css",
      "assets/formatShortNumber.C6zlN--3.js",
      "assets/proxy.DVwJJP5T.js",
      "assets/warehouse-bottom-banner.DuJ0nUSH.js",
      "assets/CustomButton.aFAv9M3W.js",
      "assets/proxy.B82iKJfU.js",
      "assets/roulette-arrow.JQ64dE1K.js",
      "assets/silvercoin64.pE6ZNRDh.js",
      "assets/getRandomFromTo.CAXMFiD-.js",
      "assets/formatNumberWithSpaces.C3OQmX2l.js",
      "assets/AlertModal.CFSQUkiG.js",
      "assets/exchange-success-modal.7YjBzgMk.js",
      "assets/cn.CzrlVXIY.js",
      "assets/AlertModal.DTDOZ-Cn.css",
      "assets/WithdrawLimitModal.BL76s96p.js",
      "assets/withdrawLimitModal.Bq5G3q2j.js",
      "assets/WithdrawLimitModal.CmR_AWnm.css",
      "assets/UsersBetsModal.BwTDbo9y.css",
      "assets/NumberKeyboard.JNybKHUl.js",
      "assets/icons.DuQb2KfE.js",
      "assets/NumberKeyboard.DJBfo-h1.css",
      "assets/YoursGamesHistoryModal.D3-VT12l.js",
      "assets/Pagination.DvV5r67n.js",
      "assets/Pagination.C0H8kFql.css",
      "assets/YoursGamesHistoryModal.BRLv9Tl9.css",
      "assets/SilverRouletteInfoModal.BzxPCJqg.js",
      "assets/SilverRouletteInfoModal.B9s3BIlB.css",
      "assets/ResultModal.CJL0i1K1.js",
      "assets/index.C5J4nSwT.js",
    ]),
) => i.map((i) => d[i]);
import { j as O, A as k, b as ee, d as te, u as F, U as z, p as S, _ as b, l as re, m as se, n as H, H as ae } from "./index.L_oMLRKj.js";
import { r as s, j as e } from "./react.PneIXFW0.js";
import { b as ne } from "./warehouse-bottom-banner.DuJ0nUSH.js";
import { C as oe } from "./CustomButton.aFAv9M3W.js";
import { c as le, a as ce, r as ie, w as ue } from "./roulette-arrow.JQ64dE1K.js";
import { c as me } from "./silvercoin64.pE6ZNRDh.js";
import { g as W } from "./getRandomFromTo.CAXMFiD-.js";
import { u as de } from "./useModalContext.CtS9G1hM.js";
import { f as K } from "./formatNumberWithSpaces.C3OQmX2l.js";
import L from "./AlertModal.CFSQUkiG.js";
import pe from "./WithdrawLimitModal.BL76s96p.js";
import { m as q } from "./proxy.B82iKJfU.js";
const _e = "_wrapper_10qe4_1",
  ve = "_subtitle_10qe4_7",
  fe = "_header_10qe4_38",
  we = "_bottomBannerWrapper_10qe4_50",
  xe = "_banner_10qe4_59",
  ge = "_content_10qe4_63",
  ye = "_arrowButton_10qe4_75",
  Te = "_keyboardButton_10qe4_76",
  Re = "_open_10qe4_92",
  he = "_closed_10qe4_96",
  Se = "_button_10qe4_100",
  be = "_woodImageWrapper_10qe4_106",
  Ie = "_spinAmount_10qe4_112",
  je = "_wheelWrapper_10qe4_135",
  Ne = "_rouletteImage_10qe4_146",
  Ae = "_rouletteArrowImage_10qe4_166",
  Ee = "_roulette_10qe4_146",
  Me = "_bg_10qe4_186",
  qe = "_sections_10qe4_194",
  Oe = "_section_10qe4_194",
  ke = "_sectionSilver_10qe4_235",
  Be = "_resultModal_10qe4_263",
  Pe = "_title_10qe4_285",
  We = "_rewardName_10qe4_288",
  Le = "_rewardImage_10qe4_293",
  De = "_claimBtn_10qe4_301",
  r = {
    wrapper: _e,
    subtitle: ve,
    header: fe,
    bottomBannerWrapper: we,
    banner: xe,
    content: ge,
    arrowButton: ye,
    keyboardButton: Te,
    open: Re,
    closed: he,
    button: Se,
    woodImageWrapper: be,
    spinAmount: Ie,
    wheelWrapper: je,
    rouletteImage: Ne,
    rouletteArrowImage: Ae,
    roulette: Ee,
    bg: Me,
    sections: qe,
    section: Oe,
    sectionSilver: ke,
    resultModal: Be,
    title: Pe,
    rewardName: We,
    rewardImage: Le,
    claimBtn: De,
  },
  Ce = "/silverRoulette/koleso.webp",
  Ue = ({ setRoll: t, roll: o, rewardList: i, winnerIndex: _, onFinish: p }) => {
    const c = s.useRef(null),
      w = s.useRef("default"),
      u = s.useRef(0),
      m = s.useRef(0),
      n = s.useRef(null),
      v = s.useRef(0),
      f = s.useRef(0),
      I = s.useRef(0),
      [T, j] = s.useState(!1),
      N = s.useRef(null),
      A = s.useRef(0),
      y = () => {
        (n.current !== null && cancelAnimationFrame(n.current), (n.current = null));
      },
      R = () => {
        c.current && (c.current.style.transform = `rotate(${u.current}deg)`);
      },
      E = (l) => {
        const d = 0.0006428571428571428;
        ((m.current = Math.min(0.45, m.current + d * l)), (u.current += m.current * l), R(), (n.current = requestAnimationFrame(x)));
      },
      B = (l) => {
        const a = N.current,
          g = A.current,
          d = Math.max(0, m.current - g * l),
          h = ((m.current + d) / 2) * l,
          M = u.current + h;
        if (M >= a - 0.001 || d <= 0.001) {
          ((u.current = a), (m.current = 0), R(), (w.current = "default"), y(), t(!1), p == null || p(), j(!1));
          return;
        }
        ((u.current = M), (m.current = d), R(), (n.current = requestAnimationFrame(x)));
      },
      x = (l) => {
        v.current || (v.current = l);
        const a = l - v.current;
        switch (((v.current = l), w.current)) {
          case "infinitySpin": {
            E(a);
            return;
          }
          case "slowing": {
            B(a);
            return;
          }
          default:
            n.current = null;
        }
      };
    return (
      s.useEffect(() => {
        o &&
          _ === null &&
          !T &&
          (y(),
          (w.current = "infinitySpin"),
          (v.current = 0),
          (m.current = 0.05),
          (I.current = Date.now()),
          c.current && ((c.current.style.transition = "none"), (c.current.style.animation = "none"), (c.current.style.willChange = "transform")),
          (n.current = requestAnimationFrame(x)));
      }, [o, _]),
      s.useEffect(() => {
        if (_ === null) {
          f.current = 0;
          return;
        }
        const l = W(1e3, 1500),
          a = Date.now() - I.current,
          g = l - a;
        let d;
        if (a < l && !T) {
          d = setTimeout(() => {
            j(!0);
          }, g);
          return;
        }
        const h = 360 / i.length;
        if (!f.current) {
          const Z = _ * h + h / 2,
            X = h * 0.3,
            Q = W(-X, X);
          f.current = Z + Q;
        }
        const M = (360 - ((u.current + f.current) % 360)) % 360,
          C = W(1, 3),
          U = u.current + M + C * 360,
          J = 2e-5,
          Y = 0.002,
          V = Math.max(m.current, 0.05);
        let P = (V * V) / (2 * (U - u.current));
        return (
          (P = Math.min(Y, Math.max(J, P))),
          y(),
          (w.current = "slowing"),
          (N.current = U),
          (A.current = P),
          (v.current = 0),
          (n.current = requestAnimationFrame(x)),
          () => {
            clearInterval(d);
          }
        );
      }, [_, T]),
      s.useEffect(() => y, []),
      e.jsxs("div", {
        className: r.wheelWrapper,
        children: [
          e.jsx("img", { className: r.rouletteImage, src: le, alt: "" }),
          e.jsx("img", { className: r.rouletteImage, src: ce, alt: "" }),
          e.jsx("img", { className: r.rouletteImage, src: me, alt: "" }),
          e.jsx("div", { className: r.rouletteArrowImage, children: e.jsx("img", { src: ie, alt: "" }) }),
          e.jsxs("div", {
            ref: c,
            className: r.roulette,
            style: { transform: `rotate(${u.current}deg)` },
            children: [
              e.jsx("div", { className: r.bg, children: e.jsx("img", { className: r.rouletteImageMain, src: Ce, alt: "" }) }),
              e.jsx("div", { className: r.sections, children: i.map((l, a) => e.jsx(Ve, { i: a, section: l, total: i.length }, a)) }),
            ],
          }),
        ],
      })
    );
  };
function Ve({ i: t, section: o, total: i }) {
  return e.jsx("div", {
    className: r.section,
    style: { transform: `rotate(${(360 / i) * t}deg)` },
    children: e.jsx("div", { className: r.sectionSilver, children: e.jsx("div", { className: r.value, children: o.value }) }),
  });
}
const Xe = "/silverRoulette/info.webp",
  Fe = "/silverRoulette/history.webp",
  ze = "/silverRoulette/arrowLeft.webp",
  He = "/silverRoulette/keyboard.webp",
  D = [
    { rewardType: "silver", value: "x0.1" },
    { rewardType: "silver", value: "jackpot" },
    { rewardType: "silver", value: "x0.1" },
    { rewardType: "silver", value: "x2" },
    { rewardType: "silver", value: "x1.5" },
    { rewardType: "silver", value: "x0.1" },
    { rewardType: "silver", value: "x100" },
    { rewardType: "silver", value: "x1.5" },
    { rewardType: "silver", value: "x0.1" },
    { rewardType: "silver", value: "x10" },
    { rewardType: "silver", value: "x0.1" },
    { rewardType: "silver", value: "x0.5" },
    { rewardType: "silver", value: "x1.5" },
    { rewardType: "silver", value: "x0.1" },
    { rewardType: "silver", value: "x0.5" },
    { rewardType: "silver", value: "x2" },
    { rewardType: "silver", value: "x5" },
    { rewardType: "silver", value: "x1.5" },
    { rewardType: "silver", value: "x0.1" },
    { rewardType: "silver", value: "x50" },
    { rewardType: "silver", value: "x2" },
    { rewardType: "silver", value: "x0.1" },
    { rewardType: "silver", value: "x0.5" },
    { rewardType: "silver", value: "x0.1" },
    { rewardType: "silver", value: "x1.5" },
    { rewardType: "silver", value: "x25" },
    { rewardType: "silver", value: "x0.1" },
    { rewardType: "silver", value: "x0.5" },
    { rewardType: "silver", value: "x5" },
    { rewardType: "silver", value: "x1.5" },
    { rewardType: "silver", value: "x0.5" },
  ],
  Ke = async (t) => {
    try {
      const { data: o } = await O.post("/users/silver_roulette", { amount_silver: t });
      console.log(o);
      const i = D.map((p, c) => (p.value === o.name ? c : -1)).filter((p) => p !== -1);
      let _ = null;
      if (i.length > 0) {
        const p = Math.floor(Math.random() * i.length);
        _ = i[p];
      }
      return _;
    } catch (o) {
      return (console.log(o, k.SILVER_ROULETTE_HISTORY), null);
    }
  },
  _t = async () => {
    try {
      const { data: t } = await O.get("/users/silver_roulette/history");
      return t;
    } catch (t) {
      return (console.log(t, k.SILVER_ROULETTE_HISTORY), []);
    }
  },
  vt = async () => {
    try {
      const { data: t } = await O.get("/users/silver_roulette/top");
      return t;
    } catch (t) {
      console.log(t, k.SILVER_ROULETTE_USER_BETS);
    }
  },
  $e = async () => {
    try {
      const { data: t } = await O.get("/users/silver_roulette/jackpot");
      return t;
    } catch (t) {
      console.log(t, k.SILVER_ROULETTE_JACKPOT);
    }
  },
  Ge = (t, o) => (t ? (t === "jackpot" ? "jackpot" : t.startsWith("x") ? o * Number(t.replace("x", "")) : null) : null),
  Je = s.lazy(() => b(() => import("./UsersBetsModal.BRtkTjBT.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]))),
  Ye = s.lazy(() => b(() => import("./NumberKeyboard.JNybKHUl.js"), __vite__mapDeps([25, 1, 14, 26, 3, 4, 5, 6, 7, 16, 27]))),
  Ze = s.lazy(() => b(() => import("./YoursGamesHistoryModal.D3-VT12l.js"), __vite__mapDeps([28, 1, 3, 4, 5, 6, 7, 8, 29, 30, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 31]))),
  Qe = s.lazy(() => b(() => import("./SilverRouletteInfoModal.BzxPCJqg.js"), __vite__mapDeps([32, 1, 3, 4, 5, 6, 7, 33]))),
  et = s.lazy(() => b(() => import("./ResultModal.CJL0i1K1.js"), __vite__mapDeps([34, 1, 3, 4, 5, 6, 7, 18, 11, 12, 14, 16, 35, 10, 13, 15, 17, 19, 20, 21, 22, 23]))),
  $ = 999999,
  G = 100,
  tt = () => {
    const { open: t } = de(),
      { t: o } = ee(),
      i = te(),
      _ = F(z.deposit_counter),
      p = F(z.amount_silver),
      [c, w] = s.useState(null),
      [u, m] = s.useState(!1),
      [n, v] = s.useState(1e3),
      [f, I] = s.useState(!1),
      [T, j] = s.useState(null);
    s.useEffect(() => {
      let a;
      const g = async () => {
        const d = await $e();
        j((d == null ? void 0 : d.amount_silver) ?? null);
      };
      return (
        g(),
        (a = window.setInterval(g, 1e4)),
        () => {
          clearInterval(a);
        }
      );
    }, []);
    const N = async () => {
        if ((S(), u || !n)) return;
        if (Number(n) < G) {
          t(e.jsx(L, { messageTranslateKey: o("silverRoulette.alertModal.min") }));
          return;
        }
        if (Number(n) > $) {
          t(e.jsx(L, { messageTranslateKey: o("silverRoulette.alertModal.max") }));
          return;
        }
        if (_ === 0) {
          (H(), t(e.jsx(pe, { title: "silverRoulette.alertModal.title1", text: "silverRoulette.alertModal.text1", isPayments: !0 })));
          return;
        }
        if (p < Number(n)) {
          (H(), t(e.jsx(L, { messageTranslateKey: "silverRoulette.alertModal.notEnoughSilver" })));
          return;
        }
        (m(!0), i(ae(Number(n))));
        const a = await Ke(Number(n));
        w(a);
      },
      A = async () => {
        S();
        const a = await re();
        (i(se({ user: a })), w(null), m(!1));
      },
      y = () => {
        (S(), t(e.jsx(Qe, {})));
      },
      R = () => {
        (S(), I(!f));
      },
      E = () => {
        u || (S(), t(e.jsx(Ye, { onApply: v, min: G, max: $ })));
      },
      B = () => {
        t(e.jsx(Ze, {}));
      },
      x = c !== null ? D[c].value : null,
      l = s.useMemo(() => {
        const a = Ge(x, Number(n));
        return typeof a == "number" ? Math.ceil(a) : a;
      }, [x, n]);
    return e.jsxs("div", {
      className: r.wrapper,
      children: [
        e.jsxs("div", {
          className: r.header,
          children: [
            e.jsx(q.button, { whileTap: { scale: 0.9 }, className: r.historyButton, onClick: B, children: e.jsx("img", { src: Fe, alt: "history" }) }),
            e.jsx("h2", { className: "pagetitle27", children: o("silverRoulette.title") }),
            e.jsx(q.button, { whileTap: { scale: 0.9 }, className: r.infoButton, onClick: y, children: e.jsx("img", { src: Xe, alt: "info" }) }),
          ],
        }),
        e.jsxs("p", { className: r.subtitle, children: [o("silverRoulette.jackPot"), " ", e.jsxs("span", { children: [K(T ?? 0), " ", e.jsx("img", { src: "/silvercoin64.webp", alt: "" })] }), " "] }),
        e.jsxs(q.div, {
          initial: { opacity: 0, scale: 0, left: "50%", translateX: "-50%" },
          animate: { opacity: 1, scale: 1, left: "50%", translateX: "-50%" },
          transition: { delay: 0.5, duration: 0.2 },
          className: r.woodImageWrapper,
          children: [
            e.jsx(Ue, {
              setRoll: m,
              rewardList: D,
              roll: u,
              winnerIndex: c,
              onFinish: () => {
                t(e.jsx(et, { reward: c !== null ? l : null, onClose: A }));
              },
            }),
            e.jsx("img", { src: ue, className: r.woodImage, alt: "" }),
            e.jsx("p", { className: r.spinAmount, onClick: E, children: n ? K(n) : 0 }),
          ],
        }),
        e.jsx("div", {
          className: r.bottomBannerWrapper,
          children: e.jsxs(q.div, {
            initial: { opacity: 0, bottom: -200 },
            animate: { opacity: 1, bottom: -16 },
            transition: { delay: 0.1, duration: 0.4 },
            className: r.banner,
            children: [
              e.jsx("img", { src: ne, alt: "" }),
              e.jsxs("div", {
                className: r.content,
                children: [
                  e.jsx("button", { className: r.arrowButton, onClick: R, children: e.jsx("img", { src: ze, alt: "arrow left", className: f ? r.closed : r.open }) }),
                  e.jsx(oe, { text: o("roulette.button"), onClick: N, className: `${r.button} spinButton` }),
                  e.jsx("button", { className: r.keyboardButton, onClick: E, children: e.jsx("img", { src: He, alt: "keyboard" }) }),
                ],
              }),
            ],
          }),
        }),
        f && e.jsx(Je, {}),
      ],
    });
  },
  ft = Object.freeze(Object.defineProperty({ __proto__: null, default: tt }, Symbol.toStringTag, { value: "Module" }));
export { ft as S, _t as a, vt as g, r as s };
