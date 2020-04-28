import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import CountryDetail from "./CountryDetail"
import './App.css';
import countries from './countries.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.countriesArr = [...countries];
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary nav-element">
          <h1 className="main-title">WikiCountries</h1>
        </nav>
        <div className="info-container">
          <div className="list-group countries-list">
            {
              this.countriesArr.map((country, idx) => {
                return (
                  <Link
                    className="list-group-item list-group-item-action country-container"
                    key={idx}
                    to={"/" + country.cca3}
                  >
                    <p className="flag">{country.flag}</p><p className="country-name">{country.name.official}</p>
                  </Link>
                )
              })
            }
          </div>
          <div className="info-right-container">
            <Switch>
              <Route
                exact
                path="/:cca3"
                render={(props) => {
                  let code = props.match.params.cca3;
                  let country = {};
                  this.countriesArr.map((oneCountry) => {
                    if (oneCountry.cca3 === code) {
                      country = oneCountry;
                    }
                    return 0;
                  })
                  return (
                    <CountryDetail countrySelected={country}></CountryDetail>
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
