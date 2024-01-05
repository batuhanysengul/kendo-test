import React, { useEffect, useState } from "react";
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    products.length > 0 ? (
      <Grid style={{ height: '100vh' }} data={products}>
        <Column field="id" title="ID" width="50px" />
        <Column field="title" title="Title" width="400px" />
        <Column field="body" title="Body" width="400px" />
      </Grid>
    ) : (
      <div>Loading...</div>
    )
  );
};

export default App;