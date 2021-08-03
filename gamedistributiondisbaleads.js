/*
 * Project: @gamedistribution.com/html5-sdk
 * Description: GameDistribution.com HTML5 SDK
 * Development By: GameDistribution.com
 * Copyright(c): 2021
 * Version: 1.12.0 (30-07-2021 23:25)
 */
!function r(i, o, a) {
    function s(e, t) {
        if (!o[e]) {
            if (!i[e]) {
                var n = "function" == typeof require && require;
                if (!t && n)
                    return n(e, !0);
                if (c)
                    return c(e, !0);
                throw (n = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND",
                n
            }
            n = o[e] = {
                exports: {}
            },
            i[e][0].call(n.exports, function (t) {
                return s(i[e][1][t] || t)
            }, n, n.exports, r, i, o, a)
        }
        return o[e].exports
    }
    for (var c = "function" == typeof require && require, t = 0; t < a.length; t++)
        s(a[t]);
    return s
}
({
    1: [function (t, e, n) {
            !function (Gh, Fh) {
                !function () {
                    !function () {
                        "use strict";
                        function f(t, e) {
                            if (t !== e)
                                throw new TypeError("Cannot instantiate an arrow function")
                        }
                        function e(t) {
                            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                                return typeof t
                            }
                                 : function (t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }
                        var jt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== Gh ? Gh : "undefined" != typeof self ? self : {},
                        t = function (t) {
                            return t && t.Math == Math && t
                        },
                        n = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof jt && jt) || function () {
                            return this
                        }
                        () || Function("return this")(),
                        r = {},
                        i = function (t) {
                            try {
                                return !!t()
                            } catch (t) {
                                return !0
                            }
                        },
                        o = !i(function () {
                            return 7 != Object.defineProperty({}, 1, {
                                get: function () {
                                    return 7
                                }
                            })[1]
                        }),
                        a = {},
                        s = {}
                        .propertyIsEnumerable,
                        c = Object.getOwnPropertyDescriptor,
                        u = c && !s.call({
                            1: 2
                        }, 1);
                        a.f = u ? function (t) {
                            t = c(this, t);
                            return !!t && t.enumerable
                        }
                         : s;
                        function d(t, e) {
                            return {
                                enumerable: !(1 & t),
                                configurable: !(2 & t),
                                writable: !(4 & t),
                                value: e
                            }
                        }
                        function l(t) {
                            if (null == t)
                                throw TypeError("Can't call method on " + t);
                            return t
                        }
                        function h(t) {
                            return _(w(t))
                        }
                        function p(t) {
                            return "object" == typeof t ? null !== t : "function" == typeof t
                        }
                        var g = {}
                        .toString,
                        m = function (t) {
                            return g.call(t).slice(8, -1)
                        },
                        v = m,
                        y = "".split,
                        b = i(function () {
                            return !Object("z").propertyIsEnumerable(0)
                        }) ? function (t) {
                            return "String" == v(t) ? y.call(t, "") : Object(t)
                        }
                         : Object,
                        _ = b,
                        w = l,
                        A = p,
                        E = function (t, e) {
                            if (!A(t))
                                return t;
                            var n,
                            r;
                            if (e && "function" == typeof(n = t.toString) && !A(r = n.call(t)))
                                return r;
                            if ("function" == typeof(n = t.valueOf) && !A(r = n.call(t)))
                                return r;
                            if (!e && "function" == typeof(n = t.toString) && !A(r = n.call(t)))
                                return r;
                            throw TypeError("Can't convert object to primitive value")
                        },
                        k = {}
                        .hasOwnProperty,
                        x = function (t, e) {
                            return k.call(t, e)
                        },
                        S = p,
                        D = n.document,
                        T = S(D) && S(D.createElement),
                        R = function (t) {
                            return T ? D.createElement(t) : {}
                        },
                        O = R,
                        C = !o && !i(function () {
                            return 7 != Object.defineProperty(O("div"), "a", {
                                get: function () {
                                    return 7
                                }
                            }).a
                        }),
                        I = a,
                        P = d,
                        L = h,
                        j = E,
                        B = x,
                        M = C,
                        U = Object.getOwnPropertyDescriptor;
                        r.f = o ? U : function (t, e) {
                            if (t = L(t), e = j(e, !0), M)
                                try {
                                    return U(t, e)
                                } catch (t) {}
                            if (B(t, e))
                                return P(!I.f.call(t, e), t[e])
                        };
                        function N(t) {
                            if (!F(t))
                                throw TypeError(String(t) + " is not an object");
                            return t
                        }
                        var G = {},
                        F = p,
                        z = C,
                        q = N,
                        V = E,
                        K = Object.defineProperty;
                        G.f = o ? K : function (t, e, n) {
                            if (q(t), e = V(e, !0), q(n), z)
                                try {
                                    return K(t, e, n)
                                } catch (t) {}
                            if ("get" in n || "set" in n)
                                throw TypeError("Accessors not supported");
                            return "value" in n && (t[e] = n.value),
                            t
                        };
                        var H = G,
                        W = d,
                        $ = o ? function (t, e, n) {
                            return H.f(t, e, W(1, n))
                        }
                         : function (t, e, n) {
                            return t[e] = n,
                            t
                        },
                        Y = {
                            exports: {}
                        },
                        Q = n,
                        J = $,
                        X = function (e, n) {
                            try {
                                J(Q, e, n)
                            } catch (t) {
                                Q[e] = n
                            }
                            return n
                        },
                        Z = X,
                        tt = "__core-js_shared__",
                        et = n[tt] || Z(tt, {}),
                        nt = et,
                        rt = Function.toString;
                        "function" != typeof nt.inspectSource && (nt.inspectSource = function (t) {
                            return rt.call(t)
                        });
                        var it = nt.inspectSource,
                        ot = it,
                        at = n.WeakMap,
                        st = "function" == typeof at && /native code/.test(ot(at)),
                        ct = {
                            exports: {}
                        },
                        ut = et;
                        (ct.exports = function (t, e) {
                            return ut[t] || (ut[t] = void 0 !== e ? e : {})
                        })("versions", []).push({
                            version: "3.8.2",
                            mode: "global",
                            copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
                        });
                        var dt,
                        lt,
                        ht,
                        ft,
                        pt,
                        gt,
                        mt,
                        vt,
                        yt = 0,
                        bt = Math.random(),
                        _t = function (t) {
                            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++yt + bt).toString(36)
                        },
                        wt = ct.exports,
                        At = _t,
                        Et = wt("keys"),
                        kt = function (t) {
                            return Et[t] || (Et[t] = At(t))
                        },
                        xt = {},
                        St = p,
                        Dt = $,
                        Tt = x,
                        Rt = et,
                        Ot = kt,
                        Ct = xt,
                        It = n.WeakMap;
                        mt = st ? (dt = Rt.state || (Rt.state = new It), lt = dt.get, ht = dt.has, ft = dt.set, pt = function (t, e) {
                                return e.facade = t,
                                ft.call(dt, t, e),
                                e
                            }, gt = function (t) {
                                return lt.call(dt, t) || {}
                            }, function (t) {
                                return ht.call(dt, t)
                            }) : (Ct[vt = Ot("state")] = !0, pt = function (t, e) {
                                return e.facade = t,
                                Dt(t, vt, e),
                                e
                            }, gt = function (t) {
                                return Tt(t, vt) ? t[vt] : {}
                            }, function (t) {
                                return Tt(t, vt)
                            });
                        var Pt = {
                            set: pt,
                            get: gt,
                            has: mt,
                            enforce: function (t) {
                                return mt(t) ? gt(t) : pt(t, {})
                            },
                            getterFor: function (n) {
                                return function (t) {
                                    var e;
                                    if (!St(t) || (e = gt(t)).type !== n)
                                        throw TypeError("Incompatible receiver, " + n + " required");
                                    return e
                                }
                            }
                        },
                        Lt = n,
                        Bt = $,
                        Mt = x,
                        Ut = X,
                        Nt = it,
                        Gt = Pt.get,
                        Ft = Pt.enforce,
                        zt = String(String).split("String");
                        (Y.exports = function (t, e, n, r) {
                            var i = !!r && !!r.unsafe,
                            o = !!r && !!r.enumerable,
                            a = !!r && !!r.noTargetGet;
                            "function" == typeof n && ("string" != typeof e || Mt(n, "name") || Bt(n, "name", e), (r = Ft(n)).source || (r.source = zt.join("string" == typeof e ? e : ""))),
                            t !== Lt ? (i ? !a && t[e] && (o = !0) : delete t[e], o ? t[e] = n : Bt(t, e, n)) : o ? t[e] = n : Ut(e, n)
                        })(Function.prototype, "toString", function () {
                            return "function" == typeof this && Gt(this).source || Nt(this)
                        });
                        function qt(t) {
                            return "function" == typeof t ? t : void 0
                        }
                        function Vt(t) {
                            return 0 < t ? te(Zt(t), 9007199254740991) : 0
                        }
                        var Kt = n,
                        Ht = Kt,
                        Wt = n,
                        $t = function (t, e) {
                            return arguments.length < 2 ? qt(Ht[t]) || qt(Wt[t]) : Ht[t] && Ht[t][e] || Wt[t] && Wt[t][e]
                        },
                        Yt = {},
                        Qt = Math.ceil,
                        Jt = Math.floor,
                        Xt = function (t) {
                            return isNaN(t = +t) ? 0 : (0 < t ? Jt : Qt)(t)
                        },
                        Zt = Xt,
                        te = Math.min,
                        ee = Xt,
                        ne = Math.max,
                        re = Math.min,
                        ie = function (t, e) {
                            t = ee(t);
                            return t < 0 ? ne(t + e, 0) : re(t, e)
                        },
                        oe = h,
                        ae = Vt,
                        se = ie,
                        ce = function (s) {
                            return function (t, e, n) {
                                var r,
                                i = oe(t),
                                o = ae(i.length),
                                a = se(n, o);
                                if (s && e != e) {
                                    for (; a < o; )
                                        if ((r = i[a++]) != r)
                                            return !0
                                } else
                                    for (; a < o; a++)
                                        if ((s || a in i) && i[a] === e)
                                            return s || a || 0;
                                return !s && -1
                            }
                        },
                        ue = {
                            includes: ce(!0),
                            indexOf: ce(!1)
                        },
                        de = x,
                        le = h,
                        he = ue.indexOf,
                        fe = xt,
                        pe = function (t, e) {
                            var n,
                            r = le(t),
                            i = 0,
                            o = [];
                            for (n in r)
                                !de(fe, n) && de(r, n) && o.push(n);
                            for (; e.length > i; )
                                de(r, n = e[i++]) && (~he(o, n) || o.push(n));
                            return o
                        },
                        ge = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                        me = pe,
                        ve = ge.concat("length", "prototype");
                        Yt.f = Object.getOwnPropertyNames || function (t) {
                            return me(t, ve)
                        };
                        var ye = {};
                        ye.f = Object.getOwnPropertySymbols;
                        function be(t, e) {
                            var n,
                            r,
                            i,
                            o,
                            a = t.target,
                            s = t.global,
                            c = t.stat;
                            if (n = s ? Me : c ? Me[a] || Fe(a, {}) : (Me[a] || {}).prototype)
                                for (r in e) {
                                    if (i = e[r], o = t.noTargetGet ? (o = Ue(n, r)) && o.value : n[r], !qe(s ? r : a + (c ? "." : "#") + r, t.forced) && void 0 !== o) {
                                        if (typeof i == typeof o)
                                            continue;
                                        ze(i, o)
                                    }
                                    (t.sham || o && o.sham) && Ne(i, "sham", !0),
                                    Ge(n, r, i, t)
                                }
                        }
                        var _e = Yt,
                        we = ye,
                        Ae = N,
                        Ee = $t("Reflect", "ownKeys") || function (t) {
                            var e = _e.f(Ae(t)),
                            n = we.f;
                            return n ? e.concat(n(t)) : e
                        },
                        ke = x,
                        xe = Ee,
                        Se = r,
                        De = G,
                        Te = function (t, e) {
                            for (var n = xe(e), r = De.f, i = Se.f, o = 0; o < n.length; o++) {
                                var a = n[o];
                                ke(t, a) || r(t, a, i(e, a))
                            }
                        },
                        Re = i,
                        Oe = /#|\.prototype\./,
                        Ce = function (t, e) {
                            t = Pe[Ie(t)];
                            return t == je || t != Le && ("function" == typeof e ? Re(e) : !!e)
                        },
                        Ie = Ce.normalize = function (t) {
                            return String(t).replace(Oe, ".").toLowerCase()
                        },
                        Pe = Ce.data = {},
                        Le = Ce.NATIVE = "N",
                        je = Ce.POLYFILL = "P",
                        Be = Ce,
                        Me = n,
                        Ue = r.f,
                        Ne = $,
                        Ge = Y.exports,
                        Fe = X,
                        ze = Te,
                        qe = Be,
                        Ve = l,
                        Ke = function (t) {
                            return Object(Ve(t))
                        },
                        He = pe,
                        We = ge,
                        $e = Object.keys || function (t) {
                            return He(t, We)
                        },
                        Ye = Ke,
                        Qe = $e;
                        be({
                            target: "Object",
                            stat: !0,
                            forced: i(function () {
                                Qe(1)
                            })
                        }, {
                            keys: function (t) {
                                return Qe(Ye(t))
                            }
                        });
                        function Je(t) {
                            if ("function" != typeof t)
                                throw TypeError(String(t) + " is not a function");
                            return t
                        }
                        function Xe(r, i, t) {
                            if (Ze(r), void 0 === i)
                                return r;
                            switch (t) {
                            case 0:
                                return function () {
                                    return r.call(i)
                                };
                            case 1:
                                return function (t) {
                                    return r.call(i, t)
                                };
                            case 2:
                                return function (t, e) {
                                    return r.call(i, t, e)
                                };
                            case 3:
                                return function (t, e, n) {
                                    return r.call(i, t, e, n)
                                }
                            }
                            return function () {
                                return r.apply(i, arguments)
                            }
                        }
                        var Ze = Je,
                        tn = m,
                        en = Array.isArray || function (t) {
                            return "Array" == tn(t)
                        },
                        nn = i,
                        rn = !!Object.getOwnPropertySymbols && !nn(function () {
                            return !String(Symbol())
                        }),
                        on = rn && !Symbol.sham && "symbol" == typeof Symbol.iterator,
                        t = n,
                        u = ct.exports,
                        an = x,
                        s = _t,
                        sn = rn,
                        S = on,
                        cn = u("wks"),
                        un = t.Symbol,
                        dn = S ? un : un && un.withoutSetter || s,
                        C = function (t) {
                            return an(cn, t) || (sn && an(un, t) ? cn[t] = un[t] : cn[t] = dn("Symbol." + t)),
                            cn[t]
                        },
                        ln = p,
                        hn = en,
                        fn = C("species"),
                        Z = function (t, e) {
                            var n;
                            return new(void 0 === (n = hn(t) && ("function" == typeof(n = t.constructor) && (n === Array || hn(n.prototype)) || ln(n) && null === (n = n[fn])) ? void 0 : n) ? Array : n)(0 === e ? 0 : e)
                        },
                        pn = Xe,
                        gn = b,
                        mn = Ke,
                        vn = Vt,
                        yn = Z,
                        bn = [].push,
                        tt = function (h) {
                            var f = 1 == h,
                            p = 2 == h,
                            g = 3 == h,
                            m = 4 == h,
                            v = 6 == h,
                            y = 7 == h,
                            b = 5 == h || v;
                            return function (t, e, n, r) {
                                for (var i, o, a = mn(t), s = gn(a), c = pn(e, n, 3), u = vn(s.length), d = 0, r = r || yn, l = f ? r(t, u) : p || y ? r(t, 0) : void 0; d < u; d++)
                                    if ((b || d in s) && (o = c(i = s[d], d, a), h))
                                        if (f)
                                            l[d] = o;
                                        else if (o)
                                            switch (h) {
                                            case 3:
                                                return !0;
                                            case 5:
                                                return i;
                                            case 6:
                                                return d;
                                            case 2:
                                                bn.call(l, i)
                                            }
                                        else
                                            switch (h) {
                                            case 4:
                                                return !1;
                                            case 7:
                                                bn.call(l, i)
                                            }
                                return v ? -1 : g || m ? m : l
                            }
                        },
                        nt = {
                            forEach: tt(0),
                            map: tt(1),
                            filter: tt(2),
                            some: tt(3),
                            every: tt(4),
                            find: tt(5),
                            findIndex: tt(6),
                            filterOut: tt(7)
                        },
                        ot = $t("navigator", "userAgent") || "",
                        at = ot,
                        wt = n.process,
                        et = wt && wt.versions,
                        st = et && et.v8;
                        st ? sr = (ar = st.split("."))[0] + ar[1] : at && (!(ar = at.match(/Edge\/(\d+)/)) || 74 <= ar[1]) && (ar = at.match(/Chrome\/(\d+)/)) && (sr = ar[1]);
                        function _n(t) {
                            throw t
                        }
                        var Rt = sr && +sr,
                        wn = i,
                        An = Rt,
                        En = C("species"),
                        It = function (e) {
                            return 51 <= An || !wn(function () {
                                var t = [];
                                return (t.constructor = {})[En] = function () {
                                    return {
                                        foo: 1
                                    }
                                },
                                1 !== t[e](Boolean).foo
                            })
                        },
                        kn = o,
                        xn = i,
                        Sn = x,
                        Dn = Object.defineProperty,
                        Tn = {},
                        Ct = function (t, e) {
                            if (Sn(Tn, t))
                                return Tn[t];
                            var n = [][t],
                            r = !!Sn(e = e || {}, "ACCESSORS") && e.ACCESSORS,
                            i = Sn(e, 0) ? e[0] : _n,
                            o = Sn(e, 1) ? e[1] : void 0;
                            return Tn[t] = !!n && !xn(function () {
                                if (r && !kn)
                                    return !0;
                                var t = {
                                    length: -1
                                };
                                r ? Dn(t, 1, {
                                    enumerable: !0,
                                    get: _n
                                }) : t[1] = 1,
                                n.call(t, i, o)
                            })
                        },
                        Ot = be,
                        Rn = nt.filter,
                        ce = Ct,
                        Ce = It("filter"),
                        X = ce("filter");
                        Ot({
                            target: "Array",
                            proto: !0,
                            forced: !Ce || !X
                        }, {
                            filter: function (t) {
                                return Rn(this, t, 1 < arguments.length ? arguments[1] : void 0)
                            }
                        });
                        var pe = be,
                        nn = i,
                        On = h,
                        Cn = r.f,
                        u = o,
                        t = nn(function () {
                            Cn(1)
                        });
                        pe({
                            target: "Object",
                            stat: !0,
                            forced: !u || t,
                            sham: !u
                        }, {
                            getOwnPropertyDescriptor: function (t, e) {
                                return Cn(On(t), e)
                            }
                        });
                        var In = E,
                        Pn = G,
                        Ln = d,
                        S = function (t, e, n) {
                            e = In(e);
                            e in t ? Pn.f(t, e, Ln(0, n)) : t[e] = n
                        },
                        jn = Ee,
                        Bn = h,
                        Mn = r,
                        Un = S;
                        function Nn(t, e, n) {
                            return e in t ? Object.defineProperty(t, e, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = n,
                            t
                        }
                        function Gn(t, e, n, r, i, o, a) {
                            try {
                                var s = t[o](a),
                                c = s.value
                            } catch (t) {
                                return n(t),
                                0
                            }
                            s.done ? e(c) : Promise.resolve(c).then(r, i)
                        }
                        function Fn(s) {
                            return function () {
                                var t = this,
                                a = arguments;
                                return new Promise(function (e, n) {
                                    var r = s.apply(t, a);
                                    function i(t) {
                                        Gn(r, e, n, i, o, "next", t)
                                    }
                                    function o(t) {
                                        Gn(r, e, n, i, o, "throw", t)
                                    }
                                    i(void 0)
                                })
                            }
                        }
                        function zn(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function qn(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1,
                                r.configurable = !0,
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(t, r.key, r)
                            }
                        }
                        function Vn(t, e, n) {
                            return e && qn(t.prototype, e),
                            n && qn(t, n),
                            t
                        }
                        be({
                            target: "Object",
                            stat: !0,
                            sham: !o
                        }, {
                            getOwnPropertyDescriptors: function (t) {
                                for (var e, n, r = Bn(t), i = Mn.f, o = jn(r), a = {}, s = 0; o.length > s; )
                                    void 0 !== (n = i(r, e = o[s++])) && Un(a, e, n);
                                return a
                            }
                        });
                        var Kn = {
                            exports: {}
                        };
                        !function () {
                            var e = function (a) {
                                var c,
                                t = Object.prototype,
                                u = t.hasOwnProperty,
                                e = "function" == typeof Symbol ? Symbol : {},
                                r = e.iterator || "@@iterator",
                                n = e.asyncIterator || "@@asyncIterator",
                                i = e.toStringTag || "@@toStringTag";
                                function o(t, e, n) {
                                    return Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }),
                                    t[e]
                                }
                                try {
                                    o({}, "")
                                } catch (a) {
                                    o = function (t, e, n) {
                                        return t[e] = n
                                    }
                                }
                                function s(t, e, n, r) {
                                    var i,
                                    o,
                                    a,
                                    s,
                                    e = e && e.prototype instanceof m ? e : m,
                                    e = Object.create(e.prototype),
                                    r = new x(r || []);
                                    return e._invoke = (i = t, o = n, a = r, s = l, function (t, e) {
                                    if (s === f)
                                        throw new Error("Generator is already running");
                                    if (s === p) {
                                        if ("throw" === t)
                                            throw e;
                                        return D()
                                    }
                                    for (a.method = t, a.arg = e; ; ) {
                                        var n = a.delegate;
                                        if (n) {
                                            var r = function t(e, n) {
                                                var r = e.iterator[n.method];
                                                if (r === c) {
                                                    if (n.delegate = null, "throw" === n.method) {
                                                        if (e.iterator.return && (n.method = "return", n.arg = c, t(e, n), "throw" === n.method))
                                                            return g;
                                                        n.method = "throw",
                                                        n.arg = new TypeError("The iterator does not provide a 'throw' method")
                                                    }
                                                    return g
                                                }
                                                var r = d(r, e.iterator, n.arg);
                                                if ("throw" === r.type)
                                                    return n.method = "throw", n.arg = r.arg, n.delegate = null, g;
                                                r = r.arg;
                                                return r ? r.done ? (n[e.resultName] = r.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = c), n.delegate = null, g) : r : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
                                            }
                                            (n, a);
                                            if (r) {
                                                if (r === g)
                                                    continue;
                                                return r
                                            }
                                        }
                                        if ("next" === a.method)
                                            a.sent = a._sent = a.arg;
                                        else if ("throw" === a.method) {
                                            if (s === l)
                                                throw s = p, a.arg;
                                            a.dispatchException(a.arg)
                                        } else
                                            "return" === a.method && a.abrupt("return", a.arg);
                                        s = f;
                                        r = d(i, o, a);
                                        if ("normal" === r.type) {
                                            if (s = a.done ? p : h, r.arg === g)
                                                continue;
                                            return {
                                                value: r.arg,
                                                done: a.done
                                            }
                                        }
                                        "throw" === r.type && (s = p, a.method = "throw", a.arg = r.arg)
                                    }
                                }),
                                    e
                                }
                                function d(t, e, n) {
                                    try {
                                        return {
                                            type: "normal",
                                            arg: t.call(e, n)
                                        }
                                    } catch (t) {
                                        return {
                                            type: "throw",
                                            arg: t
                                        }
                                    }
                                }
                                a.wrap = s;
                                var l = "suspendedStart",
                                h = "suspendedYield",
                                f = "executing",
                                p = "completed",
                                g = {};
                                function m() {}
                                function v() {}
                                function y() {}
                                var b = {};
                                b[r] = function () {
                                    return this
                                };
                                e = Object.getPrototypeOf,
                                e = e && e(e(S([])));
                                e && e !== t && u.call(e, r) && (b = e);
                                var _ = y.prototype = m.prototype = Object.create(b);
                                function w(t) {
                                    ["next", "throw", "return"].forEach(function (e) {
                                        o(t, e, function (t) {
                                            return this._invoke(e, t)
                                        })
                                    })
                                }
                                function A(a, s) {
                                    var e;
                                    this._invoke = function (n, r) {
                                        function t() {
                                            return new s(function (t, e) {
                                                !function e(t, n, r, i) {
                                                    t = d(a[t], a, n);
                                                    if ("throw" !== t.type) {
                                                        var o = t.arg;
                                                        return (n = o.value) && "object" == typeof n && u.call(n, "__await") ? s.resolve(n.__await).then(function (t) {
                                                            e("next", t, r, i)
                                                        }, function (t) {
                                                            e("throw", t, r, i)
                                                        }) : s.resolve(n).then(function (t) {
                                                            o.value = t,
                                                            r(o)
                                                        }, function (t) {
                                                            return e("throw", t, r, i)
                                                        })
                                                    }
                                                    i(t.arg)
                                                }
                                                (n, r, t, e)
                                            })
                                        }
                                        return e = e ? e.then(t, t) : t()
                                    }
                                }
                                function E(t) {
                                    var e = {
                                        tryLoc: t[0]
                                    };
                                    1 in t && (e.catchLoc = t[1]),
                                    2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
                                    this.tryEntries.push(e)
                                }
                                function k(t) {
                                    var e = t.completion || {};
                                    e.type = "normal",
                                    delete e.arg,
                                    t.completion = e
                                }
                                function x(t) {
                                    this.tryEntries = [{
                                            tryLoc: "root"
                                        }
                                    ],
                                    t.forEach(E, this),
                                    this.reset(!0)
                                }
                                function S(e) {
                                    if (e) {
                                        var t = e[r];
                                        if (t)
                                            return t.call(e);
                                        if ("function" == typeof e.next)
                                            return e;
                                        if (!isNaN(e.length)) {
                                            var n = -1,
                                            t = function t() {
                                                for (; ++n < e.length; )
                                                    if (u.call(e, n))
                                                        return t.value = e[n], t.done = !1, t;
                                                return t.value = c,
                                                t.done = !0,
                                                t
                                            };
                                            return t.next = t
                                        }
                                    }
                                    return {
                                        next: D
                                    }
                                }
                                function D() {
                                    return {
                                        value: c,
                                        done: !0
                                    }
                                }
                                return ((v.prototype = _.constructor = y).constructor = v).displayName = o(y, i, "GeneratorFunction"),
                                a.isGeneratorFunction = function (t) {
                                    t = "function" == typeof t && t.constructor;
                                    return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
                                },
                                a.mark = function (t) {
                                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, o(t, i, "GeneratorFunction")),
                                    t.prototype = Object.create(_),
                                    t
                                },
                                a.awrap = function (t) {
                                    return {
                                        __await: t
                                    }
                                },
                                w(A.prototype),
                                A.prototype[n] = function () {
                                    return this
                                },
                                a.AsyncIterator = A,
                                a.async = function (t, e, n, r, i) {
                                    void 0 === i && (i = Promise);
                                    var o = new A(s(t, e, n, r), i);
                                    return a.isGeneratorFunction(e) ? o : o.next().then(function (t) {
                                        return t.done ? t.value : o.next()
                                    })
                                },
                                w(_),
                                o(_, i, "Generator"),
                                _[r] = function () {
                                    return this
                                },
                                _.toString = function () {
                                    return "[object Generator]"
                                },
                                a.keys = function (n) {
                                    var t,
                                    r = [];
                                    for (t in n)
                                        r.push(t);
                                    return r.reverse(),
                                    function t() {
                                        for (; r.length; ) {
                                            var e = r.pop();
                                            if (e in n)
                                                return t.value = e, t.done = !1, t
                                        }
                                        return t.done = !0,
                                        t
                                    }
                                },
                                a.values = S,
                                x.prototype = {
                                    constructor: x,
                                    reset: function (t) {
                                        if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(k), !t)
                                            for (var e in this)
                                                "t" === e.charAt(0) && u.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = c)
                                    },
                                    stop: function () {
                                        this.done = !0;
                                        var t = this.tryEntries[0].completion;
                                        if ("throw" === t.type)
                                            throw t.arg;
                                        return this.rval
                                    },
                                    dispatchException: function (n) {
                                        if (this.done)
                                            throw n;
                                        var r = this;
                                        function t(t, e) {
                                            return o.type = "throw",
                                            o.arg = n,
                                            r.next = t,
                                            e && (r.method = "next", r.arg = c),
                                            !!e
                                        }
                                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                            var i = this.tryEntries[e],
                                            o = i.completion;
                                            if ("root" === i.tryLoc)
                                                return t("end");
                                            if (i.tryLoc <= this.prev) {
                                                var a = u.call(i, "catchLoc"),
                                                s = u.call(i, "finallyLoc");
                                                if (a && s) {
                                                    if (this.prev < i.catchLoc)
                                                        return t(i.catchLoc, !0);
                                                    if (this.prev < i.finallyLoc)
                                                        return t(i.finallyLoc)
                                                } else if (a) {
                                                    if (this.prev < i.catchLoc)
                                                        return t(i.catchLoc, !0)
                                                } else {
                                                    if (!s)
                                                        throw new Error("try statement without catch or finally");
                                                    if (this.prev < i.finallyLoc)
                                                        return t(i.finallyLoc)
                                                }
                                            }
                                        }
                                    },
                                    abrupt: function (t, e) {
                                        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                                            var r = this.tryEntries[n];
                                            if (r.tryLoc <= this.prev && u.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                                var i = r;
                                                break
                                            }
                                        }
                                        var o = (i = i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc ? null : i) ? i.completion : {};
                                        return o.type = t,
                                        o.arg = e,
                                        i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(o)
                                    },
                                    complete: function (t, e) {
                                        if ("throw" === t.type)
                                            throw t.arg;
                                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e),
                                        g
                                    },
                                    finish: function (t) {
                                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                            var n = this.tryEntries[e];
                                            if (n.finallyLoc === t)
                                                return this.complete(n.completion, n.afterLoc), k(n), g
                                        }
                                    },
                                    catch : function (t) {
                                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                            var n = this.tryEntries[e];
                                            if (n.tryLoc === t) {
                                                var r,
                                                i = n.completion;
                                                return "throw" === i.type && (r = i.arg, k(n)),
                                                r
                                            }
                                        }
                                        throw new Error("illegal catch attempt")
                                    },
                                delegateYield: function (t, e, n) {
                                    return this.delegate = {
                                        iterator: S(t),
                                        resultName: e,
                                        nextLoc: n
                                    },
                                    "next" === this.method && (this.arg = c),
                                    g
                                }
                            },
                            a
                        }
                        (Kn.exports);
                        try {
                            regeneratorRuntime = e
                        } catch (t) {
                            Function("r", "regeneratorRuntime = r")(e)
                        }
                    }
                    ();
                    var Hn = Kn.exports,
                    s = {};
                    s[C("toStringTag")] = "z";
                    var b = "[object z]" === String(s),
                    tt = b,
                    Wn = m,
                    $n = C("toStringTag"),
                    Yn = "Arguments" == Wn(function () {
                        return arguments
                    }
                            ()),
                    wt = tt ? Wn : function (t) {
                        var e;
                        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(t = function (t, e) {
                            try {
                                return t[e]
                            } catch (t) {}
                        }
                            (e = Object(t), $n)) ? t : Yn ? Wn(e) : "Object" == (t = Wn(e)) && "function" == typeof e.callee ? "Arguments" : t
                    },
                    Qn = wt,
                    et = Y.exports;
                    b || et(Object.prototype, "toString", b ? {}
                        .toString : function () {
                        return "[object " + Qn(this) + "]"
                    }, {
                        unsafe: !0
                    });
                    function Jn(t, e) {
                        this.stopped = t,
                        this.result = e
                    }
                    var st = n.Promise,
                    Xn = Y.exports,
                    Zn = G.f,
                    tr = x,
                    er = C("toStringTag"),
                    at = function (t, e, n) {
                        t && !tr(t = n ? t : t.prototype, er) && Zn(t, er, {
                            configurable: !0,
                            value: e
                        })
                    },
                    nr = $t,
                    rr = G,
                    ir = o,
                    or = C("species"),
                    ar = function (t) {
                        var e = nr(t),
                        t = rr.f;
                        ir && e && !e[or] && t(e, or, {
                            configurable: !0,
                            get: function () {
                                return this
                            }
                        })
                    },
                    sr = {},
                    cr = sr,
                    ur = C("iterator"),
                    dr = Array.prototype,
                    ce = function (t) {
                        return void 0 !== t && (cr.Array === t || dr[ur] === t)
                    },
                    lr = wt,
                    hr = sr,
                    fr = C("iterator"),
                    Ot = function (t) {
                        if (null != t)
                            return t[fr] || t["@@iterator"] || hr[lr(t)]
                    },
                    pr = N,
                    Ce = function (t) {
                        var e = t.return;
                        if (void 0 !== e)
                            return pr(e.call(t))
                                .value
                        },
                        gr = N,
                        mr = ce,
                        vr = Vt,
                        yr = Xe,
                        br = Ot,
                        _r = Ce,
                        wr = C("iterator"),
                        Ar = !1;
                        try {
                            var Er = 0,
                            kr = {
                                next: function () {
                                    return {
                                        done: !!Er++
                                    }
                                },
                                return : function () {
                                    Ar = !0
                                }
                            };
                            kr[wr] = function () {
                                return this
                            },
                            Array.from(kr, function () {
                                throw 2
                            })
                        } catch (f) {}
                        function xr(t) {
                            return function () {
                                Ur(t)
                            }
                        }
                        var Sr,
                        X = function (t, e) {
                            if (!e && !Ar)
                                return !1;
                            var n = !1;
                            try {
                                var r = {};
                                r[wr] = function () {
                                    return {
                                        next: function () {
                                            return {
                                                done: n = !0
                                            }
                                        }
                                    }
                                },
                                t(r)
                            } catch (t) {}
                            return n
                        },
                        Dr = N,
                        Tr = Je,
                        Rr = C("species"),
                        nn = function (t, e) {
                            var n,
                            t = Dr(t).constructor;
                            return void 0 === t || null == (n = Dr(t)[Rr]) ? e : Tr(n)
                        },
                        pe = $t("document", "documentElement"),
                        t = /(iphone|ipod|ipad).*applewebkit/i.test(ot),
                        u = "process" == m(n.process),
                        Or = n,
                        Ee = i,
                        s = Xe,
                        Cr = pe,
                        Ir = R,
                        Pr = Or.location,
                        tt = Or.setImmediate,
                        et = Or.clearImmediate,
                        Lr = Or.process,
                        b = Or.MessageChannel,
                        jr = Or.Dispatch,
                        Br = 0,
                        Mr = {},
                        Ur = function (t) {
                            var e;
                            Mr.hasOwnProperty(t) && (e = Mr[t], delete Mr[t], e())
                        },
                        kr = function (t) {
                            Ur(t.data)
                        },
                        wt = function (t) {
                            Or.postMessage(t + "", Pr.protocol + "//" + Pr.host)
                        };
                        tt && et || (tt = function (t) {
                            for (var e = [], n = 1; n < arguments.length; )
                                e.push(arguments[n++]);
                            return Mr[++Br] = function () {
                                ("function" == typeof t ? t : Function(t)).apply(void 0, e)
                            },
                            Sr(Br),
                            Br
                        }, et = function (t) {
                            delete Mr[t]
                        }, u ? Sr = function (t) {
                            Lr.nextTick(xr(t))
                        }
                             : jr && jr.now ? Sr = function (t) {
                            jr.now(xr(t))
                        }
                             : b && !t ? (Yr = (Wr = new b).port2, Wr.port1.onmessage = kr, Sr = s(Yr.postMessage, Yr, 1)) : Or.addEventListener && "function" == typeof postMessage && !Or.importScripts && Pr && "file:" !== Pr.protocol && !Ee(wt) ? (Sr = wt, Or.addEventListener("message", kr, !1)) : Sr = "onreadystatechange" in Ir("script") ? function (t) {
                            Cr.appendChild(Ir("script")).onreadystatechange = function () {
                                Cr.removeChild(this),
                                Ur(t)
                            }
                        }
                             : function (t) {
                            setTimeout(xr(t), 0)
                        });
                        var Nr,
                        Gr,
                        Fr,
                        zr,
                        qr,
                        Vr,
                        Kr,
                        Hr,
                        Wr = {
                            set: tt,
                            clear: et
                        },
                        s = /web0s(?!.*chrome)/i.test(ot),
                        $r = n,
                        Yr = r.f,
                        Qr = Wr.set,
                        Ee = t,
                        wt = s,
                        Jr = u,
                        kr = $r.MutationObserver || $r.WebKitMutationObserver,
                        tt = $r.document,
                        Xr = $r.process,
                        et = $r.Promise,
                        ot = Yr($r, "queueMicrotask"),
                        t = ot && ot.value;
                        t || (Nr = function () {
                            var t,
                            e;
                            for (Jr && (t = Xr.domain) && t.exit(); Gr; ) {
                                e = Gr.fn,
                                Gr = Gr.next;
                                try {
                                    e()
                                } catch (t) {
                                    throw Gr ? zr() : Fr = void 0,
                                    t
                                }
                            }
                            Fr = void 0,
                            t && t.enter()
                        }, zr = Ee || Jr || wt || !kr || !tt ? et && et.resolve ? (Kr = et.resolve(void 0), Hr = Kr.then, function () {
                                Hr.call(Kr, Nr)
                            }) : Jr ? function () {
                            Xr.nextTick(Nr)
                        }
                             : function () {
                            Qr.call($r, Nr)
                        }
                             : (qr = !0, Vr = tt.createTextNode(""), new kr(Nr).observe(Vr, {
                                    characterData: !0
                                }), function () {
                                Vr.data = qr = !qr
                            }));
                        function Zr(t) {
                            var n,
                            r;
                            this.promise = new t(function (t, e) {
                                if (void 0 !== n || void 0 !== r)
                                    throw TypeError("Bad Promise constructor");
                                n = t,
                                r = e
                            }),
                            this.resolve = ti(n),
                            this.reject = ti(r)
                        }
                        var s = t || function (t) {
                            t = {
                                fn: t,
                                next: void 0
                            };
                            Fr && (Fr.next = t),
                            Gr || (Gr = t, zr()),
                            Fr = t
                        },
                        Yr = {},
                        ti = Je;
                        Yr.f = function (t) {
                            return new Zr(t)
                        };
                        function ei(t, e, n) {
                            function r(t) {
                                return o && _r(o),
                                new Jn(!0, t)
                            }
                            function i(t) {
                                return h ? (gr(t), p ? g(t[0], t[1], r) : g(t[0], t[1])) : p ? g(t, r) : g(t)
                            }
                            var o,
                            a,
                            s,
                            c,
                            u,
                            d,
                            l = n && n.that,
                            h = !(!n || !n.AS_ENTRIES),
                            f = !(!n || !n.IS_ITERATOR),
                            p = !(!n || !n.INTERRUPTED),
                            g = yr(e, l, 1 + h + p);
                            if (f)
                                o = t;
                            else {
                                if ("function" != typeof(f = br(t)))
                                    throw TypeError("Target is not iterable");
                                if (mr(f)) {
                                    for (a = 0, s = vr(t.length); a < s; a++)
                                        if ((c = i(t[a])) && c instanceof Jn)
                                            return c;
                                    return new Jn(!1)
                                }
                                o = f.call(t)
                            }
                            for (u = o.next; !(d = u.call(o)).done; ) {
                                try {
                                    c = i(d.value)
                                } catch (t) {
                                    throw _r(o),
                                    t
                                }
                                if ("object" == typeof c && c && c instanceof Jn)
                                    return c
                            }
                            return new Jn(!1)
                        }
                        var ni,
                        ri,
                        ii,
                        oi,
                        ai = N,
                        si = p,
                        ci = Yr,
                        ot = function (t, e) {
                            if (ai(t), si(e) && e.constructor === t)
                                return e;
                            t = ci.f(t);
                            return (0, t.resolve)(e),
                            t.promise
                        },
                        ui = n,
                        Ee = be,
                        di = n,
                        wt = $t,
                        et = st,
                        tt = Y.exports,
                        kr = at,
                        t = ar,
                        li = p,
                        hi = Je,
                        fi = it,
                        it = X,
                        pi = nn,
                        gi = Wr.set,
                        mi = s,
                        vi = ot,
                        Wr = Yr,
                        yi = function (t) {
                            try {
                                return {
                                    error: !1,
                                    value: t()
                                }
                            } catch (t) {
                                return {
                                    error: !0,
                                    value: t
                                }
                            }
                        },
                        s = Pt,
                        Yr = Be,
                        bi = u,
                        _i = Rt,
                        wi = C("species"),
                        Ai = "Promise",
                        Ei = s.get,
                        ki = s.set,
                        xi = s.getterFor(Ai),
                        Si = et,
                        Di = di.TypeError,
                        Ti = di.document,
                        Ri = di.process,
                        Oi = wt("fetch"),
                        Ci = Wr.f,
                        Ii = Ci,
                        Pi = !!(Ti && Ti.createEvent && di.dispatchEvent),
                        Li = "function" == typeof PromiseRejectionEvent,
                        ji = "unhandledrejection",
                        s = Yr(Ai, function () {
                            if (fi(Si) === String(Si)) {
                                if (66 === _i)
                                    return !0;
                                if (!bi && !Li)
                                    return !0
                            }
                            if (51 <= _i && /native code/.test(Si))
                                return !1;
                            function t(t) {
                                t(function () {}, function () {})
                            }
                            var e = Si.resolve(1);
                            return (e.constructor = {})[wi] = t,
                            !(e.then(function () {})instanceof t)
                        }),
                        Yr = s || !it(function (t) {
                            Si.all(t).catch(function () {})
                        }),
                        Bi = function (t) {
                            var e;
                            return !(!li(t) || "function" != typeof(e = t.then)) && e
                        },
                        Mi = function (h, f) {
                            var p;
                            h.notified || (h.notified = !0, p = h.reactions, mi(function () {
                                    for (var r, t = h.value, e = 1 == h.state, n = 0; p.length > n; ) {
                                        var i,
                                        o,
                                        a,
                                        s = p[n++],
                                        c = e ? s.ok : s.fail,
                                        u = s.resolve,
                                        d = s.reject,
                                        l = s.domain;
                                        try {
                                            c ? (e || (2 === h.rejection && function (e) {
                                                    gi.call(di, function () {
                                                        var t = e.facade;
                                                        bi ? Ri.emit("rejectionHandled", t) : Ui("rejectionhandled", t, e.value)
                                                    })
                                                }
                                                    (h), h.rejection = 1), !0 === c ? i = t : (l && l.enter(), i = c(t), l && (l.exit(), a = !0)), i === s.promise ? d(Di("Promise-chain cycle")) : (o = Bi(i)) ? o.call(i, u, d) : u(i)) : d(t)
                                        } catch (t) {
                                            l && !a && l.exit(),
                                            d(t)
                                        }
                                    }
                                    h.reactions = [],
                                    h.notified = !1,
                                    f && !h.rejection && (r = h, gi.call(di, function () {
                                            var t,
                                            e = r.facade,
                                            n = r.value;
                                            if (Ni(r) && (t = yi(function () {
                                                        bi ? Ri.emit("unhandledRejection", n, e) : Ui(ji, e, n)
                                                    }), r.rejection = bi || Ni(r) ? 2 : 1, t.error))
                                                throw t.value
                                        }))
                                }))
                        },
                        Ui = function (t, e, n) {
                            var r,
                            i;
                            Pi ? ((r = Ti.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), di.dispatchEvent(r)) : r = {
                                promise: e,
                                reason: n
                            },
                            !Li && (i = di["on" + t]) ? i(r) : t === ji && function (t, e) {
                                var n = ui.console;
                                n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
                            }
                            ("Unhandled promise rejection", n)
                        },
                        Ni = function (t) {
                            return 1 !== t.rejection && !t.parent
                        },
                        Gi = function (e, n, r) {
                            return function (t) {
                                e(n, t, r)
                            }
                        },
                        Fi = function (t, e, n) {
                            t.done || (t.done = !0, (t = n ? n : t).value = e, t.state = 2, Mi(t, !0))
                        },
                        zi = function (n, t, e) {
                            if (!n.done) {
                                n.done = !0,
                                e && (n = e);
                                try {
                                    if (n.facade === t)
                                        throw Di("Promise can't be resolved itself");
                                    var r = Bi(t);
                                    r ? mi(function () {
                                        var e = {
                                            done: !1
                                        };
                                        try {
                                            r.call(t, Gi(zi, e, n), Gi(Fi, e, n))
                                        } catch (t) {
                                            Fi(e, t, n)
                                        }
                                    }) : (n.value = t, n.state = 1, Mi(n, !1))
                                } catch (t) {
                                    Fi({
                                        done: !1
                                    }, t, n)
                                }
                            }
                        };
                        s && (Si = function (t) {
                            (function (t, e, n) {
                                if (!(t instanceof e))
                                    throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation")
                            })(this, Si, Ai),
                            hi(t),
                            ni.call(this);
                            var e = Ei(this);
                            try {
                                t(Gi(zi, e), Gi(Fi, e))
                            } catch (t) {
                                Fi(e, t)
                            }
                        }, (ni = function (t) {
                                ki(this, {
                                    type: Ai,
                                    done: !1,
                                    notified: !1,
                                    parent: !1,
                                    reactions: [],
                                    rejection: !1,
                                    state: 0,
                                    value: void 0
                                })
                            }).prototype = function (t, e, n) {
                            for (var r in e)
                                Xn(t, r, e[r], n);
                            return t
                        }
                            (Si.prototype, {
                                then: function (t, e) {
                                    var n = xi(this),
                                    r = Ci(pi(this, Si));
                                    return r.ok = "function" != typeof t || t,
                                    r.fail = "function" == typeof e && e,
                                    r.domain = bi ? Ri.domain : void 0,
                                    n.parent = !0,
                                    n.reactions.push(r),
                                    0 != n.state && Mi(n, !1),
                                    r.promise
                                },
                                catch : function (t) {
                                    return this.then(void 0, t)
                                }
                        }), ri = function () {
                        var t = new ni,
                        e = Ei(t);
                        this.promise = t,
                        this.resolve = Gi(zi, e),
                        this.reject = Gi(Fi, e)
                    }, Wr.f = Ci = function (t) {
                        return t === Si || t === ii ? new ri : Ii(t)
                    }, "function" == typeof et && (oi = et.prototype.then, tt(et.prototype, "then", function (t, e) {
                                var n = this;
                                return new Si(function (t, e) {
                                    oi.call(n, t, e)
                                }).then(t, e)
                            }, {
                                unsafe: !0
                            }), "function" == typeof Oi && Ee({
                                global: !0,
                                enumerable: !0,
                                forced: !0
                            }, {
                                fetch: function (t) {
                                    return vi(Si, Oi.apply(di, arguments))
                                }
                            }))),
                    Ee({
                        global: !0,
                        wrap: !0,
                        forced: s
                    }, {
                        Promise: Si
                    }),
                    kr(Si, Ai, !1),
                    t(Ai),
                    ii = wt(Ai),
                    Ee({
                        target: Ai,
                        stat: !0,
                        forced: s
                    }, {
                        reject: function (t) {
                            var e = Ci(this);
                            return e.reject.call(void 0, t),
                            e.promise
                        }
                    }),
                    Ee({
                        target: Ai,
                        stat: !0,
                        forced: s
                    }, {
                        resolve: function (t) {
                            return vi(this, t)
                        }
                    }),
                    Ee({
                        target: Ai,
                        stat: !0,
                        forced: Yr
                    }, {
                        all: function (t) {
                            var s = this,
                            e = Ci(s),
                            c = e.resolve,
                            u = e.reject,
                            n = yi(function () {
                                var r = hi(s.resolve),
                                i = [],
                                o = 0,
                                a = 1;
                                ei(t, function (t) {
                                    var e = o++,
                                    n = !1;
                                    i.push(void 0),
                                    a++,
                                    r.call(s, t).then(function (t) {
                                        n || (n = !0, i[e] = t, --a || c(i))
                                    }, u)
                                }),
                                --a || c(i)
                            });
                            return n.error && u(n.value),
                            e.promise
                        },
                        race: function (t) {
                            var n = this,
                            r = Ci(n),
                            i = r.reject,
                            e = yi(function () {
                                var e = hi(n.resolve);
                                ei(t, function (t) {
                                    e.call(n, t).then(r.resolve, i)
                                })
                            });
                            return e.error && i(e.value),
                            r.promise
                        }
                    });
                    var it = be,
                    qi = st,
                    Wr = i,
                    Vi = $t,
                    Ki = nn,
                    Hi = ot,
                    tt = Y.exports;
                    it({
                        target: "Promise",
                        proto: !0,
                        real: !0,
                        forced: !!qi && Wr(function () {
                            qi.prototype.finally.call({
                                then: function () {}
                            }, function () {})
                        })
                    }, {
                        finally : function (e) {
                                var n = Ki(this, Vi("Promise")),
                                t = "function" == typeof e;
                                return this.then(t ? function (t) {
                                    return Hi(n, e()).then(function () {
                                        return t
                                    })
                                }
                                     : e, t ? function (t) {
                                    return Hi(n, e()).then(function () {
                                        throw t
                                    })
                                }
                                     : e)
                            }
                    }),
                    "function" != typeof qi || qi.prototype.finally || tt(qi.prototype, "finally", Vi("Promise").prototype.finally);
                    var Wi = N,
                    et = function () {
                        var t = Wi(this),
                        e = "";
                        return t.global && (e += "g"),
                        t.ignoreCase && (e += "i"),
                        t.multiline && (e += "m"),
                        t.dotAll && (e += "s"),
                        t.unicode && (e += "u"),
                        t.sticky && (e += "y"),
                        e
                    },
                    kr = {},
                    t = i;
                    function $i(t, e) {
                        return RegExp(t, e)
                    }
                    kr.UNSUPPORTED_Y = t(function () {
                        var t = $i("a", "y");
                        return t.lastIndex = 2,
                        null != t.exec("abcd")
                    }),
                    kr.BROKEN_CARET = t(function () {
                        var t = $i("^r", "gy");
                        return t.lastIndex = 2,
                        null != t.exec("str")
                    });
                    var Yi = et,
                    wt = kr,
                    Qi = RegExp.prototype.exec,
                    Ji = String.prototype.replace,
                    s = Qi,
                    Xi = (Ee = /a/, Yr = /b*/g, Qi.call(Ee, "a"), Qi.call(Yr, "a"), 0 !== Ee.lastIndex || 0 !== Yr.lastIndex),
                    Zi = wt.UNSUPPORTED_Y || wt.BROKEN_CARET,
                    to = void 0 !== /()??/.exec("")[1],
                    st = s = Xi || to || Zi ? function (t) {
                        var e,
                        n,
                        r,
                        i,
                        o = this,
                        a = Zi && o.sticky,
                        s = Yi.call(o),
                        c = o.source,
                        u = 0,
                        d = t;
                        return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), d = String(t).slice(o.lastIndex), 0 < o.lastIndex && (!o.multiline || o.multiline && "\n" !== t[o.lastIndex - 1]) && (c = "(?: " + c + ")", d = " " + d, u++), n = new RegExp("^(?:" + c + ")", s)),
                        to && (n = new RegExp("^" + c + "$(?!\\s)", s)),
                        Xi && (e = o.lastIndex),
                        r = Qi.call(a ? n : o, d),
                        a ? r ? (r.input = r.input.slice(u), r[0] = r[0].slice(u), r.index = o.lastIndex, o.lastIndex += r[0].length) : o.lastIndex = 0 : Xi && r && (o.lastIndex = o.global ? r.index + r[0].length : e),
                        to && r && 1 < r.length && Ji.call(r[0], n, function () {
                            for (i = 1; i < arguments.length - 2; i++)
                                void 0 === arguments[i] && (r[i] = void 0)
                            }),
                            r
                        }
                         : s;
                        be({
                            target: "RegExp",
                            proto: !0,
                            forced: /./.exec !== st
                        }, {
                            exec: st
                        });
                        var eo = Y.exports,
                        no = i,
                        ro = C,
                        io = st,
                        oo = $,
                        ao = ro("species"),
                        so = !no(function () {
                            var t = /./;
                            return t.exec = function () {
                                var t = [];
                                return t.groups = {
                                    a: "7"
                                },
                                t
                            },
                            "7" !== "".replace(t, "$<a>")
                        }),
                        co = "$0" === "a".replace(/./, "$0"),
                        ot = ro("replace"),
                        uo = !!/./[ot] && "" === /./[ot]("a", "$0"),
                        lo = !no(function () {
                            var t = /(?:)/,
                            e = t.exec;
                            t.exec = function () {
                                return e.apply(this, arguments)
                            };
                            t = "ab".split(t);
                            return 2 !== t.length || "a" !== t[0] || "b" !== t[1]
                        }),
                        it = function (n, t, e, r) {
                            var o,
                            i,
                            a = ro(n),
                            s = !no(function () {
                                var t = {};
                                return t[a] = function () {
                                    return 7
                                },
                                7 != ""[n](t)
                            }),
                            c = s && !no(function () {
                                var t = !1,
                                e = /a/;
                                return "split" === n && ((e = {}).constructor = {}, e.constructor[ao] = function () {
                                    return e
                                }, e.flags = "", e[a] = /./[a]),
                                e.exec = function () {
                                    return t = !0,
                                    null
                                },
                                e[a](""),
                                !t
                            });
                            s && c && ("replace" !== n || so && co && !uo) && ("split" !== n || lo) || (o = /./[a], e = (c = e(a, ""[n], function (t, e, n, r, i) {
                                        return e.exec === io ? s && !i ? {
                                            done: !0,
                                            value: o.call(e, n, r)
                                        }
                                         : {
                                            done: !0,
                                            value: t.call(n, e, r)
                                        }
                                         : {
                                            done: !1
                                        }
                                    }, {
                                        REPLACE_KEEPS_$0: co,
                                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: uo
                                    }))[0], i = c[1], eo(String.prototype, n, e), eo(RegExp.prototype, a, 2 == t ? function (t, e) {
                                    return i.call(t, this, e)
                                }
                                     : function (t) {
                                    return i.call(t, this)
                                })),
                            r && oo(RegExp.prototype[a], "sham", !0)
                        },
                        Wr = Object.is || function (t, e) {
                            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
                        },
                        ho = m,
                        fo = st,
                        tt = function (t, e) {
                            var n = t.exec;
                            if ("function" == typeof n) {
                                n = n.call(t, e);
                                if ("object" != typeof n)
                                    throw TypeError("RegExp exec method returned something other than an Object or null");
                                return n
                            }
                            if ("RegExp" !== ho(t))
                                throw TypeError("RegExp#exec called on incompatible receiver");
                            return fo.call(t, e)
                        },
                        po = N,
                        go = l,
                        mo = Wr,
                        vo = tt;
                        it("search", 1, function (r, i, o) {
                            return [function (t) {
                                    var e = go(this),
                                    n = null == t ? void 0 : t[r];
                                    return void 0 !== n ? n.call(t, e) : new RegExp(t)[r](String(e))
                                }, function (t) {
                                    var e = o(i, t, this);
                                    if (e.done)
                                        return e.value;
                                    var n = po(t),
                                    e = String(this),
                                    t = n.lastIndex;
                                    mo(t, 0) || (n.lastIndex = 0);
                                    e = vo(n, e);
                                    return mo(n.lastIndex, t) || (n.lastIndex = t),
                                    null === e ? -1 : e.index
                                }
                            ]
                        });
                        var yo,
                        bo = l,
                        t = "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
                        _o = RegExp("^" + t + t + "*"),
                        wo = RegExp(t + t + "*$"),
                        Ee = function (e) {
                            return function (t) {
                                t = String(bo(t));
                                return 1 & e && (t = t.replace(_o, "")),
                                t = 2 & e ? t.replace(wo, "") : t
                            }
                        },
                        Yr = {
                            start: Ee(1),
                            end: Ee(2),
                            trim: Ee(3)
                        },
                        wt = i,
                        Ao = "\t\n\v\f\r                　\u2028\u2029\ufeff",
                        Eo = Yr.trim;
                        be({
                            target: "String",
                            proto: !0,
                            forced: (yo = "trim", wt(function () {
                                    return !!Ao[yo]() || "​᠎" != "​᠎"[yo]() || Ao[yo].name !== yo
                                }))
                        }, {
                            trim: function () {
                                return Eo(this)
                            }
                        });
                        var ko,
                        xo,
                        s = {
                            CSSRuleList: 0,
                            CSSStyleDeclaration: 0,
                            CSSValueList: 0,
                            ClientRectList: 0,
                            DOMRectList: 0,
                            DOMStringList: 0,
                            DOMTokenList: 1,
                            DataTransferItemList: 0,
                            FileList: 0,
                            HTMLAllCollection: 0,
                            HTMLCollection: 0,
                            HTMLFormElement: 0,
                            HTMLSelectElement: 0,
                            MediaList: 0,
                            MimeTypeArray: 0,
                            NamedNodeMap: 0,
                            NodeList: 1,
                            PaintRequestList: 0,
                            Plugin: 0,
                            PluginArray: 0,
                            SVGLengthList: 0,
                            SVGNumberList: 0,
                            SVGPathSegList: 0,
                            SVGPointList: 0,
                            SVGStringList: 0,
                            SVGTransformList: 0,
                            SourceBufferList: 0,
                            StyleSheetList: 0,
                            TextTrackCueList: 0,
                            TextTrackList: 0,
                            TouchList: 0
                        },
                        ot = i,
                        So = nt.forEach,
                        Wr = Ct,
                        t = !!(ko = [].forEach) && ot(function () {
                            ko.call(null, function () {
                                throw 1
                            }, 1)
                        }),
                        Ee = Wr("forEach"),
                        Do = n,
                        To = t && Ee ? [].forEach : function (t) {
                            return So(this, t, 1 < arguments.length ? arguments[1] : void 0)
                        },
                        Ro = $;
                        for (xo in s) {
                            var Oo = Do[xo],
                            Oo = Oo && Oo.prototype;
                            if (Oo && Oo.forEach !== To)
                                try {
                                    Ro(Oo, "forEach", To)
                                } catch (f) {
                                    Oo.forEach = To
                                }
                        }
                        var Co = p,
                        Io = N,
                        Yr = Object.setPrototypeOf || ("__proto__" in {}
                                 ? function () {
                            var n,
                            r = !1,
                            t = {};
                            try {
                                (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []),
                                r = t instanceof Array
                            } catch (n) {}
                            return function (t, e) {
                                return Io(t),
                                function (t) {
                                    if (!Co(t) && null !== t)
                                        throw TypeError("Can't set " + String(t) + " as a prototype")
                                }
                                (e),
                                r ? n.call(t, e) : t.__proto__ = e,
                                t
                            }
                        }
                                () : void 0),
                        Po = p,
                        Lo = Yr,
                        jo = p,
                        Bo = m,
                        Mo = C("match"),
                        wt = function (t) {
                            var e;
                            return jo(t) && (void 0 !== (e = t[Mo]) ? !!e : "RegExp" == Bo(t))
                        },
                        ot = o,
                        Wr = n,
                        t = Be,
                        Uo = function (t, e, n) {
                            var r,
                            i;
                            return Lo && "function" == typeof(r = e.constructor) && r !== n && Po(i = r.prototype) && i !== n.prototype && Lo(t, i),
                            t
                        },
                        No = G.f,
                        Ee = Yt.f,
                        Go = wt,
                        Fo = et,
                        m = kr,
                        Be = Y.exports,
                        kr = i,
                        zo = Pt.set,
                        ar = ar,
                        qo = C("match"),
                        Vo = Wr.RegExp,
                        Ko = Vo.prototype,
                        Ho = /a/g,
                        Wo = /a/g,
                        $o = new Vo(Ho) !== Ho,
                        Yo = m.UNSUPPORTED_Y;
                        if (ot && t("RegExp", !$o || Yo || kr(function () {
                                    return Wo[qo] = !1,
                                    Vo(Ho) != Ho || Vo(Wo) == Wo || "/a/i" != Vo(Ho, "i")
                                }))) {
                            for (var Qo = function (t, e) {
                                var n,
                                r = this instanceof Qo,
                                i = Go(t),
                                o = void 0 === e;
                                if (!r && i && t.constructor === Qo && o)
                                    return t;
                                $o ? i && !o && (t = t.source) : t instanceof Qo && (o && (e = Fo.call(t)), t = t.source),
                                Yo && (n = !!e && -1 < e.indexOf("y")) && (e = e.replace(/y/g, ""));
                                r = Uo($o ? new Vo(t, e) : Vo(t, e), r ? this : Ko, Qo);
                                return Yo && n && zo(r, {
                                    sticky: n
                                }),
                                r
                            }, Jo = Ee(Vo), Xo = 0; Jo.length > Xo; )
                                !function (e) {
                                    e in Qo || No(Qo, e, {
                                        configurable: !0,
                                        get: function () {
                                            return Vo[e]
                                        },
                                        set: function (t) {
                                            Vo[e] = t
                                        }
                                    })
                                }
                            (Jo[Xo++]);
                            (Ko.constructor = Qo).prototype = Ko,
                            Be(Wr, "RegExp", Qo)
                        }
                        ar("RegExp");
                        var Be = Y.exports,
                        Zo = N,
                        Wr = i,
                        ta = et,
                        ar = "toString",
                        ea = RegExp.prototype,
                        na = ea.toString,
                        et = Wr(function () {
                            return "/a/b" != na.call({
                                source: "a",
                                flags: "b"
                            })
                        }),
                        Wr = na.name != ar;
                        (et || Wr) && Be(RegExp.prototype, ar, function () {
                            var t = Zo(this),
                            e = String(t.source),
                            n = t.flags;
                            return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in ea) ? ta.call(t) : n)
                        }, {
                            unsafe: !0
                        });
                        var et = be,
                        Wr = i,
                        ra = en,
                        ia = p,
                        oa = Ke,
                        aa = Vt,
                        sa = S,
                        ca = Z,
                        Be = It,
                        ar = Rt,
                        ua = C("isConcatSpreadable"),
                        da = 9007199254740991,
                        la = "Maximum allowed index exceeded",
                        Z = 51 <= ar || !Wr(function () {
                            var t = [];
                            return t[ua] = !1,
                            t.concat()[0] !== t
                        }),
                        Rt = Be("concat");
                        et({
                            target: "Array",
                            proto: !0,
                            forced: !Z || !Rt
                        }, {
                            concat: function (t) {
                                for (var e, n, r, i = oa(this), o = ca(i, 0), a = 0, s = -1, c = arguments.length; s < c; s++)
                                    if (function (t) {
                                        if (!ia(t))
                                            return !1;
                                        var e = t[ua];
                                        return void 0 !== e ? !!e : ra(t)
                                    }
                                        (r = -1 === s ? i : arguments[s])) {
                                        if (a + (n = aa(r.length)) > da)
                                            throw TypeError(la);
                                        for (e = 0; e < n; e++, a++)
                                            e in r && sa(o, a, r[e])
                                    } else {
                                        if (da <= a)
                                            throw TypeError(la);
                                        sa(o, a++, r)
                                    }
                                return o.length = a,
                                o
                            }
                        });
                        var ha = wt,
                        ar = function (t) {
                            if (ha(t))
                                throw TypeError("The method doesn't accept regular expressions");
                            return t
                        },
                        fa = C("match"),
                        Wr = function (e) {
                            var n = /./;
                            try {
                                "/./"[e](n)
                            } catch (t) {
                                try {
                                    return n[fa] = !1,
                                    "/./"[e](n)
                                } catch (e) {}
                            }
                            return !1
                        },
                        Be = be,
                        et = r.f,
                        pa = Vt,
                        ga = ar,
                        ma = l,
                        Z = Wr,
                        va = "".startsWith,
                        ya = Math.min,
                        Rt = Z("startsWith");
                        Be({
                            target: "String",
                            proto: !0,
                            forced: !(!Rt && ((Ea = et(String.prototype, "startsWith")) && !Ea.writable) || Rt)
                        }, {
                            startsWith: function (t) {
                                var e = String(ma(this));
                                ga(t);
                                var n = pa(ya(1 < arguments.length ? arguments[1] : void 0, e.length)),
                                t = String(t);
                                return va ? va.call(e, t, n) : e.slice(n, n + t.length) === t
                            }
                        });
                        var Z = G.f,
                        Be = Function.prototype,
                        ba = Be.toString,
                        _a = /^\s*function ([^ (]*)/;
                        !o || "name" in Be || Z(Be, "name", {
                            configurable: !0,
                            get: function () {
                                try {
                                    return ba.call(this).match(_a)[1]
                                } catch (t) {
                                    return ""
                                }
                            }
                        });
                        var wa = Xt,
                        Aa = l,
                        et = function (o) {
                            return function (t, e) {
                                var n,
                                r = String(Aa(t)),
                                i = wa(e),
                                t = r.length;
                                return i < 0 || t <= i ? o ? "" : void 0 : (e = r.charCodeAt(i)) < 55296 || 56319 < e || i + 1 === t || (n = r.charCodeAt(i + 1)) < 56320 || 57343 < n ? o ? r.charAt(i) : e : o ? r.slice(i, i + 2) : n - 56320 + (e - 55296 << 10) + 65536
                            }
                        },
                        Ea = {
                            codeAt: et(!1),
                            charAt: et(!0)
                        },
                        ka = Ea.charAt,
                        Rt = function (t, e, n) {
                            return e + (n ? ka(t, e).length : 1)
                        },
                        xa = Ke,
                        Sa = Math.floor,
                        Da = "".replace,
                        Ta = /\$([$&'`]|\d\d?|<[^>]*>)/g,
                        Ra = /\$([$&'`]|\d\d?)/g,
                        Z = it,
                        Oa = N,
                        Ca = Vt,
                        Ia = Xt,
                        Pa = l,
                        La = Rt,
                        ja = tt,
                        Ba = Math.max,
                        Ma = Math.min;
                        Z("replace", 2, function (i, _, w, t) {
                            var A = t.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                            E = t.REPLACE_KEEPS_$0,
                            k = A ? "$" : "$0";
                            return [function (t, e) {
                                    var n = Pa(this),
                                    r = null == t ? void 0 : t[i];
                                    return void 0 !== r ? r.call(t, n, e) : _.call(String(n), t, e)
                                }, function (t, e) {
                                    if (!A && E || "string" == typeof e && -1 === e.indexOf(k)) {
                                        var n = w(_, t, this, e);
                                        if (n.done)
                                            return n.value
                                    }
                                    var r = Oa(t),
                                    i = String(this),
                                    o = "function" == typeof e;
                                    o || (e = String(e));
                                    var a,
                                    s = r.global;
                                    s && (a = r.unicode, r.lastIndex = 0);
                                    for (var c = []; ; ) {
                                        var u = ja(r, i);
                                        if (null === u)
                                            break;
                                        if (c.push(u), !s)
                                            break;
                                        "" === String(u[0]) && (r.lastIndex = La(i, Ca(r.lastIndex), a))
                                    }
                                    for (var d, l = "", h = 0, f = 0; f < c.length; f++) {
                                        for (var u = c[f], p = String(u[0]), g = Ba(Ma(Ia(u.index), i.length), 0), m = [], v = 1; v < u.length; v++)
                                            m.push(void 0 === (d = u[v]) ? d : String(d));
                                        var y,
                                        b = u.groups,
                                        b = o ? (y = [p].concat(m, g, i), void 0 !== b && y.push(b), String(e.apply(void 0, y))) : function (o, a, s, c, u, t) {
                                            var d = s + o.length,
                                            l = c.length,
                                            e = Ra;
                                            return void 0 !== u && (u = xa(u), e = Ta),
                                            Da.call(t, e, function (t, e) {
                                                var n;
                                                switch (e.charAt(0)) {
                                                case "$":
                                                    return "$";
                                                case "&":
                                                    return o;
                                                case "`":
                                                    return a.slice(0, s);
                                                case "'":
                                                    return a.slice(d);
                                                case "<":
                                                    n = u[e.slice(1, -1)];
                                                    break;
                                                default:
                                                    var r = +e;
                                                    if (0 == r)
                                                        return t;
                                                    if (l < r) {
                                                        var i = Sa(r / 10);
                                                        return 0 !== i && i <= l ? void 0 === c[i - 1] ? e.charAt(1) : c[i - 1] + e.charAt(1) : t
                                                    }
                                                    n = c[r - 1]
                                                }
                                                return void 0 === n ? "" : n
                                            })
                                        }
                                        (p, i, g, m, b, e);
                                        h <= g && (l += i.slice(h, g) + b, h = g + p.length)
                                    }
                                    return l + i.slice(h)
                                }
                            ]
                        });
                        function Ua() {}
                        function Na(t) {
                            return "<script>" + t + "<\/script>"
                        }
                        var Ga,
                        Fa = G,
                        za = N,
                        qa = $e,
                        Be = o ? Object.defineProperties : function (t, e) {
                            za(t);
                            for (var n, r = qa(e), i = r.length, o = 0; o < i; )
                                Fa.f(t, n = r[o++], e[n]);
                            return t
                        },
                        Va = N,
                        Ka = Be,
                        Ha = ge,
                        et = xt,
                        Wa = pe,
                        $a = R,
                        Ya = kt("IE_PROTO"),
                        Qa = function () {
                            try {
                                Ga = document.domain && new ActiveXObject("htmlfile")
                            } catch (t) {}
                            var t,
                            e;
                            Qa = Ga ? function (t) {
                                t.write(Na("")),
                                t.close();
                                var e = t.parentWindow.Object;
                                return t = null,
                                e
                            }
                            (Ga) : ((e = $a("iframe")).style.display = "none", Wa.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Na("document.F=Object")), t.close(), t.F);
                            for (var n = Ha.length; n--; )
                                delete Qa.prototype[Ha[n]];
                            return Qa()
                        };
                        et[Ya] = !0;
                        var Xt = Object.create || function (t, e) {
                            var n;
                            return null !== t ? (Ua.prototype = Va(t), n = new Ua, Ua.prototype = null, n[Ya] = t) : n = Qa(),
                            void 0 === e ? n : Ka(n, e)
                        },
                        Z = {},
                        Ja = h,
                        Xa = Yt.f,
                        Za = {}
                        .toString,
                        ts = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                        Z.f = function (t) {
                            return ts && "[object Window]" == Za.call(t) ? function (t) {
                                try {
                                    return Xa(t)
                                } catch (t) {
                                    return ts.slice()
                                }
                            }
                            (t) : Xa(Ja(t))
                        };
                        Be = {};
                        Be.f = C;
                        function es(t, e) {
                            var n = Us[t] = bs(Is.prototype);
                            return Rs(n, {
                                type: Ts,
                                tag: t,
                                description: e
                            }),
                            ds || (n.description = e),
                            n
                        }
                        function ns(t, e, n) {
                            return t === Cs && ns(Ns, e, n),
                            ps(t),
                            e = vs(e, !0),
                            ps(n),
                            ls(Us, e) ? (n.enumerable ? (ls(t, Ds) && t[Ds][e] && (t[Ds][e] = !1), n = bs(n, {
                                        enumerable: ys(0, !1)
                                    })) : (ls(t, Ds) || js(t, Ds, ys(1, {})), t[Ds][e] = !0), qs(t, e, n)) : js(t, e, n)
                        }
                        function rs(e, t) {
                            ps(e);
                            var n = ms(t),
                            t = _s(n).concat(os(n));
                            return Ss(t, function (t) {
                                ds && !is.call(n, t) || ns(e, t, n[t])
                            }),
                            e
                        }
                        function is(t) {
                            var e = vs(t, !0),
                            t = Ms.call(this, e);
                            return !(this === Cs && ls(Us, e) && !ls(Ns, e)) && (!(t || !ls(this, e) || !ls(Us, e) || ls(this, Ds) && this[Ds][e]) || t)
                        }
                        function os(t) {
                            var e = t === Cs,
                            t = Bs(e ? Ns : ms(t)),
                            n = [];
                            return Ss(t, function (t) {
                                !ls(Us, t) || e && !ls(Cs, t) || n.push(Us[t])
                            }),
                            n
                        }
                        var as = Kt,
                        ss = x,
                        cs = Be,
                        us = G.f,
                        ge = function (t) {
                            var e = as.Symbol || (as.Symbol = {});
                            ss(e, t) || us(e, t, {
                                value: cs.f(t)
                            })
                        },
                        pe = be,
                        R = n,
                        et = $t,
                        ds = o,
                        Kt = rn,
                        $t = on,
                        rn = i,
                        ls = x,
                        hs = en,
                        fs = p,
                        ps = N,
                        gs = Ke,
                        ms = h,
                        vs = E,
                        ys = d,
                        bs = Xt,
                        _s = $e,
                        on = Yt,
                        E = Z,
                        ws = ye,
                        $e = r,
                        Yt = G,
                        Z = a,
                        ye = $,
                        r = Y.exports,
                        a = ct.exports,
                        As = xt,
                        Es = _t,
                        ks = C,
                        ct = Be,
                        xs = ge,
                        xt = at,
                        _t = Pt,
                        Ss = nt.forEach,
                        Ds = kt("hidden"),
                        Ts = "Symbol",
                        Be = ks("toPrimitive"),
                        Rs = _t.set,
                        Os = _t.getterFor(Ts),
                        Cs = Object.prototype,
                        Is = R.Symbol,
                        Ps = et("JSON", "stringify"),
                        Ls = $e.f,
                        js = Yt.f,
                        Bs = E.f,
                        Ms = Z.f,
                        Us = a("symbols"),
                        Ns = a("op-symbols"),
                        Gs = a("string-to-symbol-registry"),
                        Fs = a("symbol-to-string-registry"),
                        a = a("wks"),
                        R = R.QObject,
                        zs = !R || !R.prototype || !R.prototype.findChild,
                        qs = ds && rn(function () {
                            return 7 != bs(js({}, "a", {
                                    get: function () {
                                        return js(this, "a", {
                                            value: 7
                                        }).a
                                    }
                                })).a
                        }) ? function (t, e, n) {
                            var r = Ls(Cs, e);
                            r && delete Cs[e],
                            js(t, e, n),
                            r && t !== Cs && js(Cs, e, r)
                        }
                         : js,
                        Vs = $t ? function (t) {
                            return "symbol" == typeof t
                        }
                         : function (t) {
                            return Object(t)instanceof Is
                        },
                        R = function (t, e) {
                            var n = ms(t),
                            t = vs(e, !0);
                            if (n !== Cs || !ls(Us, t) || ls(Ns, t)) {
                                e = Ls(n, t);
                                return !e || !ls(Us, t) || ls(n, Ds) && n[Ds][t] || (e.enumerable = !0),
                                e
                            }
                        },
                        $t = function (t) {
                            var t = Bs(ms(t)),
                            e = [];
                            return Ss(t, function (t) {
                                ls(Us, t) || ls(As, t) || e.push(t)
                            }),
                            e
                        };
                        Kt || (r((Is = function () {
                                    if (this instanceof Is)
                                        throw TypeError("Symbol is not a constructor");
                                    var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                                    e = Es(t),
                                    n = function (t) {
                                        this === Cs && n.call(Ns, t),
                                        ls(this, Ds) && ls(this[Ds], e) && (this[Ds][e] = !1),
                                        qs(this, e, ys(1, t))
                                    };
                                    return ds && zs && qs(Cs, e, {
                                        configurable: !0,
                                        set: n
                                    }),
                                    es(e, t)
                                }).prototype, "toString", function () {
                                return Os(this).tag
                            }), r(Is, "withoutSetter", function (t) {
                                return es(Es(t), t)
                            }), Z.f = is, Yt.f = ns, $e.f = R, on.f = E.f = $t, ws.f = os, ct.f = function (t) {
                            return es(ks(t), t)
                        }, ds && (js(Is.prototype, "description", {
                                    configurable: !0,
                                    get: function () {
                                        return Os(this).description
                                    }
                                }), r(Cs, "propertyIsEnumerable", is, {
                                    unsafe: !0
                                }))),
                        pe({
                            global: !0,
                            wrap: !0,
                            forced: !Kt,
                            sham: !Kt
                        }, {
                            Symbol: Is
                        }),
                        Ss(_s(a), function (t) {
                            xs(t)
                        }),
                        pe({
                            target: Ts,
                            stat: !0,
                            forced: !Kt
                        }, {
                            for : function (t) {
                                var e = String(t);
                                if (ls(Gs, e))
                                    return Gs[e];
                                t = Is(e);
                                return Gs[e] = t,
                                Fs[t] = e,
                                t
                            },
                        keyFor: function (t) {
                            if (!Vs(t))
                                throw TypeError(t + " is not a symbol");
                                if (ls(Fs, t))
                                    return Fs[t]
                            },
                            useSetter: function () {
                                zs = !0
                            },
                            useSimple: function () {
                                zs = !1
                            }
                        }),
                        pe({
                            target: "Object",
                            stat: !0,
                            forced: !Kt,
                            sham: !ds
                        }, {
                            create: function (t, e) {
                                return void 0 === e ? bs(t) : rs(bs(t), e)
                            },
                            defineProperty: ns,
                            defineProperties: rs,
                            getOwnPropertyDescriptor: R
                        }),
                        pe({
                            target: "Object",
                            stat: !0,
                            forced: !Kt
                        }, {
                            getOwnPropertyNames: $t,
                            getOwnPropertySymbols: os
                        }),
                        pe({
                            target: "Object",
                            stat: !0,
                            forced: rn(function () {
                                ws.f(1)
                            })
                        }, {
                            getOwnPropertySymbols: function (t) {
                                return ws.f(gs(t))
                            }
                        }),
                        Ps && pe({
                            target: "JSON",
                            stat: !0,
                            forced: !Kt || rn(function () {
                                var t = Is();
                                return "[null]" != Ps([t]) || "{}" != Ps({
                                    a: t
                                }) || "{}" != Ps(Object(t))
                            })
                        }, {
                            stringify: function (t, e, n) {
                                for (var r, i = [t], o = 1; o < arguments.length; )
                                    i.push(arguments[o++]);
                                if ((fs(r = e) || void 0 !== t) && !Vs(t))
                                    return hs(e) || (e = function (t, e) {
                                        if ("function" == typeof r && (e = r.call(this, t, e)), !Vs(e))
                                            return e
                                    }), i[1] = e, Ps.apply(null, i)
                            }
                        }),
                        Is.prototype[Be] || ye(Is.prototype, Be, Is.prototype.valueOf),
                        xt(Is, Ts),
                        As[Ds] = !0;
                        var Ks,
                        Hs,
                        Ws,
                        $s,
                        Ys,
                        Be = be,
                        Qs = x,
                        Js = p,
                        xt = G.f,
                        Te = Te,
                        Xs = n.Symbol;
                        !o || "function" != typeof Xs || "description" in Xs.prototype && void 0 === Xs().description || (Ks = {}, Te(Hs = function () {
                                var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                                e = this instanceof Hs ? new Xs(t) : void 0 === t ? Xs() : Xs(t);
                                return "" === t && (Ks[e] = !0),
                                e
                            }, Xs), (Te = Hs.prototype = Xs.prototype).constructor = Hs, Ws = Te.toString, $s = "Symbol(test)" == String(Xs("test")), Ys = /^Symbol\((.*)\)[^)]+$/, xt(Te, "description", {
                                configurable: !0,
                                get: function () {
                                    var t = Js(this) ? this.valueOf() : this,
                                    e = Ws.call(t);
                                    if (Qs(Ks, t))
                                        return "";
                                    e = $s ? e.slice(7, -1) : e.replace(Ys, "$1");
                                    return "" === e ? void 0 : e
                                }
                            }), Be({
                                global: !0,
                                forced: !0
                            }, {
                                Symbol: Hs
                            }));
                        var Be = Xt,
                        G = G,
                        Zs = C("unscopables"),
                        tc = Array.prototype;
                        null == tc[Zs] && G.f(tc, Zs, {
                            configurable: !0,
                            value: Be(null)
                        });
                        var Be = function (t) {
                            tc[Zs][t] = !0
                        },
                        ec = ue.includes,
                        ue = Be;
                        be({
                            target: "Array",
                            proto: !0,
                            forced: !Ct("indexOf", {
                                ACCESSORS: !0,
                                1: 0
                            })
                        }, {
                            includes: function (t) {
                                return ec(this, t, 1 < arguments.length ? arguments[1] : void 0)
                            }
                        }),
                        ue("includes");
                        var nc = ar,
                        rc = l;
                        be({
                            target: "String",
                            proto: !0,
                            forced: !Wr("includes")
                        }, {
                            includes: function (t) {
                                return !!~String(rc(this)).indexOf(nc(t), 1 < arguments.length ? arguments[1] : void 0)
                            }
                        });
                        var ue = be,
                        ic = nt.find,
                        ar = Be,
                        Wr = "find",
                        oc = !0,
                        nt = Ct(Wr);
                        Wr in[] && Array(1).find(function () {
                            oc = !1
                        }),
                        ue({
                            target: "Array",
                            proto: !0,
                            forced: oc || !nt
                        }, {
                            find: function (t) {
                                return ic(this, t, 1 < arguments.length ? arguments[1] : void 0)
                            }
                        }),
                        ar(Wr);
                        var ac,
                        sc,
                        cc = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== cc && cc,
                        uc = "URLSearchParams" in cc,
                        dc = "Symbol" in cc && "iterator" in Symbol,
                        lc = "FileReader" in cc && "Blob" in cc && function () {
                            try {
                                return new Blob,
                                !0
                            } catch (t) {
                                return !1
                            }
                        }
                        (),
                        hc = "FormData" in cc,
                        fc = "ArrayBuffer" in cc;
                        function pc(t) {
                            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
                                throw new TypeError("Invalid character in header field name");
                            return t.toLowerCase()
                        }
                        function gc(t) {
                            return t = "string" != typeof t ? String(t) : t
                        }
                        function mc(e) {
                            var t = {
                                next: function () {
                                    var t = e.shift();
                                    return {
                                        done: void 0 === t,
                                        value: t
                                    }
                                }
                            };
                            return dc && (t[Symbol.iterator] = function () {
                                return t
                            }),
                            t
                        }
                        function vc(e) {
                            this.map = {},
                            e instanceof vc ? e.forEach(function (t, e) {
                                this.append(e, t)
                            }, this) : Array.isArray(e) ? e.forEach(function (t) {
                                this.append(t[0], t[1])
                            }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
                                this.append(t, e[t])
                            }, this)
                        }
                        function yc(t) {
                            if (t.bodyUsed)
                                return Promise.reject(new TypeError("Already read"));
                            t.bodyUsed = !0
                        }
                        function bc(n) {
                            return new Promise(function (t, e) {
                                n.onload = function () {
                                    t(n.result)
                                },
                                n.onerror = function () {
                                    e(n.error)
                                }
                            })
                        }
                        function _c(t) {
                            var e = new FileReader,
                            n = bc(e);
                            return e.readAsArrayBuffer(t),
                            n
                        }
                        function wc(t) {
                            if (t.slice)
                                return t.slice(0);
                            var e = new Uint8Array(t.byteLength);
                            return e.set(new Uint8Array(t)),
                            e.buffer
                        }
                        function Ac() {
                            return this.bodyUsed = !1,
                            this._initBody = function (t) {
                                var e;
                                this.bodyUsed = this.bodyUsed,
                                (this._bodyInit = t) ? "string" == typeof t ? this._bodyText = t : lc && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : hc && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : uc && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : fc && lc && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = wc(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : fc && (ArrayBuffer.prototype.isPrototypeOf(t) || sc(t)) ? this._bodyArrayBuffer = wc(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "",
                                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : uc && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                            },
                            lc && (this.blob = function () {
                                var t = yc(this);
                                if (t)
                                    return t;
                                if (this._bodyBlob)
                                    return Promise.resolve(this._bodyBlob);
                                if (this._bodyArrayBuffer)
                                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                                if (this._bodyFormData)
                                    throw new Error("could not read FormData body as blob");
                                return Promise.resolve(new Blob([this._bodyText]))
                            }, this.arrayBuffer = function () {
                                return this._bodyArrayBuffer ? yc(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(_c)
                            }),
                            this.text = function () {
                                var t,
                                e,
                                n = yc(this);
                                if (n)
                                    return n;
                                if (this._bodyBlob)
                                    return t = this._bodyBlob, e = new FileReader, n = bc(e), e.readAsText(t), n;
                                if (this._bodyArrayBuffer)
                                    return Promise.resolve(function (t) {
                                        for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++)
                                            n[r] = String.fromCharCode(e[r]);
                                        return n.join("")
                                    }
                                        (this._bodyArrayBuffer));
                                if (this._bodyFormData)
                                    throw new Error("could not read FormData body as text");
                                return Promise.resolve(this._bodyText)
                            },
                            hc && (this.formData = function () {
                                return this.text().then(xc)
                            }),
                            this.json = function () {
                                return this.text().then(JSON.parse)
                            },
                            this
                        }
                        fc && (ac = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], sc = ArrayBuffer.isView || function (t) {
                            return t && -1 < ac.indexOf(Object.prototype.toString.call(t))
                        }),
                        vc.prototype.append = function (t, e) {
                            t = pc(t),
                            e = gc(e);
                            var n = this.map[t];
                            this.map[t] = n ? n + ", " + e : e
                        },
                        vc.prototype.delete = function (t) {
                            delete this.map[pc(t)]
                        },
                        vc.prototype.get = function (t) {
                            return t = pc(t),
                            this.has(t) ? this.map[t] : null
                        },
                        vc.prototype.has = function (t) {
                            return this.map.hasOwnProperty(pc(t))
                        },
                        vc.prototype.set = function (t, e) {
                            this.map[pc(t)] = gc(e)
                        },
                        vc.prototype.forEach = function (t, e) {
                            for (var n in this.map)
                                this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                        },
                        vc.prototype.keys = function () {
                            var n = [];
                            return this.forEach(function (t, e) {
                                n.push(e)
                            }),
                            mc(n)
                        },
                        vc.prototype.values = function () {
                            var e = [];
                            return this.forEach(function (t) {
                                e.push(t)
                            }),
                            mc(e)
                        },
                        vc.prototype.entries = function () {
                            var n = [];
                            return this.forEach(function (t, e) {
                                n.push([e, t])
                            }),
                            mc(n)
                        },
                        dc && (vc.prototype[Symbol.iterator] = vc.prototype.entries);
                        var Ec = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                        function kc(t, e) {
                            if (!(this instanceof kc))
                                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                            var n,
                            r = (e = e || {}).body;
                            if (t instanceof kc) {
                                if (t.bodyUsed)
                                    throw new TypeError("Already read");
                                this.url = t.url,
                                this.credentials = t.credentials,
                                e.headers || (this.headers = new vc(t.headers)),
                                this.method = t.method,
                                this.mode = t.mode,
                                this.signal = t.signal,
                                r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
                            } else
                                this.url = String(t);
                            if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new vc(e.headers)), this.method = (t = (n = e.method || this.method || "GET").toUpperCase(), -1 < Ec.indexOf(t) ? t : n), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r)
                                throw new TypeError("Body not allowed for GET or HEAD requests");
                            this._initBody(r),
                            "GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache || ((e = /([?&])_=[^&]*/).test(this.url) ? this.url = this.url.replace(e, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime())
                        }
                        function xc(t) {
                            var n = new FormData;
                            return t.trim().split("&").forEach(function (t) {
                                var e;
                                t && (t = (e = t.split("=")).shift().replace(/\+/g, " "), e = e.join("=").replace(/\+/g, " "), n.append(decodeURIComponent(t), decodeURIComponent(e)))
                            }),
                            n
                        }
                        function Sc(t, e) {
                            if (!(this instanceof Sc))
                                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                            e = e || {},
                            this.type = "default",
                            this.status = void 0 === e.status ? 200 : e.status,
                            this.ok = 200 <= this.status && this.status < 300,
                            this.statusText = "statusText" in e ? e.statusText : "",
                            this.headers = new vc(e.headers),
                            this.url = e.url || "",
                            this._initBody(t)
                        }
                        kc.prototype.clone = function () {
                            return new kc(this, {
                                body: this._bodyInit
                            })
                        },
                        Ac.call(kc.prototype),
                        Ac.call(Sc.prototype),
                        Sc.prototype.clone = function () {
                            return new Sc(this._bodyInit, {
                                status: this.status,
                                statusText: this.statusText,
                                headers: new vc(this.headers),
                                url: this.url
                            })
                        },
                        Sc.error = function () {
                            var t = new Sc(null, {
                                status: 0,
                                statusText: ""
                            });
                            return t.type = "error",
                            t
                        };
                        var Dc = [301, 302, 303, 307, 308];
                        Sc.redirect = function (t, e) {
                            if (-1 === Dc.indexOf(e))
                                throw new RangeError("Invalid status code");
                            return new Sc(null, {
                                status: e,
                                headers: {
                                    location: t
                                }
                            })
                        };
                        var Tc = cc.DOMException;
                        try {
                            new Tc
                        } catch (f) {
                            (Tc = function (t, e) {
                                this.message = t,
                                this.name = e;
                                t = Error(t);
                                this.stack = t.stack
                            }).prototype = Object.create(Error.prototype),
                            Tc.prototype.constructor = Tc
                        }
                        function Rc(r, a) {
                            return new Promise(function (i, t) {
                                var e = new kc(r, a);
                                if (e.signal && e.signal.aborted)
                                    return t(new Tc("Aborted", "AbortError"));
                                var o = new XMLHttpRequest;
                                function n() {
                                    o.abort()
                                }
                                o.onload = function () {
                                    var t,
                                    n,
                                    e = {
                                        status: o.status,
                                        statusText: o.statusText,
                                        headers: (t = o.getAllResponseHeaders() || "", n = new vc, t.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function (t) {
                                                return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                                            }).forEach(function (t) {
                                                var e = t.split(":"),
                                                t = e.shift().trim();
                                                t && (e = e.join(":").trim(), n.append(t, e))
                                            }), n)
                                    };
                                    e.url = "responseURL" in o ? o.responseURL : e.headers.get("X-Request-URL");
                                    var r = "response" in o ? o.response : o.responseText;
                                    setTimeout(function () {
                                        i(new Sc(r, e))
                                    }, 0)
                                },
                                o.onerror = function () {
                                    setTimeout(function () {
                                        t(new TypeError("Network request failed"))
                                    }, 0)
                                },
                                o.ontimeout = function () {
                                    setTimeout(function () {
                                        t(new TypeError("Network request failed"))
                                    }, 0)
                                },
                                o.onabort = function () {
                                    setTimeout(function () {
                                        t(new Tc("Aborted", "AbortError"))
                                    }, 0)
                                },
                                o.open(e.method, function (e) {
                                    try {
                                        return "" === e && cc.location.href ? cc.location.href : e
                                    } catch (t) {
                                        return e
                                    }
                                }
                                    (e.url), !0),
                                "include" === e.credentials ? o.withCredentials = !0 : "omit" === e.credentials && (o.withCredentials = !1),
                                "responseType" in o && (lc ? o.responseType = "blob" : fc && e.headers.get("Content-Type") && -1 !== e.headers.get("Content-Type").indexOf("application/octet-stream") && (o.responseType = "arraybuffer")),
                                !a || "object" != typeof a.headers || a.headers instanceof vc ? e.headers.forEach(function (t, e) {
                                    o.setRequestHeader(e, t)
                                }) : Object.getOwnPropertyNames(a.headers).forEach(function (t) {
                                    o.setRequestHeader(t, gc(a.headers[t]))
                                }),
                                e.signal && (e.signal.addEventListener("abort", n), o.onreadystatechange = function () {
                                    4 === o.readyState && e.signal.removeEventListener("abort", n)
                                }),
                                o.send(void 0 === e._bodyInit ? null : e._bodyInit)
                            })
                        }
                        Rc.polyfill = !0,
                        cc.fetch || (cc.fetch = Rc, cc.Headers = vc, cc.Request = kc, cc.Response = Sc);
                        var Oc = "1.12.0",
                        Wr = it,
                        Cc = wt,
                        Ic = N,
                        Pc = l,
                        Lc = nn,
                        jc = Rt,
                        Bc = Vt,
                        Mc = tt,
                        Uc = st,
                        st = i,
                        Nc = [].push,
                        Gc = Math.min,
                        Fc = 4294967295,
                        zc = !st(function () {
                            return !RegExp(Fc, "y")
                        });
                        Wr("split", 2, function (i, p, g) {
                            var m = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function (t, e) {
                                var n = String(Pc(this)),
                                r = void 0 === e ? Fc : e >>> 0;
                                if (0 == r)
                                    return [];
                                if (void 0 === t)
                                    return [n];
                                if (!Cc(t))
                                    return p.call(n, t, r);
                                for (var i, o, a, s = [], e = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), c = 0, u = new RegExp(t.source, e + "g"); (i = Uc.call(u, n)) && !((o = u.lastIndex) > c && (s.push(n.slice(c, i.index)), 1 < i.length && i.index < n.length && Nc.apply(s, i.slice(1)), a = i[0].length, c = o, s.length >= r)); )
                                    u.lastIndex === i.index && u.lastIndex++;
                                return c === n.length ? !a && u.test("") || s.push("") : s.push(n.slice(c)),
                                s.length > r ? s.slice(0, r) : s
                            }
                             : "0".split(void 0, 0).length ? function (t, e) {
                                return void 0 === t && 0 === e ? [] : p.call(this, t, e)
                            }
                             : p;
                            return [function (t, e) {
                                    var n = Pc(this),
                                    r = null == t ? void 0 : t[i];
                                    return void 0 !== r ? r.call(t, n, e) : m.call(String(n), t, e)
                                }, function (t, e) {
                                    var n = g(m, t, this, e, m !== p);
                                    if (n.done)
                                        return n.value;
                                    var r = Ic(t),
                                    i = String(this),
                                    n = Lc(r, RegExp),
                                    o = r.unicode,
                                    t = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (zc ? "y" : "g"),
                                    a = new n(zc ? r : "^(?:" + r.source + ")", t),
                                    s = void 0 === e ? Fc : e >>> 0;
                                    if (0 == s)
                                        return [];
                                    if (0 === i.length)
                                        return null === Mc(a, i) ? [i] : [];
                                    for (var c = 0, u = 0, d = []; u < i.length; ) {
                                        a.lastIndex = zc ? u : 0;
                                        var l,
                                        h = Mc(a, zc ? i : i.slice(u));
                                        if (null === h || (l = Gc(Bc(a.lastIndex + (zc ? 0 : u)), i.length)) === c)
                                            u = jc(i, u, o);
                                        else {
                                            if (d.push(i.slice(c, u)), d.length === s)
                                                return d;
                                            for (var f = 1; f <= h.length - 1; f++)
                                                if (d.push(h[f]), d.length === s)
                                                    return d;
                                            u = c = l
                                        }
                                    }
                                    return d.push(i.slice(c)),
                                    d
                                }
                            ]
                        }, !zc);
                        var qc = N,
                        Vc = Vt,
                        Kc = l,
                        Hc = Rt,
                        Wc = tt;
                        it("match", 1, function (r, c, u) {
                            return [function (t) {
                                    var e = Kc(this),
                                    n = null == t ? void 0 : t[r];
                                    return void 0 !== n ? n.call(t, e) : new RegExp(t)[r](String(e))
                                }, function (t) {
                                    var e = u(c, t, this);
                                    if (e.done)
                                        return e.value;
                                    var n = qc(t),
                                    r = String(this);
                                    if (!n.global)
                                        return Wc(n, r);
                                    for (var i = n.unicode, o = [], a = n.lastIndex = 0; null !== (s = Wc(n, r)); ) {
                                        var s = String(s[0]);
                                        "" === (o[a] = s) && (n.lastIndex = Hc(r, Vc(n.lastIndex), i)),
                                        a++
                                    }
                                    return 0 === a ? null : o
                                }
                            ]
                        });
                        var $c = {},
                        Yc = Object.prototype.hasOwnProperty;
                        function Qc(t) {
                            try {
                                return decodeURIComponent(t.replace(/\+/g, " "))
                            } catch (t) {
                                return null
                            }
                        }
                        function Jc(t) {
                            try {
                                return encodeURIComponent(t)
                            } catch (t) {
                                return null
                            }
                        }
                        $c.stringify = function (t, e) {
                            var n,
                            r,
                            i = [];
                            for (r in "string" != typeof(e = e || "") && (e = "?"), t)
                                if (Yc.call(t, r)) {
                                    if ((n = t[r]) || null != n && !isNaN(n) || (n = ""), r = Jc(r), n = Jc(n), null === r || null === n)
                                        continue;
                                    i.push(r + "=" + n)
                                }
                            return i.length ? e + i.join("&") : ""
                        },
                        $c.parse = function (t) {
                            for (var e = /([^=?#&]+)=?([^&]*)/g, n = {}; i = e.exec(t); ) {
                                var r = Qc(i[1]),
                                i = Qc(i[2]);
                                null === r || null === i || r in n || (n[r] = i)
                            }
                            return n
                        };
                        function Xc(t, e) {
                            if (e = e.split(":")[0], t = +t) {
                                switch (e) {
                                case "http":
                                case "ws":
                                    return 80 !== t;
                                case "https":
                                case "wss":
                                    return 443 !== t;
                                case "ftp":
                                    return 21 !== t;
                                case "gopher":
                                    return 70 !== t;
                                case "file":
                                    return
                                }
                                return 0 !== t
                            }
                        }
                        var Zc = $c,
                        tu = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,
                        eu = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,
                        nu = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");
                        function ru(t) {
                            return (t || "").toString().replace(nu, "")
                        }
                        var iu = [["#", "hash"], ["?", "query"], function (t) {
                                return t.replace("\\", "/")
                            }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
                        ou = {
                            hash: 1,
                            query: 1
                        };
                        function au(t) {
                            var e,
                            n = ("undefined" != typeof window ? window : void 0 !== jt ? jt : "undefined" != typeof self ? self : {}).location || {},
                            r = {},
                            n = typeof(t = t || n);
                            if ("blob:" === t.protocol)
                                r = new cu(unescape(t.pathname), {});
                            else if ("string" == n)
                                for (e in r = new cu(t, {}), ou)
                                    delete r[e];
                            else if ("object" == n) {
                                for (e in t)
                                    e in ou || (r[e] = t[e]);
                                void 0 === r.slashes && (r.slashes = tu.test(t.href))
                            }
                            return r
                        }
                        function su(t) {
                            t = ru(t);
                            t = eu.exec(t);
                            return {
                                protocol: t[1] ? t[1].toLowerCase() : "",
                                slashes: !!(t[2] && 2 <= t[2].length),
                                rest: t[2] && 1 === t[2].length ? "/" + t[3] : t[3]
                            }
                        }
                        function cu(t, e, n) {
                            if (t = ru(t), !(this instanceof cu))
                                return new cu(t, e, n);
                            var r,
                            i,
                            o,
                            a,
                            s,
                            c = iu.slice(),
                            u = typeof e,
                            d = this,
                            l = 0;
                            for ("object" != u && "string" != u && (n = e, e = null), n && "function" != typeof n && (n = Zc.parse), e = au(e), r = !(u = su(t || "")).protocol && !u.slashes, d.slashes = u.slashes || r && e.slashes, d.protocol = u.protocol || e.protocol || "", t = u.rest, u.slashes || (c[3] = [/(.*)/, "pathname"]); l < c.length; l++)
                                "function" != typeof(o = c[l]) ? (i = o[0], s = o[1], i != i ? d[s] = t : "string" == typeof i ? ~(a = t.indexOf(i)) && (t = "number" == typeof o[2] ? (d[s] = t.slice(0, a), t.slice(a + o[2])) : (d[s] = t.slice(a), t.slice(0, a))) : (a = i.exec(t)) && (d[s] = a[1], t = t.slice(0, a.index)), d[s] = d[s] || r && o[3] && e[s] || "", o[4] && (d[s] = d[s].toLowerCase())) : t = o(t);
                            n && (d.query = n(d.query)),
                            r && e.slashes && "/" !== d.pathname.charAt(0) && ("" !== d.pathname || "" !== e.pathname) && (d.pathname = function (t, e) {
                                if ("" === t)
                                    return e;
                                for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), r = n.length, t = n[r - 1], i = !1, o = 0; r--; )
                                    "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), o++) : o && (0 === r && (i = !0), n.splice(r, 1), o--);
                                return i && n.unshift(""),
                                "." !== t && ".." !== t || n.push(""),
                                n.join("/")
                            }
                                (d.pathname, e.pathname)),
                            "/" !== d.pathname.charAt(0) && d.hostname && (d.pathname = "/" + d.pathname),
                            Xc(d.port, d.protocol) || (d.host = d.hostname, d.port = ""),
                            d.username = d.password = "",
                            d.auth && (o = d.auth.split(":"), d.username = o[0] || "", d.password = o[1] || ""),
                            d.origin = d.protocol && d.host && "file:" !== d.protocol ? d.protocol + "//" + d.host : "null",
                            d.href = d.toString()
                        }
                        cu.prototype = {
                            set: function (t, e, n) {
                                var r,
                                i = this;
                                switch (t) {
                                case "query":
                                    "string" == typeof e && e.length && (e = (n || Zc.parse)(e)),
                                    i[t] = e;
                                    break;
                                case "port":
                                    i[t] = e,
                                    Xc(e, i.protocol) ? e && (i.host = i.hostname + ":" + e) : (i.host = i.hostname, i[t] = "");
                                    break;
                                case "hostname":
                                    i[t] = e,
                                    i.port && (e += ":" + i.port),
                                    i.host = e;
                                    break;
                                case "host":
                                    i[t] = e,
                                    /:\d+$/.test(e) ? (e = e.split(":"), i.port = e.pop(), i.hostname = e.join(":")) : (i.hostname = e, i.port = "");
                                    break;
                                case "protocol":
                                    i.protocol = e.toLowerCase(),
                                    i.slashes = !n;
                                    break;
                                case "pathname":
                                case "hash":
                                    e ? (r = "pathname" === t ? "/" : "#", i[t] = e.charAt(0) !== r ? r + e : e) : i[t] = e;
                                    break;
                                default:
                                    i[t] = e
                                }
                                for (var o = 0; o < iu.length; o++) {
                                    var a = iu[o];
                                    a[4] && (i[a[1]] = i[a[1]].toLowerCase())
                                }
                                return i.origin = i.protocol && i.host && "file:" !== i.protocol ? i.protocol + "//" + i.host : "null",
                                i.href = i.toString(),
                                i
                            },
                            toString: function (t) {
                                t && "function" == typeof t || (t = Zc.stringify);
                                var e = this,
                                n = e.protocol;
                                n && ":" !== n.charAt(n.length - 1) && (n += ":");
                                n += e.slashes ? "//" : "";
                                return e.username && (n += e.username, e.password && (n += ":" + e.password), n += "@"),
                                n += e.host + e.pathname,
                                (t = "object" == typeof e.query ? t(e.query) : e.query) && (n += "?" !== t.charAt(0) ? "?" + t : t),
                                e.hash && (n += e.hash),
                                n
                            }
                        },
                        cu.extractProtocol = su,
                        cu.location = au,
                        cu.trimLeft = ru,
                        cu.qs = Zc;
                        var uu = cu,
                        it = {
                            exports: {}
                        };
                        !function (t, e) {
                            var r = "__lodash_hash_undefined__",
                            c = 9007199254740991,
                            p = "[object Arguments]",
                            g = "[object Boolean]",
                            m = "[object Date]",
                            v = "[object Function]",
                            y = "[object GeneratorFunction]",
                            b = "[object Map]",
                            _ = "[object Number]",
                            w = "[object Object]",
                            n = "[object Promise]",
                            A = "[object RegExp]",
                            E = "[object Set]",
                            k = "[object String]",
                            x = "[object Symbol]",
                            i = "[object WeakMap]",
                            S = "[object ArrayBuffer]",
                            D = "[object DataView]",
                            T = "[object Float32Array]",
                            R = "[object Float64Array]",
                            O = "[object Int8Array]",
                            C = "[object Int16Array]",
                            I = "[object Int32Array]",
                            P = "[object Uint8Array]",
                            L = "[object Uint8ClampedArray]",
                            j = "[object Uint16Array]",
                            B = "[object Uint32Array]",
                            M = /\w*$/,
                            o = /^\[object .+?Constructor\]$/,
                            u = /^(?:0|[1-9]\d*)$/,
                            U = {};
                            U[p] = U["[object Array]"] = U[S] = U[D] = U[g] = U[m] = U[T] = U[R] = U[O] = U[C] = U[I] = U[b] = U[_] = U[w] = U[A] = U[E] = U[k] = U[x] = U[P] = U[L] = U[j] = U[B] = !0,
                            U["[object Error]"] = U[v] = U[i] = !1;
                            var a = "object" == typeof jt && jt && jt.Object === Object && jt,
                            s = "object" == typeof self && self && self.Object === Object && self,
                            d = a || s || Function("return this")(),
                            l = e && !e.nodeType && e,
                            h = l && t && !t.nodeType && t,
                            f = h && h.exports === l;
                            function N(t, e) {
                                return t.set(e[0], e[1]),
                                t
                            }
                            function G(t, e) {
                                return t.add(e),
                                t
                            }
                            function F(t, e, n, r) {
                                var i = -1,
                                o = t ? t.length : 0;
                                for (r && o && (n = t[++i]); ++i < o; )
                                    n = e(n, t[i], i, t);
                                return n
                            }
                            function z(t) {
                                var e = !1;
                                if (null != t && "function" != typeof t.toString)
                                    try {
                                        e = !!(t + "")
                                    } catch (t) {}
                                return e
                            }
                            function q(t) {
                                var n = -1,
                                r = Array(t.size);
                                return t.forEach(function (t, e) {
                                    r[++n] = [e, t]
                                }),
                                r
                            }
                            function V(e, n) {
                                return function (t) {
                                    return e(n(t))
                                }
                            }
                            function K(t) {
                                var e = -1,
                                n = Array(t.size);
                                return t.forEach(function (t) {
                                    n[++e] = t
                                }),
                                n
                            }
                            var a = Array.prototype,
                            s = Function.prototype,
                            H = Object.prototype,
                            e = d["__core-js_shared__"],
                            W = (h = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "")) ? "Symbol(src)_1." + h : "",
                            $ = s.toString,
                            Y = H.hasOwnProperty,
                            Q = H.toString,
                            J = RegExp("^" + $.call(Y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            l = f ? d.Buffer : void 0,
                            e = d.Symbol,
                            X = d.Uint8Array,
                            Z = V(Object.getPrototypeOf, Object),
                            tt = Object.create,
                            et = H.propertyIsEnumerable,
                            nt = a.splice,
                            h = Object.getOwnPropertySymbols,
                            s = l ? l.isBuffer : void 0,
                            rt = V(Object.keys, Object),
                            f = Et(d, "DataView"),
                            it = Et(d, "Map"),
                            a = Et(d, "Promise"),
                            l = Et(d, "Set"),
                            d = Et(d, "WeakMap"),
                            ot = Et(Object, "create"),
                            at = Dt(f),
                            st = Dt(it),
                            ct = Dt(a),
                            ut = Dt(l),
                            dt = Dt(d),
                            e = e ? e.prototype : void 0,
                            lt = e ? e.valueOf : void 0;
                            function ht(t) {
                                var e = -1,
                                n = t ? t.length : 0;
                                for (this.clear(); ++e < n; ) {
                                    var r = t[e];
                                    this.set(r[0], r[1])
                                }
                            }
                            function ft(t) {
                                var e = -1,
                                n = t ? t.length : 0;
                                for (this.clear(); ++e < n; ) {
                                    var r = t[e];
                                    this.set(r[0], r[1])
                                }
                            }
                            function pt(t) {
                                var e = -1,
                                n = t ? t.length : 0;
                                for (this.clear(); ++e < n; ) {
                                    var r = t[e];
                                    this.set(r[0], r[1])
                                }
                            }
                            function gt(t) {
                                this.__data__ = new ft(t)
                            }
                            function mt(t, e) {
                                var n,
                                r,
                                i,
                                o = Rt(t) || (r = n = t) && "object" == typeof r && Ot(r) && Y.call(n, "callee") && (!et.call(n, "callee") || Q.call(n) == p) ? function (t, e) {
                                    for (var n = -1, r = Array(t); ++n < t; )
                                        r[n] = e(n);
                                    return r
                                }
                                (t.length, String) : [],
                                a = o.length,
                                s = !!a;
                                for (i in t)
                                    !e && !Y.call(t, i) || s && ("length" == i || function t(e, n) {
                                        return !!(n = null == n ? c : n) && ("number" == typeof e || u.test(e)) && -1 < e && e % 1 == 0 && e < n
                                    }
                                        (i, a)) || o.push(i);
                                return o
                            }
                            function vt(t, e, n) {
                                var r = t[e];
                                Y.call(t, e) && Tt(r, n) && (void 0 !== n || e in t) || (t[e] = n)
                            }
                            function yt(t, e) {
                                for (var n = t.length; n--; )
                                    if (Tt(t[n][0], e))
                                        return n;
                                return -1
                            }
                            function bt(o, a, s, c, t, e, u) {
                                var d;
                                if (void 0 !== (d = c ? e ? c(o, t, e, u) : c(o) : d))
                                    return d;
                                if (!Pt(o))
                                    return o;
                                var n,
                                r = Rt(o);
                                if (r) {
                                    if (t = (n = o).length, i = n.constructor(t), t && "string" == typeof n[0] && Y.call(n, "index") && (i.index = n.index, i.input = n.input), d = i, !a)
                                        return function (t, e) {
                                            var n = -1,
                                            r = t.length;
                                            for (e = e || Array(r); ++n < r; )
                                                e[n] = t[n];
                                            return e
                                        }
                                    (o, d)
                                } else {
                                    var l = xt(o),
                                    i = l == v || l == y;
                                    if (Ct(o))
                                        return function (t) {
                                            if (a)
                                                return t.slice();
                                            var e = new t.constructor(t.length);
                                            return t.copy(e),
                                            e
                                        }
                                    (o);
                                    if (l == w || l == p || i && !e) {
                                        if (z(o))
                                            return e ? o : {};
                                        if (d = "function" != typeof(i = i ? {}
                                                     : o).constructor || St(i) ? {}
                                             : Pt(i = Z(i)) ? tt(i) : {}, !a)
                                            return i = o, f = (f = d) && wt(o, Lt(o), f), wt(i, kt(i), f)
                                    } else {
                                        if (!U[l])
                                            return e ? o : {};
                                        d = function (t, e, n) {
                                            var r,
                                            i,
                                            o,
                                            a,
                                            s = t.constructor;
                                            switch (l) {
                                            case S:
                                                return _t(t);
                                            case g:
                                            case m:
                                                return new s(+t);
                                            case D:
                                                return o = t,
                                                a = n ? _t(o.buffer) : o.buffer,
                                                new o.constructor(a, o.byteOffset, o.byteLength);
                                            case T:
                                            case R:
                                            case O:
                                            case C:
                                            case I:
                                            case P:
                                            case L:
                                            case j:
                                            case B:
                                                return a = t,
                                                o = n ? _t(a.buffer) : a.buffer,
                                                new a.constructor(o, a.byteOffset, a.length);
                                            case b:
                                                return i = t,
                                                F(n ? e(q(i), !0) : q(i), N, new i.constructor);
                                            case _:
                                            case k:
                                                return new s(t);
                                            case A:
                                                return (r = new(i = t).constructor(i.source, M.exec(i))).lastIndex = i.lastIndex,
                                                r;
                                            case E:
                                                return r = t,
                                                F(n ? e(K(r), !0) : K(r), G, new r.constructor);
                                            case x:
                                                return lt ? Object(lt.call(t)) : {}
                                            }
                                        }
                                        (o, bt, a)
                                    }
                                }
                                var h,
                                f = (u = u || new gt).get(o);
                                return f || (u.set(o, d), function (t) {
                                    for (var e, n, r = -1, i = t ? t.length : 0; ++r < i && !1 !== (e = t[r], n = r, h && (e = o[n = e]), void vt(d, n, bt(e, a, s, c, n, o, u))); );
                                }
                                    ((h = !r ? s ? (e = kt, r = Lt(f = o), Rt(f) ? r : function (t, e) {
                                                for (var n = -1, r = e.length, i = t.length; ++n < r; )
                                                    t[i + n] = e[n];
                                                return t
                                            }
                                                    (r, e(f))) : Lt(o) : h) || o), d)
                            }
                            function _t(t) {
                                var e = new t.constructor(t.byteLength);
                                return new X(e).set(new X(t)),
                                e
                            }
                            function wt(t, e, n, r) {
                                n = n || {};
                                for (var i = -1, o = e.length; ++i < o; ) {
                                    var a = e[i],
                                    s = r ? r(n[a], t[a], a, n, t) : void 0;
                                    vt(n, a, void 0 === s ? t[a] : s)
                                }
                                return n
                            }
                            function At(t, e) {
                                var n = t.__data__;
                                return ("string" == (t = typeof e) || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e) ? n["string" == typeof e ? "string" : "hash"] : n.map
                            }
                            function Et(t, e) {
                                e = null == t ? void 0 : t[e];
                                return function t(e) {
                                    return Pt(e) && !(W && W in e) && (It(e) || z(e) ? J : o).test(Dt(e))
                                }
                                (e) ? e : void 0
                            }
                            ht.prototype.clear = function () {
                                this.__data__ = ot ? ot(null) : {}
                            },
                            ht.prototype.delete = function (t) {
                                return this.has(t) && delete this.__data__[t]
                            },
                            ht.prototype.get = function (t) {
                                var e = this.__data__;
                                if (ot) {
                                    var n = e[t];
                                    return n === r ? void 0 : n
                                }
                                return Y.call(e, t) ? e[t] : void 0
                            },
                            ht.prototype.has = function (t) {
                                var e = this.__data__;
                                return ot ? void 0 !== e[t] : Y.call(e, t)
                            },
                            ht.prototype.set = function (t, e) {
                                return this.__data__[t] = ot && void 0 === e ? r : e,
                                this
                            },
                            ft.prototype.clear = function () {
                                this.__data__ = []
                            },
                            ft.prototype.delete = function (t) {
                                var e = this.__data__,
                                t = yt(e, t);
                                return !(t < 0 || (t == e.length - 1 ? e.pop() : nt.call(e, t, 1), 0))
                            },
                            ft.prototype.get = function (t) {
                                var e = this.__data__,
                                t = yt(e, t);
                                return t < 0 ? void 0 : e[t][1]
                            },
                            ft.prototype.has = function (t) {
                                return -1 < yt(this.__data__, t)
                            },
                            ft.prototype.set = function (t, e) {
                                var n = this.__data__,
                                r = yt(n, t);
                                return r < 0 ? n.push([t, e]) : n[r][1] = e,
                                this
                            },
                            pt.prototype.clear = function () {
                                this.__data__ = {
                                    hash: new ht,
                                    map: new(it || ft),
                                    string: new ht
                                }
                            },
                            pt.prototype.delete = function (t) {
                                return At(this, t).delete(t)
                            },
                            pt.prototype.get = function (t) {
                                return At(this, t).get(t)
                            },
                            pt.prototype.has = function (t) {
                                return At(this, t).has(t)
                            },
                            pt.prototype.set = function (t, e) {
                                return At(this, t).set(t, e),
                                this
                            },
                            gt.prototype.clear = function () {
                                this.__data__ = new ft
                            },
                            gt.prototype.delete = function (t) {
                                return this.__data__.delete(t)
                            },
                            gt.prototype.get = function (t) {
                                return this.__data__.get(t)
                            },
                            gt.prototype.has = function (t) {
                                return this.__data__.has(t)
                            },
                            gt.prototype.set = function (t, e) {
                                var n = this.__data__;
                                if (n instanceof ft) {
                                    var r = n.__data__;
                                    if (!it || r.length < 199)
                                        return r.push([t, e]), this;
                                    n = this.__data__ = new pt(r)
                                }
                                return n.set(t, e),
                                this
                            };
                            var kt = h ? V(h, Object) : function () {
                                return []
                            },
                            xt = function (t) {
                                return Q.call(t)
                            };
                            function St(t) {
                                var e = t && t.constructor;
                                return t === ("function" == typeof e && e.prototype || H)
                            }
                            function Dt(t) {
                                if (null != t) {
                                    try {
                                        return $.call(t)
                                    } catch (t) {}
                                    try {
                                        return t + ""
                                    } catch (t) {}
                                }
                                return ""
                            }
                            function Tt(t, e) {
                                return t === e || t != t && e != e
                            }
                            (f && xt(new f(new ArrayBuffer(1))) != D || it && xt(new it) != b || a && xt(a.resolve()) != n || l && xt(new l) != E || d && xt(new d) != i) && (xt = function (t) {
                                var e = Q.call(t),
                                t = e == w ? t.constructor : void 0,
                                t = t ? Dt(t) : void 0;
                                if (t)
                                    switch (t) {
                                    case at:
                                        return D;
                                    case st:
                                        return b;
                                    case ct:
                                        return n;
                                    case ut:
                                        return E;
                                    case dt:
                                        return i
                                    }
                                return e
                            });
                            var Rt = Array.isArray;
                            function Ot(t) {
                                return null != t && ("number" == typeof(e = t.length) && -1 < e && e % 1 == 0 && e <= c) && !It(t);
                                var e
                            }
                            var Ct = s || function () {
                                return !1
                            };
                            function It(t) {
                                t = Pt(t) ? Q.call(t) : "";
                                return t == v || t == y
                            }
                            function Pt(t) {
                                var e = typeof t;
                                return t && ("object" == e || "function" == e)
                            }
                            function Lt(t) {
                                return (Ot(t) ? mt : function (t) {
                                    if (!St(t))
                                        return rt(t);
                                    var e,
                                    n = [];
                                    for (e in Object(t))
                                        Y.call(t, e) && "constructor" != e && n.push(e);
                                    return n
                                })(t)
                            }
                            t.exports = function (t) {
                                return bt(t, !0, !0)
                            }
                        }
                        (it, it.exports);
                        var du = it.exports;
                        function lu(t) {
                            return "[object Object]" === Object.prototype.toString.call(t)
                        }
                        function hu(t) {
                            return !1 !== lu(t) && (void 0 === (t = t.constructor) || !1 !== lu(t = t.prototype) && !1 !== t.hasOwnProperty("isPrototypeOf"))
                        }
                        function fu(t) {
                            if (t) {
                                var e = bu.call(t);
                                return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
                            }
                        }
                        var pu = String.prototype.valueOf,
                        gu = Object.prototype.toString,
                        mu = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                        it = Array.isArray,
                        vu = Object.prototype.toString,
                        yu = it || function (t) {
                            return !!t && "[object Array]" == vu.call(t)
                        },
                        bu = Object.prototype.toString,
                        it = {
                            exports: {}
                        },
                        _u = it,
                        wu = it.exports;
                        (function (i, l) {
                            function o(t, e) {
                                if ("object" == typeof t && (e = t, t = l), !(this instanceof o))
                                    return new o(t, e).getResult();
                                var n = t || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                                r = e ? g.extend(y, e) : y;
                                return this.getBrowser = function () {
                                    var t = {
                                        name: l,
                                        version: l
                                    };
                                    return m.rgx.call(t, n, r.browser),
                                    t.major = g.major(t.version),
                                    t
                                },
                                this.getCPU = function () {
                                    var t = {
                                        architecture: l
                                    };
                                    return m.rgx.call(t, n, r.cpu),
                                    t
                                },
                                this.getDevice = function () {
                                    var t = {
                                        vendor: l,
                                        model: l,
                                        type: l
                                    };
                                    return m.rgx.call(t, n, r.device),
                                    t
                                },
                                this.getEngine = function () {
                                    var t = {
                                        name: l,
                                        version: l
                                    };
                                    return m.rgx.call(t, n, r.engine),
                                    t
                                },
                                this.getOS = function () {
                                    var t = {
                                        name: l,
                                        version: l
                                    };
                                    return m.rgx.call(t, n, r.os),
                                    t
                                },
                                this.getResult = function () {
                                    return {
                                        ua: this.getUA(),
                                        browser: this.getBrowser(),
                                        engine: this.getEngine(),
                                        os: this.getOS(),
                                        device: this.getDevice(),
                                        cpu: this.getCPU()
                                    }
                                },
                                this.getUA = function () {
                                    return n
                                },
                                this.setUA = function (t) {
                                    return n = t,
                                    this
                                },
                                this
                            }
                            var h = "function",
                            t = "model",
                            e = "name",
                            n = "type",
                            r = "vendor",
                            a = "version",
                            s = "architecture",
                            c = "console",
                            u = "mobile",
                            d = "tablet",
                            f = "smarttv",
                            p = "wearable",
                            g = {
                                extend: function (t, e) {
                                    var n,
                                    r = {};
                                    for (n in t)
                                        e[n] && e[n].length % 2 == 0 ? r[n] = e[n].concat(t[n]) : r[n] = t[n];
                                    return r
                                },
                                has: function (t, e) {
                                    return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
                                },
                                lowerize: function (t) {
                                    return t.toLowerCase()
                                },
                                major: function (t) {
                                    return "string" == typeof t ? t.replace(/[^\d\.]/g, "").split(".")[0] : l
                                },
                                trim: function (t) {
                                    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                                }
                            },
                            m = {
                                rgx: function (t, e) {
                                    for (var n, r, i, o, a, s = 0; s < e.length && !o; ) {
                                        for (var c = e[s], u = e[s + 1], d = n = 0; d < c.length && !o; )
                                            if (o = c[d++].exec(t))
                                                for (r = 0; r < u.length; r++)
                                                    a = o[++n], "object" == typeof(i = u[r]) && 0 < i.length ? 2 == i.length ? typeof i[1] == h ? this[i[0]] = i[1].call(this, a) : this[i[0]] = i[1] : 3 == i.length ? typeof i[1] != h || i[1].exec && i[1].test ? this[i[0]] = a ? a.replace(i[1], i[2]) : l : this[i[0]] = a ? i[1].call(this, a, i[2]) : l : 4 == i.length && (this[i[0]] = a ? i[3].call(this, a.replace(i[1], i[2])) : l) : this[i] = a || l;
                                        s += 2
                                    }
                                },
                                str: function (t, e) {
                                    for (var n in e)
                                        if ("object" == typeof e[n] && 0 < e[n].length) {
                                            for (var r = 0; r < e[n].length; r++)
                                                if (g.has(e[n][r], t))
                                                    return "?" === n ? l : n
                                        } else if (g.has(e[n], t))
                                            return "?" === n ? l : n;
                                    return t
                                }
                            },
                            v = {
                                browser: {
                                    oldsafari: {
                                        version: {
                                            "1.0": "/8",
                                            1.2: "/1",
                                            1.3: "/3",
                                            "2.0": "/412",
                                            "2.0.2": "/416",
                                            "2.0.3": "/417",
                                            "2.0.4": "/419",
                                            "?": "/"
                                        }
                                    }
                                },
                                device: {
                                    amazon: {
                                        model: {
                                            "Fire Phone": ["SD", "KF"]
                                        }
                                    },
                                    sprint: {
                                        model: {
                                            "Evo Shift 4G": "7373KT"
                                        },
                                        vendor: {
                                            HTC: "APA",
                                            Sprint: "Sprint"
                                        }
                                    }
                                },
                                os: {
                                    windows: {
                                        version: {
                                            ME: "4.90",
                                            "NT 3.11": "NT3.51",
                                            "NT 4.0": "NT4.0",
                                            2e3: "NT 5.0",
                                            XP: ["NT 5.1", "NT 5.2"],
                                            Vista: "NT 6.0",
                                            7: "NT 6.1",
                                            8: "NT 6.2",
                                            8.1: "NT 6.3",
                                            10: ["NT 6.4", "NT 10.0"],
                                            RT: "ARM"
                                        }
                                    }
                                }
                            },
                            y = {
                                browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [e, a], [/(opios)[\/\s]+([\w\.]+)/i], [[e, "Opera Mini"], a], [/\s(opr)\/([\w\.]+)/i], [[e, "Opera"], a], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [e, a], [/(konqueror)\/([\w\.]+)/i], [[e, "Konqueror"], a], [/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i], [[e, "IE"], a], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [[e, "Edge"], a], [/(yabrowser)\/([\w\.]+)/i], [[e, "Yandex"], a], [/(Avast)\/([\w\.]+)/i], [[e, "Avast Secure Browser"], a], [/(AVG)\/([\w\.]+)/i], [[e, "AVG Secure Browser"], a], [/(puffin)\/([\w\.]+)/i], [[e, "Puffin"], a], [/(focus)\/([\w\.]+)/i], [[e, "Firefox Focus"], a], [/(opt)\/([\w\.]+)/i], [[e, "Opera Touch"], a], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[e, "UCBrowser"], a], [/(comodo_dragon)\/([\w\.]+)/i], [[e, /_/g, " "], a], [/(windowswechat qbcore)\/([\w\.]+)/i], [[e, "WeChat(Win) Desktop"], a], [/(micromessenger)\/([\w\.]+)/i], [[e, "WeChat"], a], [/(brave)\/([\w\.]+)/i], [[e, "Brave"], a], [/(whale)\/([\w\.]+)/i], [[e, "Whale"], a], [/(qqbrowserlite)\/([\w\.]+)/i], [e, a], [/(QQ)\/([\d\.]+)/i], [e, a], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [e, a], [/(baiduboxapp)[\/\s]?([\w\.]+)/i], [e, a], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [e, a], [/(MetaSr)[\/\s]?([\w\.]+)/i], [e], [/(LBBROWSER)/i], [e], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [a, [e, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [a, [e, "Facebook"]], [/FBAN\/FBIOS|FB_IAB\/FB4A/i], [[e, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [e, a], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [a, [e, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[e, /(.+)/, "$1 WebView"], a], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[e, /(.+(?:g|us))(.+)/, "$1 $2"], a], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [a, [e, "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [[e, "Sailfish Browser"], a], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [e, a], [/(dolfin)\/([\w\.]+)/i], [[e, "Dolphin"], a], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[e, "360 Browser"]], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[e, "Chrome"], a], [/(coast)\/([\w\.]+)/i], [[e, "Opera Coast"], a], [/fxios\/([\w\.-]+)/i], [a, [e, "Firefox"]], [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i], [a, [e, "Mobile Safari"]], [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i], [a, e], [/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i], [[e, "GSA"], a], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [e, [a, m.str, v.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [e, a], [/(navigator|netscape)\/([\w\.-]+)/i], [[e, "Netscape"], a], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [e, a]],
                                cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[s, "amd64"]], [/(ia32(?=;))/i], [[s, g.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[s, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[s, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[s, /ower/, "", g.lowerize]], [/(sun4\w)[;\)]/i], [[s, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[s, g.lowerize]]],
                                device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [t, r, [n, d]], [/applecoremedia\/[\w\.]+ \((ipad)/], [t, [r, "Apple"], [n, d]], [/(apple\s{0,1}tv)/i], [[t, "Apple TV"], [r, "Apple"], [n, f]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [r, t, [n, d]], [/(kf[A-z]+)(\sbuild\/|\)).+silk\//i], [t, [r, "Amazon"], [n, d]], [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i], [[t, m.str, v.device.amazon.model], [r, "Amazon"], [n, u]], [/android.+aft([bms])\sbuild/i], [t, [r, "Amazon"], [n, f]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [t, r, [n, u]], [/\((ip[honed|\s\w*]+);/i], [t, [r, "Apple"], [n, u]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [r, t, [n, u]], [/\(bb10;\s(\w+)/i], [t, [r, "BlackBerry"], [n, u]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [t, [r, "Asus"], [n, d]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[r, "Sony"], [t, "Xperia Tablet"], [n, d]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [t, [r, "Sony"], [n, u]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [r, t, [n, c]], [/android.+;\s(shield)\sbuild/i], [t, [r, "Nvidia"], [n, c]], [/(playstation\s[34portablevi]+)/i], [t, [r, "Sony"], [n, c]], [/(sprint\s(\w+))/i], [[r, m.str, v.device.sprint.vendor], [t, m.str, v.device.sprint.model], [n, u]], [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [r, [t, /_/g, " "], [n, u]], [/(nexus\s9)/i], [t, [r, "HTC"], [n, d]], [/d\/huawei([\w\s-]+)[;\)]/i, /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i], [t, [r, "Huawei"], [n, u]], [/android.+(bah2?-a?[lw]\d{2})/i], [t, [r, "Huawei"], [n, d]], [/(microsoft);\s(lumia[\s\w]+)/i], [r, t, [n, u]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [t, [r, "Microsoft"], [n, c]], [/(kin\.[onetw]{3})/i], [[t, /\./g, " "], [r, "Microsoft"], [n, u]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [t, [r, "Motorola"], [n, u]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [t, [r, "Motorola"], [n, d]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[r, g.trim], [t, g.trim], [n, f]], [/hbbtv.+maple;(\d+)/i], [[t, /^/, "SmartTV"], [r, "Samsung"], [n, f]], [/\(dtv[\);].+(aquos)/i], [t, [r, "Sharp"], [n, f]], [/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[r, "Samsung"], t, [n, d]], [/smart-tv.+(samsung)/i], [r, [n, f], t], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[r, "Samsung"], t, [n, u]], [/sie-(\w*)/i], [t, [r, "Siemens"], [n, u]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[r, "Nokia"], t, [n, u]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [t, [r, "Acer"], [n, d]], [/android.+([vl]k\-?\d{3})\s+build/i], [t, [r, "LG"], [n, d]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[r, "LG"], t, [n, d]], [/linux;\snetcast.+smarttv/i, /lg\snetcast\.tv-201\d/i], [[r, "LG"], t, [n, f]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [t, [r, "LG"], [n, u]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], [r, t, [n, d]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [t, [r, "Lenovo"], [n, d]], [/(lenovo)[_\s-]?([\w-]+)/i], [r, t, [n, u]], [/linux;.+((jolla));/i], [r, t, [n, u]], [/((pebble))app\/[\d\.]+\s/i], [r, t, [n, p]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [r, t, [n, u]], [/crkey/i], [[t, "Chromecast"], [r, "Google"], [n, f]], [/android.+;\s(glass)\s\d/i], [t, [r, "Google"], [n, p]], [/android.+;\s(pixel c)[\s)]/i], [t, [r, "Google"], [n, d]], [/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i], [t, [r, "Google"], [n, u]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i, /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i], [[t, /_/g, " "], [r, "Xiaomi"], [n, u]], [/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i], [[t, /_/g, " "], [r, "Xiaomi"], [n, d]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [t, [r, "Meizu"], [n, u]], [/(mz)-([\w-]{2,})/i], [[r, "Meizu"], t, [n, u]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i], [t, [r, "OnePlus"], [n, u]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [t, [r, "RCA"], [n, d]], [/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i], [t, [r, "Dell"], [n, d]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [t, [r, "Verizon"], [n, d]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[r, "Barnes & Noble"], t, [n, d]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [t, [r, "NuVision"], [n, d]], [/android.+;\s(k88)\sbuild/i], [t, [r, "ZTE"], [n, d]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [t, [r, "Swiss"], [n, u]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [t, [r, "Swiss"], [n, d]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [t, [r, "Zeki"], [n, d]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[r, "Dragon Touch"], t, [n, d]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [t, [r, "Insignia"], [n, d]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [t, [r, "NextBook"], [n, d]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[r, "Voice"], t, [n, u]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[r, "LvTel"], t, [n, u]], [/android.+;\s(PH-1)\s/i], [t, [r, "Essential"], [n, u]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [t, [r, "Envizen"], [n, d]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [r, t, [n, d]], [/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i], [t, [r, "MachSpeed"], [n, d]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [r, t, [n, d]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [t, [r, "Rotor"], [n, d]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [r, t, [n, d]], [/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i], [t, [n, u]], [/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i], [t, [n, d]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[n, g.lowerize], r, t], [/[\s\/\(](smart-?tv)[;\)]/i], [[n, f]], [/(android[\w\.\s\-]{0,9});.+build/i], [t, [r, "Generic"]]],
                                engine: [[/windows.+\sedge\/([\w\.]+)/i], [a, [e, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [a, [e, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [e, a], [/rv\:([\w\.]{1,9}).+(gecko)/i], [a, e]],
                                os: [[/microsoft\s(windows)\s(vista|xp)/i], [e, a], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [e, [a, m.str, v.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[e, "Windows"], [a, m.str, v.os.windows.version]], [/\((bb)(10);/i], [[e, "BlackBerry"], a], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], [e, a], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[e, "Symbian"], a], [/\((series40);/i], [e], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[e, "Firefox OS"], a], [/crkey\/([\d\.]+)/i], [a, [e, "Chromecast"]], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [e, a], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[e, "Chromium OS"], a], [/(sunos)\s?([\w\.\d]*)/i], [[e, "Solaris"], a], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [e, a], [/(haiku)\s(\w+)/i], [e, a], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[a, /_/g, "."], [e, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[e, "Mac OS"], [a, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [e, a]]
                            };
                            o.VERSION = "0.7.23",
                            o.BROWSER = {
                                NAME: e,
                                MAJOR: "major",
                                VERSION: a
                            },
                            o.CPU = {
                                ARCHITECTURE: s
                            },
                            o.DEVICE = {
                                MODEL: t,
                                VENDOR: r,
                                TYPE: n,
                                CONSOLE: c,
                                MOBILE: u,
                                SMARTTV: f,
                                TABLET: d,
                                WEARABLE: p,
                                EMBEDDED: "embedded"
                            },
                            o.ENGINE = {
                                NAME: e,
                                VERSION: a
                            },
                            o.OS = {
                                NAME: e,
                                VERSION: a
                            },
                            (wu = _u.exports ? _u.exports = o : wu).UAParser = o;
                            var b,
                            _ = i && (i.jQuery || i.Zepto);
                            _ && !_.ua && (b = new o, _.ua = b.getResult(), _.ua.get = function () {
                                return b.getUA()
                            }, _.ua.set = function (t) {
                                b.setUA(t);
                                var e,
                                n = b.getResult();
                                for (e in n)
                                    _.ua[e] = n[e]
                            })
                        })("object" == typeof window ? window : jt);
                        var Au,
                        Eu = it.exports,
                        ku = {
                            exports: {}
                        };
                        Au = ku,
                        it = "undefined" != typeof self ? self : "undefined" != typeof window ? window : jt,
                        Au.exports = function (e) {
                            function n(t) {
                                if (t.length < 2)
                                    return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? d(192 | e >>> 6) + d(128 | 63 & e) : d(224 | e >>> 12 & 15) + d(128 | e >>> 6 & 63) + d(128 | 63 & e);
                                var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                                return d(240 | e >>> 18 & 7) + d(128 | e >>> 12 & 63) + d(128 | e >>> 6 & 63) + d(128 | 63 & e)
                            }
                            function r(t) {
                                var e = [0, 2, 1][t.length % 3],
                                t = t.charCodeAt(0) << 16 | (1 < t.length ? t.charCodeAt(1) : 0) << 8 | (2 < t.length ? t.charCodeAt(2) : 0);
                                return [u.charAt(t >>> 18), u.charAt(t >>> 12 & 63), 2 <= e ? "=" : u.charAt(t >>> 6 & 63), 1 <= e ? "=" : u.charAt(63 & t)].join("")
                            }
                            function i(t) {
                                return f(h(String(t)))
                            }
                            function c(t) {
                                return t.replace(/[+\/]/g, function (t) {
                                    return "+" == t ? "-" : "_"
                                }).replace(/=/g, "")
                            }
                            function o(t, e) {
                                return e ? c(i(t)) : i(t)
                            }
                            var t,
                            a = (e = e || {}).Base64,
                            u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                            s = function (t) {
                                for (var e = {}, n = 0, r = t.length; n < r; n++)
                                    e[t.charAt(n)] = n;
                                return e
                            }
                            (u),
                            d = String.fromCharCode,
                            l = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                            h = function (t) {
                                return t.replace(l, n)
                            },
                            f = e.btoa && "function" == typeof e.btoa ? function (t) {
                                return e.btoa(t)
                            }
                             : function (t) {
                                if (t.match(/[^\x00-\xFF]/))
                                    throw new RangeError("The string contains invalid characters.");
                                return t.replace(/[\s\S]{1,3}/g, r)
                            };
                            e.Uint8Array && (t = function (t, e) {
                                for (var n = "", r = 0, i = t.length; r < i; r += 3) {
                                    var o = t[r],
                                    a = t[r + 1],
                                    s = t[r + 2],
                                    o = o << 16 | a << 8 | s;
                                    n += u.charAt(o >>> 18) + u.charAt(o >>> 12 & 63) + (void 0 !== a ? u.charAt(o >>> 6 & 63) : "=") + (void 0 !== s ? u.charAt(63 & o) : "=")
                                }
                                return e ? c(n) : n
                            });
                            function p(t) {
                                switch (t.length) {
                                case 4:
                                    var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                                    return d(55296 + (e >>> 10)) + d(56320 + (1023 & e));
                                case 3:
                                    return d((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                                default:
                                    return d((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
                                }
                            }
                            function g(t) {
                                var e = t.length,
                                n = e % 4,
                                t = (0 < e ? s[t.charAt(0)] << 18 : 0) | (1 < e ? s[t.charAt(1)] << 12 : 0) | (2 < e ? s[t.charAt(2)] << 6 : 0) | (3 < e ? s[t.charAt(3)] : 0);
                                return (t = [d(t >>> 16), d(t >>> 8 & 255), d(255 & t)]).length -= [0, 0, 2, 1][n],
                                t.join("")
                            }
                            function m(t) {
                                return A(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""))
                            }
                            function v(t) {
                                return String(t).replace(/[-_]/g, function (t) {
                                    return "-" == t ? "+" : "/"
                                }).replace(/[^A-Za-z0-9\+\/]/g, "")
                            }
                            function y(t) {
                                return t = v(t),
                                w(A(t))
                            }
                            var b,
                            _ = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                            w = function (t) {
                                return t.replace(_, p)
                            },
                            A = e.atob && "function" == typeof e.atob ? function (t) {
                                return e.atob(t)
                            }
                             : function (t) {
                                return t.replace(/\S{1,4}/g, g)
                            };
                            e.Uint8Array && (b = function (t) {
                                return Uint8Array.from(m(v(t)), function (t) {
                                    return t.charCodeAt(0)
                                })
                            });
                            var E;
                            return e.Base64 = {
                                VERSION: "2.6.4",
                                atob: m,
                                btoa: f,
                                fromBase64: y,
                                toBase64: o,
                                utob: h,
                                encode: o,
                                encodeURI: function (t) {
                                    return o(t, !0)
                                },
                                btou: w,
                                decode: y,
                                noConflict: function () {
                                    var t = e.Base64;
                                    return e.Base64 = a,
                                    t
                                },
                                fromUint8Array: t,
                                toUint8Array: b
                            },
                            "function" == typeof Object.defineProperty && (E = function (t) {
                                return {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }, e.Base64.extendString = function () {
                                Object.defineProperty(String.prototype, "fromBase64", E(function () {
                                        return y(this)
                                    })),
                                Object.defineProperty(String.prototype, "toBase64", E(function (t) {
                                        return o(this, t)
                                    })),
                                Object.defineProperty(String.prototype, "toBase64URI", E(function () {
                                        return o(this, !0)
                                    }))
                            }),
                            e.Meteor && (Base64 = e.Base64),
                            Au.exports && (Au.exports.Base64 = e.Base64), {
                                Base64: e.Base64
                            }
                        }
                        (it);
                        var xu = {
                            Rewarded: "rewarded",
                            Interstitial: "interstitial",
                            Preroll: "interstitial",
                            Midroll: "interstitial",
                            Display: "display"
                        };
                        function Su(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && null !== e[n] && void 0 !== e[n] && (t[n] = e[n]);
                            return t
                        }
                        function Du(t, e) {
                            e = e || window.location.href,
                            e = new RegExp("[?&]" + t + "=([^&#]*)", "i").exec(e);
                            return e ? e[1] : null
                        }
                        function Tu() {
                            for (var t, e = /\+/g, n = /([^&=]+)=?([^&]*)/g, r = function (t) {
                                return decodeURIComponent(t.toLowerCase().replace(e, " "))
                            }, i = window.location.search.substring(1), o = {}; t = n.exec(i); )
                                o[r(t[1])] = r(t[2]);
                            return o
                        }
                        function Ru(t) {
                            for (; function t(e) {
                                return (e = e || "") !== decodeURIComponent(e)
                            }
                                (t); )
                                t = decodeURIComponent(t);
                            return t
                        }
                        function Ou(o, a, s) {
                            return new Promise(function (t, e) {
                                var n,
                                r,
                                i;
                                s && s.exists && s.exists() ? t() : (r = (n = s && s.alternates && 0 < s.alternates.length ? function (t) {
                                    if (t && t.length) {
                                        var e = document.querySelectorAll("script");
                                        if (e)
                                            for (var n in e) {
                                                n = e[n];
                                                if (t.includes(n.src))
                                                    return n
                                            }
                                    }
                                }
                                        (s.alternates) : void 0) || document.createElement("script"), i = s && s.error_prefix ? s.error_prefix : "Failed:", r.onload = function () {
                                    s && s.exists && !s.exists() ? e("".concat(i, " ").concat(o)) : t()
                                }, r.onerror = function () {
                                    e("".concat(i, " ").concat(o))
                                }, n || (r.type = "text/javascript", r.async = !0, r.src = o, r.id = a, document.head.appendChild(r)))
                            })
                        }
                        function Cu() {
                            var t = 0,
                            e = window;
                            try {
                                for (; e != e.parent; )
                                    t++, e = e.parent
                            } catch (t) {}
                            return t
                        }
                        function Iu(t, e) {
                            return function t(e) {
                                return localStorage.getItem(e)
                            }
                            (t) ? "true" === (t = localStorage.getItem(t)) || !0 === t || 1 === t || "1" === t : e
                        }
                        function Pu(t) {
                            localStorage.removeItem(t)
                        }
                        function Lu(t, e) {
                            localStorage.setItem(t, e)
                        }
                        var ju = function () {
                            var t = Date.now();
                            try {
                                return localStorage.setItem(t, t),
                                localStorage.removeItem(t),
                                !0
                            } catch (t) {
                                return !1
                            }
                        }
                        (),
                        Bu = Date.now(),
                        Mu = {
                            console: !1
                        };
                        function Uu(t, e, n) {
                            try {
                                var r,
                                i;
                                (ju && Iu("gd_debug_ex") || Mu && !0 === Mu.console) && (r = "error" === n ? "background: #c4161e; color: #fff" : "warning" === n ? "background: #ff8c1c; color: #fff" : "info" === n ? "background: #ff0080; color: #fff" : "background: #44a5ab; color: #fff", i = console.log("[" + (Date.now() - Bu) / 1e3 + "s]%c %c %c gdsdk %c %c %c " + t + " ", "background: #9854d8", "background: #6c2ca7", "color: #fff; background: #450f78;", "background: #6c2ca7", "background: #9854d8", r, void 0 !== e ? e : ""), console.log.apply(console, i))
                            } catch (t) {
                                console.log(t)
                            }
                        }
                        var Nu = ["SDK_READY", "SDK_ERROR", "SDK_LB_LOGIN", "SDK_SHW_LB", "SDK_GAME_START", "SDK_GAME_PAUSE", "SDK_GDPR_TRACKING", "SDK_GDPR_TARGETING", "SDK_GDPR_THIRD_PARTY", "AD_SDK_MANAGER_READY", "AD_SDK_CANCELED", "AD_IS_ALREADY_RUNNING"],
                        Gu = ["AD_ERROR", "AD_BREAK_READY", "AD_METADATA", "ALL_ADS_COMPLETED", "CLICK", "COMPLETE", "CONTENT_PAUSE_REQUESTED", "CONTENT_RESUME_REQUESTED", "DURATION_CHANGE", "FIRST_QUARTILE", "IMPRESSION", "INTERACTION", "LINEAR_CHANGED", "LOADED", "LOG", "MIDPOINT", "PAUSED", "RESUMED", "SKIPPABLE_STATE_CHANGED", "SKIPPED", "STARTED", "THIRD_QUARTILE", "USER_CLOSE", "VOLUME_CHANGED", "VOLUME_MUTED", "DISPLAYAD_IMPRESSION", "DISPLAYAD_ERROR"],
                        Fu = 1010,
                        zu = 1020,
                        qu = 1100,
                        Vu = null,
                        Ku = (Vn(id, [{
                                        key: "_getListenerIdx",
                                        value: function (t, e, n) {
                                            var r,
                                            i = this.listeners[t],
                                            o = -1;
                                            if (!i || 0 === i.length)
                                                return o;
                                            for (r = 0; r < i.length; r++)
                                                if (i[r].callback === e && (!n || n === i[r].scope)) {
                                                    o = r;
                                                    break
                                                }
                                            return o
                                        }
                                    }, {
                                        key: "subscribe",
                                        value: function (t, e, n) {
                                            if (!t)
                                                throw new Error("Event name cannot be null or undefined.");
                                            if (!e || "function" != typeof e)
                                                throw new Error("Listener must be of type function.");
                                            0 <= this._getListenerIdx(t, e, n) ? console.log(t, n) : (n = {
                                                    callback: e,
                                                    scope: n
                                                }, this.listeners[t] = this.listeners[t] || [], this.listeners[t].push(n))
                                        }
                                    }, {
                                        key: "unsubscribeScope",
                                        value: function (t) {
                                            for (var e = Object.keys(this.listeners), n = 0; n < e.length; n++) {
                                                for (var r = e[n], i = this.listeners[r], o = 0; o < i.length; o++)
                                                    i[o].scope === t && (i.splice(o, 1), o--);
                                                0 === i.length && delete this.listeners[r]
                                            }
                                        }
                                    }, {
                                        key: "broadcast",
                                        value: function (t, e) {
                                            var n = this.listeners[t];
                                            t && this.listeners[t] && ((e = e || {}).name = e.name || t, n.forEach(function (t) {
                                                    t.callback.call(t.scope, e, t.scope)
                                                }))
                                        }
                                    }, {
                                        key: "printScope",
                                        value: function (t) {
                                            for (var e = Object.keys(this.listeners), n = 0; n < e.length; n++)
                                                for (var r = e[n], i = this.listeners[r], o = 0; o < i.length; o++)
                                                    i[o].scope === t && console.log(r, t)
                                        }
                                    }
                                ]), id),
                        Hu = (Vn(rd, [{
                                        key: "transform",
                                        value: function (t, e) {
                                            t = du(t);
                                            return this.transformValue(t, e)
                                        }
                                    }, {
                                        key: "transformValue",
                                        value: function (e, t) {
                                            if (hu(e) || yu(e))
                                                for (var n in e)
                                                    e[n] = this.transformValue(e[n], t);
                                            else if ("string" == typeof(c = e) || "object" == typeof c && (mu ? function (t) {
                                                    try {
                                                        return pu.call(t),
                                                        !0
                                                    } catch (t) {
                                                        return !1
                                                    }
                                                }
                                                    (c) : "[object String]" === gu.call(c))) {
                                                var r,
                                                i,
                                                o,
                                                a = /\{\{(\w+)\}\}/g,
                                                s = [];
                                                do {}
                                                while ((r = a.exec(e)) && (r[0], i = r[1], void 0 !== (o = this.getMacroKeyValue(i, t)) && s.push({
                                                            key: i,
                                                            value: o
                                                        })), r);
                                                0 < s.length && s.forEach(function (t) {
                                                    e = e.replace(new RegExp("{{" + t.key + "}}", "g"), t.value)
                                                })
                                            }
                                            var c;
                                            return e
                                        }
                                    }, {
                                        key: "getMacroKeyValue",
                                        value: function (t, e) {
                                            switch (t) {
                                            case "CACHEBUSTER":
                                                return Date.now();
                                            case "GAME_ID":
                                                return this.game.gameId;
                                            case "GAME_TITLE":
                                                return this.game.title;
                                            case "COUNTRY_CODE":
                                                return this.game.ctry;
                                            case "PAGE_URL":
                                                return this.bridge.parentURL;
                                            case "PAGE_URL_ESC":
                                                return encodeURIComponent(this.bridge.parentURL);
                                            case "PAGE_URL_ESC_ESC":
                                                return encodeURIComponent(encodeURIComponent(this.bridge.parentURL));
                                            case "DOMAIN_MATCHED":
                                                return this.bridge.domainMatched ? 1 : 0;
                                            case "DOMAIN_PARENT":
                                                return this.bridge.parentDomain;
                                            case "DOMAIN_TOP":
                                                return this.bridge.topDomain;
                                            case "DEPTH":
                                            case "GAME_DEPTH":
                                                return this.bridge.depth;
                                            default:
                                                if (e && fu(e.get))
                                                    return e.get(t)
                                            }
                                        }
                                    }
                                ]), rd),
                        Wu = (Vn(nd, [{
                                        key: "send",
                                        value: function (t, e) {
                                            if (!this._config.isCoreSDKMode) {
                                                var n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                                                r = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                                                r -= r % 64,
                                                this._size = "".concat(n -= n % 64, " x ").concat(r);
                                                r = this._topic_counter[t] || 0;
                                                this._topic_counter[t] = ++r;
                                                e = {
                                                    gmid: this._config.gameId,
                                                    tdmn: this._config.topDomain,
                                                    domn: this._config.domain,
                                                    rfrr: this._config.referrer,
                                                    lthr: this._config.hours,
                                                    ctry: this._config.country,
                                                    dpth: this._config.depth,
                                                    vers: this._config.version,
                                                    trac: this._config.tracking,
                                                    whlb: this._config.whitelabel,
                                                    plat: this._config.platform,
                                                    tpct: r,
                                                    args: e,
                                                    ttle: document.title,
                                                    size: this._size,
                                                    brnm: this._ua.browser.name,
                                                    brmj: this._ua.browser.major,
                                                    osnm: this._ua.os.name,
                                                    osvr: this._ua.os.version,
                                                    dvmd: this._ua.device.model,
                                                    byld: this._config.byloader,
                                                    bylv: this._config.byloaderVersion,
                                                    imgu: this._config.isMasterGameURL,
                                                    iegu: this._config.isExtHostedGameURL,
                                                    itgu: this._config.isTokenGameURL,
                                                    cmpe: !1,
                                                    host: window.location.hostname
                                                };
                                                "undefined" != typeof idhb && void 0 !== idhb.iabCmpExists() && (e.cmpe = idhb.iabCmpExists());
                                                try {
                                                    e = encodeURIComponent(ku.exports.Base64.encode(JSON.stringify([e]))),
                                                    fetch(this._url + "?tp=com.gdsdk.".concat(t, "&ar=").concat(e, "&ts=").concat(Date.now()))
                                                } catch (t) {}
                                            }
                                        }
                                    }, {
                                        key: "setGameData",
                                        value: function (t) {
                                            this._gameData = t,
                                            this._config.country = t.ctry
                                        }
                                    }
                                ]), nd),
                        $u = null,
                        Yu = (Vn(ed, [{
                                        key: "start",
                                        value: function () {
                                            var t = "\n            #gdsdk__console_container {\n                display: flex;\n                box-sizing: border-box;\n                padding: 3px;\n                background: linear-gradient(90deg,#3d1b5d,#5c3997);\n                box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);\n                color: #fff;\n                font-family: Helvetica, Arial, sans-serif;\n                font-size: 8px;\n            }\n            #gdsdk__console_container button {\n                flex: 1;\n                background: #44a5ab;\n                padding: 3px 10px;\n                margin: 2px;\n                border: 0;\n                border-radius: 3px;\n                color: #fff;\n                outline: 0;\n                cursor: pointer;\n                font-size: 8px;\n                box-shadow: 0 0 0 transparent;\n                text-shadow: 0 0 0 transparent;\n                text-overflow: ellipsis;\n                overflow: hidden;\n                white-space: nowrap;\n            }\n            #gdsdk__console_container button:hover {\n                background: #4fb3b9;\n            }\n            #gdsdk__console_container button:active {\n                background: #62bbc0;\n            }\n        ",
                                            e = document.head || document.getElementsByTagName("head")[0],
                                            n = document.createElement("style");
                                            n.type = "text/css",
                                            n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)),
                                            e.appendChild(n);
                                            var r = document.body || document.getElementsByTagName("body")[0],
                                            i = document.createElement("div");
                                            i.id = "gdsdk__console",
                                            i.style.position = "fixed",
                                            i.style.zIndex = qu,
                                            i.style.bottom = "0",
                                            i.style.left = "0",
                                            i.style.width = "100%",
                                            i.innerHTML = '\n            <div id="gdsdk__console_container">\n                <button id="gdsdk__hbgdDebug">Activate hbgd debug</button>\n                <button id="gdsdk__hbgdConfig">Log idhb config</button>\n                \x3c!--\n                <button id="gdsdk__resumeGame">Resume</button>\n                <button id="gdsdk__pauseGame">Pause</button>\n                --\x3e\n                <button id="gdsdk__showLeaderboard">LeaderBoard</button>\n                <button id="gdsdk__showInterstitial">Interstitial</button>\n                <button id="gdsdk__showRewarded">Rewarded</button>\n                \x3c!--\n                <button id="gdsdk__preloadRewarded">Preload rewarded</button>\n                --\x3e\n                <button id="gdsdk__cancel">Cancel</button>\n                <button id="gdsdk__demo">Demo VAST tag</button>\n                <button id="gdsdk__disableMidrollTimer">Disable delay</button>\n                <button id="gdsdk__closeDebug">Close</button>\n            </div>\n        ',
                                            r.appendChild(i);
                                            var o = document.getElementById("gdsdk__showLeaderboard"),
                                            a = document.getElementById("gdsdk__showInterstitial"),
                                            s = document.getElementById("gdsdk__showRewarded"),
                                            c = document.getElementById("gdsdk__cancel"),
                                            t = document.getElementById("gdsdk__demo"),
                                            e = document.getElementById("gdsdk__disableMidrollTimer"),
                                            n = document.getElementById("gdsdk__hbgdDebug"),
                                            r = document.getElementById("gdsdk__hbgdConfig"),
                                            i = document.getElementById("gdsdk__closeDebug");
                                            Iu("gd_tag") ? (t.innerHTML = "Revert Vast tag", t.style.background = "#ff8c1c") : (t.innerHTML = "Demo VAST tag", t.style.background = "#44a5ab"),
                                            Iu("gd_disable_midroll_timer") ? (e.innerHTML = "Revert delay", e.style.background = "#ff8c1c") : (e.innerHTML = "Disable delay", e.style.background = "#44a5ab"),
                                            Iu("gd_hb_debug") ? (n.innerHTML = "Revert HB Debug", n.style.background = "#ff8c1c") : (n.innerHTML = "HB Debug", n.style.background = "#44a5ab"),
                                            o.addEventListener("click", function () {
                                                window.gdsdk.showLeaderBoard().catch(function (t) {})
                                            }),
                                            a.addEventListener("click", function () {
                                                window.gdsdk.showAd(xu.Interstitial).catch(function (t) {})
                                            }),
                                            s.addEventListener("click", function () {
                                                window.gdsdk.showAd(xu.Rewarded).catch(function (t) {})
                                            }),
                                            c.addEventListener("click", function () {
                                                window.gdsdk.cancelAd().then(function (t) {}).catch(function (t) {})
                                            }),
                                            t.addEventListener("click", function () {
                                                try {
                                                    Iu("gd_tag") ? Pu("gd_tag") : Lu("gd_tag", !0),
                                                    location.reload()
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            }),
                                            e.addEventListener("click", function () {
                                                try {
                                                    Iu("gd_disable_midroll_timer") ? Pu("gd_disable_midroll_timer") : Lu("gd_disable_midroll_timer", !0),
                                                    location.reload()
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            }),
                                            i.addEventListener("click", function () {
                                                try {
                                                    Iu("gd_debug_ex") ? Pu("gd_debug_ex") : Lu("gd_debug_ex", !0),
                                                    location.reload()
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            }),
                                            n.addEventListener("click", function () {
                                                try {
                                                    Iu("gd_hb_debug") ? Pu("gd_hb_debug") : Lu("gd_hb_debug", !0),
                                                    window.idhb && window.idhb.debug(!(!ju || !Iu("gd_hb_debug"))),
                                                    location.reload()
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            }),
                                            r.addEventListener("click", function () {
                                                try {
                                                    var t = window.idhb.getConfig();
                                                    console.info(t)
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            })
                                        }
                                    }
                                ]), ed),
                        Qu = (Vn(td, [{
                                        key: "_getFakeCustomParams",
                                        value: function () {
                                            var t,
                                            e = {
                                                _vid: ["bla_bla1", "bla_bla2", "bla_bla3"],
                                                _1ld: ["1ld_1", "1ld_2", "1ld_3", "1ld_4"],
                                                _1lp: ["1lp_1", "1lp_2"]
                                            },
                                            n = {};
                                            for (t in e) {
                                                var r = e[t];
                                                n[t] = r[Math.floor(Math.random() * r.length)]
                                            }
                                            return n
                                        }
                                    }, {
                                        key: "checkCustomParams",
                                        value: function () {
                                            try {
                                                var t = {};
                                                if (this.gameData.diagnostic && this.gameData.diagnostic.cp && this.gameData.diagnostic.cp.disabledd) {
                                                    var e,
                                                    n = new uu(location.href, !0);
                                                    for (e in n.query)
                                                        t[e] = n.query[e];
                                                    return Object.keys(t).length,
                                                    t
                                                }
                                            } catch (t) {
                                                console.log("_checkCustomParams.Error", t)
                                            }
                                        }
                                    }
                                ]), td),
                        Ju = (Vn(Zu, [{
                                        key: "show",
                                        value: function () {
                                            this.adResumeButton.style.display = "block",
                                            this.adResumeButtonOverlay.style.display = "block"
                                        }
                                    }, {
                                        key: "hide",
                                        value: function () {
                                            this.adResumeButton.style.display = "none",
                                            this.adResumeButtonOverlay.style.display = "none"
                                        }
                                    }, {
                                        key: "add",
                                        value: function () {
                                            var t = this;
                                            try {
                                                var e = document.createElement("div");
                                                (this.adResumeButton = e).id = "gd__resume__button",
                                                e.setAttribute("title", "Resume"),
                                                this.addStyles(),
                                                e.classList.add("gd__resume__button"),
                                                e.addEventListener("click", function () {
                                                    f(this, t),
                                                    this.onResume()
                                                }
                                                    .bind(this)),
                                                this.adContainer.appendChild(e);
                                                var n = document.createElement("div");
                                                (this.adResumeButtonOverlay = n).id = "gd__resume__button__overlay",
                                                n.classList.add("gd__resume__button__overlay"),
                                                this.adContainer.appendChild(n)
                                            } catch (t) {
                                                console.log("Resume button add error", t)
                                            }
                                        }
                                    }, {
                                        key: "addStyles",
                                        value: function () {
                                            var t = document.body || document.getElementsByTagName("body")[0];
                                            this.addStylesheet("gd__resume__button__style", t, '\n                        .gd__resume__button{\n                          background-image: url("https://img.gamedistribution.com/play-black.svg");\n                          background-color:white;                      \n                          width: 120px;\n                          height: 120px;\n                          position: absolute;\n                          display: none;\n                          z-index: 2000;\n                          cursor: pointer;\n                          top: calc(50% - 60px);\n                          left: calc(50% - 60px);\n                          margin: 0;\n                          border-radius: 50%;\n                          border: 2px solid white;\n                          animation: play-button 1s ease-in-out infinite alternate;\n                          -webkit-animation: play-button 1s ease-in-out infinite alternate;\n                        }\n    \n                        .gd__resume__button__overlay {\n                          position: fixed;\n                          display: none;\n                          width: 100%;\n                          height: 100%;\n                          top: 0;\n                          left: 0;\n                          right: 0;\n                          bottom: 0;\n                          background-color: rgba(0,0,0,0.5);\n                          z-index: 1999;\n                          cursor: pointer;\n                        }\n                        @keyframes play-button {\n                          0% {\n                              transform: scale(1.0);\n                              -webkit-transform: scale(1.0);\n                          }\n                          100% {\n                              transform: scale(1.1);\n                              -webkit-transform: scale(1.1);\n                          }\n                      }\n                        .gd__resume__button:hover{\n                          filter: invert(100%) sepia(51%) saturate(0%) hue-rotate(346deg) brightness(104%) contrast(100%);                      \n                        }\n                        ')
                                        }
                                    }, {
                                        key: "addStylesheet",
                                        value: function (t, e, n) {
                                            var r;
                                            document.getElementById(t) || ((r = document.createElement("style")).type = "text/css", r.id = t, r.styleSheet ? r.styleSheet.cssText = n : r.appendChild(document.createTextNode(n)), e.appendChild(r))
                                        }
                                    }
                                ]), Zu),
                        Xu = (new Blob([new Uint8Array([255, 227, 24, 196, 0, 0, 0, 3, 72, 1, 64, 0, 0, 4, 132, 16, 31, 227, 192, 225, 76, 255, 67, 12, 255, 221, 27, 255, 228, 97, 73, 63, 255, 195, 131, 69, 192, 232, 223, 255, 255, 207, 102, 239, 255, 255, 255, 101, 158, 206, 70, 20, 59, 255, 254, 95, 70, 149, 66, 4, 16, 128, 0, 2, 2, 32, 240, 138, 255, 36, 106, 183, 255, 227, 24, 196, 59, 11, 34, 62, 80, 49, 135, 40, 0, 253, 29, 191, 209, 200, 141, 71, 7, 255, 252, 152, 74, 15, 130, 33, 185, 6, 63, 255, 252, 195, 70, 203, 86, 53, 15, 255, 255, 247, 103, 76, 121, 64, 32, 47, 255, 34, 227, 194, 209, 138, 76, 65, 77, 69, 51, 46, 57, 55, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 255, 227, 24, 196, 73, 13, 153, 210, 100, 81, 135, 56, 0, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170])], {
                                type: "audio/mpeg"
                            }), new Blob([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], {
                                type: "video/mp4"
                            }));
                        function Zu(t, e) {
                            zn(this, Zu),
                            this.adContainer = t,
                            this.onResume = e
                        }
                        function td(t) {
                            zn(this, td),
                            this.gameData = t
                        }
                        function ed(t) {
                            if (zn(this, ed), $u)
                                return $u;
                            ($u = this).eventBus = new Ku,
                            this._sdk = t
                        }
                        function nd(t) {
                            zn(this, nd),
                            this._config = t || {},
                            this._url = t.url || "https://msgrt.gamedistribution.com/collect",
                            this._topic_counter = {},
                            this._ua = (new Eu).getResult()
                        }
                        function rd(t) {
                            zn(this, rd),
                            this.game = t.game,
                            this.bridge = t.bridge
                        }
                        function id() {
                            if (zn(this, id), Vu)
                                return Vu;
                            (Vu = this).listeners = {}
                        }
                        function od(t) {
                            return Object.assign({
                                muted: !1,
                                timeout: 250,
                                inline: !1
                            }, t)
                        }
                        function ad(t, e) {
                            var r,
                            n = t.muted,
                            i = t.timeout,
                            t = t.inline,
                            e = e(),
                            o = e.element,
                            e = e.source,
                            a = void 0,
                            s = void 0;
                            return !0 === (o.muted = n) && o.setAttribute("muted", "muted"),
                            !0 === t && o.setAttribute("playsinline", "playsinline"),
                            o.src = e,
                            new Promise(function (n) {
                                a = o.play(),
                                r = setTimeout(function () {
                                    s(!1, new Error("Timeout " + i + " ms has been reached"))
                                }, i),
                                s = function (t) {
                                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    clearTimeout(r),
                                    n({
                                        result: t,
                                        error: e
                                    })
                                },
                                void 0 !== a ? a.then(function () {
                                    return s(!0)
                                }).catch(function (t) {
                                    return s(!1, t)
                                }) : s(!0)
                            })
                        }
                        var sd = function (t) {
                            return ad(t = od(t), function () {
                                return {
                                    element: document.createElement("video"),
                                    source: URL.createObjectURL(Xu)
                                }
                            })
                        },
                        it = {
                            exports: {}
                        };
                        !function (t, e) {
                            var r = "__lodash_hash_undefined__",
                            i = 9007199254740991,
                            n = "[object Arguments]",
                            o = "[object Function]",
                            f = "[object Object]",
                            a = /^\[object .+?Constructor\]$/,
                            s = /^(?:0|[1-9]\d*)$/,
                            c = {};
                            c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0,
                            c[n] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c[o] = c["[object Map]"] = c["[object Number]"] = c[f] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1;
                            var u = "object" == typeof jt && jt && jt.Object === Object && jt,
                            d = "object" == typeof self && self && self.Object === Object && self,
                            l = u || d || Function("return this")(),
                            h = e && !e.nodeType && e,
                            p = h && t && !t.nodeType && t,
                            g = p && p.exports === h,
                            m = g && u.process,
                            d = function () {
                                try {
                                    return p && p.require && p.require("util").types || m && m.binding && m.binding("util")
                                } catch (t) {}
                            }
                            (),
                            e = d && d.isTypedArray;
                            var v,
                            y,
                            h = Array.prototype,
                            u = Function.prototype,
                            b = Object.prototype,
                            d = l["__core-js_shared__"],
                            _ = u.toString,
                            w = b.hasOwnProperty,
                            A = (d = /[^.]+$/.exec(d && d.keys && d.keys.IE_PROTO || "")) ? "Symbol(src)_1." + d : "",
                            E = b.toString,
                            k = _.call(Object),
                            x = RegExp("^" + _.call(w).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            d = g ? l.Buffer : void 0,
                            g = l.Symbol,
                            S = l.Uint8Array,
                            D = (d && d.allocUnsafe, v = Object.getPrototypeOf, y = Object, function (t) {
                            return v(y(t))
                        }),
                            T = Object.create,
                            R = b.propertyIsEnumerable,
                            O = h.splice,
                            C = g ? g.toStringTag : void 0,
                            I = function () {
                                try {
                                    var t = J(Object, "defineProperty");
                                    return t({}, "", {}),
                                    t
                                } catch (t) {}
                            }
                            (),
                            d = d ? d.isBuffer : void 0,
                            P = Math.max,
                            L = Date.now,
                            j = J(l, "Map"),
                            B = J(Object, "create"),
                            M = function (t) {
                                if (!ht(t))
                                    return {};
                                if (T)
                                    return T(t);
                                U.prototype = t;
                                t = new U;
                                return U.prototype = void 0,
                                t
                            };
                            function U() {}
                            function N(t) {
                                var e = -1,
                                n = null == t ? 0 : t.length;
                                for (this.clear(); ++e < n; ) {
                                    var r = t[e];
                                    this.set(r[0], r[1])
                                }
                            }
                            function G(t) {
                                var e = -1,
                                n = null == t ? 0 : t.length;
                                for (this.clear(); ++e < n; ) {
                                    var r = t[e];
                                    this.set(r[0], r[1])
                                }
                            }
                            function F(t) {
                                var e = -1,
                                n = null == t ? 0 : t.length;
                                for (this.clear(); ++e < n; ) {
                                    var r = t[e];
                                    this.set(r[0], r[1])
                                }
                            }
                            function z(t) {
                                t = this.__data__ = new G(t);
                                this.size = t.size
                            }
                            function q(t, e, n) {
                                (void 0 === n || ot(t[e], n)) && (void 0 !== n || e in t) || K(t, e, n)
                            }
                            function V(t, e) {
                                for (var n = t.length; n--; )
                                    if (ot(t[n][0], e))
                                        return n;
                                return -1
                            }
                            function K(t, e, n) {
                                "__proto__" == e && I ? I(t, e, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: n,
                                    writable: !0
                                }) : t[e] = n
                            }
                            N.prototype.clear = function () {
                                this.__data__ = B ? B(null) : {},
                                this.size = 0
                            },
                            N.prototype.delete = function (t) {
                                t = this.has(t) && delete this.__data__[t];
                                return this.size -= t ? 1 : 0,
                                t
                            },
                            N.prototype.get = function (t) {
                                var e = this.__data__;
                                if (B) {
                                    var n = e[t];
                                    return n === r ? void 0 : n
                                }
                                return w.call(e, t) ? e[t] : void 0
                            },
                            N.prototype.has = function (t) {
                                var e = this.__data__;
                                return B ? void 0 !== e[t] : w.call(e, t)
                            },
                            N.prototype.set = function (t, e) {
                                var n = this.__data__;
                                return this.size += this.has(t) ? 0 : 1,
                                n[t] = B && void 0 === e ? r : e,
                                this
                            },
                            G.prototype.clear = function () {
                                this.__data__ = [],
                                this.size = 0
                            },
                            G.prototype.delete = function (t) {
                                var e = this.__data__,
                                t = V(e, t);
                                return !(t < 0 || (t == e.length - 1 ? e.pop() : O.call(e, t, 1), --this.size, 0))
                            },
                            G.prototype.get = function (t) {
                                var e = this.__data__,
                                t = V(e, t);
                                return t < 0 ? void 0 : e[t][1]
                            },
                            G.prototype.has = function (t) {
                                return -1 < V(this.__data__, t)
                            },
                            G.prototype.set = function (t, e) {
                                var n = this.__data__,
                                r = V(n, t);
                                return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e,
                                this
                            },
                            F.prototype.clear = function () {
                                this.size = 0,
                                this.__data__ = {
                                    hash: new N,
                                    map: new(j || G),
                                    string: new N
                                }
                            },
                            F.prototype.delete = function (t) {
                                t = Q(this, t).delete(t);
                                return this.size -= t ? 1 : 0,
                                t
                            },
                            F.prototype.get = function (t) {
                                return Q(this, t).get(t)
                            },
                            F.prototype.has = function (t) {
                                return Q(this, t).has(t)
                            },
                            F.prototype.set = function (t, e) {
                                var n = Q(this, t),
                                r = n.size;
                                return n.set(t, e),
                                this.size += n.size == r ? 0 : 1,
                                this
                            },
                            z.prototype.clear = function () {
                                this.__data__ = new G,
                                this.size = 0
                            },
                            z.prototype.delete = function (t) {
                                var e = this.__data__,
                                t = e.delete(t);
                                return this.size = e.size,
                                t
                            },
                            z.prototype.get = function (t) {
                                return this.__data__.get(t)
                            },
                            z.prototype.has = function (t) {
                                return this.__data__.has(t)
                            },
                            z.prototype.set = function (t, e) {
                                var n = this.__data__;
                                if (n instanceof G) {
                                    var r = n.__data__;
                                    if (!j || r.length < 199)
                                        return r.push([t, e]), this.size = ++n.size, this;
                                    n = this.__data__ = new F(r)
                                }
                                return n.set(t, e),
                                this.size = n.size,
                                this
                            };
                            var H = function (t, e, n) {
                                for (var r = -1, i = Object(t), o = n(t), a = o.length; a--; ) {
                                    var s = o[++r];
                                    if (!1 === e(i[s], s, i))
                                        break
                                }
                                return t
                            };
                            function W(t) {
                                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : C && C in Object(t) ? function (t) {
                                    var e = w.call(t, C),
                                    n = t[C];
                                    try {
                                        var r = !(t[C] = void 0)
                                    } catch (t) {}
                                    var i = E.call(t);
                                    return r && (e ? t[C] = n : delete t[C]),
                                    i
                                }
                                (t) : E.call(t)
                            }
                            function $(t) {
                                return ft(t) && W(t) == n
                            }
                            function Y(r, i, o, a, s) {
                                r !== i && H(i, function (t, e) {
                                    var n;
                                    s = s || new z,
                                    ht(t) ? function (t, e, n, r, i, o, a) {
                                        var s = tt(t, n),
                                        c = tt(e, n),
                                        u = a.get(c);
                                        if (u)
                                            return q(t, n, u);
                                        var d,
                                        l = o ? o(s, c, n + "", t, e, a) : void 0,
                                        h = void 0 === l;
                                        h && (u = !(d = st(c)) && ut(c), e = !d && !u && gt(c), l = c, d || u || e ? l = st(s) ? s : ft(d = s) && ct(d) ? function (t, e) {
                                            var n = -1,
                                            r = t.length;
                                            for (e = e || Array(r); ++n < r; )
                                                e[n] = t[n];
                                            return e
                                        }
                                            (s) : u ? (h = !1, c.slice()) : e ? (h = !1, e = new(u = (d = c).buffer).constructor(u.byteLength), new S(e).set(new S(u)), new d.constructor(e, d.byteOffset, d.length)) : [] : function (t) {
                                            if (ft(t) && W(t) == f) {
                                                t = D(t);
                                                if (null === t)
                                                    return 1;
                                                t = w.call(t, "constructor") && t.constructor;
                                                return "function" == typeof t && t instanceof t && _.call(t) == k
                                            }
                                        }
                                            (c) || at(c) ? at(l = s) ? l = function (t, e, n) {
                                            var r = !n;
                                            n = n || {};
                                            for (var i = -1, o = e.length; ++i < o; ) {
                                                var a = e[i],
                                                s = void 0;
                                                (r ? K : function t(e, n, r) {
                                                    var i = e[n];
                                                    w.call(e, n) && ot(i, r) && (void 0 !== r || n in e) || K(e, n, r)
                                                })(n, a, s = void 0 === s ? t[a] : s)
                                            }
                                            return n
                                        }
                                            (s, mt(s)) : ht(s) && !dt(s) || (l = "function" != typeof c.constructor || Z(c) ? {}
                                                 : M(D(c))) : h = !1),
                                        h && (a.set(c, l), i(l, c, r, o, a), a.delete(c)),
                                        q(t, n, l)
                                    }
                                    (r, i, e, o, Y, a, s) : (n = a ? a(tt(r, e), t, e + "", r, i, s) : void 0, q(r, e, n = void 0 === n ? t : n))
                                }, mt)
                            }
                            function Q(t, e) {
                                var n = t.__data__;
                                return ("string" == (t = typeof e) || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e) ? n["string" == typeof e ? "string" : "hash"] : n.map
                            }
                            function J(t, e) {
                                e = null == t ? void 0 : t[e];
                                return function t(e) {
                                    return ht(e) && !(A && A in e) && (dt(e) ? x : a).test(function (t) {
                                        if (null != t) {
                                            try {
                                                return _.call(t)
                                            } catch (t) {}
                                            try {
                                                return t + ""
                                            } catch (t) {}
                                        }
                                        return ""
                                    }
                                        (e))
                                }
                                (e) ? e : void 0
                            }
                            function X(t, e) {
                                var n = typeof t;
                                return (e = null == e ? i : e) && ("number" == n || "symbol" != n && s.test(t)) && -1 < t && t % 1 == 0 && t < e
                            }
                            function Z(t) {
                                var e = t && t.constructor;
                                return t === ("function" == typeof e && e.prototype || b)
                            }
                            function tt(t, e) {
                                if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e)
                                    return t[e]
                            }
                            var et,
                            nt,
                            rt,
                            it = (et = I ? function (t, e) {
                            return I(t, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: (n = e, function () {
                                    return n
                                }),
                                writable: !0
                            });
                            var n
                        }
                                 : yt, rt = nt = 0, function () {
                            var t = L(),
                            e = 16 - (t - rt);
                            if (rt = t, 0 < e) {
                                if (800 <= ++nt)
                                    return arguments[0]
                            } else
                                nt = 0;
                            return et.apply(void 0, arguments)
                        });
                            function ot(t, e) {
                                return t === e || t != t && e != e
                            }
                            var at = $(function () {
                                return arguments
                            }
                                    ()) ? $ : function (t) {
                                return ft(t) && w.call(t, "callee") && !R.call(t, "callee")
                            },
                            st = Array.isArray;
                            function ct(t) {
                                return null != t && lt(t.length) && !dt(t)
                            }
                            var ut = d || function () {
                                return !1
                            };
                            function dt(t) {
                                if (ht(t)) {
                                    t = W(t);
                                    return t == o || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
                                }
                            }
                            function lt(t) {
                                return "number" == typeof t && -1 < t && t % 1 == 0 && t <= i
                            }
                            function ht(t) {
                                var e = typeof t;
                                return null != t && ("object" == e || "function" == e)
                            }
                            function ft(t) {
                                return null != t && "object" == typeof t
                            }
                            var pt,
                            gt = e ? (pt = e, function (t) {
                                return pt(t)
                            }) : function (t) {
                                return ft(t) && lt(t.length) && !!c[W(t)]
                            };
                            function mt(t) {
                                return ct(t) ? function t(e, n) {
                                    var r,
                                    i = st(e),
                                    o = !i && at(e),
                                    a = !i && !o && ut(e),
                                    s = !i && !o && !a && gt(e),
                                    c = i || o || a || s,
                                    u = c ? function (t, e) {
                                        for (var n = -1, r = Array(t); ++n < t; )
                                            r[n] = e(n);
                                        return r
                                    }
                                    (e.length, String) : [],
                                    d = u.length;
                                    for (r in e)
                                        !n && !w.call(e, r) || c && ("length" == r || a && ("offset" == r || "parent" == r) || s && ("buffer" == r || "byteLength" == r || "byteOffset" == r) || X(r, d)) || u.push(r);
                                    return u
                                }
                                (t, !0) : function t(n) {
                                    if (!ht(n))
                                        return function () {
                                            var t = [];
                                            if (null != n)
                                                for (var e in Object(n))
                                                    t.push(e);
                                            return t
                                        }
                                    ();
                                    var e,
                                    r = Z(n),
                                    i = [];
                                    for (e in n)
                                        ("constructor" != e || !r && w.call(n, e)) && i.push(e);
                                    return i
                                }
                                (t)
                            }
                            var vt,
                            e = (vt = function (t, e, n) {
                                Y(t, e, n)
                            }, function t(e, n) {
                                return it((o = e, s = yt, a = P(void 0 === (a = n) ? o.length - 1 : a, 0), function () {
                                        for (var t = arguments, e = -1, n = P(t.length - a, 0), r = Array(n); ++e < n; )
                                            r[e] = t[a + e];
                                        for (var e = -1, i = Array(a + 1); ++e < a; )
                                            i[e] = t[e];
                                        return i[a] = s(r),
                                        function t(e, n, r) {
                                            switch (r.length) {
                                            case 0:
                                                return e.call(n);
                                            case 1:
                                                return e.call(n, r[0]);
                                            case 2:
                                                return e.call(n, r[0], r[1]);
                                            case 3:
                                                return e.call(n, r[0], r[1], r[2])
                                            }
                                            return e.apply(n, r)
                                        }
                                        (o, this, i)
                                    }), e + "");
                                var o,
                                a,
                                s
                            }
                                (function (t, e) {
                                    var n = -1,
                                    r = e.length,
                                    i = 1 < r ? e[r - 1] : void 0,
                                    o = 2 < r ? e[2] : void 0,
                                    i = 3 < vt.length && "function" == typeof i ? (r--, i) : void 0;
                                    for (o && function (t, e, n) {
                                        if (ht(n)) {
                                            var r = typeof e;
                                            return ("number" == r ? ct(n) && X(e, n.length) : "string" == r && e in n) && ot(n[e], t)
                                        }
                                    }
                                        (e[0], e[1], o) && (i = r < 3 ? void 0 : i, r = 1), t = Object(t); ++n < r; ) {
                                        var a = e[n];
                                        a && vt(t, a, n)
                                    }
                                    return t
                                }));
                            function yt(t) {
                                return t
                            }
                            t.exports = e
                        }
                        (it, it.exports);
                        var cd = it.exports;
                        function ud(e, t) {
                            var n,
                            r = Object.keys(e);
                            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), r.push.apply(r, n)),
                            r
                        }
                        function dd(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ud(Object(n), !0).forEach(function (t) {
                                    Nn(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ud(Object(n)).forEach(function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }
                        function ld(t) {
                            return (null != t && t.error_url ? "<vmap:VASTAdData>".concat('<VAST version="3.0">\n    <Ad id="'.concat((e = t).id, '">\n        <Wrapper>\n            <AdSystem>GDFP</AdSystem>\n            <Error><![CDATA[').concat(e.error_url, "]]></Error>\n            <Impression><![CDATA[").concat(e.impression_url, "]]></Impression>\n            <VASTAdTagURI><![CDATA[").concat(e.adtag_url, "]]></VASTAdTagURI>\n        </Wrapper>\n    </Ad>\n</VAST>").trim(), "</vmap:VASTAdData>") : '<vmap:AdTagURI templateType="vast3"><![CDATA['.concat(null == t ? void 0 : t.adtag_url, "]]></vmap:AdTagURI>")).trim();
                            var e
                        }
                        const hd = "function" == typeof atob,
                        fd = "function" == typeof btoa,
                        pd = "function" == typeof Fh,
                        gd = "function" == typeof TextDecoder ? new TextDecoder : void 0,
                        md = "function" == typeof TextEncoder ? new TextEncoder : void 0,
                        vd = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],
                        yd = (t => {
                            let n = {};
                            return t.forEach((t, e) => n[t] = e),
                            n
                        })(vd),
                        bd = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
                        _d = String.fromCharCode.bind(String),
                        wd = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : (t, e = t => t) => new Uint8Array(Array.prototype.slice.call(t, 0).map(e)),
                        Ad = t => t.replace(/[^A-Za-z0-9\+\/]/g, ""),
                        Ed = fd ? t => btoa(t) : pd ? t => Fh.from(t, "binary").toString("base64") : e => {
                            let n,
                            r,
                            i,
                            o,
                            a = "";
                            var t = e.length % 3;
                            for (let t = 0; t < e.length; ) {
                                if (255 < (r = e.charCodeAt(t++)) || 255 < (i = e.charCodeAt(t++)) || 255 < (o = e.charCodeAt(t++)))
                                    throw new TypeError("invalid character found");
                                n = r << 16 | i << 8 | o,
                                a += vd[n >> 18 & 63] + vd[n >> 12 & 63] + vd[n >> 6 & 63] + vd[63 & n]
                            }
                            return t ? a.slice(0, t - 3) + "===".substring(t) : a
                        },
                        kd = pd ? t => Fh.from(t).toString("base64") : n => {
                            let r = [];
                            for (let t = 0, e = n.length; t < e; t += 4096)
                                r.push(_d.apply(null, n.subarray(t, t + 4096)));
                            return Ed(r.join(""))
                        },
                        xd = t => {
                            if (t.length < 2)
                                return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? _d(192 | e >>> 6) + _d(128 | 63 & e) : _d(224 | e >>> 12 & 15) + _d(128 | e >>> 6 & 63) + _d(128 | 63 & e);
                            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                            return _d(240 | e >>> 18 & 7) + _d(128 | e >>> 12 & 63) + _d(128 | e >>> 6 & 63) + _d(128 | 63 & e)
                        },
                        Sd = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                        Dd = pd ? t => Fh.from(t, "utf8").toString("base64") : md ? t => kd(md.encode(t)) : t => Ed((t => t.replace(Sd, xd))(t)),
                        Td = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                        Rd = t => {
                            switch (t.length) {
                            case 4:
                                var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                                return _d(55296 + (e >>> 10)) + _d(56320 + (1023 & e));
                            case 3:
                                return _d((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                            default:
                                return _d((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
                            }
                        },
                        Od = hd ? t => atob(Ad(t)) : pd ? t => Fh.from(t, "base64").toString("binary") : e => {
                            if (e = e.replace(/\s+/g, ""), !bd.test(e))
                                throw new TypeError("malformed base64.");
                            e += "==".slice(2 - (3 & e.length));
                            let n,
                            r,
                            i,
                            o = "";
                            for (let t = 0; t < e.length; )
                                n = yd[e.charAt(t++)] << 18 | yd[e.charAt(t++)] << 12 | (r = yd[e.charAt(t++)]) << 6 | (i = yd[e.charAt(t++)]), o += 64 === r ? _d(n >> 16 & 255) : 64 === i ? _d(n >> 16 & 255, n >> 8 & 255) : _d(n >> 16 & 255, n >> 8 & 255, 255 & n);
                            return o
                        },
                        Cd = pd ? t => wd(Fh.from(t, "base64")) : t => wd(Od(t), t => t.charCodeAt(0)),
                        Id = pd ? t => Fh.from(t, "base64").toString("utf8") : gd ? t => gd.decode(Cd(t)) : t => (t => t.replace(Td, Rd))(Od(t)),
                        Pd = (t, e = !1) => e ? (t => t.replace(/[+\/]/g, t => "+" == t ? "-" : "_").replace(/=+$/m, ""))(Dd(t)) : Dd(t),
                        Ld = t => Id((t => Ad(t.replace(/[-_]/g, t => "-" == t ? "+" : "/")))(t));
                        function jd(e, t) {
                            var n,
                            r = Object.keys(e);
                            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), r.push.apply(r, n)),
                            r
                        }
                        function Bd(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? jd(Object(n), !0).forEach(function (t) {
                                    Nn(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jd(Object(n)).forEach(function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }
                        var Md,
                        Ud,
                        Nd,
                        Gd,
                        Fd,
                        zd,
                        qd,
                        Vd,
                        Kd,
                        Hd,
                        Wd,
                        $d,
                        Yd = null,
                        Qd = (Vn(al, [{
                                        key: "start",
                                        value: ($d = Fn(Hn.mark(function t() {
                                                        var e,
                                                        n,
                                                        r = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0,
                                                                    n = this._getPrebidScripts(),
                                                                    e = n[0],
                                                                    window.HB_OPTIONSgd = {
                                                                        gameId: this.gameId
                                                                    },
                                                                    t.next = 6,
                                                                    Ou(e, "gdsdk_prebid", {
                                                                        alternates: n,
                                                                        error_prefix: "Blocked:",
                                                                        exists: function () {
                                                                            return f(this, r),
                                                                            window.idhb
                                                                        }
                                                                        .bind(this)
                                                                    });
                                                                case 6:
                                                                    return window.idhb = window.idhb || {},
                                                                    window.idhb.que = window.idhb.que || [],
                                                                    window.idhb.que.push(function () {
                                                                        var i = this;
                                                                        f(this, r),
                                                                        window.idhb.addEventListener("slotRenderEnded", function (t) {
                                                                            var e = this;
                                                                            f(this, i);
                                                                            try {
                                                                                var n,
                                                                                r = 1 === (r = t.slotId.split("@")).length ? r[0] : r[1];
                                                                                t.isEmpty ? (null !== (n = this.atom_display) && void 0 !== n && n.error_url && (fetch(this.atom_display.error_url).catch(function (t) {
                                                                                            f(this, e)
                                                                                        }
                                                                                            .bind(this)), delete this.atom_display), this.eventBus.broadcast("DISPLAYAD_ERROR", {
                                                                                        message: r,
                                                                                        status: "warning"
                                                                                    })) : (this.atom_display.impression_url && (fetch(this.atom_display.impression_url).catch(function (t) {
                                                                                            f(this, e)
                                                                                        }
                                                                                            .bind(this)), delete this.atom_display), this.eventBus.broadcast("DISPLAYAD_IMPRESSION", {
                                                                                        message: r,
                                                                                        status: "success"
                                                                                    }))
                                                                            } catch (t) {}
                                                                        }
                                                                            .bind(this))
                                                                    }
                                                                        .bind(this)),
                                                                    e = ["https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js", "https://imasdk.googleapis.com/js/sdkloader/ima3.js", "http://imasdk.googleapis.com/js/sdkloader/ima3_debug.js", "http://imasdk.googleapis.com/js/sdkloader/ima3.js"],
                                                                    n = this.options.debug ? e[0] : e[1],
                                                                    t.next = 13,
                                                                    Ou(n, "gdsdk_ima", {
                                                                        alternates: e,
                                                                        error_prefix: "Blocked:",
                                                                        exists: function () {
                                                                            return f(this, r),
                                                                            window.google && window.google.ima
                                                                        }
                                                                        .bind(this)
                                                                    });
                                                                case 13:
                                                                    this._createPlayer(),
                                                                    this._setUpIMA(),
                                                                    t.next = 20;
                                                                    break;
                                                                case 17:
                                                                    throw t.prev = 17,
                                                                    t.t0 = t.catch(0),
                                                                    new Error(t.t0);
                                                                case 20:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this, [[0, 17]])
                                                    })), function () {
                                            return $d.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_getAdVast",
                                        value: function (e, c) {
                                            var n = this;
                                            return new Promise(function (a) {
                                                var s = this;
                                                if (f(this, n), ju && Iu("gd_debug_ex") && Iu("gd_tag")) {
                                                    var t = this.IMASampleTags[e],
                                                    t = t[Math.floor(Math.random() * t.length)];
                                                    a({
                                                        url: t
                                                    })
                                                } else
                                                    try {
                                                        this._getTunnlKeys(e).then(function (t) {
                                                            var n = this;
                                                            f(this, s);
                                                            var r = t.data;
                                                            if (void 0 === window.idhb.requestAds)
                                                                throw new Error("Prebid.js wrapper script hit an error or didn't exist!");
                                                            var e = r.nsid || "TNL_T-17102571517",
                                                            t = r.tid || "TNL_NS-18101700058",
                                                            i = "".concat(e, "/").concat(t);
                                                            delete r.nsid,
                                                            delete r.tid;
                                                            var o = r.consent_string || "BOWJjG9OWJjG9CLAAAENBx-AAAAiDAAA";
                                                            cd(r, {
                                                                tnl_system: "1",
                                                                tnl_content_category: this.category.toLowerCase()
                                                            }),
                                                            this.eventBus.broadcast("AD_REQUEST", {
                                                                message: r.tnl_ad_pos
                                                            });
                                                            t = this.options;
                                                            return "preroll" === r.tnl_ad_pos && hu(t.preroll) ? t = t.preroll : "midroll" === r.tnl_ad_pos && hu(t.midroll) ? t = t.midroll : "rewarded" === r.tnl_ad_pos && hu(t.rewarded) && (t = t.rewarded),
                                                            c && c.retry_on_success && hu(t.retry_on_success) && hu(t.retry_on_success.vast) ? a(this._createCustomAdVastUrl(t.retry_on_success.vast, {
                                                                    tnl_keys: r
                                                                })) : c && c.retry_on_failure && this.options.retry_on_failure && hu(t.retry_on_failure.vast) ? a(this._createCustomAdVastUrl(t.retry_on_failure.vast, {
                                                                    tnl_keys: r
                                                                })) : hu(t.vast) ? a(this._createCustomAdVastUrl(t.vast, {
                                                                    tnl_keys: r
                                                                })) : void window.idhb.que.push(function () {
                                                                var e = this;
                                                                f(this, n),
                                                                window.idhb.setRefererUrl(encodeURIComponent(this.parentURL)),
                                                                window.idhb.allowPersonalizedAds(!!parseInt(this.userAllowedPersonalizedAds));
                                                                var t = "rewarded" === r.tnl_ad_pos ? "rewardedVideo" : "gdbanner" === r.tnl_ad_pos ? "gd__banner" : "midroll" === r.tnl_ad_pos ? "midroll" : "video1";
                                                                window.idhb.setDfpAdUnitCodeForAdSlot(t, i),
                                                                window.idhb.setAdserverTargetingForAdSlot(t, r),
                                                                window.idhb.setDefaultGdprConsentString(o),
                                                                window.idhb.requestAds({
                                                                    slotIds: [t],
                                                                    callback: function (t) {
                                                                        f(this, e),
                                                                        a({
                                                                            tnl_keys: r,
                                                                            url: t
                                                                        })
                                                                    }
                                                                    .bind(this)
                                                                })
                                                            }
                                                                .bind(this))
                                                        }
                                                            .bind(this)).catch(function (t) {
                                                            throw f(this, s),
                                                            new Error(t)
                                                        }
                                                            .bind(this))
                                                    } catch (t) {
                                                        throw new Error(t)
                                                    }
                                            }
                                                .bind(this))
                                        }
                                    }, {
                                        key: "nextAdPosition",
                                        value: function (t) {
                                            if (t === xu.Rewarded)
                                                return this.adRewardedCount++, "rewarded";
                                            if (t !== xu.Interstitial)
                                                return "midroll";
                                            t = !1 === this.gameData.preroll || !0 === this.noPreroll || 1 === this.adPrerollCount;
                                            return t ? this.adMidrollCount++ : this.adPrerollCount++,
                                            t || 0 < this.adMidrollCount ? "midroll" : "preroll"
                                        }
                                    }, {
                                        key: "getAdPosition",
                                        value: function (t) {
                                            return t === xu.Rewarded ? "rewarded" : t !== xu.Interstitial || !1 === this.gameData.preroll || !0 === this.noPreroll || 1 === this.adPrerollCount || 0 < this.adMidrollCount ? "midroll" : "preroll"
                                        }
                                    }, {
                                        key: "_getTunnlKeys",
                                        value: function (s) {
                                            var c = this;
                                            return new Promise(function (n) {
                                                var r = this;
                                                f(this, c);
                                                var t = !navigator.userAgent.match(/Crosswalk/i) && void 0 === window.cordova || "m.hopy.com" !== this.parentDomain ? "page_url=".concat(encodeURIComponent(this.parentURL)) : "bundle=com.hopy.frivgames",
                                                i = this.nextAdPosition(s),
                                                e = Du("ch", window.location.href),
                                                o = Du("ch_date", window.location.href),
                                                e = e ? "&ch=".concat(e) : "",
                                                o = o ? "&ch_date=".concat(o) : "",
                                                a = "https://pub.headerlift.com/opphb?".concat(t, "&player_width=").concat(this.options.width, "&player_height=").concat(this.options.height, "&ad_type=video_image&game_id=").concat(this.gameId, "&ad_position=").concat(i).concat(e).concat(o, "&correlator=").concat(Date.now()),
                                                o = new Request(a, {
                                                    method: "GET"
                                                });
                                                fetch(o).then(function (t) {
                                                    f(this, r);
                                                    var e = t.headers.get("content-type");
                                                    if (e && -1 !== e.indexOf("application/json"))
                                                        return t.json();
                                                    throw new TypeError("Oops, we didn't get JSON!")
                                                }
                                                    .bind(this)).then(function (t) {
                                                    f(this, r),
                                                    function (t) {
                                                        if (t) {
                                                            for (var e in t)
                                                                if (t.hasOwnProperty(e))
                                                                    return;
                                                            return 1
                                                        }
                                                    }
                                                    (t) && (t = this._createTunnlReportingFallbackKeys(i), this.eventBus.broadcast("AD_REQUEST_KEYS_EMPTY", {
                                                            message: "Tunnl returned empty response.",
                                                            details: a
                                                        })),
                                                    n({
                                                        data: t,
                                                        url: a
                                                    })
                                                }
                                                    .bind(this)).catch(function (t) {
                                                    f(this, r);
                                                    var e = this._createTunnlReportingFallbackKeys(i);
                                                    this.eventBus.broadcast("AD_REQUEST_KEYS_FALLBACK", {
                                                        message: t.message,
                                                        details: a
                                                    }),
                                                    n({
                                                        data: e,
                                                        url: a
                                                    })
                                                }
                                                    .bind(this))
                                            }
                                                .bind(this))
                                        }
                                    }, {
                                        key: "_createTunnlReportingFallbackKeys",
                                        value: function (t) {
                                            return {
                                                tid: "TNL_T-17102571517",
                                                nsid: "TNL_NS-18101700058",
                                                tnl_tid: "T-17102571517",
                                                tnl_nsid: "NS-18101700058",
                                                tnl_pw: this.options.width,
                                                tnl_ph: this.options.height,
                                                tnl_pt: "22",
                                                tnl_pid: "P-17101800031",
                                                tnl_paid: "17",
                                                tnl_ad_type: "video_image",
                                                tnl_asset_id: this.gameId.toString(),
                                                tnl_ad_pos: t,
                                                tnl_skippable: "1",
                                                tnl_cp1: "",
                                                tnl_cp2: "",
                                                tnl_cp3: "",
                                                tnl_cp4: "",
                                                tnl_cp5: "",
                                                tnl_cp6: "",
                                                tnl_campaign: "2",
                                                tnl_gdpr: "0",
                                                tnl_gdpr_consent: "1",
                                                consent_string: "BOWJjG9OWJjG9CLAAAENBx-AAAAiDAAA",
                                                tnl_content_category: this.category.toLowerCase()
                                            }
                                        }
                                    }, {
                                        key: "_requestAd",
                                        value: function (s, c) {
                                            var u = this;
                                            return c = c || {},
                                            new Promise(function (e) {
                                                var n = this;
                                                if (f(this, u), "undefined" == typeof google)
                                                    throw new Error("Unable to load ad, google IMA SDK not defined.");
                                                try {
                                                    var t,
                                                    r = null == s || null === (t = s.tnl_keys) || void 0 === t ? void 0 : t.tnl_ad_pos;
                                                    this.adSuccess = !1;
                                                    var i = new google.ima.AdsRequest,
                                                    o = this._transformVast(s, c),
                                                    a = Bd(Bd({}, c), {}, {
                                                        adTag: o,
                                                        tnl_ad_pos: r
                                                    });
                                                    this.adCounter[r] = this.adCounter[r] || 0,
                                                    this.adCounter[r]++,
                                                    this._create_dp_context(r, o.url, o.cust_params).then(function (t) {
                                                        f(this, n),
                                                        t && (o.url = t.adtag_url),
                                                        this._isVMAP(r) ? i.adsResponse = function (t) {
                                                            var e = t.position || "midroll",
                                                            n = t.dp_1,
                                                            r = t.dp_2,
                                                            i = Date.now(),
                                                            o = new uu(t.adtag_url_1, !0);
                                                            o.query = dd(dd({}, o.query), {}, {
                                                                ad_rule: 0,
                                                                vpos: e,
                                                                pod: 1,
                                                                ppos: 1,
                                                                lip: !0,
                                                                correlator: i,
                                                                output: "xml_vast3"
                                                            });
                                                            o = o.toString(),
                                                            t = new uu(t.adtag_url_2, !0);
                                                            t.query = dd(dd({}, t.query), {}, {
                                                                ad_rule: 0,
                                                                vpos: e,
                                                                pod: 1,
                                                                correlator: ++i,
                                                                output: "xml_vast3"
                                                            });
                                                            i = t.toString(),
                                                            t = Date.now();
                                                            return '<?xml version="1.0" encoding="UTF-8"?>\n<vmap:VMAP xmlns:vmap="http://www.iab.net/videosuite/vmap" version="1.0">\n<vmap:AdBreak timeOffset="start" breakType="linear,nonlinear" breakId="break-1">\n    <vmap:AdSource id="'.concat(t++, '" allowMultipleAds="false" followRedirects="true">\n        ').concat(ld({
                                                                    id: t++,
                                                                    adtag_url: o,
                                                                    error_url: null == n ? void 0 : n.error_url,
                                                                    impression_url: null == n ? void 0 : n.impression_url
                                                                }), '\n    </vmap:AdSource>\n</vmap:AdBreak>\n<vmap:AdBreak timeOffset="start" breakType="linear,nonlinear" breakId="break-2">\n    <vmap:AdSource id="').concat(t++, '" allowMultipleAds="false" followRedirects="true">\n        ').concat(ld({
                                                                    id: t++,
                                                                    adtag_url: i,
                                                                    error_url: null == r ? void 0 : r.error_url,
                                                                    impression_url: null == r ? void 0 : r.impression_url
                                                                }), '\n    </vmap:AdSource>\n    <vmap:Extensions>\n        <vmap:Extension type="bumper" suppress_bumper="true"></vmap:Extension>\n    </vmap:Extensions>\n</vmap:AdBreak>\n</vmap:VMAP>').trim()
                                                        }
                                                        (this._get_vmap_context({
                                                                dp: t,
                                                                adtag: o,
                                                                position: "preroll" === a.tnl_ad_pos ? "preroll" : "midroll",
                                                                config: this._get_vmap_config(r)
                                                            })) : t ? i.adsResponse = '<?xml version="1.0" encoding="utf-8"?>\n<VAST version="3.0">\n    <Ad id="'.concat((t = t).id, '">\n        <Wrapper>\n            <AdSystem>GDFP</AdSystem>\n            <Error><![CDATA[').concat(t.error_url, "]]></Error>\n            <Impression><![CDATA[").concat(t.impression_url, "]]></Impression>\n            <VASTAdTagURI><![CDATA[").concat(t.adtag_url, "]]></VASTAdTagURI>\n        </Wrapper>\n    </Ad>\n</VAST>").trim() : i.adTagUrl = o.url,
                                                        i.linearAdSlotWidth = this.options.width,
                                                        i.linearAdSlotHeight = this.options.height,
                                                        i.nonLinearAdSlotWidth = this.options.width,
                                                        i.nonLinearAdSlotHeight = this.options.height,
                                                        i.forceNonLinearFullSlot = !0,
                                                        this.options.vast_load_timeout && (i.vastLoadTimeout = this.options.vast_load_timeout),
                                                        this.options.autoplay_signal && i.setAdWillAutoPlay(c.autoplayAllowed),
                                                        this.options.volume_signal && i.setAdWillPlayMuted(c.autoplayRequiresMute),
                                                        this.adsLoader.requestAds(i, a);
                                                        try {
                                                            this.eventBus.broadcast("AD_SDK_REQUEST", {
                                                                message: a
                                                            })
                                                        } catch (t) {}
                                                        e(i)
                                                    }
                                                        .bind(this))
                                                } catch (t) {
                                                    throw new Error(t)
                                                }
                                            }
                                                .bind(this))
                                        }
                                    }, {
                                        key: "cancel",
                                        value: function () {
                                            var t;
                                            !1 !== this.requestRunning && (this.requestRunning = !1, this._resetAdsLoader(), this._hide("cancel"), this.eventBus.broadcast(t = "AD_SDK_CANCELED", {
                                                    name: t,
                                                    message: "Advertisement has been canceled.",
                                                    status: "warning",
                                                    analytics: {
                                                        category: this.eventCategory,
                                                        action: t,
                                                        label: this.gameId
                                                    }
                                                }))
                                        }
                                    }, {
                                        key: "_checkAutoPlay",
                                        value: (Wd = Fn(Hn.mark(function t() {
                                                        var i = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.abrupt("return", new Promise(function (n, t) {
                                                                            var r = this;
                                                                            f(this, i);
                                                                            var e = navigator.userAgent.toLowerCase();
                                                                            -1 < e.indexOf("safari") && e.indexOf("chrome") < 0 ? n({
                                                                                autoplayAllowed: !0,
                                                                                autoplayRequiresMute: !0
                                                                            }) : sd({
                                                                                inline: !0,
                                                                                muted: !1
                                                                            }).then(function (t) {
                                                                                f(this, r);
                                                                                var e = t.result;
                                                                                t.error,
                                                                                n(!0 === e ? {
                                                                                    autoplayAllowed: !0,
                                                                                    autoplayRequiresMute: !1
                                                                                }
                                                                                     : {
                                                                                    autoplayAllowed: !0,
                                                                                    autoplayRequiresMute: !0
                                                                                })
                                                                            }
                                                                                .bind(this))
                                                                        }
                                                                            .bind(this)));
                                                                case 1:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this)
                                                    })), function () {
                                            return Wd.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_initDisplayContainerWithAutoPlay",
                                        value: (Hd = Fn(Hn.mark(function t() {
                                                        var e;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2,
                                                                    this._checkAutoPlay(!1);
                                                                case 2:
                                                                    return e = t.sent,
                                                                    this._autoplay = e,
                                                                    this.video_ad_player.autoplay = e.autoplayAllowed,
                                                                    this.video_ad_player.volume = e.autoplayRequiresMute ? 0 : 1,
                                                                    this.video_ad_player.muted = !!e.autoplayRequiresMute,
                                                                    e.adDisplayContainerInitialized || (this.adDisplayContainer.initialize(), this.adDisplayContainerInitialized = !0),
                                                                    t.abrupt("return", e);
                                                                case 9:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this)
                                                    })), function () {
                                            return Hd.apply(this, arguments)
                                        })
                                    }, {
                                        key: "startAd",
                                        value: (Kd = Fn(Hn.mark(function t(e, n) {
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    if (e === xu.Interstitial)
                                                                        return t.abrupt("return", this._startInterstitialAd(n));
                                                                    t.next = 4;
                                                                    break;
                                                                case 4:
                                                                    if (e === xu.Rewarded)
                                                                        return t.abrupt("return", this._startRewardedAd(n));
                                                                    t.next = 8;
                                                                    break;
                                                                case 8:
                                                                    throw new Error("Unsupported ad type");
                                                                case 9:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this)
                                                    })), function (t, e) {
                                            return Kd.apply(this, arguments)
                                        })
                                    }, {
                                        key: "preloadAd",
                                        value: (Vd = Fn(Hn.mark(function t(e) {
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    if (e === xu.Interstitial)
                                                                        return t.abrupt("return", this._preloadInterstitialAd());
                                                                    t.next = 4;
                                                                    break;
                                                                case 4:
                                                                    if (e === xu.Rewarded)
                                                                        return t.abrupt("return", this._preloadRewardedAd());
                                                                    t.next = 8;
                                                                    break;
                                                                case 8:
                                                                    throw new Error("Unsupported ad type");
                                                                case 9:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this)
                                                    })), function (t) {
                                            return Vd.apply(this, arguments)
                                        })
                                    }, {
                                        key: "addAdResume",
                                        value: function () {
                                            var t = this,
                                            e = function () {
                                                f(this, t),
                                                this.adsManager.resume()
                                            }
                                            .bind(this);
                                            try {
                                                this.adResume = new Ju(this.adContainer, e),
                                                this.adResume.add()
                                            } catch (t) {
                                                console.log("error on adding adResume", t)
                                            }
                                        }
                                    }, {
                                        key: "loadDisplayAd",
                                        value: (qd = Fn(Hn.mark(function t(c) {
                                                        var u = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.abrupt("return", new Promise(function () {
                                                                            var n = Fn(Hn.mark(function t(e, n) {
                                                                                        var r,
                                                                                        i,
                                                                                        o,
                                                                                        a,
                                                                                        s = this;
                                                                                        return Hn.wrap(function (t) {
                                                                                            for (; ; )
                                                                                                switch (t.prev = t.next) {
                                                                                                case 0:
                                                                                                    return t.prev = 0,
                                                                                                    (o = c ? c.containerId : null) || n("Container id is not specified"),
                                                                                                    r = document.getElementById(o),
                                                                                                    document.getElementById(o) || n("No container is found with this id - ".concat(o)),
                                                                                                    void 0 === window.idhb.requestAds && n("Prebid.js wrapper script hit an error or didn't exist!"),
                                                                                                    i = c.slotId || "gd__banner@".concat(o),
                                                                                                    document.getElementById(i) || (o = "\n                    .gd__banner{\n                        z-index: ".concat(zu, ";\n                        height: 100%;\n                        display: flex !important;\n                        align-items: center;\n                        justify-content: center;\n                    }"), document.getElementById("gd__banner__style") || ((a = document.createElement("style")).type = "text/css", a.id = "gd__banner__style", a.styleSheet ? a.styleSheet.cssText = o : a.appendChild(document.createTextNode(o)), r.appendChild(a)), (a = document.createElement("div")).id = i, a.classList.add("gd__banner"), r.appendChild(a)),
                                                                                                    t.next = 10,
                                                                                                    u._create_dp_display_context();
                                                                                                case 10:
                                                                                                    u.atom_display = t.sent,
                                                                                                    window.idhb.que.push(function () {
                                                                                                        var t,
                                                                                                        e = this;
                                                                                                        f(this, s),
                                                                                                        window.idhb.setRefererUrl(encodeURIComponent(u.parentURL)),
                                                                                                        window.idhb.allowPersonalizedAds(!!parseInt(u.userAllowedPersonalizedAds)),
                                                                                                        window.idhb.setDefaultGdprConsentString("BOWJjG9OWJjG9CLAAAENBx-AAAAiDAAA"),
                                                                                                        null !== (t = u.atom_display) && void 0 !== t && t.params && window.idhb.setAdserverTargeting(null === (n = u.atom_display) || void 0 === n ? void 0 : n.params);
                                                                                                        var n = {};
                                                                                                        n[i] = {
                                                                                                            maxSize: [r.offsetWidth, r.offsetHeight]
                                                                                                        },
                                                                                                        window.idhb.requestAds({
                                                                                                            slots: n,
                                                                                                            callback: function (t) {
                                                                                                                f(this, e)
                                                                                                            }
                                                                                                            .bind(this)
                                                                                                        })
                                                                                                    }
                                                                                                        .bind(this)),
                                                                                                    e(),
                                                                                                    t.next = 18;
                                                                                                    break;
                                                                                                case 15:
                                                                                                    t.prev = 15,
                                                                                                    t.t0 = t.catch(0),
                                                                                                    n(t.t0.message || t.t0);
                                                                                                case 18:
                                                                                                case "end":
                                                                                                    return t.stop()
                                                                                                }
                                                                                        }, t, this, [[0, 15]])
                                                                                    }));
                                                                            return function (t, e) {
                                                                                return n.apply(this, arguments)
                                                                            }
                                                                        }
                                                                            ()));
                                                                case 1:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t)
                                                    })), function (t) {
                                            return qd.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_startInterstitialAd",
                                        value: (zd = Fn(Hn.mark(function t(e) {
                                                        var n;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    if (this.requestRunning)
                                                                        return this.eventBus.broadcast("AD_IS_ALREADY_RUNNING", {
                                                                            status: "warning"
                                                                        }), t.abrupt("return");
                                                                    t.next = 3;
                                                                    break;
                                                                case 3:
                                                                    return this.requestRunning = !0,
                                                                    t.next = 6,
                                                                    this._initDisplayContainerWithAutoPlay();
                                                                case 6:
                                                                    return n = t.sent,
                                                                    t.next = 9,
                                                                    this._loadInterstitialAd(Bd(Bd({}, n), e));
                                                                case 9:
                                                                    t.prev = 9,
                                                                    n.autoplayRequiresMute && this.adsManager.setVolume(0),
                                                                    this.adsManager.init(this.options.width, this.options.height, google.ima.ViewMode.NORMAL),
                                                                    this.adsManager.start(),
                                                                    t.next = 19;
                                                                    break;
                                                                case 15:
                                                                    throw t.prev = 15,
                                                                    t.t0 = t.catch(9),
                                                                    this._onError(t.t0),
                                                                    t.t0;
                                                                case 19:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this, [[9, 15]])
                                                    })), function (t) {
                                            return zd.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_loadInterstitialAd",
                                        value: (Fd = Fn(Hn.mark(function t(e) {
                                                        var n,
                                                        r,
                                                        a = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    if (this._resetAdsLoader(), t.prev = 1, t.t0 = this.preloadedInterstitialAdVast, t.t0) {
                                                                        t.next = 7;
                                                                        break
                                                                    }
                                                                    return t.next = 6,
                                                                    this._getAdVast(xu.Interstitial, e);
                                                                case 6:
                                                                    t.t0 = t.sent;
                                                                case 7:
                                                                    return n = t.t0,
                                                                    delete this.preloadedInterstitialAdVast,
                                                                    t.next = 11,
                                                                    this._requestAd(n, Bd({
                                                                            adType: xu.Interstitial
                                                                        }, e));
                                                                case 11:
                                                                    return r = t.sent,
                                                                    t.next = 14,
                                                                    new Promise(function (e, n) {
                                                                        var r = this;
                                                                        f(this, a);
                                                                        var i = "videoad.preloadad";
                                                                        this.eventBus.unsubscribeScope(i);
                                                                        var t = function (t) {
                                                                            f(this, r),
                                                                            this.eventBus.unsubscribeScope(i),
                                                                            e(t.message)
                                                                        }
                                                                        .bind(this),
                                                                        o = function (t) {
                                                                            f(this, r),
                                                                            this.eventBus.unsubscribeScope(i),
                                                                            n(t.message)
                                                                        }
                                                                        .bind(this);
                                                                        this.eventBus.subscribe("AD_SDK_MANAGER_READY", t, i),
                                                                        this.eventBus.subscribe("AD_SDK_CANCELED", o, i),
                                                                        this.eventBus.subscribe("AD_ERROR", o, i)
                                                                    }
                                                                        .bind(this));
                                                                case 14:
                                                                    return t.abrupt("return", r);
                                                                case 17:
                                                                    throw t.prev = 17,
                                                                    t.t1 = t.catch(1),
                                                                    new Error(t.t1);
                                                                case 20:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this, [[1, 17]])
                                                    })), function (t) {
                                            return Fd.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_startRewardedAd",
                                        value: (Gd = Fn(Hn.mark(function t(e) {
                                                        var n;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    if (this.requestRunning)
                                                                        return this.eventBus.broadcast("AD_IS_ALREADY_RUNNING", {
                                                                            status: "warning"
                                                                        }), t.abrupt("return");
                                                                    t.next = 3;
                                                                    break;
                                                                case 3:
                                                                    return this.requestRunning = !0,
                                                                    t.next = 6,
                                                                    this._initDisplayContainerWithAutoPlay();
                                                                case 6:
                                                                    return n = t.sent,
                                                                    t.next = 9,
                                                                    this._loadRewardedAd(Bd(Bd({}, n), e));
                                                                case 9:
                                                                    t.prev = 9,
                                                                    n.autoplayRequiresMute && this.adsManager.setVolume(0),
                                                                    this.adsManager.init(this.options.width, this.options.height, google.ima.ViewMode.NORMAL),
                                                                    this.adsManager.start(),
                                                                    t.next = 19;
                                                                    break;
                                                                case 15:
                                                                    throw t.prev = 15,
                                                                    t.t0 = t.catch(9),
                                                                    this._onError(t.t0),
                                                                    t.t0;
                                                                case 19:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this, [[9, 15]])
                                                    })), function (t) {
                                            return Gd.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_loadRewardedAd",
                                        value: (Nd = Fn(Hn.mark(function t(e) {
                                                        var n,
                                                        r,
                                                        a = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    if (this._resetAdsLoader(), t.prev = 1, t.t0 = this.preloadedRewardedAdVast, t.t0) {
                                                                        t.next = 7;
                                                                        break
                                                                    }
                                                                    return t.next = 6,
                                                                    this._getAdVast(xu.Rewarded, e);
                                                                case 6:
                                                                    t.t0 = t.sent;
                                                                case 7:
                                                                    return n = t.t0,
                                                                    delete this.preloadedRewardedAdVast,
                                                                    t.next = 11,
                                                                    this._requestAd(n, Bd({
                                                                            adType: xu.Rewarded
                                                                        }, e));
                                                                case 11:
                                                                    return r = t.sent,
                                                                    t.next = 14,
                                                                    new Promise(function (e, n) {
                                                                        var r = this;
                                                                        f(this, a);
                                                                        var i = "videoad.preloadad";
                                                                        this.eventBus.unsubscribeScope(i);
                                                                        var t = function (t) {
                                                                            f(this, r),
                                                                            this.eventBus.unsubscribeScope(i),
                                                                            e(t.message)
                                                                        }
                                                                        .bind(this),
                                                                        o = function (t) {
                                                                            f(this, r),
                                                                            this.eventBus.unsubscribeScope(i),
                                                                            n(t.message)
                                                                        }
                                                                        .bind(this);
                                                                        this.eventBus.subscribe("AD_SDK_MANAGER_READY", t, i),
                                                                        this.eventBus.subscribe("AD_SDK_CANCELED", o, i),
                                                                        this.eventBus.subscribe("AD_ERROR", o, i)
                                                                    }
                                                                        .bind(this));
                                                                case 14:
                                                                    return t.abrupt("return", r);
                                                                case 17:
                                                                    throw t.prev = 17,
                                                                    t.t1 = t.catch(1),
                                                                    new Error(t.t1);
                                                                case 20:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this, [[1, 17]])
                                                    })), function (t) {
                                            return Nd.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_preloadInterstitialAd",
                                        value: (Ud = Fn(Hn.mark(function t() {
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0,
                                                                    t.next = 3,
                                                                    this._getAdVast(xu.Interstitial);
                                                                case 3:
                                                                    return this.preloadedInterstitialAdVast = t.sent,
                                                                    t.abrupt("return", this.preloadedInterstitialAdVast.url);
                                                                case 7:
                                                                    throw t.prev = 7,
                                                                    t.t0 = t.catch(0),
                                                                    new Error(t.t0);
                                                                case 10:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this, [[0, 7]])
                                                    })), function () {
                                            return Ud.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_preloadRewardedAd",
                                        value: (Md = Fn(Hn.mark(function t() {
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0,
                                                                    t.next = 3,
                                                                    this._getAdVast(xu.Rewarded);
                                                                case 3:
                                                                    return this.preloadedRewardedAdVast = t.sent,
                                                                    t.abrupt("return", this.preloadedRewardedAdVast.url);
                                                                case 7:
                                                                    throw t.prev = 7,
                                                                    t.t0 = t.catch(0),
                                                                    new Error(t.t0);
                                                                case 10:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this, [[0, 7]])
                                                    })), function () {
                                            return Md.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_onError",
                                        value: function (t) {
                                            this.cancel(),
                                            this._clearSafetyTimer("ERROR")
                                        }
                                    }, {
                                        key: "_hide",
                                        value: function (t) {
                                            this.video_ad_player.src = "",
                                            this.activeAdContainer && (this.activeAdContainer.style.visibility = "hidden")
                                        }
                                    }, {
                                        key: "_show",
                                        value: function (t) {
                                            var e,
                                            n,
                                            r = this;
                                            this.activeAdContainer && (this.activeAdContainer.style.visibility = "visible", e = null == t ? void 0 : t.mode, n = this._isT4R(t), t = this._getT4ROptions(), "loaded" === e ? (this.activeAdContainer.style.opacity = n ? .001 : 1, n && this.eventBus.broadcast("AD_T4R"), n && setTimeout(function () {
                                                        f(this, r),
                                                        this.activeAdContainer.style.opacity = 1
                                                    }
                                                        .bind(this), ((null == t ? void 0 : t.min) || 1234) + Math.random() * ((null == t ? void 0 : t.max) || 3210))) : "click" !== e && "first_quartile" !== e || (this.activeAdContainer.style.opacity = 1))
                                        }
                                    }, {
                                        key: "_createPlayer",
                                        value: function () {
                                            var n = this,
                                            t = document.body || document.getElementsByTagName("body")[0];
                                            this.adContainer = document.createElement("div"),
                                            this.adContainer.id = "".concat(this.prefix, "advertisement"),
                                            this.adContainer.style.position = this.thirdPartyContainer ? "absolute" : "fixed",
                                            this.adContainer.style.zIndex = Fu,
                                            this.adContainer.style.top = "0",
                                            this.adContainer.style.left = "0",
                                            this.adContainer.style.width = "100%",
                                            this.adContainer.style.height = "100%",
                                            this.thirdPartyContainer && (this.thirdPartyContainer.style.transform = null);
                                            var r = document.createElement("video");
                                            r.setAttribute("playsinline", !0),
                                            r.setAttribute("webkit-playsinline", !0),
                                            r.id = "".concat(this.prefix, "advertisement_video"),
                                            r.style.position = "absolute",
                                            r.style.backgroundColor = "#000000",
                                            r.style.top = "0",
                                            r.style.left = "0",
                                            r.style.width = this.options.width + "px",
                                            r.style.height = this.options.height + "px",
                                            this.video_ad_player = r,
                                            this.adContainer.appendChild(r);
                                            var i = document.createElement("div");
                                            i.id = "".concat(this.prefix, "advertisement_slot"),
                                            i.style.position = "absolute",
                                            i.style.top = "0",
                                            i.style.left = "0",
                                            i.style.width = this.options.width + "px",
                                            i.style.height = this.options.height + "px",
                                            this.adContainerInner = i,
                                            this.activeAdContainer = this.adContainer,
                                            this.thirdPartyContainer ? (this.adContainer.appendChild(i), this.thirdPartyContainer.appendChild(this.adContainer), this.activeAdContainer = this.thirdPartyContainer) : (this.adContainer.appendChild(i), t.appendChild(this.adContainer)),
                                            this.addAdResume(),
                                            this.activeAdContainer.style.visibility = "hidden";
                                            t = function () {
                                                f(this, n);
                                                var t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                                                e = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                                                this.options.width = this.thirdPartyContainer ? this.thirdPartyContainer.offsetWidth : t,
                                                this.options.height = this.thirdPartyContainer ? this.thirdPartyContainer.offsetHeight : e,
                                                i.style.width = this.options.width + "px",
                                                i.style.height = this.options.height + "px",
                                                r.style.width = this.options.width + "px",
                                                r.style.height = this.options.height + "px"
                                            }
                                            .bind(this);
                                            window.addEventListener("resize", t),
                                            window.document.addEventListener("DOMContentLoaded", t)
                                        }
                                    }, {
                                        key: "_setUpIMA",
                                        value: function () {
                                            this.adDisplayContainer = new google.ima.AdDisplayContainer(this.adContainerInner, this.video_ad_player),
                                            this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer),
                                            this.adsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus(!0),
                                            this.adsLoader.getSettings().setLocale(this.options.locale),
                                            this.adsLoader.getSettings().setVpaidMode(this._getVPAIDMode()),
                                            this.adsLoader.getSettings().setAutoPlayAdBreaks(!0),
                                            this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this._onAdsManagerLoaded, !1, this),
                                            this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError, !1, this)
                                        }
                                    }, {
                                        key: "_onAdsManagerLoaded",
                                        value: function (t) {
                                            var e = this,
                                            n = new google.ima.AdsRenderingSettings;
                                            n.autoAlign = !0,
                                            n.disabledPreloading = !1,
                                            n.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                                            n.uiElements = [google.ima.UiElements.AD_ATTRIBUTION, google.ima.UiElements.COUNTDOWN],
                                            this.adsManager = t.getAdsManager(this.video_ad_player, n),
                                            this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError.bind(this), !1, this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_METADATA, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.DURATION_CHANGE, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.INTERACTION, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.LINEAR_CHANGED, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.LOG, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED, this._onAdEvent.bind(this), this),
                                            this.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_MUTED, this._onAdEvent.bind(this), this),
                                            window.addEventListener("resize", function () {
                                                f(this, e),
                                                this.adsManager && this.adsManager.resize(this.options.width, this.options.height, google.ima.ViewMode.NORMAL)
                                            }
                                                .bind(this)),
                                            this.adDisplayContainerInitialized || (this.adDisplayContainer.initialize(), this.adDisplayContainerInitialized = !0);
                                            var r = new Date,
                                            i = r.getHours(),
                                            o = r.getDate(),
                                            a = r.getMonth(),
                                            n = r.getFullYear(),
                                            r = "AD_SDK_MANAGER_READY";
                                            this.eventBus.broadcast(r, {
                                                name: r,
                                                message: "AD SDK is ready",
                                                status: "success",
                                                analytics: {
                                                    category: r,
                                                    action: this.parentDomain,
                                                    label: "h".concat(i, " d").concat(o, " m").concat(a, " y").concat(n)
                                                }
                                            }),
                                            this._adrequest_user_context = t.getUserRequestContext()
                                        }
                                    }, {
                                        key: "_onAdEvent",
                                        value: function (t) {
                                            var e,
                                            n,
                                            r = new Date,
                                            i = r.getHours(),
                                            o = r.getDate(),
                                            a = r.getMonth(),
                                            s = r.getFullYear(),
                                            c = (e = google.ima.AdEvent.Type, n = t.type, Object.keys(e).find(function (t) {
                                                    return e[t] === n
                                                })),
                                            u = !1,
                                            r = t.getAd().getContentType() || "",
                                            d = !r.startsWith("image") && !r.startsWith("text");
                                            this._sendIMAEventsToHB(t);
                                            var l = "";
                                            switch (t.type) {
                                            case google.ima.AdEvent.Type.AD_BREAK_READY:
                                                l = "Fired when an ad rule or a VMAP ad break would have played if autoPlayAdBreaks is false.";
                                                break;
                                            case google.ima.AdEvent.Type.AD_METADATA:
                                                l = "Fired when an ads list is loaded.";
                                                break;
                                            case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                                u = !0,
                                                l = "Fired when the ads manager is done playing all the ads.";
                                                break;
                                            case google.ima.AdEvent.Type.CLICK:
                                                var l = "Fired when the ad is clicked.",
                                                h = t.getAd().getContentType();
                                                this._show({
                                                    mode: "click",
                                                    contentType: h
                                                });
                                                break;
                                            case google.ima.AdEvent.Type.COMPLETE:
                                                u = this._is_completed(t.getAd()),
                                                l = "Fired when the ad completes playing.";
                                                break;
                                            case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                                l = "Fired when content should be paused. This usually happens right before an ad is about to cover the content.";
                                                break;
                                            case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                                l = "Fired when content should be resumed. This usually happens when an ad finishes or collapses.",
                                                u = !0;
                                                break;
                                            case google.ima.AdEvent.Type.DURATION_CHANGE:
                                                l = "Fired when the ad's duration changes.";
                                                break;
                                            case google.ima.AdEvent.Type.FIRST_QUARTILE:
                                                l = "Fired when the ad playhead crosses first quartile.";
                                                var f = t.getAd().getContentType();
                                                this._show({
                                                    mode: "first_quartile",
                                                    contentType: f
                                                });
                                                break;
                                            case google.ima.AdEvent.Type.IMPRESSION:
                                                l = "Fired when the impression URL has been pinged.";
                                                break;
                                            case google.ima.AdEvent.Type.INTERACTION:
                                                l = "Fired when an ad triggers the interaction callback. Ad interactions contain an interaction ID string in the ad data.";
                                                break;
                                            case google.ima.AdEvent.Type.LINEAR_CHANGED:
                                                l = "Fired when the displayed ad changes from linear to nonlinear, or vice versa.";
                                                break;
                                            case google.ima.AdEvent.Type.LOADED:
                                                f = t.getAd().getContentType();
                                                this._show({
                                                    mode: "loaded",
                                                    contentType: l = f
                                                });
                                                break;
                                            case google.ima.AdEvent.Type.LOG:
                                                t.getAdData().adError && (l = t.getAdData());
                                                break;
                                            case google.ima.AdEvent.Type.MIDPOINT:
                                                l = "Fired when the ad playhead crosses midpoint.";
                                                break;
                                            case google.ima.AdEvent.Type.PAUSED:
                                                d && this.adResume.show(),
                                                l = "Fired when the ad is paused.";
                                                break;
                                            case google.ima.AdEvent.Type.RESUMED:
                                                l = "Fired when the ad is resumed.",
                                                d && this.adResume.hide();
                                                break;
                                            case google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED:
                                                l = "Fired when the displayed ads skippable state is changed.";
                                                break;
                                            case google.ima.AdEvent.Type.SKIPPED:
                                                u = this._is_completed(t.getAd()),
                                                l = "Fired when the ad is skipped by the user.";
                                                break;
                                            case google.ima.AdEvent.Type.STARTED:
                                                l = "Fired when the ad starts playing.";
                                                break;
                                            case google.ima.AdEvent.Type.THIRD_QUARTILE:
                                                l = "Fired when the ad playhead crosses third quartile.";
                                                break;
                                            case google.ima.AdEvent.Type.USER_CLOSE:
                                                u = this._is_completed(t.getAd()),
                                                l = "Fired when the ad is closed by the user.";
                                                break;
                                            case google.ima.AdEvent.Type.VOLUME_CHANGED:
                                                l = "Fired when the ad volume has changed.";
                                                break;
                                            case google.ima.AdEvent.Type.VOLUME_MUTED:
                                                l = "Fired when the ad volume has been muted."
                                            }
                                            "" !== c && "" !== l && this.eventBus.broadcast(c, {
                                                name: c,
                                                message: l,
                                                status: "success",
                                                analytics: {
                                                    category: c,
                                                    action: this.parentDomain,
                                                    label: "h".concat(i, " d").concat(o, " m").concat(a, " y").concat(s)
                                                }
                                            }),
                                            u && !this.adSuccess && (this.adSuccess = !0, this.eventBus.broadcast("AD_SUCCESS", {
                                                    message: "Ad succeeded.",
                                                    status: "success"
                                                }), this.resetForNext(t))
                                        }
                                    }, {
                                        key: "_onAdError",
                                        value: function (t) {
                                            this.requestRunning = !1,
                                            this._resetAdsLoader(),
                                            this._clearSafetyTimer("ERROR"),
                                            this._hide("_onAdError"),
                                            this._sendIMAEventsToHB(t);
                                            try {
                                                var e = "AD_ERROR",
                                                n = t.getError(),
                                                r = n.getErrorCode().toString() || n.getVastErrorCode().toString(),
                                                i = this._getInnerErrorCode(n);
                                                this.eventBus.broadcast(e, {
                                                    message: r,
                                                    details: i,
                                                    status: "warning",
                                                    analytics: {
                                                        category: e,
                                                        action: i,
                                                        label: r
                                                    }
                                                })
                                            } catch (t) {}
                                        }
                                    }, {
                                        key: "_sendIMAEventsToHB",
                                        value: function (t) {
                                            if (window.idhb && "function" == typeof window.idhb.onImaEvent)
                                                try {
                                                    window.idhb.onImaEvent(t)
                                                } catch (t) {}
                                        }
                                    }, {
                                        key: "_resetAdsLoader",
                                        value: function () {
                                            this.adsManager && (this.adsManager.destroy(), this.adsManager = null, this._adrequest_user_context = null),
                                            this.adsLoader && this.adsLoader.contentComplete()
                                        }
                                    }, {
                                        key: "_startSafetyTimer",
                                        value: function (t, e) {
                                            var n = this;
                                            this.safetyTimer && clearTimeout(this.safetyTimer),
                                            this.safetyTimer = window.setTimeout(function () {
                                                f(this, n),
                                                this.cancel(),
                                                this._clearSafetyTimer(e)
                                            }
                                                    .bind(this), t)
                                        }
                                    }, {
                                        key: "_clearSafetyTimer",
                                        value: function (t) {
                                            void 0 !== this.safetyTimer && null !== this.safetyTimer && (clearTimeout(this.safetyTimer), this.safetyTimer = void 0)
                                        }
                                    }, {
                                        key: "_getVPAIDMode",
                                        value: function () {
                                            return "disabled" === this.options.vpaid_mode ? google.ima.ImaSdkSettings.VpaidMode.DISABLED : "insecure" === this.options.vpaid_mode ? google.ima.ImaSdkSettings.VpaidMode.INSECURE : google.ima.ImaSdkSettings.VpaidMode.disabledD
                                        }
                                    }, {
                                        key: "_getPrebidScripts",
                                        value: function () {
                                            var t = ["https://hb.improvedigital.com/pbw/gameDistributionV1.3.min.js", "http://hb.improvedigital.com/pbw/gameDistributionV1.3.min.js"];
                                            return this.options.hb_script ? [this.options.hb_script].concat(t) : t
                                        }
                                    }, {
                                        key: "_getInnerErrorCode",
                                        value: function (t) {
                                            if (fu(t.getInnerError)) {
                                                t = t.getInnerError();
                                                if (t)
                                                    return fu(t.getErrorCode) && fu(t.getVastErrorCode) ? t.getErrorCode().toString() || t.getVastErrorCode().toString() : t.message
                                            }
                                        }
                                    }, {
                                        key: "resetForNext",
                                        value: function () {
                                            this.requestRunning = !1,
                                            this._hide("resetForNext")
                                        }
                                    }, {
                                        key: "_createCustomAdVastUrl",
                                        value: function (t, e) {
                                            var n = this;
                                            if (t) {
                                                var r,
                                                i = this.macros.transform(t, {
                                                    get: function (t) {
                                                        if (f(this, n), e && e.tnl_keys)
                                                            return e.tnl_keys[t.toLowerCase()]
                                                    }
                                                    .bind(this)
                                                });
                                                for (r in i.query || {}) {
                                                    var o = i.query[r];
                                                    hu(o) && (i.query[r] = $c.stringify(o))
                                                }
                                                t = new uu(i.url, !0);
                                                return cd(t.query, i.query || {}),
                                                Bd({
                                                    url: t.toString()
                                                }, e)
                                            }
                                        }
                                    }, {
                                        key: "_transformVast",
                                        value: function (t, e) {
                                            var n = {
                                                url: t.url
                                            };
                                            try {
                                                var r = new uu(t.url, !0),
                                                i = this._transformQuery(t, e, r);
                                                i && (n.url = r.toString());
                                                var o,
                                                a = i ? r : new uu(t.url, !0);
                                                a.query.cust_params && (o = $c.parse(a.query.cust_params), n.bidder = o.hb_bidder, n.cust_params = o),
                                                n.url_parsed = a
                                            } catch (t) {
                                                n.hasError = !0,
                                                n.message = t.message,
                                                n.bidder = "error",
                                                console.log(t.message)
                                            }
                                            return n
                                        }
                                    }, {
                                        key: "_transformQuery",
                                        value: function (e, t, n) {
                                            var r = this;
                                            if (e && t && e.tnl_keys) {
                                                var i = this.options.vast_query;
                                                if (t.retry_on_success && this.options.retry_on_success && hu(this.options.retry_on_success.vast_query) ? i = this.options.retry_on_success.vast_query : t.retry_on_failure && this.options.retry_on_failure && hu(this.options.retry_on_failure.vast_query) && (i = this.options.retry_on_failure.vast_query), hu(i = du(i))) {
                                                    var o = n.query;
                                                    if (i.$$remove) {
                                                        for (var a in o)
                                                            new RegExp(i.$$remove, "i").test(a) && delete o[a];
                                                        delete i.$$remove
                                                    }
                                                    var s = $c.parse(o.cust_params);
                                                    if (i.cust_params && i.cust_params.$$remove) {
                                                        for (var c in s)
                                                            new RegExp(i.cust_params.$$remove, "i").test(c) && delete s[c];
                                                        delete i.cust_params.$$remove
                                                    }
                                                    n = this.macros.transform(i, {
                                                        get: function (t) {
                                                            return f(this, r),
                                                            e.tnl_keys[t.toLowerCase()]
                                                        }
                                                        .bind(this)
                                                    });
                                                    return o.cust_params = s,
                                                    cd(o, n),
                                                    o.cust_params = $c.stringify(o.cust_params),
                                                    !0
                                                }
                                            }
                                        }
                                    }, {
                                        key: "_isT4R",
                                        value: function (t) {
                                            var e,
                                            n,
                                            r,
                                            i,
                                            o,
                                            a,
                                            s,
                                            c = null === (c = this._adrequest_user_context) || void 0 === c ? void 0 : c.tnl_ad_pos;
                                            return c && ((null == t || null === (e = t.contentType) || void 0 === e ? void 0 : e.startsWith("image/")) || "text" === (null == t ? void 0 : t.contentType)) && ("preroll" === c && (null === (t = this.gameData) || void 0 === t || null === (n = t.pAds) || void 0 === n || null === (r = n.t4r) || void 0 === r ? void 0 : r.disabledd) || "midroll" === c && (null === (r = this.gameData) || void 0 === r || null === (i = r.mAds) || void 0 === i || null === (o = i.t4r) || void 0 === o ? void 0 : o.disabledd) || "rewarded" === c && (null === (c = this.gameData) || void 0 === c || null === (a = c.rAds) || void 0 === a || null === (s = a.t4r) || void 0 === s ? void 0 : s.disabledd))
                                        }
                                    }, {
                                        key: "_isVMAP",
                                        value: function (t) {
                                            var e,
                                            n,
                                            r,
                                            i,
                                            o,
                                            a,
                                            s,
                                            c;
                                            if (!t)
                                                return !1;
                                            var u = "preroll" === t && (!0 === (null === (e = this.gameData) || void 0 === e || null === (n = e.pAds) || void 0 === n ? void 0 : n.vmap) || !0 === (null === (n = this.gameData) || void 0 === n || null === (r = n.pAds) || void 0 === r || null === (i = r.vmap) || void 0 === i ? void 0 : i.disabledd)) || "midroll" === t && (!0 === (null === (i = this.gameData) || void 0 === i || null === (o = i.mAds) || void 0 === o ? void 0 : o.vmap) || !0 === (null === (o = this.gameData) || void 0 === o || null === (a = o.mAds) || void 0 === a || null === (s = a.vmap) || void 0 === s ? void 0 : s.disabledd)) || "rewarded" === t && (!0 === (null === (s = this.gameData) || void 0 === s || null === (c = s.rAds) || void 0 === c ? void 0 : c.vmap) || !0 === (null === (c = this.gameData) || void 0 === c || null === (u = c.rAds) || void 0 === u || null === (d = u.vmap) || void 0 === d ? void 0 : d.disabledd));
                                            if (!u)
                                                return !1;
                                            var d = this._get_vmap_config(t),
                                            t = this.adCounter[t];
                                            return void 0 !== (null == d ? void 0 : d.start) ? t >= (null == d ? void 0 : d.start) : u
                                        }
                                    }, {
                                        key: "_getT4ROptions",
                                        value: function () {
                                            var t,
                                            e,
                                            n,
                                            r,
                                            i;
                                            switch (null === (t = this._adrequest_user_context) || void 0 === t ? void 0 : t.tnl_ad_pos) {
                                            case "preroll":
                                                return null === (e = this.gameData) || void 0 === e || null === (n = e.pAds) || void 0 === n ? void 0 : n.t4r;
                                            case "midroll":
                                                return null === (n = this.gameData) || void 0 === n || null === (r = n.mAds) || void 0 === r ? void 0 : r.t4r;
                                            case "rewarded":
                                                return null === (r = this.gameData) || void 0 === r || null === (i = r.rAds) || void 0 === i ? void 0 : i.t4r
                                            }
                                        }
                                    }, {
                                        key: "_is_completed",
                                        value: function (t) {
                                            var e = t.getContentType(),
                                            t = t.getAdPodInfo();
                                            return !(!e.startsWith("image/") && "text" !== e && 1 !== t.getTotalAds())
                                        }
                                    }, {
                                        key: "_get_vmap_context",
                                        value: function (t) {
                                            var e = t.adtag,
                                            n = t.position,
                                            r = t.config,
                                            i = t.dp,
                                            o = this._createCustomAdVastUrl(null == r ? void 0 : r.vast_1) || e,
                                            t = this._createCustomAdVastUrl(null == r ? void 0 : r.vast_2) || e,
                                            e = null != r && r.vast_1 ? void 0 : i,
                                            i = null != r && r.vast_2 ? void 0 : i;
                                            return {
                                                adtag_url_1: null == o ? void 0 : o.url,
                                                adtag_url_2: null == t ? void 0 : t.url,
                                                position: n,
                                                dp_1: e,
                                                dp_2: i
                                            }
                                        }
                                    }, {
                                        key: "_get_vmap_config",
                                        value: function (t) {
                                            var e,
                                            n,
                                            r,
                                            i,
                                            o;
                                            switch (t) {
                                            case "preroll":
                                                return null === (e = this.gameData) || void 0 === e || null === (n = e.pAds) || void 0 === n ? void 0 : n.vmap;
                                            case "midroll":
                                                return null === (n = this.gameData) || void 0 === n || null === (r = n.mAds) || void 0 === r ? void 0 : r.vmap;
                                            case "rewarded":
                                                return null === (r = this.gameData) || void 0 === r || null === (i = r.rAds) || void 0 === i ? void 0 : i.vmap;
                                            default:
                                                return null === (i = this.gameData) || void 0 === i || null === (o = i.pAds) || void 0 === o ? void 0 : o.vmap
                                            }
                                        }
                                    }, {
                                        key: "_isDP",
                                        value: function (t, e) {
                                            return "1" !== (null == e ? void 0 : e.nf)
                                        }
                                    }, {
                                        key: "_create_dp_context",
                                        value: function (n, a, s) {
                                            var c = this;
                                            return new Promise(function (r) {
                                                var i = this;
                                                f(this, c);
                                                try {
                                                    if (!this._isDP(n, s))
                                                        return this.msgrt.send("dp.na", {
                                                            message: "rule"
                                                        }), r();
                                                    var t = {
                                                        id: this.topDomain || this.parentDomain,
                                                        au: n || "unknown",
                                                        ty: "video",
                                                        aid: this.gameData.gameId,
                                                        tag: a
                                                    },
                                                    e = new Qu(this.gameData).checkCustomParams();
                                                    e && (t.cp = e);
                                                    var o = encodeURIComponent(Pd(JSON.stringify(t)));
                                                    fetch("https://tag.atom.gamedistribution.com/v1/atm?ar=".concat(o)).then(function (t) {
                                                        return f(this, i),
                                                        t.json()
                                                    }
                                                        .bind(this)).then(function (t) {
                                                        if (f(this, i), !t || !t.p)
                                                            return this.msgrt.send("dp.na", {
                                                                message: "atom"
                                                            }), r();
                                                        var e,
                                                        n = new uu(a, !0);
                                                        null !== (e = n.query) && void 0 !== e && e.cust_params ? ((e = $c.parse(n.query.cust_params)).fp = t.p / 100, n.query.cust_params = $c.stringify(e), this.msgrt.send("dp.fp", {
                                                                message: e.fp
                                                            })) : this.msgrt.send("dp.fp", {
                                                            message: "n/a"
                                                        }),
                                                        r({
                                                            id: Date.now(),
                                                            error_url: "https://tag.atom.gamedistribution.com/v1/err?ar=".concat(o, "&ec=[ERRORCODE]"),
                                                            impression_url: "https://tag.atom.gamedistribution.com/v1/imp?ar=".concat(o),
                                                            adtag_url: n.toString()
                                                        })
                                                    }
                                                        .bind(this)).catch(function (t) {
                                                        f(this, i),
                                                        this.msgrt.send("dp.err", {
                                                            message: (null == t ? void 0 : t.message) || t
                                                        }),
                                                        r()
                                                    }
                                                        .bind(this))
                                                } catch (t) {
                                                    this.msgrt.send("dp.err", {
                                                        message: (null == t ? void 0 : t.message) || t
                                                    }),
                                                    r()
                                                }
                                            }
                                                .bind(this))
                                        }
                                    }, {
                                        key: "_create_dp_display_context",
                                        value: function () {
                                            var o = this;
                                            return new Promise(function (e) {
                                                var n = this;
                                                f(this, o);
                                                try {
                                                    var t = {
                                                        id: this.topDomain || this.parentDomain,
                                                        au: "display",
                                                        ty: "display",
                                                        aid: this.gameData.gameId
                                                    },
                                                    r = new Qu(this.gameData).checkCustomParams();
                                                    r && (t.cp = r);
                                                    var i = encodeURIComponent(Pd(JSON.stringify(t)));
                                                    fetch("https://tag.atom.gamedistribution.com/v1/atm?ar=".concat(i)).then(function (t) {
                                                        return f(this, n),
                                                        t.json()
                                                    }
                                                        .bind(this)).then(function (t) {
                                                        if (f(this, n), !t || !t.p)
                                                            return this.msgrt.send("dp.na", {
                                                                message: "atom"
                                                            }), e();
                                                        this.msgrt.send("dp.fp", {
                                                            message: t.p / 100
                                                        }),
                                                        e({
                                                            params: {
                                                                fp: t.p / 100
                                                            },
                                                            error_url: "https://tag.atom.gamedistribution.com/v1/err?ar=".concat(i),
                                                            impression_url: "https://tag.atom.gamedistribution.com/v1/imp?ar=".concat(i)
                                                        })
                                                    }
                                                        .bind(this)).catch(function (t) {
                                                        f(this, n),
                                                        this.msgrt.send("dp.err", {
                                                            message: (null == t ? void 0 : t.message) || t
                                                        }),
                                                        e()
                                                    }
                                                        .bind(this))
                                                } catch (t) {
                                                    this.msgrt.send("dp.err", {
                                                        message: (null == t ? void 0 : t.message) || t
                                                    }),
                                                    e()
                                                }
                                            }
                                                .bind(this))
                                        }
                                    }
                                ]), al),
                        it = be,
                        Jd = p,
                        Xd = en,
                        Zd = ie,
                        tl = Vt,
                        el = h,
                        nl = S,
                        ie = C,
                        Ct = Ct,
                        It = It("slice"),
                        Ct = Ct("slice", {
                            ACCESSORS: !0,
                            0: 0,
                            1: 2
                        }),
                        rl = ie("species"),
                        il = [].slice,
                        ol = Math.max;
                        function al(t, e, n) {
                            var r = this;
                            if (zn(this, al), Yd)
                                return Yd;
                            var i = {
                                debug: !1,
                                width: 640,
                                height: 360,
                                locale: "en"
                            };
                            (Yd = this).options = e ? Su(i, e) : i,
                            this.prefix = "gdsdk__",
                            this.adsLoader = null,
                            this.adsManager = null,
                            this.adDisplayContainer = null,
                            this.eventBus = new Ku,
                            this.safetyTimer = null,
                            this.containerTransitionSpeed = 0,
                            this.adCounter = {},
                            this.adPrerollCount = 0,
                            this.adMidrollCount = 0,
                            this.adRewardedCount = 0,
                            this.preloadedAdType = null,
                            this.requestRunning = !1,
                            this.parentDomain = n.parentDomain,
                            this.topDomain = n.topDomain,
                            this.parentURL = n.parentURL,
                            this.adDisplayContainerInitialized = !1,
                            this.IMASampleTags = {
                                interstitial: ["https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=", "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dredirectlinear&correlator=", "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dredirecterror&correlator="],
                                rewarded: ["https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator="]
                            },
                            this.atom_display,
                            this.userAllowedPersonalizedAds = 0 <= document.location.search.indexOf("gdpr-targeting=0") || 0 <= document.cookie.indexOf("ogdpr_advertisement=0") ? "0" : "1",
                            this.parentDomain.includes("girlsgogames") && (this.userAllowedPersonalizedAds = !1),
                            this.thirdPartyContainer = "" !== t ? document.getElementById(t) : null,
                            this.options.width = "number" == typeof this.options.width ? this.options.width : "100%" === this.options.width ? 640 : this.options.width.replace(/[^0-9]/g, ""),
                            this.options.height = "number" == typeof this.options.height ? this.options.height : "100%" === this.options.height ? 360 : this.options.height.replace(/[^0-9]/g, "");
                            n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                            t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                            this.options.width = this.thirdPartyContainer ? this.thirdPartyContainer.offsetWidth : n,
                            this.options.height = this.thirdPartyContainer ? this.thirdPartyContainer.offsetHeight : t,
                            this.gameId = "0",
                            this.category = "",
                            this.tags = [],
                            this.eventCategory = "AD",
                            this.eventBus.subscribe("LOADED", function () {
                                f(this, r),
                                this._clearSafetyTimer("LOADED"),
                                this._startSafetyTimer(8e3, "LOADED")
                            }
                                .bind(this), "ima"),
                            this.eventBus.subscribe("STARTED", function () {
                                f(this, r),
                                this._clearSafetyTimer("STARTED")
                            }
                                .bind(this), "ima")
                        }
                        it({
                            target: "Array",
                            proto: !0,
                            forced: !It || !Ct
                        }, {
                            slice: function (t, e) {
                                var n,
                                r,
                                i,
                                o = el(this),
                                a = tl(o.length),
                                s = Zd(t, a),
                                c = Zd(void 0 === e ? a : e, a);
                                if (Xd(o) && ((n = "function" == typeof(n = o.constructor) && (n === Array || Xd(n.prototype)) || Jd(n) && null === (n = n[rl]) ? void 0 : n) === Array || void 0 === n))
                                    return il.call(o, s, c);
                                for (r = new(void 0 === n ? Array : n)(ol(c - s, 0)), i = 0; s < c; s++, i++)
                                    s in o && nl(r, i, o[s]);
                                return r.length = i,
                                r
                            }
                        });
                        var sl = N,
                        cl = Ce,
                        ul = Xe,
                        dl = Ke,
                        ll = ce,
                        hl = Vt,
                        fl = S,
                        pl = Ot;
                        be({
                            target: "Array",
                            stat: !0,
                            forced: !X(function (t) {
                                Array.from(t)
                            })
                        }, {
                            from: function (t) {
                                var e,
                                n,
                                r,
                                i,
                                o,
                                a,
                                s = dl(t),
                                c = "function" == typeof this ? this : Array,
                                u = arguments.length,
                                d = 1 < u ? arguments[1] : void 0,
                                l = void 0 !== d,
                                t = pl(s),
                                h = 0;
                                if (l && (d = ul(d, 2 < u ? arguments[2] : void 0, 2)), null == t || c == Array && ll(t))
                                    for (n = new c(e = hl(s.length)); h < e; h++)
                                        a = l ? d(s[h], h) : s[h], fl(n, h, a);
                                else
                                    for (o = (i = t.call(s)).next, n = new c; !(r = o.call(i)).done; h++)
                                        a = l ? function (t, e, n, r) {
                                            try {
                                                return r ? e(sl(n)[0], n[1]) : e(n)
                                            } catch (e) {
                                                throw cl(t),
                                                e
                                            }
                                        }
                                (i, d, [r.value, h], !0) : r.value,
                                fl(n, h, a);
                                return n.length = h,
                                n
                            }
                        });
                        var gl,
                        S = !i(function () {
                            function t() {}
                            return t.prototype.constructor = null,
                            Object.getPrototypeOf(new t) !== t.prototype
                        }),
                        ml = x,
                        vl = Ke,
                        Ot = S,
                        yl = kt("IE_PROTO"),
                        bl = Object.prototype,
                        X = Ot ? Object.getPrototypeOf : function (t) {
                            return t = vl(t),
                            ml(t, yl) ? t[yl] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? bl : null
                        },
                        i = X,
                        Ke = $,
                        S = x,
                        kt = C("iterator"),
                        Ot = !1;
                        [].keys && ("next" in(x = [].keys()) ? (x = i(i(x))) !== Object.prototype && (gl = x) : Ot = !0),
                        S(gl = null == gl ? {}
                             : gl, kt) || Ke(gl, kt, function () {
                            return this
                        });
                        function _l() {
                            return this
                        }
                        var Ot = {
                            IteratorPrototype: gl,
                            BUGGY_SAFARI_ITERATORS: Ot
                        },
                        wl = Ot.IteratorPrototype,
                        Al = Xt,
                        El = d,
                        kl = at,
                        xl = sr,
                        Sl = function () {
                            return this
                        },
                        Dl = be,
                        Tl = X,
                        Rl = Yr,
                        Ol = at,
                        Cl = $,
                        Il = Y.exports,
                        Pl = sr,
                        Ll = Ot.IteratorPrototype,
                        jl = Ot.BUGGY_SAFARI_ITERATORS,
                        Bl = C("iterator"),
                        Ml = "values",
                        Ul = "entries",
                        Y = function (t, e, n, r, i, o, a) {
                            !function (t, e, n) {
                                e += " Iterator";
                                t.prototype = Al(wl, {
                                    next: El(1, n)
                                }),
                                kl(t, e, !1),
                                xl[e] = Sl
                            }
                            (n, e, r);
                            function s(t) {
                                if (t === i && p)
                                    return p;
                                if (!jl && t in h)
                                    return h[t];
                                switch (t) {
                                case "keys":
                                case Ml:
                                case Ul:
                                    return function () {
                                        return new n(this, t)
                                    }
                                }
                                return function () {
                                    return new n(this)
                                }
                            }
                            var c,
                            u,
                            d = e + " Iterator",
                            l = !1,
                            h = t.prototype,
                            f = h[Bl] || h["@@iterator"] || i && h[i],
                            p = !jl && f || s(i),
                            r = "Array" == e && h.entries || f;
                            if (r && (t = Tl(r.call(new t)), Ll !== Object.prototype && t.next && (Tl(t) !== Ll && (Rl ? Rl(t, Ll) : "function" != typeof t[Bl] && Cl(t, Bl, _l)), Ol(t, d, !0))), i == Ml && f && f.name !== Ml && (l = !0, p = function () {
                                    return f.call(this)
                                }), h[Bl] !== p && Cl(h, Bl, p), Pl[e] = p, i)
                                if (c = {
                                        values: s(Ml),
                                        keys: o ? p : s("keys"),
                                        entries: s(Ul)
                                    }, a)
                                    for (u in c)
                                        !jl && !l && u in h || Il(h, u, c[u]);
                                else
                                    Dl({
                                        target: e,
                                        proto: !0,
                                        forced: jl || l
                                    }, c);
                            return c
                        },
                        Nl = Ea.charAt,
                        Ot = Pt,
                        Ea = Y,
                        Gl = "String Iterator",
                        Fl = Ot.set,
                        zl = Ot.getterFor(Gl);
                        Ea(String, "String", function (t) {
                            Fl(this, {
                                type: Gl,
                                string: String(t),
                                index: 0
                            })
                        }, function () {
                            var t = zl(this),
                            e = t.string,
                            n = t.index;
                            return n >= e.length ? {
                                value: void 0,
                                done: !0
                            }
                             : (n = Nl(e, n), t.index += n.length, {
                                value: n,
                                done: !1
                            })
                        }),
                        ge("iterator");
                        var ql = h,
                        Be = Be,
                        sr = sr,
                        Pt = Pt,
                        Y = Y,
                        Vl = "Array Iterator",
                        Kl = Pt.set,
                        Hl = Pt.getterFor(Vl),
                        Y = Y(Array, "Array", function (t, e) {
                            Kl(this, {
                                type: Vl,
                                target: ql(t),
                                index: 0,
                                kind: e
                            })
                        }, function () {
                            var t = Hl(this),
                            e = t.target,
                            n = t.kind,
                            r = t.index++;
                            return !e || r >= e.length ? {
                                value: t.target = void 0,
                                done: !0
                            }
                             : "keys" == n ? {
                                value: r,
                                done: !1
                            }
                             : "values" == n ? {
                                value: e[r],
                                done: !1
                            }
                             : {
                                value: [r, e[r]],
                                done: !1
                            }
                        }, "values");
                        sr.Arguments = sr.Array,
                        Be("keys"),
                        Be("values"),
                        Be("entries");
                        var Wl,
                        $l = n,
                        Yl = s,
                        Ql = Y,
                        Jl = $,
                        C = C,
                        Xl = C("iterator"),
                        Zl = C("toStringTag"),
                        th = Ql.values;
                        for (Wl in Yl) {
                            var eh = $l[Wl],
                            nh = eh && eh.prototype;
                            if (nh) {
                                if (nh[Xl] !== th)
                                    try {
                                        Jl(nh, Xl, th)
                                    } catch (f) {
                                        nh[Xl] = th
                                    }
                                if (nh[Zl] || Jl(nh, Zl, Wl), Yl[Wl])
                                    for (var rh in Ql)
                                        if (nh[rh] !== Ql[rh])
                                            try {
                                                Jl(nh, rh, Ql[rh])
                                            } catch (f) {
                                                nh[rh] = Ql[rh]
                                            }
                            }
                        }
                        function ih(t, e) {
                            (null == e || e > t.length) && (e = t.length);
                            for (var n = 0, r = new Array(e); n < e; n++)
                                r[n] = t[n];
                            return r
                        }
                        function oh(e, t) {
                            var n,
                            r = Object.keys(e);
                            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), r.push.apply(r, n)),
                            r
                        }
                        function ah(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? oh(Object(n), !0).forEach(function (t) {
                                    Nn(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oh(Object(n)).forEach(function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }
                        function sh(t, e) {
                            ph[t] = ah(ah({}, e), {}, {
                                isLoading: !1
                            })
                        }
                        function ch(t) {
                            var r = this,
                            i = t.id,
                            o = t.src;
                            return new Promise(function (t, e) {
                                var n;
                                f(this, r),
                                document.getElementById(i) ? t() : ((n = document.createElement("script")).onload = function () {
                                    t()
                                }, n.id = i, n.setAttribute("crossorigin", !0), n.src = o, document.head.appendChild(n))
                            }
                                .bind(this))
                        }
                        function uh(t) {
                            var e = this;
                            zn(this, uh),
                            Nn(this, "load", Fn(Hn.mark(function t() {
                                        return Hn.wrap(function (t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2,
                                                    gh(e.moduleName);
                                                case 2:
                                                    e.stone = t.sent;
                                                case 3:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }, t)
                                    }))),
                            Nn(this, "promo", Fn(Hn.mark(function t() {
                                        return Hn.wrap(function (t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    if (e.stone) {
                                                        t.next = 3;
                                                        break
                                                    }
                                                    return t.next = 3,
                                                    e.load();
                                                case 3:
                                                    return t.abrupt("return", e.stone[e.modulePromo]);
                                                case 4:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }, t)
                                    }))),
                            this.moduleName = "GDPromoByOrbit",
                            this.modulePromo = t,
                            this.moduleConfig = {
                                source: "https://pm.gamedistribution.com/@bygd/gd-sdk-stone-dynamic/1.0.7/dist/" + this.modulePromo.toLowerCase() + "/iife/index.js",
                                dependencies: ["react", "react-dom", "material-ui-core"]
                            },
                            sh(this.moduleName, this.moduleConfig)
                        }
                        function dh(t) {
                            var e = this;
                            zn(this, dh),
                            Nn(this, "load", Fn(Hn.mark(function t() {
                                        return Hn.wrap(function (t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2,
                                                    gh(e.moduleName);
                                                case 2:
                                                    e.air = t.sent;
                                                case 3:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }, t)
                                    }))),
                            Nn(this, "splash", Fn(Hn.mark(function t() {
                                        return Hn.wrap(function (t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    if (e.air) {
                                                        t.next = 3;
                                                        break
                                                    }
                                                    return t.next = 3,
                                                    e.load();
                                                case 3:
                                                    return t.abrupt("return", e.air[e.moduleSplash]);
                                                case 4:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }, t)
                                    })));
                            var n = t.template || "pluto",
                            r = t.version || "1.2.0",
                            i = t.package || "gd-sdk-air-dynamic",
                            t = t.dependencies || [];
                            this.moduleName = "GDSplashDynamic",
                            this.moduleSplash = n.charAt(0).toUpperCase() + n.slice(1),
                            this.moduleConfig = {
                                source: "https://pm.gamedistribution.com/@bygd/".concat(i, "/").concat(r, "/dist/").concat(n.toLowerCase(), "/iife/index.js"),
                                dependencies: t
                            },
                            sh(this.moduleName, this.moduleConfig)
                        }
                        function lh(t, e) {
                            console.log(t, e)
                        }
                        var hh,
                        fh = {
                            react: {
                                src: "https://pm.gamedistribution.com/react/16.14.0/umd/react.production.min.js",
                                name: "React"
                            },
                            "react-dom": {
                                src: "https://pm.gamedistribution.com/react-dom/16.14.0/umd/react-dom.production.min.js",
                                name: "ReactDOM"
                            },
                            redux: {
                                src: "https://pm.gamedistribution.com/redux/4.0.5/dist/redux.min.js",
                                name: "Redux"
                            },
                            "react-redux": {
                                src: "https://pm.gamedistribution.com/react-redux/7.2.1/dist/react-redux.min.js",
                                name: "ReactRedux"
                            },
                            "material-ui-core": {
                                src: "https://pm.gamedistribution.com/@material-ui/core/4.11.3/umd/material-ui.production.min.js",
                                name: "MaterialUI"
                            }
                        },
                        ph = {},
                        gh = (hh = Fn(Hn.mark(function t(e) {
                                        var n,
                                        r,
                                        i,
                                        o,
                                        a,
                                        s;
                                        return Hn.wrap(function (t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    if (n = window[e])
                                                        return t.abrupt("return", n);
                                                    t.next = 3;
                                                    break;
                                                case 3:
                                                    if ((r = ph[e]).isLoading)
                                                        return t.abrupt("return");
                                                    t.next = 6;
                                                    break;
                                                case 6:
                                                    r.isLoading = !0,
                                                    i = function t(e, n) {
                                                        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                        if (!r) {
                                                            if (Array.isArray(e) || (r = function (t) {
                                                                    if (t) {
                                                                        if ("string" == typeof t)
                                                                            return ih(t, void 0);
                                                                            var e = Object.prototype.toString.call(t).slice(8, -1);
                                                                            return "Map" === (e = "Object" === e && t.constructor ? t.constructor.name : e) || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ih(t, void 0) : void 0
                                                                        }
                                                                    }
                                                                        (e)) || n && e && "number" == typeof e.length) {
                                                                    r && (e = r);
                                                                    var i = 0,
                                                                    n = function () {};
                                                                    return {
                                                                        s: n,
                                                                        n: function () {
                                                                            return i >= e.length ? {
                                                                                done: !0
                                                                            }
                                                                             : {
                                                                                done: !1,
                                                                                value: e[i++]
                                                                            }
                                                                        },
                                                                        e: function (t) {
                                                                            throw t
                                                                        },
                                                                        f: n
                                                                    }
                                                                }
                                                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                        }
                                                        var o,
                                                        a = !0,
                                                        s = !1;
                                                        return {
                                                            s: function () {
                                                                r = r.call(e)
                                                            },
                                                            n: function () {
                                                                var t = r.next();
                                                                return a = t.done,
                                                                t
                                                            },
                                                            e: function (t) {
                                                                s = !0,
                                                                o = t
                                                            },
                                                            f: function () {
                                                                try {
                                                                    a || null == r.return || r.return()
                                                                }
                                                                finally {
                                                                    if (s)
                                                                        throw o
                                                                }
                                                            }
                                                        }
                                                    }
                                                    (r.dependencies),
                                                    t.prev = 8,
                                                    i.s();
                                                case 10:
                                                    if ((a = i.n()).done) {
                                                        t.next = 26;
                                                        break
                                                    }
                                                    if (o = a.value, t.prev = 12, s = fh[o].name, window[s])
                                                        return t.abrupt("continue", 24);
                                                    t.next = 16;
                                                    break;
                                                case 16:
                                                    return t.next = 18,
                                                    ch({
                                                        id: o,
                                                        src: fh[o].src
                                                    });
                                                case 18:
                                                    t.next = 24;
                                                    break;
                                                case 20:
                                                    t.prev = 20,
                                                    t.t0 = t.catch(12),
                                                    a = o.id,
                                                    s = o.src,
                                                    console.log("Could not load external script ".concat(a, " ").concat(s), t.t0);
                                                case 24:
                                                    t.next = 10;
                                                    break;
                                                case 26:
                                                    t.next = 31;
                                                    break;
                                                case 28:
                                                    t.prev = 28,
                                                    t.t1 = t.catch(8),
                                                    i.e(t.t1);
                                                case 31:
                                                    return t.prev = 31,
                                                    i.f(),
                                                    t.finish(31);
                                                case 34:
                                                    return t.prev = 34,
                                                    t.next = 37,
                                                    ch({
                                                        id: e,
                                                        src: r.source
                                                    });
                                                case 37:
                                                    n = window[e],
                                                    t.next = 43;
                                                    break;
                                                case 40:
                                                    t.prev = 40,
                                                    t.t2 = t.catch(34),
                                                    console.log("Could not load module ".concat(e, " ").concat(r.source, "."), t.t2);
                                                case 43:
                                                    return r.isLoading = !1,
                                                    t.abrupt("return", n);
                                                case 45:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }, t, null, [[8, 28, 31, 34], [12, 20], [34, 40]])
                                    })), function (t) {
                        return hh.apply(this, arguments)
                    }),
                        mh = {},
                        vh = {},
                        yh = null;
                        function bh() {
                            for (var t, e = window, n = null, r = null; !t; ) {
                                try {
                                    if ("function" == typeof e.__tcfapi || "function" == typeof e.__cmp) {
                                        n = "function" == typeof e.__tcfapi ? (r = 2, e.__tcfapi) : (r = 1, e.__cmp),
                                        t = e;
                                        break
                                    }
                                } catch (t) {}
                                try {
                                    if (e.frames.__tcfapiLocator) {
                                        r = 2,
                                        t = e;
                                        break
                                    }
                                } catch (t) {}
                                try {
                                    if (e.frames.__cmpLocator) {
                                        r = 1,
                                        t = e;
                                        break
                                    }
                                } catch (t) {}
                                if (e === window.top)
                                    break;
                                e = e.parent
                            }
                            return mh.version = r,
                            mh.frame = t,
                            mh.function = n,
                            mh.version
                        }
                        function _h(r) {
                            var e = this;
                            return yh = yh || new Promise(function (n) {
                                function t(t, e) {
                                    if (lh("Received a response from CMP", t), e) {
                                        if (!1 !== t.gdprApplies)
                                            return "tcloaded" === t.eventStatus || "useractioncomplete" === t.eventStatus ? (("boolean" != typeof(e = t && "boolean" == typeof t.gdprApplies ? t.gdprApplies : r.defaultGdprScope) || !0 === e && "string" != typeof t.tcString) && n({
                                                    result: "cmpUnexpectedResponse",
                                                    cmp: mh,
                                                    consentData: t
                                                }), void n({
                                                    result: "ok",
                                                    consentData: t
                                                })) : void 0;
                                        n({
                                            result: "ok",
                                            consentData: t
                                        })
                                    } else
                                        n({
                                            result: "cmpCallFailed"
                                        })
                                }
                                f(this, e),
                                bh(),
                                mh.frame ? 2 === mh.version ? (lh("TCF v2 CMP found. Fetching the consent."), mh.function ? (lh("CMP API is directly accessible, calling it now..."), mh.function("addEventListener", mh.version, t)) : (lh("CMP API is outside the current iframe, calling it now..."), function (o, t) {
                                        var a = this,
                                        s = "__tcfapi";
                                        window[s] = function (t, e, n, r) {
                                            f(this, a);
                                            var i = Math.random() + "",
                                            e = Nn({}, "".concat(s, "Call"), {
                                                command: t,
                                                parameter: r,
                                                callId: i,
                                                version: e
                                            });
                                            vh[i] = n,
                                            o.postMessage(e, "*")
                                        }
                                        .bind(this),
                                        window.addEventListener("message", function t(e) {
                                            var n = "".concat(s, "Return");
                                            (e = "string" == typeof e.data && 0 <= e.data.indexOf(n) ? JSON.parse(e.data) : e.data)[n] && e[n].callId && (n = e[n], void 0 !== vh[n.callId] && vh[n.callId](n.returnValue, n.success))
                                        }, !1),
                                        window[s]("addEventListener", mh.version, t)
                                    }
                                        (mh.frame, t))) : n({
                                    result: "cmpVersionNotV2",
                                    cmp: mh
                                }) : n({
                                    result: "cmpNotFound"
                                })
                            }
                                    .bind(this))
                        }
                        var wh,
                        Ah = (Vn(Eh, [{
                                        key: "track",
                                        value: (wh = Fn(Hn.mark(function t(e) {
                                                        var n,
                                                        r,
                                                        i,
                                                        o,
                                                        a;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    if (r = null == e || null === (n = e.visitor) || void 0 === n ? void 0 : n.visitorId) {
                                                                        t.next = 3;
                                                                        break
                                                                    }
                                                                    return t.abrupt("return");
                                                                case 3:
                                                                    return i = encodeURIComponent(this.productName),
                                                                    o = encodeURIComponent(r),
                                                                    t.prev = 5,
                                                                    a = "https://tracker-v4.gamedock.io/v1/events-tracker/track/product/".concat(i, "/user_id/").concat(o),
                                                                    t.next = 9,
                                                                    fetch(a, {
                                                                        method: "POST"
                                                                    });
                                                                case 9:
                                                                    t.next = 25;
                                                                    break;
                                                                case 12:
                                                                    return t.prev = 12,
                                                                    t.t0 = t.catch(5),
                                                                    console.log("GAME_DOCK. fail v4", t.t0),
                                                                    t.prev = 15,
                                                                    a = "https://tracker.gamedock.io/v1/events-tracker/track/product/".concat(i, "/user_id/").concat(o),
                                                                    t.next = 19,
                                                                    fetch(a, {
                                                                        method: "POST"
                                                                    });
                                                                case 19:
                                                                    t.next = 25;
                                                                    break;
                                                                case 22:
                                                                    t.prev = 22,
                                                                    t.t1 = t.catch(15),
                                                                    console.log("GAME_DOCK. fail v6", t.t1);
                                                                case 25:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this, [[5, 12], [15, 22]])
                                                    })), function (t) {
                                            return wh.apply(this, arguments)
                                        })
                                    }
                                ]), new Eh);
                        function Eh() {
                            zn(this, Eh),
                            this.productName = "Game Distribution"
                        }
                        function kh(e, t) {
                            var n,
                            r = Object.keys(e);
                            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), r.push.apply(r, n)),
                            r
                        }
                        function xh(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? kh(Object(n), !0).forEach(function (t) {
                                    Nn(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kh(Object(n)).forEach(function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }
                        var Sh,
                        Dh,
                        Th,
                        Rh,
                        Oh,
                        Ch,
                        Ih,
                        Ph,
                        Lh,
                        jh = null,
                        C = (Vn(Uh, [{
                                        key: "testConsent",
                                        value: function () {
                                            console.log("test-consent. Finding CMP");
                                            try {
                                                var t = bh();
                                                console.log("CMP found", t),
                                                Fn(Hn.mark(function t() {
                                                        var e;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2,
                                                                    _h({});
                                                                case 2:
                                                                    e = t.sent,
                                                                    console.log("After lookup IAB consent", e);
                                                                case 4:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t)
                                                    }))()
                                            } catch (t) {
                                                console.log("find CMP error", t)
                                            }
                                        }
                                    }, {
                                        key: "_sendLoaderDataEvent",
                                        value: function () {
                                            try {
                                                this.options.onLoaderEvent({
                                                    name: "LOADER_DATA",
                                                    message: {
                                                        game: this._gameData,
                                                        bridge: this._bridge
                                                    },
                                                    status: this._sdk_ready ? "success" : "error"
                                                })
                                            } catch (t) {}
                                        }
                                    }, {
                                        key: "isLoaded",
                                        value: function () {
                                            var t,
                                            e,
                                            n;
                                            return void 0 === this._isLoaded && (t = this._isTokenGameURL(), e = this._isExtHostedGameURL(), n = this._isMasterGameURL(), this._isLoaded = (t || e && !n) && this._gameData.loader.disabledd),
                                            this._isLoaded
                                        }
                                    }, {
                                        key: "setIsLoaded",
                                        value: function (t) {
                                            this._isLoaded = t
                                        }
                                    }, {
                                        key: "_sendLoadedEvent",
                                        value: function () {
                                            if (!this.isLoaded()) {
                                                this.setIsLoaded(!0);
                                                try {
                                                    this._sendTunnlEvent(1),
                                                    this.msgrt.send("loaded", {
                                                        message: this._hasBlocker ? "Has Blocker" : "No Blocker"
                                                    }),
                                                    this._initGamedockTracker(window.GamedockSDK, "gameplay")
                                                } catch (t) {}
                                            }
                                        }
                                    }, {
                                        key: "_safeInit",
                                        value: function () {
                                            this._checkUserDeclinedTracking(),
                                            this._checkWhitelabelPartner(),
                                            this._gdpr();
                                            var t = this._gameData.diagnostic;
                                            void 0 !== t && void 0 !== t.close_ga && !1 !== t.close_ga || this._bridge.isCoreSDKMode || this._loadGoogleAnalytics(),
                                            void 0 !== t && void 0 !== t.close_gamedock && !1 !== t.close_gamedock || this._bridge.isCoreSDKMode || this._bridge.noGamedockSDK || this._loadGamedockTracker(),
                                            void 0 !== t && void 0 !== t.close_minijuegos && !1 !== t.close_minijuegos || !this._bridge.isCoreSDKMode && !this._bridge.noMinijuegosSDK && 0 <= document.location.search.indexOf("mp_game_id") && this._loadMiniJuegosGratisTracker()
                                        }
                                    }, {
                                        key: "_initializeSDKWithGameData",
                                        value: (Lh = Fn(Hn.mark(function t(e, n) {
                                                        var r,
                                                        i = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0,
                                                                    t.next = 3,
                                                                    this._getGameData();
                                                                case 3:
                                                                    this._gameData = t.sent,
                                                                    this._bridge.isCoreSDKMode = !(!0 === this._gameData.disabledAds || !0 === (null === (r = this._gameData.disabledAds) || void 0 === r ? void 0 : r.disabledd)),
                                                                    this._safeInit(),
                                                                    this._checkGameId(),
                                                                    this._checkGameDeleted(),
                                                                    this._checkBlocking(),
                                                                    this._changeMidrollInDebugMode(),
                                                                    void 0 !== this._gameData.diagnostic && void 0 !== this._gameData.diagnostic.close_ads && !1 !== this._gameData.diagnostic.close_ads || (this.videoAdReady = this._initializeVideoAd().catch(function (t) {
                                                                            return f(this, i),
                                                                            console.error(t.message || t)
                                                                        }
                                                                                .bind(this))),
                                                                    this._sendSDKReady(),
                                                                    e(this._gameData),
                                                                    t.next = 20;
                                                                    break;
                                                                case 15:
                                                                    t.prev = 15,
                                                                    t.t0 = t.catch(0),
                                                                    this._sendSDKError(t.t0),
                                                                    this.onResumeGame(t.t0.message, "warning"),
                                                                    n(t.t0);
                                                                case 20:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this, [[0, 15]])
                                                    })), function (t, e) {
                                            return Lh.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_getDefaultOptions",
                                        value: function () {
                                            return {
                                                debug: !1,
                                                testing: !1,
                                                gameId: "4f3d7d38d24b740c95da2b03dc3a2333",
                                                prefix: "gdsdk__",
                                                onEvent: function (t) {},
                                                onLoaderEvent: function (t) {},
                                                flashSettings: {
                                                    adContainerId: "",
                                                    splashContainerId: ""
                                                },
                                                advertisementSettings: {},
                                                resumeGame: function () {},
                                                pauseGame: function () {},
                                                onInit: function (t) {},
                                                onError: function (t) {},
                                                loader: {}
                                            }
                                        }
                                    }, {
                                        key: "_extendDefaultOptions",
                                        value: function (t, e) {
                                            t = du(t);
                                            this.options = e ? Su(t, e) : t,
                                            this.options.gameId = this.options.gameId.trim()
                                        }
                                    }, {
                                        key: "_setConsoleBanner",
                                        value: function () {
                                            var t;
                                            this._bridge.noConsoleBanner || (t = console.log("%c %c %c GameDistribution.com HTML5 SDK | Version: 1.12.0 %c %c %c", "background: #9854d8", "background: #6c2ca7", "color: #fff; background: #450f78;", "background: #6c2ca7", "background: #9854d8", "background: #ffffff"), console.log.apply(console, t))
                                        }
                                    }, {
                                        key: "_sendTunnlEvent",
                                        value: function (t) {
                                            var e,
                                            t = {
                                                page_url: null !== (e = this._gameData.diagnostic && this._gameData.diagnostic.useTopDomains) && void 0 !== e && e ? this._topDomain : this._parentURL,
                                                game_id: this.options.gameId,
                                                eventtype: t,
                                                ts: Date.now()
                                            };
                                            fetch("https://ana.headerlift.com/event?".concat($c.stringify(t)))
                                        }
                                    }, {
                                        key: "_sendAdRequestContext",
                                        value: function (t) {
                                            this.msgrt.send("adctx", {
                                                message: t.adTag.bidder
                                            })
                                        }
                                    }, {
                                        key: "_checkWhitelabelPartner",
                                        value: function () {
                                            this._whitelabelPartner = !1;
                                            var t = Tu();
                                            t.hasOwnProperty("xanthophyll") && "true" === t.xanthophyll && (this._whitelabelPartner = !0, Uu("White label publisher", "".concat(this._whitelabelPartner), "success"))
                                        }
                                    }, {
                                        key: "_checkConsole",
                                        value: function () {
                                            try {
                                                if (!ju)
                                                    return;
                                                "developer.gamedistribution.com" === this._parentDomain ? (Lu("gd_debug_ex", !0), Lu("gd_disable_midroll_timer", !0), Lu("gd_tag", !0)) : "localhost:3000" === this._parentDomain && (Lu("gd_debug_ex", !0), Lu("gd_disable_midroll_timer", !0)),
                                                Iu("gd_debug_ex") && (this.openConsole(), this.msgrt.send("dev.console", {
                                                        message: this._parentDomain
                                                    }))
                                            } catch (t) {}
                                        }
                                    }, {
                                        key: "_checkUserDeclinedTracking",
                                        value: function () {
                                            this._userDeclinedTracking = this._bridge.isCoreSDKMode || 0 <= document.location.search.indexOf("gdpr-tracking=0") || 0 <= document.cookie.indexOf("ogdpr_tracking=0")
                                        }
                                    }, {
                                        key: "_initializeMessageRouter",
                                        value: function () {
                                            var t;
                                            this.msgrt = new Wu({
                                                gameId: this.options.gameId,
                                                hours: (new Date).getHours(),
                                                topDomain: this._topDomain,
                                                domain: this._parentDomain,
                                                referrer: this._parentURL,
                                                depth: Cu(),
                                                version: Oc,
                                                tracking: this._userDeclinedTracking,
                                                whitelabel: this._whitelabelPartner,
                                                platform: (t = navigator.userAgent || navigator.vendor || window.opera, /windows phone/i.test(t) ? "windows" : /android/i.test(t) ? "android" : /iPad|iPhone|iPod/.test(t) && !window.MSStream ? "ios" : ""),
                                                byloader: this._bridge.isTokenGameURL,
                                                isTokenGameURL: this._bridge.isTokenGameURL,
                                                isMasterGameURL: this._bridge.isMasterGameURL,
                                                isExtHostedGameURL: this._bridge.isExtHostedGameURL,
                                                byloaderVersion: this._bridge.version
                                            })
                                        }
                                    }, {
                                        key: "_loadGamedockTracker",
                                        value: function () {
                                            var e = this;
                                            try {
                                                var t = ["https://cdn.gamedock.io/gamedock-web-tracker/4.3.0/script/gamedock-sdk.min.js"];
                                                Ou(t[0], "GamedockSDK", {
                                                    alternates: t
                                                }).then(function () {
                                                    f(this, e);
                                                    var t = this._initGamedockTracker(window.GamedockSDK, "pageview");
                                                    Ah.track(t)
                                                }
                                                    .bind(this)).catch(function (t) {
                                                    f(this, e),
                                                    this._sendSDKError(t)
                                                }
                                                    .bind(this))
                                            } catch (t) {}
                                        }
                                    }, {
                                        key: "_initGamedockTracker",
                                        value: function (t, e) {
                                            if (!this._bridge.isCoreSDKMode) {
                                                t = t.initialize("gd", this._parentDomain);
                                                return t.tracking.trackEvent(e, {
                                                    pageId: this.options.gameId,
                                                    pageType: "game"
                                                }),
                                                t
                                            }
                                        }
                                    }, {
                                        key: "_loadMiniJuegosGratisTracker",
                                        value: function () {
                                            var e = this;
                                            window.mpConfig = {
                                                game: this.options.gameId,
                                                partner: "game-distribution"
                                            };
                                            var t = ["https://ext.minijuegosgratis.com/external-host/main.js"];
                                            Ou(t[0], "MinijuegosSDK", {
                                                alternates: t
                                            }).catch(function (t) {
                                                f(this, e),
                                                this._sendSDKError(t)
                                            }
                                                .bind(this))
                                        }
                                    }, {
                                        key: "_loadGoogleAnalytics",
                                        value: function () {
                                            var e = this,
                                            t = ["https://www.google-analytics.com/analytics.js"];
                                            Ou(t[0], "gdsdk_google_analytics", {
                                                alternates: t,
                                                error_prefix: "Blocked:",
                                                exists: function () {
                                                    return f(this, e),
                                                    window.ga
                                                }
                                                .bind(this)
                                            }).then(function () {
                                                f(this, e),
                                                window.ga("create", "UA-60359297-49", {
                                                    name: "gd",
                                                    cookieExpires: 7776e3,
                                                    sampleRate: 5
                                                }, "auto"),
                                                this._bridge.noGAPageView || window.ga("gd.send", "pageview"),
                                                this._userDeclinedTracking || window.ga("gd.set", "anonymizeIp", !0)
                                            }
                                                .bind(this)).catch(function (t) {
                                                f(this, e),
                                                this._sendSDKError(t)
                                            }
                                                .bind(this))
                                        }
                                    }, {
                                        key: "_subscribeToEvents",
                                        value: function () {
                                            var n = this;
                                            this.eventBus = new Ku,
                                            Nu.forEach(function (t) {
                                                var e = this;
                                                return f(this, n),
                                                this.eventBus.subscribe(t, function (t) {
                                                    return f(this, e),
                                                    this._onEvent(t)
                                                }
                                                    .bind(this), "sdk")
                                            }
                                                .bind(this)),
                                            this.eventBus.subscribe("AD_SDK_CANCELED", function () {
                                                f(this, n)
                                            }
                                                .bind(this), "sdk"),
                                            Gu.forEach(function (t) {
                                                var e = this;
                                                return f(this, n),
                                                this.eventBus.subscribe(t, function (t) {
                                                    return f(this, e),
                                                    this._onEvent(t)
                                                }
                                                    .bind(this), "ima")
                                            }
                                                .bind(this)),
                                            this.eventBus.subscribe("COMPLETE", function () {
                                                if (f(this, n), "developer.gamedistribution.com" === this._parentDomain || !0 === new RegExp("^localhost").test(this._parentDomain)) {
                                                    fetch("https://game.api.gamedistribution.com/game/v2/hasapi/".concat(this.options.gameId, "?timestamp=").concat((new Date).valueOf()));
                                                    try {
                                                        var t = JSON.stringify({
                                                            type: "GD_SDK_IMPLEMENTED",
                                                            gameID: this.options.gameId
                                                        });
                                                        window.location !== window.top.location ? window.top.postMessage(t, "*") : null !== window.opener && window.opener.location !== window.location && window.opener.postMessage(t, "*")
                                                    } catch (t) {}
                                                }
                                            }
                                                .bind(this), "ima"),
                                            this.eventBus.subscribe("CONTENT_PAUSE_REQUESTED", function () {
                                                return f(this, n),
                                                this.onPauseGame("New advertisements requested and loaded", "success")
                                            }
                                                .bind(this), "ima"),
                                            this.eventBus.subscribe("IMPRESSION", function (t) {
                                                f(this, n),
                                                this.msgrt.send("ad.impression")
                                            }
                                                .bind(this), "ima"),
                                            this.eventBus.subscribe("SKIPPED", function (t) {
                                                f(this, n)
                                            }
                                                .bind(this), "ima"),
                                            this.eventBus.subscribe("AD_ERROR", function (t) {
                                                f(this, n),
                                                this.msgrt.send("ad.error", {
                                                    message: t.message,
                                                    details: t.details
                                                })
                                            }
                                                .bind(this), "ima"),
                                            this.eventBus.subscribe("CLICK", function (t) {
                                                f(this, n)
                                            }
                                                .bind(this), "ima"),
                                            this.eventBus.subscribe("COMPLETE", function (t) {
                                                f(this, n)
                                            }
                                                .bind(this), "ima"),
                                            this.eventBus.subscribe("AD_SDK_REQUEST", function (t) {
                                                f(this, n),
                                                this._sendAdRequestContext(t.message)
                                            }
                                                .bind(this), "sdk"),
                                            this.eventBus.subscribe("SDK_ERROR", function (t) {
                                                f(this, n),
                                                t.message.startsWith("Blocked:") ? this._bridge.noBlockerEvent || (this.msgrt.send("error", {
                                                        message: t.message
                                                    }), this._hasBlocker || (this._hasBlocker = !0, this._sendTunnlEvent(3))) : this.msgrt.send("error", {
                                                    message: t.message
                                                })
                                            }
                                                .bind(this), "sdk"),
                                            this.eventBus.subscribe("AD_REQUEST", function (t) {
                                                f(this, n)
                                            }
                                                .bind(this), "sdk"),
                                            this.eventBus.subscribe("AD_REQUEST_KEYS_EMPTY", function (t) {
                                                f(this, n),
                                                this.msgrt.send("tunnl.keys.empty", {
                                                    message: t.message,
                                                    details: t.details
                                                })
                                            }
                                                .bind(this), "sdk"),
                                            this.eventBus.subscribe("AD_REQUEST_KEYS_FALLBACK", function (t) {
                                                f(this, n),
                                                this.msgrt.send("tunnl.keys.fallback", {
                                                    message: t.message,
                                                    details: t.details
                                                })
                                            }
                                                .bind(this), "sdk"),
                                            this.eventBus.subscribe("AD_T4R", function (t) {
                                                return f(this, n),
                                                this.msgrt.send("adt4r")
                                            }
                                                .bind(this), "sdk")
                                        }
                                    }, {
                                        key: "_gdpr",
                                        value: function () {
                                            var e = this,
                                            t = !this._bridge.isCoreSDKMode && 0 <= document.location.search.indexOf("gdpr-tracking"),
                                            n = 0 <= document.location.search.indexOf("gdpr-tracking=1"),
                                            r = !this._bridge.isCoreSDKMode && 0 <= document.location.search.indexOf("gdpr-targeting"),
                                            i = 0 <= document.location.search.indexOf("gdpr-targeting=1"),
                                            o = !this._bridge.isCoreSDKMode && 0 <= document.location.search.indexOf("gdpr-third-party"),
                                            a = 0 <= document.location.search.indexOf("gdpr-third-party=1");
                                            [{
                                                    name: "SDK_GDPR_TRACKING",
                                                    message: t ? n ? "Allowed" : "Not allowed" : "Not set",
                                                    status: n ? "success" : "warning",
                                                    label: t ? n ? "1" : "0" : "not set"
                                                }, {
                                                    name: "SDK_GDPR_TARGETING",
                                                    message: r ? i ? "Allowed" : "Not allowed" : "Not set",
                                                    status: i ? "success" : "warning",
                                                    label: r ? i ? "1" : "0" : "not set"
                                                }, {
                                                    name: "SDK_GDPR_THIRD_PARTY",
                                                    message: o ? a ? "Allowed" : "Not allowed" : "Not set",
                                                    status: a ? "success" : "warning",
                                                    label: o ? a ? "1" : "0" : "not set"
                                                }
                                            ].forEach(function (t) {
                                                f(this, e),
                                                this.eventBus.broadcast(t.name, {
                                                    name: t.name,
                                                    message: t.message,
                                                    status: t.status,
                                                    analytics: {
                                                        category: t.name,
                                                        action: this._parentDomain,
                                                        label: t.label
                                                    }
                                                })
                                            }
                                                .bind(this))
                                        }
                                    }, {
                                        key: "_checkGameId",
                                        value: function () {
                                            this.options.gameId === this._defaults.gameId && this._sendSDKError("Check correctness of your GAME ID. Otherwise, no revenue will be recorded.")
                                        }
                                    }, {
                                        key: "_getDefaultGameData",
                                        value: function () {
                                            return {
                                                gameId: this.options.gameId,
                                                disabledAds: !0,
                                                preroll: !0,
                                                midroll: 12e4,
                                                rewardedAds: !1,
                                                title: "",
                                                tags: [],
                                                category: "",
                                                assets: [],
                                                dmain: !0,
                                                sdk: this._getDefaultAdSDKData(),
                                                loader: this._getDefaultLoaderData(),
                                                splash: this._getDefaultSplashData(),
                                                promo: this._getDefaultPromoData(),
                                                dAds: this._getDefaultDisplayAdsData(),
                                                pAds: this._getDefaultPrerollAdsData(),
                                                mAds: this._getDefaultMidrollAdsData(),
                                                rAds: this._getDefaultRewardedAdsData()
                                            }
                                        }
                                    }, {
                                        key: "_getDefaultAdSDKData",
                                        value: function () {
                                            return {}
                                        }
                                    }, {
                                        key: "_getDefaultLoaderData",
                                        value: function () {
                                            return {}
                                        }
                                    }, {
                                        key: "_getDefaultSplashData",
                                        value: function () {
                                            return {}
                                        }
                                    }, {
                                        key: "_getDefaultPromoData",
                                        value: function () {
                                            return {}
                                        }
                                    }, {
                                        key: "_getDefaultDisplayAdsData",
                                        value: function () {
                                            return {
                                                disabledd: !0
                                            }
                                        }
                                    }, {
                                        key: "_getDefaultPrerollAdsData",
                                        value: function () {
                                            return {}
                                        }
                                    }, {
                                        key: "_getDefaultMidrollAdsData",
                                        value: function () {
                                            return {}
                                        }
                                    }, {
                                        key: "_getDefaultRewardedAdsData",
                                        value: function () {
                                            return {}
                                        }
                                    }, {
                                        key: "_getGameDataUrl",
                                        value: function () {
                                            var t = this._topDomain || this._parentDomain;
                                            return "https://game.api.gamedistribution.com/game/v4/get/".concat(this.options.gameId.replace(/-/g, ""), "/?domain=").concat(t, "&v=").concat(Oc, "&localTime=").concat((new Date).getHours())
                                        }
                                    }, {
                                        key: "_checkBlocking",
                                        value: (Ph = Fn(Hn.mark(function t() {
                                                        var e,
                                                        n,
                                                        r = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    n = this._gameData,
                                                                    e = void 0 === this._gameData.dmain || this._gameData.dmain,
                                                                    (n.bloc_gard && !0 === n.bloc_gard.disabledd || !e) && (this.msgrt.send("blocked"), setTimeout(function () {
                                                                            f(this, r),
                                                                            window.location.href = "https://html5.api.gamedistribution.com/blocked.html?".concat($c.stringify({
                                                                                        domain: this._parentDomain,
                                                                                        id: n.gameId,
                                                                                        img: this._get_game_thumbnail_url(),
                                                                                        title: n.title
                                                                                    }))
                                                                        }
                                                                            .bind(this), 100));
                                                                case 5:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this)
                                                    })), function () {
                                            return Ph.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_checkGameDeleted",
                                        value: function () {
                                            var t = this;
                                            6 === this._gameData.status && (console.log("%c %c %c This game was deleted, please remove it in your website... ", "background: #F2181A", "background: #F23818", "color: #fff; background: #F23818;", "background: #F55E60", "background: #F55E60", "background: #c4161e; color: #fff;"), setTimeout(function () {
                                                    f(this, t),
                                                    document.location = "https://html5.api.gamedistribution.com/deleted.html"
                                                }
                                                    .bind(this), 100))
                                        }
                                    }, {
                                        key: "_changeMidrollInDebugMode",
                                        value: function () {
                                            var t = this._gameData;
                                            ju && Iu("gd_debug_ex") && (Iu("gd_disable_midroll_timer") ? t.midroll = 0 : t.midroll = this._getDefaultGameData().midroll)
                                        }
                                    }, {
                                        key: "_checkSplashAndPromoScreens",
                                        value: function () {
                                            this._gameData.loader && !1 === this._gameData.loader.mobile && this._getisMobile() && (this._gameData.loader.disabledd = !1);
                                            var t = this._gameData,
                                            e = t.gdpr && !0 === t.gdpr.consent,
                                            n = t.loader,
                                            r = t.promo;
                                            t.preroll || (this.adRequestTimer = Date.now()),
                                            this.options.loader.disabledd ? r.disabledd ? this._createPromoBeforeSplash(t, e) : n.disabledd ? this._createSplash(t, e) : this.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success") : n.disabledd || this._bridge.isTokenGameURL && this._bridge.isExtHostedGameURL || (this.options.advertisementSettings.autoplay || e ? r.disabledd ? this._createPromoBeforeSplash(t, e) : !1 !== n.disabledd && this._createSplash(t, e) : r.disabledd && this._createPromo(t, e))
                                        }
                                    }, {
                                        key: "_initializeVideoAd",
                                        value: (Ih = Fn(Hn.mark(function t() {
                                                        var e;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    if (this._bridge.isCoreSDKMode)
                                                                        return t.abrupt("return");
                                                                    t.next = 2;
                                                                    break;
                                                                case 2:
                                                                    return (e = this._gameData).sdk.disabledd && (this.options.advertisementSettings = Su(this.options.advertisementSettings, e.sdk)),
                                                                    this.macros = new Hu({
                                                                        game: e,
                                                                        bridge: this._bridge
                                                                    }),
                                                                    this.adInstance = new Qd(this.options.flashSettings.adContainerId, this.options.advertisementSettings, {
                                                                        parentURL: this._parentURL,
                                                                        parentDomain: this._parentDomain,
                                                                        topDomain: this._topDomain
                                                                    }),
                                                                    this.adInstance.gameId = e.gameId,
                                                                    this.adInstance.category = e.category,
                                                                    this.adInstance.tags = e.tags,
                                                                    this.adInstance.noPreroll = this._bridge.noPreroll,
                                                                    this.adInstance.macros = this.macros,
                                                                    this.adInstance.gameData = e,
                                                                    this.adInstance.msgrt = this.msgrt,
                                                                    t.next = 15,
                                                                    this.adInstance.start();
                                                                case 15:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this)
                                                    })), function () {
                                            return Ih.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_sendSDKReady",
                                        value: function () {
                                            var t = "Everything is ready.";
                                            this.eventBus.broadcast("SDK_READY", {
                                                message: t,
                                                status: "success"
                                            });
                                            try {
                                                this.options.onInit(t)
                                            } catch (t) {
                                                Uu("DEVELOPER_ERROR", t.message, "warning")
                                            }
                                        }
                                    }, {
                                        key: "_sendSDKError",
                                        value: function (t) {
                                            t = t.message ? t : {
                                                message: t
                                            },
                                            this.eventBus.broadcast("SDK_ERROR", {
                                                message: t.message,
                                                status: "error"
                                            });
                                            try {
                                                this.options.onError(t)
                                            } catch (t) {
                                                Uu("DEVELOPER_ERROR", t.message, "warning")
                                            }
                                        }
                                    }, {
                                        key: "_onEvent",
                                        value: function (t) {
                                            Uu(t.name, t.message, t.status);
                                            try {
                                                this.options.onEvent({
                                                    name: t.name,
                                                    message: t.message,
                                                    status: t.status
                                                })
                                            } catch (t) {
                                                Uu("DEVELOPER_ERROR", t.message, "warning")
                                            }
                                        }
                                    }, {
                                        key: "_getGameData",
                                        value: function () {
                                            var e = this;
                                            return new Promise(function (n) {
                                                var r = this;
                                                f(this, e);
                                                var i = this._getDefaultGameData(),
                                                t = this._getGameDataUrl();
                                                fetch(t).then(function (t) {
                                                    return f(this, r),
                                                    t.json()
                                                }
                                                    .bind(this)).then(function (t) {
                                                    var e;
                                                    f(this, r),
                                                    t.success ? (e = {
                                                            gameId: (t = t.result.game).gameMd5,
                                                            status: t.status,
                                                            description: t.description,
                                                            disabledAds: !0 === t.disabledAds || !0 === (null === (e = t.disabledAds) || void 0 === e ? void 0 : e.disabledd),
                                                            preroll: t.preRoll,
                                                            midroll: 6e4 * t.timeAds,
                                                            rewardedAds: t.rewardedAds,
                                                            title: t.title,
                                                            tags: t.tags,
                                                            category: t.category,
                                                            assets: t.assets,
                                                            disp_2nd_prer: t.disp_2nd_prer,
                                                            ctry_vst: t.ctry_vst,
                                                            ctry: t.ctry,
                                                            dmain: t.dmain,
                                                            block_exts: this._parseAndSelectRandomOne(t.push_cuda),
                                                            bloc_gard: this._parseAndSelectRandomOne(t.bloc_gard),
                                                            cookie: this._parseAndSelectRandomOne(t.cookie),
                                                            gdpr: this._parseAndSelectRandomOne(t.gdpr),
                                                            diagnostic: this._parseAndSelectRandomOne(t.diagnostic),
                                                            sdk: this._parseAndSelectRandomOne(t.sdk) || this._getDefaultAdSDKData(),
                                                            loader: this._parseAndSelectRandomOne(t.loader) || this._getDefaultLoaderData(),
                                                            splash: this._parseAndSelectRandomOne(t.splash) || this._getDefaultSplashData(),
                                                            promo: this._parseAndSelectRandomOne(t.promo) || this._getDefaultPromoData(),
                                                            dAds: this._parseAndSelectRandomOne(t.dads) || this._getDefaultDisplayAdsData(),
                                                            pAds: this._parseAndSelectRandomOne(t.pads) || this._getDefaultPrerollAdsData(),
                                                            mAds: this._parseAndSelectRandomOne(t.mads) || this._getDefaultMidrollAdsData(),
                                                            rAds: this._parseAndSelectRandomOne(t.rads) || this._getDefaultRewardedAdsData()
                                                        }, t = Su(du(i), e), this._bridge.noPreroll = (!this._getisMobile() || !1 !== t.loader.mobile) && this._bridge.noPreroll, this._bridge.noPreroll && (this.adRequestTimer = Date.now()), this.msgrt.setGameData(t), e = t.diagnostic, Mu = e, n(t)) : (i.failed = !0, n(i))
                                                }
                                                    .bind(this)).catch(function (t) {
                                                    f(this, r),
                                                    i.failed = !0,
                                                    n(i)
                                                }
                                                    .bind(this))
                                            }
                                                .bind(this))
                                        }
                                    }, {
                                        key: "_createSplash",
                                        value: (Ch = Fn(Hn.mark(function t(e, n) {
                                                        var r,
                                                        i,
                                                        o = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2,
                                                                    this._getSplashTemplate(e);
                                                                case 2:
                                                                    r = t.sent,
                                                                    (i = new r(xh(xh({}, this.options), {}, {
                                                                                    isConsentDomain: n,
                                                                                    version: Oc
                                                                                }), e, this._parentDomain)).on("playClick", function () {
                                                                        var t,
                                                                        e = this;
                                                                        f(this, o),
                                                                        n && ((t = new Date).setDate(t.getDate() + 90), document.cookie = "ogdpr_tracking=1; expires=".concat(t.toUTCString(), "; path=/")),
                                                                        this.showAd(xu.Interstitial).catch(function (t) {
                                                                            f(this, e)
                                                                        }
                                                                            .bind(this))
                                                                    }
                                                                        .bind(this)),
                                                                    i.on("slotVisibilityChanged", function (t) {
                                                                        f(this, o)
                                                                    }
                                                                        .bind(this)),
                                                                    this.onPauseGame("Pause the game and wait for a user gesture", "success"),
                                                                    this.eventBus.subscribe("SDK_GAME_PAUSE", function () {
                                                                        f(this, o),
                                                                        i.hide()
                                                                    }
                                                                        .bind(this)),
                                                                    this.eventBus.subscribe("SDK_GAME_START", function () {
                                                                        f(this, o),
                                                                        i.hide()
                                                                    }
                                                                        .bind(this));
                                                                case 9:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this)
                                                    })), function (t, e) {
                                            return Ch.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_createPromoBeforeSplash",
                                        value: (Oh = Fn(Hn.mark(function t(e, n) {
                                                        var r,
                                                        i,
                                                        o = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2,
                                                                    this._instancePromo(e);
                                                                case 2:
                                                                    r = t.sent,
                                                                    (i = new r(xh(xh({}, this.options), {}, {
                                                                                    isConsentDomain: n,
                                                                                    version: Oc
                                                                                }), e)).on("skipClick", function () {
                                                                        f(this, o),
                                                                        i.hide(),
                                                                        this._createSplash(e, n)
                                                                    }
                                                                        .bind(this)),
                                                                    i.on("adCompleted", function () {
                                                                        f(this, o),
                                                                        i.hide(),
                                                                        this._createSplash(e, n)
                                                                    }
                                                                        .bind(this));
                                                                case 6:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this)
                                                    })), function (t, e) {
                                            return Oh.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_createPromo",
                                        value: (Rh = Fn(Hn.mark(function t(e, n) {
                                                        var r,
                                                        i,
                                                        o = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2,
                                                                    this._instancePromo(e);
                                                                case 2:
                                                                    r = t.sent,
                                                                    (i = new r(xh(xh({}, this.options), {}, {
                                                                                    isConsentDomain: n,
                                                                                    version: Oc
                                                                                }), e)).on("skipClick", function () {
                                                                        f(this, o),
                                                                        i.hide(),
                                                                        this.onResumeGame("Resumed after the promo", "warning")
                                                                    }
                                                                        .bind(this)),
                                                                    this.onPauseGame("Pause the game for the promo", "success");
                                                                case 6:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t, this)
                                                    })), function (t, e) {
                                            return Rh.apply(this, arguments)
                                        })
                                    }, {
                                        key: "showBanner",
                                        value: function () {
                                            var e = this;
                                            this.showAd(xu.Interstitial).catch(function (t) {
                                                f(this, e)
                                            }
                                                .bind(this))
                                        }
                                    }, {
                                        key: "showAd",
                                        value: (Th = Fn(Hn.mark(function t(d, l) {
                                                        var h = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.abrupt("return", new Promise(function () {
                                                                            var n = Fn(Hn.mark(function t(o, a) {
                                                                                        var s,
                                                                                        i,
                                                                                        c,
                                                                                        e,
                                                                                        n,
                                                                                        u = this;
                                                                                        return Hn.wrap(function (t) {
                                                                                            for (; ; )
                                                                                                switch (t.prev = t.next) {
                                                                                                case 0:
                                                                                                    return t.prev = 0,
                                                                                                    t.next = 3,
                                                                                                    h.sdkReady;
                                                                                                case 3:
                                                                                                    return s = t.sent,
                                                                                                    t.next = 6,
                                                                                                    h.videoAdReady;
                                                                                                case 6:
                                                                                                    if (h._sendLoadedEvent(), s.bloc_gard && !0 === s.bloc_gard.disabledd)
                                                                                                        throw new Error("Game or domain is blocked.");
                                                                                                    t.next = 9;
                                                                                                    break;
                                                                                                case 9:
                                                                                                    if (!s.disabledAds || h._whitelabelPartner)
                                                                                                        throw new Error("Advertisements are disabled.");
                                                                                                    t.next = 11;
                                                                                                    break;
                                                                                                case 11:
                                                                                                    if (d) {
                                                                                                        t.next = 15;
                                                                                                        break
                                                                                                    }
                                                                                                    d = xu.Interstitial,
                                                                                                    t.next = 17;
                                                                                                    break;
                                                                                                case 15:
                                                                                                    if (d !== xu.Interstitial && d !== xu.Rewarded)
                                                                                                        throw new Error("Unsupported an advertisement type: ", d);
                                                                                                    t.next = 17;
                                                                                                    break;
                                                                                                case 17:
                                                                                                    if (d !== xu.Rewarded || s.rewardedAds) {
                                                                                                        t.next = 19;
                                                                                                        break
                                                                                                    }
                                                                                                    throw new Error("Rewarded ads are disabled.");
                                                                                                case 19:
                                                                                                    if (d !== xu.Interstitial || void 0 === h.adRequestTimer) {
                                                                                                        t.next = 23;
                                                                                                        break
                                                                                                    }
                                                                                                    if (Date.now() - h.adRequestTimer < s.midroll)
                                                                                                        throw new Error("The advertisement was requested too soon.");
                                                                                                    t.next = 23;
                                                                                                    break;
                                                                                                case 23:
                                                                                                    return i = "main.showad",
                                                                                                    c = function (r) {
                                                                                                        var i = this;
                                                                                                        f(this, u),
                                                                                                        h.adInstance.resetForNext(),
                                                                                                        h.showAd(d, r).then(function (t) {
                                                                                                            f(this, i),
                                                                                                            h.adRequestTimer = Date.now(),
                                                                                                            h.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success"),
                                                                                                            o("")
                                                                                                        }
                                                                                                            .bind(this)).catch(function (t) {
                                                                                                            var e,
                                                                                                            n = this;
                                                                                                            f(this, i),
                                                                                                            r.retry_on_success ? (h.adRequestTimer = Date.now(), h.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success"), o("")) : r.retry_on_failure && (e = (s.promo || {}).puzzle || {}).disabledd && (e.trigger.interstitial_failure && d === xu.Interstitial || e.trigger.rewarded_failure && d === xu.Rewarded) ? h._showPromoDisplayAd().then(function (t) {
                                                                                                                f(this, n),
                                                                                                                h.onResumeGame("DisplayAd succeded.", "success"),
                                                                                                                o("DisplayAd succeded.")
                                                                                                            }
                                                                                                                .bind(this)).catch(function (t) {
                                                                                                                f(this, n),
                                                                                                                h.onResumeGame("DisplayAd failed.", "warning"),
                                                                                                                a("DisplayAd failed.")
                                                                                                            }
                                                                                                                .bind(this)) : (h.onResumeGame(t.message || t, "warning"), a(t.message || t))
                                                                                                        }
                                                                                                            .bind(this))
                                                                                                    }
                                                                                                    .bind(this),
                                                                                                    e = function (t) {
                                                                                                        var e,
                                                                                                        n,
                                                                                                        r = this;
                                                                                                        f(this, u),
                                                                                                        h.eventBus.unsubscribeScope(i),
                                                                                                        void 0 !== l ? a(t.message) : h._isRetryOnFailuredisabledd(d) ? c({
                                                                                                            retry_on_failure: !0
                                                                                                        }) : (h.adRequestTimer = Date.now(), (n = (s.promo || {}).puzzle || {}).disabledd && (n.trigger.interstitial_failure && d === xu.Interstitial || n.trigger.rewarded_failure && d === xu.Rewarded) ? h._showPromoDisplayAd().then(function (t) {
                                                                                                                f(this, r),
                                                                                                                h.onResumeGame("DisplayAd succeded.", "success"),
                                                                                                                o("DisplayAd succeded.")
                                                                                                            }
                                                                                                                .bind(this)).catch(function (t) {
                                                                                                                f(this, r),
                                                                                                                h.onResumeGame("DisplayAd failed.", "warning"),
                                                                                                                a("DisplayAd failed.")
                                                                                                            }
                                                                                                                .bind(this)) : (!0 === (null === (n = h._gameData.promo) || void 0 === n || null === (e = n.puzzle) || void 0 === e ? void 0 : e.disabledAfterPreroll) && (h._gameData.promo.puzzle.disabledd = !0), h.onResumeGame(t.message, "warning"), a(t.message)))
                                                                                                    }
                                                                                                    .bind(this),
                                                                                                    n = function (t) {
                                                                                                        f(this, u),
                                                                                                        h.eventBus.unsubscribeScope(i),
                                                                                                        void 0 !== l ? o(t.message) : h._isRetryOnSuccessdisabledd(d) ? c({
                                                                                                            retry_on_success: !0
                                                                                                        }) : (h.adRequestTimer = Date.now(), h.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success"), o(t.message))
                                                                                                    }
                                                                                                    .bind(this),
                                                                                                    h.eventBus.subscribe("AD_ERROR", e, i),
                                                                                                    h.eventBus.subscribe("AD_SDK_CANCELED", e, i),
                                                                                                    h.eventBus.subscribe("AD_SUCCESS", n, i),
                                                                                                    t.next = 32,
                                                                                                    h.adInstance.startAd(d, l);
                                                                                                case 32:
                                                                                                    t.next = 38;
                                                                                                    break;
                                                                                                case 34:
                                                                                                    t.prev = 34,
                                                                                                    t.t0 = t.catch(0),
                                                                                                    h.onResumeGame(t.t0.message, "warning"),
                                                                                                    a(t.t0.message);
                                                                                                case 38:
                                                                                                case "end":
                                                                                                    return t.stop()
                                                                                                }
                                                                                        }, t, this, [[0, 34]])
                                                                                    }));
                                                                            return function (t, e) {
                                                                                return n.apply(this, arguments)
                                                                            }
                                                                        }
                                                                            ()));
                                                                case 1:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t)
                                                    })), function (t, e) {
                                            return Th.apply(this, arguments)
                                        })
                                    }, {
                                        key: "_isRetryOnSuccessdisabledd",
                                        value: function (t) {
                                            var e = this._gameData,
                                            n = this.adInstance.getAdPosition(t),
                                            t = e.sdk.disabledd && (!0 === e.sdk.retry_on_success || hu(e.sdk.retry_on_success));
                                            return "preroll" === n && void 0 !== e.pAds.retry_on_success ? t = t && e.pAds.retry_on_success : "midroll" === n && void 0 !== e.mAds.retry_on_success ? t = t && e.mAds.retry_on_success : "rewarded" === n && void 0 !== e.rAds.retry_on_success && (t = t && e.rAds.retry_on_success),
                                            t
                                        }
                                    }, {
                                        key: "_isRetryOnFailuredisabledd",
                                        value: function (t) {
                                            var e = this._gameData,
                                            n = this.adInstance.getAdPosition(t),
                                            t = e.sdk.disabledd && (!0 === e.sdk.retry_on_failure || hu(e.sdk.retry_on_failure));
                                            return "preroll" === n && void 0 !== e.pAds.retry_on_failure ? t = t && e.pAds.retry_on_failure : "midroll" === n && void 0 !== e.mAds.retry_on_failure ? t = t && e.mAds.retry_on_failure : "rewarded" === n && void 0 !== e.rAds.retry_on_failure && (t = t && e.rAds.retry_on_failure),
                                            t
                                        }
                                    }, {
                                        key: "preloadAd",
                                        value: (Dh = Fn(Hn.mark(function t(o) {
                                                        var a = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.abrupt("return", new Promise(function () {
                                                                            var n = Fn(Hn.mark(function t(e, n) {
                                                                                        var r,
                                                                                        i;
                                                                                        return Hn.wrap(function (t) {
                                                                                            for (; ; )
                                                                                                switch (t.prev = t.next) {
                                                                                                case 0:
                                                                                                    return t.prev = 0,
                                                                                                    t.next = 3,
                                                                                                    a.sdkReady;
                                                                                                case 3:
                                                                                                    return r = t.sent,
                                                                                                    t.next = 6,
                                                                                                    a.videoAdReady;
                                                                                                case 6:
                                                                                                    if (r.bloc_gard && !0 === r.bloc_gard.disabledd)
                                                                                                        throw new Error("Game or domain is blocked.");
                                                                                                    t.next = 8;
                                                                                                    break;
                                                                                                case 8:
                                                                                                    if (!r.disabledAds || a._whitelabelPartner)
                                                                                                        throw new Error("Advertisements are disabled.");
                                                                                                    t.next = 10;
                                                                                                    break;
                                                                                                case 10:
                                                                                                    if (o) {
                                                                                                        t.next = 14;
                                                                                                        break
                                                                                                    }
                                                                                                    o = xu.Rewarded,
                                                                                                    t.next = 16;
                                                                                                    break;
                                                                                                case 14:
                                                                                                    if (o !== xu.Interstitial && o !== xu.Rewarded)
                                                                                                        throw new Error("Unsupported an advertisement type:" + o);
                                                                                                    t.next = 16;
                                                                                                    break;
                                                                                                case 16:
                                                                                                    if (o !== xu.Rewarded || r.rewardedAds) {
                                                                                                        t.next = 18;
                                                                                                        break
                                                                                                    }
                                                                                                    throw new Error("Rewarded ads are disabled.");
                                                                                                case 18:
                                                                                                    return t.next = 20,
                                                                                                    a.adInstance.preloadAd(o);
                                                                                                case 20:
                                                                                                    i = t.sent,
                                                                                                    e(i),
                                                                                                    t.next = 27;
                                                                                                    break;
                                                                                                case 24:
                                                                                                    t.prev = 24,
                                                                                                    t.t0 = t.catch(0),
                                                                                                    n(t.t0);
                                                                                                case 27:
                                                                                                case "end":
                                                                                                    return t.stop()
                                                                                                }
                                                                                        }, t, null, [[0, 24]])
                                                                                    }));
                                                                            return function (t, e) {
                                                                                return n.apply(this, arguments)
                                                                            }
                                                                        }
                                                                            ()));
                                                                case 1:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t)
                                                    })), function (t) {
                                            return Dh.apply(this, arguments)
                                        })
                                    }, {
                                        key: "cancelAd",
                                        value: (Sh = Fn(Hn.mark(function t() {
                                                        var r = this;
                                                        return Hn.wrap(function (t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.abrupt("return", new Promise(function () {
                                                                            var n = Fn(Hn.mark(function t(e, n) {
                                                                                        return Hn.wrap(function (t) {
                                                                                            for (; ; )
                                                                                                switch (t.prev = t.next) {
                                                                                                case 0:
                                                                                                    try {
                                                                                                        r.adInstance.cancel(),
                                                                                                        r.onResumeGame("Advertisement(s) are cancelled. Start / resume the game.", "success"),
                                                                                                        n()
                                                                                                    } catch (t) {
                                                                                                        r.onResumeGame("Advertisement(s) are cancelled. Start / resume the game.", "success"),
                                                                                                        e(t.message)
                                                                                                    }
                                                                                                case 1:
                                                                                                case "end":
                                                                                                    return t.stop()
                                                                                                }
                                                                                        }, t)
                                                                                    }));
                                                                            return function (t, e) {
                                                                                return n.apply(this, arguments)
                                                                            }
                                                                        }
                                                                            ()));
                                                                case 1:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }, t)
                                                    })), function () {
                                            return Sh.apply(this, arguments)
                                        })
                                    }, {
                                        key: "showDisplayAd",
                                        value: function (i) {
                                            var n,
                                            o = this;
                                            return new Promise((n = Fn(Hn.mark(function t(e, n) {
                                                                var r;
                                                                return Hn.wrap(function (t) {
                                                                    for (; ; )
                                                                        switch (t.prev = t.next) {
                                                                        case 0:
                                                                            return t.prev = 0,
                                                                            t.next = 3,
                                                                            o.sdkReady;
                                                                        case 3:
                                                                            return r = t.sent,
                                                                            t.next = 6,
                                                                            o.videoAdReady;
                                                                        case 6:
                                                                            if (r.dAds.disabledd)
                                                                                return t.next = 9, o.adInstance.loadDisplayAd(i);
                                                                            t.next = 12;
                                                                            break;
                                                                        case 9:
                                                                            e(),
                                                                            t.next = 13;
                                                                            break;
                                                                        case 12:
                                                                            n("Display-Ads are disabled.");
                                                                        case 13:
                                                                            t.next = 18;
                                                                            break;
                                                                        case 15:
                                                                            t.prev = 15,
                                                                            t.t0 = t.catch(0),
                                                                            n(t.t0.message || t.t0);
                                                                        case 18:
                                                                        case "end":
                                                                            return t.stop()
                                                                        }
                                                                }, t, null, [[0, 15]])
                                                            })), function (t, e) {
                                                    return n.apply(this, arguments)
                                                }))
                                        }
                                    }, {
                                        key: "onResumeGame",
                                        value: function (t, e) {
                                            this._allowExternals({
                                                disabledd: !1
                                            });
                                            try {
                                                this.options.resumeGame()
                                            } catch (t) {
                                                Uu("DEVELOPER_ERROR", t.message, "warning")
                                            }
                                            var n = "SDK_GAME_START";
                                            this.eventBus.broadcast(n, {
                                                name: n,
                                                message: t,
                                                status: e,
                                                analytics: {
                                                    category: "SDK",
                                                    action: n,
                                                    label: this.options.gameId + ""
                                                }
                                            })
                                        }
                                    }, {
                                        key: "onPauseGame",
                                        value: function (t, e) {
                                            this._allowExternals({
                                                disabledd: !0
                                            });
                                            try {
                                                this.options.pauseGame()
                                            } catch (t) {
                                                Uu("DEVELOPER_ERROR", t.message, "warning")
                                            }
                                            var n = "SDK_GAME_PAUSE";
                                            this.eventBus.broadcast(n, {
                                                name: n,
                                                message: t,
                                                status: e,
                                                analytics: {
                                                    category: "SDK",
                                                    action: n,
                                                    label: this.options.gameId + ""
                                                }
                                            })
                                        }
                                    }, {
                                        key: "openConsole",
                                        value: function () {
                                            try {
                                                new Yu(this).start(),
                                                Lu("gd_debug_ex", !0)
                                            } catch (t) {
                                                console.log(t)
                                            }
                                        }
                                    }, {
                                        key: "_initBlockingExternals",
                                        value: function () {
                                            var t = this._gameData;
                                            (t.failed || t.block_exts && t.block_exts.disabledd) && (this.window_open = window.open, this._allowExternals({
                                                    disabledd: !1
                                                }), this._removeExternalsInHtml({
                                                    disabledd: !1
                                                }))
                                        }
                                    }, {
                                        key: "_checkFullscreen",
                                        value: function () {
                                            var n = this;
                                            try {
                                                var t = this._gameData;
                                                t.sdk.fullscreen && "auto" === t.sdk.fullscreen && document.addEventListener("click", function () {
                                                    var t,
                                                    e;
                                                    f(this, n),
                                                    this._isFullScreen || ((t = (e = document.body).requestFullScreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen) ? t.call(e) : void 0 === window.ActiveXObject || null !== (e = new ActiveXObject("WScript.Shell")) && e.SendKeys("{F11}"), this._isFullScreen = !0)
                                                }
                                                    .bind(this))
                                            } catch (t) {
                                                console.log("Fullscreen error handled...", t)
                                            }
                                        }
                                    }, {
                                        key: "_allowExternals",
                                        value: function (t) {
                                            var e = this;
                                            void 0 !== this.window_open && (!1 === t.disabledd ? window.open = function (t) {
                                                f(this, e),
                                                this.msgrt.send("external", {
                                                    message: "C> ".concat(t)
                                                }),
                                                (t.startsWith("https://play.google.com") || t.startsWith("https://itunes.apple.com")) && this.window_open.call(null, t)
                                            }
                                                .bind(this) : window.open = this.window_open)
                                        }
                                    }, {
                                        key: "_removeExternalsInHtml",
                                        value: function (t) {
                                            var i = this;
                                            !1 === t.disabledd && window.document.querySelectorAll("a").forEach(function (t) {
                                                var e = this;
                                                f(this, i);
                                                var n = !!(t.innerText.toLowerCase().includes("start") || t.innerText.toLowerCase().includes("play") || t.innerText.toLowerCase().includes("continue")),
                                                r = t.getAttribute("href");
                                                t.removeAttribute("href"),
                                                n || (t.onclick = function (t) {
                                                    return f(this, e),
                                                    t.preventDefault(),
                                                    this.msgrt.send("external", {
                                                        message: "H> ".concat(r)
                                                    }),
                                                    !1
                                                }
                                                    .bind(this))
                                            }
                                                .bind(this))
                                        }
                                    }, {
                                        key: "_getBridgeContext",
                                        value: function () {
                                            var t,
                                            e,
                                            n = this._isTokenGameURL(),
                                            r = this._isMasterGameURL(),
                                            i = this._isExtHostedGameURL(),
                                            o = (o = n || i ? this._getTokenGameURLConfig() : {}) || {},
                                            a = (n || i) && o.parentURL ? o.parentURL : function () {
                                                var t = Tu();
                                                if (t.gd_sdk_referrer_url)
                                                    return t.gd_sdk_referrer_url;
                                                var e = window.location !== window.parent.location && document.referrer && "" !== document.referrer ? document.referrer : document.location.href;
                                                return -1 !== document.referrer.indexOf("gameplayer.io") ? (e = "https://gamedistribution.com", (t = Du("ref", document.referrer)) && "" !== t && "{portal%20name}" !== t && "{spilgames}" !== t && "{portal name}" !== t && (e = Ru(t).replace(/^(?:https?:\/\/)?(?:\/\/)?/i, ""), e = "https://".concat(e))) : -1 !== document.referrer.indexOf("localhost") && (e = "https://gamedistribution.com/"),
                                                e
                                            }
                                            (),
                                            s = (n || i) && o.parentDomain ? o.parentDomain : (t = Tu(), e = (t.gd_sdk_referrer_url || (window.location !== window.parent.location && document.referrer && "" !== document.referrer ? document.referrer.split("/")[2] : document.location.host)).replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, "").split("/")[0], -1 !== document.referrer.indexOf("gameplayer.io") ? (e = "gamedistribution.com", (t = Du("ref", document.referrer)) && "" !== t && "{portal%20name}" !== t && "{spilgames}" !== t && "{portal name}" !== t && (e = Ru(t).replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, "").split("/")[0])) : -1 !== document.referrer.indexOf("localhost") && (e = "gamedistribution.com"), e),
                                            c = (n || i) && o.topDomain ? o.topDomain : function () {
                                                var t = Cu();
                                                if (0 === t)
                                                    return location.host.replace(/^www\.(.*)$/i, "$1");
                                                if (location.ancestorOrigins && 0 < location.ancestorOrigins.length)
                                                    return location.ancestorOrigins[location.ancestorOrigins.length - 1].replace(/^https?:\/\/(www\.)?(.*)$/i, "$2");
                                                if (1 === t) {
                                                    t = function (t) {
                                                        if (t && "" !== t)
                                                            try {
                                                                return new uu(t)
                                                            } catch (t) {}
                                                    }
                                                    (document.referrer);
                                                    if (t)
                                                        return t.host.replace(/^www\.(.*)$/i, "$1")
                                                }
                                            }
                                            (),
                                            u = (n || i) && o.loaderdisabledd,
                                            d = (n || i) && o.loaderdisabledd,
                                            l = (n || i) && o.loaderdisabledd,
                                            h = (n || i) && o.loaderdisabledd,
                                            f = (n || i) && o.loaderdisabledd,
                                            p = (n || i) && o.loaderdisabledd,
                                            g = (n || i) && o.loaderdisabledd,
                                            t = (n || i) && o.loaderdisabledd,
                                            e = (n || i) && o.loaderdisabledd && o.hasImpression && "1.1.24" <= o.version;
                                            return {
                                                isTokenGameURL: n,
                                                isMasterGameURL: r,
                                                isExtHostedGameURL: i,
                                                noConsoleBanner: u,
                                                noLoadedEvent: d,
                                                noBlockerEvent: l,
                                                noPreroll: t,
                                                parentURL: a,
                                                parentDomain: s,
                                                topDomain: c,
                                                noGAPageView: h,
                                                noLotamePageView: f,
                                                noGamedockSDK: p,
                                                noMinijuegosSDK: g,
                                                version: o.version,
                                                pauseGameOnStartup: e,
                                                depth: Cu(),
                                                domainMatched: s === c,
                                                exports: {
                                                    formatTokenURLSearch: this._formatTokenURLSearch.bind(this)
                                                }
                                            }
                                        }
                                    }, {
                                        key: "_isMasterGameURL",
                                        value: function () {
                                            var t = /http[s]?:\/\/(html5\.gamedistribution\.com\/[A-Fa-f0-9]{32})(.*)$/i;
                                            return t.test(location.href) || !this._isTokenGameURL() && t.test(document.referrer)
                                        }
                                    }, {
                                        key: "_isTokenGameURL",
                                        value: function () {
                                            var t = /http[s]?:\/\/(html5\.gamedistribution\.com\/[A-Za-z0-9]{8})\/(.*)$/i;
                                            return t.test(location.href) || t.test(document.referrer)
                                        }
                                    }, {
                                        key: "_isExtHostedGameURL",
                                        value: function () {
                                            var t = /^http[s]?:\/\/.*?gd_sdk_referrer_url=.*$/i;
                                            return t.test(location.href) || t.test(document.referrer)
                                        }
                                    }, {
                                        key: "_getTokenGameURLConfig",
                                        value: function () {
                                            try {
                                                var t,
                                                e = /http[s]?:\/\/html5\.gamedistribution\.com\/[A-Za-z0-9]{8}\/[A-Fa-f0-9]{32}\/.*/i;
                                                if (e.test(location.href)) {
                                                    var n = new uu(location.href, !0);
                                                    if (!n.query.gd_zone_config)
                                                        return;
                                                    t = n.query.gd_zone_config
                                                } else if (e.test(document.referrer)) {
                                                    var r = new uu(document.referrer, !0);
                                                    if (!r.query.gd_zone_config)
                                                        return;
                                                    t = r.query.gd_zone_config
                                                } else {
                                                    var i = new uu(location.href, !0);
                                                    if (!i.query.gd_zone_config)
                                                        return;
                                                    t = i.query.gd_zone_config
                                                }
                                                return JSON.parse(Ld(decodeURIComponent(t)))
                                            } catch (t) {}
                                        }
                                    }, {
                                        key: "_getSplashTemplate",
                                        value: function (t) {
                                            return new dh(t.splash).splash()
                                        }
                                    }, {
                                        key: "_instancePromo",
                                        value: function (t) {
                                            t = null !== (t = t.promo) && void 0 !== t && t.puzzle ? "Puzzle" : "Hammer";
                                            return new uh(t).promo()
                                        }
                                    }, {
                                        key: "_formatTokenURLSearch",
                                        value: function (t) {
                                            var e = "";
                                            try {
                                                e = encodeURIComponent(Pd(JSON.stringify(t)))
                                            } catch (t) {}
                                            try {
                                                var n = new uu(location.href, !0);
                                                return n.query = n.query || {},
                                                n.query.gd_zone_config = e,
                                                "?".concat($c.stringify(n.query))
                                            } catch (t) {
                                                return "?gd_zone_config=".concat(e)
                                            }
                                        }
                                    }, {
                                        key: "_parseAndSelectRandomOne",
                                        value: function (t) {
                                            t = this._selectRandomOne("object" === e(t) ? t : function (t) {
                                                if (t)
                                                    try {
                                                        return JSON.parse(t)
                                                    } catch (t) {}
                                            }
                                                    (t));
                                            return !t || !t.version || Oc >= t.version ? t : void 0
                                        }
                                    }, {
                                        key: "_selectRandomOne",
                                        value: function (t) {
                                            var e = this;
                                            if (!yu(t) || 0 === t.length)
                                                return t;
                                            if (1 === t.length)
                                                return t[0];
                                            var n = 0;
                                            t.forEach(function (t) {
                                                f(this, e),
                                                t.weight = t.weight || 1,
                                                n += t.weight
                                            }
                                                .bind(this));
                                            for (var r = Math.floor(Math.random() * Math.floor(n)), n = 0, i = 0; i < t.length; i++) {
                                                var o = t[i];
                                                if (r < (n += o.weight))
                                                    return o
                                            }
                                        }
                                    }, {
                                        key: "session",
                                        value: function () {
                                            var n,
                                            i = this;
                                            return new Promise((n = Fn(Hn.mark(function t(e, n) {
                                                                var r;
                                                                return Hn.wrap(function (t) {
                                                                    for (; ; )
                                                                        switch (t.prev = t.next) {
                                                                        case 0:
                                                                            return t.prev = 0,
                                                                            t.next = 3,
                                                                            i.sdkReady;
                                                                        case 3:
                                                                            t.next = 7;
                                                                            break;
                                                                        case 5:
                                                                            t.prev = 5,
                                                                            t.t0 = t.catch(0);
                                                                        case 7:
                                                                            r = i._gameData,
                                                                            e({
                                                                                ads: {
                                                                                    display: {
                                                                                        disabledd: r.dAds.disabledd
                                                                                    },
                                                                                    rewarded: {
                                                                                        disabledd: r.rewardedAds
                                                                                    }
                                                                                },
                                                                                location: {
                                                                                    parentDomain: i._bridge.parentDomain,
                                                                                    topDomain: i._bridge.topDomain,
                                                                                    parentURL: i._bridge.parentURL,
                                                                                    depth: i._bridge.depth,
                                                                                    loadedByGameZone: i._bridge.isTokenGameURL
                                                                                }
                                                                            });
                                                                        case 9:
                                                                        case "end":
                                                                            return t.stop()
                                                                        }
                                                                }, t, null, [[0, 5]])
                                                            })), function (t, e) {
                                                    return n.apply(this, arguments)
                                                }))
                                        }
                                    }, {
                                        key: "_showPromoDisplayAd",
                                        value: function () {
                                            var t = this;
                                            return new Promise(function (o, a) {
                                                var s = this;
                                                f(this, t);
                                                var c = this._gameData;
                                                this._instancePromo(c).then(function (t) {
                                                    var e = this;
                                                    f(this, s);
                                                    var n = new t(xh(xh({}, this.options), {}, {
                                                                version: Oc
                                                            }), c),
                                                    r = "promo-display";
                                                    this.eventBus.unsubscribeScope(r);
                                                    var i = function () {
                                                        f(this, e),
                                                        this.eventBus.unsubscribeScope(r),
                                                        n.show()
                                                    }
                                                    .bind(this),
                                                    t = function () {
                                                        f(this, e),
                                                        this.eventBus.unsubscribeScope(r),
                                                        n.hide(),
                                                        a("No promo display ad")
                                                    }
                                                    .bind(this);
                                                    this.eventBus.subscribe("DISPLAYAD_IMPRESSION", i, r),
                                                    this.eventBus.subscribe("DISPLAYAD_ERROR", t, r),
                                                    this.showDisplayAd({
                                                        containerId: n.getSlotContainerId(),
                                                        slotId: n.getSlotId(),
                                                        visible: !0
                                                    }).catch(function (t) {
                                                        f(this, e),
                                                        n.hide(),
                                                        a(t)
                                                    }
                                                        .bind(this)),
                                                    n.on("skipClick", function () {
                                                        f(this, e),
                                                        n.hide(),
                                                        o()
                                                    }
                                                        .bind(this)),
                                                    n.on("adCompleted", function () {
                                                        f(this, e),
                                                        n.hide(),
                                                        o()
                                                    }
                                                        .bind(this))
                                                }
                                                    .bind(this))
                                            }
                                                .bind(this))
                                        }
                                    }, {
                                        key: "_getisMobile",
                                        value: function () {
                                            var t = !1,
                                            e = navigator.userAgent || navigator.vendor || window.opera;
                                            return t = !1 === (t = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)) ? !0 : t) && -1 < window.orientation ? !0 : t
                                        }
                                    }, {
                                        key: "_get_game_thumbnail_url",
                                        value: function () {
                                            var e = this,
                                            t = this._gameData,
                                            n = (n = t.assets.find(function (t) {
                                                    return f(this, e),
                                                    t.hasOwnProperty("name") && 512 === t.width && 512 === t.height
                                                }
                                                        .bind(this))) || (0 < t.assets.length ? t.assets[0] : {
                                                name: "logo.svg"
                                            });
                                            return "https://img.gamedistribution.com/".concat(n.name)
                                        }
                                    }
                                ]), Uh),
                        Bh = new function t() {
                            var e,
                            n,
                            r = this;
                            zn(this, t),
                            Nn(this, "load", Fn(Hn.mark(function t() {
                                        return Hn.wrap(function (t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2,
                                                    gh("Leaderboard");
                                                case 2:
                                                    r.leaderboard = t.sent;
                                                case 3:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }, t)
                                    }))),
                            Nn(this, "showLeaderboard", (n = Fn(Hn.mark(function t(e) {
                                                var n;
                                                return Hn.wrap(function (t) {
                                                    for (; ; )
                                                        switch (t.prev = t.next) {
                                                        case 0:
                                                            if (n = window.GD_OPTIONS.gameId, r.leaderboard) {
                                                                t.next = 4;
                                                                break
                                                            }
                                                            return t.next = 4,
                                                            r.load();
                                                        case 4:
                                                            r.leaderboard.showLeaderBoard(n, e);
                                                        case 5:
                                                        case "end":
                                                            return t.stop()
                                                        }
                                                }, t)
                                            })), function (t) {
                                    return n.apply(this, arguments)
                                })),
                            Nn(this, "addScore", (e = Fn(Hn.mark(function t(e) {
                                                return Hn.wrap(function (t) {
                                                    for (; ; )
                                                        switch (t.prev = t.next) {
                                                        case 0:
                                                            if (r.leaderboard) {
                                                                t.next = 3;
                                                                break
                                                            }
                                                            return t.next = 3,
                                                            r.load();
                                                        case 3:
                                                            r.leaderboard.addScore(e);
                                                        case 4:
                                                        case "end":
                                                            return t.stop()
                                                        }
                                                }, t)
                                            })), function (t) {
                                    return e.apply(this, arguments)
                                })),
                            this.moduleName = "Leaderboard",
                            this.moduleConfig = {
                                source: "https://pm.gamedistribution.com/@bygd/gd-sdk-leaderboard/0.1.43/dist/default/iife/index.js",
                                dependencies: ["react", "react-dom", "redux", "react-redux", "material-ui-core"]
                            },
                            sh(this.moduleName, this.moduleConfig)
                        },
                        Mh = new C(function () {
                            var t = {};
                            try {
                                "object" === ("undefined" == typeof GD_OPTIONS ? "undefined" : e(GD_OPTIONS)) && GD_OPTIONS ? t = GD_OPTIONS : window.gdApi && "object" === e(window.gdApi.q[0][0]) && window.gdApi.q[0][0] && ((t = window.gdApi.q[0][0]).hasOwnProperty("advertisementSettings") || (t.advertisementSettings = {
                                                autoplay: !0
                                            }))
                            } catch (t) {
                                console.log("_get_developer_sets failed", t)
                            }
                            return t
                        }
                                ());
                        function Uh(t) {
                            var n = this;
                            if (zn(this, Uh), jh)
                                return jh;
                            (jh = this)._defaults = this._getDefaultOptions(),
                            this._extendDefaultOptions(this._defaults, t),
                            this._version = t.version || "0.0.0",
                            this._bridge = this._getBridgeContext(),
                            this._parentURL = this._bridge.parentURL,
                            this._parentDomain = this._bridge.parentDomain,
                            this._topDomain = this._bridge.topDomain,
                            this._isFullScreen = !1,
                            this._setConsoleBanner(),
                            this._initializeMessageRouter(),
                            this._checkConsole(),
                            this._subscribeToEvents(),
                            this.sdkReady = new Promise(this._initializeSDKWithGameData.bind(this)),
                            this.sdkReady.then(function (t) {
                                f(this, n),
                                this._sdk_ready = !0
                            }
                                .bind(this)).catch(function (t) {
                                f(this, n),
                                this._sdk_ready = !1
                            }
                                .bind(this)).finally(function () {
                                var e = this;
                                f(this, n),
                                this._sendLoaderDataEvent(),
                                this._checkSplashAndPromoScreens(),
                                this._initBlockingExternals(),
                                window.addEventListener("DOMNodeInserted", function () {
                                    var t;
                                    f(this, e),
                                    this._gameData.block_exts && this._removeExternalsInHtml({
                                        disabledd: !1
                                    }),
                                    document.getElementsByClassName("webgl-content")[0] && (t = document.getElementsByClassName("webgl-content")[0].getElementsByClassName("footer")[0]) && t.setAttribute("style", "display:none")
                                }
                                    .bind(this)),
                                this._checkFullscreen()
                            }
                                .bind(this))
                        }
                        function Nh() {
                            var e = this;
                            this.AdType = xu,
                            this.preloadAd = function (t) {
                                return Mh.preloadAd(t)
                            },
                            this.showAd = function (t, e) {
                                return t === xu.Display ? Mh.showDisplayAd(e) : Mh.showAd(t)
                            },
                            this.cancelAd = function () {
                                return Mh.cancelAd()
                            },
                            this.openConsole = function () {
                                Mh.openConsole()
                            },
                            this.getSession = function () {
                                return Mh.session()
                            },
                            this.leaderboard = {
                                show: function () {
                                    f(this, e),
                                    Bh.showLeaderboard()
                                }
                                .bind(this),
                                addScore: function (t) {
                                    f(this, e),
                                    Bh.addScore(t)
                                }
                                .bind(this)
                            }
                        }
                        Nh.prototype = new function () {
                            this.showBanner = function () {
                                Mh.showBanner()
                            },
                            this.play = function () {},
                            this.customLog = function () {}
                        },
                        window.gdsdk = new Nh,
                        window.gdApi = window.gdsdk
                    }
                    ()
                }
                .call(this)
            }
            .call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer)
        }, {
            buffer: 3
        }
    ],
    2: [function (t, e, n) {
            "use strict";
            n.byteLength = function t(e) {
                var n = l(e),
                e = n[0],
                n = n[1];
                return 3 * (e + n) / 4 - n
            },
            n.toByteArray = function t(e) {
                var n,
                r,
                i = l(e),
                o = i[0],
                i = i[1],
                a = new d(function t(e, n, r) {
                    return 3 * (n + r) / 4 - r
                }
                        (0, o, i)),
                s = 0,
                c = 0 < i ? o - 4 : o;
                for (r = 0; r < c; r += 4)
                    n = u[e.charCodeAt(r)] << 18 | u[e.charCodeAt(r + 1)] << 12 | u[e.charCodeAt(r + 2)] << 6 | u[e.charCodeAt(r + 3)], a[s++] = n >> 16 & 255, a[s++] = n >> 8 & 255, a[s++] = 255 & n;
                2 === i && (n = u[e.charCodeAt(r)] << 2 | u[e.charCodeAt(r + 1)] >> 4, a[s++] = 255 & n);
                1 === i && (n = u[e.charCodeAt(r)] << 10 | u[e.charCodeAt(r + 1)] << 4 | u[e.charCodeAt(r + 2)] >> 2, a[s++] = n >> 8 & 255, a[s++] = 255 & n);
                return a
            },
            n.fromByteArray = function t(e) {
                for (var n, r = e.length, i = r % 3, o = [], a = 0, s = r - i; a < s; a += 16383)
                    o.push(function t(e, n, r) {
                        for (var i, o = [], a = n; a < r; a += 3)
                            i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(function t(e) {
                                return c[e >> 18 & 63] + c[e >> 12 & 63] + c[e >> 6 & 63] + c[63 & e]
                            }
                                (i));
                        return o.join("")
                    }
                        (e, a, s < a + 16383 ? s : a + 16383));
                1 == i ? (n = e[r - 1], o.push(c[n >> 2] + c[n << 4 & 63] + "==")) : 2 == i && (n = (e[r - 2] << 8) + e[r - 1], o.push(c[n >> 10] + c[n >> 4 & 63] + c[n << 2 & 63] + "="));
                return o.join("")
            };
            for (var c = [], u = [], d = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, o = r.length; i < o; ++i)
                c[i] = r[i], u[r.charCodeAt(i)] = i;
            function l(t) {
                var e = t.length;
                if (0 < e % 4)
                    throw new Error("Invalid string. Length must be a multiple of 4");
                t = t.indexOf("=");
                return [t = -1 === t ? e : t, t === e ? 0 : 4 - t % 4]
            }
            u["-".charCodeAt(0)] = 62,
            u["_".charCodeAt(0)] = 63
        }, {}
    ],
    3: [function (C, t, I) {
            !function (t) {
                !function () {
                    "use strict";
                    var i = C("base64-js"),
                    o = C("ieee754");
                    I.Buffer = h,
                    I.SlowBuffer = function t(e) {
                        +e != e && (e = 0);
                        return h.alloc(+e)
                    },
                    I.INSPECT_MAX_BYTES = 50;
                    var e = 2147483647;
                    function a(t) {
                        if (e < t)
                            throw new RangeError('The value "' + t + '" is invalid for option "size"');
                        t = new Uint8Array(t);
                        return t.__proto__ = h.prototype,
                        t
                    }
                    function h(t, e, n) {
                        if ("number" != typeof t)
                            return r(t, e, n);
                        if ("string" == typeof e)
                            throw new TypeError('The "string" argument must be of type string. Received type number');
                        return c(t)
                    }
                    function r(t, e, n) {
                        if ("string" == typeof t)
                            return function t(e, n) {
                                "string" == typeof n && "" !== n || (n = "utf8");
                                if (!h.isEncoding(n))
                                    throw new TypeError("Unknown encoding: " + n);
                                var r = 0 | l(e, n),
                                i = a(r),
                                n = i.write(e, n);
                                n !== r && (i = i.slice(0, n));
                                return i
                            }
                        (t, e);
                        if (ArrayBuffer.isView(t))
                            return u(t);
                        if (null == t)
                            throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                        if (R(t, ArrayBuffer) || t && R(t.buffer, ArrayBuffer))
                            return function t(e, n, r) {
                                if (n < 0 || e.byteLength < n)
                                    throw new RangeError('"offset" is outside of buffer bounds');
                                if (e.byteLength < n + (r || 0))
                                    throw new RangeError('"length" is outside of buffer bounds');
                                r = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
                                return r.__proto__ = h.prototype,
                                r
                            }
                        (t, e, n);
                        if ("number" == typeof t)
                            throw new TypeError('The "value" argument must not be of type number. Received type number');
                        var r = t.valueOf && t.valueOf();
                        if (null != r && r !== t)
                            return h.from(r, e, n);
                        r = function t(e) {
                            if (h.isBuffer(e)) {
                                var n = 0 | d(e.length),
                                r = a(n);
                                return 0 === r.length ? r : (e.copy(r, 0, 0, n), r)
                            }
                            if (void 0 !== e.length)
                                return "number" != typeof e.length || O(e.length) ? a(0) : u(e);
                            if ("Buffer" === e.type && Array.isArray(e.data))
                                return u(e.data)
                        }
                        (t);
                        if (r)
                            return r;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive])
                            return h.from(t[Symbol.toPrimitive]("string"), e, n);
                        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                    }
                    function s(t) {
                        if ("number" != typeof t)
                            throw new TypeError('"size" argument must be of type number');
                        if (t < 0)
                            throw new RangeError('The value "' + t + '" is invalid for option "size"')
                    }
                    function c(t) {
                        return s(t),
                        a(t < 0 ? 0 : 0 | d(t))
                    }
                    function u(t) {
                        for (var e = t.length < 0 ? 0 : 0 | d(t.length), n = a(e), r = 0; r < e; r += 1)
                            n[r] = 255 & t[r];
                        return n
                    }
                    function d(t) {
                        if (e <= t)
                            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + e.toString(16) + " bytes");
                        return 0 | t
                    }
                    function l(t, e) {
                        if (h.isBuffer(t))
                            return t.length;
                        if (ArrayBuffer.isView(t) || R(t, ArrayBuffer))
                            return t.byteLength;
                        if ("string" != typeof t)
                            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                        var n = t.length,
                        r = 2 < arguments.length && !0 === arguments[2];
                        if (!r && 0 === n)
                            return 0;
                        for (var i = !1; ; )
                            switch (e) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return n;
                            case "utf8":
                            case "utf-8":
                                return S(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * n;
                            case "hex":
                                return n >>> 1;
                            case "base64":
                                return D(t).length;
                            default:
                                if (i)
                                    return r ? -1 : S(t).length;
                                e = ("" + e).toLowerCase(),
                                i = !0
                            }
                    }
                    function n(t, e, n) {
                        var r = !1;
                        if ((e = void 0 === e || e < 0 ? 0 : e) > this.length)
                            return "";
                        if ((n = void 0 === n || n > this.length ? this.length : n) <= 0)
                            return "";
                        if ((n >>>= 0) <= (e >>>= 0))
                            return "";
                        for (t = t || "utf8"; ; )
                            switch (t) {
                            case "hex":
                                return function t(e, n, r) {
                                    var i = e.length;
                                    (!n || n < 0) && (n = 0);
                                    (!r || r < 0 || i < r) && (r = i);
                                    for (var o = "", a = n; a < r; ++a)
                                        o += function t(e) {
                                            return e < 16 ? "0" + e.toString(16) : e.toString(16)
                                        }
                                    (e[a]);
                                    return o
                                }
                                (this, e, n);
                            case "utf8":
                            case "utf-8":
                                return y(this, e, n);
                            case "ascii":
                                return function t(e, n, r) {
                                    var i = "";
                                    r = Math.min(e.length, r);
                                    for (var o = n; o < r; ++o)
                                        i += String.fromCharCode(127 & e[o]);
                                    return i
                                }
                                (this, e, n);
                            case "latin1":
                            case "binary":
                                return function t(e, n, r) {
                                    var i = "";
                                    r = Math.min(e.length, r);
                                    for (var o = n; o < r; ++o)
                                        i += String.fromCharCode(e[o]);
                                    return i
                                }
                                (this, e, n);
                            case "base64":
                                return function t(e, n, r) {
                                    return 0 === n && r === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(n, r))
                                }
                                (this, e, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return function t(e, n, r) {
                                    for (var i = e.slice(n, r), o = "", a = 0; a < i.length; a += 2)
                                        o += String.fromCharCode(i[a] + 256 * i[a + 1]);
                                    return o
                                }
                                (this, e, n);
                            default:
                                if (r)
                                    throw new TypeError("Unknown encoding: " + t);
                                t = (t + "").toLowerCase(),
                                r = !0
                            }
                    }
                    function f(t, e, n) {
                        var r = t[e];
                        t[e] = t[n],
                        t[n] = r
                    }
                    function p(t, e, n, r, i) {
                        if (0 === t.length)
                            return -1;
                        if ("string" == typeof n ? (r = n, n = 0) : 2147483647 < n ? n = 2147483647 : n < -2147483648 && (n = -2147483648), (n = (n = O(n = +n) ? i ? 0 : t.length - 1 : n) < 0 ? t.length + n : n) >= t.length) {
                            if (i)
                                return -1;
                            n = t.length - 1
                        } else if (n < 0) {
                            if (!i)
                                return -1;
                            n = 0
                        }
                        if ("string" == typeof e && (e = h.from(e, r)), h.isBuffer(e))
                            return 0 === e.length ? -1 : g(t, e, n, r, i);
                        if ("number" == typeof e)
                            return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? (i ? Uint8Array.prototype.indexOf : Uint8Array.prototype.lastIndexOf).call(t, e, n) : g(t, [e], n, r, i);
                        throw new TypeError("val must be string, number or Buffer")
                    }
                    function g(t, e, n, r, i) {
                        var o = 1,
                        a = t.length,
                        s = e.length;
                        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                            if (t.length < 2 || e.length < 2)
                                return -1;
                            a /= o = 2,
                            s /= 2,
                            n /= 2
                        }
                        function c(t, e) {
                            return 1 === o ? t[e] : t.readUInt16BE(e * o)
                        }
                        if (i)
                            for (var u = -1, d = n; d < a; d++)
                                if (c(t, d) === c(e, -1 === u ? 0 : d - u)) {
                                    if (d - (u = -1 === u ? d : u) + 1 === s)
                                        return u * o
                                } else  - 1 !== u && (d -= d - u), u = -1;
                        else
                            for (d = n = a < n + s ? a - s : n; 0 <= d; d--) {
                                for (var l = !0, h = 0; h < s; h++)
                                    if (c(t, d + h) !== c(e, h)) {
                                        l = !1;
                                        break
                                    }
                                if (l)
                                    return d
                            }
                        return -1
                    }
                    function m(t, e, n, r) {
                        return T(function t(e) {
                            for (var n = [], r = 0; r < e.length; ++r)
                                n.push(255 & e.charCodeAt(r));
                            return n
                        }
                            (e), t, n, r)
                    }
                    function v(t, e, n, r) {
                        return T(function t(e, n) {
                            for (var r, i, o = [], a = 0; a < e.length && !((n -= 2) < 0); ++a)
                                i = e.charCodeAt(a), r = i >> 8, i = i % 256, o.push(i), o.push(r);
                            return o
                        }
                            (e, t.length - n), t, n, r)
                    }
                    function y(t, e, n) {
                        n = Math.min(t.length, n);
                        for (var r = [], i = e; i < n; ) {
                            var o,
                            a,
                            s,
                            c,
                            u = t[i],
                            d = null,
                            l = 239 < u ? 4 : 223 < u ? 3 : 191 < u ? 2 : 1;
                            if (i + l <= n)
                                switch (l) {
                                case 1:
                                    u < 128 && (d = u);
                                    break;
                                case 2:
                                    128 == (192 & (o = t[i + 1])) && 127 < (c = (31 & u) << 6 | 63 & o) && (d = c);
                                    break;
                                case 3:
                                    o = t[i + 1],
                                    a = t[i + 2],
                                    128 == (192 & o) && 128 == (192 & a) && 2047 < (c = (15 & u) << 12 | (63 & o) << 6 | 63 & a) && (c < 55296 || 57343 < c) && (d = c);
                                    break;
                                case 4:
                                    o = t[i + 1],
                                    a = t[i + 2],
                                    s = t[i + 3],
                                    128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && 65535 < (c = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) && c < 1114112 && (d = c)
                                }
                            null === d ? (d = 65533, l = 1) : 65535 < d && (d -= 65536, r.push(d >>> 10 & 1023 | 55296), d = 56320 | 1023 & d),
                            r.push(d),
                            i += l
                        }
                        return function t(e) {
                            var n = e.length;
                            if (n <= b)
                                return String.fromCharCode.apply(String, e);
                            var r = "",
                            i = 0;
                            for (; i < n; )
                                r += String.fromCharCode.apply(String, e.slice(i, i += b));
                            return r
                        }
                        (r)
                    }
                    I.kMaxLength = e,
                    (h.TYPED_ARRAY_SUPPORT = function t() {
                        try {
                            var e = new Uint8Array(1);
                            return e.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function () {
                                    return 42
                                }
                            },
                            42 === e.foo()
                        } catch (t) {
                            return !1
                        }
                    }
                        ()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
                    Object.defineProperty(h.prototype, "parent", {
                        enumerable: !0,
                        get: function () {
                            if (h.isBuffer(this))
                                return this.buffer
                        }
                    }),
                    Object.defineProperty(h.prototype, "offset", {
                        enumerable: !0,
                        get: function () {
                            if (h.isBuffer(this))
                                return this.byteOffset
                        }
                    }),
                    "undefined" != typeof Symbol && null != Symbol.species && h[Symbol.species] === h && Object.defineProperty(h, Symbol.species, {
                        value: null,
                        configurable: !0,
                        enumerable: !1,
                        writable: !1
                    }),
                    h.poolSize = 8192,
                    h.from = r,
                    h.prototype.__proto__ = Uint8Array.prototype,
                    h.__proto__ = Uint8Array,
                    h.alloc = function t(e, n, r) {
                        return s(e),
                        !(e <= 0) && void 0 !== n ? "string" == typeof r ? a(e).fill(n, r) : a(e).fill(n) : a(e)
                    },
                    h.allocUnsafe = c,
                    h.allocUnsafeSlow = c,
                    h.isBuffer = function t(e) {
                        return null != e && !0 === e._isBuffer && e !== h.prototype
                    },
                    h.compare = function t(e, n) {
                        if (R(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), R(n, Uint8Array) && (n = h.from(n, n.offset, n.byteLength)), !h.isBuffer(e) || !h.isBuffer(n))
                            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (e === n)
                            return 0;
                        for (var r = e.length, i = n.length, o = 0, a = Math.min(r, i); o < a; ++o)
                            if (e[o] !== n[o]) {
                                r = e[o],
                                i = n[o];
                                break
                            }
                        return r < i ? -1 : i < r ? 1 : 0
                    },
                    h.isEncoding = function t(e) {
                        switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                        }
                    },
                    h.concat = function t(e, n) {
                        if (!Array.isArray(e))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length)
                            return h.alloc(0);
                        if (void 0 === n)
                            for (o = n = 0; o < e.length; ++o)
                                n += e[o].length;
                        for (var r = h.allocUnsafe(n), i = 0, o = 0; o < e.length; ++o) {
                            var a = e[o];
                            if (R(a, Uint8Array) && (a = h.from(a)), !h.isBuffer(a))
                                throw new TypeError('"list" argument must be an Array of Buffers');
                            a.copy(r, i),
                            i += a.length
                        }
                        return r
                    },
                    h.byteLength = l,
                    h.prototype._isBuffer = !0,
                    h.prototype.swap16 = function t() {
                        var e = this.length;
                        if (e % 2 != 0)
                            throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var n = 0; n < e; n += 2)
                            f(this, n, n + 1);
                        return this
                    },
                    h.prototype.swap32 = function t() {
                        var e = this.length;
                        if (e % 4 != 0)
                            throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var n = 0; n < e; n += 4)
                            f(this, n, n + 3), f(this, n + 1, n + 2);
                        return this
                    },
                    h.prototype.swap64 = function t() {
                        var e = this.length;
                        if (e % 8 != 0)
                            throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var n = 0; n < e; n += 8)
                            f(this, n, n + 7), f(this, n + 1, n + 6), f(this, n + 2, n + 5), f(this, n + 3, n + 4);
                        return this
                    },
                    h.prototype.toLocaleString = h.prototype.toString = function t() {
                        var e = this.length;
                        return 0 === e ? "" : 0 === arguments.length ? y(this, 0, e) : n.apply(this, arguments)
                    },
                    h.prototype.equals = function t(e) {
                        if (!h.isBuffer(e))
                            throw new TypeError("Argument must be a Buffer");
                        return this === e || 0 === h.compare(this, e)
                    },
                    h.prototype.inspect = function t() {
                        var e = "",
                        n = I.INSPECT_MAX_BYTES,
                        e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim();
                        return this.length > n && (e += " ... "),
                        "<Buffer " + e + ">"
                    },
                    h.prototype.compare = function t(e, n, r, i, o) {
                        if (R(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), !h.isBuffer(e))
                            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                        if (void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), (n = void 0 === n ? 0 : n) < 0 || r > e.length || i < 0 || o > this.length)
                            throw new RangeError("out of range index");
                        if (o <= i && r <= n)
                            return 0;
                        if (o <= i)
                            return -1;
                        if (r <= n)
                            return 1;
                        if (this === e)
                            return 0;
                        for (var a = (o >>>= 0) - (i >>>= 0), s = (r >>>= 0) - (n >>>= 0), c = Math.min(a, s), u = this.slice(i, o), d = e.slice(n, r), l = 0; l < c; ++l)
                            if (u[l] !== d[l]) {
                                a = u[l],
                                s = d[l];
                                break
                            }
                        return a < s ? -1 : s < a ? 1 : 0
                    },
                    h.prototype.includes = function t(e, n, r) {
                        return -1 !== this.indexOf(e, n, r)
                    },
                    h.prototype.indexOf = function t(e, n, r) {
                        return p(this, e, n, r, !0)
                    },
                    h.prototype.lastIndexOf = function t(e, n, r) {
                        return p(this, e, n, r, !1)
                    },
                    h.prototype.write = function t(e, n, r, i) {
                        if (void 0 === n)
                            i = "utf8", r = this.length, n = 0;
                        else if (void 0 === r && "string" == typeof n)
                            i = n, r = this.length, n = 0;
                        else {
                            if (!isFinite(n))
                                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            n >>>= 0,
                            isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0)
                        }
                        var o = this.length - n;
                        if ((void 0 === r || o < r) && (r = o), 0 < e.length && (r < 0 || n < 0) || n > this.length)
                            throw new RangeError("Attempt to write outside buffer bounds");
                        i = i || "utf8";
                        for (var a = !1; ; )
                            switch (i) {
                            case "hex":
                                return function t(e, n, r, i) {
                                    r = Number(r) || 0;
                                    var o = e.length - r;
                                    (!i || o < (i = Number(i))) && (i = o),
                                    (o = n.length) / 2 < i && (i = o / 2);
                                    for (var a = 0; a < i; ++a) {
                                        var s = parseInt(n.substr(2 * a, 2), 16);
                                        if (O(s))
                                            return a;
                                        e[r + a] = s
                                    }
                                    return a
                                }
                                (this, e, n, r);
                            case "utf8":
                            case "utf-8":
                                return function t(e, n, r, i) {
                                    return T(S(n, e.length - r), e, r, i)
                                }
                                (this, e, n, r);
                            case "ascii":
                                return m(this, e, n, r);
                            case "latin1":
                            case "binary":
                                return m(this, e, n, r);
                            case "base64":
                                return function t(e, n, r, i) {
                                    return T(D(n), e, r, i)
                                }
                                (this, e, n, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return v(this, e, n, r);
                            default:
                                if (a)
                                    throw new TypeError("Unknown encoding: " + i);
                                i = ("" + i).toLowerCase(),
                                a = !0
                            }
                    },
                    h.prototype.toJSON = function t() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    };
                    var b = 4096;
                    function _(t, e, n) {
                        if (t % 1 != 0 || t < 0)
                            throw new RangeError("offset is not uint");
                        if (n < t + e)
                            throw new RangeError("Trying to access beyond buffer length")
                    }
                    function w(t, e, n, r, i, o) {
                        if (!h.isBuffer(t))
                            throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (i < e || e < o)
                            throw new RangeError('"value" argument is out of bounds');
                        if (n + r > t.length)
                            throw new RangeError("Index out of range")
                    }
                    function A(t, e, n, r) {
                        if (n + r > t.length)
                            throw new RangeError("Index out of range");
                        if (n < 0)
                            throw new RangeError("Index out of range")
                    }
                    function E(t, e, n, r, i) {
                        return e = +e,
                        n >>>= 0,
                        i || A(t, 0, n, 4),
                        o.write(t, e, n, r, 23, 4),
                        n + 4
                    }
                    function k(t, e, n, r, i) {
                        return e = +e,
                        n >>>= 0,
                        i || A(t, 0, n, 8),
                        o.write(t, e, n, r, 52, 8),
                        n + 8
                    }
                    h.prototype.slice = function t(e, n) {
                        var r = this.length;
                        (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r),
                        (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : r < n && (n = r),
                        n < e && (n = e);
                        n = this.subarray(e, n);
                        return n.__proto__ = h.prototype,
                        n
                    },
                    h.prototype.readUIntLE = function t(e, n, r) {
                        e >>>= 0,
                        n >>>= 0,
                        r || _(e, n, this.length);
                        for (var i = this[e], o = 1, a = 0; ++a < n && (o *= 256); )
                            i += this[e + a] * o;
                        return i
                    },
                    h.prototype.readUIntBE = function t(e, n, r) {
                        e >>>= 0,
                        n >>>= 0,
                        r || _(e, n, this.length);
                        for (var i = this[e + --n], o = 1; 0 < n && (o *= 256); )
                            i += this[e + --n] * o;
                        return i
                    },
                    h.prototype.readUInt8 = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 1, this.length),
                        this[e]
                    },
                    h.prototype.readUInt16LE = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 2, this.length),
                        this[e] | this[e + 1] << 8
                    },
                    h.prototype.readUInt16BE = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 2, this.length),
                        this[e] << 8 | this[e + 1]
                    },
                    h.prototype.readUInt32LE = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 4, this.length),
                        (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    },
                    h.prototype.readUInt32BE = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 4, this.length),
                        16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    },
                    h.prototype.readIntLE = function t(e, n, r) {
                        e >>>= 0,
                        n >>>= 0,
                        r || _(e, n, this.length);
                        for (var i = this[e], o = 1, a = 0; ++a < n && (o *= 256); )
                            i += this[e + a] * o;
                        return (o *= 128) <= i && (i -= Math.pow(2, 8 * n)),
                        i
                    },
                    h.prototype.readIntBE = function t(e, n, r) {
                        e >>>= 0,
                        n >>>= 0,
                        r || _(e, n, this.length);
                        for (var i = n, o = 1, a = this[e + --i]; 0 < i && (o *= 256); )
                            a += this[e + --i] * o;
                        return (o *= 128) <= a && (a -= Math.pow(2, 8 * n)),
                        a
                    },
                    h.prototype.readInt8 = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 1, this.length),
                        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                    },
                    h.prototype.readInt16LE = function t(e, n) {
                        e >>>= 0,
                        n || _(e, 2, this.length);
                        e = this[e] | this[e + 1] << 8;
                        return 32768 & e ? 4294901760 | e : e
                    },
                    h.prototype.readInt16BE = function t(e, n) {
                        e >>>= 0,
                        n || _(e, 2, this.length);
                        e = this[e + 1] | this[e] << 8;
                        return 32768 & e ? 4294901760 | e : e
                    },
                    h.prototype.readInt32LE = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 4, this.length),
                        this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    },
                    h.prototype.readInt32BE = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 4, this.length),
                        this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    },
                    h.prototype.readFloatLE = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 4, this.length),
                        o.read(this, e, !0, 23, 4)
                    },
                    h.prototype.readFloatBE = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 4, this.length),
                        o.read(this, e, !1, 23, 4)
                    },
                    h.prototype.readDoubleLE = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 8, this.length),
                        o.read(this, e, !0, 52, 8)
                    },
                    h.prototype.readDoubleBE = function t(e, n) {
                        return e >>>= 0,
                        n || _(e, 8, this.length),
                        o.read(this, e, !1, 52, 8)
                    },
                    h.prototype.writeUIntLE = function t(e, n, r, i) {
                        e = +e,
                        n >>>= 0,
                        r >>>= 0,
                        i || w(this, e, n, r, Math.pow(2, 8 * r) - 1, 0);
                        var o = 1,
                        a = 0;
                        for (this[n] = 255 & e; ++a < r && (o *= 256); )
                            this[n + a] = e / o & 255;
                        return n + r
                    },
                    h.prototype.writeUIntBE = function t(e, n, r, i) {
                        e = +e,
                        n >>>= 0,
                        r >>>= 0,
                        i || w(this, e, n, r, Math.pow(2, 8 * r) - 1, 0);
                        var o = r - 1,
                        a = 1;
                        for (this[n + o] = 255 & e; 0 <= --o && (a *= 256); )
                            this[n + o] = e / a & 255;
                        return n + r
                    },
                    h.prototype.writeUInt8 = function t(e, n, r) {
                        return e = +e,
                        n >>>= 0,
                        r || w(this, e, n, 1, 255, 0),
                        this[n] = 255 & e,
                        n + 1
                    },
                    h.prototype.writeUInt16LE = function t(e, n, r) {
                        return e = +e,
                        n >>>= 0,
                        r || w(this, e, n, 2, 65535, 0),
                        this[n] = 255 & e,
                        this[n + 1] = e >>> 8,
                        n + 2
                    },
                    h.prototype.writeUInt16BE = function t(e, n, r) {
                        return e = +e,
                        n >>>= 0,
                        r || w(this, e, n, 2, 65535, 0),
                        this[n] = e >>> 8,
                        this[n + 1] = 255 & e,
                        n + 2
                    },
                    h.prototype.writeUInt32LE = function t(e, n, r) {
                        return e = +e,
                        n >>>= 0,
                        r || w(this, e, n, 4, 4294967295, 0),
                        this[n + 3] = e >>> 24,
                        this[n + 2] = e >>> 16,
                        this[n + 1] = e >>> 8,
                        this[n] = 255 & e,
                        n + 4
                    },
                    h.prototype.writeUInt32BE = function t(e, n, r) {
                        return e = +e,
                        n >>>= 0,
                        r || w(this, e, n, 4, 4294967295, 0),
                        this[n] = e >>> 24,
                        this[n + 1] = e >>> 16,
                        this[n + 2] = e >>> 8,
                        this[n + 3] = 255 & e,
                        n + 4
                    },
                    h.prototype.writeIntLE = function t(e, n, r, i) {
                        e = +e,
                        n >>>= 0,
                        i || w(this, e, n, r, (i = Math.pow(2, 8 * r - 1)) - 1, -i);
                        var o = 0,
                        a = 1,
                        s = 0;
                        for (this[n] = 255 & e; ++o < r && (a *= 256); )
                            e < 0 && 0 === s && 0 !== this[n + o - 1] && (s = 1), this[n + o] = (e / a >> 0) - s & 255;
                        return n + r
                    },
                    h.prototype.writeIntBE = function t(e, n, r, i) {
                        e = +e,
                        n >>>= 0,
                        i || w(this, e, n, r, (i = Math.pow(2, 8 * r - 1)) - 1, -i);
                        var o = r - 1,
                        a = 1,
                        s = 0;
                        for (this[n + o] = 255 & e; 0 <= --o && (a *= 256); )
                            e < 0 && 0 === s && 0 !== this[n + o + 1] && (s = 1), this[n + o] = (e / a >> 0) - s & 255;
                        return n + r
                    },
                    h.prototype.writeInt8 = function t(e, n, r) {
                        return e = +e,
                        n >>>= 0,
                        r || w(this, e, n, 1, 127, -128),
                        this[n] = 255 & (e = e < 0 ? 255 + e + 1 : e),
                        n + 1
                    },
                    h.prototype.writeInt16LE = function t(e, n, r) {
                        return e = +e,
                        n >>>= 0,
                        r || w(this, e, n, 2, 32767, -32768),
                        this[n] = 255 & e,
                        this[n + 1] = e >>> 8,
                        n + 2
                    },
                    h.prototype.writeInt16BE = function t(e, n, r) {
                        return e = +e,
                        n >>>= 0,
                        r || w(this, e, n, 2, 32767, -32768),
                        this[n] = e >>> 8,
                        this[n + 1] = 255 & e,
                        n + 2
                    },
                    h.prototype.writeInt32LE = function t(e, n, r) {
                        return e = +e,
                        n >>>= 0,
                        r || w(this, e, n, 4, 2147483647, -2147483648),
                        this[n] = 255 & e,
                        this[n + 1] = e >>> 8,
                        this[n + 2] = e >>> 16,
                        this[n + 3] = e >>> 24,
                        n + 4
                    },
                    h.prototype.writeInt32BE = function t(e, n, r) {
                        return e = +e,
                        n >>>= 0,
                        r || w(this, e, n, 4, 2147483647, -2147483648),
                        this[n] = (e = e < 0 ? 4294967295 + e + 1 : e) >>> 24,
                        this[n + 1] = e >>> 16,
                        this[n + 2] = e >>> 8,
                        this[n + 3] = 255 & e,
                        n + 4
                    },
                    h.prototype.writeFloatLE = function t(e, n, r) {
                        return E(this, e, n, !0, r)
                    },
                    h.prototype.writeFloatBE = function t(e, n, r) {
                        return E(this, e, n, !1, r)
                    },
                    h.prototype.writeDoubleLE = function t(e, n, r) {
                        return k(this, e, n, !0, r)
                    },
                    h.prototype.writeDoubleBE = function t(e, n, r) {
                        return k(this, e, n, !1, r)
                    },
                    h.prototype.copy = function t(e, n, r, i) {
                        if (!h.isBuffer(e))
                            throw new TypeError("argument should be a Buffer");
                        if (r = r || 0, i || 0 === i || (i = this.length), n >= e.length && (n = e.length), (i = 0 < i && i < r ? r : i) === r)
                            return 0;
                        if (0 === e.length || 0 === this.length)
                            return 0;
                        if ((n = n || 0) < 0)
                            throw new RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length)
                            throw new RangeError("Index out of range");
                        if (i < 0)
                            throw new RangeError("sourceEnd out of bounds");
                        i > this.length && (i = this.length);
                        var o = (i = e.length - n < i - r ? e.length - n + r : i) - r;
                        if (this === e && "function" == typeof Uint8Array.prototype.copyWithin)
                            this.copyWithin(n, r, i);
                        else if (this === e && r < n && n < i)
                            for (var a = o - 1; 0 <= a; --a)
                                e[a + n] = this[a + r];
                        else
                            Uint8Array.prototype.set.call(e, this.subarray(r, i), n);
                        return o
                    },
                    h.prototype.fill = function t(e, n, r, i) {
                        if ("string" == typeof e) {
                            if ("string" == typeof n ? (i = n, n = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i)
                                throw new TypeError("encoding must be a string");
                            if ("string" == typeof i && !h.isEncoding(i))
                                throw new TypeError("Unknown encoding: " + i);
                            var o;
                            1 === e.length && (o = e.charCodeAt(0), ("utf8" === i && o < 128 || "latin1" === i) && (e = o))
                        } else
                            "number" == typeof e && (e &= 255);
                        if (n < 0 || this.length < n || this.length < r)
                            throw new RangeError("Out of range index");
                        if (r <= n)
                            return this;
                        var a;
                        if (n >>>= 0, r = void 0 === r ? this.length : r >>> 0, "number" == typeof(e = e || 0))
                            for (a = n; a < r; ++a)
                                this[a] = e;
                        else {
                            var s = h.isBuffer(e) ? e : h.from(e, i),
                            c = s.length;
                            if (0 === c)
                                throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                            for (a = 0; a < r - n; ++a)
                                this[a + n] = s[a % c]
                        }
                        return this
                    };
                    var x = /[^+/0-9A-Za-z-_]/g;
                    function S(t, e) {
                        var n;
                        e = e || 1 / 0;
                        for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
                            if (55295 < (n = t.charCodeAt(a)) && n < 57344) {
                                if (!i) {
                                    if (56319 < n) {
                                        -1 < (e -= 3) && o.push(239, 191, 189);
                                        continue
                                    }
                                    if (a + 1 === r) {
                                        -1 < (e -= 3) && o.push(239, 191, 189);
                                        continue
                                    }
                                    i = n;
                                    continue
                                }
                                if (n < 56320) {
                                    -1 < (e -= 3) && o.push(239, 191, 189),
                                    i = n;
                                    continue
                                }
                                n = 65536 + (i - 55296 << 10 | n - 56320)
                            } else
                                i && -1 < (e -= 3) && o.push(239, 191, 189);
                            if (i = null, n < 128) {
                                if (--e < 0)
                                    break;
                                o.push(n)
                            } else if (n < 2048) {
                                if ((e -= 2) < 0)
                                    break;
                                o.push(n >> 6 | 192, 63 & n | 128)
                            } else if (n < 65536) {
                                if ((e -= 3) < 0)
                                    break;
                                o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                            } else {
                                if (!(n < 1114112))
                                    throw new Error("Invalid code point");
                                if ((e -= 4) < 0)
                                    break;
                                o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                            }
                        }
                        return o
                    }
                    function D(t) {
                        return i.toByteArray(function t(e) {
                            if ((e = (e = e.split("=")[0]).trim().replace(x, "")).length < 2)
                                return "";
                            for (; e.length % 4 != 0; )
                                e += "=";
                            return e
                        }
                            (t))
                    }
                    function T(t, e, n, r) {
                        for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
                            e[i + n] = t[i];
                        return i
                    }
                    function R(t, e) {
                        return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                    }
                    function O(t) {
                        return t != t
                    }
                }
                .call(this)
            }
            .call(this, C("buffer").Buffer)
        }, {
            "base64-js": 2,
            buffer: 3,
            ieee754: 4
        }
    ],
    4: [function (t, e, n) {
            n.read = function (t, e, n, r, i) {
                var o,
                a,
                s = 8 * i - r - 1,
                c = (1 << s) - 1,
                u = c >> 1,
                d = -7,
                l = n ? i - 1 : 0,
                h = n ? -1 : 1,
                n = t[e + l];
                for (l += h, o = n & (1 << -d) - 1, n >>= -d, d += s; 0 < d; o = 256 * o + t[e + l], l += h, d -= 8);
                for (a = o & (1 << -d) - 1, o >>= -d, d += r; 0 < d; a = 256 * a + t[e + l], l += h, d -= 8);
                if (0 === o)
                    o = 1 - u;
                else {
                    if (o === c)
                        return a ? NaN : 1 / 0 * (n ? -1 : 1);
                    a += Math.pow(2, r),
                    o -= u
                }
                return (n ? -1 : 1) * a * Math.pow(2, o - r)
            },
            n.write = function (t, e, n, r, i, o) {
                var a,
                s,
                c = 8 * o - i - 1,
                u = (1 << c) - 1,
                d = u >> 1,
                l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = r ? 0 : o - 1,
                f = r ? 1 : -1,
                o = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = u) : (a = Math.floor(Math.log(e) / Math.LN2), e * (r = Math.pow(2, -a)) < 1 && (a--, r *= 2), 2 <= (e += 1 <= a + d ? l / r : l * Math.pow(2, 1 - d)) * r && (a++, r /= 2), u <= a + d ? (s = 0, a = u) : 1 <= a + d ? (s = (e * r - 1) * Math.pow(2, i), a += d) : (s = e * Math.pow(2, d - 1) * Math.pow(2, i), a = 0)); 8 <= i; t[n + h] = 255 & s, h += f, s /= 256, i -= 8);
                for (a = a << i | s, c += i; 0 < c; t[n + h] = 255 & a, h += f, a /= 256, c -= 8);
                t[n + h - f] |= 128 * o
            }
        }, {}
    ],
    5: [function (t, e, n) {
            "use strict";
            t("@bygd/gd-sdk-pes/dist/default")
        }, {
            "@bygd/gd-sdk-pes/dist/default": 1
        }
    ]
}, {}, [5]);
