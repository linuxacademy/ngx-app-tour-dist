/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, RendererFactory2 } from '@angular/core';
import { popUpFadeTime } from '../conig';
var TourBackdropService = /** @class */ (function () {
    function TourBackdropService(rendererFactory) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @param {?} targetElement
     * @param {?} radius
     * @param {?} color
     * @return {?}
     */
    TourBackdropService.prototype.show = /**
     * @param {?} targetElement
     * @param {?} radius
     * @param {?} color
     * @return {?}
     */
    function (targetElement, radius, color) {
        var e_1, _a;
        /** @type {?} */
        var boundingRect = targetElement.nativeElement.getBoundingClientRect();
        if (!this.backdropElement) {
            this.backdropElement = this.renderer.createElement('div');
            this.renderer.addClass(this.backdropElement, 'ngx-tour_backdrop');
            this.renderer.appendChild(document.body, this.backdropElement);
            /** @type {?} */
            var styles = {
                position: 'fixed',
                'z-index': '100',
            };
            try {
                for (var _b = tslib_1.__values(Object.keys(styles)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name_1 = _c.value;
                    this.renderer.setStyle(this.backdropElement, name_1, styles[name_1]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        this.setStyles(boundingRect, radius, color);
    };
    /**
     * @return {?}
     */
    TourBackdropService.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this.backdropElement) {
            this.renderer.removeChild(document.body, this.backdropElement);
            this.backdropElement = null;
        }
    };
    /**
     * @private
     * @param {?} boundingRect
     * @param {?} radius
     * @param {?} color
     * @return {?}
     */
    TourBackdropService.prototype.setStyles = /**
     * @private
     * @param {?} boundingRect
     * @param {?} radius
     * @param {?} color
     * @return {?}
     */
    function (boundingRect, radius, color) {
        var e_2, _a;
        /** @type {?} */
        var shadowColor = color ? color : 'rgba(0, 0, 0, 0.7)';
        /** @type {?} */
        var styles = {
            'outline': "9999px solid " + shadowColor,
            'border-radius': radius ? radius : '100%',
        };
        if (!this.currentBoundingRect) {
            styles = tslib_1.__assign({}, styles, { width: boundingRect.width + 'px', height: boundingRect.height + 'px', top: boundingRect.top + 'px', left: boundingRect.left + 'px' });
        }
        else {
            if (this.backdropElement.animate) {
                /** @type {?} */
                var fromHeight = this.currentBoundingRect.height + 'px';
                /** @type {?} */
                var fromWidth = this.currentBoundingRect.width + 'px';
                /** @type {?} */
                var fromTop = this.currentBoundingRect.top + 'px';
                /** @type {?} */
                var fromLeft = this.currentBoundingRect.left + 'px';
                /** @type {?} */
                var toHeight = boundingRect.height + 'px';
                /** @type {?} */
                var toWidth = boundingRect.width + 'px';
                /** @type {?} */
                var toTop = boundingRect.top + 'px';
                /** @type {?} */
                var toLeft = boundingRect.left + 'px';
                this.backdropElement.animate([
                    (/** @type {?} */ ({ height: fromHeight, width: fromWidth, top: fromTop, left: fromLeft })),
                    (/** @type {?} */ ({ height: toHeight, width: toWidth, top: toTop, left: toLeft }))
                ], {
                    duration: popUpFadeTime,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                });
            }
            else {
                styles = tslib_1.__assign({}, styles, { width: boundingRect.width + 'px', height: boundingRect.height + 'px', top: boundingRect.top + 'px', left: boundingRect.left + 'px', transition: 'width 200ms ease-in-out,height 200ms ease-in-out,top 200ms ease-in-out,left 200ms ease-in-out' });
            }
        }
        this.currentBoundingRect = boundingRect;
        try {
            for (var _b = tslib_1.__values(Object.keys(styles)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_2 = _c.value;
                if (this.backdropElement.style[name_2] !== styles[name_2]) {
                    this.renderer.setStyle(this.backdropElement, name_2, styles[name_2]);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    TourBackdropService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TourBackdropService.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    return TourBackdropService;
}());
export { TourBackdropService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TourBackdropService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    TourBackdropService.prototype.backdropElement;
    /**
     * @type {?}
     * @private
     */
    TourBackdropService.prototype.currentBoundingRect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1iYWNrZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFwcC10b3VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RvdXItYmFja2Ryb3Auc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV6QztJQVFFLDZCQUFZLGVBQWlDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7OztJQUVNLGtDQUFJOzs7Ozs7SUFBWCxVQUFZLGFBQXlCLEVBQUUsTUFBTSxFQUFFLEtBQUs7OztZQUM1QyxZQUFZLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTtRQUV4RSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Z0JBRXpELE1BQU0sR0FBRztnQkFDYixRQUFRLEVBQUUsT0FBTztnQkFDakIsU0FBUyxFQUFFLEtBQUs7YUFDakI7O2dCQUVELEtBQW1CLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO29CQUFuQyxJQUFNLE1BQUksV0FBQTtvQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQUksRUFBRSxNQUFNLENBQUMsTUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDbEU7Ozs7Ozs7OztTQUNGO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFTSxtQ0FBSzs7O0lBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7Ozs7OztJQUVPLHVDQUFTOzs7Ozs7O0lBQWpCLFVBQWtCLFlBQXFCLEVBQUUsTUFBTSxFQUFFLEtBQUs7OztZQUM5QyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjs7WUFDcEQsTUFBTSxHQUFRO1lBQ2hCLFNBQVMsRUFBRSxrQkFBZ0IsV0FBYTtZQUN4QyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDMUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLE1BQU0sd0JBQ0QsTUFBTSxJQUNULEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksRUFDaEMsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUNsQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQzVCLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksR0FDL0IsQ0FBQztTQUNIO2FBQU07WUFHTCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFOztvQkFDMUIsVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSTs7b0JBQ25ELFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUk7O29CQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsR0FBRyxJQUFJOztvQkFDN0MsUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSTs7b0JBRS9DLFFBQVEsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUk7O29CQUNyQyxPQUFPLEdBQUcsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJOztvQkFDbkMsS0FBSyxHQUFHLFlBQVksQ0FBQyxHQUFHLEdBQUcsSUFBSTs7b0JBQy9CLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUk7Z0JBRXZDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUMxQjtvQkFDRSxtQkFBSyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBQTtvQkFDekUsbUJBQUssRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLEVBQUE7aUJBQ2xFLEVBQUU7b0JBQ0QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLE1BQU0sRUFBRSxhQUFhO29CQUNyQixJQUFJLEVBQUUsVUFBVTtpQkFDakIsQ0FDRixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsTUFBTSx3QkFDRCxNQUFNLElBQ1QsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUNoQyxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQ2xDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxHQUFHLElBQUksRUFDNUIsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUM5QixVQUFVLEVBQUUsK0ZBQStGLEdBQzVHLENBQUM7YUFDSDtTQUVGO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFlBQVksQ0FBQzs7WUFFeEMsS0FBbUIsSUFBQSxLQUFBLGlCQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQW5DLElBQU0sTUFBSSxXQUFBO2dCQUNiLElBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDLE1BQUksQ0FBQyxFQUFFO29CQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQUksRUFBRSxNQUFNLENBQUMsTUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDbEU7YUFDRjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7Z0JBbkdGLFVBQVU7Ozs7Z0JBSGlDLGdCQUFnQjs7SUF1RzVELDBCQUFDO0NBQUEsQUFwR0QsSUFvR0M7U0FuR1ksbUJBQW1COzs7Ozs7SUFHOUIsdUNBQTRCOzs7OztJQUM1Qiw4Q0FBcUM7Ozs7O0lBQ3JDLGtEQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcG9wVXBGYWRlVGltZSB9IGZyb20gJy4uL2NvbmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvdXJCYWNrZHJvcFNlcnZpY2Uge1xuICAvLyB0b2RvOiB1c2UgY2RrIGluc3RlYWRcbiAgLy8gdG9kbzogbWFrZSBiYWNrZHJvcCBtb3ZlIHdpdGggZWxlbWVudFxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIHByaXZhdGUgYmFja2Ryb3BFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBjdXJyZW50Qm91bmRpbmdSZWN0O1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICBwdWJsaWMgc2hvdyh0YXJnZXRFbGVtZW50OiBFbGVtZW50UmVmLCByYWRpdXMsIGNvbG9yKSB7XG4gICAgY29uc3QgYm91bmRpbmdSZWN0ID0gdGFyZ2V0RWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wRWxlbWVudCkge1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmJhY2tkcm9wRWxlbWVudCwgJ25neC10b3VyX2JhY2tkcm9wJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgJ3otaW5kZXgnOiAnMTAwJyxcbiAgICAgIH07XG5cbiAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhzdHlsZXMpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5iYWNrZHJvcEVsZW1lbnQsIG5hbWUsIHN0eWxlc1tuYW1lXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdHlsZXMoYm91bmRpbmdSZWN0LCByYWRpdXMsIGNvbG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5iYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keSwgdGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGVzKGJvdW5kaW5nUmVjdDogRE9NUmVjdCwgcmFkaXVzLCBjb2xvcikge1xuICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gY29sb3IgPyBjb2xvciA6ICdyZ2JhKDAsIDAsIDAsIDAuNyknO1xuICAgIGxldCBzdHlsZXM6IGFueSA9IHtcbiAgICAgICdvdXRsaW5lJzogYDk5OTlweCBzb2xpZCAke3NoYWRvd0NvbG9yfWAsXG4gICAgICAnYm9yZGVyLXJhZGl1cyc6IHJhZGl1cyA/IHJhZGl1cyA6ICcxMDAlJyxcbiAgICB9O1xuXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRCb3VuZGluZ1JlY3QpIHtcbiAgICAgIHN0eWxlcyA9IHtcbiAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICB3aWR0aDogYm91bmRpbmdSZWN0LndpZHRoICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiBib3VuZGluZ1JlY3QuaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgJ3B4JyxcbiAgICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyAncHgnXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG5cblxuICAgICAgaWYgKHRoaXMuYmFja2Ryb3BFbGVtZW50LmFuaW1hdGUpIHtcbiAgICAgICAgY29uc3QgZnJvbUhlaWdodCA9IHRoaXMuY3VycmVudEJvdW5kaW5nUmVjdC5oZWlnaHQgKyAncHgnO1xuICAgICAgICBjb25zdCBmcm9tV2lkdGggPSB0aGlzLmN1cnJlbnRCb3VuZGluZ1JlY3Qud2lkdGggKyAncHgnO1xuICAgICAgICBjb25zdCBmcm9tVG9wID0gdGhpcy5jdXJyZW50Qm91bmRpbmdSZWN0LnRvcCArICdweCc7XG4gICAgICAgIGNvbnN0IGZyb21MZWZ0ID0gdGhpcy5jdXJyZW50Qm91bmRpbmdSZWN0LmxlZnQgKyAncHgnO1xuXG4gICAgICAgIGNvbnN0IHRvSGVpZ2h0ID0gYm91bmRpbmdSZWN0LmhlaWdodCArICdweCc7XG4gICAgICAgIGNvbnN0IHRvV2lkdGggPSBib3VuZGluZ1JlY3Qud2lkdGggKyAncHgnO1xuICAgICAgICBjb25zdCB0b1RvcCA9IGJvdW5kaW5nUmVjdC50b3AgKyAncHgnO1xuICAgICAgICBjb25zdCB0b0xlZnQgPSBib3VuZGluZ1JlY3QubGVmdCArICdweCc7XG5cbiAgICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuYW5pbWF0ZShcbiAgICAgICAgICBbXG4gICAgICAgICAgICA8YW55PntoZWlnaHQ6IGZyb21IZWlnaHQsIHdpZHRoOiBmcm9tV2lkdGgsIHRvcDogZnJvbVRvcCwgbGVmdDogZnJvbUxlZnR9LFxuICAgICAgICAgICAgPGFueT57aGVpZ2h0OiB0b0hlaWdodCwgd2lkdGg6IHRvV2lkdGgsIHRvcDogdG9Ub3AsIGxlZnQ6IHRvTGVmdH1cbiAgICAgICAgICBdLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogcG9wVXBGYWRlVGltZSxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcbiAgICAgICAgICAgIGZpbGw6ICdmb3J3YXJkcydcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZXMgPSB7XG4gICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgIHdpZHRoOiBib3VuZGluZ1JlY3Qud2lkdGggKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogYm91bmRpbmdSZWN0LmhlaWdodCArICdweCcsXG4gICAgICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgJ3B4JyxcbiAgICAgICAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCArICdweCcsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3dpZHRoIDIwMG1zIGVhc2UtaW4tb3V0LGhlaWdodCAyMDBtcyBlYXNlLWluLW91dCx0b3AgMjAwbXMgZWFzZS1pbi1vdXQsbGVmdCAyMDBtcyBlYXNlLWluLW91dCdcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudEJvdW5kaW5nUmVjdCA9IGJvdW5kaW5nUmVjdDtcblxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhzdHlsZXMpKSB7XG4gICAgICBpZih0aGlzLmJhY2tkcm9wRWxlbWVudC5zdHlsZVtuYW1lXSAhPT0gc3R5bGVzW25hbWVdKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5iYWNrZHJvcEVsZW1lbnQsIG5hbWUsIHN0eWxlc1tuYW1lXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=