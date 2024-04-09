import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const Piechart = () => {
    return (
        <div>
            <b style={{"fontSize":20}}>Data of the day</b>
             <PieChart
      series={[
        {
          data: [
            { id: 0, value: 25, label: 'Team' },
            { id: 1, value: 15, label: 'Platform' },
            { id: 2, value: 30, label: 'Marketing' },
            { id: 3, value: 20, label: 'Sale' },
            { id: 4, value: 10, label: 'Liquidity' }
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
      height={450}
    />
        </div>
    )
}

export default Piechart