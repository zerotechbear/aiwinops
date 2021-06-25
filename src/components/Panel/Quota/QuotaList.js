import { Descriptions, Card, Badge, Progress, Tooltip } from 'antd';

const QuotaList = () => {
  return (
    <Card>
      <Descriptions title='Your Solution' layout='vertical' bordered>
        <Descriptions.Item label='Product'>Cloud Database</Descriptions.Item>
        <Descriptions.Item label='Billing Mode'>Paid</Descriptions.Item>
        <Descriptions.Item label='Automatic Renewal'>YES</Descriptions.Item>
        <Descriptions.Item label='Build time' span={1}>
          2018-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label='Status' span={2}>
          <Badge status='processing' text='Running' />
        </Descriptions.Item>
        <Descriptions.Item label='Member' span={3}>
          <Tooltip title='專案成員額度'>
            <span>In used: 4</span>
          </Tooltip>
          <Progress percent={40} />
        </Descriptions.Item>
        <Descriptions.Item label='Disk' span={3}>
          <Tooltip title='專案硬碟使用率'>
            <span>In used: 6GB</span>
          </Tooltip>
          <Progress percent={60} />
        </Descriptions.Item>
        <Descriptions.Item label='GPU' span={3}>
          <Tooltip title='專案GPU使用率'>
            <span>Average Usage: 82%</span>
          </Tooltip>
          <Progress percent={82} />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default QuotaList;
