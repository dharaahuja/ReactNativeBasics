import React from 'react';
import { View, Text, Image} from 'react-native';
const logoImage = require("./.bundle/download.png")

function App(): React.JSX.Element {
  return (
    <View>
      <Image source={logoImage} />
    </View>
  );
}

export default App;
