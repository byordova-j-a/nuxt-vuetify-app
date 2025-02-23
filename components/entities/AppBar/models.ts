export const headerList =
  {
    '/journal': 'Журнал',
    '/list': 'Сотрудники',
    '/control': 'Управление',
    '/position':'Должности',
    '/timetable': 'Расписание',
    '/admin': 'Админ',
    '/settings': 'Настройки',
  };

type TPagePath = keyof typeof headerList;

export const isPagePath = (path: string | TPagePath): path is TPagePath => {
  if (!Object.keys(headerList).includes(path)) {
    return false;
  }

  return true;
};
