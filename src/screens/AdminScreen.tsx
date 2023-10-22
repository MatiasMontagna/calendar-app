import { Button, Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import { useAppDispatch } from '@/store/hooks';
import { currentUserSlice } from '@/store/slices/currentUser';

export default function AdminScreen() {
  const tailwind = useTailwind();
  const dispatch = useAppDispatch();

  return (
    <View style={tailwind('flex-1 items-center')}>
      <Button
        title="Logout"
        onPress={() => dispatch(currentUserSlice.actions.setCurrentUser({
          userType: undefined,
          userEmail: undefined,
        }))}
      />
      <Text>Admin Screen</Text>
      <Text>Form goes here</Text>
    </View>
  );
}
