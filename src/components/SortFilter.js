import * as React from "react";
import Box from "@mui/material/Box";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SuperCons from "supercons";
import IconButton from "@mui/material/IconButton";

export const SortFilter = () => {
  return (
    <React.Fragment>
      {/* sort & filter box: */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          pl: 0,
          pr: 0,
          //border: "1px solid",
          //bgcolor: (theme) =>
          //  theme.palette.mode === "dark" ? "#101010" : "#fff",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300"
        }}
      >
        <IconButton>
          <SuperCons glyph="filter" size={30} sx={{ color: "red" }} />
        </IconButton>
        <IconButton>
          <FilterAltIcon />
        </IconButton>
      </Box>
    </React.Fragment>
  );
};
