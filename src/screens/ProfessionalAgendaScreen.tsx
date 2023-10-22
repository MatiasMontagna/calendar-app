import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export default function ProfessionalAgendaScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Professional Agenda Screen</Text>
      <Button title="Go to Admin" onPress={() => navigation.navigate('Admin' as never)} />
    </View>
  );
}
