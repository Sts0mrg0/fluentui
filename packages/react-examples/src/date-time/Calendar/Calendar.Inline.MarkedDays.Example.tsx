import * as React from 'react';
import { Calendar, DayOfWeek, defaultDayPickerStrings, DateRangeType, ICalendarDayProps } from '@uifabric/date-time';
import { addDays } from '@fluentui/date-time-utilities';

const calendarDayProps: Partial<ICalendarDayProps> = {
  getMarkedDays: (startingDate, endingDate) => [addDays(startingDate, 3), addDays(startingDate, 4)],
};

export const CalendarInlineMarkedDaysExample = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  return (
    <div style={{ height: '360px' }}>
      <div>Selected date: {selectedDate?.toLocaleString() || 'Not set'}</div>
      <Calendar
        dateRangeType={DateRangeType.Day}
        showGoToToday
        onSelectDate={setSelectedDate}
        value={selectedDate}
        firstDayOfWeek={DayOfWeek.Sunday}
        strings={defaultDayPickerStrings}
        calendarDayProps={calendarDayProps}
      />
    </div>
  );
};
