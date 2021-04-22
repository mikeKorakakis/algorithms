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
import React from "react";
import { styles } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import LooksOne from "@material-ui/icons/LooksOne";
import LooksTwo from "@material-ui/icons/LooksTwo";
import LooksThree from "@material-ui/icons/Looks3";
import LooksFour from "@material-ui/icons/Looks4";
import LooksFive from "@material-ui/icons/Looks5";
import LooksSix from "@material-ui/icons/Looks6";
import { Link as RouterLink } from "react-router-dom";

const section = [{label:"one", link: "/"}, {label:"two", link: "/"},{label:"three", link: "/"},];
const icons = (key: string, index: number) => {
	let icon = <LooksOne key={key} />
    switch (index){
      case 1:
         icon = <LooksOne key={key} />
         break;
      case 2:
            icon = <LooksTwo key={key} />
         break;
         case 3:
                icon = <LooksThree key={key} />
         break;
         case 4:
                icon = <LooksFour key={key} />
         break;
         case 5:
                    icon = <LooksFive key={key} />
            break;
    }

    return icon
	
}

const useStyles = makeStyles(styles);
const Layout = ({ children }: any) => {
	const classes = useStyles();
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
                            <Link   key={`link${index}`}  className={classes.link} component={RouterLink} to={sec.link}>
							<ListItem button >
								<ListItemIcon >
                                    <div>
									{icons(`$icon${index}`, index)}
                                    </div>
								</ListItemIcon>
								<ListItemText  primary={sec.label} />
							</ListItem>
                            </Link>
                           
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
