import { Card, Col, Row } from 'antd';

import PanelLayout from '../components/UI/Layout/PanelLayout';

const AboutPage = () => {
  return (
    <PanelLayout>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='AI' bordered={true}>
              AI
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Win' bordered={true}>
              IS
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Ops' bordered={true}>
              COOL!
            </Card>
          </Col>
        </Row>
      </div>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='AI' bordered={true}>
              AI
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Win' bordered={true}>
              IS
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Ops' bordered={true}>
              COOL!
            </Card>
          </Col>
        </Row>
      </div>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='AI' bordered={true}>
              AI
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Win' bordered={true}>
              IS
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Ops' bordered={true}>
              COOL!
            </Card>
          </Col>
        </Row>
      </div>
    </PanelLayout>
  );
};

export default AboutPage;
