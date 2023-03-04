import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
  getDocs,
} from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { fs } from '../app.module';
import { Coach } from '../classes/coach';
import { Period } from '../classes/period';
import { Plan } from '../classes/plan';
import { Tag } from '../classes/tag';
import { Team } from '../classes/team';
import { Template } from '../classes/template';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  user = new BehaviorSubject(new User());
  team = new BehaviorSubject(new Team());
  teams = new BehaviorSubject<Team[]>([]);
  periods = new BehaviorSubject<Period[]>([]);
  coaches = new BehaviorSubject<Coach[]>([]);
  templates = new BehaviorSubject<Template[]>([]);
  tags = new BehaviorSubject<Tag[]>([]);
  plans = new BehaviorSubject<Plan[]>([]);
  plansInit = false;
  tagsInit = false;
  coachesInit = false;
  periodsInit = false;
  teamsInit = false;

  async init(uid: string) {
    return new Promise(async (resolve) => {
      await this.initUser(uid);
      await this.initTeam();
      await this.initTeams();
      await this.initPeriods();
      await this.initPlans();
      await this.initCoaches();
      await this.initTags();
      await this.initTemplates();
      return resolve(true);
    });
  }

  initUser(uid: string) {
    return new Promise((resolve) => {
      var docRef = doc(fs, 'users/' + uid);
      onSnapshot(docRef, (snap) => {
        this.user.next(snap.data() as User);
        console.log('init user....');
        return resolve(true);
      });
    });
  }

  initTeam() {
    return new Promise(async (resolve) => {
      var user = this.user.getValue();
      var teamId: string = user.team;
      if (!teamId) {
        teamId = await this.createDefaultTeam();
      }
      var docRef = doc(fs, 'teams/' + teamId);
      onSnapshot(docRef, (snap) => {
        this.team.next(snap.data() as Team);
        console.log('init team....');
        return resolve(true);
      });
    });
  }

  initTeams() {
 
    return new Promise((resolve) => {
      var user = this.user.getValue();
      var colRef = collection(fs, 'teams');
      var q = query(colRef, where('uid', '==', user.uid));
      onSnapshot(q, (snap) => {
        this.teams.next(snap.docs.map((d) => d.data()) as Team[]);
        this.teamsInit = true;
        console.log('init teams....');
        return resolve(true);
      });
    });
  }

  initCoaches() {
   
    return new Promise((resolve) => {
      var team = this.team.getValue();
      var colRef = collection(fs, 'coaches');
      var q = query(colRef, where('team', '==', team.id));
      onSnapshot(q, async (snap) => {
        var coaches = snap.docs.map((d) => d.data()) as Coach[];
        var coachesEmailList = coaches.map((c) => c.email);
        if (coachesEmailList.length > 0) {
          var usersRef = collection(fs, 'users');
          var q = query(usersRef, where('email', 'in', coachesEmailList));
          var userCoaches = (await (
            await getDocs(q)
          ).docs.map((d) => d.data())) as any as Coach[];
          console.log(userCoaches);
          coaches.forEach((coach, index) => {
            var userCoach = userCoaches.find((uc) => uc.email == coach.email);
            console.log(userCoach);
            if (userCoach) {
              userCoach.id = coach.id;
              coaches.splice(index, 1, userCoach);
            } else {
              console.log('no coach match');
            }
          });
          console.log(coaches);
          this.coaches.next(coaches);
        }
        this.coachesInit = true;
        console.log('init coaches....');
        return resolve(true);
      });
    });
  }

  initPeriods() {
  
    return new Promise((resolve) => {
      var team = this.team.getValue();
      var colRef = collection(fs, 'periods');
      var q = query(colRef, where('team', '==', team.id));
      onSnapshot(q, (snap) => {
        this.periods.next(snap.docs.map((d) => d.data()) as Period[]);
        console.log('init periods....');
        this.periodsInit = true;
        return resolve(true);
      });
    });
  }

  initPlans() {
    return new Promise((resolve) => {
      var team = this.team.getValue();
      var colRef = collection(fs, 'plans');
      var q = query(colRef, where('team', '==', team.id));
      onSnapshot(q, (snap) => {
        this.plans.next(snap.docs.map((d) => d.data()) as Plan[]);
        // plans = snap.docs.map((d) => d.data()) as Plan[];
        this.plansInit = true;
        console.log('init plans....');
        return resolve(true);
      });
    });
  }

  initTags() {
    return new Promise((resolve) => {
      var team = this.team.getValue();
      var colRef = collection(fs, 'tags');
      var q = query(colRef, where('team', '==', team.id));
      onSnapshot(q, (snap) => {
        this.tags.next(snap.docs.map((d) => d.data()) as Tag[]);
        console.log('init tags....');
        return resolve(true);
      });
    });
  }

  initTemplates() {

    return new Promise((resolve) => {
      var team = this.team.getValue();
      var colRef = collection(fs, 'templates');
      var q = query(colRef, where('team', '==', team.id));
      onSnapshot(q, (snap) => {
        this.templates.next(snap.docs.map((d) => d.data()) as Template[]);
        console.log('init templates....');
        return resolve(true);
      });
    });
  }

  createDefaultTeam(): Promise<string> {
    return new Promise(async (resolve) => {
      var user = this.user.getValue();
      var team = new Team();
      team.col = 'teams';
      team.name = 'Default Team';
      team.sport = 'Other';
      team.uid = user.uid;
      var colRef = collection(fs, 'teams');
      addDoc(colRef, { ...team }).then(async (result) => {
        var { id, path } = result;
        var updateRef = doc(fs, path);
        var userRef = doc(fs, user.path);
        await updateDoc(updateRef, {
          id,
          path,
          created: new Date().getTime(),
          modified: new Date().getTime(),
        });
        await updateDoc(userRef, { team: id });
        return resolve(id as string);
      });
    });
  }
}
