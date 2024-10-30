import Material from '@expo/vector-icons/MaterialCommunityIcons'
import IonIcons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          headerShown: false,
          tabBarIcon: ({ color }) => <Material size={28} name="login" color={color} />,
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'Register',
          headerShown: false,
          tabBarIcon: ({ color }) => <IonIcons size={28} name="person-circle-sharp" color={color} />,
        }}
      />
    </Tabs>
  );
}
