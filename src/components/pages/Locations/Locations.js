import React from 'react';
import styles from './Locations.module.scss';
import Header from 'components/common/Header';
import List from 'components/common/List';
import ListRow from 'components/common/List/ListRow';
import ListItem from 'components/common/List/ListItem';
import useLocations from 'hooks/useLocations';

export default function Locations() {
  const { error, requesting, locations } = useLocations();

  return (
    <div className={styles.root}>
      <Header />
      <List>
        <ListRow isHeader>
          <ListItem>LOCATION</ListItem>
          <ListItem>DISTANCE</ListItem>
        </ListRow>
        <div className={styles.scrollArea}>
          {error && (
            <ListRow>
              <ListItem>{error}</ListItem>
            </ListRow>
          )}
          {requesting && (
            <ListRow>
              <ListItem>Getting results...</ListItem>
            </ListRow>
          )}
          {locations &&
            locations.map(({ location, distance }, i) => (
              <ListRow key={`${i}-${location}`}>
                <ListItem>{location}</ListItem>
                <ListItem>{`${distance} km`}</ListItem>
              </ListRow>
            ))}
        </div>
      </List>
    </div>
  );
}
