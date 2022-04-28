import React, { Fragment, useContext, useEffect } from 'react';
import ListActors from './component/actors/listActors';
import { context } from './component/contextApi/context';
import TopNav from './component/nav/TopNav';
import ListSensors from './component/sensors/listSensors';

function App() {
  return (
    <Fragment>
      <TopNav/>
      <ListSensors/>
      <ListActors/>
    </Fragment>
  );
}
export default App;
