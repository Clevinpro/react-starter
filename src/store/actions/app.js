import { ActionsConst } from '../../constants';

export const setType = value => ({
  type: ActionsConst.APP_SET_TYPE,
  value,
});

export const setLoaded = value => ({
  type: ActionsConst.APP_SET_LOADED,
  value,
});

export const uploadImage = data => ({
  type: ActionsConst.APP_UPLOAD_IMAGE,
  data,
});
