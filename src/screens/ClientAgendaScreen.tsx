import { useNavigation } from '@react-navigation/native';
import { Text, View, Button } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import Agenda from '@/components/Agenda';
import { useAppSelector } from '@/store/hooks';

export default function AgendaScreen() {
  const navigation = useNavigation();
  const { name } = useAppSelector((state) => state.professional);
  const tailwind = useTailwind();
  return (
    <>
      <View style={tailwind('flex-row justify-between items-center')}>
        <Text style={tailwind('font-bold')}>{name}&apos;s Agenda</Text>
        <Button title="Book a session" onPress={() => navigation.navigate('SessionDetail' as never)} />
      </View>
      <Agenda />
    </>
  );
}
