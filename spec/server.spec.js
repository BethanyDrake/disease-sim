const Server = require('../server.js')

describe('blah', () => {
  it('fails', () => {
    expect(1).toEqual(2);
  })
  it('passes', () => {
    expect(1).toEqual(1);
  })
  it('gets a simple repsonse', () => {
    expect(Server.getResponse()).toEqual('what?');
  })
})
