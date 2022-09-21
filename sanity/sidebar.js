import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default function Sidebar() {
  return (
    S.list()
      .title(`Earth's Crust`)
      // creating custom sidebar list
      .items([
        S.listItem()
          .title('Home Page')
          .icon(() => <strong>🌱</strong>)
          .child(S.editor().schemaType('storeSettings').documentId('hillside')),
        ...S.documentTypeListItems().filter(
          (item) => item.getId() !== 'storeSettings'
        ),
      ])
  );
}
