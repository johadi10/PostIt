import 'babel-polyfill';
import React from 'react';
import expect from 'expect';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import GroupSideBar from '../../../src/components/sideBars/GroupSideBar';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const storeStateMock = {
  verifyTokenReducer: {
    userDetail: {}
  }
};
let store;
let wrapper;
describe('<GroupSideBar/>', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = mount(<Provider store={store}><GroupSideBar /></Provider>);
  });

  it('should check the div with group-sidebar class exist', () => {
    expect(wrapper.find('.group-sidebar').length).toBe(1);
  });

  it('should check the activities header exists', () => {
    expect(wrapper.find('p').at(0).text()).toBe('Activities');
  });

  it('should check the group notification link exists', () => {
    expect(wrapper.find('Link').at(0).text()).toBe(' Group notifications');
  });

  it('should check the send notification link exists', () => {
    expect(wrapper.find('Link').at(1).text()).toBe(' Send notification here');
  });

  it('should check the add user to group link exists', () => {
    expect(wrapper.find('Link').at(2).text()).toBe(' Add User to group');
  });

  it('should check the group members link exists', () => {
    expect(wrapper.find('Link').at(3).text()).toBe(' Group members');
  });

  it('should check the UserDetail component exists', () => {
    expect(wrapper.find('UserDetail').length).toBe(1);
  });
});
