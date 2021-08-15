import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	Heading,
	Subtitle,
	TopLine,
	ImgWrapper,
	Img,
} from "./InfoSection.elements";
import { Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

const InfoSection = ({
	lightBg,
	imgStart,
	lightTopLine,
	topLine,
	lightText,
	headLine,
	lightTextDesc,
	description,
	primary,
	buttonLabel,
	start,
	img,
	alt,
}) => {
	return (
		<InfoSec lightBg={lightBg}>
			<Container>
				<InfoRow imgStart={imgStart}>
					<InfoColumn>
						<TextWrapper>
							<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
							<Heading lightText={lightText}>{headLine}</Heading>
							<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
							<Link to='/sing-up'>
								<Button big fontBig primary={primary}>
									{buttonLabel}
								</Button>
							</Link>
						</TextWrapper>
					</InfoColumn>
					<InfoColumn>
						<ImgWrapper Dstart={start}>
							<Img src={img} alt={alt} />
						</ImgWrapper>
					</InfoColumn>
				</InfoRow>
			</Container>
		</InfoSec>
	);
};

export default InfoSection;
