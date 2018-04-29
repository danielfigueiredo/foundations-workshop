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
import example from './examples/closures.example.txt';

const createClosureSlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Closures
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>AKA lexical closure or function closure</ListItem></Appear>
      <Appear><ListItem>Record that stores a function together with an environment</ListItem></Appear>
      <Appear><ListItem>Environment in which that function was declared</ListItem></Appear>
    </List>
  </Slide>;

const createClosureExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={example}
    ranges={[
      { loc: [0, 4] },
      { loc: [2, 3], title: 'return function', note: 'Although logger is returned, the variable name declared in the parent scope will still be available.' },
      { loc: [5, 6], note: 'Call to createNameLogger returns the logger function' },
      { loc: [7, 8], title: 'returns Bonfire' },
      { loc: [9, 10], title: 'aka currying', note: 'Add takes in a value and returns a function' },
      { loc: [11, 12], note: '2 will be remembered on the returning function.' },
      { loc: [13, 14], title: 'logs: 12' },
      { loc: [15, 16], note: 'We can use the same pattern that leverages our closure to store a base multiplier' },
      { loc: [17, 18], note: 'Let\'s create a curried function that always multiplies it by 5' },
      { loc: [19, 20], title: 'logs: 500' },
      { loc: [21, 26], note: 'It can remember a lot of things' },
      { loc: [21, 22], title: 'spread syntax', note: 'allows an iterable such as an array expression or string to be expanded in places where zero or more arguments are expected' },
      { loc: [22, 23], note: 'Returns a function that takes in a value' },
      { loc: [23, 24], note: 'Reverse the order because compose is left-to-right' },
      { loc: [24, 25], note: 'Reduce the array that we remember because of the closure into a single value' },
      { loc: [27, 28], note: 'Invoke compose to perform both operations' },
      { loc: [29, 30], note: '(10 + 2) * 5 = 60', title: 'logs: 60' },
      { loc: [31, 32], note: '(20 + 2) * 5 = 110', title: 'logs: 110' },
    ]}
  />;

export const closureSlideSet = () =>
  <SlideSet>
    { createClosureSlide() }
    { createClosureExampleSlide() }
  </SlideSet>;