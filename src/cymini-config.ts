//默认的基础配置
const cyminiBasicConfig: CyminiConfigTypes.cyminiBasicConfig = {
  testKey: 3000,
  cyminiCDN: "https://cdn.cymini.qq.com/business/",
  ErrorCode: {
    "-1": "客户端配置错误，或者web传入的参数错误",
    "1100001": "商品ID不存在",
    "1100002": "超过赠送限制",
    "1100003": "金币不足",
    "1100004": "钻石不足",
    "1100005": "商品类型不正确",
    "1100006": "道具数目不足",
    "1100007": "midas不开放",
    "1100008": "使用中的道具不存在（切换或者取消的时候可能会返回）",
    "1100009": "使用中的道具已经过期（切换或者取消的时候可能会返回）",
    "1100010": "商品未上架",
    "1100011": "用户单日已超过购买上限",
    "1100012": "礼物ID不存在",
    "1100013": "道具ID不存在",
    "1100014": "道具类型不正确",
    "1100015": "未购买",
    "1100016": "已经购买",
    "1100017": "超过单次礼物赠送上线",
    "1100018": "用户总的购买已超过购买上限",
    "1100019": "用户当日已经取现",
    "1100020": "超出金币上限",
    "1100021": "商品发货失败，等待后续补发",
    "1100023": "没有游戏角色",
    "1100024": "金币为负数",
    "1100025": "相同的订单已经在处理中",
    "1100032": "道具超过用户购买上限",
  },
  gameDeductCoinConf: "game_deduct_coin_conf.bin", //梯度值获取黑币值的配置文件名
  webGameLadderConf: "web_game_ladder_conf.bin", //段位信息配置文件名
  gameResultReturnConf: "game_result_return_conf.bin", //340版本新增的通用结算场景配置文件名
  gameListConf: "game_list_conf.bin", //分享游戏相关的配置文件名
  returnBtnText: "关闭",
  placeholder: "请输入答案",
  toastDuration: 3000,
  millisecond: 1000,
  rewardedVideoAd: {
    MAX_LOAD_TIMES: 12,
    MSG: {
      ERROR: "暂无可播放视频广告",
      TIMEOUT: "视频广告加载超时，请重新加载!",
      DESTORY: "视频广告被销毁，请重新创建",
      UNLOAD: "视频广告未加载，请重新加载",
      INVALID_PARAMS: "adUnitId/gameId不能为空",
      CALLBACK_0: "广告加载后的回掉出错_0",
    },
    LOADNING_HTML_STRING: `<div class="heihei_loading_forvideoad_main"><div class="heihei_loading_forvideoad_san"></div><div class="heihei_loading_forvideoad_chang"><div class="heihei_loading_forvideoad_eye"></div><div class="heihei_loading_forvideoad_eye"></div></div></div><div class="heihei_loading_forvideoad_mask"></div>`,
    LOADING_STYLE: `.heihei_loading_forvideoad_container{z-index:9999;position:fixed;top:0;left:0}.heihei_loading_forvideoad_main{width:50px;height:37.5px;position:fixed;top:50%;left:50%;margin:-18.75px 0 0 -25px}.heihei_loading_forvideoad_mask{height:100%;width:100%;position:fixed}.heihei_loading_forvideoad_san{width:0;height:0;float:right;margin-right:6px;border:5px solid transparent;border-bottom:5px solid #11b3f4;animation:heihei_san_dance 1.5s infinite .2s;-webkit-animation:heihei_san_dance 1.5s infinite .2s}.heihei_loading_forvideoad_chang{display:flex;justify-content:center;align-items:center;width:50px;height:32.5px;background-color:#11b3f4;border-radius:3px;animation:heihei_chang_dance 1.5s infinite .2s;-webkit-animation:heihei_chang_dance 1.5s infinite .2s}.heihei_loading_forvideoad_eye{width:5.5px;height:11px;margin:0 6px;background-color:#fff;border-radius:5.5px;animation:heihei_eye_dance 1.5s infinite .2s;-webkit-animation:heihei_eye_dance 1.5s infinite .2s}@-webkit-keyframes heihei_san_dance{0%{-webkit-transform:translate(0,0) rotate(0);transform:translate(0,0) rotate(0)}20%{-webkit-transform:translate(8px,-2px) rotate(45deg);transform:translate(8px,-2px) rotate(45deg)}40%{-webkit-transform:translate(-8px,-2px) rotate(-45deg);transform:translate(-8px,-2px) rotate(-45deg)}60%{-webkit-transform:translate(8px,-2px) rotate(45deg);transform:translate(8px,-2px) rotate(45deg)}80%{-webkit-transform:translate(0,0) rotate(0);transform:translate(0,0) rotate(0)}85%{-webkit-transform:translate(0,1px);transform:translate(0,1px)}90%{-webkit-transform:translate(0,0);transform:translate(0,0)}95%{-webkit-transform:translate(0,1px);transform:translate(0,1px)}100%{-webkit-transform:translate(0,0) rotate(0);transform:translate(0,0) rotate(0)}}@keyframes heihei_san_dance{0%{-webkit-transform:translate(0,0) rotate(0);transform:translate(0,0) rotate(0)}20%{-webkit-transform:translate(8px,-2px) rotate(45deg);transform:translate(8px,-2px) rotate(45deg)}40%{-webkit-transform:translate(-8px,-2px) rotate(-45deg);transform:translate(-8px,-2px) rotate(-45deg)}60%{-webkit-transform:translate(8px,-2px) rotate(45deg);transform:translate(8px,-2px) rotate(45deg)}80%{-webkit-transform:translate(0,0) rotate(0);transform:translate(0,0) rotate(0)}85%{-webkit-transform:translate(0,1px);transform:translate(0,1px)}90%{-webkit-transform:translate(0,0);transform:translate(0,0)}95%{-webkit-transform:translate(0,1px);transform:translate(0,1px)}100%{-webkit-transform:translate(0,0) rotate(0);transform:translate(0,0) rotate(0)}}@-webkit-keyframes heihei_chang_dance{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}20%{-webkit-transform:scale(1.1,0.8);transform:scale(1.1,0.8)}60%{-webkit-transform:scale(1.1,0.8);transform:scale(1.1,0.8)}80%{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes heihei_chang_dance{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}20%{-webkit-transform:scale(1.1,0.8);transform:scale(1.1,0.8)}60%{-webkit-transform:scale(1.1,0.8);transform:scale(1.1,0.8)}80%{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes heihei_eye_dance{0%{-webkit-transform:translate(0,0);transform:translate(0,0)}20%{-webkit-transform:translate(-8px,0);transform:translate(-8px,0)}40%{-webkit-transform:translate(8px,0);transform:translate(8px,0)}60%{-webkit-transform:translate(-8px,0);transform:translate(-8px,0)}80%{-webkit-transform:translate(0,0);transform:translate(0,0)}85%{-webkit-transform:scale(1,0.4);transform:scale(1,0.4)}90%{-webkit-transform:scale(1,1);transform:scale(1,1)}95%{-webkit-transform:scale(1,0.4);transform:scale(1,0.4)}100%{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes heihei_eye_dance{0%{-webkit-transform:translate(0,0);transform:translate(0,0)}20%{-webkit-transform:translate(-8px,0);transform:translate(-8px,0)}40%{-webkit-transform:translate(8px,0);transform:translate(8px,0)}60%{-webkit-transform:translate(-8px,0);transform:translate(-8px,0)}80%{-webkit-transform:translate(0,0);transform:translate(0,0)}85%{-webkit-transform:scale(1,0.4);transform:scale(1,0.4)}90%{-webkit-transform:scale(1,1);transform:scale(1,1)}95%{-webkit-transform:scale(1,0.4);transform:scale(1,0.4)}100%{-webkit-transform:scale(1,1);transform:scale(1,1)}}`,
  },
};

