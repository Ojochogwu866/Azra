@echo off
setlocal

rem File to store build errors
set ERROR_FILE=build-errors.txt

rem Clear previous error file if it exists
type nul > %ERROR_FILE%

rem Run TypeScript type checking
echo Running TypeScript type checking...
call npx tsc --noEmit > tsc-output.tmp 2>&1

rem Check if there were any TypeScript errors
if %ERRORLEVEL% neq 0 (
    echo TypeScript type checking failed. Errors saved to %ERROR_FILE%
    type tsc-output.tmp > %ERROR_FILE%
    echo TypeScript check failed on %DATE% %TIME% >> %ERROR_FILE%
    goto :cleanup
)

rem Run the Vite build and capture output
echo Running Vite build...
call npm run build > build-output.tmp 2>&1

rem Check if there were any Vite build errors
if %ERRORLEVEL% neq 0 (
    echo Build failed. Errors saved to %ERROR_FILE%
    type build-output.tmp > %ERROR_FILE%
    echo Build failed on %DATE% %TIME% >> %ERROR_FILE%
) else (
    echo Build successful!
)

rem Add system information
node -v >> %ERROR_FILE%
npm -v >> %ERROR_FILE%
npm list vite | findstr vite >> %ERROR_FILE%

:cleanup
rem Clean up temporary files
del tsc-output.tmp
del build-output.tmp

endlocal