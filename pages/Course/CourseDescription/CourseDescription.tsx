import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicTabs from './BasicTabs';
import classes from './CourseDescription.module.css';

function CourseDescription({ courseId }) {
const imageUrl = 'https://www.disruptiva.media/wp-content/uploads/2020/03/Educacio%CC%81n-virtual-02-1024x576.jpg';
  return (
    <div>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt="Course Image" className={classes.image} />
      </div>
    <BasicTabs
    items={[
      { label: 'Description', content: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum eros sed nisl malesuada, id consequat orci dignissim. Morbi id aliquet libero. Fusce placerat sit amet nisl in pretium. Phasellus lorem nisi, posuere nec ex ut, pellentesque malesuada nunc. Proin facilisis aliquet nibh non dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie auctor nibh non porta. Suspendisse potenti. Mauris malesuada nec erat ac sollicitudin. Vivamus vitae scelerisque neque. Duis suscipit ultrices efficitur. Sed in libero porta, consequat erat in, dictum lectus. Nulla eu venenatis justo. Nam feugiat lacus sit amet ante efficitur varius. Donec vel enim id lorem fringilla facilisis.</div> },
      { label: 'Revisions', content: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum eros sed nisl malesuada, id consequat orci dignissim. Morbi id aliquet libero. Fusce placerat sit amet nisl in pretium. Phasellus lorem nisi, posuere nec ex ut, pellentesque malesuada nunc. Proin facilisis aliquet nibh non dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie auctor nibh non porta. Suspendisse potenti. Mauris malesuada nec erat ac sollicitudin. Vivamus vitae scelerisque neque. Duis suscipit ultrices efficitur. Sed in libero porta, consequat erat in, dictum lectus. Nulla eu venenatis justo. Nam feugiat lacus sit amet ante efficitur varius. Donec vel enim id lorem fringilla facilisis.</div> },
      { label: 'Discussions', content: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum eros sed nisl malesuada, id consequat orci dignissim. Morbi id aliquet libero. Fusce placerat sit amet nisl in pretium. Phasellus lorem nisi, posuere nec ex ut, pellentesque malesuada nunc. Proin facilisis aliquet nibh non dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie auctor nibh non porta. Suspendisse potenti. Mauris malesuada nec erat ac sollicitudin. Vivamus vitae scelerisque neque. Duis suscipit ultrices efficitur. Sed in libero porta, consequat erat in, dictum lectus. Nulla eu venenatis justo. Nam feugiat lacus sit amet ante efficitur varius. Donec vel enim id lorem fringilla facilisis.</div> },
      { label: 'Resources', content: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum eros sed nisl malesuada, id consequat orci dignissim. Morbi id aliquet libero. Fusce placerat sit amet nisl in pretium. Phasellus lorem nisi, posuere nec ex ut, pellentesque malesuada nunc. Proin facilisis aliquet nibh non dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie auctor nibh non porta. Suspendisse potenti. Mauris malesuada nec erat ac sollicitudin. Vivamus vitae scelerisque neque. Duis suscipit ultrices efficitur. Sed in libero porta, consequat erat in, dictum lectus. Nulla eu venenatis justo. Nam feugiat lacus sit amet ante efficitur varius. Donec vel enim id lorem fringilla facilisis.</div> },
    ]}
  />
  </div>
    
  );
}

export default CourseDescription;
