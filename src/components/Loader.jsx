import "./loader.css";

function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div class="ui-abstergo">
        <div class="abstergo-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="ui-text">
          Synchronization
          <div class="ui-dot"></div>
          <div class="ui-dot"></div>
          <div class="ui-dot"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
