type TItem = { [key in 'path' | 'title' | 'icon']: string };

export const items: (TItem & { childList?: Omit<TItem, 'icon'>[] })[] = [
  {
    path: 'journal',
    title: 'Журнал',
    icon: 'mdi-application-outline',
  },
  {
    path: '',
    title: 'Сотрудники',
    icon: ' mdi-account-circle',
    childList: [
      {
        path: 'list',
        title: 'Список',
      },
      {
        path: 'control',
        title: 'Управление',
      },
      {
        path: 'position',
        title: 'Должности',
      },
      {
        path: 'timetable',
        title: 'Расписание',
      },
    ],
  },
  {
    path: 'admin',
    title: 'Админ',
    icon: 'mdi-layers',
  },
];
