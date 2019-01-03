
const store = {
  state: {
    __pageStack: ['/main/main/home'],
    goback: false,
    selectedProcess: [],
    search: '',
    lv1: [],
    selectedPeople: []
  },
  mutations: {
    addStack(state, path) {
      let fromPath = path.from,
        toPath = path.to
      if (!state.__pageStack.includes(fromPath)) {
        state.__pageStack.push(fromPath)
      }
      state.goback = state.__pageStack.includes(toPath)
      if (state.goback) {
        state.__pageStack = state.__pageStack.slice(0, state.__pageStack.indexOf(toPath) + 1)
      } else {
        state.__pageStack.push(toPath)
      }
    },
    setProcess(state, data) {
      state.selectedProcess = data
    },
    setPeople(state, data) {
      state.selectedPeople = data
    },
    storeSearch(state, e) {
      state.search = e
    },
    storeLv1(state, e) {
      state.lv1 = e
    }
  },
  actions: {
    getLv1({state}) {
      state.lv1 = [
        {
          name: '总行',
          open: false,
          lv2: [
            {
              name: '行长室',
              open: false,
              lv3: [
                {
                  name: '陈莉莉',
                  job: '工程师',
                  sex: '男',
                  department: '财务部',
                  phone: '13131231',
                  tel: '66666',
                  email: '3123123@qq.com'
                }, {
                  name: '陈莉莉',
                  job: '工程师',
                  sex: '男',
                  department: '财务部',
                  phone: '13131231',
                  tel: '66666',
                  email: '3123123@qq.com'
                }, {
                  name: '陈莉莉',
                  job: '工程师',
                  sex: '男',
                  department: '财务部',
                  phone: '13131231',
                  tel: '66666',
                  email: '3123123@qq.com'
                }, {
                  name: '陈莉莉',
                  job: '工程师',
                  sex: '男',
                  department: '财务部',
                  phone: '13131231',
                  tel: '66666',
                  email: '3123123@qq.com'
                },
              ]
            },
            {
              name: '财务部',
              open: false,
              lv3: [
                {
                  name: '陈莉莉',
                  job: '工程师',
                  sex: '男',
                  department: '财务部',
                  phone: '13131231',
                  tel: '66666',
                  email: '3123123@qq.com'
                },
              ]
            }
          ]
        }
      ]
    }
  }
}

export default store
