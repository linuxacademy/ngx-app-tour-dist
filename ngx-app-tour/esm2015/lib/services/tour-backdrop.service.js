/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, RendererFactory2 } from '@angular/core';
import { popUpFadeTime } from '../conig';
export class TourBackdropService {
    /**
     * @param {?} rendererFactory
     */
    constructor(rendererFactory) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @param {?} targetElement
     * @param {?} radius
     * @param {?} color
     * @return {?}
     */
    show(targetElement, radius, color) {
        /** @type {?} */
        const boundingRect = targetElement.nativeElement.getBoundingClientRect();
        if (!this.backdropElement) {
            this.backdropElement = this.renderer.createElement('div');
            this.renderer.addClass(this.backdropElement, 'ngx-tour_backdrop');
            this.renderer.appendChild(document.body, this.backdropElement);
            /** @type {?} */
            const styles = {
                position: 'fixed',
                'z-index': '100',
            };
            for (const name of Object.keys(styles)) {
                this.renderer.setStyle(this.backdropElement, name, styles[name]);
            }
        }
        this.setStyles(boundingRect, radius, color);
    }
    /**
     * @return {?}
     */
    close() {
        if (this.backdropElement) {
            this.renderer.removeChild(document.body, this.backdropElement);
            this.backdropElement = null;
        }
    }
    /**
     * @private
     * @param {?} boundingRect
     * @param {?} radius
     * @param {?} color
     * @return {?}
     */
    setStyles(boundingRect, radius, color) {
        /** @type {?} */
        const shadowColor = color ? color : 'rgba(0, 0, 0, 0.7)';
        /** @type {?} */
        let styles = {
            'box-shadow': `0 0 0 1999px ${shadowColor}`,
            'border-radius': radius ? radius : '100%',
        };
        if (!this.currentBoundingRect) {
            styles = Object.assign({}, styles, { width: boundingRect.width + 'px', height: boundingRect.height + 'px', top: boundingRect.top + 'px', left: boundingRect.left + 'px' });
        }
        else {
            if (this.backdropElement.animate) {
                /** @type {?} */
                const fromHeight = this.currentBoundingRect.height + 'px';
                /** @type {?} */
                const fromWidth = this.currentBoundingRect.width + 'px';
                /** @type {?} */
                const fromTop = this.currentBoundingRect.top + 'px';
                /** @type {?} */
                const fromLeft = this.currentBoundingRect.left + 'px';
                /** @type {?} */
                const toHeight = boundingRect.height + 'px';
                /** @type {?} */
                const toWidth = boundingRect.width + 'px';
                /** @type {?} */
                const toTop = boundingRect.top + 'px';
                /** @type {?} */
                const toLeft = boundingRect.left + 'px';
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
                styles = Object.assign({}, styles, { width: boundingRect.width + 'px', height: boundingRect.height + 'px', top: boundingRect.top + 'px', left: boundingRect.left + 'px', transition: 'width 200ms ease-in-out,height 200ms ease-in-out,top 200ms ease-in-out,left 200ms ease-in-out' });
            }
        }
        this.currentBoundingRect = boundingRect;
        for (const name of Object.keys(styles)) {
            if (this.backdropElement.style[name] !== styles[name]) {
                this.renderer.setStyle(this.backdropElement, name, styles[name]);
            }
        }
    }
}
TourBackdropService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TourBackdropService.ctorParameters = () => [
    { type: RendererFactory2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1iYWNrZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFwcC10b3VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RvdXItYmFja2Ryb3Auc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR3pDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFPOUIsWUFBWSxlQUFpQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFFTSxJQUFJLENBQUMsYUFBeUIsRUFBRSxNQUFNLEVBQUUsS0FBSzs7Y0FDNUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7UUFFeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7O2tCQUV6RCxNQUFNLEdBQUc7Z0JBQ2IsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJ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RUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFlBQVksQ0FBQztRQUV4QyxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEMsSUFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7SUFDSCxDQUFDOzs7WUFuR0YsVUFBVTs7OztZQUhpQyxnQkFBZ0I7Ozs7Ozs7SUFPMUQsdUNBQTRCOzs7OztJQUM1Qiw4Q0FBcUM7Ozs7O0lBQ3JDLGtEQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcG9wVXBGYWRlVGltZSB9IGZyb20gJy4uL2NvbmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvdXJCYWNrZHJvcFNlcnZpY2Uge1xuICAvLyB0b2RvOiB1c2UgY2RrIGluc3RlYWRcbiAgLy8gdG9kbzogbWFrZSBiYWNrZHJvcCBtb3ZlIHdpdGggZWxlbWVudFxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIHByaXZhdGUgYmFja2Ryb3BFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBjdXJyZW50Qm91bmRpbmdSZWN0O1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICBwdWJsaWMgc2hvdyh0YXJnZXRFbGVtZW50OiBFbGVtZW50UmVmLCByYWRpdXMsIGNvbG9yKSB7XG4gICAgY29uc3QgYm91bmRpbmdSZWN0ID0gdGFyZ2V0RWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wRWxlbWVudCkge1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmJhY2tkcm9wRWxlbWVudCwgJ25neC10b3VyX2JhY2tkcm9wJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgJ3otaW5kZXgnOiAnMTAwJyxcbiAgICAgIH07XG5cbiAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhzdHlsZXMpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5iYWNrZHJvcEVsZW1lbnQsIG5hbWUsIHN0eWxlc1tuYW1lXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdHlsZXMoYm91bmRpbmdSZWN0LCByYWRpdXMsIGNvbG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5iYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keSwgdGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGVzKGJvdW5kaW5nUmVjdDogRE9NUmVjdCwgcmFkaXVzLCBjb2xvcikge1xuICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gY29sb3IgPyBjb2xvciA6ICdyZ2JhKDAsIDAsIDAsIDAuNyknO1xuICAgIGxldCBzdHlsZXM6IGFueSA9IHtcbiAgICAgICdib3gtc2hhZG93JzogYDAgMCAwIDE5OTlweCAke3NoYWRvd0NvbG9yfWAsXG4gICAgICAnYm9yZGVyLXJhZGl1cyc6IHJhZGl1cyA/IHJhZGl1cyA6ICcxMDAlJyxcbiAgICB9O1xuXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRCb3VuZGluZ1JlY3QpIHtcbiAgICAgIHN0eWxlcyA9IHtcbiAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICB3aWR0aDogYm91bmRpbmdSZWN0LndpZHRoICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiBib3VuZGluZ1JlY3QuaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgJ3B4JyxcbiAgICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyAncHgnXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG5cblxuICAgICAgaWYgKHRoaXMuYmFja2Ryb3BFbGVtZW50LmFuaW1hdGUpIHtcbiAgICAgICAgY29uc3QgZnJvbUhlaWdodCA9IHRoaXMuY3VycmVudEJvdW5kaW5nUmVjdC5oZWlnaHQgKyAncHgnO1xuICAgICAgICBjb25zdCBmcm9tV2lkdGggPSB0aGlzLmN1cnJlbnRCb3VuZGluZ1JlY3Qud2lkdGggKyAncHgnO1xuICAgICAgICBjb25zdCBmcm9tVG9wID0gdGhpcy5jdXJyZW50Qm91bmRpbmdSZWN0LnRvcCArICdweCc7XG4gICAgICAgIGNvbnN0IGZyb21MZWZ0ID0gdGhpcy5jdXJyZW50Qm91bmRpbmdSZWN0LmxlZnQgKyAncHgnO1xuXG4gICAgICAgIGNvbnN0IHRvSGVpZ2h0ID0gYm91bmRpbmdSZWN0LmhlaWdodCArICdweCc7XG4gICAgICAgIGNvbnN0IHRvV2lkdGggPSBib3VuZGluZ1JlY3Qud2lkdGggKyAncHgnO1xuICAgICAgICBjb25zdCB0b1RvcCA9IGJvdW5kaW5nUmVjdC50b3AgKyAncHgnO1xuICAgICAgICBjb25zdCB0b0xlZnQgPSBib3VuZGluZ1JlY3QubGVmdCArICdweCc7XG5cbiAgICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuYW5pbWF0ZShcbiAgICAgICAgICBbXG4gICAgICAgICAgICA8YW55PntoZWlnaHQ6IGZyb21IZWlnaHQsIHdpZHRoOiBmcm9tV2lkdGgsIHRvcDogZnJvbVRvcCwgbGVmdDogZnJvbUxlZnR9LFxuICAgICAgICAgICAgPGFueT57aGVpZ2h0OiB0b0hlaWdodCwgd2lkdGg6IHRvV2lkdGgsIHRvcDogdG9Ub3AsIGxlZnQ6IHRvTGVmdH1cbiAgICAgICAgICBdLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogcG9wVXBGYWRlVGltZSxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcbiAgICAgICAgICAgIGZpbGw6ICdmb3J3YXJkcydcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZXMgPSB7XG4gICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgIHdpZHRoOiBib3VuZGluZ1JlY3Qud2lkdGggKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogYm91bmRpbmdSZWN0LmhlaWdodCArICdweCcsXG4gICAgICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgJ3B4JyxcbiAgICAgICAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCArICdweCcsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3dpZHRoIDIwMG1zIGVhc2UtaW4tb3V0LGhlaWdodCAyMDBtcyBlYXNlLWluLW91dCx0b3AgMjAwbXMgZWFzZS1pbi1vdXQsbGVmdCAyMDBtcyBlYXNlLWluLW91dCdcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudEJvdW5kaW5nUmVjdCA9IGJvdW5kaW5nUmVjdDtcblxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhzdHlsZXMpKSB7XG4gICAgICBpZih0aGlzLmJhY2tkcm9wRWxlbWVudC5zdHlsZVtuYW1lXSAhPT0gc3R5bGVzW25hbWVdKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5iYWNrZHJvcEVsZW1lbnQsIG5hbWUsIHN0eWxlc1tuYW1lXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=