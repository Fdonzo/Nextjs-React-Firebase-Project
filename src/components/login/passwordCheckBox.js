import { Checkbox, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { lightBlue } from "@mui/material/colors";

const CheckBoxTypography = styled(Typography)({
  color: "black",
  display: "flex",

  alignItems: "center",
  //marginLeft:theme.spacing(1),
  //marginRight:theme.spacing(1),
});
export const PasswordCheckBox = ({
  hidePasswordLabel,
  showPasswordLabel,
  checked,
  onChange,
  isDisabled,
}) => {
  return (
    <>
      <Checkbox
        sx={{
          backgroundImage: lightBlue["A200"],
          "& .MuiSvgIcon-root": { fontSize: { xs: 13, sm: 17, md: 20 } },
        }}
        checked={checked}
        onChange={onChange}
        inputProps={{ "aria-label": "controlled" }}
        disabled={isDisabled ? false : true}
      />
      {checked ? (
        <CheckBoxTypography
          sx={{ fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "14px" } }}
        >
          {hidePasswordLabel}
        </CheckBoxTypography>
      ) : (
        <CheckBoxTypography
          sx={{ fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "14px" } }}
        >
          {showPasswordLabel}
        </CheckBoxTypography>
      )}
    </>
  );
};
