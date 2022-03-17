import { useNavigation } from '@react-navigation/native';

const navigationHandler = routeName => {
  const navigation = useNavigation();
  navigation.navigate(routeName);
};

const useNavigationHook = ({ route }) => {
  navigationHandler(route);
};

export { useNavigationHook };
