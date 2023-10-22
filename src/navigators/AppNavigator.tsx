import LoginScreen from '@/screens/LoginScreen';
import { useAppSelector } from '@/store/hooks';

import ClientNavigator from './ClientNavigator';
import ProfessionalNavigator from './ProfessionalNavigator';

export default function AppNavigator() {
  const { user } = useAppSelector((state) => state.currentUser);

  if (user === 'client') return <ClientNavigator />;
  if (user === 'professional') return <ProfessionalNavigator />;

  return <LoginScreen />;
}
