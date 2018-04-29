import React from 'react';
import {
  Heading,
  ListItem,
  List,
  Slide,
  Code,
  SlideSet,
  Appear,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import example from './examples/template-literals.example.txt';
import taggedExample from './examples/tagged-templates.example.txt';

const createStringLiteralsSlide = () =>
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Template Literals
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>String literals that allow embedded expressions</ListItem></Appear>
      <Appear><ListItem>Support multi-line strings and interpolation features</ListItem></Appear>
      <Appear><ListItem>Interpolation goes within <Code bgColor="#422d3f" textColor="gray">&#36;&#123;&#125;</Code></ListItem></Appear>
      <Appear><ListItem>Multi-line expressions automatically insert <Code bgColor="#422d3f" textColor="gray">\n</Code></ListItem></Appear>
      <Appear><ListItem>Enclosed by the back-tick <Code bgColor="#422d3f" textColor="gray">` `</Code></ListItem></Appear>
    </List>
  </Slide>;

const createStringLiteralsExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={example}
    ranges={[
      { loc: [0, 1] },
      { loc: [0, 3] },
      { loc: [5, 8], note: 'We could interpolate variables within the string'},
      { loc: [5, 10], note: 'Equivalent string concatenation syntax' },
      { loc: [11, 13] },
      { loc: [11, 15] },
    ]}
  />;

const createAdvancedStringLiteralsSlide = () =>
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Tagged Templates
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>Allows parsing of template literals with a function</ListItem></Appear>
      <Appear><ListItem>First argument is an array of string values</ListItem></Appear>
      <Appear><ListItem>Remaining arguments correspond to the expressions</ListItem></Appear>
      <Appear><ListItem>Any value can be returned from the tag function</ListItem></Appear>
    </List>
  </Slide>;

const createAdvancedLiteralsExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={taggedExample}
    ranges={[
      { loc: [0, 18] },
      { loc: [19, 20], note: 'The parenthesis are omitted and the `` is used instead as if you were calling the function' },
      { loc: [2, 4], note: 'Every interpolated value will be an individual argument after the first'},
      { loc: [2, 4], note: 'weight === 140 and uppercase === true'},
      { loc: [1, 2], note: 'The first argument is an array of strings: [\'My dog size is\', \'. His name is Bonfire!\']' },
      { loc: [5, 15], note: 'We can do any kind of computation here' },
      { loc: [5, 6], note: 'str1 === \'My dog size is\' and str2 === \'. His name is Bonfire!\'' },
      { loc: [6, 14] },
      { loc: [15, 17], title: 'return anything!' },
      { loc: [19, 22], note: 'result is: \'MY DOG SIZE IS LARGE. HIS NAME IS BONFIRE!\'' },
    ]}
  />;

export const templateLiteralsSlideSet = () =>
  <SlideSet>
    { createStringLiteralsSlide() }
    { createStringLiteralsExampleSlide() }
    { createAdvancedStringLiteralsSlide() }
    { createAdvancedLiteralsExampleSlide() }
  </SlideSet>;