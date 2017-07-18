export const HOUR = 'HOUR'
export const SECOND = 'SECOND'

export const clock = (state = new Date(), { type, payload } = { type: '', payload: 0}) => {
  const date = new Date(state.getTime())

  switch (type) {
    case SECOND:
      date.setSeconds(date.getSeconds() + payload)
      return date

    case HOUR:
      date.setHours(date.getHours() + payload)
      return date

    default:
      return state
  }
}

const defaultPeople = [
  {name: 'A', time: clock()},
  {name: 'B', time: clock()},
  {name: 'C', time: clock()},
  {name: 'D', time: clock()},
];
export const people = (state = defaultPeople, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}
