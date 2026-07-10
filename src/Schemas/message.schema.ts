export interface Message {
  id: string;
  from: string;
  to: string;
  content: any;
  timestamp: number;
}

export function isValidMessage(msg: any): msg is Message {
  return (
    typeof msg === 'object' &&
    msg !== null &&
    typeof msg.id === 'string' &&
    typeof msg.from === 'string' &&
    typeof msg.to === 'string' &&
    msg.content !== undefined &&
    typeof msg.timestamp === 'number'
  );
}
