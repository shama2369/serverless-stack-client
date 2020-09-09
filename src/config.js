export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HCtOSFUARnxNINoNRlM3AeQNOcBGxziLvQVZirmljxpauvZc6qhTXvPa7r8Zdq9cmhBL2w5wMY2xTN2fPvGkvZx00F3sglbSC",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploadssham"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://nsogac5c50.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_6esarEwoA",
    APP_CLIENT_ID: "482mv58b0qji6vsave542msovj",
    IDENTITY_POOL_ID: "us-east-1:62f20b3f-7461-48de-b130-28e07ef59efe"
  }
};
