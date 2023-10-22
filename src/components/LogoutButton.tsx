import { Button } from 'react-native';

import { useAppDispatch } from '@/store/hooks';
import { currentUserSlice } from '@/store/slices/currentUser';

export default function LogoutButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      title="Logout"
      onPress={() => dispatch(currentUserSlice.actions.setCurrentUser({
        userType: undefined,
        userEmail: undefined,
      }))}
    />
  );
}
