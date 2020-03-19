// Order, All is Order

interface intFilter {
  startTime?: string
  endTime?: string,
  [propName: string]: any
}

function getOrderList (filter: intFilter) {
  console.log(filter)
  console.log(filter.startTimeTT)
}

let obj = {startTime: '2020-03-01', endTimeEE: 'a'}
getOrderList(obj)
// getOrderList({startTime: '2020-03-01', endTime: '2020-04-01'})
// getOrderList({endTime: '2020-04-01'})

