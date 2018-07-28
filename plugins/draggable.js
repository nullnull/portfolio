// mixin plugin to controll drag event on your vue component.
//
// How to use
// 1. Import this plugin as mixin. ex. `mixins: [draggable]`
// 2. Write following to your html.
// <div @touchstart="startTouch($event)" @touchmove.prevent="onTouch($event)" @touchend="stopDrag($event)" @mousedown="startDrag($event)" @mousemove.prevent="onDrag($event)" @mouseup="stopDrag($event)">
// 3. Implement `eventWhenScrolled**` to methods on your components, or use variables on data as you like.

class Direction {
  constructor(direction) {
    this.direction = direction;
  }

  get isHorizontal() {
    return this.direction === 'horizontal';
  }

  get isVertical() {
    return this.direction === 'vertical';
  }
}

const VERTICAL = new Direction('vertical');
const HORIZONTAL = new Direction('horizontal');

export default {
  computed: {
    dragLengthX() {
      if (this.dragStartX === null || this.draggingX === null) {
        return 0;
      }
      return this.draggingX - this.dragStartX;
    },
    dragLengthY() {
      if (this.dragStartY === null || this.draggingY === null) {
        return 0;
      }
      return this.draggingY - this.dragStartY;
    },
  },
  data() {
    return {
      draggingX: null,
      draggingY: null,
      dragStartX: null,
      dragStartY: null,
      initialDragDirection: null,
    };
  },
  methods: {
    onDrag(e) {
      this.draggingX = e.pageX;
      this.draggingY = e.pageY;
      if (!this.initialDragDirection && Math.abs(this.dragLengthX) > 10) {
        this.initialDragDirection = HORIZONTAL;
      } else if (!this.initialDragDirection && Math.abs(this.dragLengthY) > 10) {
        this.initialDragDirection = VERTICAL;
      }
    },
    onTouch(e) {
      this.draggingX = e.changedTouches[0].pageX;
      this.draggingY = e.changedTouches[0].pageY;
      if (!this.initialDragDirection && Math.abs(this.dragLengthX) > 10) {
        this.initialDragDirection = HORIZONTAL;
      } else if (!this.initialDragDirection && Math.abs(this.dragLengthY) > 10) {
        this.initialDragDirection = VERTICAL;
      }
    },
    startDrag(e) {
      this.dragStartX = e.pageX;
      this.dragStartY = e.pageY;
    },
    startTouch(e) {
      this.dragStartX = e.changedTouches[0].pageX;
      this.dragStartY = e.changedTouches[0].pageY;
    },
    stopDrag(_e) {
      if (this.dragLengthX < -50) {
        this.eventWhenScrolledRight();
      } else if (this.dragLengthX > 50) {
        this.eventWhenScrolledLeft();
      } else if (this.dragLengthY > 50) {
        this.eventWhenScrolledDown();
      } else if (this.dragLengthY < -50) {
        this.eventWhenScrolledUp();
      }
      this.dragStartX = null;
      this.dragStartY = null;
      this.draggingX = null;
      this.draggingY = null;
      this.initialDragDirection = null;
    },
    stopTouch(_e) {
      this.dragStartX = null;
      this.dragStartY = null;
      this.draggingX = null;
      this.draggingY = null;
      this.initialDragDirection = null;
    },

    // please override here
    eventWhenScrolledRight() {},
    eventWhenScrolledLeft() {},
    eventWhenScrolledDown() {},
    eventWhenScrolledUp() {},
  },
};
