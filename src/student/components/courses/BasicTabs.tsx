import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab, { TabProps } from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
        <Box sx={{ width: 1300, marginRight: 'auto',marginTop: 5 }}>
          <Typography sx={{ fontFamily: 'Roboto-Light'}}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface CustomTabProps extends TabProps {
  color?: string;
}

const CustomTab = (props: CustomTabProps) => {
  const { color = 'white', ...other } = props;

  return (
    <Tab
      {...other}
      sx={{
        '&.Mui-selected': {
          color: '#21AFFF',
          backgroundColor: color,
        },
      }}
    />
  );
};

interface TabsProps {
  items: Array<{
    label: string;
    content: React.ReactNode;
    color?: string;
  }>;
}

const BasicTabs = ({ items }: TabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '55%', marginLeft: 22 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ '& .MuiTabs-indicator': { backgroundColor: '#21AFFF' } }}
        >
          {items.map((item, index) => (
            <CustomTab
            sx={{ fontFamily: 'Roboto-Medium'}}
              key={index}
              label={item.label}
              {...a11yProps(index)}
              color={item.color}
            />
          ))}
        </Tabs>
      </Box>
      {items.map((item, index) => (
        <TabPanel key={index} value={value} index={index}>
          {item.content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default BasicTabs;
