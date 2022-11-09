import React from 'react'
import IndividualRow from './IndividualRow'

function Data({fileData}) {
  return (
    fileData.map((singleRowData) =>(
        <tr key={singleRowData.id}>
            <IndividualRow singleRowData = {singleRowData} />
        </tr>
    ))
   
  )
}

export default Data