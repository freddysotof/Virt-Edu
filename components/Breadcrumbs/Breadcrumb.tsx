import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import * as React from 'react';


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  return (
    <Box mt={4} display="flex" justifyContent="center" alignItems="center"role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">

        <Link underline="hover" color="text.primary" href="/Dashboard/Home" aria-current="page">
          Dashboard
        </Link>

      </Breadcrumbs>
    </Box>
  );
}