import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

// material-ui
// import { useTheme } from '@mui/material/styles';
import { CardContent, Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| DASHBOARD DEFAULT - BROWSE TEAMS CARD ||============================== //

const BrowseTeamsCard = ({ isLoading }) => {
  //const theme = useTheme();
  
  console.log(isLoading)

  const [searchTerm, setSearchTerm] = useState("");
  //const [teams, setTeams] = useState([]); // Assuming teams data is an array

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const teams = [
    { id: 1, name: 'BlueBalls' },
    { id: 2, name: 'Team 2' },
    { id: 3, name: 'Team 3' },
    { id: 4, name: 'Team 4' },
    { id: 5, name: 'Team 5' },
  ];
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainCard content={false}>
      <CardContent>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Search Teams"
              value={searchTerm}
              onChange={handleSearchChange}
              variant="outlined"
            />
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
                        {team.name}
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
