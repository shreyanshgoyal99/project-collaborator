import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { About } from "../../component/About";
import Experience from "../../component/Experience";
import Links from "../../component/Links";
import AddPost from "../../component/AddPost"
import "./Profile.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ABOUT" {...a11yProps(0)} />
          <Tab label="EXPERIENCE" {...a11yProps(2)} />
          <Tab label="LINKS" {...a11yProps(1)} />
          <Tab label="AddPost" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel style={{ padding: "0px" }} value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Experience />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Links />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AddPost />
      </TabPanel>
    </Box>
  );
}
