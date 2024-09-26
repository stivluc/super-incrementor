#include <napi.h>
#include "../include/NativeBackend.h"

// Wrapper function for IncrementValue
Napi::Value IncrementValueWrapped(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    int increment = 1;

    if (info.Length() > 0 && info[0].IsNumber())
    {
        increment = info[0].As<Napi::Number>().Int32Value();
    }

    for (int i = 0; i < increment; ++i)
    {
        ::IncrementValue(); // Call the native backend function
    }

    return env.Null();
}

// Wrapper function for GetValue
Napi::Value GetValueWrapped(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    int value = ::GetValue(); // Call the native backend function
    return Napi::Number::New(env, value);
}

// Initialize the module
Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set(Napi::String::New(env, "incrementValue"), Napi::Function::New(env, IncrementValueWrapped));
    exports.Set(Napi::String::New(env, "getValue"), Napi::Function::New(env, GetValueWrapped));
    return exports;
}

NODE_API_MODULE(native_backend, Init)
