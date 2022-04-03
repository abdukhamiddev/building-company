import { createGlobalStyle } from "styled-components";
import {
	reset,
	variables,
	PoppingTextFonts,
	RobotoTextFonts,
	utilityClasses,
} from "./helpers";

const GlobalStyles = createGlobalStyle`
${reset}
${variables};
${RobotoTextFonts}
${PoppingTextFonts}
${utilityClasses}

`;

export default GlobalStyles;
