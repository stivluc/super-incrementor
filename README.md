# Super Incrementor

Created for an interview test.
Super Incrementor is a simple desktop application built with Electron, React, and TypeScript. It integrates a native C++ backend to manage a counter, allowing users to increment, decrement, and reset the value through an intuitive interface.

## **Build Instructions**

1. **Build the Native Addon:**

   - Navigate to the `native-addon` directory:
     ```bash
     cd native-addon
     ```
   - Install dependencies and build using `node-gyp`:
     ```bash
     npm install
     node-gyp rebuild
     ```
   - Return to the project root:
     ```bash
     cd ..
     ```

2. **Build the Application:**

   - Run the build script to compile the main, preload, and renderer processes:
     ```bash
     npm run build
     ```

3. **Start the Application:**

   - Launch the app in development mode:
     ```bash
     npm start
     ```

4. **Create the Executable (.exe):**
   - Package the application into a Windows executable using `electron-builder`:
     ```bash
     npm run dist
     ```
   - The installer will be generated in the `dist/` folder (e.g., `Super Incrementor-Setup-1.0.0.exe`).

## **Usage**

- **Increment:** Click the "+" button to increase the counter.
- **Decrement:** Click the "−" button to decrease the counter.
- **Reset:** Click the "Reset" button to set the counter back to zero.

## **Notes**

- Ensure you have the necessary build tools installed for `node-gyp` to function correctly.
- The executable created is standalone and can be run on any Windows machine without additional dependencies.

---
