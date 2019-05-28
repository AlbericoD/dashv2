import React, { memo, NamedExoticComponent } from 'react';
import { Row, Col, Card, Tabs, DatePicker, Table, Button } from 'antd';
import moment from 'moment';
// import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
// import numeral from 'numeral';
// import './index.less';

const Bar = React.lazy(() => import('./chart'));
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

const rankingListData: any[] = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: '0/' + i + '/05/2019',
    total: 323234
  });
}
const dataSource = [
  {
    key: '1',
    date: '01/05/2019',
    'ext-details': 46,
    'ext-unique-details': 32
  },
  {
    key: '2',
    date: '01/05/2019',
    'ext-details': 46,
    'ext-unique-details': 32
  },
  {
    key: '3',
    date: '01/05/2019',
    'ext-details': 46,
    'ext-unique-details': 32
  },
  {
    key: '4',
    date: '01/05/2019',
    'ext-details': 46,
    'ext-unique-details': 32
  },
  {
    key: '5',
    date: '01/05/2019',
    'ext-details': 46,
    'ext-unique-details': 32
  }
];

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Extension Details Page Visits',
    dataIndex: 'ext-details',
    key: 'ext-details'
  },
  {
    title: 'Unique Extension Details Page Visits',
    dataIndex: 'ext-unique-details',
    key: 'ext-unique-details'
  }
];

interface IOverView {
  rangePickerValue: any;
  salesData: any;
  isActive: (value: string) => string;
  handleRangePickerChange: () => void;
  loading: boolean;
  selectDate: (value: string) => string;
}
const OverView: NamedExoticComponent<IOverView> = memo(
  ({ rangePickerValue, salesData, isActive, handleRangePickerChange, loading, selectDate }) => (
    <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
      <div className={'salesCard'}>
        <Tabs
          tabBarExtraContent={
            <div className={'salesExtraWrap'}>
              <div className={'salesExtra'}>
                <Button.Group size={'small'}>
                  <Button type='default'>
                    Last Day
                    {/* <a className={'today'} onClick={() => selectDate('today')}>
                    </a> */}
                  </Button>
                  <Button type='default'>Last 7 Days</Button>
                  <Button type='default'>Last 30 Days</Button>
                  <Button type='default'>First Extension Release - Last Date CSV</Button>
                </Button.Group>
              </div>
              <RangePicker
                value={[moment(Date.now()), moment(Date.now())]}
                onChange={handleRangePickerChange}
                style={{ width: 256 }}
              />
            </div>
          }
          size='large'
          tabBarStyle={{ marginBottom: 24 }}>
          <TabPane tab={'Installations'} key='sales'>
            <Row>
              <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                <div className={'salesBar'}>
                  <Bar />
                </div>
              </Col>
              <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <div className={'salesRank'}>
                  <Table dataSource={dataSource} columns={columns} />
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab={'Monetization'} key='views'>
            <Row>
              <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                <div className={'salesBar'}>
                  <Bar />
                </div>
              </Col>
              <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <div className={'salesRank'}>
                  <Table dataSource={dataSource} columns={columns} />
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </Card>
  )
);

export default OverView;
