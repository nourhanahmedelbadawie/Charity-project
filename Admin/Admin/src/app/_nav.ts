import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Overview',
    url: '/dashboard',
    icon: 'icon-speedometer',
  
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Home screen',
    url: '/admin/home',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Documents',
    url: '/base',
    icon: 'icon-puzzle',
   
  },
  {
    name: 'Achievements',
    url: '/buttons',
    icon: 'icon-cursor',
  
  },
  {
    name: 'Documents',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Partners',
    url: '/icons',
    icon: 'icon-star',
   
  },
  {
    name: 'Donations',
    url: '/notifications',
    icon: 'icon-bell',
   
  },
  {
    name: 'Doners',
    url: '/widgets',
    icon: 'icon-calculator',
    
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'About us',
    url: '/pages',
    icon: 'icon-star',
   
  },
  {
    name: 'setting',
    url: '/dashboard',
    icon: 'icon-ban',
 
  }
 
];
