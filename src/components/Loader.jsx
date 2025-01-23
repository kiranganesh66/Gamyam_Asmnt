import PropTypes from "prop-types"; 
import "../index.css";

const Loader = ({ isLoading }) => (
  <div className={`loader ${isLoading ? "show" : ""}`}>
    <div className="spinner"></div>
    <span className="loading-text">Loading...</span>
  </div>
);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired, 
};

export default Loader;
