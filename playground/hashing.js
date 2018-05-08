const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
  id: 4
};

const token = jwt.sign(data, 'abc');

console.log(token);

const decoded = jwt.verify(token, 'abc');

console.log('decoded value', decoded);
// const message = 'I am user number 3';
// const hash = SHA256(message).toString();
//
// console.log(hash);
//
// const data = {
//   id: 4
// };
//
// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed');
// }