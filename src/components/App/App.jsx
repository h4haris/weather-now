import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./App.css";

class App extends React.Component {
  state = {
    weather: null,
  };

  handleSubmitClick = (data) => {
    this.setState({ weather: data });
  };

  render() {
    const { weather } = this.state;
    return (
      <div className="App">
        <div className="weather-container">
          <span className="title">Weather App</span>
          <br />
          {/* <img src="images/background.jfif" alt="headerImage" /> */}
          <SearchBox onSubmitClick={this.handleSubmitClick} />

          {weather ? <WeatherCard data={weather} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
