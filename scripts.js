// Add your free TMDB API key from https://www.themoviedb.org/settings/api (optional – fallback posters used if empty)
const TMDB_API_KEY = "";

const movies = [
  // Action
  { title: "Inception", genre: "Action", mood: "Excited", tmdbQuery: "Inception", fallback: { img: "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg", desc: "A thief who steals corporate secrets through dream-sharing technology is offered a chance to have his criminal record erased in exchange for planting an idea into the mind of a C.E.O." } },
  { title: "Mad Max: Fury Road", genre: "Action", mood: "Excited", tmdbQuery: "Mad Max Fury Road", fallback: { img: "https://image.tmdb.org/t/p/w500/hE24GYddosBxh3F8Xt2vS0V2QDv.jpg", desc: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the help of a group of female prisoners and a drifter." } },
  { title: "John Wick", genre: "Action", mood: "Excited", tmdbQuery: "John Wick", fallback: { img: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPy17gOM.jpg", desc: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and took everything from him." } },
  { title: "The Dark Knight", genre: "Action", mood: "Chill", tmdbQuery: "The Dark Knight", fallback: { img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", desc: "Batman must accept one of the greatest psychological and physical tests to fight injustice in Gotham." } },
  { title: "Mission: Impossible - Fallout", genre: "Action", mood: "Happy", tmdbQuery: "Mission Impossible Fallout", fallback: { img: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNee7H8GsLAGxIrTZ2.jpg", desc: "Ethan Hunt and his IMF team must race against time after a mission goes wrong." } },
  // Comedy
  { title: "The Hangover", genre: "Comedy", mood: "Excited", tmdbQuery: "The Hangover", fallback: { img: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP6.jpg", desc: "Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the groom missing." } },
  { title: "Superbad", genre: "Comedy", mood: "Excited", tmdbQuery: "Superbad", fallback: { img: "https://image.tmdb.org/t/p/w500/4KeeA1nYTe0GMfN4eF3zvnbQNBE.jpg", desc: "Two co-dependent high school seniors try to score alcohol for a party to impress their crushes." } },
  { title: "Bridesmaids", genre: "Comedy", mood: "Happy", tmdbQuery: "Bridesmaids", tmdbId: 55721, fallback: { img: "https://image.tmdb.org/t/p/w500/gJtA7hYsBMQ7EM3sPBMUdBfU7a0.jpg", desc: "Competition between the maid of honor and a bridesmaid threatens to upend the life of an out-of-work pastry chef." } },
  { title: "The Grand Budapest Hotel", genre: "Comedy", mood: "Chill", tmdbQuery: "The Grand Budapest Hotel", fallback: { img: "https://image.tmdb.org/t/p/w500/eWdyYQreja6jGCzqHWXpWHDrrPo.jpg", desc: "The adventures of Gustave H, a legendary concierge at a famous European hotel, and Zero Moustafa, the lobby boy who becomes his most trusted friend." } },
  { title: "Eternal Sunshine of the Spotless Mind", genre: "Comedy", mood: "Sad", tmdbQuery: "Eternal Sunshine of the Spotless Mind", fallback: { img: "https://image.tmdb.org/t/p/w500/5MwkWR9tga71R2kdv7kegDfTZ2b.jpg", desc: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories." } },
  // Romance
  { title: "The Notebook", genre: "Romance", mood: "Sad", tmdbQuery: "The Notebook", fallback: { img: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", desc: "An elderly man reads to a woman with dementia. The story he tells recounts the summer when they fell in love in the 1940s." } },
  { title: "Pride & Prejudice", genre: "Romance", mood: "Chill", tmdbQuery: "Pride and Prejudice 2005", fallback: { img: "https://image.tmdb.org/t/p/w500/o8UhmEbWPHmTUxP0lMuCoqNkbB3.jpg", desc: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy." } },
  { title: "La La Land", genre: "Romance", mood: "Happy", tmdbQuery: "La La Land", fallback: { img: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdMc4MZpyqFEZmq.jpg", desc: "A jazz pianist falls for an aspiring actress in Los Angeles while pursuing their dreams." } },
  { title: "Crazy Rich Asians", genre: "Romance", mood: "Excited", tmdbQuery: "Crazy Rich Asians", fallback: { img: "https://image.tmdb.org/t/p/w500/1XiERqDVGq1Yh9K00oyG8fAE3U9.jpg", desc: "An American-born Chinese economics professor travels to Singapore to meet her boyfriend's family and is surprised to discover they are among the country's wealthiest." } },
  { title: "Before Sunrise", genre: "Romance", mood: "Chill", tmdbQuery: "Before Sunrise", fallback: { img: "https://image.tmdb.org/t/p/w500/kq2V5v2OdGnDeKbbVy0XnJfOGnG.jpg", desc: "A young man and woman meet on a train in Europe and spend one evening together in Vienna." } },
  // Drama
  { title: "Forrest Gump", genre: "Drama", mood: "Happy", tmdbQuery: "Forrest Gump", fallback: { img: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", desc: "The presidencies of Kennedy and Johnson, the Vietnam War, and other events unfold from the perspective of an Alabama man with an IQ of 75." } },
  { title: "The Shawshank Redemption", genre: "Drama", mood: "Chill", tmdbQuery: "The Shawshank Redemption", fallback: { img: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." } },
  { title: "Schindler's List", genre: "Drama", mood: "Sad", tmdbQuery: "Schindler's List", fallback: { img: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", desc: "In German-occupied Poland, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution." } },
  { title: "Whiplash", genre: "Drama", mood: "Excited", tmdbQuery: "Whiplash", fallback: { img: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg", desc: "A promising young drummer enrolls at a cutthroat music conservatory where his dreams are pushed to the limit." } },
  { title: "Little Women", genre: "Drama", mood: "Happy", tmdbQuery: "Little Women 2019", fallback: { img: "https://image.tmdb.org/t/p/w500/yn5FeYNTg6Wc4e1bIHbDCD2RXeY.jpg", desc: "Jo March reflects on her life and the lives of her three sisters in 19th-century New England." } },
  // Horror
  { title: "Get Out", genre: "Horror", mood: "Excited", tmdbQuery: "Get Out", fallback: { img: "https://image.tmdb.org/t/p/w500/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg", desc: "A young African-American visits his white girlfriend's parents for the weekend, where his uneasiness eventually reaches a boiling point." } },
  { title: "A Quiet Place", genre: "Horror", mood: "Chill", tmdbQuery: "A Quiet Place", fallback: { img: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg", desc: "A family must live in silence to avoid mysterious creatures that hunt by sound." } },
  { title: "The Conjuring", genre: "Horror", mood: "Sad", tmdbQuery: "The Conjuring", fallback: { img: "https://image.tmdb.org/t/p/w500/wVYrcutDKG0VguyPh5HWj1nRzG.jpg", desc: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse." } },
  { title: "Hereditary", genre: "Horror", mood: "Sad", tmdbQuery: "Hereditary", fallback: { img: "https://image.tmdb.org/t/p/w500/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg", desc: "A family unravels after the death of their reclusive grandmother; a tragic accident leads to disturbing discoveries." } },
  { title: "Midsommar", genre: "Horror", mood: "Chill", tmdbQuery: "Midsommar", fallback: { img: "https://image.tmdb.org/t/p/w500/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg", desc: "A couple travels to Sweden for a festival that occurs once every 90 years, only to find themselves in a nightmare." } },
  // Sci-Fi
  { title: "Interstellar", genre: "Sci-Fi", mood: "Chill", tmdbQuery: "Interstellar", fallback: { img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." } },
  { title: "Blade Runner 2049", genre: "Sci-Fi", mood: "Chill", tmdbQuery: "Blade Runner 2049", fallback: { img: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", desc: "A blade runner unearths a secret that could plunge society into chaos and goes in search of a former blade runner who has been missing for 30 years." } },
  { title: "The Martian", genre: "Sci-Fi", mood: "Happy", tmdbQuery: "The Martian", fallback: { img: "https://image.tmdb.org/t/p/w500/3ndAx3weG6KDkJIRMCi5vXX6Dyb.jpg", desc: "An astronaut is left behind on Mars and must find a way to survive until rescue." } },
  { title: "Arrival", genre: "Sci-Fi", mood: "Sad", tmdbQuery: "Arrival", fallback: { img: "https://image.tmdb.org/t/p/w500/hLudzvGfqb6SxO6o3QbFQrn3bWL.jpg", desc: "A linguist is recruited by the military to communicate with alien lifeforms that have arrived on Earth." } },
  { title: "Dune", genre: "Sci-Fi", mood: "Excited", tmdbQuery: "Dune 2021", fallback: { img: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", desc: "A noble family becomes embroiled in a war for control of the galaxy's most valuable asset." } },
  // Fantasy
  { title: "Harry Potter", genre: "Fantasy", mood: "Happy", tmdbQuery: "Harry Potter and the Sorcerer's Stone", fallback: { img: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg", desc: "A young orphan discovers he is a wizard and is invited to study at Hogwarts." } },
  { title: "The Lord of the Rings", genre: "Fantasy", mood: "Excited", tmdbQuery: "The Lord of the Rings The Fellowship of the Ring", fallback: { img: "https://image.tmdb.org/t/p/w500/6FCuNP8etCfcLahCPwdqlauE1QES.jpg", desc: "A meek Hobbit and eight companions set out on a journey to destroy the One Ring and save Middle-earth." } },
  { title: "Pan's Labyrinth", genre: "Fantasy", mood: "Sad", tmdbQuery: "Pan's Labyrinth", fallback: { img: "https://image.tmdb.org/t/p/w500/4nSGbGQ0tcSSPJ3O3MkrCTGZiUB.jpg", desc: "In the falangist Spain of 1944, a girl escapes into an eerie but captivating fantasy world." } },
  { title: "Spirited Away", genre: "Fantasy", mood: "Chill", tmdbQuery: "Spirited Away", fallback: { img: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", desc: "During her family's move, a sullen 10-year-old wanders into a world ruled by gods, witches, and spirits." } },
  { title: "Stardust", genre: "Fantasy", mood: "Happy", tmdbQuery: "Stardust", fallback: { img: "https://image.tmdb.org/t/p/w500/4E5LVfODEPhXofb2eqHVjkdPd4a.jpg", desc: "To win the heart of his beloved, a young man ventures into a magical realm to retrieve a fallen star." } },
  // More Action
  { title: "The Matrix", genre: "Action", mood: "Excited", tmdbQuery: "The Matrix 1999", fallback: { img: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", desc: "A computer hacker learns from rebels about the true nature of his reality and his role in the war against its controllers." } },
  { title: "Top Gun: Maverick", genre: "Action", mood: "Excited", tmdbQuery: "Top Gun Maverick", fallback: { img: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", desc: "After thirty years, Maverick is still pushing the envelope as a top naval aviator." } },
  { title: "Die Hard", genre: "Action", mood: "Excited", tmdbQuery: "Die Hard", fallback: { img: "https://image.tmdb.org/t/p/w500/c2ptjE9V3t4HekCsts7S5LB4u2O.jpg", desc: "A New York cop battles terrorists who have taken hostages in an LA skyscraper." } },
  { title: "Gladiator", genre: "Action", mood: "Chill", tmdbQuery: "Gladiator 2000", fallback: { img: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRqgw8YqQ.jpg", desc: "A former Roman General seeks justice after being betrayed and his family murdered." } },
  // More Comedy
  { title: "21 Jump Street", genre: "Comedy", mood: "Excited", tmdbQuery: "21 Jump Street", fallback: { img: "https://image.tmdb.org/t/p/w500/kn4FAsf2FVDwajjLo8BzyFVpff2.jpg", desc: "A pair of underachieving cops are sent back to high school to pose as students." } },
  { title: "Legally Blonde", genre: "Comedy", mood: "Happy", tmdbQuery: "Legally Blonde", tmdbId: 8835, fallback: { img: "https://upload.wikimedia.org/wikipedia/en/b/be/Legally_Blonde_film_poster.png", desc: "Elle Woods enrolls in Harvard Law School to win back her ex-boyfriend." } },
  { title: "Shaun of the Dead", genre: "Comedy", mood: "Chill", tmdbQuery: "Shaun of the Dead", fallback: { img: "https://image.tmdb.org/t/p/w500/8VTDsE8nHqnH2ONiyWVQzX0q5Np.jpg", desc: "A man decides to turn his moribund life around by winning back his ex-girlfriend and dealing with an entire community of zombies." } },
  { title: "Hot Fuzz", genre: "Comedy", mood: "Excited", tmdbQuery: "Hot Fuzz", fallback: { img: "https://image.tmdb.org/t/p/w500/zJam2BkJoyL2Ld2oHA6gObdOmM8.jpg", desc: "A skilled London police officer is transferred to a small town with a dark secret." } },
  // More Romance
  { title: "500 Days of Summer", genre: "Romance", mood: "Sad", tmdbQuery: "500 Days of Summer", fallback: { img: "https://image.tmdb.org/t/p/w500/f9mbM0YMLpYemcWx6o2WeiYQLDP.jpg", desc: "An offbeat romantic comedy about a woman who doesn't believe true love exists." } },
  { title: "When Harry Met Sally", genre: "Romance", mood: "Happy", tmdbQuery: "When Harry Met Sally", fallback: { img: "https://image.tmdb.org/t/p/w500/ewwlPr4a8ugEPs2jfbXTLnGVuuv.jpg", desc: "Harry and Sally debate whether or not sex ruins a friendship between a man and a woman." } },
  { title: "Notting Hill", genre: "Romance", mood: "Chill", tmdbQuery: "Notting Hill", fallback: { img: "https://image.tmdb.org/t/p/w500/f1gMw3PVicfdq9thoIO213sh68de.jpg", desc: "The life of a simple bookshop owner changes when he meets the most famous film star in the world." } },
  // More Drama
  { title: "The Pursuit of Happyness", genre: "Drama", mood: "Happy", tmdbQuery: "The Pursuit of Happyness", fallback: { img: "https://image.tmdb.org/t/p/w500/iKxIA7o8fOqbO7oCsnL0c0YdPmd.jpg", desc: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career." } },
  { title: "The Godfather", genre: "Drama", mood: "Chill", tmdbQuery: "The Godfather", fallback: { img: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", desc: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son." } },
  { title: "Parasite", genre: "Drama", mood: "Excited", tmdbQuery: "Parasite 2019", fallback: { img: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan." } },
  // More Horror
  { title: "The Shining", genre: "Horror", mood: "Chill", tmdbQuery: "The Shining 1980", fallback: { img: "https://image.tmdb.org/t/p/w500/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg", desc: "A family heads to an isolated hotel for the winter where an evil presence influences the father into violence." } },
  { title: "Alien", genre: "Horror", mood: "Excited", tmdbQuery: "Alien 1979", fallback: { img: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTXq2xr8Ulbh.jpg", desc: "The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission." } },
  // More Sci-Fi
  { title: "Ex Machina", genre: "Sci-Fi", mood: "Chill", tmdbQuery: "Ex Machina", fallback: { img: "https://image.tmdb.org/t/p/w500/btbRB7BrwO0Ql0aZ8LbUXNFNfWT.jpg", desc: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence." } },
  { title: "E.T. the Extra-Terrestrial", genre: "Sci-Fi", mood: "Happy", tmdbQuery: "E.T.", fallback: { img: "https://image.tmdb.org/t/p/w500/qNAqDJV1Ra5FoOIwmVDxG0S7FSX.jpg", desc: "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world." } },
  { title: "The Terminator", genre: "Sci-Fi", mood: "Excited", tmdbQuery: "The Terminator", fallback: { img: "https://image.tmdb.org/t/p/w500/ktxq0LYgl41I2DUn49TYIaS9dZR.jpg", desc: "A human soldier is sent from the future to protect Sarah Connor from a cyborg assassin." } },
  // More Fantasy
  { title: "Howl's Moving Castle", genre: "Fantasy", mood: "Chill", tmdbQuery: "Howl's Moving Castle", fallback: { img: "https://image.tmdb.org/t/p/w500/TkTPELv4kC3u1lkloush8skOjE.jpg", desc: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard." } },
  { title: "Princess Mononoke", genre: "Fantasy", mood: "Excited", tmdbQuery: "Princess Mononoke", fallback: { img: "https://image.tmdb.org/t/p/w500/8oaoD6ziUv4UEMQUQf0Q6lJE1o0.jpg", desc: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara." } },
  { title: "Coraline", genre: "Fantasy", mood: "Chill", tmdbQuery: "Coraline", fallback: { img: "https://image.tmdb.org/t/p/w500/4jeFXQYytChdHYk5i0MrWmhYLN0.jpg", desc: "An adventurous girl finds another world that is a strangely idealized version of her frustrating home." } },
];

function buildPosterUrl(posterPath) {
  if (!posterPath) return null;
  const path = posterPath.startsWith("/") ? posterPath : "/" + posterPath;
  return `https://image.tmdb.org/t/p/w500${path}`;
}

async function fetchMovieDetails(movie) {
  const fallbackResult = { ...movie.fallback, tmdbId: movie.tmdbId || null };
  if (TMDB_API_KEY && TMDB_API_KEY !== "YOUR_TMDB_API_KEY") {
    try {
      if (movie.tmdbId) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=${TMDB_API_KEY}`
        );
        const data = await res.json();
        if (data.poster_path) {
          return {
            img: buildPosterUrl(data.poster_path),
            desc: data.overview || movie.fallback.desc,
            tmdbId: data.id,
          };
        }
        return { ...fallbackResult, tmdbId: movie.tmdbId };
      }
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movie.tmdbQuery)}`
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const m = data.results[0];
        const img = buildPosterUrl(m.poster_path) || movie.fallback.img;
        return {
          img,
          desc: m.overview || movie.fallback.desc,
          tmdbId: m.id,
        };
      }
    } catch (e) {
      console.warn("TMDB fetch failed:", e);
    }
  }
  return fallbackResult;
}

const WATCH_REGION = "US";

async function fetchWatchProviders(tmdbId) {
  if (!TMDB_API_KEY || TMDB_API_KEY === "YOUR_TMDB_API_KEY" || !tmdbId) return null;
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${tmdbId}/watch/providers?api_key=${TMDB_API_KEY}`
    );
    const data = await res.json();
    const region = data.results?.[WATCH_REGION] || data.results?.["US"];
    if (!region) return null;
    const providers = [];
    if (region.flatrate) providers.push(...region.flatrate.map((p) => p.provider_name));
    if (region.ads) providers.push(...region.ads.map((p) => p.provider_name));
    const watchLink = region.link || (tmdbId ? `https://www.themoviedb.org/movie/${tmdbId}/watch` : null);
    return { watchLink, providers: [...new Set(providers)] };
  } catch (e) {
    return null;
  }
}

async function getRecommendations() {
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;
  const grid = document.getElementById("movieGrid");
  const error = document.getElementById("error");

  grid.innerHTML = "";
  error.textContent = "";

  if (!genre || !mood) {
    error.textContent = "Please select both genre and mood.";
    return;
  }

  // Try exact match first, then genre only, then mood only
  let filtered = movies.filter(
    (m) => m.genre === genre && m.mood === mood
  );
  if (filtered.length === 0) {
    filtered = movies.filter((m) => m.genre === genre);
  }
  if (filtered.length === 0) {
    filtered = movies.filter((m) => m.mood === mood);
  }

  if (filtered.length === 0) {
    error.textContent = "No movies found for this combination.";
    return;
  }

  const btn = document.querySelector(".controls button");
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Loading...";
  }

  const placeholderUrl = (title) =>
    `https://placehold.co/300x450/2d2d44/ffffff?text=${encodeURIComponent(title)}`;

  for (const movie of filtered) {
    const details = await fetchMovieDetails(movie);
    const watchInfo = await fetchWatchProviders(details.tmdbId);
    const img = details.img || placeholderUrl(movie.title);
    const desc = details.desc || `${movie.title} - A great pick for your mood!`;
    const posterFallback = placeholderUrl(movie.title);

    const watchLink =
      watchInfo?.watchLink ||
      (details.tmdbId
        ? `https://www.themoviedb.org/movie/${details.tmdbId}/watch`
        : `https://www.justwatch.com/search?q=${encodeURIComponent(movie.title)}`);
    const providers = watchInfo?.providers || [];
    const providersLabel =
      providers.length > 0
        ? "Available on: " + providers.slice(0, 5).join(", ") + (providers.length > 5 ? "…" : "")
        : "";

    const card = document.createElement("div");
    card.className = "movie-card";
    const safeTitle = movie.title.replace(/"/g, "&quot;");
    const safeDesc = desc.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const searchQuery = encodeURIComponent(movie.title);
    const imdbUrl = `https://www.imdb.com/find?q=${searchQuery}`;
    const rtUrl = `https://www.rottentomatoes.com/search?search=${searchQuery}`;
    const safeImg = img.replace(/"/g, "&quot;");
    const safeWatchLink = watchLink.replace(/"/g, "&quot;");
    const safeProvidersLabel = providersLabel
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
    card.innerHTML = `
      <div class="movie-poster-wrap">
        <img src="${safeImg}" alt="${safeTitle}" loading="lazy" crossorigin="anonymous" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${posterFallback}'">
      </div>
      <h4>${safeTitle}</h4>
      <div class="movie-tags">
        <span class="tag tag-genre">${movie.genre}</span>
        <span class="tag tag-mood">${movie.mood}</span>
      </div>
      <p class="movie-desc">${safeDesc}</p>
      <div class="movie-watch">
        <a href="${safeWatchLink}" target="_blank" rel="noopener noreferrer" class="watch-link">Where to watch →</a>
        ${providersLabel ? `<span class="watch-providers">${safeProvidersLabel}</span>` : ""}
      </div>
      <div class="movie-links">
        <a href="${imdbUrl}" target="_blank" rel="noopener noreferrer">IMDb →</a>
        <a href="${rtUrl}" target="_blank" rel="noopener noreferrer">Rotten Tomatoes →</a>
      </div>
    `;
    grid.appendChild(card);
  }

  if (btn) {
    btn.disabled = false;
    btn.textContent = "🎥 Get Recommendations";
  }
}
