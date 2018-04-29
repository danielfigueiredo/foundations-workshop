import React from 'react';
import {
  Heading,
  ListItem,
  List,
  Slide,
  Code,
  Appear,
  SlideSet
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import arrowBodiesExample from './examples/arrow-bodies.example.txt';

const createArrowIntroductionSlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Arrow functions
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>A function shorthand that uses the <Code bgColor="#422d3f" textColor="gray">=></Code> syntax</ListItem></Appear>
      <Appear><ListItem>Support both block bodies and expression bodies</ListItem></Appear>
      <Appear><ListItem>Expression bodies return the value automatically</ListItem></Appear>
      <Appear><ListItem>Unlike normal functions arrows share the parent lexical this</ListItem></Appear>
    </List>
  </Slide>;

const createArrowExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={arrowBodiesExample}
    ranges={[
      { loc: [0, 3], title: 'arrow syntax' },
      { loc: [4, 7], title: 'function syntax' },
      { loc: [8, 9], note: 'Omitting the curly braces makes the function return the expression'},
      { loc: [8, 11], title: 'returns false' },
      { loc: [13, 28] },
      { loc: [19, 22], note: 'makeCall is NOT an arrow function' },
      { loc: [23, 26], note: 'makeCallArrow is an arrow function' },
      { loc: [30, 31], title: 'instantiate the service' },
      { loc: [32, 33], note: 'Executing get from myService makes this === myService' },
      { loc: [34, 35], note: 'What if we get a reference to the function?' },
      { loc: [36, 37], title: 'cannot call makeCall of undefined' },
      { loc: [38, 39], note: 'Let\'s try with an arrow function instead' },
      { loc: [40, 41], title: 'it works! this === myService', note: 'The lexical scope in this case is the parent (myService). Remember arrows automatically binds to the parent scope' },
      { loc: [42, 43], note: 'By calling bind we mimic the arrow function behaviour' },
      { loc: [44, 45], title: 'it works! this === myService' },
    ]}
  />;

export const arrowFunctionSlideSet = () =>
  <SlideSet>
    { createArrowIntroductionSlide() }
    { createArrowExampleSlide() }
  </SlideSet>;