import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

const App = () => {
  const products = [
    { 'ProductID': 1, 'ProductName': 'Chai', 'UnitPrice': 18.0000, 'Discontinued': true },
    { 'ProductID': 2, 'ProductName': 'Chang', 'UnitPrice': 19.0000, 'Discontinued': false },
    { 'ProductID': 3, 'ProductName': 'Aniseed Syrup', 'UnitPrice': 10.0000, 'Discontinued': false },
  ];

  return (
    <Grid data={products}>
      <Column field="ProductID" title="ID" width="50px" />
      <Column field="ProductName" title="Name" width="250px" />
      <Column field="UnitPrice" title="Price" format="{0:c}" width="80px" />
      <Column field="Discontinued" title="Discontinued" width="120px" />
    </Grid>
  );
};

export default App;