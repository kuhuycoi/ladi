import { Rect } from './rect';
import { WidgetComponent } from './widget-component';
export interface WidgetSection {
  'id': string;
  rect: Rect;
  'styles': {
    'background-image'?: string
  };
  'childrens'?: Array<WidgetComponent>;
}
