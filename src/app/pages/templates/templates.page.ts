import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/classes/template';
import { NewTemplateModal } from 'src/app/modals/new-template.modal';
import { HelperService } from 'src/app/services/helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.page.html',
  styleUrls: ['./templates.page.scss'],
})
export class TemplatesPage implements OnInit {
  constructor(private store: StoreService, private helper: HelperService) {}

  ngOnInit() {}

  templates: Template[] = [];

  ionViewWillEnter() {
    this.store.templates.subscribe((val) => (this.templates = val));
  }

  newTemplate() {
    this.helper.showModal(NewTemplateModal);
  }
}
