import * as API from '../constants/apiAction';
import * as type from '../constants/typeAction';
import axios from 'axios';
export function requestGetStore() {
  return (dispatch) => {
    return axios({
      method: 'GET',
      url: `${API.API_URL}/array`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      // console.log(response.data);
      dispatch(revecieData(type.GET_STORE, response.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestCreateStore(data) {
  let store = null;
  store = {
    image: data.image,
    title: data.title,
    description: data.description,
    date: data.date
  }
  return (dispatch) => {
    return axios({
      method: 'POST',
      url: `${API.API_URL}/array`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      },
      data: store

    }).then(function (response) {
      // console.log(response.data);
      dispatch(revecieData(type.ADD_STORE, response.data))
    }).catch(function (error) {
      console.log(error);

    })
  }
}
export function requestRemoveStore(id) {
  return (dispatch) => {
    return axios.request({
      method: 'DELETE',
      url: `${API.API_URL}/array/${id}`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      // console.log(response.id);
      dispatch(revecieData(type.DELETE_STORE, id))
    }).catch(function (error) {
      console.log(error);
    })
  }
}
export function requestUpdateStore(data) {
  let store = null;
  store = {
    image: data.image,
    title: data.title,
    description: data.description,
    date: data.date
  }
  return (dispatch) => {
    return axios.request({
      method: 'PUT',
      url: `${API.API_URL}/array/${data.id}`,
      headers: {
        "Accept": "application/json",
        'Content-type': 'application/json'
      },
      data: store
    }).then(function (response) {
      dispatch(revecieData(type.UPDATE_STORE, response.data))
    }).catch(function (error) {
      console.log(error);

    })
  }
}
export function revecieData(action, payload) {
  return {
    type: action,
    payload
  }
}