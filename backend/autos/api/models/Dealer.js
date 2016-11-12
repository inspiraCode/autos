/**
 * Dealer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        dealerKey: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },

        dealerName: {
            type: 'string',
            required: true
        },

        displayName: {
            type: 'string'
        },

        logoURL: {
            type: 'string'
        },

        //Associations:
        offices: {
            collection: 'dealerOffice',
            via: 'dealer'
        },

        emploees: {
            collection: 'dealerEmploee',
            via: 'dealer'
        },

        autos: {
            collection: 'auto',
            via: 'dealer'
        }
    }
};
