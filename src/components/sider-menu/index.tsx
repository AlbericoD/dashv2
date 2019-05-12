import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './index.less';
interface IProps {
  collapsed: boolean;
  handleClick: (event: any) => void;
  onCollapse: (event: any) => void;
  loadedCsv: boolean;
  current: string;
}
interface IOptions {
  key: string;
  icon: string;
  name: string;
}
const options: IOptions[] = [
  {
    key: 'upload-csv',
    icon: 'upload',
    name: 'Upload CSV'
  },
  {
    key: 'overview',
    icon: 'dashboard',
    name: 'Overview'
  },
  {
    key: 'installations',
    icon: 'bar-chart',
    name: 'Installations Graph '
  },
  {
    key: 'monetization',
    icon: 'line-chart',
    name: 'Monetization Graph'
  },
  {
    key: 'iteraction',
    icon: 'area-chart',
    name: 'Iteration Graph'
  },
  {
    key: 'activated',
    icon: 'table',
    name: 'Live Activated Channels'
  }
];

export const Sider = ({
  collapsed,
  handleClick,
  onCollapse,
  loadedCsv,
  current
}: IProps): JSX.Element => (
  <Layout.Sider
    collapsible
    collapsed={collapsed}
    onCollapse={onCollapse}
    breakpoint='lg'
    width={256}
    className={'sider'}
    theme={'dark'}>
    <div className='logo' id='logo'>
      <a href='https://github.com/AlbericoD/twitch-extension-analyze' target='__blank'>
        <Icon type='github' style={{ color: '#fff', fontSize: '1.5em', margin: '5px 6px' }} />
      </a>
    </div>

    <Menu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={['upload-csv']}
      selectedKeys={[current]}
      onClick={handleClick}>
      {options.map(option => (
        <Menu.Item key={option.key} disabled={loadedCsv}>
          <Icon type={option.icon} />
          <span>{option.name}</span>
        </Menu.Item>
      ))}
    </Menu>
  </Layout.Sider>
);
