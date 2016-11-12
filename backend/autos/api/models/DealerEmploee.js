/**
 * DealerEmploee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        dealerEmploeeKey: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },

        emploeeName: {
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
        },

        department: {
            type: 'string'
        },

        //Associations:
        dealer: {
            model: 'dealer',
            via: 'emploees'
        },

        offices: {
            collection: 'dealerOffice',
            via: 'emploees',
            dominant: true
        }

    }
};
