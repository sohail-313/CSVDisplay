import React from 'react'

function IndividualRow({singleRowData}) {
  return (
    <>
    <th>{singleRowData.id}</th>
    <th>{singleRowData.first_name}</th>
    <th>{singleRowData.last_name}</th>
    <th>{singleRowData.gender}</th>
    <th>{singleRowData.country}</th>
    <th>{singleRowData.age}</th>
    <th>{singleRowData.date}</th>
    </>
    
  )
}

export default IndividualRow