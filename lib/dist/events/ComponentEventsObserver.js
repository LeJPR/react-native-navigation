"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComponentEventsObserver {
    constructor(eventsRegistry, store) {
        this.eventsRegistry = eventsRegistry;
        this.store = store;
        this.componentDidAppear = this.componentDidAppear.bind(this);
        this.componentDidDisappear = this.componentDidDisappear.bind(this);
        this.onNavigationButtonPressed = this.onNavigationButtonPressed.bind(this);
    }
    registerForAllComponents() {
        this.eventsRegistry.componentDidAppear(this.componentDidAppear);
        this.eventsRegistry.componentDidDisappear(this.componentDidDisappear);
        this.eventsRegistry.onNavigationButtonPressed(this.onNavigationButtonPressed);
    }
    componentDidAppear(componentId) {
        const componentRef = this.store.getRefForId(componentId);
        if (componentRef && componentRef.componentDidAppear) {
            componentRef.componentDidAppear();
        }
    }
    componentDidDisappear(componentId) {
        const componentRef = this.store.getRefForId(componentId);
        if (componentRef && componentRef.componentDidDisappear) {
            componentRef.componentDidDisappear();
        }
    }
    onNavigationButtonPressed(componentId, buttonId) {
        const componentRef = this.store.getRefForId(componentId);
        if (componentRef && componentRef.onNavigationButtonPressed) {
            componentRef.onNavigationButtonPressed(buttonId);
        }
    }
}
exports.ComponentEventsObserver = ComponentEventsObserver;
