import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  subName: {
    label: 'Subscription Name',
    type: String,
    optional: false,
    max: 35,
    autoform: {
      placeholder: 'Name of your subscription',
    },
  },
  company: {
    label: 'Parent Company',
    type: String,
    optional: true,
    max: 35,
    autoform: {
      placeholder: 'Name of parent company',
    },
  },
  monthly: {
    label: 'Monthly Price',
    type: String,
    optional: false,
    max: 10,
    autoform: {
      placeholder: 'Price you pay monthly',
    },
  },
  yearly: {
    label: 'Yearly Price',
    type: String,
    optional: false,
    max: 10,
    autoform: {
      placeholder: 'Price you pay yearly',
    },
  },
  email: {
    label: 'Email',
    type: String,
    optional: true,
    max: 50,
    autoform: {
      placeholder: 'Email used for subscription',
    },
  },
});

Stuff.attachSchema(StuffSchema);
