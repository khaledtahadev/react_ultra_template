import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo } from "./Data";

const Products = () => {
	return (
		<>
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjOne} />
		</>
	);
};

export default Products;
