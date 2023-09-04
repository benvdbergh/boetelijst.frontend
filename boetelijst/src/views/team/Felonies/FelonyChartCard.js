import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
//import { Grid, MenuItem, TextField, Typography, Table, TableBody, TableCell, TableRow, Box } from '@mui/material';
import { Grid, Typography, Table, TableBody, TableCell, TableRow, Box } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data
import chartData from './chart-data/felonies-over-time-chart';

// const status = [
//   {
//     value: 'week',
//     label: 'This Week'
//   },
//   {
//     value: 'month',
//     label: 'This Month'
//   },
//   {
//     value: 'year',
//     label: 'This Year'
//   }
// ];

// ==============================|| FELONIES OVER TIME CHART ||============================== //

const FeloniesOverTimeChart = ({ isLoading }) => {
  // const [value, setValue] = useState('week');
  const [showTable, setShowTable] = useState(false);
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);

  const { navType } = customization;
  const { primary } = theme.palette.text;
  const darkLight = theme.palette.dark.light;
  const grey200 = theme.palette.grey[200];
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  useEffect(() => {
    const newChartData = {
      ...chartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary]
          }
        }
      },
      grid: {
        borderColor: grey200
      },
      tooltip: {
        theme: 'light'
      },
      legend: {
        labels: {
          colors: grey500
        }
      }
    };

    // do not load chart when loading
    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    }
  }, [navType, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Income</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">$2,324.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {/* <Grid item>
                  <TextField id="standard-select-currency" select value={value} onChange={(e) => setValue(e.target.value)}>
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid> */}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart {...chartData} onClick={() => setShowTable(true)} />
            </Grid>
            {showTable && (
              <Grid item xs={12}>
                <Table>
                  <TableBody>
                    {chartData.series.map((felony) => (
                      <TableRow key={felony.name}>
                        <TableCell component="th" scope="row">
                          {felony.name}
                        </TableCell>
                        <TableCell align="right">
                          {felony.data.reduce((a, b) => a + b, 0)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Box display="flex" justifyContent="flex-end" style={{marginTop: '10px'}}>
                  <Typography onClick={() => setShowTable(false)} style={{cursor: 'pointer'}}>minimize</Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </MainCard>
      )}
    </>
  );
};

FeloniesOverTimeChart.propTypes = {
  isLoading: PropTypes.bool
};

export default FeloniesOverTimeChart;
