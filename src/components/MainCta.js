import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"position": "absolute",
	"white-space": "nowrap",
	"border-radius": "32px",
	"background": "#F15844",
	"hover-box-shadow": "0 12px 40px 0 rgba(248, 78, 56, 0.32)",
	"box-shadow": "0 12px 40px 0 rgba(248, 78, 56, 0.32)",
	"color": "--light",
	"hover-background": "#E1422D",
	"focus-background": "#E1422D",
	"active-background": "#CE3723",
	"focus-box-shadow": "0 12px 40px 0 rgba(248, 78, 56, 0.32)",
	"active-box-shadow": "0 0 0 0 rgba(248, 78, 56, 0.32)",
	"disabled-background": "#F5F5F5",
	"disabled-color": "#BFBFBF",
	"disabled-box-shadow": "0 0 0 0 rgba(248, 78, 56, 0.32)",
	"text-align": "center",
	"overflow-x": "auto",
	"min-width": "auto",
	"min-height": "60px",
	"disabled": false,
	"margin": "0px 0px 0px 0px",
	"font": "normal normal 550 20px/1.5 --fontFamily-googleLato",
	"width": "auto;",
	"hover-width": "auto",
	"focus-width": "auto",
	"active-width": "auto",
	"disabled-width": "auto",
	"top": "78px",
	"right": "554px",
	"bottom": "auto",
	"left": "auto",
	"height": "60px",
	"display": "block",
	"max-width": "100%",
	"max-height": "60px",
	"padding": "8px 32px 8px 32px",
	"children": "Order now"
};
const overrides = {};

const MainCta = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(MainCta, { ...Button,
	defaultProps,
	overrides
});
export default MainCta;