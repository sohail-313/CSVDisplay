import React from 'react'

function Cols(cols) {
 
  return (
    cols.map(col => (
          <th>{col}</th>
    ))
    
  )
}

export default Cols