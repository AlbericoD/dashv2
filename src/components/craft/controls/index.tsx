import React, { memo } from 'react';
import { Row, Col, Select, Switch, Statistic } from 'antd';
import { ChartCard, Trend } from '../../charts';
import { CSV } from '../../../mock-date';
const Option = Select.Option;

function onChange(value: any) {
  console.log(value.target.value);
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val: any) {
  console.log('search:', val);
}

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 }
};

const test = new RegExp(/[7?30]|(.Name|.Client|Date)/, 'g');

const IntroduceRow = memo(() => (
  <Row gutter={24}>
    {[1, 2, 3, 4].map((v, i) => (
      <Col {...topColResponsiveProps}>
        <ChartCard
          key={i}
          title={'Empty property'}
          value={
            <Select
              showSearch
              style={{ width: '17vw' }}
              placeholder='Select a data props'
              optionFilterProp='children'
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}>
              {Object.keys(CSV[0])
                .filter(v => !v.match(test))
                .map((csv, index) => (
                  <Option value={index}>{csv}</Option>
                ))}
            </Select>
          }
          action={
            <div>
              <input
                type='color'
                defaultValue='#003f5c'
                list='harmonic'
                onChange={onChange}
                onInput={onChange}
              />
              <datalist id='harmonic'>
                <option>#003f5c</option>
                <option>#2f4b7c</option>
                <option>#665191</option>
                <option>#a05195</option>
                <option>#d45087</option>
                <option>#f95d6a</option>
                <option>#ff7c43</option>
                <option>#ffa600</option>
                <option>#004c6d</option>
                <option>#6996b3</option>
              </datalist>
            </div>
          }
          footer={
            <>
              <Switch
                defaultChecked={false}
                onChange={onChange}
                style={{ display: 'inline-block', float: 'left' }}
              />
              <Statistic value={0} style={{ display: 'inline-block', float: 'right' }} />
            </>
          }>
          <div style={{ marginRight: 16, marginTop: 8 }}>
            <Trend flag='none'>
              <Select
                showSearch
                style={{ width: '17vw' }}
                placeholder='Select a calc type'
                optionFilterProp='children'
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}>
                {['Sum', 'Average'].map((csv, index) => (
                  <Option value={index}>{csv}</Option>
                ))}
              </Select>
            </Trend>
          </div>
        </ChartCard>
      </Col>
    ))}
  </Row>
));

export default IntroduceRow;
