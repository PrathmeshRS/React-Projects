export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discovery_weekly: [],
    // Remove token value after finished developing
    // token: "BQC4DZbBSRqWGlwbhmIZLpJZ75AkbpZvCbEFGLwBflhC-Bq9AuF-UBMekv5-gVodEhu3O7JstNeGKLl8DViqUoERrMPRAqQ50NCa_tqGpbZNW9XplRhxT6GVYIA3kvw1uE0FLXBOqpgEfuhYuLCFbCbBHRMW7eT27sqRE-JBYO3l6ztfunsc"

};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discovery_weekly
            }
        default:
            return state;
    }
}

export default reducer;