//import MapHeader from "../components/common/MapHeader"

const MapPage = () => {
  return (
    <div className="h-screen flex flex-col bg-black overflow-hidden">

      {/* Map */}
      <div className="flex-1">
        <iframe
          src="/map.html"
          title="Road Explorer Map"
          className="w-full h-full border-none"
        />
      </div>

      {/* Footer */}
      <footer className="h-16 bg-black border-t border-purple-500/20 flex items-center justify-center text-center px-4">
        <p className="text-gray-400 text-sm md:text-base">
          Don’t find your place?{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-medium">
            Download the hn-ainro app
          </span>{" "}
          and drive through your area to put it on the map.
        </p>
      </footer>

    </div>
  )
}

export default MapPage