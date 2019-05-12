import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import { GlobalFooter } from '../components/global-footer';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Download',
          title: 'Download CSV',
          href: 'https://dev.twitch.tv/dashboard',
          blankTarget: true
        },
        {
          key: 'github',
          title: <Icon type='github' />,
          href: 'https://github.com/AlbericoD/twitch-extension-analyze',
          blankTarget: true
        },
        {
          key: 'Issues',
          title: 'Issues',
          href: 'https://github.com/AlbericoD/twitch-extension-analyze/issues',
          blankTarget: true
        }
      ]}
      copyright={
        <Fragment>
          Extension Analyze <Icon type='copyright' /> 2019
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
