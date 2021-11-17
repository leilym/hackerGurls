// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

// import {ReactInstance} from 'react-360-web';

// function init(bundle, parent, options = {}) {
//   const r360 = new ReactInstance(bundle, parent, {
//     // Add custom options here
//     fullScreen: true,
//     ...options,
//   });

//   // Render your app content to the default cylinder surface
//   r360.renderToSurface(
//     r360.createRoot('middVR', { /* initial props */ }),
//     r360.getDefaultSurface()
//   );

//   // Load the initial environment
//   r360.compositor.setBackground(r360.getAssetURL('img/Davis1.JPG'));
// }

// window.React360 = {init};


   
import { ReactInstance } from "react-360-web";

import { TooltipModule } from "./modules/Tooltip.module";
import { TransitionModule } from "./modules/Transition.module";

export let r360;

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [new TooltipModule(), new TransitionModule()],
    ...options,
  });

  r360.renderToSurface(r360.createRoot("MainComponent"), r360.getDefaultSurface());
  r360.compositor.setBackground(r360.getAssetURL("img/AthleticField.jpg"));
}

window.React360 = { init };