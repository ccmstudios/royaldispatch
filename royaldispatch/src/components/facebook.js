import React from "react";

class Facebook extends React.Component {
  render() {
    return (
      <div className="player-wrapper">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Froyaltydispatchservicesllc&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=479993293087735"
          width="500"
          height="500"
          style={{border:"none",overflow:"hidden"}}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    );
  }
}

export default Facebook;
