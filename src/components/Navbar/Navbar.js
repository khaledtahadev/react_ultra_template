import { useState } from "react";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MenuBars,
	NavMenu,
	NavLink,
	// NavLinkBtn,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	return (
		<IconContext.Provider value={{ color: "#FFF" }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/' onClick={() => setClick(false)}>
						<NavIcon />
						ULTRA
					</NavLogo>

					<MenuBars onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</MenuBars>

					<NavMenu onClick={handleClick} click={click}>
						<NavLink to='/home'>Home</NavLink>
						<NavLink to='/service'>Service</NavLink>
						<NavLink to='/products'>Products</NavLink>
						<NavLink to='/about'>About</NavLink>
						<NavLink to='/sing-up'>
							<Button primary>Sing Up</Button>
						</NavLink>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
