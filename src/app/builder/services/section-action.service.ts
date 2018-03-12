import { Injectable, Input, ViewContainerRef, ElementRef, ViewChild, Component } from '@angular/core';
import * as componentType from '../common/component-type';
import { Offset } from '../interfaces/offset';
import { WidgetComponent } from '../interfaces/widget-component';
import { WidgetSection } from '../interfaces/widget-section';
import { H3, BOX } from '../common/component-type';

@Injectable()
export class SectionActionService {
  public sectionElementRefs = [];
  public movedComponent = false;
  public sections: Array<WidgetSection> = [
    {
      'id': 'SECTION2',
      'rect': {
        'dimension': {
          'height': 707
        }
      },
      'styles': {
        'background-image': `-webkit-linear-gradient(top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
        url("https://static.ladipage.net/uploads/images/ee98bf8c-35b9-4b58-b2ee-2d8c10ae9eee.jpg")`,
      },
      'childrens': [
        {
          'id': 'HEADLINE12',
          'type': componentType.H1,
          'content': `Giảm giá Ưu đãi mua sắm.\nLên tới 45% sản phẩm`,
          'rect': {
            'dimension': {
              'width': 488
            },
            'offset': {
              'top': 173,
              'left': 0
            }
          },
          'contentStyle': {
            'font-family': '\'Open Sans\',sans-serif,open-sans',
            'font-size': '36px',
            'color': 'rgb(36, 36, 36)',
            'font-weight': '700',
            'line-height': '44px'
          }
        },
        {
          'id': 'BOX13',
          'type': componentType.BOX,
          'rect': {
            'dimension': {
              'width': 390,
              'height': 278
            },
            'offset': {
              'top': 194,
              'left': 570
            }
          },
          'contentStyle': {
            'background-color': 'rgba(191, 0, 0, 0.82)',
            'box-shadown': 'rgba(36, 36, 36, 0.19) 0px 10px 13px',
            'color': 'rgb(36, 36, 36)',
            'border-radius': 'border-radius: 7px;'
          }
        },
        {
          'id': 'LIST16',
          'type': componentType.UL,
          'rect': {
            'dimension': {
              'width': 450,
              'height': 113
            },
            'offset': {
              'top': 345,
              'left': 0
            }
          },
          'content': `<li>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</li>
          <li>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</li>`,
          'contentStyle': {
            'color': 'rgb(0, 0, 0)',
            'line-height': '24px',
            'font-weight': '700'
          },
          'ulData': {
            'type': 'list',
            'iconType': componentType.LI_TYPE['decimal']
          }
        }
      ]
    },
    {
      'id': 'SECTION1',
      'rect': {
        'dimension': {
          'height': 595
        }
      },
      'styles': {
        'background-image': 'url("https://static.ladipage.net/57b167c9ca57d39c18a1c57c/bg-ba-bau.jpg")'
      },
      'childrens': [
        {
          'id': 'HEADING10',
          'type': componentType.H1,
          'content': `Chăm sóc<br/>Sức khỏe bà bầu<br/>chu đáo nhất`,
          'rect': {
            'dimension': {
              'width': 432,
              'height': 174
            },
            'offset': {
              'top': 173,
              'left': 528
            }
          },
          'contentStyle': {
            'font-size': '52px',
            'color': 'rgb(255, 255, 255)',
            'font-weight': '400',
            'line-height': '58px'
          }
        }, {
          'id': 'HEADLINE4',
          'type': componentType.H3,
          'content': `We offer you the most of what can be offered!`,
          'rect': {
            'dimension': {
              'width': 366,
              'height': 60
            },
            'offset': {
              'top': 367,
              'left': 527
            }
          },
          'contentStyle': {
            'font-size': '24px',
            'color': 'rgb(255, 255, 255)',
            'font-weight': '400',
            'line-height': '30px'
          }
        },
        {
          'id': 'BUTTON100',
          'type': componentType.BUTTON,
          'content': 'START FREE NOW',
          'rect': {
            'dimension': {
              'width': 204,
              'height': 57
            },
            'offset': {
              'top': 458,
              'left': 527,
            }
          },
          'contentStyle': {
            'background-color': 'rgb(245, 176, 160)',
            'border-radius': '25px',
            'font-size': '15px',
            'color': 'rgb(255, 255, 255)',
            'text-align': 'center',
            'font-weight': '600'
          }
        }
      ]
    }
  ];
  public sectionTemplates: Array<WidgetSection> = [
    {
      'id': 'SECTION2',
      'rect': {
        'dimension': {
          'height': 707
        }
      },
      'cateId': 1,
      'src': 'https://static.ladipage.net/s200x200/57b167c9ca57d39c18a1c57c/untitled-1-117541.jpg',
      'styles': {
        'background-image': `-webkit-linear-gradient(top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
        url("https://static.ladipage.net/uploads/images/ee98bf8c-35b9-4b58-b2ee-2d8c10ae9eee.jpg")`,
      },
      'childrens': [
        {
          'id': 'HEADLINE12',
          'type': componentType.H1,
          'content': `Giảm giá Ưu đãi mua sắm.\nLên tới 45% sản phẩm`,
          'rect': {
            'dimension': {
              'width': 488
            },
            'offset': {
              'top': 173,
              'left': 0
            }
          },
          'contentStyle': {
            'font-size': '36px',
            'color': 'rgb(36, 36, 36)',
            'font-weight': '700',
            'line-height': '44px'
          }
        },
        {
          'id': 'BOX13',
          'type': componentType.BOX,
          'rect': {
            'dimension': {
              'width': 390,
              'height': 278
            },
            'offset': {
              'top': 194,
              'left': 570
            }
          },
          'contentStyle': {
            'background-color': 'rgba(191, 0, 0, 0.82)',
            'box-shadown': 'rgba(36, 36, 36, 0.19) 0px 10px 13px',
            'color': 'rgb(36, 36, 36)',
            'border-radius': 'border-radius: 7px;'
          }
        },
        {
          'id': 'LIST16',
          'type': componentType.UL,
          'rect': {
            'dimension': {
              'width': 450,
              'height': 113
            },
            'offset': {
              'top': 345,
              'left': 0
            }
          },
          'content': `<li>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</li>
          <li>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</li>`,
          'contentStyle': {
            'color': 'rgb(0, 0, 0)',
            'line-height': '24px',
            'font-weight': '700'
          },
          'ulData': {
            'type': 'list',
            'iconType': componentType.LI_TYPE['decimal']
          }
        }
      ]
    },
    {
      'id': 'SECTION1',
      'rect': {
        'dimension': {
          'height': 595
        }
      },
      'cateId': 2,
      'src': 'https://static.ladipage.net/s200x200/57b167c9ca57d39c18a1c57c/untitled-1-806677.jpg',
      'styles': {
        'background-image': 'url("https://static.ladipage.net/57b167c9ca57d39c18a1c57c/bg-ba-bau.jpg")'
      },
      'childrens': [
        {
          'id': 'HEADING10',
          'type': componentType.H1,
          'content': `Chăm sóc<br/>Sức khỏe bà bầu<br/>chu đáo nhất`,
          'rect': {
            'dimension': {
              'width': 432,
              'height': 174
            },
            'offset': {
              'top': 173,
              'left': 528
            }
          },
          'contentStyle': {
            'font-size': '52px',
            'color': 'rgb(255, 255, 255)',
            'font-weight': '400',
            'line-height': '58px'
          }
        }, {
          'id': 'HEADLINE4',
          'type': componentType.H3,
          'content': `We offer you the most of what can be offered!`,
          'rect': {
            'dimension': {
              'width': 366,
              'height': 60
            },
            'offset': {
              'top': 367,
              'left': 527
            }
          },
          'contentStyle': {
            'font-size': '24px',
            'color': 'rgb(255, 255, 255)',
            'font-weight': '400',
            'line-height': '30px'
          }
        },
        {
          'id': 'BUTTON100',
          'type': componentType.BUTTON,
          'content': 'START FREE NOW',
          'rect': {
            'dimension': {
              'width': 204,
              'height': 57
            },
            'offset': {
              'top': 458,
              'left': 527,
            }
          },
          'contentStyle': {
            'background-color': 'rgb(245, 176, 160)',
            'border-radius': '25px',
            'font-size': '15px',
            'color': 'rgb(255, 255, 255)',
            'text-align': 'center',
            'font-weight': '600'
          }
        }
      ]
    }
  ];
  constructor() {
  }
  get mostVisible(): ElementRef {
    let mostVisibleSection: ElementRef, max = 0;
    const viewportHeight = window.innerHeight;
    this.sectionElementRefs.forEach(sectionRef => {
      let visiblePx = 0, absTop;
      const rect = sectionRef.nativeElement.getBoundingClientRect(),
        height = rect.height, visible = {
          top: rect.top >= 0 && rect.top < viewportHeight,
          bottom: rect.bottom > 0 && rect.bottom < viewportHeight
        };
      if (visible.top && visible.bottom) {
        // Whole element is visible
        visiblePx = height;
      } else if (visible.top) {
        visiblePx = viewportHeight - rect.top;
      } else if (visible.bottom) {
        visiblePx = rect.bottom;
      } else if (height > viewportHeight && rect.top < 0) {
        absTop = Math.abs(rect.top);
        if (absTop < height) {
          // Part of the element is visible
          visiblePx = height - absTop;
        }
      }
      if (visiblePx > max) {
        max = visiblePx;
        mostVisibleSection = sectionRef;
      }
    });
    return mostVisibleSection;
  }

