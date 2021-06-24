import { Card, Col, Row } from 'antd';

import PanelLayout from '../components/UI/Layout/PanelLayout';


const HelpPage = () => {
  return (
    <PanelLayout>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='Zero' bordered={true}>
              Hi
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Dimension' bordered={true}>
              Need
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Cool' bordered={true}>
              Help?
            </Card>
          </Col>
        </Row>
      </div>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='Zero' bordered={true}>
              Hi
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Dimension' bordered={true}>
              Need
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Cool' bordered={true}>
              Help?
            </Card>
          </Col>
        </Row>
      </div>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='Zero' bordered={true}>
              Hi
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Dimension' bordered={true}>
              Need
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Cool' bordered={true}>
              Help?
            </Card>
          </Col>
        </Row>
      </div>
    </PanelLayout>
  );
};

export default HelpPage;
