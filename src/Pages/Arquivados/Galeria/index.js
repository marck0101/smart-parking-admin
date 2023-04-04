import React, { useState } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photo from "./Photo";
import { photos } from "./photos";

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));

export default function Galeria() {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div>
      <h2>Sortable Gallery</h2>
      <h3>Drag photo to rearrange</h3>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
}
