import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Activity } from 'src/app/classes/activity';
import { Template } from 'src/app/classes/template';
import { ActivityModal } from 'src/app/modals/activity.modal';
import { AddPeriodsModal } from 'src/app/modals/add-periods.modal';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.page.html',
  styleUrls: ['./template.page.scss'],
})
export class TemplatePage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public helper: HelperService,
    private fs: FirestoreService,
    private navCtrl: NavController,
    private store: StoreService
  ) {}

  ngOnInit() {}
  readonly = false; 
  template = new Template();
  tags: string[] = [];

  async ionViewWillEnter() {
    var id = this.route.snapshot.paramMap.get('id');
    if (id) {
      var template = (await this.fs.getDoc('templates/' + id)) as Template;
      if (template && template.id) {
        this.readonly = true;
        this.template = template;
        var tags = this.store.tags.getValue().map((tag) => tag.name);
        this.tags = tags;
      }
    }
  }
  select(activity: Activity) {
    this.helper.showModal(ActivityModal, {
      activity: activity,
      plan: this.template,
      tags: this.tags,
      readonly: this.readonly,
    });
  }

  addPeriods() {
    this.helper.showModal(AddPeriodsModal, {
      plan: this.template,
    });
  }
}
