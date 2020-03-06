export interface IDefaultState {
  users: IUsersState;
  books: IBooksState;
  error: any;
  _persists: any;
}

export interface IVoice {
  _id: String;
  email: String;
  name: String;
}

export interface IUsersState {
  user: IUser;
  error: any;
  loading: Boolean;
}

export interface IFilter {
  value: String;
  label: String;
}

export interface IBooksState {
  books: [IBook];
  error: any;
  loading: Boolean;
  filters: [IFilter];
  book: IBook;
}

export interface IBook {
  _id: String;
  tags: [String];
  voices: [any];
  price: Number;
  picture: String;
  title: String;
  author: String;
  about: String;
}

export interface IUser extends IVoice {
  token: String;
  likedBooks: [String];
}
