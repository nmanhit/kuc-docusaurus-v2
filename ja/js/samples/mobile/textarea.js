import React, { useEffect, useRef } from 'react';

export const MobileTextAreaComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const Kuc = Kucs["1.10.0"];

    const mobileTextArea = new Kuc.MobileTextArea({});

    divEl.current.appendChild(mobileTextArea)
  }, []);

  return (
    <div className="sample-container" id="mobile-textarea">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};