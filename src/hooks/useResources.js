import { useState, useEffect } from "react";
import { getAllDetails } from "../services/getAllDetails";

const useResources = (targetResource) => {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localStorageRes = localStorage.getItem(targetResource);
    
    if(localStorageRes){
        setResources(JSON.parse(localStorageRes));
        setIsLoading(false);
        return;
    }
    
    getAllDetails(targetResource)
    .then((res) => {
        setResources(res);
        localStorage.setItem(targetResource, JSON.stringify(res));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return [resources, isLoading];
};

export default useResources;
