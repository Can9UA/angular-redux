export const HOUR = 'HOUR';
export const SECOND = 'SECOND';

declare type Time = Date | number;

export function clock(state: Time = new Date(), { type, payload } = { type: '', payload: 0 }): Time {
  const date: Date = (state instanceof Date) ? new Date(state.getTime()) : new Date();

  switch (type) {
    case SECOND:
      return date.setSeconds(date.getSeconds() + payload);

    case HOUR:
      return date.setHours(date.getHours() + payload);

    default:
      return state;
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
export function people(state = defaultPeople, { type, payload }) {
  switch (type) {
    case ADVANCE:
      return state.map((person) => {
        if (payload === person) {
          return {
            name: person.name,
            time: clock(person.time, { type: HOUR, payload: 4 })
          };
        }

        return person;
      });

    case RECALL:
      return state.map((person) => {
        return {
          name: person.name,
          time: payload
        };
      });

    default:
      return state;
  }
}
