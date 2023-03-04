import { Activity } from "./activity";

export class Plan {
    id = ''
    startTime = new Date().getTime()
    endTime = new Date().getTime()
    duration = 0;
    activities: Activity[] = []
    notes = ''
    team = ''
    path = ''
    uid = ''
    col = 'plans'
}
