import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const Piechart = () => {
    return (
        <div>
             <PieChart
      series={[
        {
          data: [
            { id: 0, value: 45, label: 'Cream' },
            { id: 1, value: 38, label: 'Tone' },
            { id: 2, value: 17, label: 'Wash' },
          ],
          innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -180,
      endAngle: 180,
      cx: 120,
      cy: 150,
        },
      ]}
      width={340}
      height={338}
    />
        </div>
    )
}

export default Piechart