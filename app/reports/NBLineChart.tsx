import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function NBLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
      series={[
        {
          data: [72, 65.5, 71, 68.5, 70.5, 75],
        },
      ]}
      height={338}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}
