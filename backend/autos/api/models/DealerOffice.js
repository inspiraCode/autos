/**
 * DealerOffice.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        dealerOfficeKey: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },

        mapLocation: {
            type: 'string',
            required: true
        },

        officePhone: {
            type: 'string'
        },

        address: {
            type: 'string'
        },

        addressTwo: {
            type: 'string'
        },

        zip: {
            type: 'string'
        },

        city: {
            type: 'string'
        },

        state: {
            type: 'string'
        },

        country: {
            type: 'string'
        },

        //Associations:
        dealer: {
        	model: 'dealer',
        	via: 'offices'
        },

        emploees: {
            collection: 'dealerEmploee',
            via: 'offices'
        }

    }
};
