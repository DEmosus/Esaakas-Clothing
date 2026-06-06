import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import {
    BackgroundImage,
    DirectoryBodyContainer,
    DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();

  return (
    <DirectoryItemContainer onClick={() => navigate(route)}>
      <BackgroundImage src={imageUrl} alt={title} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

DirectoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default DirectoryItem;
