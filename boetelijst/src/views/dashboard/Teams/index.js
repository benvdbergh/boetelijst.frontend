import { useEffect, useState } from 'react';
// import TotalIncomeLightCard from './../Default/TotalIncomeLightCard';
import BrowseTeamsCard from './BrowseTeamsCard';

// material-ui
import { Grid } from '@mui/material';
import TeamInviteCard from './TeamInviteCard';
import { gridSpacing } from 'store/constant';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const DashboardTeams = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const teamName = "Blueballs";

  const hasInvite = true;

  return (
    <Grid container spacing={gridSpacing} direction="column">
      {hasInvite && (
        <Grid item xs={12}>
          <TeamInviteCard teamName={teamName} isLoading={isLoading}/>
        </Grid>
      )}
      <Grid item xs={12}>
        <BrowseTeamsCard isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};
export default DashboardTeams;
