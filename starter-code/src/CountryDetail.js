import React, { Component } from "react";
import countries from './countries.json';
import './CountryDetail.css';

export default class CountryDetail extends Component {

  constructor(props) {
    super(props);
    this.countriesArr = [...countries];
    this.borders = [];
  }

  searchBorderCountries = (borders) => {
    let countriesSelected = [];
    let countryNames = [];
    countriesSelected = this.countriesArr.filter((country) => {
      return borders.includes(country.cca3);
    })
    countriesSelected.map((country) => {
      return countryNames.push(country.name.common);
    })
    return countryNames;
  }

  render() {
    return (
      <div>
        <h1 className="detail-title">{this.props.countrySelected.name.common}</h1>
        <table>
          <tbody>
            <tr>
              <td><h3>Capital:</h3></td>
              <td><h3>{this.props.countrySelected.capital}</h3></td>
            </tr>
            <tr>
              <td><h3>Area:</h3></td>
              <td><h3>{this.props.countrySelected.area} km<sup>2</sup></h3></td>
            </tr>
            <tr>
              <td><h3>Borders:</h3></td>
              <td>
                <ul>
                  {
                    this.searchBorderCountries(this.props.countrySelected.borders).map((borderName, idx) => {
                      return (<li key={idx}><h3>{borderName}</h3></li>)
                    })
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div >
    );
  }
}
