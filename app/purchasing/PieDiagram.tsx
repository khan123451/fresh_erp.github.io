import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const Piechart = () => {
    return (
        <div>
             <PieChart
      series={[
        {
          data: [
            { id: 0, value: 321, label: 'Tone' },
            { id: 1, value: 328, label: 'Cream' },
            { id: 2, value: 351, label: 'Mask' }
          ],
          innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -180,
      endAngle: 180,
      cx: 200,
      cy: 150,
        },
      ]}
      width={420}
      height={300}
    />
        </div>
    )
}

export default Piechart