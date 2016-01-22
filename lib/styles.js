import _  from 'lodash';

// styles of all elements
let styles = {
  reactGridLayout :  {
    position: 'relative',
    transition: 'height 200ms ease'
  },
  reactGridItem: {
    transition: 'all 200ms ease',
    transitionProperty: 'left, top'
  },
  reactGridItemCssTransforms: { // should extend reactGridItem
    transitionProperty: 'transform'
  },
  reactGridItemResizing: { // should extend reactGridItem
    zIndex: 1
  },
  reactGridPlaceholder: {
    background: 'red',
    opacity: 0.2,
    transitionDuration: '100ms',
    zIndex: 2,
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    OUserSelect: 'none',
    userSelect: 'none'
  },
  reactGridItemReactDraggableDragging: { // should extend reactGridItem
    transition: 'none',
    zIndex: 3
  },
  reactResizable : {
    position: 'relative'
  },
  reactResizableHandleReactDraggable: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    bottom: 0,
    right: 0,
    background: 'url(\'data:image/svg+xml,base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=\')',
    backgroundPosition: 'bottom right',
    padding: '0 3px 3px 0',
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'content-box',
    boxSizing: 'border-box',
    cursor: 'se-resize',
    transform: 'none !important',
    WebkitTransform: 'none !important',
    msTransform: 'none !important',
    OTransform: 'none !important',
    MozTransform: 'none !important'
  }
};

// let's do the merging
_.defaults(styles.reactGridItemCssTransforms, styles.reactGridItem);
_.defaults(styles.reactGridItemResizing, styles.reactGridItemCssTransforms);
_.defaults(styles.reactGridItemReactDraggableDragging, styles.reactGridItemCssTransforms);

export default styles;