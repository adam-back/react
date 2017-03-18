let nextRowId = 0;

export const addRow = (name, employmentStatus) => (
  {
    type: 'ADD_ROW',
    id: nextRowId++,
    name,
    employmentStatus
  }
);
