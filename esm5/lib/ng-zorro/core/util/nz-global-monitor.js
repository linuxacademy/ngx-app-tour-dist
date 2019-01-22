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
var NzGlobalMonitorService = /** @class */ (function () {
    function NzGlobalMonitorService() {
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
    NzGlobalMonitorService.prototype.getGlobalCount = /**
     * @return {?}
     */
    function () {
        return ++this.counter;
    };
    /**
     * @param {?} status
     * @return {?}
     */
    NzGlobalMonitorService.prototype.setDocumentOverflowHidden = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        document.body.style.overflow = status ? 'hidden' : '';
    };
    /**
     * @return {?}
     */
    NzGlobalMonitorService.prototype._observeGlobalEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // 监听document的点击事件，记录点击坐标，并抛出 documentClick 事件
        document.addEventListener('click', function (e) {
            _this.lastClickPos = {
                x: e.clientX,
                y: e.clientY
            };
            _this._navItemSource.emit('documentClick');
        });
    };
    return NzGlobalMonitorService;
}());
export { NzGlobalMonitorService };
if (false) {
    /** @type {?} */
    NzGlobalMonitorService.prototype.counter;
    /** @type {?} */
    NzGlobalMonitorService.prototype.lastClickPos;
    /** @type {?} */
    NzGlobalMonitorService.prototype._navItemSource;
}
export default new NzGlobalMonitorService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZ2xvYmFsLW1vbml0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXBwLXRvdXIvIiwic291cmNlcyI6WyJsaWIvbmctem9ycm8vY29yZS91dGlsL256LWdsb2JhbC1tb25pdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTdDLDhCQUdDOzs7SUFGQyxxQkFBVTs7SUFDVixxQkFBVTs7QUFHWjtJQTRCRTtRQTNCQSxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osaUJBQVksR0FBYTtZQUN2QixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0wsQ0FBQztRQUVGLG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFzQnhELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFyQkQsK0NBQWM7OztJQUFkO1FBQ0UsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCwwREFBeUI7Ozs7SUFBekIsVUFBMEIsTUFBZTtRQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQscURBQW9COzs7SUFBcEI7UUFBQSxpQkFTQztRQVJDLDhDQUE4QztRQUM5QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsWUFBWSxHQUFHO2dCQUNsQixDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU87Z0JBQ1osQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPO2FBQ2IsQ0FBQztZQUNGLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtILDZCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQzs7OztJQTlCQyx5Q0FBWTs7SUFDWiw4Q0FHRTs7SUFFRixnREFBMEQ7O0FBMEI1RCxlQUFlLElBQUksc0JBQXNCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOekdsb2JhbE1vbml0b3JTZXJ2aWNlIHtcbiAgY291bnRlciA9IDA7XG4gIGxhc3RDbGlja1BvczogUG9zaXRpb24gPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgX25hdkl0ZW1Tb3VyY2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldEdsb2JhbENvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuICsrdGhpcy5jb3VudGVyO1xuICB9XG5cbiAgc2V0RG9jdW1lbnRPdmVyZmxvd0hpZGRlbihzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gc3RhdHVzID8gJ2hpZGRlbicgOiAnJztcbiAgfVxuXG4gIF9vYnNlcnZlR2xvYmFsRXZlbnRzKCk6IHZvaWQge1xuICAgIC8vIOebkeWQrGRvY3VtZW5055qE54K55Ye75LqL5Lu277yM6K6w5b2V54K55Ye75Z2Q5qCH77yM5bm25oqb5Ye6IGRvY3VtZW50Q2xpY2sg5LqL5Lu2XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgdGhpcy5sYXN0Q2xpY2tQb3MgPSB7XG4gICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgeTogZS5jbGllbnRZXG4gICAgICB9O1xuICAgICAgdGhpcy5fbmF2SXRlbVNvdXJjZS5lbWl0KCdkb2N1bWVudENsaWNrJyk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9vYnNlcnZlR2xvYmFsRXZlbnRzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE56R2xvYmFsTW9uaXRvclNlcnZpY2UoKTtcbiJdfQ==