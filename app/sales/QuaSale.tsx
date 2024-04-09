import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function QuaSale() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Qtr 1', 'Qtr 2', 'Qtr 3', 'Qtr 4'] }]}
      series={[{ data: [40000, 48000, 30000, 50000] }, { data: [35000, 40000, 42000, 42000] }, { data: [42000, 50000, 55000, 60000] }]}
      width={360}
      height={335}
    />
  );
}
