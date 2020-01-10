import React from 'react'

const Search = () => {

  return (
    <div className="header_search header_items-position">
     <div id="wrap">
        <form action="" autocomplete="on">
        <input id="search" name="search" type="text" placeholder="What're we looking for ?"/><input id="search_submit" value="Rechercher" type="submit"/>
        </form>
      </div>
    </div>
  )
}

export default Search;
