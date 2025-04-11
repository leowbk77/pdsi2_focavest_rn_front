import { View, StyleSheet, } from 'react-native';
import {Calendar, LocaleConfig, ExpandableCalendar, TimelineEventProps, TimelineList, CalendarProvider, TimelineProps, CalendarUtils} from 'react-native-calendars';
import { useState } from 'react';
import { colors } from '@/styles/color';

/*
==========================calendario===========================
https://wix.github.io/react-native-calendars/docs/Intro
===============================================================
*/

const eventsTlList = {'2025-03-31': [{start: '2025-03-31 09:20:00', end: '2025-03-31 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8'}, 
                                      {start: '2025-03-31 20:00:00', end: '2025-03-31 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8'}]}; // mockup
                                      
LocaleConfig.locales['ptBR'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: "Hoje"
};

LocaleConfig.defaultLocale = 'ptBR';
const INITIAL_DATE =  CalendarUtils.getCalendarDateString(Date());

const CalendarioScreen = () => {
    const [selected, setSelected] = useState('');

    const getDate = () => {
        const date = CalendarUtils.getCalendarDateString(Date())
        console.log(date);
        return date;
    };

    return (
              <View style={styles.calendarView}>
                <CalendarProvider date={INITIAL_DATE}>
                  <ExpandableCalendar onDayPress={day => setSelected(day.dateString)} theme={calendarCustomTheme}/>
                  <TimelineList events={eventsTlList} showNowIndicator={true} scrollToFirst={true}/>
                </CalendarProvider>
              </View>
    );
};

const styles = StyleSheet.create({
    calendarView: {
      flex: 1,
    },
  });

const TimelineListTheme = {
  padding: '20%',
};

const calendarCustomTheme = {
    arrowColor: colors.primary,
    selectedDayBackgroundColor: colors.primary,
};

export default CalendarioScreen;
