// mixin plugin to controll wheel event on your vue component.
//
// How to use
// 1. Import this plugin as mixin. ex. `mixins: [wheelable]`
// 2. Write following to your html.
// <div @wheel="onWheel($event)">
// 3. Implement `eventWhenWheeled**` to methods on your components, or use variables on data as you like.

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
  data() {
    return {
      lastWheeledAt: 0,
      maxWheelX: 0,
      maxWheelY: 0,
      initialWheelDirection: null,
    };
  },
  methods: {
    onWheel(e) {
      this.maxWheelX = Math.max(this.maxWheelX, e.deltaX);
      this.maxWheelY = Math.max(this.maxWheelY, e.deltaY);
      if (!this.initialWheelDirection && Math.abs(this.maxWheelX) > 3) {
        this.initialWheelDirection = HORIZONTAL;
      } else if (!this.initialWheelDirection && Math.abs(this.maxWheelY) > 3) {
        this.initialWheelDirection = VERTICAL;
      }

      const wheeledAt = Date.now();
      this.lastWheeledAt = wheeledAt;
      setTimeout(() => {
        if (this.lastWheeledAt === wheeledAt) {
          this.stopWheel();
        }
      }, 100)
    },
    stopWheel(_e) {
      if (this.maxWheelX < -10) {
        this.eventWhenWheeledRight();
      } else if (this.maxWheelX > 10) {
        this.eventWhenWheeledLeft();
      } else if (this.maxWheelY > 10) {
        this.eventWhenWheeledDown();
      } else if (this.maxWheelY < -10) {
        this.eventWhenWheeledUp();
      }
      this.wheelStartX = null;
      this.wheelStartY = null;
      this.maxWheelX = null;
      this.maxWheelY = null;
      this.initialWheelDirection = null;
    },

    // please override here
    eventWhenWheeledRight() {},
    eventWhenWheeledLeft() {},
    eventWhenWheeledDown() {},
    eventWhenWheeledUp() {},
  },
};
