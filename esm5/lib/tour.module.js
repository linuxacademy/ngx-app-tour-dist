/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TourStepComponent } from './components/tour-step/tour-step.component';
import { TourAnchorDirective } from './directive/tour-anchor.directive';
import { NzPopoverModule } from './ng-zorro/popover/nz-popover.module';
import { NzToolTipModule } from './ng-zorro/tooltip/nz-tooltip.module';
import { TourBackdropService } from './services/tour-backdrop.service';
import { TourService } from './services/tour.service';
export { TourAnchorDirective, TourService };
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
                    imports: [CommonModule, OverlayModule, NzPopoverModule, NzToolTipModule]
                },] }
    ];
    return NgxAppTour;
}());
export { NgxAppTour };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXBwLXRvdXIvIiwic291cmNlcyI6WyJsaWIvdG91ci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxDQUFDO0FBRTVDO0lBQUE7SUFnQkEsQ0FBQzs7OztJQVRlLGtCQUFPOzs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULG1CQUFtQjtnQkFDbkIsV0FBVzthQUNaO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWZGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQztvQkFDdEQsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7aUJBQ3pFOztJQVdELGlCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FWWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG91clN0ZXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG91ci1zdGVwL3RvdXItc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG91ckFuY2hvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3RvdXItYW5jaG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelBvcG92ZXJNb2R1bGUgfSBmcm9tICcuL25nLXpvcnJvL3BvcG92ZXIvbnotcG9wb3Zlci5tb2R1bGUnO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnLi9uZy16b3Jyby90b29sdGlwL256LXRvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IFRvdXJCYWNrZHJvcFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RvdXItYmFja2Ryb3Auc2VydmljZSc7XG5pbXBvcnQgeyBUb3VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdG91ci5zZXJ2aWNlJztcblxuZXhwb3J0IHsgVG91ckFuY2hvckRpcmVjdGl2ZSwgVG91clNlcnZpY2UgfTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVG91ckFuY2hvckRpcmVjdGl2ZSwgVG91clN0ZXBDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUb3VyU3RlcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUb3VyQW5jaG9yRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTnpQb3BvdmVyTW9kdWxlLCBOelRvb2xUaXBNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5neEFwcFRvdXIge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hBcHBUb3VyLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRvdXJCYWNrZHJvcFNlcnZpY2UsXG4gICAgICAgIFRvdXJTZXJ2aWNlXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==