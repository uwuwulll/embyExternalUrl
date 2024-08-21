
// 选填项,程序内部使用的公共常量

// 字符串头,用于特殊匹配判断
const strHead = {
  lanIp: ["172.", "10.", "192.", "[fd00:"], // 局域网ip头
  xEmbyClients: {
    seekBug: ["Emby for iOS", "Infuse"],
    maybeProxy: ["Emby Web", "Emby for iOS", "Infuse"],
  },
  "115": "115.com",
  ali: "aliyundrive.net",
  userIds: {
    mediaPathMappingGroup01: ["ac0d220d548f43bbb73cf9b44b2ddf0e"],
    allowInteractiveSearch: [],
  },
  filePaths: {
    mediaMountPath: [],
    redirectStrmLastLinkRule: [],
    mediaPathMappingGroup01: [],
  },
};

// 参数1: 分组名,组内为与关系(全部匹配),多个组和没有分组的规则是或关系(任一匹配)
// 参数2: 匹配类型或来源(字符串参数类型),默认为 "filePath": 本地文件为路径,strm 为远程链接
// ,有分组时不可省略填写,可为表达式
// 参数3: 0: startsWith(str), 1: endsWith(str), 2: includes(str), 3: match(/ain/g)
// ,分组时建议写 "startsWith" 这样的字符串,方便日志中排错
// 参数4: 匹配目标,为数组的多个参数时,数组内为或关系(任一匹配)
const ruleRef = {
  // 这个 key 值仅仅只是代码中引用的可读性标识,需见名知意,可自定义
  // mediaPathMappingGroup01: [
  //   ["mediaPathMappingGroup01", "filePath", "startsWith", strHead.filePaths.mediaPathMappingGroup01], // 目标地址
  //   ["mediaPathMappingGroup01", "r.args.X-Emby-Client", "startsWith:not", strHead.xEmbyClients.seekBug], // 链接入参,客户端类型
  //   ["mediaPathMappingGroup01", "r.args.UserId", "startsWith", strHead.userIds.mediaPathMappingGroup01],
  // ],
  // directHlsEnable: [
  //   // 此条规则代表大于等于 4Mbps 码率时生效,xMediaSource 为固定值,平方使用双星号表示
  //   ["directHlsEnable", "r.xMediaSource.Bitrate", ">=", 4 * 1024 ** 2],
  //   ["directHlsEnable", "r.args.UserId", "==", "ac0d220d548f43bbb73cf9b44b2ddf0e"],
  // ]
};

export default {
  strHead,
  ruleRef,
}
