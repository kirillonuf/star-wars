import React from 'react';
import PropTypes from 'prop-types';

import styles from './PersonDescription.module.css';

const PersonDescription = ({person}) => {
  return (
    <div className={styles.description}>
          {person && (
            <ul className={styles.description_list}>
              {  person.map(({ title, data }) => {
                    
                  return( <li key={title}>
                        <span>{title}: {data}</span>
                      </li>)
                    
                })
              }
            </ul>
          )}
        </div>
  );
}

 PersonDescription.propTypes = {
    person: PropTypes.array,
}
export default PersonDescription;