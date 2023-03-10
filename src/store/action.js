import {ADD_TODO_INPUT, SET_TODO_INPUT} from './constants'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodoInput = payload => ({
    type: ADD_TODO_INPUT,
    payload
})