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
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
  render() {
    return (
      <AppBar
        title='Pattern.org'
        style={{backgroundColor: '#0090d0'}}
      />
    );
  }

}

export default Header;
