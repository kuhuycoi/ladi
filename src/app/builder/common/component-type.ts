import { WidgetComponent } from '../interfaces/widget-component';

export const IMG = 'IMG';
export const BUTTON = 'BUTTON';
export const H1 = 'H1';
export const H2 = 'H2';
export const H3 = 'H3';
export const H4 = 'H4';
export const H5 = 'H5';
export const H6 = 'H6';
export const P = 'P';
export const UL = 'UL';
export const BOX = 'BOX';
export const HLINE = 'HLINE';
export const VLINE = 'VLINE';
export const ICON = 'ICON';
export const FORM = 'FORM';
// TODO
export const N_RESIZE = 'n';
export const W_RESIZE = 'w';
export const E_RESIZE = 'e';
export const S_RESIZE = 's';
export const NW_RESIZE = 'nw';
export const NE_RESIZE = 'ne';
export const SE_RESIZE = 'se';
export const SW_RESIZE = 'sw';

export const LI_TYPE = {
  'decimal': 'decimal',
  'uperAlpha': 'upper-alpha',
  'lowerAlpha': 'lower-alpha',
  'upperRoman': 'upper-roman',
  'lowerRoman': 'lower-roman',
  'square': 'square',
  'disc': 'disc',
};

export const XY_RESIZE: Array<string> = [N_RESIZE, W_RESIZE, S_RESIZE, E_RESIZE, SE_RESIZE, SW_RESIZE, NW_RESIZE, NE_RESIZE];
export const X_RESIZE: Array<string> = [W_RESIZE, E_RESIZE];
export const Y_RESIZE: Array<string> = [N_RESIZE, S_RESIZE];
export const RESIZE_DIRECTIONS = {
  BUTTON: XY_RESIZE,
  H1: X_RESIZE,
  H2: X_RESIZE,
  H3: X_RESIZE,
  H4: X_RESIZE,
  H5: X_RESIZE,
  H6: X_RESIZE,
  P: X_RESIZE,
  BOX: XY_RESIZE,
  HLINE: X_RESIZE,
  VLINE: Y_RESIZE,
};

