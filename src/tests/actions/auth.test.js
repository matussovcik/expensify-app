import { login, logout, startLogin, startLogout } from '../../actions/auth';

let uid;

beforeEach(() => {
  uid = '123';
}); 

test('should setup login action object correctly', () => {
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should setup logout action object correctly', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});