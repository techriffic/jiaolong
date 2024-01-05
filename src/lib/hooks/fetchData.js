import React from "react";
import { client } from "../client";

const useFetchData = () => {
    const [data, setData ] = React.useState();

  const siteName = process.env.REACT_APP_SITE_NAME;

    React.useEffect(() => {
      const fetchData = () => {
        const query = `*[_type == "website" && website_name == "${siteName}" ][0]`;
        client.fetch(query).then((result) => {
         setData(result)
        });  
      }
      fetchData();
    }, [siteName]);

    const finalData = data ? data : 'loading...';

    return finalData;

}

export default useFetchData;