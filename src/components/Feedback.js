import React from "react";

class Feedback extends React.Component {
  handleClick = () => {
    this.props.redirectToDetails(this.props.index);
  };

  render() {
    const {
      image,
      rating,
      title,
      comments,
      avatar,
      username,
      country
    } = this.props.details;

    return (
      <div className="package" onClick={this.handleClick}>
        <img src={image} className="package__image" alt={title} />
        <div className="package__rating">
          {[...Array(rating)].map((e, i) => (
            <i key={i} className="material-icons">
              star
            </i>
          ))}
        </div>
        <p className="package__comment">{comments}</p>
        <div className="author">
          <img src={avatar} className="author__img" alt={username} />
          <div className="author__text">
            <p className="author__name">{username}</p>
            <p className="author__origin">{country}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
