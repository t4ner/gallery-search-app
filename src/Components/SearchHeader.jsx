import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValueInput] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(valueInput);
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchHeader;
