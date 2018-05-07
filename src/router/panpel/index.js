import integrals from './integral'

const routes = [
    {
        path: '/integral/',
        name: 'integral',
        component: resolve => require(['view/panpel/integral/'], resolve),
        children: [...integrals],
        redirect: '/integral/integral-manage/business'
    },
    {
        path: '/banking/',
        name: 'banking',
        component: resolve => require(['view/panpel/banking/'], resolve)
    },
    {
        path: '/funds/',
        name: 'funds',
        component: resolve => require(['view/panpel/funds/'], resolve)
    },
    {
        path: '/payment/',
        name: 'payment',
        component: resolve => require(['view/panpel/payment/'], resolve)
    },
    {
        path: '/balance/',
        name: 'balance',
        component: resolve => require(['view/panpel/balance/'], resolve)
    },
    {
        path: '/invoice/',
        name: 'invoice',
        component: resolve => require(['view/panpel/invoice/'], resolve)
    }
]

export default routes
