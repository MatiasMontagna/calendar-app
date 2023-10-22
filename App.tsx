import AppNavigator from '@/navigators/AppNavigator';
import AppProvider from '@/providers/AppProvider';

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
