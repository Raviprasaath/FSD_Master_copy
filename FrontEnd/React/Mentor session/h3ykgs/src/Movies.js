import "./styles.css";
import { useEffect, useState } from "react";

export default function Movies(props) {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQxNzBjNjQ3MjRkMDIyZTkyOTZhNWZhOTg2NDRlYiIsInN1YiI6IjY0OTAyNGE5MjYzNDYyMDBhZTFjZGI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7il3x7f91baELU8ceqe8OYauvsHEJ-lC34vS3Gslqoc"
  //     }
  //   };
  //   async function apiCall() {
  //     const apiData = await fetch(
  //       "https://api.themoviedb.org/3/trending/movie/day",
  //       options
  //     );
  //     const result = await apiData.json();
  //     const data = await result.results;
  //     console.log(data);
  //     setMovies(data);
  //   }
  //   apiCall();
  // }, [props.ravi]);
  return (
    <ul>
      {console.log("rendering")}
      {props.ravi}
      {/* {movies.map((e, index) => {
        return <li>{e.title}</li>;
      })} */}
    </ul>
  );
}
