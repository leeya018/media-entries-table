import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import SortDate from "./SortDate";
import Table from "./Table";

const kaltura = require("kaltura-client");
const config = new kaltura.Configuration();
config.serviceUrl = "https://www.kaltura.com";
const client = new kaltura.Client(config);


export default function MyEntries() {
  const [list, setList] = useState([]);
  let [filterTxt, setFilterTxt] = useState("");
  const [orderByDate, setOrderByDate] = useState(true)


  useEffect(() => {
    kaltura.services.session
      .start(
        "6652589ed23b9d70c418bba0bc74bcb6",
        "leeyahav018@gmail.com",
        kaltura.enums.SessionType.ADMIN,
        3219113
      )
      .completion((success, ks) => {
        if (!success) throw new Error(ks.message);
        client.setKs(ks);
        let filter = new kaltura.objects.MediaEntryFilter();
        let {CREATED_AT_DESC,CREATED_AT_ASC} = kaltura.enums.MediaEntryOrderBy
        filter.orderBy = orderByDate ? CREATED_AT_ASC : CREATED_AT_DESC ;
        // console.log(kaltura.enums.Me diaEntryOrderBy)
        filter.freeText = filterTxt;
        let pager = new kaltura.objects.FilterPager();

        kaltura.services.media
          .listAction(filter, pager)
          .execute(client)
          .then((result) => {
            console.log(result);
            let newList = result.objects.map((entry) => {
              return {
                thumbnailUrl: entry.thumbnailUrl,
                name: entry.name,
                id: entry.id,
                duration: entry.duration,
              };
            });
            setList(newList);
          });
      })
      .execute(client);
  }, [filterTxt,orderByDate]);
  return (
    <div className="container">
      <Filter onChangeFilter={setFilterTxt} />
      <SortDate OnChangeOrderByDate={setOrderByDate} orderByDate={orderByDate}/>
      <Table list={list}/>
    </div>
  );
}
