"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
class NativeEventsReceiver {
    constructor() {
        this.emitter = new react_native_1.NativeEventEmitter(react_native_1.NativeModules.RNNEventEmitter);
    }
    registerOnAppLaunched(callback) {
        return this.emitter.addListener('RNN.onAppLaunched', callback);
    }
    registerComponentDidAppear(callback) {
        return this.emitter.addListener('RNN.componentDidAppear', callback);
    }
    registerComponentDidDisappear(callback) {
        return this.emitter.addListener('RNN.componentDidDisappear', callback);
    }
    registerOnNavigationButtonPressed(callback) {
        return this.emitter.addListener('RNN.onNavigationButtonPressed', callback);
    }
}
exports.NativeEventsReceiver = NativeEventsReceiver;
