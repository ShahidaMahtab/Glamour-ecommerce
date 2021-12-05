import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  icon: {
    color: "white",
  },
}));
const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/" },
  { name: "Calendar", to: "/" },
];

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List
          sx={{ background: "#202020", minHeight: "100vh", minWidth: "50vh" }}
        >
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-white font-bold  hover:text-purple-800 block"
                >
                  <Button color="inherit">{item.name}</Button>
                </Link>
              ))}
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
