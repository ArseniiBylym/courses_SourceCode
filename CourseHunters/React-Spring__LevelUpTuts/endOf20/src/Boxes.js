import React, { useState } from 'react';
import { animated, useTrail } from 'react-spring';

const items = [0.5, 0.3, 0.2, 0.7, 1];

const Boxes = () => {
  const [on, toggle] = useState(false);
  const trail = useTrail(items.length, {
    opacity: on ? 0 : 1,
    transform: on ? 'scale(0.3)' : 'scale(1)'
  });

  return (
    <div className="boxes-grid">
      <button onClick={() => toggle(!on)}>Toggle</button>
      {trail.map(animation => (
        <animated.div className="box" style={animation} />
      ))}
    </div>
  );
};

export default Boxes;
