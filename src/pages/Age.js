import { useEffect, useState } from "react";
import "./Age.css";
export default function Age() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [search, setSearch] = useState("");
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
    if (search) {
      setIsLoading(true);
      const url = `https://api.agify.io?name=${search}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
          setAge(data.age);

          setIsLoading(false);
        });
    }
  }, [search]);

  return (
    <div>
      <h2>Age guess</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Insert a name..."
          type="text"
          value={value}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      <p>{isLoading ? "Loading..." : ""}</p>
      <div className="result__age">
        <p className="name__age">{name}</p>
        <p>{age}</p>
      </div>
    </div>
  );
}
