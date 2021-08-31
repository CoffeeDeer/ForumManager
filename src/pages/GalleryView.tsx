import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const GalleryView = () => {
    const galleryId = "ani1_new1";
    const page = 1;
    const url = `https://gall.dcinside.com/board/lists/?id=${galleryId}&page=${page}`;

    const { data, error, mutate } = useSWR(url, fetcher);

    console.log(data);

    return (
        <div>
            <span>test</span>
        </div>
    );
};
