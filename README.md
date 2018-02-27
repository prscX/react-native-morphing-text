
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

