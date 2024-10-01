import styled from "@emotion/styled";
import { IconButton, TextField } from "@mui/material";
//import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";

const InputTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-outlined": {
    color: "black",
    fontSize: 14,
    fontWeight: "normal",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
      //fontWeight: "bold",
    },
  },

  "& label.Mui-focused": {
    color: theme.palette.primary.dark,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      borderWidth: 1.2,
      fontSize: 14,
      fontWeight: "bold",
      borderRadius: 4,
      height: `${theme.breakpoints.down("sm") && 15}`,
      [theme.breakpoints.down("md")]: {
        fontWeight: "bold",
      },
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.light,
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.light,
      borderWidth: 2,
      borderLeftWidth: 5,
      [theme.breakpoints.down("md")]: {
        borderWidth: 1.5,
        borderLeftWidth: 3,
      },
    },
  },
}));

function LoginInput({
  hasAdorment,
  name,
  ariaLabel,
  icon,
  isChecked,
  ...others
}) {
  const { value, handleChange, error, helperText } = others;

  const splitName = name.split(" ");
  let idName = "";

  if (splitName[1]) {
    const lowercasedName = splitName[0].toLowerCase();
    idName = lowercasedName + splitName[1];
  } else {
    idName = name.toLowerCase();
  }

  let typeName;

  if (name === "Password" || name === "Password Again") {
    typeName = "password";
  }

  const inputPropElement = {
    startAdornment: (
      <InputAdornment position={"start"}>
        <IconButton
          //onClick={handleClickShowPassword}
          aria-label={ariaLabel}
          edge="start"
        >
          {icon}
        </IconButton>
      </InputAdornment>
    ),
  };

  /*
    else{

      inputPropElement={endAdornment :<InputAdornment position={position}>
        <IconButton  onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} aria-label={ariaLabel}
          edge="start" >
          {showPassword? icon1:icon2}
        </IconButton>
       </InputAdornment>}
    }
*/
  return (
    <InputTextField
      required
      fullWidth
      id={idName}
      label={name}
      name={idName}
      autoComplete={idName}
      type={isChecked ? "text" : typeName}
      size="small"
      //InputProps={hasAdorment ? { ...inputPropElement } : null}
      InputProps={{
        startAdornment: hasAdorment ? inputPropElement.startAdornment : null,
      }}
      value={value}
      onChange={handleChange}
      error={error}
      helperText={helperText}
      sx={{ fontSize: "h6.fontSize", color: "black" }}
      //InputLabelProps={{ color: "black" }}
    />
  );
}

export default LoginInput;
