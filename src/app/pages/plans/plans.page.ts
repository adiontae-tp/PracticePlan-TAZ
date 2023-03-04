import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Plan } from 'src/app/classes/plan';
import { Tag } from 'src/app/classes/tag';
import { Template } from 'src/app/classes/template';
import { NewPlanModal } from 'src/app/modals/new-plan.modal';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {
  constructor(
    private store: StoreService,
    public helper: HelperService,
    private navCtrl: NavController
  ) {}

  plans: Plan[] = [];
  plan = new Plan();
  showAll = false;
  templates: Template[] = [];

  ngOnInit() {}

  async ionViewWillEnter() {
    this.store.plans.subscribe((val) => {
      if (val) {
        this.plans = val.sort((a: Plan, b: Plan) => a.endTime - b.endTime);
      }
    });
    this.store.templates.subscribe((val) => (this.templates = val));
  }

  select(plan: Plan) {
    this.navCtrl.navigateForward('/plan/' + plan.id);
  }

  newPlan() {
    this.helper.showModal(NewPlanModal);
  }

  plansFilter() {
    if (this.showAll) {
      return this.plans;
    } else {
      var midnight = new Date(
        new Date().setDate(new Date().getDate())
      ).setHours(0, 0, 0, 0);
      return this.plans.filter((plan) => plan.endTime > midnight);
    }
  }
}
