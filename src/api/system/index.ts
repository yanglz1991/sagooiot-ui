import { get, post, del, put } from '/@/utils/request';

export default {
  role: {
    getRoleList: (params: object) => get('/system/role/tree', params),
    getRole: (id: number) => get('/system/role/getInfoById', { id }),
    addRole: (data: object) => post('/system/role/add', data),
    deleteRole: (id: number) => del('/system/role/delInfoById', { id }),
    editRole: (data: object) => put('/system/role/edit', data)
  }
}