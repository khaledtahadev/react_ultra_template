import styled from "styled-components";

export const PricingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #0467fb;
	padding: 4rem 0 2rem 0;
`;
export const PricingHeadLine = styled.h2`
	color: #fff;
	text-align: center;
	margin-bottom: 30px;
	font-size: 2.5rem;
`;

export const PricingTableWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80%;
	@media (min-width: 992px) {
		flex-direction: row;
		align-items: initial;
	}
`;

export const PricingTable = styled.div`
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #242424;
	text-align: center;
	border-radius: 4px;
	margin: 20px;
	width: 260px;
	transition: 0.4s linear;

	@media (min-width: 992px) {
		margin-bottom: 0;
		&:hover {
			transform: scale(1.1);
		}
	}
`;

export const PricingInfo = styled.div`
	padding: 30px 0 0;
`;

export const PricingTitle = styled.h3`
	color: #fff;
	margin-bottom: 10px;
	font-size: 1.5rem;
`;

export const PricingCoust = styled.h3`
	color: #fff;
`;

export const PricingTime = styled.small`
	color: #fff;
	font-size: 12px;
`;

export const PricingFeats = styled.ul`
	list-style: none;
	color: #eee;
	padding: 30px;
`;

export const PricingFeat = styled.li`
	color: #a9b3c1;
	margin-bottom: 10px;
	font-size: 14px;
`;
