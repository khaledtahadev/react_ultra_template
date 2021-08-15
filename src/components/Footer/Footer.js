import { Button } from "../../globalStyles";
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";
import {
	FooterContainer,
	FooterSubHeading,
	FooterSubscription,
	FooterSubText,
	Form,
	FormInput,
	FooterLinksContainer,
	FooterLinksItems,
	FooterLinksWrapper,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialWrapper,
	SocialLogo,
	SocialIcon,
	SocialIcons,
	SocialIconLink,
	WebsiteRights,
} from "./Footer.elements";

const Footer = () => {
	return (
		<FooterContainer>
			{/* Subscribe */}
			<FooterSubscription>
				<FooterSubHeading>
					Join our exclusive membership to receive the latest news and trends
				</FooterSubHeading>
				<FooterSubText>You can unsubscribe at any time</FooterSubText>
				<Form>
					<FormInput type="email" name="email" placeholder="Your Email" />
					<Button fontBig>Subscribe</Button>
				</Form>
			</FooterSubscription>
			{/* Links */}
			<FooterLinksContainer>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinkTitle>About us</FooterLinkTitle>
						<FooterLink to="/sing-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle>Contact us</FooterLinkTitle>
						<FooterLink to="/sing-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinkTitle>Videos</FooterLinkTitle>
						<FooterLink to="/sing-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinkTitle>Social Media</FooterLinkTitle>
						<FooterLink to="/sing-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
			</FooterLinksContainer>
			{/* Social Media */}
			<SocialMedia>
				<SocialWrapper>
					<SocialLogo to="/">
						<SocialIcon />
						ULTRA
					</SocialLogo>
					<WebsiteRights>ULTRA &copy; 2020</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href="/">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="/">
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink href="/">
							<FaYoutube />
						</SocialIconLink>
						<SocialIconLink href="/">
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href="/">
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>
				</SocialWrapper>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
