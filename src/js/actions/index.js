
export const FETCH_LIST = 'fetch_list';

// action creators

export const fetchList = () => {
  const response = ['something', 'and another'];

  return {
    type: FETCH_LIST,
    response
  }
}