  getCenterSection(sectionRef: ElementRef): Offset {
    const position: Offset = { 'top': 0, 'left': 0 };
    const nativeElement: Element = sectionRef.nativeElement;
    if (nativeElement.getElementsByClassName('widget-container')) {
      const containers = nativeElement.getElementsByClassName('widget-container') as HTMLCollectionOf<HTMLElement>;
      const container = containers[0];
      let visiblePx = 0, absTop = 0;
      const viewportHeight = window.innerHeight;
      const rect = sectionRef.nativeElement.getBoundingClientRect(),
        height = rect.height, visible = {
          top: rect.top >= 0 && rect.top < viewportHeight,
          bottom: rect.bottom > 0 && rect.bottom < viewportHeight
        };
      if (visible.top && visible.bottom) {
        // Whole element is visible
        visiblePx = height;
      } else if (visible.top) {
        visiblePx = viewportHeight - rect.top;
      } else if (visible.bottom) {
        visiblePx = rect.bottom;
      } else if (height > viewportHeight && rect.top < 0) {
        absTop = Math.abs(rect.top);
        if (absTop < height) {
          // Part of the element is visible
          visiblePx = height - absTop;
        }
      }
      position.left = containers[0].offsetWidth / 2;
      position.top = visiblePx / 2;
      return position;
    }
  }

