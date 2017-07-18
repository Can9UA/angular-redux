export const HOUR = 'HOUR'
export const SECOND = 'SECOND'

export const clock = (state = new Date(), { type, payload }) => {
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
  {name: 'A', time: ''},
  {name: 'B', time: ''},
  {name: 'C', time: ''},
  {name: 'D', time: ''},
];
export const people = (state = defaultPeople, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}
