import React, { useEffect, useState } from "react";

const useApi = (fun) => {
  const [apiData, setApiData] = useState({
    loading: false,
    error: null,
    data: null,
  });
  const handleDealApi = async (formData) => {
    setApiData((pre) => ({ ...pre, loading: true }));
    try {
      const res = await fun(formData);
      if (res.error) {
        setApiData((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setApiData((pre) => ({ ...pre, loading: false, data: res.data }));
      }
    } catch (error) {
      setApiData((pre) => ({ ...pre, loading: false, error: error.message }));
    }
  };

  const { loading, error, data } = apiData;
  return { handleDealApi, loading, error, data };
};

export default useApi;
