import React, { Component } from "react";
import styles from "./splitScreen.css";
import PropTypes from "prop-types";


// const Home = () => {
//   return (
//     <div className="container">
//       <h1 className="font-general">My Wishlist</h1>
//       <button type="button">Add Course</button>
//     </div>
//
//
//   );
// };

class Home extends Component {
  render() {
      const { topPane, bottomPane} = this.props;

      return (
        <div className={styles.splitScreen}>
          <div className={styles.topPane}>
            <div className="container">
              <h1 className="font-general">My Wishlist</h1>
            </div>
          </div>
          <div className={styles.bottomPane}>
            <h3>John Doe</h3>
          </div>
        </div>
      );
  }
}

Home.propTypes = {
  topPane: PropTypes.node.isRequired,
  bottomPane: PropTypes.node.isRequired
};

export default Home;
