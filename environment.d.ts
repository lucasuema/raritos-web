// Use this file to declare environment variable types.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // ENVIRONMENT_VARIABLE_NAME: environment_variable_type;
    }
  }
}

export {};
