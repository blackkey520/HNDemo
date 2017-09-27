import { createAction, NavigationActions } from '../utils'
import * as authService from '../services/checklist'

export default {
  namespace: 'checklist',
  state: {
    fetching: false,
    listresult: [],
    current:1,
    pagesize:20,
    total:0
  },
  reducers: {
    fetchStart(state, { payload }) {
      return { ...state, ...payload, fetching: true }
    },
    fetchEnd(state, { payload }) {
      return { ...state, ...payload, fetching: false }
    },
  },
  effects: {
    *getchecklist({ payload }, { call, put }) {
      yield put(createAction('fetchStart')())
      const listresult = yield call(authService.loadchecklist, payload)
      const total=13
      yield put(createAction('fetchEnd')({ listresult,total,current:payload.current }))
    },
  },
}
