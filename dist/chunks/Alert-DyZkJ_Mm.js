import { r as e } from "./lit-html-BKNBDFRE.js";
import { t } from "./decorate-DyMgX_Uh.js";
import "../icons/info.js";
import "../icons/check.js";
import "../icons/warning-circle.js";
import { LitElement as n, css as r, unsafeCSS as i } from "lit";
import { customElement as a, property as o } from "lit/decorators.js";
//#region lib/components/information/Alert/Alert.scss?inline
var s = ":host{padding:var(--alert-base-padding);border:var(--alert-base-border);border-radius:var(--alert-base-border-radius);background-color:var(--alert-base-background-color);color:var(--alert-base-text-color);font:var(--alert-base-text);text-align:left;display:flex}:host([variant=error]){border-color:var(--alert-error-border-color);background-color:var(--alert-error-background-color)}:host([variant=warning]){border-color:var(--alert-warning-border-color);background-color:var(--alert-warning-background-color)}:host([variant=success]){border-color:var(--alert-success-border-color);background-color:var(--alert-success-background-color)}:host([variant=info]){border-color:var(--alert-info-border-color);background-color:var(--alert-info-background-color)}.alert-content{gap:var(--alert-title-margin-bottom);flex-direction:column;align-items:flex-start;display:flex}.alert-title{font:var(--alert-title-text);color:var(--alert-title-text-color);margin:0}.alert-description{margin:0;padding:0}.alert-icon{margin-right:var(--alert-icon-base-margin-right);color:var(--alert-icon-color);flex-shrink:0}:host([variant=error]) svg{color:var(--alert-icon-error-color)}:host([variant=warning]) svg{color:var(--alert-icon-warning-color)}:host([variant=success]) svg{color:var(--alert-icon-success-color)}:host([variant=info]) svg{color:var(--alert-icon-info-color)}", c = Symbol.for(""), l = (e) => {
	if (e?.r === c) return e?._$litStatic$;
}, u = (e, ...t) => ({
	_$litStatic$: t.reduce((t, n, r) => t + ((e) => {
		if (e._$litStatic$ !== void 0) return e._$litStatic$;
		throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`);
	})(n) + e[r + 1], e[0]),
	r: c
}), d = /* @__PURE__ */ new Map(), f = ((e) => (t, ...n) => {
	let r = n.length, i, a, o = [], s = [], c, u = 0, f = !1;
	for (; u < r;) {
		for (c = t[u]; u < r && (a = n[u], i = l(a)) !== void 0;) c += i + t[++u], f = !0;
		u !== r && s.push(a), o.push(c), u++;
	}
	if (u === r && o.push(t[r]), f) {
		let e = o.join("$$lit$$");
		(t = d.get(e)) === void 0 && (o.raw = o, d.set(e, t = o)), n = s;
	}
	return e(t, ...n);
})(e), p, m = class extends n {
	static {
		p = this;
	}
	constructor(...e) {
		super(...e), this.variant = "info";
	}
	static {
		this.styles = r`
    ${i(s)}
  `;
	}
	static {
		this.iconTags = {
			info: u`jet2-icon-info`,
			success: u`jet2-icon-check`,
			warning: u`jet2-icon-warning-circle`,
			error: u`jet2-icon-warning-circle`
		};
	}
	get icon() {
		let e = p.iconTags[this.variant] ?? p.iconTags.info;
		return f`<${e}
      class="alert-icon"
      style="--alert-icon-color: var(--alert-icon-${this.variant}-color)"
      size="md"
    ></${e}>`;
	}
	render() {
		return f`
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
t([o({
	type: String,
	reflect: !0
})], m.prototype, "variant", void 0), m = p = t([a("jet2-alert")], m);
var h = m;
//#endregion
export { m as n, h as t };
