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
      isWheeling: false,
    };
  },
  methods: {
    checkWheelStopped() {
      const wheeledAt = Date.now();
      this.lastWheeledAt = wheeledAt;
      setTimeout(() => {
        if (this.lastWheeledAt === wheeledAt) {
          this.stopWheel();
        }
      }, 100)
    },
    checkWheeling() {
      if (this.isWheeling) {
        return
      }
      if (Math.abs(this.maxWheelX) <= 10 && Math.abs(this.maxWheelY) <= 10) {
        return;
      }

      // lock 1 sec not to fire event repeatedly.
      this.isWheeling = true;
      setTimeout(() => this.isWheeling = false, 1000);
      if (this.maxWheelX < -10) {
        this.eventWhenWheelingRight();
      } else if (this.maxWheelX > 10) {
        this.eventWhenWheelingLeft();
      } else if (this.maxWheelY > 10) {
        this.eventWhenWheelingDown();
      } else if (this.maxWheelY < -10) {
        this.eventWhenWheelingUp();
      }
    },
    onWheel(e) {
      this.maxWheelX = Math.max(this.maxWheelX, e.deltaX);
      this.maxWheelY = Math.max(this.maxWheelY, e.deltaY);
      if (!this.initialWheelDirection && Math.abs(this.maxWheelX) > 3) {
        this.initialWheelDirection = HORIZONTAL;
      } else if (!this.initialWheelDirection && Math.abs(this.maxWheelY) > 3) {
        this.initialWheelDirection = VERTICAL;
      }

      this.checkWheelStopped();
      this.checkWheeling();
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
    eventWhenWheelingRight() {},
    eventWhenWheelingLeft() {},
    eventWhenWheelingDown() {},
    eventWhenWheelingUp() {},
    eventWhenWheeledRight() {},
    eventWhenWheeledLeft() {},
    eventWhenWheeledDown() {},
    eventWhenWheeledUp() {},
  },
};
