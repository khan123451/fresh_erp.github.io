'use client'
import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function GRLineChart() {
  return (
    <div>
    <LineChart
      series={[
        {
          data: [2, -5.5, 12, 8.5, -1.5, 5, 10, 8, 4],
          valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
        },
        {
          data: [-7, 8, -5, 4, 7, 6, 12, 15.5, 11],
          valueFormatter: (value) => (value == null ? '?' : value.toString()),
        },
      ]}
      height={300}
      margin={{ top: 10, bottom: 20 }}
    />
    </div>
  );
}