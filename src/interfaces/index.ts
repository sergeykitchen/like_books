export interface IDefaultState {
  users: IUsersState;
  books: IBooksState;
  error: IError;
}

export interface IVoice {
  _id: string;
  email: string;
  name: string;
}

export interface IUsersState extends Object {
  user?: IUser | null;
  loading: Boolean;
}

export interface IError {
  message: string;
  statusText: string;
}

export interface IFilter {
  value: string;
  label: string;
}

export interface IBooksState {
  books: IBook[] | null;
  loading: Boolean;
  filters: IFilter[];
  book: IBook | null;
}

export interface IBook {
  _id: string;
  tags: [string];
  voices: [any];
  price: Number;
  picture: string;
  title: string;
  author: string;
  about: string;
  loading: boolean;
}

export interface IUser extends IVoice {
  token: string;
  likedBooks: [string];
}

export interface IVoteResponse {
  bookId: string;
  voices: string[];
}

export interface IAction<T = void> {
  type: string;
  payload?: T;
}

export interface INewUser extends IExistUser {
  name: string;
}

export interface IExistUser {
  password: string;
  email: string;
}
