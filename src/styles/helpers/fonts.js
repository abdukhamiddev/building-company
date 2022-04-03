import { css } from "styled-components";

import PoppinsMedium from "../../assets/fonts/Poppins-Medium.ttf";
import PoppinsRegular from "../../assets/fonts/Poppins-Regular.ttf";
import PoppinsSemiBold from "../../assets/fonts/Poppins-SemiBold.ttf";
import PoppinsBold from "../../assets/fonts/Poppins-Bold.ttf";

import RobotoMedium from "../../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../../assets/fonts/Roboto-Regular.ttf";
import RobotoBold from "../../assets/fonts/Roboto-Bold.ttf";

export const PoppingTextFonts = css`
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 400;
		font-display: wrap;
		src: local("Poppins Regular"), url(${PoppinsRegular});
	}
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 500;
		font-display: wrap;
		src: local("Poppins Medium"), url(${PoppinsMedium});
	}
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 600;
		font-display: wrap;
		src: local("Poppins SemiBold"), url(${PoppinsSemiBold});
	}
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 700;
		font-display: wrap;
		src: local("Poppins Bold"), url(${PoppinsBold});
	}
`;

export const RobotoTextFonts = css`
	@font-face {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 400;
		font-display: wrap;
		src: local("Roboto Regular"), url(${RobotoRegular});
	}
	@font-face {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 500;
		font-display: wrap;
		src: local("Roboto Medium"), url(${RobotoMedium});
	}
	@font-face {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 700;
		font-display: wrap;
		src: local("Roboto SemiBold"), url(${RobotoBold});
	}
`;
