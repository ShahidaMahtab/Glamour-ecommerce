import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BrushSharpIcon from '@mui/icons-material/BrushSharp';
import { Link } from 'react-router-dom';
import DrawerComponent from '../DrawerComponent/DrawerComponent';
import {
	Avatar,
	Menu,
	MenuItem,
	Tooltip,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import useAuth from '../../../hooks/useAuth';
const navigation = [
	{ id: 1, name: 'Home', to: '/' },
	{ id: 2, name: 'About', to: '/about' },
	{ id: 3, name: 'Products', to: '/' },
	{ id: 4, name: 'Gallery', to: '/gallery' },
];

const Navigation = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const { user, logout } = useAuth();
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
			<AppBar position='fixed' sx={{ background: '#202020' }}>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<BrushSharpIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}
					>
						Glamour
					</Typography>
					{isMobile ? (
						<DrawerComponent />
					) : (
						navigation.map((item) => (
							<Link
								key={item.id}
								className='text-white font-bold  hover:text-purple-800'
								to={item.to}
							>
								<Button color='inherit'>{item.name}</Button>
							</Link>
						))
					)}
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar
									sx={{ background: 'purple' }}
									alt={
										user?.displayName
											? user.displayName
											: 'broken'
									}
									src='/static/images/avatar/2.jpg'
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem
								onClick={handleCloseNavMenu}
								className='flex flex-col'
							>
								{user.displayName && (
									<Button
										className='text-gray-200 font-bold  hover:text-purple-800'
										color='inherit'
									>
										{user.displayName}
									</Button>
								)}
								{!user.diaplayName || (
									<Link
										className='text-gray-200 font-bold  hover:text-purple-800 block'
										to='/login'
									>
										<Button color='inherit'>Sign In</Button>
									</Link>
								)}
								{user.displayName && (
									<Button
										className='text-gray-200 font-bold  hover:text-purple-800 block'
										onClick={logout}
										color='inherit'
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
