import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import TT1 from './pages/TT+1';
import TTS1 from './pages/TTS1';

import TT2 from './pages/TT+2';
import TTS2 from './pages/TTS2';

import TT3 from './pages/TT+3';
import TTS3 from './pages/TTS3';

import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import TTcloud from './pages/TT_cloud';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'TT_cloud', element: <TTcloud /> },
        
        { path: 'Tree1/TT+', element: <TT1 /> },
        { path: 'Tree1/TT-S', element: <TTS1 /> },

        { path: 'Tree2/TT+', element: <TT2 /> },
        { path: 'Tree2/TT-S', element: <TTS2 /> },

        { path: 'Tree3/TT+', element: <TT3 /> },
        { path: 'Tree3/TT-S', element: <TTS3 /> },


      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
