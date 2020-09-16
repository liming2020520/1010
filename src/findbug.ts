import CyminiConfig from "./cymini-config";

//初始化
let cyminiConfig = new CyminiConfig(Number(game_id_ipt.value), {
  versionNum: Number(version_num_ipt.value),
  platform: Number(platform_ipt.value),
});

//绑定按钮事件获取值
btn_1.onclick = () => {
  const a = cyminiConfig.getConfig(key_ipt.value);
  result_textarea.value = JSON.stringify(a, null, 2);
};
