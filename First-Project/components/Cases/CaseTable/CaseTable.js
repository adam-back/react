import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Row from './Row';

const TableExampleSimple = (props) => {
  const rows = props.records.map(( record ) =>
    <Row record={record} />
  );

  return (
    <div>
      <Table>
        <TableHeader
          adjustForCheckbox={false}
          enableSelectAll={false}
          displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}>
          {rows}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableExampleSimple;