import React from "react";
import Header from "./partials/Header";

import Packages from "../api.json";

class Details extends React.Component {
  state = {
    packages: Packages.data
  };

  redirectTo = path => {
    this.props.history.push(path);
  };

  render() {
    const packageIndex = this.props.match.params.packageIndex;
    const packageInfo = this.state.packages[packageIndex];
    return (
      <>
        <Header redirectTo={this.redirectTo} />

        <section className="container current-package">
          <div className="package-name">
            <h2 className="package-name__title">
              {packageInfo.title}
              <span className="package-name__rating">
                {[...Array(packageInfo.rating)].map((e, i) => (
                  <i key={i} className="material-icons">
                    star
                  </i>
                ))}
              </span>
            </h2>
            <p className="package-name__location">London, UK</p>
          </div>
          <img
            className="current-package__image"
            src={packageInfo.image}
            alt={packageInfo.title}
          />
          <div className="package-details">
            <div className="package-details__wrap">
              <div className="package-details__description">
                <p>{packageInfo.description}</p>
              </div>
              <div className="package-details__comments">
                <p className="package-details__comment">
                  "{packageInfo.comments}"
                </p>
                <div className="author">
                  <img
                    src={packageInfo.avatar}
                    className="author__img"
                    alt={packageInfo.username}
                  />
                  <div className="author__text">
                    <p className="author__name">{packageInfo.username}</p>
                    <p className="author__origin">{packageInfo.country}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="package-checkout">
              <p className="package-checkout__title">Best price:</p>
              <button className="package-checkout__cta">
                {packageInfo.price}
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Details;
