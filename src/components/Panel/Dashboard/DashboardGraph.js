import { Card, Descriptions, Progress, Tooltip } from 'antd';
import ModelPie from './ModelPie';

const DashboardGraph = () => {
  return (
    <Card
      style={{
        width: '100%',
        height: '800px',
      }}>
      <Card>
        <Descriptions title='Training Process' layout='horizontal' bordered>
          <Descriptions.Item
            label='Data'
            span={1}
            style={{ textAlign: 'center' }}>
            <Tooltip title='已訓練資料集'>
              <Progress type='circle' percent={60} />
            </Tooltip>
          </Descriptions.Item>
          <Descriptions.Item
            label='Model'
            span={1}
            style={{ textAlign: 'center' }}>
            <Tooltip title='模型訓練進度'>
              <Progress type='circle' percent={70} />
            </Tooltip>
          </Descriptions.Item>
          <Descriptions.Item
            label='Logic'
            span={1}
            style={{ textAlign: 'center' }}>
            <Tooltip title='限度邏輯'>
              <Progress type='circle' percent={15} />
            </Tooltip>
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card>
        <Descriptions title='Indicators' layout='vertical' bordered>
          <Descriptions.Item label='Graph'>
            <ModelPie />
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </Card>
  );
};

export default DashboardGraph;
