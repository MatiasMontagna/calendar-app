import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import Agenda from '@/components/Agenda';

export default function ProfessionalAgendaScreen() {
  const navigation = useNavigation();
  const tailwind = useTailwind();

  return (
    <>
      <Text style={tailwind('text-lg self-center')}>Check your appointments here</Text>
      <Agenda />
      <Button title="Go to Admin" onPress={() => navigation.navigate('Admin' as never)} />
    </>
  );
}
