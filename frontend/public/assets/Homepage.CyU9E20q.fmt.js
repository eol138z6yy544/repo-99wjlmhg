const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/BonusModal.0e2vQ0aY.js",
      "assets/react.PneIXFW0.js",
      "assets/index.L_oMLRKj.js",
      "assets/index.B6ccmzU4.css",
      "assets/ModalLayer.B5DWEgzR.js",
      "assets/useModalContext.CtS9G1hM.js",
      "assets/ModalLayer.CXW2sm24.css",
      "assets/CustomButton.aFAv9M3W.js",
      "assets/proxy.B82iKJfU.js",
      "assets/BonusModal.qXUoTmvl.css",
      "assets/BirdsInfoModal.BYEshiHZ.js",
      "assets/formatNumberWithSpaces.C3OQmX2l.js",
      "assets/BirdsInfoModal.Cy1UR1tL.css",
      "assets/AnimationModal.O4BI6i1K.js",
      "assets/AnimationModal.DV8oxOjv.css",
    ]),
) => i.map((i) => d[i]);
import { r as B, j as k, b as Ps } from "./react.PneIXFW0.js";
import { u as Y, U as tt, t as tn, L as Qi, p as Yt, a as ks, B as Pt, b as Fe, c as en, d as ci, i as rn, w as Ms, e as Ji, _ as tr, f as Rs, s as nn } from "./index.L_oMLRKj.js";
import { L as Cs, I as Os, a as Bs, B as br, Q as Es } from "./icons.DuQb2KfE.js";
import { y as As } from "./index.DJmcVVy7.js";
import { b as Ls } from "./warehouse-bottom-banner.DuJ0nUSH.js";
import { f as Ds } from "./formatShortNumber.C6zlN--3.js";
import { C as Oi } from "./CustomButton.aFAv9M3W.js";
import { u as er } from "./useCurrentWarehouse.D-6MOdYI.js";
import { m as sn } from "./proxy.B82iKJfU.js";
import { u as on } from "./useModalContext.CtS9G1hM.js";
import { S as Ns } from "./NavIcons.BUhK06v4.js";
import { u as Is } from "./useCountDown.CYlLSblD.js";
import { f as js } from "./formatDate.Cjj3rxol.js";
const zs = "_wrapper_1dgs7_1",
  Fs = { wrapper: zs },
  an = B.createContext(null),
  hi = () => {
    const o = B.useContext(an);
    if (!o) throw new Error("useHomepageContext must be used within a HomepageProvider");
    return o;
  },
  $s = ({ children: o }) => {
    const t = B.useRef(null),
      e = B.useRef(null),
      i = B.useRef(null),
      r = B.useRef(null),
      n = B.useRef(null),
      s = B.useRef(null);
    return k.jsx(an.Provider, { value: { orangeBirdRef: t, greenBirdRef: e, blueBirdRef: i, redBirdRef: r, yellowBirdRef: n, bankRef: s }, children: o });
  },
  Ys = "_nests_1ug9u_1",
  Vs = "_side_1ug9u_9",
  mi = { nests: Ys, side: Vs },
  Us = "/home/nest_left.svg",
  Xs = "/home/nest_right.svg",
  qs = "_orangeBirdLottie_1ees9_1",
  Ws = { orangeBirdLottie: qs },
  Gs = "_lockImageWrapper_1jo9a_1",
  Hs = { lockImageWrapper: Gs },
  $e = ({ lottieSources: o, birdKey: t, width: e = 261, height: i = 261, ...r }) => {
    const n = Y(tt.myBirds),
      s = Y(tn.birds),
      [a, u] = B.useState(o[0]),
      l = B.useRef(null),
      f = () => Math.floor(Math.random() * 2e3) + 3e3,
      [c, _] = B.useState(!0),
      d = B.useRef(null),
      p = o.indexOf(a),
      h = () => {
        if (!s) return;
        const g = f();
        (n[t] && (g > 4e3 ? u(o[1]) : u(o[0])),
          d.current && (clearTimeout(d.current), (d.current = null)),
          (d.current = setTimeout(() => {
            var m, y;
            ((m = l.current) == null || m.setFrame(0), (y = l.current) == null || y.play());
          }, g)));
      };
    return (
      B.useEffect(() => {
        n && (n[t] ? u(o[0]) : u(o[2]), _(!1));
      }, [n]),
      B.useEffect(() => {
        var g, m, y;
        if (!c) {
          if (!s) {
            ((g = l.current) == null || g.setFrame(0), (m = l.current) == null || m.pause());
            return;
          }
          return (
            setTimeout(() => {
              var x;
              (x = l.current) == null || x.play();
            }, 3e3),
            (y = l.current) == null || y.addEventListener("complete", h),
            () => {
              var x;
              (d.current && (clearTimeout(d.current), (d.current = null)), (x = l.current) == null || x.removeEventListener("complete", h));
            }
          );
        }
      }, [s, c]),
      !c &&
        k.jsxs("div", {
          "data-bird-index": p,
          ...r,
          children: [
            k.jsx(As, {
              src: a,
              loop: !1,
              autoplay: !1,
              width: e,
              height: i,
              dotLottieRefCallback: (g) => {
                l.current = g;
              },
            }),
            a === o[2] && k.jsx(Qi, { to: "/shop", className: Hs.lockImageWrapper, onClick: Yt, children: k.jsx(Cs, {}) }),
          ],
        })
    );
  },
  Ks = ({ className: o, ...t }) =>
    k.jsx($e, {
      lottieSources: ["/lottie/Bird_Orange_01.lottie", "/lottie/Bird_Orange_02.lottie", "/lottie/Bird_Orange_03.lottie"],
      birdKey: "orange",
      width: 261,
      height: 261,
      className: `${Ws.orangeBirdLottie} ${o}`,
      ...t,
    }),
  Zs = "_greenBirdLottie_he30t_1",
  Qs = { greenBirdLottie: Zs },
  Js = ({ className: o, ...t }) =>
    k.jsx($e, {
      lottieSources: ["/lottie/Bird_Green_01.lottie", "/lottie/Bird_Green_02.lottie", "/lottie/Bird_Green_03.lottie"],
      birdKey: "green",
      width: 248,
      height: 248,
      className: `${Qs.greenBirdLottie} ${o}`,
      ...t,
    }),
  to = "_blueBirdLottie_1mor2_1",
  eo = { blueBirdLottie: to },
  io = ({ className: o, ...t }) =>
    k.jsx($e, {
      lottieSources: ["/lottie/Bird_Blue_01.lottie", "/lottie/Bird_Blue_02.lottie", "/lottie/Bird_Blue_03.lottie"],
      width: 261,
      height: 261,
      birdKey: "blue",
      className: `${eo.blueBirdLottie} ${o}`,
      ...t,
    }),
  ro = "_redBirdLottie_1dcrk_1",
  no = { redBirdLottie: ro },
  so = ({ className: o, ...t }) =>
    k.jsx($e, {
      lottieSources: ["/lottie/Bird_Red_01.lottie", "/lottie/Bird_Red_02.lottie", "/lottie/Bird_Red_03.lottie"],
      birdKey: "red",
      width: 261,
      height: 261,
      className: `${no.redBirdLottie} ${o}`,
      ...t,
    }),
  oo = "_yellowBirdLottie_1n2jz_1",
  ao = { yellowBirdLottie: oo },
  lo = ({ className: o, ...t }) =>
    k.jsx($e, {
      lottieSources: ["/lottie/Bird_Yellow_01.lottie", "/lottie/Bird_Yellow_02.lottie", "/lottie/Bird_Yellow_03.lottie"],
      birdKey: "yellow",
      width: 194,
      height: 217,
      className: `${ao.yellowBirdLottie} ${o}`,
      ...t,
    }),
  uo = () => {
    const { redBirdRef: o, yellowBirdRef: t, blueBirdRef: e, orangeBirdRef: i, greenBirdRef: r } = hi();
    return k.jsxs("div", {
      className: mi.nests,
      children: [
        k.jsxs("div", { className: mi.side, children: [k.jsx("img", { src: Us, alt: "" }), k.jsx(Ks, { ref: i }), k.jsx(Js, { ref: r })] }),
        k.jsxs("div", { className: mi.side, children: [k.jsx(io, { ref: e }), k.jsx(so, { ref: o }), k.jsx(lo, { ref: t }), k.jsx("img", { src: Xs, alt: "" })] }),
      ],
    });
  },
  fo = "_bank_aj2et_1",
  co = { bank: fo },
  ho = "_egg_1o1g0_1",
  _o = { egg: ho };
