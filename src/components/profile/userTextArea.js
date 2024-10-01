import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function UserTextArea({
  labelText,
  placeholderText,
  rowNumber,
}) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      id="filled-multiline-flexible"
      label={labelText}
      multiline
      rows={rowNumber}
      value={value}
      onChange={handleChange}
      //variant="standard"
      placeholder={placeholderText}
      fullWidth
    />
  );
}
