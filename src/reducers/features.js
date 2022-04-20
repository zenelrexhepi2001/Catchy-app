import GET_DATA_FEATURES from "../data/data-features"

const INITIAL_STATE = {
    data: GET_DATA_FEATURES,
    dataFilterd: GET_DATA_FEATURES.filter((item) => item.id === 1),
}

export default (state = INITIAL_STATE, action) => {
    return state;
}