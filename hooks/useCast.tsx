import { useState, useEffect } from "react";
import { getCastForMovie } from "../services/moviedb";

export const useCastName = (movieId: number) => {
    const [castNames, setCastNames] = useState<string[]>([]);
    useEffect(() => {
        getCastForMovie(movieId).then(({ cast }) => {
            const names = cast.map(member => member.name);
            setCastNames(names);
        });

    }, [movieId]);
    return { castNames };
}