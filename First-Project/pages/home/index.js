/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import CaseTable from '../../components/Cases/CaseTable/CaseTable';
import CaseContainer from '../../containers/CaseContainer';
import s from './styles.css';
import { title, html } from './index.md';


const records = [
  { id: 1, name: 'Adam Jaffe Back', employmentStatus: 'Employed' },
  { id: 4, name: 'Anna Jaffe Back', employmentStatus: 'Employed' },
  { id: 5, name: 'Baby Jaffe Back', employmentStatus: 'Unemployed' },
  { id: 2, name: 'Benji Jaffe Back', employmentStatus: 'Unemployed' }
];

class HomePage extends React.Component {
  componentDidMount() {
    document.title = title;
  }


  render() {
    return (
      <Layout className={s.content}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <CaseTable records={records} />
        <CaseContainer />
      </Layout>
    );
  }

}

export default HomePage;
