import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import backIC from '../../assets/images/icons/back.png';
import logoIMG from '../../assets/images/logo.png';

interface PageHeaderI {
  title: string;
}

const PageHeader: React.FC<PageHeaderI> = ({ title }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => {
            console.log('clicked');
            navigate('Landing');
          }}
        >
          <Image source={backIC} resizeMode="contain" />
        </TouchableOpacity>
        <Image source={logoIMG} resizeMode="contain" />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PageHeader;
