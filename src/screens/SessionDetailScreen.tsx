import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import { useTailwind } from 'tailwind-rn';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectActiveDays, professionalSlice } from '@/store/slices/professional';
import calculateNextDayAndEndTime from '@/utils/calculateNextDay';

export default function SessionDetailScreen() {
  const [sessionDay, setSessionDay] = useState<string>();
  const [startsAt, setStartsAt] = useState<string>();
  const tailwind = useTailwind();
  const dispatch = useAppDispatch();
  const {
    name: professionalName, sessionPrice, serviceName, serviceHours,
  } = useAppSelector((state) => state.professional);

  const activeDays = useAppSelector(selectActiveDays);
  const { userEmail } = useAppSelector((state) => state.currentUser);

  function bookSession(day, sessionStartsAt) {
    const payload = calculateNextDayAndEndTime(day, sessionStartsAt);
    if (payload !== null) dispatch(professionalSlice.actions.addScheduledHour(payload));
  }

  return (
    <View style={tailwind('flex-1 items-start justify-start px-10 pt-6')}>
      <Text style={tailwind('font-bold text-xl self-center my-4')}>Booking</Text>
      <Text>Hi {userEmail}! Book a session with {professionalName}</Text>
      <Text>Service: {serviceName}.</Text>
      <Text>Price per session: {sessionPrice}</Text>
      <Text>Session duration: 1 hour</Text>
      <View style={tailwind('flex-row items-center')}>
        <Text style={tailwind('font-bold text-lg')}>Day: </Text>
        <SelectDropdown data={activeDays} onSelect={(selectedDay) => setSessionDay(selectedDay)} />
      </View>
      <View style={tailwind('flex-row items-center')}>
        <Text style={tailwind('font-bold text-lg')}>Hour: </Text>
        <TextInput
          style={tailwind('border w-11/12')}
          placeholder="Insert initial hour in HH:MM format"
          onChangeText={(text) => setStartsAt(text)}
          value={startsAt}
        />
      </View>
      <Button title="Book Session" onPress={() => bookSession(sessionDay, startsAt)} />
    </View>
  );
}
