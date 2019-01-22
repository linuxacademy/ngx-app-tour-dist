/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fadeAnimation } from '../core/animation/fade-animations';
import { DEFAULT_4_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var NzToolTipComponent = /** @class */ (function () {
    function NzToolTipComponent(cdr) {
        this.cdr = cdr;
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = tslib_1.__spread(DEFAULT_4_POSITIONS);
        this._classMap = {};
        this._placement = 'top';
        this._trigger = 'hover';
        this.visibleSource = new BehaviorSubject(false);
        this.visible$ = this.visibleSource.asObservable();
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzMouseEnterDelay = 0.15; // second
        // second
        this.nzMouseLeaveDelay = 0.1; // second
        // second
        this.nzVisibleChange = new EventEmitter();
    }
    Object.defineProperty(NzToolTipComponent.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.visibleSource.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var visible = toBoolean(value);
            if (this.visibleSource.value !== visible) {
                this.visibleSource.next(visible);
                this.nzVisibleChange.emit(visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzToolTipComponent.prototype, "nzTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trigger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trigger = value;
            this._hasBackdrop = this._trigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzToolTipComponent.prototype, "nzPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placement;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._placement) {
                this._placement = value;
                this._positions.unshift((/** @type {?} */ (POSITION_MAP[this.nzPlacement])));
            }
        },
        enumerable: true,
        configurable: true
    });
    // Manually force updating current overlay's position
    // Manually force updating current overlay's position
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.updatePosition = 
    // Manually force updating current overlay's position
    /**
     * @return {?}
     */
    function () {
        if (this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzToolTipComponent.prototype.onPositionChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        for (var key in POSITION_MAP) {
            if (JSON.stringify($event.connectionPair) === JSON.stringify(POSITION_MAP[key])) {
                this.nzPlacement = key;
                break;
            }
        }
        this.setClassMap();
        /** TODO may cause performance problem */
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.isContentEmpty()) {
            this.nzVisible = true;
        }
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.nzVisible = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzToolTipComponent.prototype._afterVisibilityAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'false' && !this.nzVisible) {
            this.nzVisibleChange.emit(false);
        }
        if (e.toState === 'true' && this.nzVisible) {
            this.nzVisibleChange.emit(true);
        }
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this._classMap = (_a = {},
            _a[this.nzOverlayClassName] = true,
            _a[this._prefix + "-" + this._placement] = true,
            _a);
    };
    /**
     * @param {?} origin
     * @return {?}
     */
    NzToolTipComponent.prototype.setOverlayOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        this.overlayOrigin = origin;
    };
    /**
     * @protected
     * @return {?}
     */
    NzToolTipComponent.prototype.isContentEmpty = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.nzTitle instanceof TemplateRef ? false : (this.nzTitle === '' || !isNotNil(this.nzTitle));
    };
    NzToolTipComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-tooltip',
                    animations: [fadeAnimation],
                    template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div\n    class=\"ant-tooltip\"\n    [ngClass]=\"_classMap\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-tooltip-content\">\n      <div class=\"ant-tooltip-arrow\"></div>\n      <div class=\"ant-tooltip-inner\">\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                    preserveWhitespaces: false,
                    styles: ["\n    .ant-tooltip {\n      position: relative;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzToolTipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzToolTipComponent.propDecorators = {
        overlay: [{ type: ViewChild, args: ['overlay',] }],
        nzTitle: [{ type: Input }, { type: ContentChild, args: ['nzTemplate',] }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzVisibleChange: [{ type: Output }],
        nzVisible: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzPlacement: [{ type: Input }]
    };
    return NzToolTipComponent;
}());
export { NzToolTipComponent };
if (false) {
    /** @type {?} */
    NzToolTipComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzToolTipComponent.prototype._prefix;
    /** @type {?} */
    NzToolTipComponent.prototype._positions;
    /** @type {?} */
    NzToolTipComponent.prototype._classMap;
    /** @type {?} */
    NzToolTipComponent.prototype._placement;
    /** @type {?} */
    NzToolTipComponent.prototype._trigger;
    /** @type {?} */
    NzToolTipComponent.prototype.overlayOrigin;
    /** @type {?} */
    NzToolTipComponent.prototype.visibleSource;
    /** @type {?} */
    NzToolTipComponent.prototype.visible$;
    /** @type {?} */
    NzToolTipComponent.prototype.overlay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzTitle;
    /** @type {?} */
    NzToolTipComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzToolTipComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzToolTipComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzToolTipComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXBwLXRvdXIvIiwic291cmNlcyI6WyJsaWIvbmctem9ycm8vdG9vbHRpcC9uei10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxtQkFBbUIsRUFJcEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpEO0lBcUhFLDRCQUFtQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXZHekMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsWUFBTyxHQUFHLHVCQUF1QixDQUFDO1FBQ2xDLGVBQVUsb0JBQWtDLG1CQUFtQixFQUFHO1FBQ2xFLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFFbkIsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNwRCxhQUFRLEdBQXdCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFJekQsdUJB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VUwsS0FBSzs7SUFrRVIseUJBQUM7Q0FBQSxBQTFIRCxJQTBIQztTQTdHWSxrQkFBa0I7OztJQUM3QiwwQ0FBcUI7O0lBQ3JCLHFDQUFrQzs7SUFDbEMsd0NBQWtFOztJQUNsRSx1Q0FBZTs7SUFDZix3Q0FBbUI7O0lBQ25CLHNDQUFtQjs7SUFDbkIsMkNBQWdDOztJQUNoQywyQ0FBb0Q7O0lBQ3BELHNDQUFrRTs7SUFDbEUscUNBQW1EOztJQUVuRCxxQ0FBeUU7O0lBQ3pFLGdEQUFpQzs7SUFDakMsNENBQTBEOztJQUMxRCwrQ0FBa0M7O0lBQ2xDLCtDQUFpQzs7SUFFakMsNkNBQWlFOztJQXNGckQsaUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXG4gIENka092ZXJsYXlPcmlnaW4sXG4gIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSxcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGZhZGVBbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9mYWRlLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgREVGQVVMVF80X1BPU0lUSU9OUywgUE9TSVRJT05fTUFQIH0gZnJvbSAnLi4vY29yZS9vdmVybGF5L292ZXJsYXktcG9zaXRpb24tbWFwJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRvb2x0aXAnLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbIGZhZGVBbmltYXRpb24gXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICAuYW50LXRvb2x0aXAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIE56VG9vbFRpcENvbXBvbmVudCB7XG4gIF9oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICBfcHJlZml4ID0gJ2FudC10b29sdGlwLXBsYWNlbWVudCc7XG4gIF9wb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsgLi4uREVGQVVMVF80X1BPU0lUSU9OUyBdO1xuICBfY2xhc3NNYXAgPSB7fTtcbiAgX3BsYWNlbWVudCA9ICd0b3AnO1xuICBfdHJpZ2dlciA9ICdob3Zlcic7XG4gIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XG4gIHZpc2libGVTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgdmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnZpc2libGVTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknKSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuXG4gIEBJbnB1dCgpIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH0gPSB7fTtcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXkgPSAwLjE1OyAvLyBzZWNvbmRcbiAgQElucHV0KCkgbnpNb3VzZUxlYXZlRGVsYXkgPSAwLjE7IC8vIHNlY29uZFxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHZpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLnZpc2libGVTb3VyY2UudmFsdWUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMudmlzaWJsZVNvdXJjZS5uZXh0KHZpc2libGUpO1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpc2libGVTb3VyY2UudmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUcmlnZ2VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmlnZ2VyID0gdmFsdWU7XG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB0aGlzLl90cmlnZ2VyID09PSAnY2xpY2snO1xuICB9XG5cbiAgZ2V0IG56VHJpZ2dlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3BsYWNlbWVudCkge1xuICAgICAgdGhpcy5fcGxhY2VtZW50ID0gdmFsdWU7XG4gICAgICB0aGlzLl9wb3NpdGlvbnMudW5zaGlmdChQT1NJVElPTl9NQVBbIHRoaXMubnpQbGFjZW1lbnQgXSBhcyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQbGFjZW1lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xuICB9XG5cbiAgLy8gTWFudWFsbHkgZm9yY2UgdXBkYXRpbmcgY3VycmVudCBvdmVybGF5J3MgcG9zaXRpb25cbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKCRldmVudDogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gUE9TSVRJT05fTUFQKSB7XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoJGV2ZW50LmNvbm5lY3Rpb25QYWlyKSA9PT0gSlNPTi5zdHJpbmdpZnkoUE9TSVRJT05fTUFQWyBrZXkgXSkpIHtcbiAgICAgICAgdGhpcy5uelBsYWNlbWVudCA9IGtleTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICAvKiogVE9ETyBtYXkgY2F1c2UgcGVyZm9ybWFuY2UgcHJvYmxlbSAqL1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ29udGVudEVtcHR5KCkpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICBfYWZ0ZXJWaXNpYmlsaXR5QW5pbWF0aW9uKGU6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ2ZhbHNlJyAmJiAhdGhpcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoZS50b1N0YXRlID09PSAndHJ1ZScgJiYgdGhpcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMubnpPdmVybGF5Q2xhc3NOYW1lIF0gICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLl9wcmVmaXh9LSR7dGhpcy5fcGxhY2VtZW50fWAgXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBzZXRPdmVybGF5T3JpZ2luKG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbik6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheU9yaWdpbiA9IG9yaWdpbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHByb3RlY3RlZCBpc0NvbnRlbnRFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelRpdGxlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyBmYWxzZSA6ICh0aGlzLm56VGl0bGUgPT09ICcnIHx8ICFpc05vdE5pbCh0aGlzLm56VGl0bGUpKTtcbiAgfVxufVxuIl19