import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView 
      style={{marginTop:20}}
      source={{ uri: 'https://korea-app-beqvu.run.goorm.io' }}
    />
  );
}


