import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const StyledBox = styled(Box)({
  border: "1px solid grey",
  borderRadius: "12px",
  backgroundColor: "white",
  ml: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function NavSearchInputBase() {
  const inputElementRef = useRef();
  const { pathname } = useRouter();

  useEffect(() => {
    inputElementRef.current.focus();
  }, [pathname]);
  return (
    <StyledBox
      sx={{
        width: { sm: "34%", md: "32%", lg: "30%" },
        height: { sm: "35px", md: "40px", lg: "45px" },
      }}
    >
      <IconButton
        sx={{
          ":hover": {
            opacity: "0.7",
          },
          ml: 1,
        }}
        type="submit"
        aria-label="search icon"
      >
        <SearchIcon sx={{ ":hover": { color: "black" } }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ "aria-label": "search input base" }}
        inputRef={inputElementRef}
      />
    </StyledBox>
  );
}
