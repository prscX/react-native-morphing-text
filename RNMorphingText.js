import React, { Component } from "react";
import { StyleSheet, ViewPropTypes, Platform } from "react-native";
import PropTypes from "prop-types";

import { requireNativeComponent } from "react-native";

class RNMorphingText extends Component {
  static Effects: {
    Scale: "scale",
    Evaporate: "evaporate",
    Fall: "fall",
    Pixelate: "pixelate",
    Sparkle: "sparkle",
    Burn: "burn",
    Anvil: "anvil",
    Line: "line",
    Typer: "typer",
    Rainbow: "rainbow",
    Fade: "fade"
  }

  render() {
    if (Platform.OS === 'ios') {
        return (
            <MorphingText
                style={{ width: this.props.width, height: this.props.height }}
                value={JSON.stringify(this.props.children)}
                effect={this.props.effect}
                color={this.props.color}
                size={this.props.size}
            />
        );
    } else if (Platform.OS === 'android') {
        return (
            <MorphingText
                style={{ width: this.props.width, height: this.props.height }}
                props={{
                    value: JSON.stringify(this.props.children),
                    effect: this.props.effect,
                    color: this.props.color,
                    colorSpace: this.props.colorSpace,
                    colorSpeed: this.props.colorSpeed,
                    typerSpeed: this.props.typerSpeed,
                    charIncrease: this.props.charIncrease,
                    size: this.props.size,
                    animationDuration: this.props.size,
                    lineColor: this.props.lineColor,
                    lineWidth: this.props.lineWidth
                }}
            />
        );
    }
  }
}

RNMorphingText.propTypes = {
  ...ViewPropTypes,

  value: PropTypes.string,
  effect: PropTypes.string,

  color: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  colorSpace: PropTypes.number,
  colorSpeed: PropTypes.number,
  size: PropTypes.number,
  typerSpeed: PropTypes.number,
  charIncrease: PropTypes.number,
  props: PropTypes.object,

  animationDuration: PropTypes.number,
  lineColor: PropTypes.string,
  lineWidth: PropTypes.number
};

RNMorphingText.defaultProps = {
  value: "",
  effect: "scale",
  size: 12,

  width: "100%",
  height: "100%",

  color: "#000000",
  colorSpace: 150,
  colorSpeed: 5,
  typerSpeed: 100,
  charIncrease: 2,
  animationDuration: 3000,
  lineColor: "#1367bc",
  lineWidth: 4
};

const MorphingText = requireNativeComponent(
  "RNMorphingText",
  RNMorphingText,
  {
    nativeOnly: {}
  }
);

export default RNMorphingText;
