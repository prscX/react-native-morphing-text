
package ui.morphingtext;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class RNMorphingTextModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNMorphingTextModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNMorphingText";
  }
}