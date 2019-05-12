import React, { memo } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
  Brush
} from 'recharts';
import './index.less';

const data = [
  {
    date: 'Page A',
    install: 4000,
    uninstalls: 2400,
    activations: 2400
  },
  {
    date: 'Page B',
    install: 3000,
    uninstalls: 1398,
    activations: 2210
  },
  {
    date: 'Page C',
    install: 2000,
    uninstalls: 9800,
    activations: 2290
  },
  {
    date: 'Page D',
    install: 2780,
    uninstalls: 3908,
    activations: 2000
  },
  {
    date: 'Page E',
    install: 1890,
    uninstalls: 4800,
    activations: 2181
  },
  {
    date: 'Page F',
    install: 2390,
    uninstalls: 3800,
    activations: 2500
  },
  {
    date: 'Page G',
    install: 3490,
    uninstalls: 4300,
    activations: 2100
  }
];

const BarOverview = memo(() => {
  return (
    <div className={'overviewChart'}>
      <div className={'chartContent'}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <Brush />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey='install' fill='#6441a4' />
            <Bar dataKey='uninstalls' fill='#392e5c' />
            <Bar dataKey='activations' fill='#9a7fcc' />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});
export default BarOverview;
