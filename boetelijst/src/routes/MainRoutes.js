import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashbaordTeams = Loadable(lazy(() => import('views/dashboard/Teams')));

// my team routing

const TeamFelonies = Loadable(lazy(() => import('views/team/Felonies')));
const TeamMembers = Loadable(lazy(() => import('views/team/Members')));
const TeamRules = Loadable(lazy(() => import('views/team/Rules')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'index',
      children: [
        {
          path: 'dashboard',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'index',
      children: [
        {
          path: 'teams',
          element: <DashbaordTeams/>
        }
      ]
    },
    {
      path: 'team',
      children: [
        {
          path: 'felonies',
          element: <TeamFelonies/>
        }
      ]
    },
    {
      path: 'team',
      children: [
        {
          path: 'members',
          element: <TeamMembers/>
        }
      ]
    },
    {
      path: 'team',
      children: [
        {
          path: 'rules',
          element: <TeamRules/>
        }
      ]
    }
  ]
};

export default MainRoutes;
