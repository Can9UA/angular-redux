export const HOUR = 'HOUR'
export const SECOND = 'SECOND'

export const clock = (
  state = new Date(),
  { type, payload } = { type: '', payload: 0}
) => {
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

export const ADVANCE = 'ADVANCE';
export const RECALL = 'RECALL';
const defaultPeople = [
  {name: 'Alan', time: clock()},
  {name: 'Bob', time: clock()},
  {name: 'Charon', time: clock()},
  {name: 'Dino', time: clock()},
];
export const people = (state = defaultPeople, { type, payload }) => {
  switch (type) {
    case ADVANCE:
      return state.map((person) => {
        if (payload === person) {
          return {
            name: person.name,
            time: clock(person.time, { type: HOUR, payload: 4 })
          }
        }

        return person;
      })

    case RECALL:
      return state.map((person) => {
        return {
          name: person.name,
          time: payload
        }
      })

    default:
      return state
  }
}
