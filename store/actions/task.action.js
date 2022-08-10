export const SELECTED_TASK = 'SELECTED_TASK';
export const FILTERED_TASK = 'FILTERED_TASK';

export const selectTask = (id) => ({
    type: SELECTED_TASK,
    taskID: id
});

export const filteredTask = (id) => ({
    type: FILTERED_TASK,
    categoryID: id
})