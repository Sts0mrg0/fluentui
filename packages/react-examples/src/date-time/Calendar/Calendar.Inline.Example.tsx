import * as React from 'react';
import { Calendar, DayOfWeek, defaultDayPickerStrings, DateRangeType } from '@uifabric/date-time';

export const CalendarInlineExample: React.FunctionComponent = () => {
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
      />
    </div>
  );
};
