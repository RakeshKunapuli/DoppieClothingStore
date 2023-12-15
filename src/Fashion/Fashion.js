import Data from "../Data.json";
import React, { useState, useEffect, useCallback,useMemo } from "react";
import Search from "./Search";
import Styles from "./Fashion.module.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
function Fashion({ search }) {
  let [data, setData] = useState();

  let navigate = useNavigate()


        let filteredData = useMemo(()=>{
          return Data.filter((item) => {
            return (
              item.isAccessory !== true &&
              (item.category === "skincare" ||
                item.category !== "groceries" &&
                item.category !== "home-decoration")
            );
          });
        },[])

         const searchFilter = useMemo(() => {
    if (search.length > 0) {
      return filteredData.filter((item) =>
        item.title?.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return filteredData;
    }
  }, [search, filteredData]);

  useEffect(() => {
    setData(searchFilter);
  }, [searchFilter]);

  return (
    <>
      <Search />

      <div className={Styles.productsContainer}>
        {data &&
          data.map((items, i) => {
            return (
              <div className={Styles.productitems} key={i} onClick={()=>(navigate(`/details/${items.id}`))}>
                <img src={items.thumbnail} alt={items.title} loading="lazy" />
                <h6>{items.title}</h6>
                <p>
                  <span style={{ color: "rgb(15, 230, 15)" }}>
                    <b>Rs {items.price}</b>
                  </span>{" "}
                  <span style={{ opacity: "0.5" }}>
                    <b>
                      Rs<s> {items.price}</s>
                    </b>
                  </span>
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

export default connect(mapStateToProps)(Fashion);


