
export interface Task {
  // question mark indicates the parameter is optional
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}