
<p align="center"><b><i>Scale</i></b>
<br/><img src="https://cloud.githubusercontent.com/assets/219689/3491822/96bf5de6-059d-11e4-9826-a6f82025d1af.gif" width="300" height="70" alt="LTMorphingLabel"/>
<p>


<p align="center"><b><i>Evaporate</i></b>
<br/><img src="https://cloud.githubusercontent.com/assets/219689/3491838/ffc5aff2-059d-11e4-970c-6e2d7664785a.gif" width="300" height="70" alt="LTMorphingLabel-Evaporate"/>
</p>


<p align="center"><b><i>Fall</i></b>
<br/><img src="https://cloud.githubusercontent.com/assets/219689/3491840/173c2238-059e-11e4-9b33-dcd21edae9e2.gif" width="300" height="70" alt="LTMorphingLabel-Fall"/>
</p>

<p align="center"><b><i>Pixelate</i></b>
<br/><img src="https://cloud.githubusercontent.com/assets/219689/3491845/29bb0f8c-059e-11e4-9ef8-de56bec1baba.gif" width="300" height="70" alt="LTMorphingLabel-Pixelate"/>
</p>

<p align="center"><b><i>Sparkle</i></b>
<br/><img src="https://cloud.githubusercontent.com/assets/219689/3508789/31e9fafe-0690-11e4-9a76-ba3ef45eb53a.gif" width="300" height="70" alt="LTMorphingLabel-Sparkle"/>
</p>

<p align="center"><b><i>Burn</i></b>
<br/><img src="https://cloud.githubusercontent.com/assets/219689/3582586/4fb8c52e-0bfe-11e4-9b6f-f070f7f3ab55.gif" width="300" height="70" alt="LTMorphingLabel-Burn"/>
</p>

<p align="center"><b><i>Anvil</i></b>
<br/><img src="https://cloud.githubusercontent.com/assets/219689/3594949/815cd3e8-0caa-11e4-9738-278a9c959478.gif" width="300" height="70" alt="LTMorphingLabel-Anvil"/>
</p>

<p align="center"><b><i>Line</i></b>
<br/><img src="https://github.com/hanks-zyh/HTextView/blob/master/screenshot/demo7.gif" width="300" height="70" />
</p>

<p align="center"><b><i>Typer</i></b>
<br/><img src="https://github.com/hanks-zyh/HTextView/blob/master/screenshot/typer.gif" width="300" height="70" />
</p>

<p align="center"><b><i>Ranbow</i></b>
<br/><img src="https://github.com/hanks-zyh/HTextView/blob/master/screenshot/rainbow.gif" width="300" height="70" />
</p>

<p align="center"><b><i>Fade</i></b>
<br/><img src="https://github.com/hanks-zyh/HTextView/blob/master/screenshot/fade.gif" width="300" height="70" />
</p>


<p align="center">
  <a href="https://www.npmjs.com/package/react-native-morphing-text"><img src="http://img.shields.io/npm/v/react-native-morphing-text.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-morphing-text/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-morphing-text#License"><img src="https://img.shields.io/npm/l/react-native-morphing-text.svg?style=flat" /></a>
</p>

# React Native: Native Morphing Text

