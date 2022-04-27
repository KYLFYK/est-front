import { makeAutoObservable } from "mobx";

export enum AdaptiveParams {
  KT1 = 320,
  KT2 = 576,
  KT3 = 768,
  KT4 = 992,
  KT5 = 1200,
  KT6 = 1440,
}

class AdaptiveStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentWidth: number = 0;
  currentAdaptive: AdaptiveParams = AdaptiveParams.KT6;

  calculateAdaptive = (size: number) => {
    this.currentWidth = size;

    switch (true) {
      case size >= AdaptiveParams.KT6:
        this.currentAdaptive = AdaptiveParams.KT6;
        break;
      case size >= AdaptiveParams.KT5:
        this.currentAdaptive = AdaptiveParams.KT5;
        break;
      case size >= AdaptiveParams.KT4:
        this.currentAdaptive = AdaptiveParams.KT4;
        break;
      case size >= AdaptiveParams.KT3:
        this.currentAdaptive = AdaptiveParams.KT3;
        break;
      case size >= AdaptiveParams.KT2:
        this.currentAdaptive = AdaptiveParams.KT2;
        break;
      case size >= AdaptiveParams.KT1:
        this.currentAdaptive = AdaptiveParams.KT1;
        break;
      default:
        this.currentAdaptive = AdaptiveParams.KT6;
    }
  };
}

export const AdaptiveStoreData = new AdaptiveStore();
