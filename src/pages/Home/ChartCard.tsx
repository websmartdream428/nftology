import React from 'react'
import graph from '../../assets/images/graph.png'

const ChartCard: React.FC = () => {
  return (
    <div
      className="card-chart"
      style={{ backgroundImage: `url(${graph})`, backgroundSize: '100%' }}
    >
      {' '}
    </div>
  )
}

export default ChartCard
