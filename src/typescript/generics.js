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
import example from './examples/generics.example.txt';

const createGenericsSlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Generics
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>Generics arguments are like type “variables” that exist in a certain context</ListItem></Appear>
      <Appear><ListItem>Often seen on libraries or frameworks</ListItem></Appear>
      <Appear><ListItem>Classes, interfaces, types, and functions can have generic parameters.</ListItem></Appear>
    </List>
  </Slide>;

const createGenericsExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={example}
    ranges={[
      { loc: [0, 4] },
      { loc: [1, 2], note: 'state has type T, which is provided when this interface is being used' },
      { loc: [2, 3], note: 'Arrays have a generic type, that defines the shape of each object in the array' },
      { loc: [5, 11] },
      { loc: [5, 6], note: 'Generic arguments are defined between <>. They can be referenced in the scope of the function.' },
      { loc: [12, 19], note: 'Calling createStore with an object, makes S be the shape of that object.' },
      { loc: [20, 24], note: 'Editors can provide auto complete, and we can safely access the properties.' },
      { loc: [23, 24], note: 'Property \'age\' does not exist on type { name: string; isLoggedIn: boolean; }.' },
      { loc: [14, 18], note: 'User object does not have property age' },
    ]}
  />;

export const genericsSlideSet = () =>
  <SlideSet>
    { createGenericsSlide() }
    { createGenericsExampleSlide() }
  </SlideSet>;


