// mixin plugin to controll drag event on your vue component.
//
// How to use
// 1. Import this plugin as mixin. ex. `mixins: [draggable]`
// 2. Write following to your html.
// <div @touchstart="startTouch($event)" @touchmove.prevent="onTouch($event)" @touchend="stopDrag($event)" @mousedown="startDrag($event)" @mousemove.prevent="onDrag($event)" @mouseup="stopDrag($event)">
// 3. Implement `eventWhenDragged**` to methods on your components, or use variables on data as you like.

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
      isDragging: false,
    };
  },
  methods: {
    checkDragging() {
      if (this.isDragging) {
        return
      }
      if (Math.abs(this.dragLengthX) <= 20 && Math.abs(this.dragLengthY) <= 20) {
        return;
      }

      // lock 1 sec not to fire event repeatedly.
      this.isDragging = true;
      setTimeout(() => this.isDragging = false, 1000);
      if (this.dragLengthY > 20) {
        this.eventWhenDraggingDown();
      } else if (this.dragLengthY < -20) {
        this.eventWhenDraggingUp();
      } else if (this.dragLengthX < -20) {
        this.eventWhenDraggingRight();
      } else if (this.dragLengthX > 20) {
        this.eventWhenDraggingLeft();
      }
    },
    onDrag(e) {
      this.draggingX = e.pageX;
      this.draggingY = e.pageY;
      if (!this.initialDragDirection && Math.abs(this.dragLengthX) > 10) {
        this.initialDragDirection = HORIZONTAL;
      } else if (!this.initialDragDirection && Math.abs(this.dragLengthY) > 10) {
        this.initialDragDirection = VERTICAL;
      }

      this.checkDragging();
    },
    onTouch(e) {
      this.draggingX = e.changedTouches[0].pageX;
      this.draggingY = e.changedTouches[0].pageY;
      if (!this.initialDragDirection && Math.abs(this.dragLengthX) > 10) {
        this.initialDragDirection = HORIZONTAL;
      } else if (!this.initialDragDirection && Math.abs(this.dragLengthY) > 10) {
        this.initialDragDirection = VERTICAL;
      }

      this.checkDragging();
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
      if (this.dragLengthY > 20) {
        this.eventWhenDraggedDown();
      } else if (this.dragLengthY < -20) {
        this.eventWhenDraggedUp();
      } else if (this.dragLengthX < -20) {
        this.eventWhenDraggedRight();
      } else if (this.dragLengthX > 20) {
        this.eventWhenDraggedLeft();
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
    eventWhenDraggingRight() {},
    eventWhenDraggingLeft() {},
    eventWhenDraggingDown() {},
    eventWhenDraggingUp() {},
    eventWhenDraggedRight() {},
    eventWhenDraggedLeft() {},
    eventWhenDraggedDown() {},
    eventWhenDraggedUp() {},
  },
};
