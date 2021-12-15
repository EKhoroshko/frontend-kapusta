import { createAction } from "@reduxjs/toolkit";

export const nextPeriod = createAction("Current-period/nextPeriod");
export const previousPeriod = createAction("Current-period/previousPeriod");
export const decrementMonth = createAction("Current-period/decrementMonth");
export const incrementMonth = createAction("Current-period/incrementMonth");
export const changeCurrentMonth = createAction(
  "Current-period/changeCurrentMonth"
);
