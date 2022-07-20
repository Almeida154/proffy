import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import giveClassesBGIMG from '../../assets/images/give-classes-background.png';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBGIMG}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na
          nossa plataforma web
        </Text>
      </ImageBackground>

      <RectButton style={styles.button}>
        <TouchableOpacity
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={1}
          onPress={goBack}
        >
          <Text style={styles.buttonText}>Tudo bem</Text>
        </TouchableOpacity>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
