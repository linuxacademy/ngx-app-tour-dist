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
export class NgxAppTour {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXBwLXRvdXIvIiwic291cmNlcyI6WyJsaWIvdG91ci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLENBQUM7QUFRNUMsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDZCxNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULG1CQUFtQjtnQkFDbkIsV0FBVzthQUNaO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWZGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDdEQsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQzthQUN4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvdXJTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvdXItc3RlcC90b3VyLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRvdXJBbmNob3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS90b3VyLWFuY2hvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpQb3BvdmVyTW9kdWxlIH0gZnJvbSAnLi9uZy16b3Jyby9wb3BvdmVyL256LXBvcG92ZXIubW9kdWxlJztcbmltcG9ydCB7IFRvdXJCYWNrZHJvcFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RvdXItYmFja2Ryb3Auc2VydmljZSc7XG5pbXBvcnQgeyBUb3VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdG91ci5zZXJ2aWNlJztcblxuZXhwb3J0IHsgVG91ckFuY2hvckRpcmVjdGl2ZSwgVG91clNlcnZpY2UgfTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVG91ckFuY2hvckRpcmVjdGl2ZSwgVG91clN0ZXBDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUb3VyU3RlcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUb3VyQW5jaG9yRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTnpQb3BvdmVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hBcHBUb3VyIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4QXBwVG91cixcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUb3VyQmFja2Ryb3BTZXJ2aWNlLFxuICAgICAgICBUb3VyU2VydmljZVxuICAgICAgXSxcbiAgICB9O1xuICB9XG59Il19