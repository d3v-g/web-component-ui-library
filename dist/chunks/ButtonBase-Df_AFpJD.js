import { t as e } from "./lit-html-BKNBDFRE.js";
import { t } from "./decorate-DyMgX_Uh.js";
import { LitElement as n, css as r, html as i, nothing as a, unsafeCSS as o } from "lit";
import { customElement as s, property as c, queryAssignedElements as l } from "lit/decorators.js";
import u from "clsx";
//#region node_modules/lit-html/directives/if-defined.js
var d = (t) => t ?? e, f = ".base{color:var(--color-slate-base);border-radius:var(--button-base-border-radius);border:var(--button-base-border) transparent;transition:background-color var(--button-base-transition), border-color var(--button-base-transition);appearance:none;-webkit-user-select:none;user-select:none;vertical-align:bottom;cursor:pointer;background:0 0;outline:none;justify-content:center;align-items:center;margin:0;display:inline-flex;position:relative}.base.disabled{cursor:not-allowed}.base.loading{cursor:wait}.base:focus-visible{outline:2px solid var(--button-base-focus-color);outline-offset:2px}.base:focus-visible:after{content:\"\";pointer-events:none;outline:2px solid var(--color-white-base);outline-offset:5px;border-radius:5px;position:absolute;inset:0}.base ::slotted(jet2-icon){color:inherit;display:flex}.loading .base ::slotted(jet2-icon){visibility:hidden}.sm{font:var(--button-sm-text);padding:var(--button-sm-padding);gap:var(--button-sm-gap)}.sm.icon-only{padding:var(--button-icon-only-sm-padding)}.md{font:var(--button-md-text);padding:var(--button-md-padding);gap:var(--button-md-gap)}.md.icon-only{padding:var(--button-icon-only-md-padding)}.lg{font:var(--button-lg-text);padding:var(--button-lg-padding);gap:var(--button-lg-gap)}.lg.icon-only{padding:var(--button-icon-only-lg-padding)}.loading .label,.label.icon-only{visibility:hidden}.label.justify{margin-right:auto}.loader{justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;inset:0}", p = class extends n {
	constructor(...e) {
		super(...e), this.label = "", this.size = "md", this.disabled = !1, this.loading = !1, this.iconOnly = !1;
	}
	static {
		this.styles = r`
    ${o(f)}
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
		return u("base", this.size, {
			disabled: this.disabled,
			loading: this.loading,
			"icon-only": this.iconOnly
		});
	}
	renderContent() {
		return i`
      <slot name="primary"></slot>

      ${this.iconOnly ? a : i`<span class="label">${this.label}</span>`}

      <slot name="secondary"></slot>
    `;
	}
	renderButton() {
		return i`
      <button
        type="button"
        class=${this.getClassNames()}
        ?disabled=${this.isDisabled}
        aria-disabled=${d(this.isDisabled || void 0)}
        aria-busy=${d(this.loading || void 0)}
        aria-label=${d(this.semanticLabel || void 0)}
      >
        ${this.renderContent()}
      </button>
    `;
	}
	renderAnchor() {
		return i`
      <a
        class=${this.getClassNames()}
        href=${d(this.href || void 0)}
        target=${d(this.target || void 0)}
        rel=${d(this.rel || void 0)}
        aria-busy=${d(this.loading || void 0)}
        aria-label=${d(this.semanticLabel || void 0)}
      >
        ${this.renderContent()}
      </a>
    `;
	}
	render() {
		return this.href ? this.renderAnchor() : this.renderButton();
	}
};
t([c({ type: String })], p.prototype, "label", void 0), t([c({ type: String })], p.prototype, "size", void 0), t([c({ type: Boolean })], p.prototype, "disabled", void 0), t([c({ type: Boolean })], p.prototype, "loading", void 0), t([c({
	type: Boolean,
	attribute: "icon-only"
})], p.prototype, "iconOnly", void 0), t([c({ type: String })], p.prototype, "href", void 0), t([c({ type: String })], p.prototype, "target", void 0), t([c({ type: String })], p.prototype, "rel", void 0), t([l({ slot: "primary" })], p.prototype, "primaryIcons", void 0), t([l({ slot: "secondary" })], p.prototype, "secondaryIcons", void 0);
var m = class extends p {};
m = t([s("jet2-button-base")], m);
//#endregion
export { m as n, p as t };
