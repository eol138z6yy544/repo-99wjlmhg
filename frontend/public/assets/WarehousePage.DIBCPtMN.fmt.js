const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/UpgradeWarehouseModal.x-0PM4IR.js",
      "assets/index.L_oMLRKj.js",
      "assets/react.PneIXFW0.js",
      "assets/index.B6ccmzU4.css",
      "assets/ModalLayer.B5DWEgzR.js",
      "assets/useModalContext.CtS9G1hM.js",
      "assets/ModalLayer.CXW2sm24.css",
      "assets/upgrade-eggSell-bg.6Tcgny5G.js",
      "assets/CustomButton.aFAv9M3W.js",
      "assets/proxy.B82iKJfU.js",
      "assets/formatNumberWithSpaces.C3OQmX2l.js",
      "assets/UpgradeWarehouseModal.kAenih7a.css",
      "assets/WarehouseInformationModal.BVN7CKVI.js",
      "assets/WarehouseInformationModal.BmJmTggw.css",
      "assets/EggSellModal.CvWJUxgd.js",
      "assets/EggSellModal.aFPrp2ed.css",
    ]),
) => i.map((i) => d[i]);
import { b as E, u as h, U as j, w as k, p as y, _ as b, d as $, i as U, e as V, s as A, E as B } from "./index.L_oMLRKj.js";
import { r as o, j as e, R as T } from "./react.PneIXFW0.js";
import { S as D, N as Z, a as z } from "./swiper-bundle.BdtK6tUU.js";
import { b as G } from "./warehouse-bottom-banner.DuJ0nUSH.js";
import { C as W } from "./CustomButton.aFAv9M3W.js";
import { I as H, b as q, W as R } from "./icons.DuQb2KfE.js";
import { u as F } from "./useModalContext.CtS9G1hM.js";
import { m } from "./proxy.B82iKJfU.js";
import { f as J } from "./formatNumberWithSpaces.C3OQmX2l.js";
import { u as K } from "./useCurrentWarehouse.D-6MOdYI.js";
const Q = "_wrapper_xhu5y_1",
  X = "_upgradeBanner_xhu5y_10",
  Y = "_upgradeBannerWrapper_xhu5y_14",
  ee = "_upgradeBannerWrapperHide_xhu5y_14",
  se = "_ct_xhu5y_29",
  te = "_price_xhu5y_41",
  oe = "_blue_xhu5y_52",
  ae = "_tut_xhu5y_59",
  ne = "_swiper_xhu5y_95",
  re = "_customPrev_xhu5y_103",
  ce = "_customNext_xhu5y_104",
  le = "_hidden_xhu5y_140",
  ue = "_house_xhu5y_144",
  ie = "_lockImageWrapper_xhu5y_154",
  he = "_houseImageWrapper_xhu5y_161",
  pe = "_houseText_xhu5y_168",
  de = "_value_xhu5y_173",
  ge = "_progress_xhu5y_189",
  _e = "_shadow_xhu5y_196",
  xe = "_line_xhu5y_206",
  me = "_capacity_xhu5y_215",
  ve = "_h0_xhu5y_239",
  we = "_blueTop_xhu5y_245",
  Ce = "_left_xhu5y_246",
  fe = "_right_xhu5y_247",
  je = "_eggs_xhu5y_250",
  ye = "_lot_xhu5y_269",
  Ie = "_houseContent_xhu5y_280",
  Ne = "_h1_xhu5y_294",
  be = "_h2_xhu5y_358",
  Se = "_h3_xhu5y_437",
  Be = "_h4_xhu5y_505",
  Te = "_bottomBannerWrapper_xhu5y_618",
  We = "_btnSell_xhu5y_631",
  Ee = "_bottomBannerImage_xhu5y_639",
  ke = "_content_xhu5y_647",
  Pe = "_btn_xhu5y_631",
  s = {
    wrapper: Q,
    upgradeBanner: X,
    upgradeBannerWrapper: Y,
    upgradeBannerWrapperHide: ee,
    ct: se,
    price: te,
    blue: oe,
    tut: ae,
    swiper: ne,
    customPrev: re,
    customNext: ce,
    hidden: le,
    house: ue,
    lockImageWrapper: ie,
    houseImageWrapper: he,
    houseText: pe,
    value: de,
    progress: ge,
    shadow: _e,
    line: xe,
    capacity: me,
    h0: ve,
    blueTop: we,
    left: Ce,
    right: fe,
    eggs: je,
    lot: ye,
    houseContent: Ie,
    h1: Ne,
    h2: be,
    h3: Se,
    h4: Be,
    bottomBannerWrapper: Te,
    btnSell: We,
    bottomBannerImage: Ee,
    content: ke,
    btn: Pe,
  },
  Me = o.lazy(() => b(() => import("./UpgradeWarehouseModal.x-0PM4IR.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))),
  Le = o.lazy(() => b(() => import("./WarehouseInformationModal.BVN7CKVI.js"), __vite__mapDeps([12, 1, 2, 3, 4, 5, 6, 8, 9, 10, 13]))),
  Ae = o.lazy(() => b(() => import("./EggSellModal.CvWJUxgd.js"), __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]))),
  Re = ({ show: a }) => {
    const { open: n } = F(),
      { t } = E(),
      [d, c] = o.useState(-50),
      u = h(j.warehouse_level),
      f = h(k.warehouses);
    o.useEffect(() => {
      let r;
      return (
        a ? (r = setTimeout(() => c("calc(var(--pb) + 55px)"))) : c(-50),
        () => {
          clearTimeout(r);
        }
      );
    }, [a]);
    const v = () => {
        (y(), n(e.jsx(Me, { warehouse: f.find((r) => r.level === u + 1) })));
      },
      g = () => {
        (y(), n(e.jsx(Ae, {})));
      },
      w = () => {
        (y(), n(e.jsx(Le, {})));
      };
    return e.jsxs(m.div, {
      className: s.bottomBannerWrapper,
      style: { bottom: d },
      children: [
        e.jsx("div", { className: s.bottomBannerImage, children: e.jsx("img", { src: G, alt: "" }) }),
        e.jsxs("div", {
          className: s.content,
          children: [
            e.jsx(m.button, { whileTap: { scale: 0.9 }, className: s.btn, onClick: w, children: e.jsx($e, {}) }),
            e.jsx(W, { text: e.jsxs(e.Fragment, { children: [t("warehousePage.sellButton"), e.jsx(H, {})] }), onClick: g, className: `button orangeButton ${s.btnSell}` }),
            e.jsx(m.button, { whileTap: { scale: 0.9 }, className: s.btn, onClick: v, children: e.jsx(He, {}) }),
          ],
        }),
      ],
    });
  };
function $e() {
  return e.jsx("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: e.jsx("path", {
      d: "M12.9167 19.375C13.2826 19.375 13.5896 19.251 13.8376 19.003C14.0856 18.755 14.2092 18.4484 14.2083 18.0833V12.9167C14.2083 12.5507 14.0843 12.2441 13.8363 11.997C13.5883 11.7499 13.2818 11.6259 12.9167 11.625C12.5516 11.6241 12.245 11.7481 11.997 11.997C11.749 12.2459 11.625 12.5524 11.625 12.9167V18.0833C11.625 18.4493 11.749 18.7563 11.997 19.0043C12.245 19.2523 12.5516 19.3759 12.9167 19.375ZM12.9167 9.04167C13.2826 9.04167 13.5896 8.91767 13.8376 8.66967C14.0856 8.42167 14.2092 8.11511 14.2083 7.75C14.2075 7.38489 14.0835 7.07833 13.8363 6.83033C13.5892 6.58233 13.2826 6.45833 12.9167 6.45833C12.5507 6.45833 12.2441 6.58233 11.997 6.83033C11.7499 7.07833 11.6259 7.38489 11.625 7.75C11.6241 8.11511 11.7481 8.4221 11.997 8.67096C12.2459 8.91982 12.5524 9.04339 12.9167 9.04167ZM12.9167 25.8333C11.1299 25.8333 9.4507 25.4941 7.87917 24.8155C6.30764 24.1369 4.94063 23.2168 3.77813 22.0552C2.61563 20.8936 1.69553 19.5266 1.01784 17.9542C0.340141 16.3818 0.000862746 14.7026 1.63502e-06 12.9167C-0.000859476 11.1307 0.338418 9.45156 1.01784 7.87917C1.69725 6.30678 2.61735 4.93976 3.77813 3.77813C4.9389 2.61649 6.30592 1.69639 7.87917 1.01783C9.45242 0.339278 11.1316 0 12.9167 0C14.7018 0 16.3809 0.339278 17.9542 1.01783C19.5274 1.69639 20.8944 2.61649 22.0552 3.77813C23.216 4.93976 24.1365 6.30678 24.8168 7.87917C25.4971 9.45156 25.8359 11.1307 25.8333 12.9167C25.8308 14.7026 25.4915 16.3818 24.8155 17.9542C24.1395 19.5266 23.2194 20.8936 22.0552 22.0552C20.891 23.2168 19.524 24.1374 17.9542 24.8168C16.3844 25.4962 14.7052 25.8351 12.9167 25.8333ZM12.9167 23.25C15.8014 23.25 18.2448 22.249 20.2469 20.2469C22.249 18.2448 23.25 15.8014 23.25 12.9167C23.25 10.0319 22.249 7.58854 20.2469 5.58646C18.2448 3.58438 15.8014 2.58333 12.9167 2.58333C10.0319 2.58333 7.58854 3.58438 5.58646 5.58646C3.58438 7.58854 2.58334 10.0319 2.58334 12.9167C2.58334 15.8014 3.58438 18.2448 5.58646 20.2469C7.58854 22.249 10.0319 23.25 12.9167 23.25Z",
      fill: "#EBA872",
    }),
  });
}
function He() {
  return e.jsx("svg", {
    width: "23",
    height: "26",
    viewBox: "0 0 23 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: e.jsx("path", {
      d: "M7.11438 23.1144V12.4477H2.33305C2.06938 12.4477 1.81165 12.3694 1.59244 12.2229C1.37322 12.0764 1.20237 11.8682 1.10148 11.6246C1.00059 11.381 0.974181 11.1129 1.0256 10.8543C1.07703 10.5957 1.20397 10.3582 1.39038 10.1717L10.1717 1.39038C10.4218 1.14042 10.7608 1 11.1144 1C11.4679 1 11.807 1.14042 12.057 1.39038L20.8384 10.1717C21.0248 10.3582 21.1517 10.5957 21.2032 10.8543C21.2546 11.1129 21.2282 11.381 21.1273 11.6246C21.0264 11.8682 20.8555 12.0764 20.6363 12.2229C20.4171 12.3694 20.1594 12.4477 19.8957 12.4477H15.1144V23.1144C15.1144 23.468 14.9739 23.8071 14.7239 24.0572C14.4738 24.3072 14.1347 24.4477 13.781 24.4477H8.44772C8.09409 24.4477 7.75496 24.3072 7.50491 24.0572C7.25486 23.8071 7.11438 23.468 7.11438 23.1144Z",
      stroke: "#EBA872",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
const Fe = "/warehouses/warehouseIconOne.svg",
  Oe = "/warehouses/warehouseIconTwo.svg",
  Ue = "/warehouses/warehouseIconThree.svg",
  Ve = "/warehouses/warehouseIconFour.svg",
  De = "/warehouses/warehouseIconFive.svg",
  Ze = "/warehouses/lotOne.svg",
  ze = "/warehouses/lotTwo.svg",
  Ge = "/warehouses/lotThree.svg",
  qe = "/warehouses/lotFour.svg",
  Je = "/warehouses/lotFive.svg",
  Ke = "/warehouses/blueTop.svg",
  Qe = "/warehouses/left.svg",
  Xe = "/warehouses/right.svg",
  Ye = "/lock.webp",
  es = [Fe, Oe, Ue, Ve, De],
  ss = [Ze, ze, Ge, qe, Je],
  ts = [2, 3, 8, 4, 6],
  os = [8, 15, 32, 44, 90],
  as = [s.h0, s.h1, s.h2, s.h3, s.h4],
  ns = ({ warehouse: a, handleUpgrade: n }) => {
    const t = h(j.amount_eggs),
      d = h(j.warehouse_level),
      c = h(k.warehouses),
      { t: u } = E(),
      [f, v] = o.useState(!1),
      [g, w] = o.useState(!1),
      [r, I] = o.useState("0%");
    o.useEffect(() => {
      const _ = c.find((S) => S.level === a.level);
      if (!_) return;
      (v(t >= _.capacity), w(d < a.level));
      const x = Math.min(t / a.capacity, 1) * 100;
      I(`${x}%`);
    }, [t, d, a.level, a.capacity]);
    let i = a.level - 1;
    i > 4 && (i = 4);
    const N = os[i] || 8,
      P = t > 0 ? Math.max(1, Math.floor((t / a.capacity) * N)) : 0,
      p = () => e.jsx("div", { className: s.eggs, children: Array.from({ length: P }, (_, x) => e.jsx(q, {}, x)) }),
      l = () => e.jsx("div", { className: s.lot, children: Array.from({ length: ts[i] }, (_, x) => e.jsx("img", { src: ss[i], alt: "lot" }, x)) });
    return e.jsxs(m.div, {
      className: `${as[i]} ${s.house}`,
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.5, delay: 0.5 },
      children: [
        e.jsxs("div", {
          className: s.houseImageWrapper,
          children: [
            e.jsx("img", { src: es[i], alt: "warehouse" }),
            e.jsx("img", { src: Ke, alt: "top", className: s.blueTop }),
            e.jsx("img", { src: Qe, alt: "left", className: s.left }),
            e.jsx("img", { src: Xe, alt: "right", className: s.right }),
            p(),
            l(),
            g && e.jsx("div", { className: s.lockImageWrapper, onClick: n, children: e.jsx("img", { src: Ye, alt: "lock" }) }),
            e.jsxs("div", {
              className: s.value,
              children: [
                g && e.jsx("div", { className: s.capacity, children: u("upgradeModal.eggCapacity") }),
                e.jsx(H, {}),
                e.jsx("p", { children: J(g ? a.capacity : t) }),
                e.jsxs("div", { className: s.progress, children: [e.jsx("div", { className: s.shadow }), e.jsx("div", { className: s.line, style: { width: r } })] }),
              ],
            }),
          ],
        }),
        f && !g && e.jsx("div", { className: s.houseContent, children: e.jsx(m.h3, { className: s.houseText, children: u("warehousePage.warehouseFullText") }) }),
      ],
    });
  },
  rs = () => e.jsx("div", { className: s.swiperButtons }),
  cs = "/sign.webp",
  ls = () => {
    const a = h(j.total_productivity),
      n = h(j.amount_eggs),
      t = K(),
      d = $(),
      c = o.useRef(0);
    o.useEffect(() => {
      let u;
      return (
        (u = setInterval(() => {
          const w = (a / 36e5) * 200;
          c.current += w;
          const r = Math.floor(c.current);
          r >= 1 && t && t.capacity > n && (d(U(r)), (c.current -= r));
        }, 200)),
        () => {
          clearInterval(u);
        }
      );
    }, [a]);
  },
  us = T.lazy(() => b(() => import("./UpgradeWarehouseModal.x-0PM4IR.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))),
  Cs = () => {
    const { open: a } = F(),
      { t: n } = E(),
      t = h(j.warehouse_level),
      d = h(V.tutorial),
      c = h(k.warehouses),
      u = $(),
      [f, v] = o.useState(!1),
      [g, w] = o.useState(null),
      [r, I] = o.useState(0),
      i = o.useRef(null),
      N = o.useRef(null);
    localStorage.getItem("tutorial") === "true" && u(A(!0));
    const p = T.useMemo(() => (!Array.isArray(c) || typeof t != "number" || t < 1 ? [] : c.slice(t - 1)), [c, t]),
      l = T.useMemo(() => {
        if (!(!p || p.length === 0)) return p[r] || p[0];
      }, [p, r]),
      [_, x] = o.useState(!1);
    o.useEffect(() => {
      l ? (x(l.level !== t), v(l.level === t && !_)) : (x(!0), v(!1));
    }, [l, t, _]);
    const S = (C) => {
        (I(C.activeIndex), B());
      },
      M = () => {
        (y(), l && a(e.jsx(us, { warehouse: l })));
      },
      O = () => {
        (y(), u(A(!1)), localStorage.setItem("tutorial", "false"));
      };
    return (
      ls(),
      e.jsxs("div", {
        className: s.wrapper,
        children: [
          e.jsx("h1", { className: "pagetitle27", children: n("warehousePage.pageTitle") }),
          d &&
            e.jsxs(m.div, {
              className: s.tut,
              children: [
                e.jsx("p", { children: n("tutorialThreePage.textOne") }),
                e.jsxs("p", { children: ["- ", e.jsx("span", { children: n("tutorialThreePage.silver") }), " ", n("tutorialThreePage.textTwo")] }),
                e.jsxs("p", { children: ["- ", e.jsx("span", { children: n("tutorialThreePage.gold") }), " ", n("tutorialThreePage.textThree")] }),
                e.jsx(W, { text: n("finish"), onClick: O, className: `button greenButton ${s.claimButton}` }),
              ],
            }),
          e.jsxs("div", {
            className: s.swiper,
            children: [
              e.jsx(m.div, { onClick: B, whileTap: { scale: 0.9 }, className: `${s.customPrev} ${r === 0 ? s.hidden : ""}`, ref: i, children: e.jsx(R, {}) }),
              e.jsx(m.div, { onClick: B, whileTap: { scale: 0.9 }, className: `${s.customNext} ${r === p.length - 1 ? s.hidden : ""}`, ref: N, children: e.jsx(R, {}) }),
              e.jsx(D, {
                modules: [Z],
                onSlideChange: S,
                onSwiper: (C) => {
                  (w(C), C.activeIndex !== r && I(C.activeIndex));
                },
                navigation: { prevEl: i.current, nextEl: N.current },
                children: p.map((C, L) => e.jsxs(z, { children: [" ", e.jsx(ns, { warehouse: C, index: L, handleUpgrade: M })] }, L)),
              }),
              e.jsx("div", {
                className: _ ? s.upgradeBannerWrapper : s.upgradeBannerWrapperHide,
                children: e.jsxs("div", {
                  className: s.upgradeBanner,
                  children: [
                    e.jsx("img", { src: cs, alt: "" }),
                    e.jsxs("div", {
                      className: s.ct,
                      children: [e.jsx("p", { className: s.price, children: l == null ? void 0 : l.cost }), e.jsx(W, { text: n("upgradeModal.btn"), onClick: M, className: `${s.blue} blueButton` })],
                    }),
                  ],
                }),
              }),
              e.jsx(rs, {}),
            ],
          }),
          e.jsx(Re, { show: f }),
        ],
      })
    );
  };
export { Cs as default };
