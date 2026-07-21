import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./core.js";
//#region lib/components/actions/ButtonBase/ButtonBase.scss?inline
var b = ".base{color:var(--color-slate-base);border-radius:var(--button-base-border-radius);border:var(--button-base-border) transparent;transition:background-color var(--button-base-transition), border-color var(--button-base-transition);appearance:none;-webkit-user-select:none;user-select:none;vertical-align:bottom;cursor:pointer;background:0 0;outline:none;justify-content:center;align-items:center;margin:0;display:inline-flex;position:relative}.base.disabled{cursor:not-allowed}.base.loading{cursor:wait}.base:focus-visible{outline:2px solid var(--button-base-focus-color);outline-offset:2px}.base:focus-visible:after{content:\"\";pointer-events:none;outline:2px solid var(--color-white-base);outline-offset:5px;border-radius:5px;position:absolute;inset:0}.base ::slotted(jet2-icon){color:inherit;display:flex}.loading .base ::slotted(jet2-icon){visibility:hidden}.sm{font:var(--button-sm-text);padding:var(--button-sm-padding);gap:var(--button-sm-gap)}.sm.icon-only{padding:var(--button-icon-only-sm-padding)}.md{font:var(--button-md-text);padding:var(--button-md-padding);gap:var(--button-md-gap)}.md.icon-only{padding:var(--button-icon-only-md-padding)}.lg{font:var(--button-lg-text);padding:var(--button-lg-padding);gap:var(--button-lg-gap)}.lg.icon-only{padding:var(--button-icon-only-lg-padding)}.loading .label,.label.icon-only{visibility:hidden}.label.justify{margin-right:auto}.loader{justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;inset:0}", x = class extends s {
	constructor(...e) {
		super(...e), this.label = "", this.size = "md", this.disabled = !1, this.loading = !1, this.iconOnly = !1;
	}
	static {
		this.styles = y`
    ${n(b)}
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
		return h("base", this.size, {
			disabled: this.disabled,
			loading: this.loading,
			"icon-only": this.iconOnly
		});
	}
	renderContent() {
		return e`
      <slot name="primary"></slot>

      ${this.iconOnly ? o : e`<span class="label">${this.label}</span>`}

      <slot name="secondary"></slot>
    `;
	}
	renderButton() {
		return e`
      <button
        type="button"
        class=${this.getClassNames()}
        ?disabled=${this.isDisabled}
        aria-disabled=${c(this.isDisabled || void 0)}
        aria-busy=${c(this.loading || void 0)}
        aria-label=${c(this.semanticLabel || void 0)}
      >
        ${this.renderContent()}
      </button>
    `;
	}
	renderAnchor() {
		return e`
      <a
        class=${this.getClassNames()}
        href=${c(this.href || void 0)}
        target=${c(this.target || void 0)}
        rel=${c(this.rel || void 0)}
        aria-busy=${c(this.loading || void 0)}
        aria-label=${c(this.semanticLabel || void 0)}
      >
        ${this.renderContent()}
      </a>
    `;
	}
	render() {
		return this.href ? this.renderAnchor() : this.renderButton();
	}
};
f([p({ type: String })], x.prototype, "label", void 0), f([p({ type: String })], x.prototype, "size", void 0), f([p({ type: Boolean })], x.prototype, "disabled", void 0), f([p({ type: Boolean })], x.prototype, "loading", void 0), f([p({
	type: Boolean,
	attribute: "icon-only"
})], x.prototype, "iconOnly", void 0), f([p({ type: String })], x.prototype, "href", void 0), f([p({ type: String })], x.prototype, "target", void 0), f([p({ type: String })], x.prototype, "rel", void 0), f([_({ slot: "primary" })], x.prototype, "primaryIcons", void 0), f([_({ slot: "secondary" })], x.prototype, "secondaryIcons", void 0);
var S = class extends x {};
S = f([u("jet2-button-base")], S);
//#endregion
//#region lib/components/actions/Button/Button.scss?inline
var C = ".button{text-decoration:none}.button.primary{color:var(--button-primary-default-text-color);background-color:var(--button-primary-default-background-color);border:var(--button-base-border) var(--button-primary-default-border-color)}.button.primary:hover{background-color:var(--button-primary-hover-background-color);border-color:var(--button-primary-hover-border-color)}.button.primary:active{background-color:var(--button-primary-active-background-color);border-color:var(--button-primary-active-border-color)}.button.primary.disabled,.button.primary.loading{color:var(--button-primary-disabled-text-color);background-color:var(--button-primary-disabled-background-color);border-color:var(--button-primary-disabled-border-color)}.button.secondary{color:var(--button-secondary-default-text-color);background-color:var(--button-secondary-default-background-color);border:var(--button-base-border) var(--button-secondary-default-border-color)}.button.secondary:hover{color:var(--button-secondary-hover-text-color);background-color:var(--button-secondary-hover-background-color)}.button.secondary:active{color:var(--button-secondary-active-text-color);background-color:var(--button-secondary-active-background-color)}.button.secondary.disabled,.button.secondary.loading{color:var(--button-secondary-disabled-text-color);background-color:var(--button-secondary-disabled-background-color);border-color:var(--button-secondary-disabled-border-color)}.button.critical{color:var(--button-critical-default-text-color);background-color:var(--button-critical-default-background-color);border:var(--button-base-border) var(--button-critical-default-border-color)}.button.critical:hover{background-color:var(--button-critical-hover-background-color);border-color:var(--button-critical-hover-border-color)}.button.critical:active{background-color:var(--button-critical-active-background-color);border-color:var(--button-critical-active-border-color)}.button.critical.disabled,.button.critical.loading{color:var(--button-critical-disabled-text-color);background-color:var(--button-critical-disabled-background-color);border-color:var(--button-critical-disabled-border-color)}.button.icon-only,.button.icon-only:focus-visible:after{border-radius:var(--button-icon-only-base-border-radius)}", w = class extends x {
	constructor(...e) {
		super(...e), this.variant = "primary";
	}
	static {
		this.styles = [x.styles, r(C)];
	}
	getClassNames() {
		return h(super.getClassNames(), "button", this.variant);
	}
};
f([p({ type: String })], w.prototype, "variant", void 0), w = f([u("jet2-button")], w);
//#endregion
//#region lib/components/information/Alert/Alert.scss?inline
var T = ":host{padding:var(--alert-base-padding);border:var(--alert-base-border);border-radius:var(--alert-base-border-radius);background-color:var(--alert-base-background-color);color:var(--alert-base-text-color);font:var(--alert-base-text);text-align:left;display:flex}:host([variant=error]){border-color:var(--alert-error-border-color);background-color:var(--alert-error-background-color)}:host([variant=warning]){border-color:var(--alert-warning-border-color);background-color:var(--alert-warning-background-color)}:host([variant=success]){border-color:var(--alert-success-border-color);background-color:var(--alert-success-background-color)}:host([variant=info]){border-color:var(--alert-info-border-color);background-color:var(--alert-info-background-color)}.alert-content{gap:var(--alert-title-margin-bottom);flex-direction:column;align-items:flex-start;display:flex}.alert-title{font:var(--alert-title-text);color:var(--alert-title-text-color);margin:0}.alert-description{margin:0;padding:0}.alert-icon{margin-right:var(--alert-icon-base-margin-right);color:var(--alert-icon-color);flex-shrink:0}:host([variant=error]) svg{color:var(--alert-icon-error-color)}:host([variant=warning]) svg{color:var(--alert-icon-warning-color)}:host([variant=success]) svg{color:var(--alert-icon-success-color)}:host([variant=info]) svg{color:var(--alert-icon-info-color)}", E, D = class extends l {
	static {
		E = this;
	}
	constructor(...e) {
		super(...e), this.variant = "info";
	}
	static {
		this.styles = r(T);
	}
	static {
		this.iconTags = {
			info: g`jet2-icon-info`,
			success: g`jet2-icon-check`,
			warning: g`jet2-icon-warning-circle`,
			error: g`jet2-icon-warning-circle`
		};
	}
	get icon() {
		let e = E.iconTags[this.variant] ?? E.iconTags.info;
		return m`<${e}
      class="alert-icon"
      style="--alert-icon-color: var(--alert-icon-${this.variant}-color)"
      size="md"
    ></${e}>`;
	}
	render() {
		return m`
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
f([p({
	type: String,
	reflect: !0
})], D.prototype, "variant", void 0), D = E = f([u("jet2-alert")], D);
//#endregion
export { D as Jet2Alert, w as Jet2Button, l as Jet2Element, t as Jet2IconBase, s as LitElement, h as clsx, y as css, u as customElement, e as html, c as ifDefined, g as literal, o as nothing, p as property, i as query, _ as queryAssignedElements, a as state, m as staticHtml, r as styleSheet, v as svg, n as unsafeCSS, d as unsafeStatic };
