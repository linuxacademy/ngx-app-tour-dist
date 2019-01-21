/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, EventEmitter, HostListener } from '@angular/core';
import { fadeAnimation } from '../../ng-zorro/core/animation/fade-animations';
import { NzPopoverComponent } from '../../ng-zorro/popover';
import { TourService, TourState } from '../../services/tour.service';
export class TourStepComponent extends NzPopoverComponent {
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
if (false) {
    /** @type {?} */
    TourStepComponent.prototype.stepTemplate;
    /** @type {?} */
    TourStepComponent.prototype._hasBackdrop;
    /** @type {?} */
    TourStepComponent.prototype.step;
    /** @type {?} */
    TourStepComponent.prototype.closed$;
    /** @type {?} */
    TourStepComponent.prototype.closeSubscription;
    /** @type {?} */
    TourStepComponent.prototype.tourService;
    /** @type {?} */
    TourStepComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1hcHAtdG91ci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvdXItc3RlcC90b3VyLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHcEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFRckUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGtCQUFrQjs7Ozs7SUFPdkQsWUFBbUIsV0FBd0IsRUFBUyxHQUFzQjtRQUN4RSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFETSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTDFFLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFNBQUksR0FBZ0IsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU1sRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbEUsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQU9NLFdBQVc7UUFDaEIsSUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxFQUFFLEVBQzdDO1lBQ0EsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7SUFHTSxlQUFlO1FBQ3BCLElBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxTQUFTLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUN0RDtZQUNBLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7O0lBR00sY0FBYztRQUNuQixJQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssU0FBUyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFDdEQ7WUFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsZ3ZHQUF5QztnQkFDekMsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzVCOzs7O1lBUFEsV0FBVztZQUxYLGlCQUFpQjs7OzBCQXNDdkIsWUFBWSxTQUFDLHVCQUF1Qjs4QkFTcEMsWUFBWSxTQUFDLDJCQUEyQjs2QkFVeEMsWUFBWSxTQUFDLDBCQUEwQjs7OztJQTNDeEMseUNBQWE7O0lBQ2IseUNBQW9COztJQUNwQixpQ0FBdUI7O0lBQ3ZCLG9DQUFvRDs7SUFDcEQsOENBQWdDOztJQUVwQix3Q0FBK0I7O0lBQUUsZ0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJU3RlcE9wdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9zdGVwLW9wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL25nLXpvcnJvL2NvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOelBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9uZy16b3Jyby9wb3BvdmVyJztcbmltcG9ydCB7IFRvdXJTZXJ2aWNlLCBUb3VyU3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b3VyLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10b3VyLXN0ZXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG91ci1zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW2ZhZGVBbmltYXRpb25dXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJTdGVwQ29tcG9uZW50IGV4dGVuZHMgTnpQb3BvdmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RlcFRlbXBsYXRlO1xuICBfaGFzQmFja2Ryb3AgPSB0cnVlO1xuICBzdGVwOiBJU3RlcE9wdGlvbiA9IHt9O1xuICBjbG9zZWQkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNsb3NlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRvdXJTZXJ2aWNlOiBUb3VyU2VydmljZSwgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihjZHIpO1xuXG4gICAgdGhpcy5jbG9zZVN1YnNjcmlwdGlvbiA9IHRoaXMubnpWaXNpYmxlQ2hhbmdlLnN1YnNjcmliZShpc1Zpc2libGUgPT4ge1xuICAgICAgaWYgKCFpc1Zpc2libGUpIHtcbiAgICAgICAgdGhpcy5jbG9zZWQkLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgaG90IGtleXMgZm9yIGNvbnRyb2xsaW5nIHRoZSB0b3VyIHdpdGggdGhlIGtleWJvYXJkXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5Fc2NhcGUnKVxuICBwdWJsaWMgb25Fc2NhcGVLZXkoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy50b3VyU2VydmljZS5nZXRTdGF0dXMoKSA9PT0gVG91clN0YXRlLk9OXG4gICAgKSB7XG4gICAgICB0aGlzLnRvdXJTZXJ2aWNlLmVuZCgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkFycm93UmlnaHQnKVxuICBwdWJsaWMgb25BcnJvd1JpZ2h0S2V5KCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMudG91clNlcnZpY2UuZ2V0U3RhdHVzKCkgPT09IFRvdXJTdGF0ZS5PTiAmJlxuICAgICAgdGhpcy50b3VyU2VydmljZS5oYXNOZXh0KHRoaXMudG91clNlcnZpY2UuY3VycmVudFN0ZXApXG4gICAgKSB7XG4gICAgICB0aGlzLnRvdXJTZXJ2aWNlLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5BcnJvd0xlZnQnKVxuICBwdWJsaWMgb25BcnJvd0xlZnRLZXkoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy50b3VyU2VydmljZS5nZXRTdGF0dXMoKSA9PT0gVG91clN0YXRlLk9OICYmXG4gICAgICB0aGlzLnRvdXJTZXJ2aWNlLmhhc1ByZXYodGhpcy50b3VyU2VydmljZS5jdXJyZW50U3RlcClcbiAgICApIHtcbiAgICAgIHRoaXMudG91clNlcnZpY2UucHJldigpO1xuICAgIH1cbiAgfVxufVxuIl19