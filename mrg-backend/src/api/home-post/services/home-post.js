'use strict';

/**
 * home-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-post.home-post');