function Ot(o) {
  if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function ln(o, t) {
  ((o.prototype = Object.create(t.prototype)), (o.prototype.constructor = o), (o.__proto__ = t));
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ht = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
  de = { duration: 0.5, overwrite: !1, delay: 0 },
  ir,
  G,
  j,
  Rt = 1e8,
  Z = 1 / Rt,
  Bi = Math.PI * 2,
  po = Bi / 4,
  go = 0,
  un = Math.sqrt,
  mo = Math.cos,
  yo = Math.sin,
  W = function (t) {
    return typeof t == "string";
  },
  V = function (t) {
    return typeof t == "function";
  },
  Lt = function (t) {
    return typeof t == "number";
  },
  rr = function (t) {
    return typeof t > "u";
  },
  Ct = function (t) {
    return typeof t == "object";
  },
  rt = function (t) {
    return t !== !1;
  },
  nr = function () {
    return typeof window < "u";
  },
  Ve = function (t) {
    return V(t) || W(t);
  },
  fn = (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Q = Array.isArray,
  Ei = /(?:-?\.?\d|\.)+/gi,
  cn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  ae = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  yi = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  hn = /[+-]=-?[.\d]+/,
  _n = /[^,'"\[\]\s]+/gi,
  xo = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  F,
  St,
  Ai,
  sr,
  _t = {},
  ti = {},
  dn,
  pn = function (t) {
    return (ti = pe(t, _t)) && at;
  },
  or = function (t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  },
  Ee = function (t, e) {
    return !e && console.warn(t);
  },
  gn = function (t, e) {
    return (t && (_t[t] = e) && ti && (ti[t] = e)) || _t;
  },
  Ae = function () {
    return 0;
  },
  vo = { suppressEvents: !0, isStart: !0, kill: !1 },
  He = { suppressEvents: !0, kill: !1 },
  To = { suppressEvents: !0 },
  ar = {},
  Ft = [],
  Li = {},
  mn,
  ut = {},
  xi = {},
  Sr = 30,
  Ke = [],
  lr = "",
  ur = function (t) {
    var e = t[0],
      i,
      r;
    if ((Ct(e) || V(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
      for (r = Ke.length; r-- && !Ke[r].targetTest(e););
      i = Ke[r];
    }
    for (r = t.length; r--;) (t[r] && (t[r]._gsap || (t[r]._gsap = new $n(t[r], i)))) || t.splice(r, 1);
    return t;
  },
  Zt = function (t) {
    return t._gsap || ur(xt(t))[0]._gsap;
  },
  yn = function (t, e, i) {
    return (i = t[e]) && V(i) ? t[e]() : (rr(i) && t.getAttribute && t.getAttribute(e)) || i;
  },
  nt = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  U = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  q = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  fe = function (t, e) {
    var i = e.charAt(0),
      r = parseFloat(e.substr(2));
    return ((t = parseFloat(t)), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r);
  },
  wo = function (t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
    return r < i;
  },
  ei = function () {
    var t = Ft.length,
      e = Ft.slice(0),
      i,
      r;
    for (Li = {}, Ft.length = 0, i = 0; i < t; i++) ((r = e[i]), r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  fr = function (t) {
    return !!(t._initted || t._startAt || t.add);
  },
  xn = function (t, e, i, r) {
    (Ft.length && !G && ei(), t.render(e, i, !!(G && e < 0 && fr(t))), Ft.length && !G && ei());
  },
  vn = function (t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(_n).length < 2 ? e : W(t) ? t.trim() : t;
  },
  Tn = function (t) {
    return t;
  },
  dt = function (t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  },
  bo = function (t) {
    return function (e, i) {
      for (var r in i) r in e || (r === "duration" && t) || r === "ease" || (e[r] = i[r]);
    };
  },
  pe = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Pr = function o(t, e) {
    for (var i in e) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = Ct(e[i]) ? o(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t;
  },
  ii = function (t, e) {
    var i = {},
      r;
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  },
  Me = function (t) {
    var e = t.parent || F,
      i = t.keyframes ? bo(Q(t.keyframes)) : dt;
    if (rt(t.inherit)) for (; e;) (i(t, e.vars.defaults), (e = e.parent || e._dp));
    return t;
  },
  So = function (t, e) {
    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
    return i < 0;
  },
  wn = function (t, e, i, r, n) {
    var s = t[r],
      a;
    if (n) for (a = e[n]; s && s[n] > a;) s = s._prev;
    return (s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[i]), (t[i] = e)), e._next ? (e._next._prev = e) : (t[r] = e), (e._prev = s), (e.parent = e._dp = t), e);
  },
  _i = function (t, e, i, r) {
    (i === void 0 && (i = "_first"), r === void 0 && (r = "_last"));
    var n = e._prev,
      s = e._next;
    (n ? (n._next = s) : t[i] === e && (t[i] = s), s ? (s._prev = n) : t[r] === e && (t[r] = n), (e._next = e._prev = e.parent = null));
  },
  Vt = function (t, e) {
    (t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), (t._act = 0));
  },
  Qt = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var i = t; i;) ((i._dirty = 1), (i = i.parent));
    return t;
  },
  Po = function (t) {
    for (var e = t.parent; e && e.parent;) ((e._dirty = 1), e.totalDuration(), (e = e.parent));
    return t;
  },
  Di = function (t, e, i, r) {
    return t._startAt && (G ? t._startAt.revert(He) : (t.vars.immediateRender && !t.vars.autoRevert) || t._startAt.render(e, !0, r));
  },
  ko = function o(t) {
    return !t || (t._ts && o(t.parent));
  },
  kr = function (t) {
    return t._repeat ? ge(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  ge = function (t, e) {
    var i = Math.floor((t = q(t / e)));
    return t && i === t ? i - 1 : i;
  },
  ri = function (t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  },
  di = function (t) {
    return (t._end = q(t._start + (t._tDur / Math.abs(t._ts || t._rts || Z) || 0)));
  },
  pi = function (t, e) {
    var i = t._dp;
    return (i && i.smoothChildTiming && t._ts && ((t._start = q(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), di(t), i._dirty || Qt(i, t)), t);
  },
  bn = function (t, e) {
    var i;
    if (
      ((e._time || (!e._dur && e._initted) || (e._start < t._time && (e._dur || !e.add))) && ((i = ri(t.rawTime(), e)), (!e._dur || Ye(0, e.totalDuration(), i) - e._tTime > Z) && e.render(i, !0)),
      Qt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration()) for (i = t; i._dp;) (i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp));
      t._zTime = -1e-8;
    }
  },
  kt = function (t, e, i, r) {
    return (
      e.parent && Vt(e),
      (e._start = q((Lt(i) ? i : i || t !== F ? mt(t, i, e) : t._time) + e._delay)),
      (e._end = q(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
      wn(t, e, "_first", "_last", t._sort ? "_start" : 0),
      Ni(e) || (t._recent = e),
      r || bn(t, e),
      t._ts < 0 && pi(t, t._tTime),
      t
    );
  },
  Sn = function (t, e) {
    return (_t.ScrollTrigger || or("scrollTrigger", e)) && _t.ScrollTrigger.create(e, t);
  },
  Pn = function (t, e, i, r, n) {
    if ((hr(t, e, n), !t._initted)) return 1;
    if (!i && t._pt && !G && ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) && mn !== ft.frame) return (Ft.push(t), (t._lazy = [n, r]), 1);
  },
  Mo = function o(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || o(e));
  },
  Ni = function (t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart";
  },
  Ro = function (t, e, i, r) {
    var n = t.ratio,
      s = e < 0 || (!e && ((!t._start && Mo(t) && !(!t._initted && Ni(t))) || ((t._ts < 0 || t._dp._ts < 0) && !Ni(t)))) ? 0 : 1,
      a = t._rDelay,
      u = 0,
      l,
      f,
      c;
    if (
      (a && t._repeat && ((u = Ye(0, t._tDur, e)), (f = ge(u, a)), t._yoyo && f & 1 && (s = 1 - s), f !== ge(t._tTime, a) && ((n = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
      s !== n || G || r || t._zTime === Z || (!e && t._zTime))
    ) {
      if (!t._initted && Pn(t, e, r, i, u)) return;
      for (c = t._zTime, t._zTime = e || (i ? Z : 0), i || (i = e && !c), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, l = t._pt; l;) (l.r(s, l.d), (l = l._next));
      (e < 0 && Di(t, e, i, !0),
        t._onUpdate && !i && ct(t, "onUpdate"),
        u && t._repeat && !i && t.parent && ct(t, "onRepeat"),
        (e >= t._tDur || e < 0) && t.ratio === s && (s && Vt(t, 1), !i && !G && (ct(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom())));
    } else t._zTime || (t._zTime = e);
  },
  Co = function (t, e, i) {
    var r;
    if (i > e)
      for (r = t._first; r && r._start <= i;) {
        if (r.data === "isPause" && r._start > e) return r;
        r = r._next;
      }
    else
      for (r = t._last; r && r._start >= i;) {
        if (r.data === "isPause" && r._start < e) return r;
        r = r._prev;
      }
  },
  me = function (t, e, i, r) {
    var n = t._repeat,
      s = q(e) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !r && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : q(s * (n + 1) + t._rDelay * n)) : s),
      a > 0 && !r && pi(t, (t._tTime = t._tDur * a)),
      t.parent && di(t),
      i || Qt(t.parent, t),
      t
    );
  },
  Mr = function (t) {
    return t instanceof et ? Qt(t) : me(t, t._dur);
  },
  Oo = { _start: 0, endTime: Ae, totalDuration: Ae },
  mt = function o(t, e, i) {
    var r = t.labels,
      n = t._recent || Oo,
      s = t.duration() >= Rt ? n.endTime(!1) : t._dur,
      a,
      u,
      l;
    return W(e) && (isNaN(e) || e in r)
      ? ((u = e.charAt(0)),
        (l = e.substr(-1) === "%"),
        (a = e.indexOf("=")),
        u === "<" || u === ">"
          ? (a >= 0 && (e = e.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (a < 0 ? n : i).totalDuration() / 100 : 1))
          : a < 0
            ? (e in r || (r[e] = s), r[e])
            : ((u = parseFloat(e.charAt(a - 1) + e.substr(a + 1))), l && i && (u = (u / 100) * (Q(i) ? i[0] : i).totalDuration()), a > 1 ? o(t, e.substr(0, a - 1), i) + u : s + u))
      : e == null
        ? s
        : +e;
  },
  Re = function (t, e, i) {
    var r = Lt(e[1]),
      n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
      s = e[n],
      a,
      u;
    if ((r && (s.duration = e[1]), (s.parent = i), t)) {
      for (a = s, u = i; u && !("immediateRender" in a);) ((a = u.vars.defaults || {}), (u = rt(u.vars.inherit) && u.parent));
      ((s.immediateRender = rt(a.immediateRender)), t < 2 ? (s.runBackwards = 1) : (s.startAt = e[n - 1]));
    }
    return new X(e[0], s, e[n + 1]);
  },
  Xt = function (t, e) {
    return t || t === 0 ? e(t) : e;
  },
  Ye = function (t, e, i) {
    return i < t ? t : i > e ? e : i;
  },
  K = function (t, e) {
    return !W(t) || !(e = xo.exec(t)) ? "" : e[1];
  },
  Bo = function (t, e, i) {
    return Xt(i, function (r) {
      return Ye(t, e, r);
    });
  },
  Ii = [].slice,
  kn = function (t, e) {
    return t && Ct(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && Ct(t[0]))) && !t.nodeType && t !== St;
  },
  Eo = function (t, e, i) {
    return (
      i === void 0 && (i = []),
      t.forEach(function (r) {
        var n;
        return (W(r) && !e) || kn(r, 1) ? (n = i).push.apply(n, xt(r)) : i.push(r);
      }) || i
    );
  },
  xt = function (t, e, i) {
    return j && !e && j.selector ? j.selector(t) : W(t) && !i && (Ai || !ye()) ? Ii.call((e || sr).querySelectorAll(t), 0) : Q(t) ? Eo(t, i) : kn(t) ? Ii.call(t, 0) : t ? [t] : [];
  },
  ji = function (t) {
    return (
      (t = xt(t)[0] || Ee("Invalid scope") || {}),
      function (e) {
        var i = t.current || t.nativeElement || t;
        return xt(e, i.querySelectorAll ? i : i === t ? Ee("Invalid scope") || sr.createElement("div") : t);
      }
    );
  },
  Mn = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Rn = function (t) {
    if (V(t)) return t;
    var e = Ct(t) ? t : { each: t },
      i = Jt(e.ease),
      r = e.from || 0,
      n = parseFloat(e.base) || 0,
      s = {},
      a = r > 0 && r < 1,
      u = isNaN(r) || a,
      l = e.axis,
      f = r,
      c = r;
    return (
      W(r) ? (f = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0) : !a && u && ((f = r[0]), (c = r[1])),
      function (_, d, p) {
        var h = (p || e).length,
          g = s[h],
          m,
          y,
          x,
          T,
          v,
          b,
          S,
          P,
          w;
        if (!g) {
          if (((w = e.grid === "auto" ? 0 : (e.grid || [1, Rt])[1]), !w)) {
            for (S = -1e8; S < (S = p[w++].getBoundingClientRect().left) && w < h;);
            w < h && w--;
          }
          for (g = s[h] = [], m = u ? Math.min(w, h) * f - 0.5 : r % w, y = w === Rt ? 0 : u ? (h * c) / w - 0.5 : (r / w) | 0, S = 0, P = Rt, b = 0; b < h; b++)
            ((x = (b % w) - m), (T = y - ((b / w) | 0)), (g[b] = v = l ? Math.abs(l === "y" ? T : x) : un(x * x + T * T)), v > S && (S = v), v < P && (P = v));
          (r === "random" && Mn(g),
            (g.max = S - P),
            (g.min = P),
            (g.v = h = (parseFloat(e.amount) || parseFloat(e.each) * (w > h ? h - 1 : l ? (l === "y" ? h / w : w) : Math.max(w, h / w)) || 0) * (r === "edges" ? -1 : 1)),
            (g.b = h < 0 ? n - h : n),
            (g.u = K(e.amount || e.each) || 0),
            (i = i && h < 0 ? jn(i) : i));
        }
        return ((h = (g[_] - g.min) / g.max || 0), q(g.b + (i ? i(h) : h) * g.v) + g.u);
      }
    );
  },
  zi = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (i) {
      var r = q(Math.round(parseFloat(i) / t) * t * e);
      return (r - (r % 1)) / e + (Lt(i) ? 0 : K(i));
    };
  },
  Cn = function (t, e) {
    var i = Q(t),
      r,
      n;
    return (
      !i && Ct(t) && ((r = i = t.radius || Rt), t.values ? ((t = xt(t.values)), (n = !Lt(t[0])) && (r *= r)) : (t = zi(t.increment))),
      Xt(
        e,
        i
          ? V(t)
            ? function (s) {
                return ((n = t(s)), Math.abs(n - s) <= r ? n : s);
              }
            : function (s) {
                for (var a = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), l = Rt, f = 0, c = t.length, _, d; c--;)
                  (n ? ((_ = t[c].x - a), (d = t[c].y - u), (_ = _ * _ + d * d)) : (_ = Math.abs(t[c] - a)), _ < l && ((l = _), (f = c)));
                return ((f = !r || l <= r ? t[f] : s), n || f === s || Lt(s) ? f : f + K(s));
              }
          : zi(t),
      )
    );
  },
  On = function (t, e, i, r) {
    return Xt(Q(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
      return Q(t)
        ? t[~~(Math.random() * t.length)]
        : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
    });
  },
  Ao = function () {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return function (r) {
      return e.reduce(function (n, s) {
        return s(n);
      }, r);
    };
  },
  Lo = function (t, e) {
    return function (i) {
      return t(parseFloat(i)) + (e || K(i));
    };
  },
  Do = function (t, e, i) {
    return En(t, e, 0, 1, i);
  },
  Bn = function (t, e, i) {
    return Xt(i, function (r) {
      return t[~~e(r)];
    });
  },
  No = function o(t, e, i) {
    var r = e - t;
    return Q(t)
      ? Bn(t, o(0, t.length), e)
      : Xt(i, function (n) {
          return ((r + ((n - t) % r)) % r) + t;
        });
  },
  Io = function o(t, e, i) {
    var r = e - t,
      n = r * 2;
    return Q(t)
      ? Bn(t, o(0, t.length - 1), e)
      : Xt(i, function (s) {
          return ((s = (n + ((s - t) % n)) % n || 0), t + (s > r ? n - s : s));
        });
  },
  Le = function (t) {
    for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e));)
      ((s = t.indexOf(")", r)),
        (a = t.charAt(r + 7) === "["),
        (n = t.substr(r + 7, s - r - 7).match(a ? _n : Ei)),
        (i += t.substr(e, r - e) + On(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
        (e = s + 1));
    return i + t.substr(e, t.length - e);
  },
  En = function (t, e, i, r, n) {
    var s = e - t,
      a = r - i;
    return Xt(n, function (u) {
      return i + (((u - t) / s) * a || 0);
    });
  },
  jo = function o(t, e, i, r) {
    var n = isNaN(t + e)
      ? 0
      : function (d) {
          return (1 - d) * t + d * e;
        };
    if (!n) {
      var s = W(t),
        a = {},
        u,
        l,
        f,
        c,
        _;
      if ((i === !0 && (r = 1) && (i = null), s)) ((t = { p: t }), (e = { p: e }));
      else if (Q(t) && !Q(e)) {
        for (f = [], c = t.length, _ = c - 2, l = 1; l < c; l++) f.push(o(t[l - 1], t[l]));
        (c--,
          (n = function (p) {
            p *= c;
            var h = Math.min(_, ~~p);
            return f[h](p - h);
          }),
          (i = e));
      } else r || (t = pe(Q(t) ? [] : {}, t));
      if (!f) {
        for (u in e) cr.call(a, t, u, "get", e[u]);
        n = function (p) {
          return pr(p, a) || (s ? t.p : t);
        };
      }
    }
    return Xt(i, n);
  },
  Rr = function (t, e, i) {
    var r = t.labels,
      n = Rt,
      s,
      a,
      u;
    for (s in r) ((a = r[s] - e), a < 0 == !!i && a && n > (a = Math.abs(a)) && ((u = s), (n = a)));
    return u;
  },
  ct = function (t, e, i) {
    var r = t.vars,
      n = r[e],
      s = j,
      a = t._ctx,
      u,
      l,
      f;
    if (n) return ((u = r[e + "Params"]), (l = r.callbackScope || t), i && Ft.length && ei(), a && (j = a), (f = u ? n.apply(l, u) : n.call(l)), (j = s), f);
  },
  be = function (t) {
    return (Vt(t), t.scrollTrigger && t.scrollTrigger.kill(!!G), t.progress() < 1 && ct(t, "onInterrupt"), t);
  },
  le,
  An = [],
  Ln = function (t) {
    if (t)
      if (((t = (!t.name && t.default) || t), nr() || t.headless)) {
        var e = t.name,
          i = V(t),
          r =
            e && !i && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = { init: Ae, render: pr, add: cr, kill: ta, modifier: Jo, rawVars: 0 },
          s = { targetTest: 0, get: 0, getSetter: dr, aliases: {}, register: 0 };
        if ((ye(), t !== r)) {
          if (ut[e]) return;
          (dt(r, dt(ii(t, n), s)),
            pe(r.prototype, pe(n, ii(t, s))),
            (ut[(r.prop = e)] = r),
            t.targetTest && (Ke.push(r), (ar[e] = 1)),
            (e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"));
        }
        (gn(e, r), t.register && t.register(at, r, st));
      } else An.push(t);
  },
  N = 255,
  Se = {
    aqua: [0, N, N],
    lime: [0, N, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, N],
    navy: [0, 0, 128],
    white: [N, N, N],
    olive: [128, 128, 0],
    yellow: [N, N, 0],
    orange: [N, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [N, 0, 0],
    pink: [N, 192, 203],
    cyan: [0, N, N],
    transparent: [N, N, N, 0],
  },
  vi = function (t, e, i) {
    return ((t += t < 0 ? 1 : t > 1 ? -1 : 0), ((t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * N + 0.5) | 0);
  },
  Dn = function (t, e, i) {
    var r = t ? (Lt(t) ? [t >> 16, (t >> 8) & N, t & N] : 0) : Se.black,
      n,
      s,
      a,
      u,
      l,
      f,
      c,
      _,
      d,
      p;
    if (!r) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Se[t])) r = Se[t];
      else if (t.charAt(0) === "#") {
        if ((t.length < 6 && ((n = t.charAt(1)), (s = t.charAt(2)), (a = t.charAt(3)), (t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))), t.length === 9))
          return ((r = parseInt(t.substr(1, 6), 16)), [r >> 16, (r >> 8) & N, r & N, parseInt(t.substr(7), 16) / 255]);
        ((t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & N, t & N]));
      } else if (t.substr(0, 3) === "hsl") {
        if (((r = p = t.match(Ei)), !e))
          ((u = (+r[0] % 360) / 360),
            (l = +r[1] / 100),
            (f = +r[2] / 100),
            (s = f <= 0.5 ? f * (l + 1) : f + l - f * l),
            (n = f * 2 - s),
            r.length > 3 && (r[3] *= 1),
            (r[0] = vi(u + 1 / 3, n, s)),
            (r[1] = vi(u, n, s)),
            (r[2] = vi(u - 1 / 3, n, s)));
        else if (~t.indexOf("=")) return ((r = t.match(cn)), i && r.length < 4 && (r[3] = 1), r);
      } else r = t.match(Ei) || Se.transparent;
      r = r.map(Number);
    }
    return (
      e &&
        !p &&
        ((n = r[0] / N),
        (s = r[1] / N),
        (a = r[2] / N),
        (c = Math.max(n, s, a)),
        (_ = Math.min(n, s, a)),
        (f = (c + _) / 2),
        c === _ ? (u = l = 0) : ((d = c - _), (l = f > 0.5 ? d / (2 - c - _) : d / (c + _)), (u = c === n ? (s - a) / d + (s < a ? 6 : 0) : c === s ? (a - n) / d + 2 : (n - s) / d + 4), (u *= 60)),
        (r[0] = ~~(u + 0.5)),
        (r[1] = ~~(l * 100 + 0.5)),
        (r[2] = ~~(f * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Nn = function (t) {
    var e = [],
      i = [],
      r = -1;
    return (
      t.split($t).forEach(function (n) {
        var s = n.match(ae) || [];
        (e.push.apply(e, s), i.push((r += s.length + 1)));
      }),
      (e.c = i),
      e
    );
  },
  Cr = function (t, e, i) {
    var r = "",
      n = (t + r).match($t),
      s = e ? "hsla(" : "rgba(",
      a = 0,
      u,
      l,
      f,
      c;
    if (!n) return t;
    if (
      ((n = n.map(function (_) {
        return (_ = Dn(_, e, 1)) && s + (e ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
      })),
      i && ((f = Nn(t)), (u = i.c), u.join(r) !== f.c.join(r)))
    )
      for (l = t.replace($t, "1").split(ae), c = l.length - 1; a < c; a++) r += l[a] + (~u.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : i).shift());
    if (!l) for (l = t.split($t), c = l.length - 1; a < c; a++) r += l[a] + n[a];
    return r + l[c];
  },
  $t = (function () {
    var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in Se) o += "|" + t + "\\b";
    return new RegExp(o + ")", "gi");
  })(),
  zo = /hsl[a]?\(/,
  In = function (t) {
    var e = t.join(" "),
      i;
    if ((($t.lastIndex = 0), $t.test(e))) return ((i = zo.test(e)), (t[1] = Cr(t[1], i)), (t[0] = Cr(t[0], i, Nn(t[1]))), !0);
  },
  De,
  ft = (function () {
    var o = Date.now,
      t = 500,
      e = 33,
      i = o(),
      r = i,
      n = 1e3 / 240,
      s = n,
      a = [],
      u,
      l,
      f,
      c,
      _,
      d,
      p = function h(g) {
        var m = o() - r,
          y = g === !0,
          x,
          T,
          v,
          b;
        if (
          ((m > t || m < 0) && (i += m - e),
          (r += m),
          (v = r - i),
          (x = v - s),
          (x > 0 || y) && ((b = ++c.frame), (_ = v - c.time * 1e3), (c.time = v = v / 1e3), (s += x + (x >= n ? 4 : n - x)), (T = 1)),
          y || (u = l(h)),
          T)
        )
          for (d = 0; d < a.length; d++) a[d](v, _, b, g);
      };
    return (
      (c = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (g) {
          return _ / (1e3 / (g || 60));
        },
        wake: function () {
          dn &&
            (!Ai &&
              nr() &&
              ((St = Ai = window),
              (sr = St.document || {}),
              (_t.gsap = at),
              (St.gsapVersions || (St.gsapVersions = [])).push(at.version),
              pn(ti || St.GreenSockGlobals || (!St.gsap && St) || {}),
              An.forEach(Ln)),
            (f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            u && c.sleep(),
            (l =
              f ||
              function (g) {
                return setTimeout(g, (s - c.time * 1e3 + 1) | 0);
              }),
            (De = 1),
            p(2));
        },
        sleep: function () {
          ((f ? cancelAnimationFrame : clearTimeout)(u), (De = 0), (l = Ae));
        },
        lagSmoothing: function (g, m) {
          ((t = g || 1 / 0), (e = Math.min(m || 33, t)));
        },
        fps: function (g) {
          ((n = 1e3 / (g || 240)), (s = c.time * 1e3 + n));
        },
        add: function (g, m, y) {
          var x = m
            ? function (T, v, b, S) {
                (g(T, v, b, S), c.remove(x));
              }
            : g;
          return (c.remove(g), a[y ? "unshift" : "push"](x), ye(), x);
        },
        remove: function (g, m) {
          ~(m = a.indexOf(g)) && a.splice(m, 1) && d >= m && d--;
        },
        _listeners: a,
      }),
      c
    );
  })(),
  ye = function () {
    return !De && ft.wake();
  },
  E = {},
  Fo = /^[\d.\-M][\d.\-,\s]/,
  $o = /["']/g,
  Yo = function (t) {
    for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, u, l; n < s; n++)
      ((u = i[n]), (a = n !== s - 1 ? u.lastIndexOf(",") : u.length), (l = u.substr(0, a)), (e[r] = isNaN(l) ? l.replace($o, "").trim() : +l), (r = u.substr(a + 1).trim()));
    return e;
  },
  Vo = function (t) {
    var e = t.indexOf("(") + 1,
      i = t.indexOf(")"),
      r = t.indexOf("(", e);
    return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
  },
  Uo = function (t) {
    var e = (t + "").split("("),
      i = E[e[0]];
    return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Yo(e[1])] : Vo(t).split(",").map(vn)) : E._CE && Fo.test(t) ? E._CE("", t) : i;
  },
  jn = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  zn = function o(t, e) {
    for (var i = t._first, r; i;)
      (i instanceof et
        ? o(i, e)
        : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? o(i.timeline, e) : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = e))),
        (i = i._next));
  },
  Jt = function (t, e) {
    return (t && (V(t) ? t : E[t] || Uo(t))) || e;
  },
  ne = function (t, e, i, r) {
    (i === void 0 &&
      (i = function (u) {
        return 1 - e(1 - u);
      }),
      r === void 0 &&
        (r = function (u) {
          return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
        }));
    var n = { easeIn: e, easeOut: i, easeInOut: r },
      s;
    return (
      nt(t, function (a) {
        ((E[a] = _t[a] = n), (E[(s = a.toLowerCase())] = i));
        for (var u in n) E[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = E[a + "." + u] = n[u];
      }),
      n
    );
  },
  Fn = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
    };
  },
  Ti = function o(t, e, i) {
    var r = e >= 1 ? e : 1,
      n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      s = (n / Bi) * (Math.asin(1 / r) || 0),
      a = function (f) {
        return f === 1 ? 1 : r * Math.pow(2, -10 * f) * yo((f - s) * n) + 1;
      },
      u =
        t === "out"
          ? a
          : t === "in"
            ? function (l) {
                return 1 - a(1 - l);
              }
            : Fn(a);
    return (
      (n = Bi / n),
      (u.config = function (l, f) {
        return o(t, l, f);
      }),
      u
    );
  },
  wi = function o(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function (s) {
        return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
      },
      r =
        t === "out"
          ? i
          : t === "in"
            ? function (n) {
                return 1 - i(1 - n);
              }
            : Fn(i);
    return (
      (r.config = function (n) {
        return o(t, n);
      }),
      r
    );
  };
nt("Linear,Quad,Cubic,Quart,Quint,Strong", function (o, t) {
  var e = t < 5 ? t + 1 : t;
  ne(
    o + ",Power" + (e - 1),
    t
      ? function (i) {
          return Math.pow(i, e);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, e);
    },
    function (i) {
      return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
    },
  );
});
E.Linear.easeNone = E.none = E.Linear.easeIn;
ne("Elastic", Ti("in"), Ti("out"), Ti());
(function (o, t) {
  var e = 1 / t,
    i = 2 * e,
    r = 2.5 * e,
    n = function (a) {
      return a < e ? o * a * a : a < i ? o * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? o * (a -= 2.25 / t) * a + 0.9375 : o * Math.pow(a - 2.625 / t, 2) + 0.984375;
    };
  ne(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n,
  );
})(7.5625, 2.75);
ne("Expo", function (o) {
  return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o);
});
ne("Circ", function (o) {
  return -(un(1 - o * o) - 1);
});
ne("Sine", function (o) {
  return o === 1 ? 1 : -mo(o * po) + 1;
});
ne("Back", wi("in"), wi("out"), wi());
E.SteppedEase =
  E.steps =
  _t.SteppedEase =
    {
      config: function (t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t,
          r = t + (e ? 0 : 1),
          n = e ? 1 : 0,
          s = 1 - Z;
        return function (a) {
          return (((r * Ye(0, s, a)) | 0) + n) * i;
        };
      },
    };
de.ease = E["quad.out"];
nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (o) {
  return (lr += o + "," + o + "Params,");
});
var $n = function (t, e) {
    ((this.id = go++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : yn), (this.set = e ? e.getSetter : dr));
  },
  Ne = (function () {
    function o(e) {
      ((this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        me(this, +e.duration, 1, 1),
        (this.data = e.data),
        j && ((this._ctx = j), j.data.push(this)),
        De || ft.wake());
    }
    var t = o.prototype;
    return (
      (t.delay = function (i) {
        return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), (this._delay = i), this) : this._delay;
      }),
      (t.duration = function (i) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (i) {
        return arguments.length ? ((this._dirty = 0), me(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
      }),
      (t.totalTime = function (i, r) {
        if ((ye(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (pi(this, i), !n._dp || n.parent || bn(n, this); n && n.parent;)
            (n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), (n = n.parent));
          !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && i < this._tDur) || (this._ts < 0 && i > 0) || (!this._tDur && !i)) && kt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i || (!this._dur && !r) || (this._initted && Math.abs(this._zTime) === Z) || (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), xn(this, i, r)),
          this
        );
      }),
      (t.time = function (i, r) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + kr(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
      }),
      (t.totalProgress = function (i, r) {
        return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
      }),
      (t.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + kr(this), r)
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (t.iteration = function (i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? ge(this._tTime, n) + 1 : 1;
      }),
      (t.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === i) return this;
        var n = this.parent && this._ts ? ri(this.parent._time, this) : this._tTime;
        return ((this._rts = +i || 0), (this._ts = this._ps || i === -1e-8 ? 0 : this._rts), this.totalTime(Ye(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), di(this), Po(this));
      }),
      (t.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                : (ye(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
                    this.progress() === 1 && Math.abs(this._zTime) !== Z && (this._tTime -= Z),
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (r && (r._sort || !this.parent) && kt(r, this, i - this._delay), this);
        }
        return this._start;
      }),
      (t.endTime = function (i) {
        return this._start + (rt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
      }),
      (t.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? ri(r.rawTime(i), this)
              : this._tTime
          : this._tTime;
      }),
      (t.revert = function (i) {
        i === void 0 && (i = To);
        var r = G;
        return ((G = i), fr(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), (G = r), this);
      }),
      (t.globalTime = function (i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r;) ((n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp));
        return !this.parent && this._sat ? this._sat.globalTime(i) : n;
      }),
      (t.repeat = function (i) {
        return arguments.length ? ((this._repeat = i === 1 / 0 ? -2 : i), Mr(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
      }),
      (t.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return ((this._rDelay = i), Mr(this), r ? this.time(r) : this);
        }
        return this._rDelay;
      }),
      (t.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (t.seek = function (i, r) {
        return this.totalTime(mt(this, i), rt(r));
      }),
      (t.restart = function (i, r) {
        return (this.play().totalTime(i ? -this._delay : 0, rt(r)), this._dur || (this._zTime = -1e-8), this);
      }),
      (t.play = function (i, r) {
        return (i != null && this.seek(i, r), this.reversed(!1).paused(!1));
      }),
      (t.reverse = function (i, r) {
        return (i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1));
      }),
      (t.pause = function (i, r) {
        return (i != null && this.seek(i, r), this.paused(!0));
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (i) {
        return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -1e-8 : 0)), this) : this._rts < 0;
      }),
      (t.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -1e-8), this);
      }),
      (t.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          n;
        return !!(!i || (this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - Z));
      }),
      (t.eventCallback = function (i, r, n) {
        var s = this.vars;
        return arguments.length > 1 ? (r ? ((s[i] = r), n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
      }),
      (t.then = function (i) {
        var r = this;
        return new Promise(function (n) {
          var s = V(i) ? i : Tn,
            a = function () {
              var l = r.then;
              ((r.then = null), V(s) && (s = s(r)) && (s.then || s === r) && (r.then = l), n(s), (r.then = l));
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) || (!r._tTime && r._ts < 0) ? a() : (r._prom = a);
        });
      }),
      (t.kill = function () {
        be(this);
      }),
      o
    );
  })();
