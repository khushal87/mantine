import React from 'react';
import oc from 'open-color';
import { OPEN_COLOR_THEMES } from '@mantine/types';
import { storiesOf } from '@storybook/react';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import ColorSwatch from './ColorSwatch';

const swatches = OPEN_COLOR_THEMES.map((theme) => <ColorSwatch color={oc[theme][5]} key={theme} />);

storiesOf('@mantine/core/ColorSwatch', module).add('General Usage', () => (
  <ElementsGroup>{swatches}</ElementsGroup>
));