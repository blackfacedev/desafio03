const INITIAL_STATE = [
  {
    id: 1,
    avatar_url: 'https://avatars0.githubusercontent.com/u/40779189?v=4',
    name: 'Marcel Assis',
    login: 'blackfacedev',
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
        },
      ];
    default:
      return state;
  }
}
