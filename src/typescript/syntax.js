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
import example from './examples/syntax.example.txt';

const createSyntaxSlide = () =>
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={6} textColor="secondary" caps>
      Typescript
    </Heading>
    <List textColor="gray">
      <Appear><ListItem>A superset of JavaScript</ListItem></Appear>
      <Appear><ListItem>It compiles to plain JavaScript</ListItem></Appear>
      <Appear><ListItem>Support most of the ES6 features</ListItem></Appear>
      <Appear><ListItem>Provides a strongly typed feature to JS language</ListItem></Appear>
    </List>
  </Slide>;

const createSyntaxExampleSlide = () =>
  <CodeSlide
    color="white"
    transition={[]}
    lang="js"
    code={example}
    ranges={[
      { loc: [0, 1], title: 'typing variables', note: 'The typing goes after the variable name and a colon (:)' },
      { loc: [2, 3], note: 'Type 1 is not assignable to type \'string\'.' },
      { loc: [4, 5], title: 'inline object types' },
      { loc: [6, 7], note: 'Assigned object value has to satisfy the type, otherwise an error happens.' },
      { loc: [8, 13], title: 'interfaces', note: 'Instead of declaring an inline type, we could declare an interface and use it in many places.' },
      { loc: [14, 19] },
      { loc: [20, 31] },
      { loc: [21, 24], note: 'Function signature takes three typed arguments' },
      { loc: [24, 25], title: 'returning type', note: 'The returning type goes after the function signature.' },
      { loc: [25, 30], note: 'Typescript makes sure the returning object satisfies the type declared.' },
      { loc: [32, 41], title: 'function as argument' },
      { loc: [33, 34], note: 'personFactory is a Function that has certain arguments and a returning type' },
      { loc: [34, 37], note: 'Arguments: name, age, children' },
      { loc: [37, 38], note: 'Returns an object type Person, note that we use the arrow to specify the returning type.' },
      { loc: [38, 41], note: 'In this case familyFactory does not return, so we type it as void' },
      { loc: [42, 43], note: 'We could call familyFactory and give it our createPerson function' },
    ]}
  />;

export const syntaxSlideSet = () =>
  <SlideSet>
    { createSyntaxSlide() }
    { createSyntaxExampleSlide() }
  </SlideSet>;