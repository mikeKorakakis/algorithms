import React from "react";
import { Switch, Route } from "react-router-dom";
import BigO from "./components/BigO";
import {Home} from "./components/Home/index";
import Layout from "./layout";

function App() {
	return (
		<main>
			<Switch>
                <Layout>
               
				<Route path="/bigo" component={BigO} exact />
				{/* <Route path="/about" component={About} />
				<Route path="/shop" component={Shop} /> */}
                </Layout>
			</Switch>
		</main>
	);
}

export default App;
