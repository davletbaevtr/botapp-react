import {useState} from "react";

export default function useFetching(callback) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetching(...args) {
        try {
            setIsLoading(true);
            setError('');
            await callback(...args);
        } catch (e) {
            console.log(e);
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}
