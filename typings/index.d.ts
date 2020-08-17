/// <reference types='node' />

import { Plugin, UserCredentials } from '@hapi/hapi';

declare module '@hapi/hapi' {
    interface Request {
        /**
         * A shortcut to `request.auth.credentials` making the authenticated
         * credentials available at `request.user`.
         */
        user: HapiRequestUser.User
    }
}

declare namespace HapiRequestUser {
    type User = UserCredentials

    interface Options { }
}

declare var HapiRequestUser: Plugin<HapiRequestUser.Options>;
export = HapiRequestUser;
