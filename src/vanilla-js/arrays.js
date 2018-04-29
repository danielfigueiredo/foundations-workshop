import React from 'react';
import {
  Heading,
  ListItem,
  List,
  Slide,
  Appear,
  SlideSet,
  Code
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import example from './examples/arrays.example.txt';

const createArraySlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Arrays
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>We all know what arrays are <Code bgColor="#422d3f" textColor="secondary">:)</Code></ListItem></Appear>
      <Appear><ListItem>Array operations in JavaScript can be functional</ListItem></Appear>
      <Appear><ListItem>More functional less imperative</ListItem></Appear>
      <Appear><ListItem>Look Mozilla's developer website (MDN) for a complete reference</ListItem></Appear>
    </List>
  </Slide>;

const createArrayExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={example}
    ranges={[
      { loc: [0, 1], title: 'functional vs imperative' },
      { loc: [2, 6], title: 'imperative', note: 'multiply all elements by 10' },
      { loc: [7, 8], title: 'functional' },
      { loc: [9, 15], title: 'imperative', note: 'remove all the even numbers' },
      { loc: [16, 17], title: 'functional' },
      { loc: [18, 22], title: 'imperative', note: 'sum all numbers' },
      { loc: [23, 24], title: 'functional' },
      { loc: [25, 31], title: 'imperative', note: 'All operations together: remove + multiply + sum all' },
      { loc: [32, 36], title: 'functional' },
    ]}
  />;

export const arraySlideSet = () =>
  <SlideSet>
    { createArraySlide() }
    { createArrayExampleSlide() }
  </SlideSet>;