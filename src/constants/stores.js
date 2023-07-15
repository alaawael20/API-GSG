export const STORES_COLUMNS = (handleDelete, handleEdit) => [
  {
    key: 'id',
    title: 'Id',
  },
  {
    key: 'name',
    title: 'Store',
  },
  {
    key: 'cities',
    title: 'Cities',
  },
  {
    // key: 'user.id'
    key: 'actions',
    title: 'Actions',
    render: (data) => (
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={() => handleDelete(data.id)}>delete</button>
        <button onClick={() => handleEdit(data.id)}>edit</button>
      </div>
    ),
  },
];
