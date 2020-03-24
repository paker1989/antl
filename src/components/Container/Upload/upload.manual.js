// import { UploadOutlined } from "@ant-design/icons";
import React from "react";
import Axios from "axios";
import { Button, message, Upload, Icon } from "antd";

export default class Demo extends React.Component {
  state = {
    fileList: [],
    uploading: false
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append("files[]", file);
    });

    this.setState({
      uploading: true
    });

    // You can use any AJAX library you like
    Axios({
      url: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      method: "post",
      // processData: false,
      data: formData
    }).then(res => {
      if (res.status === 200) {
        this.setState({
          fileList: [],
          uploading: false
        });
        message.success("upload successfully.");
      } else {
        this.setState({
          uploading: false
        });
        message.error("upload failed.");
      }
    });
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      // multiple: true,
      listType: "picture",
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file]
        }));
        return false;
      },
      fileList
    };

    return (
      <div>
        <Upload
          multiple
          onChange={info => {
            console.log("onchange");
            const { fileList } = info;
            // console.log(file);
            // console.log(fileList);
            fileList.forEach(file => {
              let fileReader = new FileReader();
              fileReader.addEventListener("load", () => {
                const res = fileReader.result;
                file.url = res;
              });
              fileReader.readAsDataURL(file.originFileObj);
            });
            console.log(fileList);
            this.setState({
              fileList: [...fileList]
            });
            // if (file.status === "done") {
            //   let fileReader = new FileReader();
            //   fileReader.addEventListener("load", () => {
            //     const res = fileReader.result;
            //     file.url = res;
            //   });
            //   fileReader.readAsDataURL(file.originFileObj);
            // }
          }}
          {...props}
        >
          <Button>
            <Icon type="cloud-upload" /> Select File
          </Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? "Uploading" : "Start Upload"}
        </Button>
      </div>
    );
  }
}
