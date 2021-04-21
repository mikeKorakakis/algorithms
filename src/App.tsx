import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./layout";

function App() {
	return (
		<main>
			<Switch>
                <Layout>
				<Route path="/" component={Home} exact />
				{/* <Route path="/about" component={About} />
				<Route path="/shop" component={Shop} /> */}
                </Layout>
			</Switch>
		</main>
	);
}

export default App;
