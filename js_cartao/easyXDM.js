! function(n, e, t, o, a, r) {
    function i(n, e) {
        var t = typeof n[e];
        return "function" == t || !("object" != t || !n[e]) || "unknown" == t
    }

    function c(n, e) {
        return !("object" != typeof n[e] || !n[e])
    }

    function s(n) {
        return "[object Array]" === Object.prototype.toString.call(n)
    }

    function l() {
        var n = "Shockwave Flash",
            e = "application/x-shockwave-flash";
        if (!w(navigator.plugins) && "object" == typeof navigator.plugins[n]) {
            var t = navigator.plugins[n].description;
            t && !w(navigator.mimeTypes) && navigator.mimeTypes[e] && navigator.mimeTypes[e].enabledPlugin && (E = t.match(/\d+/g))
        }
        if (!E) {
            var o;
            try {
                o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), E = Array.prototype.slice.call(o.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1), o = null
            } catch (a) {}
        }
        if (!E) return !1;
        var r = parseInt(E[0], 10),
            i = parseInt(E[1], 10);
        return R = r > 9 && i > 0, !0
    }

    function u() {
        if (!z) {
            z = !0;
            for (var n = 0; n < q.length; n++) q[n]();
            q.length = 0
        }
    }

    function p(n, e) {
        return z ? void n.call(e) : void q.push(function() {
            n.call(e)
        })
    }

    function f() {
        var n = parent;
        if ("" !== L)
            for (var e = 0, t = L.split("."); e < t.length; e++) n = n[t[e]];
        return n.easyXDM
    }

    function d(e) {
        return n.easyXDM = A, L = e, L && (I = "easyXDM_" + L.replace(".", "_") + "_"), J
    }

    function h(n) {
        return n.match(D)[3]
    }

    function m(n) {
        return n.match(D)[4] || ""
    }

    function g(n) {
        var e = n.toLowerCase().match(D),
            t = e[2],
            o = e[3],
            a = e[4] || "";
        return ("http:" == t && ":80" == a || "https:" == t && ":443" == a) && (a = ""), t + "//" + o + a
    }

    function v(n) {
console.log('n',n);
        if (n = n.replace(B, "$1/"), !n.match(/^(http||https):\/\//)) {
            var e = "/" === n.substring(0, 1) ? "" : t.pathname;
            "/" !== e.substring(e.length - 1) && (e = e.substring(0, e.lastIndexOf("/") + 1)), n = t.protocol + "//" + t.host + e + n
        }
        for (; j.test(n);) n = n.replace(j, "");
        return n
    }

    function y(n, e) {
        var t = "",
            o = n.indexOf("#");
        o !== -1 && (t = n.substring(o), n = n.substring(0, o));
        var a = [];
        for (var i in e) e.hasOwnProperty(i) && a.push(i + "=" + r(e[i]));
        return n + (W ? "#" : n.indexOf("?") == -1 ? "?" : "&") + a.join("&") + t
    }

    function w(n) {
        return "undefined" == typeof n
    }

    function b(n, e, t) {
        var o;
        for (var a in e) e.hasOwnProperty(a) && (a in n ? (o = e[a], "object" == typeof o ? b(n[a], o, t) : t || (n[a] = e[a])) : n[a] = e[a]);
        return n
    }

    function k() {
        var n = e.body.appendChild(e.createElement("form")),
            t = n.appendChild(e.createElement("input"));
        t.name = I + "TEST" + C, S = t !== n.elements[t.name], e.body.removeChild(n)
    }

    function _(n) {
        w(S) && k();
        var t;
        S ? t = e.createElement('<iframe name="' + n.props.name + '"/>') : (t = e.createElement("IFRAME"), t.name = n.props.name), t.id = t.name = n.props.name, delete n.props.name, "string" == typeof n.container && (n.container = e.getElementById(n.container)), n.container || (b(t.style, {
            position: "absolute",
            top: "-2000px",
            left: "0px"
        }), n.container = e.body);
        var o = n.props.src;
        if (n.props.src = "javascript:false", b(t, n.props), t.border = t.frameBorder = 0, t.allowTransparency = !0, n.container.appendChild(t), n.onLoad && F(t, "load", n.onLoad), n.usePost) {
            var a, r = n.container.appendChild(e.createElement("form"));
            if (r.target = t.name, r.action = o, r.method = "POST", "object" == typeof n.usePost)
                for (var i in n.usePost) n.usePost.hasOwnProperty(i) && (S ? a = e.createElement('<input name="' + i + '"/>') : (a = e.createElement("INPUT"), a.name = i), a.value = n.usePost[i], r.appendChild(a));
            r.submit(), r.parentNode.removeChild(r)
        } else t.src = o;
        return n.props.src = o, t
    }

    function x(n, e) {
        "string" == typeof n && (n = [n]);
        for (var t, o = n.length; o--;)
            if (t = n[o], t = new RegExp("^" == t.substr(0, 1) ? t : "^" + t.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"), t.test(e)) return !0;
        return !1
    }

    function O(o) {
      console.log('o',o);
        var a, r = o.protocol;
        if (o.isHost = o.isHost || w(V.xdm_p), W = o.hash || !1, o.props || (o.props = {}), o.isHost) o.remote = v(o && o.remote ? o.remote : ''), o.channel = o.channel || "default" + C++, o.secret = Math.random().toString(16).substring(2), w(r) && (r = g(t.href) == g(o.remote) ? "4" : i(n, "postMessage") || i(e, "postMessage") ? "1" : o.swf && i(n, "ActiveXObject") && l() ? "6" : "Gecko" === navigator.product && "frameElement" in n && navigator.userAgent.indexOf("WebKit") == -1 ? "5" : o.remoteHelper ? "2" : "0");
        else if (o.channel = V.xdm_c.replace(/["'<>\\]/g, ""), o.secret = V.xdm_s, o.remote = V.xdm_e.replace(/["'<>\\]/g, ""), r = V.xdm_p, o.acl && !x(o.acl, o.remote)) throw new Error("Access denied for " + o.remote);
        switch (o.protocol = r, r) {
            case "0":
                if (b(o, {
                        interval: 100,
                        delay: 2e3,
                        useResize: !0,
                        useParent: !1,
                        usePolling: !1
                    }, !0), o.isHost) {
                    if (!o.local) {
                        for (var c, s = t.protocol + "//" + t.host, u = e.body.getElementsByTagName("img"), p = u.length; p--;)
                            if (c = u[p], c.src.substring(0, s.length) === s) {
                                o.local = c.src;
                                break
                            }
                        o.local || (o.local = n)
                    }
                    var f = {
                        xdm_c: o.channel,
                        xdm_p: 0
                    };
                    o.local === n ? (o.usePolling = !0, o.useParent = !0, o.local = t.protocol + "//" + t.host + t.pathname + t.search, f.xdm_e = o.local, f.xdm_pa = 1) : f.xdm_e = v(o.local), o.container && (o.useResize = !1, f.xdm_po = 1), o.remote = y(o.remote, f)
                } else b(o, {
                    channel: V.xdm_c,
                    remote: V.xdm_e,
                    useParent: !w(V.xdm_pa),
                    usePolling: !w(V.xdm_po),
                    useResize: !o.useParent && o.useResize
                });
                a = [new J.stack.HashTransport(o), new J.stack.ReliableBehavior({}), new J.stack.QueueBehavior({
                    encode: !0,
                    maxLength: 4e3 - o.remote.length
                }), new J.stack.VerifyBehavior({
                    initiate: o.isHost
                })];
                break;
            case "1":
                a = [new J.stack.PostMessageTransport(o)];
                break;
            case "2":
                o.isHost && (o.remoteHelper = v(o.remoteHelper)), a = [new J.stack.NameTransport(o), new J.stack.QueueBehavior, new J.stack.VerifyBehavior({
                    initiate: o.isHost
                })];
                break;
            case "3":
                a = [new J.stack.NixTransport(o)];
                break;
            case "4":
                a = [new J.stack.SameOriginTransport(o)];
                break;
            case "5":
                a = [new J.stack.FrameElementTransport(o)];
                break;
            case "6":
                E || l(), a = [new J.stack.FlashTransport(o)]
        }
        return a.push(new J.stack.QueueBehavior({
            lazy: o.lazy,
            remove: !0
        })), a
    }

    function M(n) {
        for (var e, t = {
                incoming: function(n, e) {
                    this.up.incoming(n, e)
                },
                outgoing: function(n, e) {
                    this.down.outgoing(n, e)
                },
                callback: function(n) {
                    this.up.callback(n)
                },
                init: function() {
                    this.down.init()
                },
                destroy: function() {
                    this.down.destroy()
                }
            }, o = 0, a = n.length; o < a; o++) e = n[o], b(e, t, !0), 0 !== o && (e.down = n[o - 1]), o !== a - 1 && (e.up = n[o + 1]);
        return e
    }

    function T(n) {
        n.up.down = n.down, n.down.up = n.up, n.up = n.down = null
    }
    var S, E, R, F, N, P = this,
        C = Math.floor(1e4 * Math.random()),
        H = Function.prototype,
        D = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
        j = /[\-\w]+\/\.\.\//,
        B = /([^:])\/\//g,
        L = "",
        J = {},
        A = n.easyXDM,
        I = "easyXDM_",
        W = !1;
    if (i(n, "addEventListener")) F = function(n, e, t) {
        n.addEventListener(e, t, !1)
    }, N = function(n, e, t) {
        n.removeEventListener(e, t, !1)
    };
    else {
        if (!i(n, "attachEvent")) throw new Error("Browser not supported");
        F = function(n, e, t) {
            n.attachEvent("on" + e, t)
        }, N = function(n, e, t) {
            n.detachEvent("on" + e, t)
        }
    }
    var X, z = !1,
        q = [];
    if ("readyState" in e ? (X = e.readyState, z = "complete" == X || ~navigator.userAgent.indexOf("AppleWebKit/") && ("loaded" == X || "interactive" == X)) : z = !!e.body, !z) {
        if (i(n, "addEventListener")) F(e, "DOMContentLoaded", u);
        else if (F(e, "readystatechange", function() {
                "complete" == e.readyState && u()
            }), e.documentElement.doScroll && n === top) {
            var U = function() {
                if (!z) {
                    try {
                        e.documentElement.doScroll("left")
                    } catch (n) {
                        return void o(U, 1)
                    }
                    u()
                }
            };
            U()
        }
        F(n, "load", u)
    }
    var V = function(n) {
            n = n.substring(1).split("&");
            for (var e, t = {}, o = n.length; o--;) e = n[o].split("="), t[e[0]] = a(e[1]);
            return t
        }(/xdm_e=/.test(t.search) ? t.search : t.hash),
        Q = function() {
            var n = {},
                e = {
                    a: [1, 2, 3]
                },
                t = '{"a":[1,2,3]}';
            return "undefined" != typeof JSON && "function" == typeof JSON.stringify && JSON.stringify(e).replace(/\s/g, "") === t ? JSON : (Object.toJSON && Object.toJSON(e).replace(/\s/g, "") === t && (n.stringify = Object.toJSON), "function" == typeof String.prototype.evalJSON && (e = t.evalJSON(), e.a && 3 === e.a.length && 3 === e.a[2] && (n.parse = function(n) {
                return n.evalJSON()
            })), n.stringify && n.parse ? (Q = function() {
                return n
            }, n) : null)
        };
    b(J, {
            version: "2.4.19.3",
            query: V,
            stack: {},
            apply: b,
            getJSONObject: Q,
            whenReady: p,
            noConflict: d
        }), J.DomHelper = {
            on: F,
            un: N,
            requiresJSON: function(t) {
                c(n, "JSON") || e.write('<script type="text/javascript" src="' + t + '"></script>')
            }
        },
        function() {
            var n = {};
            J.Fn = {
                set: function(e, t) {
                    n[e] = t
                },
                get: function(e, t) {
                    if (n.hasOwnProperty(e)) {
                        var o = n[e];
                        return t && delete n[e], o
                    }
                }
            }
        }(), J.Socket = function(n) {
            var e = M(O(n).concat([{
                    incoming: function(e, t) {
                        n.onMessage(e, t)
                    },
                    callback: function(e) {
                        n.onReady && n.onReady(e)
                    }
                }])),
                t = g(n.remote);
            this.origin = g(n.remote), this.destroy = function() {
                e.destroy()
            }, this.postMessage = function(n) {
                e.outgoing(n, t)
            }, e.init()
        }, J.Rpc = function(n, e) {
            if (e.local)
                for (var t in e.local)
                    if (e.local.hasOwnProperty(t)) {
                        var o = e.local[t];
                        "function" == typeof o && (e.local[t] = {
                            method: o
                        })
                    }
            var a = M(O(n).concat([new J.stack.RpcBehavior(this, e), {
                callback: function(e) {
                    n.onReady && n.onReady(e)
                }
            }]));
            this.origin = g(n.remote), this.destroy = function() {
                a.destroy()
            }, a.init()
        }, J.stack.SameOriginTransport = function(n) {
            var e, a, r, i;
            return e = {
                outgoing: function(n, e, t) {
                    r(n), t && t()
                },
                destroy: function() {
                    a && (a.parentNode.removeChild(a), a = null)
                },
                onDOMReady: function() {
                    i = g(n.remote), n.isHost ? (b(n.props, {
                        src: y(n.remote, {
                            xdm_e: t.protocol + "//" + t.host + t.pathname,
                            xdm_c: n.channel,
                            xdm_p: 4
                        }),
                        name: I + n.channel + "_provider"
                    }), a = _(n), J.Fn.set(n.channel, function(n) {
                        return r = n, o(function() {
                                e.up.callback(!0)
                            }, 0),
                            function(n) {
                                e.up.incoming(n, i)
                            }
                    })) : (r = f().Fn.get(n.channel, !0)(function(n) {
                        e.up.incoming(n, i)
                    }), o(function() {
                        e.up.callback(!0)
                    }, 0))
                },
                init: function() {
                    p(e.onDOMReady, e)
                }
            }
        }, J.stack.FlashTransport = function(n) {
            function a(n, e) {
                o(function() {
                    c.up.incoming(n, l)
                }, 0)
            }

            function i(t) {
                var o = n.swf + "?host=" + n.isHost,
                    a = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
                J.Fn.set("flash_loaded" + t.replace(/[\-.]/g, "_"), function() {
                    J.stack.FlashTransport[t].swf = u = f.firstChild;
                    for (var n = J.stack.FlashTransport[t].queue, e = 0; e < n.length; e++) n[e]();
                    n.length = 0
                }), n.swfContainer ? f = "string" == typeof n.swfContainer ? e.getElementById(n.swfContainer) : n.swfContainer : (f = e.createElement("div"), b(f.style, R && n.swfNoThrottle ? {
                    height: "20px",
                    width: "20px",
                    position: "fixed",
                    right: 0,
                    top: 0
                } : {
                    height: "1px",
                    width: "1px",
                    position: "absolute",
                    overflow: "hidden",
                    right: 0,
                    top: 0
                }), e.body.appendChild(f));
                var i = "callback=flash_loaded" + r(t.replace(/[\-.]/g, "_")) + "&proto=" + P.location.protocol + "&domain=" + r(h(P.location.href)) + "&port=" + r(m(P.location.href)) + "&ns=" + r(L);
                f.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + a + "' data='" + o + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + o + "'></param><param name='flashvars' value='" + i + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + i + "' allowScriptAccess='always' wmode='transparent' src='" + o + "' height='1' width='1'></embed></object>"
            }
            var c, s, l, u, f;
            return c = {
                outgoing: function(e, t, o) {
                    u.postMessage(n.channel, e.toString()), o && o()
                },
                destroy: function() {
                    try {
                        u.destroyChannel(n.channel)
                    } catch (e) {}
                    u = null, s && (s.parentNode.removeChild(s), s = null)
                },
                onDOMReady: function() {
                    l = n.remote, J.Fn.set("flash_" + n.channel + "_init", function() {
                        o(function() {
                            c.up.callback(!0)
                        })
                    }), J.Fn.set("flash_" + n.channel + "_onMessage", a), n.swf = v(n.swf);
                    var e = h(n.swf),
                        r = function() {
                            J.stack.FlashTransport[e].init = !0, u = J.stack.FlashTransport[e].swf, u.createChannel(n.channel, n.secret, g(n.remote), n.isHost), n.isHost && (R && n.swfNoThrottle && b(n.props, {
                                position: "fixed",
                                right: 0,
                                top: 0,
                                height: "20px",
                                width: "20px"
                            }), b(n.props, {
                                src: y(n.remote, {
                                    xdm_e: g(t.href),
                                    xdm_c: n.channel,
                                    xdm_p: 6,
                                    xdm_s: n.secret
                                }),
                                name: I + n.channel + "_provider"
                            }), s = _(n))
                        };
                    J.stack.FlashTransport[e] && J.stack.FlashTransport[e].init ? r() : J.stack.FlashTransport[e] ? J.stack.FlashTransport[e].queue.push(r) : (J.stack.FlashTransport[e] = {
                        queue: [r]
                    }, i(e))
                },
                init: function() {
                    p(c.onDOMReady, c)
                }
            }
        }, J.stack.PostMessageTransport = function(e) {
            function a(n) {
                if (n.origin) return g(n.origin);
                if (n.uri) return g(n.uri);
                if (n.domain) return t.protocol + "//" + n.domain;
                throw "Unable to retrieve the origin of the event"
            }

            function r(n) {
                var t = a(n);
                t == l && n.data.substring(0, e.channel.length + 1) == e.channel + " " && i.up.incoming(n.data.substring(e.channel.length + 1), t)
            }
            var i, c, s, l;
            return i = {
                outgoing: function(n, t, o) {
                    s.postMessage(e.channel + " " + n, t || l), o && o()
                },
                destroy: function() {
                    N(n, "message", r), c && (s = null, c.parentNode.removeChild(c), c = null)
                },
                onDOMReady: function() {
                    if (l = g(e.remote), e.isHost) {
                        var a = function(t) {
                            t.data == e.channel + "-ready" && (s = "postMessage" in c.contentWindow ? c.contentWindow : c.contentWindow.document, N(n, "message", a), F(n, "message", r), o(function() {
                                i.up.callback(!0)
                            }, 0))
                        };
                        F(n, "message", a), b(e.props, {
                            src: y(e.remote, {
                                xdm_e: g(t.href),
                                xdm_c: e.channel,
                                xdm_p: 1
                            }),
                            name: I + e.channel + "_provider"
                        }), c = _(e)
                    } else F(n, "message", r), s = "postMessage" in n.parent ? n.parent : n.parent.document, s.postMessage(e.channel + "-ready", l), o(function() {
                        i.up.callback(!0)
                    }, 0)
                },
                init: function() {
                    p(i.onDOMReady, i)
                }
            }
        }, J.stack.FrameElementTransport = function(a) {
            var r, i, c, s;
            return r = {
                outgoing: function(n, e, t) {
                    c.call(this, n), t && t()
                },
                destroy: function() {
                    i && (i.parentNode.removeChild(i), i = null)
                },
                onDOMReady: function() {
                    s = g(a.remote), a.isHost ? (b(a.props, {
                        src: y(a.remote, {
                            xdm_e: g(t.href),
                            xdm_c: a.channel,
                            xdm_p: 5
                        }),
                        name: I + a.channel + "_provider"
                    }), i = _(a), i.fn = function(n) {
                        return delete i.fn, c = n, o(function() {
                                r.up.callback(!0)
                            }, 0),
                            function(n) {
                                r.up.incoming(n, s)
                            }
                    }) : (e.referrer && g(e.referrer) != V.xdm_e && (n.top.location = V.xdm_e), c = n.frameElement.fn(function(n) {
                        r.up.incoming(n, s)
                    }), r.up.callback(!0))
                },
                init: function() {
                    p(r.onDOMReady, r)
                }
            }
        }, J.stack.NameTransport = function(n) {
            function e(e) {
                var t = n.remoteHelper + (c ? "#_3" : "#_2") + n.channel;
                s.contentWindow.sendMessage(e, t)
            }

            function t() {
                c ? 2 !== ++u && c || i.up.callback(!0) : (e("ready"), i.up.callback(!0))
            }

            function a(n) {
                i.up.incoming(n, d)
            }

            function r() {
                f && o(function() {
                    f(!0)
                }, 0)
            }
            var i, c, s, l, u, f, d, h;
            return i = {
                outgoing: function(n, t, o) {
                    f = o, e(n)
                },
                destroy: function() {
                    s.parentNode.removeChild(s), s = null, c && (l.parentNode.removeChild(l), l = null)
                },
                onDOMReady: function() {
                    c = n.isHost, u = 0, d = g(n.remote), n.local = v(n.local), c ? (J.Fn.set(n.channel, function(e) {
                        c && "ready" === e && (J.Fn.set(n.channel, a), t())
                    }), h = y(n.remote, {
                        xdm_e: n.local,
                        xdm_c: n.channel,
                        xdm_p: 2
                    }), b(n.props, {
                        src: h + "#" + n.channel,
                        name: I + n.channel + "_provider"
                    }), l = _(n)) : (n.remoteHelper = n.remote, J.Fn.set(n.channel, a));
                    var e = function() {
                        var a = s || this;
                        N(a, "load", e), J.Fn.set(n.channel + "_load", r),
                            function i() {
                                "function" == typeof a.contentWindow.sendMessage ? t() : o(i, 50)
                            }()
                    };
                    s = _({
                        props: {
                            src: n.local + "#_4" + n.channel
                        },
                        onLoad: e
                    })
                },
                init: function() {
                    p(i.onDOMReady, i)
                }
            }
        }, J.stack.HashTransport = function(e) {
            function t(n) {
                if (m) {
                    var t = e.remote + "#" + d++ + "_" + n;
                    (s || !v ? m.contentWindow : m).location = t
                }
            }

            function a(n) {
                f = n, c.up.incoming(f.substring(f.indexOf("_") + 1), y)
            }

            function r() {
                if (h) {
                    var n = h.location.href,
                        e = "",
                        t = n.indexOf("#");
                    t != -1 && (e = n.substring(t)), e && e != f && a(e)
                }
            }

            function i() {
                l = setInterval(r, u)
            }
            var c, s, l, u, f, d, h, m, v, y;
            return c = {
                outgoing: function(n, e) {
                    t(n)
                },
                destroy: function() {
                    n.clearInterval(l), !s && v || m.parentNode.removeChild(m), m = null
                },
                onDOMReady: function() {
                    if (s = e.isHost, u = e.interval, f = "#" + e.channel, d = 0, v = e.useParent, y = g(e.remote), s) {
                        if (b(e.props, {
                                src: e.remote,
                                name: I + e.channel + "_provider"
                            }), v) e.onLoad = function() {
                            h = n, i(), c.up.callback(!0)
                        };
                        else {
                            var t = 0,
                                a = e.delay / 50;
                            ! function r() {
                                if (++t > a) throw new Error("Unable to reference listenerwindow");
                                try {
                                    h = m.contentWindow.frames[I + e.channel + "_consumer"]
                                } catch (n) {}
                                h ? (i(), c.up.callback(!0)) : o(r, 50)
                            }()
                        }
                        m = _(e)
                    } else h = n, i(), v ? (m = parent, c.up.callback(!0)) : (b(e, {
                        props: {
                            src: e.remote + "#" + e.channel + new Date,
                            name: I + e.channel + "_consumer"
                        },
                        onLoad: function() {
                            c.up.callback(!0)
                        }
                    }), m = _(e))
                },
                init: function() {
                    p(c.onDOMReady, c)
                }
            }
        }, J.stack.ReliableBehavior = function(n) {
            var e, t, o = 0,
                a = 0,
                r = "";
            return e = {
                incoming: function(n, i) {
                    var c = n.indexOf("_"),
                        s = n.substring(0, c).split(",");
                    n = n.substring(c + 1), s[0] == o && (r = "", t && t(!0)), n.length > 0 && (e.down.outgoing(s[1] + "," + o + "_" + r, i), a != s[1] && (a = s[1], e.up.incoming(n, i)))
                },
                outgoing: function(n, i, c) {
                    r = n, t = c, e.down.outgoing(a + "," + ++o + "_" + n, i)
                }
            }
        }, J.stack.QueueBehavior = function(n) {
            function e() {
                if (n.remove && 0 === c.length) return void T(t);
                if (!s && 0 !== c.length && !i) {
                    s = !0;
                    var a = c.shift();
                    t.down.outgoing(a.data, a.origin, function(n) {
                        s = !1, a.callback && o(function() {
                            a.callback(n)
                        }, 0), e()
                    })
                }
            }
            var t, i, c = [],
                s = !0,
                l = "",
                u = 0,
                p = !1,
                f = !1;
            return t = {
                init: function() {
                    w(n) && (n = {}), n.maxLength && (u = n.maxLength, f = !0), n.lazy ? p = !0 : t.down.init()
                },
                callback: function(n) {
                    s = !1;
                    var o = t.up;
                    e(), o.callback(n)
                },
                incoming: function(e, o) {
                    if (f) {
                        var r = e.indexOf("_"),
                            i = parseInt(e.substring(0, r), 10);
                        l += e.substring(r + 1), 0 === i && (n.encode && (l = a(l)), t.up.incoming(l, o), l = "")
                    } else t.up.incoming(e, o)
                },
                outgoing: function(o, a, i) {
                    n.encode && (o = r(o));
                    var s, l = [];
                    if (f) {
                        for (; 0 !== o.length;) s = o.substring(0, u), o = o.substring(s.length), l.push(s);
                        for (; s = l.shift();) c.push({
                            data: l.length + "_" + s,
                            origin: a,
                            callback: 0 === l.length ? i : null
                        })
                    } else c.push({
                        data: o,
                        origin: a,
                        callback: i
                    });
                    p ? t.down.init() : e()
                },
                destroy: function() {
                    i = !0, t.down.destroy()
                }
            }
        }, J.stack.VerifyBehavior = function(n) {
            function e() {
                o = Math.random().toString(16).substring(2), t.down.outgoing(o)
            }
            var t, o, a;
            return t = {
                incoming: function(r, i) {
                    var c = r.indexOf("_");
                    c === -1 ? r === o ? t.up.callback(!0) : a || (a = r, n.initiate || e(), t.down.outgoing(r)) : r.substring(0, c) === a && t.up.incoming(r.substring(c + 1), i)
                },
                outgoing: function(n, e, a) {
                    t.down.outgoing(o + "_" + n, e, a)
                },
                callback: function(t) {
                    n.initiate && e()
                }
            }
        }, J.stack.RpcBehavior = function(n, e) {
            function t(n) {
                n.jsonrpc = "2.0", r.down.outgoing(i.stringify(n))
            }

            function o(n, e) {
                var o = Array.prototype.slice;
                return function() {
                    var a, r = arguments.length,
                        i = {
                            method: e
                        };
                    r > 0 && "function" == typeof arguments[r - 1] ? (r > 1 && "function" == typeof arguments[r - 2] ? (a = {
                        success: arguments[r - 2],
                        error: arguments[r - 1]
                    }, i.params = o.call(arguments, 0, r - 2)) : (a = {
                        success: arguments[r - 1]
                    }, i.params = o.call(arguments, 0, r - 1)), l["" + ++c] = a, i.id = c) : i.params = o.call(arguments, 0), n.namedParams && 1 === i.params.length && (i.params = i.params[0]), t(i)
                }
            }

            function a(n, e, o, a) {
                if (!o) return void(e && t({
                    id: e,
                    error: {
                        code: -32601,
                        message: "Procedure not found."
                    }
                }));
                var r, i;
                e ? (r = function(n) {
                    r = H, t({
                        id: e,
                        result: n
                    })
                }, i = function(n, o) {
                    i = H;
                    var a = {
                        id: e,
                        error: {
                            code: -32099,
                            message: n
                        }
                    };
                    o && (a.error.data = o), t(a)
                }) : r = i = H, s(a) || (a = [a]);
                try {
                    var c = o.method.apply(o.scope, a.concat([r, i]));
                    w(c) || r(c)
                } catch (l) {
                    i(l.message)
                }
            }
            var r, i = e.serializer || Q(),
                c = 0,
                l = {};
            return r = {
                incoming: function(n, o) {
                    var r = i.parse(n);
                    if (r.method) e.handle ? e.handle(r, t) : a(r.method, r.id, e.local[r.method], r.params);
                    else {
                        var c = l[r.id];
                        r.error ? c.error && c.error(r.error) : c.success && c.success(r.result), delete l[r.id]
                    }
                },
                init: function() {
                    if (e.remote)
                        for (var t in e.remote) e.remote.hasOwnProperty(t) && (n[t] = o(e.remote[t], t));
                    r.down.init()
                },
                destroy: function() {
                    for (var t in e.remote) e.remote.hasOwnProperty(t) && n.hasOwnProperty(t) && delete n[t];
                    r.down.destroy()
                }
            }
        }, P.easyXDM = J
}(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent);
