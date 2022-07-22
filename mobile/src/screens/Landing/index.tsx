import { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import styles from './styles';

import landingIMG from '../../assets/images/landing.png';
import studyIC from '../../assets/images/icons/study.png';
import giveClassesIC from '../../assets/images/icons/give-classes.png';
import heartIC from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((res) => {
      console.log(res);
      setTotalConnections(res.data.total);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={landingIMG} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.boldTitle}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.button, styles.primaryButton]}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              justifyContent: 'space-between',
              height: '100%',
            }}
            onPress={() => navigate('StudyTabs')}
          >
            <Image source={studyIC} />
            <Text style={styles.buttonText}>Estudar</Text>
          </TouchableOpacity>
        </RectButton>

        <RectButton style={[styles.button, styles.secondaryButton]}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              justifyContent: 'space-between',
              height: '100%',
            }}
            onPress={() => navigate('GiveClasses')}
          >
            <Image source={giveClassesIC} />
            <Text style={styles.buttonText}>Dar aulas</Text>
          </TouchableOpacity>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas{' '}
        <Image source={heartIC} />
      </Text>
    </View>
  );
};

export default Landing;
