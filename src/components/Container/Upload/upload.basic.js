import React, { Fragment } from "react";

import { Typography, Upload, Icon, Button, message } from "antd";

import "./upload.less";

const { Title } = Typography;

export default () => {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },
    listType: "picture",
    onChange(info) {
      console.log(info);
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    defaultFileList: [
      {
        uid: "b1ss2s",
        size: 1024 * 3,
        name: "艳照门1",
        fileName: "艳照门1.jpg",
        type: "jpg",
        status: "done",
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: "bs1ss2s",
        size: 1024 * 4,
        name: "可可爱爱",
        fileName: "可爱.png",
        type: "png",
        status: "uploading",
      },
      {
        uid: "bs1sss2s",
        size: 1024 * 4,
        name: "可可爱爱",
        fileName: "可爱.png",
        type: "png",
        status: "error",
        response: "上传正式失败，你已被官方认证为loser"
      }
    ]
  };

  return (
    <Fragment>
      <Title level={4}>基本用法</Title>
      <Upload {...props}>
        <Button>
          <Icon type="cloud-upload" />
          <span>Click to upload</span>
        </Button>
      </Upload>
    </Fragment>
  );
};
