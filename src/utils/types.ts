export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ITodosState {
  todos: ITodo[];
}

export interface IFiltersState {
  filter: string;
}

export type RootState = {
  todos: ITodosState;
  filters: string;
};
