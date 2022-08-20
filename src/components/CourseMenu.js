import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CourseMenu({ course, setCourse }) {
  const handleChange = (event) => {
    setCourse(event.target.value);
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
      <span style={{ margin: "1em", textAlign: "center" }}>COURSE</span>
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select value={course} onChange={handleChange}>
          <MenuItem value={"225"}>225</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
