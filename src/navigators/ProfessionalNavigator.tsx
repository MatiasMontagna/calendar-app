import { createStackNavigator } from '@react-navigation/stack';

import AdminScreen from '@/screens/AdminScreen';
import ProfessionalAgendaScreen from '@/screens/ProfessionalAgendaScreen';

const Stack = createStackNavigator();

export default function ProfessionalNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Agenda"
        component={ProfessionalAgendaScreen}
      />
      <Stack.Screen
        name="Admin"
        component={AdminScreen}
      />
    </Stack.Navigator>
  );
}
