/*
 * @Date: 2020-05-09 11:43:12
 * @LastEditTime: 2020-05-11 17:14:53
 */
import { Effect } from 'dva';

import { queryList } from '../services/user';
import { Reducer } from 'redux';
import produce, { Draft } from 'immer';
import { TableListData } from '@/pages/data';

export interface ListItemType {
  roleName: string;
  createTime: string;
  userId: number;
  userName: string;
  roleCode: number;
  id: number;
  realname: string;
  status: number;
}

export interface UserModelState extends TableListData<ListItemType> {}

export interface ModelType {
  namespace: string;
  state: UserModelState;
  effects: {
    fetchList: Effect;
  };
  reducers: {
    setList: Reducer;
  };
}

const Model: ModelType = {
  namespace: 'sysManagerUser',
  state: {
    list: [],
    total: 0,
  },

  effects: {
    *fetchList({ queryParams, callback }, { call, put }) {
      const [err, data, msg] = yield call(queryList, queryParams);
      if (!err) {
        yield put({
          type: 'setList',
          payload: data,
        });
      }
    },
  },

  reducers: {
    setList: produce((draft: Draft<UserModelState>, { payload }): void => {
      draft.list = payload.list;
      draft.total = payload.totalRecords;
    }),
  },
};

export default Model;
