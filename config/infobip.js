'use strict'

const Env = use('Env')

module.exports = {
  /*
      |---------------------------------------------------------------------------
      | Use SSL ?
      |---------------------------------------------------------------------------
      |
      |
      |
      |
      */
  encrypted: true,
  /*
      |--------------------------------------------------------------------------
      | Username
      |--------------------------------------------------------------------------
      |
      |
      |
      */
  username: Env.get('INFOBIP_USERNAME'),

  /*
      |--------------------------------------------------------------------------
      | Password
      |--------------------------------------------------------------------------
      |
      |
      |
      */
  password: Env.get('INFOBIP_PASSWORD'),

  /*
      |---------------------------------------------------------------------------
      | Api Key
      |---------------------------------------------------------------------------
      |
      |
      |
      |
      */
  apiKey: Env.get('INFOBIP_API_KEY'),

  /*
      |---------------------------------------------------------------------------
      | Auth Type
      |---------------------------------------------------------------------------
      |
      |
      |
      |
      */
  authType: Env.get('INFOBIP_AUTH_TYPE', 'key')

}