const cdnJSHead = "https://cdn.cymini.qq.com/business/web/cymini-jsbridge/";

class CyminiConfig {
  private basicParams = { gameId: 0, versionNum: 0, platform: "ios" };

  public cyminiBasicConfig: CyminiConfigTypes.cyminiBasicConfig = cyminiBasicConfig;

  private appendScript(fileName: string) {
    return new Promise((resolve, reject) => {
      let head = document.getElementsByTagName("head")[0];
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = cdnJSHead + fileName;
      script.onload = () => {
        resolve();
      };
      script.onerror = () => {
        reject();
      };
      head.appendChild(script);
    });
  }

  constructor(gameId: number, deviceInfo: deviceInfo) {
    //获取版本号的数值
    const versionNum = deviceInfo.versionNum || 335;
    const platform = deviceInfo.platform == 0 ? "iOS" : "android";

    //测试gameId为 -1；
    // gameId = -1;

    this.basicParams = { gameId, versionNum, platform };
    //依次去cdn取两个文件，一个是基准的配置生效文件，一个是这个游戏对应的js配置文件
    this.appendScript("cymini.version.config.js").then(() => {
      //如果加载出来的配置文件项目包含当前gameid，则加载gamejs文件
      if (window["CYMINI_VERSION_CONFIG"]["gameIds"].includes(gameId)) {
        this.appendScript(`game.version.config.${gameId}.js`);
      }
    });
  }

