import * as types from "./constants"
export const dogapi_get_breeds_image_random_read = () => ({
  type: types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ
})
export const dogapi_get_breeds_image_random_readSucceeded = (
  response,
  starter
) => ({
  type: types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_SUCCEEDED,
  response,
  starter
})
export const dogapi_get_breeds_image_random_readFailed = (error, starter) => ({
  type: types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_FAILED,
  error,
  starter
})
