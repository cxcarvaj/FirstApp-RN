import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {
  label: string;
  position?: 'right' | 'left';
  onPress: () => void;
}

export const FloatingActionButton = ({
  label,
  onPress,
  position = 'right',
}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.floatingActionButtonLocation,
          position === 'left' ? styles.left : styles.right,
        ]}
        activeOpacity={0.75}>
        <View style={styles.floatingActionButton}>
          <Text style={styles.floatingActionButtonText}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const android = () => {
    return (
      <View
        style={[
          styles.floatingActionButtonLocation,
          position === 'left' ? styles.left : styles.right,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
          <View style={styles.floatingActionButton}>
            <Text style={styles.floatingActionButtonText}>{label}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  floatingActionButtonLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },

  floatingActionButton: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 9,
  },
  floatingActionButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
