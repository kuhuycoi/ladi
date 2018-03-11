import { Offset } from '../interfaces/offset';
import { Dimension } from '../interfaces/dimension';
import * as componentType from '../common/component-type';
declare var $: any;
export class ComponentUI {
  private $elm;
  private diverX: HTMLElement;
  private diverY: HTMLElement;
  private editContent;
  private drag;
  private dragPosition;
  private resize;
  private resizePosition;
  public onDragStop;
  public onResizeStop;
  public resizeDirection: Array<any>;
  private componentType = componentType;
  public autoHide = false;
  constructor($elm) {
    this.$elm = $elm;
    this.diverX = document.getElementById('diver-line-x');
    this.diverY = document.getElementById('diver-line-y');
    this.editContent = document.getElementById('edit-content');
  }
  disableDrag() {
    this.$elm.draggable('disable');
  }
  enableDrag() {
    this.$elm.draggable('enable');
  }
  disableResize() {
    this.$elm.resizable('disable');
  }
  enableResize() {
    this.$elm.resizable('enable');
  }
  changeDragOption(option, value) {
    this.$elm.draggable('option', option, value);
  }
  private getOffset(elem) {
    const offset: Offset = { top: 0, left: 0 };
    do {
      if (!isNaN(elem.offsetLeft)) {
        offset.left += elem.offsetLeft;
      }
      if (!isNaN(elem.offsetTop)) {
        offset.top += elem.offsetTop;
      }
    } while (elem = elem.offsetParent);
    return offset;
  }
  initDrag() {
    const $this = this;
    const editContentOffset = $this.getOffset($this.editContent);
    const $drag = $this.drag = $this.$elm.draggable({
      snap: '.ui-snap',
      snapTolerance: 10,
      drag: function (event, ui) {
        $this.diverX.removeAttribute('style');
        $this.diverY.removeAttribute('style');
        const snapped = $drag.data('ui-draggable').snapElements;
        $.each(snapped, function (i, $snap) {
          const snapOffset: Offset = { top: $snap.top, left: $snap.left };
          const snapDimension: Dimension = { width: $snap.width, height: $snap.height };
          const offset = ui.offset;
          const dimension = { height: ui.helper[0].offsetHeight, width: ui.helper[0].offsetWidth };
          if (offset.left === snapOffset.left || offset.left === snapOffset.left + snapDimension.width
            || offset.left + dimension.width === snapOffset.left + snapDimension.width
            || offset.left + dimension.width === snapOffset.left) {
            if (offset.left === snapOffset.left || offset.left === snapOffset.left + snapDimension.width) {
              $this.diverY.style.left = offset.left - 1 + 'px';
            } else {
              $this.diverY.style.left = offset.left + dimension.width + 'px';
            }
            $this.diverY.style.display = 'block';
          }
          if (offset.top === snapOffset.top || offset.top === snapOffset.top + snapDimension.height
            || offset.top + dimension.height === snapOffset.top + snapDimension.height
            || offset.top + dimension.height === snapOffset.top) {
            if (offset.top === snapOffset.top || snapOffset.top + snapDimension.height === offset.top) {
              $this.diverX.style.top = offset.top - editContentOffset.top + 'px';
            } else {
              $this.diverX.style.top = offset.top + dimension.height - editContentOffset.top + 'px';
            }
            $this.diverX.style.display = 'block';
          }
        });
      },
      stop: function (event, ui) {
        $this.diverX.removeAttribute('style');
        $this.diverY.removeAttribute('style');
        const position = ui.position;
        if (typeof $this.onDragStop === 'function') {
          $this.onDragStop(ui.position, ui.offset);
        }
        $this.initDrag();
      }
    });
  }
  private getResizeDirection() {
    let directionStr = '';
    this.resizeDirection.forEach((dir, index) => {
      directionStr += index ? ',' + dir : dir;
    });
    return directionStr;
  }
  initResize() {
    const $this = this;
    const editContentOffset = $this.getOffset($this.editContent);
    const $resize = $this.resize = $this.$elm.resizable({
      snap: '.ui-snap',
      snapTolerance: 10,
      handles: $this.getResizeDirection(),
      autoHide: $this.autoHide,
      start: function (event, ui) {
      },
      resize: function (event, ui) {
        $this.diverX.removeAttribute('style');
        $this.diverY.removeAttribute('style');
        const offset: Offset = ui.position;
        const originalSize: Dimension = ui.originalSize;
        const dimension = { height: ui.helper[0].offsetHeight, width: ui.helper[0].offsetWidth };
        const offsetUpTop: Offset = $this.getOffset(ui.helper[0]);
        if (ui.originalSize.width !== ui.size.width && ui.originalSize.height === ui.size.height) {
          ($this.$elm[0].querySelector('.widget-content') as HTMLElement).style.minHeight = ui.originalSize.height + 'px';
          ($this.$elm[0] as HTMLElement).style.removeProperty('height');
        }
        const snapCoords = $resize.data('ui-resizable').coords;
        $.each(snapCoords, function (i, coord) {
          if (offset.left === coord.l || offset.left === coord.r) {
            $this.diverY.style.left = offsetUpTop.left + 'px';
            if (dimension.width !== originalSize.width) {
              $this.diverY.style.display = 'block';
            }
          } else if (offset.left + dimension.width === coord.l || offset.left + dimension.width === coord.r) {
            $this.diverY.style.left = offsetUpTop.left + dimension.width + 'px';
            if (dimension.width !== originalSize.width) {
              $this.diverY.style.display = 'block';
            }
          }
          if (offset.top === coord.t || offset.top === coord.b) {
            $this.diverX.style.top = offsetUpTop.top - editContentOffset.top + 'px';
            if (dimension.height !== originalSize.height) {
              $this.diverX.style.display = 'block';
            }
          } else if (offset.top + dimension.height === coord.t || offset.top + dimension.width === coord.b) {
            $this.diverX.style.top = offsetUpTop.top + dimension.height - editContentOffset.top + 'px';
            if (dimension.height !== originalSize.height) {
              $this.diverX.style.display = 'block';
            }
          }
        });
      },
      stop: function (event, ui) {
        $this.diverX.removeAttribute('style');
        $this.diverY.removeAttribute('style');
        if (ui.originalSize.width !== ui.size.width) {
          ($this.$elm[0] as HTMLElement).style.height = ($this.$elm[0] as HTMLElement).offsetHeight + 'px';
          ($this.$elm[0].querySelector('.widget-content') as HTMLElement).style.removeProperty('min-height');
        }
        if (typeof $this.onResizeStop === 'function') {
          $this.onResizeStop(ui.size);
        }
      }
    });
  }
}
