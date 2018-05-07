const integrals = [
    {
        path: '/integral/integral-manage/business',
        name: 'business',
        component: resolve => require(['view/panpel/integral/integral-manage/business'], resolve)
    },
    {
        path: '/integral/integral-manage/account',
        name: 'business',
        component: resolve => require(['view/panpel/integral/integral-manage/account'], resolve)
    },
    {
        path: '/integral/integral-manage/account-flow',
        name: 'account-flow',
        component: resolve => require(['view/panpel/integral/integral-manage/account-flow'], resolve)
    }
]

export default integrals
