/* eslint-disable react/require-default-props */
import { Text, TextInput, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

type Props = {
  name: string,
  value: string,
  touched?: boolean,
  errors?: string,
  handleChange: () => void,
};

export default function FormInput({
  name, value, touched = false, errors = undefined, handleChange,
}: Props) {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('my-2 flex-row justify-between pr-8')}>
      <Text style={tailwind('font-bold')}>{name}: </Text>
      <TextInput
        style={tailwind('border')}
        onChangeText={handleChange}
        value={value}
      />
      {touched && errors && (
      <Text style={{ color: 'red' }}>{errors}</Text>
      )}
    </View>
  );
}
