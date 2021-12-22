import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import logo from "../../../Images/logo2.png";
import {
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import useAuth from "../../../hooks/useAuth";

import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { CartContext } from "../../../context/CartProvider";
const navigation = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "About", to: "/about" },
  { id: 3, name: "Explore", to: "/explore" },
  { id: 4, name: "Dashboard", to: "/dashboard" },
];

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logout } = useAuth();
  const { cart } = useContext(CartContext);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "#1B1A1A" }}>
        <Toolbar>
          <img src={logo} alt="glamour-icon" />
          <Typography variant="h6" color="white" sx={{ flexGrow: 1 }}>
            Glamour
          </Typography>

          {isMobile ? (
            <DrawerComponent />
          ) : (
            navigation.map((item) => (
              <Link
                key={item.id}
                className="text-white font-bold  hover:text-purple-800"
                to={item.to}
              >
                <Button color="inherit">{item.name}</Button>
              </Link>
            ))
          )}
          <div className="mr-3">
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ background: "purple" }}
                  alt={user?.displayName ? user.displayName : ""}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseNavMenu} className="flex flex-col">
                {user.displayName && (
                  <Button
                    className="text-gray-200 font-bold  hover:text-purple-800"
                    color="inherit"
                  >
                    {user.displayName}
                  </Button>
                )}

                <Link
                  className="text-gray-200 font-bold  hover:text-purple-800 block"
                  to="/login"
                >
                  <Button color="inherit">Sign In</Button>
                </Link>

                {user.displayName && (
                  <Button
                    className="text-gray-200 font-bold  hover:text-purple-800 block"
                    onClick={logout}
                    color="inherit"
                  >
                    Logout
                  </Button>
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
