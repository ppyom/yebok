import dayjs from 'dayjs';

import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

import 'dayjs/locale/ko';

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('ko');

export const day = dayjs;
