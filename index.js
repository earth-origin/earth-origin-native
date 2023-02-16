import {AppRegistry} from 'react-native';
import {Core} from './src/index';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => Core);
