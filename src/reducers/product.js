import DATA_SERVICES_PRODUCTS from "../data/data-services-product";

const INITIAL_STATE = {
    dataProduct: DATA_SERVICES_PRODUCTS,
    filterData:  DATA_SERVICES_PRODUCTS.filter((item) => item.id === 1),
}

export default (state = INITIAL_STATE, action) => {
    return state;
}