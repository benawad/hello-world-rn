import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

export default () => (
  <Router>
    <Scene key="root">
      <Scene key="page1" component={Page1} initial hideNavBar/>
      <Scene key="page2" component={Page2} hideNavBar/>
      <Scene key="page3" component={Page3} hideNavBar/>
    </Scene>
  </Router>
);
