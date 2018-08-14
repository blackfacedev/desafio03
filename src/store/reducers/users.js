const INITIAL_STATE = [
  {
    id: 1,
    avatar_url: 'https://avatars0.githubusercontent.com/u/40779189?v=4',
    name: 'Marcel Assis',
    login: 'blackfacedev',
    latitude: -23.5439948,
    longitude: -46.6065452,
  },
  {
    id: 3,
    avatar_url: 'https://avatars0.githubusercontent.com/u/40779189?v=4',
    name: 'Marcel LOK',
    login: 'sdsd',
    latitude: -76.5439948,
    longitude: -28.6065452,
  },
];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          name: action.payload.name,
          id: action.payload.id,
          avatar_url: action.payload.avatar_url,
          login: action.payload.login,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      ];
    default:
      return state;
  }
}
