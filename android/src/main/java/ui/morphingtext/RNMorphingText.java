package ui.morphingtext;

import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.hanks.htextview.fade.FadeTextView;

public class RNMorphingText extends ViewGroupManager<ViewGroup> {

    public static final String REACT_CLASS = "RNMorphingText";

    @Override
    public String getName() {
        return REACT_CLASS;
    }


    @Override
    protected FrameLayout createViewInstance(final ThemedReactContext reactContext) {

        return new FrameLayout(reactContext);
    }

    @ReactProp(name = "effect")
    public void setEffect(FrameLayout frame, String value) {

    }


    @ReactProp(name = "value")
    public void setValue(FrameLayout frame, String value) {
//
//        Object view;
//        if () {
//
//        }
//
//        ShineButton shineButton = (ShineButton) frame.getChildAt(0);
//        shineButton.setChecked(on);
    }

    @ReactProp(name = "color")
    public void setColor(FrameLayout frame, String value) {

    }
}