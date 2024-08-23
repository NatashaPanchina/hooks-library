import { AbilityType, PokemonsType, Type } from '../../types';
import styles from './Pokemon.module.css';

const renderTypes = (types: Array<Type>) => {
  return types.map((type, index) => {
    return (
      <span key={index} className={`${styles.type} ${styles[type.type.name]}`}>
        {type.type.name}
      </span>
    );
  });
};

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

export default function Pokemon({ data }: PokemonsType) {
  return (
    <div className={styles.container}>
      <img
        alt="pokemon-picture"
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
