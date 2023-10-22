import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import { useAppSelector } from '@/store/hooks';

type Props = {
  email: string,
  startsAt: string,
  endsAt: string,
  firstItemInDay: boolean
};

export default function AgendaItem({
  email, startsAt, endsAt, firstItemInDay,
}: Props) {
  const tailwind = useTailwind();
  const { userType } = useAppSelector((state) => state.currentUser);
  const isProfessional = userType === 'professional';

  return (
    <View style={tailwind(`${isProfessional ? 'bg-white' : 'bg-gray-200'} flex-col justify-center h-16 w-11/12 pl-6 ${firstItemInDay && 'mt-4'}`)}>
      <Text>{startsAt} - {endsAt}</Text>
      <Text style={tailwind('font-bold')}>{isProfessional ? email : 'Busy'}</Text>
    </View>
  );
}
