import { useRef, useEffect, useState } from 'react';

import PropTypes, { string } from 'prop-types';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { alpha,styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack,MenuItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import Iconify from '../../components/Iconify';
//

// mock
import account from '../../_mock/account';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
import navConfig from './NavConfig';


// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
  const tree1 = [
    {
      title: 'TT+',
      path: '/dashboard/Tree1/TT+',
      icon: getIcon ('ic:round-sensors'),
      
    },
    {
      title: 'TT-S',
      path: '/dashboard/Tree1/TT-S',
      icon: getIcon('ic:round-sensors'),
      
      
    },
    
  ];
  const tree2 = [
    {
      title: 'TT+',
      path: '/dashboard/Tree2/TT+',
      icon: getIcon('ic:round-sensors'),
      
    },
    {
      title: 'TT-S',
      path: '/dashboard/Tree2/TT-S',
      icon: getIcon('ic:round-sensors'),
      
      
    },
    
  ];
  const tree3 = [
    {
      title: 'TT+',
      path: '/dashboard/Tree3/TT+',
      icon: getIcon('ic:round-sensors'),
      
    },
    {
      title: 'TT-S',
      path: '/dashboard/Tree3/TT-S',
      icon: getIcon('ic:round-sensors'),
      
      
    },
    
  ];

 const trees = [
    {
      title: 'tree 1',
      path: '',
      icon: getIcon('emojione:deciduous-tree'),
      info: 'Sensors',
      children: tree1,
      
    },
    {
      title: 'tree 2',
      path: '',
      icon: getIcon('emojione:deciduous-tree'),
      info: 'Sensors',
      children: tree2,
      
    },
    {
      title: 'tree 3',
      path: '',
      icon: getIcon('emojione:deciduous-tree'),
      info: 'Sensors',
      children: tree3,
      
    },
    
  ];
  
  const isDesktop = useResponsive('up', 'lg');
  const anchorRef = useRef(null);

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  


  const [data, setdata] =useState(trees)
  const add = () =>{
    
    setdata([ ...data, {
      title: 'tree 4',
      path: '/dashboard/TT_cloud',
      icon: getIcon('emojione:deciduous-tree'),
      info: 'Sensors',
      children: tree3,
      
    }]);
    
    console.log("add trees",trees)
    console.log("add data",data)
    
  }
  
  const del = () =>{
    data.pop()
    setdata([...data])
    console.log("pop trees",trees)
    console.log("pop data",data)
  }
  



  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={account.photoURL} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {account.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {account.role}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>
      
      <Box  sx={{  px: 5, pb: 1, mt: 2, position: 'relative' }}>
      <h4 position= 'relative' color="#555">Menu</h4>
      </Box>
      

     <NavSection navConfig={navConfig} />
     


     <Box  sx={{  px: 5, pb: 1, mt: 2, position: 'relative' }} >
      <h4 position= 'relative' color="#555">Sensor</h4>
      </Box>
      
      <Box  sx={{  px: 5, pb: 1, mt: 2, textAlign: 'relative' }} >
        <Iconify icon="material-symbols:nest-remote-comfort-sensor" />
        <ListItemButton  href='/dashboard/TT_cloud'  >  TT-Cloud  </ListItemButton>
        </Box>

    

     <Box  sx={{  px: 5, pb: 1, mt: 2, position: 'relative' }}>
      <h4 position= 'relative' color="#555">The Trees</h4>
      </Box>
     
     <NavSection navConfig={data} />
       


      
      <Box sx={{ flexGrow: 1 }} />
          
      <Box sx={{ px: 2, pb: 3, mt: 10 }}>
        <Stack alignItems="center" spacing={2} sx={{ pt: 4, borderRadius: 2, position: 'relative' }}>
          <Box
            component="img"
            src="/static/illustrations/illustration_avatar.png"
            sx={{ width: 90, position: 'absolute', top: -50 }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Got more?
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'relative' }}>
        
          <Button href="" target="_blank" variant="contained"  onClick={add}>
            add tree
          </Button>
          <Button href=""  target="_blank" variant="body2" onClick={del}>
            delete tree
          </Button>
          </Box>
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          
          {renderContent}
        </Drawer>
      )}
  
      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
        
      )}
    </RootStyle>
	);
}
