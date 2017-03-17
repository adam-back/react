import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class CaseForm extends React.Component {
  state = {
    value: null,
    name: null
  };

  handleSelectChange = ( event, index, value ) => this.setState({ value });
  handleNameChange = ( event, newText ) => this.setState({ name: newText });

  onSubmitForm = (event) => {

  }

  render() {
    console.log( 'staet', this.state );
    return (
      <form style={{paddingTop: 28}}>
        <TextField onChange={this.handleNameChange} hintText='Name'></TextField>
        <br/>
        <SelectField
          floatingLabelText="Employment Status"
          value={ this.state.value }
          onChange={this.handleSelectChange}>
          <MenuItem value='Employed' primaryText='Employed'/>
          <MenuItem value='Unemployed' primaryText='Unemployed'/>
        </SelectField>
        <br/>
        <RaisedButton label='Submit' onTouchTap={this.onSubmitForm}/>
      </form>
    );
  }
};

export default CaseForm;
