import React, { useEffect, useState } from "react";
import "./App.css";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";
import axios from "axios";

const App = () => {
  const [testdata, setTestdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setTestdata(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
  <Grid 
    data={testdata}
  > 
  </Grid>
  )
};

export default App;
