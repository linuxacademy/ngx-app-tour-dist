import { ModuleWithProviders } from '@angular/core';
import { TourAnchorDirective } from './directive/tour-anchor.directive';
import { TourService } from './services/tour.service';
export { TourAnchorDirective, TourService };
export declare class NgxAppTour {
    static forRoot(): ModuleWithProviders;
}
