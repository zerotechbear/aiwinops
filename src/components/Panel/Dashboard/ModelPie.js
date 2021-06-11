import { Pie } from '@ant-design/charts';

const ModelPie = () => {
    // 資料數據比例
    let data = [
    {
      type: 'Data',
      value: 60,
    },
    {
      type: 'Model',
      value: 30,
    },
    {
      type: '限度邏輯',
      value: 10,
    },
  ];

  let config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.4,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}%',
      style: {
        textAlign: 'center',
        fontSize: 12,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        formatter: function formatter() {
          return 'Data Model';
        },
      },
    },
  };
  return <Pie {...config} />;
};

export default ModelPie;