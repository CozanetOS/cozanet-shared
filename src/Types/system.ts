export interface SystemEvent {
  id: string;
  type: string;
  emitter: string;
  timestamp: Timestamp;
  payload: any;
}

export type EngineID = string;
export type Timestamp = number;

export interface Result<T> {
  success: boolean;
  data?: T;
  error?: string;
}
