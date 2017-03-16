/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'

class NavDrawer extends React.Component {
  render() {
    return (
      <div>
        <Drawer open={true} docked={true}>
          <AppBar
            style={{backgroundColor: '#0090d0'}}
            iconStyleLeft={{ display: 'none'}}>
          </AppBar>
        </Drawer>
      </div>
    );
  }

}

export default NavDrawer;
