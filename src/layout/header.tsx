import React from 'react';
import { Layout } from 'antd';
// import Animate from 'rc-animate';
// import { GlobalHeader } from '../components/GlobalHeader';
import { TopNavHeader } from '../components/top-nav-header';
import './header.less';

const { Header } = Layout;

const HeaderView = () => {
  return (
    <Header style={{ padding: 0, width: '100%', zIndex: 2 }} className={'fixedHeader'}>
      <TopNavHeader

      // onCollapse={handleMenuCollapse}
      // onNoticeClear={this.handleNoticeClear}
      // onMenuClick={this.handleMenuClick}
      // onNoticeVisibleChange={this.handleNoticeVisibleChange}
      // {...this.props}
      />
    </Header>
  );
};

export default HeaderView;
