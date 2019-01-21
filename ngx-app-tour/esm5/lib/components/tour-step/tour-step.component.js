/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, HostListener } from '@angular/core';
import { fadeAnimation } from '../../ng-zorro/core/animation/fade-animations';
import { NzPopoverComponent } from '../../ng-zorro/popover';
import { TourService, TourState } from '../../services/tour.service';
var TourStepComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TourStepComponent, _super);
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
export { TourStepComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1hcHAtdG91ci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvdXItc3RlcC90b3VyLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBR3BHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3JFO0lBS3VDLDZDQUFrQjtJQU92RCwyQkFBbUIsV0FBd0IsRUFBUyxHQUFzQjtRQUExRSxZQUNFLGtCQUFNLEdBQUcsQ0FBQyxTQU9YO1FBUmtCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFMMUUsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBSSxHQUFnQixFQUFFLENBQUM7UUFDdkIsYUFBTyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTWxELEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFNBQVM7WUFDL0QsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBR0Q7O09BRUc7Ozs7O0lBRUksdUNBQVc7Ozs7SUFEbEI7UUFFRSxJQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssU0FBUyxDQUFDLEVBQUUsRUFDN0M7WUFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7OztJQUdNLDJDQUFlOzs7SUFEdEI7UUFFRSxJQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssU0FBUyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFDdEQ7WUFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7OztJQUdNLDBDQUFjOzs7SUFEckI7UUFFRSxJQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssU0FBUyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFDdEQ7WUFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZ3ZHQUF5QztvQkFDekMsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUM1Qjs7OztnQkFQUSxXQUFXO2dCQUxYLGlCQUFpQjs7OzhCQXNDdkIsWUFBWSxTQUFDLHVCQUF1QjtrQ0FTcEMsWUFBWSxTQUFDLDJCQUEyQjtpQ0FVeEMsWUFBWSxTQUFDLDBCQUEwQjs7SUFTMUMsd0JBQUM7Q0FBQSxBQTFERCxDQUt1QyxrQkFBa0IsR0FxRHhEO1NBckRZLGlCQUFpQjs7O0lBQzVCLHlDQUFhOztJQUNiLHlDQUFvQjs7SUFDcEIsaUNBQXVCOztJQUN2QixvQ0FBb0Q7O0lBQ3BELDhDQUFnQzs7SUFFcEIsd0NBQStCOztJQUFFLGdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSVN0ZXBPcHRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvc3RlcC1vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IGZhZGVBbmltYXRpb24gfSBmcm9tICcuLi8uLi9uZy16b3Jyby9jb3JlL2FuaW1hdGlvbi9mYWRlLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTnpQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbmctem9ycm8vcG9wb3Zlcic7XG5pbXBvcnQgeyBUb3VyU2VydmljZSwgVG91clN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdG91ci5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtdG91ci1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvdXItc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtmYWRlQW5pbWF0aW9uXVxufSlcbmV4cG9ydCBjbGFzcyBUb3VyU3RlcENvbXBvbmVudCBleHRlbmRzIE56UG9wb3ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHN0ZXBUZW1wbGF0ZTtcbiAgX2hhc0JhY2tkcm9wID0gdHJ1ZTtcbiAgc3RlcDogSVN0ZXBPcHRpb24gPSB7fTtcbiAgY2xvc2VkJDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0b3VyU2VydmljZTogVG91clNlcnZpY2UsIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoY2RyKTtcblxuICAgIHRoaXMuY2xvc2VTdWJzY3JpcHRpb24gPSB0aGlzLm56VmlzaWJsZUNoYW5nZS5zdWJzY3JpYmUoaXNWaXNpYmxlID0+IHtcbiAgICAgIGlmICghaXNWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMuY2xvc2VkJC5lbWl0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIGhvdCBrZXlzIGZvciBjb250cm9sbGluZyB0aGUgdG91ciB3aXRoIHRoZSBrZXlib2FyZFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24uRXNjYXBlJylcbiAgcHVibGljIG9uRXNjYXBlS2V5KCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMudG91clNlcnZpY2UuZ2V0U3RhdHVzKCkgPT09IFRvdXJTdGF0ZS5PTlxuICAgICkge1xuICAgICAgdGhpcy50b3VyU2VydmljZS5lbmQoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5BcnJvd1JpZ2h0JylcbiAgcHVibGljIG9uQXJyb3dSaWdodEtleSgpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnRvdXJTZXJ2aWNlLmdldFN0YXR1cygpID09PSBUb3VyU3RhdGUuT04gJiZcbiAgICAgIHRoaXMudG91clNlcnZpY2UuaGFzTmV4dCh0aGlzLnRvdXJTZXJ2aWNlLmN1cnJlbnRTdGVwKVxuICAgICkge1xuICAgICAgdGhpcy50b3VyU2VydmljZS5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24uQXJyb3dMZWZ0JylcbiAgcHVibGljIG9uQXJyb3dMZWZ0S2V5KCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMudG91clNlcnZpY2UuZ2V0U3RhdHVzKCkgPT09IFRvdXJTdGF0ZS5PTiAmJlxuICAgICAgdGhpcy50b3VyU2VydmljZS5oYXNQcmV2KHRoaXMudG91clNlcnZpY2UuY3VycmVudFN0ZXApXG4gICAgKSB7XG4gICAgICB0aGlzLnRvdXJTZXJ2aWNlLnByZXYoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==