  /**
   * 从对象中获取相应key值的信息，支持连字拼写，例如 let a= this.cyminiConfig.getConfig('rewardedVideoAd.MSG');
   * @param object
   * @param keyNameArray
   */
  private getValueFromStringKey(object, keyNameArray: string[]) {
    let tempValue = object[keyNameArray[0]];
    if (keyNameArray.length > 1) {
      for (let index = 1; index < keyNameArray.length; index++) {
        const curKey = keyNameArray[index];
        try {
          tempValue = tempValue[curKey];
        } catch (error) {
          tempValue = undefined;
          break;
        }
      }
    }

    return tempValue;
  }

  //深度合并对象
  private deepObjectMerge(firstObj, secondOBJ) {
    for (var key in secondOBJ) {
      firstObj[key] =
        firstObj[key] && firstObj[key].toString() === "[object Object]"
          ? this.deepObjectMerge(firstObj[key], secondOBJ[key])
          : (firstObj[key] = secondOBJ[key]);
    }
    return firstObj;
  }

  /**
   * 获取可能存在的需要merge对象的最终值，例如：rewardVideoAd覆盖配置只有一项，需要将基础配置项的内容合并
   * @param object
   * @param keyNameArray
   */
  private getFinalConfigValue(object, keyNameArray: string[]) {
    let tempValue = this.getValueFromStringKey(object, keyNameArray);
    let originValue = {};
    //如果是对象，返回和基础数配置时对应的值 组合并后的内容给前端，实际配置业务时不一定会把全部配置项放好
    if (Object.prototype.toString.call(tempValue) === "[object Object]") {
      originValue = this.getValueFromStringKey(cyminiBasicConfig, keyNameArray);
      return this.deepObjectMerge(originValue, tempValue);
    } else {
      return tempValue;
    }
  }

  //从数组中获取val
  private getConfigFromArray(configList = [], keyNameString: string) {
    let configKeyName = keyNameString.split(".")[0]; //支持以点分割取值
    for (let index = 0; index < configList.length; index++) {
      const curConfig = configList[index] || { config: {} };
      //如果有配置项，判断版本号和系统
      if (Object.keys(curConfig["config"]).includes(configKeyName)) {
        //如果包含平台，匹配平台信息
        if (
          Object.keys(curConfig["version"]).includes(this.basicParams.platform)
        ) {
          const versionRange = curConfig["version"][this.basicParams.platform];
          //处于版本范围内
          if (
            this.basicParams.versionNum >= versionRange.maxVersionNum &&
            this.basicParams.versionNum <= versionRange.minVersionNum
          ) {
            return this.getFinalConfigValue(
              curConfig["config"],
              keyNameString.split(".")
            );
          }
        }
      }
    }
    return null;
  }

  /**
   * 根据configKeyName获取相应的配置
   */
  public getConfig(configKeyName: string) {
    //这两个文件都是异步取，所以会存在都没有加载到的情况
    // window["CYMINI_VERSION_CONFIG"];
    // window["CYMINI_GAME_VERSION_CONFIG"];
    //如果这个没有就去取
    if (!window["CYMINI_GAME_VERSION_CONFIG"]) {
      if (window["CYMINI_VERSION_CONFIG"]) {
        //取CYMINI_VERSION_CONFIG和基准的配置信息的类型
        let configList = window["CYMINI_VERSION_CONFIG"]["configList"];
        let configValue = this.getConfigFromArray(configList, configKeyName);
        if (configValue) {
          return configValue;
        }
      }
    } else {
      let configList = window["CYMINI_GAME_VERSION_CONFIG"];
      let configValue = this.getConfigFromArray(configList, configKeyName);
      if (configValue) {
        return configValue;
      }
      configList = window["CYMINI_VERSION_CONFIG"]["configList"];
      configValue = this.getConfigFromArray(configList, configKeyName);
      if (configValue) {
        return configValue;
      }
    }
    return this.getValueFromStringKey(
      this.cyminiBasicConfig,
      configKeyName.split(".")
    );
  }
}

export default CyminiConfig;
