import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import styles from './styles';

import HeartIC from '../../assets/images/icons/heart-outline.png';
import unfavoriteIC from '../../assets/images/icons/unfavorite.png';
import whatsappIC from '../../assets/images/icons/whatsapp.png';

export type Teacher = {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
};

export interface TeacherItemI {
  teacher: Teacher;
  favorite: boolean;
}

const TeacherItem: React.FC<TeacherItemI> = ({
  teacher,
  favorite,
}) => {
  const [isFavorite, setFavorite] = useState(favorite);

  const handleLinkToWhatsapp = () => {
    api.post('connections', {
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  };

  const handleToggleFavorite = async () => {
    const favoriteTeachers = await AsyncStorage.getItem('@favorites');
    var favorites = [];
    if (favoriteTeachers) favorites = JSON.parse(favoriteTeachers);

    if (isFavorite) {
      const favoriteIndex = favorites.findIndex(
        (favTeacher: Teacher) => {
          return (favTeacher.id = teacher.id);
        }
      );

      favorites.splice(favoriteIndex, 1);
      setFavorite(false);
    } else {
      favorites.push(teacher);
      setFavorite(true);
    }

    await AsyncStorage.setItem(
      '@favorites',
      JSON.stringify(favorites)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}{' '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[
              styles.favoriteButton,
              isFavorite ? styles.favorite : {},
            ]}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={handleToggleFavorite}
            >
              {isFavorite ? (
                <Image source={unfavoriteIC} />
              ) : (
                <Image source={HeartIC} />
              )}
            </TouchableOpacity>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={handleLinkToWhatsapp}
            >
              <Image source={whatsappIC} />
              <Text style={styles.contactButtonText}>
                Entrar em contato
              </Text>
            </TouchableOpacity>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
