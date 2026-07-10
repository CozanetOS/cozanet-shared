import { EngineID, Timestamp } from '../Types/system';

export class Logger {
  private engineId: EngineID;

  constructor(engineId: EngineID) {
    this.engineId = engineId;
  }

  private formatMessage(level: string, message: string): string {
    const timestamp: Timestamp = Date.now();
    return `[COZANET][${this.engineId}][${timestamp}][${level}] ${message}`;
  }

  public debug(message: string): void {
    console.debug(this.formatMessage('DEBUG', message));
  }

  public info(message: string): void {
    console.info(this.formatMessage('INFO', message));
  }

  public warn(message: string): void {
    console.warn(this.formatMessage('WARN', message));
  }

  public error(message: string): void {
    console.error(this.formatMessage('ERROR', message));
  }
}
