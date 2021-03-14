import React from 'react';

function MeasurementDetails(props) {
  const measurementData = props.data;

  return (
    <div className="app-country-statistics">
      <strong>Parameter measured: </strong>{measurementData.parameter}<br/>
      <strong>Result: </strong>{measurementData.value} {measurementData.unit}<br/>
    </div>
  )
}

export default MeasurementDetails;
