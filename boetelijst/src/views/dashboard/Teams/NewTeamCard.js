import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography, Button, TextField, InputLabel, FormControl } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import ApiInstance from 'utils/axiosInstance';
import { useAuth } from 'hooks/useAuth';

// assets
import { IconBrandAsana } from '@tabler/icons';

const icons = {
	IconBrandAsana
};

const CardWrapper = styled(MainCard)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	color: '#fff',
	overflow: 'hidden',
	position: 'relative',
	'&:before': {
		content: '""',
		position: 'absolute',
		width: 210,
		height: 210,
		background: theme.palette.secondary[800],
		borderRadius: '50%',
		top: -125,
		right: -15,
		opacity: 0.5,
		[theme.breakpoints.down('sm')]: {
			top: -155,
			right: -70
		},
		'&:before': {
			content: '""',
			position: 'absolute',
			width: 210,
			height: 210,
			background: theme.palette.secondary[800],
			borderRadius: '50%',
			top: -85,
			right: -95,
			[theme.breakpoints.down('sm')]: {
				top: -105,
				right: -140
			}
		}
	}
}));

const NewTeamCard = () => {
	const theme = useTheme();
	const { token } = useAuth();

	const [name, setName] = useState('');


	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleSubmit = (token) => {
		console.log('run handleSubmit')
		ApiInstance.post('/team', { team_name: name }, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then((response) => {
				// Handle successful response
				console.log('Team submitted:', response.data);
			})
			.catch((error) => {
				// Handle error
				console.error('Error submitting team:', error);
			});
	};

	return (
		<CardWrapper border={false} content={false}>
			<Box sx={{ p: 2.25 }}> {/* Wrapped handleExpandClick in an arrow function */}
				<Grid container direction="column" spacing={2}> {/* Added spacing attribute */}
					<Grid item >
						<Grid container alignItems="center" spacing={2} justifyContent="space-between"> {/* Adjusted justifyContent to alignItems and added spacing attribute */}
							<Grid item >
								<Grid container alignItems="center">
									<Grid item>
										<Avatar
											variant="rounded"
											sx={{
												...theme.typography.commonAvatar,
												...theme.typography.largeAvatar,
												backgroundColor: theme.palette.secondary[800],
												mt: 1
											}}
										>
											<icons.IconBrandAsana />
										</Avatar>
									</Grid>
									<Grid item>
										<Typography variant="h4" sx={{ color: '#fff', ml: 2, mt: 1 }}>New Team</Typography> {/* Added margin to the left */}
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={2}>
							<Grid item sm={6} xs={12} md={6} lg={12}>
								<FormControl fullWidth>
									<InputLabel id="name-label">Name</InputLabel>
									<TextField
										id="name"
										label="Name"
										rows={4}
										value={name}
										onChange={handleNameChange}
										fullWidth
									/>
								</FormControl>
							</Grid>
							<Grid item sm={6} xs={12} md={6} lg={12}>
								<Button variant="contained" color="primary" onClick={() => handleSubmit(token)}>Submit</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</CardWrapper>
	);
};

export default NewTeamCard;



