import { useState } from "react";
import "./SearchBox.css";

const SearchBox = ({ onSubmitClick }) => {
  const [form, setForm] = useState({
    city: "",
  });

  // state = {
  //   textEmpty: true,
  // };

  const APIKEY = process.env.OPEN_WEATHER_APP_API_KEY;

  async function getWeatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      onSubmitClick(null);
      alert("City is required");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      onSubmitClick(data);
    }
  }

  const handleChange = (e) => {
    let value = e.target.value;

    setForm({ ...form, city: value });

    // this.setState({
    //   textEmpty: !value,
    // });
  };

  return (
    // <div
    //   className={`search-container ${
    //     headerExpanded ? "search-container-center" : "search-container-top"
    //   }`}
    // >
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="City"
          name="city"
          className="search-input"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweatherBtn" onClick={(e) => getWeatherData(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
