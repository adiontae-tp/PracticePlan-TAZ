import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: `tp-calendar`,
  template: `
    <div class="relative h-full overflow-hidden">
      <div
        class="flex items-center justify-between py-2 px-4 bg-gray-200 text-gray-600"
      >
        <button class="text-lg font-medium">&lt;</button>
        <h2 class="text-lg font-medium">March 2023</h2>
        <button class="text-lg font-medium">&gt;</button>
      </div>
      <div
        class="flex justify-between items-center py-2 px-4 bg-gray-100 text-gray-600"
      >
        <div class="w-1/7 font-medium text-sm text-center">Sun</div>
        <div class="w-1/7 font-medium text-sm text-center">Mon</div>
        <div class="w-1/7 font-medium text-sm text-center">Tue</div>
        <div class="w-1/7 font-medium text-sm text-center">Wed</div>
        <div class="w-1/7 font-medium text-sm text-center">Thu</div>
        <div class="w-1/7 font-medium text-sm text-center">Fri</div>
        <div class="w-1/7 font-medium text-sm text-center">Sat</div>
      </div>
      <div
        class="absolute top-0 bottom-0 left-0 right-0 transition-all duration-500"
      >
        <div class="h-full flex flex-col overflow-y-scroll">
          <div class="flex justify-between py-2 px-4 text-gray-600">
            <div class="font-medium text-lg">Week 1</div>
            <div class="flex items-center space-x-2">
              <button class="text-gray-400 hover:text-gray-600">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="chevron-down w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 14.586L3.707 8.293a1 1 0 011.414-1.414L10 11.757l4.879-4.88a1 1 0 111.414 1.414L10 14.586z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button class="text-gray-400 hover:text-gray-600">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="chevron-up w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5.414l6.293 6.293a1 1 0 01-1.414 1.414L10 8.243 5.121 13.122a1 1 0 01-1.414-1.414L10 5.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex justify-between py-2 px-4 border-b border-gray-200">
            <div class="text-sm font-medium text-gray-600">March 1, 2023</div>
            <div class="text-sm font-medium text-gray-600">March 7, 2023</div>
          </div>
          <div class="grid grid-cols-7 gap-2 py-2 px-4">
            <!-- Week 1 Days -->
          </div>
        </div>
        <div class="flex justify-between py-2 px-4 text-gray-600">
          <div class="font-medium text-lg">Week 2</div>
          <div class="flex items-center space-x-2">
            <button class="text-gray-400 hover:text-gray-600">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                class="chevron-down w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 14.586L3.707 8.293a1 1 0 011.414-1.414L10 11.757l4.879-4.88a1 1 0 111.414 1.414L10 14.586z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button class="text-gray-400 hover:text-gray-600">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                class="chevron-up w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5.414l6.293 6.293a1 1 0 01-1.414 1.414L10 8.243 5.121 13.122a1 1 0 01-1.414-1.414L10 5.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="flex justify-between py-2 px-4 border-b border-gray-200">
          <div class="text-sm font-medium text-gray-600">March 8, 2023</div>
          <div class="text-sm font-medium text-gray-600">March 14, 2023</div>
        </div>
        <div class="grid grid-cols-7 gap-2 py-2 px-4">
          <!-- Week 2 Days -->
        </div>
        <!-- More Weeks... -->
      </div>
    </div>
    <style>
              /* Buttons */
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }

      /* Chevron icons */
      .chevron-up, .chevron-down {
        transition: transform 0.3s ease-in-out;
      }

      .chevron-up:hover, .chevron-down:hover {
        transform: translateY(-3px);
      }

      /* Week view */
      .week-view {
        height: 500px;
      }

      .week-view > div {
        border-bottom: 1px solid #
    </style>
  `,
})
export class CalendarComponent {
  constructor() {}
}
