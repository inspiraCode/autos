/**
 * Cat_auto_motor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        motorKey: {
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
