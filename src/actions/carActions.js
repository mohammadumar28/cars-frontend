import getCar from '../api/getCar';

export const FETCH_CAR_BEGIN = 'FETCH_CAR_BEGIN';
export const FETCH_CAR_SUCCESS = 'FETCH_CAR_SUCCESS';
export const FETCH_CAR_ERROR = 'FETCH_CAR_ERROR';

const fetchCarBegin = () => ({
  type: FETCH_CAR_BEGIN,
});

const fetchCarSuccess = car => ({
  type: FETCH_CAR_SUCCESS,
  payload: { car },
});

const fetchCarError = error => ({
  type: FETCH_CAR_ERROR,
  payload: { error },
});

const fetchCar = id => dispatch => {
  dispatch(fetchCarBegin());
  return getCar(id)
    .then(async res => {
      await dispatch(fetchCarSuccess(res.data));
      return res.data;
    })
    .catch(err => dispatch(fetchCarError(err)));
};

export default fetchCar;
