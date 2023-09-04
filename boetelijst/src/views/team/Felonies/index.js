import { useEffect, useState } from 'react';
// import TotalIncomeLightCard from './../Default/TotalIncomeLightCard';
// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

import FeloniesOverTimeChart from './FelonyChartCard';
import FelonyCard from './CreateFelonyCard';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const TeamFelonies = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const teamName = "Blueballs";


  return (
    <Grid container spacing={gridSpacing} direction="column">
        <Grid item xs={12}>
          <FeloniesOverTimeChart teamName={teamName} isLoading={isLoading}/>
        </Grid>
        <Grid item xs={12}>
          <FelonyCard isLoading={isLoading} />
        </Grid>
    </Grid>
  );
};
export default TeamFelonies;