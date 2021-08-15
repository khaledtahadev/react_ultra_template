import { FaMagento } from "react-icons/fa";
import { Button } from "../../globalStyles";
import DataTable from "./Data";
import {
	PricingContainer,
	PricingHeadLine,
	PricingTableWrapper,
	PricingTable,
	PricingInfo,
	PricingTitle,
	PricingCoust,
	PricingTime,
	PricingFeats,
	PricingFeat,
} from "./pricing.elements";

const pricing = () => {
	return (
		<PricingContainer>
			<PricingHeadLine>Our Service</PricingHeadLine>
			<PricingTableWrapper>
				{DataTable.map(
					({
						id,
						IconPlan,
						PricingTitle: title,
						PricingCoust: coust,
						PricingTime: time,
						PricingFeats: feats,
					}) => (
						<PricingTable key={id}>
							<FaMagento fontSize="2.5rem" color="#CCC" />
							<PricingInfo>
								<PricingTitle>{title}</PricingTitle>
								<PricingCoust>{coust}</PricingCoust>
								<PricingTime>{time}</PricingTime>
							</PricingInfo>
							<PricingFeats>
								{feats.map((feat, indx) => (
									<PricingFeat key={indx}>{feat}</PricingFeat>
								))}
							</PricingFeats>
							<Button>Choose Plan</Button>
						</PricingTable>
					)
				)}
			</PricingTableWrapper>
		</PricingContainer>
	);
};

export default pricing;
