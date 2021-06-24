import { Card, Descriptions, Tooltip } from 'antd';


const columns = { xs: 8, sm: 12, md: 12};

const ReportGraph = () => {
  // Dummy Data
  const data = {
    batch: 3,
    label: 750,
    reviewed: 0,
    total: 900,
    unlabel: 150,
    unreviewed: 900,
    completed: 300,
  };

  const model = {
    name: 'Model001',
    state: 'Training',
    task: 'Object Detection',
    data_source: 'Weld1',
    model_type: 'RefineDet',
    manager: 'Chris',
    metrics: '0.7',
    training_time: {
      start: '2020-12-11 08:10:23',
      end: '2020-12-11 11:20:23',
      take: '03:10:00'
    }
  }

  return (
    <Card
      style={{
        width: '100%',
        height: '550px',
        overflowY: 'scroll',
      }}>
      {/* 傳入專案數據 */}
      <Descriptions
        title='Data'
        layout='vertical'
        bordered
        style={{ marginBottom: '1rem' }}>
        <Descriptions.Item label='#Batch' span={1}>
          <Tooltip title='資料批次量'>{data.batch}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='#Label' span={1}>
          <Tooltip title='資料標籤量'>{data.label}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='#UnLabled' span={1}>
          <Tooltip title='資料未標籤量'>{data.unlabel}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='#Total' span={1}>
          <Tooltip title='資料總量'>{data.total}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='#Reviewed' span={1}>
          <Tooltip title='資料審核量'>{data.reviewed}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='#Unreviewed' span={1}>
          <Tooltip title='資料未審核量'>{data.unreviewed}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='#Complete' span={1}>
          <Tooltip title='資料完成量'>{data.completed}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='#Completed Ratio' span={1}>
          <Tooltip title='資料完成比'>
            {((data.completed / data.total) * 100).toFixed(2)}
          </Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='#Label Ratio' span={1}>
          <Tooltip title='資料標籤比'>
            {((data.unlabel / data.label) * 100).toFixed(2)}
          </Tooltip>
        </Descriptions.Item>
      </Descriptions>
      {/* 需要再另外寫成一個組件 */}
      <Descriptions column={columns} title='Model' layout='vertical' bordered>
        <Descriptions.Item label='Models' span={1}>
          <Tooltip title='模型名稱'>{model.name}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='State' span={1}>
          <Tooltip title='模型狀態'>{model.state}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='Task' span={1}>
          <Tooltip title='模型任務'>{model.task}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='Data Source' span={1}>
          <Tooltip title='模型資料源'>{model.data_source}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='Model Type' span={1}>
          <Tooltip title='模型類型'>{model.model_type}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='Manager' span={1}>
          <Tooltip title='模型管理者'>{model.manager}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='Metrics' span={1}>
          <Tooltip title='模型測量'>{model.metrics}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='Start Time' span={2}>
          <Tooltip title='開始時間'>{model.training_time.start}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='End Time' span={2}>
          <Tooltip title='結束時間'>{model.training_time.end}</Tooltip>
        </Descriptions.Item>
        <Descriptions.Item label='Take' span={1}>
          <Tooltip title='訓練時間'>{model.training_time.take}</Tooltip>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default ReportGraph;
