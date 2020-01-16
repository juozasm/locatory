import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLocations as getLocationsAPI,
  cancelAxiosRequest,
} from 'api';
import { setLocations } from 'store/modules/locations';

function getSortedLocations(locations) {
  return locations.sort(
    (a, b) =>
      a.distance - b.distance || a.location.localeCompare(b.location),
  );
}

export default function useLocations() {
  const [error, setError] = useState();
  const [requesting, setRequesting] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const locations = useSelector(state => state.locations);

  useEffect(() => {
    if (!locations) {
      setRequesting(true);
      setError();
      getLocationsAPI(token)
        .then(res => {
          console.log(res.data);
          dispatch(setLocations(res.data));
          setRequesting(false);
        })
        .catch(error => {
          console.log(error);
          setError(error.message || 'Something went wrong...');
          setRequesting(false);
        });
      return () => {
        cancelAxiosRequest();
      };
    }
  }, []);
  return {
    error,
    requesting,
    locations: locations ? getSortedLocations(locations) : null,
  };
}
