export declare class NativeCommandsSender {
    private nativeCommandsModule;
    constructor();
    setRoot(layoutTree: object): any;
    setDefaultOptions(options: object): any;
    mergeOptions(componentId: string, options: object): any;
    push(onComponentId: string, layout: object): any;
    pop(componentId: string, options: object): any;
    popTo(componentId: string): any;
    popToRoot(componentId: string): any;
    setStackRoot(onComponentId: string, layout: object): any;
    showModal(layout: object): any;
    dismissModal(componentId: string): any;
    dismissAllModals(): any;
    showOverlay(layout: object): any;
    dismissOverlay(componentId: string): any;
}
