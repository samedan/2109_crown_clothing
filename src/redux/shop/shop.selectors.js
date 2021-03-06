import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  // WORKS
  // createSelector([selectCollections], (collections) => {
  //   return collections.find((collection) => {
  //     return collection.routeName === collectionUrlParam;
  //   });
  // });
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// createSelector([selectCollections], (collections) =>
//   collections.find(
//     (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//   )
// );

export const selectIsCollectionFetching = createSelector(
  // we want the shop {}
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  // !!0 = false  !!null = false !!' = false
  // truthy, true only if there is smth
  (shop) => !!shop.collections
);
