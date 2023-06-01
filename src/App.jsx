import React, { useState } from "react";
import "./index.css";
import SearchHeader from "./Components/SearchHeader";
import searchImages from "./Components/api";
import ImageList from "./Components/ImageList";
function App() {
  const [images, setİmages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setİmages(result);
  };
  return (
    <div>
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
