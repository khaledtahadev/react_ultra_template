import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: gray;
	padding: 4rem 0 2rem 0;
`;

// Start Subscribe

export const FooterSubscription = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #fff;
	padding: 24px;
	margin-bottom: 24px;
`;

export const FooterSubHeading = styled.p`
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", "Arial", sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 20px;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 820px) {
		flex-direction: column;
		width: 80%;
	}
`;

export const FormInput = styled.input`
	outline: none;
	border: none;
	padding: 10px 20px;
	margin-right: 10px;
	border: 1px solid #fff;
	border-radius: 2px;
	font-size: 16px;

	&::placeholder {
		color: #242424;
	}

	@media screen and (max-width: 820px) {
		width: 100%;
		margin: 0 0 16px 0;
	}
`;

// Start Links

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 1000px;

	@media (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 820px) {
		flex-direction: row;
	}
`;

export const FooterLinksItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 15px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: #fff;

	@media (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
	margin-bottom: 0.5rem;
	text-decoration: none;
	color: #fff;

	&:hover {
		color: #0467fb;
		transition: 0.3s ease-out;
	}
`;

// Start Social Media

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;
export const SocialWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	max-width: 1000px;
	margin: 40px auto 0 auto;

	@media (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	display: flex;
	align-items: center;
	justify-self: start;
	text-decoration: none;
	color: #fff;
	font-size: 2rem;
	margin-bottom: 16px;
	cursor: pointer;
`;

export const SocialIcon = styled(FaMagento)`
	margin-right: 10px;
`;
export const WebsiteRights = styled.small`
	color: #fff;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a.attrs({
	target: "_blank",
})`
	color: #fff;
	font-size: 24px;
`;
