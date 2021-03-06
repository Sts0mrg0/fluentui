import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const BreakoutRoomIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M2.432,2.257A1.555,1.555,0,0,1,3.719.754L3.794.742,9.081.015a1.632,1.632,0,0,1,1.263.359,1.5,1.5,0,0,1,.547,1.155V14.471a1.505,1.505,0,0,1-.547,1.155A1.619,1.619,0,0,1,9.305,16a1.686,1.686,0,0,1-.224-.015l-5.287-.728a1.555,1.555,0,0,1-1.362-1.514ZM12.49.88a1.558,1.558,0,0,1,1.576,1.452l0,.074V13.594a1.551,1.551,0,0,1-1.5,1.524l-.076,0h-.527V14.1h.527a.521.521,0,0,0,.523-.46l0-.049V2.406A.518.518,0,0,0,12.54,1.9l-.05,0h-.527V.88Zm-3.258.144-5.295.728a.52.52,0,0,0-.454.505V7.621h0v5.76h0v.364a.52.52,0,0,0,.454.5l5.3.727a.527.527,0,0,0,.422-.119.5.5,0,0,0,.183-.385V1.529a.494.494,0,0,0-.183-.385A.527.527,0,0,0,9.232,1.024ZM8.25,6.88a.64.64,0,1,1-.635.64A.638.638,0,0,1,8.25,6.88Z"
      />

      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M14.066,2.332A1.558,1.558,0,0,0,12.49.88h-.527V1.9h.527l.05,0a.518.518,0,0,1,.476.507V13.594l0,.049a.521.521,0,0,1-.523.46h-.527V15.12h.527l.076,0a1.551,1.551,0,0,0,1.5-1.524V2.406Z" />
        <path d="M10.344.374A1.632,1.632,0,0,0,9.081.015L3.794.742,3.719.754a1.555,1.555,0,0,0-1.287,1.5V13.743a1.556,1.556,0,0,0,1.362,1.514l5.287.728A1.686,1.686,0,0,0,9.305,16a1.619,1.619,0,0,0,1.039-.374,1.505,1.505,0,0,0,.547-1.155V1.529A1.5,1.5,0,0,0,10.344.374ZM8.25,8.16a.64.64,0,1,1,.635-.64A.638.638,0,0,1,8.25,8.16Z" />
      </g>
    </svg>
  ),
  displayName: 'BreakoutRoomIcon',
});
