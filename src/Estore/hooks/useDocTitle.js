import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - ritle`;
        } else {
            document.title = 'Title';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
