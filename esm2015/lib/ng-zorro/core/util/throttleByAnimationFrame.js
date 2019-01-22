/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:no-any typedef no-invalid-this
import { cancelRequestAnimationFrame, reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} fn
 * @return {?}
 */
export default function throttleByAnimationFrame(fn) {
    /** @type {?} */
    let requestId;
    /** @type {?} */
    const later = (args) => () => {
        requestId = null;
        fn(...args);
    };
    /** @type {?} */
    const throttled = (...args) => {
        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    };
    // tslint:disable-next-line:no-non-null-assertion
    ((/** @type {?} */ (throttled))).cancel = () => cancelRequestAnimationFrame((/** @type {?} */ (requestId)));
    return throttled;
}
/**
 * @return {?}
 */
export function throttleByAnimationFrameDecorator() {
    return function (target, key, descriptor) {
        /** @type {?} */
        const fn = descriptor.value;
        /** @type {?} */
        let definingProperty = false;
        return {
            configurable: true,
            /**
             * @return {?}
             */
            get() {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                /** @type {?} */
                const boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                definingProperty = false;
                return boundFn;
            }
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFwcC10b3VyLyIsInNvdXJjZXMiOlsibGliL25nLXpvcnJvL2NvcmUvdXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBRTFGLE1BQU0sQ0FBQyxPQUFPLFVBQVUsd0JBQXdCLENBQUMsRUFBTzs7UUFDbEQsU0FBd0I7O1VBRXRCLEtBQUssR0FBRyxDQUFDLElBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFO1FBQ2xDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDZCxDQUFDOztVQUVLLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7UUFDbkMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3JCLFNBQVMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsaURBQWlEO0lBQ2pELENBQUMsbUJBQUEsU0FBUyxFQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsbUJBQUEsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUUxRSxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLGlDQUFpQztJQUMvQyxPQUFPLFVBQVUsTUFBVyxFQUFFLEdBQVcsRUFBRSxVQUFlOztjQUNsRCxFQUFFLEdBQUcsVUFBVSxDQUFDLEtBQUs7O1lBQ3ZCLGdCQUFnQixHQUFHLEtBQUs7UUFDNUIsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJOzs7O1lBQ2xCLEdBQUc7Z0JBQ0QsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM3RSxPQUFPLEVBQUUsQ0FBQztpQkFDWDs7c0JBRUssT0FBTyxHQUFHLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUMvQixLQUFLLEVBQVMsT0FBTztvQkFDckIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFFBQVEsRUFBTSxJQUFJO2lCQUNuQixDQUFDLENBQUM7Z0JBQ0gsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgdHlwZWRlZiBuby1pbnZhbGlkLXRoaXNcbmltcG9ydCB7IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSwgcmVxQW5pbUZyYW1lIH0gZnJvbSAnLi4vcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUoZm46IGFueSkge1xuICBsZXQgcmVxdWVzdElkOiBudW1iZXIgfCBudWxsO1xuXG4gIGNvbnN0IGxhdGVyID0gKGFyZ3M6IGFueVtdKSA9PiAoKSA9PiB7XG4gICAgcmVxdWVzdElkID0gbnVsbDtcbiAgICBmbiguLi5hcmdzKTtcbiAgfTtcblxuICBjb25zdCB0aHJvdHRsZWQgPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAocmVxdWVzdElkID09IG51bGwpIHtcbiAgICAgIHJlcXVlc3RJZCA9IHJlcUFuaW1GcmFtZShsYXRlcihhcmdzKSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ub24tbnVsbC1hc3NlcnRpb25cbiAgKHRocm90dGxlZCBhcyBhbnkpLmNhbmNlbCA9ICgpID0+IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQhKTtcblxuICByZXR1cm4gdGhyb3R0bGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lRGVjb3JhdG9yKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KSB7XG4gICAgY29uc3QgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGxldCBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldCgpIHtcbiAgICAgICAgaWYgKGRlZmluaW5nUHJvcGVydHkgfHwgdGhpcyA9PT0gdGFyZ2V0LnByb3RvdHlwZSB8fCB0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib3VuZEZuID0gdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lKGZuLmJpbmQodGhpcykpO1xuICAgICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgICAgIHZhbHVlICAgICAgIDogYm91bmRGbixcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgd3JpdGFibGUgICAgOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBib3VuZEZuO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG4iXX0=