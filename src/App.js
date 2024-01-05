import React, { useEffect, useState } from "react";
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import './App.css';

const GridColumns = () => (
  <>
    <Column field="userId" title="UID" className="column-uid" />
    <Column field="id" title="ID" className="column-id" />
    <Column field="title" title="Title" className="column-title" />
    <Column field="body" title="Body" className="column-body" />
  </>
);

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    loading ? (
      <div>Loading...</div>
    ) : (
      <Grid style={{ height: '100vh' }} data={products}>
        <GridColumns />
      </Grid>
    )
  );
};

export default App;