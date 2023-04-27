"use strict";

var CommanderItemFactory = function CommanderItemFactory(
  name,
  keyboard,
  excute,
  display,
  init,
  destroy
) {
  if (init === void 0) {
    init = function init() {};
  }

  if (destroy === void 0) {
    destroy = function destroy() {};
  }

  this.name = void 0;
  this.keyboard = void 0;
  this.excute = void 0;
  this.display = void 0;
  this.init = void 0;
  this.destroy = void 0;
  this.name = name;
  this.keyboard = keyboard;
  this.excute = excute;
  this.display = display;
  this.init = init;
  this.destroy = destroy;
};

var ComponentItemFactory = function ComponentItemFactory(
  name,
  display,
  props,
  initData,
  render,
  resize,
  needPosition,
  init,
  destroy,
  remoteConfig
) {
  if (resize === void 0) {
    resize = true;
  }

  if (needPosition === void 0) {
    needPosition = true;
  }

  if (init === void 0) {
    init = function init() {};
  }

  if (destroy === void 0) {
    destroy = function destroy() {};
  }

  if (remoteConfig === void 0) {
    remoteConfig = {};
  }

  this.name = void 0;
  this.display = void 0;
  this.props = void 0;
  this.initData = void 0;
  this.render = void 0;
  this.resize = void 0;
  this.needPosition = void 0;
  this.init = void 0;
  this.destroy = void 0;
  this.remoteConfig = void 0;
  this.name = name;
  this.display = display;
  this.props = props;
  this.initData = initData;
  this.render = render;
  this.resize = resize;
  this.needPosition = needPosition;
  this.init = init;
  this.destroy = destroy;
  this.remoteConfig = remoteConfig;
};

function createComponent(config) {
  debugger;
  return new ComponentItemFactory(
    config.name,
    config.display,
    config.props,
    config.initData,
    config.render,
    config.resize,
    config.needPosition,
    config.init,
    config.destroy,
    config.remoteConfig
  );
}

function createPannelOptions(type, option) {
  return {
    type: type,
    option: option,
  };
}
// debugger;
// exports.CommanderItemFactory = CommanderItemFactory;
// exports.ComponentItemFactory = ComponentItemFactory;
// exports.createPannelOptions = createPannelOptions;
export {
  CommanderItemFactory,
  ComponentItemFactory,
  createPannelOptions,

//   Container,
//   ContainerWrapper,
//   Control,
//   Container$1 as IframeContainer,
//   ContainerWrapper$1 as IframeContainerWrapper,
//   IframeTarget,
//   LeftConfig,
//   LeftDataPannel,
//   Preview,
//   RightConfig,
//   UserConfig,
//   arrayMove,
//   changeUserValue,
//   changeUserValueRecord,
//   createComponent,
  
//   createUid,
//   deepCopy,
//   defaultStore,
//   dragEventResolve,
//   focusState,
//   innerContainerDragUp,
//   index as locale,
//   postMessage,
//   rgba2Obj,
//   scaleFn,
//   specialCoList,
//   specialFnList,
//   swap,
//   unmountContextMenu,
//   useDynamicAddEventCenter,
//   useIframeHook,
//   useIframePostMessage,
//   useRegistFunc,
//   useStoreState,
//   userConfigMerge,
};
