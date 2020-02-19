import React from "react";
import Header from "./partials/Header";
import SearchItem from "./partials/SearchItem";
import Packages from "../api.json";

class Search extends React.Component {
  state = {
    packages: Packages.data
  };

  redirectTo = path => {
    this.props.history.push(path);
  };

  render() {
    const country = this.props.match.params.country;
    return (
      <>
        <Header redirectTo={this.redirectTo} />
        <section className="container search-results">
          <p className="search-results__title">
            Search results for: <b>"{country}"</b>
          </p>
          {Object.keys(this.state.packages)
            .filter(item => {
              return (
                country.toLowerCase() ===
                this.state.packages[item].country.toLowerCase()
              );
            })
            .map(key => (
              <SearchItem
                redirectTo={this.redirectTo}
                key={key}
                index={key}
                details={this.state.packages[key]}
              />
            ))}
        </section>
      </>
    );
  }
}

export default Search;
