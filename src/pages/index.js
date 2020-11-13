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
				font="normal 800 72px/1.4 --fontFamily-googleMontserrat"
				bottom="735.8363055555556px"
				height="180px"
				left="170px"
				right="180.67834821428568px"
				top="90px"
				width="929.2936517857144px"
				sm-left="20px"
				sm-font="normal 800 40px/1.3 Montserrat, sans-serif"
				sm-right="135.471125px"
				sm-width="420.515875px"
				sm-bottom="749.2991875px"
				sm-height="166.5078125px"
				sm-top="90px"
				sm-display="inline"
			>
				Найкращий тамподрук{" "}
				<br />
				у Європі
			</Text>
			<Components.MainCta
				width="auto;"
				top="350px"
				right="auto"
				bottom="auto"
				left="170px"
				height="60px"
				type="button"
				sm-left="20px"
				sm-right="auto"
				sm-bottom="auto"
				sm-top="290px"
				sm-height="48px"
				sm-min-height="48px"
				sm-padding="8px 20px 8px 20px"
				sm-font="normal normal 550 16px/1.5 --fontFamily-googleLato"
				md-top="430px"
				lg-top="350px"
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