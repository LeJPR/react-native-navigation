import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver';
import { CommandsObserver } from './CommandsObserver';
export interface EventSubscription {
    remove(): any;
}
export declare class EventsRegistry {
    private nativeEventsReceiver;
    private commandsObserver;
    constructor(nativeEventsReceiver: NativeEventsReceiver, commandsObserver: CommandsObserver);
    onAppLaunched(callback: () => void): EventSubscription;
    componentDidAppear(callback: (componentId: string, componentName: string) => void): EventSubscription;
    componentDidDisappear(callback: (componentId: string, componentName: string) => void): EventSubscription;
    onNavigationButtonPressed(callback: (componentId: string, buttonId: string) => void): EventSubscription;
    onNavigationCommand(callback: (name: string, params: any) => void): EventSubscription;
}
