const Server = require('../server.js')

describe('blah', () => {
  it('passes', () => {
    expect(1).toEqual(1);
  })
  it('gets a simple repsonse', () => {
    expect(Server.getResponse()).toEqual('what?');
  })
})
