import React from "react";
import { Switch, Route } from "react-router-dom";
import BigO from "./components/BigO/BigO";
import Performace from "./components/BigO/Performance";
import ProblemSolving from "./components/ProblemSolving/ProblemSolving";
import ProblemSolvingPatterns from "./components/ProblemSolving/ProblemSolvingPatterns";
import Layout from "./layout";

function App() {
	return (
		<main>
			<Switch>
                <Layout>
               
				<Route path="/bigo" component={BigO} exact />
				<Route path="/performance" component={Performace} exact />
				<Route path="/problem_solving" component={ProblemSolving} exact />
				<Route path="/problem_solving_patterns" component={ProblemSolvingPatterns} exact />
                </Layout>
			</Switch>
		</main>
	);
}

export default App;