dt(Ne.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var et = (function (o) {
  ln(t, o);
  function t(i, r) {
    var n;
    return (
      i === void 0 && (i = {}),
      (n = o.call(this, i) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!i.smoothChildTiming),
      (n.autoRemoveChildren = !!i.autoRemoveChildren),
      (n._sort = rt(i.sortChildren)),
      F && kt(i.parent || F, Ot(n), r),
      i.reversed && n.reverse(),
      i.paused && n.paused(!0),
      i.scrollTrigger && Sn(Ot(n), i.scrollTrigger),
      n
    );
  }
  var e = t.prototype;
  return (
    (e.to = function (r, n, s) {
      return (Re(0, arguments, this), this);
    }),
    (e.from = function (r, n, s) {
      return (Re(1, arguments, this), this);
    }),
    (e.fromTo = function (r, n, s, a) {
      return (Re(2, arguments, this), this);
    }),
    (e.set = function (r, n, s) {
      return ((n.duration = 0), (n.parent = this), Me(n).repeatDelay || (n.repeat = 0), (n.immediateRender = !!n.immediateRender), new X(r, n, mt(this, s), 1), this);
    }),
    (e.call = function (r, n, s) {
      return kt(this, X.delayedCall(0, r, n), s);
    }),
    (e.staggerTo = function (r, n, s, a, u, l, f) {
      return ((s.duration = n), (s.stagger = s.stagger || a), (s.onComplete = l), (s.onCompleteParams = f), (s.parent = this), new X(r, s, mt(this, u)), this);
    }),
    (e.staggerFrom = function (r, n, s, a, u, l, f) {
      return ((s.runBackwards = 1), (Me(s).immediateRender = rt(s.immediateRender)), this.staggerTo(r, n, s, a, u, l, f));
    }),
    (e.staggerFromTo = function (r, n, s, a, u, l, f, c) {
      return ((a.startAt = s), (Me(a).immediateRender = rt(a.immediateRender)), this.staggerTo(r, n, a, u, l, f, c));
    }),
    (e.render = function (r, n, s) {
      var a = this._time,
        u = this._dirty ? this.totalDuration() : this._tDur,
        l = this._dur,
        f = r <= 0 ? 0 : q(r),
        c = this._zTime < 0 != r < 0 && (this._initted || !l),
        _,
        d,
        p,
        h,
        g,
        m,
        y,
        x,
        T,
        v,
        b,
        S;
      if ((this !== F && f > u && r >= 0 && (f = u), f !== this._tTime || s || c)) {
        if (
          (a !== this._time && l && ((f += this._time - a), (r += this._time - a)),
          (_ = f),
          (T = this._start),
          (x = this._ts),
          (m = !x),
          c && (l || (a = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (((b = this._yoyo), (g = l + this._rDelay), this._repeat < -1 && r < 0)) return this.totalTime(g * 100 + r, n, s);
          if (
            ((_ = q(f % g)),
            f === u ? ((h = this._repeat), (_ = l)) : ((v = q(f / g)), (h = ~~v), h && h === v && ((_ = l), h--), _ > l && (_ = l)),
            (v = ge(this._tTime, g)),
            !a && this._tTime && v !== h && this._tTime - v * g - this._dur <= 0 && (v = h),
            b && h & 1 && ((_ = l - _), (S = 1)),
            h !== v && !this._lock)
          ) {
            var P = b && v & 1,
              w = P === (b && h & 1);
            if (
              (h < v && (P = !P),
              (a = P ? 0 : f % l ? l : f),
              (this._lock = 1),
              (this.render(a || (S ? 0 : q(h * g)), n, !l)._lock = 0),
              (this._tTime = f),
              !n && this.parent && ct(this, "onRepeat"),
              this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
              (a && a !== this._time) || m !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((l = this._dur),
              (u = this._tDur),
              w && ((this._lock = 2), (a = P ? l : -1e-4), this.render(a, !0), this.vars.repeatRefresh && !S && this.invalidate()),
              (this._lock = 0),
              !this._ts && !m)
            )
              return this;
            zn(this, S);
          }
        }
        if (
          (this._hasPause && !this._forcing && this._lock < 2 && ((y = Co(this, q(a), q(_))), y && (f -= _ - (_ = y._start))),
          (this._tTime = f),
          (this._time = _),
          (this._act = !x),
          this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = r), (a = 0)),
          !a && f && !n && !v && (ct(this, "onStart"), this._tTime !== f))
        )
          return this;
        if (_ >= a && r >= 0)
          for (d = this._first; d;) {
            if (((p = d._next), (d._act || _ >= d._start) && d._ts && y !== d)) {
              if (d.parent !== this) return this.render(r, n, s);
              if ((d.render(d._ts > 0 ? (_ - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (_ - d._start) * d._ts, n, s), _ !== this._time || (!this._ts && !m))) {
                ((y = 0), p && (f += this._zTime = -1e-8));
                break;
              }
            }
            d = p;
          }
        else {
          d = this._last;
          for (var M = r < 0 ? r : _; d;) {
            if (((p = d._prev), (d._act || M <= d._end) && d._ts && y !== d)) {
              if (d.parent !== this) return this.render(r, n, s);
              if ((d.render(d._ts > 0 ? (M - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (M - d._start) * d._ts, n, s || (G && fr(d))), _ !== this._time || (!this._ts && !m))) {
                ((y = 0), p && (f += this._zTime = M ? -1e-8 : Z));
                break;
              }
            }
            d = p;
          }
        }
        if (y && !n && (this.pause(), (y.render(_ >= a ? 0 : -1e-8)._zTime = _ >= a ? 1 : -1), this._ts)) return ((this._start = T), di(this), this.render(r, n, s));
        (this._onUpdate && !n && ct(this, "onUpdate", !0),
          ((f === u && this._tTime >= this.totalDuration()) || (!f && a)) &&
            (T === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !l) && ((f === u && this._ts > 0) || (!f && this._ts < 0)) && Vt(this, 1),
              !n && !(r < 0 && !a) && (f || a || !u) && (ct(this, f === u && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < u && this.timeScale() > 0) && this._prom()))));
      }
      return this;
    }),
    (e.add = function (r, n) {
      var s = this;
      if ((Lt(n) || (n = mt(this, n, r)), !(r instanceof Ne))) {
        if (Q(r))
          return (
            r.forEach(function (a) {
              return s.add(a, n);
            }),
            this
          );
        if (W(r)) return this.addLabel(r, n);
        if (V(r)) r = X.delayedCall(0, r);
        else return this;
      }
      return this !== r ? kt(this, r, n) : this;
    }),
    (e.getChildren = function (r, n, s, a) {
      (r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -1e8));
      for (var u = [], l = this._first; l;) (l._start >= a && (l instanceof X ? n && u.push(l) : (s && u.push(l), r && u.push.apply(u, l.getChildren(!0, n, s)))), (l = l._next));
      return u;
    }),
    (e.getById = function (r) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--;) if (n[s].vars.id === r) return n[s];
    }),
    (e.remove = function (r) {
      return W(r) ? this.removeLabel(r) : V(r) ? this.killTweensOf(r) : (r.parent === this && _i(this, r), r === this._recent && (this._recent = this._last), Qt(this));
    }),
    (e.totalTime = function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp && this._ts && (this._start = q(ft.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
          o.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (e.addLabel = function (r, n) {
      return ((this.labels[r] = mt(this, n)), this);
    }),
    (e.removeLabel = function (r) {
      return (delete this.labels[r], this);
    }),
    (e.addPause = function (r, n, s) {
      var a = X.delayedCall(0, n || Ae, s);
      return ((a.data = "isPause"), (this._hasPause = 1), kt(this, a, mt(this, r)));
    }),
    (e.removePause = function (r) {
      var n = this._first;
      for (r = mt(this, r); n;) (n._start === r && n.data === "isPause" && Vt(n), (n = n._next));
    }),
    (e.killTweensOf = function (r, n, s) {
      for (var a = this.getTweensOf(r, s), u = a.length; u--;) It !== a[u] && a[u].kill(r, n);
      return this;
    }),
    (e.getTweensOf = function (r, n) {
      for (var s = [], a = xt(r), u = this._first, l = Lt(n), f; u;)
        (u instanceof X
          ? wo(u._targets, a) && (l ? (!It || (u._initted && u._ts)) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u)
          : (f = u.getTweensOf(a, n)).length && s.push.apply(s, f),
          (u = u._next));
      return s;
    }),
    (e.tweenTo = function (r, n) {
      n = n || {};
      var s = this,
        a = mt(s, r),
        u = n,
        l = u.startAt,
        f = u.onStart,
        c = u.onStartParams,
        _ = u.immediateRender,
        d,
        p = X.to(
          s,
          dt(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration: n.duration || Math.abs((a - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || Z,
              onStart: function () {
                if ((s.pause(), !d)) {
                  var g = n.duration || Math.abs((a - (l && "time" in l ? l.time : s._time)) / s.timeScale());
                  (p._dur !== g && me(p, g, 0, 1).render(p._time, !0, !0), (d = 1));
                }
                f && f.apply(p, c || []);
              },
            },
            n,
          ),
        );
      return _ ? p.render(0) : p;
    }),
    (e.tweenFromTo = function (r, n, s) {
      return this.tweenTo(n, dt({ startAt: { time: mt(this, r) } }, s));
    }),
    (e.recent = function () {
      return this._recent;
    }),
    (e.nextLabel = function (r) {
      return (r === void 0 && (r = this._time), Rr(this, mt(this, r)));
    }),
    (e.previousLabel = function (r) {
      return (r === void 0 && (r = this._time), Rr(this, mt(this, r), 1));
    }),
    (e.currentLabel = function (r) {
      return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + Z);
    }),
    (e.shiftChildren = function (r, n, s) {
      s === void 0 && (s = 0);
      for (var a = this._first, u = this.labels, l; a;) (a._start >= s && ((a._start += r), (a._end += r)), (a = a._next));
      if (n) for (l in u) u[l] >= s && (u[l] += r);
      return Qt(this);
    }),
    (e.invalidate = function (r) {
      var n = this._first;
      for (this._lock = 0; n;) (n.invalidate(r), (n = n._next));
      return o.prototype.invalidate.call(this, r);
    }),
    (e.clear = function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, s; n;) ((s = n._next), this.remove(n), (n = s));
      return (this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Qt(this));
    }),
    (e.totalDuration = function (r) {
      var n = 0,
        s = this,
        a = s._last,
        u = Rt,
        l,
        f,
        c;
      if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
      if (s._dirty) {
        for (c = s.parent; a;)
          ((l = a._prev),
            a._dirty && a.totalDuration(),
            (f = a._start),
            f > u && s._sort && a._ts && !s._lock ? ((s._lock = 1), (kt(s, a, f - a._delay, 1)._lock = 0)) : (u = f),
            f < 0 && a._ts && ((n -= f), ((!c && !s._dp) || (c && c.smoothChildTiming)) && ((s._start += f / s._ts), (s._time -= f), (s._tTime -= f)), s.shiftChildren(-f, !1, -1 / 0), (u = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = l));
        (me(s, s === F && s._time > n ? s._time : n, 1, 1), (s._dirty = 0));
      }
      return s._tDur;
    }),
    (t.updateRoot = function (r) {
      if ((F._ts && (xn(F, ri(r, F)), (mn = ft.frame)), ft.frame >= Sr)) {
        Sr += ht.autoSleep || 120;
        var n = F._first;
        if ((!n || !n._ts) && ht.autoSleep && ft._listeners.length < 2) {
          for (; n && !n._ts;) n = n._next;
          n || ft.sleep();
        }
      }
    }),
    t
  );
})(Ne);
dt(et.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Xo = function (t, e, i, r, n, s, a) {
    var u = new st(this._pt, t, e, 0, 1, Wn, null, n),
      l = 0,
      f = 0,
      c,
      _,
      d,
      p,
      h,
      g,
      m,
      y;
    for (u.b = i, u.e = r, i += "", r += "", (m = ~r.indexOf("random(")) && (r = Le(r)), s && ((y = [i, r]), s(y, t, e), (i = y[0]), (r = y[1])), _ = i.match(yi) || []; (c = yi.exec(r));)
      ((p = c[0]),
        (h = r.substring(l, c.index)),
        d ? (d = (d + 1) % 5) : h.substr(-5) === "rgba(" && (d = 1),
        p !== _[f++] &&
          ((g = parseFloat(_[f - 1]) || 0),
          (u._pt = { _next: u._pt, p: h || f === 1 ? h : ",", s: g, c: p.charAt(1) === "=" ? fe(g, p) - g : parseFloat(p) - g, m: d && d < 4 ? Math.round : 0 }),
          (l = yi.lastIndex)));
    return ((u.c = l < r.length ? r.substring(l, r.length) : ""), (u.fp = a), (hn.test(r) || m) && (u.e = 0), (this._pt = u), u);
  },
  cr = function (t, e, i, r, n, s, a, u, l, f) {
    V(r) && (r = r(n || 0, t, s));
    var c = t[e],
      _ = i !== "get" ? i : V(c) ? (l ? t[e.indexOf("set") || !V(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : c,
      d = V(c) ? (l ? Ko : Xn) : _r,
      p;
    if ((W(r) && (~r.indexOf("random(") && (r = Le(r)), r.charAt(1) === "=" && ((p = fe(_, r) + (K(_) || 0)), (p || p === 0) && (r = p))), !f || _ !== r || Fi))
      return !isNaN(_ * r) && r !== ""
        ? ((p = new st(this._pt, t, e, +_ || 0, r - (_ || 0), typeof c == "boolean" ? Qo : qn, 0, d)), l && (p.fp = l), a && p.modifier(a, this, t), (this._pt = p))
        : (!c && !(e in t) && or(e, r), Xo.call(this, t, e, _, r, d, u || ht.stringFilter, l));
  },
  qo = function (t, e, i, r, n) {
    if ((V(t) && (t = Ce(t, n, e, i, r)), !Ct(t) || (t.style && t.nodeType) || Q(t) || fn(t))) return W(t) ? Ce(t, n, e, i, r) : t;
    var s = {},
      a;
    for (a in t) s[a] = Ce(t[a], n, e, i, r);
    return s;
  },
  Yn = function (t, e, i, r, n, s) {
    var a, u, l, f;
    if (ut[t] && (a = new ut[t]()).init(n, a.rawVars ? e[t] : qo(e[t], r, n, s, i), i, r, s) !== !1 && ((i._pt = u = new st(i._pt, n, t, 0, 1, a.render, a, 0, a.priority)), i !== le))
      for (l = i._ptLookup[i._targets.indexOf(n)], f = a._props.length; f--;) l[a._props[f]] = u;
    return a;
  },
  It,
  Fi,
  hr = function o(t, e, i) {
    var r = t.vars,
      n = r.ease,
      s = r.startAt,
      a = r.immediateRender,
      u = r.lazy,
      l = r.onUpdate,
      f = r.runBackwards,
      c = r.yoyoEase,
      _ = r.keyframes,
      d = r.autoRevert,
      p = t._dur,
      h = t._startAt,
      g = t._targets,
      m = t.parent,
      y = m && m.data === "nested" ? m.vars.targets : g,
      x = t._overwrite === "auto" && !ir,
      T = t.timeline,
      v,
      b,
      S,
      P,
      w,
      M,
      R,
      O,
      C,
      I,
      L,
      A,
      z;
    if (
      (T && (!_ || !n) && (n = "none"),
      (t._ease = Jt(n, de.ease)),
      (t._yEase = c ? jn(Jt(c === !0 ? n : c, de.ease)) : 0),
      c && t._yoyo && !t._repeat && ((c = t._yEase), (t._yEase = t._ease), (t._ease = c)),
      (t._from = !T && !!r.runBackwards),
      !T || (_ && !r.stagger))
    ) {
      if (
        ((O = g[0] ? Zt(g[0]).harness : 0),
        (A = O && r[O.prop]),
        (v = ii(r, ar)),
        h && (h._zTime < 0 && h.progress(1), e < 0 && f && a && !d ? h.render(-1, !0) : h.revert(f && p ? He : vo), (h._lazy = 0)),
        s)
      ) {
        if (
          (Vt(
            (t._startAt = X.set(
              g,
              dt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: m,
                  immediateRender: !0,
                  lazy: !h && rt(u),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    l &&
                    function () {
                      return ct(t, "onUpdate");
                    },
                  stagger: 0,
                },
                s,
              ),
            )),
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (G || (!a && !d)) && t._startAt.revert(He),
          a && p && e <= 0 && i <= 0)
        ) {
          e && (t._zTime = e);
          return;
        }
      } else if (f && p && !h) {
        if (
          (e && (a = !1),
          (S = dt({ overwrite: !1, data: "isFromStart", lazy: a && !h && rt(u), immediateRender: a, stagger: 0, parent: m }, v)),
          A && (S[O.prop] = A),
          Vt((t._startAt = X.set(g, S))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (G ? t._startAt.revert(He) : t._startAt.render(-1, !0)),
          (t._zTime = e),
          !a)
        )
          o(t._startAt, Z, Z);
        else if (!e) return;
      }
      for (t._pt = t._ptCache = 0, u = (p && rt(u)) || (u && !p), b = 0; b < g.length; b++) {
        if (
          ((w = g[b]),
          (R = w._gsap || ur(g)[b]._gsap),
          (t._ptLookup[b] = I = {}),
          Li[R.id] && Ft.length && ei(),
          (L = y === g ? b : y.indexOf(w)),
          O &&
            (C = new O()).init(w, A || v, t, L, y) !== !1 &&
            ((t._pt = P = new st(t._pt, w, C.name, 0, 1, C.render, C, 0, C.priority)),
            C._props.forEach(function (H) {
              I[H] = P;
            }),
            C.priority && (M = 1)),
          !O || A)
        )
          for (S in v) ut[S] && (C = Yn(S, v, t, L, w, y)) ? C.priority && (M = 1) : (I[S] = P = cr.call(t, w, S, "get", v[S], L, y, 0, r.stringFilter));
        (t._op && t._op[b] && t.kill(w, t._op[b]), x && t._pt && ((It = t), F.killTweensOf(w, I, t.globalTime(e)), (z = !t.parent), (It = 0)), t._pt && u && (Li[R.id] = 1));
      }
      (M && Gn(t), t._onInit && t._onInit(t));
    }
    ((t._onUpdate = l), (t._initted = (!t._op || t._pt) && !z), _ && e <= 0 && T.render(Rt, !0, !0));
  },
  Wo = function (t, e, i, r, n, s, a, u) {
    var l = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
      f,
      c,
      _,
      d;
    if (!l)
      for (l = t._ptCache[e] = [], _ = t._ptLookup, d = t._targets.length; d--;) {
        if (((f = _[d][e]), f && f.d && f.d._pt)) for (f = f.d._pt; f && f.p !== e && f.fp !== e;) f = f._next;
        if (!f) return ((Fi = 1), (t.vars[e] = "+=0"), hr(t, a), (Fi = 0), u ? Ee(e + " not eligible for reset") : 1);
        l.push(f);
      }
    for (d = l.length; d--;) ((c = l[d]), (f = c._pt || c), (f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c), (f.c = i - f.s), c.e && (c.e = U(i) + K(c.e)), c.b && (c.b = f.s + K(c.b)));
  },
  Go = function (t, e) {
    var i = t[0] ? Zt(t[0]).harness : 0,
      r = i && i.aliases,
      n,
      s,
      a,
      u;
    if (!r) return e;
    n = pe({}, e);
    for (s in r) if (s in n) for (u = r[s].split(","), a = u.length; a--;) n[u[a]] = n[s];
    return n;
  },
  Ho = function (t, e, i, r) {
    var n = e.ease || r || "power1.inOut",
      s,
      a;
    if (Q(e))
      ((a = i[t] || (i[t] = [])),
        e.forEach(function (u, l) {
          return a.push({ t: (l / (e.length - 1)) * 100, v: u, e: n });
        }));
    else for (s in e) ((a = i[s] || (i[s] = [])), s === "ease" || a.push({ t: parseFloat(t), v: e[s], e: n }));
  },
  Ce = function (t, e, i, r, n) {
    return V(t) ? t.call(e, i, r, n) : W(t) && ~t.indexOf("random(") ? Le(t) : t;
  },
  Vn = lr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Un = {};
nt(Vn + ",id,stagger,delay,duration,paused,scrollTrigger", function (o) {
  return (Un[o] = 1);
});
var X = (function (o) {
  ln(t, o);
  function t(i, r, n, s) {
    var a;
    (typeof r == "number" && ((n.duration = r), (r = n), (n = null)), (a = o.call(this, s ? r : Me(r)) || this));
    var u = a.vars,
      l = u.duration,
      f = u.delay,
      c = u.immediateRender,
      _ = u.stagger,
      d = u.overwrite,
      p = u.keyframes,
      h = u.defaults,
      g = u.scrollTrigger,
      m = u.yoyoEase,
      y = r.parent || F,
      x = (Q(i) || fn(i) ? Lt(i[0]) : "length" in r) ? [i] : xt(i),
      T,
      v,
      b,
      S,
      P,
      w,
      M,
      R;
    if (((a._targets = x.length ? ur(x) : Ee("GSAP target " + i + " not found. https://gsap.com", !ht.nullTargetWarn) || []), (a._ptLookup = []), (a._overwrite = d), p || _ || Ve(l) || Ve(f))) {
      if (
        ((r = a.vars),
        (T = a.timeline = new et({ data: "nested", defaults: h || {}, targets: y && y.data === "nested" ? y.vars.targets : x })),
        T.kill(),
        (T.parent = T._dp = Ot(a)),
        (T._start = 0),
        _ || Ve(l) || Ve(f))
      ) {
        if (((S = x.length), (M = _ && Rn(_)), Ct(_))) for (P in _) ~Vn.indexOf(P) && (R || (R = {}), (R[P] = _[P]));
        for (v = 0; v < S; v++)
          ((b = ii(r, Un)),
            (b.stagger = 0),
            m && (b.yoyoEase = m),
            R && pe(b, R),
            (w = x[v]),
            (b.duration = +Ce(l, Ot(a), v, w, x)),
            (b.delay = (+Ce(f, Ot(a), v, w, x) || 0) - a._delay),
            !_ && S === 1 && b.delay && ((a._delay = f = b.delay), (a._start += f), (b.delay = 0)),
            T.to(w, b, M ? M(v, w, x) : 0),
            (T._ease = E.none));
        T.duration() ? (l = f = 0) : (a.timeline = 0);
      } else if (p) {
        (Me(dt(T.vars.defaults, { ease: "none" })), (T._ease = Jt(p.ease || r.ease || "none")));
        var O = 0,
          C,
          I,
          L;
        if (Q(p))
          (p.forEach(function (A) {
            return T.to(x, A, ">");
          }),
            T.duration());
        else {
          b = {};
          for (P in p) P === "ease" || P === "easeEach" || Ho(P, p[P], b, p.easeEach);
          for (P in b)
            for (
              C = b[P].sort(function (A, z) {
                return A.t - z.t;
              }),
                O = 0,
                v = 0;
              v < C.length;
              v++
            )
              ((I = C[v]), (L = { ease: I.e, duration: ((I.t - (v ? C[v - 1].t : 0)) / 100) * l }), (L[P] = I.v), T.to(x, L, O), (O += L.duration));
          T.duration() < l && T.to({}, { duration: l - T.duration() });
        }
      }
      l || a.duration((l = T.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !ir && ((It = Ot(a)), F.killTweensOf(x), (It = 0)),
      kt(y, Ot(a), n),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (c || (!l && !p && a._start === q(y._time) && rt(c) && ko(Ot(a)) && y.data !== "nested")) && ((a._tTime = -1e-8), a.render(Math.max(0, -f) || 0)),
      g && Sn(Ot(a), g),
      a
    );
  }
  var e = t.prototype;
  return (
    (e.render = function (r, n, s) {
      var a = this._time,
        u = this._tDur,
        l = this._dur,
        f = r < 0,
        c = r > u - Z && !f ? u : r < Z ? 0 : r,
        _,
        d,
        p,
        h,
        g,
        m,
        y,
        x,
        T;
      if (!l) Ro(this, r, n, s);
      else if (c !== this._tTime || !r || s || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 !== f) || this._lazy) {
        if (((_ = c), (x = this.timeline), this._repeat)) {
          if (((h = l + this._rDelay), this._repeat < -1 && f)) return this.totalTime(h * 100 + r, n, s);
          if (
            ((_ = q(c % h)),
            c === u ? ((p = this._repeat), (_ = l)) : ((g = q(c / h)), (p = ~~g), p && p === g ? ((_ = l), p--) : _ > l && (_ = l)),
            (m = this._yoyo && p & 1),
            m && ((T = this._yEase), (_ = l - _)),
            (g = ge(this._tTime, h)),
            _ === a && !s && this._initted && p === g)
          )
            return ((this._tTime = c), this);
          p !== g &&
            (x && this._yEase && zn(x, m), this.vars.repeatRefresh && !m && !this._lock && _ !== h && this._initted && ((this._lock = s = 1), (this.render(q(h * p), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Pn(this, f ? r : _, s, n, c)) return ((this._tTime = 0), this);
          if (a !== this._time && !(s && this.vars.repeatRefresh && p !== g)) return this;
          if (l !== this._dur) return this.render(r, n, s);
        }
        if (
          ((this._tTime = c),
          (this._time = _),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = y = (T || this._ease)(_ / l)),
          this._from && (this.ratio = y = 1 - y),
          !a && c && !n && !g && (ct(this, "onStart"), this._tTime !== c))
        )
          return this;
        for (d = this._pt; d;) (d.r(y, d.d), (d = d._next));
        ((x && x.render(r < 0 ? r : x._dur * x._ease(_ / this._dur), n, s)) || (this._startAt && (this._zTime = r)),
          this._onUpdate && !n && (f && Di(this, r, n, s), ct(this, "onUpdate")),
          this._repeat && p !== g && this.vars.onRepeat && !n && this.parent && ct(this, "onRepeat"),
          (c === this._tDur || !c) &&
            this._tTime === c &&
            (f && !this._onUpdate && Di(this, r, !0, !0),
            (r || !l) && ((c === this._tDur && this._ts > 0) || (!c && this._ts < 0)) && Vt(this, 1),
            !n && !(f && !a) && (c || a || m) && (ct(this, c === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < u && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (e.targets = function () {
      return this._targets;
    }),
    (e.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        o.prototype.invalidate.call(this, r)
      );
    }),
    (e.resetTo = function (r, n, s, a, u) {
      (De || ft.wake(), this._ts || this.play());
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        f;
      return (
        this._initted || hr(this, l),
        (f = this._ease(l / this._dur)),
        Wo(this, r, n, s, a, f, l, u) ? this.resetTo(r, n, s, a, 1) : (pi(this, 0), this.parent || wn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
      );
    }),
    (e.kill = function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all"))) return ((this._lazy = this._pt = 0), this.parent ? be(this) : this.scrollTrigger && this.scrollTrigger.kill(!!G), this);
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, It && It.vars.overwrite !== !0)._first || be(this),
          this.parent && s !== this.timeline.totalDuration() && me(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var a = this._targets,
        u = r ? xt(r) : a,
        l = this._ptLookup,
        f = this._pt,
        c,
        _,
        d,
        p,
        h,
        g,
        m;
      if ((!n || n === "all") && So(a, u)) return (n === "all" && (this._pt = 0), be(this));
      for (
        c = this._op = this._op || [],
          n !== "all" &&
            (W(n) &&
              ((h = {}),
              nt(n, function (y) {
                return (h[y] = 1);
              }),
              (n = h)),
            (n = Go(a, n))),
          m = a.length;
        m--;
      )
        if (~u.indexOf(a[m])) {
          ((_ = l[m]), n === "all" ? ((c[m] = n), (p = _), (d = {})) : ((d = c[m] = c[m] || {}), (p = n)));
          for (h in p) ((g = _ && _[h]), g && ((!("kill" in g.d) || g.d.kill(h) === !0) && _i(this, g, "_pt"), delete _[h]), d !== "all" && (d[h] = 1));
        }
      return (this._initted && !this._pt && f && be(this), this);
    }),
    (t.to = function (r, n) {
      return new t(r, n, arguments[2]);
    }),
    (t.from = function (r, n) {
      return Re(1, arguments);
    }),
    (t.delayedCall = function (r, n, s, a) {
      return new t(n, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: r, onComplete: n, onReverseComplete: n, onCompleteParams: s, onReverseCompleteParams: s, callbackScope: a });
    }),
    (t.fromTo = function (r, n, s) {
      return Re(2, arguments);
    }),
    (t.set = function (r, n) {
      return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n));
    }),
    (t.killTweensOf = function (r, n, s) {
      return F.killTweensOf(r, n, s);
    }),
    t
  );
})(Ne);
dt(X.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
nt("staggerTo,staggerFrom,staggerFromTo", function (o) {
  X[o] = function () {
    var t = new et(),
      e = Ii.call(arguments, 0);
    return (e.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, e));
  };
});
var _r = function (t, e, i) {
    return (t[e] = i);
  },
  Xn = function (t, e, i) {
    return t[e](i);
  },
  Ko = function (t, e, i, r) {
    return t[e](r.fp, i);
  },
  Zo = function (t, e, i) {
    return t.setAttribute(e, i);
  },
  dr = function (t, e) {
    return V(t[e]) ? Xn : rr(t[e]) && t.setAttribute ? Zo : _r;
  },
  qn = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
  },
  Qo = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  Wn = function (t, e) {
    var i = e._pt,
      r = "";
    if (!t && e.b) r = e.b;
    else if (t === 1 && e.e) r = e.e;
    else {
      for (; i;) ((r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r), (i = i._next));
      r += e.c;
    }
    e.set(e.t, e.p, r, e);
  },
  pr = function (t, e) {
    for (var i = e._pt; i;) (i.r(t, i.d), (i = i._next));
  },
  Jo = function (t, e, i, r) {
    for (var n = this._pt, s; n;) ((s = n._next), n.p === r && n.modifier(t, e, i), (n = s));
  },
  ta = function (t) {
    for (var e = this._pt, i, r; e;) ((r = e._next), (e.p === t && !e.op) || e.op === t ? _i(this, e, "_pt") : e.dep || (i = 1), (e = r));
    return !i;
  },
  ea = function (t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
  },
  Gn = function (t) {
    for (var e = t._pt, i, r, n, s; e;) {
      for (i = e._next, r = n; r && r.pr > e.pr;) r = r._next;
      ((e._prev = r ? r._prev : s) ? (e._prev._next = e) : (n = e), (e._next = r) ? (r._prev = e) : (s = e), (e = i));
    }
    t._pt = n;
  },
  st = (function () {
    function o(e, i, r, n, s, a, u, l, f) {
      ((this.t = i), (this.s = n), (this.c = s), (this.p = r), (this.r = a || qn), (this.d = u || this), (this.set = l || _r), (this.pr = f || 0), (this._next = e), e && (e._prev = this));
    }
    var t = o.prototype;
    return (
      (t.modifier = function (i, r, n) {
        ((this.mSet = this.mSet || this.set), (this.set = ea), (this.m = i), (this.mt = n), (this.tween = r));
      }),
      o
    );
  })();
nt(
  lr +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (o) {
    return (ar[o] = 1);
  },
);
_t.TweenMax = _t.TweenLite = X;
_t.TimelineLite = _t.TimelineMax = et;
F = new et({ sortChildren: !1, defaults: de, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 });
ht.stringFilter = In;
var te = [],
  Ze = {},
  ia = [],
  Or = 0,
  ra = 0,
  bi = function (t) {
    return (Ze[t] || ia).map(function (e) {
      return e();
    });
  },
  $i = function () {
    var t = Date.now(),
      e = [];
    t - Or > 2 &&
      (bi("matchMediaInit"),
      te.forEach(function (i) {
        var r = i.queries,
          n = i.conditions,
          s,
          a,
          u,
          l;
        for (a in r) ((s = St.matchMedia(r[a]).matches), s && (u = 1), s !== n[a] && ((n[a] = s), (l = 1)));
        l && (i.revert(), u && e.push(i));
      }),
      bi("matchMediaRevert"),
      e.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (Or = t),
      bi("matchMedia"));
  },
  Hn = (function () {
    function o(e, i) {
      ((this.selector = i && ji(i)), (this.data = []), (this._r = []), (this.isReverted = !1), (this.id = ra++), e && this.add(e));
    }
    var t = o.prototype;
    return (
      (t.add = function (i, r, n) {
        V(i) && ((n = r), (r = i), (i = V));
        var s = this,
          a = function () {
            var l = j,
              f = s.selector,
              c;
            return (l && l !== s && l.data.push(s), n && (s.selector = ji(n)), (j = s), (c = r.apply(s, arguments)), V(c) && s._r.push(c), (j = l), (s.selector = f), (s.isReverted = !1), c);
          };
        return (
          (s.last = a),
          i === V
            ? a(s, function (u) {
                return s.add(null, u);
              })
            : i
              ? (s[i] = a)
              : a
        );
      }),
      (t.ignore = function (i) {
        var r = j;
        ((j = null), i(this), (j = r));
      }),
      (t.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof o ? i.push.apply(i, r.getTweens()) : r instanceof X && !(r.parent && r.parent.data === "nested") && i.push(r);
          }),
          i
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (i, r) {
        var n = this;
        if (
          (i
            ? (function () {
                for (var a = n.getTweens(), u = n.data.length, l; u--;)
                  ((l = n.data[u]),
                    l.data === "isFlip" &&
                      (l.revert(),
                      l.getChildren(!0, !0, !1).forEach(function (f) {
                        return a.splice(a.indexOf(f), 1);
                      })));
                for (
                  a
                    .map(function (f) {
                      return { g: f._dur || f._delay || (f._sat && !f._sat.vars.immediateRender) ? f.globalTime(0) : -1 / 0, t: f };
                    })
                    .sort(function (f, c) {
                      return c.g - f.g || -1 / 0;
                    })
                    .forEach(function (f) {
                      return f.t.revert(i);
                    }),
                    u = n.data.length;
                  u--;
                )
                  ((l = n.data[u]), l instanceof et ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof X) && l.revert && l.revert(i));
                (n._r.forEach(function (f) {
                  return f(i, n);
                }),
                  (n.isReverted = !0));
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          r)
        )
          for (var s = te.length; s--;) te[s].id === this.id && te.splice(s, 1);
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      o
    );
  })(),
  na = (function () {
    function o(e) {
      ((this.contexts = []), (this.scope = e), j && j.data.push(this));
    }
    var t = o.prototype;
    return (
      (t.add = function (i, r, n) {
        Ct(i) || (i = { matches: i });
        var s = new Hn(0, n || this.scope),
          a = (s.conditions = {}),
          u,
          l,
          f;
        (j && !s.selector && (s.selector = j.selector), this.contexts.push(s), (r = s.add("onMatch", r)), (s.queries = i));
        for (l in i)
          l === "all"
            ? (f = 1)
            : ((u = St.matchMedia(i[l])), u && (te.indexOf(s) < 0 && te.push(s), (a[l] = u.matches) && (f = 1), u.addListener ? u.addListener($i) : u.addEventListener("change", $i)));
        return (
          f &&
            r(s, function (c) {
              return s.add(null, c);
            }),
          this
        );
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      (t.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      o
    );
  })(),
  ni = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      e.forEach(function (r) {
        return Ln(r);
      });
    },
    timeline: function (t) {
      return new et(t);
    },
    getTweensOf: function (t, e) {
      return F.getTweensOf(t, e);
    },
    getProperty: function (t, e, i, r) {
      W(t) && (t = xt(t)[0]);
      var n = Zt(t || {}).get,
        s = i ? Tn : vn;
      return (
        i === "native" && (i = ""),
        t &&
          (e
            ? s(((ut[e] && ut[e].get) || n)(t, e, i, r))
            : function (a, u, l) {
                return s(((ut[a] && ut[a].get) || n)(t, a, u, l));
              })
      );
    },
    quickSetter: function (t, e, i) {
      if (((t = xt(t)), t.length > 1)) {
        var r = t.map(function (f) {
            return at.quickSetter(f, e, i);
          }),
          n = r.length;
        return function (f) {
          for (var c = n; c--;) r[c](f);
        };
      }
      t = t[0] || {};
      var s = ut[e],
        a = Zt(t),
        u = (a.harness && (a.harness.aliases || {})[e]) || e,
        l = s
          ? function (f) {
              var c = new s();
              ((le._pt = 0), c.init(t, i ? f + i : f, le, 0, [t]), c.render(1, c), le._pt && pr(1, le));
            }
          : a.set(t, u);
      return s
        ? l
        : function (f) {
            return l(t, u, i ? f + i : f, a, 1);
          };
    },
    quickTo: function (t, e, i) {
      var r,
        n = at.to(t, dt(((r = {}), (r[e] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r), i || {})),
        s = function (u, l, f) {
          return n.resetTo(e, u, l, f);
        };
      return ((s.tween = n), s);
    },
    isTweening: function (t) {
      return F.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return (t && t.ease && (t.ease = Jt(t.ease, de.ease)), Pr(de, t || {}));
    },
    config: function (t) {
      return Pr(ht, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        i = t.effect,
        r = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      ((r || "").split(",").forEach(function (a) {
        return a && !ut[a] && !_t[a] && Ee(e + " effect requires " + a + " plugin.");
      }),
        (xi[e] = function (a, u, l) {
          return i(xt(a), dt(u || {}, n), l);
        }),
        s &&
          (et.prototype[e] = function (a, u, l) {
            return this.add(xi[e](a, Ct(u) ? u : (l = u) && {}, this), l);
          }));
    },
    registerEase: function (t, e) {
      E[t] = Jt(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? Jt(t, e) : E;
    },
    getById: function (t) {
      return F.getById(t);
    },
    exportRoot: function (t, e) {
      t === void 0 && (t = {});
      var i = new et(t),
        r,
        n;
      for (i.smoothChildTiming = rt(t.smoothChildTiming), F.remove(i), i._dp = 0, i._time = i._tTime = F._time, r = F._first; r;)
        ((n = r._next), (e || !(!r._dur && r instanceof X && r.vars.onComplete === r._targets[0])) && kt(i, r, r._start - r._delay), (r = n));
      return (kt(F, i, 0), i);
    },
    context: function (t, e) {
      return t ? new Hn(t, e) : j;
    },
    matchMedia: function (t) {
      return new na(t);
    },
    matchMediaRefresh: function () {
      return (
        te.forEach(function (t) {
          var e = t.conditions,
            i,
            r;
          for (r in e) e[r] && ((e[r] = !1), (i = 1));
          i && t.revert();
        }) || $i()
      );
    },
    addEventListener: function (t, e) {
      var i = Ze[t] || (Ze[t] = []);
      ~i.indexOf(e) || i.push(e);
    },
    removeEventListener: function (t, e) {
      var i = Ze[t],
        r = i && i.indexOf(e);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: No,
      wrapYoyo: Io,
      distribute: Rn,
      random: On,
      snap: Cn,
      normalize: Do,
      getUnit: K,
      clamp: Bo,
      splitColor: Dn,
      toArray: xt,
      selector: ji,
      mapRange: En,
      pipe: Ao,
      unitize: Lo,
      interpolate: jo,
      shuffle: Mn,
    },
    install: pn,
    effects: xi,
    ticker: ft,
    updateRoot: et.updateRoot,
    plugins: ut,
    globalTimeline: F,
    core: {
      PropTween: st,
      globals: gn,
      Tween: X,
      Timeline: et,
      Animation: Ne,
      getCache: Zt,
      _removeLinkedListItem: _i,
      reverting: function () {
        return G;
      },
      context: function (t) {
        return (t && j && (j.data.push(t), (t._ctx = j)), j);
      },
      suppressOverwrites: function (t) {
        return (ir = t);
      },
    },
  };
nt("to,from,fromTo,delayedCall,set,killTweensOf", function (o) {
  return (ni[o] = X[o]);
});
ft.add(et.updateRoot);
le = ni.to({}, { duration: 0 });
var sa = function (t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
    return i;
  },
  oa = function (t, e) {
    var i = t._targets,
      r,
      n,
      s;
    for (r in e) for (n = i.length; n--;) ((s = t._ptLookup[n][r]), s && (s = s.d) && (s._pt && (s = sa(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r)));
  },
  Si = function (t, e) {
    return {
      name: t,
      headless: 1,
      rawVars: 1,
      init: function (r, n, s) {
        s._onInit = function (a) {
          var u, l;
          if (
            (W(n) &&
              ((u = {}),
              nt(n, function (f) {
                return (u[f] = 1);
              }),
              (n = u)),
            e)
          ) {
            u = {};
            for (l in n) u[l] = e(n[l]);
            n = u;
          }
          oa(a, n);
        };
      },
    };
  },
  at =
    ni.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, r, n) {
          var s, a, u;
          this.tween = i;
          for (s in e) ((u = t.getAttribute(s) || ""), (a = this.add(t, "setAttribute", (u || 0) + "", e[s], r, n, 0, 0, s)), (a.op = s), (a.b = u), this._props.push(s));
        },
        render: function (t, e) {
          for (var i = e._pt; i;) (G ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (t, e) {
          for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Si("roundProps", zi),
      Si("modifiers"),
      Si("snap", Cn),
    ) || ni;
X.version = et.version = at.version = "3.13.0";
dn = 1;
nr() && ye();
E.Power0;
E.Power1;
E.Power2;
E.Power3;
E.Power4;
E.Linear;
E.Quad;
E.Cubic;
E.Quart;
E.Quint;
E.Strong;
E.Elastic;
E.Back;
E.SteppedEase;
E.Bounce;
E.Sine;
E.Expo;
E.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Br,
  jt,
  ce,
  gr,
  Kt,
  Er,
  mr,
  aa = function () {
    return typeof window < "u";
  },
  Dt = {},
  Ht = 180 / Math.PI,
  he = Math.PI / 180,
  se = Math.atan2,
  Ar = 1e8,
  yr = /([A-Z])/g,
  la = /(left|right|width|margin|padding|x)/i,
  ua = /[\s,\(]\S/,
  Mt = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
  Yi = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  },
  fa = function (t, e) {
    return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  },
  ca = function (t, e) {
    return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
  },
  ha = function (t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  Kn = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  Zn = function (t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
  },
  _a = function (t, e, i) {
    return (t.style[e] = i);
  },
  da = function (t, e, i) {
    return t.style.setProperty(e, i);
  },
  pa = function (t, e, i) {
    return (t._gsap[e] = i);
  },
  ga = function (t, e, i) {
    return (t._gsap.scaleX = t._gsap.scaleY = i);
  },
  ma = function (t, e, i, r, n) {
    var s = t._gsap;
    ((s.scaleX = s.scaleY = i), s.renderTransform(n, s));
  },
  ya = function (t, e, i, r, n) {
    var s = t._gsap;
    ((s[e] = i), s.renderTransform(n, s));
  },
  $ = "transform",
  ot = $ + "Origin",
  xa = function o(t, e) {
    var i = this,
      r = this.target,
      n = r.style,
      s = r._gsap;
    if (t in Dt && n) {
      if (((this.tfm = this.tfm || {}), t !== "transform"))
        ((t = Mt[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (a) {
                return (i.tfm[a] = Bt(r, a));
              })
            : (this.tfm[t] = s.x ? s[t] : Bt(r, t)),
          t === ot && (this.tfm.zOrigin = s.zOrigin));
      else
        return Mt.transform.split(",").forEach(function (a) {
          return o.call(i, a, e);
        });
      if (this.props.indexOf($) >= 0) return;
      (s.svg && ((this.svgo = r.getAttribute("data-svg-origin")), this.props.push(ot, e, "")), (t = $));
    }
    (n || e) && this.props.push(t, e, n[t]);
  },
  Qn = function (t) {
    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
  },
  va = function () {
    var t = this.props,
      e = this.target,
      i = e.style,
      r = e._gsap,
      n,
      s;
    for (n = 0; n < t.length; n += 3)
      t[n + 1]
        ? t[n + 1] === 2
          ? e[t[n]](t[n + 2])
          : (e[t[n]] = t[n + 2])
        : t[n + 2]
          ? (i[t[n]] = t[n + 2])
          : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(yr, "-$1").toLowerCase());
    if (this.tfm) {
      for (s in this.tfm) r[s] = this.tfm[s];
      (r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")),
        (n = mr()),
        (!n || !n.isStart) && !i[$] && (Qn(i), r.zOrigin && i[ot] && ((i[ot] += " " + r.zOrigin + "px"), (r.zOrigin = 0), r.renderTransform()), (r.uncache = 1)));
    }
  },
  Jn = function (t, e) {
    var i = { target: t, props: [], revert: va, save: xa };
    return (
      t._gsap || at.core.getCache(t),
      e &&
        t.style &&
        t.nodeType &&
        e.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  ts,
  Vi = function (t, e) {
    var i = jt.createElementNS ? jt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : jt.createElement(t);
    return i && i.style ? i : jt.createElement(t);
  },
  vt = function o(t, e, i) {
    var r = getComputedStyle(t);
    return r[e] || r.getPropertyValue(e.replace(yr, "-$1").toLowerCase()) || r.getPropertyValue(e) || (!i && o(t, xe(e) || e, 1)) || "";
  },
  Lr = "O,Moz,ms,Ms,Webkit".split(","),
  xe = function (t, e, i) {
    var r = e || Kt,
      n = r.style,
      s = 5;
    if (t in n && !i) return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Lr[s] + t in n););
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Lr[s] : "") + t;
  },
  Ui = function () {
    aa() &&
      window.document &&
      ((Br = window),
      (jt = Br.document),
      (ce = jt.documentElement),
      (Kt = Vi("div") || { style: {} }),
      Vi("div"),
      ($ = xe($)),
      (ot = $ + "Origin"),
      (Kt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
      (ts = !!xe("perspective")),
      (mr = at.core.reverting),
      (gr = 1));
  },
  Dr = function (t) {
    var e = t.ownerSVGElement,
      i = Vi("svg", (e && e.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
      r = t.cloneNode(!0),
      n;
    ((r.style.display = "block"), i.appendChild(r), ce.appendChild(i));
    try {
      n = r.getBBox();
    } catch {}
    return (i.removeChild(r), ce.removeChild(i), n);
  },
  Nr = function (t, e) {
    for (var i = e.length; i--;) if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  },
  es = function (t) {
    var e, i;
    try {
      e = t.getBBox();
    } catch {
      ((e = Dr(t)), (i = 1));
    }
    return ((e && (e.width || e.height)) || i || (e = Dr(t)), e && !e.width && !e.x && !e.y ? { x: +Nr(t, ["x", "cx", "x1"]) || 0, y: +Nr(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : e);
  },
  is = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && es(t));
  },
  re = function (t, e) {
    if (e) {
      var i = t.style,
        r;
      (e in Dt && e !== ot && (e = $),
        i.removeProperty
          ? ((r = e.substr(0, 2)), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(yr, "-$1").toLowerCase()))
          : i.removeAttribute(e));
    }
  },
  zt = function (t, e, i, r, n, s) {
    var a = new st(t._pt, e, i, 0, 1, s ? Zn : Kn);
    return ((t._pt = a), (a.b = r), (a.e = n), t._props.push(i), a);
  },
  Ir = { deg: 1, rad: 1, turn: 1 },
  Ta = { grid: 1, flex: 1 },
  Ut = function o(t, e, i, r) {
    var n = parseFloat(i) || 0,
      s = (i + "").trim().substr((n + "").length) || "px",
      a = Kt.style,
      u = la.test(e),
      l = t.tagName.toLowerCase() === "svg",
      f = (l ? "client" : "offset") + (u ? "Width" : "Height"),
      c = 100,
      _ = r === "px",
      d = r === "%",
      p,
      h,
      g,
      m;
    if (r === s || !n || Ir[r] || Ir[s]) return n;
    if ((s !== "px" && !_ && (n = o(t, e, i, "px")), (m = t.getCTM && is(t)), (d || s === "%") && (Dt[e] || ~e.indexOf("adius"))))
      return ((p = m ? t.getBBox()[u ? "width" : "height"] : t[f]), U(d ? (n / p) * c : (n / 100) * p));
    if (
      ((a[u ? "width" : "height"] = c + (_ ? s : r)),
      (h = (r !== "rem" && ~e.indexOf("adius")) || (r === "em" && t.appendChild && !l) ? t : t.parentNode),
      m && (h = (t.ownerSVGElement || {}).parentNode),
      (!h || h === jt || !h.appendChild) && (h = jt.body),
      (g = h._gsap),
      g && d && g.width && u && g.time === ft.time && !g.uncache)
    )
      return U((n / g.width) * c);
    if (d && (e === "height" || e === "width")) {
      var y = t.style[e];
      ((t.style[e] = c + r), (p = t[f]), y ? (t.style[e] = y) : re(t, e));
    } else
      ((d || s === "%") && !Ta[vt(h, "display")] && (a.position = vt(t, "position")), h === t && (a.position = "static"), h.appendChild(Kt), (p = Kt[f]), h.removeChild(Kt), (a.position = "absolute"));
    return (u && d && ((g = Zt(h)), (g.time = ft.time), (g.width = h[f])), U(_ ? (p * n) / c : p && n ? (c / p) * n : 0));
  },
  Bt = function (t, e, i, r) {
    var n;
    return (
      gr || Ui(),
      e in Mt && e !== "transform" && ((e = Mt[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
      Dt[e] && e !== "transform"
        ? ((n = je(t, r)), (n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : oi(vt(t, ot)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]), (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = (si[e] && si[e](t, e, i)) || vt(t, e) || yn(t, e) || (e === "opacity" ? 1 : 0))),
      i && !~(n + "").trim().indexOf(" ") ? Ut(t, e, n, i) + i : n
    );
  },
  wa = function (t, e, i, r) {
    if (!i || i === "none") {
      var n = xe(e, t, 1),
        s = n && vt(t, n, 1);
      s && s !== i ? ((e = n), (i = s)) : e === "borderColor" && (i = vt(t, "borderTopColor"));
    }
    var a = new st(this._pt, t.style, e, 0, 1, Wn),
      u = 0,
      l = 0,
      f,
      c,
      _,
      d,
      p,
      h,
      g,
      m,
      y,
      x,
      T,
      v;
    if (
      ((a.b = i),
      (a.e = r),
      (i += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" && (r = vt(t, r.substring(4, r.indexOf(")")))),
      r === "auto" && ((h = t.style[e]), (t.style[e] = r), (r = vt(t, e) || r), h ? (t.style[e] = h) : re(t, e)),
      (f = [i, r]),
      In(f),
      (i = f[0]),
      (r = f[1]),
      (_ = i.match(ae) || []),
      (v = r.match(ae) || []),
      v.length)
    ) {
      for (; (c = ae.exec(r));)
        ((g = c[0]),
          (y = r.substring(u, c.index)),
          p ? (p = (p + 1) % 5) : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1),
          g !== (h = _[l++] || "") &&
            ((d = parseFloat(h) || 0),
            (T = h.substr((d + "").length)),
            g.charAt(1) === "=" && (g = fe(d, g) + T),
            (m = parseFloat(g)),
            (x = g.substr((m + "").length)),
            (u = ae.lastIndex - x.length),
            x || ((x = x || ht.units[e] || T), u === r.length && ((r += x), (a.e += x))),
            T !== x && (d = Ut(t, e, h, x) || 0),
            (a._pt = { _next: a._pt, p: y || l === 1 ? y : ",", s: d, c: m - d, m: (p && p < 4) || e === "zIndex" ? Math.round : 0 })));
      a.c = u < r.length ? r.substring(u, r.length) : "";
    } else a.r = e === "display" && r === "none" ? Zn : Kn;
    return (hn.test(r) && (a.e = 0), (this._pt = a), a);
  },
  jr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  ba = function (t) {
    var e = t.split(" "),
      i = e[0],
      r = e[1] || "50%";
    return ((i === "top" || i === "bottom" || r === "left" || r === "right") && ((t = i), (i = r), (r = t)), (e[0] = jr[i] || i), (e[1] = jr[r] || r), e.join(" "));
  },
  Sa = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i = e.t,
        r = i.style,
        n = e.u,
        s = i._gsap,
        a,
        u,
        l;
      if (n === "all" || n === !0) ((r.cssText = ""), (u = 1));
      else for (n = n.split(","), l = n.length; --l > -1;) ((a = n[l]), Dt[a] && ((u = 1), (a = a === "transformOrigin" ? ot : $)), re(i, a));
      u && (re(i, $), s && (s.svg && i.removeAttribute("transform"), (r.scale = r.rotate = r.translate = "none"), je(i, 1), (s.uncache = 1), Qn(r)));
    }
  },
  si = {
    clearProps: function (t, e, i, r, n) {
      if (n.data !== "isFromStart") {
        var s = (t._pt = new st(t._pt, e, i, 0, 0, Sa));
        return ((s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1);
      }
    },
  },
  Ie = [1, 0, 0, 1, 0, 0],
  rs = {},
  ns = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  zr = function (t) {
    var e = vt(t, $);
    return ns(e) ? Ie : e.substr(7).match(cn).map(U);
  },
  xr = function (t, e) {
    var i = t._gsap || Zt(t),
      r = t.style,
      n = zr(t),
      s,
      a,
      u,
      l;
    return i.svg && t.getAttribute("transform")
      ? ((u = t.transform.baseVal.consolidate().matrix), (n = [u.a, u.b, u.c, u.d, u.e, u.f]), n.join(",") === "1,0,0,1,0,0" ? Ie : n)
      : (n === Ie &&
          !t.offsetParent &&
          t !== ce &&
          !i.svg &&
          ((u = r.display),
          (r.display = "block"),
          (s = t.parentNode),
          (!s || (!t.offsetParent && !t.getBoundingClientRect().width)) && ((l = 1), (a = t.nextElementSibling), ce.appendChild(t)),
          (n = zr(t)),
          u ? (r.display = u) : re(t, "display"),
          l && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : ce.removeChild(t))),
        e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  Xi = function (t, e, i, r, n, s) {
    var a = t._gsap,
      u = n || xr(t, !0),
      l = a.xOrigin || 0,
      f = a.yOrigin || 0,
      c = a.xOffset || 0,
      _ = a.yOffset || 0,
      d = u[0],
      p = u[1],
      h = u[2],
      g = u[3],
      m = u[4],
      y = u[5],
      x = e.split(" "),
      T = parseFloat(x[0]) || 0,
      v = parseFloat(x[1]) || 0,
      b,
      S,
      P,
      w;
    (i
      ? u !== Ie && (S = d * g - p * h) && ((P = T * (g / S) + v * (-h / S) + (h * y - g * m) / S), (w = T * (-p / S) + v * (d / S) - (d * y - p * m) / S), (T = P), (v = w))
      : ((b = es(t)), (T = b.x + (~x[0].indexOf("%") ? (T / 100) * b.width : T)), (v = b.y + (~(x[1] || x[0]).indexOf("%") ? (v / 100) * b.height : v))),
      r || (r !== !1 && a.smooth) ? ((m = T - l), (y = v - f), (a.xOffset = c + (m * d + y * h) - m), (a.yOffset = _ + (m * p + y * g) - y)) : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = T),
      (a.yOrigin = v),
      (a.smooth = !!r),
      (a.origin = e),
      (a.originIsAbsolute = !!i),
      (t.style[ot] = "0px 0px"),
      s && (zt(s, a, "xOrigin", l, T), zt(s, a, "yOrigin", f, v), zt(s, a, "xOffset", c, a.xOffset), zt(s, a, "yOffset", _, a.yOffset)),
      t.setAttribute("data-svg-origin", T + " " + v));
  },
  je = function (t, e) {
    var i = t._gsap || new $n(t);
    if ("x" in i && !e && !i.uncache) return i;
    var r = t.style,
      n = i.scaleX < 0,
      s = "px",
      a = "deg",
      u = getComputedStyle(t),
      l = vt(t, ot) || "0",
      f,
      c,
      _,
      d,
      p,
      h,
      g,
      m,
      y,
      x,
      T,
      v,
      b,
      S,
      P,
      w,
      M,
      R,
      O,
      C,
      I,
      L,
      A,
      z,
      H,
      qt,
      Nt,
      J,
      bt,
      pt,
      it,
      gt;
    return (
      (f = c = _ = h = g = m = y = x = T = 0),
      (d = p = 1),
      (i.svg = !!(t.getCTM && is(t))),
      u.translate &&
        ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") &&
          (r[$] =
            (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") +
            (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
            (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") +
            (u[$] !== "none" ? u[$] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (S = xr(t, i.svg)),
      i.svg &&
        (i.uncache ? ((H = t.getBBox()), (l = i.xOrigin - H.x + "px " + (i.yOrigin - H.y) + "px"), (z = "")) : (z = !e && t.getAttribute("data-svg-origin")),
        Xi(t, z || l, !!z || i.originIsAbsolute, i.smooth !== !1, S)),
      (v = i.xOrigin || 0),
      (b = i.yOrigin || 0),
      S !== Ie &&
        ((R = S[0]),
        (O = S[1]),
        (C = S[2]),
        (I = S[3]),
        (f = L = S[4]),
        (c = A = S[5]),
        S.length === 6
          ? ((d = Math.sqrt(R * R + O * O)),
            (p = Math.sqrt(I * I + C * C)),
            (h = R || O ? se(O, R) * Ht : 0),
            (y = C || I ? se(C, I) * Ht + h : 0),
            y && (p *= Math.abs(Math.cos(y * he))),
            i.svg && ((f -= v - (v * R + b * C)), (c -= b - (v * O + b * I))))
          : ((gt = S[6]),
            (pt = S[7]),
            (Nt = S[8]),
            (J = S[9]),
            (bt = S[10]),
            (it = S[11]),
            (f = S[12]),
            (c = S[13]),
            (_ = S[14]),
            (P = se(gt, bt)),
            (g = P * Ht),
            P &&
              ((w = Math.cos(-P)),
              (M = Math.sin(-P)),
              (z = L * w + Nt * M),
              (H = A * w + J * M),
              (qt = gt * w + bt * M),
              (Nt = L * -M + Nt * w),
              (J = A * -M + J * w),
              (bt = gt * -M + bt * w),
              (it = pt * -M + it * w),
              (L = z),
              (A = H),
              (gt = qt)),
            (P = se(-C, bt)),
            (m = P * Ht),
            P && ((w = Math.cos(-P)), (M = Math.sin(-P)), (z = R * w - Nt * M), (H = O * w - J * M), (qt = C * w - bt * M), (it = I * M + it * w), (R = z), (O = H), (C = qt)),
            (P = se(O, R)),
            (h = P * Ht),
            P && ((w = Math.cos(P)), (M = Math.sin(P)), (z = R * w + O * M), (H = L * w + A * M), (O = O * w - R * M), (A = A * w - L * M), (R = z), (L = H)),
            g && Math.abs(g) + Math.abs(h) > 359.9 && ((g = h = 0), (m = 180 - m)),
            (d = U(Math.sqrt(R * R + O * O + C * C))),
            (p = U(Math.sqrt(A * A + gt * gt))),
            (P = se(L, A)),
            (y = Math.abs(P) > 2e-4 ? P * Ht : 0),
            (T = it ? 1 / (it < 0 ? -it : it) : 0)),
        i.svg && ((z = t.getAttribute("transform")), (i.forceCSS = t.setAttribute("transform", "") || !ns(vt(t, $))), z && t.setAttribute("transform", z))),
      Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? ((d *= -1), (y += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180)) : ((p *= -1), (y += y <= 0 ? 180 : -180))),
      (e = e || i.uncache),
      (i.x = f - ((i.xPercent = f && ((!e && i.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? (t.offsetWidth * i.xPercent) / 100 : 0) + s),
      (i.y = c - ((i.yPercent = c && ((!e && i.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? (t.offsetHeight * i.yPercent) / 100 : 0) + s),
      (i.z = _ + s),
      (i.scaleX = U(d)),
      (i.scaleY = U(p)),
      (i.rotation = U(h) + a),
      (i.rotationX = U(g) + a),
      (i.rotationY = U(m) + a),
      (i.skewX = y + a),
      (i.skewY = x + a),
      (i.transformPerspective = T + s),
      (i.zOrigin = parseFloat(l.split(" ")[2]) || (!e && i.zOrigin) || 0) && (r[ot] = oi(l)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = ht.force3D),
      (i.renderTransform = i.svg ? ka : ts ? ss : Pa),
      (i.uncache = 0),
      i
    );
  },
  oi = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  Pi = function (t, e, i) {
    var r = K(e);
    return U(parseFloat(e) + parseFloat(Ut(t, "x", i + "px", r))) + r;
  },
  Pa = function (t, e) {
    ((e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), ss(t, e));
  },
  Wt = "0deg",
  ve = "0px",
  Gt = ") ",
  ss = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      a = i.y,
      u = i.z,
      l = i.rotation,
      f = i.rotationY,
      c = i.rotationX,
      _ = i.skewX,
      d = i.skewY,
      p = i.scaleX,
      h = i.scaleY,
      g = i.transformPerspective,
      m = i.force3D,
      y = i.target,
      x = i.zOrigin,
      T = "",
      v = (m === "auto" && t && t !== 1) || m === !0;
    if (x && (c !== Wt || f !== Wt)) {
      var b = parseFloat(f) * he,
        S = Math.sin(b),
        P = Math.cos(b),
        w;
      ((b = parseFloat(c) * he), (w = Math.cos(b)), (s = Pi(y, s, S * w * -x)), (a = Pi(y, a, -Math.sin(b) * -x)), (u = Pi(y, u, P * w * -x + x)));
    }
    (g !== ve && (T += "perspective(" + g + Gt),
      (r || n) && (T += "translate(" + r + "%, " + n + "%) "),
      (v || s !== ve || a !== ve || u !== ve) && (T += u !== ve || v ? "translate3d(" + s + ", " + a + ", " + u + ") " : "translate(" + s + ", " + a + Gt),
      l !== Wt && (T += "rotate(" + l + Gt),
      f !== Wt && (T += "rotateY(" + f + Gt),
      c !== Wt && (T += "rotateX(" + c + Gt),
      (_ !== Wt || d !== Wt) && (T += "skew(" + _ + ", " + d + Gt),
      (p !== 1 || h !== 1) && (T += "scale(" + p + ", " + h + Gt),
      (y.style[$] = T || "translate(0, 0)"));
  },
  ka = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      a = i.y,
      u = i.rotation,
      l = i.skewX,
      f = i.skewY,
      c = i.scaleX,
      _ = i.scaleY,
      d = i.target,
      p = i.xOrigin,
      h = i.yOrigin,
      g = i.xOffset,
      m = i.yOffset,
      y = i.forceCSS,
      x = parseFloat(s),
      T = parseFloat(a),
      v,
      b,
      S,
      P,
      w;
    ((u = parseFloat(u)),
      (l = parseFloat(l)),
      (f = parseFloat(f)),
      f && ((f = parseFloat(f)), (l += f), (u += f)),
      u || l
        ? ((u *= he),
          (l *= he),
          (v = Math.cos(u) * c),
          (b = Math.sin(u) * c),
          (S = Math.sin(u - l) * -_),
          (P = Math.cos(u - l) * _),
          l && ((f *= he), (w = Math.tan(l - f)), (w = Math.sqrt(1 + w * w)), (S *= w), (P *= w), f && ((w = Math.tan(f)), (w = Math.sqrt(1 + w * w)), (v *= w), (b *= w))),
          (v = U(v)),
          (b = U(b)),
          (S = U(S)),
          (P = U(P)))
        : ((v = c), (P = _), (b = S = 0)),
      ((x && !~(s + "").indexOf("px")) || (T && !~(a + "").indexOf("px"))) && ((x = Ut(d, "x", s, "px")), (T = Ut(d, "y", a, "px"))),
      (p || h || g || m) && ((x = U(x + p - (p * v + h * S) + g)), (T = U(T + h - (p * b + h * P) + m))),
      (r || n) && ((w = d.getBBox()), (x = U(x + (r / 100) * w.width)), (T = U(T + (n / 100) * w.height))),
      (w = "matrix(" + v + "," + b + "," + S + "," + P + "," + x + "," + T + ")"),
      d.setAttribute("transform", w),
      y && (d.style[$] = w));
  },
  Ma = function (t, e, i, r, n) {
    var s = 360,
      a = W(n),
      u = parseFloat(n) * (a && ~n.indexOf("rad") ? Ht : 1),
      l = u - r,
      f = r + l + "deg",
      c,
      _;
    return (
      a &&
        ((c = n.split("_")[1]),
        c === "short" && ((l %= s), l !== l % (s / 2) && (l += l < 0 ? s : -360)),
        c === "cw" && l < 0 ? (l = ((l + s * Ar) % s) - ~~(l / s) * s) : c === "ccw" && l > 0 && (l = ((l - s * Ar) % s) - ~~(l / s) * s)),
      (t._pt = _ = new st(t._pt, e, i, r, l, fa)),
      (_.e = f),
      (_.u = "deg"),
      t._props.push(i),
      _
    );
  },
  Fr = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Ra = function (t, e, i) {
    var r = Fr({}, i._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = i.style,
      a,
      u,
      l,
      f,
      c,
      _,
      d,
      p;
    r.svg
      ? ((l = i.getAttribute("transform")), i.setAttribute("transform", ""), (s[$] = e), (a = je(i, 1)), re(i, $), i.setAttribute("transform", l))
      : ((l = getComputedStyle(i)[$]), (s[$] = e), (a = je(i, 1)), (s[$] = l));
    for (u in Dt)
      ((l = r[u]),
        (f = a[u]),
        l !== f &&
          n.indexOf(u) < 0 &&
          ((d = K(l)), (p = K(f)), (c = d !== p ? Ut(i, u, l, p) : parseFloat(l)), (_ = parseFloat(f)), (t._pt = new st(t._pt, a, u, c, _ - c, Yi)), (t._pt.u = p || 0), t._props.push(u)));
    Fr(a, r);
  };
nt("padding,margin,Width,Radius", function (o, t) {
  var e = "Top",
    i = "Right",
    r = "Bottom",
    n = "Left",
    s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function (a) {
      return t < 2 ? o + a : "border" + a + o;
    });
  si[t > 1 ? "border" + o : o] = function (a, u, l, f, c) {
    var _, d;
    if (arguments.length < 4)
      return (
        (_ = s.map(function (p) {
          return Bt(a, p, l);
        })),
        (d = _.join(" ")),
        d.split(_[0]).length === 5 ? _[0] : d
      );
    ((_ = (f + "").split(" ")),
      (d = {}),
      s.forEach(function (p, h) {
        return (d[p] = _[h] = _[h] || _[((h - 1) / 2) | 0]);
      }),
      a.init(u, d, c));
  };
});
var os = {
  name: "css",
  register: Ui,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, e, i, r, n) {
    var s = this._props,
      a = t.style,
      u = i.vars.startAt,
      l,
      f,
      c,
      _,
      d,
      p,
      h,
      g,
      m,
      y,
      x,
      T,
      v,
      b,
      S,
      P;
    (gr || Ui(), (this.styles = this.styles || Jn(t)), (P = this.styles.props), (this.tween = i));
    for (h in e)
      if (h !== "autoRound" && ((f = e[h]), !(ut[h] && Yn(h, e, i, r, t, n)))) {
        if (((d = typeof f), (p = si[h]), d === "function" && ((f = f.call(i, r, t, n)), (d = typeof f)), d === "string" && ~f.indexOf("random(") && (f = Le(f)), p)) p(this, t, h, f, i) && (S = 1);
        else if (h.substr(0, 2) === "--")
          ((l = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
            (f += ""),
            ($t.lastIndex = 0),
            $t.test(l) || ((g = K(l)), (m = K(f))),
            m ? g !== m && (l = Ut(t, h, l, m) + m) : g && (f += g),
            this.add(a, "setProperty", l, f, r, n, 0, 0, h),
            s.push(h),
            P.push(h, 0, a[h]));
        else if (d !== "undefined") {
          if (
            (u && h in u
              ? ((l = typeof u[h] == "function" ? u[h].call(i, r, t, n) : u[h]),
                W(l) && ~l.indexOf("random(") && (l = Le(l)),
                K(l + "") || l === "auto" || (l += ht.units[h] || K(Bt(t, h)) || ""),
                (l + "").charAt(1) === "=" && (l = Bt(t, h)))
              : (l = Bt(t, h)),
            (_ = parseFloat(l)),
            (y = d === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
            y && (f = f.substr(2)),
            (c = parseFloat(f)),
            h in Mt &&
              (h === "autoAlpha" &&
                (_ === 1 && Bt(t, "visibility") === "hidden" && c && (_ = 0), P.push("visibility", 0, a.visibility), zt(this, a, "visibility", _ ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)),
              h !== "scale" && h !== "transform" && ((h = Mt[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
            (x = h in Dt),
            x)
          ) {
            if (
              (this.styles.save(h),
              d === "string" && f.substring(0, 6) === "var(--" && ((f = vt(t, f.substring(4, f.indexOf(")")))), (c = parseFloat(f))),
              T ||
                ((v = t._gsap),
                (v.renderTransform && !e.parseTransform) || je(t, e.parseTransform),
                (b = e.smoothOrigin !== !1 && v.smooth),
                (T = this._pt = new st(this._pt, a, $, 0, 1, v.renderTransform, v, 0, -1)),
                (T.dep = 1)),
              h === "scale")
            )
              ((this._pt = new st(this._pt, v, "scaleY", v.scaleY, (y ? fe(v.scaleY, y + c) : c) - v.scaleY || 0, Yi)), (this._pt.u = 0), s.push("scaleY", h), (h += "X"));
            else if (h === "transformOrigin") {
              (P.push(ot, 0, a[ot]),
                (f = ba(f)),
                v.svg ? Xi(t, f, 0, b, 0, this) : ((m = parseFloat(f.split(" ")[2]) || 0), m !== v.zOrigin && zt(this, v, "zOrigin", v.zOrigin, m), zt(this, a, h, oi(l), oi(f))));
              continue;
            } else if (h === "svgOrigin") {
              Xi(t, f, 1, b, 0, this);
              continue;
            } else if (h in rs) {
              Ma(this, v, h, _, y ? fe(_, y + f) : f);
              continue;
            } else if (h === "smoothOrigin") {
              zt(this, v, "smooth", v.smooth, f);
              continue;
            } else if (h === "force3D") {
              v[h] = f;
              continue;
            } else if (h === "transform") {
              Ra(this, f, t);
              continue;
            }
          } else h in a || (h = xe(h) || h);
          if (x || ((c || c === 0) && (_ || _ === 0) && !ua.test(f) && h in a))
            ((g = (l + "").substr((_ + "").length)),
              c || (c = 0),
              (m = K(f) || (h in ht.units ? ht.units[h] : g)),
              g !== m && (_ = Ut(t, h, l, m)),
              (this._pt = new st(this._pt, x ? v : a, h, _, (y ? fe(_, y + c) : c) - _, !x && (m === "px" || h === "zIndex") && e.autoRound !== !1 ? ha : Yi)),
              (this._pt.u = m || 0),
              g !== m && m !== "%" && ((this._pt.b = l), (this._pt.r = ca)));
          else if (h in a) wa.call(this, t, h, l, y ? y + f : f);
          else if (h in t) this.add(t, h, l || t[h], y ? y + f : f, r, n);
          else if (h !== "parseTransform") {
            or(h, f);
            continue;
          }
          (x || (h in a ? P.push(h, 0, a[h]) : typeof t[h] == "function" ? P.push(h, 2, t[h]()) : P.push(h, 1, l || t[h])), s.push(h));
        }
      }
    S && Gn(this);
  },
  render: function (t, e) {
    if (e.tween._time || !mr()) for (var i = e._pt; i;) (i.r(t, i.d), (i = i._next));
    else e.styles.revert();
  },
  get: Bt,
  aliases: Mt,
  getSetter: function (t, e, i) {
    var r = Mt[e];
    return (
      r && r.indexOf(",") < 0 && (e = r),
      e in Dt && e !== ot && (t._gsap.x || Bt(t, "x"))
        ? i && Er === i
          ? e === "scale"
            ? ga
            : pa
          : (Er = i || {}) && (e === "scale" ? ma : ya)
        : t.style && !rr(t.style[e])
          ? _a
          : ~e.indexOf("-")
            ? da
            : dr(t, e)
    );
  },
  core: { _removeProperty: re, _getMatrix: xr },
};
at.utils.checkPrefix = xe;
at.core.getStyleSaver = Jn;
(function (o, t, e, i) {
  var r = nt(o + "," + t + "," + e, function (n) {
    Dt[n] = 1;
  });
  (nt(t, function (n) {
    ((ht.units[n] = "deg"), (rs[n] = 1));
  }),
    (Mt[r[13]] = o + "," + t),
    nt(i, function (n) {
      var s = n.split(":");
      Mt[s[1]] = r[s[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (o) {
  ht.units[o] = "px";
});
at.registerPlugin(os);
var vr = at.registerPlugin(os) || at;
vr.core.Tween;
/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Ca = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  Oa = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  Ba = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
  Ea = /(^[#\.][a-z]|[a-y][a-z])/i,
  Aa = Math.PI / 180,
  La = 180 / Math.PI,
  Ue = Math.sin,
  Xe = Math.cos,
  Tt = Math.abs,
  Et = Math.sqrt,
  Da = Math.atan2,
  qi = 1e8,
  $r = function (t) {
    return typeof t == "string";
  },
  as = function (t) {
    return typeof t == "number";
  },
  Na = function (t) {
    return typeof t > "u";
  },
  Ia = {},
  ja = {},
  ai = 1e5,
  ls = function (t) {
    return Math.round(((t + qi) % 1) * ai) / ai || (t < 0 ? 0 : 1);
  },
  D = function (t) {
    return Math.round(t * ai) / ai || 0;
  },
  Yr = function (t) {
    return Math.round(t * 1e10) / 1e10 || 0;
  },
  Vr = function (t, e, i, r) {
    var n = t[e],
      s = r === 1 ? 6 : Wi(n, i, r);
    if ((s || !r) && s + i + 2 < n.length) return (t.splice(e, 0, n.slice(0, i + s + 2)), n.splice(0, i + s), 1);
  },
  us = function (t, e, i) {
    var r = t.length,
      n = ~~(i * r);
    if (t[n] > e) {
      for (; --n && t[n] > e;);
      n < 0 && (n = 0);
    } else for (; t[++n] < e && n < r;);
    return n < r ? n : r - 1;
  },
  za = function (t, e) {
    var i = t.length;
    for (t.reverse(); i--;) t[i].reversed || Ya(t[i]);
  },
  Ur = function (t, e) {
    return (
      (e.totalLength = t.totalLength),
      t.samples ? ((e.samples = t.samples.slice(0)), (e.lookup = t.lookup.slice(0)), (e.minLength = t.minLength), (e.resolution = t.resolution)) : t.totalPoints && (e.totalPoints = t.totalPoints),
      e
    );
  },
  Fa = function (t, e) {
    var i = t.length,
      r = t[i - 1] || [],
      n = r.length;
    (i && e[0] === r[n - 2] && e[1] === r[n - 1] && ((e = r.concat(e.slice(2))), i--), (t[i] = e));
  };
function Qe(o) {
  o = ($r(o) && Ea.test(o) && document.querySelector(o)) || o;
  var t = o.getAttribute ? o : 0,
    e;
  return t && (o = o.getAttribute("d"))
    ? (t._gsPath || (t._gsPath = {}), (e = t._gsPath[o]), e && !e._dirty ? e : (t._gsPath[o] = li(o)))
    : o
      ? $r(o)
        ? li(o)
        : as(o[0])
          ? [o]
          : o
      : console.warn("Expecting a <path> element or an SVG path data string");
}
function $a(o) {
  for (var t = [], e = 0; e < o.length; e++) t[e] = Ur(o[e], o[e].slice(0));
  return Ur(o, t);
}
function Ya(o) {
  var t = 0,
    e;
  for (o.reverse(); t < o.length; t += 2) ((e = o[t]), (o[t] = o[t + 1]), (o[t + 1] = e));
  o.reversed = !o.reversed;
}
var Va = function (t, e) {
    var i = document.createElementNS("http://www.w3.org/2000/svg", "path"),
      r = [].slice.call(t.attributes),
      n = r.length,
      s;
    for (e = "," + e + ","; --n > -1;) ((s = r[n].nodeName.toLowerCase()), e.indexOf("," + s + ",") < 0 && i.setAttributeNS(null, s, r[n].nodeValue));
    return i;
  },
  Ua = { rect: "rx,ry,x,y,width,height", circle: "r,cx,cy", ellipse: "rx,ry,cx,cy", line: "x1,x2,y1,y2" },
  Xa = function (t, e) {
    for (var i = e ? e.split(",") : [], r = {}, n = i.length; --n > -1;) r[i[n]] = +t.getAttribute(i[n]) || 0;
    return r;
  };
function qa(o, t) {
  var e = o.tagName.toLowerCase(),
    i = 0.552284749831,
    r,
    n,
    s,
    a,
    u,
    l,
    f,
    c,
    _,
    d,
    p,
    h,
    g,
    m,
    y,
    x,
    T,
    v,
    b,
    S,
    P,
    w;
  return e === "path" || !o.getBBox
    ? o
    : ((l = Va(o, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
      (w = Xa(o, Ua[e])),
      e === "rect"
        ? ((a = w.rx),
          (u = w.ry || a),
          (n = w.x),
          (s = w.y),
          (d = w.width - a * 2),
          (p = w.height - u * 2),
          a || u
            ? ((h = n + a * (1 - i)),
              (g = n + a),
              (m = g + d),
              (y = m + a * i),
              (x = m + a),
              (T = s + u * (1 - i)),
              (v = s + u),
              (b = v + p),
              (S = b + u * i),
              (P = b + u),
              (r =
                "M" +
                x +
                "," +
                v +
                " V" +
                b +
                " C" +
                [
                  x,
                  S,
                  y,
                  P,
                  m,
                  P,
                  m - (m - g) / 3,
                  P,
                  g + (m - g) / 3,
                  P,
                  g,
                  P,
                  h,
                  P,
                  n,
                  S,
                  n,
                  b,
                  n,
                  b - (b - v) / 3,
                  n,
                  v + (b - v) / 3,
                  n,
                  v,
                  n,
                  T,
                  h,
                  s,
                  g,
                  s,
                  g + (m - g) / 3,
                  s,
                  m - (m - g) / 3,
                  s,
                  m,
                  s,
                  y,
                  s,
                  x,
                  T,
                  x,
                  v,
                ].join(",") +
                "z"))
            : (r = "M" + (n + d) + "," + s + " v" + p + " h" + -d + " v" + -p + " h" + d + "z"))
        : e === "circle" || e === "ellipse"
          ? (e === "circle" ? ((a = u = w.r), (c = a * i)) : ((a = w.rx), (u = w.ry), (c = u * i)),
            (n = w.cx),
            (s = w.cy),
            (f = a * i),
            (r =
              "M" +
              (n + a) +
              "," +
              s +
              " C" +
              [n + a, s + c, n + f, s + u, n, s + u, n - f, s + u, n - a, s + c, n - a, s, n - a, s - c, n - f, s - u, n, s - u, n + f, s - u, n + a, s - c, n + a, s].join(",") +
              "z"))
          : e === "line"
            ? (r = "M" + w.x1 + "," + w.y1 + " L" + w.x2 + "," + w.y2)
            : (e === "polyline" || e === "polygon") &&
              ((_ = (o.getAttribute("points") + "").match(Oa) || []),
              (n = _.shift()),
              (s = _.shift()),
              (r = "M" + n + "," + s + " L" + _.join(",")),
              e === "polygon" && (r += "," + n + "," + s + "z")),
      l.setAttribute("d", hs((l._gsRawPath = li(r)))),
      t && o.parentNode && (o.parentNode.insertBefore(l, o), o.parentNode.removeChild(o)),
      l);
}
function fs(o, t, e) {
  var i = o[t],
    r = o[t + 2],
    n = o[t + 4],
    s;
  return (
    (i += (r - i) * e),
    (r += (n - r) * e),
    (i += (r - i) * e),
    (s = r + (n + (o[t + 6] - n) * e - r) * e - i),
    (i = o[t + 1]),
    (r = o[t + 3]),
    (n = o[t + 5]),
    (i += (r - i) * e),
    (r += (n - r) * e),
    (i += (r - i) * e),
    D(Da(r + (n + (o[t + 7] - n) * e - r) * e - i, s) * La)
  );
}
function cs(o, t, e) {
  ((e = Na(e) ? 1 : Yr(e) || 0), (t = Yr(t) || 0));
  var i = Math.max(0, ~~(Tt(e - t) - 1e-8)),
    r = $a(o);
  if ((t > e && ((t = 1 - t), (e = 1 - e), za(r), (r.totalLength = 0)), t < 0 || e < 0)) {
    var n = Math.abs(~~Math.min(t, e)) + 1;
    ((t += n), (e += n));
  }
  r.totalLength || ee(r);
  var s = e > 1,
    a = Xr(r, t, Ia, !0),
    u = Xr(r, e, ja),
    l = u.segment,
    f = a.segment,
    c = u.segIndex,
    _ = a.segIndex,
    d = u.i,
    p = a.i,
    h = _ === c,
    g = d === p && h,
    m,
    y,
    x,
    T,
    v,
    b,
    S,
    P;
  if (s || i) {
    for (
      m = c < _ || (h && d < p) || (g && u.t < a.t),
        Vr(r, _, p, a.t) && (_++, m || (c++, g ? ((u.t = (u.t - a.t) / (1 - a.t)), (d = 0)) : h && (d -= p))),
        Math.abs(1 - (e - t)) < 1e-5 ? (c = _ - 1) : !u.t && c ? c-- : Vr(r, c, d, u.t) && m && _++,
        a.t === 1 && (_ = (_ + 1) % r.length),
        v = [],
        b = r.length,
        S = 1 + b * i,
        P = _,
        S += (b - _ + c) % b,
        T = 0;
      T < S;
      T++
    )
      Fa(v, r[P++ % b]);
    r = v;
  } else if (((x = u.t === 1 ? 6 : Wi(l, d, u.t)), t !== e))
    for (y = Wi(f, p, g ? a.t / u.t : a.t), h && (x += y), l.splice(d + x + 2), (y || p) && f.splice(0, p + y), T = r.length; T--;) (T < _ || T > c) && r.splice(T, 1);
  else ((l.angle = fs(l, d + x, 0)), (d += x), (a = l[d]), (u = l[d + 1]), (l.length = l.totalLength = 0), (l.totalPoints = r.totalPoints = 8), l.push(a, u, a, u, a, u, a, u));
  return ((r.totalLength = 0), r);
}
function Wa(o, t, e) {
  ((t = t || 0), o.samples || ((o.samples = []), (o.lookup = [])));
  var i = ~~o.resolution || 12,
    r = 1 / i,
    n = o.length,
    s = o[t],
    a = o[t + 1],
    u = t ? (t / 6) * i : 0,
    l = o.samples,
    f = o.lookup,
    c = (t ? o.minLength : qi) || qi,
    _ = l[u + e * i - 1],
    d = t ? l[u - 1] : 0,
    p,
    h,
    g,
    m,
    y,
    x,
    T,
    v,
    b,
    S,
    P,
    w,
    M,
    R,
    O,
    C,
    I;
  for (l.length = f.length = 0, h = t + 2; h < n; h += 6) {
    if (((g = o[h + 4] - s), (m = o[h + 2] - s), (y = o[h] - s), (v = o[h + 5] - a), (b = o[h + 3] - a), (S = o[h + 1] - a), (x = T = P = w = 0), Tt(g) < 0.01 && Tt(v) < 0.01 && Tt(y) + Tt(S) < 0.01))
      o.length > 8 && (o.splice(h, 6), (h -= 6), (n -= 6));
    else
      for (p = 1; p <= i; p++)
        ((R = r * p),
          (M = 1 - R),
          (x = T - (T = (R * R * g + 3 * M * (R * m + M * y)) * R)),
          (P = w - (w = (R * R * v + 3 * M * (R * b + M * S)) * R)),
          (C = Et(P * P + x * x)),
          C < c && (c = C),
          (d += C),
          (l[u++] = d));
    ((s += g), (a += v));
  }
  if (_) for (_ -= d; u < l.length; u++) l[u] += _;
  if (l.length && c) {
    if (((o.totalLength = I = l[l.length - 1] || 0), (o.minLength = c), I / c < 9999)) for (C = O = 0, p = 0; p < I; p += c) f[C++] = l[O] < p ? ++O : O;
  } else o.totalLength = l[0] = 0;
  return t ? d - l[t / 2 - 1] : d;
}
function ee(o, t) {
  var e, i, r;
  for (r = e = i = 0; r < o.length; r++) ((o[r].resolution = ~~t || 12), (i += o[r].length), (e += Wa(o[r])));
  return ((o.totalPoints = i), (o.totalLength = e), o);
}
function Wi(o, t, e) {
  if (e <= 0 || e >= 1) return 0;
  var i = o[t],
    r = o[t + 1],
    n = o[t + 2],
    s = o[t + 3],
    a = o[t + 4],
    u = o[t + 5],
    l = o[t + 6],
    f = o[t + 7],
    c = i + (n - i) * e,
    _ = n + (a - n) * e,
    d = r + (s - r) * e,
    p = s + (u - s) * e,
    h = c + (_ - c) * e,
    g = d + (p - d) * e,
    m = a + (l - a) * e,
    y = u + (f - u) * e;
  return (
    (_ += (m - _) * e),
    (p += (y - p) * e),
    o.splice(t + 2, 4, D(c), D(d), D(h), D(g), D(h + (_ - h) * e), D(g + (p - g) * e), D(_), D(p), D(m), D(y)),
    o.samples && o.samples.splice(((t / 6) * o.resolution) | 0, 0, 0, 0, 0, 0, 0, 0),
    6
  );
}
function Xr(o, t, e, i) {
  ((e = e || {}), o.totalLength || ee(o), (t < 0 || t > 1) && (t = ls(t)));
  var r = 0,
    n = o[0],
    s,
    a,
    u,
    l,
    f,
    c,
    _;
  if (!t) ((_ = c = r = 0), (n = o[0]));
  else if (t === 1) ((_ = 1), (r = o.length - 1), (n = o[r]), (c = n.length - 8));
  else {
    if (o.length > 1) {
      for (u = o.totalLength * t, f = c = 0; (f += o[c++].totalLength) < u;) r = c;
      ((n = o[r]), (l = f - n.totalLength), (t = (u - l) / (f - l) || 0));
    }
    ((s = n.samples),
      (a = n.resolution),
      (u = n.totalLength * t),
      (c = n.lookup.length ? n.lookup[~~(u / n.minLength)] || 0 : us(s, u, t)),
      (l = c ? s[c - 1] : 0),
      (f = s[c]),
      f < u && ((l = f), (f = s[++c])),
      (_ = (1 / a) * ((u - l) / (f - l) + (c % a))),
      (c = ~~(c / a) * 6),
      i && _ === 1 && (c + 6 < n.length ? ((c += 6), (_ = 0)) : r + 1 < o.length && ((c = _ = 0), (n = o[++r]))));
  }
  return ((e.t = _), (e.i = c), (e.path = o), (e.segment = n), (e.segIndex = r), e);
}
function qr(o, t, e, i) {
  var r = o[0],
    n = i || {},
    s,
    a,
    u,
    l,
    f,
    c,
    _,
    d,
    p;
  if (((t < 0 || t > 1) && (t = ls(t)), r.lookup || ee(o), o.length > 1)) {
    for (u = o.totalLength * t, f = c = 0; (f += o[c++].totalLength) < u;) r = o[c];
    ((l = f - r.totalLength), (t = (u - l) / (f - l) || 0));
  }
  return (
    (s = r.samples),
    (a = r.resolution),
    (u = r.totalLength * t),
    (c = r.lookup.length ? r.lookup[t < 1 ? ~~(u / r.minLength) : r.lookup.length - 1] || 0 : us(s, u, t)),
    (l = c ? s[c - 1] : 0),
    (f = s[c]),
    f < u && ((l = f), (f = s[++c])),
    (_ = (1 / a) * ((u - l) / (f - l) + (c % a)) || 0),
    (p = 1 - _),
    (c = ~~(c / a) * 6),
    (d = r[c]),
    (n.x = D((_ * _ * (r[c + 6] - d) + 3 * p * (_ * (r[c + 4] - d) + p * (r[c + 2] - d))) * _ + d)),
    (n.y = D((_ * _ * (r[c + 7] - (d = r[c + 1])) + 3 * p * (_ * (r[c + 5] - d) + p * (r[c + 3] - d))) * _ + d)),
    e && (n.angle = r.totalLength ? fs(r, c, _ >= 1 ? 1 - 1e-9 : _ || 1e-9) : r.angle || 0),
    n
  );
}
function Pe(o, t, e, i, r, n, s) {
  for (var a = o.length, u, l, f, c, _; --a > -1;) for (u = o[a], l = u.length, f = 0; f < l; f += 2) ((c = u[f]), (_ = u[f + 1]), (u[f] = c * t + _ * i + n), (u[f + 1] = c * e + _ * r + s));
  return ((o._dirty = 1), o);
}
function Ga(o, t, e, i, r, n, s, a, u) {
  if (!(o === a && t === u)) {
    ((e = Tt(e)), (i = Tt(i)));
    var l = (r % 360) * Aa,
      f = Xe(l),
      c = Ue(l),
      _ = Math.PI,
      d = _ * 2,
      p = (o - a) / 2,
      h = (t - u) / 2,
      g = f * p + c * h,
      m = -c * p + f * h,
      y = g * g,
      x = m * m,
      T = y / (e * e) + x / (i * i);
    T > 1 && ((e = Et(T) * e), (i = Et(T) * i));
    var v = e * e,
      b = i * i,
      S = (v * b - v * x - b * y) / (v * x + b * y);
    S < 0 && (S = 0);
    var P = (n === s ? -1 : 1) * Et(S),
      w = P * ((e * m) / i),
      M = P * -((i * g) / e),
      R = (o + a) / 2,
      O = (t + u) / 2,
      C = R + (f * w - c * M),
      I = O + (c * w + f * M),
      L = (g - w) / e,
      A = (m - M) / i,
      z = (-g - w) / e,
      H = (-m - M) / i,
      qt = L * L + A * A,
      Nt = (A < 0 ? -1 : 1) * Math.acos(L / Et(qt)),
      J = (L * H - A * z < 0 ? -1 : 1) * Math.acos((L * z + A * H) / Et(qt * (z * z + H * H)));
    (isNaN(J) && (J = _), !s && J > 0 ? (J -= d) : s && J < 0 && (J += d), (Nt %= d), (J %= d));
    var bt = Math.ceil(Tt(J) / (d / 4)),
      pt = [],
      it = J / bt,
      gt = ((4 / 3) * Ue(it / 2)) / (1 + Xe(it / 2)),
      Ts = f * e,
      ws = c * e,
      bs = c * -i,
      Ss = f * i,
      lt;
    for (lt = 0; lt < bt; lt++) ((r = Nt + lt * it), (g = Xe(r)), (m = Ue(r)), (L = Xe((r += it))), (A = Ue(r)), pt.push(g - gt * m, m + gt * g, L + gt * A, A - gt * L, L, A));
    for (lt = 0; lt < pt.length; lt += 2) ((g = pt[lt]), (m = pt[lt + 1]), (pt[lt] = g * Ts + m * bs + C), (pt[lt + 1] = g * ws + m * Ss + I));
    return ((pt[lt - 2] = a), (pt[lt - 1] = u), pt);
  }
}
function li(o) {
  var t =
      (o + "")
        .replace(Ba, function (w) {
          var M = +w;
          return M < 1e-4 && M > -1e-4 ? 0 : M;
        })
        .match(Ca) || [],
    e = [],
    i = 0,
    r = 0,
    n = 2 / 3,
    s = t.length,
    a = 0,
    u = "ERROR: malformed path: " + o,
    l,
    f,
    c,
    _,
    d,
    p,
    h,
    g,
    m,
    y,
    x,
    T,
    v,
    b,
    S,
    P = function (M, R, O, C) {
      ((y = (O - M) / 3), (x = (C - R) / 3), h.push(M + y, R + x, O - y, C - x, O, C));
    };
  if (!o || !isNaN(t[0]) || isNaN(t[1])) return (console.log(u), e);
  for (l = 0; l < s; l++)
    if (((v = d), isNaN(t[l]) ? ((d = t[l].toUpperCase()), (p = d !== t[l])) : l--, (c = +t[l + 1]), (_ = +t[l + 2]), p && ((c += i), (_ += r)), l || ((g = c), (m = _)), d === "M"))
      (h && (h.length < 8 ? (e.length -= 1) : (a += h.length)), (i = g = c), (r = m = _), (h = [c, _]), e.push(h), (l += 2), (d = "L"));
    else if (d === "C") (h || (h = [0, 0]), p || (i = r = 0), h.push(c, _, i + t[l + 3] * 1, r + t[l + 4] * 1, (i += t[l + 5] * 1), (r += t[l + 6] * 1)), (l += 6));
    else if (d === "S")
      ((y = i),
        (x = r),
        (v === "C" || v === "S") && ((y += i - h[h.length - 4]), (x += r - h[h.length - 3])),
        p || (i = r = 0),
        h.push(y, x, c, _, (i += t[l + 3] * 1), (r += t[l + 4] * 1)),
        (l += 4));
    else if (d === "Q") ((y = i + (c - i) * n), (x = r + (_ - r) * n), p || (i = r = 0), (i += t[l + 3] * 1), (r += t[l + 4] * 1), h.push(y, x, i + (c - i) * n, r + (_ - r) * n, i, r), (l += 4));
    else if (d === "T") ((y = i - h[h.length - 4]), (x = r - h[h.length - 3]), h.push(i + y, r + x, c + (i + y * 1.5 - c) * n, _ + (r + x * 1.5 - _) * n, (i = c), (r = _)), (l += 2));
    else if (d === "H") (P(i, r, (i = c), r), (l += 1));
    else if (d === "V") (P(i, r, i, (r = c + (p ? r - i : 0))), (l += 1));
    else if (d === "L" || d === "Z") (d === "Z" && ((c = g), (_ = m), (h.closed = !0)), (d === "L" || Tt(i - c) > 0.5 || Tt(r - _) > 0.5) && (P(i, r, c, _), d === "L" && (l += 2)), (i = c), (r = _));
    else if (d === "A") {
      if (
        ((b = t[l + 4]),
        (S = t[l + 5]),
        (y = t[l + 6]),
        (x = t[l + 7]),
        (f = 7),
        b.length > 1 && (b.length < 3 ? ((x = y), (y = S), f--) : ((x = S), (y = b.substr(2)), (f -= 2)), (S = b.charAt(1)), (b = b.charAt(0))),
        (T = Ga(i, r, +t[l + 1], +t[l + 2], +t[l + 3], +b, +S, (p ? i : 0) + y * 1, (p ? r : 0) + x * 1)),
        (l += f),
        T)
      )
        for (f = 0; f < T.length; f++) h.push(T[f]);
      ((i = h[h.length - 2]), (r = h[h.length - 1]));
    } else console.log(u);
  return ((l = h.length), l < 6 ? (e.pop(), (l = 0)) : h[0] === h[l - 2] && h[1] === h[l - 1] && (h.closed = !0), (e.totalPoints = a + l), e);
}
function Ha(o, t) {
  t === void 0 && (t = 1);
  for (var e = o[0], i = 0, r = [e, i], n = 2; n < o.length; n += 2) r.push(e, i, o[n], (i = ((o[n] - e) * t) / 2), (e = o[n]), -i);
  return r;
}
function Gi(o, t) {
  Tt(o[0] - o[2]) < 1e-4 && Tt(o[1] - o[3]) < 1e-4 && (o = o.slice(2));
  var e = o.length - 2,
    i = +o[0],
    r = +o[1],
    n = +o[2],
    s = +o[3],
    a = [i, r, i, r],
    u = n - i,
    l = s - r,
    f = Math.abs(o[e] - i) < 0.001 && Math.abs(o[e + 1] - r) < 0.001,
    c,
    _,
    d,
    p,
    h,
    g,
    m,
    y,
    x,
    T,
    v,
    b,
    S,
    P,
    w;
  for (f && (o.push(n, s), (n = i), (s = r), (i = o[e - 2]), (r = o[e - 1]), o.unshift(i, r), (e += 4)), t = t || t === 0 ? +t : 1, d = 2; d < e; d += 2)
    ((c = i),
      (_ = r),
      (i = n),
      (r = s),
      (n = +o[d + 2]),
      (s = +o[d + 3]),
      !(i === n && r === s) &&
        ((p = u),
        (h = l),
        (u = n - i),
        (l = s - r),
        (g = Et(p * p + h * h)),
        (m = Et(u * u + l * l)),
        (y = Et(Math.pow(u / m + p / g, 2) + Math.pow(l / m + h / g, 2))),
        (x = ((g + m) * t * 0.25) / y),
        (T = i - (i - c) * (g ? x / g : 0)),
        (v = i + (n - i) * (m ? x / m : 0)),
        (b = i - (T + (((v - T) * ((g * 3) / (g + m) + 0.5)) / 4 || 0))),
        (S = r - (r - _) * (g ? x / g : 0)),
        (P = r + (s - r) * (m ? x / m : 0)),
        (w = r - (S + (((P - S) * ((g * 3) / (g + m) + 0.5)) / 4 || 0))),
        (i !== c || r !== _) && a.push(D(T + b), D(S + w), D(i), D(r), D(v + b), D(P + w))));
  return (i !== n || r !== s || a.length < 4 ? a.push(D(n), D(s), D(n), D(s)) : (a.length -= 2), a.length === 2 ? a.push(i, r, i, r, i, r) : f && (a.splice(0, 6), (a.length = a.length - 6)), a);
}
function hs(o) {
  as(o[0]) && (o = [o]);
  var t = "",
    e = o.length,
    i,
    r,
    n,
    s;
  for (r = 0; r < e; r++) {
    for (s = o[r], t += "M" + D(s[0]) + "," + D(s[1]) + " C", i = s.length, n = 2; n < i; n++)
      t += D(s[n++]) + "," + D(s[n++]) + " " + D(s[n++]) + "," + D(s[n++]) + " " + D(s[n++]) + "," + D(s[n]) + " ";
    s.closed && (t += "z");
  }
  return t;
}
/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var At,
  ie,
  Tr,
  gi,
  ke,
  Je,
  ui,
  Oe,
  wt = "transform",
  Hi = wt + "Origin",
  _s,
  ds = function (t) {
    var e = t.ownerDocument || t;
    for (!(wt in t.style) && ("msTransform" in t.style) && ((wt = "msTransform"), (Hi = wt + "Origin")); e.parentNode && (e = e.parentNode););
    if (((ie = window), (ui = new ze()), e)) {
      ((At = e), (Tr = e.documentElement), (gi = e.body), (Oe = At.createElementNS("http://www.w3.org/2000/svg", "g")), (Oe.style.transform = "none"));
      var i = e.createElement("div"),
        r = e.createElement("div"),
        n = e && (e.body || e.firstElementChild);
      n && n.appendChild && (n.appendChild(i), i.appendChild(r), i.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), (_s = r.offsetParent !== i), n.removeChild(i));
    }
    return e;
  },
  Ka = function (t) {
    for (var e, i; t && t !== gi;)
      ((i = t._gsap),
        i && i.uncache && i.get(t, "x"),
        i && !i.scaleX && !i.scaleY && i.renderTransform && ((i.scaleX = i.scaleY = 1e-4), i.renderTransform(1, i), e ? e.push(i) : (e = [i])),
        (t = t.parentNode));
    return e;
  },
  ps = [],
  gs = [],
  Za = function () {
    return ie.pageYOffset || At.scrollTop || Tr.scrollTop || gi.scrollTop || 0;
  },
  Qa = function () {
    return ie.pageXOffset || At.scrollLeft || Tr.scrollLeft || gi.scrollLeft || 0;
  },
  wr = function (t) {
    return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
  },
  Ja = function o(t) {
    if (ie.getComputedStyle(t).position === "fixed") return !0;
    if (((t = t.parentNode), t && t.nodeType === 1)) return o(t);
  },
  ki = function o(t, e) {
    if (t.parentNode && (At || ds(t))) {
      var i = wr(t),
        r = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
        n = i ? (e ? "rect" : "g") : "div",
        s = e !== 2 ? 0 : 100,
        a = e === 3 ? 100 : 0,
        u = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        l = At.createElementNS ? At.createElementNS(r.replace(/^https/, "http"), n) : At.createElement(n);
      return (
        e &&
          (i
            ? (Je || (Je = o(t)), l.setAttribute("width", 0.01), l.setAttribute("height", 0.01), l.setAttribute("transform", "translate(" + s + "," + a + ")"), Je.appendChild(l))
            : (ke || ((ke = o(t)), (ke.style.cssText = u)), (l.style.cssText = u + "width:0.1px;height:0.1px;top:" + a + "px;left:" + s + "px"), ke.appendChild(l))),
        l
      );
    }
    throw "Need document and parent.";
  },
  tl = function (t) {
    for (var e = new ze(), i = 0; i < t.numberOfItems; i++) e.multiply(t.getItem(i).matrix);
    return e;
  },
  el = function (t) {
    var e = t.getCTM(),
      i;
    return (
      e ||
        ((i = t.style[wt]),
        (t.style[wt] = "none"),
        t.appendChild(Oe),
        (e = Oe.getCTM()),
        t.removeChild(Oe),
        i ? (t.style[wt] = i) : t.style.removeProperty(wt.replace(/([A-Z])/g, "-$1").toLowerCase())),
      e || ui.clone()
    );
  },
  il = function (t, e) {
    var i = wr(t),
      r = t === i,
      n = i ? ps : gs,
      s = t.parentNode,
      a = s && !i && s.shadowRoot && s.shadowRoot.appendChild ? s.shadowRoot : s,
      u,
      l,
      f,
      c,
      _,
      d;
    if (t === ie) return t;
    if ((n.length || n.push(ki(t, 1), ki(t, 2), ki(t, 3)), (u = i ? Je : ke), i))
      (r
        ? ((f = el(t)), (c = -f.e / f.a), (_ = -f.f / f.d), (l = ui))
        : t.getBBox
          ? ((f = t.getBBox()),
            (l = t.transform ? t.transform.baseVal : {}),
            (l = l.numberOfItems ? (l.numberOfItems > 1 ? tl(l) : l.getItem(0).matrix) : ui),
            (c = l.a * f.x + l.c * f.y),
            (_ = l.b * f.x + l.d * f.y))
          : ((l = new ze()), (c = _ = 0)),
        e && t.tagName.toLowerCase() === "g" && (c = _ = 0),
        (r ? i : s).appendChild(u),
        u.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + c) + "," + (l.f + _) + ")"));
    else {
      if (((c = _ = 0), _s))
        for (l = t.offsetParent, f = t; f && (f = f.parentNode) && f !== l && f.parentNode;) (ie.getComputedStyle(f)[wt] + "").length > 4 && ((c = f.offsetLeft), (_ = f.offsetTop), (f = 0));
      if (((d = ie.getComputedStyle(t)), d.position !== "absolute" && d.position !== "fixed"))
        for (l = t.offsetParent; s && s !== l;) ((c += s.scrollLeft || 0), (_ += s.scrollTop || 0), (s = s.parentNode));
      ((f = u.style),
        (f.top = t.offsetTop - _ + "px"),
        (f.left = t.offsetLeft - c + "px"),
        (f[wt] = d[wt]),
        (f[Hi] = d[Hi]),
        (f.position = d.position === "fixed" ? "fixed" : "absolute"),
        a.appendChild(u));
    }
    return u;
  },
  Mi = function (t, e, i, r, n, s, a) {
    return ((t.a = e), (t.b = i), (t.c = r), (t.d = n), (t.e = s), (t.f = a), t);
  },
  ze = (function () {
    function o(e, i, r, n, s, a) {
      (e === void 0 && (e = 1), i === void 0 && (i = 0), r === void 0 && (r = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), a === void 0 && (a = 0), Mi(this, e, i, r, n, s, a));
    }
    var t = o.prototype;
    return (
      (t.inverse = function () {
        var i = this.a,
          r = this.b,
          n = this.c,
          s = this.d,
          a = this.e,
          u = this.f,
          l = i * s - r * n || 1e-10;
        return Mi(this, s / l, -r / l, -n / l, i / l, (n * u - s * a) / l, -(i * u - r * a) / l);
      }),
      (t.multiply = function (i) {
        var r = this.a,
          n = this.b,
          s = this.c,
          a = this.d,
          u = this.e,
          l = this.f,
          f = i.a,
          c = i.c,
          _ = i.b,
          d = i.d,
          p = i.e,
          h = i.f;
        return Mi(this, f * r + _ * s, f * n + _ * a, c * r + d * s, c * n + d * a, u + p * r + h * s, l + p * n + h * a);
      }),
      (t.clone = function () {
        return new o(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (t.equals = function (i) {
        var r = this.a,
          n = this.b,
          s = this.c,
          a = this.d,
          u = this.e,
          l = this.f;
        return r === i.a && n === i.b && s === i.c && a === i.d && u === i.e && l === i.f;
      }),
      (t.apply = function (i, r) {
        r === void 0 && (r = {});
        var n = i.x,
          s = i.y,
          a = this.a,
          u = this.b,
          l = this.c,
          f = this.d,
          c = this.e,
          _ = this.f;
        return ((r.x = n * a + s * l + c || 0), (r.y = n * u + s * f + _ || 0), r);
      }),
      o
    );
  })();
function _e(o, t, e, i) {
  if (!o || !o.parentNode || (At || ds(o)).documentElement === o) return new ze();
  var r = Ka(o),
    n = wr(o),
    s = n ? ps : gs,
    a = il(o, e),
    u = s[0].getBoundingClientRect(),
    l = s[1].getBoundingClientRect(),
    f = s[2].getBoundingClientRect(),
    c = a.parentNode,
    _ = !i && Ja(o),
    d = new ze((l.left - u.left) / 100, (l.top - u.top) / 100, (f.left - u.left) / 100, (f.top - u.top) / 100, u.left + (_ ? 0 : Qa()), u.top + (_ ? 0 : Za()));
  if ((c.removeChild(a), r)) for (u = r.length; u--;) ((l = r[u]), (l.scaleX = l.scaleY = 0), l.renderTransform(1, l));
  return t ? d.inverse() : d;
}
/*!
 * MotionPathPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var rl = "x,translateX,left,marginLeft,xPercent".split(","),
  nl = "y,translateY,top,marginTop,yPercent".split(","),
  sl = Math.PI / 180,
  yt,
  ms,
  oe,
  Ki,
  Ri,
  Wr,
  ol = function () {
    return yt || (typeof window < "u" && (yt = window.gsap) && yt.registerPlugin && yt);
  },
  Te = function (t, e, i, r) {
    for (var n = e.length, s = r === 2 ? 0 : r, a = 0; a < n; a++) ((t[s] = parseFloat(e[a][i])), r === 2 && (t[s + 1] = 0), (s += 2));
    return t;
  },
  ue = function (t, e, i) {
    return parseFloat(t._gsap.get(t, e, i || "px")) || 0;
  },
  ys = function (t) {
    var e = t[0],
      i = t[1],
      r;
    for (r = 2; r < t.length; r += 2) ((e = t[r] += e), (i = t[r + 1] += i));
  },
  Gr = function (t, e, i, r, n, s, a, u, l) {
    if (a.type === "cubic") e = [e];
    else {
      (a.fromCurrent !== !1 && e.unshift(ue(i, r, u), n ? ue(i, n, l) : 0), a.relative && ys(e));
      var f = n ? Gi : Ha;
      e = [f(e, a.curviness)];
    }
    return ((e = s(xs(e, i, a))), fi(t, i, r, e, "x", u), n && fi(t, i, n, e, "y", l), ee(e, a.resolution || (a.curviness === 0 ? 20 : 12)));
  },
  al = function (t) {
    return t;
  },
  ll = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
  Hr = function (t, e, i) {
    var r = _e(t),
      n = 0,
      s = 0,
      a;
    return (
      (t.tagName + "").toLowerCase() === "svg"
        ? ((a = t.viewBox.baseVal), a.width || (a = { width: +t.getAttribute("width"), height: +t.getAttribute("height") }))
        : (a = e && t.getBBox && t.getBBox()),
      e && e !== "auto" && ((n = e.push ? e[0] * (a ? a.width : t.offsetWidth || 0) : e.x), (s = e.push ? e[1] * (a ? a.height : t.offsetHeight || 0) : e.y)),
      i.apply(n || s ? r.apply({ x: n, y: s }) : { x: r.e, y: r.f })
    );
  },
  Zi = function (t, e, i, r) {
    var n = _e(t.parentNode, !0, !0),
      s = n.clone().multiply(_e(e)),
      a = Hr(t, i, n),
      u = Hr(e, r, n),
      l = u.x,
      f = u.y,
      c;
    return (
      (s.e = s.f = 0),
      r === "auto" && e.getTotalLength && e.tagName.toLowerCase() === "path" && ((c = e.getAttribute("d").match(ll) || []), (c = s.apply({ x: +c[0], y: +c[1] })), (l += c.x), (f += c.y)),
      c && ((c = s.apply(e.getBBox())), (l -= c.x), (f -= c.y)),
      (s.e = l - a.x),
      (s.f = f - a.y),
      s
    );
  },
  xs = function (t, e, i) {
    var r = i.align,
      n = i.matrix,
      s = i.offsetX,
      a = i.offsetY,
      u = i.alignOrigin,
      l = t[0][0],
      f = t[0][1],
      c = ue(e, "x"),
      _ = ue(e, "y"),
      d,
      p,
      h;
    return !t || !t.length
      ? Qe("M0,0L0,0")
      : (r &&
          (r === "self" || (d = Ki(r)[0] || e) === e
            ? Pe(t, 1, 0, 0, 1, c - l, _ - f)
            : (u && u[2] !== !1 ? yt.set(e, { transformOrigin: u[0] * 100 + "% " + u[1] * 100 + "%" }) : (u = [ue(e, "xPercent") / -100, ue(e, "yPercent") / -100]),
              (p = Zi(e, d, u, "auto")),
              (h = p.apply({ x: l, y: f })),
              Pe(t, p.a, p.b, p.c, p.d, c + p.e - (h.x - p.e), _ + p.f - (h.y - p.f)))),
        n ? Pe(t, n.a, n.b, n.c, n.d, n.e, n.f) : (s || a) && Pe(t, 1, 0, 0, 1, s || 0, a || 0),
        t);
  },
  fi = function (t, e, i, r, n, s) {
    var a = e._gsap,
      u = a.harness,
      l = u && u.aliases && u.aliases[i],
      f = l && l.indexOf(",") < 0 ? l : i,
      c = (t._pt = new ms(t._pt, e, f, 0, 0, al, 0, a.set(e, f, t)));
    ((c.u = oe(a.get(e, f, s)) || 0), (c.path = r), (c.pp = n), t._props.push(f));
  },
  ul = function (t, e) {
    return function (i) {
      return t || e !== 1 ? cs(i, t, e) : i;
    };
  },
  vs = {
    version: "3.13.0",
    name: "motionPath",
    register: function (t, e, i) {
      ((yt = t), (oe = yt.utils.getUnit), (Ki = yt.utils.toArray), (Ri = yt.core.getStyleSaver), (Wr = yt.core.reverting || function () {}), (ms = i));
    },
    init: function (t, e, i) {
      if (!yt) return (console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1);
      (!(typeof e == "object" && !e.style) || !e.path) && (e = { path: e });
      var r = [],
        n = e,
        s = n.path,
        a = n.autoRotate,
        u = n.unitX,
        l = n.unitY,
        f = n.x,
        c = n.y,
        _ = s[0],
        d = ul(e.start, "end" in e ? e.end : 1),
        p,
        h;
      if (
        ((this.rawPaths = r),
        (this.target = t),
        (this.tween = i),
        (this.styles = Ri && Ri(t, "transform")),
        (this.rotate = a || a === 0) &&
          ((this.rOffset = parseFloat(a) || 0),
          (this.radians = !!e.useRadians),
          (this.rProp = e.rotation || "rotation"),
          (this.rSet = t._gsap.set(t, this.rProp, this)),
          (this.ru = oe(t._gsap.get(t, this.rProp)) || 0)),
        Array.isArray(s) && !("closed" in s) && typeof _ != "number")
      ) {
        for (h in _) !f && ~rl.indexOf(h) ? (f = h) : !c && ~nl.indexOf(h) && (c = h);
        f && c ? r.push(Gr(this, Te(Te([], s, f, 0), s, c, 1), t, f, c, d, e, u || oe(s[0][f]), l || oe(s[0][c]))) : (f = c = 0);
        for (h in _) h !== f && h !== c && r.push(Gr(this, Te([], s, h, 2), t, h, 0, d, e, oe(s[0][h])));
      } else ((p = d(xs(Qe(e.path), t, e))), ee(p, e.resolution), r.push(p), fi(this, t, e.x || "x", p, "x", e.unitX || "px"), fi(this, t, e.y || "y", p, "y", e.unitY || "px"));
      i.vars.immediateRender && this.render(i.progress(), this);
    },
    render: function (t, e) {
      var i = e.rawPaths,
        r = i.length,
        n = e._pt;
      if (e.tween._time || !Wr()) {
        for (t > 1 ? (t = 1) : t < 0 && (t = 0); r--;) qr(i[r], t, !r && e.rotate, i[r]);
        for (; n;) (n.set(n.t, n.p, n.path[n.pp] + n.u, n.d, t), (n = n._next));
        e.rotate && e.rSet(e.target, e.rProp, i[0].angle * (e.radians ? sl : 1) + e.rOffset + e.ru, e, t);
      } else e.styles.revert();
    },
    getLength: function (t) {
      return ee(Qe(t)).totalLength;
    },
    sliceRawPath: cs,
    getRawPath: Qe,
    pointsToSegment: Gi,
    stringToRawPath: li,
    rawPathToString: hs,
    transformRawPath: Pe,
    getGlobalMatrix: _e,
    getPositionOnPath: qr,
    cacheRawPathMeasurements: ee,
    convertToPath: function (t, e) {
      return Ki(t).map(function (i) {
        return qa(i, e !== !1);
      });
    },
    convertCoordinates: function (t, e, i) {
      var r = _e(e, !0, !0).multiply(_e(t));
      return i ? r.apply(i) : r;
    },
    getAlignMatrix: Zi,
    getRelativePosition: function (t, e, i, r) {
      var n = Zi(t, e, i, r);
      return { x: n.e, y: n.f };
    },
    arrayToRawPath: function (t, e) {
      e = e || {};
      var i = Te(Te([], t, e.x || "x", 0), t, e.y || "y", 1);
      return (e.relative && ys(i), [e.type === "cubic" ? i : Gi(i, e.curviness)]);
    },
  };
ol() && yt.registerPlugin(vs);
vr.registerPlugin(vs);
const fl = ({ birdRef: o, bird: t, bankRef: e, onCompleteAnimation: i, isPlayEggsAnimation: r, totalProductivity: n }) => {
    const s = B.useRef(null),
      a = B.useRef(!1);
    return (
      B.useEffect(() => {
        var y, x, T, v, b, S, P, w, M, R, O, C, I, L, A;
        const u = s.current,
          l = o.current,
          f = e.current;
        if (!u || !l || !f) return;
        if (!r) {
          i();
          return;
        }
        const c = l.getBoundingClientRect(),
          _ = u.getBoundingClientRect(),
          d = f.getBoundingClientRect(),
          p = { left: c.left + c.width / 2, top: c.bottom - _.height },
          h = { left: d.left + _.width, top: d.top + _.height * 1.2 };
        let g = null;
        const m = vr.timeline({
          onComplete: () => {
            (i(), !a.current && n < 2500 && ((a.current = !0), console.log(1), ks()));
          },
        });
        switch (t.id) {
          case Pt.YELLOW:
            g = {
              duration: ((y = t == null ? void 0 : t.animation) == null ? void 0 : y.duration) || 2,
              rotation: ((x = t == null ? void 0 : t.animation) == null ? void 0 : x.rotation) || "+=800",
              motionPath: { path: [{ left: p.left + 100, top: p.top + 95 }, h], curviness: 2 },
              ease: ((T = t == null ? void 0 : t.animation) == null ? void 0 : T.ease) || "power2.in",
            };
            break;
          case Pt.GREEN:
            g = {
              duration: ((v = t == null ? void 0 : t.animation) == null ? void 0 : v.duration) || 3,
              rotation: ((b = t == null ? void 0 : t.animation) == null ? void 0 : b.rotation) || "+=800",
              motionPath: {
                path: [
                  { left: p.left + 30, top: p.top + 55 },
                  { left: p.left + 60, top: p.top + 90 },
                  { left: p.left + 65, top: p.top + 100 },
                  { left: p.left + 75, top: p.top + 120 },
                  { left: p.left + 85, top: p.top + 140 },
                  { top: h.top, left: d.left + 90 },
                ],
                curviness: 1.2,
              },
              ease: ((S = t == null ? void 0 : t.animation) == null ? void 0 : S.ease) || "power3.in",
            };
            break;
          case Pt.BLUE:
            g = {
              duration: ((P = t == null ? void 0 : t.animation) == null ? void 0 : P.duration) || 2.5,
              rotation: ((w = t == null ? void 0 : t.animation) == null ? void 0 : w.rotation) || "-=800",
              motionPath: {
                path: [
                  { left: p.left - 100, top: p.top + 40 },
                  { left: p.left - 120, top: p.top + 60 },
                  { left: p.left - 140, top: p.top + 80 },
                  { top: h.top, left: d.right - _.width * 2 },
                ],
                curviness: 2,
              },
              ease: ((M = t == null ? void 0 : t.animation) == null ? void 0 : M.ease) || "power2.in",
            };
            break;
          case Pt.RED:
            g = {
              duration: ((R = t == null ? void 0 : t.animation) == null ? void 0 : R.duration) || 4,
              rotation: ((O = t == null ? void 0 : t.animation) == null ? void 0 : O.rotation) || "-=1000",
              motionPath: { path: [{ left: p.left - 120, top: p.top + 60 }, { left: p.left - 140, top: p.top + 100 }, h], curviness: 0.5 },
              ease: ((C = t == null ? void 0 : t.animation) == null ? void 0 : C.ease) || "power3.in",
            };
            break;
          case Pt.BABY: {
            ((p.top -= 15),
              (g = {
                duration: ((I = t == null ? void 0 : t.animation) == null ? void 0 : I.duration) || 3,
                rotation: ((L = t == null ? void 0 : t.animation) == null ? void 0 : L.rotation) || "-=600",
                motionPath: {
                  path: [
                    { left: p.left - 70, top: p.top + 75 },
                    { left: p.left - 80, top: p.top + 100 },
                    { top: h.top, left: d.left + 20 },
                  ],
                  curviness: 0.5,
                },
                ease: ((A = t == null ? void 0 : t.animation) == null ? void 0 : A.ease) || "power3.in",
              }));
            break;
          }
          default:
            g = null;
        }
        g !== null && m.set(u, { duration: 0, ...p }).to(u, g);
      }, [i, t, r]),
      k.jsx(Os, { className: _o.egg, width: 40, height: 46, ref: s })
    );
  },
  cl = "_bottomBannerWrapper_18swe_1",
  hl = "_bottomBannerImage_18swe_11",
  _l = "_infoTitle_18swe_20",
  qe = { bottomBannerWrapper: cl, bottomBannerImage: hl, infoTitle: _l },
  dl = "_content_kkx9k_1",
  pl = "_inner_kkx9k_14",
  gl = "_value_kkx9k_31",
  ml = "_btn_kkx9k_37",
  We = { content: dl, inner: pl, value: gl, btn: ml },
  Be = 4320,
  yl = () => {
    const { t: o } = Fe(),
      t = en(),
      e = Y(tt.amount_eggs),
      i = Y(tt.total_productivity),
      r = er(),
      n = ci(),
      s = B.useRef(0);
    return (
      B.useEffect(() => {
        if (i < Be) return;
        let a;
        const u = 200,
          l = 36e5;
        return (
          (a = setInterval(() => {
            const c = (i / l) * u;
            s.current += c;
            const _ = Math.floor(s.current);
            _ >= 1 && r && r.capacity > e && (n(rn(_)), (s.current -= _));
          }, u)),
          () => {
            clearInterval(a);
          }
        );
      }, [i]),
      k.jsxs("div", {
        className: We.content,
        children: [
          k.jsxs("div", { className: We.inner, children: [k.jsx(Bs, {}), k.jsx("p", { className: We.value, children: Ds(e) })] }),
          k.jsx(Oi, {
            text: o("homepage.warehouseButton"),
            onClick: () => {
              (t("/warehouse"), Yt());
            },
            className: `button orangeButton ${We.btn}`,
          }),
        ],
      })
    );
  },
  Kr = "birdTimers",
  xl = ({ addEgg: o }) => {
    const t = Y(tt.birds),
      e = Y(tt.total_productivity),
      [i, r] = B.useState([]),
      n = B.useRef([]);
    return (
      B.useEffect(() => {
        if (e >= Be) return;
        const a = Date.now(),
          u = localStorage.getItem(Kr),
          l = u ? JSON.parse(u) : [],
          f = t
            .filter((c) => c.qty > 0)
            .map((c) => {
              const _ = (3600 / (c.productivity_per_hour * c.qty)) * 1e3,
                d = l.find((g) => g.birdId === c.id),
                p = n.current.find((g) => g.bird.id === c.id);
              let h;
              if (p && p.nextEggTime > a && p.intervalMs) {
                const g = p.intervalMs,
                  m = p.nextEggTime - a,
                  x = 1 - Math.max(0, Math.min(m, g)) / g;
                h = a + Math.max(0, (1 - x) * _);
              } else if (d && d.nextEggTime > a && d.intervalMs) {
                const g = d.intervalMs,
                  m = d.nextEggTime - a,
                  x = 1 - Math.max(0, Math.min(m, g)) / g;
                h = a + Math.max(0, (1 - x) * _);
              } else h = a + _;
              return { bird: c, intervalMs: _, nextEggTime: h };
            });
        r(f);
      }, [t, e]),
      B.useEffect(() => {
        n.current = i;
      }, [i]),
      B.useEffect(() => {
        if (e >= Be) return;
        const u = setInterval(() => {
          const l = Date.now(),
            f = i.map((c) => (l >= c.nextEggTime ? (o(c.bird, !0), { ...c, nextEggTime: l + c.intervalMs }) : c));
          (r(f), localStorage.setItem(Kr, JSON.stringify(f.map((c) => ({ birdId: c.bird.id, nextEggTime: c.nextEggTime, intervalMs: c.intervalMs, qty: c.bird.qty })))));
        }, 200);
        return () => clearInterval(u);
      }, [e, i]),
      {
        minSecondsLeft: B.useMemo(() => {
          if (e >= Be || i.length === 0) return null;
          const a = Date.now(),
            u = Math.min(...i.map((l) => l.nextEggTime - a));
          return Math.max(0, Math.floor(u / 1e3));
        }, [i]),
      }
    );
  },
  vl = 1300,
  Tl = ({ startEggsAnimation: o, addEgg: t }) => {
    const { t: e } = Fe(),
      i = Y(tt.total_productivity),
      { redBirdRef: r, yellowBirdRef: n, blueBirdRef: s, orangeBirdRef: a, greenBirdRef: u, bankRef: l } = hi(),
      f = Y(tt.amount_eggs),
      c = er(),
      _ = c && f >= c.capacity,
      { minSecondsLeft: d } = xl({ addEgg: t }),
      p = r.current && n.current && s.current && a.current && u.current && l.current;
    return (
      B.useEffect(() => {
        if (i < Be) return;
        let g;
        return (
          (g = setInterval(() => {
            o(!1);
          }, 1200)),
          () => {
            clearInterval(g);
          }
        );
      }, [i, p]),
      k.jsxs(sn.div, {
        className: qe.bottomBannerWrapper,
        transition: { delay: 0.3 },
        animate: { bottom: "calc(var(--pb) + 55px)" },
        initial: { bottom: -50 },
        children: [
          k.jsx("div", { className: qe.bottomBannerImage, children: k.jsx("img", { src: Ls, alt: "" }) }),
          i <= 500 && i < vl && !_ && k.jsxs("p", { className: qe.infoTitle, children: [e("homepage.warehouseBanner"), Math.floor(d || 0), " ", e("homepage.time")] }),
          _ && k.jsx("p", { className: qe.infoTitle, children: e("warehousePage.warehouseFullText") }),
          k.jsx(yl, {}),
        ],
      })
    );
  },
  wl = "_bankImage_qklk4_1",
  bl = "_backImage_qklk4_7",
  Zr = { bankImage: wl, backImage: bl },
  Sl = "/home/back.webp",
  Qr = "/home/basket0.webp",
  Pl = "/home/basket25.webp",
  kl = "/home/basket50.webp",
  Ml = "/home/basket75.webp",
  Rl = "/home/basket100.webp",
  Cl = B.lazy(() => tr(() => import("./BonusModal.0e2vQ0aY.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))),
  Ol = ({ isBankReady: o }) => {
    const t = Y(tt.amount_silver),
      e = Y(tt.myBirds),
      i = Y(tt.deposit_counter),
      r = Y(tt.amount_eggs),
      n = Y(tt.warehouse_level),
      s = Y(Ms.warehouses),
      a = Y(Ji.claimButton),
      [u, l] = B.useState(Qr),
      { bankRef: f } = hi(),
      { open: c } = on();
    return (
      B.useEffect(() => {
        const _ = s.find((m) => m.level === n);
        if (!_) return;
        const d = Object.values(e).every((m) => m === !1);
        t === 0 && d && !a && !i && c(k.jsx(Cl, {}));
        const p = r,
          h = _.capacity,
          g = (p / h) * 100;
        if (g >= 95) {
          l(Rl);
          return;
        }
        if (g >= 75) {
          l(Ml);
          return;
        }
        if (g >= 50) {
          l(kl);
          return;
        }
        if (g >= 25) {
          l(Pl);
          return;
        }
        l(Qr);
      }, [t, e, i, r, n]),
      k.jsxs(k.Fragment, { children: [k.jsx("img", { className: Zr.bankImage, src: u, alt: "", ref: o ? f : null }), k.jsx("img", { className: Zr.backImage, src: Sl, alt: "" })] })
    );
  },
  Bl = () => {
    const [o, t] = B.useState(!1),
      e = ci(),
      i = Rs(),
      { redBirdRef: r, yellowBirdRef: n, blueBirdRef: s, orangeBirdRef: a, greenBirdRef: u, bankRef: l } = hi(),
      f = B.useRef(null),
      c = Y(tt.birds),
      _ = Y(tn.eggs),
      d = Y(tt.total_productivity),
      p = er(),
      h = B.useCallback(
        (m, y) => {
          let x = null;
          switch (m.id) {
            case Pt.BABY:
              x = n;
              break;
            case Pt.GREEN:
              x = u;
              break;
            case Pt.BLUE:
              x = s;
              break;
            case Pt.RED:
              x = r;
              break;
            case Pt.YELLOW:
              x = a;
              break;
            default:
              x = null;
          }
          if (x === null || !f.current) return;
          const T = document.createElement("div");
          f.current.appendChild(T);
          const v = Ps.createRoot(T);
          v.render(
            k.jsx(fl, {
              bird: m,
              birdRef: x,
              bankRef: l,
              isPlayEggsAnimation: _,
              totalProductivity: d,
              onCompleteAnimation: () => {
                if (y && p) {
                  const b = i.getState();
                  tt.amount_eggs(b) < p.capacity && e(rn(1));
                }
                (v.unmount(), T.remove());
              },
            }),
          );
        },
        [i, e, p, n, u, s, r, a, l, f, _],
      ),
      g = (m = !1) => {
        c.forEach((y) => {
          y.qty > 0 && h(y, m);
        });
      };
    return k.jsxs(k.Fragment, {
      children: [
        k.jsxs(sn.div, {
          className: co.bank,
          transition: { delay: 0.3 },
          animate: { bottom: 100 },
          initial: { bottom: -100 },
          onAnimationComplete: () => t(!0),
          children: [k.jsx(Ol, { isBankReady: o }), k.jsx("div", { ref: f })],
        }),
        k.jsx(Tl, { startEggsAnimation: g, addEgg: h }),
      ],
    });
  },
  El = "_wrapper_yjujl_1",
  Al = "_content_yjujl_23",
  Ll = "_buttons_yjujl_45",
  we = { wrapper: El, content: Al, buttons: Ll },
  Dl = () => {
    const o = en(),
      t = ci(),
      e = Y(Ji.tutorial),
      { t: i } = Fe(),
      r = () => {
        (Yt(), t(nn(!1)), localStorage.setItem("tutorial", "false"));
      };
    return (
      e &&
      k.jsxs(k.Fragment, {
        children: [
          k.jsxs("div", {
            className: we.wrapper,
            children: [
              k.jsx("h2", { children: i("tutorialOnePage.title") }),
              k.jsxs("div", {
                className: we.content,
                children: [
                  k.jsx("p", { children: i("tutorialOnePage.subtitle") }),
                  k.jsx("p", { children: i("tutorialOnePage.content") }),
                  k.jsxs("div", {
                    className: we.buttons,
                    children: [
                      k.jsx(Oi, {
                        text: k.jsxs(k.Fragment, { children: [i("shop"), k.jsx(Ns, {})] }),
                        onClick: () => {
                          (Yt(), o("/shop"));
                        },
                        className: `button greenButton ${we.claimButton}`,
                      }),
                      k.jsx(Oi, { text: i("skip"), onClick: r, className: `button redButton ${we.claimButton}` }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          " ",
        ],
      })
    );
  },
  Nl = () => {
    const o = Y(Ji.tutorial),
      t = ci();
    return (
      B.useEffect(() => {
        localStorage.getItem("tutorial") === "true" && t(nn(!0));
      }, []),
      k.jsx(k.Fragment, { children: o && k.jsx(Dl, {}) })
    );
  },
  Il = "_infoBirds_d39bk_1",
  jl = "_animationButton_d39bk_18",
  Jr = { infoBirds: Il, animationButton: jl },
  zl = "/home/animation.svg",
  Fl = B.lazy(() => tr(() => import("./BirdsInfoModal.BYEshiHZ.js"), __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 11, 7, 8, 12]))),
  $l = B.lazy(() => tr(() => import("./AnimationModal.O4BI6i1K.js"), __vite__mapDeps([13, 1, 2, 3, 4, 5, 6, 7, 8, 14]))),
  Yl = () => {
    const { open: o } = on(),
      t = () => {
        (Yt(), o(k.jsx(Fl, {})));
      },
      e = () => {
        (Yt(), o(k.jsx($l, {})));
      };
    return k.jsxs(k.Fragment, {
      children: [
        k.jsxs("button", { className: Jr.infoBirds, onClick: t, children: [k.jsx(br, {}), k.jsx("span", { children: k.jsx(Es, {}) })] }),
        k.jsxs("button", { className: Jr.animationButton, onClick: e, children: [k.jsx(br, {}), k.jsx("span", { children: k.jsx("img", { src: zl, alt: "" }) })] }),
      ],
    });
  },
  Vl = "_cloud_17zr7_1",
  Ul = "_cloudText_17zr7_12",
  Xl = "_touch_17zr7_20",
  Ge = { cloud: Vl, cloudText: Ul, touch: Xl },
  ql = "/home/touch.webp",
  Wl = "/home/cloud.svg",
  Gl = () => {
    const { t: o } = Fe(),
      { prize: t, is_active: e } = Y((i) => i.competition);
    return k.jsx("div", {
      className: Ge.container,
      children:
        e &&
        k.jsxs(Qi, {
          to: "/competition",
          className: Ge.cloud,
          onClick: Yt,
          children: [
            k.jsx("img", { src: Wl, alt: "Competition Cloud" }),
            k.jsxs("div", {
              className: Ge.cloudText,
              children: [k.jsx("img", { className: Ge.touch, src: ql, alt: "" }), k.jsx("p", { children: o("competitionPage.prize2") }), k.jsxs("p", { children: ["$", t] })],
            }),
          ],
        }),
    });
  },
  Hl = "_cloud_4th6h_1",
  Kl = "_cloudText_4th6h_12",
  Ci = { cloud: Hl, cloudText: Kl },
  Zl = "/action/cloud.webp",
  Ql = () => {
    const { t: o } = Fe(),
      e = Y((n) => n.action)[0];
    if (!e) return null;
    const i = e.end_date,
      r = Is(i || "");
    return k.jsx("div", {
      className: Ci.container,
      children: k.jsxs(Qi, {
        to: "/shop/buy-silver?step-1",
        className: Ci.cloud,
        onClick: Yt,
        children: [
          k.jsx("img", { src: Zl, alt: "Competition Cloud" }),
          k.jsxs("div", { className: Ci.cloudText, children: [k.jsx("p", { className: "time", children: js(r, o, !1, !1) }), k.jsx("p", { children: o("action.cloud.title") })] }),
        ],
      }),
    });
  },
  Jl = () => k.jsxs("div", { className: Fs.wrapper, children: [k.jsx(uo, {}), k.jsx(Gl, {}), k.jsx(Ql, {}), k.jsx(Bl, {}), k.jsx(Nl, {}), k.jsx(Yl, {})] }),
  _u = () => k.jsx($s, { children: k.jsx(Jl, {}) });
export { _u as default };
