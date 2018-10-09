import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					{/* <title>KafeWorld</title> */}
					<meta name="description" content="" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link
						href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic"
						rel="stylesheet"
					/>
					<link href="/static/css/main.css" rel="stylesheet" />
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
				</body>
			</html>
		);
	}
}
