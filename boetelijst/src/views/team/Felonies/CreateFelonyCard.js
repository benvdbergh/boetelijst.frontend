import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography, Button, TextField, Select, InputLabel, FormControl } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import { IconTicket } from '@tabler/icons';

const icons = {
    IconTicket
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

const FelonyCard = () => {
  const theme = useTheme();

  const [rule, setRule] = useState('');
  const [member, setMember] = useState('');
  const [comment, setComment] = useState('');
  const [expanded, setExpanded] = useState(false); // Added state for collapse

  const handleRuleChange = (event) => {
    setRule(event.target.value);
  };

  const handleMemberChange = (event) => {
    setMember(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Submit the new felony
  };

  const handleExpandClick = (expand) => { // Added handler for collapse and added argument
    setExpanded(expand);
  };

  return (
    <CardWrapper border={false} content={false}>
      <Box sx={{ p: 2.25 }}> {/* Wrapped handleExpandClick in an arrow function */}
        <Grid container direction="column" spacing={2}> {/* Added spacing attribute */}
          <Grid item >
            <Grid container alignItems="center" spacing={2} justifyContent="space-between"> {/* Adjusted justifyContent to alignItems and added spacing attribute */}
              <Grid item onClick={() => handleExpandClick(!expanded)}>
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
                      <icons.IconTicket />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4" sx={{ color: '#fff', ml: 2, mt: 1 }}>New Felony</Typography> {/* Added margin to the left */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={() => handleExpandClick(!expanded)} // Wrapped handleExpandClick in an arrow function and toggled expanded state
                  aria-expanded={expanded}
                  aria-label="show more"
                  sx={{ position: 'absolute', top: theme.spacing(3), right: theme.spacing(2) }} // Positioned the icon on top of the circle
                >
                  <ExpandMoreIcon style={{ transform: expanded ? 'rotate(180deg)' : 'none' }} /> {/* Rotate the icon when expanded */}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ margin: theme.spacing(2) }}> {/* Added margin to the left*/}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <FormControl fullWidth>
                    <InputLabel id="rule-label">Rule</InputLabel>
                    <Select
                      labelId="rule-label"
                      id="rule"
                      value={rule}
                      onChange={handleRuleChange}
                    >
                      {/* Add MenuItem for each rule */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <FormControl fullWidth>
                    <InputLabel id="member-label">Member</InputLabel>
                    <Select
                      labelId="member-label"
                      id="member"
                      value={member}
                      onChange={handleMemberChange}
                    >
                      {/* Add MenuItem for each member */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <TextField
                    id="comment"
                    label="Comment"
                    multiline
                    rows={4}
                    value={comment}
                    onChange={handleCommentChange}
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                </Grid>
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Box>
    </CardWrapper>
  );
};

export default FelonyCard;



