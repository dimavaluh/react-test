import React from "react";
import Header from "./partials/Header";
import Feedback from "./partials/Feedback";
import Packages from "../api.json";

class Home extends React.Component {
  country = React.createRef();

  state = {
    packages: Packages.data
  };

  componentDidMount() {}
  componentDidUpdate() {}

  redirectToDetails = index => {
    //  this.state.packages[index]
    this.props.history.push(`/details/${index}`);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/search/${this.country.current.value}`);
  };

  render() {
    return (
      <>
        <Header />
        <section className="container feedback">
          <h2 className="feedback__title">
            What guests are saying about homes in the United Kingdom
          </h2>
          <p className="feedback__description">
            United Kingdom homes were rated <b>4.7 out of 5 stars</b> with
            <b> 10,500,000+ rewiews</b>
          </p>
          <div className="feedback__list">
            {Object.keys(this.state.packages).map(key => (
              <Feedback
                redirectToDetails={this.redirectToDetails}
                key={key}
                index={key}
                details={this.state.packages[key]}
              />
            ))}
          </div>
        </section>
        <section className="container just-booked">
          <h3 className="just-booked__title">Just Booked</h3>
        </section>
      </>
    );
  }
}

export default Home;
