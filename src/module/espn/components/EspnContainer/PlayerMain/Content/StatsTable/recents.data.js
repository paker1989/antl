import React from "react";
import cx from "classnames";

export const dataSource = [
  {
    key: 1,
    date: "Wed 3/11",
    opp: {
      link:
        "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bkn.png&h=40&w=40",
      team: "BKN",
      away: false
    },
    result: {
      self: 110,
      opp: 112
    },
    mn: 34.9,
    "fg%": 55.1,
    "3p%": 36.9,
    "ft%": 73.5,
    reb: 8,
    ast: 12,
    blk: 0,
    stl: 2,
    pf: 3,
    to: 0,
    pts: 33
  },
  {
    key: 2,
    date: "Sun 3/8",
    opp: {
      link:
        "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lac.png&h=40&w=40",
      team: "LAC",
      away: true
    },
    result: {
      self: 114,
      opp: 112
    },
    mn: 37,
    "fg%": 55.1,
    "3p%": 36.9,
    "ft%": 73.5,
    reb: 6,
    ast: 11,
    blk: 2,
    stl: 1,
    pf: 2,
    to: 3,
    pts: 29
  },
  {
    key: 3,
    date: "Sat 3/7",
    opp: {
      link:
        "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mil.png&h=40&w=40",
      team: "MIL",
      away: false
    },
    result: {
      self: 121,
      opp: 108
    },
    mn: 34,
    "fg%": 78.3,
    "3p%": 20,
    "ft%": 73.5,
    reb: 12,
    ast: 11,
    blk: 0,
    stl: 2,
    pf: 3,
    to: 5,
    pts: 37
  }
];

export const columns = [
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
    // width: 100,
  },
  {
    title: "OPP",
    dataIndex: "opp",
    key: "opp",
    render: (text, record, index) => {
      return (
        <div key={`opp-${index}`} className="opp-wrapper">
          <span className="vs">{text.away ? "vs" : "@"}</span>
          <img src={text.link} alt={text.team} />
          <span>{text.team}</span>
        </div>
      );
    }
  },
  {
    title: "RESULT",
    dataIndex: "result",
    key: "result",
    width: 90,
    render: (text, record, index) => {
      const isLose = text.self - text.opp < 0;
      const resCls = cx({
        'mark': true,
        "is-lose": isLose
      });
      return (
        <div key={`result-${index}`} className="result-wrapper">
          <span className={resCls}>{isLose ? "L" : "W"}</span>
          <a href={`https://result?${index}`}>{`${text.self} - ${text.opp}`}</a>
        </div>
      );
    }
  },
  {
    title: "MN",
    dataIndex: "mn",
    key: "mn"
  },
  {
    title: "FG%",
    dataIndex: "fg%",
    key: "fg%"
  },
  {
    title: "3P%",
    dataIndex: "3p%",
    key: "3p%"
  },
  {
    title: "FT%",
    dataIndex: "ft%",
    key: "ft%"
  },
  {
    title: "REB",
    dataIndex: "reb",
    key: "reb"
  },
  {
    title: "AST",
    dataIndex: "ast",
    key: "ast"
  },
  {
    title: "BLK",
    dataIndex: "blk",
    key: "blk"
  },
  {
    title: "STL",
    dataIndex: "stl",
    key: "stl"
  },
  {
    title: "PF",
    dataIndex: "pf",
    key: "pf"
  },
  {
    title: "TO",
    dataIndex: "to",
    key: "to"
  },
  {
    title: "PTS",
    dataIndex: "pts",
    key: "pts"
  }
];
