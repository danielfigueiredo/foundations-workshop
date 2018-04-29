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
import example from './examples/spread-operators.example.txt';

const createSpreadOperatorsSlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Spread Operators
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>Allows an iterable to expand in places where arguments are expected</ListItem></Appear>
      <Appear><ListItem>Syntax is defined by three dots: <Code bgColor="#422d3f" textColor="gray">...</Code></ListItem></Appear>
      <Appear><ListItem>Useful to avoid mutations</ListItem></Appear>
      <Appear><ListItem>Normally use with objects and arrays</ListItem></Appear>
    </List>
  </Slide>;

const createSpreadOperatorsExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={example}
    ranges={[
      { loc: [0, 1], title: 'spreading arrays' },
      { loc: [2, 3], note: 'Trying to insert into the array' },
      { loc: [2, 5], title: '[1, 2, [3, 4], 5, 6]' },
      { loc: [6, 7] },
      { loc: [6, 9], title: '[1, 2, 3, 4, 5, 6]', note: 'Spreading the array takes elements out one by one' },
      { loc: [10, 13], note: 'It is possible to use the same principle with function arguments' },
      { loc: [10, 11], note: 'Note that we specify the function argument as ...args' },
      { loc: [11, 12], note: 'Spread arguments have value of an array, each element equivalent to one argument' },
      { loc: [14, 15], title: 'args === [1, 2, 3]' },
      { loc: [15, 16], title: 'args === [true, \'asd\']' },
      { loc: [16, 17], title: 'args === [{a: \'a\'}, [1, 2, 3]]' },
      { loc: [18, 21], title: 'spread on call' },
      { loc: [19, 20], title: 'args === [true, false, 1]' },
      { loc: [20, 21], title: 'args === [[true, false, 1]]' },
      { loc: [22, 23], title: 'spreading objects' },
      { loc: [24, 25], note: 'Take every property from myObj and put on this new object' },
      { loc: [26, 27], title: '{a: \'a\', b: \'b\'}' },
      { loc: [28, 29], title: 'false', note: 'Although they have the same properties, they are different objects' },
      { loc: [30, 36], title: '{a: \'aa\', b: \'b\', c: true, d: 1}', note: 'Note that we can override and add new properties' },
      { loc: [37, 45], title: 'nested object spread', note: '{c: true, d: 1, oldObj: { a: \'aaa\', b: \'b\' }}' },
    ]}
  />;

export const spreadOperatorsSlideSet = () =>
  <SlideSet>
    { createSpreadOperatorsSlide() }
    { createSpreadOperatorsExampleSlide() }
  </SlideSet>;