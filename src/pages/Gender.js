import { useState, useEffect } from "react";
import "./Gender.css";
export default function Gender() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [search, setSearch] = useState("Name");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSearch(value);
  }

  console.log();
  useEffect(() => {
    setIsLoading(true);
    const url = `https://api.genderize.io?name=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setGender(data.gender);
        setIsLoading(false);
      });
  }, [search]);

  return (
    <div>
      <header>
        <h1>GENDER</h1>
      </header>
      <h2>Gender guess</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
      <p>{isLoading ? "Loading..." : ""}</p>
      <div className="result__gender">
        <p className="name__gender">{name}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
}
