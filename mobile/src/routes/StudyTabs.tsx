import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../screens/TeacherList';
import Favorites from '../screens/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { elevation: 0, shadowOpacity: 0, height: 64 },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        },
        tabBarIconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        tabBarLabelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        tabBarInactiveBackgroundColor: '#fafafc',
        tabBarInactiveTintColor: '#c1bccc',
        tabBarActiveBackgroundColor: '#ebebf5',
        tabBarActiveTintColor: '#32264d',
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="easel-outline"
              size={size - 4}
              color={focused ? '#8257e5' : color}
            />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="heart-outline"
              size={size - 4}
              color={focused ? '#8257e5' : color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default StudyTabs;
