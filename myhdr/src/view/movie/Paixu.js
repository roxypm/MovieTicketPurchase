import React, { useState } from 'react'
import { Radio } from 'antd'
function Paixu ({ setTimeSort, setScoreSort }) {
  const [sort, setSort] = useState("timeSorts")
  function changeSort (newSort) {
    console.log(111)
    setTimeSort(newSort)
    setScoreSort(newSort)
    // setSort(newSort)
    console.log(newSort)
  }
  return (
    <div>
      <div className="sorts " style={{
        marginLeft: '157px',
        marginBottom: '27px',
        display: 'inline-block'
      }}>
        <ul >
          <Radio.Group name="radiogroup" defaultValue={1}>
            <li style={{ display: 'inline-block' }} onClick={changeSort.bind(null, "timeSort")} className={`${sort == 'timeSort' ? 'active' : ''}`} > <Radio value={1}>按时间排序</Radio></li>
            <li style={{ display: 'inline-block' }} onClick={changeSort.bind(null, 'scoreSort')} className={`${sort == 'scoreSort' ? 'active' : ''}`}><Radio value={2}>按评价排序</Radio></li>
          </Radio.Group>

        </ul>
      </div>
    </div>
  )
}

export default Paixu
