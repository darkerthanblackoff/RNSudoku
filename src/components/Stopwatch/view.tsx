import React, { PureComponent } from 'react';
import { Text, View, ViewStyle, TextStyle } from 'react-native';
import { formatTimeString } from '../../utils/time';
import { styles } from './styles';

interface StopwatchProps {
  start?: boolean;
  reset?: boolean;
  msecs?: boolean;
  laps?: boolean;
  startTime?: number;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  getTime?: (time: string) => void;
  getMsecs?: (time: number) => void;
}

interface StopwatchState {
  startTime: number;
  stopTime: number;
  pausedTime: number;
  started: boolean;
  elapsed: number;
}

class StopWatch extends PureComponent<StopwatchProps, StopwatchState> {
  private interval: any;
  public constructor(props: StopwatchProps) {
    super(props);

    const { startTime } = props;

    this.state = {
      startTime: 0,
      stopTime: 0,
      pausedTime: 0,
      started: false,
      elapsed: startTime || 0,
    };
  }

  public componentDidMount() {
    if (this.props.start) {
      this.start();
    }
  }

  public UNSAFE_componentWillReceiveProps(newProps: StopwatchProps) {
    if (newProps.start) {
      this.start();
    } else {
      this.stop();
    }
    if (newProps.reset) {
      this.reset();
    }
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  private start = () => {
    if (this.props.laps && this.state.elapsed) {
      let lap = Date.now() - this.state.stopTime;
      this.setState({
        stopTime: 0,
        pausedTime: this.state.stopTime + lap,
      });
    }

    this.setState({
      startTime: this.state.elapsed
        ? Date.now() - this.state.elapsed
        : Date.now(),
      started: true,
    });

    this.interval = this.interval
      ? this.interval
      : setInterval(() => {
          this.setState({ elapsed: Date.now() - this.state.startTime });
        }, 1000);
  };

  private stop = () => {
    if (this.interval) {
      if (this.props.laps) {
        this.setState({ stopTime: Date.now() });
      }

      clearInterval(this.interval);
      this.interval = null;
    }
    this.setState({ started: false });
  };

  private reset = () => {
    const { startTime } = this.props;

    this.setState({
      elapsed: startTime || 0,
      startTime: 0,
      stopTime: 0,
      pausedTime: 0,
    });
  };

  formatTime = () => {
    const { getTime, getMsecs } = this.props;
    const now = this.state.elapsed;
    const formatted = formatTimeString(now + '', false);

    getTime && getTime(formatted);
    getMsecs && getMsecs(now);

    return formatted;
  };

  public render() {
    const { containerStyle, textStyle } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.text, textStyle]}>{this.formatTime()}</Text>
      </View>
    );
  }
}

export default StopWatch;
