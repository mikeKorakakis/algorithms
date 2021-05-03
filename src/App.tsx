import React from "react";
import { Switch, Route } from "react-router-dom";
import BigO from "./components/BigO/BigO";
import Performace from "./components/BigO/Performance";
import ProblemSolving from "./components/ProblemSolving/ProblemSolving";
import FrequencyCounter from "./components/ProblemSolving/FrequencyCounter";
import Layout from "./layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MultiplePointers from "./components/ProblemSolving/MultiplePointers";
import SlidingWindow from "./components/ProblemSolving/SlidingWindow";
import DevideAndConquer from "./components/ProblemSolving/DevideAndConquer";
import Exercises from "./components/ProblemSolving/Exercises";
import Recursion from "./components/Recursion/Recursion";
import ExercisesEasy from "./components/Recursion/ExercisesEasy";
import ExercisesChallenging from "./components/Recursion/ExercisesChallenging";

function App() {
	return (
		<main>
			<Switch>
				<Layout>
					<Route path="/bigo" component={BigO} exact />
					<Route path="/performance" component={Performace} exact />
					<Route
						path="/problem_solving"
						component={ProblemSolving}
						exact
					/>
					<Route
						path="/frequency_counter"
						component={FrequencyCounter}
						exact
					/>
                    <Route
						path="/multiple_pointers"
						component={MultiplePointers}
						exact
					/>
                       <Route
						path="/sliding_window"
						component={SlidingWindow}
						exact
					/>
                     <Route
						path="/devide_and_conquer"
						component={DevideAndConquer}
						exact
					/>
                     <Route
						path="/exercises_problem_solving"
						component={Exercises}
						exact
					/>
                      <Route
						path="/recursion"
						component={Recursion}
						exact
					/>
                           <Route
						path="/exercises_recursion_easy"
						component={ExercisesEasy}
						exact
					/>
                                 <Route
						path="/exercises_recursion_challenging"
						component={ExercisesChallenging}
						exact
					/>
                    
                    
				</Layout>
			</Switch>
			<ToastContainer />
		</main>
	);
}

export default App;
