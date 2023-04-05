import React, { useEffect, useRef } from 'react';

export const MobileButtonComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const Kuc = Kucs["1.10.0"];

    const buttonNormal = new Kuc.MobileButton({
      text: "Normal",
      type: "normal",
      className: "kuc_normal_button",
    });
    const buttonSubmit = new Kuc.MobileButton({
      text: "Submit",
      type: "submit",
      className: "kuc_normal_button",
    });
    const buttonAlert = new Kuc.MobileButton({
      text: "Alert",
      type: "alert",
      className: "kuc_normal_button",
    });

    divEl.current.appendChild(buttonNormal)
    divEl.current.appendChild(buttonSubmit)
    divEl.current.appendChild(buttonAlert)
  }, []);

  return (
    <div className="sample-container" id="mobile-button">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};