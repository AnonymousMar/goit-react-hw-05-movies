import { useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { SearchForm, Button, ButtonIcon, Input } from "./Searchbar.styled";

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handlequeryChange = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      toast.error("Empty query!", {
        style: {
          border: "1px solid #E8301C",
          color: "#E8301C",
        },
      });
      return;
    }
    onSubmit(query);
   // setQuery("");
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        onChange={handlequeryChange}
        name="imageName"
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">
        <ButtonIcon />
        Search
      </Button>
    </SearchForm>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};