import {useEffect, useState} from 'react';
import axios from 'axios';

export const useDocumentTitle = title => {
    useEffect(
        () => {
            document.title = title;
        },
        [title]
    )
};
export const useLocalStorageState = (key, defaultValue) => {
    const [count, setCount] = useState(() => {
        // initial count from localStorage
        let value;
        try {
            value = parseInt(JSON.parse(window.localStorage.getItem(key)) || String(defaultValue));
        } catch (e) {
            value = defaultValue;
        }
        return value;
    });
    useEffect(
        () => {
            // after increment count then update it into localStorage
            window.localStorage.setItem(key, count);
        },
        [key, count]
    );
    return [count, setCount];
};

export const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
            const fetchData = async () => {
                setIsLoading(true);
                setIsError(false);
                try {
                    const result = await axios(url);
                    setData(result.data);
                } catch (e) {
                    setIsError(true);
                }
                setIsLoading(false);
            };
            fetchData();
        }, [url]
    );
    return [{ data, isLoading, isError }, setUrl];
};