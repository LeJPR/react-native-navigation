"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventsRegistry_1 = require("./EventsRegistry");
const NativeEventsReceiver_mock_1 = require("../adapters/NativeEventsReceiver.mock");
const CommandsObserver_1 = require("./CommandsObserver");
describe('EventsRegistry', () => {
    let uut;
    const mockNativeEventsReceiver = new NativeEventsReceiver_mock_1.NativeEventsReceiver();
    let commandsObserver;
    beforeEach(() => {
        commandsObserver = new CommandsObserver_1.CommandsObserver();
        uut = new EventsRegistry_1.EventsRegistry(mockNativeEventsReceiver, commandsObserver);
    });
    it('exposes onAppLaunched event', () => {
        const subscription = {};
        const cb = jest.fn();
        mockNativeEventsReceiver.registerOnAppLaunched.mockReturnValueOnce(subscription);
        const result = uut.onAppLaunched(cb);
        expect(result).toBe(subscription);
        expect(mockNativeEventsReceiver.registerOnAppLaunched).toHaveBeenCalledTimes(1);
        expect(mockNativeEventsReceiver.registerOnAppLaunched).toHaveBeenCalledWith(cb);
    });
    it('exposes componentDidAppear event', () => {
        const subscription = {};
        const cb = jest.fn();
        mockNativeEventsReceiver.registerComponentDidAppear.mockReturnValueOnce(subscription);
        const result = uut.componentDidAppear(cb);
        expect(result).toBe(subscription);
        expect(mockNativeEventsReceiver.registerComponentDidAppear).toHaveBeenCalledTimes(1);
        mockNativeEventsReceiver.registerComponentDidAppear.mock.calls[0][0]({ componentId: 'theId', componentName: 'theName' });
        expect(cb).toHaveBeenCalledWith('theId', 'theName');
    });
    it('exposes componentDidDisappear event', () => {
        const subscription = {};
        const cb = jest.fn();
        mockNativeEventsReceiver.registerComponentDidDisappear.mockReturnValueOnce(subscription);
        const result = uut.componentDidDisappear(cb);
        expect(result).toBe(subscription);
        expect(mockNativeEventsReceiver.registerComponentDidDisappear).toHaveBeenCalledTimes(1);
        mockNativeEventsReceiver.registerComponentDidDisappear.mock.calls[0][0]({ componentId: 'theId', componentName: 'theName' });
        expect(cb).toHaveBeenCalledWith('theId', 'theName');
    });
    it('exposes onNavigationButtonPressed event', () => {
        const subscription = {};
        const cb = jest.fn();
        mockNativeEventsReceiver.registerOnNavigationButtonPressed.mockReturnValueOnce(subscription);
        const result = uut.onNavigationButtonPressed(cb);
        expect(result).toBe(subscription);
        expect(mockNativeEventsReceiver.registerOnNavigationButtonPressed).toHaveBeenCalledTimes(1);
        mockNativeEventsReceiver.registerOnNavigationButtonPressed.mock.calls[0][0]({ componentId: 'theId', buttonId: 'theBtnId' });
        expect(cb).toHaveBeenCalledWith('theId', 'theBtnId');
    });
    it('exposes onNavigationCommand registers listener to commandObserver', () => {
        const cb = jest.fn();
        const result = uut.onNavigationCommand(cb);
        expect(result).toBeDefined();
        commandsObserver.notify('theCommandName', { x: 1 });
        expect(cb).toHaveBeenCalledTimes(1);
        expect(cb).toHaveBeenCalledWith('theCommandName', { x: 1 });
    });
    it('onNavigationCommand unregister', () => {
        const cb = jest.fn();
        const result = uut.onNavigationCommand(cb);
        result.remove();
        commandsObserver.notify('theCommandName', { x: 1 });
        expect(cb).not.toHaveBeenCalled();
    });
});
