import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SectionMenu({ section, setSection }) {
  const handleChange = (event) => {
    setSection(event.target.value);
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
      <span style={{ margin: "1em", textAlign: "center" }}>SECTION</span>
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select value={section} onChange={handleChange}>
          <MenuItem value={"d100"}>D100</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
