import React, { useState } from "react";
import PropTypes from "prop-types";

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="box">
      <button className="btn-toggle" onClick={handleToggle}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
