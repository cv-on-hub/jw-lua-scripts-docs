var stork = (function (e) {
    var t = {}
    function n(r) {
        if (t[r]) return t[r].exports
        var s = (t[r] = { i: r, l: !1, exports: {} })
        return e[r].call(s.exports, s, s.exports, n), (s.l = !0), s.exports
    }
    return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
        }),
        (n.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e
            var r = Object.create(null)
            if (
                (n.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
            )
                for (var s in e)
                    n.d(
                        r,
                        s,
                        function (t) {
                            return e[t]
                        }.bind(null, s)
                    )
            return r
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default
                      }
                    : function () {
                          return e
                      }
            return n.d(t, 'a', t), t
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (n.p = ''),
        n((n.s = 2))
    )
})([
    function (e, t, n) {
        'use strict'
        function r(e) {
            const t = n.p
            let r = ''
            return (
                (!t || t.indexOf('://') < 0) &&
                    (r += window.location.protocol + '//' + window.location.host),
                (r += t || '/'),
                r + e
            )
        }
        let s
        n.r(t),
            n.d(t, 'wasm_register_index', function () {
                return w
            }),
            n.d(t, 'wasm_search', function () {
                return b
            })
        const o = new Array(32).fill(void 0)
        function i(e) {
            return o[e]
        }
        o.push(void 0, null, !0, !1)
        let a = o.length
        function l(e) {
            const t = i(e)
            return (
                (function (e) {
                    e < 36 || ((o[e] = a), (a = e))
                })(e),
                t
            )
        }
        let u = 0,
            c = null
        function h() {
            return (
                (null !== c && c.buffer === s.memory.buffer) ||
                    (c = new Uint8Array(s.memory.buffer)),
                c
            )
        }
        let d = new TextEncoder('utf-8')
        const f =
            'function' == typeof d.encodeInto
                ? function (e, t) {
                      return d.encodeInto(e, t)
                  }
                : function (e, t) {
                      const n = d.encode(e)
                      return t.set(n), { read: e.length, written: n.length }
                  }
        function g(e, t, n) {
            if (void 0 === n) {
                const n = d.encode(e),
                    r = t(n.length)
                return (
                    h()
                        .subarray(r, r + n.length)
                        .set(n),
                    (u = n.length),
                    r
                )
            }
            let r = e.length,
                s = t(r)
            const o = h()
            let i = 0
            for (; i < r; i++) {
                const t = e.charCodeAt(i)
                if (t > 127) break
                o[s + i] = t
            }
            if (i !== r) {
                0 !== i && (e = e.slice(i)), (s = n(s, r, (r = i + 3 * e.length)))
                const t = h().subarray(s + i, s + r)
                i += f(e, t).written
            }
            return (u = i), s
        }
        let p = null
        function m() {
            return (
                (null !== p && p.buffer === s.memory.buffer) ||
                    (p = new Int32Array(s.memory.buffer)),
                p
            )
        }
        let y = new TextDecoder('utf-8', { ignoreBOM: !0, fatal: !0 })
        function v(e, t) {
            return y.decode(h().subarray(e, e + t))
        }
        function w(e, t) {
            try {
                const c = s.__wbindgen_export_0.value - 16
                s.__wbindgen_export_0.value = c
                var n = g(e, s.__wbindgen_malloc, s.__wbindgen_realloc),
                    r = u,
                    o = (function (e, t) {
                        const n = t(1 * e.length)
                        return h().set(e, n / 1), (u = e.length), n
                    })(t, s.__wbindgen_malloc),
                    i = u
                s.wasm_register_index(c, n, r, o, i)
                var a = m()[c / 4 + 0],
                    l = m()[c / 4 + 1]
                return v(a, l)
            } finally {
                ;(s.__wbindgen_export_0.value += 16), s.__wbindgen_free(a, l)
            }
        }
        function b(e, t) {
            try {
                const c = s.__wbindgen_export_0.value - 16
                s.__wbindgen_export_0.value = c
                var n = g(e, s.__wbindgen_malloc, s.__wbindgen_realloc),
                    r = u,
                    o = g(t, s.__wbindgen_malloc, s.__wbindgen_realloc),
                    i = u
                s.wasm_search(c, n, r, o, i)
                var a = m()[c / 4 + 0],
                    l = m()[c / 4 + 1]
                return v(a, l)
            } finally {
                ;(s.__wbindgen_export_0.value += 16), s.__wbindgen_free(a, l)
            }
        }
        y.decode(),
            (t.default = async function e(t) {
                void 0 === t &&
                    (t = r('node_modules/stork-search/stork.js').replace(/\.js$/, '_bg.wasm'))
                const n = { wbg: {} }
                ;(n.wbg.__wbg_new_59cb74e423758ede = function () {
                    return (function (e) {
                        a === o.length && o.push(o.length + 1)
                        const t = a
                        return (a = o[t]), (o[t] = e), t
                    })(new Error())
                }),
                    (n.wbg.__wbg_stack_558ba5917b466edd = function (e, t) {
                        var n = g(i(t).stack, s.__wbindgen_malloc, s.__wbindgen_realloc),
                            r = u
                        ;(m()[e / 4 + 1] = r), (m()[e / 4 + 0] = n)
                    }),
                    (n.wbg.__wbg_error_4bb6c2a97407129a = function (e, t) {
                        try {
                            console.error(v(e, t))
                        } finally {
                            s.__wbindgen_free(e, t)
                        }
                    }),
                    (n.wbg.__wbindgen_object_drop_ref = function (e) {
                        l(e)
                    }),
                    ('string' == typeof t ||
                        ('function' == typeof Request && t instanceof Request) ||
                        ('function' == typeof URL && t instanceof URL)) &&
                        (t = fetch(t))
                const { instance: c, module: h } = await (async function (e, t) {
                    if ('function' == typeof Response && e instanceof Response) {
                        if ('function' == typeof WebAssembly.instantiateStreaming)
                            try {
                                return await WebAssembly.instantiateStreaming(e, t)
                            } catch (t) {
                                if ('application/wasm' == e.headers.get('Content-Type')) throw t
                                console.warn(
                                    '`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n',
                                    t
                                )
                            }
                        const n = await e.arrayBuffer()
                        return await WebAssembly.instantiate(n, t)
                    }
                    {
                        const n = await WebAssembly.instantiate(e, t)
                        return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n
                    }
                })(await t, n)
                return (s = c.exports), (e.__wbindgen_wasm_module = h), s
            })
    },
    function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = n(0)
        t.resolveSearch = function (e, t) {
            var n = null,
                s = null
            try {
                ;(n = r.wasm_search(e, t)), (s = JSON.parse(n))
            } catch (e) {
                throw Error(
                    'Could not parse data from wasm_search. If you see this, please file a bug: https://jil.im/storkbug ' +
                        n
                )
            }
            if (!s) throw Error('Data was an empty object')
            if (s.error)
                throw Error(
                    'Could not perform search: the WASM binary failed to return search results.\n    You might not be serving your search index properly.\n    If you think this is an error, please file a bug: https://jil.im/storkbug\n    \n    The WASM binary came back with:\n    ' +
                        s.error
                )
            return s
        }
    },
    function (e, t, n) {
        'use strict'
        var r,
            s =
                (this && this.__extends) ||
                ((r = function (e, t) {
                    return (r =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                                e.__proto__ = t
                            }) ||
                        function (e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                }),
                function (e, t) {
                    function n() {
                        this.constructor = e
                    }
                    r(e, t),
                        (e.prototype =
                            null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                })
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = n(3),
            i = n(12),
            a = n(1),
            l = (function (e) {
                function t(t) {
                    var n = e.call(this, t) || this
                    return (n.name = 'StorkError'), n
                }
                return s(t, e), t
            })(Error),
            u = null,
            c = null
        function h(e) {
            return (
                void 0 === e && (e = null),
                new Promise(function (t, n) {
                    u
                        ? 'failed' === u.state
                            ? n()
                            : t()
                        : (u = new i.default(e).runAfterWasmLoaded(t).runOnWasmLoadFailure(n))
                })
            )
        }
        function d(e, t, n) {
            return (
                void 0 === n && (n = {}),
                new Promise(function (r, s) {
                    var i = null
                    ;('string' != typeof e && (i = 'Index registration name must be a string.'),
                    'string' != typeof t && (i = 'URL must be a string.'),
                    u ||
                        (i =
                            'Make sure to call stork.initialize() before calling stork.downloadIndex()'),
                    i)
                        ? s(new l(i))
                        : (c || (c = new o.EntityManager(u)), c.register(e, t, n).then(r).catch(s))
                })
            )
        }
        function f(e) {
            if (!c)
                throw new l(
                    'Make sure to call stork.downloadIndex() successfully before calling stork.attach()'
                )
            try {
                c.attachToDom(e)
            } catch (e) {
                throw new l(e.message)
            }
        }
        ;(t.initialize = h),
            (t.downloadIndex = d),
            (t.attach = f),
            (t.register = function (e, t, n) {
                var r = h(),
                    s = d(e, t, n)
                return f(e), Promise.all([r, s]).then()
            }),
            (t.search = function (e, t) {
                if (!e || !t)
                    throw new l(
                        'Make sure to call stork.search() with two arguments: the index name and the search query.'
                    )
                if (!c || !c.entities[e] || c.entities[e].progress < 1)
                    throw new l(
                        "Couldn't find index. Make sure the stork.downloadIndex() promise has resolved before calling stork.search()."
                    )
                return a.resolveSearch(e, t)
            })
    },
    function (e, t, n) {
        'use strict'
        var r =
            (this && this.__assign) ||
            function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var s in (t = arguments[n]))
                                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
                        return e
                    }).apply(this, arguments)
            }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var s = n(4),
            o = n(9),
            i = n(11),
            a = n(0),
            l = (function () {
                function e(e) {
                    ;(this.entities = {}), (this.wasmQueue = e)
                }
                return (
                    (e.prototype.handleLoadedIndex = function (e, t) {
                        var n = t.target,
                            s = n.status,
                            o = n.response
                        if (s < 200 || s > 299)
                            throw (
                                (e.setDownloadError(),
                                new Error('Got a ' + s + ' error from ' + e.url + '!'))
                            )
                        if (!this.wasmQueue)
                            throw new Error("Internal Error - this.wasmQueue doesn't exist")
                        this.wasmQueue.runAfterWasmLoaded(function () {
                            if (!e.error) {
                                var t = a.wasm_register_index(e.name, new Uint8Array(o))
                                e.setDownloadProgress(1),
                                    e.config.printIndexInfo &&
                                        console.log(
                                            r(
                                                { name: e.name, sizeInBytes: o.byteLength },
                                                JSON.parse(t)
                                            )
                                        )
                            }
                        })
                    }),
                    (e.prototype.register = function (e, t, n) {
                        var r = this
                        return new Promise(function (a, l) {
                            var u = o.defaultConfig
                            try {
                                u = o.calculateOverriddenConfig(n)
                            } catch (e) {
                                return void l(e)
                            }
                            if (
                                (r.entities[e] &&
                                    console.warn(
                                        'Search index with name ' +
                                            e +
                                            ' already exists! Overwriting.'
                                    ),
                                r.wasmQueue)
                            ) {
                                var c = new s.Entity(e, t, u, r.wasmQueue)
                                ;(r.entities[e] = c),
                                    i.loadIndexFromUrl(c, t, {
                                        load: function (e) {
                                            return r.handleLoadedIndex(c, e)
                                        },
                                        progress: function (e, t) {
                                            t.setDownloadProgress(e)
                                        },
                                        error: function () {
                                            c.setDownloadError()
                                        },
                                    })
                            } else l(new Error('Internal Stork error'))
                        })
                    }),
                    (e.prototype.attachToDom = function (e) {
                        if (!this.entities[e])
                            throw new Error('Index ' + e + ' has not been registered!')
                        this.entities[e].attachToDom()
                    }),
                    e
                )
            })()
        t.EntityManager = l
    },
    function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = n(1),
            s = n(5),
            o = (function () {
                function e(e, t, n, r) {
                    ;(this.eventListenerFunctions = {}),
                        (this.results = []),
                        (this.highlightedResult = 0),
                        (this.progress = 0),
                        (this.error = !1),
                        (this.totalResultCount = 0),
                        (this.resultsVisible = !1),
                        (this.hoverSelectEnabled = !0),
                        (this.name = e),
                        (this.url = t),
                        (this.config = n),
                        (this.wasmQueue = r)
                }
                return (
                    (e.prototype.attachToDom = function () {
                        this.domManager = new s.EntityDom(this.name, this)
                    }),
                    (e.prototype.getCurrentMessage = function () {
                        if (!this.domManager) return null
                        var e = this.domManager.getQuery()
                        return this.error
                            ? 'Error! Check the browser console.'
                            : this.progress < 1 || !this.wasmQueue.wasmIsLoaded
                            ? 'Loading...'
                            : (null == e ? void 0 : e.length) < this.config.minimumQueryLength
                            ? 'Filtering...'
                            : this.results
                            ? 0 === this.totalResultCount
                                ? 'No files found.'
                                : 1 === this.totalResultCount
                                ? '1 file found.'
                                : this.totalResultCount + ' files found.'
                            : null
                    }),
                    (e.prototype.generateRenderConfig = function () {
                        return {
                            results: this.results,
                            resultsVisible: !0,
                            showScores: this.config.showScores,
                            message: this.getCurrentMessage(),
                            showProgress: this.config.showProgress,
                            progress: this.progress,
                            error: this.error,
                        }
                    }),
                    (e.prototype.render = function () {
                        this.domManager && this.domManager.render(this.generateRenderConfig())
                    }),
                    (e.prototype.injestSearchData = function (e) {
                        ;(this.results = e.results),
                            (this.totalResultCount = e.total_hit_count),
                            (this.highlightedResult = 0)
                        var t = e.url_prefix || ''
                        this.results.map(function (e) {
                            var n = ''
                            e.excerpts &&
                                e.excerpts[0] &&
                                e.excerpts[0].internal_annotations &&
                                e.excerpts[0].internal_annotations[0] &&
                                e.excerpts[0].internal_annotations[0].a &&
                                'string' == typeof e.excerpts[0].internal_annotations[0].a &&
                                (n = e.excerpts[0].internal_annotations[0].a),
                                (e.entry.url = '' + t + e.entry.url + n)
                        }),
                            this.render()
                    }),
                    (e.prototype.getSanitizedResults = function () {
                        var e = this.results
                        return (
                            e.map(function (e) {
                                delete e.title_highlight_ranges,
                                    e.excerpts.map(function (e) {
                                        delete e.highlight_ranges, delete e.internal_annotations
                                    })
                            }),
                            e
                        )
                    }),
                    (e.prototype.setDownloadProgress = function (e) {
                        ;(this.error = !1),
                            (this.progress = e),
                            this.config.showProgress && this.render()
                    }),
                    (e.prototype.setDownloadError = function () {
                        ;(this.progress = 1), (this.error = !0), this.render()
                    }),
                    (e.prototype.performSearch = function (e) {
                        if (this.wasmQueue.wasmIsLoaded && !this.error)
                            if (e.length >= this.config.minimumQueryLength)
                                try {
                                    var t = r.resolveSearch(this.name, e)
                                    if (!t) return
                                    0,
                                        this.injestSearchData(t),
                                        this.config.onQueryUpdate &&
                                            this.config.onQueryUpdate(e, this.getSanitizedResults())
                                } catch (e) {
                                    console.error(e)
                                }
                            else (this.results = []), this.render()
                        else this.render()
                    }),
                    e
                )
            })()
        t.Entity = o
    },
    function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = n(6),
            s = n(7),
            o = {
                results: [],
                resultsVisible: !1,
                showScores: !1,
                message: null,
                showProgress: !1,
                progress: 1,
                error: !1,
            },
            i = (function () {
                function e(e, t) {
                    var n,
                        s,
                        i = this
                    ;(this.scrollAnchorPoint = 'end'), (this.entity = t)
                    var a = [
                            { selector: 'input[data-stork="' + e + '"]', elementName: 'input' },
                            {
                                selector: 'div[data-stork="' + e + '-output"]',
                                elementName: 'output',
                            },
                        ].map(function (t) {
                            var n = document.querySelector(t.selector)
                            if (!n)
                                throw new Error(
                                    'Could not register search box "' +
                                        e +
                                        '": ' +
                                        t.elementName +
                                        ' element not found. Make sure an element matches the query selector `' +
                                        t.selector +
                                        '`'
                                )
                            return n
                        }),
                        l = a[0],
                        u = a[1]
                    ;(this.elements = {
                        input: l,
                        output: u,
                        list: r.create('ul', { classNames: ['stork-results'] }),
                        attribution: r.create('div', { classNames: ['stork-attribution'] }),
                        progress: r.create('div', { classNames: ['stork-progress'] }),
                        message: r.create('div', { classNames: ['stork-message'] }),
                        closeButton: r.create('button', { classNames: ['stork-close-button'] }),
                    }),
                        this.elements.input.removeEventListener(
                            'input',
                            this.entity.eventListenerFunctions.inputInputEvent
                        ),
                        this.elements.input.removeEventListener(
                            'keydown',
                            this.entity.eventListenerFunctions.inputKeydownEvent
                        ),
                        (this.entity.eventListenerFunctions = {
                            inputInputEvent: function (e) {
                                i.handleInputEvent(e)
                            },
                            inputKeydownEvent: function (e) {
                                i.handleKeyDownEvent(e)
                            },
                        }),
                        this.elements.input.addEventListener(
                            'input',
                            this.entity.eventListenerFunctions.inputInputEvent
                        ),
                        this.elements.input.addEventListener(
                            'keydown',
                            this.entity.eventListenerFunctions.inputKeydownEvent
                        ),
                        null === (n = this.elements.list) ||
                            void 0 === n ||
                            n.addEventListener('mousemove', function () {
                                i.hoverSelectEnabled = !0
                            }),
                        (this.elements.attribution.innerHTML =
                            'Powered by <a href="https://stork-search.net">Stork</a>'),
                        r.setText(this.elements.closeButton, '×'),
                        r.add(this.elements.progress, 'afterend', this.elements.input),
                        null === (s = this.elements.closeButton) ||
                            void 0 === s ||
                            s.addEventListener('click', function () {
                                ;(i.elements.input.value = ''),
                                    i.elements.input.focus(),
                                    i.render(o)
                                var e = [
                                        i.entity.config.onInputCleared,
                                        i.entity.config.onResultsHidden,
                                    ],
                                    t = e[0],
                                    n = e[1]
                                t && t(), n && n()
                            })
                }
                return (
                    (e.prototype.clearDom = function () {
                        var e
                        r.clear(this.elements.output),
                            r.clear(this.elements.list),
                            null === (e = this.elements.closeButton) || void 0 === e || e.remove(),
                            this.elements.output.classList.remove('stork-output-visible')
                    }),
                    (e.prototype.render = function (e) {
                        var t,
                            n = this,
                            o = this.elements.input.value
                        if (
                            (this.clearDom(),
                            (this.lastRenderState = e),
                            e.showProgress && e.progress && e.progress < 1
                                ? (this.elements.progress.style.width = 100 * e.progress + '%')
                                : e.showProgress &&
                                  ((this.elements.progress.style.width = '100%'),
                                  (this.elements.progress.style.opacity = '0')),
                            e.error && this.elements.input.classList.add('stork-error'),
                            this.getQuery().length > 0 &&
                                e.resultsVisible &&
                                (this.elements.output.classList.add('stork-output-visible'),
                                r.add(this.elements.message, 'beforeend', this.elements.output)),
                            e.message && r.setText(this.elements.message, e.message),
                            (null === (t = e.results) || void 0 === t ? void 0 : t.length) > 0 &&
                                e.resultsVisible)
                        ) {
                            r.add(this.elements.list, 'beforeend', this.elements.output)
                            for (
                                var i = function (t) {
                                        var o = e.results[t],
                                            i = {
                                                selected: t === a.highlightedResult,
                                                showScores: e.showScores,
                                            },
                                            l = s.resultToListItem(o, i)
                                        r.add(l, 'beforeend', a.elements.list),
                                            l.addEventListener('mousemove', function () {
                                                n.hoverSelectEnabled &&
                                                    t !== n.highlightedResult &&
                                                    n.changeHighlightedResult({
                                                        to: t,
                                                        shouldScrollTo: !1,
                                                    })
                                            }),
                                            l.addEventListener('click', function (e) {
                                                e.preventDefault(), n.selectResult()
                                            })
                                    },
                                    a = this,
                                    l = 0;
                                l < e.results.length;
                                l++
                            )
                                i(l)
                            r.add(this.elements.attribution, 'beforeend', this.elements.output)
                        }
                        ;((null == o ? void 0 : o.length) || 0) > 0 &&
                            this.entity.config.showCloseButton &&
                            r.add(this.elements.closeButton, 'afterend', this.elements.input)
                    }),
                    (e.prototype.selectResult = function () {
                        if (null != this.highlightedResult) {
                            var e = this.entity.results[this.highlightedResult]
                            this.entity.config.onResultSelected
                                ? Promise.resolve(
                                      this.entity.config.onResultSelected(this.getQuery(), e)
                                  ).finally(function () {
                                      window.location.assign(e.entry.url)
                                  })
                                : window.location.assign(e.entry.url)
                        }
                    }),
                    (e.prototype.changeHighlightedResult = function (e) {
                        var t,
                            n = this.highlightedResult,
                            s = Math.max(0, Math.min(this.entity.results.length - 1, e.to))
                        ;(this.highlightedResult = s),
                            (this.scrollAnchorPoint = (n || 0) < s ? 'end' : 'start')
                        for (var o = null, i = 0; i < this.entity.results.length; i++) {
                            var a =
                                null === (t = this.elements.list) || void 0 === t
                                    ? void 0
                                    : t.children[i]
                            if (a) {
                                i == s
                                    ? (a.classList.add('selected'), (o = a))
                                    : a.classList.remove('selected')
                            }
                        }
                        return (
                            e.shouldScrollTo &&
                                ((this.hoverSelectEnabled = !1),
                                o &&
                                    r.existsBeyondContainerBounds(o, this.elements.list) &&
                                    o.scrollIntoView({
                                        behavior: 'smooth',
                                        block: this.scrollAnchorPoint,
                                        inline: 'nearest',
                                    })),
                            s
                        )
                    }),
                    (e.prototype.handleKeyDownEvent = function (e) {
                        switch (e.keyCode) {
                            case 40:
                                if (null == this.highlightedResult)
                                    this.changeHighlightedResult({ to: 0, shouldScrollTo: !0 })
                                else {
                                    var t = Math.min(
                                        this.highlightedResult + 1,
                                        this.entity.results.length - 1
                                    )
                                    this.changeHighlightedResult({ to: t, shouldScrollTo: !0 })
                                }
                                break
                            case 38:
                                if (null != this.highlightedResult) {
                                    t = Math.max(0, this.highlightedResult - 1)
                                    this.changeHighlightedResult({ to: t, shouldScrollTo: !0 })
                                }
                                break
                            case 13:
                                this.selectResult()
                                break
                            case 27:
                                if (this.lastRenderState.resultsVisible)
                                    this.render(o), (n = this.entity.config.onResultsHidden) && n()
                                else if (this.elements.input.value.length > 0) {
                                    var n
                                    ;(this.elements.input.value = ''),
                                        this.render(o),
                                        (n = this.entity.config.onInputCleared) && n()
                                }
                                break
                            default:
                                return
                        }
                    }),
                    (e.prototype.handleInputEvent = function (e) {
                        this.entity.performSearch(e.target.value)
                    }),
                    (e.prototype.getQuery = function () {
                        return this.elements.input.value
                    }),
                    e
                )
            })()
        t.EntityDom = i
    },
    function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.create = function (e, t) {
                var n = document.createElement(e)
                return t.classNames && n.setAttribute('class', t.classNames.join(' ')), n
            }),
            (t.add = function (e, t, n) {
                n.insertAdjacentElement(t, e)
            }),
            (t.clear = function (e) {
                for (; e && e.firstChild; ) e.removeChild(e.firstChild)
            }),
            (t.setText = function (e, t) {
                var n = document.createTextNode(t)
                e && e.firstChild ? e.replaceChild(n, e.firstChild) : e && e.appendChild(n)
            }),
            (t.existsBeyondContainerBounds = function (e, t) {
                var n = e.getBoundingClientRect(),
                    r = t.getBoundingClientRect()
                return n.bottom > r.bottom || n.top < r.top
            })
    },
    function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = n(8)
        t.resultToListItem = function (e, t) {
            var n = document.createElement('template')
            return (
                (n.innerHTML =
                    '\n<li class="stork-result' +
                    (t.selected ? ' selected' : '') +
                    '">\n  <a href="' +
                    e.entry.url +
                    '">\n    <div style="display: flex; justify-content: space-between">\n      <p class="stork-title">' +
                    r.highlight(e.entry.title, e.title_highlight_ranges) +
                    '</p>\n      ' +
                    (t.showScores ? '<code><b>' + e.score + '</b></code>' : '') +
                    '\n    </div>\n      ' +
                    e.excerpts
                        .map(function (e) {
                            return (
                                '<div style="display: flex; justify-content: space-between"><p class="stork-excerpt">\n        ...' +
                                r.highlight(e.text, e.highlight_ranges) +
                                '...\n        </p>\n        ' +
                                (t.showScores ? '<code>' + e.score + '</code>' : '') +
                                '\n        </div>'
                            )
                        })
                        .join('') +
                    '\n  </a>\n</li>'),
                n.content.firstElementChild
            )
        }
    },
    function (e, t, n) {
        'use strict'
        function r(e, t) {
            function n(e, t, n) {
                return e.substr(0, t) + n + e.substr(t)
            }
            var r = 0
            for (let s of t) {
                let t = '<span class="stork-highlight">',
                    o = '</span>'
                ;(e = n(e, s.beginning + r, t)),
                    (r += t.length),
                    (e = n(e, s.end + r, o)),
                    (r += o.length)
            }
            return e
        }
        n.r(t),
            n.d(t, 'highlight', function () {
                return r
            })
    },
    function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = n(10)
        ;(t.defaultConfig = {
            showProgress: !0,
            printIndexInfo: !1,
            showScores: !1,
            showCloseButton: !0,
            minimumQueryLength: 3,
            onQueryUpdate: void 0,
            onResultSelected: void 0,
            onResultsHidden: void 0,
            onInputCleared: void 0,
        }),
            (t.calculateOverriddenConfig = function (e) {
                var n = r.difference(Object.keys(e), Object.keys(t.defaultConfig))
                if (n.length > 0) {
                    throw new Error(
                        'Invalid ' +
                            (function (e, t, n) {
                                return 1 == e ? t : n
                            })(n.length, 'key', 'keys') +
                            ' in config object: ' +
                            JSON.stringify(Array.from(n))
                    )
                }
                for (
                    var s = Object.assign({}, t.defaultConfig),
                        o = 0,
                        i = Object.keys(t.defaultConfig);
                    o < i.length;
                    o++
                ) {
                    var a = i[o],
                        l = e[a]
                    void 0 !== l && (s[a] = l)
                }
                return s
            })
    },
    function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.htmlToElement = function (e) {
                var t = document.createElement('template')
                return (e = e.trim()), (t.innerHTML = e), t.content.firstChild
            }),
            (t.difference = function (e, t) {
                var n = new Set(e),
                    r = new Set(t),
                    s = new Set(
                        Array.from(n).filter(function (e) {
                            return !r.has(e)
                        })
                    )
                return Array.from(s)
            })
    },
    function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        t.loadIndexFromUrl = function (e, t, n) {
            var r = new XMLHttpRequest()
            r.addEventListener('load', function (t) {
                n.load && n.load(t, e)
            }),
                r.addEventListener('error', function () {
                    console.error('Could not fetch ' + t), n.error()
                }),
                r.addEventListener('progress', function (t) {
                    if (n.progress) {
                        var r = Math.min(Math.max(0.03, t.loaded / t.total), 0.94)
                        n.progress(r, e)
                    }
                }),
                n.progress && n.progress(0.03, e),
                (r.responseType = 'arraybuffer'),
                r.open('GET', t),
                r.send()
        }
    },
    function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = n(0),
            s = (function () {
                function e(e) {
                    var t = this
                    void 0 === e && (e = null),
                        (this._wasmIsLoaded = !1),
                        (this.state = 'queueing'),
                        (this.queue = []),
                        (this.failureMethod = null),
                        (this.wasmUrl = e || 'https://files.stork-search.net/stork.wasm'),
                        (this.wasmLoadPromise = r
                            .default(this.wasmUrl)
                            .then(function () {
                                t.handleWasmLoad()
                            })
                            .catch(function (e) {
                                t.handleWasmFailure(e)
                            }))
                }
                return (
                    Object.defineProperty(e.prototype, 'wasmIsLoaded', {
                        get: function () {
                            return this._wasmIsLoaded
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.runAfterWasmLoaded = function (e) {
                        return this.wasmIsLoaded ? e() : this.queue.push(e), this
                    }),
                    (e.prototype.runOnWasmLoadFailure = function (e) {
                        return 'failed' === this.state ? e(null) : (this.failureMethod = e), this
                    }),
                    (e.prototype.handleWasmLoad = function () {
                        this._wasmIsLoaded = !0
                        for (var e = 0, t = this.queue; e < t.length; e++) {
                            ;(0, t[e])()
                        }
                        this.queue = []
                    }),
                    (e.prototype.handleWasmFailure = function (e) {
                        this.failureMethod && this.failureMethod(e)
                    }),
                    e
                )
            })()
        t.default = s
    },
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9yay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdG9yay8uL25vZGVfbW9kdWxlcy9zdG9yay1zZWFyY2gvc3RvcmsuanMiLCJ3ZWJwYWNrOi8vc3RvcmsvLi9qcy9zZWFyY2hEYXRhLnRzIiwid2VicGFjazovL3N0b3JrLy4vanMvbWFpbi50cyIsIndlYnBhY2s6Ly9zdG9yay8uL2pzL2VudGl0eU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vc3RvcmsvLi9qcy9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vc3RvcmsvLi9qcy9lbnRpdHlEb20udHMiLCJ3ZWJwYWNrOi8vc3RvcmsvLi9qcy9kb20udHMiLCJ3ZWJwYWNrOi8vc3RvcmsvLi9qcy9yZXN1bHRUb0xpc3RJdGVtLnRzIiwid2VicGFjazovL3N0b3JrLy4vanMvcGVuY2lsLmpzIiwid2VicGFjazovL3N0b3JrLy4vanMvY29uZmlnLnRzIiwid2VicGFjazovL3N0b3JrLy4vanMvdXRpbC50cyIsIndlYnBhY2s6Ly9zdG9yay8uL2pzL2luZGV4TG9hZGVyLnRzIiwid2VicGFjazovL3N0b3JrLy4vanMvd2FzbVF1ZXVlLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZ2V0QWJzb2x1dGVVcmwiLCJyZWxhdGl2ZVVybCIsInB1YmxpY1BhdGgiLCJ1cmwiLCJpbmRleE9mIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJ3YXNtIiwiaGVhcCIsIkFycmF5IiwiZmlsbCIsInVuZGVmaW5lZCIsImdldE9iamVjdCIsImlkeCIsInB1c2giLCJoZWFwX25leHQiLCJsZW5ndGgiLCJ0YWtlT2JqZWN0IiwicmV0IiwiZHJvcE9iamVjdCIsIldBU01fVkVDVE9SX0xFTiIsImNhY2hlZ2V0VWludDhNZW1vcnkwIiwiZ2V0VWludDhNZW1vcnkwIiwiYnVmZmVyIiwibWVtb3J5IiwiVWludDhBcnJheSIsImNhY2hlZFRleHRFbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJlbmNvZGVTdHJpbmciLCJlbmNvZGVJbnRvIiwiYXJnIiwidmlldyIsImJ1ZiIsImVuY29kZSIsInNldCIsInJlYWQiLCJ3cml0dGVuIiwicGFzc1N0cmluZ1RvV2FzbTAiLCJtYWxsb2MiLCJyZWFsbG9jIiwicHRyIiwic3ViYXJyYXkiLCJsZW4iLCJtZW0iLCJvZmZzZXQiLCJjb2RlIiwiY2hhckNvZGVBdCIsInNsaWNlIiwiY2FjaGVnZXRJbnQzMk1lbW9yeTAiLCJnZXRJbnQzMk1lbW9yeTAiLCJJbnQzMkFycmF5IiwiY2FjaGVkVGV4dERlY29kZXIiLCJUZXh0RGVjb2RlciIsImlnbm9yZUJPTSIsImZhdGFsIiwiZ2V0U3RyaW5nRnJvbVdhc20wIiwiZGVjb2RlIiwid2FzbV9yZWdpc3Rlcl9pbmRleCIsImRhdGEiLCJyZXRwdHIiLCJfX3diaW5kZ2VuX2V4cG9ydF8wIiwicHRyMCIsIl9fd2JpbmRnZW5fbWFsbG9jIiwiX193YmluZGdlbl9yZWFsbG9jIiwibGVuMCIsInB0cjEiLCJwYXNzQXJyYXk4VG9XYXNtMCIsImxlbjEiLCJyMCIsInIxIiwiX193YmluZGdlbl9mcmVlIiwid2FzbV9zZWFyY2giLCJxdWVyeSIsImFzeW5jIiwiaW5pdCIsImlucHV0IiwicmVwbGFjZSIsImltcG9ydHMiLCJ3YmciLCJfX3diZ19uZXdfNTljYjc0ZTQyMzc1OGVkZSIsIm9iaiIsImFkZEhlYXBPYmplY3QiLCJFcnJvciIsIl9fd2JnX3N0YWNrXzU1OGJhNTkxN2I0NjZlZGQiLCJhcmcwIiwiYXJnMSIsInN0YWNrIiwiX193YmdfZXJyb3JfNGJiNmMyYTk3NDA3MTI5YSIsImNvbnNvbGUiLCJlcnJvciIsIl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmIiwiUmVxdWVzdCIsIlVSTCIsImZldGNoIiwiaW5zdGFuY2UiLCJSZXNwb25zZSIsIldlYkFzc2VtYmx5IiwiaW5zdGFudGlhdGVTdHJlYW1pbmciLCJlIiwiaGVhZGVycyIsIndhcm4iLCJieXRlcyIsImFycmF5QnVmZmVyIiwiaW5zdGFudGlhdGUiLCJJbnN0YW5jZSIsImxvYWQiLCJfX3diaW5kZ2VuX3dhc21fbW9kdWxlIiwic2VhcmNoT3V0cHV0IiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZSIsIndhc21RdWV1ZSIsImVudGl0eU1hbmFnZXIiLCJpbml0aWFsaXplIiwid2FzbU92ZXJyaWRlVXJsIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsInN0YXRlIiwicnVuQWZ0ZXJXYXNtTG9hZGVkIiwicnVuT25XYXNtTG9hZEZhaWx1cmUiLCJkb3dubG9hZEluZGV4IiwiY29uZmlnIiwiU3RvcmtFcnJvciIsIkVudGl0eU1hbmFnZXIiLCJyZWdpc3RlciIsInRoZW4iLCJjYXRjaCIsImF0dGFjaCIsImF0dGFjaFRvRG9tIiwiaW5pdFByb21pc2UiLCJkb253bG9hZFByb21pc2UiLCJhbGwiLCJzZWFyY2giLCJlbnRpdGllcyIsInByb2dyZXNzIiwicmVzb2x2ZVNlYXJjaCIsInRoaXMiLCJoYW5kbGVMb2FkZWRJbmRleCIsImVudGl0eSIsImV2ZW50Iiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZXREb3dubG9hZEVycm9yIiwiaW5kZXhJbmZvIiwic2V0RG93bmxvYWRQcm9ncmVzcyIsInByaW50SW5kZXhJbmZvIiwibG9nIiwic2l6ZUluQnl0ZXMiLCJieXRlTGVuZ3RoIiwiZnVsbENvbmZpZyIsImRlZmF1bHRDb25maWciLCJjYWxjdWxhdGVPdmVycmlkZGVuQ29uZmlnIiwiRW50aXR5IiwibG9hZEluZGV4RnJvbVVybCIsImV2ZW50TGlzdGVuZXJGdW5jdGlvbnMiLCJyZXN1bHRzIiwiaGlnaGxpZ2h0ZWRSZXN1bHQiLCJ0b3RhbFJlc3VsdENvdW50IiwicmVzdWx0c1Zpc2libGUiLCJob3ZlclNlbGVjdEVuYWJsZWQiLCJkb21NYW5hZ2VyIiwiRW50aXR5RG9tIiwiZ2V0Q3VycmVudE1lc3NhZ2UiLCJnZXRRdWVyeSIsIndhc21Jc0xvYWRlZCIsIm1pbmltdW1RdWVyeUxlbmd0aCIsImdlbmVyYXRlUmVuZGVyQ29uZmlnIiwic2hvd1Njb3JlcyIsInNob3dQcm9ncmVzcyIsInJlbmRlciIsImluamVzdFNlYXJjaERhdGEiLCJ0b3RhbF9oaXRfY291bnQiLCJ1cmxQcmVmaXgiLCJ1cmxfcHJlZml4IiwibWFwIiwidXJsU3VmZml4IiwiZXhjZXJwdHMiLCJpbnRlcm5hbF9hbm5vdGF0aW9ucyIsImVudHJ5IiwiZ2V0U2FuaXRpemVkUmVzdWx0cyIsInJlc3VsdCIsInRpdGxlX2hpZ2hsaWdodF9yYW5nZXMiLCJleGNlcnB0IiwiaGlnaGxpZ2h0X3JhbmdlcyIsInBlcmNlbnRhZ2UiLCJwZXJmb3JtU2VhcmNoIiwib25RdWVyeVVwZGF0ZSIsImhpZGRlbkludGVyZmFjZVJlbmRlclN0YXRlIiwic2Nyb2xsQW5jaG9yUG9pbnQiLCJzZWxlY3RvciIsImVsZW1lbnROYW1lIiwib3V0cHV0IiwiZWxlbWVudHMiLCJsaXN0IiwiY2xhc3NOYW1lcyIsImF0dHJpYnV0aW9uIiwiY2xvc2VCdXR0b24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5wdXRJbnB1dEV2ZW50IiwiaW5wdXRLZXlkb3duRXZlbnQiLCJoYW5kbGVJbnB1dEV2ZW50IiwiaGFuZGxlS2V5RG93bkV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVySFRNTCIsInNldFRleHQiLCJhZGQiLCJmb2N1cyIsImNsZWFyRG9tIiwiY2xlYXIiLCJyZW1vdmUiLCJjbGFzc0xpc3QiLCJsYXN0UmVuZGVyU3RhdGUiLCJzdHlsZSIsIndpZHRoIiwib3BhY2l0eSIsImdlbmVyYXRlT3B0aW9ucyIsInNlbGVjdGVkIiwibGlzdEl0ZW0iLCJyZXN1bHRUb0xpc3RJdGVtIiwiY2hhbmdlSGlnaGxpZ2h0ZWRSZXN1bHQiLCJ0byIsInNob3VsZFNjcm9sbFRvIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3RSZXN1bHQiLCJzaG93Q2xvc2VCdXR0b24iLCJvblJlc3VsdFNlbGVjdGVkIiwicmVzb2x2ZSIsImZpbmFsbHkiLCJhc3NpZ24iLCJvcHRpb25zIiwicHJldmlvdXNWYWx1ZSIsInJlc29sdmVkSWR4IiwiTWF0aCIsIm1heCIsIm1pbiIsInRhcmdldEZvclNjcm9sbFRvIiwiZWxlbWVudCIsImNoaWxkcmVuIiwiZXhpc3RzQmV5b25kQ29udGFpbmVyQm91bmRzIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwia2V5Q29kZSIsInRhcmdldCIsIm9uUmVzdWx0c0hpZGRlbiIsIm9uSW5wdXRDbGVhcmVkIiwiYXR0cmlidXRlcyIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJqb2luIiwicmVmZXJlbmNlIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwidGV4dCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImNvbnRhaW5lciIsImVsZW1Cb3VuZGluZ0JveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRhaW5lckJvdW5kaW5nQm94IiwiYm90dG9tIiwidG9wIiwidGVtcGxhdGUiLCJoaWdobGlnaHQiLCJ0aXRsZSIsInNjb3JlIiwiY29udGVudCIsImZpcnN0RWxlbWVudENoaWxkIiwiaW5zZXJ0Iiwic3RyIiwiaW5kZXgiLCJzdWJzdHIiLCJjaGFyYWN0ZXJzQWxyZWFkeUFkZGVkIiwicmFuZ2UiLCJiZWdpbm5pbmdJbnNlcnRpb24iLCJlbmRJbnNlcnRpb24iLCJiZWdpbm5pbmciLCJlbmQiLCJvdmVycmlkZXMiLCJjb25maWdLZXlEaWZmIiwiZGlmZmVyZW5jZSIsImtleXMiLCJjb3VudCIsInNpbmd1bGFyIiwicGx1cmFsIiwic3RyaW5naWZ5IiwiZnJvbSIsIm92ZXJyaWRlVmFsIiwiaHRtbCIsInRyaW0iLCJhcnIxIiwiYXJyMiIsInNldDEiLCJTZXQiLCJzZXQyIiwiZGlmZiIsImZpbHRlciIsIngiLCJoYXMiLCJjYWxsYmFja3MiLCJYTUxIdHRwUmVxdWVzdCIsImxvYWRlZFBlcmNlbnRhZ2UiLCJsb2FkZWQiLCJ0b3RhbCIsInJlc3BvbnNlVHlwZSIsIm9wZW4iLCJzZW5kIiwiX3dhc21Jc0xvYWRlZCIsInF1ZXVlIiwiZmFpbHVyZU1ldGhvZCIsIndhc21VcmwiLCJ3YXNtTG9hZFByb21pc2UiLCJoYW5kbGVXYXNtTG9hZCIsImhhbmRsZVdhc21GYWlsdXJlIiwiZm4iXSwibWFwcGluZ3MiOiJzQkFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUEwRGYsT0FyREFGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxv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S0FBS21MLGNBQWMxTixJQUUvQyxFQWpGQSxHIiwiZmlsZSI6InN0b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiXG4gICAgICBmdW5jdGlvbiBnZXRBYnNvbHV0ZVVybChyZWxhdGl2ZVVybCkge1xuICAgICAgICBjb25zdCBwdWJsaWNQYXRoID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX187XG5cbiAgICAgICAgbGV0IHVybCA9ICcnO1xuXG4gICAgICAgIGlmICghcHVibGljUGF0aCB8fCBwdWJsaWNQYXRoLmluZGV4T2YoJzovLycpIDwgMCkge1xuICAgICAgICAgIHVybCArPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHVibGljUGF0aCkge1xuICAgICAgICAgIHVybCArPSBwdWJsaWNQYXRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVybCArPSAnLyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsICsgcmVsYXRpdmVVcmw7XG4gICAgICB9XG5cbmxldCB3YXNtO1xuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKS5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gZHJvcE9iamVjdChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMzYpIHJldHVybjtcbiAgICBoZWFwW2lkeF0gPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaWR4O1xufVxuXG5mdW5jdGlvbiB0YWtlT2JqZWN0KGlkeCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChpZHgpO1xuICAgIGRyb3BPYmplY3QoaWR4KTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxubGV0IGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50OE1lbW9yeTAuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50OE1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTA7XG59XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20wKGFyZywgbWFsbG9jLCByZWFsbG9jKSB7XG5cbiAgICBpZiAocmVhbGxvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSBtYWxsb2MoYnVmLmxlbmd0aCk7XG4gICAgICAgIGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgYnVmLmxlbmd0aCkuc2V0KGJ1Zik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IG1hbGxvYyhsZW4pO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkwKCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoOyBvZmZzZXQgPCBsZW47IG9mZnNldCsrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzKTtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmV0ID0gZW5jb2RlU3RyaW5nKGFyZywgdmlldyk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5mdW5jdGlvbiBwYXNzQXJyYXk4VG9XYXNtMChhcmcsIG1hbGxvYykge1xuICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhhcmcubGVuZ3RoICogMSk7XG4gICAgZ2V0VWludDhNZW1vcnkwKCkuc2V0KGFyZywgcHRyIC8gMSk7XG4gICAgV0FTTV9WRUNUT1JfTEVOID0gYXJnLmxlbmd0aDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5sZXQgY2FjaGVnZXRJbnQzMk1lbW9yeTAgPSBudWxsO1xuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWdldEludDMyTWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWdldEludDMyTWVtb3J5MC5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEludDMyTWVtb3J5MCA9IG5ldyBJbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEludDMyTWVtb3J5MDtcbn1cblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cbi8qKlxuKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGRhdGFcbiogQHJldHVybnMge3N0cmluZ31cbiovXG5leHBvcnQgZnVuY3Rpb24gd2FzbV9yZWdpc3Rlcl9pbmRleChuYW1lLCBkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmV0cHRyID0gd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8wLnZhbHVlIC0gMTY7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9leHBvcnRfMC52YWx1ZSA9IHJldHB0cjtcbiAgICAgICAgdmFyIHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChuYW1lLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIHZhciBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgICAgICB2YXIgcHRyMSA9IHBhc3NBcnJheThUb1dhc20wKGRhdGEsIHdhc20uX193YmluZGdlbl9tYWxsb2MpO1xuICAgICAgICB2YXIgbGVuMSA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICAgICAgd2FzbS53YXNtX3JlZ2lzdGVyX2luZGV4KHJldHB0ciwgcHRyMCwgbGVuMCwgcHRyMSwgbGVuMSk7XG4gICAgICAgIHZhciByMCA9IGdldEludDMyTWVtb3J5MCgpW3JldHB0ciAvIDQgKyAwXTtcbiAgICAgICAgdmFyIHIxID0gZ2V0SW50MzJNZW1vcnkwKClbcmV0cHRyIC8gNCArIDFdO1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbVdhc20wKHIwLCByMSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8wLnZhbHVlICs9IDE2O1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShyMCwgcjEpO1xuICAgIH1cbn1cblxuLyoqXG4qIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4qIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVxuKiBAcmV0dXJucyB7c3RyaW5nfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXNtX3NlYXJjaChuYW1lLCBxdWVyeSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHB0ciA9IHdhc20uX193YmluZGdlbl9leHBvcnRfMC52YWx1ZSAtIDE2O1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzAudmFsdWUgPSByZXRwdHI7XG4gICAgICAgIHZhciBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAobmFtZSwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgICAgICB2YXIgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICAgICAgdmFyIHB0cjEgPSBwYXNzU3RyaW5nVG9XYXNtMChxdWVyeSwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgICAgICB2YXIgbGVuMSA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICAgICAgd2FzbS53YXNtX3NlYXJjaChyZXRwdHIsIHB0cjAsIGxlbjAsIHB0cjEsIGxlbjEpO1xuICAgICAgICB2YXIgcjAgPSBnZXRJbnQzMk1lbW9yeTAoKVtyZXRwdHIgLyA0ICsgMF07XG4gICAgICAgIHZhciByMSA9IGdldEludDMyTWVtb3J5MCgpW3JldHB0ciAvIDQgKyAxXTtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZ0Zyb21XYXNtMChyMCwgcjEpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9leHBvcnRfMC52YWx1ZSArPSAxNjtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUocjAsIHIxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhlYXBPYmplY3Qob2JqKSB7XG4gICAgaWYgKGhlYXBfbmV4dCA9PT0gaGVhcC5sZW5ndGgpIGhlYXAucHVzaChoZWFwLmxlbmd0aCArIDEpO1xuICAgIGNvbnN0IGlkeCA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBoZWFwW2lkeF07XG5cbiAgICBoZWFwW2lkeF0gPSBvYmo7XG4gICAgcmV0dXJuIGlkeDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZChtb2R1bGUsIGltcG9ydHMpIHtcbiAgICBpZiAodHlwZW9mIFJlc3BvbnNlID09PSAnZnVuY3Rpb24nICYmIG1vZHVsZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcobW9kdWxlLCBpbXBvcnRzKTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChtb2R1bGUuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICE9ICdhcHBsaWNhdGlvbi93YXNtJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmdgIGZhaWxlZCBiZWNhdXNlIHlvdXIgc2VydmVyIGRvZXMgbm90IHNlcnZlIHdhc20gd2l0aCBgYXBwbGljYXRpb24vd2FzbWAgTUlNRSB0eXBlLiBGYWxsaW5nIGJhY2sgdG8gYFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlYCB3aGljaCBpcyBzbG93ZXIuIE9yaWdpbmFsIGVycm9yOlxcblwiLCBlKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBtb2R1bGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGJ5dGVzLCBpbXBvcnRzKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShtb2R1bGUsIGltcG9ydHMpO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIFdlYkFzc2VtYmx5Lkluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpbnN0YW5jZSwgbW9kdWxlIH07XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdChpbnB1dCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlucHV0ID0gKHsgdXJsOiBnZXRBYnNvbHV0ZVVybCgnbm9kZV9tb2R1bGVzL3N0b3JrLXNlYXJjaC9zdG9yay5qcycpIH0pLnVybC5yZXBsYWNlKC9cXC5qcyQvLCAnX2JnLndhc20nKTtcbiAgICB9XG4gICAgY29uc3QgaW1wb3J0cyA9IHt9O1xuICAgIGltcG9ydHMud2JnID0ge307XG4gICAgaW1wb3J0cy53YmcuX193YmdfbmV3XzU5Y2I3NGU0MjM3NThlZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJldCA9IG5ldyBFcnJvcigpO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193Ymdfc3RhY2tfNTU4YmE1OTE3YjQ2NmVkZCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICAgICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcxKS5zdGFjaztcbiAgICAgICAgdmFyIHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChyZXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICAgICAgdmFyIGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMV0gPSBsZW4wO1xuICAgICAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDBdID0gcHRyMDtcbiAgICB9O1xuICAgIGltcG9ydHMud2JnLl9fd2JnX2Vycm9yXzRiYjZjMmE5NzQwNzEyOWEgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShhcmcwLCBhcmcxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaW1wb3J0cy53YmcuX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgICAgIHRha2VPYmplY3QoYXJnMCk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnIHx8ICh0eXBlb2YgUmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiBpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHx8ICh0eXBlb2YgVVJMID09PSAnZnVuY3Rpb24nICYmIGlucHV0IGluc3RhbmNlb2YgVVJMKSkge1xuICAgICAgICBpbnB1dCA9IGZldGNoKGlucHV0KTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGluc3RhbmNlLCBtb2R1bGUgfSA9IGF3YWl0IGxvYWQoYXdhaXQgaW5wdXQsIGltcG9ydHMpO1xuXG4gICAgd2FzbSA9IGluc3RhbmNlLmV4cG9ydHM7XG4gICAgaW5pdC5fX3diaW5kZ2VuX3dhc21fbW9kdWxlID0gbW9kdWxlO1xuXG4gICAgcmV0dXJuIHdhc207XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cbiIsImltcG9ydCB7IHdhc21fc2VhcmNoIH0gZnJvbSBcInN0b3JrLXNlYXJjaFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpZ2hsaWdodFJhbmdlIHtcbiAgYmVnaW5uaW5nOiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudHJ5IHtcbiAgZmllbGRzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhjZXJwdCB7XG4gIGZpZWxkczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGludGVybmFsX2Fubm90YXRpb25zPzogQXJyYXk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+O1xuICBoaWdobGlnaHRfcmFuZ2VzPzogQXJyYXk8SGlnaGxpZ2h0UmFuZ2U+O1xuICBzY29yZTogbnVtYmVyO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0IHtcbiAgZW50cnk6IEVudHJ5O1xuICBleGNlcnB0czogQXJyYXk8RXhjZXJwdD47XG4gIHNjb3JlOiBudW1iZXI7XG4gIHRpdGxlX2hpZ2hsaWdodF9yYW5nZXM/OiBBcnJheTxudW1iZXI+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaERhdGEge1xuICByZXN1bHRzOiBBcnJheTxSZXN1bHQ+O1xuICB0b3RhbF9oaXRfY291bnQ6IG51bWJlcjtcbiAgdXJsX3ByZWZpeDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVNlYXJjaChuYW1lOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpOiBTZWFyY2hEYXRhIHtcbiAgbGV0IHNlYXJjaE91dHB1dCA9IG51bGw7XG4gIGxldCBkYXRhID0gbnVsbDtcblxuICB0cnkge1xuICAgIHNlYXJjaE91dHB1dCA9IHdhc21fc2VhcmNoKG5hbWUsIHF1ZXJ5KTtcbiAgICAvLyBJZiB3YXNtX3NlYXJjaCByZXR1cm5zIGFuIGVycm9yLCBpdCB3aWxsIHJldHVybiBhIEpTT04gYmxvYi4gTG9vayBmb3JcbiAgICAvLyBkYXRhLmVycm9yIHRvIHNlZSBpZiB0aGlzIGlzIHRoZSBjYXNlLlxuICAgIGRhdGEgPSBKU09OLnBhcnNlKHNlYXJjaE91dHB1dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBEYXRhIGhhcyBjb21lIGJhY2sgaW1wcm9wZXJseSwgZXZlbiBiZXlvbmQgYW4gZXJyb3IgaW4gUnVzdC1sYW5kLlxuICAgIC8vIGFuYWx5dGljcy5sb2coZSlcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIFwiQ291bGQgbm90IHBhcnNlIGRhdGEgZnJvbSB3YXNtX3NlYXJjaC4gSWYgeW91IHNlZSB0aGlzLCBwbGVhc2UgZmlsZSBhIGJ1ZzogaHR0cHM6Ly9qaWwuaW0vc3RvcmtidWcgXCIgK1xuICAgICAgICBzZWFyY2hPdXRwdXRcbiAgICApO1xuICB9XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJEYXRhIHdhcyBhbiBlbXB0eSBvYmplY3RcIik7XG4gIH1cblxuICBpZiAoZGF0YS5lcnJvcikge1xuICAgIHRocm93IEVycm9yKGBDb3VsZCBub3QgcGVyZm9ybSBzZWFyY2g6IHRoZSBXQVNNIGJpbmFyeSBmYWlsZWQgdG8gcmV0dXJuIHNlYXJjaCByZXN1bHRzLlxuICAgIFlvdSBtaWdodCBub3QgYmUgc2VydmluZyB5b3VyIHNlYXJjaCBpbmRleCBwcm9wZXJseS5cbiAgICBJZiB5b3UgdGhpbmsgdGhpcyBpcyBhbiBlcnJvciwgcGxlYXNlIGZpbGUgYSBidWc6IGh0dHBzOi8vamlsLmltL3N0b3JrYnVnXG4gICAgXG4gICAgVGhlIFdBU00gYmluYXJ5IGNhbWUgYmFjayB3aXRoOlxuICAgICR7ZGF0YS5lcnJvcn1gKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRW50aXR5TWFuYWdlciB9IGZyb20gXCIuL2VudGl0eU1hbmFnZXJcIjtcbmltcG9ydCBXYXNtUXVldWUgZnJvbSBcIi4vd2FzbVF1ZXVlXCI7XG5pbXBvcnQgeyByZXNvbHZlU2VhcmNoLCBTZWFyY2hEYXRhIH0gZnJvbSBcIi4vc2VhcmNoRGF0YVwiO1xuXG5jbGFzcyBTdG9ya0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIlN0b3JrRXJyb3JcIjtcbiAgfVxufVxuXG5sZXQgd2FzbVF1ZXVlOiBXYXNtUXVldWUgfCBudWxsID0gbnVsbDtcbmxldCBlbnRpdHlNYW5hZ2VyOiBFbnRpdHlNYW5hZ2VyIHwgbnVsbCA9IG51bGw7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUod2FzbU92ZXJyaWRlVXJsOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKCF3YXNtUXVldWUpIHtcbiAgICAgIHdhc21RdWV1ZSA9IG5ldyBXYXNtUXVldWUod2FzbU92ZXJyaWRlVXJsKVxuICAgICAgICAucnVuQWZ0ZXJXYXNtTG9hZGVkKHJlcylcbiAgICAgICAgLnJ1bk9uV2FzbUxvYWRGYWlsdXJlKHJlaik7XG4gICAgfSBlbHNlIGlmICh3YXNtUXVldWUuc3RhdGUgPT09IFwiZmFpbGVkXCIpIHtcbiAgICAgIHJlaigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkb3dubG9hZEluZGV4KG5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGNvbmZpZyA9IHt9KTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1lc3NhZ2UgPSBcIkluZGV4IHJlZ2lzdHJhdGlvbiBuYW1lIG11c3QgYmUgYSBzdHJpbmcuXCI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1lc3NhZ2UgPSBcIlVSTCBtdXN0IGJlIGEgc3RyaW5nLlwiO1xuICAgIH1cblxuICAgIGlmICghd2FzbVF1ZXVlKSB7XG4gICAgICBtZXNzYWdlID1cbiAgICAgICAgXCJNYWtlIHN1cmUgdG8gY2FsbCBzdG9yay5pbml0aWFsaXplKCkgYmVmb3JlIGNhbGxpbmcgc3RvcmsuZG93bmxvYWRJbmRleCgpXCI7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IFN0b3JrRXJyb3IobWVzc2FnZSk7XG4gICAgICByZWooZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZW50aXR5TWFuYWdlcikge1xuICAgICAgZW50aXR5TWFuYWdlciA9IG5ldyBFbnRpdHlNYW5hZ2VyKDxXYXNtUXVldWU+d2FzbVF1ZXVlKTtcbiAgICB9XG5cbiAgICBlbnRpdHlNYW5hZ2VyLnJlZ2lzdGVyKG5hbWUsIHVybCwgY29uZmlnKS50aGVuKHJlcykuY2F0Y2gocmVqKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFlbnRpdHlNYW5hZ2VyKSB7XG4gICAgdGhyb3cgbmV3IFN0b3JrRXJyb3IoXG4gICAgICBcIk1ha2Ugc3VyZSB0byBjYWxsIHN0b3JrLmRvd25sb2FkSW5kZXgoKSBzdWNjZXNzZnVsbHkgYmVmb3JlIGNhbGxpbmcgc3RvcmsuYXR0YWNoKClcIlxuICAgICk7XG4gIH1cblxuICB0cnkge1xuICAgIGVudGl0eU1hbmFnZXIuYXR0YWNoVG9Eb20obmFtZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBuZXcgU3RvcmtFcnJvcihlLm1lc3NhZ2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyKFxuICBuYW1lOiBzdHJpbmcsXG4gIHVybDogc3RyaW5nLFxuICBjb25maWc6IFBhcnRpYWw8Q29uZmlndXJhdGlvbj5cbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBpbml0UHJvbWlzZSA9IGluaXRpYWxpemUoKTtcbiAgY29uc3QgZG9ud2xvYWRQcm9taXNlID0gZG93bmxvYWRJbmRleChuYW1lLCB1cmwsIGNvbmZpZyk7XG4gIGF0dGFjaChuYW1lKTtcblxuICAvLyBUaGlzIHNpbGx5IHRoZW4gYmxvY2sgdHVybnMgYSBbKHZvaWQpLCAodm9pZCldIGludG8gYSAodm9pZCksIHdoaWNoIGlzXG4gIC8vIG9ubHkgbmVjZXNzYXJ5IHRvIG1ha2UgVHlwZXNjcmlwdCBoYXBweS5cbiAgLy8gWW91IGJlZ2luIHRvIHdvbmRlciBpZiB5b3Ugd3JpdGUgVHlwZXNjcmlwdCBjb2RlLCBvciBpZiBUeXBlc2NyaXB0IGNvZGUgd3JpdGVzIHlvdS5cbiAgcmV0dXJuIFByb21pc2UuYWxsKFtpbml0UHJvbWlzZSwgZG9ud2xvYWRQcm9taXNlXSkudGhlbigpO1xufVxuXG5mdW5jdGlvbiBzZWFyY2gobmFtZTogc3RyaW5nLCBxdWVyeTogc3RyaW5nKTogU2VhcmNoRGF0YSB7XG4gIGlmICghbmFtZSB8fCAhcXVlcnkpIHtcbiAgICB0aHJvdyBuZXcgU3RvcmtFcnJvcihcbiAgICAgIFwiTWFrZSBzdXJlIHRvIGNhbGwgc3Rvcmsuc2VhcmNoKCkgd2l0aCB0d28gYXJndW1lbnRzOiB0aGUgaW5kZXggbmFtZSBhbmQgdGhlIHNlYXJjaCBxdWVyeS5cIlxuICAgICk7XG4gIH1cblxuICBpZiAoXG4gICAgIWVudGl0eU1hbmFnZXIgfHxcbiAgICAhZW50aXR5TWFuYWdlci5lbnRpdGllc1tuYW1lXSB8fFxuICAgIGVudGl0eU1hbmFnZXIuZW50aXRpZXNbbmFtZV0ucHJvZ3Jlc3MgPCAxXG4gICkge1xuICAgIHRocm93IG5ldyBTdG9ya0Vycm9yKFxuICAgICAgXCJDb3VsZG4ndCBmaW5kIGluZGV4LiBNYWtlIHN1cmUgdGhlIHN0b3JrLmRvd25sb2FkSW5kZXgoKSBwcm9taXNlIGhhcyByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBzdG9yay5zZWFyY2goKS5cIlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZVNlYXJjaChuYW1lLCBxdWVyeSk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemUsIGRvd25sb2FkSW5kZXgsIGF0dGFjaCwgc2VhcmNoLCByZWdpc3RlciB9O1xuIiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vZW50aXR5XCI7XG5pbXBvcnQge1xuICBDb25maWd1cmF0aW9uLFxuICBjYWxjdWxhdGVPdmVycmlkZGVuQ29uZmlnLFxuICBkZWZhdWx0Q29uZmlnXG59IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgbG9hZEluZGV4RnJvbVVybCB9IGZyb20gXCIuL2luZGV4TG9hZGVyXCI7XG5pbXBvcnQgeyB3YXNtX3JlZ2lzdGVyX2luZGV4IGFzIHdhc21SZWdpc3RlckluZGV4IH0gZnJvbSBcInN0b3JrLXNlYXJjaFwiO1xuaW1wb3J0IFdhc21RdWV1ZSBmcm9tIFwiLi93YXNtUXVldWVcIjtcblxuZXhwb3J0IGNsYXNzIEVudGl0eU1hbmFnZXIge1xuICBlbnRpdGllczogUmVjb3JkPHN0cmluZywgRW50aXR5PiA9IHt9O1xuICB3YXNtUXVldWU6IFdhc21RdWV1ZTtcblxuICBjb25zdHJ1Y3Rvcih3YXNtUXVldWU6IFdhc21RdWV1ZSkge1xuICAgIHRoaXMud2FzbVF1ZXVlID0gd2FzbVF1ZXVlO1xuICB9XG5cbiAgaGFuZGxlTG9hZGVkSW5kZXgoZW50aXR5OiBFbnRpdHksIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgeyBzdGF0dXMsIHJlc3BvbnNlIH0gPSAoZXZlbnQgYXMgUHJvZ3Jlc3NFdmVudDxcbiAgICAgIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRcbiAgICA+KS50YXJnZXQ7XG5cbiAgICBpZiAoc3RhdHVzIDwgMjAwIHx8IHN0YXR1cyA+IDI5OSkge1xuICAgICAgZW50aXR5LnNldERvd25sb2FkRXJyb3IoKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgR290IGEgJHtzdGF0dXN9IGVycm9yIGZyb20gJHtlbnRpdHkudXJsfSFgKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMud2FzbVF1ZXVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlcm5hbCBFcnJvciAtIHRoaXMud2FzbVF1ZXVlIGRvZXNuJ3QgZXhpc3RcIik7XG4gICAgfVxuXG4gICAgdGhpcy53YXNtUXVldWUucnVuQWZ0ZXJXYXNtTG9hZGVkKCgpID0+IHtcbiAgICAgIGlmICghZW50aXR5LmVycm9yKSB7XG4gICAgICAgIGNvbnN0IGluZGV4SW5mbyA9IHdhc21SZWdpc3RlckluZGV4KFxuICAgICAgICAgIGVudGl0eS5uYW1lLFxuICAgICAgICAgIG5ldyBVaW50OEFycmF5KHJlc3BvbnNlKVxuICAgICAgICApO1xuXG4gICAgICAgIGVudGl0eS5zZXREb3dubG9hZFByb2dyZXNzKDEpO1xuXG4gICAgICAgIGlmIChlbnRpdHkuY29uZmlnLnByaW50SW5kZXhJbmZvKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmxvZyh7XG4gICAgICAgICAgICBuYW1lOiBlbnRpdHkubmFtZSxcbiAgICAgICAgICAgIHNpemVJbkJ5dGVzOiByZXNwb25zZS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgLi4uSlNPTi5wYXJzZShpbmRleEluZm8pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY29uZmlnOiBQYXJ0aWFsPENvbmZpZ3VyYXRpb24+XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIGxldCBmdWxsQ29uZmlnID0gZGVmYXVsdENvbmZpZztcbiAgICAgIHRyeSB7XG4gICAgICAgIGZ1bGxDb25maWcgPSBjYWxjdWxhdGVPdmVycmlkZGVuQ29uZmlnKGNvbmZpZyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWooZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVudGl0aWVzW25hbWVdKSB7XG4gICAgICAgIC8vIFRPRE86IEFkZCBhIGNvbmZpZyBvcHRpb24gdG8gdHVybiB0aGlzIG9mZiwgaWYgb3ZlcndyaXRpbmcgYW4gaW5kZXhcbiAgICAgICAgLy8gaXMgZXhwZWN0ZWQgYmVoYXZpb3IgZm9yIHlvdVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYFNlYXJjaCBpbmRleCB3aXRoIG5hbWUgJHtuYW1lfSBhbHJlYWR5IGV4aXN0cyEgT3ZlcndyaXRpbmcuYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMud2FzbVF1ZXVlKSB7XG4gICAgICAgIHJlaihuZXcgRXJyb3IoXCJJbnRlcm5hbCBTdG9yayBlcnJvclwiKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEVudGl0eShuYW1lLCB1cmwsIGZ1bGxDb25maWcsIHRoaXMud2FzbVF1ZXVlKTtcbiAgICAgIHRoaXMuZW50aXRpZXNbbmFtZV0gPSBlbnRpdHk7XG5cbiAgICAgIGxvYWRJbmRleEZyb21VcmwoZW50aXR5LCB1cmwsIHtcbiAgICAgICAgbG9hZDogZSA9PiB0aGlzLmhhbmRsZUxvYWRlZEluZGV4KGVudGl0eSwgZSksXG4gICAgICAgIHByb2dyZXNzOiAocHJvZ3Jlc3MsIGVudGl0eSkgPT4ge1xuICAgICAgICAgIGVudGl0eS5zZXREb3dubG9hZFByb2dyZXNzKHByb2dyZXNzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICBlbnRpdHkuc2V0RG93bmxvYWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhdHRhY2hUb0RvbShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZW50aXRpZXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5kZXggJHtuYW1lfSBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCFgKTtcbiAgICB9XG5cbiAgICB0aGlzLmVudGl0aWVzW25hbWVdLmF0dGFjaFRvRG9tKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IFJlc3VsdCwgU2VhcmNoRGF0YSwgcmVzb2x2ZVNlYXJjaCB9IGZyb20gXCIuL3NlYXJjaERhdGFcIjtcbmltcG9ydCBXYXNtUXVldWUgZnJvbSBcIi4vd2FzbVF1ZXVlXCI7XG5pbXBvcnQgeyBFbnRpdHlEb20sIFJlbmRlclN0YXRlIH0gZnJvbSBcIi4vZW50aXR5RG9tXCI7XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHkge1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHVybDogc3RyaW5nO1xuICByZWFkb25seSBjb25maWc6IENvbmZpZ3VyYXRpb247XG4gIHJlYWRvbmx5IHdhc21RdWV1ZTogV2FzbVF1ZXVlO1xuXG4gIGRvbU1hbmFnZXI6IEVudGl0eURvbSB8IG51bGw7XG4gIGV2ZW50TGlzdGVuZXJGdW5jdGlvbnM6IFJlY29yZDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4gPSB7fTtcbiAgaW5kZXg6IFVpbnQ4QXJyYXk7XG4gIHJlc3VsdHM6IEFycmF5PFJlc3VsdD4gPSBbXTtcbiAgaGlnaGxpZ2h0ZWRSZXN1bHQgPSAwO1xuICBwcm9ncmVzcyA9IDA7XG4gIGVycm9yID0gZmFsc2U7XG4gIHRvdGFsUmVzdWx0Q291bnQgPSAwO1xuICByZXN1bHRzVmlzaWJsZSA9IGZhbHNlO1xuICBob3ZlclNlbGVjdEVuYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjb25maWc6IENvbmZpZ3VyYXRpb24sXG4gICAgd2FzbVF1ZXVlOiBXYXNtUXVldWVcbiAgKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLndhc21RdWV1ZSA9IHdhc21RdWV1ZTtcbiAgfVxuXG4gIGF0dGFjaFRvRG9tKCk6IHZvaWQge1xuICAgIHRoaXMuZG9tTWFuYWdlciA9IG5ldyBFbnRpdHlEb20odGhpcy5uYW1lLCB0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VycmVudE1lc3NhZ2UoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgaWYgKCF0aGlzLmRvbU1hbmFnZXIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5kb21NYW5hZ2VyLmdldFF1ZXJ5KCk7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHtcbiAgICAgIHJldHVybiBcIkVycm9yISBDaGVjayB0aGUgYnJvd3NlciBjb25zb2xlLlwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9ncmVzcyA8IDEgfHwgIXRoaXMud2FzbVF1ZXVlLndhc21Jc0xvYWRlZCkge1xuICAgICAgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xuICAgIH0gZWxzZSBpZiAocXVlcnk/Lmxlbmd0aCA8IHRoaXMuY29uZmlnLm1pbmltdW1RdWVyeUxlbmd0aCkge1xuICAgICAgcmV0dXJuIFwiRmlsdGVyaW5nLi4uXCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlc3VsdHMpIHtcbiAgICAgIGlmICh0aGlzLnRvdGFsUmVzdWx0Q291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFwiTm8gZmlsZXMgZm91bmQuXCI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudG90YWxSZXN1bHRDb3VudCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gXCIxIGZpbGUgZm91bmQuXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy50b3RhbFJlc3VsdENvdW50fSBmaWxlcyBmb3VuZC5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVJlbmRlckNvbmZpZygpOiBSZW5kZXJTdGF0ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdHM6IHRoaXMucmVzdWx0cyxcbiAgICAgIHJlc3VsdHNWaXNpYmxlOiB0cnVlLFxuICAgICAgc2hvd1Njb3JlczogdGhpcy5jb25maWcuc2hvd1Njb3JlcyxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuZ2V0Q3VycmVudE1lc3NhZ2UoKSxcbiAgICAgIHNob3dQcm9ncmVzczogdGhpcy5jb25maWcuc2hvd1Byb2dyZXNzLFxuICAgICAgcHJvZ3Jlc3M6IHRoaXMucHJvZ3Jlc3MsXG4gICAgICBlcnJvcjogdGhpcy5lcnJvclxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuZG9tTWFuYWdlcikgcmV0dXJuO1xuICAgIHRoaXMuZG9tTWFuYWdlci5yZW5kZXIodGhpcy5nZW5lcmF0ZVJlbmRlckNvbmZpZygpKTtcbiAgfVxuXG4gIGluamVzdFNlYXJjaERhdGEoZGF0YTogU2VhcmNoRGF0YSk6IHZvaWQge1xuICAgIHRoaXMucmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICB0aGlzLnRvdGFsUmVzdWx0Q291bnQgPSBkYXRhLnRvdGFsX2hpdF9jb3VudDtcbiAgICB0aGlzLmhpZ2hsaWdodGVkUmVzdWx0ID0gMDtcblxuICAgIC8vIE11dGF0ZSB0aGUgcmVzdWx0IFVSTCwgbGlrZSB3ZSBkbyB3aGVuIHRoZXJlJ3MgYSB1cmwgcHJlZml4IG9yIHN1ZmZpeFxuICAgIGNvbnN0IHVybFByZWZpeCA9IGRhdGEudXJsX3ByZWZpeCB8fCBcIlwiO1xuICAgIHRoaXMucmVzdWx0cy5tYXAociA9PiB7XG4gICAgICBsZXQgdXJsU3VmZml4ID0gXCJcIjtcblxuICAgICAgLy8gb29mXG4gICAgICBpZiAoXG4gICAgICAgIHIuZXhjZXJwdHMgJiZcbiAgICAgICAgci5leGNlcnB0c1swXSAmJlxuICAgICAgICByLmV4Y2VycHRzWzBdLmludGVybmFsX2Fubm90YXRpb25zICYmXG4gICAgICAgIHIuZXhjZXJwdHNbMF0uaW50ZXJuYWxfYW5ub3RhdGlvbnNbMF0gJiZcbiAgICAgICAgci5leGNlcnB0c1swXS5pbnRlcm5hbF9hbm5vdGF0aW9uc1swXVtcImFcIl0gJiZcbiAgICAgICAgdHlwZW9mIHIuZXhjZXJwdHNbMF0uaW50ZXJuYWxfYW5ub3RhdGlvbnNbMF1bXCJhXCJdID09PSBcInN0cmluZ1wiXG4gICAgICApIHtcbiAgICAgICAgdXJsU3VmZml4ID0gci5leGNlcnB0c1swXS5pbnRlcm5hbF9hbm5vdGF0aW9uc1swXVtcImFcIl07XG4gICAgICB9XG4gICAgICByLmVudHJ5LnVybCA9IGAke3VybFByZWZpeH0ke3IuZW50cnkudXJsfSR7dXJsU3VmZml4fWA7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTYW5pdGl6ZWRSZXN1bHRzKCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLnJlc3VsdHM7XG4gICAgcmVzdWx0cy5tYXAocmVzdWx0ID0+IHtcbiAgICAgIGRlbGV0ZSByZXN1bHQudGl0bGVfaGlnaGxpZ2h0X3JhbmdlcztcbiAgICAgIHJlc3VsdC5leGNlcnB0cy5tYXAoZXhjZXJwdCA9PiB7XG4gICAgICAgIGRlbGV0ZSBleGNlcnB0LmhpZ2hsaWdodF9yYW5nZXM7XG4gICAgICAgIGRlbGV0ZSBleGNlcnB0LmludGVybmFsX2Fubm90YXRpb25zO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBzZXREb3dubG9hZFByb2dyZXNzKHBlcmNlbnRhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLnByb2dyZXNzID0gcGVyY2VudGFnZTtcbiAgICBpZiAodGhpcy5jb25maWcuc2hvd1Byb2dyZXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHNldERvd25sb2FkRXJyb3IoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IDE7XG4gICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHBlcmZvcm1TZWFyY2gocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy53YXNtUXVldWUud2FzbUlzTG9hZGVkIHx8IHRoaXMuZXJyb3IpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5taW5pbXVtUXVlcnlMZW5ndGgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNvbHZlU2VhcmNoKHRoaXMubmFtZSwgcXVlcnkpO1xuICAgICAgICAvLyAudGhlbigoZGF0YTogU2VhcmNoRGF0YSkgPT4ge1xuICAgICAgICBpZiAoIWRhdGEpIHJldHVybjtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiREVWRUxPUE1FTlQ6XCIsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbmplc3RTZWFyY2hEYXRhKGRhdGEpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5vblF1ZXJ5VXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5jb25maWcub25RdWVyeVVwZGF0ZShxdWVyeSwgdGhpcy5nZXRTYW5pdGl6ZWRSZXN1bHRzKCkpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSBcIi4vc2VhcmNoRGF0YVwiO1xuXG5pbXBvcnQge1xuICBjcmVhdGUsXG4gIGFkZCxcbiAgY2xlYXIsXG4gIHNldFRleHQsXG4gIGV4aXN0c0JleW9uZENvbnRhaW5lckJvdW5kc1xufSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL2VudGl0eVwiO1xuaW1wb3J0IHsgTGlzdEl0ZW1EaXNwbGF5T3B0aW9ucywgcmVzdWx0VG9MaXN0SXRlbSB9IGZyb20gXCIuL3Jlc3VsdFRvTGlzdEl0ZW1cIjtcblxuaW50ZXJmYWNlIEVsZW1lbnRNYXAge1xuICBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgb3V0cHV0OiBIVE1MRGl2RWxlbWVudDtcbiAgcHJvZ3Jlc3M6IEhUTUxFbGVtZW50O1xuICBsaXN0OiBIVE1MRWxlbWVudDtcbiAgbWVzc2FnZTogSFRNTEVsZW1lbnQ7XG4gIGF0dHJpYnV0aW9uOiBIVE1MRWxlbWVudDtcbiAgY2xvc2VCdXR0b246IEhUTUxFbGVtZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlclN0YXRlIHtcbiAgcmVzdWx0czogQXJyYXk8UmVzdWx0PjtcbiAgcmVzdWx0c1Zpc2libGU6IGJvb2xlYW47XG4gIHNob3dTY29yZXM6IGJvb2xlYW47XG4gIG1lc3NhZ2U6IHN0cmluZyB8IG51bGw7XG4gIHNob3dQcm9ncmVzczogYm9vbGVhbjtcbiAgcHJvZ3Jlc3M6IG51bWJlciB8IG51bGw7XG4gIGVycm9yOiBib29sZWFuO1xufVxuXG5jb25zdCBoaWRkZW5JbnRlcmZhY2VSZW5kZXJTdGF0ZTogUmVuZGVyU3RhdGUgPSB7XG4gIHJlc3VsdHM6IFtdLFxuICByZXN1bHRzVmlzaWJsZTogZmFsc2UsXG4gIHNob3dTY29yZXM6IGZhbHNlLFxuICBtZXNzYWdlOiBudWxsLFxuICBzaG93UHJvZ3Jlc3M6IGZhbHNlLFxuICBwcm9ncmVzczogMSxcbiAgZXJyb3I6IGZhbHNlXG59O1xuXG5leHBvcnQgY2xhc3MgRW50aXR5RG9tIHtcbiAgcmVhZG9ubHkgZWxlbWVudHM6IEVsZW1lbnRNYXA7XG4gIHJlYWRvbmx5IGVudGl0eTogRW50aXR5O1xuXG4gIGhpZ2hsaWdodGVkUmVzdWx0PzogbnVtYmVyO1xuICBob3ZlclNlbGVjdEVuYWJsZWQ6IGJvb2xlYW47XG4gIGxhc3RSZW5kZXJTdGF0ZTogUmVuZGVyU3RhdGU7XG5cbiAgc2Nyb2xsQW5jaG9yUG9pbnQ6IFwic3RhcnRcIiB8IFwiZW5kXCIgPSBcImVuZFwiO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZW50aXR5OiBFbnRpdHkpIHtcbiAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcblxuICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBgaW5wdXRbZGF0YS1zdG9yaz1cIiR7bmFtZX1cIl1gLFxuICAgICAgICBlbGVtZW50TmFtZTogXCJpbnB1dFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogYGRpdltkYXRhLXN0b3JrPVwiJHtuYW1lfS1vdXRwdXRcIl1gLFxuICAgICAgICBlbGVtZW50TmFtZTogXCJvdXRwdXRcIlxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBbaW5wdXQsIG91dHB1dF0gPSBkYXRhLm1hcChkID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGQuc2VsZWN0b3IpO1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ291bGQgbm90IHJlZ2lzdGVyIHNlYXJjaCBib3ggXCIke25hbWV9XCI6ICR7ZC5lbGVtZW50TmFtZX0gZWxlbWVudCBub3QgZm91bmQuIE1ha2Ugc3VyZSBhbiBlbGVtZW50IG1hdGNoZXMgdGhlIHF1ZXJ5IHNlbGVjdG9yIFxcYCR7ZC5zZWxlY3Rvcn1cXGBgXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0pIGFzIFtIVE1MSW5wdXRFbGVtZW50LCBIVE1MRGl2RWxlbWVudF07XG5cbiAgICB0aGlzLmVsZW1lbnRzID0ge1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgb3V0cHV0OiBvdXRwdXQsXG4gICAgICBsaXN0OiBjcmVhdGUoXCJ1bFwiLCB7IGNsYXNzTmFtZXM6IFtcInN0b3JrLXJlc3VsdHNcIl0gfSksXG4gICAgICBhdHRyaWJ1dGlvbjogY3JlYXRlKFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lczogW1wic3RvcmstYXR0cmlidXRpb25cIl1cbiAgICAgIH0pLFxuICAgICAgcHJvZ3Jlc3M6IGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzTmFtZXM6IFtcInN0b3JrLXByb2dyZXNzXCJdIH0pLFxuICAgICAgbWVzc2FnZTogY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3NOYW1lczogW1wic3RvcmstbWVzc2FnZVwiXSB9KSxcbiAgICAgIGNsb3NlQnV0dG9uOiBjcmVhdGUoXCJidXR0b25cIiwge1xuICAgICAgICBjbGFzc05hbWVzOiBbXCJzdG9yay1jbG9zZS1idXR0b25cIl1cbiAgICAgIH0pXG4gICAgfTtcblxuICAgIC8vIEZpcnN0LCByZW1vdmUgc2F2ZWQgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb25zIGZyb20gdGhlIGVsZW1lbnQsIGlmIHRoZXkgZXhpc3QuXG4gICAgLy8gVGhpcyBtYWtlcyB0aGUgRW50aXR5RG9tIGNvbnN0cnVjdG9yIHNhZmUgdG8gY2FsbCBtdWx0aXBsZSB0aW1lcywgZXZlbiBpZlxuICAgIC8vIHRoZSBlbGVtZW50cyBvbiB0aGUgcGFnZSBoYXZlbid0IGNoYW5nZWQuXG4gICAgdGhpcy5lbGVtZW50cy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJpbnB1dFwiLFxuICAgICAgdGhpcy5lbnRpdHkuZXZlbnRMaXN0ZW5lckZ1bmN0aW9ucy5pbnB1dElucHV0RXZlbnRcbiAgICApO1xuXG4gICAgdGhpcy5lbGVtZW50cy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJrZXlkb3duXCIsXG4gICAgICB0aGlzLmVudGl0eS5ldmVudExpc3RlbmVyRnVuY3Rpb25zLmlucHV0S2V5ZG93bkV2ZW50XG4gICAgKTtcblxuICAgIC8vIFRoZW4sIHNhdmUgbmV3IGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9ucyB0byB0aGUgZW50aXR5IHNvIHRoYXQgd2UgY2FuXG4gICAgLy8gZGVsZXRlIHRob3NlIGxpc3RlbmVycyBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnRzIHdoZW4gdGhlXG4gICAgLy8gRW50aXR5RG9tIG9iamVjdCBpcyByZWNyZWF0ZWQuXG4gICAgdGhpcy5lbnRpdHkuZXZlbnRMaXN0ZW5lckZ1bmN0aW9ucyA9IHtcbiAgICAgIGlucHV0SW5wdXRFdmVudDogKGU6IElucHV0RXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dEV2ZW50KGUgYXMgSW5wdXRFdmVudCk7XG4gICAgICB9LFxuXG4gICAgICBpbnB1dEtleWRvd25FdmVudDogKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlEb3duRXZlbnQoZSBhcyBLZXlib2FyZEV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVGhlbiwgYWRkIHRob3NlIG5ld2x5IHNhdmVkIGZ1bmN0aW9ucyBhcyBldmVudCBsaXN0ZW5lcnMgb24gdGhlIGVsZW1lbnRzLlxuICAgIHRoaXMuZWxlbWVudHMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgIHRoaXMuZW50aXR5LmV2ZW50TGlzdGVuZXJGdW5jdGlvbnMuaW5wdXRJbnB1dEV2ZW50XG4gICAgKTtcblxuICAgIHRoaXMuZWxlbWVudHMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwia2V5ZG93blwiLFxuICAgICAgdGhpcy5lbnRpdHkuZXZlbnRMaXN0ZW5lckZ1bmN0aW9ucy5pbnB1dEtleWRvd25FdmVudFxuICAgICk7XG5cbiAgICAvLyBXZSBkaWRuJ3QgaGF2ZSB0byBkbyB0aGUgcmVtb3ZlL2FkZCBkYW5jZSB3aXRoIHRoaXMgb25lIGJlY2F1c2VcbiAgICAvLyB0aGlzIGxpc3RlbmVyIGJlaGF2aW9yIGlzIGFscmVhZHkgaWRlbXBvdGVudC5cbiAgICB0aGlzLmVsZW1lbnRzLmxpc3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5ob3ZlclNlbGVjdEVuYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVtZW50cy5hdHRyaWJ1dGlvbi5pbm5lckhUTUwgPVxuICAgICAgJ1Bvd2VyZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vc3Rvcmstc2VhcmNoLm5ldFwiPlN0b3JrPC9hPic7XG5cbiAgICBzZXRUZXh0KHRoaXMuZWxlbWVudHMuY2xvc2VCdXR0b24sIFwiw5dcIik7XG5cbiAgICBhZGQodGhpcy5lbGVtZW50cy5wcm9ncmVzcywgXCJhZnRlcmVuZFwiLCB0aGlzLmVsZW1lbnRzLmlucHV0KTtcblxuICAgIHRoaXMuZWxlbWVudHMuY2xvc2VCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIHRoaXMuZWxlbWVudHMuaW5wdXQuZm9jdXMoKTtcbiAgICAgIHRoaXMucmVuZGVyKGhpZGRlbkludGVyZmFjZVJlbmRlclN0YXRlKTtcbiAgICAgIGNvbnN0IFttLCBuXSA9IFtcbiAgICAgICAgdGhpcy5lbnRpdHkuY29uZmlnLm9uSW5wdXRDbGVhcmVkLFxuICAgICAgICB0aGlzLmVudGl0eS5jb25maWcub25SZXN1bHRzSGlkZGVuXG4gICAgICBdO1xuICAgICAgbSA/IG0oKSA6IG51bGw7XG4gICAgICBuID8gbigpIDogbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEb20oKSB7XG4gICAgY2xlYXIodGhpcy5lbGVtZW50cy5vdXRwdXQpO1xuICAgIGNsZWFyKHRoaXMuZWxlbWVudHMubGlzdCk7XG4gICAgdGhpcy5lbGVtZW50cy5jbG9zZUJ1dHRvbj8ucmVtb3ZlKCk7XG4gICAgdGhpcy5lbGVtZW50cy5vdXRwdXQuY2xhc3NMaXN0LnJlbW92ZShcInN0b3JrLW91dHB1dC12aXNpYmxlXCIpO1xuICB9XG5cbiAgcmVuZGVyKHN0YXRlOiBSZW5kZXJTdGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IHF1ZXJ5ID0gKHRoaXMuZWxlbWVudHMuaW5wdXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgdGhpcy5jbGVhckRvbSgpO1xuICAgIHRoaXMubGFzdFJlbmRlclN0YXRlID0gc3RhdGU7XG5cbiAgICBpZiAoc3RhdGUuc2hvd1Byb2dyZXNzICYmIHN0YXRlLnByb2dyZXNzICYmIHN0YXRlLnByb2dyZXNzIDwgMSkge1xuICAgICAgdGhpcy5lbGVtZW50cy5wcm9ncmVzcy5zdHlsZS53aWR0aCA9IGAke3N0YXRlLnByb2dyZXNzICogMTAwfSVgO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuc2hvd1Byb2dyZXNzKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnByb2dyZXNzLnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgdGhpcy5lbGVtZW50cy5wcm9ncmVzcy5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmVycm9yKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmlucHV0LmNsYXNzTGlzdC5hZGQoXCJzdG9yay1lcnJvclwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRRdWVyeSgpLmxlbmd0aCA+IDAgJiYgc3RhdGUucmVzdWx0c1Zpc2libGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMub3V0cHV0LmNsYXNzTGlzdC5hZGQoXCJzdG9yay1vdXRwdXQtdmlzaWJsZVwiKTtcbiAgICAgIGFkZCh0aGlzLmVsZW1lbnRzLm1lc3NhZ2UsIFwiYmVmb3JlZW5kXCIsIHRoaXMuZWxlbWVudHMub3V0cHV0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubWVzc2FnZSkge1xuICAgICAgc2V0VGV4dCh0aGlzLmVsZW1lbnRzLm1lc3NhZ2UsIHN0YXRlLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5yZXN1bHRzPy5sZW5ndGggPiAwICYmIHN0YXRlLnJlc3VsdHNWaXNpYmxlKSB7XG4gICAgICBhZGQodGhpcy5lbGVtZW50cy5saXN0LCBcImJlZm9yZWVuZFwiLCB0aGlzLmVsZW1lbnRzLm91dHB1dCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdGF0ZS5yZXN1bHRzW2ldO1xuICAgICAgICBjb25zdCBnZW5lcmF0ZU9wdGlvbnM6IExpc3RJdGVtRGlzcGxheU9wdGlvbnMgPSB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IGkgPT09IHRoaXMuaGlnaGxpZ2h0ZWRSZXN1bHQsXG4gICAgICAgICAgc2hvd1Njb3Jlczogc3RhdGUuc2hvd1Njb3Jlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gcmVzdWx0VG9MaXN0SXRlbShyZXN1bHQsIGdlbmVyYXRlT3B0aW9ucyk7XG4gICAgICAgIGFkZChsaXN0SXRlbSBhcyBIVE1MRWxlbWVudCwgXCJiZWZvcmVlbmRcIiwgdGhpcy5lbGVtZW50cy5saXN0KTtcblxuICAgICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5ob3ZlclNlbGVjdEVuYWJsZWQpIHtcbiAgICAgICAgICAgIGlmIChpICE9PSB0aGlzLmhpZ2hsaWdodGVkUmVzdWx0KSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlSGlnaGxpZ2h0ZWRSZXN1bHQoeyB0bzogaSwgc2hvdWxkU2Nyb2xsVG86IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdFJlc3VsdCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYWRkKHRoaXMuZWxlbWVudHMuYXR0cmlidXRpb24sIFwiYmVmb3JlZW5kXCIsIHRoaXMuZWxlbWVudHMub3V0cHV0KTtcbiAgICB9XG5cbiAgICBpZiAoKHF1ZXJ5Py5sZW5ndGggfHwgMCkgPiAwICYmIHRoaXMuZW50aXR5LmNvbmZpZy5zaG93Q2xvc2VCdXR0b24pIHtcbiAgICAgIGFkZCh0aGlzLmVsZW1lbnRzLmNsb3NlQnV0dG9uLCBcImFmdGVyZW5kXCIsIHRoaXMuZWxlbWVudHMuaW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0UmVzdWx0KCkge1xuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkUmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZW50aXR5LnJlc3VsdHNbdGhpcy5oaWdobGlnaHRlZFJlc3VsdF07XG4gICAgICBpZiAodGhpcy5lbnRpdHkuY29uZmlnLm9uUmVzdWx0U2VsZWN0ZWQpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZW50aXR5LmNvbmZpZy5vblJlc3VsdFNlbGVjdGVkKHRoaXMuZ2V0UXVlcnkoKSwgcmVzdWx0KVxuICAgICAgICApLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24ocmVzdWx0LmVudHJ5LnVybCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihyZXN1bHQuZW50cnkudXJsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2VIaWdobGlnaHRlZFJlc3VsdChvcHRpb25zOiB7XG4gICAgdG86IG51bWJlcjtcbiAgICBzaG91bGRTY3JvbGxUbzogYm9vbGVhbjtcbiAgfSk6IG51bWJlciB7XG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMuaGlnaGxpZ2h0ZWRSZXN1bHQ7XG5cbiAgICBjb25zdCByZXNvbHZlZElkeCA9IE1hdGgubWF4KFxuICAgICAgMCxcbiAgICAgIE1hdGgubWluKHRoaXMuZW50aXR5LnJlc3VsdHMubGVuZ3RoIC0gMSwgb3B0aW9ucy50bylcbiAgICApO1xuXG4gICAgdGhpcy5oaWdobGlnaHRlZFJlc3VsdCA9IHJlc29sdmVkSWR4O1xuICAgIHRoaXMuc2Nyb2xsQW5jaG9yUG9pbnQgPVxuICAgICAgKHByZXZpb3VzVmFsdWUgfHwgMCkgPCByZXNvbHZlZElkeCA/IFwiZW5kXCIgOiBcInN0YXJ0XCI7XG5cbiAgICBsZXQgdGFyZ2V0Rm9yU2Nyb2xsVG8gPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVudGl0eS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50cy5saXN0Py5jaGlsZHJlbltpXTtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGlnaGxpZ2h0ZWRDbGFzc05hbWUgPSBcInNlbGVjdGVkXCI7XG5cbiAgICAgIGlmIChpID09IHJlc29sdmVkSWR4KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChoaWdobGlnaHRlZENsYXNzTmFtZSk7XG4gICAgICAgIHRhcmdldEZvclNjcm9sbFRvID0gZWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShoaWdobGlnaHRlZENsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXNpbmcgb3B0aW9ucy5ieSBhcyBhIHByb3h5IGZvciBrZXlib2FyZCBzZWxlY3Rpb25cbiAgICBpZiAob3B0aW9ucy5zaG91bGRTY3JvbGxUbykge1xuICAgICAgdGhpcy5ob3ZlclNlbGVjdEVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0YXJnZXRGb3JTY3JvbGxUbykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZXhpc3RzQmV5b25kQ29udGFpbmVyQm91bmRzKFxuICAgICAgICAgICAgdGFyZ2V0Rm9yU2Nyb2xsVG8gYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmxpc3RcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICh0YXJnZXRGb3JTY3JvbGxUbyBhcyBIVE1MRWxlbWVudCkuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgICBibG9jazogdGhpcy5zY3JvbGxBbmNob3JQb2ludCxcbiAgICAgICAgICAgIGlubGluZTogXCJuZWFyZXN0XCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZElkeDtcbiAgfVxuXG4gIGhhbmRsZUtleURvd25FdmVudChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IFVQID0gMzg7XG4gICAgY29uc3QgRE9XTiA9IDQwO1xuICAgIGNvbnN0IFJFVFVSTiA9IDEzO1xuICAgIGNvbnN0IEVTQyA9IDI3O1xuXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIERPV046IHtcbiAgICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRSZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY2hhbmdlSGlnaGxpZ2h0ZWRSZXN1bHQoeyB0bzogMCwgc2hvdWxkU2Nyb2xsVG86IHRydWUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gTWF0aC5taW4oXG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodGVkUmVzdWx0ICsgMSxcbiAgICAgICAgICAgIHRoaXMuZW50aXR5LnJlc3VsdHMubGVuZ3RoIC0gMVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VIaWdobGlnaHRlZFJlc3VsdCh7IHRvOiB0YXJnZXQsIHNob3VsZFNjcm9sbFRvOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFVQOiB7XG4gICAgICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkUmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBNYXRoLm1heCgwLCB0aGlzLmhpZ2hsaWdodGVkUmVzdWx0IC0gMSk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VIaWdobGlnaHRlZFJlc3VsdCh7IHRvOiB0YXJnZXQsIHNob3VsZFNjcm9sbFRvOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFJFVFVSTjpcbiAgICAgICAgdGhpcy5zZWxlY3RSZXN1bHQoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRVNDOlxuICAgICAgICBpZiAodGhpcy5sYXN0UmVuZGVyU3RhdGUucmVzdWx0c1Zpc2libGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcihoaWRkZW5JbnRlcmZhY2VSZW5kZXJTdGF0ZSk7XG4gICAgICAgICAgY29uc3QgbSA9IHRoaXMuZW50aXR5LmNvbmZpZy5vblJlc3VsdHNIaWRkZW47XG4gICAgICAgICAgbSA/IG0oKSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50cy5pbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoaGlkZGVuSW50ZXJmYWNlUmVuZGVyU3RhdGUpOyAvLyBUbyBjbGVhciBbeF0gYnV0dG9uXG4gICAgICAgICAgY29uc3QgbSA9IHRoaXMuZW50aXR5LmNvbmZpZy5vbklucHV0Q2xlYXJlZDtcbiAgICAgICAgICBtID8gbSgpIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRFdmVudChldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZW50aXR5LnBlcmZvcm1TZWFyY2goKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gIH1cblxuICBnZXRRdWVyeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5lbGVtZW50cy5pbnB1dCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShcbiAgbmFtZTogc3RyaW5nLFxuICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBBcnJheTxzdHJpbmc+PlxuKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgaWYgKGF0dHJpYnV0ZXMuY2xhc3NOYW1lcykge1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYXR0cmlidXRlcy5jbGFzc05hbWVzLmpvaW4oXCIgXCIpKTtcbiAgfVxuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChcbiAgZWxlbTogSFRNTEVsZW1lbnQsXG4gIGxvY2F0aW9uOiBJbnNlcnRQb3NpdGlvbixcbiAgcmVmZXJlbmNlOiBIVE1MRWxlbWVudFxuKTogdm9pZCB7XG4gIHJlZmVyZW5jZS5pbnNlcnRBZGphY2VudEVsZW1lbnQobG9jYXRpb24sIGVsZW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoZWxlbTogSFRNTEVsZW1lbnQgfCBudWxsKTogdm9pZCB7XG4gIHdoaWxlIChlbGVtICYmIGVsZW0uZmlyc3RDaGlsZCkge1xuICAgIGVsZW0ucmVtb3ZlQ2hpbGQoZWxlbS5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGV4dChlbGVtOiBIVE1MRWxlbWVudCB8IG51bGwsIHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuICBpZiAoZWxlbSAmJiBlbGVtLmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtLnJlcGxhY2VDaGlsZCh0ZXh0Tm9kZSwgZWxlbS5maXJzdENoaWxkKTtcbiAgfSBlbHNlIGlmIChlbGVtKSB7XG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4aXN0c0JleW9uZENvbnRhaW5lckJvdW5kcyhcbiAgZWxlbTogSFRNTEVsZW1lbnQsXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbik6IGJvb2xlYW4ge1xuICBjb25zdCBlbGVtQm91bmRpbmdCb3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBjb250YWluZXJCb3VuZGluZ0JveCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICByZXR1cm4gKFxuICAgIGVsZW1Cb3VuZGluZ0JveC5ib3R0b20gPiBjb250YWluZXJCb3VuZGluZ0JveC5ib3R0b20gfHxcbiAgICBlbGVtQm91bmRpbmdCb3gudG9wIDwgY29udGFpbmVyQm91bmRpbmdCb3gudG9wXG4gICk7XG59XG4iLCJpbXBvcnQgeyBoaWdobGlnaHQgfSBmcm9tIFwiLi9wZW5jaWxcIjtcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gXCIuL3NlYXJjaERhdGFcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMaXN0SXRlbURpc3BsYXlPcHRpb25zIHtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIHNob3dTY29yZXM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN1bHRUb0xpc3RJdGVtKFxuICByZXN1bHQ6IFJlc3VsdCxcbiAgb3B0aW9uczogTGlzdEl0ZW1EaXNwbGF5T3B0aW9uc1xuKTogQ2hpbGROb2RlIHtcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IGBcbjxsaSBjbGFzcz1cInN0b3JrLXJlc3VsdCR7b3B0aW9ucy5zZWxlY3RlZCA/IFwiIHNlbGVjdGVkXCIgOiBcIlwifVwiPlxuICA8YSBocmVmPVwiJHtyZXN1bHQuZW50cnkudXJsfVwiPlxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cIj5cbiAgICAgIDxwIGNsYXNzPVwic3RvcmstdGl0bGVcIj4ke2hpZ2hsaWdodChcbiAgICAgICAgcmVzdWx0LmVudHJ5LnRpdGxlLFxuICAgICAgICByZXN1bHQudGl0bGVfaGlnaGxpZ2h0X3Jhbmdlc1xuICAgICAgKX08L3A+XG4gICAgICAke29wdGlvbnMuc2hvd1Njb3JlcyA/IGA8Y29kZT48Yj4ke3Jlc3VsdC5zY29yZX08L2I+PC9jb2RlPmAgOiBcIlwifVxuICAgIDwvZGl2PlxuICAgICAgJHtyZXN1bHQuZXhjZXJwdHNcbiAgICAgICAgLm1hcChcbiAgICAgICAgICBlID0+IGA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXCI+PHAgY2xhc3M9XCJzdG9yay1leGNlcnB0XCI+XG4gICAgICAgIC4uLiR7aGlnaGxpZ2h0KGUudGV4dCwgZS5oaWdobGlnaHRfcmFuZ2VzKX0uLi5cbiAgICAgICAgPC9wPlxuICAgICAgICAke29wdGlvbnMuc2hvd1Njb3JlcyA/IGA8Y29kZT4ke2Uuc2NvcmV9PC9jb2RlPmAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5gXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oXCJcIil9XG4gIDwvYT5cbjwvbGk+YDtcbiAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQgYXMgQ2hpbGROb2RlO1xufVxuIiwiLy8gSXQncyBsaWtlIEhhbmRsZWJhcnMsIGJ1dCBzbWFsbGVyLlxuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0KHRleHQsIGhpZ2hsaWdodF9yYW5nZXMpIHtcbiAgZnVuY3Rpb24gaW5zZXJ0KHN0ciwgaW5kZXgsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgaW5kZXgpICsgdmFsdWUgKyBzdHIuc3Vic3RyKGluZGV4KTtcbiAgfVxuXG4gIHZhciBjaGFyYWN0ZXJzQWxyZWFkeUFkZGVkID0gMDtcblxuICBmb3IgKGxldCByYW5nZSBvZiBoaWdobGlnaHRfcmFuZ2VzKSB7XG4gICAgbGV0IGJlZ2lubmluZ0luc2VydGlvbiA9IGA8c3BhbiBjbGFzcz1cInN0b3JrLWhpZ2hsaWdodFwiPmA7XG4gICAgbGV0IGVuZEluc2VydGlvbiA9IGA8L3NwYW4+YDtcblxuICAgIHRleHQgPSBpbnNlcnQoXG4gICAgICB0ZXh0LFxuICAgICAgcmFuZ2UuYmVnaW5uaW5nICsgY2hhcmFjdGVyc0FscmVhZHlBZGRlZCxcbiAgICAgIGJlZ2lubmluZ0luc2VydGlvblxuICAgICk7XG4gICAgY2hhcmFjdGVyc0FscmVhZHlBZGRlZCArPSBiZWdpbm5pbmdJbnNlcnRpb24ubGVuZ3RoO1xuXG4gICAgdGV4dCA9IGluc2VydCh0ZXh0LCByYW5nZS5lbmQgKyBjaGFyYWN0ZXJzQWxyZWFkeUFkZGVkLCBlbmRJbnNlcnRpb24pO1xuICAgIGNoYXJhY3RlcnNBbHJlYWR5QWRkZWQgKz0gZW5kSW5zZXJ0aW9uLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufVxuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZSB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcbiAgc2hvd1Byb2dyZXNzOiBib29sZWFuO1xuICBwcmludEluZGV4SW5mbzogYm9vbGVhbjtcbiAgc2hvd1Njb3JlczogYm9vbGVhbjtcbiAgc2hvd0Nsb3NlQnV0dG9uOiBib29sZWFuO1xuICBtaW5pbXVtUXVlcnlMZW5ndGg6IG51bWJlcjtcbiAgb25RdWVyeVVwZGF0ZT86IChxdWVyeTogc3RyaW5nLCByZXN1bHRzOiB1bmtub3duKSA9PiB1bmtub3duO1xuICBvblJlc3VsdFNlbGVjdGVkPzogKHF1ZXJ5OiBzdHJpbmcsIHJlc3VsdDogdW5rbm93bikgPT4gdW5rbm93bjtcbiAgb25SZXN1bHRzSGlkZGVuPzogKCkgPT4gdW5rbm93bjtcbiAgb25JbnB1dENsZWFyZWQ/OiAoKSA9PiB1bmtub3duO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZzogUmVhZG9ubHk8Q29uZmlndXJhdGlvbj4gPSB7XG4gIHNob3dQcm9ncmVzczogdHJ1ZSxcbiAgcHJpbnRJbmRleEluZm86IGZhbHNlLFxuICBzaG93U2NvcmVzOiBmYWxzZSxcbiAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuICBtaW5pbXVtUXVlcnlMZW5ndGg6IDMsXG4gIG9uUXVlcnlVcGRhdGU6IHVuZGVmaW5lZCxcbiAgb25SZXN1bHRTZWxlY3RlZDogdW5kZWZpbmVkLFxuICBvblJlc3VsdHNIaWRkZW46IHVuZGVmaW5lZCxcbiAgb25JbnB1dENsZWFyZWQ6IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU92ZXJyaWRkZW5Db25maWcoXG4gIG92ZXJyaWRlczogUGFydGlhbDxDb25maWd1cmF0aW9uPlxuKTogQ29uZmlndXJhdGlvbiB7XG4gIGNvbnN0IGNvbmZpZ0tleURpZmYgPSBkaWZmZXJlbmNlKFxuICAgIE9iamVjdC5rZXlzKG92ZXJyaWRlcyksXG4gICAgT2JqZWN0LmtleXMoZGVmYXVsdENvbmZpZylcbiAgKTtcblxuICBpZiAoY29uZmlnS2V5RGlmZi5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGx1cmFsID0gKGNvdW50OiBudW1iZXIsIHNpbmd1bGFyOiBzdHJpbmcsIHBsdXJhbDogc3RyaW5nKSA9PlxuICAgICAgY291bnQgPT0gMSA/IHNpbmd1bGFyIDogcGx1cmFsO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkICR7cGx1cmFsKFxuICAgICAgICBjb25maWdLZXlEaWZmLmxlbmd0aCxcbiAgICAgICAgXCJrZXlcIixcbiAgICAgICAgXCJrZXlzXCJcbiAgICAgICl9IGluIGNvbmZpZyBvYmplY3Q6ICR7SlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShjb25maWdLZXlEaWZmKSl9YFxuICAgICk7XG4gIH1cblxuICBjb25zdCBvdXRwdXQ6IENvbmZpZ3VyYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnKTtcblxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkZWZhdWx0Q29uZmlnKSBhcyBBcnJheTxrZXlvZiBDb25maWd1cmF0aW9uPikge1xuICAgIGNvbnN0IG92ZXJyaWRlVmFsID0gb3ZlcnJpZGVzW2tleV07XG4gICAgaWYgKG92ZXJyaWRlVmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgb3V0cHV0W2tleV0gPSBvdmVycmlkZVZhbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGh0bWxUb0VsZW1lbnQoaHRtbDogc3RyaW5nKTogQ2hpbGROb2RlIHwgbnVsbCB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICBodG1sID0gaHRtbC50cmltKCk7IC8vIE5ldmVyIHJldHVybiBhIHRleHQgbm9kZSBvZiB3aGl0ZXNwYWNlIGFzIHRoZSByZXN1bHRcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2U8VD4oYXJyMTogQXJyYXk8VD4sIGFycjI6IEFycmF5PFQ+KTogQXJyYXk8VD4ge1xuICBjb25zdCBzZXQxID0gbmV3IFNldChhcnIxKTtcbiAgY29uc3Qgc2V0MiA9IG5ldyBTZXQoYXJyMik7XG4gIGNvbnN0IGRpZmYgPSBuZXcgU2V0KEFycmF5LmZyb20oc2V0MSkuZmlsdGVyKHggPT4gIXNldDIuaGFzKHgpKSk7XG4gIHJldHVybiBBcnJheS5mcm9tKGRpZmYpO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vZW50aXR5XCI7XG5cbmludGVyZmFjZSBJbmRleExvYWRlckNhbGxiYWNrcyB7XG4gIGxvYWQ6IChldmVudDogRXZlbnQsIGVudGl0eTogRW50aXR5KSA9PiB2b2lkO1xuICBwcm9ncmVzczogKHBlcmNlbnRhZ2U6IG51bWJlciwgZW50aXR5OiBFbnRpdHkpID0+IHZvaWQ7XG4gIGVycm9yOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBGQUtFX1BST0dSRVNTX0JVTVBfT05fU1RBUlQgPSAwLjAzO1xuY29uc3QgUFJPR1JFU1NfU0hPV0lOR19JTkRFWF9OT1RfWUVUX1JFR0lTVEVSRUQgPSAwLjk0O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEluZGV4RnJvbVVybChcbiAgZW50aXR5OiBFbnRpdHksXG4gIHVybDogc3RyaW5nLFxuICBjYWxsYmFja3M6IEluZGV4TG9hZGVyQ2FsbGJhY2tzXG4pOiB2b2lkIHtcbiAgY29uc3QgciA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZSA9PiB7XG4gICAgLy8gVGhpcyBnZXRzIGNhbGxlZCBldmVuIGlmIHdlIGdldCBhIDQwNCByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIhXG4gICAgaWYgKGNhbGxiYWNrcy5sb2FkKSB7XG4gICAgICBjYWxsYmFja3MubG9hZChlLCBlbnRpdHkpO1xuICAgIH1cbiAgfSk7XG5cbiAgci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCBmZXRjaCAke3VybH1gKTtcbiAgICBjYWxsYmFja3MuZXJyb3IoKTtcbiAgfSk7XG5cbiAgci5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZSA9PiB7XG4gICAgaWYgKGNhbGxiYWNrcy5wcm9ncmVzcykge1xuICAgICAgY29uc3QgbG9hZGVkUGVyY2VudGFnZSA9IE1hdGgubWluKFxuICAgICAgICBNYXRoLm1heChGQUtFX1BST0dSRVNTX0JVTVBfT05fU1RBUlQsIGUubG9hZGVkIC8gZS50b3RhbCksXG4gICAgICAgIFBST0dSRVNTX1NIT1dJTkdfSU5ERVhfTk9UX1lFVF9SRUdJU1RFUkVEXG4gICAgICApO1xuICAgICAgY2FsbGJhY2tzLnByb2dyZXNzKGxvYWRlZFBlcmNlbnRhZ2UsIGVudGl0eSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoY2FsbGJhY2tzLnByb2dyZXNzKSB7XG4gICAgY2FsbGJhY2tzLnByb2dyZXNzKEZBS0VfUFJPR1JFU1NfQlVNUF9PTl9TVEFSVCwgZW50aXR5KTtcbiAgfVxuXG4gIHIucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuICByLm9wZW4oXCJHRVRcIiwgdXJsKTtcbiAgci5zZW5kKCk7XG59XG4iLCJpbXBvcnQgaW5pdCBmcm9tIFwic3Rvcmstc2VhcmNoXCI7XG5cbnR5cGUgV2FzbVF1ZXVlU3RhdGUgPSBcInF1ZXVlaW5nXCIgfCBcImxvYWRlZFwiIHwgXCJmYWlsZWRcIjtcblxuLy8gY29uc3QgdmVyc2lvbiA9IHByb2Nlc3MuZW52LlZFUlNJT047XG5jb25zdCB2ZXJzaW9uID0gbnVsbDtcbmNvbnN0IERFRkFVTFRfV0FTTV9VUkwgPSB2ZXJzaW9uXG4gID8gYGh0dHBzOi8vZmlsZXMuc3Rvcmstc2VhcmNoLm5ldC9zdG9yay0ke3ZlcnNpb259Lndhc21gXG4gIDogYGh0dHBzOi8vZmlsZXMuc3Rvcmstc2VhcmNoLm5ldC9zdG9yay53YXNtYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FzbVF1ZXVlIHtcbiAgcHJpdmF0ZSBfd2FzbUlzTG9hZGVkID0gZmFsc2U7XG5cbiAgcHVibGljIGdldCB3YXNtSXNMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3dhc21Jc0xvYWRlZDtcbiAgfVxuXG4gIHdhc21Vcmw6IHN0cmluZztcbiAgd2FzbUxvYWRQcm9taXNlOiBQcm9taXNlPHZvaWQ+O1xuICBzdGF0ZTogV2FzbVF1ZXVlU3RhdGUgPSBcInF1ZXVlaW5nXCI7XG4gIHF1ZXVlOiB7ICgpOiB2b2lkIH1bXSA9IFtdO1xuICBmYWlsdXJlTWV0aG9kOiB7IChlOiBFcnJvcik6IHZvaWQgfSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHdhc21PdmVycmlkZVVybDogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcbiAgICB0aGlzLndhc21VcmwgPSB3YXNtT3ZlcnJpZGVVcmwgfHwgREVGQVVMVF9XQVNNX1VSTDtcbiAgICB0aGlzLndhc21Mb2FkUHJvbWlzZSA9IGluaXQodGhpcy53YXNtVXJsKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVdhc21Mb2FkKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVdhc21GYWlsdXJlKGUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVyIHNob3VsZCB1c2UgdGhpcyB0byBxdWV1ZSB1cCBhIGZ1bmN0aW9uIHRvIGJlIHJ1biBvbmx5IHdoZW4gdGhlXG4gICAqIFdBU00gaXMgbG9hZGVkLiBJZiB0aGUgV0FTTSBpcyBhbHJlYWR5IGxvYWRlZCB3aGVuIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCxcbiAgICogdGhlIGZ1bmN0aW9uIHdpbGwgcnVuIGltbWVkaWF0ZWx5LlxuICAgKlxuICAgKiBAcGFyYW0gZm4gRnVuY3Rpb24gdG8gYmUgcnVuIG9uY2UgV0FTTSBpcyBsb2FkZWRcbiAgICovXG4gIHJ1bkFmdGVyV2FzbUxvYWRlZChmbjogeyAoKTogdm9pZDsgKCk6IHZvaWQgfSk6IFdhc21RdWV1ZSB7XG4gICAgaWYgKHRoaXMud2FzbUlzTG9hZGVkKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnF1ZXVlLnB1c2goZm4pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlciBzaG91bGQgdXNlIHRoaXMgdG8gcmVnaXN0ZXIgYSBmdW5jdGlvbiB0byBiZSBydW4gb25seSB3aGVuIHRoZSBXQVNNXG4gICAqIGZhaWxzIHRvIGxvYWQuIFVubGlrZSB0aGUgaGFwcHktcGF0aCBmdW5jdGlvbiwgY2FsbGluZyB0aGlzIHdpbGwgb3ZlcndyaXRlXG4gICAqIGFueSBleGlzdGluZyBlcnJvciBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBXQVNNIGZhaWxzIHRvIGxvYWQuIFRoZSBmdW5jdGlvblxuICAgKiBzaG91bGQgdGFrZSBhbiBvcHRpb25hbCBFcnJvciBwYXJhbWV0ZXIuXG4gICAqL1xuICBydW5Pbldhc21Mb2FkRmFpbHVyZShmbjogeyAoZTogRXJyb3IgfCBudWxsKTogdm9pZCB9KTogV2FzbVF1ZXVlIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJmYWlsZWRcIikge1xuICAgICAgZm4obnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmFpbHVyZU1ldGhvZCA9IGZuO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFdBU00gbG9hZGVyIHNob3VsZCB1c2UgdGhpcyB0byBzaWduYWwgdG8gdGhlIHF1ZXVlIHRoYXQgdGhlIFdBU00gaGFzIGJlZW5cbiAgICogbG9hZGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVXYXNtTG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLl93YXNtSXNMb2FkZWQgPSB0cnVlO1xuICAgIGZvciAoY29uc3QgZm4gb2YgdGhpcy5xdWV1ZSkge1xuICAgICAgZm4oKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXVlID0gW107XG4gIH1cblxuICAvKipcbiAgICogV0FTTSBsb2FkZXIgc2hvdWxkIHVzZSB0aGlzIHRvIHNpZ25hbCB0byB0aGUgcXVldWUgdGhhdCBsb2FkaW5nIHRoZSBXQVNNXG4gICAqIGhhcyBmYWlsZWQuXG4gICAqXG4gICAqIEBwYXJhbSBlIFRoZSBlcnJvciB0aGF0IHdhcyByZWNpZXZlZCB3aGlsZSBsb2FkaW5nIHRoZSBXQVNNLlxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVXYXNtRmFpbHVyZShlOiBFcnJvcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmZhaWx1cmVNZXRob2QpIHRoaXMuZmFpbHVyZU1ldGhvZChlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==