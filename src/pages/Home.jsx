import MainNavigation from "./nav/MainNavigation";

export default function Home() {
  return (
    <div>
      <MainNavigation />
      <div className="max-w-2xl mx-auto pb-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="text-lg mb-8">
          To get started you can update your site name and your artist data.
        </p>
        <ol className="list-decimal list-inside">
          <li>Site Name: src/config/settings.js</li>
          <li>Artist Data: src/data/artists/artists.json</li>
        </ol>
        <p className="text-lg mt-8">
          And the edit this page in src/pages/Home.jsx
        </p>
      </div>
    </div>
  );
}
