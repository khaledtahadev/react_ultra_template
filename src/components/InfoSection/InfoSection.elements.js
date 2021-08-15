import styled from "styled-components";

export const InfoSec = styled.div`
	color: #fff;
	padding: 160px 0;
	background: ${({ lightBg }) => (lightBg ? "#FFF" : "#101522")};
`;

export const InfoRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin: 0 -15px -15px -15px;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
	display: flex;
	justify-content: center;
	max-width: 100%;
	flex-basis: 100%;
	margin-bottom: 15px;
	margin-right: 15px;
	margin-left: 15px;

	@media (min-width: 992px) {
		display: block;
		max-width: 50%;
		flex-basis: 50%;
		flex: 1;
	}
`;

export const TextWrapper = styled.div`
	max-width: 450px;
	padding-top: 0;
	padding-bottom: 65px;

	@media (min-width: 992px) {
		padding-bottom: 60px;
	}
`;

export const TopLine = styled.div`
	color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4b59f7")};
	font-size: 18px;
	line-height: 16px;
	letter-spacing: 1.4px;
	margin-bottom: 16px;
`;

export const Heading = styled.h1`
	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
`;

export const Subtitle = styled.p`
	color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
`;

export const ImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ Dstart }) => (Dstart ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;
