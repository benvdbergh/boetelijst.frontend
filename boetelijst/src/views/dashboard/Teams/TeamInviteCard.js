import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative'
}));

// ==============================|| TEAM INVITE CARD ||============================== //

const TeamInviteCard = ({ teamName, isLoading }) => {
  const theme = useTheme();
    console.log(theme, isLoading)
  return (
    <CardWrapper border={false} content={false}>
      <CardContent>
        <Typography variant="h5" component="div">
          You have been invited to join <strong>{teamName}</strong>.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" color="success" sx={{ mr: 1 }}>
            Accept
          </Button>
          <Button variant="contained" color="error">
            Decline
          </Button>
        </Box>
      </CardContent>
    </CardWrapper>
  );
};

TeamInviteCard.propTypes = {
  teamName: PropTypes.string,
  isLoading: PropTypes.bool
};

export default TeamInviteCard;
