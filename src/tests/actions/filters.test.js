import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('should generate set start date object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('Text filter', () => {
  const action = setTextFilter('rent');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  });
});

test('Text filter default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('Sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('Sort by date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});