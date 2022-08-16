function TagShow({ tag_arr }) {
  const arraytag = tag_arr.split(',');

  const tagArray = () => {
    let array = [];
    for (var i = 0; i < arraytag.length - 1; i++) {
      array.push(<span>{arraytag[i]} | </span>);
    }

    array.push(<span>{arraytag[arraytag.length - 1]} </span>);

    return array;
  };

  return <>{tagArray()}</>;
}

export default TagShow;
