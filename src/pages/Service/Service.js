import { InfoSection, Pricing } from "../../components";
import { homeObjThree } from "./Data";

const Service = () => {
	return (
		<>
			<InfoSection {...homeObjThree} />
			<Pricing />
		</>
	);
};

export default Service;
