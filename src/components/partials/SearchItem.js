import React from "react";

class SearchItem extends React.Component {
  goToDetails = () => {
    this.props.redirectTo(`/details/${this.props.index}`);
  };

  render() {
    const { image, title, rating, price } = this.props.details;
    return (
      <div className="search-result" onClick={this.goToDetails}>
        <img src={image} alt={title} className="search-result__image" />
        <div className="search-result-content">
          <div className="search-result-additional">
            <p className="search-result-additional__type">Private room</p>
            <p className="search-result-additional__rating">
              <i className="material-icons">star</i>
              <span>{rating}</span>
            </p>
          </div>
          <h2 className="search-result-content__title">{title}</h2>
          <p className="search-result-content__description">
            3 guests · 1 bedroom · 2 beds · 1 shared bathroom · WiFi · Kitchen ·
            Heating · Washing machine
          </p>
          <div className="search-result-price">
            <div className="search-result-price__badge">
              {/* <i className="material-icons">diamond</i> */}
              Rare find
            </div>
            <div className="search-result-price__price">
              <b>{price}</b> / night
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchItem;
