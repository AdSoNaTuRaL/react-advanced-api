'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require("axios");
const netlifyWebhook = strapi.config.get("custom.netliflyWebhook");

module.exports = {
  lifecycles: {
    async afterCreate(_, __) {
      netlifyWebhook && axios.post(netlifyWebhook);
    },
    async afterUpdate(_, __, ___) {
      netlifyWebhook && axios.post(netlifyWebhook);
    }
  }
};
