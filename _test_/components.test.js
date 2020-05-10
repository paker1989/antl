import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Button, version } from "antd";

const SelectionContext = React.createContext();

const TableRow = props => {
  const selectedRowKeys = React.useContext(SelectionContext);
  const key = props["data-row-key"];

  const containsKey = selectedRowKeys.includes(key);

  return React.useMemo(() => {
    return <tr {...props} />;
  }, [containsKey]);
};

const columns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    render: text => {
      console.log("Row render");
      return String(text);
    }
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

class App extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <h1>antd version: {version}</h1>
        <div>
          Select a row and see console which shows all rows being re-rendered
          instead of only the selected one
        </div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <SelectionContext.Provider value={selectedRowKeys}>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            components={{
              body: {
                row: TableRow
              }
            }}
          />
        </SelectionContext.Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
