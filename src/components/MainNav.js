import React, { useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/mediahub-app/");
    else if (value === 1) navigate("/mediahub-app/movies");
    else if (value === 2) navigate("/mediahub-app/series");
    else if (value === 3) navigate("/mediahub-app/search");
  }, [value, navigate]);

  return (
    <BottomNavigation
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieCreationIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<DesktopWindowsIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
