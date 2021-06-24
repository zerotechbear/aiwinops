import { Row, Col, Card, Descriptions, Tooltip, Progress, } from 'antd';
import ModelPie from './ModelPie';

const DashboardGraph = () => {
  return (
    <>
      <Descriptions
        title='訓練進度'
        layout='horizontal'
        bordered
        style={{ marginBottom: '1rem' }}>
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

      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='Traning Model' bordered={true}>
              <ModelPie />
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Complete Model' bordered={true}>
              <ModelPie />
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Untrained title' bordered={true}>
              <ModelPie />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashboardGraph;
