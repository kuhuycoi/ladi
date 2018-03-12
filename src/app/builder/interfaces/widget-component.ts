import { Rect } from './rect';
export interface WidgetComponent {
  'id': string;
  'type': string;
  'content'?: string;
  'rect': Rect;
  'contentStyle'?: {
    'font-family'?: string,
    'background-color'?: string,
    'background-image'?: string,
    'background-size'?: string,
    'background-repeat'?: string,
    'object-fit'?: string,
    'border-radius'?: string,
    'font-size'?: string,
    'line-height'?: string,
    'padding'?: string,
    'font-weight'?: any,
    'color'?: string,
    'text-align'?: string,
    'counter-reset'?: string,
    'border-width'?: string,
    'border-style'?: string,
    'border-color'?: string,
    'box-shadown'?: string
  };
  'ulData'?: {
    'type': string,
    'iconType'?: string,
    'imageUrl'?: string,
    // 'liItems'?: Array<{
    //   'text'?: string
    // }>
  };
}
