import PropTypes from 'prop-types';
import {
  StatsSection,
  Title,
  List,
  ListItem,
  Label,
  Percent,
} from './Statistics.styled';

export default function Statistics({ stats, title }) {
  return (
    <StatsSection>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <Label>{label}</Label>
            <Percent>{percentage}</Percent>
          </ListItem>
        ))}
      </List>
    </StatsSection>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
