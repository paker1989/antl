import React, { useState, useEffect } from "react";
import {
  List,
  Icon,
  Typography,
  Avatar,
  Button,
  Skeleton,
  Row,
  Col
} from "antd";
import Axios from "axios";

import "./list.less";

const { Text } = Typography;
const _COUNT_ = 3;
const fakeUserURL = `https://randomuser.me/api/?results=${_COUNT_}&inc=name,gender,email,nat&noinfo`;

export default () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = cb => {
    Axios.get(fakeUserURL, {
      headers: {
        "content-type": "application/json"
      }
    }).then(res => {
      if (res.status === 200) {
        const { results } = res.data;
        cb(results);
      }
    });
  };

  const getMoreData = () => {
    setLoading(true);
    setData(
      data.concat(
        [...new Array(_COUNT_)].map(e => ({
          loading: true,
          name: {},
          gender: {}
        }))
      )
    );
    getData(results => {
      setTimeout(() => {
        console.log(data);
        console.log(data.concat([...results]));
        setData(data.concat([...results]));
        setLoading(false);
      }, 1500);
    });
  };

  useEffect(() => {
    getData(results => {
      setTimeout(() => {
        setData(data.concat([...results]));
        setLoading(false);
        setInitLoading(false);
      }, 1500);
    });
  }, [data]);

  return (
    <div className="demo-wrapper">
      <List
        header={
          <div>
            <Icon type="user" />
            <Text copyable>User center</Text>
          </div>
        }
        dataSource={data}
        renderItem={item => {
          return (
            <List.Item actions={[<Icon type="edit" />, <Icon type="delete" />]}>
              <Skeleton title={false} avatar loading={item.loading} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.name.last}
                  description={
                    <div>
                      <Row gutter={10}>
                        <Col xs={24} lg={12}>
                          Gender:
                        </Col>
                        <Col xs={24} lg={12}>
                          {item.gender}
                        </Col>
                      </Row>
                    </div>
                  }
                />
              </Skeleton>
            </List.Item>
          );
        }}
        bordered
        size="large"
        itemLayout="horizontal"
        style={{ width: 500 }}
        loading={initLoading}
        loadMore={
          loading || initLoading ? null : (
            <div className="loadmore-container">
              <Button onClick={getMoreData}>加载更多</Button>
            </div>
          )
        }
      ></List>
    </div>
  );
};
