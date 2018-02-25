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
    Fade: "Fade"
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
                    size: this.props.size
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

  color: PropTypes.string,
  size: PropTypes.number,
  props: PropTypes.object
};

RNMorphingText.defaultProps = {
  value: "",
  effect: "scale",
  size: 12,

  width: '100%',
  height: '100%',

  color: '#000000'
};

const MorphingText = requireNativeComponent(
  "RNMorphingText",
  RNMorphingText,
  {
    nativeOnly: {}
  }
);

export default RNMorphingText;
