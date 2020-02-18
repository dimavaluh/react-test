import React from "react";
import Header from "./Header";

import Packages from "../api.json";

class Details extends React.Component {
  state = {
    packages: Packages.data
  };

  render() {
    const packageIndex = this.props.match.params.packageIndex;
    const packageInfo = this.state.packages[packageIndex];
    return (
      <>
        <Header />

        <section className="container current-package">
          {/* <p>{JSON.stringify(packageInfo)}</p> */}
          <h2 className="current-package__title">
            {packageInfo.title}
            <span className="current-package__rating">
              {[...Array(packageInfo.rating)].map((e, i) => (
                <i key={i} className="material-icons">
                  star
                </i>
              ))}
            </span>
          </h2>
          <p className="current-package__location">London, UK</p>
          <img
            className="current-package__image"
            src={packageInfo.image}
            alt={packageInfo.title}
          />
          <div className="current-package__details">
            <div className="current-package__details-wrap">
              <div className="current-package__description">
                <p>{packageInfo.description}</p>
              </div>
              <div className="current-package__comments">
                <p className="current-package__comment">
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
            <div className="current-package__checkout">
              <button>{packageInfo.price}</button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Details;
