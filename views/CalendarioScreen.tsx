import { View, StyleSheet, } from 'react-native';
import {Calendar, LocaleConfig, ExpandableCalendar, TimelineEventProps, TimelineList, CalendarProvider, TimelineProps, CalendarUtils} from 'react-native-calendars';
import { useState } from 'react';
import { colors } from '@/styles/color';
import { useTaskInfo } from '@/contexts/TaskContext';

/*
==========================calendario===========================
https://wix.github.io/react-native-calendars/docs/Intro
===============================================================
*/
                                      
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
    const {tasks} = useTaskInfo();

    const getDate = () => {
        const date = CalendarUtils.getCalendarDateString(Date())
        console.log(date);
        return date;
    };

    return (
              <View style={styles.calendarView}>
                <CalendarProvider date={INITIAL_DATE}>
                  <ExpandableCalendar onDayPress={day => setSelected(day.dateString)} theme={calendarCustomTheme}/>

                    <View style={styles.timelineView}>
                      <TimelineList events={tasks} showNowIndicator={true} scrollToFirst={true}/>
                    </View>
                  
                </CalendarProvider>
              </View>
    );
};

const styles = StyleSheet.create({
    calendarView: {
      flex: 1,
    },
    timelineView: {
      flex:1, 
      backgroundColor: colors.primary, 
      padding: '1%',
      paddingTop: 0,
      paddingBottom: 0,
    }
});

const calendarCustomTheme = {
    arrowColor: colors.primary,
    selectedDayBackgroundColor: colors.primary,
};

export default CalendarioScreen;
