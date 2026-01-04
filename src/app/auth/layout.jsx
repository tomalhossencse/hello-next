import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex-2">{children}</div>
      <div className="flex-1">Welcome for Authentications.</div>
    </div>
  );
};

export default AuthLayout;
