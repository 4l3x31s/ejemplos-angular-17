import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
  <h1 class="text-3xl mb-5">{{titulo}} - {{withShadow}}</h1>
  `
})
export class TitleComponent {
  @Input({required: true}) titulo!: string;
  @Input({transform: booleanAttribute}) withShadow: boolean = false;

}
