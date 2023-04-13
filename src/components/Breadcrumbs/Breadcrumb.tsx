import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import * as React from 'react';
import { NavLink } from "react-router-dom";


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  return (
    <Box mt={4} display="flex" justifyContent="center" alignItems="center" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink to={"/Dashboard"}>
          <Link underline="hover" color="text.primary"  aria-current="page">
            Dashboard
          </Link>
        </NavLink>

      </Breadcrumbs>
    </Box>
  );
}