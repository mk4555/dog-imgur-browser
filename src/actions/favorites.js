export const addImage = (image) => {
  return {
    type: 'ADD_IMAGE',
    quote: Object.assign({}, image)
  }
}

export const removeImage = (imageId) => {
  return {
    type: 'REMOVE_IMAGE',
    imageId
  }
}
