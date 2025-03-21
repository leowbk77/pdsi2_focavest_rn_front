import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { CalendarBody, CalendarContainer, CalendarHeader, LocaleConfigsProps } from '@howljs/calendar-kit';
import { Link } from 'expo-router';
import { Dimensions } from 'react-native';

/*
=======calendario
https://howljs.github.io/react-native-calendar-kit/docs/intro
meio quebrado^ mas funciona
====================================
*/

export default function Calendario() {
  
  const initialLocales: Record<string, Partial<LocaleConfigsProps>> = {
    en: {
      weekDayShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'), // Text in day header (Sun, Mon, etc.)
      meridiem: { ante: 'am', post: 'pm' }, // Hour format (hh:mm a)
      more: 'more', // Text for "more" button (All day events)
    },
    ja: {
      weekDayShort: '日_月_火_水_木_金_土'.split('_'),
      meridiem: { ante: '午前', post: '午後' },
      more: 'もっと',
    },
    vi: {
      weekDayShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      meridiem: { ante: 'sa', post: 'ch' },
      more: 'Xem thêm',
    },
    ptBR: {
      weekDayShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sab'.split('_'),
      meridiem: { ante: 'antes', post: 'depois' },
      more: 'mais',
    },
  };

  return (
    <ImageBackground
    source={require('@/assets/images/focavestbkg.jpg')}
    style={styles.backgroundImg}
    resizeMode='cover'>
      <View>
        <View style={styles.calendarView}>
          <CalendarContainer
            calendarWidth={Dimensions.get('window').width}
            initialLocales={initialLocales}
            locale='ptBR'>
            <CalendarHeader />
            <CalendarBody />
          </CalendarContainer>
        </View>

        <Link href="/" style={styles.button}>
          Voltar
        </Link>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'black',
    marginTop: '5%',
    alignSelf: 'center',
  },
  calendarView: {
    height: '60%',
  }
});
