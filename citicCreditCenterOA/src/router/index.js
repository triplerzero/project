import splitter from 'vue-splitter/bin/splitter'

var routes = [{
  path: '/',
  redirect: '/main/office/office'
},
{
  path: '/main/:path',
  component: () => {
    return splitter('main/main/home')
  },
  children: [
    {
      path: 'office',
      name: '/main/office/office',
      component: () => {
        return splitter('main/main/office')
      }
    },
    {
      path: 'book',
      name: '/main/book/book',
      component: () => {
        return splitter('main/main/book')
      }
    },
    {
      path: 'mine',
      name: '/main/mine/mine',
      component: () => {
        return splitter('main/main/mine')
      }
    }
  ]
},  {
  path: '/merchants/process/page1',
  name: '/merchants/process/page1',
  component: () => {
    return splitter('merchants/process/page1')
  }
}, {
  path: '/base/settings/phrase',
  name: '/base/settings/phrase',
  component: () => {
    return splitter('base/settings/phrase')
  }
}, {
  path: '/base/settings/agent',
  name: '/base/settings/agent',
  component: () => {
    return splitter('base/settings/agent')
  }
}, {
  path: '/base/settings/my',
  name: '/base/settings/my',
  component: () => {
    return splitter('base/settings/my')
  }
}, {
  path: '/main/details/details',
  name: '/main/details/details',
  component: () => {
    return splitter('main/details/details')
  }
},  {
  path: '/base/settings/setagent',
  name: '/base/settings/setagent',
  component: () => {
    return splitter('base/settings/setagent')
  }
},
{
  path: '/details/items/list',
  name: '/details/items/list',
  component: ()=>{
    return splitter('details/items/list')
  }
},
{
  path: '/details/process/process',
  name: '/details/process/process',
  component: ()=>{
    return splitter('details/process/process')
  }
},
{
  path: '/details/process/option',
  name: '/details/process/option',
  component: ()=>{
    return splitter('details/process/option')
  }
},
{
  path: '/merchants/process/page2',
  name: '/merchants/process/page2',
  component: () => {
    return splitter('merchants/process/page2')
  }
},
{
  path: '/merchants/process/page3',
  name: '/merchants/process/page3',
  component: () => {
    return splitter('merchants/process/page3')
  }
},
{
  path: '/base/settings/custom',
  name: '/base/settings/custom',
  component: () => {
    return splitter('base/settings/custom')
  }
},
{
  path: '/base/settings/customDetail',
  name: '/base/settings/customDetail',
  component: () => {
    return splitter('base/settings/customDetail')
  }
},
{
  path: '/cost/financial/selected',
  name: '/cost/financial/selected',
  component: () => {
    return splitter('cost/financial/selected')
  }
},
{
  path: '/merchants/process/page5',
  name: '/merchants/process/page5',
  component: () => {
    return splitter('merchants/process/page5')
  }
},
{
  path: '/merchants/process/page6',
  name: '/merchants/process/page6',
  component: () => {
    return splitter('merchants/process/page6')
  }
},
{
  path: '/base/settings/addagent',
  name: '/base/settings/addagent',
  component: () => {
    return splitter('base/settings/addagent')
  }
},
{
  path: '/details/items/affix',
  name: '/details/items/affix',
  component: () => {
    return splitter('details/items/affix')
  }
},
{
  path: '/details/items/backlog',
  name: '/details/items/backlog',
  component: () => {
    return splitter('details/items/backlog')
  }
},
{
  path: '/cost/supplier/pay1',
  name: '/cost/supplier/pay1',
  component: () => {
    return splitter('cost/supplier/pay1')
  }
},
{
  path: '/cost/supplier/pay2',
  name: '/cost/supplier/pay2',
  component: () => {
    return splitter('cost/supplier/pay2')
  }
},
{
  path: '/cost/supplier/supplier',
  name: '/cost/supplier/supplier',
  component: () => {
    return splitter('cost/supplier/supplier')
  }
},
{
  path: '/cost/supplier/money',
  name: '/cost/supplier/money',
  component: () => {
    return splitter('cost/supplier/money')
  }
},
{
  path: '/cost/financial/financial',
  name: '/cost/financial/financial',
  component: () => {
    return splitter('cost/financial/financial')
  }
},
{
  path: '/demo/qjs/qjs',
  name: '/demo/qjs/qjs',
  component: () => {
    return splitter('demo/qjs/qjs')
  }
}, {
  path: '/main/login/login',
  name: '/main/login/login',
  component: () => {
    return splitter('main/login/login')
  }
}
]

export default routes
