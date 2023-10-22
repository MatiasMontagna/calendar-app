import { createStackNavigator } from '@react-navigation/stack';

import ClientAgendaScreen from '@/screens/ClientAgendaScreen';
import SessionDetailScreen from '@/screens/SessionDetailScreen';

const Stack = createStackNavigator();

export default function ClientNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Agenda"
        component={ClientAgendaScreen}
      />
      <Stack.Screen
        name="SessionDetail"
        component={SessionDetailScreen}
      />
    </Stack.Navigator>
  );
}
