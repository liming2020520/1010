declare namespace CyminiConfigTypes {
  interface rewardedVideoAdConfig {
    MAX_LOAD_TIMES: number;
    MSG: {
      ERROR: string;
      TIMEOUT: string;
      DESTORY: string;
      UNLOAD: string;
      INVALID_PARAMS: string;
      CALLBACK_0: string;
    };
    LOADNING_HTML_STRING: string;
    LOADING_STYLE: string;
  }

  interface cyminiBasicConfig {
    testKey: number;
    cyminiCDN: string;
    ErrorCode: Object;
    gameDeductCoinConf: string; //梯度值获取黑币值的配置文件名
    webGameLadderConf: string; //段位信息配置文件名
    gameResultReturnConf: string; //340版本新增的通用结算场景配置文件名
    gameListConf: string; //分享游戏相关的配置文件名
    returnBtnText: string;
    placeholder: string;
    toastDuration: number;
    millisecond: number;
    rewardedVideoAd: rewardedVideoAdConfig;
  }
}

declare class CyminiConfig {
  getConfig(configKeyName: string): any;
  cyminiBasicConfig: CyminiConfigTypes.cyminiBasicConfig;
  init();
}

declare interface deviceInfo {
  platform: number; //0 表示ios，1表示安卓
  versionNum: number; // 340,350这样的值
}
