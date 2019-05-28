import React, { Suspense } from 'react';
import { Basiclayout } from './layout/basic-layout';
import PageLoading from './components/loading/page-loading';
import { GridContent } from './components/grids/grid-content';
import { Skeleton } from 'antd';
import { HashRouter, Route } from 'react-router-dom';

import './app.less';

const CraftControlRow = React.lazy(() => import('./components/craft/controls'));
const OverViewTab = React.lazy(() => import('./components/graphs/overview'));

const OverViewWraper = () => (
  <>
    <Suspense fallback={<PageLoading />}>
      <CraftControlRow />
    </Suspense>
    <Suspense fallback={<Skeleton paragraph={{ rows: 4 }} />}>
      <OverViewTab
        rangePickerValue={'rangePickerValue'}
        salesData={'salesData'}
        isActive={() => ''}
        handleRangePickerChange={() => console.log('handle range picker')}
        loading={false}
        selectDate={() => ''}
      />
    </Suspense>
  </>
);
const App: React.FC = () => {
  return (
    <HashRouter basename='/'>
      <Basiclayout>
        <GridContent>
          {/* <Suspense fallback={<PageLoading />}>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/lorem'>lorem</Link>
              </li>
              <li>
                <Link to='/ipsum'>ipsum</Link>
              </li>
            </ul>
          </Suspense> */}

          <Route exact path='/' component={OverViewWraper} />
          <Route path='/about' component={() => <h1>about deploys travis</h1>} />
          <Route path='/lorem' component={() => <h1>lorem</h1>} />
          <Route path='/ipsum' component={() => <h1>ipsum</h1>} />
        </GridContent>
      </Basiclayout>
    </HashRouter>
  );
};

export default App;
