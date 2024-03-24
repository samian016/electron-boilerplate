import React, { Suspense, lazy } from 'react';
import PageLocations from './PageLocations';

function Lazy({ name }) {
  const Component = lazy(PageLocations[name]);
  return (
    <Suspense fallback={<div style={{color:"white"}}>Loading,,,,,,</div>}>
      <Component />
    </Suspense>
  );
}
export default Lazy;