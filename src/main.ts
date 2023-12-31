/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LAppDelegate } from './lappdelegate'
import * as LAppDefine from './lappdefine'

// 浏览器装入后的处理（打开页面）
window.onload = (): void => {
  // create the application instance
  if (LAppDelegate.getInstance().initialize() == false) {
    return
  }
  LAppDelegate.getInstance().run()
}

//结束时的处理 (刷新或关闭页面)
window.onbeforeunload = (): void => LAppDelegate.releaseInstance() //lambda 匿名函数

/**
 * Process when changing screen size.
 */
window.onresize = () => {
  if (LAppDefine.CanvasSize === 'auto') {
    LAppDelegate.getInstance().onResize()
  }
}
