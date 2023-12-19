import { useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from 'utils/authContext';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
// ==============================|| APP ||============================== //

const queryClient = new QueryClient();

const App = () => {
  const customization = useSelector((state) => state.customization);
  return (
    <GoogleOAuthProvider clientId="175572475478-8gjq9p3iln4p07nfshtbnt46k4j1o3ar.apps.googleusercontent.com">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
              <CssBaseline />
              <NavigationScroll>
                <Routes />
              </NavigationScroll>
            </ThemeProvider>
          </StyledEngineProvider>
        </QueryClientProvider>
      </AuthProvider>
      
    </GoogleOAuthProvider>
  );
};

export default App;
