import React from 'react'
import Card from './Card'

export default ({ robots }) => (
  <div>
    {robots.map((r) => (
      <Card key={r.id} {...r} />
    ))}
  </div>
)