  getSectionById(sectionId: string): WidgetSection {
    const sections: Array<WidgetSection> = this.sections.filter(element => element.id === sectionId);
    return sections ? sections[0] : null;
  }

  addSection(id: string, newSection: WidgetSection) {
    for (const key of Object.keys(this.sections)) {
      const section: WidgetSection = this.sections[key];
      if (section != null && section.id === id) {
        newSection.id = 'SECTION' + new Date().getTime();
        this.sections.splice(parseInt(key, 10) + 1, 0, newSection);
        return;
      }
    }
  }

  cloneSectionByid(id: string) {
    for (const key of Object.keys(this.sections)) {
      const section: WidgetSection = this.sections[key];
      if (section != null && section.id === id) {
        const newSection = Object.assign({}, section);
        newSection.id = 'SECTION' + new Date().getTime();
        this.sections.splice(parseInt(key, 10), 0, newSection);
        return;
      }
    }
  }

  moveSectionByid(section: WidgetSection, direction: number) {
    const index = this.sections.indexOf(section);
    if ((index === 0 && direction === -1) || (index === this.sections.length - 1 && direction === 1)) {
      return;
    }
    const newIndex = index + direction;
    const indexes = [index, newIndex].sort();
    this.sections.splice(indexes[0], 2, this.sections[indexes[1]], this.sections[indexes[0]]);
  }
  deleteSection(section: WidgetSection) {
    const index = this.sections.indexOf(section);
    if (typeof index !== 'undefined') {
      this.sections.splice(index, 1);
    }
  }
}
