import { S as e, _ as t, a as n, b as r, c as i, d as a, f as o, g as s, h as c, i as l, l as u, m as d, n as f, o as p, p as m, r as h, s as g, t as _, u as v, v as y, x as b, y as x } from "./core.js";
//#region lib/components/actions/Button/Button.scss?inline
var S = ".button{text-decoration:none}.button.primary{color:var(--button-primary-default-text-color);background-color:var(--button-primary-default-background-color);border:var(--button-base-border) var(--button-primary-default-border-color)}.button.primary:hover{background-color:var(--button-primary-hover-background-color);border-color:var(--button-primary-hover-border-color)}.button.primary:active{background-color:var(--button-primary-active-background-color);border-color:var(--button-primary-active-border-color)}.button.primary.disabled,.button.primary.loading{color:var(--button-primary-disabled-text-color);background-color:var(--button-primary-disabled-background-color);border-color:var(--button-primary-disabled-border-color)}.button.secondary{color:var(--button-secondary-default-text-color);background-color:var(--button-secondary-default-background-color);border:var(--button-base-border) var(--button-secondary-default-border-color)}.button.secondary:hover{color:var(--button-secondary-hover-text-color);background-color:var(--button-secondary-hover-background-color)}.button.secondary:active{color:var(--button-secondary-active-text-color);background-color:var(--button-secondary-active-background-color)}.button.secondary.disabled,.button.secondary.loading{color:var(--button-secondary-disabled-text-color);background-color:var(--button-secondary-disabled-background-color);border-color:var(--button-secondary-disabled-border-color)}.button.critical{color:var(--button-critical-default-text-color);background-color:var(--button-critical-default-background-color);border:var(--button-base-border) var(--button-critical-default-border-color)}.button.critical:hover{background-color:var(--button-critical-hover-background-color);border-color:var(--button-critical-hover-border-color)}.button.critical:active{background-color:var(--button-critical-active-background-color);border-color:var(--button-critical-active-border-color)}.button.critical.disabled,.button.critical.loading{color:var(--button-critical-disabled-text-color);background-color:var(--button-critical-disabled-background-color);border-color:var(--button-critical-disabled-border-color)}.button.icon-only,.button.icon-only:focus-visible:after{border-radius:var(--button-icon-only-base-border-radius)}", C = class extends n {
	constructor(...e) {
		super(...e), this.variant = "primary";
	}
	static {
		this.styles = [n.styles, u(S)];
	}
	getClassNames() {
		return i(super.getClassNames(), "button", this.variant);
	}
};
g([d({ type: String })], C.prototype, "variant", void 0), C = g([c("jet2-button")], C);
//#endregion
//#region lib/components/information/Alert/Alert.scss?inline
var w = ":host{padding:var(--alert-base-padding);border:var(--alert-base-border);border-radius:var(--alert-base-border-radius);background-color:var(--alert-base-background-color);color:var(--alert-base-text-color);font:var(--alert-base-text);text-align:left;display:flex}:host([variant=error]){border-color:var(--alert-error-border-color);background-color:var(--alert-error-background-color)}:host([variant=warning]){border-color:var(--alert-warning-border-color);background-color:var(--alert-warning-background-color)}:host([variant=success]){border-color:var(--alert-success-border-color);background-color:var(--alert-success-background-color)}:host([variant=info]){border-color:var(--alert-info-border-color);background-color:var(--alert-info-background-color)}.alert-content{gap:var(--alert-title-margin-bottom);flex-direction:column;align-items:flex-start;display:flex}.alert-title{font:var(--alert-title-text);color:var(--alert-title-text-color);margin:0}.alert-description{margin:0;padding:0}.alert-icon{margin-right:var(--alert-icon-base-margin-right);color:var(--alert-icon-color);flex-shrink:0}:host([variant=error]) svg{color:var(--alert-icon-error-color)}:host([variant=warning]) svg{color:var(--alert-icon-warning-color)}:host([variant=success]) svg{color:var(--alert-icon-success-color)}:host([variant=info]) svg{color:var(--alert-icon-info-color)}", T, E = class extends s {
	static {
		T = this;
	}
	constructor(...e) {
		super(...e), this.variant = "info";
	}
	static {
		this.styles = u(w);
	}
	static {
		this.iconTags = {
			info: _`jet2-icon-info`,
			success: _`jet2-icon-check`,
			warning: _`jet2-icon-warning-circle`,
			error: _`jet2-icon-warning-circle`
		};
	}
	get icon() {
		let e = T.iconTags[this.variant] ?? T.iconTags.info;
		return h`<${e}
      class="alert-icon"
      style="--alert-icon-color: var(--alert-icon-${this.variant}-color)"
      size="md"
    ></${e}>`;
	}
	render() {
		return h`
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
g([d({
	type: String,
	reflect: !0
})], E.prototype, "variant", void 0), E = T = g([c("jet2-alert")], E);
//#endregion
export { n as ButtonFoundation, E as Jet2Alert, C as Jet2Button, p as Jet2ButtonBase, s as Jet2Element, l as Jet2IconBase, t as LitElement, i as clsx, b as css, c as customElement, x as html, v as ifDefined, _ as literal, y as nothing, d as property, o as query, a as queryAssignedElements, m as state, h as staticHtml, u as styleSheet, r as svg, e as unsafeCSS, f as unsafeStatic };
