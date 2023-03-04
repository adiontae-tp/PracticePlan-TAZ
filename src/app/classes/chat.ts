import { User } from '../classes/user';

export class Chat {
  id: number = 0;
  name: string = '';
  members: any[] = [];
  lastMessage: string = '';
  messages?: ChatMessage[] = [];
  constructor() {}
}

export class ChatMessage {
  sender: User;
  text: string;
  time: number;

  constructor(sender: User, text: string, time: number) {
    this.sender = sender;
    this.text = text;
    this.time = time;
  }
}
