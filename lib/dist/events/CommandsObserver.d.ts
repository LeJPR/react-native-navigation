import { EventSubscription } from './EventsRegistry';
export declare type CommandsListener = (name: string, params: {}) => void;
export declare class CommandsObserver {
    private readonly listeners;
    register(listener: CommandsListener): EventSubscription;
    notify(commandName: string, params: {}): void;
}
