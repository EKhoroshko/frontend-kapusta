import { createAction } from "@reduxjs/toolkit";

export const nextPeriod = createAction("currentPeriod/nextPeriod");
export const previousPeriod = createAction("currentPeriod/previousPeriod");
