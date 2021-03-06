/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        userKey: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },

        userName: {
            type: 'string',
            required: true
        },

        displayName: {
            type: 'string'
        },

        role: {
            type: 'string',
            required: true
        },

        password: {
            type: 'string',
            required: true
        },

        email: {
            type: 'string',
            required: true
        }

    }
};
