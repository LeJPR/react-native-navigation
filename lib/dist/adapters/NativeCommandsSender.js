"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
class NativeCommandsSender {
    constructor() {
        this.nativeCommandsModule = react_native_1.NativeModules.RNNBridgeModule;
    }
    setRoot(layoutTree) {
        return this.nativeCommandsModule.setRoot(layoutTree);
    }
    setDefaultOptions(options) {
        return this.nativeCommandsModule.setDefaultOptions(options);
    }
    mergeOptions(componentId, options) {
        return this.nativeCommandsModule.mergeOptions(componentId, options);
    }
    push(onComponentId, layout) {
        return this.nativeCommandsModule.push(onComponentId, layout);
    }
    pop(componentId, options) {
        return this.nativeCommandsModule.pop(componentId, options);
    }
    popTo(componentId) {
        return this.nativeCommandsModule.popTo(componentId);
    }
    popToRoot(componentId) {
        return this.nativeCommandsModule.popToRoot(componentId);
    }
    setStackRoot(onComponentId, layout) {
        return this.nativeCommandsModule.setStackRoot(onComponentId, layout);
    }
    showModal(layout) {
        return this.nativeCommandsModule.showModal(layout);
    }
    dismissModal(componentId) {
        return this.nativeCommandsModule.dismissModal(componentId);
    }
    dismissAllModals() {
        return this.nativeCommandsModule.dismissAllModals();
    }
    showOverlay(layout) {
        return this.nativeCommandsModule.showOverlay(layout);
    }
    dismissOverlay(componentId) {
        return this.nativeCommandsModule.dismissOverlay(componentId);
    }
}
exports.NativeCommandsSender = NativeCommandsSender;
