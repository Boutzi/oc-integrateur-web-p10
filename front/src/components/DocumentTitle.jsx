import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types"

const DocumentTitle = ({ title }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (title) {
      document.title = `${title} | ArgentBank`;
    } else {
      document.title = "ArgentBank";
    }
  }, [title, pathname]);

  return null;
};

DocumentTitle.propTypes = {
    title: PropTypes.string
}

export default DocumentTitle;
