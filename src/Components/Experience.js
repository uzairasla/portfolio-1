import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "12px",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
  },
  tab: {
    marginTop: "12px",
    borderBottom: "none",
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="NTV Houston" {...a11yProps(0)} />
          <Tab className={classes.tab} label="P97 Networks" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Accenture" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ul>
            <li>
              Design, develop, update and maintain website content, graphics and
              appearance.
            </li>
            <br />
            <li>
              Convert sketch-based designs into web applications using HTML/CSS,
              JS, and React.
            </li>
            <br />
            <li>
              Write modern, performant, maintainable code for a diverse array of
              internal projects/
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ul>
            <li>
              Worked with the team that created layout and visuals including
              billing page for the Philips 66 app that lets user dispense fuel
              and collect loyalty.
            </li>
            <br />
            <li>Design and development of UI components using JSX.</li>
            <br />
            <li>
              Heavily used ES6/8 async, await and generator functions for
              asynchronous task.
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ul>
            <li>
              Used Redux-Saga & Redux-Thunk as middleware for asynchronous api
              call handling.
            </li>
            <br />
            <li>
              Developed and maintained code for in-house and client websites
              primarily using HTML, CSS, Sass, JavaScript, and jQuery
            </li>
            <br />
            <li>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </li>
          </ul>
        </TabPanel>
      </div>
      <hr />
    </>
  );
}
