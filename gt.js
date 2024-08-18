function gt(e, t, a) {
    var n, o, r = 0,
        i = gt.prefilters.length,
        s = _.Deferred().always((function() {
            delete l.elem
        })),
        l = function() {
            if (o) return !1;
            for (var t = ht || kt(), a = Math.max(0, u.startTime + u.duration - t), n = 1 - (a / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++) u.tweens[r].run(n);
            return s.notifyWith(e, [u, n, a]), n < 1 && i ? a : (i || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
        },
        u = s.promise({
            elem: e,
            props: _.extend({}, t),
            opts: _.extend(!0, {
                specialEasing: {},
                easing: _.easing._default
            }, a),
            originalProperties: t,
            originalOptions: a,
            startTime: ht || kt(),
            duration: a.duration,
            tweens: [],
            createTween: function(t, a) {
                var n = _.Tween(e, u.opts, t, a, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(n), n
            },
            stop: function(t) {
                var a = 0,
                    n = t ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; a < n; a++) u.tweens[a].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
            }
        }),
        h = u.props;
    for (! function(e, t) {
            var a, n, o, r, i;
            for (a in e)
                if (o = t[n = oe(a)], r = e[a], Array.isArray(r) && (o = r[1], r = e[a] = r[0]), a !== n && (e[n] = r, delete e[a]), (i = _.cssHooks[n]) && "expand" in i)
                    for (a in r = i.expand(r), delete e[n], r) a in e || (e[a] = r[a], t[a] = o);
                else t[n] = o
        }(h, u.opts.specialEasing); r < i; r++)
        if (n = gt.prefilters[r].call(u, e, h, u.opts)) return b(n.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
    return _.map(h, bt, u), b(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(l, {
        elem: e,
        anim: u,
        queue: u.opts.queue
    })), u
}
