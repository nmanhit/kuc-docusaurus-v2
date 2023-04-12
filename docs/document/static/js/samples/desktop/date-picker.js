import React, { useEffect, useRef } from 'react';

export const DatePickerComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const Kuc = Kucs["1.10.0"];

    const datePicker = new Kuc.DatePicker({
    value: "2021-11-11"
    });

    divEl.current.appendChild(datePicker)
  }, []);

  return (
    <div className="sample-container" id="date-picker">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};