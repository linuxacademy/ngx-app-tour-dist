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
                    imports: [CommonModule, OverlayModule, NzPopoverModule]
                },] }
    ];
    return NgxAppTour;
}());
export { NgxAppTour };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXBwLXRvdXIvIiwic291cmNlcyI6WyJsaWIvdG91ci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLENBQUM7QUFFNUM7SUFBQTtJQWdCQSxDQUFDOzs7O0lBVGUsa0JBQU87OztJQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1QsbUJBQW1CO2dCQUNuQixXQUFXO2FBQ1o7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBZkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDO29CQUN0RCxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO2lCQUN4RDs7SUFXRCxpQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBVlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvdXJTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvdXItc3RlcC90b3VyLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRvdXJBbmNob3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS90b3VyLWFuY2hvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpQb3BvdmVyTW9kdWxlIH0gZnJvbSAnLi9uZy16b3Jyby9wb3BvdmVyL256LXBvcG92ZXIubW9kdWxlJztcbmltcG9ydCB7IFRvdXJCYWNrZHJvcFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RvdXItYmFja2Ryb3Auc2VydmljZSc7XG5pbXBvcnQgeyBUb3VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdG91ci5zZXJ2aWNlJztcblxuZXhwb3J0IHsgVG91ckFuY2hvckRpcmVjdGl2ZSwgVG91clNlcnZpY2UgfTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVG91ckFuY2hvckRpcmVjdGl2ZSwgVG91clN0ZXBDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUb3VyU3RlcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUb3VyQW5jaG9yRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTnpQb3BvdmVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hBcHBUb3VyIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4QXBwVG91cixcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUb3VyQmFja2Ryb3BTZXJ2aWNlLFxuICAgICAgICBUb3VyU2VydmljZVxuICAgICAgXSxcbiAgICB9O1xuICB9XG59Il19