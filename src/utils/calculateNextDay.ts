export default function calculateNextDayAndEndTime(day, startsAt) {
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const currentDayIndex = daysOfWeek.indexOf(day.toLowerCase());

  if (currentDayIndex === -1) {
    return null;
  }

  const now = new Date();
  const currentDay = now.getDay();
  const daysUntilNextDay = (currentDayIndex - currentDay + 7) % 7;

  const nextDayDate = new Date(now);
  nextDayDate.setDate(now.getDate() + daysUntilNextDay);
  const [startHours, startMinutes] = startsAt.split(':').map(Number);

  if (isNaN(startHours) || isNaN(startMinutes)) {
    return null;
  }

  const startTime = new Date(nextDayDate);
  startTime.setHours(startHours, startMinutes, 0, 0);
  const endTime = new Date(startTime);
  endTime.setHours(startTime.getHours() + 1);

  return {
    day: daysOfWeek[currentDayIndex],
    startsAt: startTime,
    endsAt: endTime,
  };
}
