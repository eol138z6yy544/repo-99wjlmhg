import { r, j as e } from "./react.PneIXFW0.js";
import { t as H } from "./tasks-tab-bg.D-NyerFe.js";
import {
  j as y,
  A as L,
  u as E,
  U as P,
  d as M,
  c as U,
  k as m,
  p as u,
  l as Z,
  m as $,
  b as R,
} from "./index.L_oMLRKj.js";
import { i as V } from "./task-item-bg.CImIYIOH.js";
import { C as w } from "./CustomButton.aFAv9M3W.js";
import { A as K } from "./index.2mC8xdHX.js";
import { m as x } from "./proxy.B82iKJfU.js";
import { A as W } from "./index.C5J4nSwT.js";
const D = "_wrapper_19cr2_1",
  Y = "_header_19cr2_7",
  F = "_content_19cr2_12",
  z = "_tab_19cr2_28",
  q = "_tabText_19cr2_34",
  G = "_tabBg_19cr2_43",
  J = "_list_19cr2_50",
  h = {
    wrapper: D,
    header: Y,
    content: F,
    tab: z,
    tabText: q,
    tabBg: G,
    list: J,
  },
  O = "/tasks-banner-img.webp",
  Q = "_taskItem_bb0j8_1",
  X = "_taskItemImg_bb0j8_6",
  e1 = "_content_bb0j8_14",
  s1 = "_ls_bb0j8_26",
  t1 = "_textWrapper_bb0j8_32",
  a1 = "_progress_bb0j8_37",
  n1 = "_shadow_bb0j8_49",
  o1 = "_line_bb0j8_59",
  c1 = "_text_bb0j8_32",
  i1 = "_text21_bb0j8_83",
  l1 = "_openBtn_bb0j8_90",
  r1 = "_iconWrapper_bb0j8_101",
  m1 = "_exchange_bb0j8_112",
  d1 = "_warehouse_bb0j8_116",
  p1 = "_shop_bb0j8_120",
  h1 = "_roulette_bb0j8_124",
  x1 = "_overlay_bb0j8_142",
  g1 = "_modalWrapper_bb0j8_153",
  C1 = "_modal_bb0j8_153",
  _1 = "_bg_bb0j8_179",
  j1 = "_modalContent_bb0j8_189",
  u1 = "_modalHeader_bb0j8_194",
  b1 = "_silver_bb0j8_206",
  w1 = "_description_bb0j8_214",
  v1 = "_buttons_bb0j8_273",
  f1 = "_claimed_bb0j8_288",
  t = {
    taskItem: Q,
    taskItemImg: X,
    content: e1,
    ls: s1,
    textWrapper: t1,
    progress: a1,
    shadow: n1,
    line: o1,
    text: c1,
    text21: i1,
    openBtn: l1,
    iconWrapper: r1,
    exchange: m1,
    warehouse: d1,
    shop: p1,
    roulette: h1,
    overlay: x1,
    modalWrapper: g1,
    modal: C1,
    bg: _1,
    modalContent: j1,
    modalHeader: u1,
    silver: b1,
    description: w1,
    buttons: v1,
    claimed: f1,
  },
  N1 = "/task-modal-bg.webp",
  T = "/static/images/tasks/warehouse.webp",
  B = "/static/images/tasks/shop.webp",
  I = "/static/images/tasks/roulette.webp",
  A = "/static/images/tasks/exchange.webp",
  y1 = "/static/images/tasks/done.webp",
  L1 = async () => {
    try {
      const { data: s } = await y.get("/users/tasks");
      return s;
    } catch (s) {
      console.log(s, L.USER_TASK);
    }
  },
  T1 = async (s) => {
    try {
      const { data: a } = await y.post("/users/tasks/check", { task_id: s });
      return a;
    } catch (a) {
      console.log(a, L.USER_TASK_CHECK);
    }
  },
  B1 = async (s) => {
    try {
      const { data: a } = await y.post("/users/tasks/claim", { task_id: s });
      return a;
    } catch (a) {
      console.log(a, L.USER_TASK_CHECK);
    }
  },
  I1 = ({ task: s, setTasksList: a }) => {
    const g = K,
      d = E(P.id),
      C = M(),
      v = U(),
      [_, i] = r.useState(!1),
      [b, f] = r.useState("0%");
    r.useEffect(() => {
      s.type === "invite" && f(`${(s.progress / s.target) * 100}%`);
    }, [s.progress, s.target]);
    const l = async (o) => {
        try {
          const c = await T1(o);
          (a((j) => j.map((p) => (p.id === o ? { ...p, ...c } : p))), i(!1));
        } catch (c) {
          (console.log(c), i(!1));
        }
      },
      n = async (o) => {
        try {
          const c = await B1(o);
          if (c.status === "claimed") {
            const j = await Z();
            C($({ user: j }));
          }
          (a((j) => j.map((p) => (p.id === o ? { ...p, ...c } : p))), i(!1));
        } catch (c) {
          (console.log(c), i(!1));
        }
      },
      N = (o, c) => {
        (i(!1),
          o === "invite"
            ? window.Telegram.WebApp.openTelegramLink(
                `https://t.me/share/url?url=https://t.me/${g}?start=${d}&text=👆Monetize your own Eggs 🥚🥚`,
              )
            : o === "follow"
              ? window.Telegram.WebApp.openTelegramLink(s.action_link)
              : o === "other" && v(c));
      };
    return e.jsxs(x.div, {
      className: t.taskItem,
      transition: { duration: 0.4 },
      exit: { opacity: 0, scale: 0.8 },
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      onClick: () => {
        (u(), i(!0));
      },
      children: [
        e.jsx("div", {
          className: t.taskItemImg,
          children: e.jsx("img", { src: V, alt: "" }),
        }),
        e.jsxs("div", {
          className: t.content,
          children: [
            e.jsxs("div", {
              className: t.ls,
              children: [
                e.jsxs("div", {
                  className: t.iconWrapper,
                  children: [
                    s.type === "invite" && e.jsx(S, {}),
                    s.type === "follow" && e.jsx(k, {}),
                    s.path === "/exchange" &&
                      e.jsx("img", {
                        src: A,
                        alt: "exchange",
                        className: t.exchange,
                      }),
                    s.path === "/roulette" &&
                      e.jsx("img", {
                        src: I,
                        alt: "roulette",
                        className: t.roulette,
                      }),
                    s.path === "/shop" &&
                      e.jsx("img", { src: B, alt: "shop", className: t.shop }),
                    s.path === "/warehouse" &&
                      e.jsx("img", {
                        src: T,
                        alt: "warehouse",
                        className: t.warehouse,
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: t.textWrapper,
                  children: [
                    e.jsx("p", { className: t.text, children: s.title }),
                    s.type === "invite" &&
                      e.jsxs("div", {
                        className: t.progress,
                        children: [
                          e.jsxs("p", {
                            children: [s.progress, "/", s.target],
                          }),
                          e.jsx("div", { className: t.shadow }),
                          e.jsx("div", {
                            className: t.line,
                            style: { width: b },
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: t.openBtn,
              children: s.status === "claimed" ? e.jsx(k1, {}) : e.jsx(A1, {}),
            }),
          ],
        }),
        e.jsx(W, {
          children:
            _ &&
            e.jsxs("div", {
              className: t.modalWrapper,
              children: [
                e.jsx(x.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: (o) => {
                    (i(!1), o.stopPropagation());
                  },
                  className: t.overlay,
                }),
                e.jsxs(x.div, {
                  initial: { transform: "translateY(100%)" },
                  animate: { transform: "translateY(0)" },
                  exit: { transform: "translateY(100%)" },
                  className: t.modal,
                  children: [
                    e.jsx("img", { src: N1, alt: "", className: t.bg }),
                    e.jsxs("div", {
                      className: t.modalContent,
                      children: [
                        e.jsxs("div", {
                          className: t.modalHeader,
                          children: [
                            e.jsxs("div", {
                              className: t.iconWrapper,
                              children: [
                                s.path === "/exchange" &&
                                  e.jsx("img", {
                                    src: A,
                                    alt: "exchange",
                                    className: t.exchange,
                                  }),
                                s.path === "/roulette" &&
                                  e.jsx("img", {
                                    src: I,
                                    alt: "roulette",
                                    className: t.roulette,
                                  }),
                                s.path === "/shop" &&
                                  e.jsx("img", {
                                    src: B,
                                    alt: "shop",
                                    className: t.shop,
                                  }),
                                s.path === "/warehouse" &&
                                  e.jsx("img", {
                                    src: T,
                                    alt: "warehouse",
                                    className: t.warehouse,
                                  }),
                                s.type === "invite" && e.jsx(S, {}),
                                s.type === "follow" && e.jsx(k, {}),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: t.text,
                                  children: s.title,
                                }),
                                e.jsxs("p", {
                                  className: t.text21,
                                  children: [
                                    m("tasksPage.modal.reward"),
                                    ":",
                                    " ",
                                    e.jsxs("span", {
                                      className: t.silver,
                                      children: [
                                        s.reward.amount_silver,
                                        " ",
                                        m("tasksPage.modal.silver"),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: t.description,
                          children: [
                            e.jsxs("p", {
                              className: t.text21,
                              children: [
                                !["follow", "invite"].includes(s.type) &&
                                  s.description,
                                s.type === "invite" &&
                                  e.jsxs("span", {
                                    children: [
                                      m("tasksPage.modal.progress"),
                                      ": ",
                                      s.progress,
                                      "/",
                                      s.target,
                                      " ",
                                      m("tasksPage.modal.invited"),
                                    ],
                                  }),
                              ],
                            }),
                            s.type === "invite" &&
                              e.jsxs("div", {
                                className: t.progress,
                                children: [
                                  e.jsx("div", { className: t.shadow }),
                                  e.jsx("div", {
                                    className: t.line,
                                    style: { width: b },
                                  }),
                                ],
                              }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: t.buttons,
                          children: [
                            s.status !== "completed" &&
                              s.status !== "claimed" &&
                              e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(w, {
                                    text: m("execute"),
                                    onClick: () => {
                                      (u(), N(s.type, s.path));
                                    },
                                    className: "blueButton",
                                  }),
                                  e.jsx(w, {
                                    text: m("check"),
                                    onClick: () => {
                                      (u(), l(s.id));
                                    },
                                    className: "orangeButton",
                                  }),
                                ],
                              }),
                            s.status === "completed" &&
                              e.jsx(w, {
                                text: m("claim"),
                                onClick: () => {
                                  (u(), n(s.id));
                                },
                                className: "greenButton",
                              }),
                            s.status === "claimed" &&
                              e.jsx(w, {
                                text: e.jsxs("p", {
                                  className: t.claimed,
                                  children: [
                                    m("claimed"),
                                    e.jsx("img", { src: y1, alt: "claimed" }),
                                  ],
                                }),
                                onClick: () => {},
                                className: "greenButton",
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  };
function k() {
  return e.jsxs("svg", {
    style: { marginLeft: 5 },
    width: "32",
    height: "26",
    viewBox: "0 0 32 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      e.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M26.1826 11.9889L21.5279 16.6111L18.4733 13.4333L5.81836 26V18.7778H2.90918C1.30913 18.7778 0 17.4778 0 15.8889V2.88889C0 1.3 1.30913 0 2.90918 0H23.2734C24.8735 0 26.1826 1.3 26.1826 2.88889V11.9889ZM10.0889 9.66433C10.745 9.10825 11.58 8.80401 12.4425 8.80676C14.2328 8.80676 15.7527 10.0957 16.0186 11.8379C16.0553 12.1134 15.8476 12.3623 15.5674 12.3623H9.31761C9.03743 12.3623 8.83066 12.1134 8.86646 11.8379C8.99916 10.9915 9.43285 10.2204 10.0889 9.66433ZM12.4425 3.47343C13.036 3.47343 13.6052 3.70756 14.0249 4.1243C14.4446 4.54105 14.6803 5.10628 14.6803 5.69565C14.6803 6.28502 14.4446 6.85025 14.0249 7.267C13.6052 7.68375 13.036 7.91787 12.4425 7.91787C11.849 7.91787 11.2798 7.68375 10.8601 7.267C10.4405 6.85025 10.2047 6.28502 10.2047 5.69565C10.2047 5.10628 10.4405 4.54105 10.8601 4.1243C11.2798 3.70756 11.849 3.47343 12.4425 3.47343ZM17.6524 1.79867C17.5719 1.73207 17.4705 1.69562 17.3657 1.69565C17.247 1.69565 17.1332 1.74248 17.0493 1.82583C16.9653 1.90918 16.9182 2.02222 16.9182 2.1401V3.47343H15.5755C15.4568 3.47343 15.3429 3.52026 15.259 3.60361C15.1751 3.68695 15.1279 3.8 15.1279 3.91787L15.1351 3.99787C15.1539 4.1002 15.2083 4.19271 15.2888 4.25931C15.3693 4.3259 15.4707 4.36235 15.5755 4.36232H16.9182V5.69565L16.9253 5.77565C16.9453 5.88494 17.0057 5.98286 17.0947 6.05012C17.1837 6.11739 17.2948 6.14913 17.4062 6.1391C17.5176 6.12906 17.6211 6.07798 17.6965 5.9959C17.7718 5.91383 17.8135 5.80672 17.8133 5.69565V4.36232H19.156C19.2747 4.36232 19.3886 4.31549 19.4725 4.23214C19.5564 4.14879 19.6036 4.03575 19.6036 3.91787L19.5964 3.83787C19.5776 3.73555 19.5232 3.64304 19.4427 3.57644C19.3622 3.50985 19.2608 3.4734 19.156 3.47343H17.8133V2.1401L17.8061 2.0601C17.7873 1.95777 17.7329 1.86526 17.6524 1.79867Z",
        fill: "white",
      }),
      e.jsx("path", {
        d: "M29.9636 11.7003L21.0906 20.5114L18.0359 17.3336L15.9995 19.3558L21.0906 24.5559L32 13.5781L29.9636 11.7003Z",
        fill: "white",
      }),
    ],
  });
}
function S() {
  return e.jsx("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: e.jsx("path", {
      d: "M34.9997 0C31.46 0.243359 6.59224 2.61133 4.85386 19.6608C4.64263 21.4833 4.523 23.314 4.44438 25.146L16.6718 12.9309C17.0991 12.5036 17.7929 12.5036 18.2202 12.9309C18.6474 13.3581 18.6474 14.0506 18.2202 14.4778L0.480908 32.1993C-0.160303 32.8398 -0.160303 33.8789 0.480908 34.5194C1.12212 35.16 2.16187 35.16 2.80376 34.5194L6.70913 30.6182C9.58638 30.6086 12.4616 30.4452 15.3197 30.115C18.9755 29.7432 21.9519 28.3056 24.3828 26.25H17.4819L27.5164 22.9086C28.2854 21.8907 28.9772 20.8093 29.5979 19.6875H24.0512L31.3342 16.0501C34.1992 9.08223 34.8759 1.79512 34.9997 0Z",
      fill: "white",
    }),
  });
}
function A1() {
  return e.jsx("svg", {
    width: "14",
    height: "21",
    viewBox: "0 0 14 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: e.jsx("path", {
      d: "M0.62176 0.552492C0.424665 0.726487 0.268297 0.93316 0.161607 1.16068C0.0549171 1.3882 0 1.6321 0 1.87842C0 2.12474 0.0549171 2.36864 0.161607 2.59616C0.268297 2.82368 0.424665 3.03035 0.62176 3.20434L8.87095 10.5016L0.62176 17.7989C0.22423 18.1506 0.000900249 18.6275 0.000900249 19.1249C0.000900249 19.6222 0.22423 20.0991 0.62176 20.4508C1.01929 20.8024 1.55845 21 2.12065 21C2.68284 21 3.222 20.8024 3.61953 20.4508L13.3782 11.8182C13.5753 11.6442 13.7317 11.4375 13.8384 11.21C13.9451 10.9825 14 10.7386 14 10.4922C14 10.2459 13.9451 10.002 13.8384 9.7745C13.7317 9.54698 13.5753 9.3403 13.3782 9.16631L3.61953 0.533684C2.81162 -0.180999 1.45093 -0.180999 0.62176 0.552492Z",
      fill: "white",
    }),
  });
}
function k1() {
  return e.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    children: e.jsx("path", {
      d: "M11 0C12.0098 0 12.9837 0.128906 13.9219 0.386719C14.86 0.644531 15.7337 1.01693 16.543 1.50391C17.3522 1.99089 18.0934 2.5638 18.7666 3.22266C19.4398 3.88151 20.0163 4.62272 20.4961 5.44629C20.9759 6.26986 21.3447 7.14714 21.6025 8.07812C21.8604 9.00911 21.9928 9.98307 22 11C22 12.0098 21.8711 12.9837 21.6133 13.9219C21.3555 14.86 20.9831 15.7337 20.4961 16.543C20.0091 17.3522 19.4362 18.0934 18.7773 18.7666C18.1185 19.4398 17.3773 20.0163 16.5537 20.4961C15.7301 20.9759 14.8529 21.3447 13.9219 21.6025C12.9909 21.8604 12.0169 21.9928 11 22C9.99023 22 9.01628 21.8711 8.07812 21.6133C7.13997 21.3555 6.26628 20.9831 5.45703 20.4961C4.64779 20.0091 3.90658 19.4362 3.2334 18.7773C2.56022 18.1185 1.98372 17.3773 1.50391 16.5537C1.02409 15.7301 0.655273 14.8529 0.397461 13.9219C0.139648 12.9909 0.00716146 12.0169 0 11C0 9.99023 0.128906 9.01628 0.386719 8.07812C0.644531 7.13997 1.01693 6.26628 1.50391 5.45703C1.99089 4.64779 2.5638 3.90658 3.22266 3.2334C3.88151 2.56022 4.62272 1.98372 5.44629 1.50391C6.26986 1.02409 7.14714 0.655273 8.07812 0.397461C9.00911 0.139648 9.98307 0.00716146 11 0ZM16.7704 8.0655C17.161 7.67498 17.161 7.04182 16.7704 6.65129L16.7237 6.60457C16.3332 6.21404 15.7 6.21404 15.3095 6.60457L9.64461 12.2695C9.25408 12.66 8.62092 12.66 8.23039 12.2695L6.69051 10.7296C6.29998 10.339 5.66682 10.339 5.27629 10.7296L5.22957 10.7763C4.83904 11.1668 4.83904 11.8 5.22957 12.1905L8.23039 15.1913C8.62092 15.5819 9.25408 15.5819 9.64461 15.1913L16.7704 8.0655Z",
      fill: "#D68E54",
    }),
  });
}
const S1 = (s) => [
    { text: s("tasksPage.tabs.invite") },
    { text: s("tasksPage.tabs.follow") },
    { text: s("tasksPage.tabs.other") },
  ],
  V1 = () => {
    const { t: s } = R(),
      [a, g] = r.useState(0),
      [d, C] = r.useState([]),
      [v, _] = r.useState([]),
      [i, b] = r.useState(!1),
      f = () => {
        b(!0);
      };
    return (
      r.useEffect(() => {
        (u(),
          (async () => {
            const n = await L1();
            n && (C(n), _(n.filter((N) => N.type === "invite")));
          })());
      }, [a]),
      r.useEffect(() => {
        const l = d.filter((n) =>
          a === 0
            ? n.type === "invite"
            : a === 1
              ? n.type === "follow"
              : !["invite", "follow"].includes(n.type),
        );
        _(l);
      }, [a, d]),
      e.jsxs("div", {
        className: h.wrapper,
        children: [
          e.jsx(x.h1, {
            initial: { scale: 0.3 },
            animate: { scale: 1 },
            className: "pagetitle",
            children: s("tasksPage.title"),
          }),
          e.jsxs(x.div, {
            initial: { scale: 0 },
            animate: { scale: 1 },
            transition: { delay: 0.3, duration: 0.2 },
            className: h.header,
            onAnimationComplete: f,
            children: [
              e.jsx("img", { src: O, alt: "" }),
              e.jsx("div", {
                className: h.content,
                children: S1(s).map((l, n) =>
                  e.jsx(
                    W1,
                    { currentTab: a, myIndex: n, text: l.text, onClick: g },
                    n,
                  ),
                ),
              }),
            ],
          }),
          e.jsx("div", {
            className: h.list,
            children: e.jsx(W, {
              children:
                i &&
                v.map((l) => e.jsx(I1, { task: l, setTasksList: _ }, l.id)),
            }),
          }),
        ],
      })
    );
  };
function W1({ text: s, currentTab: a, onClick: g, myIndex: d }) {
  const C = () => {
    g(d);
  };
  return e.jsxs("div", {
    className: h.tab,
    onClick: C,
    children: [
      d === a &&
        e.jsx(x.img, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          exit: { scale: 0 },
          src: H,
          alt: "",
          className: h.tabBg,
        }),
      e.jsx("p", { className: h.tabText, children: s }),
    ],
  });
}
export { V1 as default };
