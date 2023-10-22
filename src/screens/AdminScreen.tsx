import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import LogoutButton from '@/components/LogoutButton';
import ProfessionalForm from '@/components/ProfessionalForm';

export default function AdminScreen() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex-1 items-center')}>
      <LogoutButton />
      <Text style={tailwind('font-bold text-2xl')}>Admin Screen</Text>
      <ProfessionalForm />
    </View>
  );
}
