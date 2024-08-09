import React, {useState} from 'react'
import CardFilter from './CardFilter'
import ReportCharts from './ReportCharts';

function Report() {
    const [filter, setFilter] = useState('Today'); // Fixed variable name to `filter`

    const handleFilterChange = filter => {
        setFilter(filter); // Updated to use event value
    };
  return (
      <div className="card">
        <CardFilter filterChange={handleFilterChange}/>
        <div className="card-body">
            <h5 className="card-title">
                Reports<span>/{filter}</span>
                <br/><br/>
                <ReportCharts/>
            </h5>
        </div>
      </div>
  )
}
export default Report