export const IMG_COMPONENT: WidgetComponent = {
  'id': IMG + new Date().getTime().toString(),
  'type': IMG,
  'content': 'CLICK NOW',
  'rect': {
    'dimension': {
      'width': 160,
      'height': 40
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'contentStyle': {
    'background-color': 'rgb(61, 155, 233)',
    'border-radius': '5px',
    'font-size': '14px',
    'color': 'rgb(255, 255, 255)',
    'text-align': 'center'
  }
};
export const BUTTON_COMPONENT: WidgetComponent = {
  'id': BUTTON + new Date().getTime().toString(),
  'type': BUTTON,
  'content': 'CLICK NOW',
  'rect': {
    'dimension': {
      'width': 160,
      'height': 40
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'contentStyle': {
    'background-color': 'rgb(61, 155, 233)',
    'border-radius': '5px',
    'font-size': '14px',
    'line-height': '18px',
    'padding': '11px',
    'color': 'rgb(255, 255, 255)',
    'text-align': 'center'
  }
};
export const H1_COMPONENT: WidgetComponent = {
  'id': H1 + new Date().getTime().toString(),
  'type': H1,
  'content': 'Tiêu đề H1',
  'rect': {
    'dimension': {
      'width': 173,
      'height': 42
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'contentStyle': {
    'border-radius': '5px',
    'font-size': '36px',
    'line-height': '42px',
    'font-weight': 400,
    'color': 'rgb(0, 0, 0)'
  }
};
export const H2_COMPONENT: WidgetComponent = {
  'id': H2 + new Date().getTime().toString(),
  'type': H2,
  'content': 'Tiêu đề H2',
  'rect': {
    'dimension': {
      'width': 145,
      'height': 36
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'contentStyle': {
    'border-radius': '5px',
    'font-size': '30px',
    'line-height': '36px',
    'font-weight': 400,
    'color': 'rgb(0, 0, 0)'
  }
};

export const H3_COMPONENT: WidgetComponent = {
  'id': H3 + new Date().getTime().toString(),
  'type': H3,
  'content': 'Tiêu đề H3',
  'rect': {
    'dimension': {
      'width': 116,
      'height': 30
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'contentStyle': {
    'border-radius': '5px',
    'font-size': '24px',
    'line-height': '30px',
    'font-weight': 400,
    'color': 'rgb(0, 0, 0)'
  }
};

export const H4_COMPONENT: WidgetComponent = {
  'id': H4 + new Date().getTime().toString(),
  'type': H4,
  'content': 'Tiêu đề H4',
  'rect': {
    'dimension': {
      'width': 116,
      'height': 27
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'contentStyle': {
    'border-radius': '5px',
    'font-size': '21px',
    'line-height': '27px',
    'font-weight': 400,
    'color': 'rgb(0, 0, 0)'
  }
};

export const H5_COMPONENT: WidgetComponent = {
  'id': H5 + new Date().getTime().toString(),
  'type': H5,
  'content': 'Tiêu đề H5',
  'rect': {
    'dimension': {
      'width': 87,
      'height': 24
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'contentStyle': {
    'border-radius': '5px',
    'font-size': '18px',
    'line-height': '24px',
    'font-weight': 400,
    'color': 'rgb(0, 0, 0)'
  }
};
export const H6_COMPONENT: WidgetComponent = {
  'id': H6 + new Date().getTime().toString(),
  'type': H6,
  'content': 'Tiêu đề H6',
  'rect': {
    'dimension': {
      'width': 78,
      'height': 22
    },
    'offset': {
      'top': 0,
      'left': 0
    }
  },
  'contentStyle': {
    'border-radius': '5px',
    'font-size': '16px',
    'line-height': '22px',
    'font-weight': 400,
    'color': 'rgb(0, 0, 0)'
  }
};

export const P_COMPONENT: WidgetComponent = {
  'id': P + new Date().getTime().toString(),
  'type': P,
  'content': `Trong các chiến dịch quảng cáo phục vụ marketing,
  Landing Page là một trang web đơn độc lập khác với website chính của bạn,
  với nội dung được thiết kế để phục vụ một mục tiêu duy nhất!`,
  'rect': {
    'dimension': {
      'width': 223,
      'height': 114
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'contentStyle': {
    'border-radius': '5px',
    'font-size': '14px',
    'line-height': '19px',
    'font-weight': 400,
    'color': 'rgb(0, 0, 0)'
  }
};
export const UL_COMPONENT: WidgetComponent = {
  'id': UL + new Date().getTime().toString(),
  'type': UL,
  'rect': {
    'dimension': {
      'width': 200,
      'height': 160
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'content': `
  <li>This is list</li>
  <li>This is list</li>
  <li>This is list</li>
  <li>This is list</li>
  `,
  'contentStyle': {
    'counter-reset': 'linum',
    'font-size': '14px',
    'line-height': '20px',
    'color': 'rgb(0,0,0)'
  },
  'ulData': {
    'type': 'list',
    'iconType': LI_TYPE['decimal']
  }
};
export const BOX_COMPONENT: WidgetComponent = {
  'id': BOX + new Date().getTime().toString(),
  'type': BOX,
  'rect': {
    'dimension': {
      'width': 270,
      'height': 270
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'contentStyle': {
    'background-color': 'rgb(189, 189, 189)',
    'background-repeat': 'no-repeat',
    'object-fit': 'cover'
  },
};
export const HLINE_COMPONENT: WidgetComponent = {
  'id': HLINE + new Date().getTime().toString(),
  'type': HLINE,
  'rect': {
    'dimension': {
      'width': 400,
      'height': 25
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'contentStyle': {
    'border-width': '1px 0px 0px',
    'border-style': 'solid',
    'border-color': 'rgb(0, 0, 0)'
  },
};

export const VLINE_COMPONENT: WidgetComponent = {
  'id': VLINE + new Date().getTime().toString(),
  'type': VLINE,
  'rect': {
    'dimension': {
      'width': 25,
      'height': 150
    },
    'offset': {
      'top': 0,
      'left': 0,
    }
  },
  'contentStyle': {
    'border-width': '0px 0px 0px 1px',
    'border-style': 'solid',
    'border-color': 'rgb(0, 0, 0)'
  },
};
export const COMPONENTS = {
  BUTTON: BUTTON_COMPONENT,
  H1: H1_COMPONENT,
  H2: H2_COMPONENT,
  H3: H3_COMPONENT,
  H4: H4_COMPONENT,
  H5: H5_COMPONENT,
  H6: H6_COMPONENT,
  P: P_COMPONENT,
  UL: UL_COMPONENT,
  BOX: BOX_COMPONENT,
  HLINE: HLINE_COMPONENT,
  VLINE: VLINE_COMPONENT
};
