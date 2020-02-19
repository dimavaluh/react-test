import React from "react";

class Header extends React.Component {
  country = React.createRef();

  goHome = () => {
    this.props.redirectTo("/");
  };

  handleSearch = event => {
    event.preventDefault();
    this.props.redirectTo(`/search/${this.country.current.value}`);
  };

  render() {
    return (
      <header className="header">
        <div className="container header__wrap">
          <div className="header__logo" onClick={this.goHome}>
            <i className="material-icons">trip_origin</i>
          </div>
          <form className="search-panel" onSubmit={this.handleSearch}>
            <input
              className="search-panel__input"
              placeholder="What country you'd like to visit"
              ref={this.country}
            />
            <button className="search-panel__cta" type="submit">
              <i className="material-icons">search</i>
            </button>
          </form>
          <div className="controls">
            <button className="controls__item">Become a host</button>
            <button className="controls__item">Help</button>
            <button className="controls__item">Sign Up</button>
            <button className="controls__item">Log In</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
