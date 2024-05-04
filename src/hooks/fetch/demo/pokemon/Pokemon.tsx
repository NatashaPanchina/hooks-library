import React from 'react';
import styles from './Pokemon.module.css';

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const renderTypes = (types: Array<Type>) => {
  return types.map((type, index) => {
    return (
      <span key={index} className={`${styles.type} ${styles[type.type.name]}`}>
        {type.type.name}
      </span>
    );
  });
};

interface AbilityType {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

const renderAbilities = (abilities: Array<AbilityType>) => {
  return abilities
    .filter((item) => !item.is_hidden)
    .map((item) => {
      return (
        <span key={item.ability.name} className={styles.ability}>
          {item.ability.name}
        </span>
      );
    });
};

interface PropsType {
  data: {
    abilities: Array<AbilityType>;
    id: number;
    name: string;
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
    types: Array<Type>;
  };
}

export default function Pokemon({ data }: PropsType) {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={data ? data.sprites.other[`official-artwork`].front_default : ''}
      />
      <div>
        <span className={styles.name}>{data ? data.name : ''}</span>
        <span className={styles.number}>№ {data ? data.id : ''}</span>
        <div>
          <div className={styles.block_title}>Type</div>
          {data ? renderTypes(data.types) : ''}
        </div>
        <div>
          <div className={styles.block_title}>Abilities:</div>
          <div className={styles.abilities}>
            {data ? renderAbilities(data.abilities) : ''}
          </div>
        </div>
      </div>
    </div>
  );
}
