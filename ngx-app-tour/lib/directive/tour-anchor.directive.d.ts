import { ComponentFactoryResolver, ElementRef, Injector, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { TourBackdropService } from '../services/tour-backdrop.service';
import { IStepOption } from '../models/step-option.interface';
import { TourStepComponent } from '../components/tour-step/tour-step.component';
import { TourService } from '../services/tour.service';
export declare class TourAnchorDirective implements OnInit, OnDestroy {
    elementRef: ElementRef;
    private componentFactoryResolver;
    private injector;
    private renderer;
    private viewContainer;
    private resolver;
    private tourService;
    private tourBackdrop;
    tourAnchor: string;
    tourStep: TourStepComponent;
    menuCloseSubscription: Subscription;
    isActive: boolean;
    enableRippleEffect: boolean;
    allowInteractions: boolean;
    constructor(elementRef: ElementRef, componentFactoryResolver: ComponentFactoryResolver, injector: Injector, renderer: Renderer2, viewContainer: ViewContainerRef, resolver: ComponentFactoryResolver, tourService: TourService, tourBackdrop: TourBackdropService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showTourStep(step: IStepOption): void;
    hideTourStep(): void;
}
