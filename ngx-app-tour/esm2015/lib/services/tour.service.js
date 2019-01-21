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
const TourState = {
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
export class TourService {
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
        this.events$ = mergeStatic(this.stepShow$.pipe(map(value => ({ name: 'stepShow', value }))), this.stepHide$.pipe(map(value => ({ name: 'stepHide', value }))), this.initialize$.pipe(map(value => ({ name: 'initialize', value }))), this.start$.pipe(map(value => ({ name: 'start', value }))), this.end$.pipe(map(value => ({ name: 'end', value }))), this.pause$.pipe(map(value => ({ name: 'pause', value }))), this.resume$.pipe(map(value => ({ name: 'resume', value }))), this.anchorRegister$.pipe(map(value => ({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFwcC10b3VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RvdXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTFELE9BQU8sRUFBRSxPQUFPLEVBQWMsS0FBSyxJQUFJLFdBQVcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7SUFLdkMsTUFBRztJQUNILEtBQUU7SUFDRixTQUFNOzs7Ozs7Ozs7QUFJUixNQUFNLE9BQU8sV0FBVzs7OztJQXNDdEIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFyQzNCLGNBQVMsR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLGNBQVMsR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLGdCQUFXLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUMsV0FBTSxHQUFlLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkMsU0FBSSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ25DLFdBQU0sR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ25DLFlBQU8sR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLG9CQUFlLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakQsc0JBQWlCLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkQsWUFBTyxHQUE2QyxXQUFXLENBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDdkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNaLElBQUksRUFBRSxnQkFB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LENBQUMsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsSUFBTzs7Y0FDaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU87U0FDUjtRQUNELE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUExT0YsVUFBVTs7OztZQWRlLE1BQU07Ozs7SUFnQjlCLGdDQUE2Qzs7SUFDN0MsZ0NBQTZDOztJQUM3QyxrQ0FBaUQ7O0lBQ2pELDZCQUEwQzs7SUFDMUMsMkJBQTBDOztJQUMxQyw2QkFBMEM7O0lBQzFDLDhCQUEyQzs7SUFDM0Msc0NBQXdEOztJQUN4RCx3Q0FBMEQ7O0lBQzFELDhCQW9CRTs7SUFFRiw0QkFBdUI7O0lBQ3ZCLGtDQUFzQjs7SUFFdEIsOEJBQWlFOzs7OztJQUNqRSw2QkFBMEM7Ozs7O0lBRTlCLDZCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgbWVyZ2UgYXMgbWVyZ2VTdGF0aWMgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCBtYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHBvcFVwRmFkZVRpbWUgfSBmcm9tICcuLi9jb25pZyc7XG5pbXBvcnQgeyBJU3RlcE9wdGlvbiB9IGZyb20gJy4uL21vZGVscy9zdGVwLW9wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVG91ckFuY2hvckRpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZS90b3VyLWFuY2hvci5kaXJlY3RpdmUnO1xuXG5leHBvcnQgZW51bSBUb3VyU3RhdGUge1xuICBPRkYsXG4gIE9OLFxuICBQQVVTRURcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvdXJTZXJ2aWNlPFQgZXh0ZW5kcyBJU3RlcE9wdGlvbiA9IElTdGVwT3B0aW9uPiB7XG4gIHB1YmxpYyBzdGVwU2hvdyQ6IFN1YmplY3Q8VD4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgc3RlcEhpZGUkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGluaXRpYWxpemUkOiBTdWJqZWN0PFRbXT4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgc3RhcnQkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGVuZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBwYXVzZSQ6IFN1YmplY3Q8VD4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgcmVzdW1lJDogU3ViamVjdDxUPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBhbmNob3JSZWdpc3RlciQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBhbmNob3JVbnJlZ2lzdGVyJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGV2ZW50cyQ6IE9ic2VydmFibGU8eyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBhbnkgfT4gPSBtZXJnZVN0YXRpYyhcbiAgICB0aGlzLnN0ZXBTaG93JC5waXBlKG1hcCh2YWx1ZSA9PiAoe25hbWU6ICdzdGVwU2hvdycsIHZhbHVlfSkpKSxcbiAgICB0aGlzLnN0ZXBIaWRlJC5waXBlKG1hcCh2YWx1ZSA9PiAoe25hbWU6ICdzdGVwSGlkZScsIHZhbHVlfSkpKSxcbiAgICB0aGlzLmluaXRpYWxpemUkLnBpcGUobWFwKHZhbHVlID0+ICh7bmFtZTogJ2luaXRpYWxpemUnLCB2YWx1ZX0pKSksXG4gICAgdGhpcy5zdGFydCQucGlwZShtYXAodmFsdWUgPT4gKHtuYW1lOiAnc3RhcnQnLCB2YWx1ZX0pKSksXG4gICAgdGhpcy5lbmQkLnBpcGUobWFwKHZhbHVlID0+ICh7bmFtZTogJ2VuZCcsIHZhbHVlfSkpKSxcbiAgICB0aGlzLnBhdXNlJC5waXBlKG1hcCh2YWx1ZSA9PiAoe25hbWU6ICdwYXVzZScsIHZhbHVlfSkpKSxcbiAgICB0aGlzLnJlc3VtZSQucGlwZShtYXAodmFsdWUgPT4gKHtuYW1lOiAncmVzdW1lJywgdmFsdWV9KSkpLFxuICAgIHRoaXMuYW5jaG9yUmVnaXN0ZXIkLnBpcGUoXG4gICAgICBtYXAodmFsdWUgPT4gKHtcbiAgICAgICAgbmFtZTogJ2FuY2hvclJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pKVxuICAgICksXG4gICAgdGhpcy5hbmNob3JVbnJlZ2lzdGVyJC5waXBlKFxuICAgICAgbWFwKHZhbHVlID0+ICh7XG4gICAgICAgIG5hbWU6ICdhbmNob3JVbnJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pKVxuICAgIClcbiAgKTtcblxuICBwdWJsaWMgc3RlcHM6IFRbXSA9IFtdO1xuICBwdWJsaWMgY3VycmVudFN0ZXA6IFQ7XG5cbiAgcHVibGljIGFuY2hvcnM6IHsgW2FuY2hvcklkOiBzdHJpbmddOiBUb3VyQW5jaG9yRGlyZWN0aXZlIH0gPSB7fTtcbiAgcHJpdmF0ZSBzdGF0dXM6IFRvdXJTdGF0ZSA9IFRvdXJTdGF0ZS5PRkY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemUoc3RlcHM6IFRbXSwgc3RlcERlZmF1bHRzPzogVCk6IHZvaWQge1xuICAgIGlmIChzdGVwcyAmJiBzdGVwcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IFRvdXJTdGF0ZS5PRkY7XG4gICAgICB0aGlzLnN0ZXBzID0gc3RlcHMubWFwKHN0ZXAgPT4gT2JqZWN0LmFzc2lnbih7fSwgc3RlcERlZmF1bHRzLCBzdGVwKSk7XG4gICAgICB0aGlzLmluaXRpYWxpemUkLm5leHQodGhpcy5zdGVwcyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRBdCgwKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydEF0KHN0ZXBJZDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0dXMgPSBUb3VyU3RhdGUuT047XG4gICAgdGhpcy5nb1RvU3RlcCh0aGlzLmxvYWRTdGVwKHN0ZXBJZCkpO1xuICAgIHRoaXMuc3RhcnQkLm5leHQoKTtcbiAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCksIGZpcnN0KCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXApIHtcbiAgICAgICAgICB0aGlzLmhpZGVTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBlbmQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0dXMgPSBUb3VyU3RhdGUuT0ZGO1xuICAgIHRoaXMuaGlkZVN0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVuZCQubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdHVzID0gVG91clN0YXRlLlBBVVNFRDtcbiAgICB0aGlzLmhpZGVTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIHRoaXMucGF1c2UkLm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXN1bWUoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0dXMgPSBUb3VyU3RhdGUuT047XG4gICAgdGhpcy5zaG93U3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICB0aGlzLnJlc3VtZSQubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShwYXVzZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAocGF1c2UpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGFzTmV4dCh0aGlzLmN1cnJlbnRTdGVwKSkge1xuICAgICAgdGhpcy5nb1RvU3RlcChcbiAgICAgICAgdGhpcy5sb2FkU3RlcChcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwLm5leHRTdGVwIHx8IHRoaXMuc3RlcHMuaW5kZXhPZih0aGlzLmN1cnJlbnRTdGVwKSArIDFcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFzTmV4dChzdGVwOiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKCFzdGVwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NhblxcJ3QgZ2V0IG5leHQgc3RlcC4gTm8gY3VycmVudFN0ZXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBzdGVwLm5leHRTdGVwICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuc3RlcHMuaW5kZXhPZihzdGVwKSA8IHRoaXMuc3RlcHMubGVuZ3RoIC0gMVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcHJldigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXNQcmV2KHRoaXMuY3VycmVudFN0ZXApKSB7XG4gICAgICB0aGlzLmdvVG9TdGVwKFxuICAgICAgICB0aGlzLmxvYWRTdGVwKFxuICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXAucHJldlN0ZXAgfHwgdGhpcy5zdGVwcy5pbmRleE9mKHRoaXMuY3VycmVudFN0ZXApIC0gMVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNQcmV2KHN0ZXA6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoIXN0ZXApIHtcbiAgICAgIGNvbnNvbGUud2FybignQ2FuXFwndCBnZXQgcHJldmlvdXMgc3RlcC4gTm8gY3VycmVudFN0ZXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBzdGVwLnByZXZTdGVwICE9PSB1bmRlZmluZWQgfHwgdGhpcy5zdGVwcy5pbmRleE9mKHN0ZXApID4gMDtcbiAgfVxuXG4gIHB1YmxpYyBnb3RvKHN0ZXBJZDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5nb1RvU3RlcCh0aGlzLmxvYWRTdGVwKHN0ZXBJZCkpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKGFuY2hvcklkOiBzdHJpbmcsIGFuY2hvcjogVG91ckFuY2hvckRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuY2hvcnNbYW5jaG9ySWRdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuY2hvcklkICcgKyBhbmNob3JJZCArICcgYWxyZWFkeSByZWdpc3RlcmVkIScpO1xuICAgIH1cbiAgICB0aGlzLmFuY2hvcnNbYW5jaG9ySWRdID0gYW5jaG9yO1xuICAgIHRoaXMuYW5jaG9yUmVnaXN0ZXIkLm5leHQoYW5jaG9ySWQpO1xuICB9XG5cbiAgcHVibGljIHVucmVnaXN0ZXIoYW5jaG9ySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLmFuY2hvcnNbYW5jaG9ySWRdO1xuICAgIHRoaXMuYW5jaG9yVW5yZWdpc3RlciQubmV4dChhbmNob3JJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3RhdHVzKCk6IFRvdXJTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnb1RvU3RlcChzdGVwOiBUKTogdm9pZCB7XG4gICAgaWYgKCFzdGVwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NhblxcJ3QgZ28gdG8gbm9uLWV4aXN0ZW50IHN0ZXAnKTtcbiAgICAgIHRoaXMuZW5kKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBuYXZpZ2F0ZVByb21pc2U6IFByb21pc2U8Ym9vbGVhbj4gPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+XG4gICAgICByZXNvbHZlKHRydWUpXG4gICAgKTtcbiAgICBpZiAoc3RlcC5yb3V0ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzdGVwLnJvdXRlID09PSAnc3RyaW5nJykge1xuICAgICAgbmF2aWdhdGVQcm9taXNlID0gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChzdGVwLnJvdXRlKTtcbiAgICB9IGVsc2UgaWYgKHN0ZXAucm91dGUgJiYgQXJyYXkuaXNBcnJheShzdGVwLnJvdXRlKSkge1xuICAgICAgbmF2aWdhdGVQcm9taXNlID0gdGhpcy5yb3V0ZXIubmF2aWdhdGUoc3RlcC5yb3V0ZSk7XG4gICAgfVxuICAgIG5hdmlnYXRlUHJvbWlzZS50aGVuKG5hdmlnYXRlZCA9PiB7XG4gICAgICBpZiAobmF2aWdhdGVkICE9PSBmYWxzZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0Q3VycmVudFN0ZXAoc3RlcCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkU3RlcChzdGVwSWQ6IG51bWJlciB8IHN0cmluZyk6IFQge1xuICAgIGlmICh0eXBlb2Ygc3RlcElkID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHRoaXMuc3RlcHNbc3RlcElkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RlcHMuZmluZChzdGVwID0+IHN0ZXAuc3RlcElkID09PSBzdGVwSWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3VycmVudFN0ZXAoc3RlcDogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICB0aGlzLmhpZGVTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHN0ZXA7XG4gICAgICB0aGlzLnNob3dTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCksIGZpcnN0KCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgdGhpcy5jdXJyZW50U3RlcCA/IHBvcFVwRmFkZVRpbWUgOiAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1N0ZXAoc3RlcDogVCwgYXR0ZW1wdCA9IDApOiB2b2lkIHtcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLmFuY2hvcnNbc3RlcCAmJiBzdGVwLmFuY2hvcklkXTtcbiAgICBpZiAoIWFuY2hvcikge1xuICAgICAgaWYgKGF0dGVtcHQgPT09IDIwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnQ2FuXFwndCBhdHRhY2ggdG8gdW5yZWdpc3RlcmVkIGFuY2hvciB3aXRoIGlkICcgKyBzdGVwLmFuY2hvcklkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2hvd1N0ZXAoc3RlcCwgYXR0ZW1wdCsrKSwgMTAwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbmNob3Iuc2hvd1RvdXJTdGVwKHN0ZXApO1xuICAgIHRoaXMuc3RlcFNob3ckLm5leHQoc3RlcCk7XG4gIH1cblxuICBwcml2YXRlIGhpZGVTdGVwKHN0ZXA6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLmFuY2hvcnNbc3RlcCAmJiBzdGVwLmFuY2hvcklkXTtcbiAgICBpZiAoIWFuY2hvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbmNob3IuaGlkZVRvdXJTdGVwKCk7XG4gICAgdGhpcy5zdGVwSGlkZSQubmV4dChzdGVwKTtcbiAgfVxufVxuIl19