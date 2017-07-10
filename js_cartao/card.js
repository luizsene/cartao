var Cartao = Cartao || {};
! function(e) {
    var n = function(n) {
        if (!n) return null;
        n = n.replace(/[^0-9]/g, "");
        var t = new e.creditCard;
        return t.cardNumber = n, t.brand()
    };
    e.CardForm = function(e, t) {
        t = t || {};
        var a = "keyup.card",
            u = null,
            o = $(e).find(".card"),
            r = o.find(".number"),
            s = o.find(".expiration"),
            i = o.find(".expiration-label"),
            l = o.find(".cvv"),
            d = o.find(".cvv.amex"),
            c = o.find(".name"),
            f = $(t.number.input),
            v = $(t.cvv.input),
            m = $(t.name.input),
            x = $(t.expiration.input),
            C = t.cvv.value || "•••",
            p = t.number.value || "•••• •••• •••• ••••",
            b = t.name.value || "Nome completo",
            A = t.expiration.value || "MM/AA";
        l.text(C), d.text(Array(5).join(C.charAt(0))), r.text(p), c.text(b), s.text(A);
        var M = function() {
                f.val() ? setTimeout(function() {
                    r.text(f.val());
                    var e = n(f.val());
                    e && "unknown" !== e ? (o.removeClass(u), o.addClass(e), f.parent("div").addClass(e), u = e) : (f.parent("div").removeClass(u), o.removeClass(u), u = null)
                }, 0) : (r.text(p), o.removeClass(u), u = null)
            },
            g = function() {
                v.val() ? l.text(v.val()) : (l.text(C), d.text(Array(5).join(C.charAt(0))))
            },
            y = function() {
                m.val() ? c.text(m.val()) : c.text(b)
            },
            P = function() {
                x.val() ? setTimeout(function() {
                    s.text(x.val())
                }, 0) : s.text(A)
            };
        return f.bind(a, M).focus(function() {
            r.addClass("focused")
        }).blur(function() {
            r.removeClass("focused")
        }), v.bind(a, g).focus(function() {
            l.addClass("focused"), o.addClass("flipped")
        }).blur(function() {
            l.removeClass("focused"), o.removeClass("flipped")
        }), m.bind(a, y).focus(function() {
            c.addClass("focused")
        }).blur(function() {
            c.removeClass("focused")
        }), x.bind(a, P).focus(function() {
            s.addClass("focused"), i.addClass("focused")
        }).blur(function() {
            s.removeClass("focused"), i.removeClass("focused")
        }), {
            clear: function() {
                o.removeClass(u), r.text(p), l.text(C), c.text(b), s.text(A)
            },
            fill: function() {
                M(), g(), y(), P()
            }
        }
    }
}(Cartao);
