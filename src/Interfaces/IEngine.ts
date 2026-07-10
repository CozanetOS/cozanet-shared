export interface IEngine {
  id: string;
  name: string;
  init(): Promise<void>;
  destroy(): Promise<void>;
  handle(payload: any): Promise<any>;
}
