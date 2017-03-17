import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Row from './Row';

const TableExampleSimple = (props) => {
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
          {props.records.map(( record ) =>
            <Row record={record} />
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableExampleSimple;