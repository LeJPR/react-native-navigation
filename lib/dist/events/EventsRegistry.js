"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventsRegistry {
    constructor(nativeEventsReceiver, commandsObserver) {
        this.nativeEventsReceiver = nativeEventsReceiver;
        this.commandsObserver = commandsObserver;
    }
    onAppLaunched(callback) {
        return this.nativeEventsReceiver.registerOnAppLaunched(callback);
    }
    componentDidAppear(callback) {
        return this.nativeEventsReceiver.registerComponentDidAppear(({ componentId, componentName }) => callback(componentId, componentName));
    }
    componentDidDisappear(callback) {
        return this.nativeEventsReceiver.registerComponentDidDisappear(({ componentId, componentName }) => callback(componentId, componentName));
    }
    onNavigationButtonPressed(callback) {
        return this.nativeEventsReceiver.registerOnNavigationButtonPressed(({ componentId, buttonId }) => callback(componentId, buttonId));
    }
    onNavigationCommand(callback) {
        return this.commandsObserver.register(callback);
    }
}
exports.EventsRegistry = EventsRegistry;
