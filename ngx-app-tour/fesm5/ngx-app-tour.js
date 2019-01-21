import { animate, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Subject, merge } from 'rxjs';
import withinviewport from 'withinviewport';
import { distinctUntilChanged, takeUntil, first, map, filter } from 'rxjs/operators';
import { __extends, __spread, __values, __assign } from 'tslib';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild, ComponentFactoryResolver, Directive, ElementRef, HostBinding, Optional, Renderer2, ViewContainerRef, NgModule, Injectable, HostListener, RendererFactory2, Injector } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fadeAnimation = trigger('fadeAnimation', [
    state('void', style({ opacity: 0 })),
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: 0 })),
    transition('* => true', animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    transition('* => void', animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var POSITION_MAP = (/** @type {?} */ ((/** @type {?} */ ({
    'top': {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    'topCenter': {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    'topLeft': {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    'topRight': {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    'right': {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
    },
    'rightTop': {
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
    },
    'rightBottom': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom',
    },
    'bottom': {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    },
    'bottomCenter': {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    },
    'bottomLeft': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
    },
    'bottomRight': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top',
    },
    'left': {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
    },
    'leftTop': {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'top',
    },
    'leftBottom': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'bottom',
    },
}))));
// TODO: The whole logic does not make sense here, _objectValues just returns a copy of original array
/** @type {?} */
var DEFAULT_4_POSITIONS = _objectValues([POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left]);
/** @type {?} */
var DEFAULT_DROPDOWN_POSITIONS = _objectValues([POSITION_MAP.bottomLeft, POSITION_MAP.topLeft]);
/**
 * @template T, S
 * @param {?} array
 * @param {?} iteratee
 * @return {?}
 */
function arrayMap(array, iteratee) {
    /** @type {?} */
    var index = -1;
    /** @type {?} */
    var length = array == null ? 0 : array.length;
    /** @type {?} */
    var result = Array(length);
    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
/**
 * @template T
 * @param {?} object
 * @param {?} props
 * @return {?}
 */
function baseValues(object, props) {
    return arrayMap(props, function (key) {
        return object[key];
    });
}
/**
 * @template T
 * @param {?} object
 * @return {?}
 */
function _objectValues(object) {
    return object == null ? [] : baseValues(object, Object.keys(object));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function toBoolean(value) {
    return coerceBooleanProperty(value);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzPopoverComponent = /** @class */ (function () {
    function NzPopoverComponent(cdr) {
        this.cdr = cdr;
        this._hasBackdrop = false;
        this._prefix = 'ant-popover-placement';
        this._positions = __spread(DEFAULT_4_POSITIONS);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
function isNotNil(value) {
    return (typeof (value) !== 'undefined') && value !== null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzPopoverModule = /** @class */ (function () {
    function NzPopoverModule() {
    }
    NzPopoverModule.decorators = [
        { type: NgModule, args: [{
                    entryComponents: [NzPopoverComponent],
                    exports: [NzPopoverDirective, NzPopoverComponent],
                    declarations: [NzPopoverDirective, NzPopoverComponent],
                    imports: [CommonModule, OverlayModule]
                },] }
    ];
    return NzPopoverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var popUpFadeTime = 200;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var TourState = {
    OFF: 0,
    ON: 1,
    PAUSED: 2,
};
TourState[TourState.OFF] = 'OFF';
TourState[TourState.ON] = 'ON';
TourState[TourState.PAUSED] = 'PAUSED';
/**
 * @template T
 */
var TourService = /** @class */ (function () {
    function TourService(router) {
        this.router = router;
        this.stepShow$ = new Subject();
        this.stepHide$ = new Subject();
        this.initialize$ = new Subject();
        this.start$ = new Subject();
        this.end$ = new Subject();
        this.pause$ = new Subject();
        this.resume$ = new Subject();
        this.anchorRegister$ = new Subject();
        this.anchorUnregister$ = new Subject();
        this.events$ = merge(this.stepShow$.pipe(map(function (value) { return ({ name: 'stepShow', value: value }); })), this.stepHide$.pipe(map(function (value) { return ({ name: 'stepHide', value: value }); })), this.initialize$.pipe(map(function (value) { return ({ name: 'initialize', value: value }); })), this.start$.pipe(map(function (value) { return ({ name: 'start', value: value }); })), this.end$.pipe(map(function (value) { return ({ name: 'end', value: value }); })), this.pause$.pipe(map(function (value) { return ({ name: 'pause', value: value }); })), this.resume$.pipe(map(function (value) { return ({ name: 'resume', value: value }); })), this.anchorRegister$.pipe(map(function (value) { return ({
            name: 'anchorRegister',
            value: value
        }); })), this.anchorUnregister$.pipe(map(function (value) { return ({
            name: 'anchorUnregister',
            value: value
        }); })));
        this.steps = [];
        this.anchors = {};
        this.status = TourState.OFF;
    }
    /**
     * @param {?} steps
     * @param {?=} stepDefaults
     * @return {?}
     */
    TourService.prototype.initialize = /**
     * @param {?} steps
     * @param {?=} stepDefaults
     * @return {?}
     */
    function (steps, stepDefaults) {
        if (steps && steps.length > 0) {
            this.status = TourState.OFF;
            this.steps = steps.map(function (step) { return Object.assign({}, stepDefaults, step); });
            this.initialize$.next(this.steps);
        }
    };
    /**
     * @return {?}
     */
    TourService.prototype.start = /**
     * @return {?}
     */
    function () {
        this.startAt(0);
    };
    /**
     * @param {?} stepId
     * @return {?}
     */
    TourService.prototype.startAt = /**
     * @param {?} stepId
     * @return {?}
     */
    function (stepId) {
        var _this = this;
        this.status = TourState.ON;
        this.goToStep(this.loadStep(stepId));
        this.start$.next();
        this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationStart; }), first())
            .subscribe(function () {
            if (_this.currentStep) {
                _this.hideStep(_this.currentStep);
            }
        });
    };
    /**
     * @return {?}
     */
    TourService.prototype.end = /**
     * @return {?}
     */
    function () {
        this.status = TourState.OFF;
        this.hideStep(this.currentStep);
        this.currentStep = undefined;
        this.end$.next();
    };
    /**
     * @return {?}
     */
    TourService.prototype.pause = /**
     * @return {?}
     */
    function () {
        this.status = TourState.PAUSED;
        this.hideStep(this.currentStep);
        this.pause$.next();
    };
    /**
     * @return {?}
     */
    TourService.prototype.resume = /**
     * @return {?}
     */
    function () {
        this.status = TourState.ON;
        this.showStep(this.currentStep);
        this.resume$.next();
    };
    /**
     * @param {?=} pause
     * @return {?}
     */
    TourService.prototype.toggle = /**
     * @param {?=} pause
     * @return {?}
     */
    function (pause) {
        if (pause) {
            if (this.currentStep) {
                this.pause();
            }
            else {
                this.resume();
            }
        }
        else {
            if (this.currentStep) {
                this.end();
            }
            else {
                this.start();
            }
        }
    };
    /**
     * @return {?}
     */
    TourService.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.hasNext(this.currentStep)) {
            this.goToStep(this.loadStep(this.currentStep.nextStep || this.steps.indexOf(this.currentStep) + 1));
        }
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.hasNext = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (!step) {
            console.warn('Can\'t get next step. No currentStep.');
            return false;
        }
        return (step.nextStep !== undefined ||
            this.steps.indexOf(step) < this.steps.length - 1);
    };
    /**
     * @return {?}
     */
    TourService.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this.hasPrev(this.currentStep)) {
            this.goToStep(this.loadStep(this.currentStep.prevStep || this.steps.indexOf(this.currentStep) - 1));
        }
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.hasPrev = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (!step) {
            console.warn('Can\'t get previous step. No currentStep.');
            return false;
        }
        return step.prevStep !== undefined || this.steps.indexOf(step) > 0;
    };
    /**
     * @param {?} stepId
     * @return {?}
     */
    TourService.prototype.goto = /**
     * @param {?} stepId
     * @return {?}
     */
    function (stepId) {
        this.goToStep(this.loadStep(stepId));
    };
    /**
     * @param {?} anchorId
     * @param {?} anchor
     * @return {?}
     */
    TourService.prototype.register = /**
     * @param {?} anchorId
     * @param {?} anchor
     * @return {?}
     */
    function (anchorId, anchor) {
        if (this.anchors[anchorId]) {
            throw new Error('anchorId ' + anchorId + ' already registered!');
        }
        this.anchors[anchorId] = anchor;
        this.anchorRegister$.next(anchorId);
    };
    /**
     * @param {?} anchorId
     * @return {?}
     */
    TourService.prototype.unregister = /**
     * @param {?} anchorId
     * @return {?}
     */
    function (anchorId) {
        delete this.anchors[anchorId];
        this.anchorUnregister$.next(anchorId);
    };
    /**
     * @return {?}
     */
    TourService.prototype.getStatus = /**
     * @return {?}
     */
    function () {
        return this.status;
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.goToStep = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        var _this = this;
        if (!step) {
            console.warn('Can\'t go to non-existent step');
            this.end();
            return;
        }
        /** @type {?} */
        var navigatePromise = new Promise(function (resolve) {
            return resolve(true);
        });
        if (step.route !== undefined && typeof step.route === 'string') {
            navigatePromise = this.router.navigateByUrl(step.route);
        }
        else if (step.route && Array.isArray(step.route)) {
            navigatePromise = this.router.navigate(step.route);
        }
        navigatePromise.then(function (navigated) {
            if (navigated !== false) {
                setTimeout(function () { return _this.setCurrentStep(step); });
            }
        });
    };
    /**
     * @private
     * @param {?} stepId
     * @return {?}
     */
    TourService.prototype.loadStep = /**
     * @private
     * @param {?} stepId
     * @return {?}
     */
    function (stepId) {
        if (typeof stepId === 'number') {
            return this.steps[stepId];
        }
        else {
            return this.steps.find(function (step) { return step.stepId === stepId; });
        }
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.setCurrentStep = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        var _this = this;
        if (this.currentStep) {
            this.hideStep(this.currentStep);
        }
        setTimeout(function () {
            _this.currentStep = step;
            _this.showStep(_this.currentStep);
            _this.router.events
                .pipe(filter(function (event) { return event instanceof NavigationStart; }), first())
                .subscribe(function () {
                if (_this.currentStep) {
                    _this.hideStep(_this.currentStep);
                }
            });
        }, this.currentStep ? popUpFadeTime : 0);
    };
    /**
     * @private
     * @param {?} step
     * @param {?=} attempt
     * @return {?}
     */
    TourService.prototype.showStep = /**
     * @private
     * @param {?} step
     * @param {?=} attempt
     * @return {?}
     */
    function (step, attempt) {
        var _this = this;
        if (attempt === void 0) { attempt = 0; }
        /** @type {?} */
        var anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            if (attempt === 20) {
                console.warn('Can\'t attach to unregistered anchor with id ' + step.anchorId);
                this.end();
            }
            else {
                setTimeout(function () { return _this.showStep(step, attempt++); }, 100);
            }
            return;
        }
        anchor.showTourStep(step);
        this.stepShow$.next(step);
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.hideStep = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        /** @type {?} */
        var anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            return;
        }
        anchor.hideTourStep();
        this.stepHide$.next(step);
    };
    TourService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TourService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return TourService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourStepComponent = /** @class */ (function (_super) {
    __extends(TourStepComponent, _super);
    function TourStepComponent(tourService, cdr) {
        var _this = _super.call(this, cdr) || this;
        _this.tourService = tourService;
        _this.cdr = cdr;
        _this._hasBackdrop = true;
        _this.step = {};
        _this.closed$ = new EventEmitter();
        _this.closeSubscription = _this.nzVisibleChange.subscribe(function (isVisible) {
            if (!isVisible) {
                _this.closed$.emit();
            }
        });
        return _this;
    }
    /**
     * @return {?}
     */
    TourStepComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeSubscription.unsubscribe();
    };
    /**
     * Configures hot keys for controlling the tour with the keyboard
     */
    /**
     * Configures hot keys for controlling the tour with the keyboard
     * @return {?}
     */
    TourStepComponent.prototype.onEscapeKey = /**
     * Configures hot keys for controlling the tour with the keyboard
     * @return {?}
     */
    function () {
        if (this.tourService.getStatus() === TourState.ON) {
            this.tourService.end();
        }
    };
    /**
     * @return {?}
     */
    TourStepComponent.prototype.onArrowRightKey = /**
     * @return {?}
     */
    function () {
        if (this.tourService.getStatus() === TourState.ON &&
            this.tourService.hasNext(this.tourService.currentStep)) {
            this.tourService.next();
        }
    };
    /**
     * @return {?}
     */
    TourStepComponent.prototype.onArrowLeftKey = /**
     * @return {?}
     */
    function () {
        if (this.tourService.getStatus() === TourState.ON &&
            this.tourService.hasPrev(this.tourService.currentStep)) {
            this.tourService.prev();
        }
    };
    TourStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-tour-step',
                    template: "<ng-template\n        cdkConnectedOverlay\n        [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n        [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n        (backdropClick)=\"hide()\"\n        (detach)=\"hide()\"\n        (positionChange)=\"onPositionChange($event)\"\n        [cdkConnectedOverlayPositions]=\"_positions\"\n        [cdkConnectedOverlayOpen]=\"visible$ | async\">\n    <div class=\"ant-popover\" [ngClass]=\"_classMap\" [ngStyle]=\"nzOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n         (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n        <div class=\"ant-popover-content\">\n            <div class=\"ant-popover-arrow\"></div>\n            <div class=\"ant-popover-inner\">\n                <ng-container *ngTemplateOutlet=\"stepTemplate || defaultTemplate; context: { step: step }\"></ng-container>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #defaultTemplate let-step=\"step\">\n    <div class=\"step-container\" (click)=\"$event.stopPropagation()\">\n        <div *ngIf=\"step?.title\" class=\"step-title\">\n            {{ step?.title }}\n        </div>\n        <div class=\"step-content\">\n            {{ step?.content }}\n        </div>\n        <div class=\"step-actions\">\n            <button class=\"step-btn\" [disabled]=\"!tourService.hasPrev(step)\" (click)=\"tourService.prev()\">\n                <svg class=\"icon-btn\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                     xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                     y=\"0px\"\n                     viewBox=\"0 0 477.175 477.175\" style=\"enable-background:new 0 0 477.175 477.175;\"\n                     xml:space=\"preserve\">\n<g>\n\t<path d=\"M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n\t\tc2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z\"/>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n</svg>\n            </button>\n            <button class=\"step-btn\" [disabled]=\"!tourService.hasNext(step) || step.nextOn\" (click)=\"tourService.next()\">\n                <svg class=\"icon-btn\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 129 129\"\n                     xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 129 129\">\n                    <g>\n                        <path d=\"m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z\"/>\n                    </g>\n                </svg>\n            </button>\n            <button class=\"step-btn\" (click)=\"tourService.end()\">{{ step?.endBtnTitle }}</button>\n        </div>\n    </div>\n</ng-template>\n",
                    animations: [fadeAnimation]
                }] }
    ];
    /** @nocollapse */
    TourStepComponent.ctorParameters = function () { return [
        { type: TourService },
        { type: ChangeDetectorRef }
    ]; };
    TourStepComponent.propDecorators = {
        onEscapeKey: [{ type: HostListener, args: ['window:keydown.Escape',] }],
        onArrowRightKey: [{ type: HostListener, args: ['window:keydown.ArrowRight',] }],
        onArrowLeftKey: [{ type: HostListener, args: ['window:keydown.ArrowLeft',] }]
    };
    return TourStepComponent;
}(NzPopoverComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                for (var _b = __values(Object.keys(styles)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            'box-shadow': "0 0 0 1999px " + shadowColor,
            'border-radius': radius ? radius : '100%',
        };
        if (!this.currentBoundingRect) {
            styles = __assign({}, styles, { width: boundingRect.width + 'px', height: boundingRect.height + 'px', top: boundingRect.top + 'px', left: boundingRect.left + 'px' });
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
                styles = __assign({}, styles, { width: boundingRect.width + 'px', height: boundingRect.height + 'px', top: boundingRect.top + 'px', left: boundingRect.left + 'px', transition: 'width 200ms ease-in-out,height 200ms ease-in-out,top 200ms ease-in-out,left 200ms ease-in-out' });
            }
        }
        this.currentBoundingRect = boundingRect;
        try {
            for (var _b = __values(Object.keys(styles)), _c = _b.next(); !_c.done; _c = _b.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourAnchorDirective = /** @class */ (function () {
    function TourAnchorDirective(elementRef, componentFactoryResolver, injector, renderer, viewContainer, resolver, tourService, tourBackdrop) {
        this.elementRef = elementRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainer = viewContainer;
        this.resolver = resolver;
        this.tourService = tourService;
        this.tourBackdrop = tourBackdrop;
        this.enableRippleEffect = false;
        this.allowInteractions = false;
    }
    /**
     * @return {?}
     */
    TourAnchorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.resolver.resolveComponentFactory(TourStepComponent);
        /** @type {?} */
        var tourComponent = this.viewContainer.createComponent(factory);
        this.tourStep = tourComponent.instance;
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tourComponent.location.nativeElement);
        this.tourStep.setOverlayOrigin(this);
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorDirective.prototype.showTourStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        var _this = this;
        this.isActive = true;
        this.tourStep.step = step;
        this.tourStep.nzPlacement = step.placement;
        this.tourStep.stepTemplate = step.stepTemplate;
        if (!step.preventScrolling) {
            if (!withinviewport(this.elementRef.nativeElement, { sides: 'bottom' })) {
                ((/** @type {?} */ (this.elementRef.nativeElement))).scrollIntoView(false);
            }
            else if (!withinviewport(this.elementRef.nativeElement, { sides: 'left top right' })) {
                ((/** @type {?} */ (this.elementRef.nativeElement))).scrollIntoView(true);
            }
        }
        this.enableRippleEffect = step.enableRippleEffect;
        this.allowInteractions = step.allowInteractions;
        if (step.nextOn) {
            this.allowInteractions = true;
            /** @type {?} */
            var onNext_1 = function () {
                _this.elementRef.nativeElement.removeEventListener(step.nextOn, onNext_1);
                _this.tourService.next();
            };
            this.elementRef.nativeElement.addEventListener(step.nextOn, onNext_1);
        }
        this.tourStep.show();
        if (!step.disableBackdrop) {
            this.tourBackdrop.show(this.elementRef, step.backdropRadius, step.backdropColor);
        }
        else {
            this.tourBackdrop.close();
        }
        if (step.enableRippleEffect) {
            /** @type {?} */
            var rippleColor = step.rippleColor ? step.rippleColor : 'rgba(0, 0, 0, 0.7)';
            this.elementRef.nativeElement.style.boxShadow = rippleColor + " 0px 0px 0px 100vw";
        }
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.menuCloseSubscription = this.tourStep.closed$
            .pipe(first())
            .subscribe(function () {
            if (_this.tourService.getStatus() !== TourState.OFF) {
                _this.tourService.end();
                _this.tourBackdrop.close();
            }
        });
    };
    /**
     * @return {?}
     */
    TourAnchorDirective.prototype.hideTourStep = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
        if (this.enableRippleEffect) {
            this.elementRef.nativeElement.style.boxShadow = 'none';
        }
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.tourStep.hide();
        if (this.tourService.getStatus() === TourState.OFF) {
            this.tourBackdrop.close();
        }
    };
    TourAnchorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tourAnchor]'
                },] }
    ];
    /** @nocollapse */
    TourAnchorDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: TourService },
        { type: TourBackdropService }
    ]; };
    TourAnchorDirective.propDecorators = {
        tourAnchor: [{ type: Input }],
        isActive: [{ type: HostBinding, args: ['class.touranchor--is-active',] }],
        enableRippleEffect: [{ type: HostBinding, args: ['class.ripple-effect',] }],
        allowInteractions: [{ type: HostBinding, args: ['class.allow-interactions',] }]
    };
    return TourAnchorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxAppTour = /** @class */ (function () {
    function NgxAppTour() {
    }
    /**
     * @return {?}
     */
    NgxAppTour.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxAppTour,
            providers: [
                TourBackdropService,
                TourService
            ],
        };
    };
    NgxAppTour.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourAnchorDirective, TourStepComponent],
                    entryComponents: [TourStepComponent],
                    exports: [TourAnchorDirective],
                    imports: [CommonModule, OverlayModule, NzPopoverModule]
                },] }
    ];
    return NgxAppTour;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxAppTour, TourService, TourState, TourAnchorDirective, TourStepComponent as ɵb, fadeAnimation as ɵd, NzPopoverComponent as ɵc, NzPopoverComponent as ɵf, NzPopoverDirective as ɵg, NzPopoverModule as ɵe, TourBackdropService as ɵa };

//# sourceMappingURL=ngx-app-tour.js.map