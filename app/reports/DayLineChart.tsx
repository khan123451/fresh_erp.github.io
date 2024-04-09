import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function NBLineChart() {
  return (
    <LineChart
      xAxis={[{ data: ["8.00", "10.00", "12.00", "14.00", "16.00", "18.00"] }]}
      series={[
        {
          data: [30, 25, 21, 28, 35, 32],
        },
      ]}
      height={338}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}
