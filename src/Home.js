import React from "react"
import "./Home.css"
import Banner from "./Banner"
import Card from "./Card"

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home-section">
            <Card 
                src="https://a0.muscache.com/im/pictures/miso/Hosting-35670982/original/c54a2df2-d658-4d81-870a-0d3228069e3c.jpeg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts"
            />
            <Card 
                src="https://a0.muscache.com/im/pictures/62d0e70e-7107-4d1b-beb5-21f0ad2bb811.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card 
                src="https://a0.muscache.com/im/pictures/fa2ed873-e726-4e6d-ab1a-28bc7c69d805.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family"
            />
            </div>

            <div className="home-section">
                <Card
                    src="https://a0.muscache.com/im/pictures/d689d720-e09d-44e3-92bf-05e5a0fbfd34.jpg?im_w=720"
                    title="Home in Pulau Perhentian Besar"
                    description="RM1,500 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/70598047/602c79d9_original.jpg?im_w=720"
                    title="Home in Tanjong Karang"
                    description="RM530 night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-643872693820545316/original/7cd1e7c0-1dce-4d2c-9a56-67bfd681e72b.jpeg?im_w=720"
                    title="Home in Bayan Lepas"
                    description="RM800 night"
                />

            </div>
        </div>
    )
}

export default Home