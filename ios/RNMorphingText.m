
#import "RNMorphingText.h"

@implementation RNMorphingText

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()


- (LTMorphingLabel *)view {
    LTMorphingLabel *label = [[LTMorphingLabel alloc] init];
    return label;
}

RCT_CUSTOM_VIEW_PROPERTY(effect, NSString *, LTMorphingLabel) {
    if ([json isEqualToString: @"scale"]) {
        view.morphingEffect = LTMorphingEffectScale;
    } else if ([json isEqualToString: @"evaporate"]) {
        view.morphingEffect = LTMorphingEffectEvaporate;
    } else if ([json isEqualToString: @"fall"]) {
        view.morphingEffect = LTMorphingEffectFall;
    } else if ([json isEqualToString: @"pixelate"]) {
        view.morphingEffect = LTMorphingEffectPixelate;
    } else if ([json isEqualToString: @"sparkle"]) {
        view.morphingEffect = LTMorphingEffectSparkle;
    } else if ([json isEqualToString: @"burn"]) {
        view.morphingEffect = LTMorphingEffectBurn;
    } else if ([json isEqualToString: @"anvil"]) {
        view.morphingEffect = LTMorphingEffectAnvil;
    } else {
        view.morphingEffect = LTMorphingEffectScale;
    }
}


RCT_CUSTOM_VIEW_PROPERTY(color, NSString *, LTMorphingLabel) {
    view.textColor = [RNMorphingText colorFromHexCode: json];
}

RCT_CUSTOM_VIEW_PROPERTY(value, NSString *, LTMorphingLabel) {
    view.text = json;
}


+ (UIColor *) colorFromHexCode:(NSString *)hexString {
    NSString *cleanString = [hexString stringByReplacingOccurrencesOfString:@"#" withString:@""];
    if([cleanString length] == 3) {
        cleanString = [NSString stringWithFormat:@"%@%@%@%@%@%@",
                       [cleanString substringWithRange:NSMakeRange(0, 1)],[cleanString substringWithRange:NSMakeRange(0, 1)],
                       [cleanString substringWithRange:NSMakeRange(1, 1)],[cleanString substringWithRange:NSMakeRange(1, 1)],
                       [cleanString substringWithRange:NSMakeRange(2, 1)],[cleanString substringWithRange:NSMakeRange(2, 1)]];
    }
    if([cleanString length] == 6) {
        cleanString = [cleanString stringByAppendingString:@"ff"];
    }
    
    unsigned int baseValue;
    [[NSScanner scannerWithString:cleanString] scanHexInt:&baseValue];
    
    float red = ((baseValue >> 24) & 0xFF)/255.0f;
    float green = ((baseValue >> 16) & 0xFF)/255.0f;
    float blue = ((baseValue >> 8) & 0xFF)/255.0f;
    float alpha = ((baseValue >> 0) & 0xFF)/255.0f;
    
    return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
}

@end
  
