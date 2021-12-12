import React from "react";
import ReportItemByCategory from "../ReportItemByCategory";

const ReportListByCategory = () => {
  return (
    <div>
      <ul>
        <li key="тут id елемента">
          <button type="button" onClick={() => {}}>
            <ReportItemByCategory />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ReportListByCategory;
