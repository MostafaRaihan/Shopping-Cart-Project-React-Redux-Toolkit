import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }, [url]);

    return { data, loading };
};

export default useFetch;
