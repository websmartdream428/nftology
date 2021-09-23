import React from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
// import graph from '../../assets/images/graph.png'

const CardDiv = styled.div`
  width: 100%;
  border-radius: 52px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 20px 10px #0000000f;
`

const ChartTitle = styled.div`
  font-size: 12px;
  text-align: center;
`

const ChartPercentView = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-around;
`

const ChartPercent = styled.div`
  padding: 5px;
  border: 1px solid #888;
  border-radius: 10px;
`

const Desc = styled.div`
  font-size: 10px;
`

const PercentView = styled.div`
  display: flex;
  align-items: end;
`

const Percent = styled.div`
  font-size: 25px;
`

const PercentDesc = styled.div`
  font-size: 9px;
  margin-left: 5px;
`

const data = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7],
  datasets: [
    {
      label: 'Sales',
      data: [21, 35, 75, 51, 41, 47, 32, 45],
      fill: false, // for Line chart
      backgroundColor: '#71B391',
      borderColor: '#71B391', // for Line chart
    },
    {
      label: 'Leads',
      data: [41, 79, 57, 47, 63, 71, 10, 23],
      fill: false, // for Line chart
      backgroundColor: '#F6836C',
      borderColor: '#F6836C', // for Line chart
    },
  ],
}
const ChartCard: React.FC = () => {
  return (
    <CardDiv>
      <ChartTitle>
        Contemporary Art Market Performance vs.S&P 500(1995-2020)
      </ChartTitle>
      <Line data={data} />
      <ChartPercentView>
        <ChartPercent>
          <Desc>Contemporary Art Annual Appreciation</Desc>
          <PercentView>
            <Percent style={{ color: '#71B391' }}>14.0%</Percent>
          </PercentView>
        </ChartPercent>
        <ChartPercent>
          <Desc>Contemporary Art Annual Appreciation</Desc>
          <PercentView>
            <Percent style={{ color: '#F6836C' }}>9.5%</Percent>
            <PercentDesc>(with dividends)</PercentDesc>
          </PercentView>
        </ChartPercent>
      </ChartPercentView>
    </CardDiv>
  )
}

export default ChartCard
