import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../src/App';
import './setup';

test('should render', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("countains text 'Hello World!'", () => {
  const app = shallow(<App />);
  expect(app.text()).toEqual('Hello World!');
});
