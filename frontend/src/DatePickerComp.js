import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function DatePickerComp({ onChange, selected }) {

  return (
    <div>
      <DatePicker
        onChange={(date) => onChange(date)}
        placeholderText="Select a due date"
        selected={selected}
        minDate={new Date()}
        isClearable
        showPopperArrow={false}
      />
    </div>
  )
}

export default DatePickerComp