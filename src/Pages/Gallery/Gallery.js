import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import gallery1 from '../../Images/gallery/gallery1.jpg';
import gallery2 from '../../Images/gallery/gallery2.jpg';
import gallery3 from '../../Images/gallery/gallery3.jpg';
import gallery4 from '../../Images/gallery/gallery4.jpg';
import gallery5 from '../../Images/gallery/gallery5.jpg';
import gallery6 from '../../Images/gallery/gallery6.jpg';
import gallery7 from '../../Images/gallery/gallery7.jpg';
import gallery8 from '../../Images/gallery/gallery8.jpg';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Item>
						<img src={gallery1} alt='' />
					</Item>
				</Grid>
				<Grid item xs={6}>
					<Item>
						<img src={gallery2} alt='' />
					</Item>
				</Grid>
				<Grid item xs={6}>
					<Item>
						<img src={gallery3} alt='' />
					</Item>
				</Grid>
				<Grid item xs={6}>
					<Item>
						<img src={gallery4} alt='' />
					</Item>
				</Grid>
				<Grid item xs={6}>
					<Item>
						<img src={gallery5} alt='' />
					</Item>
				</Grid>
				<Grid item xs={6}>
					<Item>
						<img src={gallery6} alt='' />
					</Item>
				</Grid>
				<Grid item xs={8}>
					<Item>
						<img src={gallery7} alt='' />
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<img src={gallery8} alt='' />
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
