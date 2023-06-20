import React from "react";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const DashboardLayout = () => {
  return (
    <>
      <Stack alignItems={"center"} >
        <Header />
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;