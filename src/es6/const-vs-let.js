import React from 'react';
import {
  Heading,
  ListItem,
  List,
  Slide,
  Code,
  Appear,
  SlideSet,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import example from './examples/const-vs-let.example.txt';

const createVariableDeclarationsSlide = () =>
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      <Code bgColor="#422d3f" textColor="secondary">const</Code> vs <Code bgColor="#422d3f" textColor="secondary">let</Code>
    </Heading>
    <List textColor="gray">
      <Appear><ListItem><Code bgColor="#422d3f" textColor="gray">const</Code> variables cannot be reassigned</ListItem></Appear>
      <Appear><ListItem>A <Code bgColor="#422d3f" textColor="gray">const</Code> value can change in certain ways</ListItem></Appear>
      <Appear><ListItem><Code bgColor="#422d3f" textColor="gray">let</Code> variables can be reassigned and changed</ListItem></Appear>
      <Appear><ListItem>By default always use <Code bgColor="#422d3f" textColor="gray">const</Code></ListItem></Appear>
    </List>
  </Slide>;

const createVariableDeclarationsExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={example}
    ranges={[
      { loc: [0, 1] },
      { loc: [0, 3], title: 'throws error', note: 'TypeError: Assignment to constant variable' },
      { loc: [4, 7], note: 'What if we have an object instead and we change the property bar?'},
      { loc: [8, 9], title: 'no problem!' },
      { loc: [10, 11] },
      { loc: [10, 11], title: 'throws error', note: 'TypeError: Assignment to constant variable' },
      { loc: [10, 11], title: 'throws error', note: 'TypeError: Assignment to constant variable' },
      { loc: [12, 13], note: 'We can do anything we want with let variables' },
      { loc: [14, 17], title: 'no problem!' },
    ]}
  />;

export const constVsLetSlideSet = () =>
  <SlideSet>
    { createVariableDeclarationsSlide() }
    { createVariableDeclarationsExampleSlide() }
  </SlideSet>;
