import { Card, Col, Row } from 'antd';
import PanelLayout from '../components/UI/Layout/PanelLayout';

const TutorialsPage = () => {
  return (
    <PanelLayout>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='Follow' bordered={true}>
              LETS
            </Card>
          </Col>
          <Col span={8}>
            <Card title='This' bordered={true}>
              Start
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Guide' bordered={true}>
              to Play!
            </Card>
          </Col>
        </Row>
      </div>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='Follow' bordered={true}>
              LETS
            </Card>
          </Col>
          <Col span={8}>
            <Card title='This' bordered={true}>
              Start
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Guide' bordered={true}>
              to Play!
            </Card>
          </Col>
        </Row>
      </div>
      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title='Follow' bordered={true}>
              LETS
            </Card>
          </Col>
          <Col span={8}>
            <Card title='This' bordered={true}>
              Start
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Guide' bordered={true}>
              to Play!
            </Card>
          </Col>
        </Row>
      </div>
    </PanelLayout>
  );
};

export default TutorialsPage;
