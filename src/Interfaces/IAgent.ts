export interface IAgent {
  id: string;
  name: string;
  role: string;
  start(): void;
  stop(): void;
  handle(task: any): Promise<any>;
}
