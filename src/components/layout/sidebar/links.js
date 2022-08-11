import { Icon } from '@chakra-ui/react';
import React from 'react';
import { BiCalendar, BiCollection, BiEdit } from 'react-icons/bi';
import { BsEnvelope } from 'react-icons/bs';
import { GiHotMeal, GiMedicinePills } from 'react-icons/gi';
import { ImLab, ImUsers } from 'react-icons/im';
import { MdOutlineInsertChartOutlined } from 'react-icons/md';
import { TbLink } from 'react-icons/tb';

export default [
  {
    label: 'Dashboard',
    icon: (
      <Icon
        w="24px"
        h="24px"
        as={MdOutlineInsertChartOutlined}
        fontWeight={700}
        color="inherit"
      />
    ),
    path: '/dashboard',
  },

  {
    label: 'Clients',
    icon: (
      <Icon w="24px" h="24px" as={ImUsers} fontWeight={700} color="inherit" />
    ),
    path: '/clients',
  },
  {
    label: 'Invitations',
    icon: (
      <Icon
        w="23.75px"
        h="24px"
        as={BiCollection}
        fontWeight={700}
        color="inherit"
      />
    ),
    path: '/invitations',
  },
  {
    label: 'Tests',
    icon: (
      <Icon w="17.74px" h="24px" as={ImLab} fontWeight={700} color="inherit" />
    ),
    path: '/tests',
  },
  {
    label: 'Supplements',
    icon: (
      <Icon
        w="23.88px"
        h="23.88px"
        as={GiMedicinePills}
        fontWeight={700}
        color="inherit"
      />
    ),
    path: '/supplements',
  },
  {
    label: 'Consultations',
    icon: (
      <Icon
        w="22.15px"
        h="23.26px"
        as={BiCalendar}
        fontWeight={700}
        color="inherit"
      />
    ),
    path: '/consultations',
  },
  {
    label: 'Foods',
    icon: (
      <Icon
        w="24px"
        h="21.82px"
        as={GiHotMeal}
        fontWeight={700}
        color="inherit"
      />
    ),
    path: '/foods',
  },
  {
    label: 'Resources',
    icon: (
      <Icon w="21px" h="23px" as={TbLink} fontWeight={700} color="inherit" />
    ),
    path: '/resources',
  },
  {
    label: 'Community',
    icon: (
      <Icon
        w="23.84px"
        h="23.84px"
        as={BiEdit}
        fontWeight={700}
        color="inherit"
      />
    ),
    path: '/community',
  },
  {
    label: 'Messaging',
    icon: (
      <Icon
        w="24px"
        h="19.64px"
        as={BsEnvelope}
        fontWeight={700}
        color="inherit"
      />
    ),
    path: '/messaging',
  },
  {
    label: 'Commissions',
    icon: (
      <Icon w="24px" h="24px" as={ImUsers} fontWeight={700} color="inherit" />
    ),
    path: '/commissions',
  },
];
