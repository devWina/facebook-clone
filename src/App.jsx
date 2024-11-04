import "./Styles/Style.css";
import Image from "./assets/imgs/pexels-3.jpg";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="App-inner">
        <div
          className="user-accessibility"
          style={{
            boxShadow: "3px 0px 6px -1px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="options">
            <div className="user-profile">
              <img
                src="/src/assets/icons/user-photo-icon.svg"
                alt="user-icon"
              />
              <p className="description">Minsara Vithanage</p>
            </div>
            <div className="friends">
              <img src="/src/assets/icons/friends-icon.svg" alt="friend-icon" />
              <p className="description">Friends</p>
            </div>
            <div className="saved">
              <img src="/src/assets/icons/saved-icon.svg" alt="saved-icon" />
              <p className="description">Saved</p>
            </div>
            <div className="memories">
              <img
                src="/src/assets/icons/Memories-icon.svg"
                alt="memories-icon"
              />
              <p className="description">Memories</p>
            </div>
            <div className="video">
              <img src="/src/assets/icons/video-icon.svg" alt="video-icon" />
              <p className="description">Video</p>
            </div>
            <div className="events">
              <img src="/src/assets/icons/events-icon.svg" alt="event-icon" />
              <p className="description">Events</p>
            </div>
            <div className="market">
              <img
                src="/src/assets/icons/colored-marketplace-icon.svg"
                alt="market-icon"
              />
              <p className="description">Marketplace</p>
            </div>
            <div className="gaming">
              <img
                src="/src/assets/icons/gaming-video-icon.svg"
                alt="gaming-icon"
              />
              <p className="description">Gaming Video</p>
            </div>
            <div className="support">
              <img
                src="/src/assets/icons/support-icon.svg"
                alt="support-icon"
              />
              <p className="description">Support</p>
            </div>
            <div className="more">
              <div className="see">
                <img
                  src="/src/assets/icons/down-arrow-icon.svg"
                  alt="arrow-icon"
                />
              </div>
              <p className="description">See more</p>
            </div>
          </div>
          <div className="shortcuts">
            <h3>Your Shortcuts</h3>
            <div className="option">
              <div className="figma">
                <img src="/src/assets/icons/figma-icon.svg" alt="figma-icon" />
                <p className="description">Figma designers community</p>
              </div>
              <div className="java">
                <img src="/src/assets/icons/java-icon.svg" alt="java-icon" />
                <p className="description">Java Q and A</p>
              </div>
            </div>
          </div>

          <footer>
            Privacy • Terms • Advertising • Ad Choices • Cookies • More • Meta ©
            2024{" "}
          </footer>
        </div>
        <div className="user-feed"></div>
        <div className="suggestion-section">
          <h3>Suggested</h3>
          <div className="suggested">
            <div
              className="hd"
              style={{
                backgroundImage: `url(${Image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="overlay">
                <div className="content">
                  <div className="heading">
                    <img
                      src="/src/assets/icons/plain-group-icon.svg"
                      alt="group-icon"
                    />

                    <h4>Groups</h4>
                  </div>
                  <div className="paragraph">
                    <p>
                      New ways to find
                      <br /> and join communities.
                    </p>
                  </div>
                  <div className="btn">
                    <button>Find Your Groups</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="description">
              <div className="description-content">
                <div className="description-content-imgs">
                  <img src="/src/assets/imgs/ben.jpg" alt="ben" />
                  <img src="/src/assets/imgs/dave.jpg" alt="dave" />
                  <img src="/src/assets/imgs/hannah.jpg" alt="hannah" />
                </div>
                <p className="description-content-text">
                  josh and 4 friends joined Groups
                </p>
              </div>
            </div>
          </div>
          <h3>Contacts</h3>
          <div className="contacts">
            <div className="contact-list">
              <div className="list-img">
                <img src="/src/assets/imgs/ben.jpg" alt="figma-icon" />
                <p className="description">Alexander Smith</p>
              </div>
              <div className="list-img">
                <img src="/src/assets/imgs/dave.jpg" alt="figma-icon" />
                <p className="description">Benjamin Williams</p>
              </div>
              <div className="list-img">
                <img src="/src/assets/imgs/hannah.jpg" alt="figma-icon" />
                <p className="description">Olivia Johnson</p>
              </div>
              <div className="list-img">
                <img src="/src/assets/imgs/customer-1.jpg" alt="figma-icon" />
                <p className="description">Emily Brown</p>
              </div>
              <div className="list-img">
                <img src="/src/assets/imgs/customer-2.jpg" alt="figma-icon" />
                <p className="description">Liam Davis</p>
              </div>
              <div className="list-img">
                <img src="/src/assets/imgs/customer-3.jpg" alt="figma-icon" />
                <p className="description">Sophia Martinez</p>
              </div>
              <div className="list-img">
                <img src="/src/assets/imgs/customer-4.jpg" alt="figma-icon" />
                <p className="description">Noah Wilson</p>
              </div>
              <div className="list-img">
                <img src="/src/assets/imgs/customer-5.jpg" alt="figma-icon" />
                <p className="description">William Taylor</p>
              </div>
              <div className="list-img">
                <img src="/src/assets/imgs/customer-6.jpg" alt="figma-icon" />
                <p className="description">Jacob Harris</p>
              </div>
              <div className="list-img">
                <img src="/src/assets/imgs/steve.jpg" alt="figma-icon" />
                <p className="description">Thomas Shelby</p>
              </div>
              <div className="list-img">
                <img src="/src/assets/imgs/ben.jpg" alt="figma-icon" />
                <p className="description">Micheal Grey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
