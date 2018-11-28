import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  firstName: {
    label: 'First',
    type: String,
    optional: false,
    max: 35,
    autoform: {
      placeholder: 'First Name',
    },
  },
  lastName: {
    label: 'Last',
    type: String,
    optional: false,
    max: 35,
    autoform: {
      placeholder: 'Last Name',
    },
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      placeholder: 'Address',
    },
  },
  phone: {
    label: 'Telephone',
    type: String,
    optional: false,
    max: 15,
    autoform: {
      placeholder: 'Telephone',
    },
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      placeholder: 'Email',
    },
  },
});

Stuff.attachSchema(StuffSchema);
