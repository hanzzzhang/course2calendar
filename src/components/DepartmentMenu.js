import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DepartmentMenu({ dept, setDept }) {
  const handleChange = (event) => {
    setDept(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        m: "1em auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span style={{ margin: "1em", textAlign: "center" }}>DEPARTMENT</span>
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select value={dept} onChange={handleChange}>
          <MenuItem value={"cmpt"}>CMPT</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
