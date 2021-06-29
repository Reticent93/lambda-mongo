import axios from 'axios'

const url = 'http://localhost:8090'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatePost) => axios.put(`${url}/${id}`, updatePost)
export const deletePost = (id, deletePost) => axios.delete(`${url}/${id}`,deletePost)
export const likePost = (id) => axios.put(`${url}/${id}/likePost`)