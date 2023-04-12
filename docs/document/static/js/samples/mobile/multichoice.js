import React, { useEffect, useRef } from 'react';

export const MobilMultichoiceComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const Kuc = Kucs["1.10.0"];

    const multiChoice = new Kuc.MobileMultiChoice({
        value: ["Orange"],
        items: [
          {
            label: "orange",
            value: "Orange"
          },
          {
            label: "apple",
            value: "Apple"
          }
        ]
      });

    divEl.current.appendChild(multiChoice)
  }, []);

  return (
    <div className="sample-container" id="mobile-multichoice">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};