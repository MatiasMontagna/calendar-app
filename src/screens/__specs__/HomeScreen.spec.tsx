import { render } from '@testing-library/react-native';
import { Factory } from 'fishery';

import HomeScreen from '@/screens/HomeScreen';
import type { User } from '@/types/user';

const userFactory = Factory.define<User>(({ sequence }) => ({
  id: sequence,
  name: 'John Doe',
  company: 'Calendar-app',
}));

describe('HomeScreen specs', () => {
  it('shows application name', () => {
    const component = render(<HomeScreen />);
    expect(component.queryByText('Hello Calendar-app!')).not.toBeNull();
  });

  it('has a white text over a gray background', () => {
    const component = render(<HomeScreen />);
    expect(component.queryByText('Hello Calendar-app!')?.props.style).toMatch(/text-white/);
    expect(component.root.props.style).toMatch(/bg-gray-\d{2,3}/);
  });

  it('has a valid factory', () => {
    const user = userFactory.build();
    expect(user.name).toEqual('John Doe');
    expect(user.company).toEqual('Calendar-app');
  });
});
