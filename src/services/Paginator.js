const divide = require('lodash.divide');

module.exports = function (data) {
  if(data.page == undefined) throw new Error('page is required. Current page for data.');
  if(data.count == undefined) throw new Error('count is required. Total items in data.');
  if(data.limit == undefined) throw new Error('limit is required. Current limit for data.');
  if(data.current == undefined) throw new Error('current is required. Current length of data.');

  data.page++;

  const last_page = Math.ceil(divide(data.count, data.limit));

  return {
    total: data.count,
    showing: data.current,
    page: data.page,
    per_page: data.limit,
    first_page: 1,
    last_page: last_page,
    previous_page: (data.page == 1) ? 1 : (data.page - 1),
    next_page: ((data.page + 1) > last_page) ? data.page : data.page + 1,
  };
}
