'use strict';
jest.disableAutomock();
jest.mock('fetch-on-rest');
jest.mock('../../components/utils.js')
var api = require('../../api.js');
var React = require('react');
var Screen = require('../saved.screen.jsx');
var TestUtils = require('react-addons-test-utils');

const screenResult = {
  name: 'Foo Bar',
  page: {
    ratios: ['CMP'],
    results: [
      ['/foo/', 'Foo', 11]
    ]
  }
};

describe('Tests for Saved Screen', function() {
  var screen

  beforeEach(function() {
    api.setResponse('/api/screens/3/?foo=bar',
      JSON.stringify(screenResult));
    screen = TestUtils.renderIntoDocument(
      <Screen
        params={{screenId: 3}}
        location={{
          query: {foo: 'bar'},
          pathname: '/screen/3/',
          search: '?foo=bar'
        }}
        router={{}}
      />
    );
  });

  afterEach(function() {
    expect(api.getPending()).toEqual([]);
  });

  it('should load the screen', function() {
    return screen._req.then(() => {
      expect(1).toEqual(1);
    })
  })

});
