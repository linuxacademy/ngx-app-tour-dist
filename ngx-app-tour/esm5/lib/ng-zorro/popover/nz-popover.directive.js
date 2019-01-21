/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, HostBinding, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { isNotNil } from '../core/util/check';
import { NzPopoverComponent } from './nz-popover.component';
var NzPopoverDirective = /** @class */ (function () {
    function NzPopoverDirective(elementRef, hostView, resolver, renderer, tooltip) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.tooltip = tooltip;
        this.unsubscribe$ = new Subject();
        // [NOTE] Here hard coded, and nzTitle used only under NzTooltipDirective currently.
        this.isTooltipOpen = false;
        this.isDynamicTooltip = false; // Indicate whether current tooltip is dynamic created
        this.factory = this.resolver.resolveComponentFactory(NzPopoverComponent);
        this.nzVisibleChange = new EventEmitter();
    }
    Object.defineProperty(NzPopoverDirective.prototype, "nzTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this._title = title;
            this.updateCompValue('nzTitle', title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopoverDirective.prototype, "setTitle", {
        set: /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this.nzTitle = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopoverDirective.prototype, "nzContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._content;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._content = value;
            this.updateCompValue('nzContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopoverDirective.prototype, "nzOverlayClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._overlayClassName;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._overlayClassName = value;
            this.updateCompValue('nzOverlayClassName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopoverDirective.prototype, "nzOverlayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._overlayStyle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._overlayStyle = value;
            this.updateCompValue('nzOverlayStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopoverDirective.prototype, "nzMouseEnterDelay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mouseEnterDelay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mouseEnterDelay = value;
            this.updateCompValue('nzMouseEnterDelay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopoverDirective.prototype, "nzMouseLeaveDelay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mouseEnterDelay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mouseLeaveDelay = value;
            this.updateCompValue('nzMouseLeaveDelay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopoverDirective.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._visible = value;
            this.updateCompValue('nzVisible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopoverDirective.prototype, "nzTrigger", {
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
            this.updateCompValue('nzTrigger', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopoverDirective.prototype, "nzPlacement", {
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
            this._placement = value;
            this.updateCompValue('nzPlacement', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopoverDirective.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isTooltipOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    NzPopoverDirective.prototype.show = /**
     * @private
     * @return {?}
     */
    function () {
        this.tooltip.show();
        this.isTooltipOpen = true;
    };
    /**
     * @private
     * @return {?}
     */
    NzPopoverDirective.prototype.hide = /**
     * @private
     * @return {?}
     */
    function () {
        this.tooltip.hide();
        this.isTooltipOpen = false;
    };
    /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    NzPopoverDirective.prototype.delayEnterLeave = /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    function (isOrigin, isEnter, delay) {
        var _this = this;
        if (delay === void 0) { delay = -1; }
        if (this.delayTimer) { // Clear timer during the delay time
            window.clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
        else if (delay > 0) {
            this.delayTimer = window.setTimeout(function () {
                _this.delayTimer = null;
                isEnter ? _this.show() : _this.hide();
            }, delay * 1000);
        }
        else {
            isEnter && isOrigin ? this.show() : this.hide(); // [Compatible] The "isOrigin" is used due to the tooltip will not hide immediately (may caused by the fade-out animation)
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NzPopoverDirective.prototype.updateCompValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (this.isDynamicTooltip && isNotNil(value)) {
            this.tooltip[key] = value;
        }
    };
    /**
     * @return {?}
     */
    NzPopoverDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Support faster tooltip mode: <a nz-tooltip="xxx"></a>. [NOTE] Used only under NzTooltipDirective currently.
        if (!this.tooltip) {
            /** @type {?} */
            var tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            /** @type {?} */
            var properties = ['nzTitle', 'nzContent', 'nzOverlayClassName', 'nzOverlayStyle', 'nzMouseEnterDelay', 'nzMouseLeaveDelay', 'nzVisible', 'nzTrigger', 'nzPlacement'];
            properties.forEach(function (property) { return _this.updateCompValue(property, _this[property]); });
            this.tooltip.nzVisibleChange.pipe(takeUntil(this.unsubscribe$), distinctUntilChanged()).subscribe(function (data) {
                _this._visible = data;
                _this.nzVisibleChange.emit(data);
            });
        }
        this.tooltip.setOverlayOrigin(this);
    };
    /**
     * @return {?}
     */
    NzPopoverDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltip.nzTrigger === 'hover') {
            /** @type {?} */
            var overlayElement_1;
            this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', function () { return _this.delayEnterLeave(true, true, _this.tooltip.nzMouseEnterDelay); });
            this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', function () {
                _this.delayEnterLeave(true, false, _this.tooltip.nzMouseLeaveDelay);
                if (_this.tooltip.overlay.overlayRef && !overlayElement_1) { // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    overlayElement_1 = _this.tooltip.overlay.overlayRef.overlayElement;
                    _this.renderer.listen(overlayElement_1, 'mouseenter', function () { return _this.delayEnterLeave(false, true); });
                    _this.renderer.listen(overlayElement_1, 'mouseleave', function () { return _this.delayEnterLeave(false, false); });
                }
            });
        }
        else if (this.tooltip.nzTrigger === 'focus') {
            this.renderer.listen(this.elementRef.nativeElement, 'focus', function () { return _this.show(); });
            this.renderer.listen(this.elementRef.nativeElement, 'blur', function () { return _this.hide(); });
        }
        else if (this.tooltip.nzTrigger === 'click') {
            this.renderer.listen(this.elementRef.nativeElement, 'click', function (e) {
                e.preventDefault();
                _this.show();
            });
        }
    };
    /**
     * @return {?}
     */
    NzPopoverDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzPopoverDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-popover]'
                },] }
    ];
    /** @nocollapse */
    NzPopoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzPopoverComponent, decorators: [{ type: Optional }] }
    ]; };
    NzPopoverDirective.propDecorators = {
        nzVisibleChange: [{ type: Output }],
        nzTitle: [{ type: Input, args: ['nz-tooltip',] }],
        setTitle: [{ type: Input, args: ['nzTitle',] }],
        nzContent: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        isOpen: [{ type: HostBinding, args: ['class.ant-tooltip-open',] }]
    };
    return NzPopoverDirective;
}());
export { NzPopoverDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzPopoverDirective.prototype.unsubscribe$;
    /** @type {?} */
    NzPopoverDirective.prototype.isTooltipOpen;
    /** @type {?} */
    NzPopoverDirective.prototype.isDynamicTooltip;
    /** @type {?} */
    NzPopoverDirective.prototype.delayTimer;
    /** @type {?} */
    NzPopoverDirective.prototype._title;
    /** @type {?} */
    NzPopoverDirective.prototype._content;
    /** @type {?} */
    NzPopoverDirective.prototype._overlayClassName;
    /** @type {?} */
    NzPopoverDirective.prototype._overlayStyle;
    /** @type {?} */
    NzPopoverDirective.prototype._mouseEnterDelay;
    /** @type {?} */
    NzPopoverDirective.prototype._mouseLeaveDelay;
    /** @type {?} */
    NzPopoverDirective.prototype._visible;
    /** @type {?} */
    NzPopoverDirective.prototype._trigger;
    /** @type {?} */
    NzPopoverDirective.prototype._placement;
    /** @type {?} */
    NzPopoverDirective.prototype.factory;
    /** @type {?} */
    NzPopoverDirective.prototype.nzVisibleChange;
    /** @type {?} */
    NzPopoverDirective.prototype.elementRef;
    /** @type {?} */
    NzPopoverDirective.prototype.hostView;
    /** @type {?} */
    NzPopoverDirective.prototype.resolver;
    /** @type {?} */
    NzPopoverDirective.prototype.renderer;
    /** @type {?} */
    NzPopoverDirective.prototype.tooltip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXBwLXRvdXIvIiwic291cmNlcyI6WyJsaWIvbmctem9ycm8vcG9wb3Zlci9uei1wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUF5SkUsNEJBQ1MsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUCxPQUEyQjtRQUp2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDUCxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQTFKeEMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOztRQUczQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixxQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxzREFBc0Q7UUFXaEYsWUFBTyxHQUF5QyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdkYsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBMklqRSxDQUFDO0lBeklELHNCQUNJLHVDQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFSRCxVQUNZLEtBQWlDO1lBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBTUQsc0JBQ0ksd0NBQVE7Ozs7O1FBRFosVUFDYSxLQUFpQztZQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHlDQUFTOzs7O1FBS2I7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFSRCxVQUNjLEtBQWlDO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBTUQsc0JBQ0ksa0RBQWtCOzs7O1FBS3RCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEMsQ0FBQzs7Ozs7UUFSRCxVQUN1QixLQUFhO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLDhDQUFjOzs7O1FBS2xCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBUkQsVUFDbUIsS0FBa0M7WUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLGlEQUFpQjs7OztRQUtyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7Ozs7O1FBUkQsVUFDc0IsS0FBYTtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSxpREFBaUI7Ozs7UUFLckI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7OztRQVJELFVBQ3NCLEtBQWE7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBTUQsc0JBQ0kseUNBQVM7Ozs7UUFLYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQVJELFVBQ2MsS0FBYztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLHlDQUFTOzs7O1FBS2I7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFSRCxVQUNjLEtBQWE7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSwyQ0FBVzs7OztRQUtmO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBUkQsVUFDZ0IsS0FBYTtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLHNDQUFNOzs7O1FBRFY7WUFFRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7O0lBRU8saUNBQUk7Ozs7SUFBWjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyxpQ0FBSTs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7Ozs7OztJQUVPLDRDQUFlOzs7Ozs7O0lBQXZCLFVBQXdCLFFBQWlCLEVBQUUsT0FBZ0IsRUFBRSxLQUFrQjtRQUEvRSxpQkFZQztRQVo0RCxzQkFBQSxFQUFBLFNBQWlCLENBQUM7UUFDN0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsb0NBQW9DO1lBQ3pELE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEMsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNsQjthQUFNO1lBQ0wsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQywwSEFBMEg7U0FDNUs7SUFDSCxDQUFDO0lBRUQsa0NBQWtDOzs7Ozs7O0lBQ2xDLDRDQUFlOzs7Ozs7O0lBQWYsVUFBZ0IsR0FBVyxFQUFFLEtBQVU7UUFDckMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUUsR0FBRyxDQUFFLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQVVELHFDQUFROzs7SUFBUjtRQUFBLGlCQWdCQztRQWZDLDhHQUE4RztRQUM5RyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTs7Z0JBQ1gsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNwRSxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztZQUN6QywwRkFBMEY7WUFDMUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzs7Z0JBQ3ZCLFVBQVUsR0FBRyxDQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUU7WUFDeEssVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBRSxRQUFRLENBQUUsQ0FBQyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ3BHLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsNENBQWU7OztJQUFmO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFOztnQkFDbEMsZ0JBQWM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFoRSxDQUFnRSxDQUFDLENBQUM7WUFDMUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFO2dCQUNoRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLGdCQUFjLEVBQUUsRUFBRSwwSEFBMEg7b0JBQ2xMLGdCQUFjLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztvQkFDaEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWMsRUFBRSxZQUFZLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7b0JBQzVGLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFjLEVBQUUsWUFBWSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO2lCQUM5RjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztZQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztTQUNoRjthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxVQUFDLENBQUM7Z0JBQzdELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Z0JBN01GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBckJDLFVBQVU7Z0JBVVYsZ0JBQWdCO2dCQVpoQix3QkFBd0I7Z0JBVXhCLFNBQVM7Z0JBU0Ysa0JBQWtCLHVCQWdLdEIsUUFBUTs7O2tDQTFJVixNQUFNOzBCQUVOLEtBQUssU0FBQyxZQUFZOzJCQVVsQixLQUFLLFNBQUMsU0FBUzs0QkFLZixLQUFLO3FDQVVMLEtBQUs7aUNBVUwsS0FBSztvQ0FVTCxLQUFLO29DQVVMLEtBQUs7NEJBVUwsS0FBSzs0QkFVTCxLQUFLOzhCQVVMLEtBQUs7eUJBVUwsV0FBVyxTQUFDLHdCQUF3Qjs7SUEwRnZDLHlCQUFDO0NBQUEsQUEvTUQsSUErTUM7U0E1TVksa0JBQWtCOzs7Ozs7SUFDN0IsMENBQTJDOztJQUczQywyQ0FBK0I7O0lBQy9CLDhDQUF5Qjs7SUFDekIsd0NBQVc7O0lBQ1gsb0NBQW1DOztJQUNuQyxzQ0FBcUM7O0lBQ3JDLCtDQUEwQjs7SUFDMUIsMkNBQTJDOztJQUMzQyw4Q0FBeUI7O0lBQ3pCLDhDQUF5Qjs7SUFDekIsc0NBQWtCOztJQUNsQixzQ0FBaUI7O0lBQ2pCLHdDQUFtQjs7SUFDbkIscUNBQTBHOztJQUMxRyw2Q0FBaUU7O0lBc0kvRCx3Q0FBNkI7O0lBQzdCLHNDQUFpQzs7SUFDakMsc0NBQXlDOztJQUN6QyxzQ0FBMEI7O0lBQzFCLHFDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IE56UG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vbnotcG9wb3Zlci5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotcG9wb3Zlcl0nXG59KVxuZXhwb3J0IGNsYXNzIE56UG9wb3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8vIFtOT1RFXSBIZXJlIGhhcmQgY29kZWQsIGFuZCBuelRpdGxlIHVzZWQgb25seSB1bmRlciBOelRvb2x0aXBEaXJlY3RpdmUgY3VycmVudGx5LlxuICBpc1Rvb2x0aXBPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIGlzRHluYW1pY1Rvb2x0aXAgPSBmYWxzZTsgLy8gSW5kaWNhdGUgd2hldGhlciBjdXJyZW50IHRvb2x0aXAgaXMgZHluYW1pYyBjcmVhdGVkXG4gIGRlbGF5VGltZXI7IC8vIFRpbWVyIGZvciBkZWxheSBlbnRlci9sZWF2ZVxuICBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBfY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIF9vdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIF9vdmVybGF5U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfTtcbiAgX21vdXNlRW50ZXJEZWxheTogbnVtYmVyO1xuICBfbW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XG4gIF92aXNpYmxlOiBib29sZWFuO1xuICBfdHJpZ2dlcjogc3RyaW5nO1xuICBfcGxhY2VtZW50OiBzdHJpbmc7XG4gIGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpQb3BvdmVyQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTnpQb3BvdmVyQ29tcG9uZW50KTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoJ256LXRvb2x0aXAnKVxuICBzZXQgbnpUaXRsZSh0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCduelRpdGxlJywgdGl0bGUpO1xuICB9XG5cbiAgZ2V0IG56VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgnbnpUaXRsZScpXG4gIHNldCBzZXRUaXRsZSh0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLm56VGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekNvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5fY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCduekNvbnRlbnQnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpDb250ZW50KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek92ZXJsYXlDbGFzc05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX292ZXJsYXlDbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpPdmVybGF5Q2xhc3NOYW1lJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56T3ZlcmxheUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5Q2xhc3NOYW1lO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56T3ZlcmxheVN0eWxlKHZhbHVlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl9vdmVybGF5U3R5bGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpPdmVybGF5U3R5bGUnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpPdmVybGF5U3R5bGUoKTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVN0eWxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TW91c2VFbnRlckRlbGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tb3VzZUVudGVyRGVsYXkgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpNb3VzZUVudGVyRGVsYXknLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpNb3VzZUVudGVyRGVsYXkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbW91c2VFbnRlckRlbGF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TW91c2VMZWF2ZURlbGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tb3VzZUxlYXZlRGVsYXkgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpNb3VzZUxlYXZlRGVsYXknLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpNb3VzZUxlYXZlRGVsYXkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbW91c2VFbnRlckRlbGF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpWaXNpYmxlJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRyaWdnZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyaWdnZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpUcmlnZ2VyJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56VHJpZ2dlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZW1lbnQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpQbGFjZW1lbnQnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpQbGFjZW1lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtdG9vbHRpcC1vcGVuJylcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1Rvb2x0aXBPcGVuO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XG4gICAgdGhpcy5pc1Rvb2x0aXBPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xuICAgIHRoaXMuaXNUb29sdGlwT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxheUVudGVyTGVhdmUoaXNPcmlnaW46IGJvb2xlYW4sIGlzRW50ZXI6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAtMSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHsgLy8gQ2xlYXIgdGltZXIgZHVyaW5nIHRoZSBkZWxheSB0aW1lXG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XG4gICAgICAgIGlzRW50ZXIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNFbnRlciAmJiBpc09yaWdpbiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7IC8vIFtDb21wYXRpYmxlXSBUaGUgXCJpc09yaWdpblwiIGlzIHVzZWQgZHVlIHRvIHRoZSB0b29sdGlwIHdpbGwgbm90IGhpZGUgaW1tZWRpYXRlbHkgKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbilcbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHVwZGF0ZUNvbXBWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRHluYW1pY1Rvb2x0aXAgJiYgaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLnRvb2x0aXBbIGtleSBdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHB1YmxpYyByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB0b29sdGlwOiBOelBvcG92ZXJDb21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFN1cHBvcnQgZmFzdGVyIHRvb2x0aXAgbW9kZTogPGEgbnotdG9vbHRpcD1cInh4eFwiPjwvYT4uIFtOT1RFXSBVc2VkIG9ubHkgdW5kZXIgTnpUb29sdGlwRGlyZWN0aXZlIGN1cnJlbnRseS5cbiAgICBpZiAoIXRoaXMudG9vbHRpcCkge1xuICAgICAgY29uc3QgdG9vbHRpcENvbXBvbmVudCA9IHRoaXMuaG9zdFZpZXcuY3JlYXRlQ29tcG9uZW50KHRoaXMuZmFjdG9yeSk7XG4gICAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwQ29tcG9uZW50Lmluc3RhbmNlO1xuICAgICAgLy8gUmVtb3ZlIGVsZW1lbnQgd2hlbiB1c2UgZGlyZWN0aXZlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8xOTY3XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRvb2x0aXBDb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPSB0cnVlO1xuICAgICAgY29uc3QgcHJvcGVydGllcyA9IFsgJ256VGl0bGUnLCAnbnpDb250ZW50JywgJ256T3ZlcmxheUNsYXNzTmFtZScsICduek92ZXJsYXlTdHlsZScsICduek1vdXNlRW50ZXJEZWxheScsICduek1vdXNlTGVhdmVEZWxheScsICduelZpc2libGUnLCAnbnpUcmlnZ2VyJywgJ256UGxhY2VtZW50JyBdO1xuICAgICAgcHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5ID0+IHRoaXMudXBkYXRlQ29tcFZhbHVlKHByb3BlcnR5LCB0aGlzWyBwcm9wZXJ0eSBdKSk7XG4gICAgICB0aGlzLnRvb2x0aXAubnpWaXNpYmxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gZGF0YTtcbiAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdChkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwLm56VHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgbGV0IG92ZXJsYXlFbGVtZW50O1xuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy50b29sdGlwLm56TW91c2VFbnRlckRlbGF5KSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLnRvb2x0aXAubnpNb3VzZUxlYXZlRGVsYXkpO1xuICAgICAgICBpZiAodGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZiAmJiAhb3ZlcmxheUVsZW1lbnQpIHsgLy8gTk9URTogd2UgYmluZCBldmVudHMgdW5kZXIgXCJtb3VzZWxlYXZlXCIgZHVlIHRvIHRoZSBvdmVybGF5UmVmIGlzIG9ubHkgY3JlYXRlZCBhZnRlciB0aGUgb3ZlcmxheSB3YXMgY29tcGxldGVseSBzaG93biB1cFxuICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgdHJ1ZSkpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCBmYWxzZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG9vbHRpcC5uelRyaWdnZXIgPT09ICdmb2N1cycpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZm9jdXMnLCAoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JsdXInLCAoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvb2x0aXAubnpUcmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbn1cbiJdfQ==