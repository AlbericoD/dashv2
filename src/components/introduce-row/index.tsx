import React, { memo } from 'react';
import { Row, Col, Tag } from 'antd';
// import styles from './Analysis.less';
// import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';

// import numeral from 'numeral';
// import Yuan from '@/utils/Yuan';

import { ChartCard, Field, MiniBar, MiniArea, MiniLine, Trend } from '../charts';
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 }
};

const IntroduceRow = memo(() => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        title={'Active Channels'}
        value={1000}
        footer={
          <Field
            label={
              <>
                <Tag color='purple'>Unique</Tag>
                <Tag color='geekblue'>Last 7 Days</Tag>
              </>
            }
          />
        }>
        <div style={{ marginRight: 16 }}>
          <Trend flag='up'>
            Installs
            <span className={'trendText'}> 12</span>
          </Trend>
          <br />
          <Trend flag='down'>
            Uninstalls
            <span className={'trendText'}> 11</span>
          </Trend>
        </div>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        title={<>Renderers</>}
        value={30}
        footer={
          <Field
            label={
              <>
                <Tag color='purple'>Unique</Tag>
                <Tag color='geekblue'>Last 7 Days</Tag>
              </>
            }
            value={10.0}
          />
        }>
        <MiniArea />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        title={<>Viewers</>}
        value={60}
        footer={
          <Field
            label={
              <>
                <Tag color='purple'>Unique</Tag>
                <Tag color='geekblue'>Last 7 Days</Tag>
              </>
            }
            value={10.0}
          />
        }>
        <MiniLine />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        title={<>Mouse enters</>}
        value={160}
        footer={
          <Field
            label={
              <>
                <Tag color='purple'>Unique</Tag>
                <Tag color='geekblue'>Last 7 Days</Tag>
              </>
            }
            value={10.0}
          />
        }>
        <MiniBar />
      </ChartCard>
    </Col>
  </Row>
));

export default IntroduceRow;
