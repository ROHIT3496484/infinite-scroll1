import React, { useState, useEffect } from 'react'
import Post from './Post'

const Infinitescroll = () => {
    const [data, setData] = useState([]);
    const [pageno, setPageno] = useState(1);

    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=${pageno}&limit=3`)
        .then((res) => res.json())
            .then((arr) => setData((prev) =>{
               const all = [...prev, ...arr];
                const unique = Array.from(new Map(all.map(item => [item.id, item])).values());
                return unique;
            }))
    }, [pageno]);

    return (
        <div>
            <Post data={data} setPageno={setPageno} />
        </div>
    );
}

export default Infinitescroll