import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const minutesToMillis = min => min * 60 * 1000;
const formatTime = time => (time < 10 ? `0${time}` : time);
const isHours = time => (time > 1 ? `${time}:` : null);

export const Countdown = ({
  minutes = 20,
  isPaused,
  onProgress = () => { },
  onEnd = () => { },
}) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const interval = React.useRef(null);

  const countDown = () => {
    setMillis(time => {

      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  }

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
    if (millis === 0) { onEnd(); }
  }, [millis])

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const hours = Math.floor(millis / 1000 / 60 / 60);
  const minute = Math.floor(millis / 1000 / 60) % 60; //%60 only useful in the case to use hours
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {isHours(hours)}
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.md,
    backgroundColor: 'rgba(94,132,226,0.3)',
  },
});
