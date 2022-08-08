import { faker } from '@faker-js/faker';
import React, {useState, useEffect } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box, Button } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  const [data1, setdata1] = useState([23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]);
  const [data2, setdata2] = useState([44, 55, 41, 67, 22, 43, 21, 41, 56, 60, 43]);
  const [data3, setdata3] = useState([30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]);

  const [chart, setchart] = useState([
    '01/01/2003',
    '02/01/2003',
    '03/01/2003',
    '04/01/2003',
    '05/01/2003',
    '06/01/2003',
    '07/01/2003',
    '08/01/2003',
    '09/01/2003',
    '10/01/2003',
    '11/01/2003',
  ]);
  const chart1=[
    '12/01/2003',
    '01/01/2004',
    '02/01/2004',
    '03/01/2004',
    '04/01/2004',
    '05/01/2004',
    '06/01/2004',
    '07/01/2004',
    '08/01/2004',
    '09/01/2004',
    '10/01/2004',
    '11/01/2004',
  ]
  const [count, setcount] = useState(0);
  const add = () => {
    setdata2([...data2, data1[count]]);
    setdata3([...data3, data2[count]]);
    setchart([...chart, chart1[count]]);
    setcount(count + 1);
  }

  const del = () => {
    data2.pop();
    data3.pop();
    chart.pop();
    setcount(count - 1);
  }
  

  return (
    <Page title="Dashboard | TT-Cloud">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          TT-Cloud
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary title="Battery level (%)" total={100} color="success" icon={'akar-icons:battery-charging'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="GSM field level" total={-137} color="info" icon={'icon-park-solid:signal-strength'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Record Number" total={'1BBF6'} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Serial Number (ID)" total={21960589} color="error" icon={'emojione-monotone:id-button'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={chart}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: data1,
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: data2,
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: data3,
                },
              ]}
            />

            <Box sx={{ textAlign: 'relative' }}>
        
            <Button href="" target="_blank" variant="contained" onClick={add} >
             add 
           </Button>
           <Button href=""  target="_blank" variant="body2" onClick={del}>
              delete 
            </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

          
          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
