import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

const Favorites: React.FC = () => {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);

  const loadFavorites = () => {
    AsyncStorage.getItem('@favorites').then((res) => {
      if (res) {
        const favorites = JSON.parse(res);
        setFavoriteTeachers(favorites);
      }
    });
  };

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />
      <ScrollView
        style={styles.list}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favoriteTeachers.map((favTeacher: Teacher) => (
          <TeacherItem
            key={favTeacher.id}
            teacher={favTeacher}
            favorite
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
