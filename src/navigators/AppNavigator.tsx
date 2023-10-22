import LoginScreen from '@/screens/LoginScreen';
import { useAppSelector } from '@/store/hooks';

import ClientNavigator from './ClientNavigator';
import ProfessionalNavigator from './ProfessionalNavigator';

export default function AppNavigator() {
  const { userType } = useAppSelector((state) => state.currentUser);

  if (userType === 'client') return <ClientNavigator />;
  if (userType === 'professional') return <ProfessionalNavigator />;

  return <LoginScreen />;
}
