import './setup'
import { shallow, mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import KeyCode from 'keycode-js'

import App from '../src/components/wrappers/App.js'
import Info from '../src/components/ui/Info.js'
import StateProvider from '../src/components/wrappers/StateProvider.js'


// Mount the App component, look for the text box, mimic typing an entry,
// mimic hitting enter, and check the state of the component that is responsible
// for holding the list of items (StateProvider) to verify the list
// has four items now.
test('adding an entry to the todo list', () => {
    const wrapper = mount(<App />)
    const input = wrapper.find('input.add-todo')
    const stateProvider = wrapper.find('StateProvider')

    // Press enter after having typed a dummy entry
    input.props().onKeyUp({target: {value: 'dummy entry'}, keyCode: KeyCode.KEY_RETURN})
    expect(stateProvider.state().list.length).toBe(4)
    expect(wrapper.text()).toContain('dummy')
});

// YOUR TESTS GO HERE


