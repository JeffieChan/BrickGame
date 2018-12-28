var __reflect=this&&this.__reflect||function(e,t,i){e.__class__=t,i?i.push(t):i=[t],e.__types__=e.__types__?i.concat(e.__types__):i},__extends=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);i.prototype=t.prototype,e.prototype=new i},__awaiter=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))(function(a,r){function o(e){try{c(n.next(e))}catch(t){r(t)}}function s(e){try{c(n["throw"](e))}catch(t){r(t)}}function c(e){e.done?a(e.value):new i(function(t){t(e.value)}).then(o,s)}c((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function i(e){return function(t){return n([e,t])}}function n(i){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(o=c.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(n){i=[6,n],r=0}finally{a=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var a,r,o,s,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},GameObject=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.update=function(e){},t}(egret.DisplayObjectContainer);__reflect(GameObject.prototype,"GameObject");var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,i){function n(n){t.call(i,n,e)}if(RES.hasRes(e)){var a=RES.getRes(e);a?n(a):RES.getResAsync(e,n,this)}else RES.getResByUrl(e,n,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[4,platform.login()];case 2:return t.sent(),[4,platform.getUserInfo()];case 3:return e=t.sent(),console.log(e),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return i.sent(),this.stage.removeChild(e),[3,5];case 4:return t=i.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,i){var n=new eui.Theme("resource/default.thm.json",e.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.onSocketOpen=function(){var e="Hello Egret WebSocket";console.log("The connection is successful, send data: "+e),this.webSocket.writeUTF(e)},t.prototype.onReceiveMessage=function(e){var t=this.webSocket.readUTF();console.log("Receive data:"+t)},t.prototype.createGameScene=function(){var e=new egret.DisplayObjectContainer;this.addChild(e),SceneController.instance.setStage(e),SceneController.initGame()},t.prototype.startGame=function(e){console.log("start game")},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,i,n){function a(e){t.call(n,e)}function r(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),i.call(n))}"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(n,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),RES.getResByUrl(e,a,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var GameUtil=function(){function e(){}return e.createButton=function(e){var t=new egret.DisplayObjectContainer,i=this.createBitmapByName("button_png"),n=this.createText(e);return t.addChild(i),t.addChild(n),n.x=i.width/2,n.y=i.height/2,t.touchEnabled=!0,t.touchChildren=!1,t.anchorOffsetX=i.width/2,t.anchorOffsetY=i.height/2,t},e.createText=function(e){var t=new egret.TextField;return t.text=e,t.size=120,t.anchorOffsetX=t.width/2,t.anchorOffsetY=t.height/2,t},e.createBitmapByName=function(e){var t=new egret.Bitmap,i=RES.getRes(e);return t.texture=i,t},e.playSound=function(e){var t=RES.getRes(e);t.play(0,1)},e}();__reflect(GameUtil.prototype,"GameUtil");var GameScene=function(e){function t(){var t=e.call(this)||this;return t._touchStatus=!1,t.addEventListener(egret.Event.ADDED_TO_STAGE,t.initView,t),t.touchEnabled=!0,t.addEventListener(egret.TouchEvent.TOUCH_TAP,t.onClickView,t),t}return __extends(t,e),t.prototype.initView=function(){var e=GameUtil.createBitmapByName("bg_game_png"),t=this.stage.stageWidth,i=this.stage.stageHeight;e.width=t,e.height=i,this.addChild(e),this.rolerContainer=new egret.DisplayObjectContainer,this.brickContainer=new egret.DisplayObjectContainer,this.startGameContianer=new egret.DisplayObjectContainer,this.addChild(this.rolerContainer),this.addChild(this.brickContainer),this.addChild(this.startGameContianer),this.gameObjectList=[],this.deleteObjectList=[],this.initBrickContainer(),this.initStartGameContainer(),this.createRole()},t.prototype.createRole=function(){var e=this.stage.stageWidth,t=this.stage.stageHeight;GameData.ball=new Ball,GameData.ball.width=30,GameData.ball.height=38,GameData.board=new Board,GameData.board.width=120,GameData.board.height=30,GameData.ball.anchorOffsetX=GameData.ball.width/2,GameData.ball.anchorOffsetY=GameData.ball.height/2,GameData.ball.x=(e-GameData.ball.width)/2+GameData.ball.width/2,GameData.ball.y=t-100-GameData.ball.height/2,GameData.board.x=(e-GameData.board.width)/2,GameData.board.y=t-100,this.rolerContainer.addChild(GameData.board),this.rolerContainer.addChild(GameData.ball),this.gameObjectList.push(GameData.board)},t.prototype.initBrickContainer=function(){for(var e=20,t=0;e>t;t++){var i=new Brick(this.stage.stageWidth/5,60);i.width=this.stage.stageWidth/5,i.height=60,i.x=t%5*i.width,i.y=Math.floor(t/5)*i.height,this.brickContainer.addChild(i),this.gameObjectList.push(i)}},t.prototype.initStartGameContainer=function(){var e=new egret.TextField;e.text="准备",e.size=100,e.textColor=16753920,e.stroke=5,e.strokeColor=0,e.x=(this.stage.stageWidth-e.width)/2,e.y=this.stage.stageHeight/5,this.startGameContianer.addChild(e);var t=GameUtil.createBitmapByName("hand_png");t.x=(this.stage.stageWidth-t.width)/2,t.y=this.stage.stageHeight/5*2,this.startGameContianer.addChild(t);var i=new egret.TextField;i.text="点击开始游戏",i.size=80,i.textColor=0,i.stroke=3,i.strokeColor=16777215,i.x=(this.stage.stageWidth-i.width)/2,i.y=this.stage.stageHeight/5*3,this.startGameContianer.addChild(i)},t.prototype.onClickView=function(e){return GameData.hasStart||GameData.isAlive?GameData.hasStart?void GameData.board.move(e.stageX,e.stageY):(SceneController.startGame(),void this.addDragListener()):void SceneController.startGameScene()},t.prototype.startGame=function(){console.log("点击了界面，准备开始游戏"),this.startGameContianer.visible=!1},t.prototype.addDragListener=function(){var e=this;this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(t){console.log("touch begin from GameScene line 246"),e._touchStatus=!0,e.addEventListener(egret.TouchEvent.TOUCH_MOVE,e.mouseMove,e)},this),this.addEventListener(egret.TouchEvent.TOUCH_END,function(t){console.log("touch end from GameScene line 251"),e._touchStatus=!1,e.removeEventListener(egret.TouchEvent.TOUCH_MOVE,e.mouseMove,e)},this)},t.prototype.mouseMove=function(e){this._touchStatus&&(console.log("touch move from GameScene line 261"),GameData.board.move(e.stageX,e.stageY))},t.prototype.startTicker=function(){egret.ticker.$startTick(this.update,this)},t.prototype.stopTicker=function(){egret.ticker.$stopTick(this.update,this)},t.prototype.update=function(e){return GameData.hasStart?(GameData.ball.update(e),this.collision(),!0):!0},t.prototype.collision=function(){for(var e=GameData.ball,t=new egret.Rectangle(e.x,e.y,e.width,e.height),i=function(e){if(e instanceof Brick){var i=new egret.Rectangle(e.x,e.y,e.width,e.height);i.intersects(t)&&!e.hasTrigger&&(console.log("撞到板砖啦~"),GameUtil.playSound("brick_mp3"),GameData.ball.setDirectionY(1),e.hasTrigger=!0,n.deleteObjectList.push(e))}if(e instanceof Board){var a=new egret.Rectangle(e.x,e.y,e.width,e.height);t.intersects(a)&&!e.hasTrigger&&(e.hasTrigger=!0,console.log("撞到木板啦~"),GameUtil.playSound("board_1_mp3"),GameData.ball.setDirectionY(-1),egret.setTimeout(function(){e.hasTrigger=!1},n,500))}for(var r=0,o=n.deleteObjectList;r<o.length;r++){var s=o[r];n.brickContainer.removeChild(s),n.gameObjectList.splice(n.gameObjectList.indexOf(s),1)}n.deleteObjectList.length=0},n=this,a=0,r=this.gameObjectList;a<r.length;a++){var o=r[a];i(o)}},t}(egret.DisplayObjectContainer);__reflect(GameScene.prototype,"GameScene");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var SceneController=function(){function e(){this.startScene=new StartScene,this.gameScene=new GameScene,this.overScene=new OverScene}return Object.defineProperty(e,"instance",{get:function(){return this.sceneController||(this.sceneController=new e),this.sceneController},enumerable:!0,configurable:!0}),e.prototype.setStage=function(e){this._stage=e},e.initGame=function(){var e=this.instance._stage;this.instance.gameScene.parent&&(e.removeChild(this.instance.gameScene),this.instance.gameScene=new GameScene),this.instance.overScene.parent&&(e.removeChild(this.instance.overScene),this.instance.overScene=new OverScene),e.addChild(this.instance.startScene)},e.startGameScene=function(){var e=this.instance._stage;this.instance.startScene.parent&&(e.removeChild(this.instance.startScene),this.instance.startScene=new StartScene),this.instance.gameScene.parent&&(e.removeChild(this.instance.gameScene),this.instance.gameScene=new GameScene),this.instance.overScene.parent&&(e.removeChild(this.instance.overScene),this.instance.overScene=new OverScene),GameData.isAlive=!0,this.loadLevelData(),e.addChild(this.instance.gameScene)},e.startGame=function(){GameData.hasStart=!0,this.instance.gameScene.startGame(),this.instance.gameScene.startTicker()},e.loadLevelData=function(){var e=RES.getRes("config_json");GameData.elements=e.elements,GameData.flatSpeed=e.properties.flatSpeed,GameData.angle=e.properties.angle,GameData.rotation=e.properties.rotation},e.GameEnd=function(){GameData.hasStart=!1,this.instance.gameScene.stopTicker();var e=this.instance._stage;e.addChild(this.instance.overScene)},e}();__reflect(SceneController.prototype,"SceneController");var StartScene=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(egret.Event.ADDED_TO_STAGE,t.initView,t),t}return __extends(t,e),t.prototype.initView=function(){var e=GameUtil.createBitmapByName("bg_jpg");this.addChild(e),e.width=this.stage.stageWidth,e.height=this.stage.stageHeight;var t=GameUtil.createBitmapByName("btn_start_png");this.addChild(t),t.x=(this.stage.stageWidth-t.width)/2,t.y=40,t.touchEnabled=!0,t.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){console.log("点击了开始游戏按钮，进入游戏场景"),SceneController.startGameScene()},this)},t}(egret.DisplayObjectContainer);__reflect(StartScene.prototype,"StartScene");var GameData=function(){function e(){}return e.elements=[],e.rounds=0,e.angle=0,e.rotation=0,e.flatSpeed=0,e}();__reflect(GameData.prototype,"GameData");var Ball=function(e){function t(){var t=e.call(this)||this;return t.acceleration=0,t.directionX=0,t.directionY=0,t.init(),t}return __extends(t,e),Object.defineProperty(t.prototype,"width",{get:function(){return this._role.width},set:function(e){this._role.width=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._role.height},set:function(e){this._role.height=e},enumerable:!0,configurable:!0}),t.prototype.setDirectionX=function(e){this.directionX=e},t.prototype.setDirectionY=function(e){this.directionY=e},t.prototype.init=function(){this._role=GameUtil.createBitmapByName("ball_png"),this.addChild(this._role),this.directionX=1,this.directionY=-1},t.prototype.jump=function(){!GameData.isAlive},t.prototype.flyBall=function(){var e=Math.tan(60),t=this.stage.stageWidth;this.stage.stageHeight;this.x+=this.directionX*GameData.flatSpeed,this.y+=this.directionY*GameData.flatSpeed*e,this.x>=t-this.width/2&&(this.directionX=-1),this.x<=this.width/2&&(this.directionX=1),this.y<=this.width/2&&(this.directionY=1),this.rotation+=GameData.rotation},t.prototype.death=function(e){void 0===e&&(e=!1),GameData.isAlive=!1,e||console.log("game over~")},t.prototype.update=function(e){this.flyBall(),this.y>this.stage.stageHeight+this.height/2&&(GameData.isAlive=!1,GameData.hasStart=!1,SceneController.GameEnd(),console.log("游戏结束"))},t}(GameObject);__reflect(Ball.prototype,"Ball");var Board=function(e){function t(){var t=e.call(this)||this;return t.hasTrigger=!1,t.init(),t}return __extends(t,e),t.prototype.init=function(){var e=GameUtil.createBitmapByName("board_png");e.width=120,e.height=30,this.addChild(e)},t.prototype.move=function(e,t){e<this.width/2?this.x=0:e+this.width/2>=this.stage.stageWidth?this.x=this.stage.stageWidth-this.width:this.x=e-this.width/2},t.prototype.update=function(e){this.x-=GameData.speed},t}(GameObject);__reflect(Board.prototype,"Board");var Brick=function(e){function t(t,i){var n=e.call(this)||this;return n.hasTrigger=!1,n.init(t,i),n}return __extends(t,e),t.prototype.init=function(e,t){var i=GameUtil.createBitmapByName("brick_png");i.width=e,i.height=t,this.addChild(i)},t.prototype.update=function(e){this.x-=GameData.speed},t}(GameObject);__reflect(Brick.prototype,"Brick");var OverScene=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(egret.Event.ADDED_TO_STAGE,t.initView,t),t}return __extends(t,e),t.prototype.initView=function(){var e=GameUtil.createBitmapByName("hand_png");e.anchorOffsetX=e.width/2,e.anchorOffsetY=e.height/2,e.x=this.stage.stageWidth/2,e.y=this.stage.stageHeight/2,this.addChild(e);var t=new egret.TextField;t.text="点击重新游戏",t.size=100,t.stroke=8,t.strokeColor=0,t.anchorOffsetX=t.width/2,t.anchorOffsetY=t.height/2,t.x=this.stage.stageWidth/2,t.y=2*this.stage.stageHeight/3,this.addChild(t)},t}(egret.DisplayObjectContainer);__reflect(OverScene.prototype,"OverScene");