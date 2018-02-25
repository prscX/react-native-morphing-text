package ui.morphingtext;

import android.app.Activity;
import android.graphics.Color;
import android.text.Layout;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.hanks.htextview.base.HTextView;
import com.hanks.htextview.evaporate.EvaporateTextView;
import com.hanks.htextview.fade.FadeTextView;
import com.hanks.htextview.fall.FallTextView;
import com.hanks.htextview.line.LineTextView;
import com.hanks.htextview.rainbow.RainbowTextView;
import com.hanks.htextview.scale.ScaleTextView;
import com.hanks.htextview.typer.TyperTextView;

public class RNMorphingText extends ViewGroupManager<ViewGroup> {

    public static final String REACT_CLASS = "RNMorphingText";

    private ThemedReactContext activity;

    @Override
    public String getName() {
        return REACT_CLASS;
    }


    @Override
    protected FrameLayout createViewInstance(final ThemedReactContext reactContext) {
        activity = reactContext;

        return new FrameLayout(reactContext);
    }

    @ReactProp(name = "props")
    public void setProps(FrameLayout frame, ReadableMap props) {
        HTextView textView = (HTextView) frame.getChildAt(0);

        if (textView == null) {
            String effect = props.getString("effect");

            if (effect.equalsIgnoreCase("scale")) {
                textView = new ScaleTextView(activity);
            } else if (effect.equalsIgnoreCase("evaporate")) {
                textView = new EvaporateTextView((activity));
            } else if (effect.equalsIgnoreCase("fall")) {
                textView = new FallTextView(activity);
            } else if (effect.equalsIgnoreCase("line")) {
                textView = new LineTextView(activity);
            } else if (effect.equalsIgnoreCase("typer")) {
                textView = new TyperTextView(activity);
            } else if (effect.equalsIgnoreCase("rainbow")) {
                textView = new RainbowTextView(activity);
            } else if (effect.equalsIgnoreCase("fade")) {
                textView = new FadeTextView(activity);
            } else {
                textView = new ScaleTextView(activity);
            }

            textView.setTextColor(Color.parseColor(props.getString("color")));
            textView.setTextSize(props.getInt("size"));
            textView.onPreDraw();

            frame.addView(textView);

            textView.animateText(props.getString("value"));
        } else {
            textView.animateText(props.getString("value"));
        }
    }
}