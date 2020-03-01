import React, { useState } from "react";

import { Upload, Button, Icon, Modal } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  listType: "picture",
  // showUploadList: {
  //   showDownloadIcon: true,
  //   downloadIcon: 'download ',
  //   showRemoveIcon: false,
  //   removeIcon: <Icon type="delete" onClick={e => console.log(e, 'custom removeIcon event')} />,
  // },
  transformFile(file) {
    console.log("transform file");
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const canvas = document.createElement("canvas");
        const img = document.createElement("img");
        img.src = reader.result;
        img.onload = () => {
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = "red";
          ctx.textBaseline = "middle";
          ctx.fillText("Ant Design", 20, 20);
          canvas.toBlob(resolve);
        };
      };
    });
  }
};

export default () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div>
      <Upload
        {...props}
        onPreview={file => {
          console.log(file);
          setPreviewImage(file.thumbUrl || file.url);
          setPreviewVisible(true);
        }}
      >
        <Button>
          <Icon type="cloud-upload" /> Upload
        </Button>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={() => {
            setPreviewVisible(false);
          }}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </Upload>
    </div>
  );
};
