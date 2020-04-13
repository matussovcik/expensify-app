import moment from 'moment';

export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 193,
  createdAt: 0
}, {
  id: '2',
  description: 'DUUUH',
  note: '',
  amount: 13411,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Boring',
  note: 'booooored!',
  amount: 19161613,
  createdAt: moment(0).add(4, 'days').valueOf()
}];