import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Home = () => {
	return (
		<>
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjThree} />
			<Pricing />
			<InfoSection {...homeObjFour} />
		</>
	);
};

export default Home;
