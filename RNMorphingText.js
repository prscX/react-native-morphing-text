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
    Anvil: "anvil"
  }

  render() {
    return (
      <MorphingText
        style={{ width: this.props.width, height: this.props.height }}
        value={JSON.stringify(this.props.children)}
        effect={this.props.effect}
        color={this.props.color}
      />
    );
  }
}

RNMorphingText.propTypes = {
  ...ViewPropTypes,
  
  value: PropTypes.string,
  effect: PropTypes.string,

  color: PropTypes.string
};

RNMorphingText.defaultProps = {
  value: "",
  effect: "scale",

  width: '100%',
  height: '100%',

  color: '#000000',
  tintColor: '#FFFFFF'
};

const MorphingText = requireNativeComponent(
  "RNMorphingText",
  RNMorphingText,
  {
    nativeOnly: {}
  }
);

export default RNMorphingText;
