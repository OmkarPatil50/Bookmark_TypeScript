import React from "react";

type HeaderComponentType = {
  title: string;
};

export const Header: React.FC<HeaderComponentType> = ({ title }) => {
  return <h1 className="app-title">{title}</h1>;
};
