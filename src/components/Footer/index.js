import { Container } from "./style";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@material-ui/core/IconButton";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ForumIcon from "@mui/icons-material/Forum";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="footer">
      <div className="menu">
        <Link to="/likelist">
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </Link>
        <Link to="/upload">
          <IconButton>
            <DownloadForOfflineIcon />
          </IconButton>
        </Link>
        <Link to="/chat">
          <IconButton>
            <ForumIcon />
          </IconButton>
        </Link>
      </div>
    </Container>
  );
};

export default Footer;
