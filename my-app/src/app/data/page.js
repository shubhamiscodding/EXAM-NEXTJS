"use client"
    import React from 'react';
    export default function GetData() {

        const [data, setData] = React.useState(null);

        React.useEffect(() => {
            const fetchData = async () => {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
                setData(result);
            };
            fetchData();
        }, []);

    return (
        <div>
        <h1>Data Page</h1>
        {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
    }