import { useState } from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function HomeScreen() {
  const tailwind = useTailwind();
  const [projectName] = useState('Calendar-app');

  return (
    <View style={tailwind('p-4 bg-gray-900 flex-1 justify-center items-center')}>
      <Text style={tailwind('text-white')}>
        Hello {projectName}!
      </Text>
    </View>
  );
}
