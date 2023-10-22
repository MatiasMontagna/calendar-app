import { View, Text } from 'react-native';
import { Agenda as RNAgenda } from 'react-native-calendars';
import { useTailwind } from 'tailwind-rn';

import AgendaItem from './AgendaItem';

export default function Agenda() {
  const tailwind = useTailwind();

  return (
    <RNAgenda
      items={{
        '2023-10-22': [{
          name: 'item 1 - any js object', email: 'matias@montagna.cl', startsAt: '10:45', endsAt: '11:45',
        }],
        // '2023-10-23': [{ name: 'item 2 - any js object', height: 100, day: '2023-10-23' }],
        // '2023-10-24': [],
        // '2023-10-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }],
      }}
      renderItem={(item, firstItemInDay) => (
        <AgendaItem
          email={item.email}
          endsAt={item.endsAt}
          startsAt={item.startsAt}
          firstItemInDay={firstItemInDay}
        />
      )}
      renderEmptyData={() => <Text style={tailwind('text-center pt-2')}>No appointments today</Text>}
      pastScrollRange={0}
      futureScrollRange={1}
    />
  );
}
