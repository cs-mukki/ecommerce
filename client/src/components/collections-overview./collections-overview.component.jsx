import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      <CollectionPreview collections={collections} />
    </div>
  );
};

export default CollectionsOverview;
