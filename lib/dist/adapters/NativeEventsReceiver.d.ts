import { EventSubscription } from '../events/EventsRegistry';
export declare class NativeEventsReceiver {
    private emitter;
    constructor();
    registerOnAppLaunched(callback: () => void): EventSubscription;
    registerComponentDidAppear(callback: (params) => void): EventSubscription;
    registerComponentDidDisappear(callback: (params) => void): EventSubscription;
    registerOnNavigationButtonPressed(callback: (params) => void): EventSubscription;
}
