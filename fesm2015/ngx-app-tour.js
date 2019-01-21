import { animate, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Subject, merge } from 'rxjs';
import withinviewport from 'withinviewport';
import { distinctUntilChanged, takeUntil, first, map, filter } from 'rxjs/operators';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild, ComponentFactoryResolver, Directive, ElementRef, HostBinding, Optional, Renderer2, ViewContainerRef, NgModule, Injectable, HostListener, RendererFactory2, Injector } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fadeAnimation = trigger('fadeAnimation', [
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
const POSITION_MAP = (/** @type {?} */ ((/** @type {?} */ ({
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
const DEFAULT_4_POSITIONS = _objectValues([POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left]);
/** @type {?} */
const DEFAULT_DROPDOWN_POSITIONS = _objectValues([POSITION_MAP.bottomLeft, POSITION_MAP.topLeft]);
/**
 * @template T, S
 * @param {?} array
 * @param {?} iteratee
 * @return {?}
 */
function arrayMap(array, iteratee) {
    /** @type {?} */
    let index = -1;
    /** @type {?} */
    const length = array == null ? 0 : array.length;
    /** @type {?} */
    const result = Array(length);
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
    return arrayMap(props, (key) => {
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
class NzPopoverComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this._hasBackdrop = false;
        this._prefix = 'ant-popover-placement';
        this._positions = [...DEFAULT_4_POSITIONS];
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
    // Unit: second
    /**
     * @param {?} value
     * @return {?}
     */
    set nzContent(value) {
        this.isContentString = !(value instanceof TemplateRef);
        this._content = value;
    }
    /**
     * @return {?}
     */
    get nzContent() {
        return this._content;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        /** @type {?} */
        const visible = toBoolean(value);
        if (this.visibleSource.value !== visible) {
            this.visibleSource.next(visible);
            this.nzVisibleChange.emit(visible);
        }
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this.visibleSource.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTrigger(value) {
        this._trigger = value;
        this._hasBackdrop = this._trigger === 'click';
    }
    /**
     * @return {?}
     */
    get nzTrigger() {
        return this._trigger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlacement(value) {
        if (value !== this._placement) {
            this._placement = value;
            this._positions.unshift((/** @type {?} */ (POSITION_MAP[this.nzPlacement])));
        }
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this._placement;
    }
    // Manually force updating current overlay's position
    /**
     * @return {?}
     */
    updatePosition() {
        if (this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPositionChange($event) {
        for (const key in POSITION_MAP) {
            if (JSON.stringify($event.connectionPair) === JSON.stringify(POSITION_MAP[key])) {
                this.nzPlacement = key;
                break;
            }
        }
        this.setClassMap();
        /** TODO may cause performance problem */
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    show() {
        this.nzVisible = true;
    }
    /**
     * @return {?}
     */
    hide() {
        this.nzVisible = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _afterVisibilityAnimation(e) {
        if (e.toState === 'false' && !this.nzVisible) {
            this.nzVisibleChange.emit(false);
        }
        if (e.toState === 'true' && this.nzVisible) {
            this.nzVisibleChange.emit(true);
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this._classMap = {
            [this.nzOverlayClassName]: true,
            [`${this._prefix}-${this._placement}`]: true
        };
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    setOverlayOrigin(origin) {
        this.overlayOrigin = origin;
    }
}
NzPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-popover',
                template: '',
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
NzPopoverComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
class NzPopoverDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?} tooltip
     */
    constructor(elementRef, hostView, resolver, renderer, tooltip) {
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
    /**
     * @param {?} title
     * @return {?}
     */
    set nzTitle(title) {
        this._title = title;
        this.updateCompValue('nzTitle', title);
    }
    /**
     * @return {?}
     */
    get nzTitle() {
        return this._title;
    }
    /**
     * @param {?} title
     * @return {?}
     */
    set setTitle(title) {
        this.nzTitle = title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzContent(value) {
        this._content = value;
        this.updateCompValue('nzContent', value);
    }
    /**
     * @return {?}
     */
    get nzContent() {
        return this._content;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOverlayClassName(value) {
        this._overlayClassName = value;
        this.updateCompValue('nzOverlayClassName', value);
    }
    /**
     * @return {?}
     */
    get nzOverlayClassName() {
        return this._overlayClassName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOverlayStyle(value) {
        this._overlayStyle = value;
        this.updateCompValue('nzOverlayStyle', value);
    }
    /**
     * @return {?}
     */
    get nzOverlayStyle() {
        return this._overlayStyle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMouseEnterDelay(value) {
        this._mouseEnterDelay = value;
        this.updateCompValue('nzMouseEnterDelay', value);
    }
    /**
     * @return {?}
     */
    get nzMouseEnterDelay() {
        return this._mouseEnterDelay;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMouseLeaveDelay(value) {
        this._mouseLeaveDelay = value;
        this.updateCompValue('nzMouseLeaveDelay', value);
    }
    /**
     * @return {?}
     */
    get nzMouseLeaveDelay() {
        return this._mouseEnterDelay;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        this._visible = value;
        this.updateCompValue('nzVisible', value);
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTrigger(value) {
        this._trigger = value;
        this.updateCompValue('nzTrigger', value);
    }
    /**
     * @return {?}
     */
    get nzTrigger() {
        return this._trigger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlacement(value) {
        this._placement = value;
        this.updateCompValue('nzPlacement', value);
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this._placement;
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this.isTooltipOpen;
    }
    /**
     * @private
     * @return {?}
     */
    show() {
        this.tooltip.show();
        this.isTooltipOpen = true;
    }
    /**
     * @private
     * @return {?}
     */
    hide() {
        this.tooltip.hide();
        this.isTooltipOpen = false;
    }
    /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) { // Clear timer during the delay time
            window.clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
        else if (delay > 0) {
            this.delayTimer = window.setTimeout(() => {
                this.delayTimer = null;
                isEnter ? this.show() : this.hide();
            }, delay * 1000);
        }
        else {
            isEnter && isOrigin ? this.show() : this.hide(); // [Compatible] The "isOrigin" is used due to the tooltip will not hide immediately (may caused by the fade-out animation)
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    updateCompValue(key, value) {
        if (this.isDynamicTooltip && isNotNil(value)) {
            this.tooltip[key] = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Support faster tooltip mode: <a nz-tooltip="xxx"></a>. [NOTE] Used only under NzTooltipDirective currently.
        if (!this.tooltip) {
            /** @type {?} */
            const tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            /** @type {?} */
            const properties = ['nzTitle', 'nzContent', 'nzOverlayClassName', 'nzOverlayStyle', 'nzMouseEnterDelay', 'nzMouseLeaveDelay', 'nzVisible', 'nzTrigger', 'nzPlacement'];
            properties.forEach(property => this.updateCompValue(property, this[property]));
            this.tooltip.nzVisibleChange.pipe(takeUntil(this.unsubscribe$), distinctUntilChanged()).subscribe(data => {
                this._visible = data;
                this.nzVisibleChange.emit(data);
            });
        }
        this.tooltip.setOverlayOrigin(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.tooltip.nzTrigger === 'hover') {
            /** @type {?} */
            let overlayElement;
            this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', () => this.delayEnterLeave(true, true, this.tooltip.nzMouseEnterDelay));
            this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => {
                this.delayEnterLeave(true, false, this.tooltip.nzMouseLeaveDelay);
                if (this.tooltip.overlay.overlayRef && !overlayElement) { // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    overlayElement = this.tooltip.overlay.overlayRef.overlayElement;
                    this.renderer.listen(overlayElement, 'mouseenter', () => this.delayEnterLeave(false, true));
                    this.renderer.listen(overlayElement, 'mouseleave', () => this.delayEnterLeave(false, false));
                }
            });
        }
        else if (this.tooltip.nzTrigger === 'focus') {
            this.renderer.listen(this.elementRef.nativeElement, 'focus', () => this.show());
            this.renderer.listen(this.elementRef.nativeElement, 'blur', () => this.hide());
        }
        else if (this.tooltip.nzTrigger === 'click') {
            this.renderer.listen(this.elementRef.nativeElement, 'click', (e) => {
                e.preventDefault();
                this.show();
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzPopoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-popover]'
            },] }
];
/** @nocollapse */
NzPopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzPopoverComponent, decorators: [{ type: Optional }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPopoverModule {
}
NzPopoverModule.decorators = [
    { type: NgModule, args: [{
                entryComponents: [NzPopoverComponent],
                exports: [NzPopoverDirective, NzPopoverComponent],
                declarations: [NzPopoverDirective, NzPopoverComponent],
                imports: [CommonModule, OverlayModule]
            },] }
];

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
const popUpFadeTime = 200;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const TourState = {
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
class TourService {
    /**
     * @param {?} router
     */
    constructor(router) {
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
        this.events$ = merge(this.stepShow$.pipe(map(value => ({ name: 'stepShow', value }))), this.stepHide$.pipe(map(value => ({ name: 'stepHide', value }))), this.initialize$.pipe(map(value => ({ name: 'initialize', value }))), this.start$.pipe(map(value => ({ name: 'start', value }))), this.end$.pipe(map(value => ({ name: 'end', value }))), this.pause$.pipe(map(value => ({ name: 'pause', value }))), this.resume$.pipe(map(value => ({ name: 'resume', value }))), this.anchorRegister$.pipe(map(value => ({
            name: 'anchorRegister',
            value
        }))), this.anchorUnregister$.pipe(map(value => ({
            name: 'anchorUnregister',
            value
        }))));
        this.steps = [];
        this.anchors = {};
        this.status = TourState.OFF;
    }
    /**
     * @param {?} steps
     * @param {?=} stepDefaults
     * @return {?}
     */
    initialize(steps, stepDefaults) {
        if (steps && steps.length > 0) {
            this.status = TourState.OFF;
            this.steps = steps.map(step => Object.assign({}, stepDefaults, step));
            this.initialize$.next(this.steps);
        }
    }
    /**
     * @return {?}
     */
    start() {
        this.startAt(0);
    }
    /**
     * @param {?} stepId
     * @return {?}
     */
    startAt(stepId) {
        this.status = TourState.ON;
        this.goToStep(this.loadStep(stepId));
        this.start$.next();
        this.router.events
            .pipe(filter(event => event instanceof NavigationStart), first())
            .subscribe(() => {
            if (this.currentStep) {
                this.hideStep(this.currentStep);
            }
        });
    }
    /**
     * @return {?}
     */
    end() {
        this.status = TourState.OFF;
        this.hideStep(this.currentStep);
        this.currentStep = undefined;
        this.end$.next();
    }
    /**
     * @return {?}
     */
    pause() {
        this.status = TourState.PAUSED;
        this.hideStep(this.currentStep);
        this.pause$.next();
    }
    /**
     * @return {?}
     */
    resume() {
        this.status = TourState.ON;
        this.showStep(this.currentStep);
        this.resume$.next();
    }
    /**
     * @param {?=} pause
     * @return {?}
     */
    toggle(pause) {
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
    }
    /**
     * @return {?}
     */
    next() {
        if (this.hasNext(this.currentStep)) {
            this.goToStep(this.loadStep(this.currentStep.nextStep || this.steps.indexOf(this.currentStep) + 1));
        }
    }
    /**
     * @param {?} step
     * @return {?}
     */
    hasNext(step) {
        if (!step) {
            console.warn('Can\'t get next step. No currentStep.');
            return false;
        }
        return (step.nextStep !== undefined ||
            this.steps.indexOf(step) < this.steps.length - 1);
    }
    /**
     * @return {?}
     */
    prev() {
        if (this.hasPrev(this.currentStep)) {
            this.goToStep(this.loadStep(this.currentStep.prevStep || this.steps.indexOf(this.currentStep) - 1));
        }
    }
    /**
     * @param {?} step
     * @return {?}
     */
    hasPrev(step) {
        if (!step) {
            console.warn('Can\'t get previous step. No currentStep.');
            return false;
        }
        return step.prevStep !== undefined || this.steps.indexOf(step) > 0;
    }
    /**
     * @param {?} stepId
     * @return {?}
     */
    goto(stepId) {
        this.goToStep(this.loadStep(stepId));
    }
    /**
     * @param {?} anchorId
     * @param {?} anchor
     * @return {?}
     */
    register(anchorId, anchor) {
        if (this.anchors[anchorId]) {
            throw new Error('anchorId ' + anchorId + ' already registered!');
        }
        this.anchors[anchorId] = anchor;
        this.anchorRegister$.next(anchorId);
    }
    /**
     * @param {?} anchorId
     * @return {?}
     */
    unregister(anchorId) {
        delete this.anchors[anchorId];
        this.anchorUnregister$.next(anchorId);
    }
    /**
     * @return {?}
     */
    getStatus() {
        return this.status;
    }
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    goToStep(step) {
        if (!step) {
            console.warn('Can\'t go to non-existent step');
            this.end();
            return;
        }
        /** @type {?} */
        let navigatePromise = new Promise(resolve => resolve(true));
        if (step.route !== undefined && typeof step.route === 'string') {
            navigatePromise = this.router.navigateByUrl(step.route);
        }
        else if (step.route && Array.isArray(step.route)) {
            navigatePromise = this.router.navigate(step.route);
        }
        navigatePromise.then(navigated => {
            if (navigated !== false) {
                setTimeout(() => this.setCurrentStep(step));
            }
        });
    }
    /**
     * @private
     * @param {?} stepId
     * @return {?}
     */
    loadStep(stepId) {
        if (typeof stepId === 'number') {
            return this.steps[stepId];
        }
        else {
            return this.steps.find(step => step.stepId === stepId);
        }
    }
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    setCurrentStep(step) {
        if (this.currentStep) {
            this.hideStep(this.currentStep);
        }
        setTimeout(() => {
            this.currentStep = step;
            this.showStep(this.currentStep);
            this.router.events
                .pipe(filter(event => event instanceof NavigationStart), first())
                .subscribe(() => {
                if (this.currentStep) {
                    this.hideStep(this.currentStep);
                }
            });
        }, this.currentStep ? popUpFadeTime : 0);
    }
    /**
     * @private
     * @param {?} step
     * @param {?=} attempt
     * @return {?}
     */
    showStep(step, attempt = 0) {
        /** @type {?} */
        const anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            if (attempt === 20) {
                console.warn('Can\'t attach to unregistered anchor with id ' + step.anchorId);
                this.end();
            }
            else {
                setTimeout(() => this.showStep(step, attempt++), 100);
            }
            return;
        }
        anchor.showTourStep(step);
        this.stepShow$.next(step);
    }
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    hideStep(step) {
        /** @type {?} */
        const anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            return;
        }
        anchor.hideTourStep();
        this.stepHide$.next(step);
    }
}
TourService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TourService.ctorParameters = () => [
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourStepComponent extends NzPopoverComponent {
    /**
     * @param {?} tourService
     * @param {?} cdr
     */
    constructor(tourService, cdr) {
        super(cdr);
        this.tourService = tourService;
        this.cdr = cdr;
        this._hasBackdrop = true;
        this.step = {};
        this.closed$ = new EventEmitter();
        this.closeSubscription = this.nzVisibleChange.subscribe(isVisible => {
            if (!isVisible) {
                this.closed$.emit();
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.closeSubscription.unsubscribe();
    }
    /**
     * Configures hot keys for controlling the tour with the keyboard
     * @return {?}
     */
    onEscapeKey() {
        if (this.tourService.getStatus() === TourState.ON) {
            this.tourService.end();
        }
    }
    /**
     * @return {?}
     */
    onArrowRightKey() {
        if (this.tourService.getStatus() === TourState.ON &&
            this.tourService.hasNext(this.tourService.currentStep)) {
            this.tourService.next();
        }
    }
    /**
     * @return {?}
     */
    onArrowLeftKey() {
        if (this.tourService.getStatus() === TourState.ON &&
            this.tourService.hasPrev(this.tourService.currentStep)) {
            this.tourService.prev();
        }
    }
}
TourStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-tour-step',
                template: "<ng-template\n        cdkConnectedOverlay\n        [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n        [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n        (backdropClick)=\"hide()\"\n        (detach)=\"hide()\"\n        (positionChange)=\"onPositionChange($event)\"\n        [cdkConnectedOverlayPositions]=\"_positions\"\n        [cdkConnectedOverlayOpen]=\"visible$ | async\">\n    <div class=\"ant-popover\" [ngClass]=\"_classMap\" [ngStyle]=\"nzOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n         (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n        <div class=\"ant-popover-content\">\n            <div class=\"ant-popover-arrow\"></div>\n            <div class=\"ant-popover-inner\">\n                <ng-container *ngTemplateOutlet=\"stepTemplate || defaultTemplate; context: { step: step }\"></ng-container>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #defaultTemplate let-step=\"step\">\n    <div class=\"step-container\" (click)=\"$event.stopPropagation()\">\n        <div *ngIf=\"step?.title\" class=\"step-title\">\n            {{ step?.title }}\n        </div>\n        <div class=\"step-content\">\n            {{ step?.content }}\n        </div>\n        <div class=\"step-actions\">\n            <button class=\"step-btn\" [disabled]=\"!tourService.hasPrev(step)\" (click)=\"tourService.prev()\">\n                <svg class=\"icon-btn\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                     xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                     y=\"0px\"\n                     viewBox=\"0 0 477.175 477.175\" style=\"enable-background:new 0 0 477.175 477.175;\"\n                     xml:space=\"preserve\">\n<g>\n\t<path d=\"M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n\t\tc2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z\"/>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n</svg>\n            </button>\n            <button class=\"step-btn\" [disabled]=\"!tourService.hasNext(step) || step.nextOn\" (click)=\"tourService.next()\">\n                <svg class=\"icon-btn\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 129 129\"\n                     xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 129 129\">\n                    <g>\n                        <path d=\"m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z\"/>\n                    </g>\n                </svg>\n            </button>\n            <button class=\"step-btn\" (click)=\"tourService.end()\">{{ step?.endBtnTitle }}</button>\n        </div>\n    </div>\n</ng-template>\n",
                animations: [fadeAnimation]
            }] }
];
/** @nocollapse */
TourStepComponent.ctorParameters = () => [
    { type: TourService },
    { type: ChangeDetectorRef }
];
TourStepComponent.propDecorators = {
    onEscapeKey: [{ type: HostListener, args: ['window:keydown.Escape',] }],
    onArrowRightKey: [{ type: HostListener, args: ['window:keydown.ArrowRight',] }],
    onArrowLeftKey: [{ type: HostListener, args: ['window:keydown.ArrowLeft',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourBackdropService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourAnchorDirective {
    /**
     * @param {?} elementRef
     * @param {?} componentFactoryResolver
     * @param {?} injector
     * @param {?} renderer
     * @param {?} viewContainer
     * @param {?} resolver
     * @param {?} tourService
     * @param {?} tourBackdrop
     */
    constructor(elementRef, componentFactoryResolver, injector, renderer, viewContainer, resolver, tourService, tourBackdrop) {
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
    ngOnInit() {
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(TourStepComponent);
        /** @type {?} */
        const tourComponent = this.viewContainer.createComponent(factory);
        this.tourStep = tourComponent.instance;
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tourComponent.location.nativeElement);
        this.tourStep.setOverlayOrigin(this);
        this.tourService.register(this.tourAnchor, this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tourService.unregister(this.tourAnchor);
    }
    /**
     * @param {?} step
     * @return {?}
     */
    showTourStep(step) {
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
            const onNext = () => {
                this.elementRef.nativeElement.removeEventListener(step.nextOn, onNext);
                this.tourService.next();
            };
            this.elementRef.nativeElement.addEventListener(step.nextOn, onNext);
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
            const rippleColor = step.rippleColor ? step.rippleColor : 'rgba(0, 0, 0, 0.7)';
            this.elementRef.nativeElement.style.boxShadow = `${rippleColor} 0px 0px 0px 100vw`;
        }
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.menuCloseSubscription = this.tourStep.closed$
            .pipe(first())
            .subscribe(() => {
            if (this.tourService.getStatus() !== TourState.OFF) {
                this.tourService.end();
                this.tourBackdrop.close();
            }
        });
    }
    /**
     * @return {?}
     */
    hideTourStep() {
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
    }
}
TourAnchorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tourAnchor]'
            },] }
];
/** @nocollapse */
TourAnchorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: TourService },
    { type: TourBackdropService }
];
TourAnchorDirective.propDecorators = {
    tourAnchor: [{ type: Input }],
    isActive: [{ type: HostBinding, args: ['class.touranchor--is-active',] }],
    enableRippleEffect: [{ type: HostBinding, args: ['class.ripple-effect',] }],
    allowInteractions: [{ type: HostBinding, args: ['class.allow-interactions',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxAppTour {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxAppTour,
            providers: [
                TourBackdropService,
                TourService
            ],
        };
    }
}
NgxAppTour.decorators = [
    { type: NgModule, args: [{
                declarations: [TourAnchorDirective, TourStepComponent],
                entryComponents: [TourStepComponent],
                exports: [TourAnchorDirective],
                imports: [CommonModule, OverlayModule, NzPopoverModule]
            },] }
];

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