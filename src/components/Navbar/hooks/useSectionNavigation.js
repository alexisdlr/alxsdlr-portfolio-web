import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS, SCROLL_SECTION_IDS } from "../navConfig";

const ACTIVATION_LINE = 0.35;
const CLICK_SCROLL_LOCK_MS = 900;

function resolveActiveSection() {
  const threshold = window.innerHeight * ACTIVATION_LINE;
  let active = SCROLL_SECTION_IDS[0];

  for (const id of SCROLL_SECTION_IDS) {
    const element = document.getElementById(id);
    if (!element) continue;

    if (element.getBoundingClientRect().top <= threshold) {
      active = id;
    }
  }

  return active;
}

export function useSectionNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isClickScrolling = useRef(false);
  const clickScrollTimeout = useRef(null);

  const navigateToSection = useCallback(
    (sectionId) => {
      const link = NAV_LINKS.find((item) => item.id === sectionId);

      if (link?.href) {
        setActiveSection(sectionId);
        navigate(link.href);
        return;
      }

      setActiveSection(sectionId);
      isClickScrolling.current = true;

      clearTimeout(clickScrollTimeout.current);
      clickScrollTimeout.current = setTimeout(() => {
        isClickScrolling.current = false;
        setActiveSection(resolveActiveSection());
      }, CLICK_SCROLL_LOCK_MS);

      const scrollToTarget = () => {
        if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      };

      if (pathname !== "/") {
        navigate("/");
        requestAnimationFrame(() => {
          setTimeout(scrollToTarget, 150);
        });
      } else {
        scrollToTarget();
      }
    },
    [navigate, pathname],
  );

  useEffect(() => {
    if (pathname === "/about") {
      setActiveSection("about");
      return;
    }

    if (pathname.startsWith("/projects")) {
      setActiveSection("projects");
      return;
    }

    const updateActiveSection = () => {
      if (isClickScrolling.current) return;
      setActiveSection(resolveActiveSection());
    };

    let cleanup = () => {};

    const attachListeners = () => {
      updateActiveSection();
      window.addEventListener("scroll", updateActiveSection, { passive: true });
      window.addEventListener("resize", updateActiveSection, { passive: true });

      cleanup = () => {
        window.removeEventListener("scroll", updateActiveSection);
        window.removeEventListener("resize", updateActiveSection);
      };
    };

    if (SCROLL_SECTION_IDS.every((id) => document.getElementById(id) || id === "home")) {
      attachListeners();
    } else {
      const interval = setInterval(() => {
        if (SCROLL_SECTION_IDS.every((id) => document.getElementById(id) || id === "home")) {
          clearInterval(interval);
          attachListeners();
        }
      }, 150);

      cleanup = () => clearInterval(interval);
    }

    return () => {
      cleanup();
      clearTimeout(clickScrollTimeout.current);
    };
  }, [pathname]);

  return { activeSection, navigateToSection };
}
