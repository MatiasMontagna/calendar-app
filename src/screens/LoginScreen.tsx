import { useState } from 'react';
import {
  Text, View, Button, TextInput,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';

import { useAppDispatch } from '@/store/hooks';
import { currentUserSlice } from '@/store/slices/currentUser';
import { type UserType } from '@/types/userType';

export default function LoginScreen() {
  const tailwind = useTailwind();
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();

  function handleLogin(userEmail: string) {
    let userType: UserType;
    if (userEmail === 'admin') userType = 'professional';
    else userType = 'client';

    dispatch(currentUserSlice.actions.setCurrentUser({
      userType,
      userEmail,
    }));
  }

  return (
    <View style={tailwind('flex-1 items-center justify-center ')}>
      <Text>Login Screen</Text>
      <View style={tailwind(' items-center justify-center bg-gray-300 border rounded h-4/5 w-4/5')}>
        <TextInput
          style={tailwind('border w-44')}
          value={email}
          placeholder="Write your email here"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <Button title="Login" onPress={() => handleLogin(email)} />
      </View>
    </View>

  );
}
