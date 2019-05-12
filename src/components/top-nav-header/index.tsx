import React from 'react';
// import { Icon } from 'antd';

import './index.less';
// import RightContent from './RightContent';
// import RightContent from '../GlobalHeader/RightContent';
// import BaseMenu from '../SiderMenu/BaseMenu';
// import { getFlatMenuKeys } from '../SiderMenu/SiderMenuUtils';

export const TopNavHeader = () => {
  return (
    <div className={`head`}>
      <div className={`main`}>
        <div className={'left'}>
          <div className={'logo'} key='logo' id='logo'>
            {/* <h1>title</h1> */}
            {/* <Link to='/'>
              <img src={logo} alt='logo' />
              <h1>title</h1>
            </Link> */}
          </div>
          <div>
            {/* // <BaseMenu {...this.props} flatMenuKeys={flatMenuKeys} className={styles.menu} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
