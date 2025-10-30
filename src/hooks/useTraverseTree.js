const useTraverseTree = () => {
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      if (tree.items.find((i) => i.name === item && i.isFolder === isFolder)) {
        //alert("already added");
      } else {
        tree.items.unshift({
          id: new Date().getTime(),
          name: item,
          isFolder: isFolder,
          // items: [],
          ...(isFolder && { items: [] }),
        });
      }
      return tree;
    }

    let latestNode = [];
    latestNode = tree?.items?.map((object) => {
      return insertNode(object, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const deleteNode = (tree, itemId) => {
    if (tree.id === itemId) {
      delete tree.id;
      delete tree.name;
      delete tree.isFolder;
      delete tree?.items;
      return tree;
    }
    tree?.items?.map((obj) => deleteNode(obj, itemId));
    return { ...tree };
  };

  const renameNode = (tree, itemId, newName) => {
    if (tree.id === itemId) {
      tree.name = newName;
      return tree;
    }
    tree?.items?.map((obj) => renameNode(obj, itemId, newName));
    return { ...tree };
  };

  return { insertNode, deleteNode, renameNode };
};

export default useTraverseTree;
