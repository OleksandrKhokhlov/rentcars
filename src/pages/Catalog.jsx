import { CatalogCars } from 'components/Catalog/Catalog';
import { Filter } from 'components/Filter/Filter';

export default function CatalogPage() {
  return (
    <>
      <Filter />
      <CatalogCars />
      <button type="button">Load more</button>
    </>
  );
}
