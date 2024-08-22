import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeWrapperComponent, WebComponentWrapperOptions } from '@module-federation-lab/mfe-wrapper';
@Component({
  selector: 'app-horizontal-split',
  standalone: true,
  imports: [CommonModule, MfeWrapperComponent],
  templateUrl: './horizontal-split.component.html',
  styleUrl: './horizontal-split.component.scss',
})
export class HorizontalSplitComponent {

  mfeCard = {
    type: 'module',
    remoteEntry: 'http://localhost:4204/remoteEntry.js',
    remoteName: 'mfe-card',
    exposedModule: './web-components',
    elementName: 'mfe-card'
  } as WebComponentWrapperOptions;

  mfeHeader = {
    type: 'module',
    remoteEntry: 'http://localhost:4205/remoteEntry.js',
    remoteName: 'mfe-header',
    exposedModule: './web-components',
    elementName: 'mfe-header'
  } as WebComponentWrapperOptions;


  mfeFooter = {
    type: 'module',
    remoteEntry: 'http://localhost:4206/remoteEntry.js',
    remoteName: 'mfe-footer',
    exposedModule: './web-components',
    elementName: 'mfe-footer'
  } as WebComponentWrapperOptions;

}
