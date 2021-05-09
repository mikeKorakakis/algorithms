import {
	AppBar,
	Divider,
	Drawer,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { styles } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import LooksOne from "@material-ui/icons/Filter1";
import LooksTwo from "@material-ui/icons/Filter2";
import LooksThree from "@material-ui/icons/Filter3";
import LooksFour from "@material-ui/icons/Filter4";
import LooksFive from "@material-ui/icons/Filter5";
import LooksSix from "@material-ui/icons/Filter6";
import LooksSeven from "@material-ui/icons/Filter7";
import LooksEight from "@material-ui/icons/Filter8";
import LooksNine from "@material-ui/icons/Filter9";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import { Link as RouterLink } from "react-router-dom";

const section = [
	{ label: "Big O Notation", link: "/" },
	{ label: "Problem Solving", link: "/" },
	{ label: "Recursion", link: "/" },
	{ label: "Searching Algorithms", link: "/" },
	{ label: "Sorting Algorithms", link: "/" },
	{ label: "Data Structures", link: "/" },
	{ label: "Dijksta's Algorithm", link: "/" },
	{ label: "Dynamic Programming", link: "/" },
];

const subSection = [
	[
		{ label: "BigO", link: "/bigo" },
		{ label: "Performance of Arrays & Objects", link: "/performance" },
	],
	[
		{ label: "Problem Solving", link: "/problem_solving" },
		{ label: "Frequency Counter", link: "/frequency_counter" },
		{ label: "Multiple Pointers", link: "/multiple_pointers" },
		{ label: "Sliding Window", link: "/sliding_window" },
		{ label: "Devide and Conquer", link: "/devide_and_conquer" },
		{ label: "Exercises", link: "/exercises_problem_solving" },
	],
	[
		{ label: "Recursion", link: "/recursion" },
		{ label: "Exercises Easy", link: "/exercises_recursion_easy" },
	],
	[{ label: "Searching Algorithms", link: "/searching_algorithms" }],
	[
		{ label: "Bubble Sort", link: "/bubble_sort" },
		{ label: "Selection Sort", link: "/selection_sort" },
		{ label: "Insertion Sort", link: "/insertion_sort" },
		{
			label: "Insertion Selection Bubble Sort Comparison",
			link: "/insertion_selection_bubble_comparison",
		},
		{ label: "Merge Sort", link: "/merge_sort" },
		{ label: "Quick Sort", link: "/quick_sort" },
		{ label: "Radix Sort", link: "/radix_sort" },
	],
	[
		{ label: "Data Structures", link: "/data_structures" },
		{ label: "Singly Linked Lists", link: "/singly_linked_lists" },
		{ label: "Doubly Linked Lists", link: "/doubly_linked_lists" },
		{ label: "Stacks and Queues", link: "/stacks_queues" },
		{ label: "Binary Search Trees", link: "/binary_search_trees" },
		{ label: "Binary Heaps", link: "/binary_heaps" },
		{ label: "Hash Tables", link: "/hash_tables" },
		{ label: "Graphs", link: "/graphs" },
	],
	[{ label: "Dijstra's Algorithm", link: "/dijkstra" }],
	[{ label: "Dynamic Programming", link: "/dynamic_programming" }],
];
const icons = (key: string, index: number) => {
	let icon = <LooksOne key={key} />;
	switch (index) {
		case 0:
			icon = <LooksOne key={key} />;
			break;
		case 1:
			icon = <LooksTwo key={key} />;
			break;
		case 2:
			icon = <LooksThree key={key} />;
			break;
		case 3:
			icon = <LooksFour key={key} />;
			break;
		case 4:
			icon = <LooksFive key={key} />;
			break;
		case 5:
			icon = <LooksSix key={key} />;
			break;
		case 6:
			icon = <LooksSeven key={key} />;
			break;
		case 7:
			icon = <LooksEight key={key} />;
			break;
		case 8:
			icon = <LooksNine key={key} />;
			break;
	}

	return icon;
};

const Layout = ({ children }: any) => {
	const useStyles = makeStyles(styles);
	const classes = useStyles();
	const [open, setOpen] = useState<any>({});

	const handleClick = (index: number) => {
		let temp = !open[index];
		setOpen({ ...open, [index]: temp });
	};

	return (
		<div className={classes.root}>
			<AppBar>
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6">Algorithms</Typography>
				</Toolbar>
			</AppBar>
			{/* empty Toolbar */}
			<Toolbar />
			<div className={classes.container}>
				<Drawer
					variant="permanent"
					classes={{
						paper: classes.drawer,
					}}
				>
					<Divider />
					<List>
						{section.map((sec, index) => (
							<div key={index}>
								<Link
									key={`link${index}`}
									className={classes.link}
									component={RouterLink}
									to={sec.link}
								>
									<ListItem
										button
										onClick={() => handleClick(index)}
									>
										<ListItemIcon>
											<div>
												{icons(`$icon${index}`, index)}
											</div>
										</ListItemIcon>
										<ListItemText primary={sec.label} />
										{open[index] ? (
											<ExpandLess />
										) : (
											<ExpandMore />
										)}
									</ListItem>
								</Link>
								<List component="div" disablePadding>
									{subSection[index].map((subSec, i) => (
										<Collapse
											in={open[index]}
											timeout="auto"
											unmountOnExit
											key={`sublink${i}`}
										>
											<Link
												className={classes.link}
												component={RouterLink}
												to={subSec.link}
											>
												<ListItem
													button
													className={classes.nested}
												>
													<ListItemIcon>
														<StarBorder />
													</ListItemIcon>
													<ListItemText
														primary={subSec.label}
													/>
												</ListItem>
											</Link>
										</Collapse>
									))}
								</List>
							</div>
						))}
					</List>
					<Divider />
				</Drawer>
				<main className={classes.main}>{children}</main>
			</div>
		</div>
	);
};

export default Layout;
