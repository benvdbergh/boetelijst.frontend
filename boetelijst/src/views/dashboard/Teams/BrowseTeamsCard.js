import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, ClickAwayListener, Paper } from '@mui/material';

// material-ui
// import { useTheme } from '@mui/material/styles';
import { CardContent, Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import NewTeamCard from './NewTeamCard';
import { gridSpacing } from 'store/constant';
import { useEffect } from 'react';
import ApiInstance from 'utils/axiosInstance';

// ==============================|| DASHBOARD DEFAULT - BROWSE TEAMS CARD ||============================== //

const BrowseTeamsCard = ({ isLoading }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [teams, setTeams] = useState([]); // Assuming teams data is an array
  console.log(isLoading)
  useEffect(() => {
    ApiInstance.get('/team')
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.error('Error fethcing teams: ', error)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleExpand = () => {
    setIsCardOpen(true)
  };

  const handleClickAway = () => {
    setIsCardOpen(false);
  };



  // const teams = [
  //   { id: 1, name: 'BlueBalls' },
  //   { id: 2, name: 'Team 2' },
  //   { id: 3, name: 'Team 3' },
  //   { id: 4, name: 'Team 4' },
  //   { id: 5, name: 'Team 5' },
  // ];
  const filteredTeams = teams ? teams.filter((team) =>
    team.team_name ? team.team_name.toLowerCase().includes(searchTerm ? searchTerm.toLowerCase() : "") : []
  ) : [];

  return (
    <MainCard content={false}>
      <CardContent>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: '12px' }}>
              <TextField
                fullWidth
                label="Search Teams"
                value={searchTerm}
                onChange={handleSearchChange}
                variant="outlined"
              />
              {!isCardOpen && (
                <Button variant="contained" onClick={handleExpand} >New</Button>)}
            </Box>
            {isCardOpen && (
              <ClickAwayListener onClickAway={handleClickAway}>
                <Paper sx={{ marginTop: '12px' }}>
                  <NewTeamCard />
                </Paper>
              </ClickAwayListener>
            )}
          </Grid>
          <Grid item xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Team Name</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredTeams.map((team) => (
                    <TableRow key={team.id}>
                      <TableCell component="th" scope="row">
                        {team.team_name}
                      </TableCell>
                      <TableCell align="right">
                        <Button component={Link} to={`/index/teams/${team.id}`} variant="contained">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CardContent>
    </MainCard>
  );
};

BrowseTeamsCard.propTypes = {
  isLoading: PropTypes.bool
};

export default BrowseTeamsCard;
