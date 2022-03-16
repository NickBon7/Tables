export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Age",
    accessor: "age",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    columns: [
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Age",
        accessor: "age",
      },
    ],
  },
];
