import { useState } from "react";
import { fileExplorerData } from "../../db/fileExplorerData";
import useTraverseTree from "../../hooks/useTraverseTree";
import Folder from "../FileExplorer/Folder";
const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(fileExplorerData);
  const { insertNode, deleteNode, renameNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  const handleDeleteNode = (itemId) => {
    const finalTree = deleteNode(explorerData, itemId);
    setExplorerData(finalTree);
  };
  const handleRenameNode = (itemId, newName) => {
    const finalTree = renameNode(explorerData, itemId, newName);
    setExplorerData(finalTree);
  };

  return (
    <div className="max-w-lg mx-auto my-16">
      <div  className="file-explorer ">
          <h3 className="text-2xl font-bold  my-6 flex flex-col justify-center items-center">
            File Explorer
          </h3>
        <Folder
          explorerData={explorerData}
          handleInsertNode={handleInsertNode}
          handleDeleteNode={handleDeleteNode}
          handleRenameNode={handleRenameNode}
        />
      </div>
    </div>
  );
};

export default FileExplorer;
