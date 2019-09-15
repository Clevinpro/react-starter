export const EVENT_DEFAULT = {
  id: '',
  title: '',
  cost: '',
  places: {
    all: '',
    free: '',
  },
  date: '',
  time: {
    from: '',
    to: '',
  },
  emcess: [],
  image: '',
  data: '',
};

export const INITIAL_STATE = {
  app: {
    type: '',
    locale: 'en',
    loaded: false,
  },
  dialog: {
    params: {},
    name: '',
  },
  user: {
    token: '',
  },
};
