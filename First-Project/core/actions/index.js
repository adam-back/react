let nextRowId = 0;

export const addRow( name, employmentStatus ) => {
  return {
    type: "ADD_ROW",
    id: nextRowId++,
    name,
    employmentStatus
  }
}