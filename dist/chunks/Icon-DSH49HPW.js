import { t as e } from "./decorate-DyMgX_Uh.js";
import { LitElement as t, css as n, html as r, svg as i, unsafeCSS as a } from "lit";
import { property as o } from "lit/decorators.js";
import s from "clsx";
//#region lib/components/visuals/Icon/Icon.scss?inline
var c = ":host{display:flex}.base{box-sizing:content-box}.primary{color:var(--icon-color-primary)}.secondary{color:var(--icon-color-secondary)}.info{color:var(--icon-color-info)}.success{color:var(--icon-color-success)}.warning{color:var(--icon-color-warning)}.critical{color:var(--icon-color-critical)}.inverse{color:var(--icon-color-inverse)}.theme{color:var(--icon-color-theme)}.sm{width:var(--icon-size-sm);height:var(--icon-size-sm)}.md{width:var(--icon-size-md);height:var(--icon-size-md)}.lg{width:var(--icon-size-lg);height:var(--icon-size-lg)}.featured{background-color:var(--icon-featured-base-background-color);border-radius:var(--icon-featured-base-border-radius);padding:var(--icon-featured-md-padding);justify-content:center;align-items:center;display:flex}.featured.sm{padding:var(--icon-featured-sm-padding)}.featured.md{padding:var(--icon-featured-md-padding)}.featured.lg{padding:var(--icon-featured-lg-padding)}", l = class extends t {
	constructor(...e) {
		super(...e), this.size = "md";
	}
	static {
		this.styles = n`
    ${a(c)}
  `;
	}
	get svg() {
		return i``;
	}
	get class() {
		return s(this.size && `${this.size}`, this.variant && `${this.variant}`);
	}
	render() {
		return this.featured ? r`<span class="featured">${this.svg}</span>` : this.svg;
	}
};
e([o({
	type: String,
	reflect: !0
})], l.prototype, "size", void 0), e([o({
	type: String,
	reflect: !0
})], l.prototype, "variant", void 0), e([o({ type: Boolean })], l.prototype, "featured", void 0);
//#endregion
export { l as t };
