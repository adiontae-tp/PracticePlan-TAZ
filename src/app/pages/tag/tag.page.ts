import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tag } from 'src/app/classes/tag';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.page.html',
  styleUrls: ['./tag.page.scss'],
})
export class TagPage implements OnInit {
  constructor(private route: ActivatedRoute, private fs: FirestoreService) {}

  ngOnInit() {}

  tag = new Tag();

  readonly = true;

  async ionViewWillEnter() {
    var id = this.route.snapshot.paramMap.get('id');
    if (id) {
      var tag = (await this.fs.getDoc('/tags/' + id)) as Tag;
      if (tag && tag.id) {
        this.tag = tag;
      }
    }
  }
}
