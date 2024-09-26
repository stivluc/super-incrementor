{
  "targets": [
    {
      "target_name": "native_backend",
      "sources": ["native_backend.cpp"],
      "include_dirs": [
        # "<!@(node -p \"require('node-addon-api').include\")", WORKING INCLUDE DIR
        "<!@(node -p \"require('node-addon-api').include\")",
        "../include"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').gyp\")"
      ],
      "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"],
      "libraries": [
        "<(module_root_dir)/../NativeBackend.lib"
      ],
      "msvs_settings": {
        "VCCLCompilerTool": {
          "ExceptionHandling": 1
        }
      }
    }
  ]
}
