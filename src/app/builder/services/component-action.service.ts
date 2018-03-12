import { SectionActionService } from './section-action.service';
import { Injectable, Type, Inject, ElementRef } from '@angular/core';
import * as componentType from '../common/component-type';
import { WidgetComponent } from '../interfaces/widget-component';
import { WidgetSection } from '../interfaces/widget-section';
import { Offset } from '../interfaces/offset';
import { Rect } from '../interfaces/rect';
import { Dimension } from '../interfaces/dimension';

@Injectable()
export class ComponentActionService {
  public selectedRef: ElementRef;
  public lastestRef: ElementRef;
  constructor(@Inject(SectionActionService) private sectionActionService: SectionActionService) { }

  addComponent(type: any, sectionId: string): string {
    const component: WidgetComponent = Object.assign({}, componentType.COMPONENTS[type]);
    component.id = component.type + new Date().getTime().toString();
    const section: WidgetSection = this.sectionActionService.getSectionById(sectionId);
    if (section) {
      this.centerComponent(component);
      section.childrens.push(component);
      return component.id;
    }
    return null;
  }

  updateComponent(newComponent: WidgetComponent) {
    for (const key of Object.keys(this.sectionActionService.sections)) {
      if (this.sectionActionService.sections[key] != null) {
        const components = this.sectionActionService.sections[key].childrens.filter(component => component.id === newComponent.id);
        components[0] = newComponent;
      }
    }
  }

  checkComponentInsideSection(sectionId: string, componentId: string) {
    const section: WidgetSection = this.sectionActionService.getSectionById(sectionId);
    if (section != null && section.childrens) {
      return section.childrens.filter(component => component.id === componentId).length;
    }
    return false;
  }
  moveComponentToSection(componentId: string, sectionId: string) {
    let targetSection: WidgetSection;
    for (const key of Object.keys(this.sectionActionService.sections)) {
      const section: WidgetSection = this.sectionActionService.sections[key];
      if (section != null) {
        if (sectionId === section.id) {
          targetSection = section;
        }
        for (const key1 of Object.keys(section.childrens)) {
          const component: WidgetComponent = section.childrens[key1];
          if (component.id === componentId) {
            // const newComponent = Object.assign({}, component);
            if (!targetSection) {
              for (const key2 of Object.keys(this.sectionActionService.sections)) {
                if (sectionId === this.sectionActionService.sections[key2].id) {
                  targetSection = this.sectionActionService.sections[key2];
                  break;
                }
              }
            }
            targetSection.childrens.push(component);
            section.childrens.splice(parseInt(key1, 10), 1);
            return;
          }
        }
      }
    }
  }
  getComponentById(id: String): WidgetComponent {
    for (const key of Object.keys(this.sectionActionService.sections)) {
      if (this.sectionActionService.sections[key] != null) {
        for (const key1 of Object.keys(this.sectionActionService.sections[key].childrens)) {
          if (this.sectionActionService.sections[key].childrens[key1]['id'] === id) {
            return this.sectionActionService.sections[key].childrens[key1];
          }
        }
      }
    }
    return null;
  }
  updateComponentDimention(id: string, dimension: Dimension) {
    for (const key of Object.keys(this.sectionActionService.sections)) {
      const section: WidgetSection = this.sectionActionService.sections[key];
      if (section != null) {
        for (const key1 of Object.keys(section.childrens)) {
          const component: WidgetComponent = section.childrens[key1];
          if (component.id === id) {
            dimension.width = dimension.width || component.rect.dimension.width;
            dimension.height = dimension.height || component.rect.dimension.height;
            const rect: Rect = {
              'offset': component.rect.offset,
              'dimension': dimension
            };
            component.rect = rect;
            return;
          }
        }
      }
    }
  }
  updateComponentOffset(id: string, offset: Offset) {
    for (const key of Object.keys(this.sectionActionService.sections)) {
      const section: WidgetSection = this.sectionActionService.sections[key];
      if (section != null) {
        for (const key1 of Object.keys(section.childrens)) {
          const component: WidgetComponent = section.childrens[key1];
          if (component.id === id) {
            const rect: Rect = {
              'offset': offset,
              'dimension': component.rect.dimension
            };
            component.rect = rect;
          }
        }
      }
    }
  }
  updateComponentRect(id: string, rect: Rect) {
    for (const key of Object.keys(this.sectionActionService.sections)) {
      const section: WidgetSection = this.sectionActionService.sections[key];
      if (section != null) {
        for (const key1 of Object.keys(section.childrens)) {
          const component: WidgetComponent = section.childrens[key1];
          if (component.id === id) {
            component.rect = rect;
            return;
          }
        }
      }
    }
  }
  updateComponentContent(id: string, content: string) {
    for (const key of Object.keys(this.sectionActionService.sections)) {
      const section: WidgetSection = this.sectionActionService.sections[key];
      if (section != null) {
        for (const key1 of Object.keys(section.childrens)) {
          const component: WidgetComponent = section.childrens[key1];
          if (component.id === id) {
            component.content = content;
            return;
          }
        }
      }
    }
  }

  deleteComponentById(id: string) {
    this.sectionActionService.sections.forEach(section => {
      section.childrens.forEach((component, index) => {
        if (component.id === id) {
          section.childrens.splice(index, 1);
        }
      });
    });
  }

  cloneComponentByid(id: string) {
    for (const key of Object.keys(this.sectionActionService.sections)) {
      const section: WidgetSection = this.sectionActionService.sections[key];
      if (section != null) {
        for (const key1 of Object.keys(section.childrens)) {
          const component: WidgetComponent = section.childrens[key1];
          if (component.id === id) {
            const newComponent = Object.assign({}, component);
            newComponent.id = newComponent.type + new Date().getTime();
            newComponent.rect.offset.top = component.rect.offset.top + component.rect.dimension.height + 10;
            section.childrens.splice(parseInt(key, 10) + 1, 0, newComponent);
            return;
          }
        }
      }
    }
  }

  // cho component ra giữa section
  centerComponent(component: WidgetComponent) {
    const componentRect: Rect = component.rect;
    const centerSectionPosition: Offset = this.sectionActionService.getCenterSection(this.sectionActionService.mostVisible);
    const componentDimention: Dimension = componentRect.dimension;
    const componentOffset: Offset = componentRect.offset;
    componentOffset.left = centerSectionPosition.left - componentDimention.width / 2;
    componentOffset.top = centerSectionPosition.top - componentDimention.height / 2;
  }
}
