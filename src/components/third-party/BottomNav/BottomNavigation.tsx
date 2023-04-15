import React, { useEffect} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import "./test.scss"
import { useHistory } from 'react-router-dom';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('trending');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let history = useHistory();

  useEffect(() => {
    switch(value) {
      case "trending":
        history.push("/") 
        break;
      case "movies":
        history.push("/movies") 
        break;
      case "series":
        history.push("/series") 
        break;
      case "search":
        history.push("/search") 
        break;
    }
  }, [value])

  return (
    <BottomNavigation sx ={{
      "backgroundColor": "#1F1A38",
      "bottom": "0",
      "width": "100%",
      "position": "fixed",
      "zIndex": "100"
  }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        style={{color: "#b877c8"}}
        label="Trending"
        value="trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{color: "#b877c8"}}
        label="Movies"
        value="movies"
        icon={<LocalMoviesIcon />}
      />
      <BottomNavigationAction
        style={{color: "#b877c8"}}
        label="TV Series"
        value="series"
        icon={<OndemandVideoIcon />}
      />
      <BottomNavigationAction 
        style={{color: "#b877c8"}} 
        label="Search" 
        value="search" 
        icon={<SearchIcon />} 
      />
    </BottomNavigation>
  );
}