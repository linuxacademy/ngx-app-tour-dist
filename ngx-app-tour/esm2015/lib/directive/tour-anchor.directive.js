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
export class TourAnchorDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFwcC10b3VyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS90b3VyLWFuY2hvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLEtBQUssRUFFRyxTQUFTLEVBQ2pCLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLGNBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUtsRSxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7OztJQVM5QixZQUNTLFVBQXNCLEVBQ3JCLHdCQUFrRCxFQUNsRCxRQUFrQixFQUNsQixRQUFtQixFQUNuQixhQUErQixFQUMvQixRQUFrQyxFQUNsQyxXQUF3QixFQUN4QixZQUFpQztRQVBsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFYQSx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsS0FB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U0FBUyxHQUFHLE1BQU0sQ0FBQztTQUN4RDtRQUVELElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7OztZQWhIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUFwQkMsVUFBVTtZQUZWLHdCQUF3QjtZQUl4QixRQUFRO1lBR0EsU0FBUztZQUNqQixnQkFBZ0I7WUFSaEIsd0JBQXdCO1lBa0JqQixXQUFXO1lBSFgsbUJBQW1COzs7eUJBU3pCLEtBQUs7dUJBSUwsV0FBVyxTQUFDLDZCQUE2QjtpQ0FDekMsV0FBVyxTQUFDLHFCQUFxQjtnQ0FDakMsV0FBVyxTQUFDLDBCQUEwQjs7OztJQU52Qyx5Q0FBbUM7O0lBQ25DLHVDQUFtQzs7SUFDbkMsb0RBQTJDOztJQUUzQyx1Q0FBcUU7O0lBQ3JFLGlEQUFzRTs7SUFDdEUsZ0RBQTBFOztJQUd4RSx5Q0FBNkI7Ozs7O0lBQzdCLHVEQUEwRDs7Ozs7SUFDMUQsdUNBQTBCOzs7OztJQUMxQix1Q0FBMkI7Ozs7O0lBQzNCLDRDQUF1Qzs7Ozs7SUFDdkMsdUNBQTBDOzs7OztJQUMxQywwQ0FBZ0M7Ozs7O0lBQ2hDLDJDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCwgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgd2l0aGludmlld3BvcnQgZnJvbSAnd2l0aGludmlld3BvcnQnO1xuXG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVG91ckJhY2tkcm9wU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RvdXItYmFja2Ryb3Auc2VydmljZSc7XG5pbXBvcnQgeyBJU3RlcE9wdGlvbiB9IGZyb20gJy4uL21vZGVscy9zdGVwLW9wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVG91clN0ZXBDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RvdXItc3RlcC90b3VyLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRvdXJTZXJ2aWNlLCBUb3VyU3RhdGUgfSBmcm9tICcuLi9zZXJ2aWNlcy90b3VyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdG91ckFuY2hvcl0nXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyB0b3VyQW5jaG9yOiBzdHJpbmc7XG4gIHB1YmxpYyB0b3VyU3RlcDogVG91clN0ZXBDb21wb25lbnQ7XG4gIHB1YmxpYyBtZW51Q2xvc2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRvdXJhbmNob3ItLWlzLWFjdGl2ZScpIHB1YmxpYyBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yaXBwbGUtZWZmZWN0JykgcHVibGljIGVuYWJsZVJpcHBsZUVmZmVjdCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFsbG93LWludGVyYWN0aW9ucycpIHB1YmxpYyBhbGxvd0ludGVyYWN0aW9ucyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSB0b3VyU2VydmljZTogVG91clNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b3VyQmFja2Ryb3A6IFRvdXJCYWNrZHJvcFNlcnZpY2VcbiAgKSB7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxUb3VyU3RlcENvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRvdXJTdGVwQ29tcG9uZW50KTtcbiAgICBjb25zdCB0b3VyQ29tcG9uZW50ID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICB0aGlzLnRvdXJTdGVwID0gdG91ckNvbXBvbmVudC5pbnN0YW5jZTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRvdXJDb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy50b3VyU3RlcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMpO1xuXG4gICAgdGhpcy50b3VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IsIHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudG91clNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IpO1xuICB9XG5cbiAgcHVibGljIHNob3dUb3VyU3RlcChzdGVwOiBJU3RlcE9wdGlvbik6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMudG91clN0ZXAuc3RlcCA9IHN0ZXA7XG4gICAgdGhpcy50b3VyU3RlcC5uelBsYWNlbWVudCA9IHN0ZXAucGxhY2VtZW50O1xuICAgIHRoaXMudG91clN0ZXAuc3RlcFRlbXBsYXRlID0gc3RlcC5zdGVwVGVtcGxhdGU7XG5cbiAgICBpZiAoIXN0ZXAucHJldmVudFNjcm9sbGluZykge1xuICAgICAgaWYgKCF3aXRoaW52aWV3cG9ydCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge3NpZGVzOiAnYm90dG9tJ30pKSB7XG4gICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICF3aXRoaW52aWV3cG9ydCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge3NpZGVzOiAnbGVmdCB0b3AgcmlnaHQnfSlcbiAgICAgICkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVuYWJsZVJpcHBsZUVmZmVjdCA9IHN0ZXAuZW5hYmxlUmlwcGxlRWZmZWN0O1xuICAgIHRoaXMuYWxsb3dJbnRlcmFjdGlvbnMgPSBzdGVwLmFsbG93SW50ZXJhY3Rpb25zO1xuXG4gICAgaWYgKHN0ZXAubmV4dE9uKSB7XG4gICAgICB0aGlzLmFsbG93SW50ZXJhY3Rpb25zID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgb25OZXh0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHN0ZXAubmV4dE9uLCBvbk5leHQpO1xuICAgICAgICB0aGlzLnRvdXJTZXJ2aWNlLm5leHQoKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoc3RlcC5uZXh0T24sIG9uTmV4dCk7XG4gICAgfVxuXG4gICAgdGhpcy50b3VyU3RlcC5zaG93KCk7XG5cbiAgICBpZiAoIXN0ZXAuZGlzYWJsZUJhY2tkcm9wKSB7XG4gICAgICB0aGlzLnRvdXJCYWNrZHJvcC5zaG93KHRoaXMuZWxlbWVudFJlZiwgc3RlcC5iYWNrZHJvcFJhZGl1cywgc3RlcC5iYWNrZHJvcENvbG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3VyQmFja2Ryb3AuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcC5lbmFibGVSaXBwbGVFZmZlY3QpIHtcbiAgICAgIGNvbnN0IHJpcHBsZUNvbG9yID0gc3RlcC5yaXBwbGVDb2xvciA/IHN0ZXAucmlwcGxlQ29sb3IgOiAncmdiYSgwLCAwLCAwLCAwLjcpJztcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IGAke3JpcHBsZUNvbG9yfSAwcHggMHB4IDBweCAxMDB2d2A7XG4gICAgfVxuXG4gICAgc3RlcC5wcmV2QnRuVGl0bGUgPSBzdGVwLnByZXZCdG5UaXRsZSB8fCAnUHJldic7XG4gICAgc3RlcC5uZXh0QnRuVGl0bGUgPSBzdGVwLm5leHRCdG5UaXRsZSB8fCAnTmV4dCc7XG4gICAgc3RlcC5lbmRCdG5UaXRsZSA9IHN0ZXAuZW5kQnRuVGl0bGUgfHwgJ0VuZCc7XG5cbiAgICBpZiAodGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uID0gdGhpcy50b3VyU3RlcC5jbG9zZWQkXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnRvdXJTZXJ2aWNlLmdldFN0YXR1cygpICE9PSBUb3VyU3RhdGUuT0ZGKSB7XG4gICAgICAgICAgdGhpcy50b3VyU2VydmljZS5lbmQoKTtcbiAgICAgICAgICB0aGlzLnRvdXJCYWNrZHJvcC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlVG91clN0ZXAoKTogdm9pZCB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlUmlwcGxlRWZmZWN0KSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm1lbnVDbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLnRvdXJTdGVwLmhpZGUoKTtcbiAgICBpZiAodGhpcy50b3VyU2VydmljZS5nZXRTdGF0dXMoKSA9PT0gVG91clN0YXRlLk9GRikge1xuICAgICAgdGhpcy50b3VyQmFja2Ryb3AuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==