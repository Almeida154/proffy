import { useEffect, useState } from 'react';
import {
  View,
  BackHandler,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setFiltersVisible] = useState(true);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);
  const [favoriteTeacherIds, setFavoriteTeacherIds] = useState<
    number[]
  >([]);

  const { navigate } = useNavigation();

  const loadFavorites = () => {
    AsyncStorage.getItem('@favorites').then((res) => {
      if (res) {
        const favorites = JSON.parse(res);
        const ids = favorites.map((fav: Teacher) => fav.id);
        setFavoriteTeacherIds(ids);
      }
    });
  };

  useFocusEffect(() => {
    loadFavorites();
  });

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      navigate('Landing');
      return true;
    });
  });

  const handleToggleFiltersVisibility = () => {
    setFiltersVisible(!isFiltersVisible);
  };

  const handleFiltersSubmit = async () => {
    loadFavorites();

    const res = await api.get('classes', {
      params: {
        subject,
        time,
        week_day: weekDay,
      },
    });

    handleToggleFiltersVisibility();
    setTeachers(res.data);
  };

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <TouchableOpacity onPress={handleToggleFiltersVisibility}>
            <Feather name="filter" size={20} color="#fff" />
          </TouchableOpacity>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={(txt) => setSubject(txt)}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                  value={weekDay}
                  onChangeText={(txt) => setWeekDay(txt)}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={(txt) => setTime(txt)}
                />
              </View>
            </View>

            <RectButton style={styles.submitButton}>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  height: '100%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleFiltersSubmit}
              >
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </TouchableOpacity>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.list}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorite={favoriteTeacherIds.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
