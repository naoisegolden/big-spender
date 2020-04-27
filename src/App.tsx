import React from "react";

interface AppProps {
  name: string;
}

export const App: React.FC<AppProps> = ({ name }) => {
  return <div>Hello {name}</div>;
};
