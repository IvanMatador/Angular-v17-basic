export const HomeLeftList: any = [
  {
    name: 'Записатися на прийом',
    id: 1,
    value: 'book-visit',
    isNeedToBeRegistered: false,
    list: [
      { spec: 'Дантист', specVal: 'dantist' },
      { spec: 'Терапевт', specVal: 'terapist' },
      { spec: 'Окуліст', specVal: 'visTerapist' },
      { spec: 'ЛОР', specVal: 'lor' },
    ],
  },
  {
    name: 'Здати аналізи',
    id: 2,
    value: 'book-visit',
    isNeedToBeRegistered: false,
    list: [
      { spec: 'Кров', specVal: 'blood' },
      { spec: 'Рідини', specVal: 'liquid' }
    ],
  },
  {
    name: 'Пройти обстеження',
    id: 3,
    value: 'book-visit',
    isNeedToBeRegistered: false,
    list: [
      { spec: 'УЗІ', specVal: 'usd' },
      { spec: 'МРТ', specVal: 'mrt' },
      { spec: 'КТ', specVal: 'kt' }
    ],
  },
];
