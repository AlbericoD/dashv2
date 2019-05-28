import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { Layout } from 'antd';
import Footer from './footer';
import Header from './header';
import { Sider } from '../components/sider-menu';
import './basic-layout.less';

const { Content } = Layout;
interface IBasicLayout {
  children: ReactNode;
}

// const handle = () => console.log('handle');
export const Basiclayout: FunctionComponent<IBasicLayout> = ({ children }): JSX.Element => {
  const [colladpsed, toggle] = useState<boolean>(false);
  useEffect(() => {
    toggle(true);
  }, []);
  return (
    <Layout>
      <Sider
        collapsed={colladpsed}
        handleClick={() => toggle(!colladpsed)}
        onCollapse={() => toggle(!colladpsed)}
        loadedCsv
        current='overview'
      />

      <Layout
        style={{
          minHeight: '100vh'
        }}>
        <Header />
        <Content className='content'>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
