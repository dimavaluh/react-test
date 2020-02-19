import React from "react";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container header__wrap">
          <div className="header__logo">
            <i class="material-icons">trip_origin</i>
          </div>
          <form className="search-panel">
            <input
              className="search-panel__input"
              placeholder="What country you'd like to visit"
              ref={this.country}
            />
            <button className="search-panel__cta" type="submit">
              <i class="material-icons">search</i>
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
