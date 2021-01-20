import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from "./axios";
import movieTrailer from 'movie-trailer';
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code which runs on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || '').then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error));
        }
    };

    // console.table(movies);
    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* container -> posters */}
                {movies.map(movie => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