A Morphing React Native Text View. This library is a RN Bridge wrapper around [lexrus/LTMorphingLabel](https://github.com/lexrus/LTMorphingLabel) & [hanks-zyh/HTextView](https://github.com/hanks-zyh/HTextView)

Before we dive into on how to use this library. We would like to thank all the contributor of [lexrus/LTMorphingLabel](https://github.com/lexrus/LTMorphingLabel) & [hanks-zyh/HTextView](https://github.com/hanks-zyh/HTextView) for providing such a awesome nice, cool library


## Getting started

`$ npm install react-native-morphing-text --save`

`$ react-native link react-native-morphing-text`

- **iOS**


## Usage

```javascript
import RNMorphingText from 'react-native-morphing-text';

<RNMorphingText effect={"scale"}>{'Text'}</RNMorphingText>

```

## Props

- **Scale:** (iOS, Android) - Default

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `effect`       | `string`     |   scale      | Scale Effect Type
| `color`       | `string`     |   #000000      | Color of font
| `size`       | `number`     |    12     | Size of font



- **Evaporate:** (iOS, Android)

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `effect`       | `string`     |   evaporate      | Scale Effect Type
| `color`       | `string`     |   #000000      | Color of font
| `size`       | `number`     |    12     | Size of font


- **Fall:** (iOS, Android)

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `effect`       | `string`     |   fall      | Scale Effect Type
| `color`       | `string`     |   #000000      | Color of font
| `size`       | `number`     |    12     | Size of font


- **Pixelate:** (iOS)

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `effect`       | `string`     |   pixelate      | Scale Effect Type
| `color`       | `string`     |   #000000      | Color of font
| `size`       | `number`     |    12     | Size of font


- **Sparkle:** (iOS)

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `effect`       | `string`     |   sparkle      | Scale Effect Type
| `color`       | `string`     |   #000000      | Color of font
| `size`       | `number`     |    12     | Size of font


- **Burn:** (iOS)

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `effect`       | `string`     |   burn      | Scale Effect Type
| `color`       | `string`     |   #000000      | Color of font
| `size`       | `number`     |    12     | Size of font


- **Anvil:** (iOS)

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `effect`       | `string`     |   anvil      | Scale Effect Type
| `color`       | `string`     |   #000000      | Color of font
| `size`       | `number`     |    12     | Size of font


- **Line:** (Android)

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `effect`       | `string`     |   line      | Scale Effect Type
| `color`       | `string`     |   #000000      | Color of font
| `size`       | `number`     |    12     | Size of font
| `lineColor`       | `string`     |    #1367bc     | Line Color
| `lineWidth`       | `number`     |    4     | Width of Line


- **Typer:** (Android)

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `effect`       | `string`     |   typer      | Scale Effect Type
| `color`       | `string`     |   #000000      | Color of font
| `size`       | `number`     |    12     | Size of font
| `typerSpeed`       | `number`     |    100     | Speed of Typing
| `charIncrease`       | `number`     |    2     | Char Increase


- **Ranbow:** (Android)

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `effect`       | `string`     |   ranbow      | Scale Effect Type
| `color`       | `array`     |   []      | Color of font
| `size`       | `number`     |    12     | Size of font
| `colorSpace`       | `number`     |    150     | Color Space
| `colorSpeed`       | `number`     |    5     | Speed of color changing


- **Fade:** (Android)

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `effect`       | `string`     |   fade      | Scale Effect Type
| `color`       | `string`     |   #000000      | Color of font
| `size`       | `number`     |    12     | Size of font

## Credits
- **Android:** [hanks-zyh/HTextView](https://github.com/hanks-zyh/HTextView)
- **iOS:** [lexrus/LTMorphingLabel](https://github.com/lexrus/LTMorphingLabel)

## Contribution
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## License
This library is provided under the MIT License.

RNMorphingText @ Pranav Raj Singh Chauhan

## Other Contributions

| [awesome-react-native-native-modules](https://github.com/prscX/awesome-react-native-native-modules)              |
| ----------------- |
| <img src="https://github.com/prscX/awesome-react-native-native-modules/raw/master/assets/hero.png" width="600" height="300" />                  |


| [react-native-spruce](https://github.com/prscX/react-native-spruce)              |
| ----------------- |
| <img src="https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif" width="600" height="300" />                  |


| [react-native-taptargetview](https://github.com/prscX/react-native-taptargetview) & [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios)              |
| ----------------- |
| <img src="https://github.com/KeepSafe/TapTargetView/raw/master/.github/video.gif" width="600" height="600" />  |


| [react-native-bottom-action-sheet](https://github.com/prscX/react-native-bottom-action-sheet)              |
| ----------------- |
| <img src="https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/normal_demo.gif" width="600" height="600" />                  |


| [react-native-popover-menu](https://github.com/prscX/react-native-popover-menu)             |
| ----------------- |
| <img src="https://github.com/zawadz88/MaterialPopupMenu/raw/master/art/components_menus.png" width="600" height="300" />                  |


| [react-native-tooltips](https://github.com/prscX/react-native-tooltips)             |
| ----------------- |
| <img src="https://camo.githubusercontent.com/add1764d27026b81adb117e07a10781c9abbde1b/687474703a2f2f692e696d6775722e636f6d2f4f4e383257526c2e676966" width="600" height="300" />                  |


| [react-native-shine-button](https://github.com/prscX/react-native-shine-button)             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/ChadCSong/ShineButton/master/demo_shine_others.gif" width="600" height="300" />                  |


| [react-native-iconic](https://github.com/prscX/react-native-iconic)             |
| ----------------- |
| <img src="https://camo.githubusercontent.com/b18993cbfe91de8abdc0019dc9a6cd44707eec21/68747470733a2f2f6431337961637572716a676172612e636c6f756466726f6e742e6e65742f75736572732f3338313133332f73637265656e73686f74732f313639363538302f766266706f70666c6174627574746f6e332e676966" width="600" height="300" />                  |


| [react-native-download-button](https://github.com/prscX/react-native-download-button)             |
| ----------------- |
| <img src="https://github.com/fenjuly/ArrowDownloadButton/raw/master/screenshots/arrowdownloadbutton.gif" width="600" height="300" />                  |


| [react-native-siri-wave-view](https://github.com/prscX/react-native-siri-wave-view)             |
| ----------------- |
| <img src="https://cdn.dribbble.com/users/341264/screenshots/2203511/wave.gif" width="600" height="300" />                  |


|  [react-native-material-shadows](https://github.com/prscX/react-native-material-shadows)             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/harjot-oberai/MaterialShadows/master/screens/cover.png" width="600" height="300" />                  |


|  [react-native-gradient-blur-view](https://github.com/prscX/react-native-gradient-blur-view)             |
| ----------------- |
| <img src="https://github.com/prscX/react-native-gradient-blur-view/raw/master/assets/hero.png" width="600" height="300" />                  |


|  [react-native-about-libraries](https://github.com/prscX/react-native-about-libraries)             |
| ----------------- |
| <img src="https://github.com/prscX/react-native-about-libraries/raw/master/hero.png" width="600" height="300" />                  |



|  [vs-essential-plugins](https://github.com/prscX/vs-essential-plugins)             |
| ----------------- |
| <img src="https://pbs.twimg.com/profile_images/922911523328081920/jEKFRPKV_400x400.jpg" width="600" height="300" />                  |


|  [prettier-pack](https://github.com/prscX/prettier-pack)             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png" width="600" height="300" />                  |
