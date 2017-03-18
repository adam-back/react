import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class CaseForm extends React.Component {
  state = {
    name: null,
    value: null
  }

  handleSelectChange = ( event, index, value ) => this.setState({ value });
  handleNameChange = ( event, newText ) => this.setState({ name: newText });
  onSubmitForm = (event) => {
    this.props.onSubmitForm( this.state.name, this.state.value );
    // reset form
    this.setState({ name: null, value: null });
  }

  render() {
    return (
      <form style={{paddingTop: 28}} onSubmit={this.onSubmitForm}>
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
}

export default CaseForm;
