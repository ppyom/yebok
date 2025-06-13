import type { ConfigType } from 'dayjs';
import { day } from './base';

export const relative = (date: ConfigType) => {
  if (!day(date).isValid()) {
    throw new Error('📅 날짜 형식이 잘못되었습니다.');
  }

  if (day(date).isAfter(day())) {
    return '방금 전';
  }

  return day.duration(day(date).diff(day())).humanize(true);
};
