import { t as e } from "./ButtonBase-Df_AFpJD.js";
import { t } from "./decorate-DyMgX_Uh.js";
import { css as n, unsafeCSS as r } from "lit";
import { customElement as i, property as a } from "lit/decorators.js";
import o from "clsx";
//#region lib/components/actions/Button/Button.scss?inline
var s = ".button{text-decoration:none}.button.primary{color:var(--button-primary-default-text-color);background-color:var(--button-primary-default-background-color);border:var(--button-base-border) var(--button-primary-default-border-color)}.button.primary:hover{background-color:var(--button-primary-hover-background-color);border-color:var(--button-primary-hover-border-color)}.button.primary:active{background-color:var(--button-primary-active-background-color);border-color:var(--button-primary-active-border-color)}.button.primary.disabled,.button.primary.loading{color:var(--button-primary-disabled-text-color);background-color:var(--button-primary-disabled-background-color);border-color:var(--button-primary-disabled-border-color)}.button.secondary{color:var(--button-secondary-default-text-color);background-color:var(--button-secondary-default-background-color);border:var(--button-base-border) var(--button-secondary-default-border-color)}.button.secondary:hover{color:var(--button-secondary-hover-text-color);background-color:var(--button-secondary-hover-background-color)}.button.secondary:active{color:var(--button-secondary-active-text-color);background-color:var(--button-secondary-active-background-color)}.button.secondary.disabled,.button.secondary.loading{color:var(--button-secondary-disabled-text-color);background-color:var(--button-secondary-disabled-background-color);border-color:var(--button-secondary-disabled-border-color)}.button.critical{color:var(--button-critical-default-text-color);background-color:var(--button-critical-default-background-color);border:var(--button-base-border) var(--button-critical-default-border-color)}.button.critical:hover{background-color:var(--button-critical-hover-background-color);border-color:var(--button-critical-hover-border-color)}.button.critical:active{background-color:var(--button-critical-active-background-color);border-color:var(--button-critical-active-border-color)}.button.critical.disabled,.button.critical.loading{color:var(--button-critical-disabled-text-color);background-color:var(--button-critical-disabled-background-color);border-color:var(--button-critical-disabled-border-color)}.button.icon-only,.button.icon-only:focus-visible:after{border-radius:var(--button-icon-only-base-border-radius)}", c = class extends e {
	constructor(...e) {
		super(...e), this.variant = "primary";
	}
	static {
		this.styles = [e.styles, n`
      ${r(s)}
    `];
	}
	getClassNames() {
		return o(super.getClassNames(), "button", this.variant);
	}
};
t([a({ type: String })], c.prototype, "variant", void 0), c = t([i("jet2-button")], c);
//#endregion
export { c as t };
