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
import SearchingAlgorithms from "./components/SearchingAlgorithms/SearchingAlgorithms";
import BubbleSort from "./components/SortingAlgorithms/BubbleSort";
import SelectionSort from "./components/SortingAlgorithms/SelectionSort";
import InsertionSort from "./components/SortingAlgorithms/InsertionSort";
import InsertionSelectionBubbleComp from "./components/SortingAlgorithms/InsertionSelectionBubbleComp";
import MergeSort from "./components/SortingAlgorithms/MergeSort";
import QuickSort from "./components/SortingAlgorithms/QuickSort";
import RadixSort from "./components/SortingAlgorithms/RadixSort";
import DataStructures from "./components/DataStructures/DataStructures";
import SinglyLinkedLists from "./components/DataStructures/SinglyLinkedLists";
import DoublyLinkedLists from "./components/DataStructures/DoublyLinkedLists";
import StacksQueues from "./components/DataStructures/StacksQueues";
import BinarySearchTrees from "./components/DataStructures/BinarySearchTrees";
import BinaryHeaps from "./components/DataStructures/BinaryHeaps";
import HashTables from './components/DataStructures/HashTable';
import Graphs from './components/DataStructures/Graphs';
import Dijkstra from './components/Dijkstra/Dijkstra';
import DynamicProgramming from './components/Dynamic Programming/DynamicProgramming';
import { Home } from './components/Home/index';

function App() {
	return (
		<main>
			<Switch>
				<Layout>
					<Route path="/home" component={Home} exact />
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
					<Route path="/recursion" component={Recursion} exact />
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
					<Route
						path="/searching_algorithms"
						component={SearchingAlgorithms}
						exact
					/>
					<Route path="/bubble_sort" component={BubbleSort} exact />
					<Route
						path="/selection_sort"
						component={SelectionSort}
						exact
					/>
					<Route
						path="/insertion_sort"
						component={InsertionSort}
						exact
					/>
					<Route
						path="/insertion_selection_bubble_comparison"
						component={InsertionSelectionBubbleComp}
						exact
					/>
					<Route path="/merge_sort" component={MergeSort} exact />
					<Route path="/quick_sort" component={QuickSort} exact />
					<Route path="/radix_sort" component={RadixSort} exact />
					<Route
						path="/data_structures"
						component={DataStructures}
						exact
					/>
					<Route
						path="/singly_linked_lists"
						component={SinglyLinkedLists}
						exact
					/>
					<Route
						path="/doubly_linked_lists"
						component={DoublyLinkedLists}
						exact
					/>
					<Route
						path="/stacks_queues"
						component={StacksQueues}
						exact
					/>
					<Route
						path="/binary_search_trees"
						component={BinarySearchTrees}
						exact
					/>
					<Route path="/binary_heaps" component={BinaryHeaps} exact />
					<Route path="/hash_tables" component={HashTables} exact />
					<Route path="/graphs" component={Graphs} exact />
					<Route path="/dijkstra" component={Dijkstra} exact />
					<Route path="/dynamic_programming" component={DynamicProgramming} exact />
				</Layout>
			</Switch>
			<ToastContainer />
		</main>
	);
}

export default App;
