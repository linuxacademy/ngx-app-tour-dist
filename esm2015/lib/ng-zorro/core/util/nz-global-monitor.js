/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter } from '@angular/core';
/**
 * @record
 */
export function Position() { }
if (false) {
    /** @type {?} */
    Position.prototype.x;
    /** @type {?} */
    Position.prototype.y;
}
export class NzGlobalMonitorService {
    constructor() {
        this.counter = 0;
        this.lastClickPos = {
            x: 0,
            y: 0
        };
        this._navItemSource = new EventEmitter();
        this._observeGlobalEvents();
    }
    /**
     * @return {?}
     */
    getGlobalCount() {
        return ++this.counter;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setDocumentOverflowHidden(status) {
        document.body.style.overflow = status ? 'hidden' : '';
    }
    /**
     * @return {?}
     */
    _observeGlobalEvents() {
        // 监听document的点击事件，记录点击坐标，并抛出 documentClick 事件
        document.addEventListener('click', (e) => {
            this.lastClickPos = {
                x: e.clientX,
                y: e.clientY
            };
            this._navItemSource.emit('documentClick');
        });
    }
}
if (false) {
    /** @type {?} */
    NzGlobalMonitorService.prototype.counter;
    /** @type {?} */
    NzGlobalMonitorService.prototype.lastClickPos;
    /** @type {?} */
    NzGlobalMonitorService.prototype._navItemSource;
}
export default new NzGlobalMonitorService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZ2xvYmFsLW1vbml0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXBwLXRvdXIvIiwic291cmNlcyI6WyJsaWIvbmctem9ycm8vY29yZS91dGlsL256LWdsb2JhbC1tb25pdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTdDLDhCQUdDOzs7SUFGQyxxQkFBVTs7SUFDVixxQkFBVTs7QUFHWixNQUFNLE9BQU8sc0JBQXNCO0lBNEJqQztRQTNCQSxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osaUJBQVksR0FBYTtZQUN2QixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0wsQ0FBQztRQUVGLG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFzQnhELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFyQkQsY0FBYztRQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQseUJBQXlCLENBQUMsTUFBZTtRQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLDhDQUE4QztRQUM5QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRztnQkFDbEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPO2dCQUNaLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTzthQUNiLENBQUM7WUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FLRjs7O0lBOUJDLHlDQUFZOztJQUNaLDhDQUdFOztJQUVGLGdEQUEwRDs7QUEwQjVELGVBQWUsSUFBSSxzQkFBc0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb24ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE56R2xvYmFsTW9uaXRvclNlcnZpY2Uge1xuICBjb3VudGVyID0gMDtcbiAgbGFzdENsaWNrUG9zOiBQb3NpdGlvbiA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBfbmF2SXRlbVNvdXJjZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0R2xvYmFsQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKyt0aGlzLmNvdW50ZXI7XG4gIH1cblxuICBzZXREb2N1bWVudE92ZXJmbG93SGlkZGVuKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBzdGF0dXMgPyAnaGlkZGVuJyA6ICcnO1xuICB9XG5cbiAgX29ic2VydmVHbG9iYWxFdmVudHMoKTogdm9pZCB7XG4gICAgLy8g55uR5ZCsZG9jdW1lbnTnmoTngrnlh7vkuovku7bvvIzorrDlvZXngrnlh7vlnZDmoIfvvIzlubbmipvlh7ogZG9jdW1lbnRDbGljayDkuovku7ZcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLmxhc3RDbGlja1BvcyA9IHtcbiAgICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgICB5OiBlLmNsaWVudFlcbiAgICAgIH07XG4gICAgICB0aGlzLl9uYXZJdGVtU291cmNlLmVtaXQoJ2RvY3VtZW50Q2xpY2snKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX29ic2VydmVHbG9iYWxFdmVudHMoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTnpHbG9iYWxNb25pdG9yU2VydmljZSgpO1xuIl19