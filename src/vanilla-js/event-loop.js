import React from 'react';
import {
  Heading,
  ListItem,
  List,
  Slide,
  Appear,
  SlideSet,
  Image,
  Code
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import example from './examples/event-loop.example.txt';
import eventLoopImg from './assets/event-loop.svg';

const createEventLoopSlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Event Loop
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>JavaScript is single thread</ListItem></Appear>
      <Appear><ListItem>There is no concurrent code in JavaScript</ListItem></Appear>
      <Appear><ListItem>Functions can be delayed to run</ListItem></Appear>
      <Appear><ListItem>Scheduling functions can help unblocking the thread</ListItem></Appear>
    </List>
  </Slide>;

const eventLoopSnippet = `
  while (queue.waitForMessage()) {
    queue.processNextMessage()
  }
`;

const createEventLoopImgSlide = () =>
  <Slide transition={['spin', 'slide']}>
    <Heading size={6} textColor="secondary" margin="auto auto 50px auto" caps>
      Named after what its implementation resembles
    </Heading>
    <Code bgColor="#422d3f" textColor="gray">
      { eventLoopSnippet }
    </Code>
    <Appear><Image src={eventLoopImg} margin="50px auto auto auto" /></Appear>
  </Slide>;

const createEventLoopSlide2 = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      HEAP
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>Where objects are allocated</ListItem></Appear>
      <Appear><ListItem>Denotes a large mostly unstructured region of memory</ListItem></Appear>
    </List>
  </Slide>;

const createEventLoopSlide3 = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      QUEUE
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>Handles messages synchronously</ListItem></Appear>
      <Appear><ListItem>When processed a message is removed from the queue</ListItem></Appear>
      <Appear><ListItem>Corresponding function is called generating a new stack frame</ListItem></Appear>
    </List>
  </Slide>;

const createEventLoopSlide4 = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Run-to-completion
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>Each message is processed individually</ListItem></Appear>
      <Appear><ListItem>Differs from C, Java, or C# where there are multi-threads</ListItem></Appear>
      <Appear><ListItem>Nothing can stop a message being processed</ListItem></Appear>
      <Appear><ListItem>Application might become unable to process user interactions</ListItem></Appear>
    </List>
  </Slide>;

const createEventLoopSlide5 = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Adding messages into the queue
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>Added anytime an event that has a listener occurs</ListItem></Appear>
      <Appear><ListItem>Without a listener, the event is lost</ListItem></Appear>
      <Appear><ListItem>Clicking on a element with a handler will add a message</ListItem></Appear>
      <Appear><ListItem>Example: <Code bgColor="#422d3f" textColor="gray">setTimeout</Code> has two arguments:</ListItem></Appear>
      <List margin="40px">
        <Appear><ListItem>A message to add to the queue</ListItem></Appear>
        <Appear><ListItem>A time delay after which the message is added</ListItem></Appear>
      </List>
    </List>
  </Slide>;

const createEventLoopSlide6 = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary">
      <Code bgColor="#422d3f" textColor="secondary">setTimeout</Code>
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>Time represents the minimum delay</ListItem></Appear>
      <Appear><ListItem>If the queue is empty, the message is processed right after the delay</ListItem></Appear>
      <Appear><ListItem>If the queue is not empty, it waits until its turn to be processed</ListItem></Appear>
    </List>
  </Slide>;

const createEventLoopExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={example}
    ranges={[
      { loc: [0, 2] },
      { loc: [3, 6], title: 'add message', note: 'It only pushes the message to the queue after 500ms' },
      { loc: [7, 14], title: 'synchronous loop', note: 'Loop blocks the current thread for 5 seconds' },
      { loc: [4, 5], note: 'log only happens after 5 seconds, even though the message was pushed after 500ms' },
    ]}
  />;

export const eventLoopSlideSet = () =>
  <SlideSet>
    { createEventLoopSlide() }
    { createEventLoopImgSlide() }
    { createEventLoopSlide2() }
    { createEventLoopSlide3() }
    { createEventLoopSlide4() }
    { createEventLoopSlide5() }
    { createEventLoopSlide6() }
    { createEventLoopExampleSlide() }
  </SlideSet>;