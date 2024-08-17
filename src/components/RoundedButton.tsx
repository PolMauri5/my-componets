import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

interface ButtonProps {
    icon: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    state?: 'default' | 'focused' | 'disabled',
    onPress: () => void;
}

const RoundedButton: React.FC<ButtonProps> = ({ icon, size = 'md', state = 'default', onPress }) => {

    const sizeStyle = {
        sm: {
            width: 40,
            height: 40,
        },
        md: {
            width: 60,
            height: 60,
        },
        lg: {
            width: 80,
            height: 80,
        },
    };

    const currentSize = sizeStyle[size];

    const overlayColor = state === "focused" ? "rgba(242, 245, 248, 0.3)" : state === "default" ? "rgba(242, 245, 248, 0.65)" : "rgba(242, 245, 248, 0.99)";

    const shadowStyles = state === 'disabled' ? {} : {
        shadowColor: "rgba(11, 12, 14, 1)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: state === 'focused' ? 0.4 : 0.2,
        shadowRadius: 4,
        elevation: 2,
    };
    
    const iconColorFinal = state === 'disabled' ? 'rgba(11, 12, 14, 0.35)' : "#F2F5F8";

    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                {
                    width: currentSize.width,
                    height: currentSize.height,
                    borderRadius: currentSize.width / 2,
                    ...shadowStyles,
                }
            ]}
            onPress={state !== "disabled" ? onPress : undefined}
            disabled={state === "disabled"}
        >
            <View style={[styles.blackLayer, { borderRadius: currentSize.width / 2}]} />
            <View
                style={[
                    styles.overlayLayer,
                    {
                        width: currentSize.width,
                        height: currentSize.height,
                        borderRadius: currentSize.width / 2,
                        backgroundColor: overlayColor,
                    }
                ]}
            />           
            <View style={styles.iconContainer}>
                {React.cloneElement(icon as React.ReactElement, { color: iconColorFinal })}
            </View>   
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    blackLayer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#0B0C0E"
    },
    overlayLayer: {
        ...StyleSheet.absoluteFillObject,
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
    }
});

export default RoundedButton;
