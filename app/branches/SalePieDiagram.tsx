import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const Piechart = () => {
    return (
        <div>
             <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Moisture' },
            { id: 1, value: 15, label: 'Tone' },
            { id: 2, value: 20, label: 'Wash' },
            { id: 3, value: 25, label: 'Lip Stick' },
            { id: 4, value: 30, label: 'Face Cream' }
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
      width={420}
      height={300}
    />
        </div>
    )
}

export default Piechart