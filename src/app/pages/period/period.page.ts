import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Period } from 'src/app/classes/period';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-period',
  templateUrl: './period.page.html',
  styleUrls: ['./period.page.scss'],
})
export class PeriodPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public helper: HelperService,
    private fs: FirestoreService,
    private navCtrl: NavController,
    private store: StoreService
  ) {}

  ngOnInit() {}

  period = new Period();
  readonly = false;
  isLoading = false;
  tags: string[] = [];

  async ionViewWillEnter() {
    var id = this.route.snapshot.paramMap.get('id');
    if (id) {
      var period = (await this.fs.getDoc('/periods/' + id)) as Period;
      if (period && period.id) {
        this.readonly = true;
        this.period = period;
        var tags = this.store.tags.getValue().map((tag) => tag.name);
        this.tags = tags;
      }
    }
  }
}
