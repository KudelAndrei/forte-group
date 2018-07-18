const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';

export const create_post = (post) => {
    return {
        type: CREATE_POST,
        post
    }
}

export const delete_post = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}