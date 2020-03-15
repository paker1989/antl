import React from "react";
import { Card, Select, List, Avatar } from "antd";

import "./roster.less";

const { Option } = Select;

const teamSelects = ["LA Lakers", "LA Clippers", "Miami", "New Orleans"];
const positionSelects = [
  {
    label: "Forward",
    value: "forward"
  },
  {
    label: "Guard",
    value: "guard"
  },
  {
    label: "Center",
    value: "center"
  }
];
const players = [
  {
    nm: "Lebron james",
    pos: "forward",
    number: 23,
    avatar:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&h=96&w=96&scale=crop"
  },
  {
    nm: "Anthony Davis",
    pos: "forward",
    number: 3,
    avatar:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&h=96&w=96&scale=crop"
  },
  {
    nm: "Kyle Kuzma",
    pos: "forward",
    number: 0,
    avatar:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134907.png&h=80&w=110&scale=crop"
  },
  {
    nm: "Markieff Morris",
    pos: "forward",
    number: 88,
    avatar:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6461.png&h=80&w=110&scale=crop"
  },
  {
    nm: "Alex Caruso",
    pos: "guard",
    number: 4,
    avatar:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991350.png&h=80&w=110&scale=crop"
  },
  {
    nm: "Danny Green",
    pos: "guard",
    number: 14,
    avatar:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3988.png&h=80&w=110&scale=crop"
  }
];
export default () => {
  return (
    <Card
      className="roster-card"
      title="Switch Player"
      actions={[
        <a href="https://www.espn.com/nba/team/roster/_/name/lal/los-angeles-lakers">
          Full roster
        </a>
      ]}
    >
      <div className="roster-content">
        <div className="roster-selects">
          <Select placeholder="Select a team" className="select-prop">
            {teamSelects.map((item, index) => (
              <Option value={item} key={`team-${index}`}>
                {item}
              </Option>
            ))}
          </Select>
          <Select placeholder="Select position" className="select-prop">
            {positionSelects.map((item, index) => (
              <Option value={item.value} key={`position-${index}`}>
                {item.label}
              </Option>
            ))}
          </Select>
        </div>
        <List
          dataSource={players}
          renderItem={(item, index) => {
            return (
              <List.Item style={{ padding: "5px 0", border: "none" }}>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={item.avatar}
                      size={44}
                      shape="circle"
                      style={{ border: "1px solid #f1f2f3" }}
                    />
                  }
                  description={`#${item.number}`}
                  title={item.nm}
                />
              </List.Item>
            );
          }}
        ></List>
      </div>
    </Card>
  );
};
