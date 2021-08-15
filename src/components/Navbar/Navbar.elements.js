import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";
import { Button, Container } from "../../globalStyles";

export const Nav = styled.nav`
	background-color: #101522;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;
`;

export const NavLogo = styled(Link)`
	display: flex;
	align-items: center;
	justify-self: flex-start;
	color: #fff;
	font-size: 2rem;
	text-decoration: none;
	cursor: pointer;
`;

export const NavIcon = styled(FaMagento)`
	margin-right: 0.5rem;
`;

export const MenuBars = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 60%);
	font-size: 1.8rem;
	cursor: pointer;

	@media (min-width: 992px) {
		display: none;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 80px);
	text-align: center;
	position: absolute;
	top: 80px;
	left: ${({ click }) => (click ? 0 : "-100%")};
	opacity: 1;
	transition: all 0.5s ease;
	background: #101522;

	@media (min-width: 992px) {
		flex-direction: row;
		align-items: center;
		position: static;
		left: auto;
		height: auto;
		width: auto;
	}
`;

export const NavLink = styled(Link)`
	display: table;
	padding: 2rem;
	color: #fff;
	align-items: center;
	width: 100%;
	text-decoration: none;

	${Button} {
		width: 100%;
	}

	@media (min-width: 992px) {
		display: flex;
		padding: 0.5rem 1rem;
		height: 80px;
		border-bottom: 2px solid transparent;

		&:hover {
			border-bottom: 2px solid #4b59f7;
			color: #4b59f7;
			transition: all 0.5 ease;
		}
	}
`;
