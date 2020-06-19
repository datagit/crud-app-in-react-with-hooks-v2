import {useEffect, useState} from 'react';
// using: http://zetcode.com/javascript/axios/
const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http');

const useDataFromAsyncApi = (defaultConfig) => {
    const [config, setConfig] = useState(defaultConfig);
    const [data, setData] = useState(defaultConfig.defaultResponseData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await axios(config);
                //console.log(result);
                setData(result.data);
            } catch (e) {
                setError(e);
                console.log(e);
            }
            setIsLoading(false);
        }
        fetchData();
    },[config]);
    return [{ data, error, isLoading }, setConfig];
};
export default useDataFromAsyncApi;