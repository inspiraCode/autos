/**
 * Cat_auto_transmission.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        transmissionKey: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },

        value: {
            type: 'string',
            required: true
        }

    }
};
