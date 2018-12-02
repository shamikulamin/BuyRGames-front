export const loggedInTypes = {
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT',
  }
  
  export const loggingIn = () => {
    return {
      type: loggedInTypes.LOG_IN,
      payload:
      {
        loggingIn: true
      }
    }
  }

  export const loggingOut = () => {
    return {
      type: loggedInTypes.LOG_OUT,
      payload:
      {
        loggingIn: false
      }
    }
  }