import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

class KeyboardDismissView extends PureComponent {
  public render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {this.props.children}
      </TouchableWithoutFeedback>
    );
  }
}

export default KeyboardDismissView;
