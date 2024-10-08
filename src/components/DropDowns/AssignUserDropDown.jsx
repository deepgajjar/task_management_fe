import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AssignUserDropDown = ({
  list,
  label,
  value,
  name,
  handleChange,
  handleBlur,
}) => {
  const theme = useTheme();
  const handleChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    handleChange(name, value);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <Select
          name={name}
          value={value}
          onChange={handleChangeHandler}
          input={<OutlinedInput label={label} />}
          onBlur={handleBlur}
          MenuProps={MenuProps}
        >
          {list?.map((item) => (
            <MenuItem
              key={item?._id}
              value={item?._id}
              style={getStyles(item?._id, item?._id, theme)}
            >
              {item?.userName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default AssignUserDropDown;
