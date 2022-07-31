function TagShow({tag_arr}){

    const arraytag = tag_arr.split(',');

    const tagArray = () => {
    var array = [];
    for (var i = 0; i < arraytag.length; i++) {
      array.push(<span>{arraytag[i]} | </span>);
    }

    return array;
  };

  return(
    <>{tagArray()}</>
  );
}

export default TagShow;