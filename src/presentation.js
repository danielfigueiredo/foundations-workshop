import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import {
  arrowFunctionSlideSet,
  constVsLetSlideSet,
  templateLiteralsSlideSet,
  destructuringSlideSet,
  spreadOperatorsSlideSet
} from './es6';
import { createCoverSlideSet } from './cover';
import {
  closureSlideSet,
  callbackSlideSet,
  arraySlideSet,
  eventLoopSlideSet
} from './vanilla-js';

// Require CSS
require('normalize.css');

const theme = createTheme({
  primary: '#230e2d',
  secondary: '#e5373a',
  white: '#fff',
  gray: '#eaeaea'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['spin', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        { createCoverSlideSet() }
        { constVsLetSlideSet() }
        { destructuringSlideSet() }
        { spreadOperatorsSlideSet() }
        { templateLiteralsSlideSet() }
        { arrowFunctionSlideSet() }
        { eventLoopSlideSet() }
        { closureSlideSet() }
        { callbackSlideSet() }
        { arraySlideSet() }
      </Deck>
    );
  }
}
