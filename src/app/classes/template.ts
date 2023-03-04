import { Activity } from "./activity"

export class Template {
    id = ''
    name = ''
    path = ''
    uid = ''
    notes = ''
    col = 'templates'
    duration = 0
    activities: Activity[] = []
}