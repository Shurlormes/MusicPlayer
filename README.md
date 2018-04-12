# Music Player

> Music Player 是一个基于 react 开发的 Web 音乐播放器。

> 项目中使用了 redux 来管理全局的 state。UI 使用的是 [antd-design](https://ant.design/docs/react/introduce-cn)。

> 音乐播放使用的是 [react-player](https://github.com/CookPete/react-player)。 **这个插件是纯css+js实现的，不需要依赖jQuery**

在线预览: https://shurlormes.github.io/MusicPlayer/

### 核心依赖版本

* react@16.3.1
* react-redux@5.0.7
* react-router-dom@4.2.2
* react-player@1.3.1
* redux@3.7.2
* antd@3.4.0
* webpack@4.4.1

详细依赖关系见 package.json

### 目录结构
	|-- README
	|-- src
	|   |-- actions                     // ActionCreator 发起更新 state 的请求
	|   |-- common                      // 项目公用资源
	|   |   |-- config                  // 默认音乐列表
	|   |   |-- css                     // 全局样式
	|   |   |-- enums                   // 枚举
	|   |   |__ icon                    // 图标
	|   |-- components                  // 容器
	|   |   |-- Audio                   // 音乐播放组件
	|   |   |-- AudioList               // 音乐列表组件
	|   |   |-- Handle                  // 功能控制组件，音量、播放模式和音乐列表
	|   |   |-- MusicPlayer             // 路由，整体布局组件
	|   |   |-- Player                  // 播放控制组件，切歌、暂停
	|   |   |-- Show                    // 歌曲信息展示组件
	|   |   |-- TopBar                  // 头部组件
	|   |-- reducers                    // 全局 state，响应 ActionCreator
	|   |   |-- audio                   // 当前播放音乐 state
	|   |   |-- handle                  // 功能控制器 state
	|   |   |-- list                    // 音乐列表 state
	|   |   |-- player                  // 播放控制器 state
	|   |   |__ index.jsx               // 结合所有 state
	|   |__ index.jsx                   // 根
	|-- .babelrc                        // babel 配置文件
	|-- .gitignore
	|-- package.json                    // 依赖
	|-- README.md
	|-- webpack.config.js               // 开发环境 webpack 配置文件
	|__ webpack.production.config.js    // 生产环境 webpack 配置文件
	
### 使用说明

	# 下载项目
	git clone git@github.com:Shurlormes/MusicPlayer.git
	
	# 安装依赖
	npm install
	
	# 启动开发服务
	npm run server

	# 编译
	npm run build