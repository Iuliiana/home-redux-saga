export const searchSkills = (searchQuery) => {
    const params = new URLSearchParams({q: searchQuery});
    return getJSON(`${process.env.REACT_APP_URL}/api/search?${params}`);
}

export const getServicesList = () => {
    return getJSON(`${process.env.REACT_APP_URL}/api/services`);
}

export const getServiceDetail = (serviceId) => {
    return getJSON(`${process.env.REACT_APP_URL}/api/services/${serviceId}`);
}

export const getNewsList = (lastNewsId) => {
    const params = lastNewsId ? `?${new URLSearchParams({lastSeenId: lastNewsId})}` : '';
    return getJSON(`${process.env.REACT_APP_URL}/api/news${params}`);
}

export const getJSON = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}