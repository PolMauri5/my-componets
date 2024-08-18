import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

interface ButtonProps {
    text: string;
    size?: 'sm' | 'md' | 'lg';
    state?: 'default' | 'focused' | 'disabled';
    fontWeight?: 'normal' | 'bold';
    textColor?: string;
    background?: boolean;
    onPress: () => void;
    width?: number;
    height?: number;
}

const Button: React.FC<ButtonProps> = ({ 
    size = 'md', 
    state = 'default', 
    onPress, 
    text, 
    fontWeight = 'bold',
    textColor = '#F2F5F8',
    background = true,
    width,
    height
}) => {

    const sizeStyle = {
      sm: {
          paddingVertical: 8,
          paddingHorizontal: 16,
      },
      md: {
          paddingVertical: 12,
          paddingHorizontal: 24,
      },
      lg: {
          paddingVertical: 16,
          paddingHorizontal: 32,
      },
    };

    const fontSize = {
        sm: {
            fontSize: 12,
        },
        md: {
            fontSize: 16,
        },
        lg: {
            fontSize: 20,
        },
    };

    const currentSize = sizeStyle[size];
    const currentFontSize = fontSize[size];

    const overlayColor = state === 'focused' ? 'rgba(242, 245, 248, 0.3)' : state === 'default' ? 'rgba(242, 245, 248, 0.65)' : 'rgba(242, 245, 248, 0.99)';

    const shadowStyles = state === 'disabled' ? {} : {
        shadowColor: 'rgba(11, 12, 14, 1)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: state === 'focused' ? 0.4 : 0.2,
        shadowRadius: 4,
        elevation: 2,
    };
    
    const fontWeightFinal = fontWeight === 'bold' ? 'bold' : 'normal';

    const textColorFinal = state === 'disabled' ? 'rgba(11, 12, 14, 0.15)' : textColor;

    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                {
                    paddingHorizontal: currentSize.paddingHorizontal,
                    paddingVertical: currentSize.paddingVertical,
                    width: width ?? 'auto',
                    height: height ?? 'auto',
                    ...shadowStyles,
                }
            ]}
            onPress={state !== 'disabled' ? onPress : undefined}
            disabled={state === 'disabled'}
        >
          {background && (
              <>
                <View style={[styles.blackLayer]} />
                <View
                    style={[
                        styles.overlayLayer,
                        {
                          paddingHorizontal: currentSize.paddingHorizontal,
                          paddingVertical: currentSize.paddingVertical,
                          backgroundColor: overlayColor,
                        }
                    ]}
                />  
              </>
          )}          
            <View style={styles.iconContainer}>
              <Text style={{ fontWeight: fontWeightFinal, color: textColorFinal, fontSize: currentFontSize.fontSize }}>{text}</Text>
            </View>   
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    blackLayer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#0B0C0E',
        borderRadius: 10,
    },
    overlayLayer: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 10,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Button;
