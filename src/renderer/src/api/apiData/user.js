export const user = {
    updateProfile: {
        method: "PATCH",
        uri: "user/me",
        formData: true,
        body: {
            data: undefined
        },
        suggestions: {
            raw: "A raw example of the uri: 'user/me'.",
        }
    },
    getOwn: {
        method: 'GET',
        uri: 'user/me',
        suggestions: {
            raw: "A raw example of the uri: 'user/me'."
        }
    },
    logOut: {
        method: "POST",
        uri: "user/logout",
        suggestions: {
            raw: "A raw uri of your required api: 'user/logout'."
        }
    },
    logIn: {
        method: "POST",
        uri: "user/login",
        body:{
            email: undefined,
            password: undefined,
            rememberMe: true,
        },
        suggestions: {
            raw: "A raw uri of your required api: 'user/logout'.",
            email:"Email not provided to the request",
            password:"password not provided to the request",
            rememberMe:"rememberMe not provided to the request",
        }
    },
};


/* export const user = {
    entry: {
        method: 'POST',
        uri: 'user',
        body: {
            signedHash: undefined,
        },
        suggestions: {
            raw: "A raw example of the payload: { signedHash:'slkjflsjfdljsflk', sponsor: '63a440ecc433084825235d55' }. Sponsor is not required.",
            signedHash: "Please provide 'signedHash' field in body object."
        }
    },
    notifySub: {
        method: 'PATCH',
        uri: 'user/notifysub',
        body: {
            sub: undefined
        },
        suggestions: {
            raw: "A raw example of the payload: {sub: Object}",
            sub: "Please provide 'sub' field in body object"
        }
    },
    getUser: {
        method: "GET",
        uri: "user",
        params: {
            id: undefined
        },
        suggestions: {
            raw: "A raw example of the uri: 'user/63a99915d7cc5290ff4df4f7'.",
            id: "Please provide 'id' field in the params object."
        }
    },
    allUser: {
        method: "GET",
        uri: "user",
        suggestions: {
            raw: "A raw example of the uri: 'user'."
        }
    },
    updateProfile: {
        method: "PATCH",
        uri: "user/me",
        formData: true,
        body: {
            data: undefined
        },
        suggestions: {
            raw: "A raw example of the uri: 'user/me'.",
        }
    },
    getOwn: {
        method: 'GET',
        uri: 'user/me',
        suggestions: {
            raw: "A raw example of the uri: 'user/me'."
        }
    },
    totalNewPartners: {
        method: "GET",
        uri: "user/referrals",
        queries: {
            get createdAt() {
                return `{"$gte": "${(new Date(Date.now() - 86400000)).toISOString()}"}`;//86400000 = 1 day
            },
            depth: 10
        },
        suggestions: {
            raw: "A raw exmaple of your required request: 'user/referrals?createdAt={'$gte':'2022-12-21T11:44:13.841Z'}&depth=2'.",
        }
    },
    totalPartners: {
        method: "GET",
        uri: "user/referrals",
        queries: {
            depth: 2
        },
        suggestions: {
            raw: "A raw exmaple of your required request: 'user/referrals?depth=2."
        }
    },
    groupPartners: {
        method: "GET",
        uri: "user/referrals",
        queries: {
            depth: 2
        },
        suggestions: {
            raw: "A raw exmaple of your required request: 'user/referrals?depth=2."
        }
    },
    getRefferrals: {//structure view
        method: "GET",
        uri: "user/referrals",
        queries: {
            depth: undefined
        },
        suggestions: {
            raw: "A raw exmaple of your required request: 'user/referrals?depth=10', NOTE: The maximum depth is 20.",
            depth: "Please provide depth field in the queries object."
        }

    },
    recentReferrals: {
        method: "GET",
        uri: "user/referrals",
        queries: {
            get createdAt() {
                return `{"$gte": "${(new Date(Date.now() - 86400000 * 7)).toISOString()}"}`;//86400000 = 1 day
            }
        },
        suggestions: {
            raw: "A raw exmaple of your required request: 'user/referrals?createdAt={'$gte':'2022-12-21T11:44:13.841Z'}&sponsor=63a440ecc433084825235d55'.",
        }
    },
    approve: {
        method: 'POST',
        uri: 'user/qr/approve',
        body: {
            qrToken: undefined,
        },
        suggestions: {
            raw: "A raw example of the uri: 'user/qr/approve'.",
            qrToken: "Please provide 'qrToken' field in the body object."
        }
    },
    balances: {
        method: "GET",
        uri: "user/balances",
        suggestions: {
            raw: "A raw uri of your required api: 'user/balances'."
        }
    },
    bonus: {
        method: "GET",
        uri: "user/bonus",
        suggestions: {
            raw: "A raw uri of your required api: 'user/bonus'."
        }
    },
    qrGen: {
        method: "GET",
        uri: "user/qr/gen",
        suggestions: {
            raw: "A raw uri of your required api: 'user/qr/gen'."
        }
    },
    removeUser: {
        method: "DELETE",
        uri: 'user',
        params: {
            id: undefined
        },
        suggestions: {
            raw: "A raw example of the uri: 'user/63998726dbd050d2800e9432'.",
            id: "Please provide 'id' field in params object."
        }
    },
    personalArea: {
        method: "GET",
        uri: "user/personalarea",
        suggestions: {
            raw: "A raw example of the uri: 'user/personalarea'.",
        }
    },
    userNetwork: {
        method: "GET",
        uri: "user/network",
        queries: { page: undefined, limit: undefined },
        suggestions: {
            raw: "A raw example of the uri: 'user/network'.",
            id: "Please provide 'id' field in params object. where page number and limit data",
            page: "Please provide 'page' field in query object. where page number is the number of page",
            limit: "please provide 'limit' field in the query object, where limit number is the number of item want to show in a page"
        }
    },
    userNetworkLength: {
        method: "GET",
        uri: "user/allpartners",
        suggestions: {
            raw: "A raw example of the uri: 'user/allpartners'.",
        }
    },
    logOut: {
        method: "POST",
        uri: "user/logout",
        suggestions: {
            raw: "A raw uri of your required api: 'user/logout'."
        }
    },
    tokenVolumeAll: {
        method: "GET",
        uri: "user/tokenvolume",
        suggestions: {
            raw: "A raw example of the uri:'user/tokenvolume'.",
        }

    },
    tokenVolume: {
        method: "GET",
        uri: "user/tokenvolume",
        queries: { day: undefined },
        suggestions: {
            raw: "A raw example of the uri:'user/tokenvolume'.",
            day: "Please provide 'day' field in queries object."
        }
    },
    personalProgress: {
        method: "GET",
        uri: "user/personalprogress",
        suggestions: {
            raw: "A raw example of the uri:'user/personalprogress'"
        }
    },
    volumeInfo: {
        method: "GET",
        uri: "user/volumeinfo",
        suggestions: {
            raw: "A raw example of the uri:'user/volumeinfo'.",
        }
    },
    transactionHistory: {
        method: "GET",
        uri: "/transaction/history",
        suggestions: {
            raw: "A raw example of the uri:'transaction/history'"
        }
    }, recentInvitations: {
        method: "GET",
        uri: "/user/recentinvitations",
        suggestions: {
            raw: "A raw example of the uri:'/user/recentinvitations'",
        }
    }
}; */