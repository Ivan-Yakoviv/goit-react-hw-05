import { useState } from "react";
import s from "./SearchBar.module.css";
import { PiListMagnifyingGlassLight } from "react-icons/pi";

const SearchBar = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      return alert("Cannot be empty fill the field input.");
    }
    onHandleSubmit(query);
  };
  return (
    <div>
      <form className={s.form} onSubmit={handleSubmitForm}>
        <input
          className={s.input}
          type="text"
          value={query}
          name="query"
          onChange={handleChange}
        />
        <button className={s.btn} type="submit">
          <PiListMagnifyingGlassLight size={26} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
