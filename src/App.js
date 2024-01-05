import React, { useEffect, useState } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";

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
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); 
  const [sort, setSort] = useState([]); 

  const pageChange = (event) => {
    setPage(event.page);
    setPageSize(event.pageSize);
  };

  const sortChange = (event) => {
    setSort(event.sort);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div className="loading">Loading...</div>
  ) : (
    <Grid
      style={{ height: "100vh" }}
      data={products}
      pageable={true}
      onPageChange={pageChange}
      skip={(page - 1) * pageSize}
      take={pageSize}
      total={products.length}
      sortable={true}
      sort={sort}
      onSortChange={sortChange}
    >
      <GridColumns />
    </Grid>
  );
};

export default App;