import React from 'react';
import {
  Heading,
  ListItem,
  List,
  Slide,
  Code,
  SlideSet,
} from 'spectacle';

export const createCoverSlide = () =>
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={1} fit caps textColor="secondary">
      Rangle.io
    </Heading>
    <Heading size={1} fit caps>
      Foundations Workshop
    </Heading>
  </Slide>;

export const createSummarySlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={4} textColor="secondary">
      Summary
    </Heading>
    <List textColor="gray" fit>
      <ListItem>ES6</ListItem>
      <ListItem>Vanilla JavaScript</ListItem>
      <ListItem>Typescript</ListItem>
    </List>
  </Slide>;

export const createES6SummarySlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={4} textColor="secondary">
      ES6
    </Heading>
    <List textColor="gray" fit>
      <ListItem><Code bgColor="#422d3f" textColor="secondary">const</Code> vs <Code bgColor="#422d3f" textColor="secondary">let</Code></ListItem>
      <ListItem>Destructuring</ListItem>
      <ListItem>Spread Operators</ListItem>
      <ListItem>Template Literals</ListItem>
      <ListItem>Arrow Functions <Code bgColor="#422d3f" textColor="secondary">=></Code></ListItem>
    </List>
  </Slide>;

export const createVJSSummarySlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={4} textColor="secondary">
      Vanilla JavaScript
    </Heading>
    <List textColor="gray" fit>
      <ListItem>Event Loop</ListItem>
      <ListItem>Closures</ListItem>
      <ListItem>Callbacks</ListItem>
      <ListItem>Array</ListItem>
    </List>
  </Slide>;

export const createGitSummarySlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={4} textColor="secondary">
      Typescript
    </Heading>
    <List textColor="gray" fit>
      <ListItem>Typing variables</ListItem>
      <ListItem>Typing functions</ListItem>
      <ListItem>Generic arguments</ListItem>
    </List>
  </Slide>;

export const createCoverSlideSet = () =>
  <SlideSet>
    { createCoverSlide() }
    { createSummarySlide() }
    { createES6SummarySlide() }
    { createVJSSummarySlide() }
    { createGitSummarySlide() }
  </SlideSet>;
