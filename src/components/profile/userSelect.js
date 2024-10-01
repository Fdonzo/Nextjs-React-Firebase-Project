import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Box } from "@mui/material";

const ITEM_HEIGHT = 45;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

//const usageReasons = ["Company", "Personal", "Research", "Others"];

function getStyles(arrayNames, eachReason, theme) {
  return {
    fontWeight:
      eachReason.indexOf(arrayNames) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function UserSelect({ labelName, arrayNames }) {
  const theme = useTheme();
  const [eachReason, setEachReason] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEachReason(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box sx={{ width: "50%" }}>
      <FormControl sx={{ mb: 1, width: "100%" }}>
        <InputLabel sx={{ textAlign: "center" }} id="usage-reasons-list-label">
          {`${labelName}*`}
        </InputLabel>
        <Select
          labelId="usage-reasons-list-label"
          id="usage-reasons-list-label"
          multiple
          value={eachReason}
          onChange={handleChange}
          input={<OutlinedInput label={`${labelName}*`} />}
          MenuProps={MenuProps}
          size="small"
          fullWidth
          sx={{ border: "1px solid" }}
        >
          {arrayNames.map((each) => (
            <MenuItem
              key={each}
              value={each}
              style={getStyles(arrayNames, eachReason, theme)}
            >
              {each}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
