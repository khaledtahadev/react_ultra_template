import { InfoSection } from "../../components";
import { homeObjTwo, homeObjThree } from "./Data";

const About = () => {
	return (
		<>
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjThree} />
		</>
	);
};

export default About;
