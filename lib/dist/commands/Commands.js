"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class Commands {
    constructor(nativeCommandsSender, layoutTreeParser, layoutTreeCrawler, commandsObserver) {
        this.nativeCommandsSender = nativeCommandsSender;
        this.layoutTreeParser = layoutTreeParser;
        this.layoutTreeCrawler = layoutTreeCrawler;
        this.commandsObserver = commandsObserver;
    }
    setRoot(simpleApi) {
        const input = _.cloneDeep(simpleApi);
        const layout = this.layoutTreeParser.parse(input);
        this.layoutTreeCrawler.crawl(layout);
        const result = this.nativeCommandsSender.setRoot(layout);
        this.commandsObserver.notify('setRoot', { layout });
        return result;
    }
    setDefaultOptions(options) {
        const input = _.cloneDeep(options);
        this.layoutTreeCrawler.processOptions(input);
        this.nativeCommandsSender.setDefaultOptions(input);
        this.commandsObserver.notify('setDefaultOptions', { options });
    }
    mergeOptions(componentId, options) {
        const input = _.cloneDeep(options);
        this.layoutTreeCrawler.processOptions(input);
        this.nativeCommandsSender.mergeOptions(componentId, input);
        this.commandsObserver.notify('mergeOptions', { componentId, options });
    }
    showModal(simpleApi) {
        const input = _.cloneDeep(simpleApi);
        const layout = this.layoutTreeParser.parse(input);
        this.layoutTreeCrawler.crawl(layout);
        const result = this.nativeCommandsSender.showModal(layout);
        this.commandsObserver.notify('showModal', { layout });
        return result;
    }
    dismissModal(componentId) {
        const result = this.nativeCommandsSender.dismissModal(componentId);
        this.commandsObserver.notify('dismissModal', { componentId });
        return result;
    }
    dismissAllModals() {
        const result = this.nativeCommandsSender.dismissAllModals();
        this.commandsObserver.notify('dismissAllModals', {});
        return result;
    }
    push(componentId, simpleApi) {
        const input = _.cloneDeep(simpleApi);
        const layout = this.layoutTreeParser.parse(input);
        this.layoutTreeCrawler.crawl(layout);
        const result = this.nativeCommandsSender.push(componentId, layout);
        this.commandsObserver.notify('push', { componentId, layout });
        return result;
    }
    pop(componentId, options) {
        const result = this.nativeCommandsSender.pop(componentId, options);
        this.commandsObserver.notify('pop', { componentId, options });
        return result;
    }
    popTo(componentId) {
        const result = this.nativeCommandsSender.popTo(componentId);
        this.commandsObserver.notify('popTo', { componentId });
        return result;
    }
    popToRoot(componentId) {
        const result = this.nativeCommandsSender.popToRoot(componentId);
        this.commandsObserver.notify('popToRoot', { componentId });
        return result;
    }
    setStackRoot(componentId, simpleApi) {
        const input = _.cloneDeep(simpleApi);
        const layout = this.layoutTreeParser.parse(input);
        this.layoutTreeCrawler.crawl(layout);
        const result = this.nativeCommandsSender.setStackRoot(componentId, layout);
        this.commandsObserver.notify('setStackRoot', { componentId, layout });
        return result;
    }
    showOverlay(simpleApi) {
        const input = _.cloneDeep(simpleApi);
        const layout = this.layoutTreeParser.parse(input);
        this.layoutTreeCrawler.crawl(layout);
        const result = this.nativeCommandsSender.showOverlay(layout);
        this.commandsObserver.notify('showOverlay', { layout });
        return result;
    }
    dismissOverlay(componentId) {
        const result = this.nativeCommandsSender.dismissOverlay(componentId);
        this.commandsObserver.notify('dismissOverlay', { componentId });
        return result;
    }
}
exports.Commands = Commands;
