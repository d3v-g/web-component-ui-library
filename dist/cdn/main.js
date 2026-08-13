//#region node_modules/@lit/reactive-element/decorators/custom-element.js
var e = (e) => (t, n) => {
	n === void 0 ? customElements.define(e, t) : n.addInitializer(() => {
		customElements.define(e, t);
	});
}, t = globalThis, n = t.ShadowRoot && (t.ShadyCSS === void 0 || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, r = Symbol(), i = /* @__PURE__ */ new WeakMap(), a = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== r) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (n && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = i.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && i.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, o = (e) => new a(typeof e == "string" ? e : e + "", void 0, r), s = (e, ...t) => new a(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, r), c = (e, r) => {
	if (n) e.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of r) {
		let r = document.createElement("style"), i = t.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, e.appendChild(r);
	}
}, l = n ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return o(t);
})(e) : e, { is: u, defineProperty: d, getOwnPropertyDescriptor: ee, getOwnPropertyNames: te, getOwnPropertySymbols: ne, getPrototypeOf: re } = Object, f = globalThis, ie = f.trustedTypes, ae = ie ? ie.emptyScript : "", oe = f.reactiveElementPolyfillSupport, p = (e, t) => e, m = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ae : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, h = (e, t) => !u(e, t), se = {
	attribute: !0,
	type: String,
	converter: m,
	reflect: !1,
	useDefault: !1,
	hasChanged: h
};
Symbol.metadata ??= Symbol("metadata"), f.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var g = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = se) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && d(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = ee(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? se;
	}
	static _$Ei() {
		if (this.hasOwnProperty(p("elementProperties"))) return;
		let e = re(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(p("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(p("properties"))) {
			let e = this.properties, t = [...te(e), ...ne(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(l(e));
		} else e !== void 0 && t.push(l(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return c(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? m : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? m : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? h)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[p("elementProperties")] = /* @__PURE__ */ new Map(), g[p("finalized")] = /* @__PURE__ */ new Map(), oe?.({ ReactiveElement: g }), (f.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region node_modules/@lit/reactive-element/decorators/property.js
var ce = {
	attribute: !0,
	type: String,
	converter: m,
	reflect: !1,
	hasChanged: h
}, le = (e = ce, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e, !0, n);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function _(e) {
	return (t, n) => typeof n == "object" ? le(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
//#endregion
//#region node_modules/@lit/reactive-element/decorators/base.js
var ue = (e, t, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, n), n);
//#endregion
//#region node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
function de(e) {
	return (t, n) => {
		let { slot: r, selector: i } = e ?? {}, a = "slot" + (r ? `[name=${r}]` : ":not([name])");
		return ue(t, n, { get() {
			let t = (this.renderRoot?.querySelector(a))?.assignedElements(e) ?? [];
			return i === void 0 ? t : t.filter((e) => e.matches(i));
		} });
	};
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function fe(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = fe(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function v() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = fe(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/lit-html/lit-html.js
var y = globalThis, pe = (e) => e, b = y.trustedTypes, me = b ? b.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, he = "$lit$", x = `lit$${Math.random().toFixed(9).slice(2)}$`, ge = "?" + x, _e = `<${ge}>`, S = document, C = () => S.createComment(""), w = (e) => e === null || typeof e != "object" && typeof e != "function", T = Array.isArray, ve = (e) => T(e) || typeof e?.[Symbol.iterator] == "function", E = "[ 	\n\f\r]", D = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ye = /-->/g, be = />/g, O = RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), xe = /'/g, Se = /"/g, Ce = /^(?:script|style|textarea|title)$/i, we = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), k = we(1), A = we(2), j = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), Te = /* @__PURE__ */ new WeakMap(), N = S.createTreeWalker(S, 129);
function Ee(e, t) {
	if (!T(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return me === void 0 ? t : me.createHTML(t);
}
var De = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = D;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === D ? c[1] === "!--" ? o = ye : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = O) : (Ce.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = O) : o = be : o === O ? c[0] === ">" ? (o = i ?? D, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? O : c[3] === "\"" ? Se : xe) : o === Se || o === xe ? o = O : o === ye || o === be ? o = D : (o = O, i = void 0);
		let d = o === O && e[t + 1].startsWith("/>") ? " " : "";
		a += o === D ? n + _e : l >= 0 ? (r.push(s), n.slice(0, l) + he + n.slice(l) + x + d) : n + x + (l === -2 ? t : d);
	}
	return [Ee(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, P = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = De(t, n);
		if (this.el = e.createElement(l, r), N.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = N.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(he)) {
					let t = u[o++], n = i.getAttribute(e).split(x), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? ke : r[1] === "?" ? Ae : r[1] === "@" ? je : L
					}), i.removeAttribute(e);
				} else e.startsWith(x) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Ce.test(i.tagName)) {
					let e = i.textContent.split(x), t = e.length - 1;
					if (t > 0) {
						i.textContent = b ? b.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], C()), N.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], C());
					}
				}
			} else if (i.nodeType === 8) if (i.data === ge) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(x, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += x.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = S.createElement("template");
		return n.innerHTML = e, n;
	}
};
function F(e, t, n = e, r) {
	if (t === j) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = w(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = F(e, i._$AS(e, t.values), i, r)), t;
}
var Oe = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? S).importNode(t, !0);
		N.currentNode = r;
		let i = N.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new I(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Me(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = N.nextNode(), a++);
		}
		return N.currentNode = S, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, I = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = F(this, e, t), w(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== j && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? ve(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== M && w(this._$AH) ? this._$AA.nextSibling.data = e : this.T(S.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = P.createElement(Ee(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Oe(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Te.get(e.strings);
		return t === void 0 && Te.set(e.strings, t = new P(e)), t;
	}
	k(t) {
		T(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(C()), this.O(C()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = pe(e).nextSibling;
			pe(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, L = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = M;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = F(this, e, t, 0), a = !w(e) || e !== this._$AH && e !== j, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = F(this, r[n + o], t, o), s === j && (s = this._$AH[o]), a ||= !w(s) || s !== this._$AH[o], s === M ? e = M : e !== M && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, ke = class extends L {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === M ? void 0 : e;
	}
}, Ae = class extends L {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== M);
	}
}, je = class extends L {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = F(this, e, t, 0) ?? M) === j) return;
		let n = this._$AH, r = e === M && n !== M || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== M && (n === M || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Me = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		F(this, e);
	}
}, Ne = y.litHtmlPolyfillSupport;
Ne?.(P, I), (y.litHtmlVersions ??= []).push("3.3.3");
var Pe = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new I(t.insertBefore(C(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, R = globalThis, z = class extends g {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Pe(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return j;
	}
};
z._$litElement$ = !0, z.finalized = !0, R.litElementHydrateSupport?.({ LitElement: z });
var Fe = R.litElementPolyfillSupport;
Fe?.({ LitElement: z }), (R.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region lib/utils/styles.ts
var B = (e) => s`
  ${o(e)}
`, V = (e) => e ?? M, Ie = ".base{color:var(--color-slate-base);border-radius:var(--button-base-border-radius);border:var(--button-base-border) transparent;transition:background-color var(--button-base-transition), border-color var(--button-base-transition);appearance:none;-webkit-user-select:none;user-select:none;vertical-align:bottom;cursor:pointer;background:0 0;outline:none;justify-content:center;align-items:center;margin:0;display:inline-flex;position:relative}.base.disabled{cursor:not-allowed}.base.loading{cursor:wait}.base:focus-visible{outline:2px solid var(--button-base-focus-color);outline-offset:2px}.base:focus-visible:after{content:\"\";pointer-events:none;outline:2px solid var(--color-white-base);outline-offset:5px;border-radius:5px;position:absolute;inset:0}.base ::slotted(jet2-icon){color:inherit;display:flex}.loading .base ::slotted(jet2-icon){visibility:hidden}.sm{font:var(--button-sm-text);padding:var(--button-sm-padding);gap:var(--button-sm-gap)}.sm.icon-only{padding:var(--button-icon-only-sm-padding)}.md{font:var(--button-md-text);padding:var(--button-md-padding);gap:var(--button-md-gap)}.md.icon-only{padding:var(--button-icon-only-md-padding)}.lg{font:var(--button-lg-text);padding:var(--button-lg-padding);gap:var(--button-lg-gap)}.lg.icon-only{padding:var(--button-icon-only-lg-padding)}.loading .label,.label.icon-only{visibility:hidden}.label.justify{margin-right:auto}.loader{justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;inset:0}";
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/decorate.js
function H(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region lib/components/actions/ButtonBase/ButtonBase.ts
var U = class extends z {
	constructor(...e) {
		super(...e), this.label = "", this.size = "md", this.disabled = !1, this.loading = !1, this.iconOnly = !1;
	}
	static {
		this.styles = s`
    ${o(Ie)}
  `;
	}
	get icons() {
		return [...this.primaryIcons, ...this.secondaryIcons];
	}
	updateSlottedIcons() {
		this.icons.forEach((e) => {
			e.size = this.size;
		});
	}
	updated() {
		this.updateSlottedIcons();
	}
	get semanticLabel() {
		return this.loading ? `Loading ${this.label}` : this.label;
	}
	get isDisabled() {
		return this.disabled || this.loading;
	}
	getClassNames() {
		return v("base", this.size, {
			disabled: this.disabled,
			loading: this.loading,
			"icon-only": this.iconOnly
		});
	}
	renderContent() {
		return k`
      <slot name="primary"></slot>

      ${this.iconOnly ? M : k`<span part="label" class="label">${this.label}</span>`}

      <slot name="secondary"></slot>
    `;
	}
	renderButton() {
		return k`
      <button
        part="action"
        type=${V(this.type ?? "button")}
        class=${this.getClassNames()}
        ?disabled=${this.isDisabled}
        aria-disabled=${V(this.isDisabled || void 0)}
        aria-busy=${V(this.loading || void 0)}
        aria-label=${V(this.semanticLabel || void 0)}
        @click=${(e) => {
			this.onClick && this.onClick(e), this.type === "submit" && this.closest("FORM")?.dispatchEvent(new Event("submit")), this.type === "reset" && this.closest("FORM")?.dispatchEvent(new Event("reset"));
		}}
      >
        ${this.renderContent()}
      </button>
    `;
	}
	renderAnchor() {
		return k`
      <a
        part="action"
        class=${this.getClassNames()}
        href=${V(this.href || void 0)}
        target=${V(this.target || void 0)}
        rel=${V(this.rel || void 0)}
        aria-busy=${V(this.loading || void 0)}
        aria-label=${V(this.semanticLabel || void 0)}
      >
        ${this.renderContent()}
      </a>
    `;
	}
	render() {
		return this.href ? this.renderAnchor() : this.renderButton();
	}
};
H([_({ type: String })], U.prototype, "label", void 0), H([_({ type: String })], U.prototype, "size", void 0), H([_({ type: Boolean })], U.prototype, "disabled", void 0), H([_({ type: Boolean })], U.prototype, "loading", void 0), H([_({
	type: Boolean,
	attribute: "icon-only"
})], U.prototype, "iconOnly", void 0), H([_({ type: String })], U.prototype, "href", void 0), H([_({ type: String })], U.prototype, "target", void 0), H([_({ type: String })], U.prototype, "rel", void 0), H([_({ type: String })], U.prototype, "type", void 0), H([_({ attribute: !1 })], U.prototype, "onClick", void 0), H([de({ slot: "primary" })], U.prototype, "primaryIcons", void 0), H([de({ slot: "secondary" })], U.prototype, "secondaryIcons", void 0);
var Le = class extends U {};
Le = H([e("jet2-button-base")], Le);
//#endregion
//#region lib/components/actions/Button/Button.scss?inline
var Re = ".button{text-decoration:none}.button.primary{color:var(--button-primary-default-text-color);background-color:var(--button-primary-default-background-color);border:var(--button-base-border) var(--button-primary-default-border-color)}.button.primary:hover{background-color:var(--button-primary-hover-background-color);border-color:var(--button-primary-hover-border-color)}.button.primary:active{background-color:var(--button-primary-active-background-color);border-color:var(--button-primary-active-border-color)}.button.primary.disabled,.button.primary.loading{color:var(--button-primary-disabled-text-color);background-color:var(--button-primary-disabled-background-color);border-color:var(--button-primary-disabled-border-color)}.button.secondary{color:var(--button-secondary-default-text-color);background-color:var(--button-secondary-default-background-color);border:var(--button-base-border) var(--button-secondary-default-border-color)}.button.secondary:hover{color:var(--button-secondary-hover-text-color);background-color:var(--button-secondary-hover-background-color)}.button.secondary:active{color:var(--button-secondary-active-text-color);background-color:var(--button-secondary-active-background-color)}.button.secondary.disabled,.button.secondary.loading{color:var(--button-secondary-disabled-text-color);background-color:var(--button-secondary-disabled-background-color);border-color:var(--button-secondary-disabled-border-color)}.button.critical{color:var(--button-critical-default-text-color);background-color:var(--button-critical-default-background-color);border:var(--button-base-border) var(--button-critical-default-border-color)}.button.critical:hover{background-color:var(--button-critical-hover-background-color);border-color:var(--button-critical-hover-border-color)}.button.critical:active{background-color:var(--button-critical-active-background-color);border-color:var(--button-critical-active-border-color)}.button.critical.disabled,.button.critical.loading{color:var(--button-critical-disabled-text-color);background-color:var(--button-critical-disabled-background-color);border-color:var(--button-critical-disabled-border-color)}.button.icon-only,.button.icon-only:focus-visible:after{border-radius:var(--button-icon-only-base-border-radius)}", W = class extends U {
	constructor(...e) {
		super(...e), this.variant = "primary";
	}
	static {
		this.styles = [U.styles, B(Re)];
	}
	getClassNames() {
		return v(super.getClassNames(), "button", this.variant);
	}
};
H([_({ type: String })], W.prototype, "variant", void 0), W = H([e("jet2-button")], W);
//#endregion
//#region lib/components/actions/ButtonLink/ButtonLink.scss?inline
var ze = ".button{-webkit-text-decoration-skip-ink:auto;text-decoration-skip-ink:auto;text-decoration:underline;text-decoration-thickness:1px}.button.primary{color:var(--button-link-primary-default-text-color);background-color:var(--button-link-primary-default-background-color);border-color:var(--button-link-primary-default-border-color)}.button.primary:hover{color:var(--button-link-primary-hover-text-color);background-color:var(--button-link-primary-hover-background-color);border-color:var(--button-link-primary-hover-border-color)}.button.primary:active{color:var(--button-link-primary-active-text-color);background-color:var(--button-link-primary-active-background-color);border-color:var(--button-link-primary-active-border-color)}.button.secondary{color:var(--button-link-secondary-default-text-color);background-color:var(--button-link-secondary-default-background-color);border-color:var(--button-link-secondary-default-border-color)}.button.secondary:hover{color:var(--button-link-secondary-hover-text-color);background-color:var(--button-link-secondary-hover-background-color);border-color:var(--button-link-secondary-hover-border-color)}.button.secondary:active{color:var(--button-link-secondary-active-text-color);background-color:var(--button-link-secondary-active-background-color);border-color:var(--button-link-secondary-active-border-color)}.button.secondary.compact{color:var(--button-link-secondary-compact-text-color)}.button.secondary.compact:hover{color:var(--button-link-secondary-compact-hover-text-color)}.button.secondary.compact:active{color:var(--button-link-secondary-compact-active-text-color)}.button.critical{color:var(--button-link-critical-default-text-color);background-color:var(--button-link-critical-default-background-color);border-color:var(--button-link-critical-default-border-color)}.button.critical:hover{color:var(--button-link-critical-hover-text-color);background-color:var(--button-link-critical-hover-background-color);border-color:var(--button-link-critical-hover-border-color)}.button.critical:active{color:var(--button-link-critical-active-text-color);background-color:var(--button-link-critical-active-background-color);border-color:var(--button-link-critical-active-border-color)}.button.disabled,.button.loading,.button.disabled:hover,.button.disabled:active,.button.loading:hover,.button.loading:active{color:var(--button-link-disabled-text-color);background-color:var(--button-link-disabled-background-color);border-color:var(--button-link-disabled-border-color)}.button.compact{background:var(--button-link-compact-background-color);padding-left:0;padding-right:0}.button.compact:hover,.button.compact:active{background:var(--button-link-compact-background-color);border-color:var(--button-link-compact-border-color)}", G = class extends U {
	constructor(...e) {
		super(...e), this.variant = "primary", this.compact = !1;
	}
	static {
		this.styles = [U.styles, B(ze)];
	}
	getClassNames() {
		return v(super.getClassNames(), "button", this.variant, this.compact && "compact");
	}
};
H([_({ type: String })], G.prototype, "variant", void 0), H([_({ type: Boolean })], G.prototype, "compact", void 0), G = H([e("jet2-button-link")], G);
//#endregion
//#region lib/components/information/Alert/Alert.scss?inline
var Be = ":host{padding:var(--alert-base-padding);border:var(--alert-base-border);border-radius:var(--alert-base-border-radius);background-color:var(--alert-base-background-color);color:var(--alert-base-text-color);font:var(--alert-base-text);text-align:left;display:flex}:host([variant=error]){border-color:var(--alert-error-border-color);background-color:var(--alert-error-background-color)}:host([variant=warning]){border-color:var(--alert-warning-border-color);background-color:var(--alert-warning-background-color)}:host([variant=success]){border-color:var(--alert-success-border-color);background-color:var(--alert-success-background-color)}:host([variant=info]){border-color:var(--alert-info-border-color);background-color:var(--alert-info-background-color)}.alert-content{gap:var(--alert-title-margin-bottom);flex-direction:column;align-items:flex-start;display:flex}.alert-title{font:var(--alert-title-text);color:var(--alert-title-text-color);margin:0}.alert-description{margin:0;padding:0}.alert-icon{margin-right:var(--alert-icon-base-margin-right);color:var(--alert-icon-color);flex-shrink:0}:host([variant=error]) svg{color:var(--alert-icon-error-color)}:host([variant=warning]) svg{color:var(--alert-icon-warning-color)}:host([variant=success]) svg{color:var(--alert-icon-success-color)}:host([variant=info]) svg{color:var(--alert-icon-info-color)}", Ve = ":host{display:flex}.base{box-sizing:content-box}.primary{color:var(--icon-color-primary)}.secondary{color:var(--icon-color-secondary)}.info{color:var(--icon-color-info)}.success{color:var(--icon-color-success)}.warning{color:var(--icon-color-warning)}.critical{color:var(--icon-color-critical)}.inverse{color:var(--icon-color-inverse)}.theme{color:var(--icon-color-theme)}.sm{width:var(--icon-size-sm);height:var(--icon-size-sm)}.md{width:var(--icon-size-md);height:var(--icon-size-md)}.lg{width:var(--icon-size-lg);height:var(--icon-size-lg)}.featured{background-color:var(--icon-featured-base-background-color);border-radius:var(--icon-featured-base-border-radius);padding:var(--icon-featured-md-padding);justify-content:center;align-items:center;display:flex}.featured.sm{padding:var(--icon-featured-sm-padding)}.featured.md{padding:var(--icon-featured-md-padding)}.featured.lg{padding:var(--icon-featured-lg-padding)}", K = class extends z {
	constructor(...e) {
		super(...e), this.size = "md";
	}
	static {
		this.styles = B(Ve);
	}
	get svg() {
		return A``;
	}
	get class() {
		return v(this.size && `${this.size}`, this.variant && `${this.variant}`);
	}
	render() {
		return this.featured ? k`<span class="featured">${this.svg}</span>` : this.svg;
	}
};
H([_({
	type: String,
	reflect: !0
})], K.prototype, "size", void 0), H([_({
	type: String,
	reflect: !0
})], K.prototype, "variant", void 0), H([_({ type: Boolean })], K.prototype, "featured", void 0);
//#endregion
//#region lib/icons/info.ts
var q = class extends K {
	get svg() {
		return A`
<svg class=${this.class} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17716 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM11.25 13.75C11.25 13.9158 11.1842 14.0747 11.0669 14.1919C10.9497 14.3092 10.7908 14.375 10.625 14.375C10.2935 14.375 9.97554 14.2433 9.74112 14.0089C9.5067 13.7745 9.375 13.4565 9.375 13.125V10C9.20924 10 9.05027 9.93415 8.93306 9.81694C8.81585 9.69973 8.75 9.54076 8.75 9.375C8.75 9.20924 8.81585 9.05027 8.93306 8.93306C9.05027 8.81585 9.20924 8.75 9.375 8.75C9.70652 8.75 10.0245 8.8817 10.2589 9.11612C10.4933 9.35054 10.625 9.66848 10.625 10V13.125C10.7908 13.125 10.9497 13.1908 11.0669 13.3081C11.1842 13.4253 11.25 13.5842 11.25 13.75ZM8.75 6.5625C8.75 6.37708 8.80499 6.19582 8.908 6.04165C9.01101 5.88748 9.15743 5.76732 9.32874 5.69636C9.50004 5.62541 9.68854 5.60684 9.8704 5.64301C10.0523 5.67919 10.2193 5.76848 10.3504 5.89959C10.4815 6.0307 10.5708 6.19775 10.607 6.3796C10.6432 6.56146 10.6246 6.74996 10.5536 6.92127C10.4827 7.09257 10.3625 7.23899 10.2084 7.342C10.0542 7.44502 9.87292 7.5 9.6875 7.5C9.43886 7.5 9.20041 7.40123 9.02459 7.22541C8.84878 7.0496 8.75 6.81114 8.75 6.5625Z" fill="currentColor"/>
</svg>
    `;
	}
};
q = H([e("jet2-icon-info")], q);
//#endregion
//#region lib/icons/check.ts
var J = class extends K {
	get svg() {
		return A`
<svg class=${this.class} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9422 6.06718L7.94219 16.0672C7.88414 16.1253 7.81521 16.1714 7.73934 16.2028C7.66346 16.2343 7.58213 16.2505 7.5 16.2505C7.41787 16.2505 7.33654 16.2343 7.26066 16.2028C7.18479 16.1714 7.11586 16.1253 7.05781 16.0672L2.68281 11.6922C2.56554 11.5749 2.49965 11.4158 2.49965 11.25C2.49965 11.0841 2.56554 10.9251 2.68281 10.8078C2.80009 10.6905 2.95915 10.6246 3.125 10.6246C3.29085 10.6246 3.44991 10.6905 3.56719 10.8078L7.5 14.7414L17.0578 5.18281C17.1751 5.06553 17.3341 4.99965 17.5 4.99965C17.6659 4.99965 17.8249 5.06553 17.9422 5.18281C18.0595 5.30008 18.1253 5.45914 18.1253 5.625C18.1253 5.79085 18.0595 5.94991 17.9422 6.06718Z" fill="currentColor"/>
</svg>
    `;
	}
};
J = H([e("jet2-icon-check")], J);
//#endregion
//#region lib/icons/warning-circle.ts
var Y = class extends K {
	get svg() {
		return A`
<svg class=${this.class} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17716 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM9.375 10.625V6.25C9.375 6.08424 9.44085 5.92527 9.55806 5.80806C9.67527 5.69085 9.83424 5.625 10 5.625C10.1658 5.625 10.3247 5.69085 10.4419 5.80806C10.5592 5.92527 10.625 6.08424 10.625 6.25V10.625C10.625 10.7908 10.5592 10.9497 10.4419 11.0669C10.3247 11.1842 10.1658 11.25 10 11.25C9.83424 11.25 9.67527 11.1842 9.55806 11.0669C9.44085 10.9497 9.375 10.7908 9.375 10.625ZM10.9375 13.4375C10.9375 13.6229 10.8825 13.8042 10.7795 13.9583C10.6765 14.1125 10.5301 14.2327 10.3588 14.3036C10.1875 14.3746 9.99896 14.3932 9.81711 14.357C9.63525 14.3208 9.4682 14.2315 9.33709 14.1004C9.20598 13.9693 9.11669 13.8023 9.08052 13.6204C9.04434 13.4385 9.06291 13.25 9.13387 13.0787C9.20482 12.9074 9.32499 12.761 9.47916 12.658C9.63333 12.555 9.81458 12.5 10 12.5C10.2486 12.5 10.4871 12.5988 10.6629 12.7746C10.8387 12.9504 10.9375 13.1889 10.9375 13.4375Z" fill="currentColor"/>
</svg>
    `;
	}
};
Y = H([e("jet2-icon-warning-circle")], Y);
//#endregion
//#region lib/components/information/Alert/Alert.ts
var X = class extends z {
	constructor(...e) {
		super(...e), this.variant = "info";
	}
	static {
		this.styles = B(Be);
	}
	get icon() {
		let e = `--alert-icon-color: var(--alert-icon-${this.variant}-color)`;
		switch (this.variant) {
			case "success": return k`<jet2-icon-check
          class="alert-icon"
          style=${e}
          size="md"
        ></jet2-icon-check>`;
			case "warning":
			case "error": return k`<jet2-icon-warning-circle
          class="alert-icon"
          style=${e}
          size="md"
        ></jet2-icon-warning-circle>`;
			default: return k`<jet2-icon-info
          class="alert-icon"
          style=${e}
          size="md"
        ></jet2-icon-info>`;
		}
	}
	render() {
		return k`
      ${this.icon}
      <div class="alert-content">
        <div class="alert-title">
          <slot name="alert-title">Need title</slot>
        </div>
        <div class="alert-description">
          <slot name="alert-description"></slot>
        </div>
      </div>
    `;
	}
};
H([_({
	type: String,
	reflect: !0
})], X.prototype, "variant", void 0), X = H([e("jet2-alert")], X);
//#endregion
//#region lib/icons/arrow-up.ts
var Z = class extends K {
	get svg() {
		return A`
<svg class=${this.class} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0672 9.19219C16.0092 9.2503 15.9402 9.2964 15.8643 9.32785C15.7885 9.35931 15.7071 9.37549 15.625 9.37549C15.5429 9.37549 15.4615 9.35931 15.3857 9.32785C15.3098 9.2964 15.2409 9.2503 15.1828 9.19219L10.625 4.6336V16.875C10.625 17.0408 10.5592 17.1997 10.442 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83425 17.5 9.67528 17.4342 9.55807 17.3169C9.44086 17.1997 9.37501 17.0408 9.37501 16.875V4.6336L4.8172 9.19219C4.69992 9.30947 4.54086 9.37535 4.37501 9.37535C4.20916 9.37535 4.0501 9.30947 3.93282 9.19219C3.81555 9.07492 3.74966 8.91586 3.74966 8.75C3.74966 8.58415 3.81555 8.42509 3.93282 8.30782L9.55782 2.68282C9.61587 2.62471 9.6848 2.57861 9.76067 2.54715C9.83655 2.5157 9.91788 2.49951 10 2.49951C10.0821 2.49951 10.1635 2.5157 10.2393 2.54715C10.3152 2.57861 10.3842 2.62471 10.4422 2.68282L16.0672 8.30782C16.1253 8.36586 16.1714 8.43479 16.2029 8.51067C16.2343 8.58654 16.2505 8.66787 16.2505 8.75C16.2505 8.83214 16.2343 8.91347 16.2029 8.98934C16.1714 9.06522 16.1253 9.13415 16.0672 9.19219Z" fill="currentColor"/>
</svg>
    `;
	}
};
Z = H([e("jet2-icon-arrow-up")], Z);
//#endregion
//#region lib/icons/caret-down.ts
var Q = class extends K {
	get svg() {
		return A`
<svg class=${this.class} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6922 7.94218L10.4422 14.1922C10.3841 14.2503 10.3152 14.2964 10.2393 14.3278C10.1635 14.3593 10.0821 14.3755 10 14.3755C9.91786 14.3755 9.83653 14.3593 9.76066 14.3278C9.68478 14.2964 9.61585 14.2503 9.55781 14.1922L3.30781 7.94218C3.19053 7.82491 3.12465 7.66585 3.12465 7.5C3.12465 7.33414 3.19053 7.17508 3.30781 7.05781C3.42508 6.94053 3.58414 6.87465 3.75 6.87465C3.91585 6.87465 4.07491 6.94053 4.19218 7.05781L10 12.8664L15.8078 7.05781C15.8659 6.99974 15.9348 6.95368 16.0107 6.92225C16.0866 6.89082 16.1679 6.87465 16.25 6.87465C16.3321 6.87465 16.4134 6.89082 16.4893 6.92225C16.5652 6.95368 16.6341 6.99974 16.6922 7.05781C16.7503 7.11588 16.7963 7.18482 16.8277 7.26069C16.8592 7.33656 16.8753 7.41787 16.8753 7.5C16.8753 7.58212 16.8592 7.66344 16.8277 7.73931C16.7963 7.81518 16.7503 7.88412 16.6922 7.94218Z" fill="currentColor"/>
</svg>
    `;
	}
};
Q = H([e("jet2-icon-caret-down")], Q);
//#endregion
//#region lib/icons/magnifying-glass.ts
var He = class extends K {
	get svg() {
		return A`
<svg class=${this.class} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9422 17.0578L14.0305 13.1469C15.1642 11.7857 15.7296 10.0398 15.6089 8.27244C15.4883 6.50506 14.6909 4.85223 13.3826 3.65779C12.0744 2.46335 10.356 1.81926 8.58493 1.85951C6.81388 1.89976 5.12653 2.62125 3.87389 3.87389C2.62125 5.12653 1.89976 6.81388 1.85951 8.58492C1.81926 10.356 2.46335 12.0744 3.65779 13.3826C4.85223 14.6909 6.50506 15.4883 8.27245 15.6089C10.0398 15.7296 11.7857 15.1642 13.1469 14.0305L17.0578 17.9422C17.1159 18.0003 17.1848 18.0463 17.2607 18.0777C17.3366 18.1092 17.4179 18.1253 17.5 18.1253C17.5821 18.1253 17.6634 18.1092 17.7393 18.0777C17.8152 18.0463 17.8841 18.0003 17.9422 17.9422C18.0003 17.8841 18.0463 17.8152 18.0777 17.7393C18.1092 17.6634 18.1254 17.5821 18.1254 17.5C18.1254 17.4179 18.1092 17.3366 18.0777 17.2607C18.0463 17.1848 18.0003 17.1159 17.9422 17.0578ZM3.125 8.75C3.125 7.63748 3.4549 6.54994 4.07298 5.62491C4.69107 4.69989 5.56957 3.97892 6.59741 3.55317C7.62524 3.12743 8.75624 3.01604 9.84738 3.23308C10.9385 3.45012 11.9408 3.98585 12.7275 4.77252C13.5141 5.55919 14.0499 6.56147 14.2669 7.65261C14.484 8.74376 14.3726 9.87476 13.9468 10.9026C13.5211 11.9304 12.8001 12.8089 11.8751 13.427C10.9501 14.0451 9.86252 14.375 8.75 14.375C7.25867 14.3733 5.82889 13.7802 4.77435 12.7256C3.71982 11.6711 3.12665 10.2413 3.125 8.75Z" fill="currentColor"/>
</svg>
    `;
	}
};
He = H([e("jet2-icon-magnifying-glass")], He);
//#endregion
//#region lib/icons/x.ts
var $ = class extends K {
	get svg() {
		return A`
<svg class=${this.class} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0672 15.1828C16.1253 15.2409 16.1713 15.3098 16.2027 15.3857C16.2342 15.4616 16.2503 15.5429 16.2503 15.625C16.2503 15.7071 16.2342 15.7884 16.2027 15.8643C16.1713 15.9402 16.1253 16.0091 16.0672 16.0672C16.0091 16.1253 15.9402 16.1713 15.8643 16.2027C15.7884 16.2342 15.7071 16.2503 15.625 16.2503C15.5429 16.2503 15.4616 16.2342 15.3857 16.2027C15.3098 16.1713 15.2409 16.1253 15.1828 16.0672L10 10.8836L4.81719 16.0672C4.69991 16.1845 4.54085 16.2503 4.375 16.2503C4.20915 16.2503 4.05009 16.1845 3.93281 16.0672C3.81554 15.9499 3.74965 15.7908 3.74965 15.625C3.74965 15.4591 3.81554 15.3001 3.93281 15.1828L9.11641 10L3.93281 4.81718C3.81554 4.69991 3.74965 4.54085 3.74965 4.375C3.74965 4.20914 3.81554 4.05008 3.93281 3.93281C4.05009 3.81553 4.20915 3.74965 4.375 3.74965C4.54085 3.74965 4.69991 3.81553 4.81719 3.93281L10 9.1164L15.1828 3.93281C15.3001 3.81553 15.4591 3.74965 15.625 3.74965C15.7909 3.74965 15.9499 3.81553 16.0672 3.93281C16.1845 4.05008 16.2503 4.20914 16.2503 4.375C16.2503 4.54085 16.1845 4.69991 16.0672 4.81718L10.8836 10L16.0672 15.1828Z" fill="currentColor"/>
</svg>
    `;
	}
};
$ = H([e("jet2-icon-x")], $);
//#endregion
export { X as Jet2Alert, W as Jet2Button, G as Jet2ButtonLink, Z as Jet2IconArrowUp, Q as Jet2IconCaretDown, J as Jet2IconCheck, q as Jet2IconInfo, He as Jet2IconMagnifyingGlass, Y as Jet2IconWarningCircle, $ as Jet2IconX };
