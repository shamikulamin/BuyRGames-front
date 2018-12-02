const dev = {
    gameContext: "http://Buyrgames-env.qinpr4zmkm.us-east-2.elasticbeanstalk.com" //http://localhost:8088/" //
  };
  
  const prod = {
    gameContext: "http://Buyrgames-env.qinpr4zmkm.us-east-2.elasticbeanstalk.com"
  };
  
  export const environment = process.env.NODE_ENV === "production" ? prod : dev;
  