// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   VrButton
// } from 'react-360';

// export default class middVR extends React.Component {
//   render() {
//     return (
//       <View style={styles.panel}>
//         <View style={styles.greetingBox}>
//           <Text style={styles.greeting}>
//             Welcome to the Davis Family Library
//           </Text>
          
//         </View>
//       </View>
//     );
//   }
// };

// state = {
//   count: 0 
// };

// const styles = StyleSheet.create({
//   panel: {
//     // Fill the entire surface
//     width: 1000,
//     height: 600,
//     backgroundColor: 'rgba(255, 255, 255, 0.4)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   greetingBox: {
//     padding: 20,
//     backgroundColor: '#000000',
//     borderColor: '#639dda',
//     borderWidth: 2,
//   },
//   greeting: {
//     fontSize: 30,
//   },
// });

// AppRegistry.registerComponent('middVR', () => middVR);


import React from 'react';
import {AppRegistry, View, NativeModules, Text, StyleSheet} from 'react-360';

import {wrap} from './components/Wrapper/Wrapper.component';
import TooltipComponent from './components/Tooltip/Tooltip.component';
import TransitionComponent from './components/Transition/Transition.component';

export default class MainComponent extends React.Component {
  render () {
    NativeModules.TooltipModule.setTooltips (this.props.name);
    NativeModules.TransitionModule.setTooltips (this.props.name);
    //return <View />;
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to Middlebur College! Spin around to begin your tour!
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});


AppRegistry.registerComponent ('TransitionComponent', () =>
  wrap (TransitionComponent)
);
AppRegistry.registerComponent ('MainComponent', () => wrap (MainComponent));
AppRegistry.registerComponent ('TooltipComponent', () =>
  wrap (TooltipComponent)
);
//ppRegistry.registerComponent('middVR', () => middVR);
