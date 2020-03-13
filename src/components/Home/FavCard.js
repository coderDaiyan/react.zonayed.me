import React from "react";
import { Link } from "react-router-dom";

import { basicFilter } from "../../utils/textFilter";

import heart from "../../assets/heart.svg";

export default ({ title, contentDir }) => (
  <li>
    <h4>
      <Link
        to={{
          pathname: `/react/${basicFilter(title)}`,
          state: {
            contentDir: `react/${contentDir}`
          }
        }}
      >
        {basicFilter(title)}
      </Link>
    </h4>
    <img alt="পছন্দ" src={heart} />
  </li>
);
