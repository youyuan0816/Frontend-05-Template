/*
 * @Description: 
 * @version: 
 * @Author: youyuan
 * @Date: 2021-01-24 21:56:26
 * @LastEdited: 
 * @LastEditTime: 2021-01-24 22:54:06
 */
const TICK = Symbol('tick');
const TICK_HANDLER = Symbol('tick-handler');
const ANIMATION = Symbol('animation');

export class Timeline {
    constructor() {
        this[ANIMATION] = new Set();
    }

    start() {
        let startTime = Date.now();
        this[TICK] = () => {
            let t = Date.now() - startTime;
            for (let animation of this[ANIMATION]) {
                let t0 = t;
                if (animation.duration < t) {
                    this[ANIMATION].delete(animation);
                    t0 = animation.duration
                }
                animation.receive(t0);
            }
            requestAnimationFrame(this[TICK]);
        }
        this[TICK]();
    }

    pause() {}
    
    resume() {}

    reset() {}

    add(animation) {
        this[ANIMATION].add(animation);
    }
}



export class Animation {
    constructor(object, property, startValue, endValue, duration, timingFunction) {
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.timingFunction = timingFunction;
    }

    receive(time) {
        console.log(time);
        let range = (this.endValue - this.startValue)
        this.object[this.property] = this.startValue + range * time / this.duration
    }


}

