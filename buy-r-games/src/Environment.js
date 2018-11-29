const dev = {
    gameContext: "http://localhost:8088/"
  };
  
  const prod = {
    gameContext: ""
  };
  
  export const environment = process.env.NODE_ENV === "production" ? prod : dev;
  