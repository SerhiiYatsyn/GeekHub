export interface Task {
  id: number;
  title: string;
  owner: string;
  complete: boolean;
  hide: boolean;
  archived: boolean;
  deleted: boolean;
}
