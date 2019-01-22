(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('@angular/router'), require('rxjs'), require('withinviewport'), require('rxjs/operators'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-app-tour', ['exports', '@angular/animations', '@angular/cdk/coercion', '@angular/cdk/keycodes', '@angular/router', 'rxjs', 'withinviewport', 'rxjs/operators', '@angular/cdk/overlay', '@angular/common', '@angular/core'], factory) :
    (factory((global['ngx-app-tour'] = {}),global.ng.animations,global.ng.cdk.coercion,global.ng.cdk.keycodes,global.ng.router,global.rxjs,global.withinviewport,global.rxjs.operators,global.ng.cdk.overlay,global.ng.common,global.ng.core));
}(this, (function (exports,animations,coercion,keycodes,router,rxjs,withinviewport,operators,overlay,common,core) { 'use strict';

    withinviewport = withinviewport && withinviewport.hasOwnProperty('default') ? withinviewport['default'] : withinviewport;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var fadeAnimation = animations.trigger('fadeAnimation', [
        animations.state('void', animations.style({ opacity: 0 })),
        animations.state('true', animations.style({ opacity: 1 })),
        animations.state('false', animations.style({ opacity: 0 })),
        animations.transition('* => true', animations.animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
        animations.transition('* => void', animations.animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
    ]);

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
    /**
     * @param {?} value
     * @return {?}
     */
    function toBoolean(value) {
        return coercion.coerceBooleanProperty(value);
    }

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
    var NzGlobalMonitorService = /** @class */ (function () {
        function NzGlobalMonitorService() {
            this.counter = 0;
            this.lastClickPos = {
                x: 0,
                y: 0
            };
            this._navItemSource = new core.EventEmitter();
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
    new NzGlobalMonitorService();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var isBrowser = (typeof window !== 'undefined');
    // tslint:disable-next-line:no-any
    /** @type {?} */
    var isFirefox = (isBrowser && (( /** @type {?} */(window))).mozInnerScreenX != null);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:no-any typedef no-invalid-this
    /** @type {?} */
    var availablePrefixs = ['moz', 'ms', 'webkit'];
    /**
     * @return {?}
     */
    function requestAnimationFramePolyfill() {
        /** @type {?} */
        var lastTime = 0;
        return function (callback) {
            /** @type {?} */
            var currTime = new Date().getTime();
            /** @type {?} */
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            /** @type {?} */
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    /**
     * @return {?}
     */
    function getRequestAnimationFrame() {
        if (typeof window === 'undefined') {
            return function () { return null; };
        }
        if (window.requestAnimationFrame) {
            // https://github.com/vuejs/vue/issues/4465
            return window.requestAnimationFrame.bind(window);
        }
        /** @type {?} */
        var prefix = availablePrefixs.filter(function (key) { return key + "RequestAnimationFrame" in window; })[0];
        return prefix
            ? window[prefix + "RequestAnimationFrame"]
            : requestAnimationFramePolyfill();
    }
    /** @type {?} */
    var reqAnimFrame = getRequestAnimationFrame();

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var POSITION_MAP = ( /** @type {?} */(( /** @type {?} */({
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
    var NzToolTipComponent = /** @class */ (function () {
        function NzToolTipComponent(cdr) {
            this.cdr = cdr;
            this._hasBackdrop = false;
            this._prefix = 'ant-tooltip-placement';
            this._positions = __spread(DEFAULT_4_POSITIONS);
            this._classMap = {};
            this._placement = 'top';
            this._trigger = 'hover';
            this.visibleSource = new rxjs.BehaviorSubject(false);
            this.visible$ = this.visibleSource.asObservable();
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.nzMouseEnterDelay = 0.15; // second
            // second
            this.nzMouseLeaveDelay = 0.1; // second
            // second
            this.nzVisibleChange = new core.EventEmitter();
        }
        Object.defineProperty(NzToolTipComponent.prototype, "nzVisible", {
            get: /**
             * @return {?}
             */ function () {
                return this.visibleSource.value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._trigger;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._trigger = value;
                this._hasBackdrop = this._trigger === 'click';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzToolTipComponent.prototype, "nzPlacement", {
            get: /**
             * @return {?}
             */ function () {
                return this._placement;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value !== this._placement) {
                    this._placement = value;
                    this._positions.unshift(( /** @type {?} */(POSITION_MAP[this.nzPlacement])));
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
                return this.nzTitle instanceof core.TemplateRef ? false : (this.nzTitle === '' || !isNotNil(this.nzTitle));
            };
        NzToolTipComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-tooltip',
                        animations: [fadeAnimation],
                        template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div\n    class=\"ant-tooltip\"\n    [ngClass]=\"_classMap\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-tooltip-content\">\n      <div class=\"ant-tooltip-arrow\"></div>\n      <div class=\"ant-tooltip-inner\">\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                        preserveWhitespaces: false,
                        styles: ["\n    .ant-tooltip {\n      position: relative;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        NzToolTipComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        NzToolTipComponent.propDecorators = {
            overlay: [{ type: core.ViewChild, args: ['overlay',] }],
            nzTitle: [{ type: core.Input }, { type: core.ContentChild, args: ['nzTemplate',] }],
            nzOverlayClassName: [{ type: core.Input }],
            nzOverlayStyle: [{ type: core.Input }],
            nzMouseEnterDelay: [{ type: core.Input }],
            nzMouseLeaveDelay: [{ type: core.Input }],
            nzVisibleChange: [{ type: core.Output }],
            nzVisible: [{ type: core.Input }],
            nzTrigger: [{ type: core.Input }],
            nzPlacement: [{ type: core.Input }]
        };
        return NzToolTipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPopoverComponent = /** @class */ (function (_super) {
        __extends(NzPopoverComponent, _super);
        function NzPopoverComponent(cdr) {
            var _this = _super.call(this, cdr) || this;
            _this._prefix = 'ant-popover-placement';
            return _this;
        }
        /**
         * @protected
         * @return {?}
         */
        NzPopoverComponent.prototype.isContentEmpty = /**
         * @protected
         * @return {?}
         */
            function () {
                /** @type {?} */
                var isTitleEmpty = this.nzTitle instanceof core.TemplateRef ? false : (this.nzTitle === '' || !isNotNil(this.nzTitle));
                /** @type {?} */
                var isContentEmpty = this.nzContent instanceof core.TemplateRef ? false : (this.nzContent === '' || !isNotNil(this.nzContent));
                return isTitleEmpty && isContentEmpty;
            };
        NzPopoverComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-popover',
                        animations: [fadeAnimation],
                        template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\n  <div class=\"ant-popover\" [ngClass]=\"_classMap\" [ngStyle]=\"nzOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-popover-content\">\n      <div class=\"ant-popover-arrow\"></div>\n      <div class=\"ant-popover-inner\">\n        <div class=\"ant-popover-title\" *ngIf=\"nzTitle\">\n          <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n        </div>\n        <div class=\"ant-popover-inner-content\">\n          <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        styles: ["\n    .ant-popover {\n      position: relative;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        NzPopoverComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        NzPopoverComponent.propDecorators = {
            nzTitle: [{ type: core.Input }, { type: core.ContentChild, args: ['neverUsedTemplate',] }],
            nzContent: [{ type: core.Input }, { type: core.ContentChild, args: ['nzTemplate',] }]
        };
        return NzPopoverComponent;
    }(NzToolTipComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTooltipDirective = /** @class */ (function () {
        function NzTooltipDirective(elementRef, hostView, resolver, renderer, tooltip) {
            this.elementRef = elementRef;
            this.hostView = hostView;
            this.resolver = resolver;
            this.renderer = renderer;
            this.tooltip = tooltip;
            // [NOTE] Here hard coded, and nzTitle used only under NzTooltipDirective currently.
            this.isTooltipOpen = false;
            this.isDynamicTooltip = false; // Indicate whether current tooltip is dynamic created
            this.factory = this.resolver.resolveComponentFactory(NzToolTipComponent);
            /**
             * Names of properties that should be proxy to child component.
             */
            this.needProxyProperties = [
                'nzTitle',
                'nzContent',
                'nzOverlayClassName',
                'nzOverlayStyle',
                'nzMouseEnterDelay',
                'nzMouseLeaveDelay',
                'nzVisible',
                'nzTrigger',
                'nzPlacement'
            ];
            this.subs_ = new rxjs.Subscription();
            this.nzVisibleChange = new core.EventEmitter();
        }
        Object.defineProperty(NzTooltipDirective.prototype, "setTitle", {
            set: /**
             * @param {?} title
             * @return {?}
             */ function (title) { this.nzTitle = title; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTooltipDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                this.updateProxies(changes);
            };
        /**
         * @return {?}
         */
        NzTooltipDirective.prototype.ngOnInit = /**
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
                    this.needProxyProperties.forEach(function (property) { return _this.updateCompValue(property, _this[property]); });
                    /** @type {?} */
                    var visible_ = this.tooltip.nzVisibleChange.pipe(operators.distinctUntilChanged()).subscribe(function (data) {
                        _this.visible = data;
                        _this.nzVisibleChange.emit(data);
                    });
                    this.subs_.add(visible_);
                }
                this.tooltip.setOverlayOrigin(this);
            };
        /**
         * @return {?}
         */
        NzTooltipDirective.prototype.ngAfterViewInit = /**
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
        NzTooltipDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subs_.unsubscribe();
            };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @protected
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        NzTooltipDirective.prototype.updateCompValue =
            // tslint:disable-next-line:no-any
            /**
             * @protected
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
         * @private
         * @return {?}
         */
        NzTooltipDirective.prototype.show = /**
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
        NzTooltipDirective.prototype.hide = /**
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
        NzTooltipDirective.prototype.delayEnterLeave = /**
         * @private
         * @param {?} isOrigin
         * @param {?} isEnter
         * @param {?=} delay
         * @return {?}
         */
            function (isOrigin, isEnter, delay) {
                var _this = this;
                if (delay === void 0) {
                    delay = -1;
                }
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
        /**
         * Set inputs of child components when this component's inputs change.
         * @param changes
         */
        /**
         * Set inputs of child components when this component's inputs change.
         * @private
         * @param {?} changes
         * @return {?}
         */
        NzTooltipDirective.prototype.updateProxies = /**
         * Set inputs of child components when this component's inputs change.
         * @private
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
                if (this.tooltip) {
                    Object.keys(changes).forEach(function (key) {
                        /** @type {?} */
                        var change = changes[key];
                        if (change) {
                            _this.updateCompValue(key, change.currentValue);
                        }
                    });
                }
            };
        NzTooltipDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nz-tooltip]',
                        host: {
                            '[class.ant-tooltip-open]': 'isTooltipOpen'
                        }
                    },] }
        ];
        /** @nocollapse */
        NzTooltipDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ViewContainerRef },
                { type: core.ComponentFactoryResolver },
                { type: core.Renderer2 },
                { type: NzToolTipComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        NzTooltipDirective.propDecorators = {
            nzVisibleChange: [{ type: core.Output }],
            nzTitle: [{ type: core.Input, args: ['nz-tooltip',] }],
            setTitle: [{ type: core.Input, args: ['nzTitle',] }],
            nzContent: [{ type: core.Input }],
            nzMouseEnterDelay: [{ type: core.Input }],
            nzMouseLeaveDelay: [{ type: core.Input }],
            nzOverlayClassName: [{ type: core.Input }],
            nzOverlayStyle: [{ type: core.Input }],
            nzTrigger: [{ type: core.Input }],
            nzVisible: [{ type: core.Input }],
            nzPlacement: [{ type: core.Input }]
        };
        return NzTooltipDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPopoverDirective = /** @class */ (function (_super) {
        __extends(NzPopoverDirective, _super);
        function NzPopoverDirective(elementRef, hostView, resolver, renderer, tooltip) {
            var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip) || this;
            _this.factory = _this.resolver.resolveComponentFactory(NzPopoverComponent);
            return _this;
        }
        NzPopoverDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nz-popover]',
                        host: {
                            '[class.ant-popover-open]': 'isTooltipOpen'
                        }
                    },] }
        ];
        /** @nocollapse */
        NzPopoverDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ViewContainerRef },
                { type: core.ComponentFactoryResolver },
                { type: core.Renderer2 },
                { type: NzPopoverComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        return NzPopoverDirective;
    }(NzTooltipDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzClassListAddDirective = /** @class */ (function () {
        function NzClassListAddDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.classList = [];
        }
        Object.defineProperty(NzClassListAddDirective.prototype, "nzClassListAdd", {
            set: /**
             * @param {?} list
             * @return {?}
             */ function (list) {
                var _this = this;
                this.classList.forEach(function (name) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, name);
                });
                list.forEach(function (name) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, name);
                });
                this.classList = list;
            },
            enumerable: true,
            configurable: true
        });
        NzClassListAddDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nzClassListAdd]'
                    },] }
        ];
        /** @nocollapse */
        NzClassListAddDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        NzClassListAddDirective.propDecorators = {
            nzClassListAdd: [{ type: core.Input }]
        };
        return NzClassListAddDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzStringTemplateOutletDirective = /** @class */ (function () {
        function NzStringTemplateOutletDirective(viewContainer, defaultTemplate) {
            this.viewContainer = viewContainer;
            this.defaultTemplate = defaultTemplate;
            this.inputTemplate = null;
            this.inputViewRef = null;
            this.defaultViewRef = null;
        }
        Object.defineProperty(NzStringTemplateOutletDirective.prototype, "nzStringTemplateOutlet", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this.isTemplate = true;
                    this.inputTemplate = value;
                }
                else {
                    this.isTemplate = false;
                }
                this.updateView();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzStringTemplateOutletDirective.prototype.updateView = /**
         * @return {?}
         */
            function () {
                if (!this.isTemplate) {
                    /** use default template when input is string **/
                    if (!this.defaultViewRef) {
                        this.viewContainer.clear();
                        this.inputViewRef = null;
                        if (this.defaultTemplate) {
                            this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate);
                        }
                    }
                }
                else {
                    /** use input template when input is templateRef **/
                    if (!this.inputViewRef) {
                        this.viewContainer.clear();
                        this.defaultViewRef = null;
                        if (this.inputTemplate) {
                            this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate);
                        }
                    }
                }
            };
        NzStringTemplateOutletDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nzStringTemplateOutlet]'
                    },] }
        ];
        /** @nocollapse */
        NzStringTemplateOutletDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.TemplateRef }
            ];
        };
        NzStringTemplateOutletDirective.propDecorators = {
            nzStringTemplateOutlet: [{ type: core.Input }]
        };
        return NzStringTemplateOutletDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzAddOnModule = /** @class */ (function () {
        function NzAddOnModule() {
        }
        NzAddOnModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [NzStringTemplateOutletDirective, NzClassListAddDirective],
                        declarations: [NzStringTemplateOutletDirective, NzClassListAddDirective]
                    },] }
        ];
        return NzAddOnModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPopoverModule = /** @class */ (function () {
        function NzPopoverModule() {
        }
        NzPopoverModule.decorators = [
            { type: core.NgModule, args: [{
                        entryComponents: [NzPopoverComponent],
                        exports: [NzPopoverDirective, NzPopoverComponent],
                        declarations: [NzPopoverDirective, NzPopoverComponent],
                        imports: [common.CommonModule, overlay.OverlayModule, NzAddOnModule]
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
        function TourService(router$$1) {
            this.router = router$$1;
            this.stepShow$ = new rxjs.Subject();
            this.stepHide$ = new rxjs.Subject();
            this.initialize$ = new rxjs.Subject();
            this.start$ = new rxjs.Subject();
            this.end$ = new rxjs.Subject();
            this.pause$ = new rxjs.Subject();
            this.resume$ = new rxjs.Subject();
            this.anchorRegister$ = new rxjs.Subject();
            this.anchorUnregister$ = new rxjs.Subject();
            this.events$ = rxjs.merge(this.stepShow$.pipe(operators.map(function (value) { return ({ name: 'stepShow', value: value }); })), this.stepHide$.pipe(operators.map(function (value) { return ({ name: 'stepHide', value: value }); })), this.initialize$.pipe(operators.map(function (value) { return ({ name: 'initialize', value: value }); })), this.start$.pipe(operators.map(function (value) { return ({ name: 'start', value: value }); })), this.end$.pipe(operators.map(function (value) { return ({ name: 'end', value: value }); })), this.pause$.pipe(operators.map(function (value) { return ({ name: 'pause', value: value }); })), this.resume$.pipe(operators.map(function (value) { return ({ name: 'resume', value: value }); })), this.anchorRegister$.pipe(operators.map(function (value) {
                return ({
                    name: 'anchorRegister',
                    value: value
                });
            })), this.anchorUnregister$.pipe(operators.map(function (value) {
                return ({
                    name: 'anchorUnregister',
                    value: value
                });
            })));
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
                    .pipe(operators.filter(function (event) { return event instanceof router.NavigationStart; }), operators.first())
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
                        .pipe(operators.filter(function (event) { return event instanceof router.NavigationStart; }), operators.first())
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
                if (attempt === void 0) {
                    attempt = 0;
                }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TourService.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
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
            _this.closed$ = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ngx-tour-step',
                        template: "<ng-template\n        cdkConnectedOverlay\n        [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n        [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n        (backdropClick)=\"hide()\"\n        (detach)=\"hide()\"\n        (positionChange)=\"onPositionChange($event)\"\n        [cdkConnectedOverlayPositions]=\"_positions\"\n        [cdkConnectedOverlayOpen]=\"visible$ | async\">\n    <div class=\"ant-popover\" [ngClass]=\"_classMap\" [ngStyle]=\"nzOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n         (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n        <div class=\"ant-popover-content\">\n            <div class=\"ant-popover-arrow\"></div>\n            <div class=\"ant-popover-inner\">\n                <ng-container *ngTemplateOutlet=\"stepTemplate || defaultTemplate; context: { step: step }\"></ng-container>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #defaultTemplate let-step=\"step\">\n    <div class=\"step-container\" (click)=\"$event.stopPropagation()\">\n        <div *ngIf=\"step?.title\" class=\"step-title\">\n            {{ step?.title }}\n        </div>\n        <div class=\"step-content\">\n            {{ step?.content }}\n        </div>\n        <div class=\"step-actions\">\n            <button class=\"step-btn\" [disabled]=\"!tourService.hasPrev(step)\" (click)=\"tourService.prev()\">\n                <svg class=\"icon-btn\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                     xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                     y=\"0px\"\n                     viewBox=\"0 0 477.175 477.175\" style=\"enable-background:new 0 0 477.175 477.175;\"\n                     xml:space=\"preserve\">\n<g>\n\t<path d=\"M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n\t\tc2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z\"/>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n                    <g>\n</g>\n</svg>\n            </button>\n            <button class=\"step-btn\" [disabled]=\"!tourService.hasNext(step) || step.nextOn\" (click)=\"tourService.next()\">\n                <svg class=\"icon-btn\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 129 129\"\n                     xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 129 129\">\n                    <g>\n                        <path d=\"m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z\"/>\n                    </g>\n                </svg>\n            </button>\n            <button class=\"step-btn\" (click)=\"tourService.end()\">{{ step?.endBtnTitle }}</button>\n        </div>\n    </div>\n</ng-template>\n",
                        animations: [fadeAnimation]
                    }] }
        ];
        /** @nocollapse */
        TourStepComponent.ctorParameters = function () {
            return [
                { type: TourService },
                { type: core.ChangeDetectorRef }
            ];
        };
        TourStepComponent.propDecorators = {
            onEscapeKey: [{ type: core.HostListener, args: ['window:keydown.Escape',] }],
            onArrowRightKey: [{ type: core.HostListener, args: ['window:keydown.ArrowRight',] }],
            onArrowLeftKey: [{ type: core.HostListener, args: ['window:keydown.ArrowLeft',] }]
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
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
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
                            ( /** @type {?} */({ height: fromHeight, width: fromWidth, top: fromTop, left: fromLeft })),
                            ( /** @type {?} */({ height: toHeight, width: toWidth, top: toTop, left: toLeft }))
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
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
            };
        TourBackdropService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TourBackdropService.ctorParameters = function () {
            return [
                { type: core.RendererFactory2 }
            ];
        };
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
                        (( /** @type {?} */(this.elementRef.nativeElement))).scrollIntoView(false);
                    }
                    else if (!withinviewport(this.elementRef.nativeElement, { sides: 'left top right' })) {
                        (( /** @type {?} */(this.elementRef.nativeElement))).scrollIntoView(true);
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
                    .pipe(operators.first())
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
            { type: core.Directive, args: [{
                        selector: '[tourAnchor]'
                    },] }
        ];
        /** @nocollapse */
        TourAnchorDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ComponentFactoryResolver },
                { type: core.Injector },
                { type: core.Renderer2 },
                { type: core.ViewContainerRef },
                { type: core.ComponentFactoryResolver },
                { type: TourService },
                { type: TourBackdropService }
            ];
        };
        TourAnchorDirective.propDecorators = {
            tourAnchor: [{ type: core.Input }],
            isActive: [{ type: core.HostBinding, args: ['class.touranchor--is-active',] }],
            enableRippleEffect: [{ type: core.HostBinding, args: ['class.ripple-effect',] }],
            allowInteractions: [{ type: core.HostBinding, args: ['class.allow-interactions',] }]
        };
        return TourAnchorDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzToolTipModule = /** @class */ (function () {
        function NzToolTipModule() {
        }
        NzToolTipModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzToolTipComponent, NzTooltipDirective],
                        exports: [NzToolTipComponent, NzTooltipDirective],
                        imports: [common.CommonModule, overlay.OverlayModule, NzAddOnModule],
                        entryComponents: [NzToolTipComponent]
                    },] }
        ];
        return NzToolTipModule;
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
            { type: core.NgModule, args: [{
                        declarations: [TourAnchorDirective, TourStepComponent],
                        entryComponents: [TourStepComponent],
                        exports: [TourAnchorDirective],
                        imports: [common.CommonModule, overlay.OverlayModule, NzPopoverModule, NzToolTipModule]
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

    exports.NgxAppTour = NgxAppTour;
    exports.TourService = TourService;
    exports.TourState = TourState;
    exports.TourAnchorDirective = TourAnchorDirective;
    exports.ɵb = TourStepComponent;
    exports.ɵj = NzAddOnModule;
    exports.ɵl = NzClassListAddDirective;
    exports.ɵk = NzStringTemplateOutletDirective;
    exports.ɵd = fadeAnimation;
    exports.ɵc = NzPopoverComponent;
    exports.ɵf = NzPopoverComponent;
    exports.ɵh = NzPopoverDirective;
    exports.ɵe = NzPopoverModule;
    exports.ɵg = NzToolTipComponent;
    exports.ɵi = NzTooltipDirective;
    exports.ɵm = NzToolTipModule;
    exports.ɵa = TourBackdropService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-app-tour.umd.js.map