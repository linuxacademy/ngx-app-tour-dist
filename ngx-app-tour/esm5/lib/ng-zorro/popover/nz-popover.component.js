/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_4_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { toBoolean } from '../core/util/convert';
var NzPopoverComponent = /** @class */ (function () {
    function NzPopoverComponent(cdr) {
        this.cdr = cdr;
        this._hasBackdrop = false;
        this._prefix = 'ant-popover-placement';
        this._positions = tslib_1.__spread(DEFAULT_4_POSITIONS);
        this._classMap = {};
        this._placement = 'top';
        this._trigger = 'hover';
        this.visibleSource = new BehaviorSubject(false);
        this.visible$ = this.visibleSource.asObservable();
        this.nzVisibleChange = new EventEmitter();
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzMouseEnterDelay = 0.15; // Unit: second
        // Unit: second
        this.nzMouseLeaveDelay = 0.1; // Unit: second
    }
    Object.defineProperty(NzPopoverComponent.prototype, "nzContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._content;
        },
        set: 
        // Unit: second
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isContentString = !(value instanceof TemplateRef);
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopoverComponent.prototype, "nzVisible", {
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
    Object.defineProperty(NzPopoverComponent.prototype, "nzTrigger", {
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
    Object.defineProperty(NzPopoverComponent.prototype, "nzPlacement", {
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
    NzPopoverComponent.prototype.updatePosition = 
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
    NzPopoverComponent.prototype.onPositionChange = /**
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
    NzPopoverComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this.nzVisible = true;
    };
    /**
     * @return {?}
     */
    NzPopoverComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.nzVisible = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzPopoverComponent.prototype._afterVisibilityAnimation = /**
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
    NzPopoverComponent.prototype.setClassMap = /**
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
    NzPopoverComponent.prototype.setOverlayOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        this.overlayOrigin = origin;
    };
    NzPopoverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-popover',
                    template: '',
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzPopoverComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzPopoverComponent.propDecorators = {
        _content: [{ type: ContentChild, args: ['nzTemplate',] }],
        overlay: [{ type: ViewChild, args: ['overlay',] }],
        nzVisibleChange: [{ type: Output }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzPlacement: [{ type: Input }]
    };
    return NzPopoverComponent;
}());
export { NzPopoverComponent };
if (false) {
    /** @type {?} */
    NzPopoverComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzPopoverComponent.prototype._prefix;
    /** @type {?} */
    NzPopoverComponent.prototype._positions;
    /** @type {?} */
    NzPopoverComponent.prototype._classMap;
    /** @type {?} */
    NzPopoverComponent.prototype._placement;
    /** @type {?} */
    NzPopoverComponent.prototype._trigger;
    /** @type {?} */
    NzPopoverComponent.prototype.overlayOrigin;
    /** @type {?} */
    NzPopoverComponent.prototype.isContentString;
    /** @type {?} */
    NzPopoverComponent.prototype.isTitleString;
    /** @type {?} */
    NzPopoverComponent.prototype.visibleSource;
    /** @type {?} */
    NzPopoverComponent.prototype.visible$;
    /** @type {?} */
    NzPopoverComponent.prototype._content;
    /** @type {?} */
    NzPopoverComponent.prototype.overlay;
    /** @type {?} */
    NzPopoverComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzPopoverComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzPopoverComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzPopoverComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzPopoverComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzPopoverComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXBwLXRvdXIvIiwic291cmNlcyI6WyJsaWIvbmctem9ycm8vcG9wb3Zlci9uei1wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxtQkFBbUIsRUFBNEUsTUFBTSxzQkFBc0IsQ0FBQztBQUNySSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRDtJQXNIRSw0QkFBbUIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEvR3pDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyx1QkFBdUIsQ0FBQztRQUNsQyxlQUFVLG9CQUFpQyxtQkFBbUIsRUFBRTtRQUNoRSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBSW5CLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDcEQsYUFBUSxHQUF3QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRy9DLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEUsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLG1CQUFjLEdBQThCLEVBQUUsQ0FBQztRQUMvQyxzQkFBaUIsR0FBRyxJQUFJLENBQUMs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RS9FLGdEQUFpQzs7SUFDakMsNENBQXdEOztJQUN4RCwrQ0FBa0M7O0lBQ2xDLCtDQUFpQzs7SUE2RnJCLGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERFRkFVTFRfNF9QT1NJVElPTlMsIFBPU0lUSU9OX01BUCB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXBvcG92ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcblxuZXhwb3J0IGNsYXNzIE56UG9wb3ZlckNvbXBvbmVudCB7XG4gIF9oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XG4gIF9wb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUXzRfUE9TSVRJT05TXTtcbiAgX2NsYXNzTWFwID0ge307XG4gIF9wbGFjZW1lbnQgPSAndG9wJztcbiAgX3RyaWdnZXIgPSAnaG92ZXInO1xuICBvdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBpc0NvbnRlbnRTdHJpbmc6IGJvb2xlYW47XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW47XG4gIHZpc2libGVTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgdmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnZpc2libGVTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKSBfY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknKSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5ID0gMC4xNTsgLy8gVW5pdDogc2Vjb25kXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5ID0gMC4xOyAvLyBVbml0OiBzZWNvbmRcbiAgQElucHV0KClcbiAgc2V0IG56Q29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzQ29udGVudFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56Q29udGVudCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdmlzaWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMudmlzaWJsZVNvdXJjZS52YWx1ZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlU291cmNlLm5leHQodmlzaWJsZSk7XG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZVNvdXJjZS52YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRyaWdnZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyaWdnZXIgPSB2YWx1ZTtcbiAgICB0aGlzLl9oYXNCYWNrZHJvcCA9IHRoaXMuX3RyaWdnZXIgPT09ICdjbGljayc7XG4gIH1cblxuICBnZXQgbnpUcmlnZ2VyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcGxhY2VtZW50KSB7XG4gICAgICB0aGlzLl9wbGFjZW1lbnQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9ucy51bnNoaWZ0KFBPU0lUSU9OX01BUFt0aGlzLm56UGxhY2VtZW50XSBhcyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQbGFjZW1lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xuICB9XG5cbiAgLy8gTWFudWFsbHkgZm9yY2UgdXBkYXRpbmcgY3VycmVudCBvdmVybGF5J3MgcG9zaXRpb25cbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKCRldmVudDogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gUE9TSVRJT05fTUFQKSB7XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoJGV2ZW50LmNvbm5lY3Rpb25QYWlyKSA9PT0gSlNPTi5zdHJpbmdpZnkoUE9TSVRJT05fTUFQW2tleV0pKSB7XG4gICAgICAgIHRoaXMubnpQbGFjZW1lbnQgPSBrZXk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgLyoqIFRPRE8gbWF5IGNhdXNlIHBlcmZvcm1hbmNlIHByb2JsZW0gKi9cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5uelZpc2libGUgPSBmYWxzZTtcbiAgfVxuXG4gIF9hZnRlclZpc2liaWxpdHlBbmltYXRpb24oZTogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAnZmFsc2UnICYmICF0aGlzLm56VmlzaWJsZSkge1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgfVxuICAgIGlmIChlLnRvU3RhdGUgPT09ICd0cnVlJyAmJiB0aGlzLm56VmlzaWJsZSkge1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcbiAgICAgIFt0aGlzLm56T3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS0ke3RoaXMuX3BsYWNlbWVudH1gXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBzZXRPdmVybGF5T3JpZ2luKG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbik6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheU9yaWdpbiA9IG9yaWdpbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cbn1cbiJdfQ==