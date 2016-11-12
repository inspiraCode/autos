/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        customerKey: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },

        customerName: {
            type: 'string',
            required: true
        },

        phoneOne: {
            type: 'string'
        },

        phoneTwo: {
            type: 'string'
        },

        emailOne: {
            type: 'string'
        },

        emailTwo: {
            type: 'string'
        }

    }
};
