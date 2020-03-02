import React, { Fragment } from "react";
import { Typography } from "antd";

import TableBasic from "./table.basic";
import TableRender from "./table.render";
import TableColumGroup from "./table.customGroup";
import TableSelection from "./table.selection";
import TableFilterSort from "./table.filtersort";
import TableFilteredDropdown from './table.filteredDropdown';
import TableFetchData from './table.fetchData';
import TableExpand from './table.expand';
import TableMergeCell from './table.mergecell';
import TableChildren from './table.children';
import TableEditable from './table.editable';
import TableEditRow from './table.editRow';

import "./table.less";

const { Title } = Typography;

export default () => {
  return (
    <Fragment>
      <Title level={2}>Table 表格</Title>
      <TableBasic />
      <TableRender />
      <TableColumGroup />
      <TableSelection />
      <TableFilterSort/>
      <TableFilteredDropdown />
      <TableFetchData />
      <TableExpand />
      <TableMergeCell/>
      <TableChildren/>
      <TableEditable />
      <TableEditRow/>
    </Fragment>
  );
};
