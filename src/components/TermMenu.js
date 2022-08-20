import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function TermMenu({ term, setTerm }) {
  const handleChange = (event) => {
    setTerm(event.target.value);
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
      <span style={{ margin: "1em", textAlign: "center" }}>TERM</span>
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select value={term} onChange={handleChange}>
          <MenuItem value={"fall"}>Fall</MenuItem>
          <MenuItem value={"spring"}>Spring</MenuItem>
          <MenuItem value={"summer"}>Summer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
