import Profile from "../Profile";
import Card from "../Card";

const galleryData = {
  title: "Amazing Scientists",
  theme: {
    backgroundColor: "white",
    padding: "10px",
  },
};

function getTitle() {
  return galleryData.title;
}

function Gallery() {
  const scientists = [
    { id: 1, name: "Aklilu Lemma", imageUrl: "https://i.imgur.com/lICfvbD.jpg", profession: "biologist", accomplishment: "discovery of a natural treatment for schistosomiasis" },
    { id: 2, name: "Marie Curie", imageUrl: "data:image/jpeg;base64,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", profession: "chemist", accomplishment: "pioneering research on radioactivity" },
    { id: 3, name: "Albert Einstein", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Albert_Einstein_in_later_years.jpg/330px-Albert_Einstein_in_later_years.jpg", profession: "physicist", accomplishment: "theory of relativity" },
  ];

  const showTitle = true;

  const chemists = scientists.filter(scientist => scientist.profession === "chemist");
  const others = scientists.filter(scientist => scientist.profession !== "chemist");

  return (
    <section style={galleryData.theme}>
      {showTitle && <h1>{getTitle()}</h1>}
      <h2>Chemists</h2>
      {chemists.length > 0 ? (
        chemists.map((scientist) => (
          <Card key={scientist.id}>
            <Profile
              name={scientist.name}
              imageUrl={scientist.imageUrl}
              isHighlighted={scientist.id === 1}
              profession={scientist.profession}
              accomplishment={scientist.accomplishment}
            />
          </Card>
        ))
      ) : (
        <p>No chemists found.</p>
      )}
      <h2>Everyone Else</h2>
      {others.length > 0 ? (
        others.map((scientist) => (
          <Card key={scientist.id}>
            <Profile
              name={scientist.name}
              imageUrl={scientist.imageUrl}
              isHighlighted={scientist.id === 1}
              profession={scientist.profession}
              accomplishment={scientist.accomplishment}
            />
          </Card>
        ))
      ) : (
        <p>No other scientists found.</p>
      )}
    </section>
  );
}

export default Gallery;