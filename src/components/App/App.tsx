import React from "react";
import styles from "./App.scss";

interface AppProps {
  name: string;
}

export const App: React.FC<AppProps> = ({ name }) => {
  return <div className={styles.app}>Hello {name}</div>;
};
