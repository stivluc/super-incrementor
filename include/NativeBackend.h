#ifndef IH_NATIVE_BACKEND_H
#define IH_NATIVE_BACKEND_H

#define DLLExport __declspec(dllexport)

extern "C"
{
	DLLExport void IncrementValue();
	DLLExport int GetValue();
}

#endif