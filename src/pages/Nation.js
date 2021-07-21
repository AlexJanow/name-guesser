import { useState, useEffect } from "react";
import "./Nation.css";
export default function Nation() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("Name");
  const [nationOne, setNationOne] = useState("Nation 1");
  const [nationTwo, setNationTwo] = useState("Nation 2");
  const [nationThree, setNationThree] = useState("Nation 3");
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
    const url = `https://api.nationalize.io?name=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data === undefined) {
          console.log(null);
        } else {
          setName(data.name);

          setNationOne(data.country[0].country_id);
          setNationTwo(data.country[1].country_id);
          setNationThree(data.country[2].country_id);
          setIsLoading(false);
        }
      });
  }, [search]);

  return (
    <div>
      <header>
        <h1>NATION</h1>
      </header>
      <h2>Nation guess</h2>
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
      <div className="result__nation">
        <p className="name__nation">{name}</p>
        {nationOne && <p>1 {nationOne}</p>}
        {nationTwo && <p>2 {nationTwo}</p>}
        {nationThree && <p>3 {nationThree}</p>}
      </div>
    </div>
  );
}
