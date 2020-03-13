import React, { PureComponent } from 'react';
import { Text, View, ViewStyle, TextStyle } from 'react-native';
import { formatTimeString } from '../../utils/time';
import { styles } from './styles';

interface StopwatchProps {
  start?: boolean;
  reset?: boolean;
  msecs?: boolean;
  laps?: boolean;
  getTime?: (time: string) => void;
  startTime?: number;
  getMsecs?: (time: number) => void;
  containerStyle: ViewStyle;
  textStyle: TextStyle;
}

interface StopwatchState {
  startTime: Date | number | null;
  stopTime: Date | number | null;
  pausedTime: number | null;
  started: boolean;
  elapsed: number;
}

class StopWatch extends PureComponent<StopwatchProps, StopwatchState> {
  private interval: any;
  public constructor(props: StopwatchProps) {
    super(props);
    const { startTime } = props;
    this.state = {
      startTime: null,
      stopTime: null,
      pausedTime: null,
      started: false,
      elapsed: startTime || 0,
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.formatTime = this.formatTime.bind(this);
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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  private start() {
    if (this.props.laps && this.state.elapsed) {
      let lap = new Date() - new Date(this.state.stopTime!);
      this.setState({
        stopTime: null,
        pausedTime: this.state.pausedTime! + lap,
      });
    }

    this.setState({
      startTime: this.state.elapsed
        ? new Date() - this.state.elapsed
        : new Date(),
      started: true,
    });

    this.interval = this.interval
      ? this.interval
      : setInterval(() => {
          this.setState({ elapsed: new Date() - this.state.startTime! });
        }, 1000);
  }
  private stop() {
    if (this.interval) {
      if (this.props.laps) {
        this.setState({ stopTime: new Date() });
      }

      clearInterval(this.interval);
      this.interval = null;
    }
    this.setState({ started: false });
  }

  reset() {
    const { startTime } = this.props;
    this.setState({
      elapsed: startTime || 0,
      startTime: null,
      stopTime: null,
      pausedTime: null,
    });
  }

  formatTime() {
    const { getTime, getMsecs } = this.props;
    const now = this.state.elapsed;
    const formatted = formatTimeString(now + '', false);
    if (typeof getTime === 'function') {
      getTime(formatted);
    }
    if (typeof getMsecs === 'function') {
      getMsecs(now);
    }
    return formatted;
  }

  render() {
    const { containerStyle, textStyle } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.text, textStyle]}>{this.formatTime()}</Text>
      </View>
    );
  }
}

export default StopWatch;
