import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/minor.css";
import { recordsLst } from "./db";

export const Menu = () => {
  const [navWiev, setNavWiev] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setNavWiev(parseInt(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarStyle = {
    transform:
      navWiev <= 10 ? "translate3d(0px,0px,0px)" : "translate3d(0px,-70px,0px)",
    transition: "all 600ms cubic-bezier(0.550, 0.085, 0.000, 0.990)",
  };
  const [isHovered, setIsHovered] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [activeSubMenu, setActiveSubMenu] = useState(0);
  const [activeDesc, setActiveDesc] = useState(69);
  const NavItem = ({ title, id }) => {
    const handleMouseEnter = () => {
      setIsHovered(true);
      setActiveSubMenu(id);
    };

    return <li onMouseEnter={handleMouseEnter}>{title}</li>;
  };
  const NavItemDesc = ({ title, id, href }) => {
    const handleMouseEnter = () => {
      setActiveDesc(id);
    };

    return (
      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          setActiveDesc(69);
        }}
        to={href}
      >
        {title}
      </Link>
    );
  };
  const navBarList = [
    {
      id: 0,
      title: "Główna",
      args: [
        {
          id: "i0",
          type: "link",
          href: "https://quickblocksui.netlify.app",
          img: "",
          name: "QuickBlocksUI",
          desc: "A comprehensive React component library providing pre-built solutions for adding dynamic and engaging elements to websites, eliminating the need for manual implementation of features like parallax effects and sliders. Facilitates swift and efficient enhancement of user interfaces.",
        },
        {
          id: "i1",
          type: "link",
          img: "",
          name: "Gerczak",
          desc: "giera",
        },
      ],
      desc: `The Projects tab offers a glimpse into our diverse initiatives. Explore innovative solutions, creative designs, and impactful endeavors.`,
      img: "../bg2.jpg",
    },
    {
      id: 1,
      title: "Feed",
      args: [
        {
          id: "i0",
          type: "Tablica",
          img: "",
          name: "Web aplications",
          desc: "sdasdasdas asda asd asdasd ad ad ada",
        },

        {
          id: "i2",
          type: "link",
          img: "",
          name: "Super Łowiciele",
          desc: "sdasdasdas asda asd asdasd ad ad ada",
        },
      ],
      desc: `
      The Services tab provides insights into our offerings. Explore a spectrum of solutions tailored to meet your needs and elevate your experience.`,
      img: "../bg2.jpg",
    },
    {
      id: 2,
      title: "Rezerwacje",
      args: [
        {
          id: "i0",
          type: "link",
          img: "",
          name: "Polecane",
          desc: "sdasdasdas asda asd asdasd ad ad ada",
        },
        {
          id: "i1",
          type: "link",
          img: "",
          name: "Łowiska",
          desc: "sdasdasdas asda asd asdasd ad ad ada",
        },
      ],
      desc: `Przejyzyj naszą oferte łowisk, wedkuj dowoli wraz z RybApką!`,
      img: "../bg2.jpg",
    },
    {
      id: 3,
      title: "Rynek",
      args: [
        {
          id: "i0",
          type: "link",
          img: "",
          name: "Zestawy",
          desc: "sdasdasdas asda asd asdasd ad ad ada",
        },
        {
          id: "i1",
          type: "link",
          img: "",
          name: "Community",
          desc: "sdasdasdas asda asd asdasd ad ad ada",
        },
        {
          id: "i2",
          type: "link",
          img: "",
          name: "Rynek",
          desc: "sdasdasdas asda asd asdasd ad ad ada",
        },
      ],
      desc: `The "THS-Hub" tab is your gateway to our community hub. Access resources, events, and connect with like-minded individuals. Explore opportunities for collaboration, engagement, and stay informed about our organization's community initiatives.`,
      img: "../bg2.jpg",
    },
  ];
  return (
    <nav className="navBarMain" style={navbarStyle}>
      <ul className="navBarList">
        <p>
          <img
            src="/logo2.1.png"
            alt="logo"
            style={{ width: "62px", height: "62px" }}
          ></img>
        </p>
        <p>RybApka</p>
        {/* <li>
          <p id="navBarIt">Projects</p>
          <div className="navBarItemWrapp">
            <div className="navBarItemEl">
              <div className="navBarItem">
                <p>Element 1</p>
                <p>Element 1</p>
              </div>
            </div>
            <div className="navBarItemBridge"></div>
          </div>
        </li> */}
        {navBarList.map((el, i) => (
          <NavItem key={i} id={el.id} title={el.title} />
        ))}
      </ul>

      <div
        className="navBarItemWrappMain"
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div className={`navBarItemWrapp ${isHovered ? "navItemActive" : ""}`}>
          <div
            className="navBarItemLeftImgWrap"
            style={{
              backgroundImage: `url(/${navBarList[activeSubMenu]?.img})`,
            }}
          >
            <div className="gradientNav1"></div>
            {/* <span>{navBarList[activeSubMenu].title}</span> */}
          </div>
          <div className="navBarItemEl">
            <div className="navBarItem">
              {navBarList[activeSubMenu]?.args.map((arg, i) => (
                <NavItemDesc
                  key={i}
                  title={arg.name}
                  id={i}
                  href={arg.href}
                ></NavItemDesc>
              ))}
            </div>
          </div>
          <div className="navBarItemBridge"></div>
          <div className="navBarItemElDesc">
            {activeDesc !== 69 ? (
              <p>{navBarList[activeSubMenu]?.args[activeDesc]?.desc}</p>
            ) : (
              <p>{navBarList[activeSubMenu].desc}</p>
            )}
          </div>
          <div className="lThYnU">
            <span>{navBarList[activeSubMenu].title.toLocaleUpperCase()}</span>
          </div>
          <div className="gradientNav1"></div>
        </div>
      </div>
    </nav>
  );
};
const RecordEl = ({ id, name, fish, weight, location }) => {
  return (
    <div className="record-el-w-m">
      <RecordOverlay />
      <div className="record-el-w">
        <div>
          <p className="TTrec">{id + 1}</p>
          <p className="TNrec">{name}</p>
        </div>
        <div>
          <p>{fish}</p>
          <p>{weight} kg</p>
        </div>
        <p>{location}</p>
      </div>
    </div>
  );
};

