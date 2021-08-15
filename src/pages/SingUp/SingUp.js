import { InfoSection } from "../../components";
import { homeObjTwo, homeObjThree } from "./Data";

const SingUp = () => {
	return (
		<>
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjThree} />
		</>
	);
};

export default SingUp;
