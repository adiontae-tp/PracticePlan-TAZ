import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Coach } from 'src/app/classes/coach';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.page.html',
  styleUrls: ['./coach.page.scss'],
})
export class CoachPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private fs: FirestoreService,
    private navCtlr: NavController
  ) {}

  ngOnInit() {}

  coach = new Coach();
  readonly = true

  async ionViewWillEnter() {
    var id = this.route.snapshot.paramMap.get('id');
    var coach = (await this.fs.getDoc('coaches/' + id)) as Coach;
    if (coach && coach.id) {
      this.coach = coach;
    } 
  }
}
