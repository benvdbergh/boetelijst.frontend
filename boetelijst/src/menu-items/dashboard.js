// assets
import { IconDashboard, IconBrandAsana } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconBrandAsana };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Index',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/index/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'teams',
      title: 'Teams',
      type: 'item',
      url: '/index/teams',
      icon: icons.IconBrandAsana,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
