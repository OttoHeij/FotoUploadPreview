import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/image-upload";

function App() {
  return (
    <div className="container">
      <h3>tellus2.nl</h3>
      <h4>Foto upload met preview</h4>

      <div className="content">
        <UploadImages />
      </div>
    </div>
  );
}

export default App;
