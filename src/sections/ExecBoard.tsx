import React from 'react';
import advisor from '../images/execboard/advisor.webp';
import cow1 from '../images/execboard/cow1.webp';
import cow2 from '../images/execboard/cow2.webp';
import cow3 from '../images/execboard/cow3.webp';
import cow4 from '../images/execboard/cow4.webp';
import cow5 from '../images/execboard/cow5.webp';
import cow6 from '../images/execboard/cow6.webp';
import cow7 from '../images/execboard/cow7.webp';
import cow8 from '../images/execboard/cow8.webp';
import eventcoordinator from '../images/execboard/eventcoordinator.webp';
import president from '../images/execboard/president.webp';
import publicrelations from '../images/execboard/publicrelations.webp';
import secretary from '../images/execboard/secretary.webp';
import treasurer from '../images/execboard/treasurer.webp';
import vicepresident from '../images/execboard/vicepresident.webp';


import { exec_board, exec_board_parent, profile, profile_bio } from './ExecBoard.module.scss';


function ExecBoard() {
  return (
    <div className={exec_board_parent}>
      <div className={exec_board}>
        <ExecItem
          name='Angelina Madonna'
          avatar={president}
          position='President'
        />
        <ExecItem
          name='Izzy Jackson'
          avatar={vicepresident}
          position='Vice President'
        />
        <ExecItem
          name='Dwarka Akash'
          position='Webmaster'
        />
        <ExecItem
          name='Mrs. Melissa Kiehl'
          avatar={advisor}
          position='Faculty Advisor'
        />
        <ExecItem
          name='Emma Ashfield'
          avatar={secretary}
          position='Secretary'
        />
        <ExecItem
          name='Mia Benedetto'
          avatar={treasurer}
          position='Treasurer'
        />
        <ExecItem
          name='Sarah Bach'
          avatar={publicrelations}
          position='Public Relations'
        />
        <ExecItem
          name='Justice Ortegon'
          avatar={eventcoordinator}
          position='Event Coordinator'
        />
      </div>
    </div>
  );
}

type Role = 'President' | 'Vice President' | 'Webmaster' | 'Faculty Advisor' | 'Secretary' | 'Treasurer' | 'Public Relations' | 'Event Coordinator';
const defaultImages = {
  'President': cow1,
  'Vice President': cow2,
  'Webmaster': cow3,
  'Faculty Advisor': cow4,
  'Secretary': cow5,
  'Treasurer': cow6,
  'Public Relations': cow7,
  'Event Coordinator': cow8,
};

const ExecItem: React.FC<{ name: string, position: Role, avatar?: string, nationalRole?: 'Z3 AZC' | 'Z3 ZC' }> = ({ name, position, avatar = defaultImages[position], nationalRole }) => {
  let role = position;
  if (nationalRole) role += ` / ${nationalRole}`;

  return (
    <div className={profile}>
      <img src={avatar} alt={`${name} - ${role}`} width={200} height={200} />
      <div className={profile_bio}>
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default ExecBoard;
