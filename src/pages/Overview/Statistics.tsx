import React from 'react'
import { Line } from 'react-chartjs-2'

import {
  CardTitle,
  ChartCard,
  WhiteCard,
} from '../../styledComponents/elements/Cards'
import content from '../../constant/en.json'
import {
  CustomOption,
  CustomSelect,
} from '../../styledComponents/elements/CustomSelect'

const data = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7],
  datasets: [
    {
      label: 'Sales',
      data: [21, 35, 75, 51, 41, 47, 32, 45],
      fill: false, // for Line chart
      backgroundColor: '#FB8833',
      borderColor: '#FB8833', // for Line chart
    },
    {
      label: 'Leads',
      data: [41, 79, 57, 47, 63, 71, 10, 23],
      fill: false, // for Line chart
      backgroundColor: '#17A8F5',
      borderColor: '#17A8F5', // for Line chart
      // pointRadius: 2,
    },
  ],
}

const options = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 10,
    },
  },
  scales: {
    xAxes: [
      {
        ticks: { display: false },
      },
    ],
  },
}

const Statistics: React.FC = () => {
  return (
    <WhiteCard style={{ marginBottom: '30px' }}>
      <CardTitle>
        <div>{content.viewer_statistics}</div>
        <CustomSelect>
          <CustomOption>yesterday</CustomOption>
          <CustomOption>Last week</CustomOption>
          <CustomOption>Last month</CustomOption>
        </CustomSelect>
      </CardTitle>
      <ChartCard>
        <Line data={data} options={options} />
      </ChartCard>
    </WhiteCard>
  )
}

export default Statistics
