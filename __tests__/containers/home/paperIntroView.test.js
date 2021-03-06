import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import PaperIntroView from '../../../src/containers/home/paper/PaperIntroView';

it('renders correctly', () => {
  const tree = renderer.create(
    <PaperIntroView />,
  );

  const treeJson = tree.toJSON();
  expect(treeJson).toMatchSnapshot();
});
