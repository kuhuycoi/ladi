import { Rect } from './rect';
import { WidgetComponent } from './widget-component';
export interface WidgetSection {
  'id': string;
  'cateId'?: any;
  // Phân loại template
  'src'?: string;
  // Ảnh đại diện template
  rect: Rect;
  'styles': {
    'background-image'?: string
  };
  'childrens'?: Array<WidgetComponent>;
}
