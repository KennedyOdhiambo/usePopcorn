/* eslint-disable react/prop-types */

import Logo from "./Logo";

const ErrorMessage = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};

export default ErrorMessage;
