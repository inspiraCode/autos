/**
 * Auto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {


    	autoKey: {
    		type:'integer',
    		autoIncrement: true,
    		unique: true,
    		primaryKey: true
    	},

    	price: {
    		type:'float',
    		required: true
    	},

    	cilindersQty: {
    		type: 'integer',
    		required: true
    	},

    	serialNumber: {
    		type:'string',
    		required: true
    	},

    	tiresSize: {
    		type: 'integer'
    	},

    	sunroof: {
    		type: 'boolean'
    	},

    	mat: {
    		type: 'boolean'
    	},

    	doorsQty: {
    		type: 'integer'
    	},

    	colorExterior: {
    		type: 'string'
    	},

    	colorInterior: {
    		type: 'string'
    	},

    	conditions: {
    		type: 'string'
    	},

    	



    }

};
