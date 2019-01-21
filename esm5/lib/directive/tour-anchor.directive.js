/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, HostBinding, Injector, Input, Renderer2, ViewContainerRef } from '@angular/core';
import withinviewport from 'withinviewport';
import { first } from 'rxjs/operators';
import { TourBackdropService } from '../services/tour-backdrop.service';
import { TourStepComponent } from '../components/tour-step/tour-step.component';
import { TourService, TourState } from '../services/tour.service';
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
export { TourAnchorDirective };
if (false) {
    /** @type {?} */
    TourAnchorDirective.prototype.tourAnchor;
    /** @type {?} */
    TourAnchorDirective.prototype.tourStep;
    /** @type {?} */
    TourAnchorDirective.prototype.menuCloseSubscription;
    /** @type {?} */
    TourAnchorDirective.prototype.isActive;
    /** @type {?} */
    TourAnchorDirective.prototype.enableRippleEffect;
    /** @type {?} */
    TourAnchorDirective.prototype.allowInteractions;
    /** @type {?} */
    TourAnchorDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TourAnchorDirective.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    TourAnchorDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    TourAnchorDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    TourAnchorDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    TourAnchorDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    TourAnchorDirective.prototype.tourService;
    /**
     * @type {?}
     * @private
     */
    TourAnchorDirective.prototype.tourBackdrop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFwcC10b3VyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS90b3VyLWFuY2hvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLEtBQUssRUFFRyxTQUFTLEVBQ2pCLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLGNBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRTtJQVlFLDZCQUNTLFVBQXNCLEVBQ3JCLHdCQUFrRCxFQUNsRCxRQUFrQixFQUNsQixRQUFtQixFQUNuQixhQUErQixFQUMvQixRQUFrQyxFQUNsQyxXQUF3QixFQUN4QixZQUFpQztRQVBsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFYQSx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBWTFFLENBQUM7Ozs7SUFFTSxz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R0FBRyxNQUFNLENBQUM7U0FDeEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOztnQkFoSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFwQkMsVUFBVTtnQkFGVix3QkFBd0I7Z0JBSXhCLFFBQVE7Z0JBR0EsU0FBUztnQkFDakIsZ0JBQWdCO2dCQVJoQix3QkFBd0I7Z0JBa0JqQixXQUFXO2dCQUhYLG1CQUFtQjs7OzZCQVN6QixLQUFLOzJCQUlMLFdBQVcsU0FBQyw2QkFBNkI7cUNBQ3pDLFdBQVcsU0FBQyxxQkFBcUI7b0NBQ2pDLFdBQVcsU0FBQywwQkFBMEI7O0lBdUd6QywwQkFBQztDQUFBLEFBakhELElBaUhDO1NBOUdZLG1CQUFtQjs7O0lBQzlCLHlDQUFtQzs7SUFDbkMsdUNBQW1DOztJQUNuQyxvREFBMkM7O0lBRTNDLHVDQUFxRTs7SUFDckUsaURBQXNFOztJQUN0RSxnREFBMEU7O0lBR3hFLHlDQUE2Qjs7Ozs7SUFDN0IsdURBQTBEOzs7OztJQUMxRCx1Q0FBMEI7Ozs7O0lBQzFCLHVDQUEyQjs7Ozs7SUFDM0IsNENBQXVDOzs7OztJQUN2Qyx1Q0FBMEM7Ozs7O0lBQzFDLDBDQUFnQzs7Ozs7SUFDaEMsMkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LCBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB3aXRoaW52aWV3cG9ydCBmcm9tICd3aXRoaW52aWV3cG9ydCc7XG5cblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUb3VyQmFja2Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG91ci1iYWNrZHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7IElTdGVwT3B0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3N0ZXAtb3B0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUb3VyU3RlcENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdG91ci1zdGVwL3RvdXItc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG91clNlcnZpY2UsIFRvdXJTdGF0ZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvdXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b3VyQW5jaG9yXSdcbn0pXG5leHBvcnQgY2xhc3MgVG91ckFuY2hvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIHRvdXJBbmNob3I6IHN0cmluZztcbiAgcHVibGljIHRvdXJTdGVwOiBUb3VyU3RlcENvbXBvbmVudDtcbiAgcHVibGljIG1lbnVDbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudG91cmFuY2hvci0taXMtYWN0aXZlJykgcHVibGljIGlzQWN0aXZlOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJpcHBsZS1lZmZlY3QnKSBwdWJsaWMgZW5hYmxlUmlwcGxlRWZmZWN0ID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWxsb3ctaW50ZXJhY3Rpb25zJykgcHVibGljIGFsbG93SW50ZXJhY3Rpb25zID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHRvdXJTZXJ2aWNlOiBUb3VyU2VydmljZSxcbiAgICBwcml2YXRlIHRvdXJCYWNrZHJvcDogVG91ckJhY2tkcm9wU2VydmljZVxuICApIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFRvdXJTdGVwQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoVG91clN0ZXBDb21wb25lbnQpO1xuICAgIGNvbnN0IHRvdXJDb21wb25lbnQgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgIHRoaXMudG91clN0ZXAgPSB0b3VyQ29tcG9uZW50Lmluc3RhbmNlO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdG91ckNvbXBvbmVudC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLnRvdXJTdGVwLnNldE92ZXJsYXlPcmlnaW4odGhpcyk7XG5cbiAgICB0aGlzLnRvdXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvciwgdGhpcyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU2VydmljZS51bnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvcik7XG4gIH1cblxuICBwdWJsaWMgc2hvd1RvdXJTdGVwKHN0ZXA6IElTdGVwT3B0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy50b3VyU3RlcC5zdGVwID0gc3RlcDtcbiAgICB0aGlzLnRvdXJTdGVwLm56UGxhY2VtZW50ID0gc3RlcC5wbGFjZW1lbnQ7XG4gICAgdGhpcy50b3VyU3RlcC5zdGVwVGVtcGxhdGUgPSBzdGVwLnN0ZXBUZW1wbGF0ZTtcblxuICAgIGlmICghc3RlcC5wcmV2ZW50U2Nyb2xsaW5nKSB7XG4gICAgICBpZiAoIXdpdGhpbnZpZXdwb3J0KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7c2lkZXM6ICdib3R0b20nfSkpIHtcbiAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXdpdGhpbnZpZXdwb3J0KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7c2lkZXM6ICdsZWZ0IHRvcCByaWdodCd9KVxuICAgICAgKSB7XG4gICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW5hYmxlUmlwcGxlRWZmZWN0ID0gc3RlcC5lbmFibGVSaXBwbGVFZmZlY3Q7XG4gICAgdGhpcy5hbGxvd0ludGVyYWN0aW9ucyA9IHN0ZXAuYWxsb3dJbnRlcmFjdGlvbnM7XG5cbiAgICBpZiAoc3RlcC5uZXh0T24pIHtcbiAgICAgIHRoaXMuYWxsb3dJbnRlcmFjdGlvbnMgPSB0cnVlO1xuXG4gICAgICBjb25zdCBvbk5leHQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoc3RlcC5uZXh0T24sIG9uTmV4dCk7XG4gICAgICAgIHRoaXMudG91clNlcnZpY2UubmV4dCgpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihzdGVwLm5leHRPbiwgb25OZXh0KTtcbiAgICB9XG5cbiAgICB0aGlzLnRvdXJTdGVwLnNob3coKTtcblxuICAgIGlmICghc3RlcC5kaXNhYmxlQmFja2Ryb3ApIHtcbiAgICAgIHRoaXMudG91ckJhY2tkcm9wLnNob3codGhpcy5lbGVtZW50UmVmLCBzdGVwLmJhY2tkcm9wUmFkaXVzLCBzdGVwLmJhY2tkcm9wQ29sb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdXJCYWNrZHJvcC5jbG9zZSgpO1xuICAgIH1cblxuICAgIGlmIChzdGVwLmVuYWJsZVJpcHBsZUVmZmVjdCkge1xuICAgICAgY29uc3QgcmlwcGxlQ29sb3IgPSBzdGVwLnJpcHBsZUNvbG9yID8gc3RlcC5yaXBwbGVDb2xvciA6ICdyZ2JhKDAsIDAsIDAsIDAuNyknO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gYCR7cmlwcGxlQ29sb3J9IDBweCAwcHggMHB4IDEwMHZ3YDtcbiAgICB9XG5cbiAgICBzdGVwLnByZXZCdG5UaXRsZSA9IHN0ZXAucHJldkJ0blRpdGxlIHx8ICdQcmV2JztcbiAgICBzdGVwLm5leHRCdG5UaXRsZSA9IHN0ZXAubmV4dEJ0blRpdGxlIHx8ICdOZXh0JztcbiAgICBzdGVwLmVuZEJ0blRpdGxlID0gc3RlcC5lbmRCdG5UaXRsZSB8fCAnRW5kJztcblxuICAgIGlmICh0aGlzLm1lbnVDbG9zZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24gPSB0aGlzLnRvdXJTdGVwLmNsb3NlZCRcbiAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudG91clNlcnZpY2UuZ2V0U3RhdHVzKCkgIT09IFRvdXJTdGF0ZS5PRkYpIHtcbiAgICAgICAgICB0aGlzLnRvdXJTZXJ2aWNlLmVuZCgpO1xuICAgICAgICAgIHRoaXMudG91ckJhY2tkcm9wLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGhpZGVUb3VyU3RlcCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5lbmFibGVSaXBwbGVFZmZlY3QpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMudG91clN0ZXAuaGlkZSgpO1xuICAgIGlmICh0aGlzLnRvdXJTZXJ2aWNlLmdldFN0YXR1cygpID09PSBUb3VyU3RhdGUuT0ZGKSB7XG4gICAgICB0aGlzLnRvdXJCYWNrZHJvcC5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIl19