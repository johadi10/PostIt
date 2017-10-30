import 'babel-polyfill';
import React from 'react';
import expect from 'expect';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import MainSideBar from '../../../src/components/sideBars/MainSideBar.jsx';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const storeStateMock = {
  verifyTokenReducer: {
    userDetail: {}
  }
};
let store;
let wrapper;
describe('<MainSideBar/>', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = mount(<Provider store={store}><MainSideBar /></Provider>);
  });
  it('should check that the div with main class exist', () => {
    expect(wrapper.find('.main').length).toBe(1);
  });
  it('should check that quick link header exists', () => {
    expect(wrapper.find('div').at(1).text()).toBe('Quick Links');
  });
  it('should check that create group link exists', () => {
    expect(wrapper.find('Link').at(0).text()).toBe(' Create Group');
  });
  it('should check that all my group link exists', () => {
    expect(wrapper.find('Link').at(1).text()).toBe(' All My Groups');
  });
  it('should check that UserDetail component exists', () => {
    expect(wrapper.find('UserDetail').length).toBe(1);
  });
});