import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Activity } from 'src/app/classes/activity';
import { Plan } from 'src/app/classes/plan';
import { ActivityModal } from 'src/app/modals/activity.modal';
import { AddPeriodsModal } from 'src/app/modals/add-periods.modal';
import { NewPlanModal } from 'src/app/modals/new-plan.modal';
import { SelectTemplateModal } from 'src/app/modals/select-template.modal';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {
  constructor(
    public helper: HelperService,
    private route: ActivatedRoute,
    private fs: FirestoreService,
    private store: StoreService
  ) {}

  plan = new Plan();
  readonly = false;
  date = moment().format();
  tags: string[] = [];

  ngOnInit() {}

  async ionViewWillEnter() {
    var id = this.route.snapshot.paramMap.get('id');
    if (id) {
      var plan = (await this.fs.getDoc('/plans/' + id)) as Plan;
      if (plan && plan.id) {
        this.plan = plan;
        this.readonly = true;
        var tags = this.store.tags.getValue().map((tag) => tag.name);
        this.tags = tags;
        setTimeout(() => {
          this.date = moment(plan.startTime, 'x').format();
        }, 1000);
      }
    }
  }
  addPeriods() {
    this.helper.showModal(AddPeriodsModal, { plan: this.plan });
  }
  select(activity: Activity) {
    this.helper.showModal(ActivityModal, {
      activity: activity,
      plan: this.plan,
      tags: this.tags,
      readonly: this.readonly,
    });
  }

  selectTemplate() {
    this.helper.showModal(SelectTemplateModal).then((template: any) => {
      this.plan.activities = template.activities;
      this.helper.updateDurationTimes(this.plan);
      this.readonly = false
    });
  }
  updateTime(event: any) {
    var time = event.target.value;
    this.plan.startTime = parseInt(moment(time).format('x'));
    this.helper.updateDurationTimes(this.plan);
  }
}
