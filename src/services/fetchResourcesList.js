
export const fetchResourcesList = (resource) => {
    return fetch (`https://www.swapi.tech/api/${resource}`)
            .then(res => {
                if (!res.ok){
                    throw Error(`errorrrrrr fetching`)
                }
                return res.json();
            })
            .then(res => res.results)
            .catch( err => console.log(err))
};