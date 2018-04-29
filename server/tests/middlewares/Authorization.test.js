import sinon from 'sinon';
import { assert } from 'chai';
import Authorization from '../../src/middlewares/Authorization';

// mock server response
const res = {
  send: message => ({ message }),
  status: status => ({
    send: message => ({ status, message })
  })
};

const status = sinon.spy(res, 'status');
const next = sinon.stub();


describe('Authorization Handler', () => {
  it('sends error 401 for unauthenticated user', () => {
    const unAuthReq = { headers: { authorization: '' } };
    Authorization.authorizeCaterer(unAuthReq, res, next);

    assert(status.calledWith(401));
  });

  it('sends error 403 for forbidden user ie user that\'s not admin/caterer', () => {
    const forbReq = { headers: { authorization: 'Bearer klopweopo5849wp923ore4jdskok' } };
    Authorization.authorizeCaterer(forbReq, res, next);

    assert(status.calledWith(403));
  });

  it('calls next for authenticated caterer', () => {
    const authReq = { headers: { authorization: 'Bearer 68734hjsdjkjksdjkndjsjk78938823sdvzgsuydsugsup[d73489jsdbcuydsiudsy' } };
    Authorization.authorizeCaterer(authReq, res, next);

    assert(next.called);
  });
});