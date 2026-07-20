//#region node_modules/lit-html/lit-html.js
var e = globalThis, t = (e) => e, n = e.trustedTypes, r = n ? n.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, i = "$lit$", a = `lit$${Math.random().toFixed(9).slice(2)}$`, o = "?" + a, s = `<${o}>`, c = document, l = () => c.createComment(""), u = (e) => e === null || typeof e != "object" && typeof e != "function", d = Array.isArray, f = (e) => d(e) || typeof e?.[Symbol.iterator] == "function", p = "[ 	\n\f\r]", m = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, h = /-->/g, g = />/g, _ = RegExp(`>|${p}(?:([^\\s"'>=/]+)(${p}*=${p}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), v = /'/g, y = /"/g, b = /^(?:script|style|textarea|title)$/i, x = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), S = x(1), C = x(2), w = x(3), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), D = /* @__PURE__ */ new WeakMap(), O = c.createTreeWalker(c, 129);
function k(e, t) {
	if (!d(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return r === void 0 ? t : r.createHTML(t);
}
var A = (e, t) => {
	let n = e.length - 1, r = [], o, c = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", l = m;
	for (let t = 0; t < n; t++) {
		let n = e[t], u, d, f = -1, p = 0;
		for (; p < n.length && (l.lastIndex = p, d = l.exec(n), d !== null);) p = l.lastIndex, l === m ? d[1] === "!--" ? l = h : d[1] === void 0 ? d[2] === void 0 ? d[3] !== void 0 && (l = _) : (b.test(d[2]) && (o = RegExp("</" + d[2], "g")), l = _) : l = g : l === _ ? d[0] === ">" ? (l = o ?? m, f = -1) : d[1] === void 0 ? f = -2 : (f = l.lastIndex - d[2].length, u = d[1], l = d[3] === void 0 ? _ : d[3] === "\"" ? y : v) : l === y || l === v ? l = _ : l === h || l === g ? l = m : (l = _, o = void 0);
		let x = l === _ && e[t + 1].startsWith("/>") ? " " : "";
		c += l === m ? n + s : f >= 0 ? (r.push(u), n.slice(0, f) + i + n.slice(f) + a + x) : n + a + (f === -2 ? t : x);
	}
	return [k(e, c + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, j = class e {
	constructor({ strings: t, _$litType$: r }, s) {
		let c;
		this.parts = [];
		let u = 0, d = 0, f = t.length - 1, p = this.parts, [m, h] = A(t, r);
		if (this.el = e.createElement(m, s), O.currentNode = this.el.content, r === 2 || r === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (c = O.nextNode()) !== null && p.length < f;) {
			if (c.nodeType === 1) {
				if (c.hasAttributes()) for (let e of c.getAttributeNames()) if (e.endsWith(i)) {
					let t = h[d++], n = c.getAttribute(e).split(a), r = /([.?@])?(.*)/.exec(t);
					p.push({
						type: 1,
						index: u,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? I : r[1] === "?" ? L : r[1] === "@" ? R : F
					}), c.removeAttribute(e);
				} else e.startsWith(a) && (p.push({
					type: 6,
					index: u
				}), c.removeAttribute(e));
				if (b.test(c.tagName)) {
					let e = c.textContent.split(a), t = e.length - 1;
					if (t > 0) {
						c.textContent = n ? n.emptyScript : "";
						for (let n = 0; n < t; n++) c.append(e[n], l()), O.nextNode(), p.push({
							type: 2,
							index: ++u
						});
						c.append(e[t], l());
					}
				}
			} else if (c.nodeType === 8) if (c.data === o) p.push({
				type: 2,
				index: u
			});
			else {
				let e = -1;
				for (; (e = c.data.indexOf(a, e + 1)) !== -1;) p.push({
					type: 7,
					index: u
				}), e += a.length - 1;
			}
			u++;
		}
	}
	static createElement(e, t) {
		let n = c.createElement("template");
		return n.innerHTML = e, n;
	}
};
function M(e, t, n = e, r) {
	if (t === T) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = u(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = M(e, i._$AS(e, t.values), i, r)), t;
}
var N = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? c).importNode(t, !0);
		O.currentNode = r;
		let i = O.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new P(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new z(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = O.nextNode(), a++);
		}
		return O.currentNode = c, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, P = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
		e = M(this, e, t), u(e) ? e === E || e == null || e === "" ? (this._$AH !== E && this._$AR(), this._$AH = E) : e !== this._$AH && e !== T && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? f(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== E && u(this._$AH) ? this._$AA.nextSibling.data = e : this.T(c.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = j.createElement(k(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new N(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = D.get(e.strings);
		return t === void 0 && D.set(e.strings, t = new j(e)), t;
	}
	k(t) {
		d(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(l()), this.O(l()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, n) {
		for (this._$AP?.(!1, !0, n); e !== this._$AB;) {
			let n = t(e).nextSibling;
			t(e).remove(), e = n;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, F = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = E, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = E;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = M(this, e, t, 0), a = !u(e) || e !== this._$AH && e !== T, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = M(this, r[n + o], t, o), s === T && (s = this._$AH[o]), a ||= !u(s) || s !== this._$AH[o], s === E ? e = E : e !== E && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, I = class extends F {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === E ? void 0 : e;
	}
}, L = class extends F {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== E);
	}
}, R = class extends F {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = M(this, e, t, 0) ?? E) === T) return;
		let n = this._$AH, r = e === E && n !== E || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== E && (n === E || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, z = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		M(this, e);
	}
}, B = e.litHtmlPolyfillSupport;
B?.(j, P), (e.litHtmlVersions ??= []).push("3.3.3");
//#endregion
export { C as i, w as n, S as r, E as t };
