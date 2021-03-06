/*
 * @Date: 2020-05-19 10:02:46
 * @LastEditTime: 2020-08-05 10:29:38
 */

import request from '@/utils/request';
import { BaseQueryType } from '@/services';

export interface QueryParamsType extends BaseQueryType {
  orderId?: number;
  ids?: any;
  rechargeAccount?: number;
  status?: number;
  beginCreateTime?: string;
  endCreateTime?: string;
  merchantId?: number;
  customerOrderNo?: number;
}

/**
 * @name: 查询列表
 * @param {QueryParamsType} data
 */
export async function queryList(data: QueryParamsType): Promise<any> {
  return request('/merchant/order/searchMerTradeOrderList', {
    method: 'POST',
    data,
  });
}

/**
 * @name: 置成功
 * @param {QueryParamsType} data
 */
export async function setToSuccess(data: QueryParamsType): Promise<any> {
  return request('/merchant/order/setToSuccess', {
    method: 'POST',
    data,
  });
}

/**
 * @name: 置失败
 * @param {QueryParamsType} data
 */
export async function setToFailed(data: QueryParamsType): Promise<any> {
  return request('/merchant/order/setToFailed', {
    method: 'POST',
    data,
  });
}

/**
 * @name: 重新路由
 * @param {QueryParamsType} data
 */
export async function reroute(data: QueryParamsType): Promise<any> {
  return request('/merchant/order/reroute', {
    method: 'POST',
    data,
  });
}
