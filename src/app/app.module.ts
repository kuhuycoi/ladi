import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Module
import { MatMenuModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSlideToggleModule } from '@angular/material';
const MATERIAL_MODULE = [MatMenuModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSlideToggleModule];
// Material Module

// Layout Component
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { MenuComponent } from './builder/components/layout/menu/menu.component';
import { ToolbarComponent } from './builder/components/layout/toolbar/toolbar.component';
import { SettingbarComponent } from './builder/components/layout/settingbar/settingbar.component';
const LAYOUT_COMPONENT = [AppComponent, BuilderComponent, MenuComponent, ToolbarComponent, SettingbarComponent];
// Layout component

// EDIT AREA
import { ButtonComponent } from './builder/components/edit-area/component-tool/button.component';
import { H1Component } from './builder/components/edit-area/component-tool/h1.component';
import { H2Component } from './builder/components/edit-area/component-tool/h2.component';
import { H3Component } from './builder/components/edit-area/component-tool/h3.component';
import { ParagraphComponent } from './builder/components/edit-area/component-tool/paragraph.component';
import { ListULComponent } from './builder/components/edit-area/component-tool/list-ul.component';
import { ModalIconComponent } from './builder/components/edit-area/modal-icon/modal-icon.component';
import { ModalImageComponent } from './builder/components/edit-area/modal-image/modal-image.component';
import { WidgetElementComponent } from './builder/components/edit-area/widget-element/widget-element.component';
import { WidgetSectionComponent } from './builder/components/edit-area/widget-section/widget-section.component';
import { WidgetHRulerComponent } from './builder/components/edit-area/widget-hruler/widget-hruler.component';
import { WidgetVRulerComponent } from './builder/components/edit-area/widget-vruler/widget-vruler.component';
import { EditContentComponent } from './builder/components/edit-area/edit-content/edit-content.component';
import { WidgetEditHandleComponent } from './builder/components/edit-area/widget-edit-handle/widget-edit-handle.component';
const EDIT_AREA = [
  ButtonComponent, H1Component, H2Component, H3Component, ParagraphComponent, ListULComponent, ModalIconComponent,
  WidgetEditHandleComponent, ModalImageComponent, WidgetElementComponent, WidgetSectionComponent, WidgetHRulerComponent,
  WidgetVRulerComponent, EditContentComponent
];
// EDIT AREA

// DIRECTIVES
import { AddComponentDirective } from './builder/directives/add-component.directive';
import { OpenModalDirective } from './builder/directives/open-modal.directive';
const DIRECTIVES = [AddComponentDirective, OpenModalDirective];
// DIRECTIVES

// PIPES
import { JoinStylePipe } from './builder/pipes/join-style.pipe';
import { ConvertRectPipe } from './builder/pipes/convert-rect.pipe';
const PIPES = [ConvertRectPipe, JoinStylePipe];
// PIPES

// PROVIDERS
import { UploadFileService } from './builder/services/upload-file.service';
import { ModalActionService } from './builder/services/modal-action.service';
import { ComponentActionService } from './builder/services/component-action.service';
import { SectionActionService } from './builder/services/section-action.service';
const PROVIDERS = [SectionActionService, ComponentActionService, ModalActionService, UploadFileService];
// PROVIDERS

@NgModule({
  declarations: [
    LAYOUT_COMPONENT, EDIT_AREA, DIRECTIVES, PIPES
  ],
  imports: [
    BrowserModule, MATERIAL_MODULE, BrowserAnimationsModule
  ],
  providers: PROVIDERS,
  bootstrap: [AppComponent]
})
export class AppModule { }
