import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { IStepOption } from '../models/step-option.interface';
import { TourAnchorDirective } from '../directive/tour-anchor.directive';
export declare enum TourState {
    OFF = 0,
    ON = 1,
    PAUSED = 2
}
export declare class TourService<T extends IStepOption = IStepOption> {
    private router;
    stepShow$: Subject<T>;
    stepHide$: Subject<T>;
    initialize$: Subject<T[]>;
    start$: Subject<T>;
    end$: Subject<any>;
    pause$: Subject<T>;
    resume$: Subject<T>;
    anchorRegister$: Subject<string>;
    anchorUnregister$: Subject<string>;
    events$: Observable<{
        name: string;
        value: any;
    }>;
    steps: T[];
    currentStep: T;
    anchors: {
        [anchorId: string]: TourAnchorDirective;
    };
    private status;
    constructor(router: Router);
    initialize(steps: T[], stepDefaults?: T): void;
    start(): void;
    startAt(stepId: number | string): void;
    end(): void;
    pause(): void;
    resume(): void;
    toggle(pause?: boolean): void;
    next(): void;
    hasNext(step: T): boolean;
    prev(): void;
    hasPrev(step: T): boolean;
    goto(stepId: number | string): void;
    register(anchorId: string, anchor: TourAnchorDirective): void;
    unregister(anchorId: string): void;
    getStatus(): TourState;
    private goToStep;
    private loadStep;
    private setCurrentStep;
    private showStep;
    private hideStep;
}
