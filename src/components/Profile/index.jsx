function Profile({ name, imageUrl = "https://i.imgur.com/default.jpg", isHighlighted = false, profession, accomplishment }) {
  if (!imageUrl) {
    return (
      <p>{name}: {profession} known for {accomplishment}</p>
    );
  }

  const className = isHighlighted ? 'highlighted-profile' : 'profile';

  if (isHighlighted) {
    return (
      <div className={className} style={{ border: "2px solid gold", padding: "5px" }}>
        <img src={imageUrl} alt={name} />
        <p>Photo of {name} 🌟</p>
        <p>{name}: {profession} known for {accomplishment}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <img src={imageUrl} alt={name} />
      <p>Photo of {name}</p>
      <p>{name}: {profession} known for {accomplishment}</p>
    </div>
  );
}

export default Profile;