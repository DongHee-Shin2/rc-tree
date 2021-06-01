import Tree, { TreeNode } from 'rc-tree';
import { useEffect, useRef, useState } from 'react';
import "./tree.css";

//https://tree-react-component.vercel.app/
export default function App() {

  const [expandedKeys,setExpandedKeys]  = useState([]);
  const [selectedKeys,setSelectedKeys]  = useState([]);
  const [checkedKeys,setCheckedKeys]  = useState([]);
  // const [bexpandedKeys,setBexpandedKeys]  = useState([]);
  const [sch,setSch] = useState("");
  

  const treeData = [
    {
      key: '0-0',
      title: 'parent 1',
      children: [
        { key: '0-0-0', title: 'parent 1-1', children: [{ key: '0-0-0-0', title: 'parent 1-1-0' }] },
        {
          key: '0-0-1',
          title: 'parent 1-2',
          children: [
            { key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true },
            { key: '0-0-1-1', title: 'parent 1-2-1' },
            { key: '0-0-1-2', title: 'parent 1-2-2' },
            { key: '0-0-1-3', title: 'parent 1-2-3' },
            { key: '0-0-1-4', title: 'parent 1-2-4' },
            { key: '0-0-1-5', title: 'parent 1-2-5' },
            { key: '0-0-1-6', title: 'parent 1-2-6' },
            { key: '0-0-1-7', title: 'parent 1-2-7' },
            { key: '0-0-1-8', title: 'parent 1-2-8' },
            { key: '0-0-1-9', title: 'parent 1-2-9' },
            { key: 1128, title: 1128 },
          ],
        },
      ],
    },
  ];
  // useEffect(() => {
  //   setExpandedKeys([...bexpandedKeys, ...selectedKeys]);
  // },[bexpandedKeys,selectedKeys]);
  const treeRef = useRef();
  // let selKey;
  // const onSelect = (selectedKeys, info) => {
  //   console.log('selected', selectedKeys, info);
  //   selKey = info.node.props.eventKey;
  //   setSelectedKeys(selectedKeys);
  // };
  return <div style={{padding:20}}>
    <div><span>expandedKeys : </span><span>{expandedKeys.join(",")}</span></div>
    <div><span>selectedKeys : </span><span>{selectedKeys.join(",")}</span></div>
    <div><span>checkedKeys : </span><span>{checkedKeys.join(",")}</span></div>
    
    <div><button onClick={(e) => {setSelectedKeys(["0-0-1-6"]);setExpandedKeys([ ...expandedKeys, "0-0-1-6"])}}>0-0-1-6 open</button></div>
    <input type="text" onChange={e => setSch(e.target.value)}/>
    <Tree autoExpandParent
        ref={treeRef}
        className="myCls"
        treeData={treeData}
        // onSelect={onSelect}
        // height={150}
        checkable
        checkedKeys={checkedKeys}
        expandedKeys={expandedKeys}
        selectedKeys={selectedKeys}
        onCheck={e=>setCheckedKeys(e)}
        onExpand={e=>setExpandedKeys(e)}
        onSelect={e=>setSelectedKeys(e)}

        filterTreeNode={e=>{
          if (sch.length < 1) return false;
          try {
            console.log(e.title.indexOf(sch) > -1)
            return e.title.indexOf(sch) > -1;
          } catch (err) {
            return false;
          }
        }}
      />
  </div>
}