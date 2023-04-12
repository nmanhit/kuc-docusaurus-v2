import React, { useEffect, useRef } from 'react';

export const MobileDropdownComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const Kuc = Kucs["1.10.0"];

    const dropdown = new Kuc.MobileDropdown({
        value: "Orange",
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

    divEl.current.appendChild(dropdown)
  }, []);

  return (
    <div className="sample-container" id="mobile-dropdown">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};