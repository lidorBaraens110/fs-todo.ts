import { useState, useEffect } from "react";
import api from "../api";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux";
import { INITIAL_TO_DOS, INITIAL_CATEGORIES } from "../redux/type";

const useFetchList = (userId: string) => {
  const dispatch: AppDispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.getAllUserData(userId);
        dispatch({ type: INITIAL_TO_DOS, payload: data.todos });
        dispatch({ type: INITIAL_CATEGORIES, payload: data.categories });
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [userId]);

  return { isLoading };
};

export default useFetchList;
