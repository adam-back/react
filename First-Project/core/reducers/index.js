const row = (state = {}, action ) => {
  switch( action.type ) {
    case 'ADD_ROW':
      return {
        id: action.id,
        name: action.name,
        employmentStatus: action.employmentStatus
      }
    default:
      return state
  }
}

const rows = (state = [], action ) => {
  switch( action.type ) {
    case 'ADD_ROW':
      return [
        ...state,
        row( undefined, action )
      ]
    default:
      return state
  }
}

export default rows