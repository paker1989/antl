import React, { useState } from "react";
import { Cascader, Button, Icon } from "antd";

import "./cascader.less";

export default () => {
  const [city, setCity] = useState(null);
  const [loadedOptions, setLoadedOptions] = useState([
    {
      value: "zhejiang",
      label: "Zhejiang",
      isLeaf: false
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      isLeaf: false
    }
  ]);

  const options = [
    {
      label: "浙江",
      value: "zj",
      children: [
        {
          label: "衢州",
          value: "qz",
          children: [
            {
              label: "开化县",
              value: "kh"
            },
            {
              label: "龙游县",
              value: "ly"
            },
            {
              label: "江山市",
              value: "js",
              disabled: true
            }
          ]
        },
        {
          label: "宁波",
          value: "nb"
        }
      ]
    },
    {
      label: "山东",
      value: "sd",
      children: [
        {
          label: "青岛",
          value: "qd"
        },
        {
          label: "烟台",
          value: "yt"
        }
      ]
    }
  ];
  return (
    <div className="demo-cascader">
      <h1 className="demo-title">Cascader 级联选择</h1>
      <div className="demo-wrapper">
        <span>{city == null ? "" : city}</span>
        <Cascader
          options={options}
          //   placeholder="请选择配货城市"
          //   defaultValue={["sd", "yt"]}
          style={{ width: 300, marginLeft: 15 }}
          onChange={(val, selectedOptions) => {
            setCity(selectedOptions.map(item => item.label).join("/"));
          }}
        >
          <Button type="primary">选择配货城市</Button>
        </Cascader>
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">DisplayRenderer</h1>
        <Cascader
          options={options}
          placeholder="请选择配货城市"
          defaultValue={["sd", "yt"]}
          style={{ width: 300, marginLeft: 15 }}
          expandTrigger="hover"
          //   changeOnSelect
          //   displayRender={labels => labels[labels.length - 1]}
          displayRender={(label, selectedOptions) => {
            return (
              <span>
                {label.join(" -> ")}
                <Icon type="smile" style={{ marginLeft: 5 }} />
              </span>
            );
          }}
          //   showSearch
        />
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">Load data</h1>
        <Cascader
          options={loadedOptions}
          loadData={selectedOptions => {
            console.log(selectedOptions);
            const targetOption = selectedOptions[selectedOptions.length - 1];
            targetOption.loading = true;

            setTimeout(() => {
              targetOption.children = [
                {
                  label: `${targetOption.label}-child-label1`,
                  value: `${targetOption.value}-child-val1`
                },
                {
                  label: `${targetOption.label}-child-label2`,
                  value: `${targetOption.value}-child-val2`
                }
              ];
              targetOption.loading = false;
              setLoadedOptions([...loadedOptions]);
            }, 1000);
          }}
        />
      </div>
    </div>
  );
};
