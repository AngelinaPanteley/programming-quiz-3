import React from "react";

export const burgers = ref => (
  <div className="burgers" ref={ref}>
    <div className="burger for-mr-johnson">
      <div className="bottom-bun" />
      <div className="onion" />
      <div className="beef" />
      <div className="cheese" />
      <div className="pickles" />
      <div className="egg" />
      <div className="top-bun" />
    </div>
    <div className="burger for-mrs-johnson">
      <div className="bottom-bun" />
      <div className="tomato" />
      <div className="beef" />
      <div className="cheese" />
      <div className="pepper" />
      <div className="lettuce" />
      <div className="top-bun" />
    </div>
    <div className="burger for-little-peter">
      <div className="bottom-bun" />
      <div className="tomato" />
      <div className="bacon" />
      <div className="cheese" />
      <div className="egg" />
      <div className="top-bun" />
    </div>
  </div>
);
