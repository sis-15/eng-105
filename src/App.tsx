import Galaxy from './Galaxy'
import './App.css'
import StaggeredMenu from './StaggeredMenu'
import { Outlet, Link } from "react-router-dom";

const menuItems = [
  { label: "Home", ariaLabel: "Home", link: "/" },
  { label: "Bibliography", ariaLabel: "Bibliography", link: "/bibliography" },
  { label: "Gallery", ariaLabel: "Gallery", link: "/gallery" },
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

function App() {
  return (
    <>
      {/* Background Layer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "radial-gradient(circle at 20% 20%, #1a0033, #000010 70%)",
          zIndex: 1,
          pointerEvents: "auto",
          overflow: "hidden",
        }}
      >
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={3}
          glowIntensity={1}
          saturation={1}
          hueShift={140}
          twinkleIntensity={1}
          rotationSpeed={0.1}
          repulsionStrength={0.25}
          starSpeed={0.2}
        />
      </div>

      {/* Foreground UI Layer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 150, 
          zIndex: 30,
        }}
      >
      <StaggeredMenu
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials={false}
    displayItemNumbering={true}
    menuButtonColor="#fff"
    openMenuButtonColor="#fff"
    changeMenuColorOnOpen={true}
    colors={['#B19EEF', '#5227FF']}
    accentColor="#ff6b6b"
  />
      </div>

      {/* This renders Home/Bibliography/Gallery */}
      <Outlet />
    </>
  );
}

export default App
