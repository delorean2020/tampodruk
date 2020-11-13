import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box height="900px" quarkly-title="Frame">
			<Text
				position="absolute"
				font="normal 800 42px/1.3 --fontFamily-googleNotoSansJp"
				bottom="735.8363055555556px"
				height="180px"
				left="170px"
				right="auto"
				top="90px"
				width="50%"
				sm-left="20px"
				sm-font="normal 800 24px/1.3 Montserrat, sans-serif"
				sm-right="19.01800271739131px"
				sm-width="auto"
				sm-bottom="812.7126983695653px"
				sm-height="103.12330163043478px"
				sm-top="90px"
			>
				Найкращий друк{" "}
				<br />
				на сувенірній продукції{" "}
				<br />
				в Європі
			</Text>
			<Components.MainCta
				width="auto;"
				top="307px"
				right="auto"
				bottom="auto"
				left="170px"
				height="60px"
				type="button"
				sm-left="20px"
				sm-right="auto"
				sm-bottom="auto"
				sm-top="211px"
			>
				Переглянути роботи
			</Components.MainCta>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});