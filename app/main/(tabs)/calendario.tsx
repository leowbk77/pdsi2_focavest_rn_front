import { View, StyleSheet } from 'react-native';

// remover o pacote
import { CalendarBody, CalendarContainer, CalendarHeader, LocaleConfigsProps } from '@howljs/calendar-kit';
// remover o pacote

import {Calendar, LocaleConfig, ExpandableCalendar, TimelineEventProps, TimelineList, CalendarProvider, TimelineProps, CalendarUtils} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

/*
==========================calendario===========================
https://howljs.github.io/react-native-calendar-kit/docs/intro
meio quebrado^ mas funciona ------ REMOVER SE FOR MANTER O NOVO
===============================================================
https://wix.github.io/react-native-calendars/docs/Intro
novo^
===============================================================
*/
const eventsTlList = {'2025-03-31': [{start: '2025-03-31 09:20:00', end: '2025-03-31 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8'}, 
                                      {start: '2025-03-31 20:00:00', end: '2025-03-31 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8'}]}; // mockup
  

export default function Calendario() {
  const [selected, setSelected] = useState(''); 
  return(
    <SafeAreaView style={styles.container} >

          <View style={styles.calendarView}>

            {/* Criar uma view*/}
            <CalendarProvider date={'2025-03-25'}>
              <ExpandableCalendar onDayPress={day => setSelected(day.dateString)}/>
              <TimelineList events={eventsTlList} showNowIndicator={true}/>
            </CalendarProvider>

          </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'black',
    marginTop: '5%',
    alignSelf: 'center',
  },
  calendarView: {
    flex: 1,
    marginTop: 0,
  }
});
