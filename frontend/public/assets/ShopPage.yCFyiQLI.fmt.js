const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/AlertModal.CFSQUkiG.js",
      "assets/react.PneIXFW0.js",
      "assets/ModalLayer.B5DWEgzR.js",
      "assets/useModalContext.CtS9G1hM.js",
      "assets/index.L_oMLRKj.js",
      "assets/index.B6ccmzU4.css",
      "assets/ModalLayer.CXW2sm24.css",
      "assets/exchange-success-modal.7YjBzgMk.js",
      "assets/CustomButton.aFAv9M3W.js",
      "assets/proxy.B82iKJfU.js",
      "assets/cn.CzrlVXIY.js",
      "assets/AlertModal.DTDOZ-Cn.css",
      "assets/PurchaswSilver.CEi3eAB-.js",
      "assets/PurchaswSilver.b2u8nu4v.css",
    ]),
) => i.map((i) => d[i]);
import { u as d, U as g, b as B, c as k, p, e as P, L as q, d as $, t as M, B as E, n as N, o as F, m as L, q as D, _ as C } from "./index.L_oMLRKj.js";
import { j as s, r as h } from "./react.PneIXFW0.js";
import { C as y } from "./CustomButton.aFAv9M3W.js";
import { f as R } from "./formatNumberWithSpaces.C3OQmX2l.js";
import { m as j } from "./proxy.B82iKJfU.js";
import { b as O, c as U, a as z } from "./shop-counter-button-minus.DGSo2Qr8.js";
import { W as G } from "./NavIcons.BUhK06v4.js";
import { y as K } from "./index.DJmcVVy7.js";
import { u as V } from "./useModalContext.CtS9G1hM.js";
import { b as Y } from "./gift.BpMNMpHx.js";
import { i as H } from "./info-wood.DqjiLPa1.js";
import { b as J } from "./birdsPackData.D6tRKSmQ.js";
const Q = "_wrapper_1cv4k_1",
  X = "_purchaseBanner_1cv4k_7",
  Z = "_bgWrapper_1cv4k_16",
  ss = "_bgWrapperInner_1cv4k_20",
  ts = "_text_1cv4k_46",
  es = "_sellBirdsWrapper_1cv4k_58",
  rs = "_sellBirds_1cv4k_58",
  as = "_sellBtn_1cv4k_88",
  is = "_purchaseBannerContent_1cv4k_93",
  ns = "_l1_1cv4k_102",
  cs = "_silvercoin_1cv4k_109",
  os = "_input_1cv4k_113",
  ls = "_buyMoreSilver_1cv4k_135",
  ds = "_listWrapper_1cv4k_140",
  _s = "_tut_1cv4k_147",
  ps = "_birdsList_1cv4k_151",
  us = "_birdCard_1cv4k_157",
  ms = "_content_1cv4k_160",
  bs = "_ts_1cv4k_168",
  vs = "_birdAvatar_1cv4k_176",
  hs = "_birdInfo_1cv4k_191",
  xs = "_title_1cv4k_194",
  gs = "_birdText_1cv4k_201",
  js = "_cost_1cv4k_210",
  Bs = "_silver_1cv4k_109",
  ys = "_total_1cv4k_220",
  ks = "_btns_1cv4k_223",
  Ns = "_counter_1cv4k_227",
  ws = "_btn_1cv4k_223",
  fs = "_birdCardFirst_1cv4k_256",
  t = {
    wrapper: Q,
    purchaseBanner: X,
    bgWrapper: Z,
    bgWrapperInner: ss,
    text: ts,
    sellBirdsWrapper: es,
    sellBirds: rs,
    sellBtn: as,
    purchaseBannerContent: is,
    l1: ns,
    silvercoin: cs,
    input: os,
    buyMoreSilver: ls,
    listWrapper: ds,
    tut: _s,
    birdsList: ps,
    birdCard: us,
    content: ms,
    ts: bs,
    birdAvatar: vs,
    birdInfo: hs,
    title: xs,
    birdText: gs,
    cost: js,
    silver: Bs,
    total: ys,
    btns: ks,
    counter: Ns,
    btn: ws,
    birdCardFirst: fs,
  },
  Ps = "/purchase-silver-bg.webp",
  Cs = "/silver.webp",
  Ss = () => {
    const a = d(g.amount_silver),
      { t: r } = B(),
      i = k(),
      n = () => {
        (p(), i("/shop/buy-silver?step-1"));
      };
    return s.jsxs(j.div, {
      className: t.purchaseBanner,
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { delay: 0.1, duration: 0.3 },
      children: [
        s.jsx("img", { src: Ps, alt: "" }),
        s.jsxs("div", {
          className: t.purchaseBannerContent,
          children: [
            s.jsxs("div", {
              className: t.l1,
              children: [s.jsx("img", { src: Cs, className: t.silvercoin, alt: "" }), s.jsx("p", { className: t.input, children: s.jsx("span", { children: R(a) }) })],
            }),
            s.jsx("div", { className: t.l1, children: s.jsx(y, { text: r("shopPage.buyMoreSilver"), onClick: n, className: `button blueButton ${t.buyMoreSilver}` }) }),
          ],
        }),
      ],
    });
  },
  Ts = "_wrapper_1qsas_1",
  Ws = "_content_1qsas_16",
  Is = "_two_1qsas_41",
  As = "_blur_1qsas_50",
  v = { wrapper: Ts, content: Ws, two: Is, blur: As },
  w = ({ one: a }) => {
    const r = d(P.tutorial),
      { t: i } = B(),
      n = k();
    return (
      r &&
      s.jsxs(s.Fragment, {
        children: [
          s.jsx("div", {
            className: v.wrapper,
            children: s.jsx("div", {
              className: v.content,
              children: a
                ? s.jsxs(s.Fragment, { children: [s.jsx("p", { children: i("tutorialTwoPage.titleOne") }), s.jsx("p", { children: i("tutorialTwoPage.subtitle") })] })
                : s.jsxs(s.Fragment, {
                    children: [
                      s.jsx("p", { className: v.two, children: i("tutorialTwoPage.titleTwo") }),
                      s.jsx(y, {
                        text: s.jsxs(s.Fragment, { children: [i("warehouse"), s.jsx(G, {})] }),
                        onClick: () => {
                          (p(), n("/warehouse"));
                        },
                        className: `button greenButton ${v.claimButton}`,
                      }),
                    ],
                  }),
            }),
          }),
          s.jsx("div", { className: v.blur }),
        ],
      })
    );
  },
  qs = "/buySilver/birdsPackBg.webp",
  f = h.lazy(() => C(() => import("./AlertModal.CFSQUkiG.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))),
  $s = h.lazy(() => C(() => import("./PurchaswSilver.CEi3eAB-.js"), __vite__mapDeps([12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 13]))),
  Ms = ["/lottie/Bird_Yellow_02.lottie", "/lottie/Bird_Green_02.lottie", "/lottie/Bird_Orange_02.lottie", "/lottie/Bird_Blue_02.lottie", "/lottie/Bird_Red_02.lottie"],
  Js = () => {
    const { t: a } = B(),
      r = k(),
      i = d(g.myBirds),
      n = d(g.birds),
      u = d(g.amount_silver),
      o = d(P.tutorial),
      [l, m] = h.useState([]);
    h.useEffect(() => {
      (async () => {
        const c = await J();
        m(c);
      })();
    }, []);
    const _ = () => {
      (r("/shop/sell-birds"), p());
    };
    return s.jsxs("div", {
      className: t.wrapper,
      children: [
        s.jsx("h1", { className: "pagetitle21", children: a("shopPage.purchaseTitle") }),
        s.jsx(Ss, {}),
        o && !i.yellow && s.jsx(w, { one: !0 }),
        i.yellow && o && s.jsx(w, { one: !1 }),
        s.jsxs("div", {
          className: `${t.listWrapper} ${o ? t.tut : ""}`,
          children: [
            l.length > 0 &&
              s.jsxs("div", {
                className: t.bgWrapper,
                children: [
                  s.jsxs(q, {
                    to: "/shop/buy-silver?step-1",
                    state: { birdsPackClick: !0 },
                    className: t.bgWrapperInner,
                    children: [
                      s.jsx("img", { src: Y, alt: "gift" }),
                      s.jsxs("div", { children: [s.jsx("p", { children: a("birdsPack.title2") }), s.jsx("p", { className: t.text, children: a("birdsPack.text") })] }),
                    ],
                  }),
                  s.jsx("img", { src: qs, alt: "bg" }),
                ],
              }),
            s.jsxs("div", {
              className: t.sellBirdsWrapper,
              children: [
                s.jsxs("div", {
                  className: t.sellBirds,
                  children: [s.jsx("p", { children: a("shopPage.sellBirds") }), s.jsx(y, { text: a("shopPage.sellBtn"), onClick: _, className: `btn redButton ${t.sellBtn}` })],
                }),
                s.jsx("img", { src: H, alt: "sell" }),
              ],
            }),
            s.jsx("h2", { className: `${o ? t.birdCardFirst : ""} pagetitle21`, children: a("shopPage.birds") }),
            s.jsx("div", { className: t.birdsList, children: n.map((x, c) => s.jsx(Es, { userSilver: u, item: x, bird: Ms[c], tut: o }, c)) }),
          ],
        }),
      ],
    });
  };
function Es({ userSilver: a, item: r, bird: i, tut: n }) {
  const { open: u } = V(),
    o = $(),
    [l, m] = h.useState(1),
    { t: _ } = B(),
    x = d(M.birds),
    c = r.cost * l,
    S = r.productivity_per_hour * l,
    T = () => {
      n || (p(), m((b) => b + 1));
    },
    W = () => {
      l <= 1 || (p(), m((b) => b - 1));
    },
    I = async (b) => {
      if ((p(), a < c)) {
        (N(), u(s.jsx($s, { warehouse: !1, cost: c })));
        return;
      }
      try {
        const e = await F({ [b]: l }),
          A = {
            id: e.id,
            amount_gold: e.amount_gold,
            amount_eggs: e.amount_eggs,
            amount_silver: e.amount_silver,
            amount_roulette_tickets: e.amount_roulette_tickets,
            deposit_counter: e.deposit_counter,
            is_banned: e.is_banned,
            warehouse_level: e.warehouse_level,
            last_collect_date: e.last_collect_date,
            withdraw_counter: e.withdraw_counter,
            birds: [e.birds_a, e.birds_b, e.birds_c, e.birds_d, e.birds_e],
            myBirds: { red: e.birds_e.qty > 0, blue: e.birds_d.qty > 0, yellow: e.birds_a.qty > 0, orange: e.birds_c.qty > 0, green: e.birds_b.qty > 0 },
            registration_date: e.registration_date,
            total_productivity: e.total_productivity,
          };
        (m(1), o(L({ user: A })), D(), u(s.jsx(f, { messageTranslateKey: "alertModal.successBirdPurchase" })));
      } catch {
        (N(), u(s.jsx(f, { messageTranslateKey: "alertModal.error" })));
      }
    };
  return s.jsxs(j.div, {
    className: `${t.birdCard} ${r.id === E.BABY && n ? t.birdCardFirst : ""}
            `,
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 0.3, duration: 0.3 },
    children: [
      s.jsx("img", { src: O, alt: "" }),
      s.jsxs("div", {
        className: t.content,
        children: [
          s.jsxs("div", {
            className: t.ts,
            children: [
              s.jsx("div", { className: t.birdAvatar, children: s.jsx(K, { className: "bird", src: i, loop: !0, autoplay: x, width: 124, height: 124 }) }),
              s.jsxs("div", {
                className: t.birdInfo,
                children: [
                  s.jsx("h3", { className: t.title, style: { color: r.font_color }, children: r.name }),
                  s.jsxs("div", {
                    className: t.birdText,
                    children: [
                      s.jsxs("p", { children: [_("shopPage.eggsPerHour"), " ", s.jsx("span", { children: S })] }),
                      s.jsxs("div", { className: t.cost, children: [_("shopPage.cost"), ": ", s.jsxs("p", { className: t.silver, children: [c, " Silver"] })] }),
                      s.jsxs("p", { className: t.total, children: [_("shopPage.birdsTotal"), ": ", r.qty] }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: t.btns,
            children: [
              s.jsxs("div", {
                className: t.counter,
                children: [
                  s.jsx(j.div, { onClick: W, className: t.btn, whileTap: { scale: 0.9 }, children: s.jsx("img", { src: U, alt: "" }) }),
                  s.jsx("input", { value: l, type: "tel", className: t.input }),
                  s.jsx(j.div, { onClick: T, className: t.btn, whileTap: { scale: 0.9 }, children: s.jsx("img", { src: z, alt: "" }) }),
                ],
              }),
              s.jsx(y, { text: _("buy"), onClick: () => I(r.id), className: "button orangeButton" }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { Js as default };
