import React from "react";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container header__wrap">
          <form className="search-panel">
            <input
              className="search-panel__input"
              placeholder="Please enter what country you'd like to visit"
              ref={this.country}
            />
            <button className="search-panel__cta" type="submit">
              Search
            </button>
          </form>
          <ButtonGroup
            className="material-nav"
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button>Become a host</Button>
            <Button>Help</Button>
            <Button>Sign Up</Button>
            <Button>Log In</Button>
          </ButtonGroup>
        </div>
      </header>
    );
  }
}

export default Header;
