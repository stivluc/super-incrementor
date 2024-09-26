import { contextBridge } from 'electron';
import * as path from 'path';

// Declare __non_webpack_require__ to use Node.js require
declare const __non_webpack_require__: NodeRequire;

interface NativeBackend {
  incrementValue: () => void;
  getValue: () => number;
}

console.log('Preload script executed');

try {
  console.log('__dirname:', __dirname);

  const nativeBackendPath = path.join(__dirname, 'native_backend.node');
  console.log('Attempting to load native backend from:', nativeBackendPath);

  // Use __non_webpack_require__ to load native module
  const nativeBackend = __non_webpack_require__(nativeBackendPath) as NativeBackend;
  console.log('Native backend loaded successfully');

  contextBridge.exposeInMainWorld('backend', {
    incrementValue: () => nativeBackend.incrementValue(),
    getValue: () => nativeBackend.getValue(),
  });

  console.log('Backend API exposed to renderer');
} catch (error) {
  console.error('Error in preload script:', error);
}
