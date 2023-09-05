import { fetchResourcesList } from "./fetchResourcesList";
import { getResourceDetails } from "./getResourceDetails";

export const getAllDetails = (resource) => {
    return fetchResourcesList(resource)
        .then(resourceList => {
            return Promise.all(resourceList.map((resource) => {
                return getResourceDetails(resource.url);
            }
            ))

        })
        .catch(err => console.log(err));
}