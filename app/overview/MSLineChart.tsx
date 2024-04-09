'use client'
import React from 'react';
import { Layout} from 'antd/lib';
import { LineChart } from '@mui/x-charts/LineChart';

const MSLineChart = () => {

  const freshProduction = [
    {
      location: 'Singapore',
      month: 1,
      t1: 7.8,
      t2: 22.5,
      t3: 38.4,
      t4: 49.4,
    },
    {
      location: 'Singapore',
      month: 2,
      t1: 9.6,
      t2: 29.5,
      t3: 41.4,
      t4: 52.2,
    },
    {
      location: 'Singapore',
      month: 3,
      t1: 13.6,
      t2: 18.2,
      t3: 47.3,
      t4: 46.2,
    },
    {
      location: 'Singapore',
      month: 4,
      t1: 19.6,
      t2: 16.5,
      t3: 39.2,
      t4: 45.2,
    },
    {
      location: 'Singapore',
      month: 5,
      t1: 13.6,
      t2: 17.2,
      t3: 42.7,
      t4: 48.1,
    },
  ];

  const keyToLabel: { [key: string]: string } = {
    t1: '%',
    t2: '%',
    t3: '%',
    t4: '%',
  };

  const colors: { [key: string]: string } = {
    t1: 'lightgreen',
    t2: 'yellow',
    t3: 'lightblue',
    t4: 'blue',
  };

  const stackStrategy = {
    stack: 'total',
    area: true,
    stackOffset: 'none', // To stack 0 on top of others
  } as const;
  
  const customize = {
    height: 300,
    legend: { hidden: true },
    margin: { top: 5 },
    stackingOrder: 'descending',
  };

  return (<LineChart
                    xAxis={[
                      {
                        dataKey: 'month',
                        valueFormatter: (month, value) => value.toString(),
                      },
                    ]}
                    series={Object.keys(keyToLabel).map((key) => ({
                      dataKey: key,
                      label: keyToLabel[key],
                      color: colors[key],
                      showMark: false,
                      ...stackStrategy,
                    }))}
                    dataset={freshProduction}
                    {...customize}
                  />);
};

export default MSLineChart;
