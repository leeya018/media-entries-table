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
  const [filteredList, setFilteredList] = useState([]);

  let [filterTxt, setFilterTxt] = useState("");
  const [orderByDate, setOrderByDate] = useState(true);

  useEffect(() => {
    kaltura.services.session
      .start(
        process.env.REACT_APP_SECRET,
        "leeyahav018@gmail.com",
        kaltura.enums.SessionType.ADMIN,
        "*****"
      )
      .completion((success, ks) => {
        if (!success) throw new Error(ks.message);
        client.setKs(ks);
        let filter = new kaltura.objects.MediaEntryFilter();
        let {
          CREATED_AT_DESC,
          CREATED_AT_ASC,
        } = kaltura.enums.MediaEntryOrderBy;
        filter.orderBy = orderByDate ? CREATED_AT_ASC : CREATED_AT_DESC;
        filter.freeText = filterTxt;

        let pager = new kaltura.objects.FilterPager();
        pager.pageSize = 20;
        kaltura.services.media
          .listAction(filter, pager)
          .execute(client)
          .then((result) => {
            let newList = result.objects.map((entry) => {
              return {
                thumbnailUrl: entry.thumbnailUrl,
                name: entry.name,
                id: entry.id,
                duration: entry.duration,
                createdAt: entry.createdAt,
              };
            });
            console.log(newList);
            setList(newList);
          });
      })
      .execute(client);
  }, []);

  useEffect(() => {
    let tempList = list
      .filter((entry) => {
        return entry.name.includes(filterTxt);
      })
      .sort((entryA, entryB) => {
        if (orderByDate) {
          return entryA.createdAt - entryB.createdAt;
        } else {
          return entryB.createdAt - entryA.createdAt;
        }
      });
    setFilteredList(tempList);
  }, [filterTxt, orderByDate]);

  return (
    <div className="container">
      <Filter onChangeFilter={setFilterTxt} />
      <SortDate
        OnChangeOrderByDate={setOrderByDate}
        orderByDate={orderByDate}
      />
      <Table list={filteredList} />
    </div>
  );
}
