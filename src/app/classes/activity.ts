export class Activity {
  notes = '';
  id = Math.floor(Math.random() * 1000000).toString();
  name = '';
  duration = 0;
  tags: string[] = [];
  startTime = new Date().getTime();
  endTime = new Date().getTime();
}
