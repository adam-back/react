import React from 'react';
import { connect } from 'react-redux';
import { addRow } from '../core/actions';
import CaseForm from '../components/Cases/CaseForm/CaseForm';

const mapDispatchToProps = ( dispatch ) => {
  return {
    onSubmitForm: ( name, employmentStatus ) => {
      dispatch( addRow( name, employmentStatus ) );
    }
  };
};

const CaseContainer = connect( null, mapDispatchToProps )( CaseForm );

export default CaseContainer;
