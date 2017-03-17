import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class CaseForm extends React.Component {
  state = {
    value: null
  };

  handleSelectChange = ( event, index, value ) => {
    console.log( 'index', index )
    console.log( 'value', value )
    this.setState({ value });
  }

  render() {
    return (
      <form style={{paddingTop: 28}}>
        <TextField hintText='Name'></TextField>
        <br/>
        <SelectField
          floatingLabelText="Employment Status"
          value={ this.state.value }
          onChange={this.handleSelectChange}>
          <MenuItem value={1} primaryText='Employed'/>
          <MenuItem value={2} primaryText='Unemployed'/>
        </SelectField>
      </form>
    );
  }
};

export default CaseForm;
