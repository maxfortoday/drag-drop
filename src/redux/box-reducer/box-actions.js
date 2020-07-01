export const setBox = currentState => ({
 type: 'SET_BOXES',
 payload: currentState
})

export const newBox = currentBox => ({
 type: 'SET_NEW_BOX',
 payload: currentBox
})