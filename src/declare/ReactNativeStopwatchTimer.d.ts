declare module 'react-native-stopwatch-timer' {
  import { Component } from 'react';
  import { ViewStyle, TextStyle } from 'react-native';

  interface StopwatchProps {
    start?: boolean;
    reset?: boolean;
    msecs?: boolean;
    options?: { container?: ViewStyle; text?: TextStyle };
    laps?: boolean;
    getTime?: (time: string) => void;
    startTime?: number;
    getMsecs?: (msecs: number) => void;
  }

  class Stopwatch extends Component<StopwatchProps> {}

  class Time extends Component {}

  export { Stopwatch, Time };
}
