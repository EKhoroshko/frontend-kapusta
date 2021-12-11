import React from "react";
import Header from "../../components/Header/Header";
import ReportListByCategory from "../../components/ReportListByCategory";
import DetailsBalance from "../../components/DetailsBalance";

const ReportPage = () => {
  return (
    <>
      <Header />
      {/* <ButtonBackToPreviousPage />
      <СurrentPeriod />
      <CurrentBalance /> */}
      <DetailsBalance />
      <ReportListByCategory />
      {/* <ReportListChart /> */}
    </>
  );
};

export default ReportPage;
