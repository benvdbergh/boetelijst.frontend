// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconUsers, IconTicket, IconBook } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconUsers,
  IconTicket,
  IconBook
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const team = {
  id: 'team',
  title: 'My team',
  type: 'group',
  children: [
    {
      id: 'team-members',
      title: 'Members',
      type: 'item',
      url: '/team/members',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: 'team-felonies',
      title: 'Felonies',
      type: 'item',
      url: '/team/felonies',
      icon: icons.IconTicket,
      breadcrumbs: false
    },
    {
      id: 'team-rules',
      title: 'Rules',
      type: 'item',
      url: '/team/rules',
      icon: icons.IconBook,
      breadcrumbs: false
    } 
  ]
};

export default team;
