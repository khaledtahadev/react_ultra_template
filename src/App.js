import { Navbar, Footer, ScrollToTop } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Service from "./pages/Service/Service";
import SingUp from "./pages/SingUp/SingUp";
import About from "./pages/About/About";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<ScrollToTop />
			<Switch>
				<Route path="/service" component={Service} />
				<Route path="/products" component={Products} />
				<Route path="/about" component={About} />
				<Route path="/sing-up" component={SingUp} />
				<Route path="/" component={Home} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
