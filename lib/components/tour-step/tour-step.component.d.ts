import { ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStepOption } from '../../models/step-option.interface';
import { NzPopoverComponent } from '../../ng-zorro/popover';
import { TourService } from '../../services/tour.service';
export declare class TourStepComponent extends NzPopoverComponent implements OnDestroy {
    tourService: TourService;
    cdr: ChangeDetectorRef;
    stepTemplate: any;
    _hasBackdrop: boolean;
    step: IStepOption;
    closed$: EventEmitter<boolean>;
    closeSubscription: Subscription;
    constructor(tourService: TourService, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    /**
     * Configures hot keys for controlling the tour with the keyboard
     */
    onEscapeKey(): void;
    onArrowRightKey(): void;
    onArrowLeftKey(): void;
}
