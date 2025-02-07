import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function EducationTimeline() {
  return (
    <Timeline position="alternate ">
      {/* College */}
        <TimelineItem>
            <TimelineOppositeContent className='dark:text-white text-gray-600'>
            Present
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className='dark:text-white text-gray-600' >KSR College of Engineering</TimelineContent>
        </TimelineItem>

      {/* HSC */}
      <TimelineItem>
        <TimelineOppositeContent className='dark:text-white text-gray-600'>
          KSR Matric Hr Sec School
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='dark:text-white text-gray-600'>2022</TimelineContent>
      </TimelineItem>

      {/* SSLC */}
      <TimelineItem>
        <TimelineOppositeContent className='dark:text-white text-gray-600'>
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent className='dark:text-white text-gray-600'>Vani Vidyalaya Matric Hr Sec School</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