const RecordOverlay = () => {
  return (
    <div className="rec-over-w-m">
      <div></div>
    </div>
  );
};
export const Records = () => {
  return (
    <>
      <div className="rec-main-w">
        <div className="rea-main">
          <p className="TTRecdc">Rekordy</p>
          {recordsLst.map((el) => (
            <RecordEl key={el.id} {...el} />
          ))}
          <a href="" className="btnMorerec">
            Więcej
          </a>
        </div>
        <div className="VFcfddd">
          <p className="TTRecdc">Top Łowiska</p>
          <ol>
            <li>Będzin Górny</li>
            <li>Będzin Górny</li>
            <li>Będzin Górny</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export const Layout = ({ c1, c2, c3 }) => {
  return (
    <section className="main-section-wrap">
      {c1}
      <div className="ww-m">{c2}</div>
      <div className="rec-main-w">{c3}</div>
    </section>
  );
};
export const SponsoredLoc = () => {
  return (
    <section className="Spnsorder-w-m">
      <p>Rybapka poleca</p>
    </section>
  );
};

export const FeedWrap = () => {
  return (
    <div>
      <div className="stories-bar">
        <StoryBox img="https://i.pravatar.cc/60?img=5" user="Marek" />
        <StoryBox img="https://i.pravatar.cc/60?img=7" user="Kasia" />
        <StoryBox img="https://i.pravatar.cc/60?img=8" user="Tomek" />
        <StoryBox img="https://i.pravatar.cc/60?img=9" user="Ola" />
        <StoryBox img="https://i.pravatar.cc/60?img=10" user="Basia" />
      </div>
      <FeedEl />
      <FeedEl />
      <FeedEl />
    </div>
  );
};

const StoryBox = ({ img, user }) => (
  <div className="story-box">
    <img src={img} alt={user} className="story-avatar" />
    <span className="story-user">{user}</span>
  </div>
);

const FeedEl = () => {
  return (
    <div className="feedElWrap post-card">
      <div className="post-header">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="post-avatar"
        />
        <div>
          <p className="post-username">Jan Kowalski</p>
          <span className="post-date">17 maja 2025</span>
        </div>
      </div>
      <div className="post-content">
        <p>
          Dzisiaj złowiłem pięknego karpia na łowisku w Będzinie! Pogoda
          dopisała, polecam wszystkim!
        </p>
        <img
          src="https://i.pravatar.cc/600x300"
          alt="post"
          className="post-image-full"
        />
      </div>
      <div className="post-actions">
        <button>👍 Lubię to</button>
        <button>💬 Komentarz</button>
      </div>
      <div className="post-comments">
        <div className="comment">
          <img
            src="https://i.pravatar.cc/32?img=2"
            alt="avatar"
            className="comment-avatar"
          />
          <div>
            <span className="comment-username">Anna Nowak</span>
            <span className="comment-text">Gratulacje! Piękny okaz 🎣</span>
          </div>
        </div>
      </div>
    </div>
  );
};
