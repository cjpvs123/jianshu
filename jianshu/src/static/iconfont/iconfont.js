import {createGlobalStyle} from 'styled-components'

export const Icon =createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1585910932184'); /* IE9 */
  src: url('./iconfont.eot?t=1585910932184#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1585910932184') format('woff'),
  url('./iconfont.ttf?t=1585910932184') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1585910932184#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconshouji:before {
  content: "\e697";
}

.iconkb-persion:before {
  content: "\e66c";
}

.iconsuo:before {
  content: "\e61d";
}

.icondayuhao:before {
  content: "\e600";
}

.iconAa1:before {
  content: "\e636";
}

.iconmagnifier:before {
  content: "\e64d";
}

.iconspin:before {
  content: "\e851";
}

.iconyumaobi:before {
  content: "\e616";
}

`
