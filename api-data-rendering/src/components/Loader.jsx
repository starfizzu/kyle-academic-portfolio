export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="loader-text">Fetching users...</p>
    </div>
  );
}
