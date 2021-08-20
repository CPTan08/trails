import React, { Component } from "react";
import "./weather.css";

class Weather extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  async componentDidMount() {
    const URL = `https://api.data.gov.sg/v1/environment/24-hour-weather-forecast?`;

    try {
      let resp = await fetch(URL);
      let response = await resp.json();
      this.setState({ items: response.items });

      // .then((response) => response.json()) // convert data to json
      // .then((json) => {
      //console.log(response);

      //   this.setState({ articles: json.articles });
      // }); // log data
    } catch (err) {
      console.log("ERROR" + err.message);
    }
  }

  render() {
    return this.state.items.map((item, i) => {
      console.log({ item });
      return (
        <div>24 Hours Weather</div>
        //<div>{item.general}</div>
      );
    });
  }
}
export default Weather;
