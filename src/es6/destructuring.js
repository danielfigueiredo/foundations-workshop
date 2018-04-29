import React from 'react';
import {
  Heading,
  ListItem,
  List,
  Slide,
  Appear,
  SlideSet
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import example from './examples/destructuring.example.txt';

const createDestructuringSlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Destructuring
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>A shorthand syntax that unpack values</ListItem></Appear>
      <Appear><ListItem>Either objects or arrays can be destructured</ListItem></Appear>
      <Appear><ListItem>Default values can be specified to destructured values</ListItem></Appear>
    </List>
  </Slide>;

const createDestructuringExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={example}
    ranges={[
      { loc: [0, 1], title: 'array destructuring' },
      { loc: [0, 3], note: 'firstElement === \'a\' and secondElement === \'b\'' },
      { loc: [4, 5], note: 'secondEl === 2 and thirdEl === 3' },
      { loc: [6, 7], note: 'letterA === \'a\' and otherLetters === [\'b\', \'c\', \'d\']' },
      { loc: [8, 9], title: 'default values', note: 'a === 1 and b === 10.' },
      { loc: [10, 11], note: 'If a does not have a value, then a === 5 and b === 10.' },
      { loc: [12, 15], title: 'object destructuring', note: 'a === 1 and b === true' },
      { loc: [16, 17], title: 'renaming variables', note: 'newA === 1 and newB === true' },
      { loc: [18, 20], title: 'default values', note: 'isValid === true and name === Adoy' },
      { loc: [21, 24], title: 'computed property', note: 'name === Adoy' },
    ]}
  />;

export const destructuringSlideSet = () =>
  <SlideSet>
    { createDestructuringSlide() }
    { createDestructuringExampleSlide() }
  </SlideSet>;