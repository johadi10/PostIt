import 'babel-polyfill';
import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Page from '../../../src/components/groups/Page';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const storeStateMock = {
  groupReducer: {
    groupState: 'somestate'
  }
};
let store;
let wrapper;
describe('<Page/>', () => {
  const cancelModal = sinon.spy();
  const props = {
    children: null,
    showModal: false,
    cancelModal,
    signupState: {
      welcome: false
    }
  };
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = shallow(<Page {...props} store={store} />).shallow();
  });

  it('should check the div with container class exists', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('should check the MainHeader exists', () => {
    expect(wrapper.find('MainHeader').length).toBe(1);
  });

  it('should check the MainFooter exists', () => {
    expect(wrapper.find('MainFooter').length).toBe(1);
  });
});
