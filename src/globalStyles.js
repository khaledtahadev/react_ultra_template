import styled, { createGlobalStyle } from "styled-components";

// Global
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
}
`;

// Container
export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 50px;

	@media (max-width: 991px) {
		padding: 0 30px;
	}
`;

// Button
export const Button = styled.button`
	border-radius: 4px;
	white-space: nowrap;
	color: #fff;
	outline: none;
	border: none;
	background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
	padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	cursor: pointer;
	&:hover {
		transition: all 0.3s ease-in-out;
		background: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
	}

	@media (max-width: 960px) {
		width: 100%;
	}
`;

export default GlobalStyle;
