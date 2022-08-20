import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function YearMenu({ year, setYear }) {
  const handleChange = (event) => {
    setYear(event.target.value);
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
      <span style={{ margin: "1em", textAlign: "center" }}>YEAR</span>
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select value={year} onChange={handleChange}>
          <MenuItem value={"2022"}>2022</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
