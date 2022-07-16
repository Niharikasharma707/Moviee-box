import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";

function HomePage() {
  return (
    <div>
      <Navbar showSignInButton={false} logOut={true} />
      <Banner />
      <Row
        title="Now Playing"
        fetchUrl="https://api.themoviedb.org/3/movie/now_playing?api_key=764f7c9744867f406a4f2f298992f079&language=en-US"
        isLargeRow
      />
      <Row
        title="Science Fiction"
        fetchUrl="https://api.themoviedb.org/3/movie/now_playing?api_key=764f7c9744867f406a4f2f298992f079&language=en-US"
      />
      <Row
        title="Horror"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=764f7c9744867f406a4f2f298992f079&language=en-US"
      />
      <Row
        title="Netflix Originals"
        fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=764f7c9744867f406a4f2f298992f079&language=en-US"
      />
      <Row
        title="Action"
        fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=764f7c9744867f406a4f2f298992f079&language=en-US"
      />
    </div>
  );
}

export default HomePage;