const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

require("dotenv").config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_CLUSTERNAME,
  DB_NAME_DEV,
  DB_NAME,
  MESSAGE_COLLECTION,
} = process.env;

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: DB_USERNAME,
        mongodb_password: DB_PASSWORD,
        mongodb_clustername: DB_CLUSTERNAME,
        mongodb_database: DB_NAME_DEV,
        mongodb_messagecollection: MESSAGE_COLLECTION,
      },
    }
  }
  return {
    env: {
      mongodb_username: DB_USERNAME,
      mongodb_password: DB_PASSWORD,
      mongodb_clustername: DB_CLUSTERNAME,
      mongodb_database: DB_NAME,
      mongodb_messagecollection: MESSAGE_COLLECTION,
    },
  };
};
