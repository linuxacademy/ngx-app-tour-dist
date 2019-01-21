/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject, merge as mergeStatic } from 'rxjs';
import { first, map, filter } from 'rxjs/operators';
import { popUpFadeTime } from '../conig';
/** @enum {number} */
var TourState = {
    OFF: 0,
    ON: 1,
    PAUSED: 2,
};
export { TourState };
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
        this.events$ = mergeStatic(this.stepShow$.pipe(map(function (value) { return ({ name: 'stepShow', value: value }); })), this.stepHide$.pipe(map(function (value) { return ({ name: 'stepHide', value: value }); })), this.initialize$.pipe(map(function (value) { return ({ name: 'initialize', value: value }); })), this.start$.pipe(map(function (value) { return ({ name: 'start', value: value }); })), this.end$.pipe(map(function (value) { return ({ name: 'end', value: value }); })), this.pause$.pipe(map(function (value) { return ({ name: 'pause', value: value }); })), this.resume$.pipe(map(function (value) { return ({ name: 'resume', value: value }); })), this.anchorRegister$.pipe(map(function (value) { return ({
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
export { TourService };
if (false) {
    /** @type {?} */
    TourService.prototype.stepShow$;
    /** @type {?} */
    TourService.prototype.stepHide$;
    /** @type {?} */
    TourService.prototype.initialize$;
    /** @type {?} */
    TourService.prototype.start$;
    /** @type {?} */
    TourService.prototype.end$;
    /** @type {?} */
    TourService.prototype.pause$;
    /** @type {?} */
    TourService.prototype.resume$;
    /** @type {?} */
    TourService.prototype.anchorRegister$;
    /** @type {?} */
    TourService.prototype.anchorUnregister$;
    /** @type {?} */
    TourService.prototype.events$;
    /** @type {?} */
    TourService.prototype.steps;
    /** @type {?} */
    TourService.prototype.currentStep;
    /** @type {?} */
    TourService.prototype.anchors;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.status;
    /**
     * @type {?}
     * @private
     */
    TourService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFwcC10b3VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RvdXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTFELE9BQU8sRUFBRSxPQUFPLEVBQWMsS0FBSyxJQUFJLFdBQVcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7SUFLdkMsTUFBRztJQUNILEtBQUU7SUFDRixTQUFNOzs7Ozs7Ozs7QUFHUjtJQXVDRSxxQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFyQzNCLGNBQVMsR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLGNBQVMsR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLGdCQUFXLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUMsV0FBTSxHQUFlLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkMsU0FBSSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ25DLFdBQU0sR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ25DLFlBQU8sR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLG9CQUFlLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakQsc0JBQWlCLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkQsWUFBTyxHQUE2QyxXQUFXLENBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDLEVBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDLEVBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDLEVBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLEVBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLEVBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLEVBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDLEVBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUN2QixHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDO1lBQ1osSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixLQUFLLE9BQUE7U0FDTixDQUFDLEVBSFcsQ0FHWCxDQUFDLENBQ0osRUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUN6QixHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDO1lBQ1osSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixLQUFLLE9BQUE7U0FDTixDQUFDLEVBSFcsQ0FHWCxDQUFDLENBQ0osQ0FDRixDQUFDO1FBRUssVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUdoQixZQUFPLEdBQWdELEVBQUUsQ0FBQztRQUN6RCxXQUFNLEdBQWMsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUcxQyxDQUFDOzs7Ozs7SUFFTSxnQ0FBVTs7Ozs7SUFBakIsVUFBa0IsS0FBVSxFQUFFLFlBQWdCO1FBQzVDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQXJDLENBQXFDLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7O0lBRU0sMkJBQUs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVNLDZCQUFPOzs7O0lBQWQsVUFBZSxNQUF1QjtRQUF0QyxpQkFXQztRQVZDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVksZUFBZSxFQUFoQyxDQUFnQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDaEUsU0FBUyxDQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVNLHlCQUFHOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFTSwyQkFBSzs7O0lBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRU0sNEJBQU07OztJQUFiO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFTSw0QkFBTTs7OztJQUFiLFVBQWMsS0FBZTtRQUMzQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDWjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVNLDBCQUFJOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FDWCxJQUFJLENBQUMsUUFBUSxDQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQ3RFLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFTSw2QkFBTzs7OztJQUFkLFVBQWUsSUFBTztRQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQ0wsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FDakQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSwwQkFBSTs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUN0RSxDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRU0sNkJBQU87Ozs7SUFBZCxVQUFlLElBQU87UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztZQUMxRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFFTSwwQkFBSTs7OztJQUFYLFVBQVksTUFBdUI7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU0sOEJBQVE7Ozs7O0lBQWYsVUFBZ0IsUUFBZ0IsRUFBRSxNQUEyQjtRQUMzRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLEdBQUcsUUFBUSxHQUFHLHNCQUFzQixDQUFDLENBQUM7U0FDbEU7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVNLGdDQUFVOzs7O0lBQWpCLFVBQWtCLFFBQWdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFTSwrQkFBUzs7O0lBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLDhCQUFROzs7OztJQUFoQixVQUFpQixJQUFPO1FBQXhCLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLE9BQU87U0FDUjs7WUFDRyxlQUFlLEdBQXFCLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN6RCxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFBYixDQUFhLENBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUQsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6RDthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsRCxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVM7WUFDNUIsSUFBSSxTQUFTLEtBQUssS0FBSyxFQUFFO2dCQUN2QixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQzthQUM3QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sOEJBQVE7Ozs7O0lBQWhCLFVBQWlCLE1BQXVCO1FBQ3RDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUF0QixDQUFzQixDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDOzs7Ozs7SUFFTyxvQ0FBYzs7Ozs7SUFBdEIsVUFBdUIsSUFBTztRQUE5QixpQkFnQkM7UUFmQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakM7UUFFRCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07aUJBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssWUFBWSxlQUFlLEVBQWhDLENBQWdDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDaEUsU0FBUyxDQUFDO2dCQUNULElBQUksS0FBSSxDQUFDLFdBQVcsRUFBRTtvQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ2pDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7O0lBRU8sOEJBQVE7Ozs7OztJQUFoQixVQUFpQixJQUFPLEVBQUUsT0FBVztRQUFyQyxpQkFnQkM7UUFoQnlCLHdCQUFBLEVBQUEsV0FBVzs7WUFDN0IsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUksT0FBTyxLQUFLLEVBQUUsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLElBQUksQ0FDViwrQ0FBK0MsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUNoRSxDQUFDO2dCQUNGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNaO2lCQUFNO2dCQUNMLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUN2RDtZQUVELE9BQU87U0FDUjtRQUNELE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRU8sOEJBQVE7Ozs7O0lBQWhCLFVBQWlCLElBQU87O1lBQ2hCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPO1NBQ1I7UUFDRCxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Z0JBMU9GLFVBQVU7Ozs7Z0JBZGUsTUFBTTs7SUF5UGhDLGtCQUFDO0NBQUEsQUEzT0QsSUEyT0M7U0ExT1ksV0FBVzs7O0lBQ3RCLGdDQUE2Qzs7SUFDN0MsZ0NBQTZDOztJQUM3QyxrQ0FBaUQ7O0lBQ2pELDZCQUEwQzs7SUFDMUMsMkJBQTBDOztJQUMxQyw2QkFBMEM7O0lBQzFDLDhCQUEyQzs7SUFDM0Msc0NBQXdEOztJQUN4RCx3Q0FBMEQ7O0lBQzFELDhCQW9CRTs7SUFFRiw0QkFBdUI7O0lBQ3ZCLGtDQUFzQjs7SUFFdEIsOEJBQWlFOzs7OztJQUNqRSw2QkFBMEM7Ozs7O0lBRTlCLDZCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgbWVyZ2UgYXMgbWVyZ2VTdGF0aWMgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCBtYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHBvcFVwRmFkZVRpbWUgfSBmcm9tICcuLi9jb25pZyc7XG5pbXBvcnQgeyBJU3RlcE9wdGlvbiB9IGZyb20gJy4uL21vZGVscy9zdGVwLW9wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVG91ckFuY2hvckRpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZS90b3VyLWFuY2hvci5kaXJlY3RpdmUnO1xuXG5leHBvcnQgZW51bSBUb3VyU3RhdGUge1xuICBPRkYsXG4gIE9OLFxuICBQQVVTRURcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvdXJTZXJ2aWNlPFQgZXh0ZW5kcyBJU3RlcE9wdGlvbiA9IElTdGVwT3B0aW9uPiB7XG4gIHB1YmxpYyBzdGVwU2hvdyQ6IFN1YmplY3Q8VD4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgc3RlcEhpZGUkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGluaXRpYWxpemUkOiBTdWJqZWN0PFRbXT4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgc3RhcnQkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGVuZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBwYXVzZSQ6IFN1YmplY3Q8VD4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgcmVzdW1lJDogU3ViamVjdDxUPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBhbmNob3JSZWdpc3RlciQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBhbmNob3JVbnJlZ2lzdGVyJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGV2ZW50cyQ6IE9ic2VydmFibGU8eyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBhbnkgfT4gPSBtZXJnZVN0YXRpYyhcbiAgICB0aGlzLnN0ZXBTaG93JC5waXBlKG1hcCh2YWx1ZSA9PiAoe25hbWU6ICdzdGVwU2hvdycsIHZhbHVlfSkpKSxcbiAgICB0aGlzLnN0ZXBIaWRlJC5waXBlKG1hcCh2YWx1ZSA9PiAoe25hbWU6ICdzdGVwSGlkZScsIHZhbHVlfSkpKSxcbiAgICB0aGlzLmluaXRpYWxpemUkLnBpcGUobWFwKHZhbHVlID0+ICh7bmFtZTogJ2luaXRpYWxpemUnLCB2YWx1ZX0pKSksXG4gICAgdGhpcy5zdGFydCQucGlwZShtYXAodmFsdWUgPT4gKHtuYW1lOiAnc3RhcnQnLCB2YWx1ZX0pKSksXG4gICAgdGhpcy5lbmQkLnBpcGUobWFwKHZhbHVlID0+ICh7bmFtZTogJ2VuZCcsIHZhbHVlfSkpKSxcbiAgICB0aGlzLnBhdXNlJC5waXBlKG1hcCh2YWx1ZSA9PiAoe25hbWU6ICdwYXVzZScsIHZhbHVlfSkpKSxcbiAgICB0aGlzLnJlc3VtZSQucGlwZShtYXAodmFsdWUgPT4gKHtuYW1lOiAncmVzdW1lJywgdmFsdWV9KSkpLFxuICAgIHRoaXMuYW5jaG9yUmVnaXN0ZXIkLnBpcGUoXG4gICAgICBtYXAodmFsdWUgPT4gKHtcbiAgICAgICAgbmFtZTogJ2FuY2hvclJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pKVxuICAgICksXG4gICAgdGhpcy5hbmNob3JVbnJlZ2lzdGVyJC5waXBlKFxuICAgICAgbWFwKHZhbHVlID0+ICh7XG4gICAgICAgIG5hbWU6ICdhbmNob3JVbnJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pKVxuICAgIClcbiAgKTtcblxuICBwdWJsaWMgc3RlcHM6IFRbXSA9IFtdO1xuICBwdWJsaWMgY3VycmVudFN0ZXA6IFQ7XG5cbiAgcHVibGljIGFuY2hvcnM6IHsgW2FuY2hvcklkOiBzdHJpbmddOiBUb3VyQW5jaG9yRGlyZWN0aXZlIH0gPSB7fTtcbiAgcHJpdmF0ZSBzdGF0dXM6IFRvdXJTdGF0ZSA9IFRvdXJTdGF0ZS5PRkY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemUoc3RlcHM6IFRbXSwgc3RlcERlZmF1bHRzPzogVCk6IHZvaWQge1xuICAgIGlmIChzdGVwcyAmJiBzdGVwcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IFRvdXJTdGF0ZS5PRkY7XG4gICAgICB0aGlzLnN0ZXBzID0gc3RlcHMubWFwKHN0ZXAgPT4gT2JqZWN0LmFzc2lnbih7fSwgc3RlcERlZmF1bHRzLCBzdGVwKSk7XG4gICAgICB0aGlzLmluaXRpYWxpemUkLm5leHQodGhpcy5zdGVwcyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRBdCgwKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydEF0KHN0ZXBJZDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0dXMgPSBUb3VyU3RhdGUuT047XG4gICAgdGhpcy5nb1RvU3RlcCh0aGlzLmxvYWRTdGVwKHN0ZXBJZCkpO1xuICAgIHRoaXMuc3RhcnQkLm5leHQoKTtcbiAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCksIGZpcnN0KCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXApIHtcbiAgICAgICAgICB0aGlzLmhpZGVTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBlbmQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0dXMgPSBUb3VyU3RhdGUuT0ZGO1xuICAgIHRoaXMuaGlkZVN0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVuZCQubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdHVzID0gVG91clN0YXRlLlBBVVNFRDtcbiAgICB0aGlzLmhpZGVTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIHRoaXMucGF1c2UkLm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXN1bWUoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0dXMgPSBUb3VyU3RhdGUuT047XG4gICAgdGhpcy5zaG93U3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICB0aGlzLnJlc3VtZSQubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShwYXVzZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAocGF1c2UpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGFzTmV4dCh0aGlzLmN1cnJlbnRTdGVwKSkge1xuICAgICAgdGhpcy5nb1RvU3RlcChcbiAgICAgICAgdGhpcy5sb2FkU3RlcChcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwLm5leHRTdGVwIHx8IHRoaXMuc3RlcHMuaW5kZXhPZih0aGlzLmN1cnJlbnRTdGVwKSArIDFcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFzTmV4dChzdGVwOiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKCFzdGVwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NhblxcJ3QgZ2V0IG5leHQgc3RlcC4gTm8gY3VycmVudFN0ZXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBzdGVwLm5leHRTdGVwICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuc3RlcHMuaW5kZXhPZihzdGVwKSA8IHRoaXMuc3RlcHMubGVuZ3RoIC0gMVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcHJldigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXNQcmV2KHRoaXMuY3VycmVudFN0ZXApKSB7XG4gICAgICB0aGlzLmdvVG9TdGVwKFxuICAgICAgICB0aGlzLmxvYWRTdGVwKFxuICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXAucHJldlN0ZXAgfHwgdGhpcy5zdGVwcy5pbmRleE9mKHRoaXMuY3VycmVudFN0ZXApIC0gMVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNQcmV2KHN0ZXA6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoIXN0ZXApIHtcbiAgICAgIGNvbnNvbGUud2FybignQ2FuXFwndCBnZXQgcHJldmlvdXMgc3RlcC4gTm8gY3VycmVudFN0ZXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBzdGVwLnByZXZTdGVwICE9PSB1bmRlZmluZWQgfHwgdGhpcy5zdGVwcy5pbmRleE9mKHN0ZXApID4gMDtcbiAgfVxuXG4gIHB1YmxpYyBnb3RvKHN0ZXBJZDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5nb1RvU3RlcCh0aGlzLmxvYWRTdGVwKHN0ZXBJZCkpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKGFuY2hvcklkOiBzdHJpbmcsIGFuY2hvcjogVG91ckFuY2hvckRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuY2hvcnNbYW5jaG9ySWRdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuY2hvcklkICcgKyBhbmNob3JJZCArICcgYWxyZWFkeSByZWdpc3RlcmVkIScpO1xuICAgIH1cbiAgICB0aGlzLmFuY2hvcnNbYW5jaG9ySWRdID0gYW5jaG9yO1xuICAgIHRoaXMuYW5jaG9yUmVnaXN0ZXIkLm5leHQoYW5jaG9ySWQpO1xuICB9XG5cbiAgcHVibGljIHVucmVnaXN0ZXIoYW5jaG9ySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLmFuY2hvcnNbYW5jaG9ySWRdO1xuICAgIHRoaXMuYW5jaG9yVW5yZWdpc3RlciQubmV4dChhbmNob3JJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3RhdHVzKCk6IFRvdXJTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnb1RvU3RlcChzdGVwOiBUKTogdm9pZCB7XG4gICAgaWYgKCFzdGVwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NhblxcJ3QgZ28gdG8gbm9uLWV4aXN0ZW50IHN0ZXAnKTtcbiAgICAgIHRoaXMuZW5kKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBuYXZpZ2F0ZVByb21pc2U6IFByb21pc2U8Ym9vbGVhbj4gPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+XG4gICAgICByZXNvbHZlKHRydWUpXG4gICAgKTtcbiAgICBpZiAoc3RlcC5yb3V0ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzdGVwLnJvdXRlID09PSAnc3RyaW5nJykge1xuICAgICAgbmF2aWdhdGVQcm9taXNlID0gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChzdGVwLnJvdXRlKTtcbiAgICB9IGVsc2UgaWYgKHN0ZXAucm91dGUgJiYgQXJyYXkuaXNBcnJheShzdGVwLnJvdXRlKSkge1xuICAgICAgbmF2aWdhdGVQcm9taXNlID0gdGhpcy5yb3V0ZXIubmF2aWdhdGUoc3RlcC5yb3V0ZSk7XG4gICAgfVxuICAgIG5hdmlnYXRlUHJvbWlzZS50aGVuKG5hdmlnYXRlZCA9PiB7XG4gICAgICBpZiAobmF2aWdhdGVkICE9PSBmYWxzZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0Q3VycmVudFN0ZXAoc3RlcCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkU3RlcChzdGVwSWQ6IG51bWJlciB8IHN0cmluZyk6IFQge1xuICAgIGlmICh0eXBlb2Ygc3RlcElkID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHRoaXMuc3RlcHNbc3RlcElkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RlcHMuZmluZChzdGVwID0+IHN0ZXAuc3RlcElkID09PSBzdGVwSWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3VycmVudFN0ZXAoc3RlcDogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICB0aGlzLmhpZGVTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHN0ZXA7XG4gICAgICB0aGlzLnNob3dTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCksIGZpcnN0KCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgdGhpcy5jdXJyZW50U3RlcCA/IHBvcFVwRmFkZVRpbWUgOiAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1N0ZXAoc3RlcDogVCwgYXR0ZW1wdCA9IDApOiB2b2lkIHtcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLmFuY2hvcnNbc3RlcCAmJiBzdGVwLmFuY2hvcklkXTtcbiAgICBpZiAoIWFuY2hvcikge1xuICAgICAgaWYgKGF0dGVtcHQgPT09IDIwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnQ2FuXFwndCBhdHRhY2ggdG8gdW5yZWdpc3RlcmVkIGFuY2hvciB3aXRoIGlkICcgKyBzdGVwLmFuY2hvcklkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2hvd1N0ZXAoc3RlcCwgYXR0ZW1wdCsrKSwgMTAwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbmNob3Iuc2hvd1RvdXJTdGVwKHN0ZXApO1xuICAgIHRoaXMuc3RlcFNob3ckLm5leHQoc3RlcCk7XG4gIH1cblxuICBwcml2YXRlIGhpZGVTdGVwKHN0ZXA6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLmFuY2hvcnNbc3RlcCAmJiBzdGVwLmFuY2hvcklkXTtcbiAgICBpZiAoIWFuY2hvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbmNob3IuaGlkZVRvdXJTdGVwKCk7XG4gICAgdGhpcy5zdGVwSGlkZSQubmV4dChzdGVwKTtcbiAgfVxufVxuIl19