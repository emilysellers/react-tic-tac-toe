import React from 'react';
import './Box.css';

export default function Box({ box }) {
  return (
    <div className="box">
      <h1>{box.content}</h1>
    </div>
  );
}
