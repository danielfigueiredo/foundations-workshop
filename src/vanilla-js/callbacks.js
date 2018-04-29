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
import example from './examples/callbacks.example.txt';

const createCallbackSlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Callbacks
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>A function that will be executed after another function finished executing</ListItem></Appear>
      <Appear><ListItem>Is a function that is passed in as an argument</ListItem></Appear>
      <Appear><ListItem>Normally used to handle asynchronous operations</ListItem></Appear>
    </List>
  </Slide>;

const createCallbackExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={example}
    ranges={[
      { loc: [0, 4], title: 'synchronous callback' },
      { loc: [0, 1], note: 'Takes two arguments, a value and a function (callback)' },
      { loc: [1, 2], note: 'We could do any operation with the value' },
      { loc: [2, 3], note: 'Invoke the callback with the newValue' },
      { loc: [5, 8], title: 'usage', note: 'Note that the second argument we give is a function' },
      { loc: [6, 7], note: 'Will log { mockProp: true, newProp: 1 }' },
      { loc: [10, 16], title: 'asynchronous callback' },
      { loc: [11, 15], note: 'setTimeout takes a callback and a timer to wait before calling the callback' },
      { loc: [12, 13], note: 'This is called after the time specified, and we could do something here' },
      { loc: [13, 14], note: 'Invoke the callback once we are done' },
      { loc: [17, 20], title: 'usage', note: 'We give the time to wait as the first argument, and our callback as the second' },
    ]}
  />;

export const callbackSlideSet = () =>
  <SlideSet>
    { createCallbackSlide() }
    { createCallbackExampleSlide() }
  </SlideSet>;