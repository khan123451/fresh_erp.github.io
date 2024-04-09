import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: '$SGD',
    },
  ],
  width: 360,
  height: 335,
};
const dataset = [
  {
    total: 196,
    fragrance: 57,
    body: 86,
    lipcare: 21,
    skincare: 32,
    category: 'Total',
  },
  {
    total: 215,
    fragrance: 50,
    body: 42,
    lipcare: 76,
    skincare: 47,
    category: 'Fragrance',
  },
  {
    total: 191,
    fragrance: 67,
    body: 56,
    lipcare: 41,
    skincare: 27,
    category: 'Body',
  },
  {
    total: 218,
    fragrance: 77,
    body: 72,
    lipcare: 41,
    skincare: 28,
    category: 'Lipcare',
  },
  {
    total: 174,
    fragrance: 58,
    body: 57,
    lipcare: 29,
    skincare: 30,
    category: 'Skincare',
  },
];

const valueFormatter = (value: number | null) => `${value}`;

export default function SaleRev() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'category' }]}
      series={[{ dataKey: 'total', label: '$SGD', valueFormatter }]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
    />
  );
}
