import React from "react";
// import styles from "./Loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function SmallLoader() {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
