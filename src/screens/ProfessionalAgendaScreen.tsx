import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';

import Agenda from '@/components/Agenda';

export default function ProfessionalAgendaScreen() {
  const navigation = useNavigation();
  return (
    <>
      <Text>Professional Agenda Screen</Text>
      <Button title="Go to Admin" onPress={() => navigation.navigate('Admin' as never)} />
      <Agenda />
    </>
  );
}
