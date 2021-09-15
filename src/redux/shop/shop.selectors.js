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
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

// createSelector([selectCollections], (collections) =>
//   collections.find(
//     (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//   )
// );
