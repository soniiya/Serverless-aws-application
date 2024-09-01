import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from './postConfirmation/resource';

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    postConfirmation
  }
});