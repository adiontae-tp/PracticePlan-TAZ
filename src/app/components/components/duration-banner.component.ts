import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: `tp-duration-banner`,
  template: `
    <div class="banner">
      <div
        style="display:  flex; align-items: center; flex-direction: row; justify-content: center; margin-left: -30px;"
      >
        <span> {{ helper.getDuration(item.duration) }} </span>
      </div>
    </div>

    <style>
      .banner {
        text-align: center;
        background: #f0f0f0;
        color: #333;
        padding: 10px;
      }
    </style>
  `,
})
export class DurationBannerComponent {
  constructor(public helper: HelperService) {}

  @Input() item = { duration: 0 };
}
