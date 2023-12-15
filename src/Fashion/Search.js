import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Styles from './Fashion.module.css'
import { connect } from 'react-redux';
import { setSearch } from '../ReduxStore/Reducer';

function Search({setSearch}) {

    let [searchvalue,setSearchValue] = useState('')
    // console.log(searchvalue)

    var handlesearch=(e)=>{
        var value = e.target.value
        setSearchValue(value)
        setSearch(value)
        
    }

  return (
   <>
   <div className={Styles.searchbar}>
   <input type='text' placeholder='Search Items' title='Search for Items in Here'
    onChange={handlesearch}/>
   <FontAwesomeIcon className={Styles.searchIcon} icon={faSearch}/>
   </div>
   </>
  )
}

let mapStateToProps=(state)=>{
    return {
        search:state.search
    }
   
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setSearch:(searchvalue)=>{dispatch(setSearch(searchvalue))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
