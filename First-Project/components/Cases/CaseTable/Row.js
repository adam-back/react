import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';


const Row = (props) => {
  const record = props.record;

  return (
    <TableRow>
      <TableRowColumn>{ record.id }</TableRowColumn>
      <TableRowColumn>{ record.name }</TableRowColumn>
      <TableRowColumn>{ record.employmentStatus }</TableRowColumn>
    </TableRow>
  )
};

export default Row;